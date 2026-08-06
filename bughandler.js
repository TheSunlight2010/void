function removeStrayBackButton() {
    try {
        
        const btn = document.getElementById('back-button');
        if (btn) {
            
            const shopScreen = document.getElementById('shop-screen');
            if (!shopScreen || !shopScreen.contains(btn)) {
                try { btn.remove(); } catch (e) { btn.style.display = 'none'; }
            }
        }

        
        const shopBtn = document.getElementById('shop-back-button');
        if (shopBtn) {
            const shopScreen = document.getElementById('shop-screen');
            
            if (!shopScreen || !shopScreen.contains(shopBtn)) {
                try { shopBtn.remove(); } catch (e) { shopBtn.style.display = 'none'; }
            }
        }
    } catch (e) { console.error('bughandler.removeStrayBackButton', e); }
}

function hardenCharacterSelection() {
    
    const grid = document.querySelector('.character-grid');
    if (!grid) return;

    
    if (grid.dataset.bughandlerAttached === '1') return;
    grid.dataset.bughandlerAttached = '1';

    grid.addEventListener('click', (ev) => {
        try {
            
            const card = ev.target.closest('.character-card');
            if (!card) return;
            ev.stopPropagation();
            ev.preventDefault();

            
            const characterKey = String(card.dataset.character || '').trim();
            if (!characterKey) return;

            
            const cards = Array.from(document.querySelectorAll('.character-card'));
            cards.forEach(c => {
                c.dataset._disabledByBughandler = '1';
                c.style.pointerEvents = 'none';
                c.style.filter = 'grayscale(0.02)'; 
            });

            
            const startFn = (typeof window.startBattle === 'function') ? window.startBattle : null;

            
            
            if (startFn) {
                try {
                    startFn(characterKey);
                } catch (e) {
                    console.error('bughandler.startBattle failed', e);
                }
            } else {
                
                try {
                    const ev2 = new CustomEvent('bughandler:requestStartBattle', { detail: { characterKey } });
                    window.dispatchEvent(ev2);
                } catch (e) {}
            }

            
            setTimeout(() => {
                cards.forEach(c => {
                    delete c.dataset._disabledByBughandler;
                    c.style.pointerEvents = '';
                    c.style.filter = '';
                });
            }, 1200);
        } catch (e) {
            console.error('bughandler.characterClickHandler error', e);
        }
    }, { capture: true, passive: false });
}

function observeScreensAndFix() {
    
    const observer = new MutationObserver(() => removeStrayBackButton());
    observer.observe(document.body, { childList: true, subtree: true, attributes: false });

    
    window.addEventListener('screen:changed', () => {
        
        removeStrayBackButton();
        const current = (window.gameState && window.gameState.currentScreen) ? window.gameState.currentScreen : '';
        if (current === 'characterSelect' || document.getElementById('character-select')?.classList.contains('active')) {
            setTimeout(hardenCharacterSelection, 80); 
        }
    });

    
    window.addEventListener('focus', removeStrayBackButton);

    
    window.addEventListener('visibilitychange', () => {
        removeStrayBackButton();
        
        setTimeout(removeStrayBackButton, 250);
    });
    window.addEventListener('orientationchange', () => {
        removeStrayBackButton();
        
        setTimeout(removeStrayBackButton, 300);
    });

    
    window.addEventListener('touchstart', () => {
        removeStrayBackButton();
    }, { passive: true });

    
    setInterval(removeStrayBackButton, 2500);
}

function initOnTitle() {
    
    try {
        
        removeStrayBackButton();

        
        if (document.getElementById('character-select')?.classList.contains('active') ||
            document.getElementById('characters-screen')?.classList.contains('active')) {
            setTimeout(hardenCharacterSelection, 80);
        }

        observeScreensAndFix();
    } catch (e) {
        console.error('bughandler.initOnTitle error', e);
    }
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnTitle);
} else {
    initOnTitle();
}


window.__bughandler = {
    removeStrayBackButton,
    hardenCharacterSelection,
    initOnTitle
};