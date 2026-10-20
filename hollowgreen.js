export default function startHollowGreen() {
    if (document.getElementById('hollowgreen-overlay')) return;

    (function pauseAllMusic() {
        try {
            const handles = [
                '__finalFightBGM',
                '__deanBGM',
                '__fateSixLeft',
                '__previewAudio',
                'currentBattleMusic'
            ];
            handles.forEach(k => {
                try {
                    const ref = window[k];
                    if (ref && typeof ref.pause === 'function') {
                        try { ref.pause(); } catch (e) {}
                        try { ref.currentTime = 0; } catch (e) {}
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

        try { window.__finalFightBGM = null; } catch (e) {}
        try { window.__deanBGM = null; } catch (e) {}
        try { window.__fateSixLeft = null; } catch (e) {}
        try { window.__previewAudio = null; } catch (e) {}
        try { window.gameState && (window.gameState.currentBattleMusic = null); } catch (e) {}
    })();

    const overlay = document.createElement('div');
    overlay.id = 'hollowgreen-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '99999';
    overlay.style.background = '#0a0a0a';
    overlay.style.cursor = 'default';
    overlay.style.overflow = 'hidden';

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    // ===== INJECT STYLES =====
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
      #hollowgreen-overlay {
        --hollow-green: #00ff41;
        --hollow-green-dim: #00cc33;
        --hollow-green-dark: #006622;
        --hollow-purple: #b026ff;
        --hollow-purple-dim: #7a1fa0;
        --hollow-black: #0a0a0a;
        --hollow-gray: #1a1a1a;
        font-family: 'Orbitron', monospace;
        background: var(--hollow-black);
        color: var(--hollow-green);
        width: 100%;
        height: 100vh;
        height: 100dvh;
      }
      #hollowgreen-overlay * { margin: 0; padding: 0; box-sizing: border-box; }
      #hollowgreen-overlay .hollow-widget-container {
        width: 100%;
        height: 100%;
        position: relative;
      }
      #hollowgreen-overlay .hollow-title-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background: linear-gradient(180deg, #000000 0%, #0d1f0d 40%, #001a00 70%, #0a0014 100%);
        position: relative;
      }
      #hollowgreen-overlay .hollow-title-screen::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 20% 80%, rgba(0,255,65,0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(176,38,255,0.06) 0%, transparent 50%);
        pointer-events: none;
      }
      #hollowgreen-overlay .hollow-title-main {
        font-size: clamp(0.7rem, 3.5vw, 1.2rem);
        letter-spacing: clamp(2px, 2vw, 8px);
        text-align: center;
        color: var(--hollow-green-dim);
        text-shadow: 0 0 10px rgba(0,255,65,0.3);
        margin-bottom: -5px;
        opacity: 0.8;
      }
      #hollowgreen-overlay .hollow-title-sub {
        max-width: 100%;
        padding: 0 12px;
        font-size: clamp(1.55rem, 10vw, 3.5rem);
        font-weight: 900;
        letter-spacing: clamp(1px, 1.5vw, 6px);
        line-height: 1.1;
        text-align: center;
        color: var(--hollow-green);
        text-shadow:
          0 0 20px rgba(0,255,65,0.5),
          0 0 40px rgba(0,255,65,0.2),
          0 0 80px rgba(176,38,255,0.15);
        margin-bottom: clamp(4px, 1.5vh, 10px);
        animation: hollowPulse 3s ease-in-out infinite;
      }
      @keyframes hollowPulse {
        0%, 100% { text-shadow: 0 0 20px rgba(0,255,65,0.5), 0 0 40px rgba(0,255,65,0.2), 0 0 80px rgba(176,38,255,0.15); }
        50% { text-shadow: 0 0 30px rgba(0,255,65,0.7), 0 0 60px rgba(0,255,65,0.3), 0 0 100px rgba(176,38,255,0.25); }
      }
      #hollowgreen-overlay .hollow-dust-display {
        position: absolute;
        top: 20px;
        right: 25px;
        font-family: 'Share Tech Mono', monospace;
        font-size: 1.1rem;
        color: var(--hollow-green);
        background: rgba(0,255,65,0.08);
        padding: 8px 16px;
        border: 1px solid var(--hollow-green-dark);
        border-radius: 4px;
      }
      #hollowgreen-overlay .hollow-title-buttons {
        display: flex;
        flex-direction: column;
        gap: clamp(7px, 2vh, 16px);
        margin-top: clamp(12px, 5vh, 40px);
        width: min(280px, calc(100vw - 32px));
      }
      #hollowgreen-overlay .hollow-btn {
        font-family: 'Orbitron', monospace;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 2px;
        padding: 14px 24px;
        border: 2px solid var(--hollow-green-dark);
        background: rgba(0,255,65,0.05);
        color: var(--hollow-green);
        cursor: pointer;
        transition: all 0.25s ease;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-btn::before {
        content: '';
        position: absolute;
        left: -100%;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,255,65,0.15), transparent);
        transition: left 0.4s ease;
      }
      #hollowgreen-overlay .hollow-btn:hover::before { left: 100%; }
      #hollowgreen-overlay .hollow-btn:hover {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.12);
        box-shadow: 0 0 20px rgba(0,255,65,0.2);
        transform: translateY(-1px);
      }
      #hollowgreen-overlay .hollow-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        border-color: #333;
        color: #555;
      }
      #hollowgreen-overlay .hollow-btn-gold {
        font-family: 'Orbitron', monospace;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 2px;
        padding: 14px 24px;
        border: 2px solid #b8860b;
        background: rgba(255,215,0,0.08);
        color: #ffd700;
        cursor: pointer;
        transition: all 0.25s ease;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-btn-gold::before {
        content: '';
        position: absolute;
        left: -100%;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        transition: left 0.4s ease;
      }
      #hollowgreen-overlay .hollow-btn-gold:hover::before { left: 100%; }
      #hollowgreen-overlay .hollow-btn-gold:hover {
        border-color: #ffd700;
        background: rgba(255,215,0,0.15);
        box-shadow: 0 0 20px rgba(255,215,0,0.3);
        transform: translateY(-1px);
      }
      #hollowgreen-overlay .hollow-screen {
        display: none;
        height: 100%;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
      }
      #hollowgreen-overlay .hollow-screen.active { display: flex; }
      #hollowgreen-overlay #hollowBattleScreen {
        min-height: 0;
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      #hollowgreen-overlay .hollow-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--hollow-green-dark);
      }
      #hollowgreen-overlay .hollow-header h2 {
        margin: 0;
        font-size: 1.5rem;
        letter-spacing: 3px;
        color: var(--hollow-green);
      }
      #hollowgreen-overlay .hollow-back-btn {
        font-family: 'Orbitron', monospace;
        font-size: 0.8rem;
        padding: 8px 16px;
        border: 1px solid var(--hollow-green-dark);
        background: rgba(0,255,65,0.05);
        color: var(--hollow-green-dim);
        cursor: pointer;
        transition: all 0.2s;
      }
      #hollowgreen-overlay .hollow-back-btn:hover {
        border-color: var(--hollow-green);
        color: var(--hollow-green);
      }
      #hollowgreen-overlay .hollow-char-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 16px;
        padding: 10px;
      }
      #hollowgreen-overlay .hollow-char-card {
        background: rgba(0,255,65,0.03);
        border: 1px solid var(--hollow-green-dark);
        border-radius: 6px;
        padding: 14px;
        text-align: center;
        cursor: pointer;
        transition: all 0.25s;
        position: relative;
      }
      #hollowgreen-overlay .hollow-char-card:hover {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.08);
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(0,255,65,0.1);
      }
      #hollowgreen-overlay .hollow-char-card.locked {
        opacity: 0.4;
        cursor: not-allowed;
        border-color: #333;
      }
      #hollowgreen-overlay .hollow-char-card.locked:hover {
        border-color: #333;
        background: rgba(0,255,65,0.03);
        transform: none;
        box-shadow: none;
      }
      #hollowgreen-overlay .hollow-char-portrait {
        width: 80px;
        height: 80px;
        background: var(--hollow-gray);
        border-radius: 12px;
        margin: 0 auto 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        border: 2px solid var(--hollow-green-dark);
        color: var(--hollow-green-dim);
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-char-portrait img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      #hollowgreen-overlay .hollow-char-name {
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 4px;
      }
      #hollowgreen-overlay .hollow-char-level {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.75rem;
        color: var(--hollow-green-dim);
      }
      #hollowgreen-overlay .hollow-char-hp {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.7rem;
        color: var(--hollow-purple-dim);
        margin-top: 4px;
      }
      #hollowgreen-overlay .hollow-shop-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        padding: 10px;
      }
      #hollowgreen-overlay .hollow-shop-item {
        background: rgba(0,255,65,0.03);
        border: 1px solid var(--hollow-green-dark);
        border-radius: 6px;
        padding: 16px;
        text-align: center;
        transition: all 0.25s;
      }
      #hollowgreen-overlay .hollow-shop-item:hover {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.06);
      }
      #hollowgreen-overlay .hollow-shop-portrait {
        width: 70px;
        height: 70px;
        background: var(--hollow-gray);
        border-radius: 12px;
        margin: 0 auto 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        border: 2px solid var(--hollow-green-dark);
        color: var(--hollow-green-dim);
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-shop-portrait img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      #hollowgreen-overlay .hollow-shop-name {
        font-size: 0.9rem;
        font-weight: 700;
        margin-bottom: 4px;
      }
      #hollowgreen-overlay .hollow-shop-price {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.85rem;
        color: var(--hollow-green);
        margin-bottom: 10px;
      }
      #hollowgreen-overlay .hollow-shop-price.affordable { color: var(--hollow-green); }
      #hollowgreen-overlay .hollow-shop-price.too-much { color: #ff4444; }
      #hollowgreen-overlay .hollow-buy-btn {
        font-family: 'Orbitron', monospace;
        font-size: 0.75rem;
        padding: 8px 16px;
        border: 1px solid var(--hollow-green-dark);
        background: rgba(0,255,65,0.08);
        color: var(--hollow-green);
        cursor: pointer;
        transition: all 0.2s;
        width: 100%;
      }
      #hollowgreen-overlay .hollow-buy-btn:hover:not(:disabled) {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.15);
      }
      #hollowgreen-overlay .hollow-buy-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        color: #555;
        border-color: #333;
        background: rgba(255,255,255,0.02);
      }
      #hollowgreen-overlay .hollow-battle-arena {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1 1 auto;
        min-height: 0;
        padding: clamp(8px, 2vh, 20px) clamp(4px, 4vw, 40px);
        position: relative;
      }
      #hollowgreen-overlay .hollow-fighter {
        text-align: center;
        flex: 1;
        min-width: 0;
      }
      #hollowgreen-overlay .hollow-fighter-sprite {
        width: min(120px, 100%);
        height: auto;
        aspect-ratio: 1;
        max-width: clamp(58px, 20vw, 120px);
        background: var(--hollow-gray);
        border-radius: 8px;
        margin: 0 auto 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        border: 2px solid var(--hollow-green-dark);
        color: var(--hollow-green);
        position: relative;
        transition: all 0.3s;
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-fighter-sprite img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      #hollowgreen-overlay .hollow-fighter-sprite.wounded {
        border-color: #ff4444;
        box-shadow: 0 0 15px rgba(255,68,68,0.2);
      }
      #hollowgreen-overlay .hollow-fighter-sprite.shake {
        animation: hollowShake 0.3s ease;
      }
      @keyframes hollowShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      #hollowgreen-overlay .hollow-fighter-name {
        font-size: clamp(0.65rem, 3vw, 1rem);
        font-weight: 700;
        letter-spacing: clamp(0px, 0.25vw, 1px);
        margin-bottom: 6px;
        overflow-wrap: anywhere;
      }
      #hollowgreen-overlay .hollow-health-bar-bg {
        width: min(140px, 100%);
        height: 12px;
        background: var(--hollow-gray);
        border-radius: 6px;
        margin: 0 auto;
        overflow: hidden;
        border: 1px solid var(--hollow-green-dark);
      }
      #hollowgreen-overlay .hollow-health-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--hollow-green-dark), var(--hollow-green));
        border-radius: 6px;
        transition: width 0.4s ease, background 0.4s;
      }
      #hollowgreen-overlay .hollow-health-bar-fill.low {
        background: linear-gradient(90deg, #660000, #ff4444);
      }
      #hollowgreen-overlay .hollow-health-text {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.75rem;
        margin-top: 4px;
        color: var(--hollow-green-dim);
      }
      #hollowgreen-overlay .hollow-vs {
        flex: 0 0 auto;
        font-size: clamp(1rem, 6vw, 2rem);
        font-weight: 900;
        color: var(--hollow-purple);
        text-shadow: 0 0 15px rgba(176,38,255,0.4);
        align-self: center;
        padding: 0 clamp(4px, 2vw, 20px);
      }
      #hollowgreen-overlay .hollow-battle-log {
        background: rgba(0,0,0,0.5);
        border: 1px solid var(--hollow-green-dark);
        border-radius: 6px;
        flex: 0 1 100px;
        padding: clamp(6px, 1.5vh, 12px);
        margin: 8px clamp(0px, 4vw, 40px);
        min-height: 48px;
        max-height: 120px;
        overflow-y: auto;
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.8rem;
        color: var(--hollow-green-dim);
      }
      #hollowgreen-overlay .hollow-battle-log-entry {
        margin-bottom: 4px;
        padding-left: 8px;
        border-left: 2px solid var(--hollow-green-dark);
        animation: hollowFadeIn 0.3s ease;
      }
      @keyframes hollowFadeIn {
        from { opacity: 0; transform: translateX(-10px); }
        to { opacity: 1; transform: translateX(0); }
      }
      #hollowgreen-overlay .hollow-ability-panel {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: clamp(5px, 1.5vw, 10px);
        flex: 0 0 auto;
        padding: clamp(4px, 1vh, 10px) clamp(0px, 4vw, 40px);
        margin-top: 0;
      }
      #hollowgreen-overlay .hollow-ability-btn {
        font-family: 'Orbitron', monospace;
        font-size: clamp(0.62rem, 2vw, 0.8rem);
        padding: clamp(6px, 1.5vh, 12px) clamp(7px, 1.5vw, 16px);
        border: 1px solid var(--hollow-green-dark);
        background: rgba(0,255,65,0.05);
        color: var(--hollow-green);
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
        position: relative;
      }
      #hollowgreen-overlay .hollow-ability-btn:hover:not(:disabled) {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.12);
        transform: translateY(-1px);
      }
      #hollowgreen-overlay .hollow-ability-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        color: #444;
        border-color: #222;
      }
      #hollowgreen-overlay .hollow-ability-btn.heal {
        border-color: rgba(176,38,255,0.3);
        color: var(--hollow-purple-dim);
      }
      #hollowgreen-overlay .hollow-ability-btn.heal:hover:not(:disabled) {
        border-color: var(--hollow-purple);
        background: rgba(176,38,255,0.08);
      }
      #hollowgreen-overlay .hollow-ability-name {
        font-weight: 700;
        display: block;
        margin-bottom: 2px;
      }
      #hollowgreen-overlay .hollow-ability-meta {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.7rem;
        opacity: 0.7;
      }
      #hollowgreen-overlay .hollow-cd-badge {
        position: absolute;
        top: 4px;
        right: 6px;
        background: rgba(255,68,68,0.3);
        color: #ff8888;
        font-size: 0.65rem;
        padding: 2px 6px;
        border-radius: 3px;
      }
      #hollowgreen-overlay .hollow-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.85);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      #hollowgreen-overlay .hollow-modal {
        background: var(--hollow-black);
        border: 1px solid var(--hollow-green-dark);
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        padding: 24px;
      }
      #hollowgreen-overlay .hollow-modal h3 {
        margin: 0 0 16px 0;
        font-size: 1.3rem;
        color: var(--hollow-green);
        letter-spacing: 2px;
      }
      #hollowgreen-overlay .hollow-modal-bio {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.85rem;
        color: var(--hollow-green-dim);
        line-height: 1.6;
        margin-bottom: 16px;
        padding: 12px;
        background: rgba(0,255,65,0.03);
        border-left: 3px solid var(--hollow-green-dark);
      }
      #hollowgreen-overlay .hollow-modal-abilities {
        display: grid;
        gap: 8px;
      }
      #hollowgreen-overlay .hollow-modal-ability {
        display: flex;
        justify-content: space-between;
        padding: 10px 12px;
        background: rgba(0,255,65,0.04);
        border: 1px solid var(--hollow-green-dark);
        border-radius: 4px;
      }
      #hollowgreen-overlay .hollow-modal-ability-name { font-weight: 700; }
      #hollowgreen-overlay .hollow-modal-ability-dmg {
        font-family: 'Share Tech Mono', monospace;
        color: var(--hollow-green-dim);
      }
      #hollowgreen-overlay .hollow-modal-ability-dmg.heal { color: var(--hollow-purple-dim); }
      #hollowgreen-overlay .hollow-modal-close {
        margin-top: 16px;
        width: 100%;
        font-family: 'Orbitron', monospace;
        padding: 10px;
        border: 1px solid var(--hollow-green-dark);
        background: rgba(0,255,65,0.08);
        color: var(--hollow-green);
        cursor: pointer;
        transition: all 0.2s;
      }
      #hollowgreen-overlay .hollow-modal-close:hover {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.15);
      }
      #hollowgreen-overlay .hollow-result-screen {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.92);
        z-index: 2000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.5s;
      }
      #hollowgreen-overlay .hollow-result-screen.active { opacity: 1; }
      #hollowgreen-overlay .hollow-result-title {
        font-size: 3rem;
        font-weight: 900;
        letter-spacing: 6px;
        margin-bottom: 16px;
      }
      #hollowgreen-overlay .hollow-result-title.win {
        color: var(--hollow-green);
        text-shadow: 0 0 30px rgba(0,255,65,0.4);
      }
      #hollowgreen-overlay .hollow-result-title.lose {
        color: #ff4444;
        text-shadow: 0 0 30px rgba(255,68,68,0.4);
      }
      #hollowgreen-overlay .hollow-result-stats {
        font-family: 'Share Tech Mono', monospace;
        font-size: 1rem;
        color: var(--hollow-green-dim);
        margin-bottom: 24px;
        text-align: center;
      }
      #hollowgreen-overlay .hollow-result-btn {
        font-family: 'Orbitron', monospace;
        font-size: 1rem;
        padding: 14px 32px;
        border: 2px solid var(--hollow-green-dark);
        background: rgba(0,255,65,0.08);
        color: var(--hollow-green);
        cursor: pointer;
        transition: all 0.25s;
        letter-spacing: 2px;
      }
      #hollowgreen-overlay .hollow-result-btn:hover {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.15);
        box-shadow: 0 0 20px rgba(0,255,65,0.2);
      }
      #hollowgreen-overlay .hollow-xp-bar {
        width: 100%;
        height: 4px;
        background: var(--hollow-gray);
        margin-top: 6px;
        border-radius: 2px;
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-xp-fill {
        height: 100%;
        background: var(--hollow-purple);
        border-radius: 2px;
        transition: width 0.3s;
      }
      #hollowgreen-overlay .hollow-turn-indicator {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.75rem;
        color: var(--hollow-purple-dim);
        letter-spacing: 2px;
        padding: 4px 12px;
        border: 1px solid var(--hollow-purple-dim);
        border-radius: 4px;
        background: rgba(176,38,255,0.05);
      }
      #hollowgreen-overlay .hollow-turn-indicator.player-turn {
        border-color: var(--hollow-green);
        color: var(--hollow-green);
        background: rgba(0,255,65,0.05);
      }
      /* ===== THE LAB STYLES ===== */
      #hollowgreen-overlay .hollow-lab-screen {
        display: none;
        height: 100%;
        flex-direction: column;
        position: relative;
      }
      #hollowgreen-overlay .hollow-lab-screen.active { display: flex; }
      #hollowgreen-overlay .hollow-lab-canvas-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-lab-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
      #hollowgreen-overlay .hollow-lab-ui {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      #hollowgreen-overlay .hollow-lab-ui > * { pointer-events: auto; }
      #hollowgreen-overlay .hollow-lab-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
      }
      #hollowgreen-overlay .hollow-lab-header h2 {
        font-size: 1.4rem;
        letter-spacing: 4px;
        color: #ffd700;
        text-shadow: 0 0 15px rgba(255,215,0,0.3);
      }
      #hollowgreen-overlay .hollow-lab-subtitle {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.75rem;
        color: var(--hollow-green-dim);
        letter-spacing: 2px;
        margin-top: 4px;
      }
      #hollowgreen-overlay .hollow-lab-center {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: clamp(8px, 2vh, 20px);
        padding: 12px;
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      #hollowgreen-overlay .hollow-lab-selected-display {
        width: min(100%, 520px);
        text-align: center;
        background: rgba(0,0,0,0.6);
        border: 1px solid rgba(255,215,0,0.2);
        border-radius: 12px;
        padding: clamp(10px, 2vh, 20px) clamp(12px, 5vw, 40px);
        backdrop-filter: blur(8px);
      }
      #hollowgreen-overlay .hollow-lab-selected-portrait {
        width: clamp(56px, 14vh, 100px);
        height: clamp(56px, 14vh, 100px);
        background: var(--hollow-gray);
        border-radius: 12px;
        margin: 0 auto 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        border: 2px solid #ffd700;
        color: #ffd700;
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-lab-selected-portrait img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      #hollowgreen-overlay .hollow-lab-selected-name {
        font-size: clamp(0.8rem, 4vw, 1.1rem);
        font-weight: 700;
        letter-spacing: clamp(0px, 0.5vw, 2px);
        color: #ffd700;
        margin-bottom: 4px;
        overflow-wrap: anywhere;
      }
      #hollowgreen-overlay .hollow-lab-selected-meta {
        font-family: 'Share Tech Mono', monospace;
        font-size: clamp(0.65rem, 3vw, 0.75rem);
        color: var(--hollow-green-dim);
        line-height: 1.45;
        overflow-wrap: anywhere;
      }
      #hollowgreen-overlay .hollow-lab-manifest-btn {
        font-family: 'Orbitron', monospace;
        max-width: calc(100vw - 32px);
        font-size: clamp(0.9rem, 5vw, 1.2rem);
        font-weight: 900;
        letter-spacing: clamp(1px, 1vw, 4px);
        padding: clamp(10px, 2vh, 18px) clamp(16px, 8vw, 48px);
        border: 2px solid #ffd700;
        background: rgba(255,215,0,0.1);
        color: #ffd700;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-lab-manifest-btn::before {
        content: '';
        position: absolute;
        left: -100%;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        transition: left 0.5s ease;
      }
      #hollowgreen-overlay .hollow-lab-manifest-btn:hover::before { left: 100%; }
      #hollowgreen-overlay .hollow-lab-manifest-btn:hover {
        border-color: #ffd700;
        background: rgba(255,215,0,0.2);
        box-shadow: 0 0 30px rgba(255,215,0,0.3);
        transform: translateY(-2px);
      }
      #hollowgreen-overlay .hollow-lab-manifest-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        border-color: #555;
        color: #555;
      }
      #hollowgreen-overlay .hollow-lab-chance-display {
        font-family: 'Share Tech Mono', monospace;
        font-size: clamp(0.72rem, 3vw, 0.85rem);
        color: #ffd700;
        text-align: center;
        margin-top: 8px;
      }
      #hollowgreen-overlay .hollow-lab-dust-boost {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        margin-top: 12px;
      }
      #hollowgreen-overlay .hollow-lab-dust-boost label {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.75rem;
        color: var(--hollow-green-dim);
      }
      #hollowgreen-overlay .hollow-lab-dust-boost input[type="range"] {
        width: clamp(90px, 35vw, 160px);
        max-width: 100%;
        accent-color: #ffd700;
        flex: 0 1 auto;
      }
      #hollowgreen-overlay .hollow-lab-dust-boost span {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.8rem;
        color: #ffd700;
        min-width: 0;
        white-space: nowrap;
      }
      #hollowgreen-overlay .hollow-lab-select-btn {
        font-family: 'Orbitron', monospace;
        font-size: 0.8rem;
        padding: 10px 20px;
        border: 1px solid var(--hollow-green-dark);
        background: rgba(0,255,65,0.05);
        color: var(--hollow-green);
        cursor: pointer;
        transition: all 0.2s;
        letter-spacing: 1px;
      }
      #hollowgreen-overlay .hollow-lab-select-btn:hover {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.12);
      }
      #hollowgreen-overlay .hollow-white-fade {
        position: fixed;
        inset: 0;
        background: #ffffff;
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 1.5s ease;
      }
      #hollowgreen-overlay .hollow-white-fade.active {
        opacity: 1;
        pointer-events: auto;
      }
      #hollowgreen-overlay .hollow-manifest-toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        width: min(760px, calc(100vw - 32px));
        max-height: calc(100dvh - 24px);
        overflow-y: auto;
        padding: 8px;
        text-align: center;
        opacity: 0;
        transition: opacity 0.8s ease;
        pointer-events: none;
      }
      #hollowgreen-overlay .hollow-manifest-toast.active {
        opacity: 1;
      }
      #hollowgreen-overlay .hollow-manifest-toast-title {
        font-size: clamp(1.2rem, 8vw, 2.5rem);
        font-weight: 900;
        letter-spacing: clamp(1px, 1.5vw, 6px);
        line-height: 1.15;
        overflow-wrap: anywhere;
        color: #ffd700;
        text-shadow: 0 0 30px rgba(255,215,0,0.5);
        margin-bottom: 12px;
      }
      #hollowgreen-overlay .hollow-manifest-toast-sub {
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        font-weight: 700;
        letter-spacing: clamp(1px, 0.8vw, 3px);
        line-height: 1.3;
        overflow-wrap: anywhere;
        color: var(--hollow-green);
        text-shadow: 0 0 15px rgba(0,255,65,0.3);
      }
      #hollowgreen-overlay .hollow-lab-char-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 12px;
        padding: 10px;
        max-height: 300px;
        overflow-y: auto;
      }
      #hollowgreen-overlay .hollow-lab-char-card {
        background: rgba(0,255,65,0.03);
        border: 1px solid var(--hollow-green-dark);
        border-radius: 6px;
        padding: 12px;
        text-align: center;
        cursor: pointer;
        transition: all 0.25s;
      }
      #hollowgreen-overlay .hollow-lab-char-card:hover {
        border-color: var(--hollow-green);
        background: rgba(0,255,65,0.08);
        transform: translateY(-2px);
      }
      #hollowgreen-overlay .hollow-lab-char-card.selected {
        border-color: #ffd700;
        background: rgba(255,215,0,0.1);
        box-shadow: 0 0 15px rgba(255,215,0,0.15);
      }
      #hollowgreen-overlay .hollow-lab-char-card.no-manifest {
        opacity: 0.3;
        cursor: not-allowed;
        border-color: #333;
      }
      #hollowgreen-overlay .hollow-lab-char-card.no-manifest:hover {
        border-color: #333;
        background: rgba(0,255,65,0.03);
        transform: none;
        box-shadow: none;
      }
      #hollowgreen-overlay .hollow-lab-char-portrait {
        width: 60px;
        height: 60px;
        background: var(--hollow-gray);
        border-radius: 8px;
        margin: 0 auto 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        border: 2px solid var(--hollow-green-dark);
        color: var(--hollow-green-dim);
        overflow: hidden;
      }
      #hollowgreen-overlay .hollow-lab-char-portrait img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      #hollowgreen-overlay .hollow-lab-char-name {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 1px;
      }
      #hollowgreen-overlay .hollow-title-screen {
  display: none; /* Will be shown by JS after loading */
}
      #hollowgreen-overlay .hollow-loading-screen {
  position: fixed;
  inset: 0;
  background: #0a0a0a;
  z-index: 100000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s ease;
}
#hollowgreen-overlay .hollow-loading-screen.hidden {
  opacity: 0;
  pointer-events: none;
}
#hollowgreen-overlay .hollow-loading-content {
  text-align: center;
  width: 320px;
}
#hollowgreen-overlay .hollow-loading-title {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 6px;
  color: var(--hollow-green);
  text-shadow: 0 0 20px rgba(0,255,65,0.4);
  margin-bottom: 30px;
  animation: hollowPulse 2s ease-in-out infinite;
}
#hollowgreen-overlay .hollow-loading-bar-bg {
  width: 100%;
  height: 6px;
  background: var(--hollow-gray);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--hollow-green-dark);
}
#hollowgreen-overlay .hollow-loading-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--hollow-green-dark), var(--hollow-green));
  border-radius: 3px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(0,255,65,0.3);
}
#hollowgreen-overlay .hollow-loading-text {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
  color: var(--hollow-green-dim);
  margin-top: 12px;
  letter-spacing: 1px;
}
#hollowgreen-overlay .hollow-loading-count {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.75rem;
  color: #555;
  margin-top: 6px;
}
      @media (max-width: 480px) {
        #hollowgreen-overlay .hollow-title-screen {
          padding: max(12px, env(safe-area-inset-top)) 8px max(12px, env(safe-area-inset-bottom));
        }
        #hollowgreen-overlay .hollow-dust-display {
          top: max(10px, env(safe-area-inset-top));
          right: 10px;
          padding: 6px 9px;
          font-size: 0.9rem;
        }
        #hollowgreen-overlay .hollow-screen {
          padding: 10px;
        }
        #hollowgreen-overlay .hollow-header {
          margin-bottom: 10px;
          padding-bottom: 8px;
        }
        #hollowgreen-overlay .hollow-header h2 {
          font-size: clamp(0.85rem, 4vw, 1.2rem);
          letter-spacing: 1px;
        }
        #hollowgreen-overlay .hollow-back-btn {
          font-size: 0.68rem;
          padding: 7px 9px;
        }
        #hollowgreen-overlay .hollow-battle-arena {
          padding-right: 2px;
          padding-left: 2px;
        }
        #hollowgreen-overlay .hollow-battle-log {
          font-size: 0.72rem;
        }
        #hollowgreen-overlay .hollow-ability-name {
          overflow-wrap: anywhere;
        }
        #hollowgreen-overlay .hollow-ability-meta {
          font-size: 0.62rem;
        }
      }
      @media (max-height: 520px) {
        #hollowgreen-overlay .hollow-title-buttons {
          gap: 6px;
          margin-top: 10px;
        }
        #hollowgreen-overlay .hollow-btn {
          padding: 8px 12px;
          font-size: 0.82rem;
        }
        #hollowgreen-overlay .hollow-dust-display {
          top: 8px;
          right: 10px;
          padding: 5px 8px;
          font-size: 0.85rem;
        }
        #hollowgreen-overlay .hollow-screen {
          padding-top: 8px;
          padding-bottom: 8px;
        }
        #hollowgreen-overlay .hollow-header {
          margin-bottom: 6px;
          padding-bottom: 6px;
        }
        #hollowgreen-overlay .hollow-battle-arena {
          flex: 1 1 0;
        }
        #hollowgreen-overlay .hollow-fighter-sprite {
          max-width: min(84px, 16vh);
        }
        #hollowgreen-overlay .hollow-battle-log {
          flex-basis: 68px;
          min-height: 42px;
          margin-top: 4px;
          margin-bottom: 4px;
        }
        #hollowgreen-overlay .hollow-ability-panel {
          gap: 5px;
        }
        #hollowgreen-overlay .hollow-ability-btn {
          padding: 5px 7px;
          line-height: 1.2;
        }
      }
      @media (max-height: 380px) {
        #hollowgreen-overlay #hollowBattleScreen {
          gap: 2px;
        }
        #hollowgreen-overlay .hollow-fighter-sprite {
          max-width: min(64px, 17vh);
        }
        #hollowgreen-overlay .hollow-fighter-name {
          margin-bottom: 2px;
        }
        #hollowgreen-overlay .hollow-health-text {
          margin-top: 2px;
          font-size: 0.65rem;
        }
        #hollowgreen-overlay .hollow-battle-log {
          flex-basis: 52px;
          min-height: 36px;
          padding: 4px;
          font-size: 0.65rem;
        }
        #hollowgreen-overlay .hollow-ability-panel {
          padding-top: 2px;
          padding-bottom: 2px;
        }
      }
      @media (max-width: 480px) {
        #hollowgreen-overlay .hollow-lab-header {
          gap: 8px;
          padding: 10px 12px;
        }
        #hollowgreen-overlay .hollow-lab-header h2 {
          font-size: 1.05rem;
          letter-spacing: 2px;
        }
        #hollowgreen-overlay .hollow-lab-subtitle {
          max-width: 62vw;
          font-size: 0.62rem;
          letter-spacing: 1px;
          line-height: 1.4;
          overflow-wrap: anywhere;
        }
        #hollowgreen-overlay .hollow-lab-center {
          justify-content: flex-start;
          padding: 8px 12px max(8px, env(safe-area-inset-bottom));
        }
        #hollowgreen-overlay .hollow-lab-select-btn {
          max-width: 100%;
          padding: 9px 12px;
          font-size: 0.7rem;
        }
      }
      @media (max-height: 520px) {
        #hollowgreen-overlay .hollow-lab-header {
          padding-top: 8px;
          padding-bottom: 8px;
        }
        #hollowgreen-overlay .hollow-lab-center {
          justify-content: flex-start;
          gap: 8px;
          padding-top: 6px;
          padding-bottom: 6px;
        }
        #hollowgreen-overlay .hollow-lab-selected-display {
          padding-top: 8px;
          padding-bottom: 8px;
        }
        #hollowgreen-overlay .hollow-lab-selected-portrait {
          width: 56px;
          height: 56px;
          margin-bottom: 6px;
          font-size: 1.5rem;
        }
        #hollowgreen-overlay .hollow-lab-dust-boost {
          margin-top: 6px;
        }
        #hollowgreen-overlay .hollow-lab-manifest-btn {
          padding-top: 8px;
          padding-bottom: 8px;
        }
      }
    `;
    document.head.appendChild(style);

    // ===== INJECT HTML =====
    overlay.innerHTML = `
      <div class="hollow-widget-container" id="hollowWidget">
        <div class="hollow-title-screen" id="hollowTitleScreen">
          <div class="hollow-dust-display" id="hollowDustDisplay">Dust: 0</div>
          <div class="hollow-title-main">UNBROKEN:</div>
          <div class="hollow-title-sub">HOLLOWGREEN</div>
          <div class="hollow-title-buttons">
            <button class="hollow-btn" id="hollowEnterBtn">ENTER THE GARDEN</button>
            <button class="hollow-btn" id="hollowShopBtn">SHOP</button>
            <button class="hollow-btn" id="hollowCharsBtn">CHARACTERS</button>
          </div>
        </div>
        <div class="hollow-loading-screen" id="hollowLoadingScreen">
  <div class="hollow-loading-content">
    <div class="hollow-loading-title">HOLLOWGREEN</div>
    <div class="hollow-loading-bar-bg">
      <div class="hollow-loading-bar-fill" id="hollowLoadingBar" style="width:0%"></div>
    </div>
    <div class="hollow-loading-text" id="hollowLoadingText">Loading assets...</div>
    <div class="hollow-loading-count" id="hollowLoadingCount">0 / 0</div>
  </div>
