(function () {
    
    function $(sel) { return document.querySelector(sel); }

    
    function ensureContainer() {
        let container = document.getElementById('effect-badges');
        if (!container) {
            container = document.createElement('div');
            container.id = 'effect-badges';
            container.style.position = 'absolute';
            container.style.inset = '0';
            container.style.pointerEvents = 'none';
            container.style.zIndex = 1200;
            document.body.appendChild(container);

            
            const pg = document.createElement('div');
            pg.id = 'effect-badges-player-group';
            pg.style.position = 'absolute';
            pg.style.pointerEvents = 'none';
            container.appendChild(pg);

            const eg = document.createElement('div');
            eg.id = 'effect-badges-enemy-group';
            eg.style.position = 'absolute';
            eg.style.pointerEvents = 'none';
            container.appendChild(eg);

            
            const style = document.createElement('style');
            style.id = 'effect-badges-styles';
            style.textContent = `
                .effect-badge {
                    position: absolute;
                    min-width: 72px;
                    max-width: 220px;
                    padding: 6px 8px;
                    border-radius: 8px;
                    font-family: Orbitron, monospace;
                    font-weight: 800;
                    font-size: 0.78rem;
                    color: #FFF;
                    background: linear-gradient(90deg,#c93 0%,#a33 100%);
                    box-shadow: 0 6px 18px rgba(0,0,0,0.6), inset 0 0 8px rgba(255,255,255,0.04);
                    pointer-events: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: opacity 220ms ease, transform 220ms ease;
                    opacity: 0;
                    white-space: nowrap;
                }
                .effect-badge.show {
                    opacity: 1;
                }
                .effect-badge .label {
                    margin-right: 6px;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                }
                .effect-badge .count {
                    background: rgba(255,255,255,0.08);
                    padding: 2px 6px;
                    border-radius: 999px;
                    font-size: 0.72rem;
                    color: #FFF;
                }
                .effect-badge.bleeding {
                    background: linear-gradient(90deg,#ff5b5b 0%, #c62828 100%);
                    box-shadow: 0 8px 20px rgba(198,40,40,0.28), inset 0 0 10px rgba(255,160,160,0.04);
                }
                .effect-badge.karma {
                    background: linear-gradient(90deg,#ff4dbb 0%, #c4009f 100%);
                    box-shadow: 0 10px 24px rgba(196,40,150,0.28), inset 0 0 12px rgba(255,150,230,0.06);
                }

                /* Vulnerable: sky-blue badge to indicate target takes +25% damage */
                .effect-badge.vulnerable {
                    background: linear-gradient(90deg, #8fd3ff 0%, #5ec8ff 100%);
                    box-shadow: 0 10px 22px rgba(94,200,255,0.22), inset 0 0 10px rgba(220,245,255,0.06);
                    color: #002233;
                }

                /* Vulnerable: sky-blue badge to indicate target takes +25% damage */
                .effect-badge.vulnerable {
                    background: linear-gradient(90deg, #8fd3ff 0%, #5ec8ff 100%);
                    box-shadow: 0 10px 22px rgba(94,200,255,0.22), inset 0 0 10px rgba(220,245,255,0.06);
                    color: #002233;
                }
                .effect-badge.cursed {
                    background: linear-gradient(90deg, #ffffff 0%, #000000 100%);
                    color: #000;
                    box-shadow: 0 10px 28px rgba(0,0,0,0.28), inset 0 0 8px rgba(255,255,255,0.06);
                }
                .effect-badge.regen {
                    background: linear-gradient(90deg,#6be56b 0%, #2fa92f 100%);
                    box-shadow: 0 8px 22px rgba(50,160,50,0.22), inset 0 0 10px rgba(200,255,200,0.04);
                }
                .effect-badge.enhanced {
                    background: linear-gradient(90deg, #1a237e 0%, #0d47a1 100%);
                    color: #E8F0FF;
                    box-shadow: 0 10px 24px rgba(13,71,161,0.28), inset 0 0 12px rgba(30,60,160,0.12);
                }

                .effect-badge.protected {
                    background: linear-gradient(90deg, #ffd700 0%, #b8860b 100%);
                    box-shadow: 0 10px 24px rgba(184,134,11,0.28), inset 0 0 10px rgba(255,215,0,0.06);
                    color: #1a1a00;
                }
                .effect-badge.protected .label::before {
                    content: '→ ';
                    font-weight: 900;
                }

                /* stacking helper: when badges are placed inside group containers we will position them top-down */
                #effect-badges-player-group, #effect-badges-enemy-group {
                    position: absolute;
                    pointer-events: none;
                }
            `;
            document.head.appendChild(style);
        }
        return container;
    }

    
    function ensureBadge(side, idx) {
        ensureContainer();
        const groupId = side === 'player' ? 'effect-badges-player-group' : 'effect-badges-enemy-group';
        const group = document.getElementById(groupId);
        const id = `effect-badge-${side}-${idx}`;
        let el = document.getElementById(id);
        if (!el) {
            el = document.createElement('div');
            el.className = 'effect-badge';
            el.id = id;
            el.innerHTML = `<span class="label"></span><span class="count"></span>`;
            group.appendChild(el);
        }
        return el;
    }

    function hideExtraBadges(side, fromIndex) {
        const groupId = side === 'player' ? 'effect-badges-player-group' : 'effect-badges-enemy-group';
        const group = document.getElementById(groupId);
        if (!group) return;
        
        Array.from(group.children).forEach(child => {
            const m = child.id.match(new RegExp(`^effect-badge-${side}-(\\d+)$`));
            if (m) {
                const i = Number(m[1]);
                if (i >= fromIndex) {
                    child.classList.remove('show');
                    child.style.opacity = '0';
                }
            }
        });
    }

    function updateBadge(el, { label, count, visible, left, top, type }) {
        if (!el) return;
        const lbl = el.querySelector('.label');
        const cnt = el.querySelector('.count');
        if (lbl) lbl.textContent = label || '';
        if (cnt) cnt.textContent = (typeof count === 'number' && count !== '') ? count : (count || '');
        el.classList.remove('bleeding', 'karma', 'cursed', 'regen', 'enhanced', 'vulnerable', 'protected');
        if (type === 'bleeding') el.classList.add('bleeding');
        if (type === 'karma') el.classList.add('karma');
        if (type === 'cursed') el.classList.add('cursed');
        if (type === 'regen') el.classList.add('regen');
        if (type === 'enhanced') el.classList.add('enhanced');
        if (type === 'vulnerable') el.classList.add('vulnerable');
        if (type === 'protected') el.classList.add('protected');

        if (typeof left === 'number') el.style.left = `${Math.round(left)}px`;
        if (typeof top === 'number') el.style.top = `${Math.round(top)}px`;

        if (visible) {
            el.classList.add('show');
            el.style.opacity = '1';
        } else {
            el.classList.remove('show');
            el.style.opacity = '0';
        }
    }

    
    function gatherSideEffects(gs, side) {
        const out = [];
        try {
            if (!gs) return out;
            
            if (gs.effects && Array.isArray(gs.effects[side])) {
                if (gs.effects[side].includes('ENHANCED')) out.push({ label: 'ENHANCED', count: '', type: 'enhanced' });
            }
            const curse = gs.curses && gs.curses[side] && gs.curses[side].active;
            if (curse) {
                const c = gs.curses[side];
                out.push({ label: 'CURSED', count: (typeof c.turns === 'number') ? c.turns : '', type: 'cursed' });
            }
            const karma = gs.karmas && gs.karmas[side] && gs.karmas[side].active;
            if (karma) {
                const k = gs.karmas[side];
                const remaining = (typeof k.total === 'number' && typeof k.accumulated === 'number') ? Math.max(0, k.total - k.accumulated) : (k.total || '');
                out.push({ label: 'KARMA', count: remaining, type: 'karma' });
            }
            const bleed = gs.bleeds && gs.bleeds[side] && gs.bleeds[side].active;
            if (bleed) {
                const b = gs.bleeds[side];
                const remaining = (typeof b.totalRemaining === 'number') ? b.totalRemaining : (b.totalRemaining || b.accumulated || '');
                out.push({ label: 'Bleeding', count: remaining, type: 'bleeding' });
            }
            const regen = gs.regens && gs.regens[side] && gs.regens[side].active;
            if (regen) {
                const r = gs.regens[side];
                const remaining = (typeof r.totalRemaining === 'number') ? r.totalRemaining : (r.accumulated || '');
                
                const entity = (side === 'player') ? gs.player : gs.enemy;
                const regenLabel = (entity && entity.name === 'Jaquavius') ? 'AURA' : 'REGEN';
                out.push({ label: regenLabel, count: remaining, type: 'regen' });
            }

            
            try {
                const vuln = gs && gs.vulnerable && gs.vulnerable[side] && gs.vulnerable[side].active;
                if (vuln) {
                    const remaining = (gs.vulnerable[side] && typeof gs.vulnerable[side].turns === 'number') ? gs.vulnerable[side].turns : '';
                    out.push({ label: 'VULNERABLE', count: remaining, type: 'vulnerable' });
                }
            } catch (e) {
                
            }

            try {
                const prot = gs && gs.protected && gs.protected[side] && gs.protected[side].active;
                if (prot) {
                    out.push({ label: 'PROTECTED', count: '', type: 'protected' });
                }
            } catch (e) {
                
            }
        } catch (e) {
            console.error('gatherSideEffects error', e);
        }
        return out;
    }

    
    let running = false;
    function startLoop() {
        if (running) return;
        running = true;
        ensureContainer();

        const tick = () => {
            try {
                const gs = window.gameState || null;
                const pSprite = $('#player-sprite');
                const eSprite = $('#enemy-sprite');

                
                const playerEffects = gatherSideEffects(gs, 'player');
                const enemyEffects = gatherSideEffects(gs, 'enemy');

                
                const GAP = 6; 
                const badgeHeightEstimate = 32; 

                
                if (pSprite) {
                    const rect = pSprite.getBoundingClientRect();
                    const baseLeft = rect.right + 8;
                    
                    const startTop = rect.top + rect.height * 0.15; 
                    for (let i = 0; i < playerEffects.length; i++) {
                        const entry = playerEffects[i];
                        const el = ensureBadge('player', i);
                        const top = startTop + i * (badgeHeightEstimate + GAP);
                        updateBadge(el, {
                            label: entry.label,
                            count: entry.count,
                            visible: true,
                            left: baseLeft,
                            top: top,
                            type: entry.type
                        });
                    }
                    
                    hideExtraBadges('player', playerEffects.length);
                } else {
                    
                    hideExtraBadges('player', 0);
                }

                
                if (eSprite) {
                    const rectE = eSprite.getBoundingClientRect();
                    const baseLeftE = rectE.right + 8;
                    const startTopE = rectE.top + rectE.height * 0.15;
                    for (let j = 0; j < enemyEffects.length; j++) {
                        const entry = enemyEffects[j];
                        const el = ensureBadge('enemy', j);
                        const top = startTopE + j * (badgeHeightEstimate + GAP);
                        updateBadge(el, {
                            label: entry.label,
                            count: entry.count,
                            visible: true,
                            left: baseLeftE,
                            top: top,
                            type: entry.type
                        });
                    }
                    hideExtraBadges('enemy', enemyEffects.length);
                } else {
                    hideExtraBadges('enemy', 0);
                }

                
                try {
                    const pKarma = !!(gs && gs.karmas && gs.karmas.player && gs.karmas.player.active);
                    const eKarma = !!(gs && gs.karmas && gs.karmas.enemy && gs.karmas.enemy.active);
                    const playerHealthBarContainer = document.querySelector('.player-section .health-bar');
                    const enemyHealthBarContainer = document.querySelector('.enemy-section .health-bar');
                    if (playerHealthBarContainer) {
                        if (pKarma) playerHealthBarContainer.classList.add('karma');
                        else playerHealthBarContainer.classList.remove('karma');
                    }
                    if (enemyHealthBarContainer) {
                        if (eKarma) enemyHealthBarContainer.classList.add('karma');
                        else enemyHealthBarContainer.classList.remove('karma');
                    }
                } catch (err) {
                    
                }

            } catch (e) {
                console.error('effectshow tick error', e);
            } finally {
                if (running) setTimeout(tick, 300);
            }
        };

        tick();
    }

    
    function stopLoop() { running = false; }

    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startLoop);
    } else {
        startLoop();
    }

    
    window.__effectShow = {
        start: startLoop,
        stop: stopLoop
    };
})();