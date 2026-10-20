export default async function startFate() {
    if (document.getElementById('fate-overlay')) return;

    try {
        const res = await fetch('./blocker.txt', { method: 'HEAD' });
        if (res.ok) {
            document.documentElement.style.overflow = 'hidden';
            const overlay = document.createElement('div');
            overlay.id = 'fate-overlay';
            overlay.style.position = 'fixed';
            overlay.style.inset = '0';
            overlay.style.background = '#000';
            overlay.style.zIndex = 30000;
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.color = '#888';
            overlay.style.fontFamily = 'Orbitron, monospace';
            overlay.style.padding = '1rem';
            overlay.style.boxSizing = 'border-box';
            const msg = document.createElement('div');
            msg.textContent = 'Fighting Fate is blocked.';
            msg.style.fontSize = 'clamp(1.2rem, 4vw, 2rem)';
            msg.style.fontWeight = '800';
            msg.style.textAlign = 'center';
            overlay.appendChild(msg);
            document.body.appendChild(overlay);
            return;
        }
    } catch (e) {}

    
    const overlay = document.createElement('div');
    overlay.id = 'fate-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = '#000';
    overlay.style.zIndex = 30000;
    overlay.style.pointerEvents = 'auto';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.color = '#000';
    document.body.appendChild(overlay);

    try { document.documentElement.style.overflow = 'hidden'; } catch (e) {}

    
    try {
        if (window.__previewAudio && typeof window.__previewAudio.pause === 'function') {
            try { window.__previewAudio.pause(); } catch (e) {}
            try {
                if (window.__previewPlayButton) window.__previewPlayButton.textContent = 'PLAY';
            } catch (e) {}
            window.__previewAudio = null;
            window.__previewPlayButton = null;
        }
    } catch (e) {  }

    
    
    (function ensureCustomFonts() {
        if (document.getElementById('custom-font-faces')) return;
        try {
            const style = document.createElement('style');
            style.id = 'custom-font-faces';
            style.textContent = `
                @font-face {
                    font-family: 'eteled';
                    src: url('eteled.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }
                @font-face {
                    font-family: 'feathers-font';
                    src: url('feathers.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }
                @font-face {
                    font-family: 'judgement-font';
                    src: url('judgement.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }
            `;
            document.head.appendChild(style);
        } catch (e) {
            
            console.error('Failed to inject custom font-faces', e);
        }
    })();

    function typeText(el, text, delay = 30) {
        return new Promise(resolve => {
            el.textContent = '';
            el.style.opacity = '1';
            let i = 0;
            const iv = setInterval(() => {
                el.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(iv);
                    resolve();
                }
            }, delay);
        });
    }
    
    
    async function typeTextWithCharAudio(el, text, delay = 30, audioSrc = null, perCharVolume = 0.55) {
        el.textContent = '';
        el.style.opacity = '1';
        
        const activeAudios = [];
        for (let i = 0; i < text.length; i++) {
            el.textContent += text.charAt(i);
            
            if (audioSrc) {
                try {
                    const a = new Audio(audioSrc);
                    a.volume = perCharVolume;
                    
                    const p = a.play();
                    
                    if (p && typeof p.catch === 'function') p.catch(() => {});
                    activeAudios.push(a);
                } catch (e) {
                    
                }
            }
            
            await new Promise(r => setTimeout(r, delay));
        }
        
        try {
            for (const a of activeAudios) {
                try {
                    a.pause();
                } catch (e) {}
                try { a.src = ''; } catch (e) {}
            }
            
            await new Promise(r => setTimeout(r, 6));
        } catch (e) {  }
    }

    function clearText(el, wait = 140) {
        return new Promise(res => {
            el.style.opacity = '0';
            setTimeout(() => { el.textContent = ''; res(); }, wait);
        });
    }

    
    function createDialogBox() {
        if (document.getElementById('fate-dialog-box')) return document.getElementById('fate-dialog-box');

        const box = document.createElement('div');
        box.id = 'fate-dialog-box';
        box.style.position = 'fixed';
        box.style.left = '50%';
        box.style.bottom = '3.5vh';
        box.style.transform = 'translateX(-50%)';
        box.style.width = 'min(96%, 720px)';
        box.style.maxWidth = '720px';
        box.style.background = 'rgba(20,20,20,0.96)';
        box.style.border = '2px solid #FFD700';
        box.style.borderRadius = '12px';
        box.style.padding = '0.6rem';
        box.style.zIndex = '30003';
        box.style.display = 'flex';
        box.style.alignItems = 'flex-start';
        box.style.gap = '0.6rem';
        box.style.boxSizing = 'border-box';
        box.style.pointerEvents = 'none';

        const icon = document.createElement('img');
        icon.id = 'fate-dialog-icon';
        icon.src = 'player.png';
        icon.alt = '';
        icon.style.width = '56px';
        icon.style.height = '56px';
        icon.style.objectFit = 'cover';
        icon.style.borderRadius = '10px';
        icon.style.border = '2px solid rgba(255,215,0,0.12)';
        box.appendChild(icon);

        const textWrap = document.createElement('div');
        textWrap.style.flex = '1';
        textWrap.style.display = 'flex';
        textWrap.style.flexDirection = 'column';
        textWrap.style.gap = '0.25rem';
        box.appendChild(textWrap);

        const header = document.createElement('div');
        header.id = 'fate-dialog-header';
        header.style.color = '#FF8C42';
        header.style.fontWeight = '900';
        header.style.fontFamily = 'Orbitron, monospace';
        header.style.fontSize = '0.92rem';
        textWrap.appendChild(header);

        const body = document.createElement('div');
        body.id = 'fate-dialog-body';
        body.style.color = '#FFD700';
        body.style.fontFamily = 'Orbitron, monospace';
        body.style.fontSize = '0.92rem';
        body.style.lineHeight = '1.2';
        body.style.whiteSpace = 'pre-wrap';
        body.style.minHeight = '1.2rem';
        textWrap.appendChild(body);

        document.body.appendChild(box);
        return box;
    }

    
    const avatars = {
        'Feathers': 'feathers.png',
        'Pete': 'pete.png',
        'Mona': 'mona.png',
        'Judgement': 'judgement.png',
        'Tao (Yan)': 'yan.png',
        'Tao (Ying)': 'ying.png',
        'eteleD': 'eteled.png'
    };

    
    
    function ensureFateDistortion() {
        if (document.getElementById('fate-distort-wrap')) return;

        
        
        let backdrop = document.getElementById('fate-distort-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'fate-distort-backdrop';
            backdrop.style.position = 'fixed';
            backdrop.style.inset = '0';
            
            backdrop.style.zIndex = 30000;
            backdrop.style.pointerEvents = 'none';
            backdrop.style.background = '#000';
            backdrop.style.opacity = '1';
            backdrop.style.transition = 'opacity 320ms linear';
            document.body.appendChild(backdrop);
        }

        
        const wrap = document.createElement('div');
        wrap.id = 'fate-distort-wrap';
        wrap.style.position = 'fixed';
        wrap.style.inset = '0';
        
        wrap.style.zIndex = 30001;
        wrap.style.pointerEvents = 'none';
        wrap.style.overflow = 'hidden';

        
        const makeLayer = (bg) => {
            const el = document.createElement('div');
            el.style.position = 'absolute';
            el.style.inset = '0';
            el.style.background = bg;
            el.style.mixBlendMode = 'screen';
            el.style.opacity = '0.0';
            el.style.transition = 'opacity 640ms linear';
            el.style.transform = 'translate3d(0,0,0)';
            return el;
        };

        const layerPurple = makeLayer('radial-gradient(circle at 20% 30%, rgba(160,80,240,0.14), rgba(32,8,64,0.7))');
        const layerBlack  = makeLayer('linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.98))');
        const layerRed    = makeLayer('radial-gradient(circle at 80% 70%, rgba(255,80,80,0.18), rgba(80,0,0,0.7))');

        layerPurple.id = 'fate-distort-purple';
        layerBlack.id = 'fate-distort-black';
        layerRed.id = 'fate-distort-red';

        wrap.appendChild(layerPurple);
        wrap.appendChild(layerBlack);
        wrap.appendChild(layerRed);

        document.body.appendChild(wrap);

        
        
        let t = 0;
        function tick() {
            t += 0.0125;
            const px = Math.sin(t * 1.1) * 18;
            const py = Math.cos(t * 0.9) * 12;
            const rx = Math.cos(t * 0.7) * 8;
            const ry = Math.sin(t * 1.3) * 6;

            layerPurple.style.transform = `translate3d(${px * 0.6}px, ${py * 0.6}px, 0) rotate(${t*0.3}deg)`;
            layerBlack.style.transform  = `translate3d(${px * 0.2}px, ${-py * 0.18}px, 0) rotate(${t*0.08}deg)`;
            layerRed.style.transform    = `translate3d(${-rx}px, ${ry}px, 0) rotate(${-t*0.18}deg)`;

            
            layerPurple.style.opacity = (0.4 + 0.25 * Math.sin(t*0.9));
            layerBlack.style.opacity = (0.9 + 0.06 * Math.cos(t*0.6));
            layerRed.style.opacity   = (0.35 + 0.22 * Math.cos(t*1.05));

            
            if (document.getElementById('fate-distort-wrap')) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    
    function ensureFateFigure() {
        if (document.getElementById('fate-figure-wrap')) return;

        const wrap = document.createElement('div');
        wrap.id = 'fate-figure-wrap';
        wrap.style.position = 'fixed';
        wrap.style.left = '50%';
        wrap.style.top = '100%'; 
        wrap.style.transform = 'translate(-50%, 0)';
        wrap.style.zIndex = '30002';
        wrap.style.pointerEvents = 'none';
        wrap.style.width = '28vmin';
        wrap.style.maxWidth = '260px';
        wrap.style.height = 'auto';
        wrap.style.opacity = '0';
        wrap.style.transition = 'opacity 240ms linear';
        wrap.style.willChange = 'transform, opacity';
        document.body.appendChild(wrap);

        
        const base = document.createElement('img');
        base.src = 'figure.png';
        base.alt = '';
        base.style.width = '100%';
        base.style.height = 'auto';
        base.style.display = 'block';
        base.style.borderRadius = '0';
        base.style.filter = 'saturate(0.95)';
        base.style.transformOrigin = 'center';
        base.style.willChange = 'transform, clip-path';
        base.style.position = 'absolute';
        base.style.left = '0';
        base.style.top = '0';
        wrap.appendChild(base);

        
        const SLICE_COUNT = 3;
        const slices = [];
        for (let s = 0; s < SLICE_COUNT; s++) {
            const img = document.createElement('img');
            img.src = 'figure.png';
            img.alt = '';
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.display = 'block';
            img.style.position = 'absolute';
            img.style.left = '0';
            img.style.top = '0';
            img.style.willChange = 'transform, clip-path';
            img.style.mixBlendMode = 'screen';
            img.style.opacity = '' + (0.9 - s * 0.06);
            wrap.appendChild(img);
            slices.push(img);
        }

        
        base.addEventListener('load', () => {
            try {
                const h = base.naturalHeight || 1;
                const w = base.naturalWidth || 1;
                const aspect = h / w;
                wrap.style.height = `calc(${wrap.clientWidth}px * ${aspect})`;
            } catch (e) {}
        });

        
        let animStart = null;
        let entering = true;
        let floatT = 0;
        let rafId = null;

        
        function computeSliceBands() {
            
            return [
                { top: 0, bottom: 34 },   
                { top: 30, bottom: 66 },  
                { top: 62, bottom: 100 }  
            ];
        }
        const bands = computeSliceBands();

        function animate(ts) {
            if (!animStart) animStart = ts;
            const elapsed = ts - animStart;

            
            if (entering) {
                const dur = 420;
                const progress = Math.min(1, elapsed / dur);
                const eased = 1 - Math.pow(1 - progress, 3);
                const startY = 100;
                const endY = 50;
                const curTop = startY + (endY - startY) * eased;
                wrap.style.top = curTop + '%';
                wrap.style.opacity = String(Math.min(1, eased * 1.1));

                const scale = 0.96 + 0.08 * eased;
                base.style.transform = `scale(${scale})`;
                slices.forEach(s => s.style.transform = `scale(${scale})`);

                if (progress >= 1) {
                    wrap.style.top = '50%';
                    wrap.style.transform = `translate(-50%, -50%)`;
                    entering = false;
                    animStart = ts;
                }
            } else {
                
                floatT += 0.016;
                const bob = Math.sin(floatT * 1.05) * 1.6;
                wrap.style.transform = `translate(-50%, -50%) translateY(${bob}px)`;
                
                const sharedSway = Math.sin(floatT * 0.6) * 0.6;
                base.style.transform = `translateX(${sharedSway}px)`;
            }

            
            for (let i = 0; i < slices.length; i++) {
                const img = slices[i];
                const band = bands[i] || { top: (i * 33), bottom: ((i + 1) * 33) };
                
                const jitter = Math.sin(ts * (0.0013 + i * 0.0009)) * 1.2;

                const topPct = Math.max(0, Math.min(100, band.top + jitter));
                const bottomPct = Math.max(0, Math.min(100, band.bottom + jitter));

                img.style.clipPath = `polygon(0% ${topPct}%, 100% ${topPct}%, 100% ${bottomPct}%, 0% ${bottomPct}%)`;

                
                const speedBase = 0.8 + i * 0.5;       
                const ampBase = 8 + i * 6;            
                const phase = i * 1.1;                
                const x = Math.sin(ts * 0.001 * speedBase + phase) * ampBase;
                
                const direction = (i % 2 === 0) ? 1 : -1;
                img.style.transform = `translateX(${direction * x}px)`;
            }

            
            const rot = Math.sin(ts * 0.00035) * 0.18;
            base.style.transform += ` rotate(${rot}deg)`;

            if (document.getElementById('fate-figure-wrap')) rafId = requestAnimationFrame(animate);
        }

        rafId = requestAnimationFrame(animate);

        
        wrap._cleanup = () => {
            try { if (rafId) cancelAnimationFrame(rafId); } catch (e) {}
            try { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); } catch (e) {}
        };
    }

    
    function ensureBattleFigure() {
        if (document.getElementById('fate-battle-figure')) return;

        const wrap = document.createElement('div');
        wrap.id = 'fate-battle-figure';
        wrap.style.position = 'fixed';
        wrap.style.left = '6%';
        wrap.style.top = '50%';
        wrap.style.transform = 'translateY(-50%)';
        wrap.style.zIndex = '30004';
        wrap.style.pointerEvents = 'none';
        wrap.style.width = '22vmin';
        wrap.style.maxWidth = '220px';
        wrap.style.height = 'auto';
        wrap.style.opacity = '0';
        wrap.style.transition = 'opacity 240ms linear';
        wrap.style.willChange = 'transform, opacity';
        document.body.appendChild(wrap);

        const base = document.createElement('img');
        base.src = 'figure_battle.png';
        base.alt = '';
        base.style.width = '100%';
        base.style.height = 'auto';
        base.style.display = 'block';
        base.style.borderRadius = '0';
        base.style.filter = 'saturate(0.95)';
        base.style.transformOrigin = 'center';
        base.style.willChange = 'transform, clip-path';
        base.style.position = 'absolute';
        base.style.left = '0';
        base.style.top = '0';
        wrap.appendChild(base);

        const SLICE_COUNT = 3;
        const slices = [];
        for (let s = 0; s < SLICE_COUNT; s++) {
            const img = document.createElement('img');
            img.src = 'figure_battle.png';
            img.alt = '';
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.display = 'block';
            img.style.position = 'absolute';
            img.style.left = '0';
            img.style.top = '0';
            img.style.willChange = 'transform, clip-path';
            img.style.mixBlendMode = 'screen';
            img.style.opacity = '' + (0.92 - s * 0.06);
            wrap.appendChild(img);
            slices.push(img);
        }

        
        const hpWrap = document.createElement('div');
        hpWrap.id = 'fate-battle-figure-hp';
        hpWrap.style.position = 'absolute';
        hpWrap.style.left = '50%';
        hpWrap.style.top = '-24%';
        hpWrap.style.transform = 'translateX(-50%)';
        hpWrap.style.width = '140%';
        hpWrap.style.maxWidth = '320px';
        hpWrap.style.boxSizing = 'border-box';
        hpWrap.style.pointerEvents = 'none';
        hpWrap.style.zIndex = '30005';
        hpWrap.style.textAlign = 'center';
        
        const nameLabel = document.createElement('div');
        nameLabel.textContent = '???';
        nameLabel.style.color = '#7EC8FF';
        nameLabel.style.fontFamily = 'Orbitron, monospace';
        nameLabel.style.fontWeight = '900';
        nameLabel.style.fontSize = '0.82rem';
        nameLabel.style.textShadow = '0 0 8px rgba(100,180,255,0.45)';
        hpWrap.appendChild(nameLabel);
        
        const barOuter = document.createElement('div');
        barOuter.style.width = '100%';
        barOuter.style.height = '12px';
        barOuter.style.background = 'rgba(255,255,255,0.04)';
        barOuter.style.border = '1.2px solid rgba(255,215,0,0.08)';
        barOuter.style.borderRadius = '8px';
        barOuter.style.overflow = 'hidden';
        barOuter.style.marginTop = '6px';
        const barFill = document.createElement('div');
        barFill.id = 'fate-battle-figure-hp-fill';
        barFill.style.width = '100%';
        barFill.style.height = '100%';
        barFill.style.background = 'linear-gradient(90deg,#4DA6FF,#2B8CFF)';
        barFill.style.transition = 'width 300ms ease';
        barOuter.appendChild(barFill);
        hpWrap.appendChild(barOuter);
        
        const hpText = document.createElement('div');
        hpText.id = 'fate-battle-figure-hp-text';
        hpText.textContent = '7043 / 7043';
        hpText.style.color = '#7EC8FF';
        hpText.style.fontFamily = 'Orbitron, monospace';
        hpText.style.fontWeight = '700';
        hpText.style.fontSize = '0.78rem';
        hpText.style.marginTop = '6px';
        hpWrap.appendChild(hpText);

        
        wrap.appendChild(hpWrap);

        base.addEventListener('load', () => {
            try {
                const h = base.naturalHeight || 1;
                const w = base.naturalWidth || 1;
                const aspect = h / w;
                wrap.style.height = `calc(${wrap.clientWidth}px * ${aspect})`;
            } catch (e) {}
        });

        let animStart = null;
        let floatT = 0;
        let rafId = null;

        const bands = [
            { top: 0, bottom: 34 },
            { top: 30, bottom: 66 },
            { top: 62, bottom: 100 }
        ];

        function animate(ts) {
            
            if (!animStart) animStart = ts;

            
            wrap.style.opacity = '1';
            
            floatT += 0.016;
            const bob = Math.sin(floatT * 1.05) * 1.2;
            wrap.style.transform = `translateY(-50%) translateY(${bob}px)`;

            
            for (let i = 0; i < slices.length; i++) {
                const img = slices[i];
                const band = bands[i];
                const jitter = Math.sin(ts * (0.0013 + i * 0.0009)) * 0.9;
                const topPct = Math.max(0, Math.min(100, band.top + jitter));
                const bottomPct = Math.max(0, Math.min(100, band.bottom + jitter));
                img.style.clipPath = `polygon(0% ${topPct}%, 100% ${topPct}%, 100% ${bottomPct}%, 0% ${bottomPct}%)`;

                const speedBase = 0.9 + i * 0.4;
                const ampBase = 6 + i * 5;
                const phase = i * 1.05;
                const x = Math.sin(ts * 0.001 * speedBase + phase) * ampBase;
                const direction = (i % 2 === 0) ? -1 : 1;
                img.style.transform = `translateX(${direction * x}px)`;
            }

            
            const rot = Math.sin(ts * 0.00035) * 0.12;
            base.style.transform = `rotate(${rot}deg)`;

            if (document.getElementById('fate-battle-figure')) rafId = requestAnimationFrame(animate);
        }

        rafId = requestAnimationFrame(animate);

        wrap._cleanup = () => {
            try { if (rafId) cancelAnimationFrame(rafId); } catch (e) {}
            try { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); } catch (e) {}
        };
    }

    function startFateDistortion() {
        try {
            ensureFateDistortion();
            
            const p = document.getElementById('fate-distort-purple');
            const b = document.getElementById('fate-distort-black');
            const r = document.getElementById('fate-distort-red');
            if (p) p.style.opacity = '0.55';
            if (b) b.style.opacity = '0.95';
            if (r) r.style.opacity = '0.5';
        } catch (e) {
            console.warn('Failed to start fate distortion', e);
        }
    }

    
    const seq = [
        { who: 'Feathers', text: 'So... uh...' },
        { who: 'Feathers', text: "Are we sure we're in the right place?" },
        { who: 'Pete', text: 'Absolutely.' },
        { who: 'Pete', text: "This here's a classic showdown setup. Wide open terrain. Plenty of room for dramatic entrances." },
        { who: 'Feathers', text: "Pete, we're standing on floating rocks." },
        { who: 'Pete', text: 'Exactly.' },
        { who: 'Pete', text: 'Premium showdown terrain.' },
        { who: 'Mona', text: 'Is the opponent invisible?' },
        { who: 'Mona', text: 'Or delayed?' },
        { who: 'Mona', text: 'Or observing us from a concealed position?' },
        { who: 'Pete', text: "Hopefully the third one. Makes me sound cooler." },
        { who: 'Judgement', text: '* if they\'re observing us they\'re doing a lousy job of being threatening' },
        { who: 'Judgement', text: '* usually villains can\'t wait five minutes before announcing themselves' },
        { who: 'Feathers', text: "Maybe they're shy?" },
        { who: 'Judgement', text: '* feathers' },
        { who: 'Judgement', text: "* nobody sunlight sends us after is shy" },
        { who: 'Tao (Yan)', text: "Could be. Maybe they're terrified. Smartest thing they could do." },
        { who: 'Tao (Ying)', text: 'We do not know that.' },
        { who: 'Tao (Yan)', text: "I'm choosing optimism." },
        { who: 'eteleD', text: 'Heh.' },
        { who: 'eteleD', text: "Maybe they took one look at the lineup and ran." },
        { who: 'Pete', text: "Can't blame 'em." },
        { who: 'Pete', text: "We got a lawman, a bird, an alien, whatever Tao's got going on—" },
        { who: 'Tao (Yan)', text: 'Rude.' },
        { who: 'Pete', text: '—and a fella that looks like he escaped from a haunted electronics store.' },
        { who: 'eteleD', text: 'Ouch.' },
        { who: 'eteleD', text: 'That one almost hurt.' },
        { who: 'Feathers', text: "Please don't start." },
        { who: 'eteleD', text: 'Start what?' },
        { who: 'Feathers', text: 'The thing.' },
        { who: 'eteleD', text: 'What thing?' },
        { who: 'Feathers', text: 'The thing where somebody says something and then five minutes later somebody\'s missing an arm.' },
        { who: 'eteleD', text: 'That happened one time.' },
        { who: 'Judgement', text: '* that\'s a lie' },
        { who: 'Judgement', text: '* i counted at least six' },
        { who: 'eteleD', text: "You're no fun." },
        { who: 'Mona', text: 'Why were we sent here?' },
        { who: 'Mona', text: 'The Sunlight did not explain.' },
        { who: 'Pete', text: 'Since when does he explain anything?' },
        { who: 'Feathers', text: "That's true..." },
        { who: 'Feathers', text: "Usually he just kinda points somewhere and says \"go.\"" },
        { who: 'Judgement', text: "* because explanations would require him knowing what he's doing" },
        
        { pause: 1000 },
        { who: 'Pete', text: 'Careful.' },
        { who: 'Pete', text: 'He hears stuff like that.' },
        { who: 'Judgement', text: '* good' },
        { who: 'Judgement', text: "* maybe he can hear me saying he's an idiot too" },
        { who: 'Feathers', text: 'JUDGEMENT—' },
        { who: 'Judgement', text: '* what' },
        { who: 'Feathers', text: "Don't antagonize the cosmic god." },
        { who: 'Judgement', text: '* why not' },
        { who: 'Judgement', text: "* worst case scenario he sends me to fight somebody" },
        { who: 'Judgement', text: "* which is already what's happening" },
        { who: 'Mona', text: 'That logic is difficult to argue against.' },
        { who: 'eteleD', text: 'Hah.' },
        { who: 'Pete', text: 'You know, now that I think about it...' },
        { who: 'Pete', text: 'We got six people here.' },
        { who: 'Pete', text: "That's unusual." },
        { who: 'Feathers', text: 'Yeah...' },
        { who: 'Feathers', text: "Usually it's one person." },
        { who: 'Mona', text: 'Or two.' },
        { who: 'Judgement', text: "* if sunlight needed six of us" },
        { who: 'Judgement', text: "* either this enemy is dangerous" },
        { who: 'Judgement', text: "* or he's panicking" },
        { who: 'Tao (Ying)', text: 'I would prefer neither.' },
        { who: 'Tao (Yan)', text: 'I vote dangerous.' },
        { who: 'Pete', text: 'I vote dramatic.' },
        { who: 'Feathers', text: 'I vote neither of those.' },
        { who: 'eteleD', text: 'I vote dangerous too.' },
        { who: 'Mona', text: 'Why?' },
        { who: 'eteleD', text: "Makes things more exciting." },
        { who: 'Mona', text: 'Concerning answer.' },
        { who: 'eteleD', text: "That's what everybody says." },
        { who: 'Feathers', text: '...' },
        { who: 'Pete', text: 'Well.' },
        { who: 'Pete', text: "That's usually not a good sign." },
        { who: 'Mona', text: 'Something is approaching.' },
        { who: 'Tao (Yan)', text: 'Finally.' },
        { who: 'Tao (Ying)', text: 'Be careful.' },
        { pause: 3000 },
        { who: 'Judgement', text: "* there it is" },
        { who: 'Judgement', text: "* whatever sunlight wanted dead" },
        { who: 'eteleD', text: "Took them long enough." },
        { who: 'Feathers', text: 'Everybody ready?' },
        { who: 'Pete', text: 'Always.' },
        { who: 'Mona', text: 'As ready as possible.' },
        { who: 'Tao (Yan)', text: "Let's do it." },
        { who: 'Judgement', text: '* sure' },
        { who: 'eteleD', text: 'Heheheh...' }
    ];

    
    async function preloadAssets() {
        
        let loadBox = document.getElementById('fate-load-box');
        if (!loadBox) {
            loadBox = document.createElement('div');
            loadBox.id = 'fate-load-box';
            loadBox.style.position = 'absolute';
            loadBox.style.zIndex = '30002';
            loadBox.style.padding = '0.9rem 1.1rem';
            loadBox.style.borderRadius = '10px';
            loadBox.style.background = 'rgba(0,0,0,0.8)';
            loadBox.style.border = '1px solid rgba(255,215,0,0.06)';
            loadBox.style.color = '#FFD700';
            loadBox.style.fontFamily = 'Orbitron, monospace';
            loadBox.style.fontWeight = '800';
            loadBox.style.fontSize = '0.95rem';
            loadBox.style.top = '10%';
            loadBox.style.left = '50%';
            loadBox.style.transform = 'translateX(-50%)';
            loadBox.textContent = 'Preparing dialogue...';
            document.body.appendChild(loadBox);
        }

        
        const audioFiles = new Set();
        const imageFiles = new Set();

        
        Object.values(avatars).forEach(v => imageFiles.add(v));

        
        let taoCount = 0, eteledCount = 0, monaCount = 0, peteCount = 0;
        for (const s of seq) {
            if (s.pause) continue;
            const who = String(s.who || '').toLowerCase();
            if (who.startsWith('tao')) taoCount++;
            if (who.startsWith('eteled') || s.who === 'eteleD') eteledCount++;
            if (who.startsWith('mona')) monaCount++;
            if (who.startsWith('pete')) peteCount++;
        }

        
        let audioBlocked = false;
        try {
            const headResp = await fetch('blocker.txt', { method: 'HEAD' });
            if (headResp && headResp.ok) audioBlocked = true;
            else {
                const getResp = await fetch('blocker.txt', { method: 'GET' });
                if (getResp && getResp.ok) audioBlocked = true;
            }
        } catch (e) {
            audioBlocked = false;
        }

        
        for (let i = 1; i <= Math.max(taoCount, 1); i++) audioFiles.add(`tao_line_${i}.wav`);
        for (let i = 1; i <= Math.max(eteledCount, 1); i++) audioFiles.add(`eteled_line_${i}.wav`);
        for (let i = 1; i <= Math.max(monaCount, 1); i++) audioFiles.add(`mona_line_${i}.wav`);
        for (let i = 1; i <= Math.max(peteCount, 1); i++) audioFiles.add(`pete_line_${i}.wav`);
        ['eteled_line_1.wav','tao_line_1.wav'].forEach(n => audioFiles.add(n));

        if (audioBlocked) {
            loadBox && (loadBox.textContent = 'Audio blocked by blocker.txt — preloading will warm network but playback may be suppressed.');
        }

        
        function loadImage(src) {
            return new Promise(resolve => {
                const img = new Image();
                let settled = false;
                const done = (ok) => { if (!settled) { settled = true; resolve({ src, ok }); } };
                img.onload = () => done(true);
                img.onerror = () => done(false);
                
                img.src = src;
                
                setTimeout(() => done(true), 3000);
            });
        }

        
        
        async function primeAudio(src) {
            const result = { src, fetched: false, audioReady: false, ok: false };
            
            try {
                const resp = await fetch(src, { method: 'GET', cache: 'force-cache' });
                if (resp && (resp.ok || resp.type === 'opaque')) {
                    
                    try {
                        await resp.arrayBuffer();
                        result.fetched = true;
                    } catch (e) {
                        
                        result.fetched = true;
                    }
                }
            } catch (e) {
                
            }

            
            
            try {
                const a = new Audio();
                a.preload = 'auto';
                let resolved = false;
                const cleanup = () => {
                    try { a.removeEventListener('canplaythrough', onReady); } catch (e) {}
                    try { a.removeEventListener('loadeddata', onReady); } catch (e) {}
                    try { a.removeEventListener('error', onErr); } catch (e) {}
                    try { a.src = ''; } catch (e) {}
                };
                const onReady = () => { if (!resolved) { resolved = true; result.audioReady = true; result.ok = true; cleanup(); } };
                const onErr = () => { if (!resolved) { resolved = true; cleanup(); } };
                a.addEventListener('canplaythrough', onReady, { once: true });
                a.addEventListener('loadeddata', onReady, { once: true });
                a.addEventListener('error', onErr, { once: true });
                
                a.src = src;
                
                await new Promise(r => setTimeout(r, 1600));
                if (!resolved) {
                    
                    resolved = true;
                    result.ok = result.fetched || false;
                    cleanup();
                }
            } catch (e) {
                
            }

            return result;
        }

        
        const fontDefs = [
            { family: 'eteled', src: 'eteled.ttf' },
            { family: 'feathers-font', src: 'feathers.ttf' },
            { family: 'judgement-font', src: 'judgement.ttf' }
        ];
        function loadFont(def) {
            return new Promise(resolve => {
                if (!('FontFace' in window)) return resolve({ family: def.family, ok: false });
                try {
                    const ff = new FontFace(def.family, `url(${def.src})`, { display: 'swap' });
                    ff.load().then(loaded => {
                        try { document.fonts.add(loaded); } catch (e) {}
                        resolve({ family: def.family, ok: true });
                    }).catch(() => resolve({ family: def.family, ok: false }));
                } catch (e) { resolve({ family: def.family, ok: false }); }
            });
        }

        
        const imagePromises = Array.from(imageFiles).map(src => loadImage(src).then(res => {
            loadBox.textContent = `Loaded image: ${res.src}`;
            return res;
        }));
        const audioPromises = Array.from(audioFiles).map(src => primeAudio(src).then(res => {
            loadBox.textContent = `Primed audio: ${res.src}`;
            return res;
        }));

        const fontPromises = fontDefs.map(f => loadFont(f).then(r => {
            loadBox.textContent = `Loaded font: ${r.family}`;
            return r;
        }));

        
        const all = [...imagePromises, ...audioPromises, ...fontPromises];
        
        const TIMEOUT_MS = 7000;
        const settled = await Promise.race([
            Promise.allSettled(all),
            new Promise(resolve => setTimeout(async () => {
                
                const partial = await Promise.allSettled(all.map(p => p.catch ? p.catch(() => null) : p));
                resolve(partial);
            }, TIMEOUT_MS))
        ]);

        
        await new Promise(r => setTimeout(r, 180));

        
        try { if (loadBox && loadBox.parentNode) loadBox.parentNode.removeChild(loadBox); } catch (e) {}

        
        return settled;
    }

    
    (async () => {
        try {
            await preloadAssets();
        } catch (e) {
            console.warn('Preload failed or timed out, continuing anyway', e);
        }

        
        
        setTimeout(async () => {
            createDialogBox();
            const boxEl = document.getElementById('fate-dialog-box');
            const header = document.getElementById('fate-dialog-header');
            const body = document.getElementById('fate-dialog-body');
            const icon = document.getElementById('fate-dialog-icon');

            
            try { if (boxEl) boxEl.style.opacity = '1'; } catch (e) {}

            
            let taoIndex = 0;
            let eteledIndex = 0;
            let monaIndex = 0;
            let peteIndex = 0;

            
            let taoPromise = null;
            let taoPlayedLine = false;
            let eteledPromise = null;
            let eteledPlayedLine = false;
            let monaPromise = null;
            let monaPlayedLine = false;
            
            let petePromise = null;
            let petePlayedLine = false;

            
            let speakerPlayedLine = false;

            
            async function playSequentialAudio(files = [], volume = 0.9) {
                try {
                    for (const f of files) {
                        const a = new Audio(f);
                        a.volume = volume;
                        const playPromise = a.play();
                        if (playPromise && typeof playPromise.then === 'function') {
                            await playPromise.catch(() => {});
                        }
                        await new Promise((resolve) => {
                            a.addEventListener('ended', resolve);
                            setTimeout(resolve, 4000);
                        });
                    }
                } catch (e) {
                    console.error('Audio playback failure', e);
                }
            }

            
            let speakerPromise = null;

            
            let fateSkip = false;

            
            function doBattleStart() {
                try {
                    window.fateBattleStarted = true;
                    try { window.__fate_skip_index = 9999999; } catch (e) {}

                    
                    try {
                        const audios = document.querySelectorAll('audio');
                        audios.forEach(a => {
                            try { a.pause(); } catch (e) {}
                            try { a.currentTime = 0; } catch (e) {}
                            try { a.src = ''; } catch (e) {}
                            try { if (a.parentNode) a.parentNode.removeChild(a); } catch (e) {}
                        });
                    } catch (e) {}

                    
                    try { startFateDistortion(); } catch (e) { try { ensureFateDistortion(); } catch (ee) {} }

                    
                    try {
                        const fwrap = document.getElementById('fate-figure-wrap');
                        if (fwrap) {
                            if (typeof fwrap._cleanup === 'function') {
                                try { fwrap._cleanup(); } catch (e) {}
                            }
                            try { if (fwrap.parentNode) fwrap.parentNode.removeChild(fwrap); } catch (e) {}
                        }
                    } catch (e) {}

                    
                    try {
                        
                        ensureBattleFigure();
                        const battleFig = document.getElementById('fate-battle-figure');
                        if (battleFig) {
                            
                            battleFig.style.opacity = '1';
                            battleFig.style.transition = 'opacity 240ms linear, transform 240ms linear';
                        }

                        
                        try {
                            if (window.__fateSixLeft && typeof window.__fateSixLeft.pause === 'function') {
                                try { window.__fateSixLeft.pause(); } catch (e) {}
                            }
                            const six = new Audio('2 Left.mp3');
                            six.loop = true;
                            six.volume = 0.4;
                            six.play().catch(() => {  });
                            window.__fateSixLeft = six;
                        } catch (audioErr) {
                            console.warn('Failed to play 2 Left on fate battle start', audioErr);
                        }
                    } catch (e) {
                        
                        console.warn('Failed to ensure battle figure on start', e);
                    }

                    
                    try {
                        const db = document.getElementById('fate-dialog-box');
                        if (db && db.parentNode) db.parentNode.removeChild(db);
                    } catch (e) {}

                    
                    try {
                        const skipBtn = document.getElementById('fate-skip-btn');
                        if (skipBtn && skipBtn.parentNode) skipBtn.parentNode.removeChild(skipBtn);
                    } catch (e) {}

                    
                    try {
                        const overlay = document.getElementById('fate-overlay');
                        if (overlay) {
                            overlay.style.transition = 'opacity 380ms ease';
                            overlay.style.opacity = '0.85';
                        }
                    } catch (e) {}

                    
                    try {
                        if (document.getElementById('fate-battle-ui')) {
                            
                        } else {
                            const uiWrap = document.createElement('div');
                            uiWrap.id = 'fate-battle-ui';
                            uiWrap.style.position = 'fixed';
                            uiWrap.style.right = '12px';
                            uiWrap.style.top = '50%';
                            uiWrap.style.transform = 'translateY(-50%)';
                            
                            uiWrap.style.width = 'min(420px, 42vw)';
                            uiWrap.style.maxWidth = '44vw';
                            uiWrap.style.background = 'rgba(10,10,10,0.9)';
                            uiWrap.style.border = '1.5px solid rgba(255,215,0,0.08)';
                            uiWrap.style.borderRadius = '12px';
                            uiWrap.style.padding = '0.8rem';
                            uiWrap.style.boxSizing = 'border-box';
                            uiWrap.style.zIndex = '30020';
                            uiWrap.style.color = '#FFD700';
                            uiWrap.style.fontFamily = 'Orbitron, monospace';
                            uiWrap.style.pointerEvents = 'auto';
                            uiWrap.style.display = 'flex';
                            uiWrap.style.flexDirection = 'column';
                            uiWrap.style.gap = '0.6rem';

                            const title = document.createElement('div');
                            title.textContent = 'Party';
                            title.style.fontWeight = '900';
                            title.style.color = '#FFB74D';
                            title.style.textAlign = 'center';
                            uiWrap.appendChild(title);

                            
                            
                            const partyState = [
                                { name: 'eteleD', sprite: 'eteled.png', woundedSprite: 'eteled_wounded.png', hpMax: 115, hp: 115 },
                                { name: 'Feathers', sprite: 'feathers.png', woundedSprite: 'feathers_wounded.png', hpMax: 90, hp: 90 },
                                { name: 'Judgement', sprite: 'judgement.png', woundedSprite: 'judgement_wounded.png', hpMax: 130, hp: 130 },
                                { name: 'Mona', sprite: 'mona.png', woundedSprite: 'mona_wounded.png', hpMax: 100, hp: 100 },
                                { name: 'Pete', sprite: 'pete.png', woundedSprite: 'pete_wounded.png', hpMax: 120, hp: 120 },
                                { name: 'Tao', sprite: 'tao.png', woundedSprite: 'tao_wounded.png', hpMax: 100, hp: 100 }
                            ];

                            
                            let activeIndex = 0;
                            
                            const enemyHpEl = document.getElementById('fate-battle-figure-hp-text');
                            const enemyFillEl = document.getElementById('fate-battle-figure-hp-fill');

                            
                            const list = document.createElement('div');
                            list.style.display = 'flex';
                            list.style.flexDirection = 'column';
                            list.style.gap = '6px';
                            list.style.maxHeight = '46vh';
                            list.style.overflow = 'auto';
                            list.style.paddingRight = '6px';

                            function renderParty() {
                                list.innerHTML = '';
                                partyState.forEach((p, idx) => {
                                    const row = document.createElement('div');
                                    row.style.display = 'flex';
                                    row.style.alignItems = 'center';
                                    row.style.justifyContent = 'space-between';
                                    row.style.gap = '8px';
                                    row.style.padding = '6px';
                                    row.style.borderRadius = '8px';
                                    row.style.cursor = 'pointer';
                                    row.style.border = idx === activeIndex ? '1.5px solid rgba(125,200,255,0.7)' : '1px solid rgba(255,215,0,0.06)';
                                    row.style.background = idx === activeIndex ? 'linear-gradient(90deg, rgba(50,120,255,0.06), rgba(255,255,255,0.02))' : 'transparent';

                                    
                                    const left = document.createElement('div');
                                    left.style.display = 'flex';
                                    left.style.flexDirection = 'row';
                                    left.style.alignItems = 'center';
                                    left.style.gap = '8px';

                                    const portrait = document.createElement('img');
                                    
                                    try {
                                        const useWounded = (typeof p.hp === 'number' && typeof p.hpMax === 'number') ? (p.hp <= Math.floor(p.hpMax/2)) : false;
                                        portrait.src = useWounded && p.woundedSprite ? p.woundedSprite : (p.sprite || (avatars[p.name] || 'player.png'));
                                    } catch (e) {
                                        portrait.src = p.sprite || (avatars[p.name] || 'player.png');
                                    }
                                    portrait.alt = p.name;
                                    portrait.style.width = '48px';
                                    portrait.style.height = '48px';
                                    portrait.style.objectFit = 'cover';
                                    portrait.style.borderRadius = '8px';
                                    portrait.style.border = '2px solid #FFD700';
                                    portrait.style.flexShrink = '0';
                                    left.appendChild(portrait);

                                    const metaWrap = document.createElement('div');
                                    metaWrap.style.display = 'flex';
                                    metaWrap.style.flexDirection = 'column';
                                    metaWrap.style.gap = '2px';

                                    const nameEl = document.createElement('div');
                                    nameEl.textContent = p.name;
                                    nameEl.style.fontWeight = '800';
                                    nameEl.style.fontSize = '0.92rem';
                                    nameEl.style.color = '#BEE7FF';
                                    metaWrap.appendChild(nameEl);

                                    const hpSmall = document.createElement('div');
                                    hpSmall.textContent = `${p.hp} / ${p.hpMax}`;
                                    hpSmall.style.fontSize = '0.78rem';
                                    hpSmall.style.color = '#A6E1FF';
                                    metaWrap.appendChild(hpSmall);

                                    left.appendChild(metaWrap);

                                    const right = document.createElement('div');
                                    right.style.display = 'flex';
                                    right.style.flexDirection = 'column';
                                    right.style.alignItems = 'flex-end';
                                    right.style.gap = '4px';
                                    const barOuter = document.createElement('div');
                                    barOuter.style.width = '110px';
                                    barOuter.style.height = '8px';
                                    barOuter.style.background = 'rgba(255,255,255,0.04)';
                                    barOuter.style.border = '1px solid rgba(255,215,0,0.04)';
                                    barOuter.style.borderRadius = '6px';
                                    barOuter.style.overflow = 'hidden';
                                    const barFill = document.createElement('div');
                                    barFill.style.height = '100%';
                                    const pct = Math.max(0, Math.min(100, (p.hp / p.hpMax) * 100));
                                    barFill.style.width = pct + '%';
                                    barFill.style.background = 'linear-gradient(90deg,#6bd6ff,#2b8cff)';
                                    barFill.style.transition = 'width 360ms ease, background 220ms ease';
                                    barOuter.appendChild(barFill);
                                    right.appendChild(barOuter);

                                    row.appendChild(left);
                                    row.appendChild(right);

                                    row.addEventListener('click', () => {
                                        
                                        if (typeof p.hp === 'number' && p.hp <= 0) {
                                            
                                            return;
                                        }
                                        activeIndex = idx;
                                        renderParty();
                                        
                                        updateActionArea();
                                    });

                                    list.appendChild(row);
                                });
                            }

                            uiWrap.appendChild(list);

                            
                            const actionArea = document.createElement('div');
                            actionArea.style.display = 'flex';
                            actionArea.style.flexDirection = 'column';
                            actionArea.style.gap = '6px';
                            actionArea.style.marginTop = '6px';

                            const activeName = document.createElement('div');
                            activeName.id = 'fate-active-name';
                            activeName.style.fontWeight = '900';
                            activeName.style.color = '#9FE8FF';
                            activeName.style.textAlign = 'center';
                            actionArea.appendChild(activeName);

                            const controlsRow = document.createElement('div');
                            controlsRow.style.display = 'flex';
                            controlsRow.style.gap = '6px';
                            controlsRow.style.justifyContent = 'center';

                            const attackBtn = document.createElement('button');
                            attackBtn.className = 'game-button';
                            attackBtn.textContent = 'ATTACK';
                            attackBtn.style.padding = '0.5rem';
                            attackBtn.style.minWidth = '110px';

                            const swapBtn = document.createElement('button');
                            swapBtn.className = 'game-button';
                            swapBtn.textContent = 'SWAP';
                            swapBtn.style.padding = '0.45rem';
                            swapBtn.style.minWidth = '84px';

                            controlsRow.appendChild(attackBtn);
                            controlsRow.appendChild(swapBtn);
                            actionArea.appendChild(controlsRow);

                            
                            const turnIndicator = document.createElement('div');
                            turnIndicator.id = 'fate-turn-indicator';
                            turnIndicator.textContent = 'Your Turn';
                            turnIndicator.style.textAlign = 'center';
                            turnIndicator.style.color = '#FFD700';
                            turnIndicator.style.fontWeight = '800';
                            actionArea.appendChild(turnIndicator);

                            uiWrap.appendChild(actionArea);

                            document.body.appendChild(uiWrap);

                            
                            let playerTurn = true;

                            function updateEnemyHPVisual() {
                                
                                const hpText = enemyHpEl;
                                const hpFill = enemyFillEl;
                                if (!hpText || !hpFill) return;

                                
                                try {
                                    hpFill.style.transition = hpFill.style.transition || 'width 420ms ease';
                                    hpText.style.transition = hpText.style.transition || 'opacity 220ms ease';
                                } catch (e) {  }

                                
                                try {
                                    hpText.style.opacity = '0.25';
                                    
                                    setTimeout(() => {
                                        try { hpText.style.opacity = '1'; } catch (e) {}
                                    }, 60);
                                } catch (e) {}

                                
                                const txt = hpText.textContent || '';
                                const m = txt.match(/(\d+)\s*\/\s*(\d+)/);
                                if (m) {
                                    const cur = Number(m[1]);
                                    const max = Number(m[2]);
                                    const pct = Math.max(0, Math.min(100, (cur / Math.max(1, max)) * 100));
                                    hpFill.style.width = pct + '%';
                                }
                            }

                            function updateActionArea() {
                                const p = partyState[activeIndex];
                                activeName.textContent = p.name + ` • ${p.hp} / ${p.hpMax}`;
                            }

                            
                            attackBtn.addEventListener('click', () => {
                                if (!playerTurn) return;
                                
                                const damage = 120; 
                                try {
                                    
                                    if (enemyHpEl) {
                                        const txt = enemyHpEl.textContent || '';
                                        const m = txt.match(/(\d+)\s*\/\s*(\d+)/);
                                        if (m) {
                                            let cur = Number(m[1]);
                                            const max = Number(m[2]);
                                            cur = Math.max(0, cur - damage);
                                            enemyHpEl.textContent = `${cur} / ${max}`;
                                            
                                            const pct = Math.max(0, Math.min(100, (cur / Math.max(1, max)) * 100));
                                            if (enemyFillEl) enemyFillEl.style.width = pct + '%';
                                        }
                                    }
                                } catch (e) {
                                    console.error('attack handling failed', e);
                                }

                                
                                const selfCost = 0;
                                if (selfCost > 0) {
                                    partyState[activeIndex].hp = Math.max(0, partyState[activeIndex].hp - selfCost);
                                }

                                
                                renderParty();
                                updateActionArea();

                                
                                playerTurn = false;
                                turnIndicator.textContent = 'Enemy Turn';
                                
                                setTimeout(() => {
                                    
                                    const retaliate = 40;
                                    partyState[activeIndex].hp = Math.max(0, partyState[activeIndex].hp - retaliate);
                                    
                                    if (partyState[activeIndex].hp <= 0) {
                                        
                                        const living = [];
                                        for (let i = 0; i < partyState.length; i++) {
                                            if (partyState[i] && typeof partyState[i].hp === 'number' && partyState[i].hp > 0) living.push(i);
                                        }
                                        if (living.length > 0) {
                                            
                                            activeIndex = living[Math.floor(Math.random() * living.length)];
                                        } else {
                                            
                                        }
                                    }
                                    renderParty();
                                    updateActionArea();
                                    playerTurn = true;
                                    turnIndicator.textContent = 'Your Turn';
                                }, 900 + Math.random() * 600);
                            });

                            
                            swapBtn.addEventListener('click', () => {
                                
                                const len = partyState.length;
                                let found = false;
                                for (let step = 1; step <= len; step++) {
                                    const cand = (activeIndex + step) % len;
                                    const c = partyState[cand];
                                    if (c && typeof c.hp === 'number' && c.hp > 0) {
                                        activeIndex = cand;
                                        found = true;
                                        break;
                                    }
                                }
                                if (!found) {
                                    
                                    return;
                                }
                                renderParty();
                                updateActionArea();
                            });

                            
                            renderParty();
                            updateActionArea();
                        }
                    } catch (uiErr) {
                        console.error('Failed to create fate battle UI', uiErr);
                    }
                } catch (e) {
                    console.error('Battle Start cleanup in fate.js failed', e);
                }
            }

            
            function stopAllAudioNow() {
                try {
                    const audios = document.querySelectorAll('audio');
                    audios.forEach(a => {
                        try { a.pause(); } catch (e) {}
                        try { a.currentTime = 0; } catch (e) {}
                        try { a.src = ''; } catch (e) {}
                    });
                } catch (e) {}
            }

            
            function pauseNamedSpeakerAudio() {
                try {
                    const speakerFiles = [
                        'voice_feathers.mp3',
                        'voice_judgement.mp3',
                        'mona_line_',
                        'pete_line_',
                        'tao_line_',
                        'eteled_line_'
                    ];
                    const audios = Array.from(document.querySelectorAll('audio'));
                    audios.forEach(a => {
                        try {
                            const src = (a.src || '').toLowerCase();
                            if (!src) return;
                            for (const token of speakerFiles) {
                                if (src.includes(token.toLowerCase())) {
                                    try { a.pause(); } catch (e) {}
                                    try { a.currentTime = 0; } catch (e) {}
                                    
                                    try { a.src = ''; } catch (e) {}
                                    break;
                                }
                            }
                        } catch (e) {}
                    });
                } catch (e) {}
            }

            
            (function createSkipButton() {
                if (document.getElementById('fate-skip-btn')) return;
                const b = document.createElement('button');
                b.id = 'fate-skip-btn';
                b.textContent = 'Skip Cutscene';
                b.style.position = 'fixed';
                b.style.right = '14px';
                b.style.top = '14px';
                b.style.zIndex = '40010';
                b.style.padding = '0.5rem 0.8rem';
                b.style.borderRadius = '8px';
                b.style.border = '2px solid rgba(255,215,0,0.12)';
                b.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                b.style.color = '#000';
                b.style.fontFamily = 'Orbitron, monospace';
                b.style.fontWeight = '800';
                b.style.cursor = 'pointer';
                b.style.boxShadow = '0 8px 24px rgba(255, 170, 0, 0.12)';
                b.addEventListener('click', () => {
                    try {
                        fateSkip = true;
                        
                        stopAllAudioNow();
                        pauseNamedSpeakerAudio();
                        doBattleStart();
                    } catch (e) {
                        console.error('Skip button handler failed', e);
                    }
                }, { once: false });
                document.body.appendChild(b);
            })();

            for (let i = 0; i < seq.length; i++) {
                
                if (window && window.__fate_skip_index) {
                    try {
                        i = window.__fate_skip_index;
                    } catch (e) {}
                    break;
                }

                const item = seq[i];
                if (item.pause) {
                    
                    await new Promise(r => setTimeout(r, item.pause));
                    continue;
                }
                const who = item.who;
                const text = item.text;

                
                header.textContent = who;
                if (avatars[who]) {
                    icon.src = avatars[who];
                } else {
                    icon.src = 'player.png';
                }

                
                
                try {
                    const whoLower = String(who || '').toLowerCase();
                    if (whoLower.startsWith('tao')) {
                        taoIndex++;
                        const files = [`tao_line_${taoIndex}.wav`];
                        
                        taoPlayedLine = true;
                        
                        taoPromise = playSequentialAudio(files).catch(() => { taoPromise = null; });
                    } else if (whoLower.startsWith('mona')) {
                        
                        monaIndex++;
                        const files = [`mona_line_${monaIndex}.wav`];
                        monaPlayedLine = true;
                        monaPromise = playSequentialAudio(files).catch(() => { monaPromise = null; });
                    } else if (whoLower.startsWith('pete')) {
                        
                        peteIndex++;
                        const files = [`pete_line_${peteIndex}.wav`];
                        petePlayedLine = true;
                        petePromise = playSequentialAudio(files).catch(() => { petePromise = null; });
                    } else if (whoLower.startsWith('eteled') || who === 'eteleD' || who === 'eteleD') {
                        
                        
                        const isStartWhat = String(text || '').trim() === 'Start what?';
                        if (!isStartWhat) {
                            
                            eteledIndex++;
                            const files = [`eteled_line_${eteledIndex}.wav`];
                            
                            eteledPlayedLine = true;
                            eteledPromise = playSequentialAudio(files).catch(() => { eteledPromise = null; });
                        } else {
                            
                            
                            eteledPlayedLine = false;
                            eteledPromise = null;
                        }
                    }
                } catch (e) {
                    console.error('Speaker audio trigger error', e);
                    taoPromise = null;
                    eteledPromise = null;
                }

                
                try {
                    const boxEl = document.getElementById('fate-dialog-box');
                    if (boxEl) {
                        boxEl.style.background = 'rgba(20,20,20,0.96)';
                        boxEl.style.border = '2px solid #FFD700';
                        boxEl.style.borderRadius = '12px';
                        boxEl.style.padding = '0.6rem';
                        boxEl.style.maxWidth = '720px';
                    }
                    header.style.color = '#FF8C42';
                    header.style.fontWeight = '900';
                    body.style.color = '#FFD700';
                    header.style.fontFamily = "Orbitron, monospace";
                    body.style.fontFamily = "Orbitron, monospace";
                } catch (e) {  }

                
                if (who === 'Feathers') {
                    header.style.fontFamily = "feathers-font, Orbitron, monospace";
                    body.style.fontFamily = "feathers-font, Orbitron, monospace";
                } else if (who === 'Judgement') {
                    header.style.fontFamily = "judgement-font, Orbitron, monospace";
                    body.style.fontFamily = "judgement-font, Orbitron, monospace";
                } else if (who === 'eteleD') {
                    header.style.fontFamily = "eteled, Orbitron, monospace";
                    body.style.fontFamily = "eteled, Orbitron, monospace";
                } else {
                    header.style.fontFamily = "Orbitron, monospace";
                    body.style.fontFamily = "Orbitron, monospace";
                }

                
                let displayText = text;
                if ((who === 'Feathers' || who === 'Judgement') && !displayText.startsWith('* ')) {
                    displayText = '* ' + displayText;
                }

                
                if (who === 'Feathers' || who === 'Judgement') {
                    try {
                        const boxEl = document.getElementById('fate-dialog-box');
                        if (boxEl) {
                            boxEl.style.background = '#000';
                            boxEl.style.border = '3px solid #FFF';
                            boxEl.style.borderRadius = '0';
                            
                            boxEl.style.padding = '0.9rem';
                            boxEl.style.maxWidth = '820px';
                        }
                        header.style.color = '#FFF';
                        body.style.color = '#FFF';
                        
                        header.style.fontWeight = '900';
                    } catch (e) {
                        
                        console.error('Failed to apply Feathers/Judgement dialog styles', e);
                    }
                }

                
                
                
                if (who === 'Feathers') {
                    await typeTextWithCharAudio(body, displayText, 28, 'voice_feathers.mp3', 0.55);
                } else if (who === 'Judgement') {
                    await typeTextWithCharAudio(body, displayText, 28, 'voice_judgement.mp3', 0.55);
                } else {
                    await typeText(body, displayText, 28);
                }



                
                if (taoPromise) {
                    try {
                        await taoPromise;
                    } catch (e) {
                        
                    } finally {
                        taoPlayedLine = true;
                        taoPromise = null;
                    }
                }
                if (eteledPromise) {
                    try {
                        await eteledPromise;
                    } catch (e) {
                        
                    } finally {
                        eteledPlayedLine = true;
                        eteledPromise = null;
                    }
                }
                if (monaPromise) {
                    try {
                        await monaPromise;
                    } catch (e) {
                        
                    } finally {
                        monaPlayedLine = true;
                        monaPromise = null;
                    }
                }
                if (petePromise) {
                    try {
                        await petePromise;
                    } catch (e) {
                        
                    } finally {
                        petePlayedLine = true;
                        petePromise = null;
                    }
                }

                
                
                try {
                    if ((who === 'eteleD' || who === 'eteleD') && String(displayText || '').trim() === "That's what everybody says.") {
                        startFateDistortion();
                    }

                    
                    if (who === 'Tao (Ying)' && String(displayText || '').trim() === 'Be careful.') {
                        try {
                            ensureFateFigure();
                            
                            setTimeout(() => {
                                const wrap = document.getElementById('fate-figure-wrap');
                                if (wrap) {
                                    
                                    wrap.style.opacity = '1';
                                }
                            }, 80);
                        } catch (err) {
                            console.warn('Failed to show fate figure', err);
                        }
                    }
                } catch (e) {
                    console.warn('Distortion/figure trigger failed', e);
                }

                
                let pauseAfter = 900;
                
                if (taoPlayedLine) {
                    pauseAfter = 100;
                    taoPlayedLine = false;
                }
                
                if (text.endsWith('?')) pauseAfter = 1200;
                if (text.trim() === '...') pauseAfter = 800;
                if (who === 'Feathers' && text === '...') pauseAfter = 800;
                if (text.length > 80) pauseAfter = 1400;

                
                
                try {
                    const nextItem = seq[i + 1];
                    const shouldSkipPauseItem = nextItem && nextItem.pause && (nextItem.pause === 1000 || nextItem.pause === 3000);
                    if (shouldSkipPauseItem) {
                        
                        await new Promise(r => setTimeout(r, nextItem.pause));
                        
                        i++;
                    } else {
                        await new Promise(r => setTimeout(r, pauseAfter));
                    }
                } catch (e) {
                    
                    await new Promise(r => setTimeout(r, pauseAfter));
                }
                
                await clearText(body, 140);
            }

            
            
            

            
            try {
                
                window.fateBattleStarted = true;

                
                try { startFateDistortion(); } catch (e) { try { ensureFateDistortion(); } catch (ee) {  } }

                
                try {
                    const fwrap = document.getElementById('fate-figure-wrap');
                    if (fwrap) {
                        
                        if (typeof fwrap._cleanup === 'function') {
                            try { fwrap._cleanup(); } catch (e) {  }
                        }
                        
                        if (fwrap.parentNode) fwrap.parentNode.removeChild(fwrap);
                    }
                } catch (e) {  }

                
                try {
                    const db = document.getElementById('fate-dialog-box');
                    if (db && db.parentNode) db.parentNode.removeChild(db);
                } catch (e) {  }

                
                try {
                    const overlay = document.getElementById('fate-overlay');
                    if (overlay) {
                        overlay.style.transition = 'opacity 380ms ease';
                        
                        overlay.style.opacity = '0.85';
                    }
                } catch (e) {  }

                
                try {
                    if (typeof doBattleStart === 'function') {
                        doBattleStart();
                    } else {
                        
                        window.__fate_requested_battle_start = true;
                    }
                } catch (e) {
                    console.error('Failed to invoke doBattleStart after fate dialogue:', e);
                    window.__fate_requested_battle_start = true;
                }
            } catch (e) {
                console.error('Battle Start cleanup in fate.js failed', e);
            }
        }, 200);
    })();
}