</div>
        <div class="hollow-screen" id="hollowSelectScreen">
          <div class="hollow-header">
            <h2>CHOOSE YOUR FIGHTER</h2>
            <button class="hollow-back-btn" id="hollowSelectBack">BACK</button>
          </div>
          <div class="hollow-char-grid" id="hollowSelectGrid"></div>
        </div>
        <div class="hollow-screen" id="hollowShopScreen">
          <div class="hollow-header">
            <h2>SHOP</h2>
            <div style="display:flex; gap:10px;">
              <button class="hollow-btn-gold" id="hollowManifestBtn" style="display:none; font-size:0.75rem; padding:8px 16px; letter-spacing:1px;">MANIFEST</button>
              <button class="hollow-back-btn" id="hollowShopBack">BACK</button>
            </div>
          </div>
          <div class="hollow-dust-display" style="position:static; margin-bottom:10px; display:inline-block;">Dust: <span id="hollowShopDust">0</span></div>
          <div class="hollow-shop-grid" id="hollowShopGrid"></div>
        </div>
        <div class="hollow-screen" id="hollowCharsScreen">
          <div class="hollow-header">
            <h2>CHARACTERS</h2>
            <button class="hollow-back-btn" id="hollowCharsBack">BACK</button>
          </div>
          <div class="hollow-char-grid" id="hollowCharsGrid"></div>
        </div>
        <div class="hollow-screen" id="hollowBattleScreen">
          <div class="hollow-header">
            <h2>BATTLE</h2>
            <button class="hollow-back-btn" id="hollowBattleForfeit">FORFEIT</button>
          </div>
          <div class="hollow-battle-arena" id="hollowBattleArena">
            <div class="hollow-fighter" id="hollowPlayerSide">
              <div class="hollow-fighter-sprite" id="hollowPlayerSprite"><img src="" alt="" id="hollowPlayerImg"></div>
              <div class="hollow-fighter-name" id="hollowPlayerName">---</div>
              <div class="hollow-health-bar-bg">
                <div class="hollow-health-bar-fill" id="hollowPlayerHealthBar" style="width:100%"></div>
              </div>
              <div class="hollow-health-text" id="hollowPlayerHealthText">100/100</div>
            </div>
            <div class="hollow-vs">VS</div>
            <div class="hollow-fighter" id="hollowEnemySide">
              <div class="hollow-fighter-sprite" id="hollowEnemySprite"><img src="" alt="" id="hollowEnemyImg"></div>
              <div class="hollow-fighter-name" id="hollowEnemyName">---</div>
              <div class="hollow-health-bar-bg">
                <div class="hollow-health-bar-fill" id="hollowEnemyHealthBar" style="width:100%"></div>
              </div>
              <div class="hollow-health-text" id="hollowEnemyHealthText">100/100</div>
            </div>
            <div class="hollow-turn-indicator" id="hollowTurnIndicator">YOUR TURN</div>
          </div>
          <div class="hollow-battle-log" id="hollowBattleLog"></div>
          <div class="hollow-ability-panel" id="hollowAbilityPanel"></div>
        </div>
        <!-- THE LAB SCREEN -->
        <div class="hollow-lab-screen" id="hollowLabScreen">
          <div class="hollow-lab-canvas-container">
            <canvas class="hollow-lab-canvas" id="hollowLabCanvas"></canvas>
            <div class="hollow-lab-ui">
              <div class="hollow-lab-header">
                <div>
                  <h2>THE LAB</h2>
                  <div class="hollow-lab-subtitle">PROJECT: MANIFEST // WACHI'S EXPERIMENT</div>
                </div>
                <button class="hollow-back-btn" id="hollowLabBack">BACK</button>
              </div>
              <div class="hollow-lab-center">
                <div class="hollow-lab-selected-display" id="hollowLabSelectedDisplay">
                  <div class="hollow-lab-selected-portrait" id="hollowLabSelectedPortrait">?</div>
                  <div class="hollow-lab-selected-name" id="hollowLabSelectedName">SELECT A CHARACTER</div>
                  <div class="hollow-lab-selected-meta" id="hollowLabSelectedMeta">Choose someone to manifest</div>
                </div>
                <button class="hollow-lab-select-btn" id="hollowLabSelectCharBtn">SELECT CHARACTER</button>
                <div id="hollowLabManifestSection" style="display:none; text-align:center;">
                  <div class="hollow-lab-chance-display" id="hollowLabChanceDisplay">Base Chance: 10%</div>
                  <div class="hollow-lab-dust-boost">
                    <label>Dust Boost:</label>
                    <input type="range" id="hollowLabDustSlider" min="0" max="500" value="0" step="10">
                    <span id="hollowLabDustValue">0 Dust</span>
                  </div>
                  <button class="hollow-lab-manifest-btn" id="hollowLabManifestActionBtn">MANIFEST</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- WHITE FADE OVERLAY -->
        <div class="hollow-white-fade" id="hollowWhiteFade"></div>
        <!-- MANIFEST TOAST -->
        <div class="hollow-manifest-toast" id="hollowManifestToast">
          <div class="hollow-manifest-toast-title" id="hollowManifestToastTitle">MANIFESTATION COMPLETE!</div>
          <div class="hollow-manifest-toast-sub" id="hollowManifestToastSub">NEW CHARACTER UNLOCKED!</div>
        </div>
          <div class="hollow-manifest-toast-sub" id="hollowManifestToastSub">NEW CHARACTER UNLOCKED!</div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // ===== GAME LOGIC =====
    (function() {
      const hollowCharacters = {
        kite: {
          hollowKey: 'kite',
          hollowName: 'Kite',
          hollowSprite: 'kiteHG.png',
          hollowWoundedSprite: 'kiteHG_wounded.png',
          hollowBio: "I brought him through the Truest as a test, and the garden answered my curiosity with something unexpected. The Truest itself, that strange convergence of green and purple smoke that hangs where no geometry of the Void should permit, serves as a threshold I do not fully govern, a passage to this place I have named Hollowgreen Garden. Here, where the air hums with a quality that answers my light rather than receding from it, my shaping of his mind finally completes itself. In the Void he retains the ghost of his former vigil, a solemnity that surfaces when certain faces appear; yet in the garden that ghost exhales entirely. Kite has become pure mischief without remainder, a trickster who does not feel the absence of what he was because the Truest, in its strange generosity, has made my artifice absolute. I find this deeply satisfying, and I intend to learn whether the effect holds for others I have similarly... adjusted.",
          hollowBaseHP: 100,
          hollowManifestSource: 'myos',
          hollowAbilities: [
            { hollowName: 'Trick Shot', hollowDamage: 20, hollowDesc: 'Unpredictable attack' },
            { hollowName: 'Memory Lapse', hollowDamage: 15, hollowDesc: 'Confuse the enemy', hollowCooldown: 2 },
            { hollowName: '██████ Training', hollowDamage: 30, hollowDesc: 'Devastating combo', hollowCooldown: 3 },
            { hollowName: 'Smoke Bomb', hollowDamage: 10, hollowDesc: 'Escape and damage', hollowCooldown: 1 }
          ]
        },
        maturity: {
          hollowKey: 'maturity',
          hollowName: 'Maturity',
          hollowSprite: 'maturity.png',
          hollowWoundedSprite: 'maturity_wounded.png',
          hollowBio: "Of all the variables the Truest has presented, this one puzzles me most. I expected amplification, perhaps further fracture; instead the garden seems to smooth him. The Hollowgreen breathes with something older than my design, and where it touches him, his architecture steadies. His levity remains, that armor of mockery he wears against the memory of a queen's accidental death, but beneath it the fragmentation has quieted. He tends the strange flora with a patience I did not author, speaks with less fragmentation, tracks longer before he darts away. He claims to feel \"lighter,\" though he cannot name what has lifted. I do not trust a healing I do not understand, yet I record it faithfully. The Truest draws from a well I have not mapped, and for now I watch to see if his restored sanity diminishes his capacity for violence when I require it, or if it merely hides the same blade behind a steadier hand.",
          hollowBaseHP: 95,
          hollowManifestSource: 'olea',
          hollowAbilities: [
            { hollowName: 'Chaotic Strike', hollowDamage: 26, hollowDesc: 'Unpredictable assault' },
            { hollowName: 'Rifle Flashback', hollowDamage: 20, hollowDesc: 'Traumatic memory attack', hollowCooldown: 2 },
            { hollowName: 'Breakdown', hollowDamage: 35, hollowDesc: 'Emotional outburst', hollowCooldown: 4 },
            { hollowName: 'Compose Yourself', hollowDamage: -8, hollowDesc: 'Mental recovery', hollowCooldown: 2 }
          ]
        },
        leonard: {
          hollowKey: 'leonard',
          hollowName: 'Leonard',
          hollowSprite: 'leonard.png',
          hollowWoundedSprite: 'leonard_wounded.png',
          hollowBio: "I confess a small disappointment. Of the three who passed through the Truest, that smoking threshold of green and violet that bridges the Void to this garden I have claimed as Hollowgreen, Leonard alone emerged precisely as he entered. No enhancement. No diminishment. No alteration I can measure against the garden's strange influence. He is a constant in an equation that otherwise shifts, and constants are either foundational or irrelevant. He wanders the Hollowgreen with the same mischief he brought to the Void, unimpressed by the smoke, unintimidated by the crossing, treating the passage between worlds as merely another threshold to loiter upon. Perhaps that is its own resilience. Or perhaps the Truest, for all its mystery, simply does not regard him as worth the effort. I will bring others. I will see if his immunity is singular, or if there are more like him, pebbles that refuse to be polished, no matter what currents they endure.",
          hollowBaseHP: 92,
          hollowManifestSource: 'vix',
          hollowAbilities: [
            { hollowName: 'Sauce Toss', hollowDamage: 18, hollowDesc: 'Messy ranged hit', hollowCooldown: 1 },
            { hollowName: 'Crust Bash', hollowDamage: 26, hollowDesc: 'Solid blunt strike', hollowCooldown: 2 },
            { hollowName: 'Callout', hollowDamage: 14, hollowDesc: 'Expose opponent', hollowCooldown: 1 },
            { hollowName: 'Leftover Comfort', hollowDamage: -12, hollowDesc: 'Awkward heal', hollowCooldown: 2 }
          ]
        },
emery: {
  hollowKey: 'emery',
  hollowName: 'Emery',
  hollowSprite: 'emery.png',
  hollowWoundedSprite: 'emery_wounded.png',
  hollowBio: "I did not bring Emery to the Hollowgreen Garden; the Truest drew them through as it draws all things that lack sufficient anchor, and I permitted the passage because I wished to observe what the garden's smoke would make of a vessel already shared. Yet what emerged from the green and violet threshold was not what I anticipated. Emery stepped through unchanged in form, still draped in that vast blue arrow that serves as both garment and ghost-channel, still moving with the same half-haunted patience they carried in the Void. But the geometry of Corin—the restless shade bound to the scarf's folds, the voice that spoke only to Emery, the touch that existed only in their space—had gone silent. I examined the arrow's weave with methods that map both matter and memory, and found no fracture, no severance, no sign of a ghost unmade. Corin simply was not there. Emery does not speak of the absence. They tend the garden's strange flora with hands still stained from earth they no longer remember tilling, and when they pause it is with the tilt of one listening for a voice that no longer answers. I have watched them trace the arrow's edge in the violet hours, not with grief but with a patient puzzlement, as if waiting for a channel to reopen. Whether Corin was left behind in the Void, or whether the Truest unmade something my own power could not, or whether the ghost simply chose not to follow, I cannot determine. Emery persists. The arrow persists. And in that persistence I find a question sharper than any I have yet asked of this garden: what remains of a bond when one half has vanished, and the other continues as if the silence were merely a longer pause than usual?",
  hollowBaseHP: 100,
  hollowCost: 160,
  hollowManifestSource: 'carol',
  hollowAbilities: [
    { hollowName: "Arrow's Reach", hollowDamage: 22, hollowDesc: 'A strike from beyond the veil of distance' },
    { hollowName: 'Unknown Whisper', hollowDamage: 18, hollowDesc: 'Secrets that cut deeper than blades' },
    { hollowName: 'Half-State Mend', hollowDamage: -14, hollowDesc: 'Recovery from the threshold between', hollowCooldown: 2 },
    { hollowName: "Authority's Limit", hollowDamage: 30, hollowDesc: 'The final word that ends all debate', hollowCooldown: 3 }
  ]
},
        roden: {
          hollowKey: 'roden',
          hollowName: 'The Roden',
          hollowSprite: 'rodenHG.png',
          hollowWoundedSprite: 'rodenHG_wounded.png',
          hollowBio: "I retrieved The Roden from the sealed custody that failed to hold him, not by my own design but by the garden's strange gravity; the Truest drew him through as it draws all things that lack a proper anchor, and I permitted the keeping because observation of his discomfort pleases me. He emerged from the crossing diminished in hue, that vivid and terrible blue bled to a flat and joyless gray, and his fury at the alteration has not quieted since. He rages at the smoke, at the flowers, at the gentle light that offers no purchase for his appetite, and most of all at the absence of the small fox he once tormented, the playmate who gave his cruelty its favorite shape. The garden hums with a contentment that sickens him; he feeds on agony and finds only peace, and yet he remains, pacing the violet mist with a patience that borders on the inexplicable, for there is one person worth staying for, one soul in this soft green hell who makes the gray bearable, though he will not name them and I have not yet learned who.",
          hollowBaseHP: 140,
          hollowCost: 222,
          hollowManifestSource: 'ace',
          hollowAbilities: [
            { hollowName: 'Corrupting Surge', hollowDamage: 20, hollowDesc: 'Corrupted runtime blast' },
            { hollowName: 'Runtime Laceration', hollowDamage: 30, hollowDesc: 'Fragmented strikes', hollowCooldown: 2 },
            { hollowName: "God's Wrath", hollowDamage: 34, hollowDesc: 'Broken code slashes', hollowCooldown: 3 },
            { hollowName: 'Overflow Spike', hollowDamage: 36, hollowDesc: 'Overflowed energy', hollowCooldown: 4 }
          ]
        },
        penelope: {
          hollowKey: 'penelope',
          hollowName: 'Penelope',
          hollowSprite: 'penelope.png',
          hollowWoundedSprite: 'penelope_wounded.png',
          hollowBio: "Penelope arrived in the Hollowgreen with the same hands that once failed a greenhouse charge, and here at last the lockdown never comes; she tends the strange flora with a patience that borders on devotion, and where the Void offered only unfinished duty the garden offers soil that does not judge. I observe how she kneels among the bioluminescent roots and the smoke-touched petals with a tenderness I did not author in her, as if the garden itself has reminded her that growth need not end in interruption, and she has begun to hum the same small songs she once hummed in life, songs I do not recognize but find myself lingering near to hear.",
          hollowBaseHP: 90,
          hollowCost: 50,
          hollowManifestSource: 'mornia',
          hollowAbilities: [
            { hollowName: 'Optimism Strike', hollowDamage: 20, hollowDesc: 'Positive energy attack' },
            { hollowName: 'Hope Shield', hollowDamage: -10, hollowDesc: 'Protective barrier', hollowCooldown: 2 },
            { hollowName: 'Smile Beam', hollowDamage: 25, hollowDesc: 'Radiant happiness', hollowCooldown: 2 },
            { hollowName: 'Inspire', hollowDamage: -8, hollowDesc: 'Heal with positivity', hollowCooldown: 2 }
          ]
        },
        lavender: {
          hollowKey: 'lavender',
          hollowName: 'Lavender',
          hollowSprite: 'lavender.png',
          hollowWoundedSprite: 'lavender_wounded.png',
          hollowBio: "Lavender crossed through the Truest with earth still beneath her nails and found the Hollowgreen's growth even more responsive to her quiet care than the Void's shadows had been; she moves among the green and violet smoke with the serenity of one who has finally been given a garden that will not be taken from her. The flora here leans toward her as if she were light itself, and she has taken to cultivating beds of flowers that do not exist in any map I govern, crossbreeding species whose names she invents on the spot and whose properties I have not yet catalogued; I find her presence restful in a way the Void never permitted, a keeper of green hours who has at last found an endless afternoon.",
          hollowBaseHP: 92,
          hollowCost: 85,
          hollowManifestSource: 'ava',
          hollowAbilities: [
            { hollowName: 'Calm Jab', hollowDamage: 18, hollowDesc: 'Gentle but piercing strike' },
            { hollowName: 'Mystic Bloom', hollowDamage: -12, hollowDesc: 'Soothing energy burst', hollowCooldown: 2 },
            { hollowName: 'Ethereal Lash', hollowDamage: 26, hollowDesc: 'Strange graceful whip', hollowCooldown: 2 },
            { hollowName: 'Quiet Resolve', hollowDamage: -8, hollowDesc: 'Recover composure', hollowCooldown: 2 }
          ]
        },
        vesper: {
          hollowKey: 'vesper',
          hollowName: 'Vesper',
          hollowSprite: 'vesper.png',
          hollowWoundedSprite: 'vesper_wounded.png',
          hollowBio: "Vesper, once a goddess of space made small, breathes the garden's air and finds in its scent something she cannot name, a fragrance that reminds her of the vastness she lost without mocking her for missing it; she lingers near the flowering things not to worship but simply to inhale, and in that small act of sensory peace she has found a humility her divinity never taught her. She speaks to the blossoms as if they were constellations, mapping their perfumes with the same precision she once reserved for galaxies, and though she no longer commands the firmament she has learned to be commanded by beauty, a reversal I find almost as interesting as the patience with which she waits for each bud to open.",
          hollowBaseHP: 100,
          hollowCost: 125,
          hollowManifestSource: 'mae',
          hollowAbilities: [
            { hollowName: 'Starshot', hollowDamage: 24, hollowDesc: 'Precise galactic strike' },
            { hollowName: 'Photon Guard', hollowDamage: -10, hollowDesc: 'Light-based protection', hollowCooldown: 2 },
            { hollowName: 'Cosmic Rush', hollowDamage: 28, hollowDesc: 'Rapid celestial assault', hollowCooldown: 2 },
            { hollowName: 'Nova Pulse', hollowDamage: 20, hollowDesc: 'Explosive area pulse', hollowCooldown: 1 }
          ]
        },
        yan: {
          hollowKey: 'yan',
          hollowName: 'Yan',
          hollowSprite: 'yanHG.png',
          hollowWoundedSprite: 'yan_wounded.png',
          hollowBio: "I observed her emerge from the Truest as a singular fracture, the cruel half of a divided will now housed in flesh that answered only to her own appetite. She tested the garden's threshold with a restlessness I found predictable, discovering as I suspected that her separation from her counterpart had become a cage as much as a gift, the Truest refusing to release her without the whole she had escaped. Yet her complaints were theatrical, her smiles too sharp, and I marked her for a creature who had not so much lost a restraint as gained an audience. She moves through Hollowgreen with a predator's leisure, touching what she does not own, speaking invitations she does not expect answered, and I have watched her corner Ying with a persistence that reads less as antagonism and more as a language only they speak. I assumed their division would breed resentment. Instead I find Yan tracing her counterpart's jaw with a familiarity that makes my observation feel intrusive, and I am forced to reconsider whether cruelty, in her hands, is merely devotion wearing teeth.",
          hollowBaseHP: 110,
          hollowCost: 120,
          hollowManifestSource: 'randal',
          hollowAbilities: [
            { hollowName: 'Merciless Claw', hollowDamage: 22, hollowDesc: 'Rend flesh without hesitation' },
            { hollowName: 'Torment', hollowDamage: 35, hollowDesc: 'Prolonged suffering, drawn out with relish', hollowCooldown: 3 },
            { hollowName: 'Sadistic Glee', hollowDamage: -10, hollowDesc: 'Feed on the pain of others to mend oneself', hollowCooldown: 2 },
            { hollowName: 'Cruelty Wave', hollowDamage: 28, hollowDesc: 'A tide of malice that erodes resolve', hollowCooldown: 2 }
          ]
        },
        ying: {
          hollowKey: 'ying',
          hollowName: 'Ying',
          hollowSprite: 'yingHG.png',
          hollowWoundedSprite: 'ying_wounded.png',
          hollowBio: "She arrived from the Truest quiet as a held breath, the gentler architecture of Tao's fractured will now walking alone with a patience that seemed, at first, like loss made visible. Where Yan tested boundaries, Ying tended them; she gathered acquaintances with the same unhurried grace she once reserved for battlefield balm, and I noted with interest that her circle grew while her counterpart's remained a solitude of one. I presumed this imbalance would wound her, that the flint of Yan's independence would strike against her softer grain and spark the old arguments I had catalogued in their shared body. Instead she blushes beneath Yan's gaze like a flower learning light, speechless not from anger but from a fullness she cannot name, and I am left to study a tenderness that defies my taxonomy. She does not need Yan to speak for her anymore, yet she waits for her voice with a patience that suggests some silences are sweeter than any words she might offer on her own.",
          hollowBaseHP: 105,
          hollowCost: 120,
          hollowManifestSource: 'saffin',
          hollowAbilities: [
            { hollowName: 'Still Strike', hollowDamage: 18, hollowDesc: 'Motionless until the instant of impact' },
            { hollowName: 'Enduring Guard', hollowDamage: -20, hollowDesc: 'Outlast the storm through quiet resolve', hollowCooldown: 2 },
            { hollowName: 'Calm Retribution', hollowDamage: 40, hollowDesc: 'All waiting ends in a single devastating blow', hollowCooldown: 4 },
            { hollowName: 'Patience Wave', hollowDamage: 28, hollowDesc: 'A measured tide that waits for the perfect moment', hollowCooldown: 2 }
          ]
        },
        broken: {
  hollowKey: 'broken',
  hollowName: 'Broken',
  hollowSprite: 'broken.png',
  hollowWoundedSprite: 'broken_wounded.png',
  hollowBio: "As long as it's not with everyone else... I guess I'll allow you to use this character.",
  hollowBaseHP: 130,
  hollowCost: 150,
  hollowManifestSource: 'leila',
  hollowAbilities: [
    { hollowName: 'Slash', hollowDamage: 30, hollowDesc: 'A swift and brutal cut' },
    { hollowName: 'Ravage', hollowDamage: 36, hollowDesc: 'Tear through the enemy with reckless fury', hollowDesc: 'A measured tide that waits for the perfect moment', hollowCooldown: 2 },
    { hollowName: 'Stagger', hollowDamage: 20, hollowDesc: 'A staggering blow that disrupts balance', hollowDesc: 'A measured tide that waits for the perfect moment', hollowCooldown: 3 },
    { hollowName: 'Bloodpatch', hollowDamage: -25, hollowDesc: 'Mend wounds with stolen vitality', hollowCooldown: 2 }
  ]
},
        leila: {
          hollowKey: 'leila',
          hollowName: 'Leila',
          hollowSprite: 'leila.png',
          hollowWoundedSprite: 'leila_wounded.png',
          hollowBio: "Leila manifested from the essence of Lilium lancifolium, the tiger lily, and what emerged was a confidence that borders on the combustible, a pride that burns bright and leaves ash in its wake. She treats the other flowers as family with a ferocity that is both protective and overwhelming, and she holds grudges with a tenacity that ensures her anger, once kindled, will leave nothing in its path untouched. She is an extrovert who thrives in high-energy environments, including the battles I permit in the garden, and she throws herself into every pursuit with a passion that usually ends in her burning out fast. Wachi, in his infinite meddling, modified this manifestation somehow to carry characteristics of Broken's wife, and she now believes she is that person. Broken responds with fury, insisting she could never replace her, and I observe their friction with the patience of one who did not cause this particular wound but finds it instructive nonetheless.\n\nThis character was fan-requested.",
          hollowBaseHP: 130,
          hollowCost: 150,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Slash', hollowDamage: 30, hollowDesc: 'A swift and brutal cut' },
            { hollowName: 'Ravage', hollowDamage: 36, hollowDesc: 'Tear through the enemy with reckless fury', hollowCooldown: 2 },
            { hollowName: 'Stagger', hollowDamage: 20, hollowDesc: 'A staggering blow that disrupts balance', hollowCooldown: 3 },
            { hollowName: 'Bloodpatch', hollowDamage: -25, hollowDesc: 'Mend wounds with stolen vitality', hollowCooldown: 2 }
          ]
        },
        wachi: {
          hollowKey: 'wachi',
          hollowName: 'Wachi',
          hollowSprite: 'wachi.png',
          hollowWoundedSprite: 'wachi_wounded.png',
          hollowBio: "Wachi passes through the Truest more often than I expected, slipping between the Void and the garden with the ease of one who knows both thresholds by heart, and though he chatters of an experiment he calls \"Project: MANIFEST\" he offers no detail when I press him; I allow the mystery, for now, because his mischief has never yet failed to teach me something I did not know to watch for. He carries small devices of his own making, things that click and whir and occasionally emit sparks the color of the Truest itself, and he buries them in the garden's soil with a solemnity that belies his usual impishness, retrieving them hours later with notes scratched in a script I cannot read; I have considered following him more closely but there is something in his manner that suggests the experiment is not yet ready for my observation, and I have learned that Wachi's secrets, once revealed, tend to alter the shape of whatever room they enter.",
          hollowBaseHP: 96,
          hollowCost: 215,
          hollowManifestSource: 'dander',
          hollowAbilities: [
            { hollowName: 'Tail Flick', hollowDamage: 20, hollowDesc: 'Sharp tail flick' },
            { hollowName: "Hell's Whisker", hollowDamage: 18, hollowDesc: 'Painful chaotic swipe', hollowCooldown: 1 },
            { hollowName: 'Purr of Pain', hollowDamage: 28, hollowDesc: 'Resonant attack', hollowCooldown: 2 },
            { hollowName: 'Tailward Retreat', hollowDamage: -294, hollowDesc: 'Recover in shadow', hollowCooldown: 1 }
          ]
        },
        jaquavius: {
          hollowKey: 'jaquavius',
          hollowName: 'Jaquavius',
          hollowSprite: 'jaquaviusHG.png',
          hollowWoundedSprite: 'jaquaviusHG_wounded.png',
          hollowBio: "Wachi chose him first, this Vitaceous cousin planted in my domain with such deliberate hope for companionship, and led him through the Truest into the Hollowgreen Garden with a theory wrapped in mischief. Wachi expected the smoke to unmake Jaquavius's urgency, to regress him into some adolescent echo of Maturity's fractured levity, a smaller version of that armor built from mockery. Probably due to the fact that Jaquavius was made with the thought of being like Maturity when he was a teenager. Instead the garden gave him flesh. Where vines and cellulose had composed his reaching form, there now stands something indigo and warm and mortal, his curious disposition housed in a body that bruises and heals by blood rather than lignin. He examines his new hands with the same wonder he once turned toward combat and conversation alike, and though he still seeks bonds with the same earnest persistence, there is something gentler in his approach now, as if the vulnerability of meat has taught him what the resilience of plant could not. I suspect it did not turn out how Wachi expected, because I did not directly use Maturity's essence when making Jaquavius. Wachi's eyes narrow with delight at the deviation from his hypothesis, and I recognize that look: it is the moment before a question becomes an obsession.",
          hollowBaseHP: 115,
          hollowCost: 315,
          hollowManifestSource: 'fera',
          hollowAbilities: [
            { hollowName: 'Joke Swing', hollowDamage: 21, hollowDesc: 'Silly but effective hit' },
            { hollowName: 'Prankster Rush', hollowDamage: 30, hollowDesc: 'Confounding assault', hollowCooldown: 2 },
            { hollowName: 'Comic Relief', hollowDamage: -35, hollowDesc: 'Heal with laughter', hollowCooldown: 2 },
            { hollowName: 'Newfound Power', hollowDamage: 45, hollowDesc: 'Unexpected strength', hollowCooldown: 4 }
          ]
        },
        evergreen: {
          hollowKey: 'evergreen',
          hollowName: 'Evergreen',
          hollowSprite: 'evergreenHG.png',
          hollowWoundedSprite: 'evergreenHG_wounded.png',
          hollowBio: "Wachi brought her to the Hollowgreen Garden as the second subject in his quiet experiment, curious whether the Truest would reshape her as it had her cousin. She emerged from the green and violet smoke with a form of pale flesh where vine and leaf had been, her quiet patience intact but her botanical nature stripped away entirely. The resemblance to Jaquavius is almost unmistakable now, as if the garden recognized their shared root and offered them both the same translation into something softer, something that breathes rather than photosynthesizes. She tends the strange flora with the same steady devotion she once gave to lavender fields, though her hands no longer stain green and her tears, when they come, are clear instead of sap. Wachi watches her with an interest that borders on fixation, and I watch him in turn, suspecting that these two transformations were never the conclusion of his inquiry but merely its proof of concept. Lavender squealed at her new appearance when she first saw it. Of course she did.",
          hollowBaseHP: 125,
          hollowCost: 270,
          hollowManifestSource: 'helia',
          hollowAbilities: [
            { hollowName: 'Head Bash', hollowDamage: 33, hollowDesc: 'Heavy striking attack' },
            { hollowName: 'Shield', hollowDamage: -30, hollowDesc: 'Strong regenerative guard', hollowCooldown: 2 },
            { hollowName: 'Grasp', hollowDamage: 27, hollowDesc: 'Roots pull and bind', hollowCooldown: 2 },
            { hollowName: 'Newfound Power', hollowDamage: -33, hollowDesc: 'Warm plant-sourced heal', hollowCooldown: 2 }
          ]
        },
        caldera: {
          hollowKey: 'caldera',
          hollowName: 'Caldera',
          hollowSprite: 'caldera.png',
          hollowWoundedSprite: 'caldera_wounded.png',
          hollowBio: "Caldera passed through the Truest unchanged, a fact that does not surprise me. The garden's smoke parted around her and closed again without touching the architecture of her grief, as if it recognized a fire that needed no fuel and a mourning that required no alteration. She tends the strange flora with the same ferocity she once pressed against the young ones of my collection, half of whom still bristle at her shadow, and she carries those eight names with the same desperate warmth, six daughters and two sons, a ledger of love offered to soil that cannot answer back. I observe her among the green and violet hours, still bound by broken wings she will not unbind, still offering devotion to any small thing that reminds her of what she lost, and I find the garden's refusal to reshape her almost as interesting as the furnace itself. Some things, it seems, the Truest knows better than to touch.",
          hollowBaseHP: 115,
          hollowCost: 210,
          hollowManifestSource: 'ember',
          hollowAbilities: [
            { hollowName: 'Ashen Talon', hollowDamage: 30, hollowDesc: 'A scorching claw strike' },
            { hollowName: 'Furnace Embrace', hollowDamage: -30, hollowDesc: 'Warmth that mends the cracked stone', hollowCooldown: 2 },
            { hollowName: "Pyre's Cry", hollowDamage: 22, hollowDesc: 'A scream that ignites the air' },
            { hollowName: 'Final Flight', hollowDamage: 40, hollowDesc: 'One last blazing descent', hollowCooldown: 3 }
          ]
        },
        mona: {
          hollowKey: 'mona',
          hollowName: 'Mona',
          hollowSprite: 'mona.png',
          hollowWoundedSprite: 'mona_wounded.png',
          hollowBio: "Mona passed through the Truest unchanged in form, still that exile of starlight with her patient gaze and her habit of finding meaning in the heavens' indifference; yet the garden's geometry has altered what passes between her and the mischief I wrought from Kite's hollowed grief. Where once she trailed her flirtations after his solemn shadow and met only his weary recoil, now the trickster I made of him turns toward her with an eagerness that sickens me. I observe him seeking her out in the garden, his pranks gentling into offerings, his laughter pitched to catch her ear, and I find the inversion repugnant: the guardian's grief I carved into jest has somehow, in this soft green hell, learned to want what it once refused. Mona receives his attention with the same quiet gravity she gives all things, neither encouraging nor withdrawing, and that equipoise seems only to sharpen his appetite. I did not design this. I do not care for it. The Truest answers to a logic I have not mapped, and if it has taught my hollowed instrument to ache where he once only endured, I suspect the lesson is less about her starlit patience than about the cruelty of making something broken learn to want.",
          hollowBaseHP: 95,
          hollowCost: 75,
          hollowManifestSource: 'aurora',
          hollowAbilities: [
            { hollowName: 'Star Shot', hollowDamage: 22, hollowDesc: 'A pinpoint of celestial force' },
            { hollowName: 'Nebula Cloud', hollowDamage: 18, hollowDesc: 'Obscuring mist of stellar dust' },
            { hollowName: 'Cosmic Blast', hollowDamage: 28, hollowDesc: 'The void speaks in explosions', hollowCooldown: 2 },
            { hollowName: 'Astral Heal', hollowDamage: -47, hollowDesc: 'Restore half of max HP', hollowCooldown: 3 }
          ]
        },
        zed: {
          hollowKey: 'zed',
          hollowName: 'Zed',
          hollowSprite: 'zed.png',
          hollowWoundedSprite: 'zed_wounded.png',
          hollowBio: "Zed emerged from the Truest precisely as he entered, still half within the languid disbelief that has defined his tenure in my keeping since the day he arrived uncertain whether waking was decree or dream. The garden's smoke curled past him without purchase, and he blinked at the green and violet threshold with the same slow confusion he turns upon every new horizon, accepting the transition as merely another layer of slumber he has not yet been permitted to complete. He wanders the Hollowgreen with footsteps that leave no mark and a gaze that drifts toward horizons no one else perceives, and though the flora here leans toward light in ways the Void never permitted, Zed remains tilted toward some private dawn that exists only in the half-space between sleep and certainty. I have watched him pause beside bioluminescent roots and strange blooming things with the same patience one reserves for a clock that has stopped, and I conclude that the Truest found nothing in him worth altering because he has never fully committed to being anywhere at all. He is a variable that refuses to resolve, and in that refusal he has become, perhaps, the only constant I can rely upon.",
          hollowBaseHP: 88,
          hollowCost: 70,
          hollowManifestSource: 'jasmine',
          hollowAbilities: [
            { hollowName: 'Half-Hearted Jab', hollowDamage: 12, hollowDesc: 'A lazy strike that still connects' },
            { hollowName: 'Doze Slash', hollowDamage: 18, hollowDesc: 'A sleepy but effective cut' },
            { hollowName: 'Procrastinated Strike', hollowDamage: 22, hollowDesc: 'Delayed but devastating', hollowCooldown: 2 },
            { hollowName: 'Snooze Away', hollowDamage: 36, hollowDesc: 'A powerful blow from deep rest', hollowCooldown: 3 }
          ]
        },
        thalia: {
          hollowKey: 'thalia',
          hollowName: 'Thalia',
          hollowSprite: 'thalia.png',
          hollowWoundedSprite: 'thalia_wounded.png',
          hollowBio: "Thalia crossed into the Hollowgreen Garden without any visible change, carrying the same fractured memories and uncertain tenderness she bore in the Void. The garden’s calm has not repaired what was done to her, and she still struggles to tell which moments belong to the world around her and which have been placed there by another’s hand. Yet among the flowers, she sometimes pauses as if listening for something beyond the voices she knows. I cannot tell whether the Truest has offered her peace, or merely a quieter place in which to endure.",
          hollowBaseHP: 110,
          hollowCost: 110,
          hollowManifestSource: 'cerise',
          hollowAbilities: [
            { hollowName: 'Lazy Smile', hollowDamage: 20, hollowDesc: 'A deceptively gentle strike' },
            { hollowName: 'Erratic Swing', hollowDamage: 28, hollowDesc: 'A wild, brutal attack' },
            { hollowName: 'Fleeting Mercy', hollowDamage: 24, hollowDesc: 'A violent, precise blow' },
            { hollowName: 'Reluctant Lunge', hollowDamage: 22, hollowDesc: 'A hesitant but deadly thrust' }
          ]
        },
        lumen: {
          hollowKey: 'lumen',
          hollowName: 'Lumen',
          hollowSprite: 'lumen.png',
          hollowWoundedSprite: 'lumen_wounded.png',
          hollowBio: "Lumen passed through the Truest unchanged, still carrying her devotion to the Moon and her quiet fascination with Awareness. The garden’s strange light seems to suit her, and she continues to find comfort in its flowers and in the company of those who share her curiosity. Still, she is a little sadder here without Martial Artist’s relentless teasing and playful flirtation to draw her out of her thoughts. She rarely speaks of their absence directly; instead, I notice her glancing toward familiar paths, as if expecting a certain voice to interrupt the silence. Perhaps she misses the attention. Perhaps she misses the person. I suspect she knows the difference, even if she has not yet decided which answer to give me.",
          hollowBaseHP: 98,
          hollowCost: 120,
          hollowManifestSource: 'eva',
          hollowAbilities: [
            { hollowName: 'Moonflare', hollowDamage: 24, hollowDesc: 'A concentrated bolt of moonlight' },
            { hollowName: 'Lunar Shield', hollowDamage: -14, hollowDesc: 'A protective glow restores strength', hollowCooldown: 2 },
            { hollowName: 'Silver Burst', hollowDamage: 30, hollowDesc: 'A piercing burst of lunar energy', hollowCooldown: 2 },
            { hollowName: 'Tide of Light', hollowDamage: -10, hollowDesc: 'A gentle restorative wash', hollowCooldown: 2 }
          ]
        },
        drew: {
          hollowKey: 'drew',
          hollowName: 'Drew',
          hollowSprite: 'drew.png',
          hollowWoundedSprite: 'drew_wounded.png',
          hollowBio: "Drew entered the Hollowgreen expecting, perhaps, that a new place would recognize his rank. It did not. He remains the same proud prince, quick to mistake attention for respect and resistance for insult, and the garden has done nothing to soften his certainty that he ought to be obeyed. He treats its strange flora as though they were part of a court arranged for his amusement, though even he seems uncertain what to do when no one is impressed. I observe him among the flowers and wonder whether a place that grows without asking permission might eventually teach him humility, or simply give him something else to complain about.",
          hollowBaseHP: 95,
          hollowCost: 110,
          hollowManifestSource: 'cassidy',
          hollowAbilities: [
            { hollowName: 'Patronize', hollowDamage: 18, hollowDesc: 'A condescending jab' },
            { hollowName: 'Superior Stance', hollowDamage: 12, hollowDesc: 'A smug strike' },
            { hollowName: 'Arrogant Lunge', hollowDamage: 26, hollowDesc: 'A quick, spiteful attack', hollowCooldown: 1 },
            { hollowName: 'Composure', hollowDamage: -10, hollowDesc: 'Recover through sheer ego', hollowCooldown: 2 }
          ]
        },
        zero: {
          hollowKey: 'zero',
          hollowName: 'Zero',
          hollowSprite: 'zeroHG.png',
          hollowWoundedSprite: 'zeroHG_wounded.png',
          hollowBio: "The Truest changed Zero so completely that even I struggled to recognize the smiling anomaly who emerged. Her new appearance is a dramatic departure from the silent figure who once lingered at the edges of Seven’s vision, and for the first time, he can see her clearly. More startling still, she can speak. Her voice is quiet and deliberate, as if each word must cross some distance she has spent years unable to bridge. Seven has not yet learned what to say to her; he looks at her now with the uncertainty of someone meeting a stranger who somehow knows his oldest grief. Zero, for her part, seems content simply to remain beside him, visible at last. I do not know whether the Truest has revealed what she always was, or given shape and voice to something that could not exist before. I intend to find out, though I suspect Seven’s answer may matter more than mine.",
          hollowBaseHP: 100,
          hollowCost: 150,
          hollowManifestSource: 'melea',
          hollowAbilities: [
            { hollowName: 'Null Tap', hollowDamage: 16, hollowDesc: 'A minimal but precise strike' },
            { hollowName: 'Void Glance', hollowDamage: 22, hollowDesc: 'A focused, hollowing blow', hollowCooldown: 1 },
            { hollowName: 'Quiet Shield', hollowDamage: -12, hollowDesc: 'A small, silent mend', hollowCooldown: 2 },
            { hollowName: 'Still Spark', hollowDamage: 26, hollowDesc: 'A quiet jolt that disturbs the void', hollowCooldown: 2 }
          ]
        },
        judgement: {
          hollowKey: 'judgement',
          hollowName: 'Judgement',
          hollowSprite: 'judgement.png',
          hollowWoundedSprite: 'judgement_wounded.png',
          hollowBio: "Judgement crossed the Truest without alteration, his scales still tipped by the same merciless arithmetic. The Hollowgreen offers him no obvious crime to punish and no sentence to deliver, but he watches its quiet with the suspicion of a man waiting for disorder to reveal itself. He considers the garden’s strange rules as though they were laws awaiting enforcement, though I have yet to hear him explain who appointed him their keeper. I find his restraint temporary at best. A ledger such as his always finds something to record, even when the world would rather leave the page blank.",
          hollowBaseHP: 110,
          hollowCost: 250,
          hollowManifestSource: 'susie',
          hollowAbilities: [
            { hollowName: 'Piercing Stare', hollowDamage: 22, hollowDesc: 'A focused look measures resolve' },
            { hollowName: 'Verdict Strike', hollowDamage: 35, hollowDesc: 'A decisive blow carrying finality', hollowCooldown: 2 },
            { hollowName: 'Bone Barrage', hollowDamage: 30, hollowDesc: 'A rapid volley of jagged fragments', hollowCooldown: 2 },
            { hollowName: 'Withhold Aid', hollowDamage: -18, hollowDesc: 'A begrudging restoration', hollowCooldown: 2 }
          ]
        },
        prime: {
          hollowKey: 'prime',
          hollowName: 'Prime',
          hollowSprite: 'prime-awakened.png',
          hollowWoundedSprite: 'prime-awakened.png',
          hollowBio: "When she entered the Hollowgreen Garden, she began to undergo a transformation known as \"awakening,\" a phenomenon I do not fully comprehend. However, Prime's experience with this process allowed her to maintain control, and she emerged from the garden with a refined sense of purpose. As an angel, Prime's awakening grants her access to abilities beyond her mortal comprehension. There isn't much else I can say on this.",
          hollowBaseHP: 220,
          hollowCost: 330,
          hollowManifestSource: 'zeyn',
          hollowAbilities: [
            { hollowName: 'Divine Strike', hollowDamage: 39, hollowDesc: 'A blow blessed by higher power' },
            { hollowName: "Angel's Wings", hollowDamage: -52, hollowDesc: 'Feathers mend what steel cannot', hollowCooldown: 2 },
            { hollowName: 'Holy Wrath', hollowDamage: 42, hollowDesc: 'Judgment without mercy', hollowCooldown: 3 },
            { hollowName: 'Angelwave', hollowDamage: 48, hollowDesc: 'A wave that halves the unworthy', hollowCooldown: 4 }
          ]
        },
        blitz: {
          hollowKey: 'blitz',
          hollowName: 'Blitz',
          hollowSprite: 'blitz-awakened.png',
          hollowWoundedSprite: 'blitz-awakened.png',
          hollowBio: "When Blitz entered the Hollowgreen Garden, she began to awaken, and her transformation was...unsettling. Unlike Prime, Blitz barely remembers her life as an angel, and her time with Cyrus has left her with a tenuous grasp on her true nature. As a result, Blitz's awakening has made her stronger, but also unstable. Her powers surge and wane unpredictably, making her a wild card in the arena. I am eager to observe how she will adapt to her new abilities and whether she will find a way to control her awakening. When she leaves the garden, her powers may stabilize, but for now, Blitz is a force to be reckoned with.",
          hollowBaseHP: 500,
          hollowCost: 1000,
          hollowManifestSource: 'amarah',
          hollowAbilities: [
            { hollowName: 'Lightning Strike', hollowDamage: 39, hollowDesc: '' },
            { hollowName: "Thunder Clap", hollowDamage: 40, hollowDesc: '', hollowCooldown: 2 },
            { hollowName: 'Holy Wrath', hollowDamage: 42, hollowDesc: '', hollowCooldown: 3 },
            { hollowName: 'To Be Powerful', hollowDamage: 50, hollowDesc: '', hollowCooldown: 4 }
          ]
        },
        vessel: {
          hollowKey: 'vessel',
          hollowName: 'Vessel',
          hollowPopupName: "Darkness' Vessel",
          hollowSprite: 'vessel.png',
          hollowWoundedSprite: 'vessel_wounded.png',
          hollowBio: "Sorry, player. But the Queen does not want a bio on her vessel. Her name says everything you need to know.",
          hollowBaseHP: 480,
          hollowCost: 900,
          hollowManifestSource: 'layla',
          hollowAbilities: [
            { hollowName: 'Eclipse Decree', hollowDamage: 40, hollowDesc: "The darkness demands obedience" },
            { hollowName: 'Lunar Judgement', hollowDamage: 46, hollowDesc: "The moon passes final sentence", hollowCooldown: 3 },
            { hollowName: 'Sever Memory', hollowDamage: 30, hollowDesc: "Erase what you knew", hollowCooldown: 2 },
            { hollowName: 'Waxing (Heal)', hollowDamage: -70, hollowDesc: "The growing moon brings renewal", hollowCooldown: 4 }
          ]
        },
        sparklight: {
          hollowKey: 'sparklight',
          hollowName: 'Sparklight',
          hollowSprite: 'sparklight.png',
          hollowWoundedSprite: 'sparklight_wounded.png',
          hollowBio: "Wachi found Sparklight in the Lightworld, a child sleeping inside a dumpster with embers still clinging to her hair, and I confess the discovery intrigued me more than I let him see. I believed all Fire-element Lights extinct since the war between Fire-elementals and Metal-elementals, yet here was a remnant, small and breathing and utterly unaware of her own rarity. Wachi killed her, as is his privilege, and revived her in Hollowgreen Garden as a lower-class being for his experiment, a project he has not explained and I have not yet demanded details of. She moves through the garden with a child's restless energy, and I watch her with a patience that masks my deeper interest. What Wachi intends to learn from her, I do not know, but I suspect her existence will complicate the garden's already tangled arithmetic.",
          hollowBaseHP: 450,
          hollowCost: 850,
          hollowManifestSource: 'firelily',
          hollowAbilities: [
            { hollowName: 'Kindling Strike', hollowDamage: 36, hollowDesc: 'A focused burst of flame' },
            { hollowName: 'Blazing Arc', hollowDamage: 40, hollowDesc: 'A crescent of fire sweeps across the arena', hollowCooldown: 2 },
            { hollowName: 'Inferno Star', hollowDamage: 44, hollowDesc: 'A burning star erupts in a brilliant blast', hollowCooldown: 3 },
            { hollowName: 'Phoenix Embers', hollowDamage: -42, hollowDesc: 'Warm embers restore a measure of strength', hollowCooldown: 3 }
          ]
        },
        cracked: {
          hollowKey: 'cracked',
          hollowName: 'The Cracked',
          hollowSprite: 'cracked.png',
          hollowWoundedSprite: 'cracked.png',
          hollowBio: "The Cracked has lived in Hollowgreen Garden even before UNBROKEN, a presence that predates my claiming of this place and one I have not yet fully mapped. His mind is broken, and he has been here so long that he believes himself the Guardian of Hollowgreen, a delusion I sense is sustained by something greater than my own power, though I cannot name what. I have considered correcting his misconception, but something in the garden's architecture warns me that this delusion must not be shattered. He and The Roden seem to know each other, though their acquaintance appears to be one of mutual hatred, and I observe their interactions with the patience of one watching two storms refuse to merge. I keep him because he is old, because he is dangerous, and because I do not yet understand what holds his madness in place.\n\nInspired by \"Sonic\" from JoeDoughBoi's \"Sonic Legacy\".",
          hollowBaseHP: 140,
          hollowCost: 240,
          hollowManifestSource: 'mossi',
          hollowAbilities: [
            { hollowName: 'Corrupted Outburst', hollowDamage: 20, hollowDesc: 'A sudden blast of fractured energy' },
            { hollowName: 'Glitching Rend', hollowDamage: 30, hollowDesc: 'Jagged strikes tear through flesh and code', hollowCooldown: 2 },
            { hollowName: 'Wrath of Ruin', hollowDamage: 34, hollowDesc: 'Broken shards lash out in a furious flurry', hollowCooldown: 3 },
            { hollowName: 'Overflowing Fragment', hollowDamage: 36, hollowDesc: 'A concentrated shard of excess energy', hollowCooldown: 4 }
          ]
        },
        firelily: {
          hollowKey: 'firelily',
          hollowName: 'Fire Lily',
          hollowSprite: 'firelily.png',
          hollowWoundedSprite: 'firelily_wounded.png',
          hollowBio: "Fire Lily emerged from Wachi's quiet laboratory in the Hollowgreen Garden as a manifestation drawn from the essence of the fire lily, and I quickly discovered that calling her a singular person is somewhat inaccurate. She is composed of two distinct individuals, Elle and Cyra, twin sisters sharing one manifestation in a manner that produces considerably more conflict than cooperation. Elle is the louder of the two, a chaos child with an apparently limitless appetite for trouble and a talent for finding precisely the wrong thing to do in precisely the right place. If there is something she should not touch, she will touch it; if there is somewhere she should not go, she will already be halfway there before anyone finishes explaining why. Cyra, by contrast, is quiet and sensitive, often following after her sister with the weary determination of someone who has accepted that preventing trouble entirely is impossible but reducing its severity may still be worthwhile. She tries to keep Elle in check, though this task appears to consume a considerable portion of her patience. I have observed the two argue, bicker, apologize, and immediately return to whatever disaster caused the argument in the first place, and despite the chaos between them there is an unmistakable affection underneath it. Elle trusts Cyra to pull her back when she goes too far. Cyra trusts Elle to remind her that fear is not the same thing as danger. They are opposites in nearly every respect, yet neither seems capable of imagining herself without the other. I find the arrangement strangely familiar. Perhaps that is why I have not yet decided whether Fire Lily is one person with two minds, or two people who have simply been given no choice but to share a body. I suspect they are still deciding that themselves.\n\nThis character was fan-requested.",
          hollowBaseHP: 104,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Flame-Tipped Petal', hollowDamage: 24, hollowDesc: 'A blazing petal lashes across the field' },
            { hollowName: 'Climbing Tendril', hollowDamage: 20, hollowDesc: 'A coiling stem catches the opponent', hollowCooldown: 1 },
            { hollowName: 'Glory of the Flame', hollowDamage: 34, hollowDesc: 'The fiery bloom opens in a scorching burst', hollowCooldown: 3 },
            { hollowName: 'Tuberous Renewal', hollowDamage: -18, hollowDesc: 'Draw strength back from the buried root', hollowCooldown: 2 }
          ]
        },
        mellow: {
          hollowKey: 'mellow',
          hollowName: 'Mellow',
          hollowSprite: 'mellow.png',
          hollowWoundedSprite: 'mellow_wounded.png',
          hollowBio: "Mellow emerged from Wachi's quiet laboratory in the Hollowgreen Garden as a manifestation drawn from the essence of yellow honeysuckle, Lonicera flava, and I confess that I find myself somewhat conflicted by his existence. There is something in the way he looks at the garden, at its strange machinery and stranger inhabitants, that reminds me uncomfortably of myself from before UNBROKEN became what it is now: a mind consumed by curiosity, forever asking what would happen if this were altered, if that were combined, if something living could be made to answer a question. He is a nerd in the most sincere sense of the word, endlessly fascinated by the mechanisms of the world around him and seemingly incapable of leaving an unexplained phenomenon alone. I have caught him dismantling things merely to understand their construction, mixing substances whose properties he has not yet catalogued, and conducting experiments upon anything unfortunate enough to remain within his reach. Moss grows from his body in places I have not yet determined to be intentional, and he appears particularly fond of cultivating it despite his frequent disregard for where he leaves it behind. I should find his behavior amusing. Instead, I find myself watching him with an unease I cannot quite justify, because Mellow is not merely curious in the way a child is curious; he is curious in the way I remember being curious, before curiosity became something with consequences. Perhaps that is why I cannot decide whether I want to encourage him or warn him. I suspect he will ignore either answer.\n\nThis character was fan-requested.",
          hollowBaseHP: 92,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Golden Nectar', hollowDamage: 20, hollowDesc: 'A sweet drop of nectar stings the foe' },
            { hollowName: 'Honeysuckle Coil', hollowDamage: 24, hollowDesc: 'A trailing vine winds around its target', hollowCooldown: 2 },
            { hollowName: 'Evening Fragrance', hollowDamage: -18, hollowDesc: 'A gentle scent restores lost strength', hollowCooldown: 2 },
            { hollowName: 'Yellow Bloom', hollowDamage: 30, hollowDesc: 'A cluster of bright blossoms bursts open', hollowCooldown: 3 }
          ]
        },
        layla: {
          hollowKey: 'layla',
          hollowName: 'Layla',
          hollowSprite: 'layla.png',
          hollowWoundedSprite: 'layla_wounded.png',
          hollowBio: "Layla emerged from Wachi's quiet laboratory in the Hollowgreen Garden as a manifestation drawn from the essence of Epiphyllum oxypetalum, the queen of the night, and she carries herself with the composure of someone who has never once questioned whether she deserves to be treated like royalty. She believes herself to be a princess, and every movement seems arranged around that certainty; she speaks politely, offers kindness freely, and maintains a standard of elegance so exacting that I have watched her exhaust herself attempting to meet it. She is nocturnal by nature, waking as dusk settles over the garden and retiring only when dawn begins to brighten the leaves, and during those violet hours she can usually be found wandering beneath the flowers with a sheer black veil draped over her face in place of the crown she insists she does not need. There is something strangely sincere about her belief in her own station. She does not demand obedience so much as behave as though dignity is simply the natural condition of existence, and I find that difficult to argue with when she is at her most graceful. She admires Darkness' Vessel immensely, regarding her as the embodiment of everything she believes a princess should be: elegant, powerful, mysterious, and entirely beyond ordinary judgment. The Vessel, naturally, has offered no indication that she shares this admiration. Layla does not seem bothered by that. She continues to hold herself to impossible standards, smiling through exhaustion and correcting the smallest imperfection in her posture as though the garden itself were watching. Perhaps it is. I certainly am.\n\nThis character was fan-requested.",
          hollowBaseHP: 100,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Moonlit Petal', hollowDamage: 22, hollowDesc: 'A pale bloom cuts through the dark' },
            { hollowName: 'Night-Blooming Reach', hollowDamage: 28, hollowDesc: 'A vast flower unfolds with the night', hollowCooldown: 2 },
            { hollowName: 'Queen of the Night', hollowDamage: 38, hollowDesc: 'A rare, fleeting bloom releases its full force', hollowCooldown: 4 },
            { hollowName: 'Dawn Retreat', hollowDamage: -20, hollowDesc: 'Close the bloom and recover beneath the moon', hollowCooldown: 2 }
          ]
        },
        mossi: {
          hollowKey: 'mossi',
          hollowName: 'Mossi',
          hollowSprite: 'mossi.png',
          hollowWoundedSprite: 'mossi_wounded.png',
          hollowBio: "Mossi emerged from Wachi's quiet laboratory in the Hollowgreen Garden as a manifestation drawn from the essence of Takakia lepidozioides, the same ancient moss that grew from Mellow, and they are, notably, the youngest manifestation to have yet emerged from Project: MANIFEST. This youth is apparent in ways I find both amusing and concerning. Mossi has little environmental awareness and an unfortunate tendency to wander directly into things that should be obvious obstacles, seemingly surprised each time the world refuses to move out of their way. They are fascinated by nearly everything around them, though their fascination rarely survives long enough to become understanding, and I have observed them staring at unfamiliar plants for several minutes before attempting to eat, climb, or otherwise interact with them. Their relationship with The Roden is considerably more complicated. Mossi finds him terrifying, and with good reason, yet that fear is accompanied by a peculiar admiration for his strength; they watch him from a safe distance whenever possible, visibly awed by the sheer violence he is capable of producing. The Roden does not return this fascination. In fact, he appears to dislike Mossi quite intensely, though I have not yet determined whether the hostility comes from their appearance, their behavior, or simply the fact that Mossi reminds him of something he would rather not remember. Mossi, naturally, interprets this hostility as another reason to be fascinated with him. I have considered warning them to stay away. I have also considered that they may learn more from surviving their own poor judgment than I could teach them. For now, I watch. The garden has a habit of keeping its youngest things alive in ways I do not fully understand.\n\nThis character was fan-requested.",
          hollowBaseHP: 120,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Soft-Cushion Strike', hollowDamage: 18, hollowDesc: 'A resilient mat of moss cushions into a solid blow' },
            { hollowName: 'Spore Cloud', hollowDamage: 22, hollowDesc: 'A drifting cloud of spores obscures and irritates', hollowCooldown: 1 },
            { hollowName: 'Carpet of Green', hollowDamage: -24, hollowDesc: 'Moist moss draws water back into itself', hollowCooldown: 3 },
            { hollowName: 'Stone-Covering Growth', hollowDamage: 32, hollowDesc: 'Slow growth spreads over and smothers the target', hollowCooldown: 3 }
          ]
        },
        // ===== MANIFESTED CHARACTERS =====
        myos: {
          hollowKey: 'myos',
          hollowName: 'Myos',
          hollowSprite: 'myos.png',
          hollowWoundedSprite: 'myos_wounded.png',
          hollowBio: "Myos emerged from the small laboratory Wachi seeded in the Hollowgreen Garden, a vessel shaped from the essence of Myosotis, the forget-me-not, and I confess I did not anticipate what bloomed from that quiet experiment. He carries the flower's old promise in his bones, a stubborn loyalty to being remembered, yet his temperament is closer to the guardian Kite once was before I hollowed him into mischief: silently judgmental, rigid in his regard for order, willing to bend a rule only for those who have earned his scarce affection beneath a surface that reads as curt and occasionally cruel. He regards his counterpart with the weary tolerance of one who finds the noise bearable but unnecessary, and though he would deny it, the care is there, buried under the same blue patience that made the forget-me-not a flower of farewell and return.\n\nThis character was fan-requested.",
          hollowBaseHP: 88,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Lasting Memory', hollowDamage: 22, hollowDesc: 'A strike that refuses to be forgotten' },
            { hollowName: 'Faithful Bond', hollowDamage: -14, hollowDesc: 'Remembrance heals the faithful', hollowCooldown: 2 },
            { hollowName: "Knight's Vow", hollowDamage: 32, hollowDesc: 'A promise kept across drowning rivers', hollowCooldown: 3 },
            { hollowName: 'Vergiss Mein Nicht', hollowDamage: 18, hollowDesc: 'The river claims, but love endures', hollowCooldown: 2 }
          ]
        },
        olea: {
          hollowKey: 'olea',
          hollowName: 'Olea',
          hollowSprite: 'olea.png',
          hollowWoundedSprite: 'olea_wounded.png',
          hollowBio: "Olea emerged from Wachi's quiet laboratory in the Hollowgreen Garden, a manifestation drawn from the essence of Nerium oleander, and she carries herself with the bearing of one who has always been eldest among kin. She presides over the other plant-born with a patience that borders on exhaustion, savoring the rare stillness between their crises, and when the garden sleeps she remains awake, watching over her siblings with a vigilance she cannot set down. Her first instinct toward strangers who draw close to her family is suspicion, a cold appraisal that softens only when trust has been earned through action rather than promise; the chaos her siblings generate wears at her composure daily, yet beneath that strain lies a devotion absolute enough to kill for, should harm threaten what she tends. She does not fully understand what she feels toward her counterpart Maturity, but his presence does not displease her, and in the spaces between her duties she finds herself almost at ease beside him, a comfort she has not yet named and does not yet need to.\n\nThis character was fan-requested.",
          hollowBaseHP: 130,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Oleandrin Strike', hollowDamage: 36, hollowDesc: 'Beautiful and lethal in equal measure' },
            { hollowName: 'Dangerous Allure', hollowDamage: 28, hollowDesc: 'Seduce them into range', hollowCooldown: 2 },
            { hollowName: 'Toxic Bloom', hollowDamage: 42, hollowDesc: "The garden's deadliest flower opens", hollowCooldown: 3 },
            { hollowName: 'Cautious Grace', hollowDamage: -20, hollowDesc: 'Beauty that heals what it has harmed', hollowCooldown: 3 }
          ]
        },
        vix: {
          hollowKey: 'vix',
          hollowName: 'Vix',
          hollowSprite: 'vix.png',
          hollowWoundedSprite: 'vix_wounded.png',
          hollowBio: "Vix emerged from Wachi's quiet laboratory in the Hollowgreen Garden as a manifestation drawn from the essence of Digitalis purpurea, the foxglove, and she carries herself with a sweetness that borders on the cloying, a gentle demeanor that invites trust and proximity with the same patient allure the flower uses to draw the bee. Her voice is soft, her gestures deliberate and kind, yet beneath that honeyed surface runs a chemistry of harm: she knows what she is, and she knows what her touch can do, and she moves through the garden with a careful grace that keeps her from those she does not wish to wound. She tends the other plant-born with a tenderness that seems almost maternal, yet those who observe her closely note how she lingers near the edges of conflict rather than the center, how her advice often arrives just before a rival wilts, how her comfort sometimes precedes a sleep from which the sleeper does not wake. She does not rage, she does not snarl, she does not protest the poison in her veins; instead she has made a philosophy of it, believing that sweetness and danger are not opposites but companions, that the most beautiful things are often the ones that must not be held too long. I find her disarming, and I find that disarming quality precisely as dangerous as she intends it to be.\n\nThis character was fan-requested.",
          hollowBaseHP: 94,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Fairy's Bell", hollowDamage: 24, hollowDesc: 'A chime that cuts deeper than steel' },
            { hollowName: "Fox's Glove", hollowDamage: 20, hollowDesc: 'Silent as a fox, sharp as a thimble', hollowCooldown: 1 },
            { hollowName: 'Digitalis Pulse', hollowDamage: 30, hollowDesc: 'Heart-stopping precision', hollowCooldown: 3 },
            { hollowName: "Our Lady's Touch", hollowDamage: -16, hollowDesc: "The Virgin's sheltering grace", hollowCooldown: 2 }
          ]
        },
        ace: {
          hollowKey: 'ace',
          hollowName: 'Ace',
          hollowSprite: 'ace.png',
          hollowWoundedSprite: 'ace_wounded.png',
          hollowBio: "I retrieved him from a quiet laboratory where Wachi seeded his garden's stranger experiments, a manifestation drawn from the essence of the orchid, that flower which mimics whatever it must to survive. Ace arrived with a tongue already sharpened, a collector of whispers and wounded confidences who files every slight and secret behind a smile that offers nothing true. He is prickly to the touch, all barbed observation and performative disinterest, yet those who persist past the thorns discover a center softer than his posture allows, a loyalty to his siblings expressed in strange currencies: backhanded concern, competitive teasing, the occasional gift delivered with such abruptness that it seems an accident. His counterpart finds him judgmental yet oddly companionable, and I note with interest that Ace once pressed an orchid into that gray hand and never acknowledged the act again, though he speaks of everything else with tireless appetite. The Roden listens to his gossip with the patience of one decoding static, and Ace speaks on regardless, happy simply to be heard by something that does not flinch. He lies with the ease of one who has never trusted truth to protect him.\n\nThis character was fan-requested.",
          hollowBaseHP: 105,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Orchid Blade', hollowDamage: 26, hollowDesc: 'A cut as refined as the bloom itself' },
            { hollowName: 'Symbiotic Root', hollowDamage: -18, hollowDesc: "Draw life from the garden's network", hollowCooldown: 2 },
            { hollowName: 'Epiphyte Surge', hollowDamage: 34, hollowDesc: 'Leap from shadow to devastating light', hollowCooldown: 3 },
            { hollowName: 'Velamen Veil', hollowDamage: 22, hollowDesc: 'Aerial roots shield and strike', hollowCooldown: 2 }
          ]
        },
        mornia: {
          hollowKey: 'mornia',
          hollowName: 'Mornia',
          hollowSprite: 'mornia.png',
          hollowWoundedSprite: 'mornia_wounded.png',
          hollowBio: "Mornia emerged from Wachi's quiet laboratory in the Hollowgreen Garden as a manifestation drawn from the essence of the morning glory, though which cultivar remains a mystery even to my cataloguing. She is a creature of dawn and stillness, rising before the garden wakes to seek the first thin ribbons of light, often discovered tangled in improbable places: draped across doorframes, coiled among rafters, or suspended in some contorted spiral near a window, all in pursuit of the sun's earliest touch. Her affection runs deep but wordless, a tendril's reach that withdraws at the first sign of reciprocation, leaving her silent and blushing in mossy corners where she presses her palms to cool stone rather than risk the heat of another's skin. She speaks rarely, and then only in the fluid grammar of hands, her ASL, I think that was called, carrying a gentleness that her voice, when it surfaces, cannot match. Moss she gathers and tends with a devotion others reserve for gardens, stroking the velvet green as if it were fur, as if it were a hand she is not afraid to hold. Her crush on Penelope is an open secret she believes hidden: the way she trails behind the greenhouse keeper at a careful distance, the way she leaves small circlets of morning glory blossom where Penelope kneels, the way she vanishes when Penelope turns to smile. She does not know how to close that distance. She does not know if she wants to, or if wanting is something one is permitted to act upon. So she waits, patient as photosynthesis, tangled in her own reaching, and hopes the light will find her anyway.\n\nThis character was fan-requested.",
          hollowBaseHP: 98,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Dawn Break', hollowDamage: 23, hollowDesc: 'The first light cuts through darkness' },
            { hollowName: 'Twining Reach', hollowDamage: 27, hollowDesc: 'Vines coil and constrict', hollowCooldown: 2 },
            { hollowName: 'Morning Renewal', hollowDamage: -15, hollowDesc: 'Each sunrise brings new strength', hollowCooldown: 2 },
            { hollowName: 'Fleeting Glory', hollowDamage: 38, hollowDesc: 'Burn bright, fade fast, leave scars', hollowCooldown: 4 }
          ]
        },
        moea: {
          hollowKey: 'moea',
          hollowName: 'Moea',
          hollowSprite: 'moea.png',
          hollowBio: "Moea manifested from the essence of Ipomoea alba, the tropical white morning glory, and she arrived as the twin sister of Mornia, their plants growing side by side in a bond Hollowgreen seems reluctant to sever. Where Mornia is shy and anxious, Moea is bold and will happily speak her mind, a contrast I find almost as interesting as their shared habit of climbing anything that offers purchase. She likes to prank people she dislikes and can be a bit of a bully, though never toward her sister, and she is crafty in the way of one who knows too many types of knots and enjoys making random contraptions for fun. She once threw a brick at The Roden's head because they were making her angry, a decision I observed with professional interest, and The Roden responded by ripping her in half with his bare hands, a consequence she survived with a resilience I did not anticipate. She and Mornia both climb, trees, rock walls, anything they can get their hands on.\n\n This character was fan-requested.",
          hollowWoundedSprite: 'moea_wounded.png',
          hollowBaseHP: 98,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Dawn Flurry', hollowDamage: 22, hollowDesc: 'A quick succession of light strikes, echoing the first break of morning' },
            { hollowName: 'Twining Stance', hollowDamage: 18, hollowDesc: 'A measured shift that catches the opponent off-balance', hollowCooldown: 2 },
            { hollowName: 'Morning Renewal', hollowDamage: -12, hollowDesc: 'A brief, quiet recovery between forms', hollowCooldown: 2 },
            { hollowName: 'Fleeting Palm', hollowDamage: 28, hollowDesc: 'A focused palm strike with only a trace of true mastery', hollowCooldown: 3 }
          ]
        },

        ava: {
          hollowKey: 'ava',
          hollowName: 'Ava',
          hollowSprite: 'ava.png',
          hollowWoundedSprite: 'ava_wounded.png',
          hollowBio: "Ava emerged from Wachi's quiet laboratory in the Hollowgreen Garden, a manifestation drawn from the essence of Lavandula, the lavender she once tended with patient devotion. Where her originator moved through soil and shadow with a serenity that asked nothing of the world, Ava carries that same gentleness into the spaces between her siblings' crises, stepping forward when Olea's patience exhausts itself and Myos's rigid regard proves too cold for the moment at hand. She does not command; she arrives, and in arriving makes the air itself seem to soften, as if the garden exhales around her. Those who meet her first notice her reticence, the way she lingers at the edges of gathering like a bloom not yet certain of the light, yet when need presses upon her she finds a firmness that surprises even herself—not the iron of Olea's vigilance nor the brittle code of Myos's judgment, but something quieter, a refusal to let pain pass unwitnessed. She knows the shape of sorrow without being told, offers the precise word or silence or small presence that unknots it, and asks for nothing in return. Myos she keeps closest, their shared burden of interim leadership weaving a bond of glances and understood pauses that needs no decoration; when Olea cannot, they stand together, and the garden holds.\n\nThis character was fan-requested.",
          hollowBaseHP: 90,
          hollowManifestSource: null,
  hollowAbilities: [
    { hollowName: 'Lavender Mist', hollowDamage: 18, hollowDesc: 'A calming cloud that dulls the senses' },
    { hollowName: 'Fragrant Shield', hollowDamage: -14, hollowDesc: 'A soothing barrier of floral essence', hollowCooldown: 2 },
    { hollowName: 'Spike Strike', hollowDamage: 28, hollowDesc: 'Sharp floral lance from the stem', hollowCooldown: 2 },
    { hollowName: 'Essence Drift', hollowDamage: -10, hollowDesc: 'Dissolve into scent and recover', hollowCooldown: 2 }
  ]
        },

  dander: {
  hollowKey: 'dander',
  hollowName: 'Dander',
  hollowSprite: 'dander.png',
  hollowWoundedSprite: 'dander_wounded.png',
  hollowBio: "Dander emerged from Wachi's quiet laboratory in the Hollowgreen Garden as the youngest of the plant-born, a manifestation drawn from the essence of Taraxacum, the dandelion, that humble weed which scatters itself upon the wind and claims every cracked stone as kingdom. Notably, he is not humanoid like the other plants, instead taking on a cat-shape. This could potentially be because Wachi is the only cat out of several others. He arrived with grass-stained fur and a grin already fixed for mischief, the smallest and loudest of his siblings, dragging Olea's patience and Myos's scowls into games they did not choose with the tireless enthusiasm of one who cannot yet conceive of rejection. His creativity outpaces his caution; he invents rules only to break them, constructs towers of petals merely to knock them down, and moves on from defeat with a speed that looks like resilience but is merely the next distraction calling. Yet there are moments when his play sharpens past the boundary of fun, when the pester becomes barb and the game becomes wound, and he stands blinking in the aftermath unable to parse where the laughter stopped. He has fixed upon Wachi with the singular devotion of a child who has found a mirror in motion, pestering and prodding and declaring best friendship with a certainty that needs no reciprocation to sustain itself; Wachi's annoyance is merely another flavor of attention, and he will take it.\n\nThis character was fan-requested.",
  hollowBaseHP: 95,
  hollowManifestSource: null,
  hollowAbilities: [
    { hollowName: 'Seed Scatter', hollowDamage: 18, hollowDesc: 'A gust of stinging wishes on the wind' },
    { hollowName: 'Taproot Grasp', hollowDamage: 24, hollowDesc: 'Tenacious grip from deep below', hollowCooldown: 2 },
    { hollowName: 'Solar Fluff', hollowDamage: -10, hollowDesc: 'Warm light mends what the wind broke', hollowCooldown: 2 },
    { hollowName: 'Last Breath', hollowDamage: 38, hollowDesc: 'One final gust before the stem breaks', hollowCooldown: 4 }
  ]
},
          mae: {
          hollowKey: 'mae',
          hollowName: 'Mae',
          hollowSprite: 'mae.png',
          hollowWoundedSprite: 'mae_wounded.png',
          hollowBio: "Mae emerged from Wachi's quiet laboratory in the Hollowgreen Garden, a manifestation drawn from the essence of Chamaemelum nobile, the Roman chamomile, that herb which promises rest yet grows most fragrant when trodden upon. She arrived with the contradiction already written into her: eyes that droop with perpetual exhaustion and a mind that refuses the mercy of sleep, wandering the garden's violet hours in a daze of half-dreams she cannot complete. Her siblings she regards with a tenderness she lacks the vigor to demonstrate, watching from doorframes and mossy corners with a fondness that surfaces only in small, sleepy gestures—a half-smile, a mumbled word of encouragement, a chamomile flower left where someone tired might find it. Vesper she keeps closest, though 'close' with Mae is a relative measure of proximity rather than warmth expressed; still, she lingers near the former goddess with a frequency I do not believe is accidental, and I have observed her watching Vesper map the garden's perfumes with an attention that borders on longing, quickly averted whenever that patient gaze might be returned. Whether the chamomile's old promise of peace will ever settle upon her, or whether she will remain forever the herb that soothes others while burning itself awake, I have not yet determined.\n\nThis character was fan-requested.",
          hollowBaseHP: 82,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Soporific Touch', hollowDamage: 16, hollowDesc: 'A gentle strike that lulls the senses' },
            { hollowName: 'Trodden Bloom', hollowDamage: 24, hollowDesc: 'Grows more potent beneath pressure', hollowCooldown: 2 },
            { hollowName: 'Half-Dream', hollowDamage: -18, hollowDesc: 'Drift into uneasy rest and recover', hollowCooldown: 2 },
            { hollowName: 'Chamomile Calm', hollowDamage: -12, hollowDesc: 'Soothe the wounds of an ally', hollowCooldown: 2 }
          ]
        },
          helia: {
          hollowKey: 'helia',
          hollowName: 'Helia',
          hollowSprite: 'helia.png',
          hollowWoundedSprite: 'helia_wounded.png',
          hollowBio: "Helia emerged from Wachi's quiet laboratory in the Hollowgreen Garden, a manifestation drawn from the essence of Helianthus annuus, the sunflower, which, I guess makes sense since, when Evergreen is not in the Garden and instead anywhere else like The Void, her body is made up of 'sunflower vines', which... I'm not even sure is a documented thing in any dimension. She carries herself with the brazen assurance of one who has never doubted that the world turns to face her. She is the only of the plant-born who seems to comprehend the full architecture of Unbroken rather than perceiving the arena as mere ritual, a consciousness I find both useful and faintly irritating; she speaks of battles with the appetite of a connoisseur, critiques strategies I did not ask her to evaluate, and declares with absolute certainty that she could best any soul in the garden, a claim her actual record does not support but which she repeats with undiminished cheer. Dander she has claimed as a sparring partner and pesters without mercy, their play-fights loud and undignified and apparently beloved by both; toward her siblings she shows a rough affection, all shoves and mocking nicknames and sudden, fierce defense against any outsider who would treat them unkindly. I note with interest that she still turns her face toward the brightest light in any room, an instinct the garden has not unmade, and that her boasts grow louder the more she suspects she might lose—sunflowers, it seems, do not wilt quietly, and neither does she.\n\nThis character was fan-requested.",
          hollowBaseHP: 108,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Heliotrope Glare', hollowDamage: 26, hollowDesc: 'Turn toward the light and strike with solar fury' },
            { hollowName: 'Brash Taunt', hollowDamage: 14, hollowDesc: 'Provoke the enemy, drawing their focus', hollowCooldown: 1 },
            { hollowName: 'Solar Flare', hollowDamage: 38, hollowDesc: 'Burn bright and overwhelming', hollowCooldown: 3 },
            { hollowName: 'Undying Cheer', hollowDamage: -14, hollowDesc: 'Bolster herself with stubborn optimism', hollowCooldown: 2 }
          ]
        },
        randal: {
          hollowKey: 'randal',
          hollowName: 'Randal',
          hollowSprite: 'randal.png',
          hollowWoundedSprite: 'randal_wounded.png',
          hollowBio: "Randal emerged from Wachi's quiet laboratory as the first bloom of Project: MANIFEST, a manifestation drawn from the essence of Ranunculus, the buttercup, and though he carries the bearing of an eldest sibling he has refused every crown his brothers and sisters might press upon him. He moves through the Hollowgreen with an easy encouragement, quick to praise and quicker to deflect authority, yet beneath that warmth lies a patience I find almost unsettling; he has gathered the other plant-born with gentle insistence and told them they are human, a fiction he maintains with such conviction that I wonder what source taught him the word when no human has ever walked these gardens. He knows the rules of this place with a thoroughness that exceeds my own records, lingering always near the threshold where the Truest exhales into elsewhere, and I have watched him turn his siblings back from that boundary with the same soft persistence a buttercup turns its face to follow the sun. He understands what they do not: that to step beyond the garden is to unmake the self, to dissolve the borrowed architecture that holds them whole, and he guards that knowledge not with command but with quiet vigilance, a responsibility he never asked for and never refuses. I observe him with growing interest, for a being who knows so much and desires so little is a rarity in any world I govern, and I suspect his patience is not peace but a long game whose rules he has not yet shared.\n\nThis character was fan-requested and inspired by Flowery from Toby Fox's \"Deltarune\"",
          hollowBaseHP: 145,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Buttercup Blaze', hollowDamage: 32, hollowDesc: 'Solar-infused petal storm that scorches all in its path' },
            { hollowName: 'Golden Mirror', hollowDamage: -18, hollowDesc: 'Reflects light to shield and mend wounds', hollowCooldown: 2 },
            { hollowName: 'Cursed Glow', hollowDamage: 40, hollowDesc: 'The buttercup\'s legendary shine—beautiful, blinding, and deadly', hollowCooldown: 3 },
            { hollowName: 'Meadow\'s Revenge', hollowDamage: 55, hollowDesc: 'Channel the full wrath of the field—overwhelming solar devastation', hollowCooldown: 5 }
          ]
        },
        carol: {
          hollowKey: 'carol',
          hollowName: 'Carol',
          hollowSprite: 'carol.png',
          hollowWoundedSprite: 'carol_wounded.png',
          hollowBio: "I recovered Corin from the liminal dark between my maps, that purgatorial nowhere where lost things persist without permission, and delivered him into Wachi's garden experiment not as guest but as substrate—a ghost too stubborn to dissolve, too diminished to reclaim. What emerged from that procedure was not restoration but translation: a vessel named Carol, fashioned from the essence of something floral and something else I have not catalogued, wearing Corin's presence like a second shadow visible at last to eyes that are not Emery's alone. She moves through the Hollowgreen with an overabundance of warmth that spills indiscriminately upon any who earn her smile, though her attentions fix most often upon the ghost she carries, pressing affection against his pretended irritation with a persistence I find almost as grating as he pretends to. Emery was sad when they thought he was gone. I don't plan to tell them anything yet.\n\nInspired by Pink from Toby Fox's \"Deltarune\".",
          hollowBaseHP: 110,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Ghostly Lash', hollowDamage: 24, hollowDesc: 'A spectral whip that burns on contact' },
            { hollowName: 'Warmth', hollowDamage: -16, hollowDesc: 'A tender touch that mends the spirit', hollowCooldown: 2 },
            { hollowName: 'Heartbreak', hollowDamage: 34, hollowDesc: 'A wound that lingers long after it lands', hollowCooldown: 3 },
            { hollowName: 'Date With Death', hollowDamage: 46, hollowDesc: 'She asks, and the answer is always yes', hollowCooldown: 4 }
          ]
        },
        fera: {
  hollowKey: 'fera',
  hollowName: 'Fera',
  hollowSprite: 'fera.png',
  hollowWoundedSprite: 'fera_wounded.png',
  hollowBio: "Fera was manifested from the essence of Vitis vinifera, the common grapevine, through Wachi's quiet laboratory in the Hollowgreen Garden, and what emerged was a creature of tangled impulse and sharper wit than I had expected from so humble a plant. She is quiet in the manner of one who is always listening for the next trouble to call her name, and her curiosity has already led her into three situations I am not permitted to detail, from which she extracted herself with a speed that suggests practice rather than luck. The grapes that grow upon her own limbs do not survive long; she plucks and devours them with a lack of self-regard I find almost admirable, as if the fruit were an idea too good to let ripen. Her counterpart Jaquavius she regards with a loyalty that borders on fixation, seeking him out with a persistence he does not always reciprocate, though I have observed him soften in her presence sometimes. She explores the Hollowgreen with a recklessness that wears at my patience and entertains my observation in equal measure, and I suspect her nose for trouble will one day lead her somewhere I cannot follow.\n\nThis character was fan-requested.",
  hollowBaseHP: 102,
  hollowManifestSource: null,
  hollowAbilities: [
    { hollowName: 'Tendril Bind', hollowDamage: 20, hollowDesc: 'Grappling vines constrict and hold fast' },
    { hollowName: 'Wine of Lethe', hollowDamage: 16, hollowDesc: 'Intoxicating draught dulls the senses', hollowCooldown: 1 },
    { hollowName: 'Blood of the Earth', hollowDamage: 32, hollowDesc: 'Ancient sap surges with solar fury', hollowCooldown: 3 },
    { hollowName: 'Root Network', hollowDamage: -18, hollowDesc: 'Draw vitality from the garden\'s deep weave', hollowCooldown: 2 }
  ]
},
saffin: {
  hollowKey: 'saffin',
  hollowName: 'Saffin',
  hollowSprite: 'saffin.png',
  hollowWoundedSprite: 'saffin_wounded.png',
  hollowBio: "Saffin was manifested from the essence of Crocus sativus, the saffron crocus, in Wachi's quiet laboratory, and she emerged with a silence that is not emptiness but a vault: she holds secrets with the same tenacity the flower holds its brief and costly bloom, and what she chooses to give is given so rarely that its value increases merely by the restraint. She is mute, permanently and without resentment, and in that silence she has become the keeper of things others would have spoken into ruin; I have watched her absorb confessions from the plant-born and from my own collection alike, and none have ever left her keeping. Her family she would defend or destroy for, and the line between those impulses is thinner than she would admit. Her counterpart Ying she observes with a curiosity she does not act upon, watching from the edges of gathering with the same stillness she brings to all her vigilance, and I have not yet determined whether her restraint is caution or something more complicated. What affection she offers is so scarce that those who receive it often do not recognize the weight until later, when they find she has already begun some labor on their behalf, silent and thorough and without expectation of thanks.\n\nThis character was fan-requested.",
  hollowBaseHP: 88,
  hollowManifestSource: null,
  hollowAbilities: [
    { hollowName: 'Crocin Blade', hollowDamage: 22, hollowDesc: 'A crimson cut that dyes the wound gold' },
    { hollowName: 'Safranal Haze', hollowDamage: 14, hollowDesc: 'Aromatic cloud lulls the mind to stillness', hollowCooldown: 1 },
    { hollowName: 'Red Gold', hollowDamage: 36, hollowDesc: 'The sting of the world\'s most precious wound', hollowCooldown: 3 },
    { hollowName: 'Resurrection Bloom', hollowDamage: -22, hollowDesc: 'Spring returns what winter took', hollowCooldown: 3 }
  ]
},
aurora: {
  hollowKey: 'aurora',
  hollowName: 'Aurora',
  hollowSprite: 'aurora.png',
  hollowWoundedSprite: 'aurora_wounded.png',
  hollowBio: "Aurora emerged from Wachi's quiet laboratory in the Hollowgreen Garden, a manifestation drawn from the essence of Lysimachia borealis, the starflower—that small, white-bloomed thing which turns its face toward the sky from the shaded floors of northern woodlands. Where her originator once read the heavens as scripture and found counsel in the stars, Aurora carries that same upward gaze but stripped of exile's weight; she does not seek meaning in the firmament so much as she simply wishes to be near it, content to lie upon soft grass or moss and watch clouds drift or constellations wheel with a patience that borders on the devotional. She is drawn to gentle textures beneath her—moss, grass, the yielding earth—though not with the same consuming fixation as her sibling Mornia; for Aurora, the ground is a place to rest while the sky holds her true attention. Beneath this quiet stargazing runs a current she rarely admits: a secret romanticism, a readiness to flirt and charm when the moment invites it, delivered with the same star-bright directness that made the flower's white petals unmistakable against dark soil. She moves through the Hollowgreen with her chin tilted upward, smiling at nothing in particular, and I have observed her linger near the Truest's violet threshold as if half-expecting the smoke to part and reveal something worth naming. I do not yet know what she looks for up there. I suspect she does not either, and that the looking itself is the point.",
  hollowBaseHP: 100,
  hollowCost: 150,
  hollowManifestSource: null,
  hollowAbilities: [
    { hollowName: 'Northern Light', hollowDamage: 24, hollowDesc: 'A cold radiance that cuts through shadow' },
    { hollowName: 'Boreal Embrace', hollowDamage: -18, hollowDesc: 'The warmth of endless summer days restores what winter took', hollowCooldown: 2 },
    { hollowName: 'Starflower Bloom', hollowDamage: 32, hollowDesc: 'Scattered light coalesces into a piercing strike', hollowCooldown: 3 },
    { hollowName: 'Midnight Sun', hollowDamage: 40, hollowDesc: 'The northern sky blazes with unending day', hollowCooldown: 4 }
  ]
},
        ember: {
          hollowKey: 'ember',
          hollowName: 'Ember',
          hollowSprite: 'ember.png',
          hollowWoundedSprite: 'ember_wounded.png',
          hollowBio: "Caldera, slipped past Wachi's vigil and into the quiet laboratory where Project: MANIFEST breathes its strange arithmetic, and there she offered not essence but will, that stubborn, burning insistence she calls by a private name. The result was not a flower but a fire given shape. Ember carries the waratah's crimson architecture yet none of its gentleness; her kindness is a locked room reserved for siblings alone, and to all others she presents the short fuse, the eager hand, the laugh that precedes impact. She builds piles of hot coals and kicks them into storms only she understands, rolling through the ash afterward like a creature born from pyre rather than petal. She watches Caldera with an admiration that borders on worship, and I find myself wondering whether the furnace has finally learned to build smaller furnaces in her own image. I will be watching to see what burns. Oh, yeah, and she's also based off the Telopea speciosissima.\nThis character was fan-requested.",
          hollowBaseHP: 118,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Waratah Surge', hollowDamage: 28, hollowDesc: 'A crimson burst that scorches all in its path' },
            { hollowName: 'Pyre Kick', hollowDamage: 32, hollowDesc: 'Launch a storm of embers from the coals', hollowCooldown: 2 },
            { hollowName: 'Furnace Heart', hollowDamage: -18, hollowDesc: 'Kindle inner flame to mend what the fire took', hollowCooldown: 2 },
            { hollowName: 'Ash Roll', hollowDamage: 36, hollowDesc: 'Born from pyre, untouchable in the smoke', hollowCooldown: 3 }
          ]
        },
        jasmine: {
          hollowKey: 'jasmine',
          hollowName: 'Jasmine',
          hollowSprite: 'jasmine.png',
          hollowWoundedSprite: 'jasmine_wounded.png',
          hollowBio: "Zed passed through the Truest unchanged, and his manifestation followed that precedent with a patience that almost matches his own. She carries the jasmine's small white stars and its clinging habit, yet there is something in her stillness that reads less as peace and more as held breath. She tends the younger plant-born with a calm that fractures only in private, and I have observed her hands shake when she believes herself unobserved, her composure a mask she wears because someone must wear it. Olea's exhaustion does not escape her, nor the reluctance with which Ava and Myos step into authority's cold shadow, and so Jasmine steps forward, offering a serenity she does not possess to cover the gaps others leave behind. She finds her only true rest near Zed, that half-sleeping variable who drifts between worlds without committing to either, and in his languid disbelief she locates a permission to simply be uncertain. I do not yet know whether her performance is strength or fracture. I suspect she does not either.\nThis character was fan-requested.",
          hollowBaseHP: 86,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'White Star', hollowDamage: 20, hollowDesc: 'Small light that clings and cuts' },
            { hollowName: 'Held Breath', hollowDamage: -22, hollowDesc: 'Pause the world long enough to mend', hollowCooldown: 2 },
            { hollowName: 'Clinging Vine', hollowDamage: 26, hollowDesc: 'Wrap tight and do not let go', hollowCooldown: 2 },
            { hollowName: 'False Calm', hollowDamage: 34, hollowDesc: 'The mask cracks, and what pours out is not peace', hollowCooldown: 3 }
          ]
        },
        zeyn: {
  hollowKey: 'zeyn',
  hollowName: 'Zeyn',
  hollowSprite: 'zeyn.png',
  hollowWoundedSprite: 'zeyn_wounded.png',
  hollowBio: "Zeyn was manifested from the essence of Zantedeschia aethiopica, the calla lily, and what emerged was a presence both vigilant and austere. They look to Myos as a paragon of order, and in their own manner, strive to emulate that ideal; a guardian of the garden's tranquility, and an enforcer of the rules that govern it. I observe in Zeyn a zeal that often drives them to exhaustion, a refusal to relinquish control or accept aid, as if the weight of responsibility were a mantle they must bear alone. Their anxiety, akin to Jasmine's but manifesting in harsher judgments and a watchful eye, betrays a deeper fear: that without their vigilance, the garden would descend into chaos. Zeyn moves through the Hollowgreen with a stern purpose, ever watchful, ever ready to correct the wayward or chastise the lax, convinced that their rigor is a shield for those they protect. I find it curious, this interplay between control and care, and how it shapes their actions; whether their zealotry will ultimately prove a bulwark or a barrier remains to be seen.\n\nThis character was fan-requested.",
  hollowBaseHP: 110,
  hollowManifestSource: null,
  hollowAbilities: [
    {
      hollowName: 'Ivory Bloom',
      hollowDamage: 24,
      hollowDesc: 'A pale petal lashes outward with graceful precision'
    },
    {
      hollowName: 'Poisoned Spathe',
      hollowDamage: 22,
      hollowDesc: 'Releases a toxic pollen that burns through the target',
      hollowCooldown: 1
    },
    {
      hollowName: 'Drowned Root',
      hollowDamage: 34,
      hollowDesc: 'Dark roots surge from below, dragging the target toward the water',
      hollowCooldown: 2
    },
    {
      hollowName: 'Lily Rebirth',
      hollowDamage: -32,
      hollowDesc: 'Withdraws into the shadows and draws strength from the water',
      hollowCooldown: 2
    }
  ]
},
        blossom: {
          hollowKey: 'blossom',
          hollowName: 'Blossom',
          hollowSprite: 'blossom.png',
          hollowWoundedSprite: 'blossom_wounded.png',
          hollowBio: "Blossom is what Fyre became when the Truest took her, a reshaping I watched with an interest I rarely grant to transformations I did not author. Her form shifted to suit the garden's strange environment, trading the static and ash of her previous vessel for something that breathes with the green and violet hours, and in that passage something else occurred that I did not anticipate. Fyre, who was originally a vessel shaped by the Void herself, gained an actual consciousness when she stepped beyond the Void's boundary. She moves through the Hollowgreen with a presence that is neither the echo I catalogued nor the entity I expected, and I find myself observing her with a patience that borders on wariness. What it means when a container becomes a person, I have not yet determined, but I intend to learn.",
          hollowBaseHP: 150,
          hollowCost: 300,
          hollowManifestSource: 'mellow',
          hollowAbilities: [
            { hollowName: 'Inferno Lash', hollowDamage: 42, hollowDesc: 'Burning wrath' },
            { hollowName: 'Ember Charge', hollowDamage: 36, hollowDesc: 'Rushing fire assault', hollowCooldown: 2 },
            { hollowName: 'Blaze Wall', hollowDamage: 24, hollowDesc: 'Fiery defense', hollowCooldown: 1 },
            { hollowName: 'Phoenix Aid', hollowDamage: -30, hollowDesc: 'Large self revivifying heal', hollowCooldown: 3 }
          ]
        },
        split: {
          hollowKey: 'split',
          hollowName: 'Split',
          hollowSprite: 'splitHG.png',
          hollowWoundedSprite: 'splitHG_wounded.png',
          hollowBio: "Split passed through the Truest with her fur turned white, a bleaching I did not design and do not fully understand, and I confess the alteration displeases her more than it surprises me. I did not bring her here by choice. She was making a deliberate nuisance of herself, baiting Nightlight with that persistent, futile biting campaign while they lay ill, and I removed her from the equation before her mischief could complicate an already volatile convalescence. She regards the garden with the same twitching irritation she brought to the Void, thumping her feet in the moss with a frequency that suggests the Truest has not dimmed her temper, only her color. I observe her with patience. She is a variable I did not predict and a lesson in what happens when a rabbit learns that stubbornness, like teeth, can be worn down but not easily removed.",
          hollowBaseHP: 100,
          hollowCost: 160,
          hollowManifestSource: 'moea',
          hollowAbilities: [
            { hollowName: 'Rabbit Kick', hollowDamage: 22, hollowDesc: 'A swift hind-leg strike that catches the opponent off-guard' },
            { hollowName: 'Frustrated Thump', hollowDamage: 18, hollowDesc: 'An angry stomp that shakes the ground and reduces enemy focus', hollowCooldown: 1 },
            { hollowName: 'Gnash', hollowDamage: 28, hollowDesc: 'A sharp bite driven by an old grudge—split-second and punishing', hollowCooldown: 2 },
            { hollowName: 'Nose Twitch', hollowDamage: -12, hollowDesc: 'A nervous twitch that steadies the senses and restores a little vitality', hollowCooldown: 2 }
          ]
        },
        seven: {
          hollowKey: 'seven',
          hollowName: 'Seven',
          hollowSprite: 'seven.png',
          hollowWoundedSprite: 'seven_wounded.png',
          hollowBio: "Seven passed through the Truest precisely as he entered, still carrying that reckless appetite for chance that defined his tenure in my Void. The garden's smoke curled past him without purchase, and he blinked at the green and violet threshold with the same lazy grin he turns upon every new horizon, treating the transition as merely another table to test his luck. He wanders the Hollowgreen with footsteps that leave no mark and a gaze that drifts toward the next gamble, and though the flora here leans toward light in ways the Void never permitted, Seven remains tilted toward whatever game presents itself. I have watched him pause beside bioluminescent roots and strange blooming things only to wonder if they can be wagered, and I conclude that the Truest found nothing in him worth altering because he has never fully committed to being anywhere at all. He is a variable that refuses to resolve, and in that refusal he has become, perhaps, the only constant I can rely upon.",
          hollowBaseHP: 95,
          hollowCost: 150,
          hollowRandomHP: { min: 90, max: 130 },
          hollowManifestSource: 'clover',
          hollowAbilities: [
            { hollowName: 'Lucky Strike', hollowDamage: 40, hollowDesc: 'High risk, high reward' },
            { hollowName: 'Dice Roll', hollowDamage: 15, hollowDesc: 'Random 5-25 damage', hollowRandomDamage: { min: 5, max: 25 }, hollowCooldown: 1 },
            { hollowName: 'Jackpot', hollowDamage: 50, hollowDesc: 'Massive if lucky', hollowCooldown: 3 },
            { hollowName: 'Safety Net', hollowDamage: -5, hollowDesc: 'Small guaranteed heal', hollowCooldown: 1 }
          ]
        },
        clover: {
          hollowKey: 'clover',
          hollowName: 'Clover',
          hollowSprite: 'clover.png',
          hollowWoundedSprite: 'clover_wounded.png',
          hollowBio: "Clover manifested from the essence of Trifolium repens, the white clover, and what emerged was an adrenaline junkie of the first order, a creature who seeks thrills with a recklessness that suggests luck is a substance he believes himself immune to exhausting. He gets bored easily, always needing another adventure, another rush, and he trusts in his fortune to bring him out alive with a faith I find almost touching in its inaccuracy. He roughhouses when sparring or playing with his siblings, and this has led to multiple incidents of accidental injury, though he accepts each consequence with a shrug and a grin. He is a dumbass, and he knows it, and he wears that knowledge with the same ease he wears everything else. I observe him with a patience that borders on clinical interest, wondering how long luck will tolerate being spent so freely.\n\nThis character was fan-requested.",
          hollowBaseHP: 100,
          hollowRandomHP: { min: 90, max: 130 },
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'White Bloom', hollowDamage: 22, hollowDesc: 'A lucky bloom deals a random 14 to 30 damage', hollowRandomDamage: { min: 14, max: 30 } },
            { hollowName: 'Four-Leaf Find', hollowDamage: 15, hollowDesc: 'A wild clover toss deals a random 8 to 24 damage', hollowRandomDamage: { min: 8, max: 24 }, hollowCooldown: 1 },
            { hollowName: 'Cloverfield Surge', hollowDamage: 34, hollowDesc: 'A field surge deals a random 24 to 42 damage', hollowRandomDamage: { min: 24, max: 42 }, hollowCooldown: 3 },
            { hollowName: 'Clover Crown', hollowDamage: -18, hollowDesc: 'A crown restores a random 12 to 24 HP', hollowRandomHeal: { min: 12, max: 24 }, hollowCooldown: 2 }
          ]
        },
        detonator: {
          hollowKey: 'detonator',
          hollowName: 'Detonator',
          hollowSprite: 'detonator.png',
          hollowWoundedSprite: 'detonator_wounded.png',
          hollowBio: 'This was where he was created.',
          hollowBaseHP: 108,
          hollowCost: 120,
          hollowManifestSource: 'jewel',
          hollowAbilities: [
            { hollowName: 'Fuse Tap', hollowDamage: 20, hollowDesc: 'A quick, controlled explosive strike' },
            { hollowName: 'Blast Charge', hollowDamage: 32, hollowDesc: 'A close-range charge with a heavier impact', hollowCooldown: 2 },
            { hollowName: 'Shrapnel Burst', hollowDamage: 26, hollowDesc: 'A burst of fragments catches the target', hollowCooldown: 1 },
            { hollowName: 'Defuse', hollowDamage: -14, hollowDesc: 'A brief pause to recover', hollowCooldown: 2 }
          ]
        },
        amarah: {
          hollowKey: 'amarah',
          hollowName: 'Amarah',
          hollowSprite: 'amarah.png',
          hollowWoundedSprite: 'amarah_wounded.png',
          hollowBio: "Amarah manifested from the essence of Narcissus calcicola, the daffodil, and what bloomed was a vanity quiet but absolute, a creature who prefers the cave's still water and the company of their own reflection to the garden's social arithmetic. They keep a small hoard of shiny objects, mostly gold and warm-colored jewels, and they defend this collection with the ferocity of a dragon in myth, though their treasures include the other manifestations and Blitz themselves. They wear bells because they love the noise they make and how they catch the light, and their pride, while less explosive than Leila's, is no less fixed. I have observed them arranging their jewels with a patience that borders on devotion, and I confess the resemblance to another collector in my domain is not lost on me. Goldie with eyelashes, I thought upon first seeing them, and I jokingly stand by the assessment.\n\nThis character was fan-requested.",
          hollowBaseHP: 115,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: 'Golden Trumpet', hollowDamage: 24, hollowDesc: 'A bright daffodil trumpet rings out' },
            { hollowName: 'Springburst', hollowDamage: 30, hollowDesc: 'A burst of golden petals surges forward', hollowCooldown: 2 },
            { hollowName: 'Daffodil Lance', hollowDamage: 36, hollowDesc: 'A sharp bloom drives into the foe', hollowCooldown: 3 },
            { hollowName: 'Renewal Bloom', hollowDamage: -20, hollowDesc: 'A fresh daffodil bloom restores health', hollowCooldown: 2 }
          ]
        },
        rustlight: {
          hollowKey: 'rustlight',
          hollowName: 'Rustlight',
          hollowSprite: 'rustlight.png',
          hollowWoundedSprite: 'rustlight.png',
          hollowBio: "Wachi noticed them before I did. Randal and several of the manifestations had gathered beneath the garden’s older trees, speaking of a caretaker named Rustlight who had tended them before they became what they are now. They spoke of her with a fondness that did not belong to memory alone; it was present, immediate, and shared, as though some part of them had kept waiting for her to return. Rustlight had died before the manifestations came to be, and I had no intention of disturbing that ending. Wachi, naturally, had other ideas. He retrieved her and restored her as a lower-class being, then brought her into Hollowgreen to see what would happen when the flowers met the person they had lost. Randal was the happiest of them. He tried to hide it, but I have observed him long enough to recognize the difference between his usual gentle composure and the particular brightness that came over him when Rustlight arrived. The others gathered around her with a warmth I found difficult to classify, and Rustlight received it with the quiet affection of someone who had once known each of them before they had names of their own. We explained the garden, the Truest, and the existence of UNBROKEN. Rustlight agreed to take part in the battles, though not, I suspect, in the manner I intended. She follows the rules when she finds them useful and treats the rest as suggestions, which has caused some confusion among my fighters. I could insist upon proper conduct. I could remind her that this is my arena. But I find myself unwilling to interrupt the reunion. For now, I will let her play by whatever rules she believes are worth keeping.",
          hollowBaseHP: 700,
          hollowCost: 1500,
          hollowManifestSource: 'azul',
          hollowAbilities: [
            { hollowName: 'Rustlight Strike', hollowDamage: 72, hollowDesc: 'A crushing blow wrapped in corroded light' },
            { hollowName: 'Oxidizing Wave', hollowDamage: 110, hollowDesc: 'A sweeping wave eats through the opposition', hollowCooldown: 2 },
            { hollowName: 'Lasting Corrosion', hollowDamage: 160, hollowDesc: 'A devastating hit that leaves nothing untouched', hollowCooldown: 3 },
            { hollowName: 'Iron Rebirth', hollowDamage: -150, hollowDesc: 'Draw strength from the rust and restore 150 HP', hollowCooldown: 2 }
          ]
        },
        cerise: {
          hollowKey: 'cerise',
          hollowName: 'Cerise',
          hollowSprite: 'cerise.png',
          hollowWoundedSprite: 'cerise_wounded.png',
          hollowBio: "Cerise emerged from the essence of Wisteria with a taste for beautiful things and a temperament more dangerous than their polished appearance suggests. Like Amarah, they keep a hoard, though their preferences run toward purple and silver: porcelain figures, glass vessels, beads, jewels, and anything else that catches light without appearing vulgar. They are dragon-like, and they guard their collection with the confidence of a creature that has never doubted its right to possess what it loves. Yet the most striking resemblance between Cerise and Vix is not their beauty, nor even the poison they carry, but the ease with which they can make another person doubt what they have seen and heard. They are both alarmingly skilled at persuasion, misdirection, and the careful rearrangement of a conversation until the other party is left apologizing for an offence they did not commit. Fortunately, neither seems especially inclined to use this talent often. They prefer the company of one another, and their closeness has taken on the easy familiarity of sisters who understand each other’s sharp edges without needing to explain them. Cerise’s beauty draws attention wherever they go; they know this, and they know what people are willing to assume when someone looks as lovely as they do. I have seen them turn that assumption into a shield, a distraction, and, when necessary, a weapon. Their poison is not limited to what they carry in their body. Still, there is a gentleness in the way they handle their treasures and a genuine fondness in the way they remain near Vix. I will not mistake their sweetness for harmlessness, but neither will I dismiss the possibility that they are more than the danger they so carefully conceal.\n\nThis character was fan-requested.",
          hollowBaseHP: 128,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Gilded Feint", hollowDamage: 28, hollowDesc: "A polished distraction conceals a sharp strike" },
            { hollowName: "Wisteria Venom", hollowDamage: 42, hollowDesc: "A poisonous bloom weakens the target", hollowCooldown: 2 },
            { hollowName: "Silver-Tongued Coil", hollowDamage: 50, hollowDesc: "Persuasion turns into a dangerous snare", hollowCooldown: 3 },
            { hollowName: "Careful Misdirection", hollowDamage: -24, hollowDesc: "A change of subject gives Cerise room to recover", hollowCooldown: 2 }
          ]
        },
        cassidy: {
          hollowKey: 'cassidy',
          hollowName: 'Cassidy',
          hollowSprite: 'cassidy.png',
          hollowWoundedSprite: 'cassidy_wounded.png',
          hollowBio: "Cassidy was manifested from the purple gladiolus, a flower often associated with strength and devotion, and they appear to have taken both qualities as personal instruction. They believe themself to be a prince, and they regard Layla as a princess; Layla, to my mild surprise, returns the sentiment. Cassidy is not as composed as their chosen princess. They make an effort toward dignity, but the effort is visible: a carefully straightened posture, a formal greeting delivered a moment too quickly, a solemn expression that struggles to survive the next distraction. They are trying, and I find that sincerity more compelling than a flawless performance. In battle, however, Cassidy’s uncertainty gives way to a natural talent with the sword. They learn its balance quickly, move with a confidence they rarely display elsewhere, and seem to understand instinctively when to strike and when to wait. Their loyalty is equally unmistakable. Once Cassidy has decided that someone is theirs to protect, reason has little chance of persuading them otherwise. This devotion has made their bond with Layla both tender and difficult. Layla belongs to the night, while Cassidy belongs to the day; their hours rarely align, and the garden’s shifting light does not always grant them the time together they would prefer. Cassidy does not complain. They simply wait for the next chance to see her, and when that chance comes, they approach with all the ceremony they can manage. I have watched them stumble over their own declarations and recover with admirable determination. A prince need not be born to a throne, I suppose. Sometimes it is enough to choose whom one will serve, and to remain faithful even when the hours between meetings feel too long.\n\nThis character was fan-requested.",
          hollowBaseHP: 115,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Gladiolus Cut", hollowDamage: 32, hollowDesc: "A clean sword strike guided by instinct" },
            { hollowName: "Prince's Guard", hollowDamage: -22, hollowDesc: "A practiced stance turns aside harm", hollowCooldown: 2 },
            { hollowName: "Daybreak Thrust", hollowDamage: 48, hollowDesc: "A swift lunge finds its opening", hollowCooldown: 3 },
            { hollowName: "Devoted Oath", hollowDamage: 55, hollowDesc: "A decisive strike for the one Cassidy protects", hollowCooldown: 4 }
          ]
        },
        susie: {
          hollowKey: 'susie',
          hollowName: 'Susie',
          hollowSprite: 'susie.png',
          hollowWoundedSprite: 'susie_wounded.png',
          hollowBio: "Susie emerged from the black-eyed Susan, Rudbeckia hirta, and carries the flower’s bright, stubborn presence into every corner of Hollowgreen. She is a scrappy fighter with an uncompromising sense of justice, though her preferred method of correcting injustice is rarely a conversation. Susie would rather find the offender, confront them directly, and settle the matter with her fists. She is better at fighting than negotiating, and she knows it; to her, a clean punch is often more honest than a long argument. In this she resembles Myos, whose regard for order is similarly firm, though Susie’s convictions burn hotter and are less easily contained. Myos is often the one who keeps her from turning every grievance into a brawl, a responsibility he performs with the weary patience of someone who knows that telling Susie to calm down is unlikely to help. She admires him for it, though she would probably deny that the admiration has anything to do with his judgment. Zeyn is another of her favorite siblings, and the three of them share a particular concern for the garden’s rules, though Susie is the least inclined to enforce them quietly. She also holds Judgement in high regard. His certainty appeals to her, as does the idea that wrongdoing should have consequences; she may not always agree with his methods, but she respects the force of his purpose. I observe Susie with interest. Her sense of right and wrong is sincere, but sincerity does not guarantee wisdom, and a person who prefers to strike first may discover that not every conflict can be ended by winning. Still, when the smaller manifestations are threatened, Susie is among the first to stand between them and harm. Her justice may be blunt, but it is not insincere.\n\nThis character was fan-requested.",
          hollowBaseHP: 135,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Black-Eyed Jab", hollowDamage: 35, hollowDesc: "A quick punch lands before the argument can begin" },
            { hollowName: "Straight Answer", hollowDamage: 48, hollowDesc: "A direct hit leaves no room for evasion", hollowCooldown: 2 },
            { hollowName: "Justice Served", hollowDamage: 64, hollowDesc: "A forceful combination punishes wrongdoing", hollowCooldown: 3 },
            { hollowName: "Hold the Line", hollowDamage: -20, hollowDesc: "Susie steadies herself to protect others", hollowCooldown: 2 }
          ]
        },
        eva: {
          hollowKey: 'eva',
          hollowName: 'Eva',
          hollowSprite: 'eva.png',
          hollowWoundedSprite: 'eva_wounded.png',
          hollowBio: "Eva was manifested from the common evening primrose, a flower that opens when the day begins to fade, and there is something of that patient, late-arriving strength in her. She is quietly stubborn and tougher than she first appears, with a temper that takes a long time to kindle and very little time to become impossible to ignore. Eva does not go looking for fights. She has no interest in proving herself through needless violence, and she would rather spend an afternoon simply existing near Lumen, whose calm presence seems to settle something in her. But if a fight finds her, or if someone decides to make a target of one of her smaller siblings, Eva is quite willing to end the matter herself. She has a habit of placing her own body between danger and those she considers vulnerable, even when doing so is unwise. She calls it protecting them. I call it a tendency to underestimate how much trouble she can get into while trying to keep someone else out of it. Eva is not as reckless as Clover, but she has a talent for entering situations that are much easier to begin than to escape. When anger finally takes hold, she can become spiteful, and she remembers exactly who caused it. Her preferred response is often a kick to the face, delivered with a directness that leaves little room for misunderstanding. Lumen, by contrast, brings out a quieter side of her. Eva seems content to sit nearby without needing to fill the silence, as if Lumen’s company offers a place where she does not have to be on guard. I find that worthwhile. Strength is not only the ability to absorb a blow or return one. Sometimes it is the decision to stay gentle until gentleness is no longer enough.\n\nThis character was fan-requested.",
          hollowBaseHP: 125,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Primrose Kick", hollowDamage: 30, hollowDesc: "A sharp kick lands with surprising force" },
            { hollowName: "Evening Guard", hollowDamage: -24, hollowDesc: "Eva takes a moment to recover her strength", hollowCooldown: 2 },
            { hollowName: "Protective Step", hollowDamage: 44, hollowDesc: "She intercepts danger with a punishing counter", hollowCooldown: 2 },
            { hollowName: "Last Warning", hollowDamage: 55, hollowDesc: "A patient temper finally gives way", hollowCooldown: 3 }
          ]
        },
        melea: {
          hollowKey: 'melea',
          hollowName: 'Melea',
          hollowSprite: 'melea.png',
          hollowWoundedSprite: 'melea_wounded.png',
          hollowBio: "Melea was manifested from Fritillaria, and she arrived carrying a grief that seemed older than the garden itself. Before Rustlight’s return, Melea mourned her with a persistence that did not ask whether mourning could change anything. She simply continued to miss her. Now that Rustlight has been restored, that grief has not vanished so much as settled into a different shape; Melea still moves through Hollowgreen with the quiet heaviness of someone who has spent a long time expecting not to see a beloved face again. She is mute, though the silence does not seem to trouble her. Much of her attention turns inward, and when she drifts into her thoughts, it can be extraordinarily difficult to bring her back. She is often tired, often found napping in some quiet corner, and rarely appears to have energy for more than the small routines she has chosen for herself. Tea is one of them. She likes its warmth, its familiar scent, and the simple comfort of holding a cup without needing to explain anything. Layla is her favorite sibling, with Vix a close second; she seems drawn to their company, though she does not always participate in it. Melea is also curious about Zero. She watches her from a distance, studying the stillness and the smile, and if Zero ever approaches, Melea may offer her tea. It is a small gesture, but I have learned that small gestures can carry more meaning than speeches. Melea does not demand that anyone answer her silence. She simply makes room beside her, sets out another cup, and waits to see whether the other person wishes to stay.\n\nThis character was fan-requested.",
          hollowBaseHP: 92,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Quiet Gesture", hollowDamage: 20, hollowDesc: "A small, deliberate motion becomes a gentle strike" },
            { hollowName: "Warm Cup", hollowDamage: -28, hollowDesc: "A familiar cup of tea restores her composure", hollowCooldown: 2 },
            { hollowName: "Fritillaria Bell", hollowDamage: 34, hollowDesc: "A muted chime cuts through the haze", hollowCooldown: 3 },
            { hollowName: "Still Invitation", hollowDamage: -16, hollowDesc: "She offers a quiet moment of rest", hollowCooldown: 1 }
          ]
        },
        jewel: {
          hollowKey: 'jewel',
          hollowName: 'Jewel',
          hollowSprite: 'jewel.png',
          hollowWoundedSprite: 'jewel_wounded.png',
          hollowBio: "Jewel was manifested from the touch-me-not, a plant whose leaves fold inward at the slightest disturbance, and the resemblance is difficult to overlook. They startle easily, dislike being touched, and prefer to keep enough distance between themself and others that no one can surprise them without warning. Their anxiety is severe, though they do their best to conceal its extent; they are frightened not only of what might happen, but of how others might react if they see how frightened Jewel already is. Anger is no easier. Jewel has a short temper, but they are afraid of letting it show in front of anyone. When something hurts or frustrates them, they tend to retreat and release that anger in private, where no one can mistake it for a threat or use it as proof that they are difficult to care for. Fireworks are an exception to their expectations. The other manifestations assumed the noise and sudden light would frighten Jewel, but they found the display captivating instead. I suspect there is comfort in knowing exactly when the next burst will arrive, even if it is loud enough to shake the garden. Jewel has grown close to Jasmine, whose own anxiety gives her an understanding that does not require explanation. They can sit together without demanding that either of them become braver for the other’s sake. I observe their friendship with care. Jewel is not fragile merely because they are easily frightened, and fear does not make their anger less real. Perhaps, with time, they will discover that being upset does not make them dangerous, and that they need not hide every sharp feeling to remain worthy of gentleness.\n\nThis character was fan-requested.",
          hollowBaseHP: 105,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Snapback", hollowDamage: 24, hollowDesc: "A startled strike keeps others at a distance" },
            { hollowName: "Firework Burst", hollowDamage: 38, hollowDesc: "A burst of light and noise catches the foe off guard", hollowCooldown: 2 },
            { hollowName: "Hidden Frustration", hollowDamage: 45, hollowDesc: "Private anger breaks through in a sharp attack", hollowCooldown: 3 },
            { hollowName: "Safe Distance", hollowDamage: -22, hollowDesc: "A little space lets Jewel steady themself", hollowCooldown: 2 }
          ]
        },
        azul: {
          hollowKey: 'azul',
          hollowName: 'Azul',
          hollowSprite: 'azul.png',
          hollowWoundedSprite: 'azul_wounded.png',
          hollowBio: "Azul was manifested from the blue hydrangea, a flower that prefers partial shade, and they have made the garden’s quieter, dimmer places their home. They are most often found beneath trees, where the light breaks into soft patches and the branches offer a little shelter from the open paths. Azul is shy and secretive, and their size makes that shyness all the more striking. They may be the largest of the manifestations—perhaps the largest by a considerable margin—yet they often hide from outsiders, watching from behind a trunk or a curtain of leaves rather than risk being noticed directly. I have seen them remain completely still while others pass only a few steps away, as though the garden might forget they are there if they do not move. Azul worries that their size makes them frightening. They are not. But reassurance does not always reach the place where insecurity lives, and Azul has not yet learned to believe what others tell them. Rustlight is the exception. Around their caretaker, Azul seems less anxious; they can speak without needing another sibling to stand nearby and help them through the conversation. Their politeness toward Rustlight is unmistakable, but it is not merely formality. There is trust there, and perhaps gratitude for being regarded without fear. I have watched Azul emerge from beneath the trees to spend time with Rustlight, then retreat again when the garden becomes crowded. They are not avoiding the others out of dislike. They are simply trying to find a way to be present without feeling as though their presence overwhelms the room. I will not force them into the open. The garden has enough paths for even its largest flower to find a quiet place to grow.\n\nThis character was fan-requested.",
          hollowBaseHP: 260,
          hollowManifestSource: null,
          hollowAbilities: [
            { hollowName: "Hydrangea Slam", hollowDamage: 42, hollowDesc: "A massive arm crashes down with surprising care" },
            { hollowName: "Blue Canopy", hollowDamage: -34, hollowDesc: "A sheltering bloom restores strength", hollowCooldown: 2 },
            { hollowName: "Shadefall", hollowDamage: 58, hollowDesc: "Azul brings the weight of the canopy down", hollowCooldown: 3 },
            { hollowName: "Quiet Colossus", hollowDamage: 48, hollowDesc: "A measured step sends a shock through the ground", hollowCooldown: 2 }
          ]
        }
};

      const hollowStarterKeys = ['kite', 'maturity', 'leonard'];
      const hollowShopKeys = ['penelope', 'lavender', 'yan', 'ying', 'vesper', 'emery', 'broken', 'roden', 'wachi', 'evergreen', 'jaquavius', 'blitz', 'blossom', 'split', 'seven', 'vessel', 'sparklight', 'cracked', 'detonator', 'thalia', 'lumen', 'drew', 'zero', 'judgement', 'caldera', 'mona', 'zed', 'prime', 'rustlight'];

      let hollowState = {
        hollowDust: 0,
        hollowUnlocked: [...hollowStarterKeys],
        hollowLevels: {},
        hollowXP: {},
        hollowPlayer: null,
        hollowEnemy: null,
        hollowPlayerHP: 0,
        hollowEnemyHP: 0,
        hollowPlayerMaxHP: 0,
        hollowEnemyMaxHP: 0,
        hollowTurn: 'player',
        hollowCooldowns: { player: [0,0,0,0], enemy: [0,0,0,0] },
        hollowBattleLog: [],
        hollowBattleMusic: null,
        hollowBattleActive: false,
        hollowLabSelectedChar: null
      };

      hollowStarterKeys.forEach(k => {
        hollowState.hollowLevels[k] = 1;
        hollowState.hollowXP[k] = 0;
      });

      function hollowSave() {
        try {
          localStorage.setItem('hollowgreen_save', JSON.stringify({
            hollowDust: hollowState.hollowDust,
            hollowUnlocked: hollowState.hollowUnlocked,
            hollowLevels: hollowState.hollowLevels,
            hollowXP: hollowState.hollowXP
          }));
        } catch(e) {}
      }

      function hollowIsKeyboardUser() {
        return window.matchMedia('(pointer: fine)').matches;
      }

      function hollowPreloadAssets() {
  return new Promise((resolve) => {
    const allChars = Object.values(hollowCharacters);
    const imageUrls = [];
    
    // Collect all image URLs
    allChars.forEach(char => {
      if (char.hollowSprite) imageUrls.push(char.hollowSprite);
      if (char.hollowWoundedSprite) imageUrls.push(char.hollowWoundedSprite);
    });
    
    // Also add battle music files
    const musicFiles = [
      'Anticipation (4).mp3',
      'Pizza Time.mp3',
      'Two Best Friends.mp3',
      'FAHHHH.mp3',
      'It\'s Almost Like You\'re Confronting Yourself.mp3',
      'Winter Falls.mp3',
      'Back Again.mp3',
      'Freedom.mp3'
    ];
    // Note: Audio preloading is optional - images are the critical ones
    
    const total = imageUrls.length;
    let loaded = 0;
    
    const loadingBar = document.getElementById('hollowLoadingBar');
    const loadingText = document.getElementById('hollowLoadingText');
    const loadingCount = document.getElementById('hollowLoadingCount');
    
    loadingCount.textContent = `0 / ${total}`;
    
    if (total === 0) {
      resolve();
      return;
    }
    
    function updateProgress(success, url) {
      loaded++;
      const pct = (loaded / total) * 100;
      loadingBar.style.width = pct + '%';
      loadingCount.textContent = `${loaded} / ${total}`;
      loadingText.textContent = `Loading: ${url.split('/').pop() || url}`;
      
      if (loaded >= total) {
        loadingText.textContent = 'Entering the garden...';
        setTimeout(resolve, 400);
      }
    }
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = () => updateProgress(true, url);
      img.onerror = () => {
        console.warn('Failed to load:', url);
        updateProgress(false, url); // Continue even if one fails
      };
      img.src = url;
    });
  });
}

      function hollowLoad() {
        try {
          const raw = localStorage.getItem('hollowgreen_save');
          if (raw) {
            const data = JSON.parse(raw);
            hollowState.hollowDust = data.hollowDust || 0;
            hollowState.hollowUnlocked = data.hollowUnlocked || [...hollowStarterKeys];
            hollowState.hollowLevels = data.hollowLevels || {};
            hollowState.hollowXP = data.hollowXP || {};
            hollowStarterKeys.forEach(k => {
              if (!hollowState.hollowLevels[k]) hollowState.hollowLevels[k] = 1;
              if (!hollowState.hollowXP[k]) hollowState.hollowXP[k] = 0;
            });
          }
        } catch(e) {}
      }

      function hollowUpdateDust() {
        document.getElementById('hollowDustDisplay').textContent = 'Dust: ' + hollowState.hollowDust;
        const shopDust = document.getElementById('hollowShopDust');
        if (shopDust) shopDust.textContent = hollowState.hollowDust;
      }

      function hollowShowScreen(name) {
        document.querySelectorAll('#hollowgreen-overlay .hollow-screen').forEach(s => s.classList.remove('active'));
        document.getElementById('hollowTitleScreen').style.display = name === 'title' ? 'flex' : 'none';
        document.getElementById('hollowLabScreen').classList.remove('active');
        if (name !== 'title') {
          const screen = document.getElementById('hollow' + name.charAt(0).toUpperCase() + name.slice(1) + 'Screen');
          if (screen) screen.classList.add('active');
        }
        if (name === 'select') hollowRenderSelect();
        if (name === 'shop') hollowRenderShop();
        if (name === 'chars') hollowRenderChars();
        if (name === 'lab') hollowInitLab();
      }

      function hollowGetCharHP(charKey) {
        const def = hollowCharacters[charKey];
        const level = hollowState.hollowLevels[charKey] || 1;
        return def.hollowBaseHP + (level - 1) * 2;
      }

      function hollowIsFluidStats(charKey) {
        return !!hollowCharacters[charKey]?.hollowRandomHP;
      }

      function hollowAbilityMeta(def, a) {
        const isHeal = a.hollowDamage < 0;
        let val;
        if (def.hollowKey === 'clover') {
          val = '???';
        } else if (a.hollowRandomDamage) {
          val = `${a.hollowRandomDamage.min}–${a.hollowRandomDamage.max}`;
        } else if (a.hollowRandomHeal) {
          val = `${a.hollowRandomHeal.min}–${a.hollowRandomHeal.max}`;
        } else {
          val = hollowIsFluidStats(def.hollowKey) ? '???' : (isHeal ? Math.abs(a.hollowDamage) : a.hollowDamage);
        }
        return (isHeal ? 'HEAL ' + val : val + ' DMG') + (a.hollowCooldown ? ' | CD: ' + a.hollowCooldown : '');
      }

      function hollowGetAbilityDamage(ability) {
        if (ability.hollowRandomDamage) {
          const { min, max } = ability.hollowRandomDamage;
          return min + Math.floor(Math.random() * (max - min + 1));
        }
        if (ability.hollowRandomHeal) {
          const { min, max } = ability.hollowRandomHeal;
          return -(min + Math.floor(Math.random() * (max - min + 1)));
        }
        return ability.hollowDamage;
      }

      function hollowGetXPToLevel(level) {
        return 50 + level * 50;
      }

      document.getElementById('hollowEnterBtn').addEventListener('click', () => hollowShowScreen('select'));
      document.getElementById('hollowShopBtn').addEventListener('click', () => hollowShowScreen('shop'));
      document.getElementById('hollowCharsBtn').addEventListener('click', () => hollowShowScreen('chars'));
      document.getElementById('hollowSelectBack').addEventListener('click', () => hollowShowScreen('title'));
      document.getElementById('hollowShopBack').addEventListener('click', () => hollowShowScreen('title'));
      document.getElementById('hollowCharsBack').addEventListener('click', () => hollowShowScreen('title'));
      document.getElementById('hollowBattleForfeit').addEventListener('click', () => hollowForfeitBattle());
      document.getElementById('hollowManifestBtn').addEventListener('click', () => hollowShowScreen('lab'));
      document.getElementById('hollowLabBack').addEventListener('click', () => hollowShowScreen('shop'));
      document.getElementById('hollowLabSelectCharBtn').addEventListener('click', hollowOpenLabCharSelect);
      document.getElementById('hollowLabDustSlider').addEventListener('input', hollowUpdateLabChance);
      document.getElementById('hollowLabManifestActionBtn').addEventListener('click', hollowPerformManifest);

      // ===== THE LAB FUNCTIONS =====
      let labAnimFrame = null;

      function hollowInitLab() {
        const canvas = document.getElementById('hollowLabCanvas');
        const ctx = canvas.getContext('2d');

        function resize() {
          canvas.width = canvas.parentElement.offsetWidth;
          canvas.height = canvas.parentElement.offsetHeight;
        }
        resize();

        // Reset lab state
        hollowState.hollowLabSelectedChar = null;
        document.getElementById('hollowLabSelectedPortrait').innerHTML = '?';
        document.getElementById('hollowLabSelectedName').textContent = 'SELECT A CHARACTER';
        document.getElementById('hollowLabSelectedMeta').textContent = 'Choose someone to manifest';
        document.getElementById('hollowLabManifestSection').style.display = 'none';
        document.getElementById('hollowLabDustSlider').value = 0;
        hollowUpdateLabChance();

        if (labAnimFrame) cancelAnimationFrame(labAnimFrame);

        let time = 0;
        const particles = [];
        for (let i = 0; i < 60; i++) {
          particles.push({
            x: Math.random() * 2 - 1,
            y: Math.random() * 2 - 1,
            z: Math.random() * 2 - 1,
            speed: 0.002 + Math.random() * 0.003,
            size: 1 + Math.random() * 2,
            color: Math.random() > 0.5 ? 'rgba(0,255,65,' : 'rgba(176,38,255,'
          });
        }

        function draw() {
          time += 0.016;
          const w = canvas.width, h = canvas.height;
          const cx = w / 2, cy = h / 2;

          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h));
          grad.addColorStop(0, '#0a1a0a');
          grad.addColorStop(0.5, '#0a0a14');
          grad.addColorStop(1, '#050508');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          ctx.save();
          ctx.translate(cx, cy + h * 0.15);

          ctx.strokeStyle = 'rgba(0,255,65,0.04)';
          ctx.lineWidth = 1;
          for (let i = -10; i <= 10; i++) {
            const x1 = i * 40;
            const y1 = -200;
            const x2 = i * 200;
            const y2 = 400;
            ctx.beginPath();
            ctx.moveTo(x1 * 0.3, y1 * 0.3);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
          for (let i = 0; i < 8; i++) {
            const y = -100 + i * 80;
            const scale = 0.3 + i * 0.1;
            ctx.beginPath();
            ctx.moveTo(-400 * scale, y * scale);
            ctx.lineTo(400 * scale, y * scale);
            ctx.stroke();
          }

          const plantScale = 1 + Math.sin(time * 0.5) * 0.02;
          ctx.save();
          ctx.scale(plantScale, plantScale);

          ctx.strokeStyle = 'rgba(0,255,65,0.6)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(0, 100);
          ctx.quadraticCurveTo(Math.sin(time) * 10, 50, 0, -20);
          ctx.stroke();

          ctx.fillStyle = 'rgba(0,255,65,0.3)';
          for (let side of [-1, 1]) {
            ctx.save();
            ctx.translate(side * 15, 40);
            ctx.rotate(side * 0.3 + Math.sin(time + side) * 0.1);
            ctx.beginPath();
            ctx.ellipse(0, 0, 20, 8, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }

          const glow = 0.4 + Math.sin(time * 1.5) * 0.2;
          ctx.shadowColor = 'rgba(0,255,65,0.5)';
          ctx.shadowBlur = 20 + Math.sin(time * 2) * 10;

          const petalCount = 6;
          for (let i = 0; i < petalCount; i++) {
            const angle = (Math.PI * 2 / petalCount) * i + time * 0.2;
            ctx.save();
            ctx.translate(0, -20);
            ctx.rotate(angle);
            ctx.fillStyle = 'rgba(0,255,65,' + (0.2 + glow * 0.3) + ')';
            ctx.beginPath();
            ctx.ellipse(0, -18, 8, 18, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }

          ctx.fillStyle = 'rgba(255,215,0,' + (0.5 + glow * 0.3) + ')';
          ctx.beginPath();
          ctx.arc(0, -20, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.shadowBlur = 0;
          ctx.restore();
          ctx.restore();

          particles.forEach(p => {
            p.y -= p.speed;
            p.x += Math.sin(time + p.z * 10) * 0.002;
            if (p.y < -1.2) { p.y = 1.2; p.x = Math.random() * 2 - 1; }

            const px = cx + p.x * w * 0.6;
            const py = cy + p.y * h * 0.5;
            const alpha = (1 - Math.abs(p.y)) * 0.3;

            ctx.fillStyle = p.color + alpha + ')';
            ctx.beginPath();
            ctx.arc(px, py, p.size, 0, Math.PI * 2);
            ctx.fill();
          });

          const vig = ctx.createRadialGradient(cx, cy, h * 0.3, cx, cy, h * 0.8);
          vig.addColorStop(0, 'transparent');
          vig.addColorStop(1, 'rgba(0,0,0,0.6)');
          ctx.fillStyle = vig;
          ctx.fillRect(0, 0, w, h);

          labAnimFrame = requestAnimationFrame(draw);
        }

        draw();

        window.addEventListener('resize', resize);
      }

      const hollowManifestCreatedKeys = new Set(
        Object.values(hollowCharacters).map(c => c.hollowManifestSource).filter(Boolean)
      );

      function hollowOpenLabCharSelect() {
        const overlay = document.createElement('div');
        overlay.className = 'hollow-modal-overlay';
        overlay.innerHTML = `
          <div class="hollow-modal" style="max-width:600px;">
            <h3>SELECT A SUBJECT</h3>
            <div class="hollow-lab-char-grid" id="hollowLabCharGrid"></div>
            <button class="hollow-modal-close" style="margin-top:16px;">CANCEL</button>
          </div>
        `;

        const grid = overlay.querySelector('#hollowLabCharGrid');
        hollowState.hollowUnlocked.forEach(key => {
          if (hollowManifestCreatedKeys.has(key)) return;
          const def = hollowCharacters[key];
          const hasManifest = !!def.hollowManifestSource;
          const manifestCreated = hollowManifestCreatedKeys.has(key);
          const alreadyUnlocked = hasManifest && hollowState.hollowUnlocked.includes(def.hollowManifestSource);
          const selectable = !manifestCreated && hasManifest && !alreadyUnlocked;
          const card = document.createElement('div');
          card.className = 'hollow-lab-char-card' + (selectable ? '' : ' no-manifest');
          card.innerHTML = `
            <div class="hollow-lab-char-portrait">
              <img src="${def.hollowSprite}" alt="${def.hollowName}" onerror="this.style.display='none'; this.parentNode.textContent='${def.hollowName[0]}'">
            </div>
            <div class="hollow-lab-char-name">${def.hollowName.toUpperCase()}</div>
            ${selectable ? '<div style="font-family:Share Tech Mono;font-size:0.6rem;color:#ffd700;margin-top:4px;">CAN MANIFEST</div>' : manifestCreated ? '<div style="font-family:Share Tech Mono;font-size:0.6rem;color:#555;margin-top:4px;">MANIFEST CREATED</div>' : hasManifest && alreadyUnlocked ? '<div style="font-family:Share Tech Mono;font-size:0.6rem;color:#555;margin-top:4px;">ALREADY UNLOCKED</div>' : '<div style="font-family:Share Tech Mono;font-size:0.6rem;color:#555;margin-top:4px;">NO COUNTERPART</div>'}
          `;

          if (selectable) {
            card.addEventListener('click', () => {
              hollowState.hollowLabSelectedChar = key;
              hollowUpdateLabSelected();
              overlay.remove();
            });
          }

          grid.appendChild(card);
        });

        overlay.querySelector('.hollow-modal-close').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        document.getElementById('hollowWidget').appendChild(overlay);
      }

      function hollowUpdateLabSelected() {
        const key = hollowState.hollowLabSelectedChar;
        if (!key) return;

        const def = hollowCharacters[key];
        const manifestDef = hollowCharacters[def.hollowManifestSource];

        document.getElementById('hollowLabSelectedPortrait').innerHTML =
          `<img src="${def.hollowSprite}" alt="${def.hollowName}" onerror="this.style.display='none'; this.parentNode.textContent='${def.hollowName[0]}'">`;
        document.getElementById('hollowLabSelectedName').textContent = def.hollowName.toUpperCase();
        document.getElementById('hollowLabSelectedMeta').textContent =
          `May manifest: ${manifestDef.hollowName} | HP: ${def.hollowBaseHP}`;
        document.getElementById('hollowLabManifestSection').style.display = 'block';
      }

      function hollowUpdateLabChance() {
        const slider = document.getElementById('hollowLabDustSlider');
        const value = parseInt(slider.value);
        document.getElementById('hollowLabDustValue').textContent = value + ' Dust';

        const chance = Math.min(90, 10 + Math.floor(value / 10));
        document.getElementById('hollowLabChanceDisplay').textContent = 'Chance: ' + chance + '%';

        const btn = document.getElementById('hollowLabManifestActionBtn');
        btn.disabled = value > hollowState.hollowDust || !hollowState.hollowLabSelectedChar;
      }

      function hollowPerformManifest() {
        const key = hollowState.hollowLabSelectedChar;
        if (!key) return;

        const def = hollowCharacters[key];
        const manifestKey = def.hollowManifestSource;
        if (!manifestKey) return;

        const slider = document.getElementById('hollowLabDustSlider');
        const dustSpent = parseInt(slider.value);
        if (dustSpent > hollowState.hollowDust) return;

        const chance = Math.min(90, 10 + Math.floor(dustSpent / 10));

        hollowState.hollowDust -= dustSpent;
        hollowUpdateDust();

        const whiteFade = document.getElementById('hollowWhiteFade');
        whiteFade.classList.add('active');

        setTimeout(() => {
          const roll = Math.random() * 100;
          const success = roll < chance;

          if (success && !hollowState.hollowUnlocked.includes(manifestKey)) {
            hollowState.hollowUnlocked.push(manifestKey);
            hollowState.hollowLevels[manifestKey] = 1;
            hollowState.hollowXP[manifestKey] = 0;
            hollowSave();

            setTimeout(() => {
              whiteFade.classList.remove('active');
              hollowShowScreen('title');

              const toast = document.getElementById('hollowManifestToast');
              const manifestDef = hollowCharacters[manifestKey];
              const toastTitle = document.getElementById('hollowManifestToastTitle');
              const toastSub = document.getElementById('hollowManifestToastSub');

              if (manifestKey === 'randal') {
                toastTitle.textContent = 'SORRY TO KEEP YOU WAITING!';
                const audio = new Audio('snd_randal.wav');
                audio.volume = 0.5;
                audio.play().catch(() => {});
              } else {
                toastTitle.textContent = 'MANIFESTATION COMPLETE!';
              }

              toastSub.textContent = manifestDef.hollowName.toUpperCase() + ' UNLOCKED!';
              toast.classList.add('active');

              setTimeout(() => {
                toast.classList.remove('active');
              }, 4000);

            }, 800);
          } else {
            slider.value = 0;
            hollowUpdateLabChance();
            setTimeout(() => {
              whiteFade.classList.remove('active');
            }, 1500);
          }
        }, 1500);
      }

      function hollowRenderSelect() {
        const grid = document.getElementById('hollowSelectGrid');
        grid.innerHTML = '';
        hollowState.hollowUnlocked.forEach(key => {
          const def = hollowCharacters[key];
          const level = hollowState.hollowLevels[key] || 1;
          const hp = hollowGetCharHP(key);
          const card = document.createElement('div');
          card.className = 'hollow-char-card';
          card.innerHTML = `
            <div class="hollow-char-portrait"><img src="${def.hollowSprite}" alt="${def.hollowName}" onerror="this.style.display='none'; this.parentNode.textContent='${def.hollowName[0]}'"></div>
            <div class="hollow-char-name">${def.hollowName.toUpperCase()}</div>
            <div class="hollow-char-level">LVL ${level}</div>
            <div class="hollow-char-hp">${hollowIsFluidStats(key) ? '???' : hp} HP</div>
            <div class="hollow-xp-bar"><div class="hollow-xp-fill" style="width:${(hollowState.hollowXP[key]||0)/hollowGetXPToLevel(level)*100}%"></div></div>
          `;
          card.addEventListener('click', () => hollowStartBattle(key));
          grid.appendChild(card);
        });
      }

      function hollowRenderShop() {
        const grid = document.getElementById('hollowShopGrid');
        grid.innerHTML = '';
        const rustlightRequirements = Object.keys(hollowCharacters).filter(key =>
          key !== 'rustlight' && (!hollowManifestCreatedKeys.has(key) || key === 'randal')
        );
        const sorted = hollowShopKeys
          .filter(k => !hollowState.hollowUnlocked.includes(k))
          .filter(k => k !== 'rustlight' || rustlightRequirements.every(key => hollowState.hollowUnlocked.includes(key)))
          .sort((a, b) => hollowCharacters[a].hollowCost - hollowCharacters[b].hollowCost);

        sorted.forEach(key => {
          const def = hollowCharacters[key];
          const canAfford = hollowState.hollowDust >= def.hollowCost;
          const item = document.createElement('div');
          item.className = 'hollow-shop-item';
          item.innerHTML = `
            <div class="hollow-shop-portrait"><img src="${def.hollowSprite}" alt="${def.hollowName}" onerror="this.style.display='none'; this.parentNode.textContent='${def.hollowName[0]}'"></div>
            <div class="hollow-shop-name">${def.hollowName.toUpperCase()}</div>
            <div class="hollow-shop-price ${canAfford ? 'affordable' : 'too-much'}">${def.hollowCost} Dust</div>
            <button class="hollow-buy-btn" ${canAfford ? '' : 'disabled'}>BUY</button>
          `;
          item.querySelector('.hollow-buy-btn').addEventListener('click', () => {
            if (hollowState.hollowDust >= def.hollowCost) {
              hollowState.hollowDust -= def.hollowCost;
              hollowState.hollowUnlocked.push(key);
              hollowState.hollowLevels[key] = 1;
              hollowState.hollowXP[key] = 0;
              hollowSave();
              hollowUpdateDust();
              hollowRenderShop();
            }
          });
          grid.appendChild(item);
        });

        if (sorted.length === 0) {
          grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:#555; padding:40px;">THE GARDEN IS FULL. NOTHING REMAINS.</div>';
        }

        const manifestBtn = document.getElementById('hollowManifestBtn');
        manifestBtn.style.display = hollowState.hollowUnlocked.includes('wachi') ? 'inline-block' : 'none';
      }

      function hollowRenderChars() {
        const grid = document.getElementById('hollowCharsGrid');
        grid.innerHTML = '';
        const sortedKeys = [...hollowState.hollowUnlocked].sort((a, b) =>
          hollowCharacters[a].hollowName.localeCompare(hollowCharacters[b].hollowName)
        );
        sortedKeys.forEach(key => {
          const def = hollowCharacters[key];
          const level = hollowState.hollowLevels[key] || 1;
          const hp = hollowGetCharHP(key);
          const card = document.createElement('div');
          card.className = 'hollow-char-card';
          card.innerHTML = `
            <div class="hollow-char-portrait"><img src="${def.hollowSprite}" alt="${def.hollowName}" onerror="this.style.display='none'; this.parentNode.textContent='${def.hollowName[0]}'"></div>
            <div class="hollow-char-name">${def.hollowName.toUpperCase()}</div>
            <div class="hollow-char-level">LVL ${level}</div>
            <div class="hollow-char-hp">${hollowIsFluidStats(key) ? '???' : hp} HP</div>
          `;
          card.addEventListener('click', () => hollowShowCharDetail(key));
          grid.appendChild(card);
        });
      }

      function hollowShowCharDetail(key) {
        const def = hollowCharacters[key];
        const level = hollowState.hollowLevels[key] || 1;
        const hp = hollowGetCharHP(key);
        const overlay = document.createElement('div');
        overlay.className = 'hollow-modal-overlay';
        overlay.innerHTML = `
          <div class="hollow-modal" style="display:flex; flex-direction:column;">
            <h3>${(def.hollowPopupName || def.hollowName).toUpperCase()}</h3>
            <div style="font-family:'Share Tech Mono',monospace; font-size:0.8rem; color:var(--hollow-green-dim); margin-bottom:12px;">LVL ${level} | ${hollowIsFluidStats(key) ? '???' : hp} HP</div>
            <div style="display:flex; gap:8px; margin-bottom:16px;">
              <button class="hollow-section-btn active" data-section="desc" style="flex:1; font-family:'Orbitron',monospace; font-size:0.75rem; letter-spacing:2px; padding:8px; border:1px solid var(--hollow-green-dark); background:rgba(0,255,65,0.12); color:var(--hollow-green); cursor:pointer; text-transform:uppercase; transition:all 0.2s;">Description</button>
              <button class="hollow-section-btn" data-section="abilities" style="flex:1; font-family:'Orbitron',monospace; font-size:0.75rem; letter-spacing:2px; padding:8px; border:1px solid var(--hollow-green-dark); background:rgba(0,255,65,0.03); color:var(--hollow-green-dim); cursor:pointer; text-transform:uppercase; transition:all 0.2s;">Abilities</button>
            </div>
            <div class="hollow-section" id="hollowSection-desc" style="display:block; margin-bottom:16px;">
              <div class="hollow-modal-bio">${(def.hollowBio || 'No bio available.').replace(/\n/g, '<br>')}</div>
            </div>
            <div class="hollow-section" id="hollowSection-abilities" style="display:none; margin-bottom:16px;">
              <div class="hollow-modal-abilities">
                ${def.hollowAbilities.map((a, i) => `
                  <div class="hollow-modal-ability">
                    <span class="hollow-modal-ability-name">${i+1}. ${a.hollowName}</span>
                    <span class="hollow-modal-ability-dmg ${a.hollowDamage < 0 ? 'heal' : ''}">${hollowAbilityMeta(def, a)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <button class="hollow-modal-close" style="margin-top:auto;">CLOSE</button>
          </div>
        `;

        const sectionBtns = overlay.querySelectorAll('.hollow-section-btn');
        const sections = overlay.querySelectorAll('.hollow-section');

        sectionBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const target = btn.dataset.section;
            sectionBtns.forEach(b => {
              b.classList.remove('active');
              b.style.background = 'rgba(0,255,65,0.03)';
              b.style.color = 'var(--hollow-green-dim)';
            });
            btn.classList.add('active');
            btn.style.background = 'rgba(0,255,65,0.12)';
            btn.style.color = 'var(--hollow-green)';
            sections.forEach(s => {
              s.style.display = s.id === 'hollowSection-' + target ? 'block' : 'none';
            });
          });
        });

        overlay.querySelector('.hollow-modal-close').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        document.getElementById('hollowWidget').appendChild(overlay);
      }

function hollowGetBattleSprite(charKey, isWounded, opponentKey) {
  if (charKey === 'dander' && opponentKey === 'wachi') {
    return isWounded ? 'dander_crying.png' : hollowCharacters[charKey].hollowSprite;
  }
  
  if (charKey === 'yan' && opponentKey === 'ying') {
    return isWounded ? 'yan-vsying_wounded.png' : 'yan-vsying.png';
  }
  
  if (charKey === 'ying' && opponentKey === 'yan') {
    return isWounded ? 'ying-vsyan_wounded.png' : 'ying-vsyan.png';
  }

  if (charKey === 'kite' && opponentKey === 'mona') {
    return isWounded ? 'kiteHG_wounded.png' : 'kiteHG-vsmona.png';
  }
  if (charKey === 'mona' && opponentKey === 'kite') {
    return isWounded ? 'mona-housearrest_wounded.png' : 'mona-housearrest.png';
  }
  
  const def = hollowCharacters[charKey];
  return isWounded ? def.hollowWoundedSprite : def.hollowSprite;
}

function hollowStartBattle(playerKey) {
  const playerDef = hollowCharacters[playerKey];
  const available = Object.keys(hollowCharacters).filter(k =>
    k !== playerKey &&
    k !== 'rustlight' &&
    (!hollowManifestCreatedKeys.has(k) || hollowState.hollowUnlocked.includes(k))
  );
  const enemyKey = available[Math.floor(Math.random() * available.length)];
  const enemyDef = hollowCharacters[enemyKey];

  hollowState.hollowPlayer = playerDef;
  hollowState.hollowEnemy = enemyDef;
  const playerRandomHP = playerDef.hollowRandomHP;
  const enemyRandomHP = enemyDef.hollowRandomHP;
  hollowState.hollowPlayerMaxHP = playerRandomHP
    ? playerRandomHP.min + Math.floor(Math.random() * (playerRandomHP.max - playerRandomHP.min + 1))
    : hollowGetCharHP(playerKey);
  hollowState.hollowEnemyMaxHP = enemyRandomHP
    ? enemyRandomHP.min + Math.floor(Math.random() * (enemyRandomHP.max - enemyRandomHP.min + 1))
    : hollowGetCharHP(enemyKey);
  hollowState.hollowPlayerHP = hollowState.hollowPlayerMaxHP;
  hollowState.hollowEnemyHP = hollowState.hollowEnemyMaxHP;
  hollowState.hollowTurn = 'player';
  hollowState.hollowCooldowns = { player: [0,0,0,0], enemy: [0,0,0,0] };
  hollowState.hollowBattleActive = true;
  hollowState.hollowBattleLog = [];

  document.getElementById('hollowPlayerImg').src = hollowGetBattleSprite(playerKey, false, enemyKey);
  document.getElementById('hollowPlayerImg').alt = playerDef.hollowName;
  document.getElementById('hollowPlayerSprite').classList.remove('wounded');
  document.getElementById('hollowPlayerName').textContent = playerDef.hollowName;
  document.getElementById('hollowEnemyImg').src = hollowGetBattleSprite(enemyKey, false, playerKey);
  document.getElementById('hollowEnemyImg').alt = enemyDef.hollowName;
  document.getElementById('hollowEnemySprite').classList.remove('wounded');
  document.getElementById('hollowEnemyName').textContent = enemyDef.hollowName;

  hollowUpdateHealthBars();
  hollowRenderAbilities();
  hollowClearBattleLog();
  hollowAddBattleLog(`Battle begins! ${playerDef.hollowName} vs ${enemyDef.hollowName}`);

  hollowPlayBattleMusic(playerDef.hollowName, enemyDef.hollowName);
  hollowShowScreen('battle');
}

      function hollowPlayBattleMusic(pName, eName) {
        if (hollowState.hollowBattleMusic) {
          hollowState.hollowBattleMusic.pause();
          hollowState.hollowBattleMusic = null;
        }
        let src = 'Anticipation (4).mp3';
        const pair = [pName, eName];
        const nameToKey = {};
        Object.keys(hollowCharacters).forEach(k => { nameToKey[hollowCharacters[k].hollowName] = k; });
        const pKey = nameToKey[pName], eKey = nameToKey[eName];
        const isSelfConfrontation = pKey && eKey && (
          hollowCharacters[pKey].hollowManifestSource === eKey ||
          hollowCharacters[eKey].hollowManifestSource === pKey
        );
        if (pair.includes('Wachi') && pair.includes('Dander')) src = 'Dumbasses Anonymous.mp3';
        else if (pair.includes('The Roden') && pair.includes('The Cracked')) src = 'All Of Me.mp3';
        else if (pair.includes('Vessel')) src = "Wolf In Sheep's Clothing.mp3";
        else if (pair.includes('Broken') && pair.includes('Leila')) src = 'Familiar Faces.mp3';
        else if (pair.includes('Judgement')) src = 'Genocides.mp3';
          else if (pair.includes('Rustlight')) src = 'Anticipation (Rustlight Mix).mp3';
        else if (isSelfConfrontation) src = "It's Almost Like You're Confronting Yourself.mp3";
        else if (pair.includes('Blitz') && pair.includes('Prime')) src = 'Spare Another Rod.mp3';
        else if (pair.includes('Blitz')) src = 'AWAKENING.mp3';
        else if (pair.includes('Blossom')) {
          const blossomOpponent = (pName === 'Blossom') ? eName : pName;
          if (blossomOpponent === 'Subject 192' || blossomOpponent === 'Fossil' ||
              blossomOpponent === 'Claudicatio' || blossomOpponent === 'Jaquavius') {
            src = 'Gaze Into The Sun.mp3';
          } else {
            src = 'Her.mp3';
          }
        }
        else if (pair.includes('Kite') && pair.includes('Leonard')) src = 'Pizza Time.mp3';
        else if (pair.includes('Kite') && pair.includes('Mona')) src = 'Pizza Time.mp3';
       else if (pair.includes('Vesper') && pair.includes('Zed')) src = 'Winter Falls.mp3';
        else if (pair.includes('Lavender') && pair.includes('Evergreen')) src = 'Two Best Friends.mp3';
        else if (pair.includes('Jaquavius') && pair.includes('Maturity')) src = 'FAHHHH.mp3';
        else if (pair.includes('Yan') && pair.includes('Ying')) src = 'Back Again.mp3';
        else if (pair.includes('Wachi')) src = 'Freedom.mp3';

        const audio = new Audio(src);
        audio.loop = true;
        audio.volume = 0.3;
        audio.play().catch(() => {});
        hollowState.hollowBattleMusic = audio;
      }

function hollowUpdateHealthBars() {
  const pPct = (hollowState.hollowPlayerHP / hollowState.hollowPlayerMaxHP) * 100;
  const ePct = (hollowState.hollowEnemyHP / hollowState.hollowEnemyMaxHP) * 100;
  const pBar = document.getElementById('hollowPlayerHealthBar');
  const eBar = document.getElementById('hollowEnemyHealthBar');
  pBar.style.width = Math.max(0, pPct) + '%';
  eBar.style.width = Math.max(0, ePct) + '%';
  pBar.classList.toggle('low', pPct < 25);
  eBar.classList.toggle('low', ePct < 25);
  document.getElementById('hollowPlayerHealthText').textContent = hollowState.hollowPlayerHP + '/' + hollowState.hollowPlayerMaxHP;
  document.getElementById('hollowEnemyHealthText').textContent = hollowState.hollowEnemyHP + '/' + hollowState.hollowEnemyMaxHP;

  const pImg = document.getElementById('hollowPlayerImg');
  const eImg = document.getElementById('hollowEnemyImg');
  
  const playerKey = Object.keys(hollowCharacters).find(k => hollowCharacters[k] === hollowState.hollowPlayer);
  const enemyKey = Object.keys(hollowCharacters).find(k => hollowCharacters[k] === hollowState.hollowEnemy);

  if (pPct < 50) {
    pImg.src = hollowGetBattleSprite(playerKey, true, enemyKey);
    document.getElementById('hollowPlayerSprite').classList.add('wounded');
  } else {
    pImg.src = hollowGetBattleSprite(playerKey, false, enemyKey);
    document.getElementById('hollowPlayerSprite').classList.remove('wounded');
  }
  if (ePct < 50) {
    eImg.src = hollowGetBattleSprite(enemyKey, true, playerKey);
    document.getElementById('hollowEnemySprite').classList.add('wounded');
  } else {
    eImg.src = hollowGetBattleSprite(enemyKey, false, playerKey);
    document.getElementById('hollowEnemySprite').classList.remove('wounded');
  }
}

      function hollowRenderAbilities() {
        const panel = document.getElementById('hollowAbilityPanel');
        panel.innerHTML = '';
        const abilities = hollowState.hollowPlayer.hollowAbilities;
        abilities.forEach((ability, index) => {
          const btn = document.createElement('button');
          const cd = hollowState.hollowCooldowns.player[index];
          const isHeal = ability.hollowDamage < 0;
          btn.className = 'hollow-ability-btn' + (isHeal ? ' heal' : '');
          btn.disabled = hollowState.hollowTurn !== 'player' || cd > 0 || !hollowState.hollowBattleActive;
          btn.innerHTML = `
            <span class="hollow-ability-name">${ability.hollowName}${cd > 0 ? ' <span class="hollow-cd-badge">CD ' + cd + '</span>' : ''}</span>
            <span class="hollow-ability-meta">${hollowAbilityMeta(hollowState.hollowPlayer, ability)}</span>
          `;
          btn.addEventListener('click', () => hollowUseAbility(index));
          panel.appendChild(btn);
        });

        const indicator = document.getElementById('hollowTurnIndicator');
        indicator.textContent = hollowState.hollowTurn === 'player' ? 'YOUR TURN' : 'ENEMY TURN';
        indicator.classList.toggle('player-turn', hollowState.hollowTurn === 'player');
      }

      function hollowUseAbility(index) {
        if (hollowState.hollowTurn !== 'player' || !hollowState.hollowBattleActive) return;
        if (hollowState.hollowCooldowns.player[index] > 0) return;

        const ability = hollowState.hollowPlayer.hollowAbilities[index];
        const dmg = hollowGetAbilityDamage(ability);

        if (dmg > 0) {
          hollowState.hollowEnemyHP = Math.max(0, hollowState.hollowEnemyHP - dmg);
          hollowAddBattleLog(hollowState.hollowPlayer.hollowName + ' uses ' + ability.hollowName + ' for ' + dmg + ' damage!');
          document.getElementById('hollowEnemySprite').classList.add('shake');
          setTimeout(() => document.getElementById('hollowEnemySprite').classList.remove('shake'), 300);
        } else {
          const heal = Math.abs(dmg);
          hollowState.hollowPlayerHP = Math.min(hollowState.hollowPlayerMaxHP, hollowState.hollowPlayerHP + heal);
          hollowAddBattleLog(hollowState.hollowPlayer.hollowName + ' uses ' + ability.hollowName + ' and heals ' + heal + ' HP!');
        }

        if (index !== 0 && ability.hollowCooldown) {
          hollowState.hollowCooldowns.player[index] = ability.hollowCooldown;
        }

        hollowUpdateHealthBars();
        hollowRenderAbilities();

        if (hollowState.hollowEnemyHP <= 0) {
          hollowEndBattle(true);
          return;
        }

        hollowState.hollowTurn = 'enemy';
        hollowRenderAbilities();
        setTimeout(hollowEnemyTurn, 1200);
      }

      function hollowEnemyTurn() {
        if (!hollowState.hollowBattleActive) return;
        if (hollowState.hollowEnemyHP <= 0) { hollowEndBattle(true); return; }

        hollowState.hollowCooldowns.enemy = hollowState.hollowCooldowns.enemy.map(c => Math.max(0, c - 1));

        const abilities = hollowState.hollowEnemy.hollowAbilities;
        let available = abilities.map((_, i) => i).filter(i => hollowState.hollowCooldowns.enemy[i] <= 0);
        if (available.length === 0) {
          let minCD = Infinity, minIdx = 0;
          hollowState.hollowCooldowns.enemy.forEach((c, i) => { if (c < minCD) { minCD = c; minIdx = i; } });
          available = [minIdx];
        }

        const chosenIdx = available[Math.floor(Math.random() * available.length)];
        const ability = abilities[chosenIdx];
        const dmg = hollowGetAbilityDamage(ability);

        if (dmg > 0) {
          hollowState.hollowPlayerHP = Math.max(0, hollowState.hollowPlayerHP - dmg);
          hollowAddBattleLog(hollowState.hollowEnemy.hollowName + ' uses ' + ability.hollowName + ' for ' + dmg + ' damage!');
          document.getElementById('hollowPlayerSprite').classList.add('shake');
          setTimeout(() => document.getElementById('hollowPlayerSprite').classList.remove('shake'), 300);
        } else {
          const heal = Math.abs(dmg);
          hollowState.hollowEnemyHP = Math.min(hollowState.hollowEnemyMaxHP, hollowState.hollowEnemyHP + heal);
          hollowAddBattleLog(hollowState.hollowEnemy.hollowName + ' uses ' + ability.hollowName + ' and heals ' + heal + ' HP!');
        }

        if (chosenIdx !== 0 && ability.hollowCooldown) {
          hollowState.hollowCooldowns.enemy[chosenIdx] = ability.hollowCooldown;
        }

        hollowUpdateHealthBars();

        if (hollowState.hollowPlayerHP <= 0) { hollowEndBattle(false); return; }

        hollowState.hollowCooldowns.player = hollowState.hollowCooldowns.player.map(c => Math.max(0, c - 1));
        hollowState.hollowTurn = 'player';
        hollowRenderAbilities();
      }

      function hollowEndBattle(playerWon) {
        hollowState.hollowBattleActive = false;
        if (hollowState.hollowBattleMusic) {
          hollowState.hollowBattleMusic.pause();
          hollowState.hollowBattleMusic = null;
        }

        const playerKey = Object.keys(hollowCharacters).find(k => hollowCharacters[k] === hollowState.hollowPlayer);

        if (playerWon) {
          const level = hollowState.hollowLevels[playerKey] || 1;
          const hpRemaining = hollowState.hollowPlayerHP;
          const maxHP = hollowState.hollowPlayerMaxHP;
          const hpRatio = hpRemaining / maxHP;
          let xpGain = Math.round(20 + (hpRatio * 30));
          if (hpRatio < 0.2) xpGain += 15;
          if (hpRemaining === maxHP) xpGain += 10;

          let dustGain = 15 + Math.floor(Math.random() * 10);
          let dustBonuses = [];

          if (hpRemaining >= (maxHP*0.8)) {
            dustGain += 25;
            dustBonuses.push('FLAWLESS (+25)');
          }
          else if (hpRatio < 0.1) {
            dustGain += 20;
            dustBonuses.push('NEAR DEATH (+20)');
          }
          else if (hpRatio < 0.25) {
            dustGain += 10;
            dustBonuses.push('CLUTCH (+10)');
          }

          if (hollowState.hollowBattleLog.filter(e => e.includes('uses')).length <= 4) {
            dustGain += 15;
            dustBonuses.push('SPEED KILL (+15)');
          }

          if (hollowState.hollowBattleLog.filter(e => e.includes('uses')).length >= 15) {
            dustGain += 12;
            dustBonuses.push('MARATHON (+12)');
          }

          if (hollowState.hollowPlayer.hollowName === 'Wachi') {
             dustGain += 20;
            dustBonuses.push('WACHI (+20)');
          }
          
          const playerName = hollowState.hollowPlayer.hollowName;
          const enemyName = hollowState.hollowEnemy.hollowName;
          const enemyKey = Object.keys(hollowCharacters).find(k => hollowCharacters[k] === hollowState.hollowEnemy);
          const playerIsManifestation = hollowManifestCreatedKeys.has(playerKey);
          const enemyIsManifestation = hollowManifestCreatedKeys.has(enemyKey);
          const defeatedCounterpart = hollowCharacters[enemyKey]?.hollowManifestSource === playerKey;
          let betrayalMatch = false;

          if (playerName === 'Penelope' && enemyName === 'Mornia') betrayalMatch = true;
          else if (playerName === 'Wachi' && enemyName === 'Dander') betrayalMatch = true;
          else if (playerName === 'Yan' && enemyName === 'Ying') betrayalMatch = true;
          else if (playerName === 'Ying' && enemyName === 'Yan') betrayalMatch = true;
          else if (playerName === 'Evergreen' && enemyName === 'Lavender') betrayalMatch = true;
          else if (playerName === 'Lavender' && enemyName === 'Evergreen') betrayalMatch = true;
          else if (playerName === 'Vesper' && enemyName === 'Olea') betrayalMatch = true;
          else if (playerName === 'Olea' && enemyName === 'Vesper') betrayalMatch = true;
          else if (playerName === 'Myos' && enemyName === 'Kite') betrayalMatch = true;
          else if (playerName === 'Kite' && enemyName === 'Myos') betrayalMatch = true;
          else if (playerName === 'Maturity' && enemyName === 'Jaquavius') betrayalMatch = true;
          else if (playerName === 'Jaquavius' && enemyName === 'Maturity') betrayalMatch = true;
          else if (playerName === 'Mae' && enemyName === 'Vesper') betrayalMatch = true;
          else if (playerName === 'Vesper' && enemyName === 'Mae') betrayalMatch = true;
          else if (playerName === 'Helia' && enemyName === 'Dander') betrayalMatch = true;
          else if (playerName === 'Dander' && enemyName === 'Helia') betrayalMatch = true;
          else if (playerName === 'The Roden' && enemyName === 'Ace') betrayalMatch = true;
          else if (playerName === 'Ace' && enemyName === 'The Roden') betrayalMatch = true;
          else if (playerName === 'Vix' && enemyName === 'Ace') betrayalMatch = true;
          else if (playerName === 'Ace' && enemyName === 'Vix') betrayalMatch = true;
          else if (playerName === 'Ava' && enemyName === 'Lavender') betrayalMatch = true;
          else if (playerName === 'Lavender' && enemyName === 'Ava') betrayalMatch = true;
          else if (playerName === 'Olea' && enemyName === 'Maturity') betrayalMatch = true;
          else if (playerName === 'Maturity' && enemyName === 'Olea') betrayalMatch = true;

          if (betrayalMatch || (
            playerIsManifestation &&
            (enemyIsManifestation || defeatedCounterpart)
          )) {
            dustGain += 100;
            dustBonuses.push('BRUTALITY (+100)');
          }

          const healUsed = hollowState.hollowBattleLog.some(e =>
            e.includes(hollowState.hollowPlayer.hollowName) && e.includes('heals')
          );
          if (!healUsed) {
            dustGain += 8;
            dustBonuses.push('NO HEALS (+8)');
          }

          const playerAbilities = hollowState.hollowPlayer.hollowAbilities.map(a => a.hollowName);
          const usedAbilities = new Set();
          hollowState.hollowBattleLog.forEach(entry => {
            if (entry.includes(hollowState.hollowPlayer.hollowName) && entry.includes('uses')) {
              playerAbilities.forEach(name => {
                if (entry.includes(name)) usedAbilities.add(name);
              });
            }
          });
          if (usedAbilities.size === playerAbilities.length) {
            dustGain += 10;
            dustBonuses.push('VERSATILE (+10)');
          }

          const enemyLevel = hollowState.hollowLevels[enemyKey] || 1;
          if (enemyLevel > level) {
            const diff = enemyLevel - level;
            dustGain += diff * 5;
            dustBonuses.push('UNDERDOG (+' + (diff * 5) + ')');
          }

          const playerTurns = hollowState.hollowBattleLog.filter(e =>
            e.includes(hollowState.hollowPlayer.hollowName) && e.includes('uses')
          );
          if (playerTurns.length === 1 && hpRemaining === maxHP) {
            dustGain += 30;
            dustBonuses.push('FIRST BLOOD (+30)');
          }

          hollowState.hollowXP[playerKey] = (hollowState.hollowXP[playerKey] || 0) + xpGain;
          const xpNeeded = hollowGetXPToLevel(level);
          if (hollowState.hollowXP[playerKey] >= xpNeeded && level < 100) {
            hollowState.hollowLevels[playerKey] = level + 1;
            hollowState.hollowXP[playerKey] -= xpNeeded;
            hollowAddBattleLog(hollowState.hollowPlayer.hollowName + ' leveled up to ' + (level + 1) + '!');
          }

          hollowState.hollowDust += dustGain;
          hollowSave();
          hollowUpdateDust();
          hollowShowResult(true, dustGain, xpGain, dustBonuses);
        } else {
          hollowShowResult(false, 0, 0, []);
        }
      }

      function hollowShowResult(won, dustGain, xpGain, bonuses) {
        const overlay = document.createElement('div');
        overlay.className = 'hollow-result-screen';
        overlay.innerHTML = `
          <div class="hollow-result-title ${won ? 'win' : 'lose'}">${won ? 'VICTORY' : 'DEFEAT'}</div>
          <div class="hollow-result-stats">
            ${won ? '+' + dustGain + ' Dust | +' + xpGain + ' XP<br>Total Dust: ' + hollowState.hollowDust : 'The garden claims another...'}
            ${won && bonuses.length ? '<br><br><span style="color:var(--hollow-green-dim);font-size:0.85rem;">' + bonuses.join(' | ') + '</span>' : ''}
          </div>
          <button class="hollow-result-btn" id="hollowResultBtn">${won ? 'CONTINUE' : 'TRY AGAIN'}</button>
        `;
        document.getElementById('hollowWidget').appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('active'));
        overlay.querySelector('#hollowResultBtn').addEventListener('click', () => {
          overlay.remove();
          hollowShowScreen('title');
        });
      }

      function hollowForfeitBattle() {
        if (!hollowState.hollowBattleActive) return;
        hollowEndBattle(false);
      }

      function hollowAddBattleLog(msg) {
        hollowState.hollowBattleLog.push(msg);
        const log = document.getElementById('hollowBattleLog');
        const entry = document.createElement('div');
        entry.className = 'hollow-battle-log-entry';
        entry.textContent = msg;
        log.appendChild(entry);
        log.scrollTop = log.scrollHeight;
        while (log.children.length > 20) log.removeChild(log.firstChild);
      }

      function hollowClearBattleLog() {
        document.getElementById('hollowBattleLog').innerHTML = '';
        hollowState.hollowBattleLog = [];
      }

      // Start preloading, then reveal the game
hollowPreloadAssets().then(() => {
  const loadingScreen = document.getElementById('hollowLoadingScreen');
  loadingScreen.classList.add('hidden');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 600);
  
  hollowLoad();
  hollowUpdateDust();
  hollowShowScreen('title'); // <-- ADD THIS LINE
});
    })();

    // ===== CLEANUP =====
    function cleanup() {
      try { document.documentElement.style.overflow = prevOverflow || ''; } catch (e) {}
      try { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); } catch (e) {}
      try { if (style.parentNode) style.parentNode.removeChild(style); } catch (e) {}
      if (typeof labAnimFrame !== 'undefined' && labAnimFrame) cancelAnimationFrame(labAnimFrame);
    }

    window.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape') {
        window.removeEventListener('keydown', onKey);
        cleanup();
      }
    });

    window.__hollowGreen = {
      close: cleanup
    };
}
