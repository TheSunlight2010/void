export default function act1() {
    try {
        try { if (window.gameState && window.gameState.currentBattleMusic && typeof window.gameState.currentBattleMusic.pause === 'function') window.gameState.currentBattleMusic.pause(); } catch (e) {}
        try { if (window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') window.__finalFightBGM.pause(); } catch (e) {}
        try { if (window.__deanBGM && typeof window.__deanBGM.pause === 'function') window.__deanBGM.pause(); } catch (e) {}
        
        if (document.getElementById('act1-white-overlay')) return;
      

        const overlay = document.createElement('div');
        overlay.id = 'act1-white-overlay';
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.zIndex = '40000';
        overlay.style.background = '#ffffff';
        
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 1000ms linear';
        overlay.style.pointerEvents = 'auto'; 
        overlay.style.display = 'block';

        
        document.body.appendChild(overlay);
        
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });
        
    } catch (e) {
        console.error('act1 overlay failed', e);
    }
}