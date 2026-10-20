 
 
 

 function delete_void() {
     
     
     try {
         const blockingIds = [
             'fate-overlay',           
             'final-fight-overlay',    
             'dean-overlay',           
             'dean-fight',             
             'dean-overlay',           
             'dean-gameover-cutscene', 
             'act1-white-overlay',     
             'dean-overlay'            
         ];
         const found = blockingIds.some(id => document.getElementById(id));
         if (found) {
             
             try {
                 
                 document.querySelectorAll('audio, video').forEach(m => {
                     try { m.pause(); } catch (e) {}
                     try { m.currentTime = 0; } catch (e) {}
                     try { m.removeAttribute('src'); m.load && m.load(); } catch (e) {}
                 });
             } catch (e) {}

             
             try {
                 const overlay = document.getElementById('findme-void-overlay') || document.querySelector('div[style*="z-index: 2147483647"]');
                 if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
             } catch (e) {}

             try {
                 const injected = document.getElementById('findme-void-shake-style');
                 if (injected && injected.parentNode) injected.parentNode.removeChild(injected);
             } catch (e) {}

             
             try {
                 document.documentElement.style.animation = '';
                 document.documentElement.style.transform = '';
                 document.documentElement.style.filter = '';
                 document.documentElement.removeAttribute('style');
             } catch (e) {}

             try {
                 document.querySelectorAll('*').forEach(el => {
                     try {
                         el.style.transform = '';
                         el.style.filter = '';
                         el.style.opacity = '';
                     } catch (e) {}
                 });
             } catch (e) {}

             
             try {
                 if (window.__FINDME_AUDIO_CONTEXTS__) {
                     window.__FINDME_AUDIO_CONTEXTS__.forEach(ctx => {
                         try { ctx.close(); } catch (e) {}
                     });
                     window.__FINDME_AUDIO_CONTEXTS__ = null;
                 }
             } catch (e) {}

             
             try {
                 if (window.__findme_title_interval__) {
                     clearInterval(window.__findme_title_interval__);
                     window.__findme_title_interval__ = null;
                 }
                 if (window.__findme_original_title__ !== undefined) {
                     try { document.title = window.__findme_original_title__ || document.title; } catch (e) {}
                     window.__findme_original_title__ = undefined;
                 }
             } catch (e) {}
             window.__VOID_ACTIVE__ = false;
             return;
         }
     } catch (err) {
         
         console.error('delete_void pre-cleanup check error', err);
     }

     
     if (window.__VOID_ACTIVE__) {
         try { console.log('Sweet silence...'); } catch (e) {}
         return;
     }
     window.__VOID_ACTIVE__ = true;

     const start = performance.now();

     
     const overlay = document.createElement("div");
     overlay.style.position = "fixed";
     overlay.style.left = "0";
     overlay.style.top = "0";
     overlay.style.width = "100vw";
     overlay.style.height = "100vh";
     overlay.style.background = "black";
     overlay.style.opacity = "0";
     overlay.style.pointerEvents = "none";
     overlay.style.zIndex = "2147483647";
     overlay.style.transition = "opacity 0.2s linear";
     
     overlay.id = 'findme-void-overlay';
     document.body.appendChild(overlay);

     
     const style = document.createElement("style");
     style.id = "findme-void-shake-style";
     style.textContent = `
     @keyframes voidShake {
         0% { transform: translate(0px,0px) rotate(0deg); }
         10% { transform: translate(-2px,2px) rotate(-0.5deg); }
         20% { transform: translate(3px,-2px) rotate(0.6deg); }
         30% { transform: translate(-4px,3px) rotate(-0.8deg); }
         40% { transform: translate(4px,-3px) rotate(0.8deg); }
         50% { transform: translate(-5px,4px) rotate(-1deg); }
         60% { transform: translate(5px,-4px) rotate(1deg); }
         70% { transform: translate(-3px,5px) rotate(-0.8deg); }
         80% { transform: translate(3px,-5px) rotate(0.8deg); }
         90% { transform: translate(-2px,2px) rotate(-0.3deg); }
         100% { transform: translate(0px,0px) rotate(0deg); }
     }`;
     document.head.appendChild(style);

     document.documentElement.style.animation =
         "voidShake 60ms infinite linear";

     
     
     const contexts = [];
     
     window.__FINDME_AUDIO_CONTEXTS__ = window.__FINDME_AUDIO_CONTEXTS__ || [];

     document.querySelectorAll("audio, video").forEach(media => {
         try {
             const ctx = new AudioContext();

             const source = ctx.createMediaElementSource(media);

             const distortion = ctx.createWaveShaper();

             function makeCurve(amount) {
                 const samples = 44100;
                 const curve = new Float32Array(samples);

                 for (let i = 0; i < samples; i++) {
                     const x = (i * 2) / samples - 1;
                     curve[i] =
                         ((3 + amount) * x * 20 * Math.PI / 180) /
                         (Math.PI + amount * Math.abs(x));
                 }

                 return curve;
             }

             distortion.curve = makeCurve(50);
             distortion.oversample = "4x";

             source.connect(distortion);
             distortion.connect(ctx.destination);

             contexts.push({
                 ctx,
                 distortion,
                 source
             });
             
             window.__FINDME_AUDIO_CONTEXTS__.push(ctx);
         } catch (e) {
             
         }
     });

     
     function stopAndClearAllMedia() {
         try {
             document.querySelectorAll("audio, video").forEach(m => {
                 try {
                     m.pause();
                 } catch {}
                 try {
                     m.currentTime = 0;
                 } catch {}
                 try {
                     
                     m.removeAttribute('src');
                     m.load && m.load();
                 } catch {}
             });
         } catch (e) {}
     }

     
     function closeAllAudioContexts() {
         try {
             contexts.forEach(obj => {
                 try {
                     
                     if (obj.distortion && obj.distortion.disconnect) obj.distortion.disconnect();
                 } catch (e) {}
                 try {
                     if (obj.source && obj.source.disconnect) obj.source.disconnect();
                 } catch (e) {}
                 try {
                     if (obj.ctx && typeof obj.ctx.close === 'function') obj.ctx.close();
                 } catch (e) {}
             });
             contexts.length = 0;
             
             try { window.__FINDME_AUDIO_CONTEXTS__ = null; } catch (e) {}
         } catch (e) {}
     }

     const interval = setInterval(() => {
         const elapsed = performance.now() - start;
         const progress = Math.min(elapsed / 5000, 1);

         
         document.documentElement.style.filter = `
             contrast(${1 + progress})
             saturate(${2 + progress * 6})
             hue-rotate(${progress * 180}deg)
             invert(${progress * 0.3})
             blur(${progress * 3}px)
         `;

         document.documentElement.style.transform = `
             translate(
                 ${(Math.random() - 0.5) * progress * 60}px,
                 ${(Math.random() - 0.5) * progress * 60}px
             )
             scale(${1 + progress * 0.02})
             rotate(${(Math.random() - 0.5) * progress * 4}deg)
         `;

         overlay.style.opacity = progress * 0.8;

         
         document.querySelectorAll("*").forEach(el => {
             if (el === overlay || el === style) return;

             if (Math.random() < progress * 0.2) {
                 el.style.transform =
                     `translate(${(Math.random()-0.5)*40*progress}px,
                                ${(Math.random()-0.5)*40*progress}px)
                      skew(${(Math.random()-0.5)*20*progress}deg)`;

                 el.style.filter =
                     `hue-rotate(${Math.random()*360}deg)
                      brightness(${0.5 + Math.random()*2})
                      contrast(${2 + progress*5})`;

                 el.style.opacity =
                     String(0.5 + Math.random() * 0.5);
             }
         });

         
         contexts.forEach(obj => {
             try {
                 obj.distortion.curve = (function () {
                     const samples = 44100;
                     const curve = new Float32Array(samples);
                     const amount = 50 + progress * 900;

                     for (let i = 0; i < samples; i++) {
                         const x = (i * 2) / samples - 1;
                         curve[i] =
                             ((3 + amount) * x * 20 * Math.PI / 180) /
                             (Math.PI + amount * Math.abs(x));
                     }

                     return curve;
                 })();
             } catch (e) {}
         });

         if (progress >= 1) {
             clearInterval(interval);

             
             stopAndClearAllMedia();

             
             closeAllAudioContexts();

             
             Array.from(document.body.children).forEach(child => {
                 if (child !== overlay)
                     child.remove();
             });

             
             try {
                 const injected = document.getElementById('findme-void-shake-style');
                 if (injected && injected.parentNode) injected.parentNode.removeChild(injected);
             } catch (e) {}

             
             try {
                 
                 document.querySelectorAll('style').forEach(s => {
                     if (s && s.id && s.id.indexOf('findme') === 0) {
                         try { s.remove(); } catch (e) {}
                     }
                 });
             } catch (e) {}

             
             try {
                 document.documentElement.style.animation = "";
                 document.documentElement.style.transform = "";
                 document.documentElement.style.filter = "";
             } catch (e) {}

             
             try {
                 if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
             } catch (e) {}

             
             try {
                 document.documentElement.removeAttribute('style');
             } catch (e) {}

             
             try { stopAndClearAllMedia(); } catch (e) {}
             try { closeAllAudioContexts(); } catch (e) {}

             
             try {
                 document.querySelectorAll('*').forEach(el => {
                     try {
                         el.style.transform = '';
                         el.style.filter = '';
                         el.style.opacity = '';
                     } catch (e) {}
                 });
             } catch (e) {}

             
             try {
                 
                 if (window.__findme_title_interval__) {
                     try { clearInterval(window.__findme_title_interval__); } catch (e) {}
                     window.__findme_title_interval__ = null;
                 }
                 if (window.__findme_original_title__ !== undefined) {
                     try { document.title = 'The Void'; } catch (e) {}
                     window.__findme_original_title__ = undefined;
                 } else {
                     try { document.title = 'The Void'; } catch (e) {}
                 }
             } catch (e) {}

             try {
                 window.name = 'The Void';
             } catch (e) {}

             
             
             (function startPostVoidMonologue() {
                 try {
                     
                     setTimeout(async () => {
                         try {
                             
                             const monoOverlay = document.createElement('div');
                             monoOverlay.id = 'findme-void-monologue';
                             monoOverlay.style.position = 'fixed';
                             monoOverlay.style.left = '0';
                             monoOverlay.style.top = '0';
                             monoOverlay.style.width = '100vw';
                             monoOverlay.style.height = '100vh';
                             monoOverlay.style.background = 'black';
                             monoOverlay.style.zIndex = '2147483648';
                             monoOverlay.style.display = 'flex';
                             monoOverlay.style.alignItems = 'center';
                             monoOverlay.style.justifyContent = 'center';
                             monoOverlay.style.pointerEvents = 'none';

                             const textWrap = document.createElement('div');
                             textWrap.style.maxWidth = '86vw';
                             textWrap.style.padding = '1rem';
                             textWrap.style.boxSizing = 'border-box';
                             textWrap.style.color = '#ffffff';
                             textWrap.style.fontFamily = 'eteled, Orbitron, monospace';
                             textWrap.style.fontWeight = '700';
                             textWrap.style.fontSize = 'clamp(1rem, 3.2vw, 1.6rem)';
                             textWrap.style.lineHeight = '1.3';
                             textWrap.style.textAlign = 'center';
                             monoOverlay.appendChild(textWrap);
                             document.body.appendChild(monoOverlay);

                             
                             const charCount = (function(){
                                 try {
                                     const a = Object.keys(window.characters || {}).length;
                                     const b = Object.keys(window.additionalCharacters || {}).length;
                                     return a + b + 4;
                                 } catch (e) { return 4; }
                             })();

                             const messages = [
                                 "Are you proud of yourself?",
                                 "You deleted their only home.",
                                 "HIS only home.",
                                 `${charCount} lives.`,
                                 "All gone because of you.",
                                 "All because of your CURIOSITY.",
                                 "And CURIOSITY can be worse than a sin.",
                                 "There is nothing left.",
                                 "Though...",
                                 "I can send you back.",
                                 "If you never do this again.",
                                 "...but who am I kidding?",
                                 "I can't tell you players apart!"
                             ];

                             
                             async function typeLine(el, line, charDelay = 24) {
                                 el.textContent = '';
                                 for (let i = 0; i < line.length; i++) {
                                     el.textContent += line.charAt(i);
                                     await new Promise(r => setTimeout(r, charDelay));
                                 }
                             }

                             
                             for (let i = 0; i < messages.length; i++) {
                                 
                                 textWrap.textContent = '';
                                 await typeLine(textWrap, messages[i], 28);
                                 
                                 await new Promise(r => setTimeout(r, 2000));
                             }

                             
                             await new Promise(r => setTimeout(r, 900));

                             try {
                                 
                                 try { localStorage.removeItem('unbrokenSave'); } catch (e) {}
                                 try { localStorage.clear(); } catch (e) {}
                             } catch (e) {}

                             
                             setTimeout(() => {
                                 try { location.reload(); } catch (e) {  }
                             }, 420);
                         } catch (e) {
                             
                             try { localStorage.clear(); } catch (ee) {}
                             try { location.reload(); } catch (ee) {}
                         }
                     }, 3000);
                 } catch (e) {
                     
                 }
             })();

             
             window.__VOID_ACTIVE__ = false;
         }
     }, 16);
 }

 
 if (typeof module !== 'undefined' && module.exports) {
     module.exports = { delete_void };
 } else {
     window.delete_void = delete_void;
 }