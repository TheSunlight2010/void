export default async function startStainless() {
    if (document.getElementById('stainless-overlay')) return;

    try {
        const res = await fetch('./blocker.txt', { method: 'HEAD' });
        if (res.ok) {
            const prevOverflow = document.documentElement.style.overflow;
            document.documentElement.style.overflow = 'hidden';
            const overlay = document.createElement('div');
            overlay.id = 'stainless-overlay';
            overlay.style.position = 'fixed';
            overlay.style.inset = '0';
            overlay.style.background = '#000';
            overlay.style.zIndex = 30000;
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.flexDirection = 'column';
            overlay.style.color = '#888';
            overlay.style.fontFamily = 'Orbitron, monospace';
            overlay.style.padding = '1rem';
            overlay.style.boxSizing = 'border-box';
            const msg = document.createElement('div');
            msg.textContent = 'Stainless Steel is blocked.';
            msg.style.fontSize = 'clamp(1.2rem, 4vw, 2rem)';
            msg.style.fontWeight = '800';
            msg.style.textAlign = 'center';
            overlay.appendChild(msg);
            document.body.appendChild(overlay);
            return;
        }
    } catch (e) {}

    function typeText(el, text, delay = 30) {
        return new Promise(resolve => {
            el.textContent = '';
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

    
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const overlay = document.createElement('div');
    overlay.id = 'stainless-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = '#000';
    overlay.style.zIndex = 30000;
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.flexDirection = 'column';
    overlay.style.color = '#FFD700';
    overlay.style.fontFamily = 'Orbitron, monospace';
    overlay.style.padding = '1rem';
    overlay.style.boxSizing = 'border-box';

    const box = document.createElement('div');
    box.style.width = 'min(860px, 94%)';
    box.style.maxWidth = '960px';
    box.style.background = 'rgba(0,0,0,0.96)';
    box.style.border = 'none';
    box.style.borderRadius = '12px';
    box.style.padding = '1rem';
    box.style.boxSizing = 'border-box';
    box.style.display = 'flex';
    box.style.flexDirection = 'column';
    box.style.alignItems = 'center';
    box.style.gap = '0.8rem';
    overlay.appendChild(box);

    const line = document.createElement('div');
    line.style.color = '#FFD700';
    line.style.fontWeight = '800';
    line.style.fontSize = 'clamp(1rem, 3.8vw, 1.6rem)';
    line.style.textAlign = 'center';
    line.style.minHeight = '2.2rem';
    box.appendChild(line);



    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '0.8rem';
    actions.style.marginTop = '0.6rem';
    box.appendChild(actions);

    const btnYes = document.createElement('button');
    btnYes.className = 'game-button';
    btnYes.textContent = 'YES';
    btnYes.style.minWidth = '120px';
    const btnNo = document.createElement('button');
    btnNo.className = 'game-button';
    btnNo.textContent = 'NO';
    btnNo.style.minWidth = '120px';
    actions.appendChild(btnYes);
    actions.appendChild(btnNo);

    document.body.appendChild(overlay);

    
    btnYes.disabled = true;
    btnNo.disabled = true;
    
    btnYes.style.opacity = '0.6';
    btnNo.style.opacity = '0.6';
    btnYes.style.cursor = 'default';
    btnNo.style.cursor = 'default';

    (async () => {
        await new Promise(r => setTimeout(r, 180));
        await typeText(line, "Player, you came this far; do you wish to go down this route?");
        
        btnYes.disabled = false;
        btnNo.disabled = false;
        btnYes.style.opacity = '';
        btnNo.style.opacity = '';
        btnYes.style.cursor = '';
        btnNo.style.cursor = '';
    })();

    function closeOverlay() {
        try {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        } catch (e) {}
        try { document.documentElement.style.overflow = prevOverflow || ''; } catch (e) {}
    }

    btnNo.addEventListener('click', async () => {
        
        line.textContent = '';
        await typeText(line, "Very well. Come back when you are ready.");
        
        setTimeout(() => {
            closeOverlay();
        }, 900);
    });

    btnYes.addEventListener('click', async () => {
        
        if (window.__stainlessBlocked) {
            line.textContent = '';
            await typeText(line, "Stainless Steel is locked by blocker.txt.");
            setTimeout(() => { closeOverlay(); }, 1500);
            return;
        }
        try {
            localStorage.setItem('stainlessConfirmed', 'true');
        } catch (e) { console.error('Failed to persist stainlessConfirmed', e); }
        if (window.gameState) {
            try { window.gameState.stainlessConfirmed = true; } catch (e) {}
        }
        
        line.textContent = '';
        await typeText(line, "Confirmed. Use The Knight in battle.");
        
        try { if (typeof window.updateStainlessVisibility === 'function') window.updateStainlessVisibility(); } catch (e) {}
        
        setTimeout(() => {
            closeOverlay();
            
            try {
                if (typeof updateShopUI === 'function') updateShopUI();
                if (typeof saveGameData === 'function') saveGameData();
            } catch (e) {}
        }, 1100);
    });
}