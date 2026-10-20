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
                .effect-badge.poisoned {
                    background: linear-gradient(90deg,#9ccc65 0%, #33691e 100%);
                    box-shadow: 0 8px 20px rgba(104,159,56,0.3), inset 0 0 10px rgba(220,255,180,0.05);
                }
                .effect-badge.burning {
                    background: linear-gradient(90deg,#ffb12b 0%, #bd2600 100%);
                    box-shadow: 0 8px 22px rgba(255,75,0,0.42), inset 0 0 10px rgba(255,220,120,0.1);
                }
                .effect-badge.freezing {
                    background: linear-gradient(90deg, #b8f6ff 0%, #2586c7 100%);
                    color: #06233c;
                    box-shadow: 0 8px 22px rgba(87, 211, 255, .48), inset 0 0 10px rgba(245, 255, 255, .4);
                }
                .effect-badge.exhausted {
                    background: linear-gradient(115deg, #f4fbff 0%, #c4e8f8 52%, #83c5e6 100%);
                    color: #102c42;
                    border: 1px solid rgba(255, 255, 255, .9);
                    box-shadow: 0 8px 22px rgba(104, 193, 235, .48), inset 0 1px 0 rgba(255, 255, 255, .9), inset 0 -4px 10px rgba(58, 132, 174, .18);
                    text-shadow: 0 1px 0 rgba(255, 255, 255, .65);
                }
                .effect-badge.exhausted .count {
                    background: rgba(255, 255, 255, .62);
                    color: #24516d;
                    border: 1px solid rgba(73, 148, 188, .3);
                }
                .effect-badge.undetectable {
                    background: linear-gradient(90deg, #ffffff 0%, #e5edf2 100%);
                    color: #17232c;
                    box-shadow: 0 8px 20px rgba(245, 250, 255, .4), inset 0 0 10px rgba(255, 255, 255, .8);
                }
                .effect-badge.undetectable .count {
                    background: rgba(0, 0, 0, .08);
                    color: #17232c;
                }
                .effect-badge.karma {
                    background: linear-gradient(90deg,#ff4dbb 0%, #c4009f 100%);
                    box-shadow: 0 10px 24px rgba(196,40,150,0.28), inset 0 0 12px rgba(255,150,230,0.06);
                }

                .effect-badge.vulnerable {
                    width: 190px;
                    height: 52px;
                    min-width: 190px;
                    max-width: none;
                    box-sizing: border-box;
                    padding: 0 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, .88);
                    border-radius: 12px;
                    background: linear-gradient(110deg, #ff3d68 0%, #ffad35 15%, #fff06a 30%, #42e29c 45%, #45d8ff 60%, #8e70ff 75%, #f35bd3 90%, #ff3d68 100%);
                    background-size: 260% 100%;
                    color: #fff;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .52), inset 0 -14px 22px rgba(27, 10, 51, .25), 0 0 16px rgba(255, 92, 207, .55), 0 0 28px rgba(82, 176, 255, .32);
                    filter: drop-shadow(0 0 8px rgba(255, 100, 213, .68)) drop-shadow(0 5px 14px rgba(12, 5, 22, .72));
                    animation: vulnerable-spectrum 3s linear infinite, vulnerable-pulse 1.8s ease-in-out infinite;
                    z-index: 11;
                }
                .effect-badge.vulnerable::after {
                    content: '';
                    position: absolute;
                    top: 1px;
                    left: 12px;
                    right: 12px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .95), transparent);
                }
                .effect-badge.vulnerable .label {
                    color: #fff;
                    font-size: .78rem;
                    letter-spacing: .13em;
                    text-shadow: 0 1px 4px rgba(25, 8, 48, .95), 0 0 12px rgba(255, 255, 255, .72);
                }
                .effect-badge.vulnerable .label::before {
                    content: '✦';
                    margin-right: 6px;
                    color: #fff;
                    font-size: .92rem;
                    text-shadow: 0 0 9px rgba(255, 255, 255, .95);
                }
                .effect-badge.vulnerable .count {
                    background: rgba(28, 10, 48, .32);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .42);
                    text-shadow: 0 1px 3px rgba(0, 0, 0, .8);
                }
                @keyframes vulnerable-spectrum {
                    to { background-position: 100% 50%; }
                }
                @keyframes vulnerable-pulse {
                    0%, 100% { filter: drop-shadow(0 0 7px rgba(255, 100, 213, .55)) drop-shadow(0 5px 14px rgba(12, 5, 22, .7)); }
                    50% { filter: drop-shadow(0 0 13px rgba(255, 255, 255, .82)) drop-shadow(0 0 20px rgba(112, 218, 255, .68)) drop-shadow(0 5px 16px rgba(12, 5, 22, .78)); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .effect-badge.vulnerable { animation: none; background-position: 50% 50%; }
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
                .effect-badge.hacked {
                    background: linear-gradient(90deg, #073b20 0%, #00a83b 100%);
                    color: #c9ffd6;
                    box-shadow: 0 0 18px rgba(0,255,83,0.45), inset 0 0 10px rgba(180,255,190,0.12);
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
                .effect-badge.lifesteal {
                    width: 176px;
                    height: 50px;
                    min-width: 176px;
                    max-width: none;
                    box-sizing: border-box;
                    padding: 0 17px;
                    overflow: hidden;
                    border: 1px solid rgba(190, 145, 255, .82);
                    border-radius: 10px;
                    background: radial-gradient(ellipse at 92% 50%, rgba(119, 66, 173, .36), transparent 48%), linear-gradient(112deg, #100b18 0%, #1d1228 55%, #2b173c 100%);
                    color: #f5edff;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .12), inset 0 -12px 20px rgba(0, 0, 0, .28);
                    filter: drop-shadow(0 0 7px rgba(150, 91, 226, .68)) drop-shadow(0 5px 14px rgba(12, 5, 22, .7));
                    transform: translate(-50%, -50%);
                    animation: lifesteal-pulse 2.4s ease-in-out infinite;
                    z-index: 10;
                }
                .effect-badge.lifesteal::after {
                    content: '';
                    position: absolute;
                    top: 1px;
                    left: 12px;
                    right: 12px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(231, 209, 255, .75), transparent);
                }
                .effect-badge.lifesteal .label {
                    display: inline-flex;
                    align-items: center;
                    margin-right: 8px;
                    color: #f5edff;
                    font-size: .76rem;
                    letter-spacing: .12em;
                    text-shadow: 0 0 10px rgba(190, 145, 255, .7);
                }
                .effect-badge.lifesteal .label::before {
                    content: '';
                    display: inline-block;
                    width: 7px;
                    height: 7px;
                    margin-right: 8px;
                    border-radius: 50%;
                    background: #d4aaff;
                    box-shadow: 0 0 7px #bc83ff, 0 0 13px rgba(166, 99, 255, .75);
                }
                .effect-badge.lifesteal .count {
                    padding: 3px 7px;
                    border: 1px solid rgba(173, 125, 225, .55);
                    border-radius: 6px;
                    background: rgba(12, 8, 19, .76);
                    color: #d8baff;
                    font-size: .72rem;
                    box-shadow: inset 0 0 9px rgba(111, 64, 157, .22);
                }
                @keyframes lifesteal-pulse {
                    0%, 100% { filter: drop-shadow(0 0 6px rgba(150, 91, 226, .58)) drop-shadow(0 5px 14px rgba(12, 5, 22, .7)); }
                    50% { filter: drop-shadow(0 0 10px rgba(177, 121, 247, .82)) drop-shadow(0 5px 16px rgba(12, 5, 22, .78)); }
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

    function ensureLifestealBadge() {
        const container = ensureContainer();
        let el = document.getElementById('effect-badge-lifesteal');
        if (!el) {
            el = document.createElement('div');
            el.id = 'effect-badge-lifesteal';
            el.className = 'effect-badge';
            el.innerHTML = `<span class="label"></span><span class="count"></span>`;
            container.appendChild(el);
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
        el.classList.remove('bleeding', 'poisoned', 'burning', 'freezing', 'exhausted', 'undetectable', 'karma', 'cursed', 'regen', 'enhanced', 'hacked', 'vulnerable', 'protected', 'lifesteal');
        if (type === 'bleeding') el.classList.add('bleeding');
        if (type === 'poisoned') el.classList.add('poisoned');
        if (type === 'burning') el.classList.add('burning');
        if (type === 'freezing') el.classList.add('freezing');
        if (type === 'exhausted') el.classList.add('exhausted');
        if (type === 'undetectable') el.classList.add('undetectable');
        if (type === 'karma') el.classList.add('karma');
        if (type === 'cursed') el.classList.add('cursed');
        if (type === 'regen') el.classList.add('regen');
        if (type === 'enhanced') el.classList.add('enhanced');
        if (type === 'hacked') el.classList.add('hacked');
        if (type === 'vulnerable') el.classList.add('vulnerable');
        if (type === 'protected') el.classList.add('protected');
        if (type === 'lifesteal') el.classList.add('lifesteal');

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
                if (gs.effects[side].includes('HACKED')) out.push({ label: 'HACKED', count: '', type: 'hacked' });
            }
            const curse = gs.curses && gs.curses[side] && gs.curses[side].active;
            if (curse) {
                const c = gs.curses[side];
                out.push({ label: 'CURSED', count: (typeof c.turns === 'number') ? c.turns : '', type: 'cursed' });
            }
            const karma = gs.karmas && gs.karmas[side] && gs.karmas[side].active;
            if (karma) {
                const k = gs.karmas[side];
                const remaining = (typeof k.turns === 'number') ? k.turns : '';
                out.push({ label: 'KARMA', count: remaining, type: 'karma' });
            }
            const bleed = gs.bleeds && gs.bleeds[side] && gs.bleeds[side].active;
            if (bleed) {
                const b = gs.bleeds[side];
                const remaining = (typeof b.totalRemaining === 'number') ? b.totalRemaining : (b.totalRemaining || b.accumulated || '');
                out.push({ label: 'Bleeding', count: remaining, type: 'bleeding' });
            }
            const poison = gs.poisons && gs.poisons[side] && gs.poisons[side].active;
            if (poison) {
                const p = gs.poisons[side];
                const remaining = (typeof p.totalRemaining === 'number') ? p.totalRemaining : (p.totalRemaining || p.accumulated || '');
                out.push({ label: 'Poisoned', count: remaining, type: 'poisoned' });
            }
            const burning = gs.burnings && gs.burnings[side] && gs.burnings[side].active;
            if (burning) {
                const b = gs.burnings[side];
                out.push({ label: 'Burning', count: b.totalRemaining ?? '', type: 'burning' });
            }
            const undetectable = gs.undetectables && gs.undetectables[side] && gs.undetectables[side].active;
            if (undetectable) {
                out.push({ label: 'Undetectable', count: undetectable.turns ?? '', type: 'undetectable' });
            }
            const freezing = gs.freezings && gs.freezings[side] && gs.freezings[side].active;
            if (freezing) {
                out.push({ label: 'Freezing', count: freezing.turns ?? '', type: 'freezing' });
            }
            const exhausted = gs.exhausted && gs.exhausted[side] && gs.exhausted[side].active;
            if (exhausted) {
                out.push({ label: 'EXHAUSTED', count: exhausted.turns ?? 1, type: 'exhausted' });
            }
            const lifesteal = gs.lifesteals && gs.lifesteals[side] && gs.lifesteals[side].active;
            if (lifesteal) {
                out.push({ label: 'LIFESTEAL', count: lifesteal.totalRemaining, type: 'lifesteal' });
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
                const playerRect = pSprite ? pSprite.getBoundingClientRect() : null;
                const enemyRect = eSprite ? eSprite.getBoundingClientRect() : null;

                
                const playerEffects = gatherSideEffects(gs, 'player');
                const enemyEffects = gatherSideEffects(gs, 'enemy');

                
                const GAP = 6; 
                const badgeHeightEstimate = 32; 
                const centerLeft = playerRect && enemyRect
                    ? ((playerRect.left + playerRect.width / 2) + (enemyRect.left + enemyRect.width / 2)) / 2
                    : window.innerWidth / 2;
                const centerTop = playerRect && enemyRect
                    ? ((playerRect.top + playerRect.height / 2) + (enemyRect.top + enemyRect.height / 2)) / 2
                    : window.innerHeight / 2;
                let lifestealVisible = false;

                if (playerRect) {
                    const baseLeft = playerRect.right + 8;
                    const startTop = playerRect.top + playerRect.height * 0.15;
                    let badgeIndex = 0;
                    for (const entry of playerEffects) {
                        if (entry.type === 'lifesteal') {
                            lifestealVisible = true;
                            updateBadge(ensureLifestealBadge(), {
                                label: entry.label, count: entry.count, visible: true,
                                left: centerLeft, top: centerTop, type: entry.type
                            });
                            continue;
                        }
                        const el = ensureBadge('player', badgeIndex);
                        const top = startTop + badgeIndex * (badgeHeightEstimate + GAP);
                        updateBadge(el, {
                            label: entry.label, count: entry.count, visible: true,
                            left: baseLeft, top, type: entry.type
                        });
                        badgeIndex++;
                    }
                    hideExtraBadges('player', badgeIndex);
                } else {
                    hideExtraBadges('player', 0);
                }

                if (enemyRect) {
                    const baseLeftE = enemyRect.right + 8;
                    const startTopE = enemyRect.top + enemyRect.height * 0.15;
                    let badgeIndex = 0;
                    for (const entry of enemyEffects) {
                        if (entry.type === 'lifesteal') {
                            lifestealVisible = true;
                            updateBadge(ensureLifestealBadge(), {
                                label: entry.label, count: entry.count, visible: true,
                                left: centerLeft, top: centerTop, type: entry.type
                            });
                            continue;
                        }
                        const el = ensureBadge('enemy', badgeIndex);
                        const top = startTopE + badgeIndex * (badgeHeightEstimate + GAP);
                        updateBadge(el, {
                            label: entry.label, count: entry.count, visible: true,
                            left: baseLeftE, top, type: entry.type
                        });
                        badgeIndex++;
                    }
                    hideExtraBadges('enemy', badgeIndex);
                } else {
                    hideExtraBadges('enemy', 0);
                }

                if (!lifestealVisible) {
                    const centerBadge = document.getElementById('effect-badge-lifesteal');
                    if (centerBadge) updateBadge(centerBadge, { label: '', count: '', visible: false, type: 'lifesteal' });
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