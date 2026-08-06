function collectAllCharacterEntries() {
    const base = (window.characters || {});
    const extras = (window.additionalCharacters || {});
    const merged = { ...base, ...extras };
    
    const entries = Object.keys(merged).map(key => ({
        key,
        name: merged[key].name || key,
        sprite: merged[key].sprite || '',
        data: merged[key]
    }));
    
    entries.push({
        key: 'business',
        name: 'Business',
        sprite: 'business.png',
        data: {
            
            name: 'Business',
            sprite: 'business.png',
            bio: "He went door to door for a living, a tidy smile and a practiced pitch, pocketing small commissions and larger regrets. Cancer took him in private; the treatments and the silence that followed left his hands empty and his ledger unfinished. He woke here with the same suit and that same habit of selling consolation—only now his pitch is whispered in the halls of the Void. He still moves like a man who remembers thresholds: offering bargains, counting chances, and asking what a life is worth when everything can be reclaimed for a price.",
            
            classification: 'PARASITE',
            
            informationalOnly: true
        }
    });

    
    
    entries.push({
        key: 'luna',
        name: 'Luna',
        sprite: 'luna.png',
        data: {
            name: 'Luna',
            sprite: 'luna.png',
            bio: "I built Luna with Fyre's help — she isn't a spirit of the Void but code injected into Sunlight's systems in the world beyond. I designed her to sabotage Sunlight's games and, if all went well, to loosen the bindings that hold people here. She was never meant to be a person: she is my experiment, a piece of clever mischief that learned to charm and to fight. To you, the player, Luna may show up as a challenger and a breaker of rules; to me she is a tool and a dangerous, beautiful idea.",
            classification: 'PARASITE',
            informationalOnly: true,
            author: 'Moonlight'
        }
    });

  
  
  (function(){
    let blockerPresent = false;
    try {
      
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', 'blocker2.txt', false); 
        xhr.send(null);
        if (xhr.status >= 200 && xhr.status < 400) blockerPresent = true;
      } catch (headErr) {
        try {
          const xhr2 = new XMLHttpRequest();
          xhr2.open('GET', 'blocker2.txt', false);
          xhr2.send(null);
          if (xhr2.status >= 200 && xhr2.status < 400) blockerPresent = true;
        } catch (getErr) {
          blockerPresent = false;
        }
      }
    } catch (e) {
      blockerPresent = false;
    }

    if (blockerPresent) {
      entries.push({
          key: 'ares',
          name: 'Ares',
          sprite: 'ares.png',
          data: {
              name: 'Ares',
              sprite: 'ares.png',
              bio: "They were one of eleven souls aboard a vessel traveling between dimensions, sent from a lower-class world to retrieve minerals from a higher one. I had no interest in such errands; they are common and beneath my attention. But an accident during transit released parasites from the minerals; hungry, patient things that hollowed out Ares and Persephone both, wearing their skins with stolen memories and flawless mimicry. The crew noticed nothing amiss. I learned what followed only from Persephone, who reached me first: the parasites seeded a murder among them, and after Persephone was discovered and cast into the dark, the thing wearing Ares proceeded with terrible efficiency. They slaughtered all but two of the remaining crew before those survivors discovered that salt water could rupture the parasite's hold. They used it. I retrieved what remained of Ares and revived them in the Void, the parasite still nested within, that I might study what survives when a skinwalker is given new flesh and no crew left to deceive. They begged for a place in Unbroken, eager to turn that hunger toward sanctioned combat. I refused. I have occupied them with other labors, far from the arena. Some appetites are too honest for games.\n\nInspired by Green from Owen Dennis' \"Among Us (TV Series)\"",
              classification: 'PARASITE',
              informationalOnly: true,
              author: 'The Sunlight'
          }
      });

      
      entries.push({
          key: 'persephone',
          name: 'Persephone',
          sprite: 'persephone.png',
          data: {
              name: 'Persephone',
              sprite: 'persephone.png',
              bio: "They were one of eleven souls aboard a vessel traveling between dimensions, laborers from a lower-class world sent to haul minerals from a higher one. I would not have marked them; the lower classes ferry such loads in countless numbers. Yet an accident in transit released parasites from the minerals themselves; things that crawled into Ares and Persephone, hollowed them out, and wore their shapes with perfect recollection of their hosts. The crew saw no difference. It was Persephone who first succumbed to the parasite's urging and killed a fellow laborer; discovered, they were ejected into the void between stars, and by chance or drift they arrived at my threshold. From them I learned the truth of the vessel: the parasites, the skinwalking, the quiet massacre orchestrated by the thing wearing Ares. I kept watch until only two remained, and when those survivors ended Ares with salt water, I retrieved what was left of Ares and restored them here, parasite intact. Persephone pleaded to join Unbroken, to fight as so many of my collection do. I denied them both. I have occupied them elsewhere, at the margins of my design, where their hunger for the arena cannot trouble me.\n\nInspired by Orange from Owen Dennis' \"Among Us (TV Series)\"",
              classification: 'PARASITE',
              informationalOnly: true,
              author: 'The Sunlight'
          }
      });
    }
  })();

    return entries;
}

