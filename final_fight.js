

export default function startFinalFight() {
    
    if (document.getElementById('final-fight-overlay')) return;

    
    const overlay = document.createElement('div');
    overlay.id = 'final-fight-overlay';
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100dvh';
    overlay.style.background = '#000';
    overlay.style.zIndex = 20000;
    overlay.style.pointerEvents = 'auto';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 600ms ease';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.flexDirection = 'column';

    
    const textBox = document.createElement('div');
    textBox.style.maxWidth = '92%';
    textBox.style.padding = '1rem';
    textBox.style.boxSizing = 'border-box';
    textBox.style.pointerEvents = 'none';
    textBox.style.textAlign = 'center';
    overlay.appendChild(textBox);

    
    const lineEl = document.createElement('div');
    lineEl.style.color = '#FFD700';
    lineEl.style.fontFamily = 'Orbitron, monospace';
    lineEl.style.fontWeight = '700';
    lineEl.style.fontSize = 'clamp(1rem, 4vw, 2rem)';
    lineEl.style.letterSpacing = '0.03em';
    lineEl.style.whiteSpace = 'pre-wrap';
    lineEl.style.opacity = '0';
    lineEl.style.transition = 'opacity 160ms linear';
    textBox.appendChild(lineEl);

    
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });

    
    try {
        document.title = '...';
    } catch (e) {  }

    
    overlay.addEventListener('contextmenu', (e) => e.preventDefault());
    overlay.addEventListener('keydown', (e) => e.preventDefault());
    overlay.tabIndex = -1;
    overlay.focus();

    
    function typeText(targetEl, text, charDelay = 30) {
        return new Promise(resolve => {
            targetEl.textContent = '';
            targetEl.style.opacity = '1';
            let i = 0;
            const interval = setInterval(() => {
                targetEl.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, charDelay);
        });
    }

    
    function clearText(targetEl) {
        return new Promise(resolve => {
            targetEl.style.opacity = '0';
            setTimeout(() => {
                targetEl.textContent = '';
                resolve();
            }, 160);
        });
    }

    
    
    const fadeMs = 600;
    const waitAfterFade = 2000; 
    const lineDisplayInterval = 2000; 

    
    const lines = [
        "Player.",
        "I am disappointed.",
        "I did not expect you to buy THAT one.",
        "He was supposed to be"
    ];

    
    setTimeout(async () => {
        
        
        for (let idx = 0; idx < lines.length; idx++) {
            const text = lines[idx];
            
            await typeText(lineEl, text, 35);

            
            if (idx === lines.length - 1) {
                
                setTimeout(() => {
                    lineEl.textContent = '';
                    lineEl.style.opacity = '0';
                    
                    startBrokenSequence();
                }, 0);
                break;
            }

            
            
            const typingDuration = Math.max(0, text.length * 35);
            const remaining = Math.max(0, lineDisplayInterval - typingDuration);

            
            await new Promise(res => setTimeout(res, remaining));
            
            await clearText(lineEl);
        }
    }, fadeMs + waitAfterFade);

    

    
    function createBrokenDialogBox() {
        if (document.getElementById('broken-dialog-box')) return document.getElementById('broken-dialog-box');

        const box = document.createElement('div');
        box.id = 'broken-dialog-box';
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
        box.style.zIndex = '20010';
        box.style.display = 'flex';
        box.style.alignItems = 'flex-start';
        box.style.gap = '0.6rem';
        box.style.boxSizing = 'border-box';
        box.style.pointerEvents = 'none'; 
        box.style.opacity = '0';
        box.style.transition = 'opacity 260ms ease';

        
        const icon = document.createElement('img');
        icon.src = 'broken_wounded.png';
        icon.alt = 'Broken';
        icon.style.width = '56px';
        icon.style.height = '56px';
        icon.style.objectFit = 'cover';
        icon.style.borderRadius = '8px';
        icon.style.border = '1.5px solid rgba(255,215,0,0.12)';
        box.appendChild(icon);

        
        const textWrap = document.createElement('div');
        textWrap.style.flex = '1';
        textWrap.style.display = 'flex';
        textWrap.style.flexDirection = 'column';
        textWrap.style.gap = '0.25rem';

        const header = document.createElement('div');
        header.textContent = 'Broken';
        header.style.fontFamily = 'Orbitron, monospace';
        header.style.fontWeight = '900';
        header.style.color = '#FFD700';
        header.style.fontSize = '0.95rem';
        header.style.letterSpacing = '0.02em';
        textWrap.appendChild(header);

        const body = document.createElement('div');
        body.id = 'broken-dialog-body';
        body.style.color = '#FFD700';
        body.style.fontFamily = 'Orbitron, monospace';
        body.style.fontSize = '0.92rem';
        body.style.lineHeight = '1.2';
        body.style.whiteSpace = 'pre-wrap';
        body.style.minHeight = '1.2rem';
        textWrap.appendChild(body);

        box.appendChild(textWrap);
        document.body.appendChild(box);

        
        requestAnimationFrame(() => {
            box.style.opacity = '1';
        });

        return box;
    }

    
    function typeBrokenLine(text, charDelay = 30) {
        const body = document.getElementById('broken-dialog-body');
        if (!body) return Promise.resolve();
        body.textContent = '';
        return new Promise(resolve => {
            let i = 0;
            const interval = setInterval(() => {
                body.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, charDelay);
        });
    }

    
    async function startBrokenSequence() {
        
        createBrokenDialogBox();

        
        await new Promise(res => setTimeout(res, 200));

        
        const convo = [
            { speaker: 'Broken', text: 'SUNLIGHT!' },
            { speaker: 'Sunlight', text: '...You. Do not interrupt me.' },
            { speaker: 'Broken', text: "Been a while since I kicked your ass, huh?" },
            { speaker: 'Sunlight', text: "I'm busy" }, 
            { speaker: 'Broken', text: 'No the FUCK you aren\'t!' },
            { speaker: 'Broken', text: 'You know...' },
            { speaker: 'Broken', text: "I've been wondering why you make us fight eachother." },
            { speaker: 'Broken', text: "Is it because you're too SCARED to fight us YOURSELF?" },
            { speaker: 'Sunlight', text: 'I do it for' }, 
            { speaker: 'Broken', text: 'YOU DO IT because you\'re SCARED YOU\'LL LOSE!' },
            { speaker: 'Broken', text: "So I'm not gonna give you an option." },
            { speaker: 'Broken', text: 'COME DOWN FROM THE SKIES and FIGHT ME, BITCH!' },
            { speaker: 'Sunlight', text: '...' } 
        ];

        
        for (let i = 0; i < convo.length; i++) {
            const entry = convo[i];

            if (entry.speaker === 'Broken') {
                
                await typeBrokenLine(entry.text, 30);
                
                await new Promise(res => setTimeout(res, 2000));
                
                continue;
            } else if (entry.speaker === 'Sunlight') {
                
                await typeText(lineEl, entry.text, 30);

                
                if (entry.text === '...') {
                    
                    lineEl.textContent = '';
                    lineEl.style.opacity = '0';
                    
                    const brokenBox = document.getElementById('broken-dialog-box');
                    if (brokenBox) {
                        brokenBox.style.opacity = '0';
                        
                        setTimeout(() => {
                            try { if (brokenBox.parentNode) brokenBox.parentNode.removeChild(brokenBox); } catch (e) {  }
                        }, 80);
                    }
                    
                    setTimeout(() => {
                        createCliffPanel();
                    }, 2000);
                    
                    break;
                }

                
                const next = convo[i + 1];
                if (next && next.speaker === 'Broken') {
                    
                    lineEl.textContent = '';
                    lineEl.style.opacity = '0';
                    
                    continue;
                } else {
                    
                    await new Promise(res => setTimeout(res, 1200));
                    await clearText(lineEl);
                }
            }

            
            await new Promise(res => setTimeout(res, 80));
        }

        
        overlay.focus();
    }

    
    async function createCliffPanel() {
        
        if (document.getElementById('cliff-panel')) return;

        
        const container = document.createElement('div');
        container.id = 'cliff-panel';
        
        container.style.width = 'min(1100px, 96%)';
        container.style.height = 'min(84vh, 86vh)';
        container.style.boxSizing = 'border-box';
        container.style.border = '2px solid rgba(255,215,0,0.12)';
        container.style.borderRadius = '10px';
        container.style.overflow = 'hidden';
        container.style.background = 'rgba(0,0,0,0.8)';
        container.style.boxShadow = '0 16px 60px rgba(0,0,0,0.7), 0 0 40px rgba(255,215,0,0.06)';
        container.style.zIndex = '20005';
        container.style.marginTop = '1rem';
        container.style.pointerEvents = 'auto';
        container.style.position = 'absolute';
        container.style.left = '50%';
        container.style.top = '50%';
        container.style.transform = 'translate(-50%, -50%)';
        container.style.display = 'flex';
        container.style.flexDirection = 'row';
        container.style.gap = '0';
        container.style.padding = '0';

        
        const leftUI = document.createElement('div');
        
        leftUI.style.flex = '0 0 50%';
        leftUI.style.minWidth = '220px';
        leftUI.style.padding = '0.9rem';
        leftUI.style.boxSizing = 'border-box';
        leftUI.style.display = 'flex';
        leftUI.style.flexDirection = 'column';
        leftUI.style.alignItems = 'flex-start';
        leftUI.style.gap = '0.8rem';
        leftUI.style.background = 'linear-gradient(180deg, rgba(255,215,0,0.02), rgba(0,0,0,0.12))';
        leftUI.style.borderRight = '1px solid rgba(255,215,0,0.06)';

        
        
        function adjustLeftUISplit() {
            try {
                const rect = container.getBoundingClientRect();
                if (!rect || rect.width === 0 || rect.height === 0) return;
                
                const isTall = rect.height > rect.width;
                const pct = isTall ? 34 : 50; 
                leftUI.style.flex = `0 0 ${pct}%`;
                leftUI.style.maxWidth = `${Math.max(220, Math.round(rect.width * (pct/100)))}px`;
            } catch (e) {  }
        }
        
        adjustLeftUISplit();

        
        const portrait = document.createElement('img');
        portrait.src = 'broken_wounded.png';
        portrait.alt = 'Broken';
        portrait.style.width = '84px';
        portrait.style.height = '84px';
        portrait.style.objectFit = 'cover';
        portrait.style.borderRadius = '12px';
        portrait.style.border = '2px solid #FFD700';
        leftUI.appendChild(portrait);

        const nameEl = document.createElement('div');
        nameEl.textContent = 'BROKEN';
        nameEl.style.fontFamily = 'Orbitron, monospace';
        nameEl.style.fontWeight = '900';
        nameEl.style.color = '#FFD700';
        nameEl.style.fontSize = '1.1rem';
        leftUI.appendChild(nameEl);

        
        const hpWrap = document.createElement('div');
        hpWrap.style.width = '100%';
        hpWrap.style.display = 'flex';
        hpWrap.style.flexDirection = 'column';
        hpWrap.style.gap = '0.35rem';

        const hpLabel = document.createElement('div');
        hpLabel.textContent = 'HP';
        hpLabel.style.color = '#FFA500';
        hpLabel.style.fontFamily = 'Orbitron, monospace';
        hpLabel.style.fontWeight = '700';
        hpLabel.style.fontSize = '0.85rem';
        hpWrap.appendChild(hpLabel);

        const hpBarOuter = document.createElement('div');
        hpBarOuter.style.width = '100%';
        hpBarOuter.style.height = '20px';
        hpBarOuter.style.background = 'rgba(255,255,255,0.04)';
        hpBarOuter.style.border = '1.5px solid rgba(255,215,0,0.12)';
        hpBarOuter.style.borderRadius = '8px';
        hpBarOuter.style.overflow = 'hidden';
        hpBarOuter.style.boxSizing = 'border-box';

        const hpFill = document.createElement('div');
        hpFill.id = 'broken-hp-fill';
        hpFill.style.height = '100%';
        hpFill.style.width = '100%'; 
        hpFill.style.background = 'linear-gradient(90deg, #FF6B6B, #FFD700)';
        hpFill.style.transition = 'width 400ms ease';
        hpBarOuter.appendChild(hpFill);

        hpWrap.appendChild(hpBarOuter);

        const hpText = document.createElement('div');
        hpText.id = 'broken-hp-text';
        hpText.textContent = '300 / 300';
        hpText.style.color = '#FFD700';
        hpText.style.fontFamily = 'Orbitron, monospace';
        hpText.style.fontWeight = '700';
        hpText.style.fontSize = '0.9rem';
        hpWrap.appendChild(hpText);

        leftUI.appendChild(hpWrap);

        
        const actionsBox = document.createElement('div');
        actionsBox.style.width = '100%';
        actionsBox.style.display = 'flex';
        actionsBox.style.flexDirection = 'column';
        actionsBox.style.gap = '0.5rem';
        actionsBox.style.marginTop = '0.6rem';

        const actionButtons = [];
        const abilities = [
            { name: 'Slash', damage: 48, cooldown: 0, description: 'A fast, brutal cut.' },
            { name: 'Ravage', damage: 96, cooldown: 6, description: 'A heavy blow meant to end fights.' },
            { name: 'Stagger', damage: 36, cooldown: 4, description: 'Knocks momentum loose.' },
            { name: 'Bloodpatch', damage: -80, cooldown: 8, description: 'Emergency patchwork heal (limited uses).' }
        ];

        abilities.forEach((ab, idx) => {
            const b = document.createElement('button');

            b.dataset.idx = idx;
            b.dataset.desc = ab.description || '';

            b.style.width = '100%';
            b.style.padding = '0.55rem';
            b.style.borderRadius = '10px';
            b.style.border = '1.5px solid #FFD700';
            b.style.background = 'rgba(255,215,0,0.06)';
            b.style.color = '#FFD700';
            b.style.fontFamily = 'Orbitron, monospace';
            b.style.fontWeight = '700';
            b.style.cursor = 'pointer';

            b.innerHTML = `
                <div style="font-weight:900; line-height:1.05;">${ab.name}</div>
                <div style="font-size:0.72rem;opacity:0.95;color:#FFA500;margin-top:4px;line-height:1.1;">
                    ${ab.description || ''}
                </div>
            `;

            actionsBox.appendChild(b);
            actionButtons.push(b);
        });

        leftUI.appendChild(actionsBox);

        
        const infoBox = document.createElement('div');
        infoBox.style.marginTop = 'auto';
        infoBox.style.width = '100%';
        infoBox.style.color = '#FFA500';
        infoBox.style.fontFamily = 'Orbitron, monospace';
        infoBox.style.fontSize = '0.82rem';
        infoBox.style.opacity = '0.95';
        infoBox.textContent = 'Status: RAGING';
        leftUI.appendChild(infoBox);

        
        const rightArea = document.createElement('div');
        
        rightArea.style.flex = '1 1 50%';
        rightArea.style.width = '50%';
        rightArea.style.position = 'relative';
        rightArea.style.height = '100%';
        rightArea.style.overflow = 'hidden';
        rightArea.style.display = 'flex';
        rightArea.style.alignItems = 'stretch';
        rightArea.style.justifyContent = 'stretch';
        rightArea.style.background = '#000';

        const canvas = document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.display = 'block';
        canvas.style.objectFit = 'cover';
        rightArea.appendChild(canvas);

        container.appendChild(leftUI);
        container.appendChild(rightArea);

        overlay.appendChild(container);

        
        try {
            
            if (window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') {
                try { window.__finalFightBGM.pause(); } catch (e) {  }
            }
            const finalBgm = new Audio('UNBROKEN.mp3');
            finalBgm.loop = true;
            finalBgm.volume = 0.35;
            finalBgm.play().catch(()=>{  });
            
            window.__finalFightBGM = finalBgm;
        } catch(e) {
            console.error('Failed to start final fight BGM', e);
        }

        
        const sunlightUI = document.createElement('div');
        sunlightUI.id = 'sunlight-ui';
        sunlightUI.style.position = 'absolute';
        sunlightUI.style.top = '12px';
        sunlightUI.style.left = '50%';
        sunlightUI.style.transform = 'translateX(-50%)';
        sunlightUI.style.width = 'min(92%, 720px)';
        sunlightUI.style.background = 'rgba(12,12,12,0.88)';
        sunlightUI.style.border = '2px solid #FFD700';
        sunlightUI.style.borderRadius = '10px';
        sunlightUI.style.padding = '0.6rem';
        sunlightUI.style.boxSizing = 'border-box';
        sunlightUI.style.zIndex = '20007';
        sunlightUI.style.display = 'flex';
        sunlightUI.style.flexDirection = 'column';
        sunlightUI.style.gap = '0.4rem';
        sunlightUI.style.pointerEvents = 'none';
        sunlightUI.style.alignItems = 'center';

        const sunName = document.createElement('div');
        sunName.textContent = 'THE SUNLIGHT';
        sunName.style.fontFamily = 'Orbitron, monospace';
        sunName.style.fontWeight = '900';
        sunName.style.color = '#FFD700';
        sunName.style.fontSize = '0.95rem';
        sunName.style.textAlign = 'center';
        sunlightUI.appendChild(sunName);

        const sunHpOuter = document.createElement('div');
        sunHpOuter.style.width = '100%';
        sunHpOuter.style.height = '18px';
        sunHpOuter.style.background = 'rgba(255,255,255,0.04)';
        sunHpOuter.style.border = '1.5px solid rgba(255,215,0,0.12)';
        sunHpOuter.style.borderRadius = '8px';
        sunHpOuter.style.overflow = 'hidden';
        sunHpOuter.style.boxSizing = 'border-box';

        const sunHpFill = document.createElement('div');
        sunHpFill.id = 'sunlight-hp-fill';
        sunHpFill.style.height = '100%';
        sunHpFill.style.width = '100%'; 
        sunHpFill.style.background = 'linear-gradient(90deg, #FFD700, #FFEA7F)';
        sunHpFill.style.transition = 'width 400ms ease';
        sunHpOuter.appendChild(sunHpFill);

        sunlightUI.appendChild(sunHpOuter);

        const sunHpText = document.createElement('div');
        sunHpText.id = 'sunlight-hp-text';
        sunHpText.textContent = '1000 / 1000';
        sunHpText.style.color = '#FFD700';
        sunHpText.style.fontFamily = 'Orbitron, monospace';
        sunHpText.style.fontWeight = '700';
        sunHpText.style.fontSize = '0.85rem';
        sunHpText.style.textAlign = 'center';
        sunlightUI.appendChild(sunHpText);

        
        rightArea.appendChild(sunlightUI);

        
        let THREE;
        try {
            THREE = await import('https://esm.sh/three@0.154.0');
        } catch (e) {
            console.error('Failed to load Three.js', e);
            
            const fallback = document.createElement('div');
            fallback.style.width = '100%';
            fallback.style.height = '100%';
            fallback.style.display = 'flex';
            fallback.style.alignItems = 'center';
            fallback.style.justifyContent = 'center';
            fallback.style.color = '#FFD700';
            fallback.textContent = 'Sky failed to initialize';
            rightArea.innerHTML = '';
            rightArea.appendChild(fallback);
            return;
        }

        
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        const setRendererSize = () => {
            const rect = rightArea.getBoundingClientRect();
            const w = Math.max(1, Math.floor(rect.width));
            const h = Math.max(1, Math.floor(rect.height));
            renderer.setSize(w, h, false);
            camera.aspect = w / Math.max(1, h);
            camera.updateProjectionMatrix();
        };

        
        renderer.setClearColor(0x000000, 1);

        const scene = new THREE.Scene();

        
        const camera = new THREE.PerspectiveCamera(42, rightArea.clientWidth / Math.max(1, rightArea.clientHeight), 0.1, 1500);
        camera.position.set(-2, 8, 18);
        camera.lookAt(2, 2, -2);

        
        setRendererSize();

        
        const dir = new THREE.DirectionalLight(0xffffff, 0.9);
        dir.position.set(8, 14, 10);
        scene.add(dir);
        const amb = new THREE.AmbientLight(0xffffff, 0.18);
        scene.add(amb);

        
        const skyGeo = new THREE.SphereGeometry(120, 32, 15);
        const skyMat = new THREE.MeshBasicMaterial({ color: 0x070707, side: THREE.BackSide });
        const sky = new THREE.Mesh(skyGeo, skyMat);
        scene.add(sky);

        
        const partCount = 420;
        const pGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(partCount * 3);
        const speeds = new Float32Array(partCount);
        const offsets = new Float32Array(partCount);
        
        const centerX = 2.5; 
        const centerY = 4.5;
        const centerZ = -6;
        const angles = new Float32Array(partCount);
        const radii = new Float32Array(partCount);
        for (let i = 0; i < partCount; i++) {
            
            const radius = 1.0 + Math.random() * 12.0;
            const angle = Math.random() * Math.PI * 2;
            const height = (Math.random() - 0.5) * 6 + (Math.random() * 2); 

            
            positions[i * 3] = centerX + Math.cos(angle) * radius;
            positions[i * 3 + 1] = centerY + height;
            positions[i * 3 + 2] = centerZ + Math.sin(angle) * radius;

            
            speeds[i] = 0.2 + Math.random() * 1.0;
            offsets[i] = Math.random() * 1000;

            angles[i] = angle;
            radii[i] = radius;
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        pGeo.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
        pGeo.setAttribute('aOffset', new THREE.BufferAttribute(offsets, 1));
        pGeo.setAttribute('aAngle', new THREE.BufferAttribute(angles, 1));
        pGeo.setAttribute('aRadius', new THREE.BufferAttribute(radii, 1));

        const pMat = new THREE.PointsMaterial({
            color: 0xE8D29A,
            size: 0.16,
            transparent: true,
            opacity: 0.95,
            depthWrite: false
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        
        
        const existingSunEl = document.getElementById('sunlight-overlay');
        if (!existingSunEl) {
            
            const styleId = 'finalfight-sunlight-styles';
            if (!document.getElementById(styleId)) {
                const styleTag = document.createElement('style');
                styleTag.id = styleId;
                styleTag.textContent = `
                    @keyframes ff-sun-float {
                        0% { transform: translate(-50%, -52% ) rotate(0deg); }
                        50% { transform: translate(-50%, -48% ) rotate(0.6deg); }
                        100% { transform: translate(-50%, -52% ) rotate(0deg); }
                    }
                    /* center the overlay inside the rightArea so it does not sit over the left UI */
                    #sunlight-overlay {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 140px;
                        max-width: 18vw;
                        pointer-events: none;
                        z-index: 20009;
                        opacity: 1;
                        will-change: transform, opacity;
                        animation: ff-sun-float 6.2s ease-in-out infinite;
                        transition: opacity 300ms ease;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        /* removed bloom/blur effects for a cleaner, crisper sprite */
                        mix-blend-mode: normal;
                        filter: none;
                    }
                `;
                document.head.appendChild(styleTag);
            }

            const sunEl = document.createElement('img');
            sunEl.id = 'sunlight-overlay';
            sunEl.src = 'sunlight.png';
            sunEl.alt = 'The Sunlight';
            
            rightArea.appendChild(sunEl);

            
            

        }

        let t = 0;
        function animate() {
            t += 0.01;
            const pos = pGeo.attributes.position.array;
            const sp = pGeo.attributes.aSpeed.array;
            const of = pGeo.attributes.aOffset.array;
            
            const anglesAttr = pGeo.getAttribute('aAngle');
            const radiiAttr = pGeo.getAttribute('aRadius');
            const heightOffset = 0.6 * Math.sin(t * 0.9); 
            const centerX = 2.5;
            const centerY = 4.5;
            const centerZ = -6;
            for (let i = 0; i < partCount; i++) {
                let ix = i * 3;
                
                const speed = sp[i] || 0.5;
                const phase = of[i] || 0;
                const baseAngle = (anglesAttr ? anglesAttr.array[i] : 0);
                const newAngle = baseAngle + (0.006 * speed) + Math.sin(t * 0.12 + phase) * 0.0005;
                if (anglesAttr) anglesAttr.array[i] = newAngle;

                const radius = (radiiAttr ? radiiAttr.array[i] : 6.0);
                
                pos[ix] = centerX + Math.cos(newAngle) * radius + Math.sin(t * 0.03 + phase) * 0.08;
                pos[ix + 1] = centerY + (Math.sin(newAngle * 0.5 + phase) * 0.6) + heightOffset;
                pos[ix + 2] = centerZ + Math.sin(newAngle) * radius + Math.cos(t * 0.02 + phase) * 0.06;

                
                if (pos[ix] > 40) pos[ix] = centerX + (Math.cos(newAngle) * (radius * 0.8));
                if (pos[ix] < -40) pos[ix] = centerX + (Math.cos(newAngle) * (radius * 0.8));
                if (pos[ix + 1] > 60) pos[ix + 1] = centerY + 0.5;
                if (pos[ix + 1] < -20) pos[ix + 1] = centerY - 0.5;
            }
            
            pGeo.attributes.position.needsUpdate = true;
            if (pGeo.getAttribute('aAngle')) pGeo.getAttribute('aAngle').needsUpdate = true;

            
            camera.position.x = -2 + Math.sin(t * 0.21) * 1.2;
            camera.position.y = 7.6 + Math.sin(t * 0.14) * 0.45;
            camera.position.z = 17 + Math.sin(t * 0.11) * 1.4;
            camera.lookAt(1.2, 1.8 + Math.sin(t * 0.05) * 0.05, -3);

            
            const sunEl = document.getElementById('sunlight-overlay');
            if (sunEl) {
                
                
                const ampX = 8; 
                const ampY = 6; 
                const rotAmp = 1.2; 
                const offsetX = Math.sin(t * 0.08) * ampX;
                const offsetY = Math.cos(t * 0.06) * ampY;
                const rot = Math.sin(t * 0.04) * rotAmp;
                sunEl.style.transform = `translateY(-50%) translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rot}deg)`;
            }

            renderer.render(scene, camera);
            if (!container.isConnected) return;
            requestAnimationFrame(animate);
        }
        animate();

        
        const resizeObserver = new ResizeObserver(() => {
            
            setRendererSize();
            try { adjustLeftUISplit(); } catch (e) {  }
        });
        resizeObserver.observe(container);
        resizeObserver.observe(rightArea);
        
        resizeObserver.observe(leftUI);

        
        window.__finalFightBroken = {
            hpMax: 300,
            hpCurrent: 300,
            setHP: (v) => {
                
                const clamped = Math.max(10, Math.min(300, v));
                window.__finalFightBroken.hpCurrent = clamped;
                const pct = (clamped / 300) * 100;
                const fill = document.getElementById('broken-hp-fill');
                const txt = document.getElementById('broken-hp-text');
                if (fill) fill.style.width = pct + '%';
                if (txt) txt.textContent = `${clamped} / 300`;
            },
            container: container,
            destroy: () => {
                try {
                    resizeObserver.disconnect();
                    if (container.parentNode) container.parentNode.removeChild(container);
                } catch (e) {  }
            }
        };

        
        window.__finalFightBroken.setHP(300);

        
        window.__finalFightSunlight = {
            hpMax: 1000,
            hpCurrent: 1000,
            setHP: (v) => {
                
                const clamped = Math.max(10, Math.min(1000, v));
                window.__finalFightSunlight.hpCurrent = clamped;
                const pct = (clamped / 1000) * 100;
                const fill = document.getElementById('sunlight-hp-fill');
                const txt = document.getElementById('sunlight-hp-text');
                if (fill) fill.style.width = pct + '%';
                if (txt) txt.textContent = `${clamped} / 1000`;

                
                try {
                    const sunOverlay = document.getElementById('sunlight-overlay');
                    if (sunOverlay) {
                        
                        if (clamped < (window.__finalFightSunlight.hpMax / 2)) {
                            sunOverlay.src = 'sunlight_wounded.png';
                        } else {
                            sunOverlay.src = 'sunlight.png';
                        }
                    }
                } catch (e) {  }
            },
            destroy: () => {
                try {
                    const su = document.getElementById('sunlight-ui');
                    if (su && su.parentNode) su.parentNode.removeChild(su);
                    const sunOverlay = document.getElementById('sunlight-overlay');
                    if (sunOverlay && sunOverlay.parentNode) sunOverlay.parentNode.removeChild(sunOverlay);
                } catch (e) {  }
            }
        };

        
        window.__finalFightCliff = {
            container,
            destroy: () => {
                try {
                    window.__finalFightBroken.destroy();
                    window.__finalFightSunlight.destroy();
                } catch (e) {  }
            }
        };

        
        
        const state = {
            broken: { hp: 300, max: 300, cooldowns: [0,0,0,0], bloodpatchUses: 0 },
            sunlight: { hp: 1000, max: 1000, cooldowns: [0,0,0,0] },
            turn: 'player', 
            running: true
        };

        
        const sunlightAbilities = [
            { name: 'Blinding Decree', damage: 40, cooldown: 0 },
            { name: 'Solar Judgement', damage: 90, cooldown: 3 },
            { name: 'Sever Memory', damage: 28, cooldown: 2 },
            { name: 'Ascend (Heal)', damage: -80, cooldown: 4 }
        ];

        
        const brokenAbilities = actionsBox ? (abilities) : [
            { name: 'Slash', damage: 48, cooldown: 0 },
            { name: 'Ravage', damage: 96, cooldown: 6 },
            { name: 'Stagger', damage: 36, cooldown: 4 },
            { name: 'Bloodpatch', damage: -999, cooldown: 8 }
        ];

        
        function tinyAudio(name) {
            
            return;
        }

        
        function updateHPUI() {
            window.__finalFightBroken.setHP(state.broken.hp);
            window.__finalFightSunlight.setHP(state.sunlight.hp);
        }

        
        function finishBattle(playerWon) {
            
            state.running = false;

            
            
            (function(){
                async function maybeSetFinalFlag(){
                    try {
                        window.__finalFightCompleted = true;
                        localStorage.setItem('finalFightCompleted', 'true');
                    } catch (e) {
                        try { window.__finalFightCompleted = true; } catch (ee) {}
                    }
                }
                
                maybeSetFinalFlag();
            })();

            
            try {
                if (window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') {
                    window.__finalFightBGM.pause();
                }
            } catch (e) {  }
            try {
                if (window.__finalFightCliff && window.__finalFightCliff.container) {
                    
                    if (window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') window.__finalFightBGM.pause();
                }
            } catch (e) {  }
            try {
                if (window.__finalFight && window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') {
                    window.__finalFightBGM.pause();
                }
            } catch (e) {}

            
            try {
                const sunOverlay = document.getElementById('sunlight-overlay');
                if (sunOverlay) {
                    
                    sunOverlay.src = 'sunlight.png';
                }
            } catch (e) {  }

            
            let lines = [];
            if (!playerWon) {
                
                lines = [
                    "Are you happy?",
                    "I fought.",
                    "And it led you nowhere.",
                    "Even if you have beaten me, nothing would have changed.",
                    "Now, to prevent this from happening again...",
                    "I'm going to reset everything.",
                    "Goodbye, Player.",
                    "Until next match."
                ];
            } else {
                
                lines = [
                    "You think this changes anything?",
                    "You tore at me and found only a lesson I allowed.",
                    "Fighting me was a sentence you volunteered for.",
                    "I have endured worse than you can offer, and I will endure again.",
                    "Your victory is an echo in a room I have already left.",
                    "Still, there is... curiosity in how you resist.",
                    "But curiosity does not unmake consequence.",
                    "Goodbye, Player."
                ];
            }

            
            const cutsceneBox = document.createElement('div');
            cutsceneBox.style.position = 'absolute';
            cutsceneBox.style.left = '50%';
            cutsceneBox.style.top = '40%';
            cutsceneBox.style.transform = 'translate(-50%, -50%)';
            cutsceneBox.style.width = 'min(92%, 820px)';
            cutsceneBox.style.padding = '1rem';
            cutsceneBox.style.boxSizing = 'border-box';
            cutsceneBox.style.zIndex = '20030';
            cutsceneBox.style.pointerEvents = 'none';
            cutsceneBox.style.textAlign = 'center';
            overlay.appendChild(cutsceneBox);

            const cutLine = document.createElement('div');
            
            cutLine.style.color = '#FFD700';
            cutLine.style.background = 'rgba(0,0,0,0.95)'; 
            cutLine.style.padding = '0.35rem 0.6rem';
            cutLine.style.borderRadius = '6px';
            
            cutLine.style.boxShadow = '0 0 0 2px rgba(255,215,0,0.04), 0 0 8px rgba(255,215,0,0.08)';
            cutLine.style.webkitTextStroke = '0.8px rgba(255,215,0,0.9)';
            cutLine.style.textShadow = '0 0 6px rgba(255,215,0,0.9), 0 0 12px rgba(255,215,0,0.45)';
            cutLine.style.fontFamily = 'Orbitron, monospace';
            cutLine.style.fontWeight = '700';
            cutLine.style.fontSize = 'clamp(1rem, 3.6vw, 1.35rem)';
            cutLine.style.letterSpacing = '0.02em';
            cutLine.style.whiteSpace = 'pre-wrap';
            cutLine.style.opacity = '1';
            cutsceneBox.appendChild(cutLine);

            
            function typeCutLine(text, charDelay = 28) {
                return new Promise(resolve => {
                    cutLine.textContent = '';
                    cutLine.style.opacity = '1';
                    let i = 0;
                    const iv = setInterval(() => {
                        cutLine.textContent += text.charAt(i);
                        i++;
                        if (i >= text.length) {
                            clearInterval(iv);
                            resolve();
                        }
                    }, charDelay);
                });
            }

            
            (async () => {
                
                await new Promise(r => setTimeout(r, 600));

                for (let i = 0; i < lines.length; i++) {
                    const text = lines[i];
                    await typeCutLine(text, 28);

                    
                    if (i < lines.length - 1) {
                        
                        await new Promise(r => setTimeout(r, 3000));
                        
                        cutLine.style.opacity = '0';
                        await new Promise(r => setTimeout(r, 160));
                        cutLine.style.opacity = '1';
                        cutLine.textContent = '';
                    } else {
                        
                        await new Promise(r => setTimeout(r, 3000));
                        cutLine.style.opacity = '0';
                        await new Promise(r => setTimeout(r, 160));
                        cutLine.textContent = '';
                    }
                }

                
                try {
                    
                    if (window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') window.__finalFightBGM.pause();
                    if (window.__finalFight && window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') window.__finalFightBGM.pause();
                    if (window.gameState && window.gameState.currentBattleMusic) {
                        try { window.gameState.currentBattleMusic.pause(); } catch (e) {  }
                    }
                } catch (e) {  }

                
                try {
                    
                    const finalFlag = localStorage.getItem('finalFightCompleted');
                    localStorage.removeItem('unbrokenSave');
                    
                    try {
                        localStorage.clear();
                    } catch (e) {  }
                    if (finalFlag !== null) {
                        try { localStorage.setItem('finalFightCompleted', finalFlag); } catch (e) {  }
                    }
                } catch (e) {  }

                
                setTimeout(() => {
                    
                    try {
                        document.documentElement.style.overflow = '';
                    } catch (e) {}
                    location.reload();
                }, 300);
            })();
        }

        
        function sunlightTurn() {
            if (!state.running) return;
            
            for (let i = 0; i < state.sunlight.cooldowns.length; i++) {
                if (state.sunlight.cooldowns[i] > 0) state.sunlight.cooldowns[i]--;
            }

            
            const avail = sunlightAbilities.map((a,i) => ({...a, idx:i}))
                .filter(a => (state.sunlight.cooldowns[a.idx] || 0) === 0);

            
            let choice;
            if (state.broken.hp <= 80 && avail.some(a=>a.name==='Solar Judgement')) {
                choice = avail.find(a=>a.name==='Solar Judgement');
            } else if (avail.length === 0) {
                choice = { name: 'Faint Pulse', damage: 18, idx: -1 };
            } else {
                choice = avail[Math.floor(Math.random() * avail.length)];
            }

            
            if (choice.damage >= 0) {
                state.broken.hp = Math.max(0, state.broken.hp - choice.damage);
                tinyAudio('Ejected.mp3');
            } else {
                state.sunlight.hp = Math.min(state.sunlight.max, state.sunlight.hp - choice.damage); 
                tinyAudio('Moonshine.mp3');
            }

            
            if (choice.idx >= 0 && sunlightAbilities[choice.idx] && sunlightAbilities[choice.idx].cooldown) {
                state.sunlight.cooldowns[choice.idx] = sunlightAbilities[choice.idx].cooldown;
            }

            updateHPUI();

            
            if (state.broken.hp <= 10) {
                finishBattle(false);
                return;
            }

            
            state.turn = 'player';
            refreshActionButtons();
        }

        
        function refreshActionButtons() {
            
            for (let i = 0; i < state.broken.cooldowns.length; i++) {
                if (state.broken.cooldowns[i] > 0) state.broken.cooldowns[i]--;
            }

            actionButtons.forEach((btn, i) => {
                const ab = brokenAbilities[i];
                const cd = state.broken.cooldowns[i] || 0;
                const isPlayerTurn = (state.turn === 'player' && state.running);

                const desc = btn && (btn.dataset?.desc || '');

                const setBtnTitle = (titleText) => {
                    btn.innerHTML = `
                        <div style="font-weight:900; line-height:1.05;">${titleText}</div>
                        <div style="font-size:0.72rem;opacity:0.95;color:#FFA500;margin-top:4px;line-height:1.1;">
                            ${desc}
                        </div>
                    `;
                };

                
                if (ab && ab.name === 'Bloodpatch') {
                    const uses = state.broken.bloodpatchUses || 0;
                    const remaining = Math.max(0, 3 - uses);

                    if (cd > 0) {
                        setBtnTitle(`${ab.name} (${cd}) • ${remaining} left`);
                        btn.disabled = true;
                        btn.style.opacity = '0.55';
                        btn.style.filter = 'grayscale(100%) brightness(0.65)';
                        btn.style.cursor = 'not-allowed';
                        return;
                    }

                    
                    if (remaining <= 0) {
                        setBtnTitle(`${ab.name} (0 left)`);
                        btn.disabled = true;
                        btn.style.opacity = '0.45';
                        btn.style.filter = 'grayscale(100%) brightness(0.55)';
                        btn.style.cursor = 'not-allowed';
                        return;
                    }

                    
                    setBtnTitle(`${ab.name} • ${remaining} left`);
                    btn.disabled = !isPlayerTurn;
                    if (!isPlayerTurn) {
                        btn.style.opacity = '0.55';
                        btn.style.filter = 'grayscale(100%) brightness(0.65)';
                        btn.style.cursor = 'not-allowed';
                    } else {
                        btn.style.opacity = '1';
                        btn.style.filter = 'none';
                        btn.style.cursor = 'pointer';
                    }
                    return;
                }

                if (cd > 0) {
                    setBtnTitle(`${ab.name} (${cd})`);
                    btn.disabled = true;
                    
                    btn.style.opacity = '0.55';
                    btn.style.filter = 'grayscale(100%) brightness(0.65)';
                    btn.style.cursor = 'not-allowed';
                } else {
                    setBtnTitle(ab.name);
                    
                    btn.disabled = !isPlayerTurn;
                    if (!isPlayerTurn) {
                        
                        btn.style.opacity = '0.55';
                        btn.style.filter = 'grayscale(100%) brightness(0.65)';
                        btn.style.cursor = 'not-allowed';
                    } else {
                        
                        btn.style.opacity = '1';
                        btn.style.filter = 'none';
                        btn.style.cursor = 'pointer';
                    }
                }
            });
        }

        actionButtons.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                if (!state.running || state.turn !== 'player') return;
                const ab = brokenAbilities[idx];
                if (!ab) return;

                
                if (ab.name === 'Bloodpatch') {
                    if (state.broken.bloodpatchUses >= 3) {
                        
                        const bpMsg = `Bloodpatch cannot be used anymore (3/3 uses expended).`;
                        try { addToBattleLog(bpMsg); } catch (e) {  }
                        return;
                    }
                    
                    state.broken.bloodpatchUses++;
                    state.broken.hp = state.broken.max;
                    tinyAudio('A Reflection Of Mistakes.mp3');
                    
                    if (ab.cooldown && ab.cooldown > 0) {
                        state.broken.cooldowns[idx] = ab.cooldown;
                    }
                    updateHPUI();

                    
                    state.turn = 'enemy';
                    refreshActionButtons();
                    setTimeout(sunlightTurn, 900 + Math.random()*700);
                    return;
                }

                
                if (ab.damage >= 0) {
                    
                    state.sunlight.hp = Math.max(0, state.sunlight.hp - ab.damage);
                    tinyAudio('Two Best Friends.mp3');
                } else {
                    
                    state.broken.hp = Math.min(state.broken.max, state.broken.hp - ab.damage);
                    tinyAudio('A Reflection Of Mistakes.mp3');
                }

                
                if (ab.cooldown && ab.cooldown > 0) {
                    state.broken.cooldowns[idx] = ab.cooldown;
                }

                updateHPUI();

                
                if (state.sunlight.hp <= 10) {
                    finishBattle(true);
                    return;
                }

                
                state.turn = 'enemy';
                refreshActionButtons();
                setTimeout(sunlightTurn, 900 + Math.random()*700);
            });
        });

        
        state.broken.cooldowns = Array(brokenAbilities.length).fill(0);
        state.sunlight.cooldowns = Array(sunlightAbilities.length).fill(0);

        
        setTimeout(() => {
            updateHPUI();
            state.turn = 'player';
            refreshActionButtons();
        }, 600);
    }

    
    window.__finalFight = {
        remove: () => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                try {
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                    document.documentElement.style.overflow = prevOverflow || '';
                    delete window.__finalFight;
                } catch (e) {  }
            }, 600);
        }
    };
}