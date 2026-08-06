

export default function startCalmRoom() {
    if (document.getElementById('calmroom-overlay')) return;

    
    (function pauseAllAudio() {
        try {
            
            const knownHandles = [
                '__finalFightBGM',
                '__deanBGM',
                '__fateSixLeft',
                '__previewAudio',
                '__deanBGM',
                'currentBattleMusic',
                'window.__finalFightBGM',
                'window.__deanBGM',
                'window.__fateSixLeft'
            ];
            knownHandles.forEach(name => {
                try {
                    const ref = window[name];
                    if (ref && typeof ref.pause === 'function') {
                        try { ref.pause(); } catch (e) {}
                    }
                } catch (e) {}
            });
        } catch (e) {}

        
        try {
            document.querySelectorAll('audio, video').forEach(media => {
                try { media.pause(); } catch (e) {}
                try { media.currentTime = 0; } catch (e) {}
            });
        } catch (e) {}
    })();

    const overlay = document.createElement('div');
    overlay.id = 'calmroom-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = 32000;
    overlay.style.background = '#000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'stretch';
    overlay.style.justifyContent = 'center';
    overlay.style.overflow = 'hidden';
    overlay.style.touchAction = 'none';

    
    const canvas = document.createElement('canvas');
    canvas.id = 'calmroom-canvas';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.objectFit = 'cover';
    overlay.appendChild(canvas);

    
    const hint = document.createElement('div');
    hint.textContent = 'Tap anywhere or press ESC to exit';
    hint.style.position = 'absolute';
    hint.style.left = '50%';
    hint.style.bottom = '22px';
    hint.style.transform = 'translateX(-50%)';
    hint.style.color = '#FFD700';
    hint.style.fontFamily = 'Orbitron, monospace';
    hint.style.fontWeight = '700';
    hint.style.fontSize = '0.9rem';
    hint.style.zIndex = '32010';
    hint.style.opacity = '0.9';
    overlay.appendChild(hint);

    document.body.appendChild(overlay);

    
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        const newW = Math.max(1, Math.floor(overlay.clientWidth * dpr));
        const newH = Math.max(1, Math.floor(overlay.clientHeight * dpr));

        
        if (typeof w === 'number' && w > 0 && Array.isArray(stars) && stars.length) {
            const scaleX = newW / w;
            const scaleY = (h && h > 0) ? (newH / h) : 1;
            for (let s of stars) {
                s.x = s.x * scaleX;
                s.y = s.y * scaleY;
            }
        }

        w = newW;
        h = newH;
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = overlay.clientWidth + 'px';
        canvas.style.height = overlay.clientHeight + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    
    const stars = [];
    const STAR_COUNT = Math.max(40, Math.floor((overlay.clientWidth * overlay.clientHeight) / 45000));
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            z: 0.2 + Math.random() * 0.8,
            vx: (Math.random() - 0.5) * 0.03,
            vy: -0.02 - Math.random()*0.03,
            size: 0.6 + Math.random() * 1.6,
            twinkle: Math.random() * Math.PI * 2
        });
    }

    let last = performance.now();
    let rafId = null;
    function frame(now) {
        const dt = Math.min(60, now - last);
        last = now;
        ctx.clearRect(0, 0, w, h);

        
        const bg = ctx.createLinearGradient(0, 0, 0, h);
        bg.addColorStop(0, '#000000');
        bg.addColorStop(1, '#020203');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        
        for (let s of stars) {
            s.x += s.vx * dt * s.z * dpr;
            s.y += s.vy * dt * s.z * dpr;
            s.twinkle += 0.015 * dt * (0.8 + s.z);
            
            if (s.y < -20 * dpr) s.y = h + 20 * dpr;
            if (s.x < -40 * dpr) s.x = w + 40 * dpr;
            if (s.x > w + 40 * dpr) s.x = -40 * dpr;

            const alpha = 0.4 + 0.6 * Math.abs(Math.sin(s.twinkle));
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,230,120,${alpha})`;
            ctx.arc(s.x, s.y, s.size * s.z * dpr, 0, Math.PI * 2);
            ctx.fill();
        }

        
        ctx.globalCompositeOperation = 'lighter';
        const rg = ctx.createRadialGradient(w * 0.35, h * 0.25, 0, w * 0.35, h * 0.25, Math.max(w, h) * 0.6);
        rg.addColorStop(0, 'rgba(255,230,150,0.02)');
        rg.addColorStop(1, 'rgba(255,230,150,0)');
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'source-over';

        rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    
    
    try {
        
        if (window.__calmRoomAudio) {
            try { window.__calmRoomAudio.pause(); } catch (e) {}
            window.__calmRoomAudio = null;
        }
        const calmAudio = new Audio('calmroom.mp3');
        calmAudio.loop = true;
        calmAudio.volume = 0.36;
        
        calmAudio.play().catch(() => {  });
        
        window.__calmRoomAudio = calmAudio;
    } catch (e) {
        console.error('Failed to start calmroom audio', e);
        window.__calmRoomAudio = null;
    }

    function cleanup() {
        try {
            if (rafId) cancelAnimationFrame(rafId);
        } catch (e) {}
        try { window.removeEventListener('resize', resize); } catch (e) {}
        try { document.documentElement.style.overflow = prevOverflow || ''; } catch (e) {}
        try { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); } catch (e) {}

        
        try {
            if (window.__calmRoomAudio) {
                try { window.__calmRoomAudio.pause(); } catch (e) {}
                try { window.__calmRoomAudio.currentTime = 0; } catch (e) {}
                try { window.__calmRoomAudio.src = ''; } catch (e) {}
                window.__calmRoomAudio = null;
            }
        } catch (e) {
            console.error('Failed to stop calmroom audio during cleanup', e);
        }
    }

    
    function dismiss() {
        cleanup();
    }
    overlay.addEventListener('click', dismiss, { once: true });
    window.addEventListener('keydown', function onKey(e) {
        if (e.key === 'Escape') {
            window.removeEventListener('keydown', onKey);
            dismiss();
        }
    });

    
    window.__calmRoom = {
        close: cleanup
    };
}