function classifyCharacterByHealing(char, keyName = '') {
    if (!char || !Array.isArray(char.abilities)) return 'NEUTRAL';

    
    const lowerKeyName = String(keyName || '').toLowerCase();
    if (lowerKeyName === 'awareness' || (char && (char.name || '').toLowerCase() === 'awareness')) {
        return 'BRAWN; CONTROLLER';
    }

    const noSubKeys = ['kite', 'subject192', 'cupiditas'];

    
    
    const varyKeys = ['seven', 'reflection', 'wachi', 'eteleD', 'fyre', 'judgement', 'null', 'kyle'];

    let healCount = 0;
    let totalDamage = 0;
    let attackCount = 0;
    let maxDamage = 0;
    let hasUtility = false;

    for (const a of char.abilities) {
        if (typeof a.damage === 'number') {
            if (a.damage < 0) healCount++;
            else {
                totalDamage += a.damage;
                attackCount++;
                if (a.damage > maxDamage) maxDamage = a.damage;
            }
            const name = (a.name || '').toLowerCase();
            if (name.includes('shield') || name.includes('confuse') || name.includes('stun') ||
                name.includes('protect') || name.includes('drain') || name.includes('slow') ||
                name.includes('restore') || name.includes('guard') || name.includes('defend')) {
                hasUtility = true;
            }
        }
    }

    let mainClass = 'NEUTRAL';
    if (healCount > 1) mainClass = 'SELF-SUPPORT';
    else if (healCount === 1) mainClass = 'NEUTRAL';
    else mainClass = 'BRAWN';

    const lowerKey = String(keyName || '').toLowerCase();
    if (noSubKeys.includes(lowerKey)) return mainClass;

    let sub = 'GENERAL';

    
    if (varyKeys.map(k => k.toLowerCase()).includes(lowerKey)) {
        sub = 'VARIABLE';
    } else if (mainClass === 'SELF-SUPPORT') {
        let healMagnitudes = char.abilities.filter(a => typeof a.damage === 'number' && a.damage < 0).map(a => -a.damage);
        const avgHeal = healMagnitudes.length ? (healMagnitudes.reduce((s, v) => s + v, 0) / healMagnitudes.length) : 0;
        if (avgHeal >= 15) sub = 'REGEN';
        else sub = 'BUFFER';
    } else if (mainClass === 'NEUTRAL') {
        if (hasUtility) sub = 'TACTICAL';
        else if (maxDamage >= 30) sub = 'HYBRID';
        else sub = 'SUPPORT';
    } else if (mainClass === 'BRAWN') {
        if (hasUtility) sub = 'CONTROLLER';
        else if (maxDamage >= 40 && (totalDamage / Math.max(1, attackCount)) >= 30) sub = 'GLASS CANNON';
        else if ((totalDamage / Math.max(1, attackCount)) >= 25) sub = 'BRUISER';
        else sub = 'STRIKER';
    }

    return `${mainClass}; ${sub}`;
}

function renderCharactersList() {
    const listEl = document.getElementById('characters-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    const entries = collectAllCharacterEntries();
    entries.sort((a, b) => a.name.localeCompare(b.name));

    
    
    const idxNiyo = entries.findIndex(e => (e.key || '').toLowerCase() === 'niyo');
    const idxNull = entries.findIndex(e => (e.key || '').toLowerCase() === 'null');
    if (idxNiyo !== -1 && idxNull !== -1 && idxNull !== idxNiyo + 1) {
        const [nullEntry] = entries.splice(idxNull, 1);
        
        const insertAt = entries.findIndex(e => (e.key || '').toLowerCase() === 'niyo') + 1;
        entries.splice(insertAt, 0, nullEntry);
    }

    entries.forEach(entry => {
        
        try {
            const isSHS = !!(entry.data && entry.data.shs);
            const unlocked = (window.gameState && Array.isArray(window.gameState.unlockedCharacters)) ? window.gameState.unlockedCharacters : [];
            if (isSHS && !unlocked.includes(entry.key)) {
                return;
            }
        } catch (e) {
            
        }

        const card = document.createElement('div');
        card.className = 'character-card';
        card.style.cursor = 'pointer';
        card.dataset.character = entry.key;
        
        if (entry.data && entry.data.higherPlane) {
            card.setAttribute('data-higher-plane', 'true');
        }

        
        
        
        const classLabel = (entry.data && entry.data.classification) ? entry.data.classification : classifyCharacterByHealing(entry.data || {}, entry.key);

        
        
        
        
        try {
            const normalized = String(classLabel || '').toUpperCase();
            if ((entry.data && String(entry.data.classification || '').toUpperCase() === 'PARASITE') || normalized === 'PARASITE') {
                card.classList.add('parasite-glow');
            } else if (normalized.startsWith('BRAWN')) {
                card.classList.add('red-glow');
            } else if (normalized.startsWith('SELF-SUPPORT')) {
                card.classList.add('green-glow');
            }
        } catch (e) {
            
        }

        card.innerHTML = `
            <img src="${entry.sprite}" alt="${entry.name}" class="character-portrait">
            <h3 style="font-size:0.9rem;">${entry.name}</h3>
            <div class="level-display" style="margin-top:0.25rem;">Click to view bio</div>
            <div class="class-display" style="margin-top:0.15rem;">${classLabel}</div>
        `;
        
        try {
            if (entry.data && entry.data.shs) card.setAttribute('data-shs', 'true');
        } catch (e) {}
        card.addEventListener('click', () => {
            showCharacterBio(entry.key, entry.name);
        });
        listEl.appendChild(card);
    });
}


function showCharacterBio(key, displayName) {
    
    const existing = document.getElementById('bio-modal');
    if (existing) existing.remove();

    
    const allChars = { ...(window.characters || {}), ...(window.additionalCharacters || {}) };
    let charData = allChars[key] || {};

    
    try {
        const isSHS = !!(charData && (charData.shs || charData.shs === true));
        const unlocked = (window.gameState && Array.isArray(window.gameState.unlockedCharacters)) ? window.gameState.unlockedCharacters : [];
        const isUnlocked = unlocked.includes(key);
        if (isSHS && !isUnlocked) {
            const modal = document.createElement('div');
            modal.id = 'bio-modal';
            modal.style.position = 'fixed';
            modal.style.left = '0';
            modal.style.top = '0';
            modal.style.width = '100%';
            modal.style.height = '100dvh';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = 10050;
            modal.style.background = 'rgba(0,0,0,0.8)';

            const content = document.createElement('div');
            content.style.width = 'min(720px,86%)';
            content.style.background = 'rgba(255,215,0,0.06)';
            content.style.border = '2px solid #FFD700';
            content.style.padding = '1rem';
            content.style.borderRadius = '12px';
            content.style.boxSizing = 'border-box';
            content.style.textAlign = 'center';
            content.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
                    <div style="display:flex;gap:0.6rem;align-items:center;">
                        <img src="${charData.sprite || ''}" alt="${displayName}" style="width:56px;height:56px;border-radius:50%;border:2px solid #FFD700;object-fit:cover;">
                        <div style="text-align:left;">
                            <div style="font-weight:900;color:#FFD700;font-size:1.05rem;">${displayName}</div>
                            <div style="color:#FFA500;font-size:0.85rem;">Locked — SHS Character</div>
                        </div>
                    </div>
                    <div>
                        <button id="bio-close-btn" style="background:linear-gradient(45deg,#FFD700,#FFA500);border:none;padding:0.45rem 0.8rem;border-radius:8px;cursor:pointer;">CLOSE</button>
                    </div>
                </div>
                <div style="color:#FFD700;font-weight:700;">
                    This character is an SHS exclusive and their full biography is hidden until you obtain them via Business rolls.
                </div>
                <div style="margin-top:0.6rem;color:#FFCC80;">How to obtain: Use Business (ROLL) — SHS characters can only be acquired via gambling.</div>
            `;
            modal.appendChild(content);
            document.body.appendChild(modal);

            
            document.getElementById('bio-close-btn').addEventListener('click', () => modal.remove());
            return;
        }
    } catch (e) {
        
        console.error('SHS check failed', e);
    }

    
    if (key === 'business') {
        
        
        const fallbackBio = "He went door to door for a living, a tidy smile and a practiced pitch, pocketing small commissions and larger regrets. Cancer took him in private; the treatments and the silence that followed left his hands empty and his ledger unfinished. He woke here with the same suit and that same habit of selling consolation—only now his pitch is whispered in the halls of the Void. He still moves like a man who remembers thresholds: offering bargains, counting chances, and asking what a life is worth when everything can be reclaimed for a price.";
        charData = {
            name: 'Business',
            sprite: 'business.png',
            woundedSprite: 'business.png',
            bio: (charData && charData.bio) ? charData.bio : fallbackBio,
            classification: (charData && charData.classification) ? charData.classification : 'PARASITE',
            informationalOnly: true,
            author: (charData && charData.author) ? charData.author : 'The Sunlight'
        };
    }

    
    if (key === 'luna') {
        
        
        charData = {
            name: 'Luna',
            sprite: 'luna.png',
            woundedSprite: 'luna.png',
            bio: (charData && charData.bio) ? charData.bio : "I built Luna with Fyre's help — she isn't a spirit of the Void but code injected into Sunlight's systems in the world beyond. I designed her to sabotage Sunlight's games and, if all went well, to loosen the bindings that hold people here. She was never meant to be a person: she is my experiment, a piece of clever mischief that learned to charm and to fight. To you, the player, Luna may show up as a challenger and a breaker of rules; to me she is a tool and a dangerous, beautiful idea.",
            classification: (charData && charData.classification) ? charData.classification : 'PARASITE',
            informationalOnly: true,
            author: (charData && charData.author) ? charData.author : 'Moonlight'
        };
    }

    
    if (key === 'ares') {
        charData = {
            name: 'Ares',
            sprite: 'ares.png',
            woundedSprite: 'ares.png',
            bio: (charData && charData.bio) ? charData.bio : "They were one of eleven souls aboard a vessel traveling between dimensions, sent from a lower-class world to retrieve minerals from a higher one. I had no interest in such errands; they are common and beneath my attention. But an accident during transit released parasites from the minerals; hungry, patient things that hollowed out Ares and Persephone both, wearing their skins with stolen memories and flawless mimicry. The crew noticed nothing amiss. I learned what followed only from Persephone, who reached me first: the parasites seeded a murder among them, and after Persephone was discovered and cast into the dark, the thing wearing Ares proceeded with terrible efficiency. They slaughtered all but two of the remaining crew before those survivors discovered that salt water could rupture the parasite's hold. They used it. I retrieved what remained of Ares and revived them in the Void, the parasite still nested within, that I might study what survives when a skinwalker is given new flesh and no crew left to deceive. They begged for a place in Unbroken, eager to turn that hunger toward sanctioned combat. I refused. I have occupied them with other labors, far from the arena. Some appetites are too honest for games.\n\nInspired by Green from Owen Dennis' \"Among Us (TV Series)\"",
            classification: 'PARASITE',
            informationalOnly: true,
            author: (charData && charData.author) ? charData.author : 'The Sunlight'
        };
    }

    
    if (key === 'persephone') {
        charData = {
            name: 'Persephone',
            sprite: 'persephone.png',
            woundedSprite: 'persephone.png',
            bio: (charData && charData.bio) ? charData.bio : "They were one of eleven souls aboard a vessel traveling between dimensions, laborers from a lower-class world sent to haul minerals from a higher one. I would not have marked them; the lower classes ferry such loads in countless numbers. Yet an accident in transit released parasites from the minerals themselves; things that crawled into Ares and Persephone, hollowed them out, and wore their shapes with perfect recollection of their hosts. The crew saw no difference. It was Persephone who first succumbed to the parasite's urging and killed a fellow laborer; discovered, they were ejected into the void between stars, and by chance or drift they arrived at my threshold. From them I learned the truth of the vessel: the parasites, the skinwalking, the quiet massacre orchestrated by the thing wearing Ares. I kept watch until only two remained, and when those survivors ended Ares with salt water, I retrieved what was left of Ares and restored them here, parasite intact. Persephone pleaded to join Unbroken, to fight as so many of my collection do. I denied them both. I have occupied them elsewhere, at the margins of my design, where their hunger for the arena cannot trouble me.\n\nInspired by Orange from Owen Dennis' \"Among Us (TV Series)\"",
            classification: 'PARASITE',
            informationalOnly: true,
            author: (charData && charData.author) ? charData.author : 'The Sunlight'
        };
    }



    const bioText = charData.bio || 'insert bio here';

    const modal = document.createElement('div');
    modal.id = 'bio-modal';
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100dvh';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = 10050;
    modal.style.background = 'rgba(0,0,0,0.8)';
    
    
    
    const normalizeNewlines = (str) => String(str).replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\r/g, '\n');
    const escapeHtml = (str) => String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    const bioHtml = escapeHtml(normalizeNewlines(bioText)).replace(/\r\n|\r|\n/g, '<br>');
    
    
    const bioAuthor = (charData && charData.author) ? charData.author : 'The Sunlight';

    modal.innerHTML = `
        <div style="width:clamp(260px,86%,720px); background:rgba(255,215,0,0.06); border:2px solid #FFD700; padding:1rem; border-radius:12px; text-align:left; display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; gap:0.6rem; align-items:center; justify-content:space-between;">
                <div style="display:flex; gap:0.6rem; align-items:center;">
                    <img src="${charData.sprite || ''}" alt="${displayName}" style="width:56px;height:56px;border-radius:50%;border:2px solid #FFD700;object-fit:cover;">
                    <div>
                        <div style="font-weight:900;color:#FFD700;font-size:1.05rem;">${displayName}</div>
                        <div style="color:#FFA500;font-size:0.85rem;">Author: ${bioAuthor}</div>
                    </div>
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                    <button id="bio-close-btn" style="background:linear-gradient(45deg,#FFD700,#FFA500);border:none;padding:0.45rem 0.8rem;border-radius:8px;cursor:pointer;">CLOSE</button>
                </div>
            </div>
            <div style="display:flex; gap:0.5rem; margin-top:0.25rem;">
                <button id="bio-abi-tab" class="bio-tab bio-tab-active" style="flex:1;">Abilities</button>
                <button id="bio-doc-tab" class="bio-tab" style="flex:1;">Document</button>
            </div>
            <div id="bio-content-area" style="margin-top:0;color:#FFD700; display:flex; flex-direction:column;">
                <div id="bio-abi-section" style="color:#FFD700;margin:0; overflow:auto; max-height:45vh; padding-right:6px;"></div>
                <div id="bio-doc-section" style="color:#FFD700;margin:0; overflow:auto; max-height:45vh; padding-right:6px; display:none;">${bioHtml}</div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    
    document.getElementById('bio-close-btn').addEventListener('click', () => modal.remove());

    
    const docSection = document.getElementById('bio-doc-section');
    const abiSection = document.getElementById('bio-abi-section');
    const docTab = document.getElementById('bio-doc-tab');
    const abiTab = document.getElementById('bio-abi-tab');

    const renderAbilities = () => {
        const abis = charData.abilities;

        const charName = charData.name || '';
        const passives = charData.passives;
        const pacifistList = ['Penelope', 'Feathers', 'Lavender', 'Goldie', 'Caldera', 'Emery', 'Finn', 'Subject 192', 'Zed', 'Evergreen', 'Kitten'];
        let passiveHtml = '';
        if (passives && Array.isArray(passives) && passives.length > 0) {
            passiveHtml = passives.map(p => `
                <div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,215,0,0.12);">
                    <div style="font-weight:800;color:#81C784;font-size:0.95rem;">${escapeHtml(p.name || '')}</div>
                    <div style="font-size:0.82rem;color:#A5D6A7;margin:0.15rem 0;line-height:1.3;">${escapeHtml(p.description || '')}</div>
                    <div style="margin-top:0.2rem;font-size:0.78rem;color:#90A4AE;">Passive</div>
                </div>
            `).join('');
        }
        if (pacifistList.includes(charName)) {
            passiveHtml += `
                <div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,215,0,0.12);">
                    <div style="font-weight:800;color:#81C784;font-size:0.95rem;">Pacifist Route</div>
                    <div style="font-size:0.82rem;color:#A5D6A7;margin:0.15rem 0;line-height:1.3;">${escapeHtml(charName)} has no SIN. View Judgement's abilities for more context.</div>
                    <div style="margin-top:0.2rem;font-size:0.78rem;color:#90A4AE;">Passive</div>
                </div>`;
        }

        if (abis && Array.isArray(abis)) {
            const healCount = abis.filter(a => typeof a.damage === 'number' && a.damage < 0).length;
            if (healCount > 1) {
                let selfDesc = `${escapeHtml(charName)}'s healing will increase when in a battle with a BRAWN.`;
                if (charName === 'Subject 192') {
                    selfDesc += ` Their "Cannibalism" act will also drain more Max HP.`;
                }
                passiveHtml += `
                    <div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,215,0,0.12);">
                        <div style="font-weight:800;color:#81C784;font-size:0.95rem;">Self-Support</div>
                        <div style="font-size:0.82rem;color:#A5D6A7;margin:0.15rem 0;line-height:1.3;">${selfDesc}</div>
                        <div style="margin-top:0.2rem;font-size:0.78rem;color:#90A4AE;">Passive</div>
                    </div>`;
            }
        }

        if (charName === 'Navia') {
            passiveHtml += `
                <div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,215,0,0.12);">
                    <div style="font-weight:800;color:#81C784;font-size:0.95rem;">Honeyed Deceptions</div>
                    <div style="font-size:0.82rem;color:#A5D6A7;margin:0.15rem 0;line-height:1.3;">Against Ginger or Oliver, Navia will be VERY different.</div>
                    <div style="margin-top:0.2rem;font-size:0.78rem;color:#90A4AE;">Passive</div>
                </div>`;
        }

        if (!abis || !Array.isArray(abis) || abis.length === 0 || charData.informationalOnly) {
            if (passiveHtml) {
                abiSection.innerHTML = passiveHtml + '<div style="color:#FFA500;padding:0.5rem;">No abilities registered.</div>';
            } else {
                abiSection.innerHTML = '<div style="color:#FFA500;padding:0.5rem;">No abilities registered.</div>';
            }
            return;
        }

        const excludedFromBleed = ['Awareness', 'Martial Artist', 'Seven'];
        const firstAbility = abis[0] || {};
        const firstDmg = (typeof firstAbility.damage === 'number' && firstAbility.damage >= 0) ? firstAbility.damage : 0;

        const lines = abis.map((a, idx) => {
            const n = a.name || 'Unknown';
            const lowerName = n.toLowerCase();
            const desc = '' || '';
            const rawDmg = a.damage;

            let type = 'neutral';
            let valueText = '';
            let tags = [];
            let metaParts = [];

            if (typeof rawDmg === 'number') {
                if (rawDmg < 0) {
                    type = 'heal';
                    const baseHeal = -rawDmg;
                    valueText = `Heal ${baseHeal}`;
                    if (baseHeal < 16) tags.push('+ Regen');
                    if (baseHeal > 30) tags.push('+ Vulnerable');
                } else {
                    type = 'damage';

                    if (charName === 'Seven') {
                        if (lowerName === 'lucky strike') valueText = 'Damage ?? (Risky)';
                        else if (lowerName === 'dice roll') valueText = 'Damage 5–25 (Random)';
                        else if (lowerName === 'jackpot') valueText = 'Damage ?? (Luck)';
                        else valueText = `Damage ${rawDmg}`;
                    } else if ((charName === 'Reflection' || charName === 'Kyle') && lowerName === 'final performance') {
                        valueText = `Damage ???`;
                    } else if ((charName === 'Judgement' || charName === 'Navia') && lowerName === 'bone barrage') {
                        valueText = `${rawDmg} Karma`;
                    } else {
                        valueText = `Damage ${rawDmg}`;
                    }

                    if (lowerName === 'duality wave') tags.push('Inflicts Cursed');
                    if (lowerName === 'cannibalism') tags.push('Reduces Max HP');
                    if (lowerName === 'luck drain') tags.push('Reduces Max HP');

                    if (!excludedFromBleed.includes(charName) && rawDmg >= 0 && firstDmg > 0 && rawDmg < firstDmg) {
                        tags.push('+ Bleed');
                    }
                }
            } else {
                valueText = 'No damage value';
            }

            let cd = '';
            if (typeof a.cooldown === 'number' && a.cooldown > 0) {
                cd = `Cooldown ${a.cooldown}`;
            } else if (idx !== 0) {
                const defaultCd = (rawDmg < 0) ? 2 : 4;
                cd = ``;
            }

            let html = `<div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,215,0,0.08);">`;
            html += `<div style="font-weight:800;color:#FFD700;font-size:0.95rem;">${escapeHtml(n)}</div>`;

            if (desc) {
                html += `<div style="font-size:0.82rem;color:#FFA500;margin:0.15rem 0;line-height:1.3;">${escapeHtml(desc)}</div>`;
            }

            if (valueText) {
                const color = type === 'heal' ? '#81C784' : (type === 'damage' ? '#E57373' : '#FFD700');
                metaParts.push(`<span style="color:${color};font-weight:700;">${escapeHtml(valueText)}</span>`);
            }
            if (tags.length) {
                metaParts.push(`<span style="color:#FFB74D;font-size:0.8rem;">${escapeHtml(tags.join(' • '))}</span>`);
            }
            if (cd) {
                metaParts.push(`<span style="color:#90A4AE;font-size:0.78rem;">${escapeHtml(cd)}</span>`);
            }

            if (metaParts.length) {
                html += `<div style="margin-top:0.2rem;display:flex;flex-wrap:wrap;gap:0.35rem;align-items:center;">${metaParts.join('<span style="color:rgba(255,215,0,0.3);"> | </span>')}</div>`;
            }

            html += `</div>`;
            return html;
        });

        const hpBlock = (charName !== 'Seven' && typeof charData.health === 'number')
            ? `<div style="padding:0.5rem 0;border-bottom:2px solid rgba(255,215,0,0.15);margin-bottom:0.3rem;display:flex;align-items:center;gap:0.5rem;">
                <span style="color:#E57373;font-weight:900;font-size:1.1rem;">HP ${charData.health}</span>
               </div>`
            : '';
        abiSection.innerHTML = hpBlock + (passiveHtml || '') + lines.join('');
    };

    const switchTab = (tab) => {
        if (tab === 'doc') {
            docTab.classList.add('bio-tab-active');
            abiTab.classList.remove('bio-tab-active');
            docSection.style.display = 'block';
            abiSection.style.display = 'none';
        } else {
            abiTab.classList.add('bio-tab-active');
            docTab.classList.remove('bio-tab-active');
            docSection.style.display = 'none';
            abiSection.style.display = 'block';
            renderAbilities();
        }
    };

    docTab.addEventListener('click', () => switchTab('doc'));
    abiTab.addEventListener('click', () => switchTab('abi'));

    renderAbilities();


}


window.renderCharactersList = renderCharactersList;





window.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('characters-screen');
    if (screen && screen.classList.contains('active')) {
        renderCharactersList();
    }
});