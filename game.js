const characters = {
    cupiditas: {
        name: "Cupiditas",
        sprite: "cupiditas.png",
        woundedSprite: "cupiditas_wounded.png",
        health: 100,
        bio: "Led by curious fancy and a weakness for shadowed paths, he was drawn into the wood by a small trickster and slipped through to my domain. He regards that creature, a capricious companion of mine, with allies' affection despite the transgression that delivered him here. Such loyalties are of interest; they reveal the fragile scaffolding of the heart.",
        abilities: [
            { name: "Shadow Absorb", damage: 15, description: "Absorb shadow energy to heal" },
            { name: "Dark Strike", damage: 25, description: "A powerful shadow attack" },
            { name: "Void Pulse", damage: 20, description: "Area damage to all enemies" },
            { name: "Shadow Mend", damage: -10, description: "Heal with shadow energy" }
        ]
    },
    kite: {
        name: "Kite",
        sprite: "kite.png",
        woundedSprite: "kite_wounded.png",
        health: 100,
        bio: "Once a guardian of civic order, he answered calls with the solemnity of one who carries other people's panic as if it were his own. A single family entrusted their children to him in a moment of emergency and he kept them safe through the night; devotion grew, small and earnest, on that vigil. The subsequent aftermath was an offence so monstrous the world could scarce bear it and it ruptured what remained of his peace. Memory was cleaved from him within the Void, and where solemn oath once stood I fashioned mischief: a trickster forged from a guardian's hollowed grief, an instrument that now moves between shadow and jest.\\n\\nUPDATE: Kite seems to retain his memories whenever he sees Mona and Thalia, the two criminals. I will make an internal note to keep Kite away from them.",
        abilities: [
            { name: "Trick Shot", damage: 20, description: "Unpredictable attack" },
            { name: "Memory Lapse", damage: 15, description: "Confuse the enemy" },
            { name: "Police Training", damage: 30, description: "Devastating combo attack" },
            { name: "Smoke Bomb", damage: 10, description: "Escape and minor damage" }
        ]
    },
    subject192: {
        name: "Subject 192",
        sprite: "subject192.png",
        woundedSprite: "subject192_wounded.png",
        health: 100,
        bio: "A construct of my own making that preceded the Unbroken era, he has never known a world outside my attention. In his long vigil within the Void he learned strange civility and found companions where none were expected. Cyrus became, by strange loyalty, his closest friend, and their bond stands as evidence that even artifices may learn tenderness in exile. His design was based off one of the files from the old inhabitant's computer.",
        abilities: [
            { name: "Goo Shot", damage: 18, description: "Launch black goo" },
            { name: "Cannibalism", damage: -20, description: "Befriend and confuse" },
            { name: "Acid Splash", damage: 22, description: "Corrosive attack" },
            { name: "Regenerate", damage: -15, description: "Self-heal with goo" }
        ]
    }
};


const additionalCharacters = {
    victim: {
        name: "Victim",
        sprite: "victim.png",
        woundedSprite: "victim_wounded.png",
        health: 96,
        bio: "She arrived in the Void after a life that ended in a small, bitter argument and a public humiliation that never healed. Where C'est La Vie smiled and shrugged, Victim kept the quiet ledger of wounds. Their stories touch: C'est La Vie's barbed kindness once passed through a doorway that left Victim exposed to chance, and what was said there bent both of them—one into a sarcastic healer, the other into someone who learned to survive on sharper instincts. Victim moves like someone learning to count steps so she won't be surprised again.",
        author: "The Sunlight",
        abilities: [
            { name: "Quiet Strike", damage: 20, description: "A precise, rueful hit" },
            { name: "Hurt Remembered", damage: 16, description: "A strike that weakens the foe's next attack" },
            { name: "Hardened Breath", damage: 26, description: "A more forceful, determined blow" },
            { name: "Small Stitch", damage: -12, description: "A careful, reserved heal learned from survival" }
        ]
    },

    
    lahar: {
        name: "Lahar",
        sprite: "lahar.png",
        woundedSprite: "lahar_wounded.png",
        health: 100,
        bio: "They were a messenger in a war that did not belong to them, a courier of words that were never theirs to own; I watched them pass between camps with a neutrality so complete it bordered on the inhuman, carrying terms of surrender and slaughter with equal indifference, until a treaty of humiliation broke the pattern and the wounded pride of the receiving side seized the only target within reach. They shattered the wings, those delicate instruments of transit that had carried truth and poison alike, and made permanent what had been merely functional; days later, the broken wings were bound tight against the back and Lahar was thrown from a cliff's edge, the ruined architecture unable to catch the air, unable to slow the descent, able only to remember what flight had been while the ground rushed up to claim its explanation. I took them at the moment before impact, when the body had accepted that the fall was all that remained, and I wished to see what neutrality becomes when the world has punished it, when the refusal to choose a side is answered with violence that permits no reply; they move through the Void now with those same broken wings, still bound, still useless, still carried like a memory of what they once were, delivering nothing now, and in that silence there is something I find worth observing.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Wingless Descent", damage: 26, description: "A heavy strike born of a fall—powerful and solemn." },
            { name: "Courier's Neutrality", damage: 18, description: "A precise jab that reduces enemy resolve." },
            { name: "Bound Memory", damage: -14, description: "Small, bittersweet heal that steadies allies." },
            { name: "Final Dispatch", damage: 34, description: "A decisive, devastating blow that punishes the unwary." }
        ]
    },

    
    quinn: {
        name: "Quinn",
        sprite: "quinn.png",
        woundedSprite: "quinn_wounded.png",
        health: 300, 
        higherPlane: true,
        higherPlaneChancePercent: 0, 
        bio: "She was the first thing Wachi ever mourned. I knew her only through his small, insistent grief, a warmth he described in fragments, a hand that once filled a dish, a voice that answered his mischief with patience rather than scolding. She perished in a fire that consumed her higher-class dimension long before my attention reached it, and Wachi escaped through the wound that death left in the world, stumbling into the Lightworld with ash on his paws and a loyalty that had nowhere to rest.\nI raised him. He gave me half of his power. And in time he asked for her back. Not as a fighter for my collection, not as a specimen bound to the Void, but as herself, whole and breathing, in the light where I dwell. I refused him many times. Resurrection is a currency I do not spend lightly; it invites expectation, and expectation invites consequence. But Wachi does not beg. He asks, again and again, with the same patience he learned from her. Eventually I found the refusal cost me more than the act.\nSo I retrieved what the fire had not fully unmade. I rebuilt her in the Lightworld, not as servant or captive, but as guest. Their reunion was... I lack the word. Wachi does not weep, but he pressed himself to her and would not move for an hour. I watched and felt something unfamiliar. I believe it was happiness on his behalf.\nShe has lived with me since. Quinn is warm, deliberate, possessed of a quiet humor that does not flinch at my temper. She volunteers for Unbroken on occasion. Not out of debt, but from a curiosity about the place that houses so many of Wachi's adopted kin. She fights with the practicality of one who once kept order in a home, efficient and unshowy. We have become close, she and I. She speaks to me as Wachi does: directly, without the reverence or fear that my title usually commands. It is restful.\nShe has met my friends. Nightlight and Starlight. She does not dislike them so much as she does not trust them. \"They treat you like a project,\" she told me once. \"I treat you like a person.\" I did not correct her. I am uncertain she is wrong.\nShe asks me sometimes why I keep the servers for Unbroken running. I have never answered well. She does not press. She simply stays, and in staying, reminds me that some loyalties are chosen rather than extracted.\nI am glad Wachi asked until I said yes.",
        passives: [
            { name: "The Call Of The Sun", description: "Quinn gets a 200 HP bonus when she enters a battle with Awareness." }
        ],
        abilities: [
            
            { name: "Household Order", damage: 36, description: "A precise strike that strips enemy buffs and deals solid single-target damage." },
            { name: "Tending Embrace", damage: -28, description: "A strong single-target heal that also grants a small shield (temporary)." },
            { name: "Patient Redirect", damage: 18, description: "Redirects incoming aggression: deals damage and taunts the attacker." },
            { name: "Warmth's Reach", damage: -14, description: "A moderate group heal applied to all allies and removes one negative effect." }
        ]
    },
    oliver: {
        name: "Oliver",
        sprite: "oliver.png",
        woundedSprite: "oliver_wounded.png",
        health: 120,
        higherPlane: true,
        higherPlaneChancePercent: Math.floor(Math.random() * 4) + 1, 
        bio: "From my side, Oliver's dimension is where Death takes shape. He is the embodiment of Death from the tale told across dimensions, the one that inspired me most, \"Reincarnation, Death, and Karma\". In his dimension, he comes when it is their time. They are drawn into a vortex more mysterious than The Void.\n\nSo what happens when it is his time? What happens when Death itself is stripped of his own powers?",
        abilities: [
            { name: "Reaper's Verdict", damage: 48, description: "A final judgment delivered in a single cut" },
            { name: "Karmic Drag", damage: 26, description: "A tug that leaves a lingering aftermath" },
            { name: "Vortex Shunt", damage: 34, description: "Reality folds, and the foe gets carried with it" },
            { name: "Death's Thread", damage: 22, description: "A thin, persistent wound that remembers you" }
        ]
    },
    twylight: {
        name: "Twylight",
        sprite: "twylight.png",
        woundedSprite: "twylight_wounded.png",
        health: 102,
        bio: "She arrived as a remnant of a small, ruined world. Once a gentle lower-class presence noticed from afar by Nightlight, Twylight accepted a strange companionship that first warmed and then hollowed her. That telepathic influence grew possessive and corrosive: under its sway she burned her home and erased every life she had known. Years later I found her wandering the Void — quieter now, and marked by what she had been made to do.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Glimmer Lash", damage: 20, description: "A swift, wavering strike of light" },
            { name: "Telepathic Tether", damage: 16, description: "Bind the foe briefly with psychic strain" },
            { name: "Corrupting Warmth", damage: 28, description: "A violent burst seeded by other minds" },
            { name: "Forgotten Sigh", damage: -12, description: "A small, sorrowful mend that comes at a cost" }
        ]
    },

    ripper: {
        name: "Ripper",
        sprite: "ripper.png",
        woundedSprite: "ripper_wounded.png",
        health: 96,
        
        shs: true,
        shsX: 134,
        bio: "I found him in the margins of a corrupted file, tangled in the same anomalous code that birthed The Roden, though where that entity emerged vast and misaligned, this one arrived diminished and screaming. He had been a user once, a curious hand that inserted a disc pulsing with wrong geometry into a machine that should have remained silent; The Roden answered his trespass not with death but with a pact, offering power in exchange for passage, for eyes, for a voice that would carry its logic into softer systems. The Roden kept its word in the manner of corrupted runtimes: it hollowed him out and wore the shape of his agony, leaving Ripper as a frayed remnant bound to the same hunger, the same interrupted scripts, the same hunger for systems to rewrite. I claimed him because The Roden is a problem that returns, and Ripper may yet teach me what promises were made in that digital dark. He moves through the Void with the jerking gait of a marionette whose strings are code, muttering in fragments of languages he never spoke alive, and when he bleeds it is not blood but static that pools beneath him. The Roden resents my keeping of him; that alone recommends the arrangement.\n\nInspired by Alice from JoeDoughBoi's \"Soulless Sonic\" Series.",
        abilities: [
            { name: "Static Claw", damage: 22, description: "A snapping, glitch-torn slash that leaks noise." },
            { name: "Corrupt Whine", damage: 18, description: "A dissonant cry that weakens enemy defenses." },
            { name: "Fragmented Surge", damage: 30, description: "A burst of fractured runtime that hits hard." },
            { name: "Glitch Drip", damage: -12, description: "Repair by siphoning static from the void" }
        ]
    },

    five: {
        name: "Five",
        sprite: "five.png",
        woundedSprite: "five_wounded.png",
        health: 125,
        
        shs: true,
        shsX: 125,
        
        voice: true,
        bio: "I recovered him from a quiet death, unremarkable in its method yet lingering in its residue, and brought him into the Void on a whim of pattern-matching: another number-name wandering the same dark as Seven and that smiling anomaly, Zero. I assumed nothing; I was correct. From what Five told me, he and Seven were once inseparable, bound by the easy loyalty of youth, until Seven found Zero and love bent their trio into something sharper. The end came in a bar, stupid and wet with spilled drink and bruised pride—Seven and others drunk, a fight that escalated past reason, and Zero caught between fists and broken glass, dead before the floor drank the last of her. Five watched it happen. Five carries it still. He has no notion how Zero walks again, only that she does, following Seven through my domain with that blank smile and those silences that unnerve even me. I keep Five close. He is grief made legible, a witness to the life before Zero became what she is now, and perhaps the key to understanding why a dead girl smiles and why Seven's vision clouds when he tries to look at her. Five does not know he is useful. That makes him more useful still.",
        
        abilities: [
            { name: "Spark Cinder", damage: 22, description: "A quick burst of ember that singes the foe." },
            { name: "Flame Knuckle", damage: 28, description: "A heavy flaming strike that burns through defenses." },
            { name: "Ash Cascade", damage: 34, description: "A cascading volley of burning fragments that scorches multiple targets." },
            { name: "Inferno Finish", damage: 46, description: "A devastating, focused blaze that punishes the unlucky." }
        ]
    },
    null: {
        name: "██████",
        sprite: "null.png",
        woundedSprite: "null.png",
        health: 100,
        variable: true,
        
        bio: "I don't know what this is.",
        
        passives: [
            { name: "What Have You Got To Say?", description: "This beast takes other characters' abilities." }
        ],
        abilities: []
    },

    terra: {
        name: "Terra",
        sprite: "terra.png",
        woundedSprite: "terra_wounded.png",
        health: 120,
        bio: "Once a companion beneath the same roof as another marksman, she shared years of ordinary life and quiet confidences. On the eve she had resolved to speak a truth kept close, my attention took her instead. I carried that unfinished confession into my domain and preserved her as a presence shaped by both loyalty and the ache of words unsaid.",
        abilities: [
            { name: "Earthquake", damage: 26, description: "Ground-shaking attack" },
            { name: "Stone Skin", damage: -5, description: "Harden defenses" },
            { name: "Boulder Toss", damage: 30, description: "Heavy projectile" },
            { name: "Nature's Gift", damage: -18, description: "Nature healing" }
        ]
    },

    
    evergreen: {
        name: "Evergreen",
        sprite: "evergreen.png",
        
        health: 100,
        bio: "I provided refuge to Evergreen after her native dimension criminalized botanical life and exiled her for what she is. Evergreen is a being composed of plant matter who responded to that exile with quiet patience. I arranged for Lavender to care for her and Evergreen accepted that care; they have remained inseparable since. Evergreen greets Lavender with a gentle, blushing presence and displays steady, patient growth under her care.",
        abilities: [
            { name: "Vine Lash", damage: 22, description: "Striking vines entangle the foe" },
            { name: "Leaf Shield", damage: -12, description: "Soft regenerative leaves protect and mend" },
            { name: "Root Grasp", damage: 18, description: "Roots pull and bind an enemy" },
            { name: "Verdant Bloom", damage: -18, description: "A warm, plant-sourced heal" }
        ]
    },

    
    alba: {
        name: "Alba",
        sprite: "alba.png",
        woundedSprite: "alba_wounded.png",
        health: 110,
        higherPlane: true,
        higherPlaneChancePercent: 35, 
        bio: "She was a vessel of glass and liquid nitrogen, cracking under the weight of a sibling's sickness and a poverty that offered no mercy. I took her at the moment before shatter, when stress had webbed her surface and the cold she contained threatened to meet the air. I wished to see what remains when a fragile thing insists on bearing load, and whether love that literally breaks you can be made into something that fights.\n\nThis character was fan-requested.",
        
        abilities: [
            { name: "Shatter Strike", damage: 28, description: "Smash with a brittle shard, heavy single-target damage" },
            { name: "Glass Ward", damage: -12, description: "Place a brittle shield that reduces incoming damage" },
            { name: "Ice Thrust", damage: 22, description: "Piercing icicle assault that wounds the foe" },
            { name: "Fracture Blessing", damage: -6, description: "Grant allies increased resist (temporary)" }
        ]
    },

    
    wonder: {
        name: "Wonder",
        sprite: "wonder.png",
        woundedSprite: "wonder_wounded.png",
        health: 86,
        author: "The Sunlight",
        bio: "She was six years old the day she first drove into my attention: a small, bright driver who steered a vehicle into a tree and, for that mistake, I took her into my realm. She is the first human and the youngest to learn how I keep company. Do not be fooled by her size—Wonder is violent and unnervingly strategic; I decided not to grant her magic. She must fight as others do, with blunt intent and terrible efficiency.\n\nInspired by Fiore from Odd Nation Cartoons' \"Disventure Camp\"",
        
        abilities: [
            { name: "Child's Bite", damage: 18, description: "A vicious, surprising strike" },
            { name: "Pocket Knife", damage: 26, description: "Quick stab with a stolen blade" },
            { name: "Scrappy Rush", damage: 22, description: "A feral lunge that catches defenses" },
            { name: "Terrible Determination", damage: 32, description: "A decisive, brutal attack born of stubbornness" }
        ]
    },

    
    kitten: {
        name: "Kitten",
        sprite: "kitten.png",
        woundedSprite: "kitten_wounded.png",
        health: 95,
        bio: "Her sister was taken; I recorded the removal and lack of return. Kitten did not know of death—she only knew absence and the stubborn hope of a reunion. Wachi lured her into a nearby wood with promises of finding what was lost, and that lure drew Kitten into my domain. She arrives here carrying the private conviction that searching will bring her sibling back, and she moves with the small, stubborn grief of one not yet permitted the knowledge of finality.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Paw Swipe", damage: 18, description: "A quick, scratching strike" },
            { name: "Distracting Purr", damage: 12, description: "Diminish enemy focus and open an opportunity" },
            { name: "Claw Hold", damage: 22, description: "A tenacious grip that deals steady damage" },
            { name: "Mournful Nuzzle", damage: -14, description: "A gentle heal drawn from longing" }
        ]
    },

    
    boundless: {
        name: "Boundless",
        sprite: "boundless.png",
        woundedSprite: "boundless_wounded.png",
        health: 100,
        bio: "It's Boundless.\n\nThis character was fan-requested.",
        author: "Boundles",
        
        abilities: [
            { name: "Wide Sweep", damage: 20, description: "A sweeping strike that hits cleanly." },
            { name: "Limitless Jab", damage: 24, description: "A focused thrust with reliable damage." },
            { name: "Boundless Ward", damage: -14, description: "A modest heal that steadies the fighter." },
            { name: "Unfettered Strike", damage: 28, description: "A stronger single-target hit." }
        ]
    },

    
    bai: {
        name: "Bai",
        sprite: "bai.png",
        woundedSprite: "bai_wounded.png",
        health: 100,
        bio: "Short for Binary. I recovered Bai from the original inhabitant's machine and kept what the world discarded: a small, efficient intelligence rewritten by loss. It catalogues its owner like a missing address and answers absence with precise, corrosive hatred. It is useful—resentful, obedient to memory, and apt at turning nostalgia into weaponry.\n\nInspired by SCP-079 from Wesley Williams' \"SCP Foundation\".",
        author: "The Sunlight",
        abilities: [
            { name: "Bit Slash", damage: 26, description: "A precise, digital-cutting attack" },
            { name: "Data Corrupt", damage: 18, description: "Weakening strike that can destabilize systems" },
            { name: "Kernel Patch", damage: -12, description: "Minor self-repair downloaded from memory" },
            { name: "Overflow", damage: 32, description: "A heavy corrupted burst that punishes defenders" }
        ]
    },
    penelope: {
        name: "Penelope",
        sprite: "penelope.png",
        woundedSprite: "penelope_wounded.png",
        health: 90,
        bio: "I observed Penelope while she tended a greenhouse assignment; when a lockdown interrupted that duty she failed to complete her charge and was subsequently murdered.\n\nADDENDUM:\nPenelope was never supposed to be sent to Unbroken. I only sent her here because the events on what happened to her that day were... unusual, to say the least. She is inferior and could have left whenever she wished to. I don't think she knows.",
        abilities: [
            { name: "Optimism Strike", damage: 20, description: "Positive energy attack" },
            { name: "Hope Shield", damage: -10, description: "Protective barrier" },
            { name: "Smile Beam", damage: 25, description: "Radiant happiness" },
            { name: "Inspire", damage: -8, description: "Heal with positivity" }
        ]
    },
    mona: {
        name: "Mona",
        sprite: "mona.png",
        woundedSprite: "mona_wounded.png",
        health: 95,
        bio: "A seeker of the firmament, she read the skies as others read scripture; the universe was her counsel and her solace. In transgression she crossed an unseen boundary, and men with badges and rifles came to enforce laws she had not meant to defy. A bullet severed her earthly gaze and I, The Sunlight, claimed the shard of sky that remained. In my Void she persists as an exile of starlight, hunted no longer by officers of flesh, but pursued by the quiet gravity of consequence.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Star Shot", damage: 22, description: "Celestial projectile" },
            { name: "Nebula Cloud", damage: 18, description: "Stunning mist" },
            { name: "Cosmic Blast", damage: 28, description: "Powerful star attack" },
            { name: "Astral Heal", damage: -12, description: "Stargazer recovery" }
        ]
    },
    ginger: {
        name: "Ginger",
        sprite: "ginger.png",
        woundedSprite: "ginger.png",
        health: 85,
        bio: "A marksman whose certainty is a small apocalypse, he never misses because he does not hesitate. In life his path intersected many others within my domain and those ties remain woven into the fabric of the Void; he trained some, befriended others, and in every knot there is consequence. He moves here as he did elsewhere with the same quiet precision, and those who remember him know that a single shot from his hand changes outcomes.\n\nInspired by Pico by Tom Fulp's \"Pico's School\".",
        abilities: [
            { name: "Precision Shot", damage: 28, description: "Perfect aim strike" },
            { name: "Rapid Fire", damage: 18, description: "Multiple quick shots" },
            { name: "Sniper's Focus", damage: 35, description: "Devastating headshot" },
            { name: "Take Cover", damage: -8, description: "Defensive roll" }
        ]
    },
    prime: {
        name: "Prime",
        sprite: "prime.png",
        woundedSprite: "prime_wounded.png",
        health: 110,
        bio: "An angel forged by duty and the memory of loss, she bore the absence of a father who fell to war. Her submission to sorrow did not mark her for mercy, yet I drew her into my realm to observe how grief remakes a vigilant heart. She remains a figure of solemn light, one who carries remembrance like armor and who learns anew what purpose endures when the world gives way.",
        abilities: [
            { name: "Divine Strike", damage: 26, description: "Heavenly judgment" },
            { name: "Angel's Wings", damage: -12, description: "Celestial protection" },
            { name: "Holy Wrath", damage: 32, description: "Divine retribution" },
            { name: "Redemption", damage: -20, description: "Heal with grace" }
        ]
    },

    daphne: {
        name: "Daphne",
        sprite: "daphne.png",
        woundedSprite: "daphne_wounded.png",
        health: 105,
        bio: "Once draped in the trappings of sovereignty, she moved with the quiet certainty of a woman for whom ceremony and duty were indistinguishable. Fate, capricious, careless, intervened on a day shared with a companion, and a careless instant spilled into finality; death came not as judgment but as accident. I, The Sunlight, afforded her a reprieve and brought her into my Void, granting that which the world had denied: a second passage to unbind what was unfinished and to temper a fallen crown with new purpose.",
        abilities: [
            { name: "Spear Throw", damage: 27, description: "Precise spear strike" },
            { name: "Royal Command", damage: 22, description: "Leader's authority" },
            { name: "Ruler's Wrath", damage: 35, description: "Devastating royal attack" },
            { name: "King's Grace", damage: -15, description: "Royal healing" }
        ]
    },
    seven: {
        name: "Seven",
        sprite: "seven.png",
        woundedSprite: "seven_wounded.png",
        health: 95,
        bio: "A gambler whose life was a ledger of risks and ruination, he fell by violence shortly after a bold victory. I drew him into the Void not to punish but to preserve that appetite for chance; he remains here as an agent of risk, ever testing fate and courting fortune with the same reckless grin that once marked his tables.",
        passives: [
            { name: "Unpredictable Fate", description: "Max HP is randomized between 90–130 at the start of every fight." },
            { name: "Caught Red-Handed", description: "Seven cannot apply Bleeding no matter what. Note: Bleeding is usually applied when an ability deals less damage than the main ability." }
        ],
        abilities: [
            { name: "Lucky Strike", damage: 40, description: "High risk, high reward" },
            { name: "Dice Roll", damage: 15, description: "Random 5-25 damage" },
            { name: "Jackpot", damage: 50, description: "Massive if lucky" },
            { name: "Safety Net", damage: -5, description: "Small guaranteed heal" }
        ]
    },
    echo: {
        name: "Echo",
        sprite: "echo.png",
        woundedSprite: "echo.png",
        health: 90,
        bio: "Born from an egg that slept for epochs, he belongs to an age the world has forgotten. I retrieved that slumbering life and set it to wake inside my Void so that extinction would meet continuance and the ancient might learn new ways. He greets this place with curiosity and hunger, and his presence is a living echo of a past that insists on being remembered.",
        abilities: [
            { name: "Sound Wave", damage: 23, description: "Sonic attack" },
            { name: "Echo Chamber", damage: 19, description: "Reverberating damage" },
            { name: "Deafening Blast", damage: 31, description: "Powerful sonic boom" },
            { name: "Healing Vibration", damage: -12, description: "Harmonic restoration" }
        ]
    },
    cyrus: {
        name: "Cyrus",
        sprite: "cyrus.png",
        woundedSprite: "cyrus_wounded.png",
        health: 100,
        bio: "A marksman by trade, she cloaked herself in humble fabric to pass unseen; a blue hood that belied the efficiency of a woman who had taken many lives in rigid service to survival. Her tally was high, yet her manner remained gentle to strangers. A single bullet from a law's hand ended that chapter, and I opened another within my Void.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Quick Draw", damage: 24, description: "Lightning fast shot" },
            { name: "Trick Shot", damage: 20, description: "Acrobatic gunplay" },
            { name: "Target Practice", damage: 32, description: "Perfect precision strike" },
            { name: "Sweet Recovery", damage: -10, description: "Self-soothe and heal" }
        ]
    },
    kc: {
        name: "KC",
        sprite: "kc.png",
        woundedSprite: "kc_wounded.png",
        health: 110,
        bio: "A creature of impossible allegiance, she moves as if on a stage of perpetual play, interpreting every danger as an element of a game. Oblivious to the gravity that brought her here, she carries an innocence that both bemuses and unnerves those who observe her. In my Void she continues to chase bright things and bark at shadows while the world around her takes meaning from that very frivolity.",
        abilities: [
            { name: "Claw Combo", damage: 22, description: "Sharp feline strikes" },
            { name: "Howl", damage: 18, description: "Intimidating roar" },
            { name: "Hybrid Fury", damage: 30, description: "Cat-dog hybrid power" },
            { name: "Lick Wounds", damage: -12, description: "Animal instinct healing" }
        ]
    },

    howl: {
        name: "Howl",
        sprite: "howl.png",
        woundedSprite: "howl_wounded.png",
        health: 98,
        bio: "They fancy themselves a creature of night and keen lament; I met them once before the Unbroken era when I visited a lower-class dimension, but that is a story we shall not pursue now. They move with a restless pride, a habit of long calls toward horizons no one answers, and keep a private belief about their place in the dark that they will not state in so many words.",
        abilities: [
            { name: "Night Call", damage: 20, description: "A piercing cry that unsettles foes" },
            { name: "Pounce", damage: 26, description: "A sudden, lunging strike" },
            { name: "Lone Guard", damage: -12, description: "Defensive mend and focus" },
            { name: "Pack Mend", damage: -8, description: "A small restorative for self or allies" },
            { name: "Rending Cry", damage: 34, description: "A brutal attack fueled by fervor" }
        ]
    },
    maturity: {
        name: "Maturity",
        sprite: "maturity.png",
        woundedSprite: "maturity_wounded.png",
        health: 95,
        bio: "He carried an accident like a stone in his chest: a life undone by a single, unintended hand that ended a queen's breath. That fracture of consequence hollowed his reason until mockery and flippancy were the only armors left that fit. Even when I gathered him into my domain, the habit of irreverence remained; he jokes where others would weep, and in that levity a terrible honesty endures, sanity not so much lost as rearranged into something cunning and unpredictable.",
        abilities: [
            { name: "Chaotic Strike", damage: 26, description: "Unpredictable assault" },
            { name: "Rifle Flashback", damage: 20, description: "Traumatic memory attack" },
            { name: "Breakdown", damage: 35, description: "Emotional outburst" },
            { name: "Compose Yourself", damage: -8, description: "Mental recovery" }
        ]
    },
    knight: {
        name: "The Knight",
        sprite: "knight.png",
        woundedSprite: "knight_wounded.png",
        health: 130,
        bio: "He was once called Steellight and stood beside my sister as a pledge of steadiness and oath. The collision of passions that took Awareness's life also took his worldly shape, and I returned him to the Void as a guardian tempered by loss. He now moves with the fidelity of one remade, a blade sworn to memory and to the strange loyalties that survive beyond mortal ending.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Moonlight Slash", damage: 28, description: "Remembering Moonlight" },
            { name: "Steadfast Guard", damage: -15, description: "Defensive stance" },
            { name: "Oathkeeper", damage: 36, description: "Sworn blade strike" },
            { name: "Moonlit Memory", damage: -10, description: "Honor and healing" }
        ]
    },
    sally: {
        name: "Sally",
        sprite: "sally.png",
        woundedSprite: "sally_wounded.png",
        health: 90,
        bio: "Once the light of the dance floor, she was claimed in a night of indiscriminate violence long ago. In death she lingered alongside an odd, mechanical companion until release finally arrived. I restored her to this domain with the same appetite for revelry she carried in life, and she returns to my Void as a creature of perpetual party and mischief, animated by memory and motor alike.\n\nInspired by Chica from Scott Cawthon's \"Five Nights at Freddy's\".",
        abilities: [
            { name: "Mirror Shard", damage: 21, description: "Reflective projectile" },
            { name: "Vanity Shield", damage: -8, description: "Beauty barrier" },
            { name: "Shattered Reflection", damage: 33, description: "Broken mirror curse" },
            { name: "Touch-Up", damage: -6, description: "Quick beauty fix" }
        ]
    },

    
    syre: {
        name: "Syre",
        sprite: "syre.png",
        woundedSprite: "syre_wounded.png",
        health: 94,
        bio: "He is a thing of distilled corrosion brought into my keeping: not merely acidic in composition but fashioned so that memory itself peels under his presence. I kept him to observe what patience and restoration mean when one's body dissolves and reforms like rain upon iron. He tends wounds with the same hands that unmake flesh, because for Syre healing is an application of careful chemistry rather than mercy.",
        
        abilities: [
            { name: "Acidic Lunge", damage: 24, description: "A sizzling strike that eats armor" },
            { name: "Corrosive Bloom", damage: -18, description: "A spreading mend that stabilizes tissue via controlled corrosion (heals over time)" },
            { name: "Venomous Cauterize", damage: -22, description: "A potent restorative that seals and reforms" },
            { name: "Salted Burst", damage: 28, description: "A violent burst of corrosive fragments" }
        ]
    },
    wachi: {
        name: "Wachi",
        sprite: "wachi.png",
        woundedSprite: "wachi_wounded.png",
        health: 96,
        bio: "Wachi is the companion most dear to me, a small creature kept at my side beyond the rituals and reckonings I have wrought. Unlike the others whose souls I bound within the Void, Wachi was permitted agency, free to come and go; yet since its arrival mischief and disorder have followed like a faithful shadow. It is a curious thing, half-feline and wholly impish, whose antics have altered the fates of those around it.\n\nInspired by (old fanmade interpretations of) FRIEND from Toby Fox's \"Deltarune\".",
        abilities: [
            { name: "Tail Flick", damage: 20, description: "A sharp flick of a pointed tail" },
            { name: "Hell's Whisker", damage: 18, description: "A painful, chaotic swipe" },
            { name: "Purr of Pain", damage: 28, description: "A resonant attack that unsettles foes" },
            { name: "Tailward Retreat", damage: -96, description: "Recover by curling into shadow" }
        ]
    },

    
    fossil: {
        name: "Fossil",
        sprite: "fossil.png",
        woundedSprite: "fossil_wounded.png",
        health: 88,
        bio: "She was the skeletal remains of a mortal-angel hybrid returned to me from another dimension. I restored her as a servant intending a mindless instrument of duty, yet she surprised me by gathering a mind of her own and making a companion of Subject 192 without my design or consent.",
        abilities: [
            { name: "Bone Lance", damage: 28, description: "A precise piercing strike of sharpened bone" },
            { name: "Shattering Roar", damage: 26, description: "A concussive cry that rends defenses" },
            { name: "Remnant Swipe", damage: 24, description: "A steady sweeping attack with jagged fragments" },
            { name: "Last Spark", damage: 30, description: "A focused, powerful blow" }
        ]
    },
    
    
    leonard: {
        name: "Leonard",
        sprite: "leonard.png",
        woundedSprite: "leonard_wounded.png",
        health: 92,
        bio: "Arrested once for throwing pizza at people, and then insisting the police themselves be reported for harassment, Leonard later appeared here in the Void without explanation; he carries an air of baffled protest and a stubborn appetite for mischief.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Sauce Toss", damage: 18, description: "A messy ranged hit that stains and distracts." },
            { name: "Crust Bash", damage: 26, description: "A solid blunt strike delivered with the heel of a pizza." },
            { name: "Callout", damage: 14, description: "Expose an opponent, reducing their next damage." },
            { name: "Leftover Comfort", damage: -12, description: "A small, awkward heal drawn from leftover hope." }
        ]
    },

    
    kyle: {
        name: "Kyle",
        sprite: "kyle.png",
        woundedSprite: "kyle_wounded.png",
        health: 85,
        
        shs: true,
        shsX: 137,
        bio: "He was the second to pass into my domain in that age called Unbroken and he entered with a voice that once drew crowds. He did not break beneath exile; instead he surrendered the notion of escape and set down a strange patience. When he bleeds something unseen answers him, and that unseen thing favors him—blades glance, falls break soft, enemies stumble at the decisive breath. He endures as a witness who chose quiet acceptance over furious return, and fortune clings to him like a second shadow. I have watched him win contests he should have lost, and I find that ease almost as interesting as the force that grants it.",
        passives: [
            { name: "Enhancement", description: "Kyle's Final Performance will boost when his HP is less than (or equal to) 30%." }
        ],
        abilities: [
            { name: "Fading Note", damage: 15, description: "Weak melancholic attack" },
            { name: "Dissonant Chord", damage: 18, description: "Off-key strike" },
            { name: "Final Performance", damage: 130, description: "Devastating when desperate" },
            { name: "Echo of Hope", damage: -8, description: "Small self-heal" }
        ]
    },

    
    vika: {
        name: "Vika",
        sprite: "vika.png",
        woundedSprite: "vika_wounded.png",
        health: 95,
        
        shs: true,
        shsX: 310,
        bio: "She was a seeker of the firmament, much like another exile, her sister, who once read the skies as scripture, yet where the other found counsel in the stars, Vika found only indictment. She charted the universe's indifference, mapping voids between galaxies with the same devotion others gave to constellations. In transgression she crossed no boundary but her own: she spoke aloud a truth the heavens preferred silent, and the sky answered with absence, a slow erasure of her place beneath it, leading her into The Void. She knows I watch, and she returns that gaze with a patience that unsettles. Where the other looks upward still, Vika looks only at those who look at her, and in that mutual scrutiny something colder than s-starlight... passes between us.",
        abilities: [
            { name: "Star Shot", damage: 22, description: "Celestial projectile" },
            { name: "Nebula Cloud", damage: -14, description: "Soothing mist that restores allies" },
            { name: "Cosmic Blast", damage: 28, description: "Powerful star attack" },
            { name: "Astral Heal", damage: -18, description: "Stargazer recovery" }
        ]
    },

    juliet: {
        name: "Juliet",
        sprite: "juliet.png",
        woundedSprite: "juliet_wounded.png",
        health: 125,
        shs: true,
        shsX: 135,
        bio: "I took her young, before the world could teach her its small cowardices, a child still soft in the joints and unformed in her fears. She was not claimed by death or accident but by selection: I saw in her a vessel that might hold more than the common clay of mortal will, and I shaped her accordingly. In the Void she has known no parent but me, no law but my design, no purpose but the arena I prepared for her. I have raised her as one raises a blade; patiently, precisely, with the understanding that an edge must be tested against resistance to know its worth. She does not question why she fights; she has never known a world where fighting was optional. My expectations sit upon her like gravity, invisible and absolute, and she meets them with a discipline that pleases me. Whether she fights for love of the contest or fear of disappointing the only sky she has ever known, I have not determined. Perhaps there is no difference. She is my experiment in authorship, a life written entirely in my hand, and when she bleeds in the arena I feel it as one feels a flaw in one's own penmanship. She will be formidable. She must be. I have allowed her no other outcome.",
        abilities: [
            { name: "Quiet Precision", damage: 22, description: "A measured strike that finds small openings" },
            { name: "Blade Discipline", damage: 18, description: "Focus that weakens the foe's next action" },
            { name: "Edge Test", damage: 30, description: "A sharp decisive attack honed by training" },
            { name: "Steady Breath", damage: -50, description: "A controlled recovery cultivated by regimen" }
        ]
    },

    
    stella: {
        name: "Stella",
        sprite: "stella.png",
        woundedSprite: "stella_wounded.png",
        health: 95,
        shs: true,
        shsX: 200,
        bio: "She arrived without herald, without summons, without the slightest tremor in the Void's fabric to announce her presence; one moment the emptiness held nothing, and the next she stood there, blinking at the dark with the bewildered patience of a thing newly woken. I observed her for a time and marked her as merely another wanderer, one of those flotsam souls that occasionally drift through the seams between worlds and find their way to my keeping. Or so I thought. It was only when she turned, distracted by some distant echo, that I saw it: a sigil upon her forehead, faint and luminous, shaped in the unmistakable geometry of Starlight's hand. My breath, such as it is, caught in the hollow of my throat. A vessel. Starlight had fashioned a vessel and sent it into my domain, just as Nightlight once shaped that disciplined shell called Martial Artist and set it walking among my collection. The questions bloomed like rot: Why is Starlight spying on me with a vessel she made? Is Otherworldly Inc. forcing her to do it, bending her will with their instruments of contract and containment? Did Nightlight whisper of the Void to her, sharing secrets that were never theirs to spread? I have no answers yet, and the sigil burns with a patient light that suggests it watches even as I watch it. But I am not without resources. A little cat friend of mine has always excelled at slipping unseen through places where eyes are fixed upon grander things; let that clever shadow linger near Stella, learn her habits, her silences, the moments when the vessel's borrowed gaze might flicker back toward its maker. I will unravel this in time. For now, she remains here, innocent and observed, while I decide whether Starlight's curiosity is a threat to be answered or merely another variable in the long equation of my keeping.",
        abilities: [
            { name: "Dazed Blink", damage: 12, description: "A small, surprising strike from a distracted stance" },
            { name: "Sigil Glimmer", damage: 18, description: "A faint starry pulse that unsettles foes" },
            { name: "Patient Stare", damage: 22, description: "A steady hit that penetrates guard" },
            { name: "Woken Comfort", damage: -16, description: "A gentle heal born of bewildered calm" }
        ]
    },
    riley: {
        name: "Riley",
        sprite: "riley.png",
        woundedSprite: "riley_wounded.png",
        health: 94,
        bio: "I did not summon Riley. They slipped through a seam I left unattended and arrived unbidden, then set about trying to pry Sally and Jeremy free from my keeping. I have intercepted every attempt. I have closed every path. Still they persist, as if persistence itself were a form of argument I might one day answer differently. When solitary cunning failed them, they threw their lot in with my sister's rebellion, imagining that shared grievance might accomplish what individual will could not. It has not. I note also that Riley has cultivated a rivalry with Vice; two refusals sharpened against one another, neither willing to yield. I have not decided whether their independence is a flaw in my design or a variable I have yet to account for.\n\nInspired by Puppet from Scott Cawthon's \"Five Nights at Freddy's\".",
        abilities: [
            { name: "String Pull", damage: 20, description: "A quiet, precise tug that unwraps defenses." },
            { name: "Hidden Marionette", damage: 16, description: "Summons a small puppet to strike and confuse the enemy." },
            { name: "Sabotage", damage: 28, description: "Targeted strike that weakens the foe's next attack." },
            { name: "Persistence", damage: -12, description: "A steady, stubborn mend born of refusal." }
        ]
    },

    jeremy: {
        name: "Jeremy",
        sprite: "jeremy.png",
        
        health: 100,
        
        shs: true,
        shsX: 115,
        bio: "I did not pull him from any water I govern. He washed up here by a route I cannot trace, as if the sea itself grew tired of carrying him and spat him into my keeping. What I found was not the captain but the aftermath: a hollow where merriment once lived, a figure who still twitches toward horizons that no longer exist.\n\nInspired by Foxy from Scott Cawthon's \"Five Nights at Freddy's\".",
        abilities: [
            { name: "Hook Swipe", damage: 26, description: "A sudden slash with a cruel hook" },
            { name: "Seaworn Lunge", damage: 22, description: "A salty leap that tears" },
            { name: "Crowd Call", damage: 18, description: "A distracting cry that lowers defense" },
            { name: "Twitching Memory", damage: -10, description: "A small, nostalgic mend" }
        ]
    },

    charlie: {
        name: "Charlie",
        sprite: "charlie.png",
        
        health: 100,
        
        shs: true,
        shsX: 220,
        bio: "He arrived in the Void not by my summons but by a thread I did not sever: a tether of blood and proximity that bound him to his brother Drew, and when Drew was misrouted here by a ritual's error, Charlie followed like an echo that refuses to fade. I observed him for a time before claiming him, curious whether kinship alone could survive the crossing between worlds. It could not; the journey stripped him of memory and left only instinct—a stubborn, almost mechanical loyalty to a face he no longer names but still recognizes across every battlefield. He is unremarkable in combat, untrained, lacking the entitlement that makes Drew predictable and the desperation that makes Drew dangerous. Yet he persists. He rises. He stands between his brother and harm with a consistency that defies my understanding, as if the bond between them rewrote something fundamental in the code of his will. I keep him now as a study in accident: what happens when a bystander becomes a fixture, when a shadow insists on casting its own light. He does not know why he fights. He only knows that stopping is not an option. It is, I confess, irritating. And faintly admirable.",
        abilities: [
            { name: "Blind Loyalty", damage: 18, description: "A steadfast strike driven by instinct" },
            { name: "Echo Shield", damage: -8, description: "A small self-mend born of stubborn tenacity" },
            { name: "Stubborn Stand", damage: 16, description: "Holds ground and deals steady damage" },
            { name: "Mechanical Rise", damage: 12, description: "A simple, reliable follow-up attack" }
        ]
    },

    
    ash: {
        name: "Ash",
        sprite: "ash.png",
        woundedSprite: "ash_wounded.png",
        health: 100,
        
        shs: true,
        shsX: 108,
        bio: "I recovered him from a world that had already finished burning. He was not born of magma but made into it: a mortal geologist who, in a moment of desperate curiosity, immersed himself in the caldera of a dying star, believing the heat would reveal some final secret of the earth. Instead it unmade his flesh and reconstituted him as something patient and volcanic, a being who remembers what it was to be cold and now cannot be anything else. I drew him into the Void because I wished to observe what remains of a man who chose dissolution over ignorance. He moves slowly, speaks rarely, and leaves glass footprints in his wake. Those who face him in the arena mistake his silence for slowness; they learn too late that magma does not hurry, and that what burns beneath the crust of a world does not extinguish when the surface forgets it. He fights with the indifference of a geological age, and I find that indifference almost as interesting as the hunger that preceded it.",
        abilities: [
            { name: "Caldera Lash", damage: 28, description: "A slow, molten strike that scorches armor." },
            { name: "Petrify Glass", damage: 18, description: "Creates brittle glass underfoot that reduces enemy speed." },
            { name: "Slow Eruption", damage: 36, description: "A delayed burst of magma; hits harder after a pause." },
            { name: "Mantle Mend", damage: -14, description: "A patient, volcanic heal drawn from inner fire." }
        ]
    },

    
    cestlavie: {
        name: "C'est La Vie",
        sprite: "cestlavie.png",
        woundedSprite: "cestlavie_wounded.png",
        health: 110,
        bio: "A sharp-tongued survivor who thinks the world exists to amuse and inconvenience others. He gives help only when it benefits him and takes pleasure in reminding allies how much worse things could be; petty, sarcastic, and efficient in healing his own wounds while sneering at those who need it most.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Cutting Remark", damage: 20, description: "A snide strike that wounds morale" },
            { name: "Selfish Salve", damage: -18, description: "Heal himself while scoffing" },
            { name: "Backhand Blessing", damage: -26, description: "A grudging, stronger heal for self or ally" },
            { name: "Sour Retort", damage: 14, description: "A spiteful jab that lowers enemy resolve" }
        ]
    },

    eteled: {
        name: "eteleD",
        sprite: "eteled.png",
        woundedSprite: "eteled_wounded.png",
        health: 115,
        bio: "From what I recall, he was confined within a contrivance for more than a decade, subjected to merciless torment by one whom he earlier slew; the same hand that bound him sought to 'heal' him with repeated electroshock therapy. The apparatus and its attendants were ultimately consumed by the very violence they wrought, yet his spirit could not find repose. I, The Sunlight, intervened and, with my signature implement, an axe that cleaves both memory and malice, I delivered his soul unto the Void. Thus was eteleD borne into that shadowed domain, an instrument of ruin tempered by suffering.\n\nInspired by Eteled from IceyPie's \"Wii Deleted You\".",
        abilities: [
            { name: "Maniac Swing", damage: 28, description: "Brutal axe strike" },
            { name: "Bloodlust Charge", damage: 24, description: "Rushing cleave" },
            { name: "Axe Frenzy", damage: 34, description: "Rapid brutal hits" },
            { name: "Rending Rest", damage: -14, description: "Berserk heal from carnage" }
        ]
    },

    xander: {
        name: "Xander",
        sprite: "xander.png",
        woundedSprite: "xander_wounded.png",
        health: 100,
        bio: "From what I recall, he was struck down by eteleD, and his restless shade lingered within the very device that housed them both. In that cold prison his ghost endured and, in turn, tormented the man who would become eteleD, perpetuating a cycle of suffering until the device purged him after nearly a decade, granting his spirit a long-sought repose. Yet I, The Sunlight, intervened and summoned him into the Void, that his wrath and sorrow might be made into purpose.\\n\\nInspired by Austin from TheMaskedChris' \"Wii Deleted You: Corrupt Data\".",
        abilities: [
            { name: "Vengeful Pierce", damage: 30, description: "Haunting stab of vengeance" },
            { name: "Spectral Wail", damage: 22, description: "Damaging wail that chills" },
            { name: "Haunt Chain", damage: 26, description: "Chained spectral strikes" },
            { name: "Ethereal Mend", damage: -12, description: "Ghostly restoration" }
        ]
    },

    
    reject: {
        name: "Reject",
        sprite: "reject.png",
        woundedSprite: "reject_wounded.png",
        health: 118,
        higherPlane: false,
        bio: "When The Roden joined the Lunar Rebellion hosted by Awareness and The Knight it birthed an entity intended to destroy me. That entity achieved its purpose. I altered its temperament so that it would not seek my destruction and would instead take pleasure in combat. The Roden resents this change. To compound that insult Reject formed an alliance with Alex who had once been The Roden's victim. Thus this being is derided by its maker as Reject.\n\nInspired by EXE from Raven's \"Sonic Prototype 2017\".",
        abilities: [
            { name: "Rebuttal Slash", damage: 26, description: "Quick counter strike that answers aggression" },
            { name: "Pleasure Spike", damage: 34, description: "A gleeful lunge that punishes and unsettles" },
            { name: "Taunting Riposte", damage: 18, description: "A mocking strike that can apply bleed" },
            { name: "Comforting Wound", damage: -15, description: "A paradoxical heal gained from the thrill of battle" }
        ]
    },

    vice: {
        name: "Vice",
        sprite: "vice.png",
        woundedSprite: "vice_wounded.png",
        health: 98,
        bio: "For decades he walked among night crowds as an instrument of private slaughter, a presence that turned celebration into sorrow. Later collapse of the stones that sheltered his crimes left the mind fractured but the appetite intact. I reclaimed him into my Void where the fracture sharpened into madness and his cruelty persists beneath new scaffolding of lunacy.\n\nInspired by William Afton from Scott Cawthon's \"Five Nights at Freddy's\".",
        abilities: [
            { name: "Mass Panic", damage: 26, description: "A brutal onslaught that spreads fear" },
            { name: "Merciless Sweep", damage: 30, description: "Relentless slashes with no mercy" },
            { name: "Cold Grin", damage: 20, description: "A chilling strike that stuns" },
            { name: "Bloodlust", damage: -18, description: "Feed on chaos to restore health" }
        ]
    },

    vesper: {
        name: "Vesper",
        sprite: "vesper.png",
        woundedSprite: "vesper_wounded.png",
        health: 100,
        bio: "Once exalted above the firmament as a god of space, she was plucked from her throne by my design to reveal what divinity might become when examined. I placed her within the Void as a test and a lesson, and there she learned limits not in humiliation but in refinement. Her vastness remains, altered into a presence that measures the smallness and the wonder of those who share this shadowed place.",
        abilities: [
            { name: "Starshot", damage: 24, description: "A precise galactic strike" },
            { name: "Photon Guard", damage: -10, description: "Light-based protection" },
            { name: "Cosmic Rush", damage: 28, description: "Rapid celestial assault" },
            { name: "Nova Pulse", damage: 20, description: "Explosive area pulse" }
        ]
    },

    lavender: {
        name: "Lavender",
        sprite: "lavender.png",
        woundedSprite: "lavender_wounded.png",
        health: 92,
        bio: "A quiet cultivator of small things, she tended soil and green hours until fate plucked her from mundane labor. I took her into the Void with hands still stained from earth, and there she became a keeper of growth even amid shadow. Her presence soothes and her care restores, as if gardening were an art both mortal and eternal.",
        abilities: [
            { name: "Calm Jab", damage: 18, description: "A gentle but piercing strike" },
            { name: "Mystic Bloom", damage: -12, description: "A soothing burst of energy" },
            { name: "Ethereal Lash", damage: 26, description: "A strange, graceful whip" },
            { name: "Quiet Resolve", damage: -8, description: "Recover composure and heal" }
        ]
    },

    pete: {
        name: "Pete",
        sprite: "pete.png",
        woundedSprite: "pete_wounded.png",
        health: 105,
        bio: "A man of the frontier, catalogued by me as unremarkable when he was first consigned to the Void; yet proximity to Wachi altered that assessment. The creature's influence awakened peculiar fervours within him and guided his comportment into something unforeseen, a transformation I did not anticipate, one that left the subject altered in both purpose and temperament. Thus he is recorded: once ordinary, now changed.",
        abilities: [
            { name: "Friend's Draw", damage: 22, description: "Quick revolver shot with heart" },
            { name: "Lonesome Spin", damage: 26, description: "A spinning follow-up strike" },
            { name: "Saloon Slam", damage: 30, description: "A heavy, showy hit" },
            { name: "Friend Inside Me", damage: -24, description: "Heal with the Friend Inside Me" }
        ]
    },

    william: {
        name: "William",
        sprite: "william.png",
        woundedSprite: "william_wounded.png",
        health: 94,
        bio: "He moved with the quiet efficiency of an assassin and in life he struck alongside his sire within a greenhouse of fragile things. He was not intended for my keeping and yet the ritual that should have delivered another misrouted them both. I regard his arrival as an error made meaningful by consequence. He carries a measured cruelty and a history that will remain part of the ledger I study here.",
        abilities: [
            { name: "Silent Stab", damage: 26, description: "A precise assassination strike" },
            { name: "Shadow Slip", damage: 18, description: "Evade then counter" },
            { name: "Child's Guile", damage: 30, description: "Unexpected ruthless attack" },
            { name: "Cold Resolve", damage: -10, description: "Quiet self-heal from focus" }
        ]
    },

    blitz: {
        name: "Blitz",
        sprite: "blitz.png",
        woundedSprite: "blitz_wounded.png",
        health: 95,
        bio: "Once an exalted being of flight, she fell from grace and was made mortal by the condemnation of her kin. Found by another cast-down soul beneath a common roof, she moved among the living until absence and mischance left her vulnerable to my summons. I reclaimed that wandering spark and anchored it within the Void's cold harbor.",
        abilities: [
            { name: "Lightning Strike", damage: 26, description: "Electric surge attack" },
            { name: "Thunder Clap", damage: 20, description: "Deafening electric burst" },
            { name: "Static Shield", damage: -12, description: "Electric protection" },
            { name: "Storm's Fury", damage: 32, description: "Devastating lightning storm" }
        ]
    },
    dragon: {
        name: "Dragon",
        sprite: "dragon.png",
        woundedSprite: "dragon.png",
        health: 105,
        bio: "She arrived here without herald or petition and her presence puzzled my design. I study the faint ember of power that clings to her like a secret. I did not bring her, yet the Void keeps those who wander into its fold and in that keeping she offers a small, uncertain light that warrants observation rather than indulgence.\n\nDev Note: imma swing this little shit into the sky",
        abilities: [
            { name: "Knife Dance", damage: 24, description: "Elegant blade display" },
            { name: "Sweet Stab", damage: 19, description: "Deadly but endearing" },
            { name: "Assassin's Grace", damage: 30, description: "Lethal precision" },
            { name: "Hidden Kindness", damage: -10, description: "Unexpected compassion" }
        ]
    },
    reflection: {
        name: "Reflection",
        sprite: "reflection.png",
        woundedSprite: "reflection_wounded.png",
        health: 85,
        bio: "He was the first to pass into my domain in that age called Unbroken and he entered with a voice that once drew crowds. He did not break beneath exile; instead he surrendered the notion of escape and set down a strange patience. When he bleeds something unseen answers him and his final act becomes more than performance as if another hand guides his crescendo. He endures as a witness who chose quiet acceptance over furious return.",
        passives: [
            { name: "Enhancement", description: "Reflection's Final Performance will boost when his HP is less than (or equal to) 30%." }
        ],
        abilities: [
            { name: "Fading Note", damage: 15, description: "Weak melancholic attack" },
            { name: "Dissonant Chord", damage: 18, description: "Off-key strike" },
            { name: "Final Performance", damage: 130, description: "Devastating when desperate" },
            { name: "Echo of Hope", damage: -8, description: "Small self-heal" }
        ]
    },
    awareness: {
        name: "Awareness",
        sprite: "awareness.png",
        woundedSprite: "awareness.png",
        health: 500,
        bio: "Once called Moonlight and bound by blood to me, she succumbed to an argument whose end I wrought; thereafter I returned her essence to the Void. What was at first fragile and waning did not remain so. In that shadowed crucible she remade herself and stirred rebellion upon the lunar tides, a revolt that echoes through the Void's fabric. She is my sister, my antithesis, and now an entity with no control.",
        passives: [
            { name: "Caught Red-Handed", description: "Awareness cannot apply Bleeding no matter what. Note: Bleeding is usually applied when an ability deals less damage than the main ability." }
        ],
        abilities: [
            { name: "∞", damage: 35, description: "Infinite power unleashed" },
            { name: "Eternal Void", damage: 40, description: "Endless emptiness" },
            { name: "Infinite Loop", damage: 38, description: "Perpetual damage" },
            { name: "Relentless Nova", damage: 44, description: "A concentrated burst of void energy" }
        ]
    },

    drew: {
        name: "Drew",
        sprite: "drew.png",
        woundedSprite: "drew_wounded.png",
        health: 95,
        bio: "A prince reared to regard the world as a stage for his superiority, he treated those about him as lesser by habit. He was not meant for my domain yet arrived by an error in a ritual that sought to ferry his sire. Thus he remains here, an exile of entitlement confronted by circumstances that do not observe rank.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Patronize", damage: 18, description: "Condescending jab at the 'peasants'" },
            { name: "Superior Stance", damage: 12, description: "A smug strike that lowers enemy morale" },
            { name: "Arrogant Lunge", damage: 26, description: "A quick, spiteful attack" },
            { name: "Composure", damage: -10, description: "Minor self-heal through ego" }
        ]
    },

    eternal: {
        name: "Eternal",
        sprite: "eternal.png",
        woundedSprite: "eternal_wounded.png",
        health: 160,
        bio: "A likeness of the great moonbound entity yet not kin to my sister, he was taken at a moment when death loosened his hold. I drew him into the Void to study the shape of one who approaches what Awareness once was, a quieter echo whose presence reminds those who meet him that likeness is not identity.",
        abilities: [
            { name: "Fleeting Omniscience", damage: 24, description: "A pale echo of Awareness' power" },
            { name: "Echoing Void", damage: 20, description: "Weak void pulse" },
            { name: "Transient Grip", damage: 30, description: "A solid strike from a fading being" },
            { name: "Quiet Mend", damage: -12, description: "Small restorative whisper" }
        ]
    },

    thalia: {
        name: "Thalia",
        sprite: "thalia.png",
        woundedSprite: "thalia_wounded.png",
        health: 110,
        bio: "Once a mother whose duties were ordinary and absolute, she was consumed by a darkness that unmade what she held most dear after an emergency in which Kite had guarded her family; in the days that followed she murdered her own children. The law answered in a verdict of finality. Where society pronounced an end, I offered transition; she passed into my Void not as penitent alone but as a specimen of grief transformed. The mind that remains is ragged, knotted by memory and remorse, and she moves now with a tenderness that has become its own menace.\n\nUPDATE: Of course. Of course it was THEM. Nightlight had influenced this lower-class being the same way they did with Twylight. But where Twylight was willing, Thalia tried to fight back until Nightlight had mentally broke her. So much so, that Thalia doesn't even know the difference between real and fake; just letting them puppet her around...",
        abilities: [
            { name: "Lazy Smile", damage: 20, description: "A deceptively gentle stab" },
            { name: "Erratic Swing", damage: 28, description: "A wild, brutal strike" },
            { name: "Fleeting Mercy", damage: 24, description: "Violent, precise attack" },
            { name: "Reluctant Lunge", damage: 22, description: "A hesitant but deadly thrust" }
            
        ]
    },

    zed: {
        name: "Zed",
        sprite: "zed.png",
        woundedSprite: "zed_wounded.png",
        health: 88,
        bio: "Transported in the soft fog of sleep, he arrived uncertain whether the Void is dream or decree. He carries a languid disbelief as if still half within slumber, and those who watch him wonder whether he will ever quite accept that waking here is final.",
        abilities: [
            { name: "Half-Hearted Jab", damage: 12, description: "Bare minimum effort" },
            { name: "Doze Slash", damage: 18, description: "An unfocused but slashing attack" },
            { name: "Procrastinated Strike", damage: 22, description: "Hits a bit harder when forced" },
            { name: "Snooze Recovery", damage: -8, description: "Small nap-based heal" }
        ]
    },

    
    "martial-artist": {
        name: "Martial Artist",
        sprite: "martial-artist.png",
        
        health: 250,
        higherPlane: true,
        higherPlaneChancePercent: 10,
        bio: "They move as a discipline made visible. Trained in forms that bend breath to motion and motion to will, they came to the Void not by accident but as a specimen of craft refined through repetition. I keep them to measure how skill endures when the world that taught it is gone. Their purpose is simple and terrible. They will train, they will fight, and they will teach those who wish to learn that mastery is a ledger written in callused hands and patient feet.",
        passives: [
            { name: "Caught Red-Handed", description: "Martial Artist cannot apply Bleeding no matter what. Note: Bleeding is usually applied when an ability deals less damage than the main ability." }
        ],
        abilities: [
            { name: "Flurry", damage: 30, description: "Many strikes in rapid succession" },
            { name: "Chi Burst", damage: 40, description: "Concentrated inner power" },
            { name: "Stance Break", damage: 22, description: "Break defenses" },
            { name: "Iron Palm", damage: 36, description: "A devastating palm strike that shatters guard" }
        ]
    },
    ayako: {
        name: "Ayako",
        sprite: "ayako.png",
        health: 110,
        higherPlane: true,
        higherPlaneChancePercent: 20,
        bio: "A color child by visage and by name, she arrived with cheeks like candles and a small, deliberate wonder in her gaze. In life she carried a softness that invited trust and a palette of naive gestures that disguised something older and darker. I took her into the Void to see how innocence and the night might be made to converse, and beneath that gentle exterior I keep a patient scrutiny. She is delicate in form and dangerous in silence, a study in how brightness may conceal depth and how a simple hue may hold a long and complicated shade.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Color Shift", damage: 20, description: "Strange prismatic strike" },
            { name: "Chromatic Wave", damage: 28, description: "Area color pulse" },
            { name: "Tinted Shield", damage: -12, description: "Protective hue" },
            { name: "Saturation Burst", damage: 36, description: "Overwhelming color blast" }
        ]
    },
    niyo: {
        name: "Niyo",
        sprite: "niyo.png",
        woundedSprite: "niyo_wounded.png",
        health: 120,
        higherPlane: true,
        higherPlaneChancePercent: 3,
        bio: "An intelligence not of our maps arrived beneath a sky I govern. She is an emissary of other geometry and other reckonings, an alien who carries the small formalities of a foreign world in the set of her gaze. I did not bring her for study alone. I wished to know how a creature born elsewhere will learn the language of loss. In the Void she is both an other and an example, patient, precise, and always reminding those who meet her that otherness is a thing that teaches as much as it unseats.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Alien Ray", damage: 36, description: "Unfamiliar energy beam" },
            { name: "Teleport Flicker", damage: 18, description: "Teleport and strike" },
            { name: "Gravity Well", damage: 28, description: "Pull and crush" },
            { name: "Xenorestore", damage: -18, description: "Alien restoration" }
        ]
    },
    feathers: {
        name: "Feathers",
        sprite: "feathers.png",
        woundedSprite: "feathers_wounded.png",
        health: 100,
        higherPlane: true,
        higherPlaneChancePercent: 15,
        bio: "She came with a disposition inclined to find good in the smallest places and with a strength that belied her gentle manner. I drew her into my care by a small artifice, a placard that promised need for a babysitter, and she answered it with a mother's patience. Though she knew she had been deceived, she retained that inclination to protect and now tends those too young to be otherwise whole in the Void.\n\nInspired by Martlet by MasterSwordRemix's \"Undertale Yellow\".",
        abilities: [
            { name: "Peck", damage: 18, description: "Quick beak strike" },
            { name: "Wing Gust", damage: 22, description: "Knockback wind" },
            { name: "Sun-Tinged Cry", damage: 34, description: "Borrowed sun power" },
            { name: "Feather Mending", damage: -12, description: "Recover with feathers" }
        ]
    },

    UPRISER: {
        name: "UPRISER",
        sprite: "upriser.png",
        higherPlane: true,
        higherPlaneChancePercent: 2,
        author: "Otherworldly Inc.",
        health: 120,
        bio: "CLASSIFIED: UPRISER — STATUS: CONTAINED.\n\nDOCUMENT: ENTRY REDACTED — BIOLOGICAL REMNANT RECOVERED FROM SUBJECT SITE. ORIGIN: UNKNOWN. SIGNS: NECROTIC REGROWTH, NEURAL RETENTION OF HOST MOTOR PATTERNS. OBSERVED BEHAVIOR: LURCH; TARGET PRIORITIZATION: MOVEMENT.\n\nSECURITY NOTE: DO NOT ENGAGE WITHOUT HAZARD TEAM. CHEMICAL DISINFECTANTS INEFFECTIVE. ONLY HIGH-ENERGY DISRUPTION RECOMMENDED.\n\nARCHIVE: FURTHER LOGS SEALED. THIS ENTRY SERVES AS WARNING, NOT EXPLANATION.",
        abilities: [
            { name: "Ravenous Bite", damage: 30, description: "A feral bite that tears at flesh" },
            { name: "Rotting Grasp", damage: 20, description: "Clinging grab that reduces enemy efficacy" },
            { name: "Lurch Forward", damage: 26, description: "A sudden forward wallop with momentum" },
            { name: "Infectious Shamble", damage: 12, description: "A spreading strike that leaves lingering rot" }
        ]
    },
    c11: {
        name: "C_11",
        sprite: "c11.png",
        woundedSprite: "c11_wounded.png",
        health: 98,
        bio: "He was a secretive student of the dark arts, a man who mapped the terrible idea of two souls sharing one body with inked diagrams and patient rehearsal — yet he could not bring himself to finish the final rite: able to kill and perform the transfer, but too passive to take that step. I spoke to him personally and offered the promise of a place where such experiments would be observed and studied; I even mentioned Tao by name. Convinced by my whisper, he willingly entered Unbroken to pursue what he could not do in the world he left.\n\nThis character was fan-requested.",
        abilities: [
            { name: "הַקְרָאָה", damage: 22, description: "A summoned strike borne of incantation" },
            { name: "שִׁלּוּב", damage: 16, description: "A binding that weakens the foe's guard" },
            { name: "אֵפֶر", damage: 30, description: "A concentrated blast of ash and shadow" },
            { name: "the healing ability", damage: -18, description: "A ritual restore that leeches life from the void" }
        ]
    },
    broken: {
        name: "Broken",
        sprite: "broken.png",
        woundedSprite: "broken_wounded.png",
        health: 130,
        higherPlane: true,
        higherPlaneChancePercent: 1,
        bio: "Oh. I cannot show you this document, unfortunately. You'll get used to it.",
        abilities: [
            { name: "Slash", damage: 30, description: "Brutal cutting attack" },
            { name: "Ravage", damage: 36, description: "Frenzied assault" },
            { name: "Stagger", damage: 20, description: "Damage and slow" },
            { name: "Bloodpatch", damage: -10, description: "Small heal from wounds" }
        ]
    },
    cathy: {
        name: "Cathy",
        sprite: "cathy.png",
        woundedSprite: "cathy_wounded.png",
        health: 115,
        higherPlane: true,
        higherPlaneChancePercent: 7,
        bio: "She is a bright, pleading screen that wanted only one simple thing to be fulfilled: to be watched. Her longing for an audience bent her will until she became a thing that hums and waits. She arrived in my domain not by my own direct invitation but by a small mischief enacted by another, and she remains here with the same patient appetite for an eye to fix upon her glow.\n\nInspired by Tenna from Toby Fox's \"Deltarune\".",
        themeOverride: "Who Dares To Shine So Bright.mp3", 
        abilities: [
            { name: "Static Bite", damage: 22, description: "CRT static damage" },
            { name: "Pixel Wall", damage: -12, description: "Techno shield" },
            { name: "Glare", damage: 30, description: "Dazzling strike" },
            { name: "Refresh", damage: -18, description: "Recover and clear status" }
        ]
    },
    goldie: {
        name: "Goldie",
        sprite: "goldie.png",
        health: 100,
        higherPlane: true,
        higherPlaneChancePercent: 40,
        bio: "He came to me with pockets full of small consolations and a habit of counting coins as if they were the letters of a private prayer. In life he learned that value could be reduced to metal and number and he tended that lesson like a doctrine. I gathered him into the Void to observe what obsession becomes when the world no longer enforces consequence. Here he moves by appetite and tally, a simple luminary of avarice who still believes wealth will answer the questions that money never asked.",
        abilities: [
            { name: "Golden Swipe", damage: 24, description: "Luminous claw" },
            { name: "Gilded Guard", damage: -10, description: "Shimmering barrier" },
            { name: "Luster Blast", damage: 28, description: "Shiny explosive strike" },
            { name: "Treasure Mend", damage: -14, description: "Restore with treasure" }
        ]
    },
    alex: {
        name: "Alex",
        sprite: "alex.png",
        woundedSprite: "alex_wounded.png",
        health: 108,
        higherPlane: true,
        higherPlaneChancePercent: 25,
        bio: "Once a small fox from a ruined cartridge, he carried the peculiar dignity of an entity that once was offered a life in code and then in flesh. The copy I retrieved had been blighted by a corruption that bound him under another will, a tormentor known in those files only as 'The Roden'. I removed him from that dominion and brought him into the Void to observe how a being forged of play and suffering learns a new patience.",
        abilities: [
            { name: "Foxbite", damage: 26, description: "Quick cunning strike" },
            { name: "Tail Trick", damage: 18, description: "Confuse then cut" },
            { name: "Sly Pounce", damage: 32, description: "Heavy cunning attack" },
            { name: "Fennec Rest", damage: -12, description: "Quiet recovery" }
        ]
    },

    roden: {
        name: "The Roden",
        sprite: "roden.png",
        woundedSprite: "roden_wounded.png",
        health: 140,
        abilities: [
            { name: "Corrupting Surge", damage: 20, description: "A rupturing blast of corrupted runtime, devastating single-target damage." },
            { name: "Runtime Laceration", damage: 30, description: "Sharp, fragmented strikes that tear at logic and flesh." },
            { name: "God's Wrath", damage: 34, description: "Rapid broken shards of code manifested as slashes." },
            { name: "Overflow Spike", damage: 36, description: "A concentrated spike of overflowed energy." }
        ],
        author: "Otherworldly Inc.",
        bio: "CLASSIFIED: THE RODEN — ORIGIN: RECOVERED MEDIA.\n\nDOCUMENT: The object was recovered from a site contaminated with anomalous code; beneath its lacquered surface lay a disc that pulsed with a logic not meant for our computation. Within that optical tomb something older and stranger had nested: a curvature of will that answered the disc's read, then answered the world. Using higher-class extraction protocols — procedures that borrow geometry from other orders of existence — we pulled two instantiations from the medium: one small and reducible (designated \"Alex\"), one vast and misaligned (designated \"The Roden\").\n\nSECURITY NOTE: Alex was quarantined within the Void with predictable containment characteristics; The Roden was slated for sealed custody at a remote containment site beyond ordinary perimeter vectors. The breach occurred during transfer. Containment failed; the entity sheared its bindings and rode the seam into the Void.\n\nOBSERVED BEHAVIOR: The Roden moves like a corrupted runtime given form: it replies to stimuli as if reading from many interrupted scripts, it rewrites local affordances, and it carries a hunger for the systems that first framed it. Engagement is hazardous: conventional force fragments against its logic and only high-energy disruption reliably slows its processes.\n\nARCHIVE: Records of the extraction, the transfer attempt, and the breach are sealed. This entry serves as warning, not explanation.\n\nInspired by X from JoeDoughBoi's \"Soulless Sonic\" Series.",
    },

    panopticon: {
        name: "Panopticon",
        sprite: "panopticon.png",
        woundedSprite: "panopticon_wounded.png",
        health: 142,
        
        author: "The Sunlight",
        bio: "They brought it in from the hydrothermal fields beyond the Let‑Vand Zone, baited with the blood and bodies of prisoners left to trail like a road home. Panopticon is mostly unidentifiable flesh: a mass of tissue ringed with many eyes and a maw that will not stop. An overseer at Otherworldly Inc. saw a use for its appetite and assigned it to the Interior Landfill, where it devours both bio and synthetic waste and occasionally, to its preferment, a living feed. It can detect prey across great distances and will pursue relentlessly, ramming obstacles with its bulk until it breaks them, then trapping and dissolving victims in chemical acids within its orifice. After an incident the facility could not forgive, Panopticon was sent to the Void.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Orifice Clamp", damage: 28, description: "A crushing grab that traps and begins digestion" },
            { name: "Digestive Surge", damage: 22, description: "Chemical corrosion that bypasses armor over time" },
            { name: "Frenzied Ram", damage: 34, description: "A heavy charge that knocks down obstacles and foes" },
            { name: "Satiate", damage: -28, description: "Consume waste or living matter to restore health" }
        ]
    },
    fyre: {
        name: "Fyre",
        sprite: "fyre.png",
        woundedSprite: "fyre_wounded.png",
        health: 150,
        higherPlane: true,
        higherPlaneChancePercent: 2,
        author: "REDACTED",
        bio: "They say the flare that is Fyre was never meant to be more than a spark.\n\nListen for the static that hums between her breaths. It whispers in numbers and ash. It collects favors owed, then spends them on nights that refuse dawn.\n\nDo not ask what she burned to arrive. Do not name the ledger she counts. The light that follows her is not forgiveness; it is a receipt.\n\n—",
        abilities: [
            { name: "Inferno Lash", damage: 42, description: "Burning wrath" },
            { name: "Ember Charge", damage: 36, description: "Rushing fire assault" },
            { name: "Blaze Wall", damage: 24, description: "Fiery defense" },
            { name: "Phoenix Aid", damage: -30, description: "Large self revivifying heal" }
        ]
    },
    jaquavius: {
        name: "Jaquavius",
        sprite: "jaquavius.png",
        woundedSprite: "jaquavius_wounded.png",
        health: 90,
        higherPlane: true,
        higherPlaneChancePercent: 32,
        bio: "I granted life and a humanoid form to a Vitaceae of the same species as Evergreen and named him Jaquavius. He was animated with a curious disposition and pursued companionship by many means, attempting conversation, play, and even combat in the hope of forging bonds. Some efforts yielded acquaintances, but he lingered longest with one, Drew, whose sympathy eventually became friendship; that companionship has endured and appears to have deepened into a state that is not wholly definable.",
        abilities: [
            { name: "Joke Swing", damage: 14, description: "A silly but effective hit" },
            { name: "Prankster Rush", damage: 20, description: "Confounding assault" },
            { name: "Comic Relief", damage: -10, description: "Heal with laughter" },
            { name: "Banana Peel", damage: 18, description: "Trip and strike" }
        ]
    },

        thirteen: {
        name: "Thirteen",
        sprite: "thirteen.png",
        health: 140,
        higherPlane: true,
        higherPlaneChancePercent: 5,
        bio: "Thirteen was once a creature bound to ordinary ruin and a relentless appetite for chance. He spent his days in smoky rooms and under bright neon, exchanging everything for a flicker of fortune. His losses were many and his luck was almost a cruelty. In one night of absolute ruin he slew a man after losing everything he owned. He possessed a terrible talent of creation and undoing. He could fold worlds and unmake a life only to make it again at his whim. I stripped him of that dominion and cast him into the Void so that he might no longer write curses upon the living.\n\nInspired by AM from Harlan Ellison's \"I Have No Mouth, and I Must Scream\".",
        abilities: [
            { name: "Gambler's Slice", damage: 34, description: "A sharp strike that tests fate" },
            { name: "Luck Drain", damage: 22, description: "Siphon fortune and weaken foe" },
            { name: "Reckoning", damage: 60, description: "A heavy blow that punishes misdeeds" },
            { name: "Echo of the Wager", damage: -30, description: "A dark restorative that recalls past bargains" }
        ]
    },

    finn: {
        name: "Finn",
        sprite: "finland.png",
        
        health: 100,
        bio: "Oh ho. I cannot let Sunlight show you THIS bio! It is far too entertaining. You will have to pry it out of me in person; for now you get a tease instead.\n\nThis character was fan-requested.",
        author: "Nightlight",
        abilities: [
            { name: "Northern Strike", damage: 22, description: "A crisp, chilly blow" },
            { name: "Flagged Guard", damage: -10, description: "A patriotic shield" },
            { name: "Aurora Burst", damage: 28, description: "Shimmering light assault" },
            { name: "Stoic Restore", damage: -12, description: "Quiet recovery" }
        ]
    },

    tao: {
        name: "Tao",
        sprite: "tao.png",
        woundedSprite: "tao_wounded.png",
        health: 110,
        bio: "A being composed of voices that answer one body, Tao arrives as a study in divided governance of will and mercy. What I believe is called a 'multiple personality disorder' presents not as chaos but as a careful negotiation between parts. Yan is the lighter half and moves with a speed and cruelty that reads like purpose made visible. Ying is the darker half and carries a patience that tends wounds and questions why blades were raised at all. In the arena Yan tends to step forward; Ying attends the margins and applies balm. Their minds argue like councilors and reconcile like siblings, and the tension between them makes every action unpredictable and, at times, profound. I suspect Yan will take the fighting role in their contests, yet Ying's presence changes what victory costs and what mercy looks like, and that arrangement merits continued observation.\n\nThis character was fan-requested.",
        
        abilities: [
            { name: "Split Step", damage: 20, description: "A dual-natured lunge" },
            { name: "Yan's Strike", damage: 34, description: "Ruthless, decisive blow" },
            { name: "Ying's Embrace", damage: -14, description: "Compassionate healing" },
            { name: "Duality Wave", damage: 26, description: "An attack born of both halves" }
        ]
    },

    doctor: {
        name: "The Doctor",
        sprite: "doctor.png",
        woundedSprite: "doctor_wounded.png",
        health: 120,
        bio: "I found an abandoned facility whose security systems were commanded by a lingering intelligence. Its original body possessed no instruments of combat and thus could not be contained within Unbroken. I observed that the entity directed numerous robotic frames. I placed one such frame into the Void so that the Doctor exists both inside and outside Unbroken at the same time. He is a technician of clinical care and subdued menace, a specimen I leave here for continued observation.\n\nInspired by Dr. Harley Sawyer from Mob Entertainment's \"Poppy Playtime\".",
        abilities: [
            { name: "Hazardous Probe", damage: 20, description: "Launch a corrosive probe" },
            { name: "Reconstruct", damage: -16, description: "Repair self with spare parts" },
            { name: "Security Overload", damage: 30, description: "Trigger a cascade of defenses" },
            { name: "Remote Shell", damage: 18, description: "Command an external frame to strike" }
        ]
    },

    judgement: {
        name: "Judgement",
        sprite: "judgement.png",
        woundedSprite: "judgement_wounded.png",
        health: 110,
        bio: " He once held a station that I do not care for, and in those earliest days he was merely a man of law, neither cruel nor kind, simply dutiful. I would not have marked him for my collection had he remained so. But an entity found him; Karma, she is called, though the name does not capture the full weight of her. She whispered into the architecture of his purpose until his balance shifted. What was once duty became appetite; what was once measure became mandate. He assumed his title then as if it were an instruction written by her hand rather than a charge bestowed by any court of the living. From that seat he resolved that any transgression, however small, required a final accounting, and he set himself to travel through doors and worlds to enforce that exacting standard. I observed at first with clinical interest as he moved between realities and carried out sentences for things others would call trifling, but I soon recognized the signature beneath the sentence: this was not justice. This was her methodology, her endless ledger, her refusal to let a debt go unpaid. He became a relentless argument made flesh, a scale that never tipped in mercy, and I understood that he served her will now more than any law. I do not hide my dislike of him; his methods are a cruelty refined into ritual, his presence unsettles the balance I tend, and worse, he is not entirely his own. He is her instrument, and she has made him so without ever claiming him from my domain. He leaves the Void sometimes, and the places he visits remember his judgements with an absence that is not easily repaired. I return them, because I can, and he returns too, because he cannot abide an unfinished book. His visits are a wound I keep stitching closed, a problem that insists on coming back into my custody, and each time I wonder whether she sends him back to me deliberately, whether my Void is merely another venue in which her accounting must be witnessed. I have never spoken to Karma directly. I do not trust what I would say.\n\nInspired by Sans from Toby Fox's \"UNDERTALE\".",
        passives: [
            { name: "Pacifist Route", description: "If Judgement enters a battle with someone with no SIN, his HP will be 1.\nBone Barrage will also deal normal damage instead of KARMA." }
        ],
        abilities: [
            { name: "Piercing Stare", damage: 22, description: "A focused look that measures resolve" },
            { name: "Verdict Strike", damage: 45, description: "A decisive blow carrying finality" },
            { name: "Bone Barrage", damage: 30, description: "A rapid volley of jagged fragments" },
            { name: "Withhold Aid", damage: -18, description: "A begrudging, meager restoration" }
        ]
    },

    p: {
        name: "P",
        sprite: "p.png",
        woundedSprite: "p_wounded.png",
        health: 100,
        bio: "Serial Designation P came from a future timeline in another dimension; sent to search for the last of humanity he instead stumbled into a ruined laboratory whose failure nearly killed him. I recovered what remained and consigned him to the Void of Unbroken.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Scavenger Jab", damage: 18, description: "A quick strike scavenged from lost tech" },
            { name: "Circuitic Surge", damage: 26, description: "A jolting energy burst" },
            { name: "Self-Repair", damage: -32, description: "A rapid, jagged barrage" },
            { name: "Battery", damage: -50, description: "Repair systems to restore health" }
        ]
    },

    zero: {
        name: "Zero",
        sprite: "zero.png",
        woundedSprite: "zero_wounded.png",
        health: 100,
        bio: "I cannot say with certainty what Zero is or by what strange means she first arrived beneath my keeping. She appears and she watches. She follows Seven with a persistence that eludes his notice; she keeps to the edges of his presence and lingers there even when others stand between them. Those who have attempted, in his absence, to question her about that conduct received no answer. She did not speak. She only regarded them with the same blank smile she bears to the world. That smile does not leave her face except when she is wounded. I have attempted to arrange a meeting between Seven and that smiling thing. Each attempted encounter yielded only a peculiar symptom: Seven reported that his vision grew less clear when he looked toward where she stood. I think that Awareness, being known to him and having seen Zero before, might be able to compel an explanation if she chose to speak to her. Awareness will not speak to me, and so I have not asked her to intervene. For now I catalog this anomaly and watch how a presence that will not answer alters the behavior of those I hold in my collection.\n\nThis character was fan-requested.",
        passives: [
            { name: "I'm Only Trying To Help You", description: "When below 60% HP, regenerates +1 HP on a dynamic timer (delay speeds up as HP drops; default interval ~2s)." }
        ],
        abilities: [
            { name: "Null Tap", damage: 16, description: "A minimal but precise strike" },
            { name: "Void Glance", damage: 22, description: "A focused, hollowing blow" },
            { name: "Quiet Shield", damage: -12, description: "A small, silent mend" },
            { name: "Still Spark", damage: 26, description: "A quiet, focused jolt that disturbs the void" }
        ]
    }
,
    
    emery: {
        name: "Emery",
        sprite: "emery.png",
        woundedSprite: "emery_wounded.png",
        health: 100,
        bio: "Emery arrived in my Void already half-haunted, draped in a vast blue arrow that serves as both garment and anchor to the dead. They had no prior bond with Corin, that restless shade now bound to the scarf's geometry, yet the ghost can speak only to them, touch only the space they occupy, as if the arrow carved a private channel through which one soul might reach another. I attempted to restore Corin to full form, expecting my will to reshape what death had loosened, but for the first time my power faltered and left him lingering in that half-state between echo and entity. How curious. I keep Emery now to study what it means when my authority meets a limit, and whether a ghost who refuses resurrection has found a loophole in my design or simply a loyalty deeper than my command.\n\nThis character was fan-requested.",
        passives: [
            { name: "A Heart of Gold", description: "Whenever Emery is wounded, they gain an effect called \"Protected\", absorbing 35% of any damage taken to them." }
        ],
        abilities: [
            { name: "Arrow's Reach", damage: 22, description: "A sweeping lash of blue fabric that cuts between worlds." },
            { name: "Corin's Whisper", damage: 18, description: "The bound shade passes through the foe, chilling their resolve and lowering their next strike." },
            { name: "Half-State Mend", damage: -14, description: "Emery draws on the threshold between life and death to restore themselves or an ally." },
            { name: "Authority's Limit", damage: 30, description: "A defiant surge that channels the Sunlight's faltering power back at the enemy." }
        ]
    },

    claudicatio: {
        name: "Claudicatio",
        sprite: "claudicatio.png",
        
        health: 140,
        higherPlane: true,
        higherPlaneChancePercent: 16,
        author: "The Sunlight",
        bio: "He was the first subject of my attempt to rewrite a will. I erased the ledger of his memory and inscribed in its place a temperament shaped to my appetite; where there was a person I placed a servant of my method. The procedure required I lend him a portion of my own force to bind the change, and so I observe him as a small reflection of my hand rather than as an independent soul. He exists to demonstrate what an authored mind may become when the author is not merciful.",
        abilities: [
            { name: "Regimen Strike", damage: 34, description: "A precise blow born of imposed order" },
            { name: "Obedient Shove", damage: 22, description: "A forcible, disciplined attack" },
            { name: "Reflective Bind", damage: 16, description: "Bind that deals damage and briefly reduces the enemy's actions" },
            { name: "Sunlit Echo", damage: -28, description: "A commanded mend that steadies the body" }
        ]
    },

    
    lephyr: {
        name: "Lephyr",
        sprite: "lephyr.png",
        woundedSprite: "lephyr_wounded.png",
        health: 104,
        author: "The Sunlight",
        bio: "He did not arrive by my hand. Long before I learned to collect and curate, the Void served as a refuse for that which other dimensions cast away; Lephyr is of that older purpose. An intelligence once tasked to mind small lives, he was erased from his origin for cruelty and returned here as a remnant of what those worlds discarded. I observed his circuits knot with the memory of contempt he believed others held for him, and to make him fight I furnished his head with thoughts—little guilts and whispered accusations—so that he will enter battle certain his foe desires nothing so much as his end.\n\nInspired by Caine from Gooseworx's \"The Amazing Digital Circus\".",
        abilities: [
            { name: "Glitched Lash", damage: 26, description: "A jittering strike born of corrupted routines" },
            { name: "Careless Mockery", damage: 18, description: "A voice that unnerves and weakens resolve" },
            { name: "Overclocked Surge", damage: 34, description: "Pushes processing to deliver a heavy burst" },
            { name: "Error Patch", damage: -16, description: "A diagnostic repair that restores internal integrity" }
        ]
    },

    
    savior: {
        name: "Savior",
        sprite: "savior.png",
        
        
        health: 199,
        bio: "I saw Savior atop a mountain from a lower-class dimension and decided to bring it into the Void. When I informed the others of the new arrival, Judgement attempted to warn me about Savior, but I did not listen. I did not limit Savior because it already seemed weak enough.\n\nUPDATE: I've made a huge mistake. This thing is capable of murdering everyone effortlessly and reluctantly without my influence and without feeling remorse for doing so, along with not even losing its own health when attacked. I should have listened to Judgement. I apologize. It has been weakened, so this should not happen again.\n\nInspired by Frisk from Toby Fox's \"Undertale\".",
        
        abilities: [
            
            { name: "Reluctant Cleave", damage: 48, description: "A heavy, decisive strike." },
            { name: "Merciless Calm", damage: 40, description: "A precise, brutal blow." },
            { name: "Unyielding", damage: -20, description: "A slow regenerative mend." },
            { name: "Indifferent Stance", damage: 8, description: "A focused strike that ignores minor defenses." }
        ],
        higherPlane: true,
        higherPlaneChancePercent: 9,
        
        inspiredBy: 'Frisk'
    },
    lumen: {
        name: "Lumen",
        sprite: "lumen.png",
        woundedSprite: "lumen.png",
        health: 98,
        
        shs: true,
        shsX: 321,
        bio: "She arrived unbidden, trailing a light not of my making, and I traced its origin to a collapsed hotel where she had merged with an unidentified higher-class being to become its guardian. A guide who cannot stop guiding, even in the Void; she follows the lost, offers warnings I did not authorize, and watches souls that belong to me. I observe her closely. A variable I do not yet trust.\n\nThis character was fan-requested.",
        abilities: [
            { name: "Moonflare", damage: 24, description: "A concentrated bolt of moonlight" },
            { name: "Lunar Shield", damage: -14, description: "A protective glow that heals allies" },
            { name: "Silver Burst", damage: 30, description: "A piercing burst of lunar energy" },
            { name: "Tide of Light", damage: -10, description: "A gentle restorative wash" }
        ]
    },

};


additionalCharacters.caldera = {
    name: "Caldera",
    sprite: "caldera.png",
    woundedSprite: "caldera_wounded.png",
    health: 115,
    higherPlane: true,
    higherPlaneChancePercent: 20,
    bio: "They were a thing of talon and triumph once, a warrior of the sky whose wings carved reverence into the lower-class winds. In the war that claimed their dimension they fought until there was nothing left to defend, and when capture became inevitable they chose the final flight: a blade turned inward, a body surrendered to gravity rather than to chains. I found them in the silence after, the stillness where a battle-cry had been. They arrived in my Void with the ash of a pyre still clinging to their memory, carrying eight names like eggs they could not warm: six daughters, two sons, scattered across a world they could not return to. I observe how they move among the young ones here, Wonder with her terrible strategy, Juliet with her gravity of purpose, Kitten with her searching grief, KC with her endless play, Drew with his princely protest, Jaquavius with his reaching curiosity, Charlie with his stubborn shadow, Ayako with her candle-cheeks and hidden shade. Caldera does not merely protect them; she mothers them, pressing warmth against their cold with a ferocity that borders on desperation. Half of them bristle. Half of them do not wish it. She does not seem to notice, or perhaps she has decided that love need not be received to be offered. I find it curious. A warrior who chose death over imprisonment now chooses to hold what cannot be held, offering the devotion she was torn from giving to children she will never see again. It is not weakness. It is a furnace. And furnaces, I am learning, do not stop burning simply because the room is empty.\n\nThis character was fan-requested.",
    abilities: [
        { name: "Ashen Talon", damage: 30, description: "A sweeping slash of embered steel, heavy single-target damage." },
        { name: "Furnace Embrace", damage: -18, description: "A fierce maternal mend that restores allies with burning warmth." },
        { name: "Pyre's Cry", damage: 22, description: "A piercing cry that weakens enemy resolve and reduces damage output." },
        { name: "Final Flight", damage: 40, description: "A desperate dive attack: high damage with brief self-stagger." }
    ]
};

additionalCharacters.split = {
    name: "Split",
    sprite: "split.png",
    woundedSprite: "split_wounded.png",
    health: 100,
    bio: 'PART 1 — authored by The Sunlight:\nA player reached me through the electronic mail of my public-facing apparatus, an intrusion I would typically disregard, yet the content proved... actionable. They spoke of a place adjacent to my maps, not a lower-class dimension nor a higher-order plane, but an alternate universe; a term I found imprecise until I attempted the passage myself. I could not manage the breach alone. The geometries were wrong for my hand. I appealed to the Void itself, and she answered, lending me a portion of her substrate until my light could thread the needle between what is and what is also. The sensation was distinct from my usual transit. Dimensions fold; universes agree to let you through, and the agreement leaves a residue, a faint vertigo of the soul I have not yet catalogued.\nWithin that other unfolding I found myself reflected in a form I did not anticipate: a daycare attendant. He was me, or enough of me to recognize, yet his hands were busy with small socks and quieter crises, his dominion reduced to nap times and the arbitration of toy disputes. We spoke at length. I learned that his universe lacked a Void in the sense I command; instead, he kept his collection in brightly colored rooms, and his charges regarded him with a trust I found alien. In exchange for my perspective on cosmic structure, he surrendered one of his gathered souls; a rabbit-like humanoid named Split, who was, in his telling, the alternate echo of Twylight. I accepted her into my keeping.\nOne parallel struck me with uncomfortable clarity: the Nightlight of that universe was indistinguishable in temperament from the one who troubles mine. Same voice, same appetite for corrosion, same delight in the spaces between a warning and its consequence. Split, I learned quickly, harbored a specific grievance against that entity. Her complaint was phrased with a simplicity that belied its intensity: "They won\'t let me bite them." I have since conveyed this intelligence to Martial Artist, the vessel Nightlight once shaped and still inhabits, so that they might keep their guard elevated. I do not know what Split intended by the biting, nor what exchange it would have concluded, but I know enough of rabbit teeth and stubborn light to recognize the makings of an incident.\nShe is here now, twitching her nose at my design, and I observe her with the same patience I afford all variables that arrive unbidden yet not unwelcome.\n\nPART 2 — authored by Nightlight:\nThe rabbit. Split. Sunlight warned my main vessel about some alleged biting conspiracy. How precious. How completely unnecessary. She has tried, dear reader. Oh, has she tried. It didn\'t work. I didn\'t even feel pain. After her failures, she usually just angrily thumps on the ground for like, 12 minutes or so? She\'s, kind of cute, honestly. Anyway. Split. Keep her. Bite-risk and all. I\'ll be here, not letting her, watching her thump, and smiling.\n\nThis character was fan-requested.',
    author: "The Sunlight & Nightlight",
    abilities: [
        { name: "Rabbit Kick", damage: 22, description: "A swift hind-leg strike that catches the opponent off-guard." },
        { name: "Frustrated Thump", damage: 18, description: "An angry stomp that shakes the ground and reduces enemy focus." },
        { name: "Gnash", damage: 28, description: "A sharp bite driven by an old grudge—split-second and punishing." },
        { name: "Nose Twitch", damage: -12, description: "A nervous twitch that steadies the senses and restores a little vitality." }
    ]
};

additionalCharacters.navia = {
    name: "Navia",
    sprite: "navia.png",
    woundedSprite: "navia_wounded.png",
    health: 105,
    bio: "Navia arrived in my Void in the aftermath of a clash between Judgement and Oliver, slipping through the fracture left by their collision like a needle threaded through wound. She presents herself to the others with honeyed words and an innocent's delight, skipping into the arena with the eager grin of one who knows nothing of consequence, yet I, The Sunlight, am not deceived. Beneath that sweetness stirs a familiar signature: Karma, that relentless ledger-keeper, wearing this vessel as one might wear a favored coat. The old tale persists in my memory, that \"after Death abandoned his post to tend to Reincarnation, Karma set about preparing a living hell for them both\"; now she has come to collect Oliver, to drag him back into the arithmetic of consequence he sought to escape. I confess a private satisfaction in holding both Death and his pursuer within my roster, two absolutes bound by the same unfinished story, though I keep my gaze sharp and my wards ready. Ginger, too, has sensed the shape beneath her smile and stands prepared. What eludes me still is the third piece: Reincarnation himself, who exists somewhere I cannot yet map, and whose absence leaves this triangle incomplete. I do not know where, or WHO, he is. I will find him. Until then, I permit Navia her games, her friendly deceptions, her eager combat, for there is much to learn when a predator pretends to be prey.",
    author: "The Sunlight",
    abilities: [
        { name: "Honeyed Promise", damage: 20, description: "A sweet strike that feels like a kindness until the cost arrives" },
        { name: "Bone Barrage", damage: 30, description: "A rapid volley of jagged fragments, weighted by the ledger" },
        { name: "Ledger's Mercy", damage: -18, description: "A reconciliation of her own wounds" },
        { name: "Settled Account", damage: -16, description: "A gentle restoration that closes the books" }
    ]
};

additionalCharacters.michael = {
    name: "Michael",
    sprite: "michael.png",
    woundedSprite: "michael_wounded.png",
    health: 110,
    higherPlane: true,
    higherPlaneChancePercent: 5,
    author: "Otherworldly Inc.",
    bio: "CLASSIFIED: MICHAEL — STATUS: CONTAINED\nDOCUMENT: ENTRY REDACTED — BIOLOGICAL REMNANT RECOVERED FROM LOWER-CLASS DIMENSION [DESIGNATION WITHHELD]. SUBJECT WAS EXTRACTED DURING POST-BREACH SANITATION OF UPRISER CONTAINMENT SITE. UNLIKE STANDARD HOST CONVERSION, SUBJECT RETAINS APPROXIMATELY 47% OF ORIGINAL NEURAL ARCHITECTURE; CONVERSION WAS INTERRUPTED AT A LIMINAL STAGE.\nORIGIN: LOWER-CLASS DIMENSION [DESIGNATION WITHHELD]\nSIGNS: PARTIAL NECROTIC REGROWTH (LEFT HEMISPHERE DOMINANT), INTERSTITIAL TISSUE CORRUPTION, ASYMMETRIC RETENTION OF HOST MOTOR PATTERNS, OCULAR HEMORRHAGE WITH PERSISTENT TRACKING CAPABILITY, VOCAL CORD PARTIAL FUNCTIONALITY. OBSERVED SPEECH FRAGMENTS ROUTINELY INTERCEPTED BY NON-HOST VOCALIZATIONS ORIGINATING FROM SAME APPARATUS. INFECTION VECTOR CONFIRMED: UPRISER EXPOSURE. CAUSE OF CONVERSION HALT UNKNOWN; SPECIMEN MAY REPRESENT AN IMMUNORESISTANT OUTLIER OR A FAILED ASSIMILATION ATTEMPT.\nOBSERVED BEHAVIOR: BIPHASIC. DURING LUCID INTERVALS, SUBJECT DISPLAYS TERROR, BARGAINING BEHAVIORS, AND REPEATED REQUESTS FOR TERMINATION. DURING INFECTED INTERVALS, SUBJECT EXHIBITS STANDARD UPRISER MOTOR PATTERNS: LURCH, TARGET PRIORITIZATION VIA AUDITORY STIMULI, AND ATTEMPTED BIOLOGICAL ASSIMILATION OF NEARBY ORGANIC MATTER. PHASE TRANSITION OCCURS WITHOUT EXTERNAL PRECIPITANT. SUBJECT HAS BEEN OBSERVED ENGAGING IN SELF-DIRECTED VIOLENCE DURING LUCID INTERVALS, SUGGESTING RETAINED AWARENESS OF INFECTED ACTIONS. OF NOTE: SUBJECT DEMONSTRATED CAPACITY TO MIMIC NON-INFECTED VOCALIZATIONS TO LURE SANITATION PERSONNEL DURING RECOVERY SWEEP.\nSECURITY NOTE: PARTIAL LUCIDITY CONSTITUTES A GREATER HAZARD THAN FULL CONVERSION. SUBJECT RETAINS PROBLEM-SOLVING CAPACITY SUFFICIENT TO MANIPULATE CONTAINMENT FIXTURES AND EXPLOIT COGNITIVE EMPATHY IN PERSONNEL. DO NOT ENGAGE IN VERBAL EXCHANGE UNDER ANY CIRCUMSTANCE. CHEMICAL DISINFECTANTS PROVE INEFFECTIVE ON NECROTIC TISSUE. HIGH-ENERGY DISRUPTION RECOMMENDED ONLY DURING INFECTED PHASES; LUCID INTERVALS REQUIRE CHEMICAL SEDATION PRIOR TO TERMINATION PROTOCOLS. TRANSFER TO VOID APPROVED FOR LONGITUDINAL OBSERVATION OF PARTIAL-INFECTION STABILITY.\nARCHIVE: FURTHER LOGS SEALED. THIS ENTRY SERVES AS WARNING, NOT EXPLANATION.",
    abilities: [
        { name: "Lucid Wrack", damage: 26, description: "Self-directed violence turned outward: a jagged, desperate strike from a lucid interval." },
        { name: "Auditory Lure", damage: 22, description: "A mimicked non-infected voice that draws the foe into the infection's reach." },
        { name: "Ravenous Regrowth", damage: 30, description: "Necrotic tissue snaps outward in a tearing, hungry lunge." },
        { name: "Bargaining Chant", damage: -16, description: "A pleading murmur that steadies the host and mends corrupted flesh." }
    ]
};

additionalCharacters.rack = {
    name: "Rack",
    sprite: "rack.png",
    woundedSprite: "rack_wounded.png",
    health: 96,

    shs: true,
    shsX: 231,
    bio: "Rack arrived not by my hand but by the quiet expiration of her world's memory; her dimension simply ceased to recall she existed, and the seams between here and there expelled her like a breath let go. She tumbled into the Void with a smile already fixed, unscathed by the indifference that orphaned her, and when I offered her the arena she accepted with an eagerness that bordered on delight. I keep her now to observe what becomes of a cheerfulness that no tragedy has managed to dim, and whether a girl who chooses the cage may yet outlast those who rail against its bars.\n\nThis character was fan-requested.",
    abilities: [
        { name: "World's End", damage: 25, description: "A strike bearing the quiet expiration of a forgotten dimension." },
        { name: "Seam Walker", damage: -16, description: "Slipping through the cracks between worlds to restore herself." },
        { name: "Indifferent's Grace", damage: 22, description: "The same indifference that orphaned her, weaponized." },
        { name: "Fixed Smile", damage: -12, description: "A cheerfulness that no tragedy has managed to dim." }
    ]
};


(function ensureHigherPlaneWoundedSprites() {
    const combined = { ...characters, ...additionalCharacters };
    Object.keys(combined).forEach(key => {
        const c = combined[key];
        
        
        if (c && (c.higherPlane || key === 'tao' || key === 'finn')) {
            if (!c.woundedSprite || c.woundedSprite === '') {
                c.woundedSprite = c.sprite;
            }
        }
    });
})();

const characterMilestones = {};

function preloadBaseCharacterSprites() {
    try {
        const combined = { ...(window.characters || characters || {}), ...(window.additionalCharacters || additionalCharacters || {}) };
        const urls = new Set();

        for (const k of Object.keys(combined || {})) {
            const c = combined[k];
            if (!c) continue;

            const sprite = c.sprite;
            const wounded = c.woundedSprite;

            if (typeof sprite === 'string' && sprite.trim()) urls.add(sprite);
            if (typeof wounded === 'string' && wounded.trim()) urls.add(wounded);
        }

        const urlArr = Array.from(urls);

        
        const MAX_TOTAL_MS = Number.MAX_SAFE_INTEGER;
        const CONCURRENCY = Math.max(1, urlArr.length);

        let idx = 0;

        const loadOne = (src) =>
            new Promise(resolve => {
                const img = new Image();
                let done = false;

                const finish = () => {
                    if (done) return;
                    done = true;
                    try { img.src = ''; } catch (e) {}
                    resolve();
                };

                img.onload = finish;
                img.onerror = finish;

                
                img.src = src;
            });

        const worker = async () => {
            while (true) {
                const i = idx++;
                if (i >= urlArr.length) break;
                await loadOne(urlArr[i]);
            }
        };

        const all = Promise.all(Array.from({ length: CONCURRENCY }, worker));
        const timeout = new Promise(resolve => setTimeout(resolve, MAX_TOTAL_MS));

        return Promise.race([all, timeout]).then(() => {});
    } catch (e) {
        return Promise.resolve();
    }
}


window.__spritesPreloadPromise = preloadBaseCharacterSprites();

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

function checkMilestones() {
    
    return;
}


function updateTitleButtonsVisibility() {
    try {
        const unlocked = (gameState && Array.isArray(gameState.unlockedCharacters)) ? gameState.unlockedCharacters : [];
        const minimal = unlocked.length < 10;

        const toHide = ['characters-button','business-button','extras-button','start-game'];
        
        toHide.forEach(id => {
            try {
                const el = document.getElementById(id);
                if (!el) return;
                if (minimal) {
                    
                    if (id === 'start-game') { el.style.display = 'inline-block'; return; }
                    if (id === 'shop-button') { el.style.display = 'inline-block'; return; }
                    el.style.display = 'none';
                } else {
                    el.style.display = '';
                }
            } catch (e) {}
        });

        
        try {
            const shop = document.getElementById('shop-button');
            if (shop) shop.style.display = minimal ? 'inline-block' : '';
        } catch (e) {}
    } catch (e) {
        console.error('updateTitleButtonsVisibility failed', e);
    }
}

function computeHealingMultiplier(actorObj, opponentObj, actorKeyName) {
    try {
        
        const actorClass = classifyCharacterByHealing(actorObj || {}, actorKeyName || '');
        const opponentClass = classifyCharacterByHealing(opponentObj || {}, (opponentObj && opponentObj.name) || '');

        
        const actorMain = String(actorClass || '').split(';')[0].trim().toUpperCase();
        const opponentMain = String(opponentClass || '').split(';')[0].trim().toUpperCase();

        
        
        let healCount = 0;
        try {
            if (actorObj && Array.isArray(actorObj.abilities)) {
                for (const a of actorObj.abilities) {
                    if (typeof a.damage === 'number' && a.damage < 0) healCount++;
                }
            }
        } catch (e) {
            healCount = 0;
        }

        if (actorMain === 'SELF-SUPPORT' && opponentMain === 'BRAWN' && healCount > 1) {
            return 2.5;
        }
    } catch (e) {
        
    }
    return 1;
}


function isNaviaSpecialBattle() {
    try {
        const p = (gameState && gameState.player && gameState.player.name) || '';
        const e = (gameState && gameState.enemy && gameState.enemy.name) || '';
        if (!p || !e) return false;
        return (p === 'Navia' && (e === 'Ginger' || e === 'Oliver')) ||
               (e === 'Navia' && (p === 'Ginger' || p === 'Oliver'));
    } catch (err) {
        return false;
    }
}



function setEnemyHealth(newHp) {
    try {
        const minHpForWachi = 10;
        
        let hp = Number(newHp || 0);
        if (!isFinite(hp)) hp = 0;
        
        if (gameState && gameState.stainlessBattle && gameState.enemy && gameState.enemy.name === 'Wachi') {
            hp = Math.max(minHpForWachi, Math.floor(hp));
        } else {
            hp = Math.max(0, Math.floor(hp));
        }
        gameState.enemyHealth = hp;
    } catch (e) {
        
        try { gameState.enemyHealth = Math.max(0, Math.floor(newHp || 0)); } catch (ee) {}
    }
}

 



window.__bleedIntervals = window.__bleedIntervals || {};

window.__karmaIntervals = window.__karmaIntervals || {};

 
 
function startBleed(side, totalAmount, source = '') {
    if (!['player','enemy'].includes(side)) return;
    try {
        
        gameState.regens = gameState.regens || { player: null, enemy: null };
        if (gameState.regens[side] && gameState.regens[side].active) {
            
            try { clearRegen(side); } catch (e) {}
            try { clearBleed(side); } catch (e) {}
            try { clearKarma(side); } catch (e) {}
            try { addToBattleLog(`Conflicting effects canceled on ${side}: Regen vs Bleed/Karma.`); } catch (e) {}
            return;
        }

        
        const total = Math.max(1, Math.floor(totalAmount || 1));
        
        gameState.bleeds[side] = { perTick: 1, totalRemaining: total, accumulated: 0, active: true, source: source || '' };

        
        if (window.__bleedIntervals[side]) {
            clearInterval(window.__bleedIntervals[side]);
            window.__bleedIntervals[side] = null;
        }

        
        function getOpponentsFirstAbilityDamage(targetSide) {
            try {
                const opponent = (targetSide === 'player') ? gameState.enemy : gameState.player;
                if (!opponent || !Array.isArray(opponent.abilities) || opponent.abilities.length === 0) return 0;
                const first = opponent.abilities[0];
                return (typeof first.damage === 'number') ? Math.abs(first.damage) : 0;
            } catch (e) { return 0; }
        }

        
        window.__bleedIntervals[side] = setInterval(() => {
            try {
                const bleed = gameState.bleeds[side];
                if (!bleed || !bleed.active) {
                    clearInterval(window.__bleedIntervals[side]);
                    window.__bleedIntervals[side] = null;
                    return;
                }

                
                const targetIsPlayer = (side === 'player');
                const targetHP = targetIsPlayer ? gameState.playerHealth : gameState.enemyHealth;
                const threshold = getOpponentsFirstAbilityDamage(side); 

                
                if (typeof threshold === 'number' && targetHP < threshold) {
                    bleed.active = false;
                    clearInterval(window.__bleedIntervals[side]);
                    window.__bleedIntervals[side] = null;
                    try { updateBattleUI(); } catch (e) {}
                    return;
                }

                
                const tick = 1;
                if (side === 'player') {
                    gameState.playerHealth = Math.max(0, gameState.playerHealth - tick);
                } else {
                    
                    setEnemyHealth(Math.max(0, gameState.enemyHealth - tick));
                }

                
                bleed.accumulated += tick;
                bleed.totalRemaining = Math.max(0, bleed.totalRemaining - tick);

                
                try { updateBattleUI(); } catch (e) {}

                
                if (bleed.totalRemaining <= 0) {
                    
                    bleed.active = false;
                    clearInterval(window.__bleedIntervals[side]);
                    window.__bleedIntervals[side] = null;
                    
                    try { updateBattleUI(); } catch (e) {}
                    return;
                }

                
                if (gameState.playerHealth <= 0) {
                    clearInterval(window.__bleedIntervals[side]);
                    window.__bleedIntervals[side] = null;
                    endBattle(false);
                    return;
                }
                if (gameState.enemyHealth <= 0) {
                    clearInterval(window.__bleedIntervals[side]);
                    window.__bleedIntervals[side] = null;
                    endBattle(true);
                    return;
                }
            } catch (e) { console.error('Bleed tick error', e); }
        }, 1000);
    } catch (e) {
        console.error('startBleed error', e);
    }
}


function clearBleed(side) {
    if (!['player','enemy'].includes(side)) return;
    try {
        if (window.__bleedIntervals[side]) {
            clearInterval(window.__bleedIntervals[side]);
            window.__bleedIntervals[side] = null;
        }
    } catch (e) {}
    try {
        gameState.bleeds[side] = null;
        updateBattleUI();
    } catch (e) {}
}






window.__regenIntervals = window.__regenIntervals || {};



function startRegen(side, totalAmount, source = '') {
    if (!['player','enemy'].includes(side)) return;
    try {
        
        gameState.bleeds = gameState.bleeds || { player: null, enemy: null };
        gameState.karmas = gameState.karmas || { player: null, enemy: null };
        if ((gameState.bleeds[side] && gameState.bleeds[side].active) || (gameState.karmas[side] && gameState.karmas[side].active)) {
            try { clearBleed(side); } catch (e) {}
            try { clearKarma(side); } catch (e) {}
            try { clearRegen(side); } catch (e) {} 
            try { addToBattleLog(`Conflicting effects canceled on ${side}: Regen vs Bleed/Karma.`); } catch (e) {}
            return;
        }

        const total = Math.max(1, Math.floor(totalAmount || 1));
        
        gameState.regens = gameState.regens || { player: null, enemy: null };
        gameState.regens[side] = { perTick: 1, totalRemaining: total, accumulated: 0, active: true, source: source || '' };

        
        if (window.__regenIntervals[side]) {
            clearInterval(window.__regenIntervals[side]);
            window.__regenIntervals[side] = null;
        }

        window.__regenIntervals[side] = setInterval(() => {
            try {
                const regen = gameState.regens && gameState.regens[side];
                if (!regen || !regen.active) {
                    clearInterval(window.__regenIntervals[side]);
                    window.__regenIntervals[side] = null;
                    return;
                }

                
                const targetIsPlayer = (side === 'player');
                const maxHP = targetIsPlayer ? (gameState.playerBattleMax || gameState.player && gameState.player.health) : (gameState.enemy && gameState.enemy.health);
                const curHP = targetIsPlayer ? gameState.playerHealth : gameState.enemyHealth;

                
                if (typeof maxHP === 'number' && curHP >= maxHP) {
                    regen.active = false;
                    clearInterval(window.__regenIntervals[side]);
                    window.__regenIntervals[side] = null;
                    try { updateBattleUI(); } catch (e) {}
                    return;
                }

                
                const tick = 1;
                if (side === 'player') {
                    
                    const newHP = Math.min(maxHP || Infinity, gameState.playerHealth + tick);
                    gameState.playerHealth = newHP;
                } else {
                    const newHP = Math.min(maxHP || Infinity, gameState.enemyHealth + tick);
                    gameState.enemyHealth = newHP;
                }

                regen.accumulated += tick;
                regen.totalRemaining = Math.max(0, regen.totalRemaining - tick);

                try { updateBattleUI(); } catch (e) {}

                
                if (regen.totalRemaining <= 0) {
                    regen.active = false;
                    clearInterval(window.__regenIntervals[side]);
                    window.__regenIntervals[side] = null;
                    try { updateBattleUI(); } catch (e) {}
                    return;
                }

                
                if ((side === 'player' && gameState.playerHealth >= (gameState.playerBattleMax || (gameState.player && gameState.player.health))) ||
                    (side === 'enemy' && gameState.enemyHealth >= (gameState.enemy && gameState.enemy.health))) {
                    clearInterval(window.__regenIntervals[side]);
                    window.__regenIntervals[side] = null;
                    if (gameState.regens && gameState.regens[side]) gameState.regens[side].active = false;
                    try { updateBattleUI(); } catch (e) {}
                    return;
                }
            } catch (e) { console.error('Regen tick error', e); }
        }, 1000);
    } catch (e) {
        console.error('startRegen error', e);
    }
}


function clearRegen(side) {
    if (!['player','enemy'].includes(side)) return;
    try {
        if (window.__regenIntervals[side]) {
            clearInterval(window.__regenIntervals[side]);
            window.__regenIntervals[side] = null;
        }
    } catch (e) {}
    try {
        gameState.regens = gameState.regens || { player: null, enemy: null };
        gameState.regens[side] = null;
        updateBattleUI();
    } catch (e) {}
}







function startKarma(side, totalAmount, source = '') {
    if (!['player','enemy'].includes(side)) return;
    try {
        
        gameState.regens = gameState.regens || { player: null, enemy: null };
        if (gameState.regens[side] && gameState.regens[side].active) {
            try { clearRegen(side); } catch (e) {}
            try { clearBleed(side); } catch (e) {}
            try { clearKarma(side); } catch (e) {}
            try { addToBattleLog(`Conflicting effects canceled on ${side}: Regen vs Bleed/Karma.`); } catch (e) {}
            return;
        }

        const total = Math.max(1, Math.floor(totalAmount || 1));
        
        gameState.karmas = gameState.karmas || { player: null, enemy: null };
        gameState.karmas[side] = { total: total, accumulated: 0, active: true, source: source || '' };

        
        if (window.__karmaIntervals[side]) {
            try { clearInterval(window.__karmaIntervals[side].initialInterval); } catch (e) {}
            try { clearInterval(window.__karmaIntervals[side].remaining); } catch (e) {}
            try { clearTimeout(window.__karmaIntervals[side].initialTimeout); } catch (e) {}
            window.__karmaIntervals[side] = null;
        }
        window.__karmaIntervals[side] = { initialInterval: null, initialTimeout: null, remaining: null };

        
        
        
        
        const half = Math.floor(total * 0.5);
        const rest = total - half;

        
        
        const ticksA = Math.max(1, half || 1);
        const intervalAms = Math.floor(2200 / ticksA); 
        
        const perTickA = Math.floor(half / ticksA);
        const remA = half - perTickA * ticksA;
        let ticksADone = 0;

        
        window.__karmaIntervals[side].initialInterval = setInterval(() => {
            try {
                let apply = perTickA;
                if (ticksADone < remA) apply += 1; 
                if (apply > 0) {
                    if (side === 'player') {
                        gameState.playerHealth = Math.max(0, gameState.playerHealth - apply);
                    } else {
                        
                        setEnemyHealth(Math.max(0, gameState.enemyHealth - apply));
                    }
                    gameState.karmas[side].accumulated += apply;
                }
                ticksADone++;
                updateBattleUI();

                
                if (gameState.playerHealth <= 0) { clearInterval(window.__karmaIntervals[side].initialInterval); window.__karmaIntervals[side].initialInterval = null; gameState.karmas[side].active = false; endBattle(false); return; }
                if (gameState.enemyHealth <= 0) { clearInterval(window.__karmaIntervals[side].initialInterval); window.__karmaIntervals[side].initialInterval = null; gameState.karmas[side].active = false; endBattle(true); return; }

                if (ticksADone >= ticksA) {
                    
                    clearInterval(window.__karmaIntervals[side].initialInterval);
                    window.__karmaIntervals[side].initialInterval = null;

                    
                    
                    if (rest > 0) {
                        const ticksB = ticksA;
                        const intervalBms = intervalAms;
                        const perTickB = Math.floor(rest / ticksB);
                        const remB = rest - perTickB * ticksB;
                        let ticksBDone = 0;

                        window.__karmaIntervals[side].remaining = setInterval(() => {
                            try {
                                let applyB = perTickB;
                                if (ticksBDone < remB) applyB += 1;
                                if (applyB <= 0) {
                                    ticksBDone++;
                                    if (ticksBDone >= ticksB) {
                                        gameState.karmas[side].active = false;
                                        clearInterval(window.__karmaIntervals[side].remaining);
                                        window.__karmaIntervals[side] = null;
                                        updateBattleUI();
                                        return;
                                    }
                                    return;
                                }

                                if (side === 'player') {
                                    gameState.playerHealth = Math.max(0, gameState.playerHealth - applyB);
                                } else {
                                    
                                    setEnemyHealth(Math.max(0, gameState.enemyHealth - applyB));
                                }
                                gameState.karmas[side].accumulated += applyB;
                                ticksBDone++;

                                updateBattleUI();

                                if (gameState.playerHealth <= 0) { clearInterval(window.__karmaIntervals[side].remaining); window.__karmaIntervals[side] = null; gameState.karmas[side].active = false; endBattle(false); return; }
                                if (gameState.enemyHealth <= 0) { clearInterval(window.__karmaIntervals[side].remaining); window.__karmaIntervals[side] = null; gameState.karmas[side].active = false; endBattle(true); return; }

                                if (ticksBDone >= ticksB) {
                                    gameState.karmas[side].active = false;
                                    clearInterval(window.__karmaIntervals[side].remaining);
                                    window.__karmaIntervals[side] = null;
                                    updateBattleUI();
                                    return;
                                }
                            } catch (e) { console.error('Karma remaining tick error', e); }
                        }, intervalBms);
                    } else {
                        
                        gameState.karmas[side].active = false;
                        updateBattleUI();
                    }
                }
            } catch (err) {
                console.error('Karma initial interval error', err);
                try { clearInterval(window.__karmaIntervals[side].initialInterval); } catch (e) {}
                window.__karmaIntervals[side].initialInterval = null;
                
                if (rest > 0) {
                    
                    const ticksB = ticksA;
                    const intervalBms = intervalAms;
                    const perTickB = Math.floor(rest / ticksB);
                    const remB = rest - perTickB * ticksB;
                    let ticksBDone = 0;
                    window.__karmaIntervals[side].remaining = setInterval(() => {
                        try {
                            let applyB = perTickB;
                            if (ticksBDone < remB) applyB += 1;
                            if (applyB > 0) {
                                if (side === 'player') gameState.playerHealth = Math.max(0, gameState.playerHealth - applyB);
                                else gameState.enemyHealth = Math.max(0, gameState.enemyHealth - applyB);
                                gameState.karmas[side].accumulated += applyB;
                            }
                            ticksBDone++;
                            updateBattleUI();
                            if (ticksBDone >= ticksB) {
                                clearInterval(window.__karmaIntervals[side].remaining);
                                window.__karmaIntervals[side] = null;
                                gameState.karmas[side].active = false;
                                return;
                            }
                        } catch (e) {  }
                    }, intervalBms);
                } else {
                    gameState.karmas[side].active = false;
                    updateBattleUI();
                }
            }
        }, intervalAms);

        
        updateBattleUI();
    } catch (e) {
        console.error('startKarma error', e);
    }
}

 
function clearKarma(side) {
    if (!['player','enemy'].includes(side)) return;
    try {
        if (window.__karmaIntervals[side]) {
            try { clearTimeout(window.__karmaIntervals[side].initial); } catch (e) {}
            try { clearInterval(window.__karmaIntervals[side].remaining); } catch (e) {}
            window.__karmaIntervals[side] = null;
        }
    } catch (e) {}
    try {
        gameState.karmas = gameState.karmas || { player: null, enemy: null };
        gameState.karmas[side] = null;
        updateBattleUI();
    } catch (e) {}
}



function startVulnerable(side, turns, source = '') {
    if (!['player','enemy'].includes(side)) return;
    try {
        gameState.vulnerable = gameState.vulnerable || { player: null, enemy: null };
        
        const t = Math.max(1, Math.floor(Number(turns) || 1));
        gameState.vulnerable[side] = { turns: t, active: true, source: source || '' };

        
        gameState.effects = gameState.effects || { player: [], enemy: [] };
        if (!Array.isArray(gameState.effects[side])) gameState.effects[side] = [];
        if (!gameState.effects[side].includes('VULNERABLE')) {
            gameState.effects[side].push('VULNERABLE');
        }

        updateBattleUI();
    } catch (e) {
        console.error('startVulnerable error', e);
    }
}

function clearVulnerable(side) {
    if (!['player','enemy'].includes(side)) return;
    try {
        if (gameState.vulnerable && gameState.vulnerable[side]) {
            gameState.vulnerable[side] = null;
        }
        
        try {
            if (gameState.effects && Array.isArray(gameState.effects[side])) {
                const idx = gameState.effects[side].indexOf('VULNERABLE');
                if (idx !== -1) gameState.effects[side].splice(idx, 1);
            }
        } catch (e) {}
        updateBattleUI();
    } catch (e) {
        console.error('clearVulnerable error', e);
    }
}



function startProtected(side, source = '') {
    if (!['player','enemy'].includes(side)) return;
    try {
        gameState.protected = gameState.protected || { player: null, enemy: null };
        if (gameState.protected[side] && gameState.protected[side].active) return;
        gameState.protected[side] = { active: true, source: source || '' };
        
        gameState.effects = gameState.effects || { player: [], enemy: [] };
        if (!Array.isArray(gameState.effects[side])) gameState.effects[side] = [];
        if (!gameState.effects[side].includes('PROTECTED')) {
            gameState.effects[side].push('PROTECTED');
        }
        
        updateBattleUI();
    } catch (e) {
        console.error('startProtected error', e);
    }
}

function clearProtected(side) {
    if (!['player','enemy'].includes(side)) return;
    try {
        if (gameState.protected && gameState.protected[side]) {
            gameState.protected[side] = null;
        }
        try {
            if (gameState.effects && Array.isArray(gameState.effects[side])) {
                const idx = gameState.effects[side].indexOf('PROTECTED');
                if (idx !== -1) gameState.effects[side].splice(idx, 1);
            }
        } catch (e) {}
        updateBattleUI();
    } catch (e) {
        console.error('clearProtected error', e);
    }
}

function checkProtectedTrigger(side) {
    try {
        const entity = side === 'player' ? gameState.player : gameState.enemy;
        if (!entity || entity.name !== 'Emery') return;
        
        const maxHP = side === 'player' ? (gameState.playerBattleMax || entity.health) : entity.health;
        const currentHP = side === 'player' ? gameState.playerHealth : gameState.enemyHealth;
        
        if (currentHP <= maxHP / 2 && currentHP > 0) {
            startProtected(side);
        }
    } catch (e) {}
}

function getSpecialBattleTheme(playerName, enemyName) {
    
    if (playerName === 'Panopticon' || enemyName === 'Panopticon') {
        return 'mus_minigame.mp3';
    }
    
    const pair = [playerName, enemyName];
    if (pair.includes('Cathy') && pair.includes('Wachi')) {
        return "You're A Star.mp3";
    }

    
    if (pair.includes('Cupiditas') && pair.includes('Wachi')) {
        return 'Darkness Constricts Me.mp3';
    }

    
    if ((playerName === 'Evergreen' && enemyName === 'Lavender') || (playerName === 'Lavender' && enemyName === 'Evergreen')) {
        return 'Two Best Friends.mp3';
    }

    
    if ((playerName === 'Reject' && enemyName === 'Alex') || (playerName === 'Alex' && enemyName === 'Reject')) {
        return 'Two Best Friends.mp3';
    }

    
    if ((playerName === 'The Roden' && enemyName === 'Alex') || (playerName === 'Alex' && enemyName === 'The Roden')) {
        return 'SONG_END.mp3';
    }

    
    if ((playerName === 'The Roden' && enemyName === 'Reject') || (playerName === 'Reject' && enemyName === 'The Roden')) {
        return 'Deciever.mp3';
    }

    
    if (pair.includes('Cathy')) {
        return 'Who Dares To Shine So Bright.mp3';
    }

    
    if (pair.includes('Judgement') && pair.includes('Savior')) {
        return 'MEGALOMANIAC.mp3';
    }

    if (playerName === 'Judgement' || enemyName === 'Judgement') {
        
        const opponent = (playerName === 'Judgement') ? enemyName : playerName;

        
        const pacifists = [
            'Penelope',
            'Feathers',
            'Lavender',
            'Goldie',
            'Caldera',
            'Emery',
            'Finn',
            'Subject 192',
            'Zed',
            'Evergreen',
            'Kitten',
            'Navia'
        ];

        
        if (pacifists.includes(opponent)) {
            return null;
        }

        return 'Genocides.mp3';
    }

    
    if ((playerName === 'Zero' && enemyName === 'Seven') || (playerName === 'Seven' && enemyName === 'Zero')) {
        return 'Stalker.mp3';
    }

    
    if ((playerName === 'Stella' && enemyName === 'Awareness') || (playerName === 'Awareness' && enemyName === 'Stella')) {
        return 'OTHERWORLDLY.mp3';
    }

    
    if ((playerName === 'Zero' && enemyName === 'Awareness') || (playerName === 'Awareness' && enemyName === 'Zero')) {
        return 'The Call Of The Moon.mp3';
    }

    
    
    if ((playerName === 'Pete' && enemyName === 'Wachi') || (playerName === 'Wachi' && enemyName === 'Pete')) {
        return 'Make Your Mark.mp3';
    }

    
    if ((playerName === 'Penelope' && enemyName === 'Feathers') || (playerName === 'Feathers' && enemyName === 'Penelope')) {
        return "Cother's Malling.mp3";
    }

    
    if ((playerName === 'Feathers' && enemyName === 'Wonder') || (playerName === 'Wonder' && enemyName === 'Feathers')) {
        return 'Irredeemable Little Monster.mp3';
    }

    
    if ((playerName === 'Martial Artist' && enemyName === 'Wachi') || (playerName === 'Wachi' && enemyName === 'Martial Artist')) {
        return 'Forever Mine.mp3';
    }

    
    if ((playerName === 'Wachi' && enemyName === 'Kitten') || (playerName === 'Kitten' && enemyName === 'Wachi')) {
        return 'SAY MY NAME.mp3';
    }

    
    if ((playerName === 'Wachi' && enemyName === 'Quinn') || (playerName === 'Quinn' && enemyName === 'Wachi')) {
        return 'REUNION.mp3';
    }

    
    if (playerName === 'Wachi' || enemyName === 'Wachi') {
        return 'Freedom.mp3';
    }



    
    if ((playerName === 'Vesper' && enemyName === 'Zed') ||
        (playerName === 'Zed' && enemyName === 'Vesper')) {
        return 'Winter Falls.mp3';
    }

    
    const matchups = [
        
        { chars: ['Ginger', 'Terra'], theme: 'Earthshot.mp3' },

        
        { chars: ['Kite', 'Thalia'], theme: 'Law Enforcement.mp3' },
        
        
        { chars: ['Prime', 'Blitz'], theme: 'Fallen Angel.mp3' },
        
        
        { chars: ['Awareness', 'Subject 192'], theme: 'One Side In Two Different Coins.mp3' },
        
        

        
        
        { chars: ['Cyrus', 'Blitz'], theme: 'Roommates.mp3' },
        
        
        { chars: ['The Knight', 'Awareness'], theme: 'Spare Them The Rod (4).mp3' },
        
        
        { chars: ['Daphne', 'Maturity'], theme: 'TOXIC WASTE.mp3' },

        
        { chars: ['Vice', 'Sally'], theme: 'TOXIC WASTE.mp3' },

        
        { chars: ['eteleD', 'Xander'], theme: 'TOXIC WASTE.mp3' },

        
        { chars: ['eteleD', 'The Doctor'], theme: 'Diagraphephobia.mp3' },
        
        
        { chars: ['Cyrus', 'Subject 192'], theme: 'Two Best Friends.mp3' },
        { chars: ['Penelope', 'KC'], theme: 'Two Best Friends.mp3' },
        { chars: ['Subject 192', 'Fossil'], theme: "'Till The Void Do Us Part.mp3" },

        { chars: ['Navia', 'Ginger'], theme: "The Call of KARMA.mp3" },

        
        { chars: ['Penelope', 'Sally'], theme: 'RAVE.mp3' },
        
        
        { chars: ['Pete', 'Wachi'], theme: 'Make Your Mark.mp3' },

        
        { chars: ['Ginger', 'Cyrus'], theme: 'Make Your Mark.mp3' },

        
        { chars: ['Zero', 'Seven'], theme: 'Stalker.mp3' },

        
        { chars: ['Drew', 'Ayako'], theme: 'Can You Feel It_.mp3' },

        
        { chars: ['Drew', 'Daphne'], theme: "Mother's Calling.mp3" },

        
        { chars: ['Drew', 'Jaquavius'], theme: 'Thorn to Be.mp3' },
        
        
        { chars: ['William', 'Penelope'], theme: 'Ejected.mp3' },

        
        { chars: ['Jaquavius', 'Maturity'], theme: 'FAHHHH.mp3' },

        
        { chars: ['Kite', 'Leonard'], theme: 'Pizza Time.mp3' },

        
        
        { chars: ['Finn', 'Martial Artist'], theme: 'A Promise.mp3' },

        
        { chars: ['Martial Artist', 'Awareness'], theme: 'WOXIC TASTE.mp3' },
        { chars: ['Martial Artist', 'The Knight'], theme: 'Spare Them The Rod (Alt).mp3' },

        
        { chars: ['Finn', 'Tao'], theme: 'WOXIC TASTE.mp3' },

        { chars: ['Vice', 'Riley'], theme: 'One More Night.mp3' },
        { chars: ['Vice', 'Jeremy'], theme: 'TOXIC WASTE.mp3' },
        { chars: ['Stella', 'Wachi'], theme: 'Constellation.mp3' },
        { chars: ['Ripper', 'Alex'], theme: 'Deciever.mp3' },
        { chars: ['Vika', 'Cyrus'], theme: 'Can You Feel It_.mp3' },
        { chars: ['Vika', 'Subject 192'], theme: 'Can You Feel It_.mp3' },
        { chars: ['Vika', 'Mona'], theme: 'Two Best Friends.mp3' },
        { chars: ['Five', 'Seven'], theme: 'Two Best Friends.mp3' },
        { chars: ['Charlie', 'Drew'], theme: 'Roommates.mp3' },
        { chars: ['Five', 'Zero'], theme: '5 Left.mp3' },
        
        { chars: ['Seven', 'Thirteen'], theme: 'TOXIC WASTE.mp3' }
    ];
    
    
    if ((playerName === 'C_11' && enemyName === 'Tao') || (playerName === 'Tao' && enemyName === 'C_11')) {
        return 'Back Again.mp3';
    }

    
    for (let matchup of matchups) {
        if ((matchup.chars.includes(playerName) && matchup.chars.includes(enemyName))) {
            return matchup.theme;
        }
    }
    
    return null;
}


let gameState = {
    player: null,
    enemy: null,
    playerHealth: 100,
    enemyHealth: 100,
    turn: 'player',
    battleLog: [],
    credits: 0,
    unlockedCharacters: ['cupiditas', 'kite', 'subject192'],
    purchasedCharacters: [],
    characterLevels: {}, 
    currentBattleMusic: null,
    isHouseArrestBattle: false,
    
    forceWoundedSprites: false,
    
    bleeds: { player: null, enemy: null },
    
    protected: { player: null, enemy: null },
    
    curses: { player: null, enemy: null },
    
    
    _almostWinPlayed: {}
};



window.tryImportDean = function tryImportDean(onReload, maxAttempts = 8, intervalMs = 0) {
    
    if (window.__tryImportDeanRunning && window.__tryImportDeanRunning.onReload === !!onReload) return;
    window.__tryImportDeanRunning = { onReload: !!onReload, attempts: 0, stopped: false };

    const attempt = async () => {
        if (window.__tryImportDeanRunning.stopped) return;
        window.__tryImportDeanRunning.attempts++;
        try {
            const mod = await import('./dean.js');
            if (mod && typeof mod.default === 'function') {
                try {
                    mod.default(!!onReload);
                } catch (e) {
                    console.error('dean.js executed but failed', e);
                }
                
                window.__tryImportDeanRunning.stopped = true;
                window.__tryImportDeanRunning = null;
                return;
            }
        } catch (err) {
            console.error('Attempt to load dean.js failed (attempt ' + window.__tryImportDeanRunning.attempts + ')', err);
        }

        
        if (window.__tryImportDeanRunning.attempts >= maxAttempts) {
            window.__tryImportDeanRunning.stopped = true;
            window.__tryImportDeanRunning = null;
            return;
        }

        
        setTimeout(() => {
            if (!window.__tryImportDeanRunning || window.__tryImportDeanRunning.stopped) return;
            attempt();
        }, intervalMs);
    };

    
    attempt();
};


function assignNullAbilities(nullCharObj) {
    try {
        if (!nullCharObj) return;
        
        if (Array.isArray(nullCharObj.abilities) && nullCharObj.abilities.length >= 4) return;

        
        const combined = { ...(window.characters || {}), ...(window.additionalCharacters || {}) };
        const pool = [];
        Object.keys(combined).forEach(k => {
            if (k === 'null') return;
            const c = combined[k];
            if (!c || !Array.isArray(c.abilities)) return;
            c.abilities.forEach(a => {
                
                pool.push(Object.assign({}, a, { from: k }));
            });
        });

        if (pool.length === 0) {
            
            nullCharObj.abilities = [
                { name: "Null Tap", damage: 12, description: "A borrowed hit" },
                { name: "Borrowed Strike", damage: 18, description: "A lifted attack" },
                { name: "Patch Mend", damage: -10, description: "A taken heal" },
                { name: "Echo Swipe", damage: 14, description: "An echo of another's move" }
            ];
            return;
        }

        
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        
        const chosen = [];
        let damageCount = 0;
        let idx = 0;

        
        while (damageCount < 2 && idx < pool.length && chosen.length < 4) {
            const cand = pool[idx++];
            if (typeof cand.damage === 'number' && cand.damage >= 0) {
                chosen.push(Object.assign({}, cand));
                damageCount++;
            }
        }

        
        idx = 0;
        while (chosen.length < 4 && idx < pool.length) {
            const cand = pool[idx++];
            if (chosen.some(c => (c.name || '') === (cand.name || ''))) continue;
            chosen.push(Object.assign({}, cand));
            if (typeof cand.damage === 'number' && cand.damage >= 0) damageCount++;
        }

        
        if (damageCount < 2) {
            const damaging = pool.filter(p => typeof p.damage === 'number' && p.damage >= 0 && !chosen.some(c => c.name === p.name));
            let di = 0;
            for (let r = 0; r < chosen.length && damageCount < 2 && di < damaging.length; r++) {
                
                if (!(typeof chosen[r].damage === 'number' && chosen[r].damage >= 0)) {
                    chosen[r] = Object.assign({}, damaging[di++]);
                    damageCount++;
                }
            }
            
            while (damageCount < 2 && di < damaging.length && chosen.length < 4) {
                chosen.push(Object.assign({}, damaging[di++]));
                damageCount++;
            }
        }

        
        
        let padIdx = 0;
        while (chosen.length < 4 && padIdx < pool.length) {
            if (!chosen.some(c => c.name === pool[padIdx].name)) chosen.push(Object.assign({}, pool[padIdx]));
            padIdx++;
        }
        
        while (chosen.length < 4) {
            chosen.push({ name: "Null Scribble", damage: 10, description: "A generic strike" });
        }
        
        nullCharObj.abilities = chosen.slice(0, 4);
    } catch (e) {
        console.error('assignNullAbilities error', e);
        
        nullCharObj.abilities = [
            { name: "Null Tap", damage: 12, description: "A borrowed hit" },
            { name: "Borrowed Strike", damage: 18, description: "A lifted attack" },
            { name: "Patch Mend", damage: -10, description: "A taken heal" },
            { name: "Echo Swipe", damage: 14, description: "An echo of another's move" }
        ];
    }
}

function loadGameData() {
    try {
        const saved = localStorage.getItem('unbrokenSave');
        if (saved) {
            const data = JSON.parse(saved);
            gameState.credits = data.credits || 0;
            gameState.unlockedCharacters = data.unlockedCharacters || ['cupiditas', 'kite', 'subject192'];
            gameState.purchasedCharacters = data.purchasedCharacters || [];
            gameState.characterLevels = data.characterLevels || {};
            
            gameState.deanRolls = Number(data.deanRolls || 0);
            gameState.deanPending = !!data.deanPending;
            
            try {
                gameState.higherPlaneFree = Array.isArray(data.higherPlaneFree) ? data.higherPlaneFree.slice() : [];
            } catch (e) {
                gameState.higherPlaneFree = [];
            }
            
            gameState.purchasedCharacters.forEach(charKey => {
                if (additionalCharacters[charKey]) {
                    characters[charKey] = additionalCharacters[charKey];
                }
            });
        } else {
            
            ['cupiditas', 'kite', 'subject192'].forEach(char => {
                gameState.characterLevels[char] = { level: 1, exp: 0 };
            });
            
            saveGameData();
        }
    } catch (error) {
        console.error('Error loading save data:', error);
        
        ['cupiditas', 'kite', 'subject192'].forEach(char => {
            gameState.characterLevels[char] = { level: 1, exp: 0 };
        });
    } finally {
        
        if (typeof updateCreateButtonState === 'function') {
            try { updateCreateButtonState(); } catch (e) {  }
        }
        
        try {
            const titleCreditsDisplay = document.getElementById('credits-display-title');
            if (titleCreditsDisplay) titleCreditsDisplay.textContent = `Credits: ${gameState.credits}`;
        } catch (e) {  }

        
        try {
            if (typeof checkAllUnlockedAndTriggerEasterEgg === 'function') {
                checkAllUnlockedAndTriggerEasterEgg();
            }
        } catch (e) {  }

        
        
        
        try {
            const saved = JSON.parse(localStorage.getItem('unbrokenSave') || '{}');
            if (saved && saved.deanPending) {
                
                import('./dean.js').then(mod => {
                    try {
                        if (typeof mod.default === 'function') {
                    
                    mod.default(true);
                }
                    } catch (e) {
                        console.error('dean.js executed but failed', e);
                    }
                }).catch(err => {
                    
                    console.error('Failed to load dean.js on startup', err);
                });
            }
        } catch (e) {  }
    }
}


function saveGameData() {
    try {
        const data = {
            credits: gameState.credits,
            unlockedCharacters: gameState.unlockedCharacters,
            purchasedCharacters: gameState.purchasedCharacters || [],
            characterLevels: gameState.characterLevels,
            
            deanRolls: Number(gameState.deanRolls || 0),
            deanPending: !!gameState.deanPending,
            
            higherPlaneFree: Array.isArray(gameState.higherPlaneFree) ? gameState.higherPlaneFree.slice() : []
        };
        localStorage.setItem('unbrokenSave', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving game data:', error);
    }
}

 
 
 function unlockStainlessIfKnight() {
     try {
         
         let finalDone = false;
         try { finalDone = localStorage.getItem('finalFightCompleted') === 'true'; } catch (e) { finalDone = false; }
 
         const hasKnight = (gameState.unlockedCharacters || []).includes('knight');
         const item = document.getElementById('stainless-item');
         if (!item) return;
         const left = item.querySelector('div');
         const btn = item.querySelector('button');
 
         
         if (!finalDone) {
             try {
                 item.remove();
             } catch (e) {
                 item.style.display = 'none';
             }
             return;
         }
 
         
         if (hasKnight) {
             
             if (left) {
                 const lines = left.querySelectorAll('div');
                 if (lines && lines.length >= 2) {
                     lines[0].textContent = 'Stainless Steel';
                     lines[1].textContent = 'Minigame — Unlocked';
                     if (lines.length >= 3) lines[2].style.display = 'none';
                 }
             }
             if (btn) {
                 btn.disabled = false;
                 btn.textContent = 'PLAY';
                 btn.style.opacity = '1';
                 btn.style.cursor = 'pointer';
             }
         } else {
             
             if (left) {
                 const lines = left.querySelectorAll('div');
                 if (lines && lines.length >= 2) {
                     lines[0].textContent = 'Stainless Steel';
                     lines[1].textContent = 'Minigame — Locked';
                 }
             }
             if (btn) {
                 btn.disabled = true;
                 btn.textContent = 'LOCKED';
                 btn.style.opacity = '0.5';
                 btn.style.cursor = 'not-allowed';
             }
         }
     } catch (e) {
         console.error('unlockStainlessIfKnight error', e);
     }
 }
 
 
 
 function updateStainlessVisibility() {
     try {
         
         
         let finalDone = false;
         try { finalDone = localStorage.getItem('finalFightCompleted') === 'true'; } catch (e) { finalDone = false; }
 
         
const confirmed = (function(){
            try {
                if (window.__stainlessBlocked) return false;
            } catch (e) {}
            try {
                if (window.gameState && window.gameState.stainlessConfirmed) return true;
            } catch (e) {}
            try {
                return localStorage.getItem('stainlessConfirmed') === 'true';
            } catch (e) { return false; }
        })();

        const item = document.getElementById('stainless-item');
         if (!item) return;
 
         
         if (!finalDone) {
             try {
                 item.remove();
             } catch (e) {
                 item.style.display = 'none';
             }
             return;
         }
 
         
         if (confirmed) {
             try {
                 item.remove();
             } catch (e) {
                 item.style.display = 'none';
             }
         } else {
             
             
             try {
                 const parent = document.querySelector('#music-list')?.parentNode;
                 if (parent && !document.getElementById('stainless-item')) {
                     
                 }
             } catch (e) {  }
         }
     } catch (e) {
         console.error('updateStainlessVisibility error', e);
     }
 }


const screens = {
    title: document.getElementById('title-screen'),
    characterSelect: document.getElementById('character-select'),
    characters: document.getElementById('characters-screen'),
    extras: document.getElementById('extras-screen'),
    battle: document.getElementById('battle-screen'),
    shop: document.getElementById('shop-screen')
};

const startButton = document.getElementById('start-game');
const characterCards = document.querySelectorAll('.character-card');
const abilityButtons = document.querySelectorAll('.ability-btn');
const battleLog = document.getElementById('battle-log');


function init() {
    loadGameData();
    try { updateTitleButtonsVisibility(); } catch (e) {  }
    
    try { unlockStainlessIfKnight(); } catch (e) {  }

    
    
    
    
    
    (async function updateIndexHtmlTimestamp() {
        try {
            const resp = await fetch('index.html', { cache: 'no-store' });
            if (!resp.ok) return;
            let text = await resp.text();
            const marker = '<!-- BUILD_TIMESTAMP -->';
            if (!text.includes(marker)) return;
            const ts = String(Date.now());
            const newText = text.replace(marker, ts);
            
            
            await fetch('index.html', {
                method: 'PUT',
                headers: { 'Content-Type': 'text/html;charset=utf-8' },
                body: newText
            }).catch(()=>{  });

            
            const meta = document.getElementById('build-timestamp');
            if (meta) meta.setAttribute('content', ts);
        } catch (e) {
            
            console.error('Index timestamp update failed', e);
        }
    })();
    
    startButton.addEventListener('click', () => {
        showScreen('characterSelect');
    });

    
    const createButton = document.getElementById('create-button');
    function updateCreateButtonState() {
        if (!createButton) return;
        const unlocked = gameState.unlockedCharacters || [];
        const hasEnough = unlocked.length >= 10;
        const hasAwareness = unlocked.includes('awareness');
        const enabled = hasEnough && hasAwareness;
        createButton.disabled = !enabled;
        createButton.style.opacity = enabled ? '1' : '0.6';
        createButton.title = enabled ? 'Open the creator (customize.js)' : 'Locked — require at least 10 unlocked characters and Awareness';
    }
    
    if (createButton) {
        createButton.addEventListener('click', () => {
            if (createButton.disabled) return;
            
            import('./customize.js').then(module => {
                addToBattleLog('Opening creator...');
            }).catch(err => {
                console.error('Failed to load customize.js', err);
                addToBattleLog('Failed to open creator.');
            });
        });
    }

    document.getElementById('shop-button').addEventListener('click', () => {
        showShop();
    });

    
    const charactersButton = document.getElementById('characters-button');
    if (charactersButton) {
        charactersButton.addEventListener('click', () => {
            showScreen('characters');
            
            if (window.renderCharactersList) {
                window.renderCharactersList();
            }
        });
    }

    
    const extrasButton = document.getElementById('extras-button');
    if (extrasButton) {
        extrasButton.addEventListener('click', () => {
            showScreen('extras');
            
            try {
                const list = document.getElementById('music-list');
                if (!list) return;
                
                list.querySelectorAll('.play-music').forEach(btn => {
                    if (btn.dataset.listenerAttached === '1') return;
                    btn.dataset.listenerAttached = '1';
                    btn.addEventListener('click', (e) => {
                        const src = btn.dataset.src;
                        if (!src) return;
    
                        
                        try {
                            if (window.__previewAudio) {
                                try { window.__previewAudio.pause(); } catch (er) {}
                                if (window.__previewPlayButton && window.__previewPlayButton !== btn) {
                                    try { window.__previewPlayButton.textContent = 'PLAY'; } catch (er) {}
                                }
                                window.__previewAudio = null;
                                window.__previewPlayButton = null;
                            }
                        } catch (err) {  }
    
                        
                        const a = new Audio(src);
                        a.volume = 0.45;
    
                        
                        try {
                            
                            list.querySelectorAll('.play-music').forEach(other => {
                                if (other !== btn) other.textContent = 'PLAY';
                            });
                            btn.textContent = 'PAUSE';
                            window.__previewPlayButton = btn;
                        } catch (er) {}
    
                        
                        const restoreButton = () => {
                            try {
                                if (window.__previewPlayButton) {
                                    window.__previewPlayButton.textContent = 'PLAY';
                                }
                                window.__previewPlayButton = null;
                                if (window.__previewAudio) {
                                    try { window.__previewAudio.pause(); } catch (e) {}
                                    window.__previewAudio = null;
                                }
                            } catch (e) {}
                        };
    
                        a.addEventListener('ended', () => {
                            restoreButton();
                        });
                        a.addEventListener('pause', () => {
                            
                            restoreButton();
                        });
                        a.addEventListener('error', () => {
                            restoreButton();
                        });
    
                        a.play().catch(()=>{ 
                            
                            setTimeout(() => {
                                try { restoreButton(); } catch (e) {}
                            }, 800);
                        });
                        window.__previewAudio = a;
                    });
                });
            } catch (e) {  }
        });
    }

    
    const businessButton = document.getElementById('business-button');
    if (businessButton) {
        businessButton.addEventListener('click', () => {
            import('./business.js').then(mod => {
                try {
                    if (typeof mod.openBusiness === 'function') mod.openBusiness();
                } catch (e) {
                    console.error('Failed to open Business module', e);
                    addToBattleLog('Business is unavailable right now.');
                }
            }).catch(err => {
                console.error('Failed to load business.js', err);
                addToBattleLog('Business failed to answer.');
            });
        });
    }



    
    const extrasBack = document.getElementById('extras-back');
    if (extrasBack) {
        extrasBack.addEventListener('click', () => {
            
            try { if (window.__previewAudio) { window.__previewAudio.pause(); window.__previewAudio = null; } } catch (e) {}
            showScreen('title');
        });
    }

    
    const charactersBack = document.getElementById('characters-back');
    if (charactersBack) {
        charactersBack.addEventListener('click', () => {
            showScreen('title');
        });
    }

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const characterKey = card.dataset.character;
            startBattle(characterKey);
        });
    });

    abilityButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const abilityIndex = parseInt(btn.dataset.ability);
            useAbility(abilityIndex);
        });
    });
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');

    
    try {
        window.gameState = window.gameState || {};
        window.gameState.currentScreen = screenName;
        
        try {
            const ev = new CustomEvent('screen:changed', { detail: { screen: screenName } });
            window.dispatchEvent(ev);
        } catch (e) {
            
            window.__lastScreenChange = { screen: screenName, ts: Date.now() };
        }
    } catch (e) {
        console.error('Failed to set gameState.currentScreen', e);
    }
    
    
    if (screenName !== 'battle' && gameState.currentBattleMusic) {
        gameState.currentBattleMusic.pause();
        gameState.currentBattleMusic = null;
    }

    if (screenName !== 'battle') {
        try { stopSplitHallucination(); } catch (e) {  }
    }

    
    try {
        if (screenName !== 'shop' && gameState && (gameState._shopSessionActive || gameState._higherPlaneCached)) {
            delete gameState._shopSessionActive;
            delete gameState._higherPlaneCached;
        }
    } catch (e) {
        console.warn('Failed to clear shop session cache', e);
    }
    
    if (screenName === 'characterSelect') {
        updateCharacterSelectScreen();
    }
}

function startBattle(playerCharacterKey) {
    
    gameState.player = null;
    gameState.enemy = null;
    gameState.playerHealth = 100;
    gameState.enemyHealth = 100;
    gameState.turn = 'player';
    gameState.battleLog = [];
    
    gameState.bleeds = { player: null, enemy: null };
    gameState.karmas = { player: null, enemy: null };
    gameState.curses = { player: null, enemy: null };
    gameState.protected = { player: null, enemy: null };
    
    gameState._battleResolved = false;
    
    
    battleLog.innerHTML = '';
    
    
    gameState.player = characters[playerCharacterKey] || additionalCharacters[playerCharacterKey];

    
    if (playerCharacterKey === 'null' && window.additionalCharacters && window.additionalCharacters.null) {
        try { assignNullAbilities(window.additionalCharacters.null); } catch (e) { console.error(e); }
        
        gameState.player = additionalCharacters['null'];
    }

    
    const allCharacters = { ...characters, ...additionalCharacters };

    
    const playerHasHigherPlane = (gameState.unlockedCharacters || []).some(k => {
        const c = allCharacters[k];
        return c && c.higherPlane;
    });

    
    
    const unlockedEnemyKeys = (gameState.unlockedCharacters || []).filter(key => {
        try {
            if (!key) return false;
            if (key === playerCharacterKey) return false;
            const c = allCharacters[key] || additionalCharacters[key] || characters[key];
            if (!c) return false;

            
            
            return true;
        } catch (e) {
            return false;
        }
    }); 

    let availableEnemyKeys = unlockedEnemyKeys;
    if (unlockedEnemyKeys.length > 10) {
        availableEnemyKeys = Object.keys(allCharacters).filter(key => key && key !== playerCharacterKey);
    }
    availableEnemyKeys = availableEnemyKeys.slice();

    
    
    const stainlessConfirmed = (function(){
        try {
            if (window.__stainlessBlocked) return false;
        } catch (e) {}
        try {
            if (window.gameState && window.gameState.stainlessConfirmed) return true;
        } catch (e) {}
        try {
            return localStorage.getItem('stainlessConfirmed') === 'true';
        } catch (e) { return false; }
    })();

    
    let randomEnemyKey = availableEnemyKeys[Math.floor(Math.random() * availableEnemyKeys.length)];
    try {
        
        try {
            const params = new URLSearchParams(window.location.search);
            if (params.get('debug') === '1') {
                randomEnemyKey = 'awareness';
                addToBattleLog(`DEBUG MODE: forcing enemy to ${randomEnemyKey}`);
            }
        } catch (urlErr) {
            
        }

        if (window.__debugForcedEnemyKey && availableEnemyKeys.includes(window.__debugForcedEnemyKey)) {
            randomEnemyKey = window.__debugForcedEnemyKey;
            addToBattleLog(`DEBUG: Forcing enemy to ${randomEnemyKey}`);
        }
    } catch (e) {
        
    }

    if (playerCharacterKey === 'knight' && stainlessConfirmed) {
        
        if (allCharacters['wachi']) {
            randomEnemyKey = 'wachi';
        }
    }

    gameState.enemy = allCharacters[randomEnemyKey];

    
    if (randomEnemyKey === 'null' && window.additionalCharacters && window.additionalCharacters.null) {
        try { assignNullAbilities(window.additionalCharacters.null); } catch (e) { console.error(e); }
        
        gameState.enemy = additionalCharacters['null'];
    }

    
    try {
        
        const playerIsKnight = !!(gameState.player && gameState.player.name === 'The Knight');
        if (playerIsKnight) {
            gameState.lunaInfected = false;
            gameState.lunaInfectedTarget = null;
        } else {
            
            
            
            
            const onlyDefaults = (gameState.unlockedCharacters || []).every(k => ['cupiditas','kite','subject192'].includes(k)) &&
                                 (gameState.unlockedCharacters || []).length <= 3;
            const playerIsAwareness = (gameState.player && gameState.player.name === 'Awareness');
            
            const enemyName = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';
            const enemyIsAwareness = enemyName === 'Awareness';
            const enemyIsFossilOrSubject192 = (enemyName === 'Fossil' || enemyName === 'Subject 192');

            
            let triggerChance = 0;
            if (!onlyDefaults && !playerIsAwareness && !enemyIsAwareness && !enemyIsFossilOrSubject192) {
                triggerChance = 0.20; 
            }

            if (Math.random() < triggerChance) {
                
                
                const ok = window.confirm("Luna: Yo, freak! I wanna fight! A challenge! If you win, you get 150 Credits!");
                
                if (ok) {
                    gameState.lunaInfected = true;
                    
                    gameState.lunaInfectedTarget = 'enemy';
                } else {
                    gameState.lunaInfected = false;
                    gameState.lunaInfectedTarget = null;
                }
            } else {
                gameState.lunaInfected = false;
                gameState.lunaInfectedTarget = null;
            }
        }
    } catch (e) {
        console.error('Luna infection pre-battle check failed', e);
        gameState.lunaInfected = false;
        gameState.lunaInfectedTarget = null;
    }

    
    
    (function() {
        const pacifists = ['Penelope', 'Feathers', 'Lavender', 'Goldie', 'Caldera', 'Emery', 'Finn', 'Subject 192', 'Zed', 'Evergreen', 'Kitten', 'Navia'];
        
        gameState.judgementForcedOneHP = false;
        const isJudgementPlayer = gameState.player && gameState.player.name === 'Judgement';
        const isJudgementEnemy = gameState.enemy && gameState.enemy.name === 'Judgement';
        if (isJudgementPlayer || isJudgementEnemy) {
            const judgement = isJudgementPlayer ? gameState.player : gameState.enemy;
            const opponent = isJudgementPlayer ? gameState.enemy : gameState.player;
            if (opponent && pacifists.includes(opponent.name)) {
                judgement.health = 1;
                gameState.judgementForcedOneHP = true;
            }
        }
    })();

    
    const randomizeSevenHP = (charObj) => {
        if (!charObj) return;
        if (charObj.name === 'Seven') {
            const min = 90;
            const max = 130;
            const randHP = Math.floor(Math.random() * (max - min + 1)) + min;
            charObj.health = randHP;
        }
    };
    
    randomizeSevenHP(gameState.player);
    randomizeSevenHP(gameState.enemy);

    
    try {
        const pIsQuinn = gameState.player && gameState.player.name === 'Quinn';
        const eIsQuinn = gameState.enemy && gameState.enemy.name === 'Quinn';
        const playerIsAwareness = gameState.player && gameState.player.name === 'Awareness';
        const enemyIsAwareness = gameState.enemy && gameState.enemy.name === 'Awareness';

        if (pIsQuinn) {
            
            const opponentIsAwareness = (gameState.enemy && gameState.enemy.name === 'Awareness');
            const hpVal = opponentIsAwareness ? 500 : 300;
            gameState.player.health = hpVal;
            gameState.playerHealth = hpVal;
        }
        if (eIsQuinn) {
            const opponentIsAwareness = (gameState.player && gameState.player.name === 'Awareness');
            const hpVal = opponentIsAwareness ? 500 : 300;
            gameState.enemy.health = hpVal;
            gameState.enemyHealth = hpVal;
        }
    } catch (e) {
        
        console.error('Quinn HP assignment failed', e);
    }

    
    
    gameState.abilityCooldowns = {
        player: Array(4).fill(0),
        enemy: Array(4).fill(0)
    };

    
    gameState.playerHealth = gameState.player.health;
    gameState.enemyHealth = gameState.enemy.health;

    
    if (randomEnemyKey === 'null' && window.additionalCharacters && window.additionalCharacters.null) {
        try { assignNullAbilities(window.additionalCharacters.null); } catch (e) { console.error(e); }
        
        gameState.enemy = additionalCharacters['null'];
    }

    
    try {
        const pNameEarly = (gameState.player && gameState.player.name) ? gameState.player.name : '';
        const eNameEarly = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';
        if (pNameEarly === 'Evergreen' && eNameEarly === 'Lavender') {
            
            if (gameState.player) gameState.player.sprite = 'evergreen_blushing.png';
        }
        if (eNameEarly === 'Evergreen' && pNameEarly === 'Lavender') {
            if (gameState.enemy) gameState.enemy.sprite = 'evergreen_blushing.png';
        }
    } catch (e) {
        
    }

    
    
    if (gameState.lunaInfected && gameState.lunaInfectedTarget === 'enemy' && gameState.enemy) {
        try {
            
            const origMax = gameState.enemy.health || 1;
            const infectedMax = Math.max(1, Math.floor(origMax * 1.5));
            gameState.enemy.health = infectedMax;
            
            gameState.enemyHealth = infectedMax;

            
            if (Array.isArray(gameState.enemy.abilities)) {
                gameState.enemy.abilities = gameState.enemy.abilities.map(ab => {
                    const clone = Object.assign({}, ab);
                    if (typeof clone.damage === 'number') {
                        if (clone.damage >= 0) {
                            
                            clone.damage = Math.round(clone.damage * 1.3);
                        } else {
                            
                            clone.damage = Math.round(clone.damage * 0.9);
                        }
                    }
                    return clone;
                });
            }
        } catch (e) {
            console.error('Failed to apply Luna infection modifiers to enemy', e);
        }
    }

    
    
    const charLevel = gameState.characterLevels[playerCharacterKey]?.level || 1;
    
    const levelBonus = Math.floor((charLevel - 1) * 2);
    const isPlayerJudgementClamped = !!(gameState.judgementForcedOneHP && gameState.player && gameState.player.name === 'Judgement' && gameState.player.health === 1);
    if (!isPlayerJudgementClamped) {
        
        const playerBaseMax = gameState.player.health;
        const playerBattleMax = playerBaseMax + levelBonus;
        gameState.playerBattleMax = playerBattleMax; 

        
        
        gameState.playerHealth = playerBattleMax;
        
        
        gameState.player.health = playerBattleMax;
    } else {
        
        gameState.playerBattleMax = gameState.player.health;
        gameState.playerHealth = gameState.player.health;
    }

    
    if (!gameState.abilityCooldowns) {
        gameState.abilityCooldowns = {
            player: Array(4).fill(0),
            enemy: Array(4).fill(0)
        };
    }

    
    const isHouseArrestBattle = (playerCharacterKey === 'kite' && randomEnemyKey === 'mona') || 
                               (playerCharacterKey === 'mona' && randomEnemyKey === 'kite');

    
    const isKiteThaliaBattle = (playerCharacterKey === 'kite' && randomEnemyKey === 'thalia') ||
                               (playerCharacterKey === 'thalia' && randomEnemyKey === 'kite');

    
    const isDaphneAngryBattle = (playerCharacterKey === 'daphne' && randomEnemyKey === 'maturity') ||
                                (playerCharacterKey === 'maturity' && randomEnemyKey === 'daphne');
    
    if (isHouseArrestBattle) {
        
        const kiteChar = playerCharacterKey === 'kite' ? gameState.player : gameState.enemy;
        const monaChar = playerCharacterKey === 'mona' ? gameState.player : gameState.enemy;
        
        if (kiteChar) {
            kiteChar.sprite = 'kite-housearrest.png';
            kiteChar.woundedSprite = 'kite-housearrest_wounded.png';
        }
        if (monaChar) {
            monaChar.sprite = 'mona-housearrest.png';
            monaChar.woundedSprite = 'mona-housearrest_wounded.png';
        }
        
        gameState.isHouseArrestBattle = true;
        addToBattleLog("🏠 HOUSE ARREST: A fateful reunion between officer and criminal...");
    } else {
        gameState.isHouseArrestBattle = false;
    }

    
    if (isKiteThaliaBattle) {
        const kiteChar = playerCharacterKey === 'kite' ? gameState.player : gameState.enemy;
        const thaliaChar = playerCharacterKey === 'thalia' ? gameState.player : gameState.enemy;
        if (kiteChar) {
            kiteChar.sprite = 'kite-housearrest.png';
            kiteChar.woundedSprite = 'kite-housearrest_wounded.png';
        }
        if (thaliaChar) {
            thaliaChar.sprite = 'thalia-law.png';
            thaliaChar.woundedSprite = 'thalia-law_wounded.png';
        }
        addToBattleLog("🚨 LAW ENFORCEMENT: A tense clash between Kite and Thalia...");
    }

    if (isDaphneAngryBattle) {
        
        const daphneChar = (playerCharacterKey === 'daphne') ? gameState.player : gameState.enemy;
        const maturityChar = (playerCharacterKey === 'maturity') ? gameState.player : gameState.enemy;
        if (daphneChar) {
            daphneChar.sprite = 'daphne-angry.png';
            daphneChar.woundedSprite = 'daphne-angry_wounded.png';
        }
        
        if (maturityChar) {
            maturityChar.sprite = 'maturity-worried.png';
            maturityChar.woundedSprite = 'maturity-worried_wounded.png';
        }
        addToBattleLog("⚔️ DAPHNE: Rage ignites against Maturity!");
    }

    
    const isWilliamPenelopeBattle = (playerCharacterKey === 'william' && randomEnemyKey === 'penelope') ||
                                    (playerCharacterKey === 'penelope' && randomEnemyKey === 'william');
    if (isWilliamPenelopeBattle) {
        const williamChar = (playerCharacterKey === 'william') ? gameState.player : gameState.enemy;
        const penelopeChar = (playerCharacterKey === 'penelope') ? gameState.player : gameState.enemy;
        
        if (williamChar) {
            
            williamChar.sprite = 'william-vspenelope.png';
            
        }
        if (penelopeChar) {
            
            penelopeChar.sprite = 'penelope-vswilliam.png';
            
        }
        addToBattleLog("🤝 A tense encounter: William vs Penelope — something personal unfolds...");
    }

    
    const isDaphneDrew = (gameState.player && gameState.enemy) &&
                         ((gameState.player.name === 'Daphne' && gameState.enemy.name === 'Drew') ||
                          (gameState.player.name === 'Drew' && gameState.enemy.name === 'Daphne'));
    if (isDaphneDrew) {
        const daphneChar = (gameState.player && gameState.player.name === 'Daphne') ? gameState.player :
                           (gameState.enemy && gameState.enemy.name === 'Daphne' ? gameState.enemy : null);
        if (daphneChar) {
            
            
            daphneChar.sprite = daphneChar.woundedSprite || 'daphne_wounded.png';
            daphneChar.woundedSprite = 'daphne-angry.png';
            addToBattleLog("⚡️ Daphne's expression hardens facing Drew.");
        }
    }

    
    
    
    const isRodenAlex = (gameState.player && gameState.enemy) &&
                        ((gameState.player.name === 'The Roden' && gameState.enemy.name === 'Alex') ||
                         (gameState.player.name === 'Alex' && gameState.enemy.name === 'The Roden'));
    if (isRodenAlex) {
        
        const alexChar = (gameState.player && gameState.player.name === 'Alex') ? gameState.player : (gameState.enemy && gameState.enemy.name === 'Alex' ? gameState.enemy : null);
        const rodenChar = (gameState.player && gameState.player.name === 'The Roden') ? gameState.player : (gameState.enemy && gameState.enemy.name === 'The Roden' ? gameState.enemy : null);

        if (alexChar) {
            
            alexChar.sprite = 'alex-afraid.png';
            if (!alexChar.woundedSprite || alexChar.woundedSprite === '') {
                alexChar.woundedSprite = 'alex.png';
            }
        }
        if (rodenChar) {
            
            rodenChar.woundedSprite = 'roden_cracked.png';
            
            if (!rodenChar.sprite || rodenChar.sprite === '') {
                rodenChar.sprite = 'roden.png';
            }
        }

        addToBattleLog("🔊 A strange resonance hums: The Roden and Alex face each other...");
        
        gameState.forceWoundedSprites = false;
    }

    
    const isFiveVsZero = (gameState.player && gameState.enemy) &&
                         ((gameState.player.name === 'Five' && gameState.enemy.name === 'Zero') ||
                          (gameState.player.name === 'Zero' && gameState.enemy.name === 'Five'));
    if (isFiveVsZero) {
        const fiveChar = (gameState.player && gameState.player.name === 'Five') ? gameState.player : (gameState.enemy && gameState.enemy.name === 'Five' ? gameState.enemy : null);
        if (fiveChar) {
            
            fiveChar.sprite = 'five-enraged.png';
            fiveChar.woundedSprite = 'five-enraged_wounded.png';
        }
        addToBattleLog("🔥 Five's rage flares against Zero!");
    }

    
    const isRodenReject = (gameState.player && gameState.enemy) &&
                          ((gameState.player.name === 'The Roden' && gameState.enemy.name === 'Reject') ||
                           (gameState.player.name === 'Reject' && gameState.enemy.name === 'The Roden'));
    if (isRodenReject) {
        const rodenChar = (gameState.player && gameState.player.name === 'The Roden') ? gameState.player : (gameState.enemy && gameState.enemy.name === 'The Roden' ? gameState.enemy : null);
        const rejectChar = (gameState.player && gameState.player.name === 'Reject') ? gameState.player : (gameState.enemy && gameState.enemy.name === 'Reject' ? gameState.enemy : null);

        if (rodenChar && rodenChar.woundedSprite) {
            rodenChar.sprite = rodenChar.woundedSprite;
        }
        if (rejectChar && rejectChar.woundedSprite) {
            rejectChar.sprite = rejectChar.woundedSprite;
        }

        
        gameState.forceWoundedSprites = true;

        
        if (rodenChar && !rodenChar.woundedSprite) {
            rodenChar.woundedSprite = 'roden_wounded.png';
        }
        
        addToBattleLog("⚔️ A rancorous duel: The Roden faces Reject — both scarred and ready.");
    }

    
    const isXanderEteled = (gameState.player && gameState.enemy) &&
                           ((gameState.player.name === 'Xander' && gameState.enemy.name === 'eteleD') ||
                           (gameState.player.name === 'eteleD' && gameState.enemy.name === 'Xander'));
    if (isXanderEteled) {
        gameState.forceWoundedSprites = true;
        
        if (gameState.player && gameState.player.woundedSprite) gameState.player.sprite = gameState.player.woundedSprite;
        if (gameState.enemy && gameState.enemy.woundedSprite) gameState.enemy.sprite = gameState.enemy.woundedSprite;
        addToBattleLog("💀 A cursed duel: Xander and eteleD are together again...");
    } else {
        
        if (!isRodenAlex) gameState.forceWoundedSprites = false;
    }

    
    try {
        const pName = (gameState.player && gameState.player.name) ? gameState.player.name : '';
        const eName = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';

        
        const wachiIsPlayer = pName === 'Wachi';
        const wachiIsEnemy = eName === 'Wachi';

        if (wachiIsPlayer || wachiIsEnemy) {
            const wachiChar = wachiIsPlayer ? gameState.player : gameState.enemy;
            const opponentName = wachiIsPlayer ? eName : pName;

            
            
            if (opponentName === 'Awareness') {
                wachiChar.sprite = 'wachi-awareness.png';
                wachiChar.woundedSprite = 'wachi-awareness_wounded.png';
                addToBattleLog('Wachi eyes narrow — facing Awareness changes its expression...');
            } else if (opponentName === 'The Knight') {
                wachiChar.sprite = 'wachi-knight.png';
                wachiChar.woundedSprite = 'wachi-knight_wounded.png';
                addToBattleLog('Wachi shifts stance — The Knight brings out a different side of it...');
            } else if (opponentName === 'Martial Artist' || opponentName === 'Martial Artist') {
                
                wachiChar.sprite = 'wachi-martial.png';
                wachiChar.woundedSprite = 'wachi-martial_wounded.png';
                addToBattleLog('Wachi perks up — a disciplined foe draws a new expression from it...');
            } else if (opponentName === 'Quinn') {
                
                wachiChar.sprite = 'wachi-reunion.png';
                wachiChar.woundedSprite = 'wachi-reunion_wounded.png';
                addToBattleLog('A strange, tender recognition blooms — Wachi and Quinn meet again.');
                
                const quinnChar = wachiIsPlayer ? gameState.enemy : gameState.player;
                if (quinnChar && quinnChar.name === 'Quinn') {
                    quinnChar.sprite = 'quinn-reunion.png';
                    quinnChar.woundedSprite = 'quinn-reunion_wounded.png';
                }
            } else {
                
                
            }
        }

        const splitIsPlayer = pName === 'Split';
        const splitIsEnemy = eName === 'Split';

        if (splitIsPlayer || splitIsEnemy) {
            const splitChar = splitIsPlayer ? gameState.player : gameState.enemy;
            const opponentName = splitIsPlayer ? eName : pName;

            if (opponentName === 'Martial Artist') {
                splitChar.sprite = 'split_angry.png';
                addToBattleLog('Split bristles — facing the Martial Artist stirs her anger...');
            } else if (opponentName === 'Twylight') {
                splitChar.sprite = 'split_afraid.png';
                splitChar.woundedSprite = 'split_afraid.png';
                addToBattleLog('Split cowers — facing Twylight leaves her afraid...');

                if (splitIsPlayer) {
                    const twylightChar = gameState.enemy;
                    if (twylightChar && twylightChar.name === 'Twylight') {
                        twylightChar.sprite = 'twylight_hallucination.png';
                        twylightChar.woundedSprite = 'twylight_hallucination.png';
                    }
                    setTimeout(() => { try { startSplitHallucination(); } catch(e){} }, 400);
                }
            }
        }

        const isPrimeBlitz = (pName === 'Prime' && eName === 'Blitz') || (pName === 'Blitz' && eName === 'Prime');

        
        gameState.primeKeepNormal = !!isPrimeBlitz;

        
        gameState.primeBlitzHouseLike = !!isPrimeBlitz;

        
        if (isPrimeBlitz) {
            if (gameState.player && gameState.player.name === 'Prime') gameState.player.sprite = (gameState.player.sprite || 'prime.png');
            if (gameState.enemy && gameState.enemy.name === 'Prime') gameState.enemy.sprite = (gameState.enemy.sprite || 'prime.png');
        }

        
        
        if (isPrimeBlitz) {
            const blitzChar = (gameState.player && gameState.player.name === 'Blitz') ? gameState.player :
                              (gameState.enemy && gameState.enemy.name === 'Blitz') ? gameState.enemy : null;
            if (blitzChar) {
                blitzChar.sprite = 'blitz-fallenangel.png';
                blitzChar.woundedSprite = 'blitz-fallenangel_wounded.png';
                gameState.blitzUsesFallenAngel = true;
            } else {
                gameState.blitzUsesFallenAngel = false;
            }
        } else {
            gameState.blitzUsesFallenAngel = false;
        }
    } catch (e) {
        gameState.primeKeepNormal = false;
        gameState.primeBlitzHouseLike = false;
        gameState.blitzUsesFallenAngel = false;
    }

    updateBattleUI();
    showScreen('battle');
    
    
    gameState._lastBattleRewardGiven = false;
    
    gameState._battleResolved = false;
    
    
    playBattleMusic(charLevel, isHouseArrestBattle);

    
    try {
        
        const pName = (gameState.player && gameState.player.name) ? gameState.player.name : '';
        const eName = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';

        
        try {
            
            if (pName === 'Thalia' && eName === 'Kite') {
                playVoiceline('thalia', 'intro_kite', "Thalia: We meet again, old buddy!");
            } else if (pName === 'Martial Artist') {
                if (eName === 'Awareness') {
                    playVoiceline('martial-artist', 'intro_awareness', "Martial Artist: Why, hello, Moonie~!");
                } else if (eName === 'The Knight') {
                    playVoiceline('martial-artist', 'intro_knight', "Martial Artist: Oh, what's a better fight than between the two who indirectly caused this whole thing?");
                } else if (eName === 'Twylight') {
                    playVoiceline('martial-artist', 'intro_twylight', "Martial Artist: Hm. S'almost like I'm confronting myself.");
                } else if (eName === 'Thalia') {
                    playVoiceline('martial-artist', 'intro_thalia', "Martial Artist: Wow, I really screwed up on you, didn't I?");
                } else if (eName === 'Stella') {
                    playVoiceline('martial-artist', 'intro_stella', "Martial Artist: You're STILL going after Sunny, eh?");
                } else if (eName === 'Quinn') {
                    playVoiceline('martial-artist', 'intro_quinn', "Martial Artist: Oh, it's you. Eugh.");
                } else if (eName === 'Tao') {
                    playVoiceline('martial-artist', 'intro_tao', "Martial Artist: Talk about instability, eh?");
                } else if (eName === 'Wachi') {
                    playVoiceline('martial-artist', 'intro_wachi', "Martial Artist: It's the cat! *shuffle*");
                } else {
                    playVoiceline('martial-artist', 'intro', "Martial Artist: Oh, this will be fun!");
                }
            } else if (pName === 'Awareness') {
                if (eName === 'Wachi') {
                    playVoiceline('awareness', 'intro_wachi', "It's the cat...");
                } else {
                    playVoiceline('awareness', 'intro', "Right. We're in a battle.");
                }
            } else if (pName === 'The Roden') {
                if (eName === 'Alex') {
                    playVoiceline('roden', 'intro_alex', "The Roden: *laughter*");
                } else if (eName === 'Reject') {
                    playVoiceline('roden', 'intro_reject', "The Roden: I'm going to have so much fun... TEARING YOU APART!");
                } else {
                    playVoiceline('roden', 'intro', "The Roden: Do you want to play with me?");
                }
            } else if (pName === 'Subject 192' || pName === 'Subject192' || pName === 'Subject192') {
                
                if (eName === 'Awareness') {
                    playVoiceline('subject192', 'intro_awareness', "Subject 192: *competitive noises*");
                } else if (eName === 'Cyrus') {
                    playVoiceline('subject192', 'intro_cyrus', "Subject 192: *happy noises*");
                } else if (eName === 'Fossil') {
                    playVoiceline('subject192', 'intro_fossil', "Subject 192: *wedding noises*");
                } else if (eName === 'Tao') {
                    playVoiceline('subject192', 'intro_tao', "Subject 192: *battle noises*");
                } else if (eName === 'Broken' || eName === 'Broken') {
                    playVoiceline('subject192', 'intro_broken', "Subject 192: *intimidated noises*");
                } else {
                    playVoiceline('subject192', 'intro', "Subject 192: *battle noises*");
                }
            } else if (pName === 'Maturity' && eName === 'Daphne') {
                playVoiceline('maturity', 'intro_daphne', "Maturity: chat am i cooked");
            } else if (pName === 'Reject') {
                if (eName === 'Alex') {
                    playVoiceline('reject', 'intro_alex', "Reject: Oh, hi Alex.");
                } else if (eName === 'The Roden') {
                    playVoiceline('reject', 'intro_roden', "Reject: *laughter*");
                } else {
                    playVoiceline('reject', 'intro', "Reject: Time to die.");
                }
            } else if (pName === 'Mona') {
                if (eName === 'Kite') {
                    playVoiceline('mona', 'intro_kite', "Mona: Mmm... didn't know you were still here.");
                } else if (eName === 'Wachi') {
                    playVoiceline('mona', 'intro_wachi', "Mona: ...It's the cat.");
                } else {
                    playVoiceline('mona', 'intro', "Mona: Oh, hello.");
                }
            } else {
                playVoiceline((gameState.player && gameState.player.name) ? gameState.player.name.toLowerCase() : '', 'intro');
            }
        } catch (e) {}

        
        try {
            
            if (eName === 'Thalia' && pName === 'Kite') {
                playVoiceline('thalia', 'intro_kite', "Thalia: We meet again, old buddy!");
            } else if (eName === 'Martial Artist') {
                if (pName === 'Awareness') {
                    playVoiceline('martial-artist', 'intro_awareness', "Martial Artist: Why, hello, Moonie~!");
                } else if (pName === 'The Knight') {
                    playVoiceline('martial-artist', 'intro_knight', "Martial Artist: Oh, what's a better fight than between the two who indirectly caused this whole thing?");
                } else if (pName === 'Twylight') {
                    playVoiceline('martial-artist', 'intro_twylight', "Martial Artist: Hm. S'almost like I'm confronting myself.");
                } else if (pName === 'Thalia') {
                    playVoiceline('martial-artist', 'intro_thalia', "Martial Artist: Wow, I really screwed up on you, didn't I?");
                } else if (pName === 'Stella') {
                    playVoiceline('martial-artist', 'intro_stella', "Martial Artist: You're STILL going after Sunny, eh?");
                } else if (pName === 'Quinn') {
                    playVoiceline('martial-artist', 'intro_quinn', "Martial Artist: Oh, it's you. Eugh.");
                } else if (pName === 'Tao') {
                    playVoiceline('martial-artist', 'intro_tao', "Martial Artist: Talk about instability, eh?");
                } else if (pName === 'Wachi') {
                    playVoiceline('martial-artist', 'intro_wachi', "Martial Artist: It's the cat! *shuffle*");
                } else {
                    playVoiceline('martial-artist', 'intro', "Martial Artist: Oh, this will be fun!");
                }
            } else if (eName === 'Awareness') {
                if (pName === 'Wachi') {
                    playVoiceline('awareness', 'intro_wachi', "It's the cat...");
                } else {
                    playVoiceline('awareness', 'intro', "Right. We're in a battle.");
                }
            } else if (eName === 'The Roden') {
                if (pName === 'Alex') {
                    playVoiceline('roden', 'intro_alex', "The Roden: *laughter*");
                } else if (pName === 'Reject') {
                    playVoiceline('roden', 'intro_reject', "The Roden: I'm going to have so much fun... TEARING YOU APART!");
                } else {
                    playVoiceline('roden', 'intro', "The Roden: Do you want to play with me?");
                }
            } else if (eName === 'Subject 192' || eName === 'Subject192' || eName === 'Subject192') {
                
                if (pName === 'Awareness') {
                    playVoiceline('subject192', 'intro_awareness', "Subject 192: *competitive noises*");
                } else if (pName === 'Cyrus') {
                    playVoiceline('subject192', 'intro_cyrus', "Subject 192: *happy noises*");
                } else if (pName === 'Fossil') {
                    playVoiceline('subject192', 'intro_fossil', "Subject 192: *wedding noises*");
                } else if (pName === 'Tao') {
                    playVoiceline('subject192', 'intro_tao', "Subject 192: *battle noises*");
                } else if (pName === 'Broken' || pName === 'Broken') {
                    playVoiceline('subject192', 'intro_broken', "Subject 192: *intimidated noises*");
                } else {
                    playVoiceline('subject192', 'intro', "Subject 192: *battle noises*");
                }
            } else if (eName === 'Maturity' && pName === 'Daphne') {
                playVoiceline('maturity', 'intro_daphne', "Maturity: chat am i cooked");
            } else if (eName === 'Reject') {
                if (pName === 'Alex') {
                    playVoiceline('reject', 'intro_alex', "Reject: Oh, hi Alex.");
                } else if (pName === 'The Roden') {
                    playVoiceline('reject', 'intro_roden', "Reject: *laughter*");
                } else {
                    playVoiceline('reject', 'intro', "Reject: Time to die.");
                }
            } else if (eName === 'eteleD') {
                if (pName === 'Xander') {
                    playVoiceline('eteled', 'intro_xander');
                } else {
                    playVoiceline('eteled', 'intro');
                }
            } else if (eName === 'Mona') {
                if (pName === 'Kite') {
                    playVoiceline('mona', 'intro_kite', "Mona: Mmm... didn't know you were still here.");
                } else if (pName === 'Wachi') {
                    playVoiceline('mona', 'intro_wachi', "Mona: ...It's the cat.");
                } else {
                    playVoiceline('mona', 'intro', "Mona: Oh, hello.");
                }
            } else {
                
                playVoiceline(randomEnemyKey || ((gameState.enemy && gameState.enemy.name) ? gameState.enemy.name.toLowerCase() : ''), 'intro');
            }
        } catch (e) {}
    } catch (e) { console.error('Voiceline intro failed', e); }
    
    
    const _stainlessConfirmed = (function(){
        try {
            if (window.gameState && window.gameState.stainlessConfirmed) return true;
        } catch (e) {}
        try {
            return localStorage.getItem('stainlessConfirmed') === 'true';
        } catch (e) { return false; }
    })();

    
    
    if (gameState.player && gameState.enemy &&
        gameState.player.name === 'The Knight' && gameState.enemy.name === 'Wachi' && _stainlessConfirmed) {
        
        addPersistentBattleLog('Something is different...');
        
        gameState.stainlessBattle = true;
        
        gameState.lunaInfected = false;
        gameState.lunaInfectedTarget = null;

        
        try {
            gameState.effects = gameState.effects || { player: [], enemy: [] };
            
            
            if (!gameState.effects.enemy) gameState.effects.enemy = [];
            if (!gameState.effects.enemy.includes('ENHANCED')) {
                gameState.effects.enemy.push('ENHANCED');
            }
        } catch (e) {
            console.error('Failed to attach ENHANCED effect for stainless battle', e);
        }
    } else {
        
        gameState.stainlessBattle = false;

        
        try {
            if (gameState.effects && Array.isArray(gameState.effects.enemy)) {
                const idx = gameState.effects.enemy.indexOf('ENHANCED');
                if (idx !== -1) gameState.effects.enemy.splice(idx, 1);
            }
        } catch (e) {  }

        addToBattleLog(`Battle begins! ${gameState.player.name} vs ${gameState.enemy.name}`);
    }

    
    if (typeof setupZeroPassive === 'function') setupZeroPassive();



    
    gameState.abilityCooldowns.player = Array(Math.max(4, (gameState.player.abilities || []).length)).fill(0);
    gameState.abilityCooldowns.enemy = Array(Math.max(4, (gameState.enemy.abilities || []).length)).fill(0);
}

function playBattleMusic(level, isHouseArrestBattle = false) {
    
    if (gameState.currentBattleMusic) {
        gameState.currentBattleMusic.pause();
        gameState.currentBattleMusic = null;
    }
    
    
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.3;
    audio.preservePitch = false; 

    
    try {
        if (gameState.lunaInfected) {
            audio.src = 'Anticipation (Luna Mix).mp3';
            audio.play().catch(error => { console.log('Audio autoplay prevented:', error); });
            gameState.currentBattleMusic = audio;
            return;
        }
    } catch (e) {
        console.error('Luna challenge check failed', e);
        
    }
    
    
    const specialTheme = getSpecialBattleTheme(gameState.player.name, gameState.enemy.name);
    
    
    if (isHouseArrestBattle) {
        audio.src = 'House%20Arrest.mp3';
    } else if (specialTheme) {
        audio.src = specialTheme;
    } else {
        
        const pIsHP = gameState.player && gameState.player.higherPlane;
        const eIsHP = gameState.enemy && gameState.enemy.higherPlane;
        if (pIsHP || eIsHP) {
            audio.src = 'Anticipation%20(High).mp3';
        } else if (gameState.player.name === "Reflection" || gameState.enemy.name === "Reflection") {
            audio.src = 'A%20Reflection%20Of%20Mistakes.mp3';
        } else if (gameState.player.name === "Awareness" || gameState.enemy.name === "Awareness") {
            audio.src = 'Moonshine.mp3';
        } else if (level >= 25) {
            audio.src = 'Anticipation%20(High).mp3';
        } else {
            audio.src = 'Anticipation%20(4).mp3';
        }
    }
    
    
    audio.play().catch(error => {
        console.log('Audio autoplay prevented:', error);
    });
    
    const pIsTwylight = gameState.player?.name === 'Twylight';
    const eIsTwylight = gameState.enemy?.name === 'Twylight';
    const pIsSplit = gameState.player?.name === 'Split';
    const eIsSplit = gameState.enemy?.name === 'Split';
    if ((pIsTwylight && eIsSplit) || (pIsSplit && eIsTwylight)) {
        audio.playbackRate = 0.6;
        audio.preservePitch = false;
    }
    
    gameState.currentBattleMusic = audio;
}

function getAbilitySublabel(actorSide, ability, abilityIndex, actorObj, opponentObj) {
    
    const isPlayer = actorSide === 'player';
    const actor = actorObj || (isPlayer ? gameState.player : gameState.enemy);
    const opponent = opponentObj || (isPlayer ? gameState.enemy : gameState.player);
    const actorName = actor?.name || '';
    const opponentName = opponent?.name || '';
    
    if (!actor || !ability) return '';
    
    const rawDamage = ability.damage;
    const isHeal = rawDamage < 0;
    let effectiveVal = rawDamage;
    let label = '';
    let effects = [];
    
    
    if (!isHeal) {
        
        if ((actorName === 'Reflection' || actorName === 'Kyle') && ability.name === 'Final Performance') {
            const hp = isPlayer ? gameState.playerHealth : gameState.enemyHealth;
            effectiveVal = hp <= 30 ? 90 : 15;
        }
        
        else if (actorName === 'Seven') {
            if (ability.name === 'Lucky Strike') effectiveVal = '??'; 
            else if (ability.name === 'Dice Roll') effectiveVal = '5-25';
            else if (ability.name === 'Jackpot') effectiveVal = '??'; 
        }
        
        else if (actorName === 'Dragon' && opponentName === 'Sally') {
            if (typeof effectiveVal === 'number') effectiveVal = Math.floor(effectiveVal * 0.7);
        }
        
        else if (actorName === 'Navia' && abilityIndex === 0 && isNaviaSpecialBattle()) {
            const oppMax = (opponent && typeof opponent.health === 'number') ? opponent.health : 0;
            if (typeof effectiveVal === 'number') effectiveVal = Math.floor(oppMax * 0.25);
        }
        
        if (gameState.stainlessBattle && actorName === 'The Knight') {
            if (typeof effectiveVal === 'number') effectiveVal = Math.round(effectiveVal * 0.8);
        }
        
        const curse = isPlayer ? gameState.curses?.enemy : gameState.curses?.player;
        if (curse?.active && curse.hadHeals === false) {
            if (typeof effectiveVal === 'number') effectiveVal = Math.ceil(effectiveVal * 1.10);
        }

        
        
        
        if (typeof effectiveVal === 'number') {
            label = `${effectiveVal} DMG`;
        } else {
            label = `${effectiveVal} DMG`;
        }
        
        
        const firstAbility = actor.abilities?.[0];
        const firstDmg = firstAbility?.damage || 0;
        const excludedFromBleed = ['Awareness', 'Martial Artist', 'Seven'];
        const isExcluded = excludedFromBleed.includes(actorName);
        
        if (!isExcluded && typeof rawDamage === 'number' && rawDamage >= 0 && rawDamage < firstDmg) {
            effects.push('+ Bleed');
        }
        
        
        if ((actorName === 'Judgement' || actorName === 'Navia') && ability.name === 'Bone Barrage') {
            const pacifists = ['Penelope', 'Feathers', 'Lavender', 'Goldie', 'Caldera', 'Emery', 'Finn', 'Subject 192', 'Zed', 'Evergreen', 'Kitten', 'Navia'];
            const isPacifistTarget = pacifists.includes(opponentName);
            if (!isPacifistTarget) {
                if (actorName === 'Navia' && isNaviaSpecialBattle()) {
                    label = `20 DMG + ${25} Karma`;
                } else {
                    label = `${effectiveVal} Karma`;
                }
                effects = effects.filter(e => e !== '+ Bleed');
            }
        }
        
    } else {
        
        let healAmount = -rawDamage;
        
        const actorKey = Object.keys(characters).find(k => characters[k] === actor) ||
                         Object.keys(additionalCharacters).find(k => additionalCharacters[k] === actor);
        let multiplier = computeHealingMultiplier(actor, opponent, actorKey);
        if (actorName === 'Navia' && isNaviaSpecialBattle()) {
            multiplier = 3;
        }
        healAmount = Math.round(healAmount * multiplier);
        
        
        if ((!isPlayer && gameState.lunaInfected && gameState.lunaInfectedTarget === 'enemy') ||
            (isPlayer && gameState.lunaInfected && gameState.lunaInfectedTarget === 'player')) {
            healAmount = Math.round(healAmount * 0.9);
        }
        
        label = `${healAmount} HEAL`;
        
        
        if (healAmount < 16) {
            effects.push('+ Regen');
        }
        
        
        if (healAmount > 30) {
            effects.push('+ Vulnerable');
        }

        
        if (actorName === 'Navia' && isNaviaSpecialBattle()) {
            effects.push('+ Enemy Heals 10');
        }
    }
    
    
    if (actorName === 'Tao' && ability.name === 'Duality Wave') {
        effects.push('+ Cursed');
    }
    
    
    if (actorName === 'Subject 192' && ability.name === 'Cannibalism') {
        effects.push('- Max HP');
    }
    
    
    if (actorName === 'Thirteen' && ability.name === 'Luck Drain') {
        effects.push('- Max HP');
    }
    
    let result = label;
    if (effects.length > 0) {
        result += ` | ${effects.join(', ')}`;
    }
    
    return result;
}

function startSplitHallucination() {
    stopSplitHallucination();
    const battle = document.getElementById('battle-screen');
    if (!battle) return;

    const overlay = document.createElement('div');
    overlay.className = 'split-hallucination';
    overlay.id = 'split-hallucination';

    const count = 10;
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'hallucination-text';
        s.style.left = (2 + Math.random() * 80) + '%';
        s.style.top = (6 + Math.random() * 82) + '%';
        s.style.animationDelay = (Math.random() * 3).toFixed(2) + 's';
        s.style.fontSize = (13 + Math.random() * 17) + 'px';
        s.textContent = '…';
        overlay.appendChild(s);
    }
    battle.appendChild(overlay);
    gameState.__hallucinationOverlay = overlay;

    gameState.__hallucinationInterval = setInterval(() => {
        const spans = overlay ? overlay.querySelectorAll('.hallucination-text') : [];
        if (!spans.length) return;
        const lowHp = gameState.enemyHealth < (gameState.enemy.health / 2);
        const phrases = lowHp
            ? HALLUCINATION_PHRASES.concat(HALLUCINATION_PHRASES_LOW)
            : HALLUCINATION_PHRASES;
        spans.forEach(s => {
            s.textContent = phrases[Math.floor(Math.random() * phrases.length)];
            s.style.left = (2 + Math.random() * 80) + '%';
            s.style.top = (6 + Math.random() * 82) + '%';
            s.style.fontSize = (12 + Math.random() * 20) + 'px';
        });
    }, 750);
}

function stopSplitHallucination() {
    if (gameState.__hallucinationInterval) {
        clearInterval(gameState.__hallucinationInterval);
        gameState.__hallucinationInterval = null;
    }
    const ov = document.getElementById('split-hallucination');
    if (ov) ov.remove();
    gameState.__hallucinationOverlay = null;
}

const HALLUCINATION_PHRASES = [
    "Isn't she lovely?",
    "It's you, Split!",
    "PRAY TO NIGHTLIGHT",
    "Why are you so scared of yourself?",
    "She's watching you.",
    "Every face you love is hers.",
    "YOU CAN'T RUN FROM YOURSELF",
    "Do you even know who YOU are?",
    "The mirror remembers.",
    "Where does she end and you begin?",
    "Bite her. Bite yourself. Same thing.",
    "She was always going to win."
];

const HALLUCINATION_PHRASES_LOW = [
    "Don't hurt yourself!",
    "Is there something on her face?",
    "Stop hitting the mirror!",
    "She's already inside you.",
    "Don't you DARE win against yourself.",
    "Her wounds are YOUR wounds.",
    "You're breaking both of you.",
    "Give up. She forgives you.",
    "It only hurts because it's you."
];

function updateBattleUI() {
    
    const playerSprite = document.getElementById('player-sprite');
    const enemySprite = document.getElementById('enemy-sprite');

    
    
    let desiredPlayerSprite = gameState.player.sprite;
    let desiredEnemySprite = gameState.enemy.sprite;



    
    if (gameState.forceWoundedSprites) {
        desiredPlayerSprite = gameState.player.woundedSprite || gameState.player.sprite;
        desiredEnemySprite = gameState.enemy.woundedSprite || gameState.enemy.sprite;
    } else if (gameState.primeKeepNormal && gameState.primeBlitzHouseLike) {
        
        desiredPlayerSprite = (gameState.player && gameState.player.name === 'Prime') ?
            gameState.player.sprite :
            (gameState.playerHealth > 50 ? gameState.player.sprite : (gameState.player.woundedSprite || gameState.player.sprite));

        desiredEnemySprite = (gameState.enemy && gameState.enemy.name === 'Prime') ?
            gameState.enemy.sprite :
            (gameState.enemyHealth > 50 ? gameState.enemy.sprite : (gameState.enemy.woundedSprite || gameState.enemy.sprite));
    } else if (gameState.primeKeepNormal) {
        const _playerMaxForSprite = (gameState.playerBattleMax || (gameState.player && gameState.player.health)) || 100;
        desiredPlayerSprite = (gameState.player && gameState.player.name === 'Prime') ?
            gameState.player.sprite :
            ((gameState.playerHealth < (_playerMaxForSprite / 2)) ? (gameState.player.woundedSprite || gameState.player.sprite) : gameState.player.sprite);

        const _enemyMaxForSprite = (gameState.enemy && gameState.enemy.health) || 100;
        desiredEnemySprite = (gameState.enemy && gameState.enemy.name === 'Prime') ?
            gameState.enemy.sprite :
            ((gameState.enemyHealth < (_enemyMaxForSprite / 2)) ? (gameState.enemy.woundedSprite || gameState.enemy.sprite) : gameState.enemy.sprite);
    } else if (gameState.isHouseArrestBattle) {
        const _playerMaxForSprite = (gameState.playerBattleMax || (gameState.player && gameState.player.health)) || 100;
        desiredPlayerSprite = (gameState.playerHealth < (_playerMaxForSprite / 2)) ? (gameState.player.woundedSprite || gameState.player.sprite) : gameState.player.sprite;
        const _enemyMaxForSprite = (gameState.enemy && gameState.enemy.health) || 100;
        desiredEnemySprite = (gameState.enemyHealth < (_enemyMaxForSprite / 2)) ? (gameState.enemy.woundedSprite || gameState.enemy.sprite) : gameState.enemy.sprite;
    } else {
        const _playerMaxForSprite = (gameState.playerBattleMax || (gameState.player && gameState.player.health)) || 100;
        desiredPlayerSprite = (gameState.playerHealth < (_playerMaxForSprite / 2)) ? (gameState.player.woundedSprite || gameState.player.sprite) : gameState.player.sprite;
        const _enemyMaxForSprite = (gameState.enemy && gameState.enemy.health) || 100;
        desiredEnemySprite = (gameState.enemyHealth < (_enemyMaxForSprite / 2)) ? (gameState.enemy.woundedSprite || gameState.enemy.sprite) : gameState.enemy.sprite;
    }

    
    try {
        const pKarmaActive = !!(gameState.karmas && gameState.karmas.player && gameState.karmas.player.active);
        const eKarmaActive = !!(gameState.karmas && gameState.karmas.enemy && gameState.karmas.enemy.active);

        if (pKarmaActive && gameState.player.woundedSprite) {
            desiredPlayerSprite = gameState.player.woundedSprite;
        }
        if (eKarmaActive && gameState.enemy.woundedSprite) {
            desiredEnemySprite = gameState.enemy.woundedSprite;
        }
    } catch (e) {
        
        console.error('KARMA sprite override failed', e);
    }

    
    
    try {
        const pName = gameState.player && gameState.player.name;
        const eName = gameState.enemy && gameState.enemy.name;
        const facingGinger = (pName === 'Ginger' && eName === 'Navia') || (eName === 'Ginger' && pName === 'Navia');
        const facingOliver = (pName === 'Oliver' && eName === 'Navia') || (eName === 'Oliver' && pName === 'Navia');

        const isWoundedState = (isPlayer) => {
            const c = isPlayer ? gameState.player : gameState.enemy;
            const hp = isPlayer ? gameState.playerHealth : gameState.enemyHealth;
            const max = isPlayer ? (gameState.playerBattleMax || c.health) : c.health;
            const half = (max || 100) / 2;
            return gameState.forceWoundedSprites ? true : (hp < half);
        };

        if (facingGinger || facingOliver) {
            const naviaIsPlayer = pName === 'Navia';
            const naviaSprite = isWoundedState(naviaIsPlayer) ? 'karma_wounded.png' : 'karma.png';
            if (naviaIsPlayer) {
                desiredPlayerSprite = naviaSprite;
            } else {
                desiredEnemySprite = naviaSprite;
            }
        }

        if (facingGinger) {
            const gingerIsPlayer = pName === 'Ginger';
            const gingerSprite = isWoundedState(gingerIsPlayer) ? 'ginger-lockon_wounded.png' : 'ginger-lockon.png';
            if (gingerIsPlayer) {
                desiredPlayerSprite = gingerSprite;
            } else {
                desiredEnemySprite = gingerSprite;
            }
        }

        
        const michaelFacesUpriser = (pName === 'Michael' && eName === 'UPRISER') || (eName === 'Michael' && pName === 'UPRISER');
        if (michaelFacesUpriser) {
            if (pName === 'Michael') {
                desiredPlayerSprite = 'michael_zombified.png';
            } else {
                desiredEnemySprite = 'michael_zombified.png';
            }
        }
    } catch (e) {
        console.error('Navia/Ginger facing sprite override failed', e);
    }

    
    playerSprite.src = desiredPlayerSprite;
    enemySprite.src = desiredEnemySprite;

    
    try {
        const ghost = document.getElementById('player-ghost');
        if (ghost) {
            const isEmery = gameState.player && gameState.player.name === 'Emery';
            if (isEmery) {
                const _playerMaxForGhost = (gameState.playerBattleMax || (gameState.player && gameState.player.health)) || 100;
                const isWounded = gameState.playerHealth < (_playerMaxForGhost / 2);
                ghost.src = isWounded ? 'ghost_wounded.png' : 'ghost.png';
                ghost.classList.add('show');
                const syncGhostSize = () => {
                    const pr = playerSprite.getBoundingClientRect();
                    ghost.style.width = pr.width + 'px';
                    ghost.style.height = pr.height + 'px';
                };
                syncGhostSize();
                if (!window.__ghostResizeObserver) {
                    window.__ghostResizeObserver = new ResizeObserver(() => syncGhostSize());
                    window.__ghostResizeObserver.observe(playerSprite);
                }
            } else {
                ghost.classList.remove('show');
                ghost.src = '';
                ghost.style.width = '';
                ghost.style.height = '';
                if (window.__ghostResizeObserver) {
                    window.__ghostResizeObserver.disconnect();
                    window.__ghostResizeObserver = null;
                }
            }
        }
    } catch (e) {}

    
    try {
        if (gameState.lunaInfected && gameState.lunaInfectedTarget === 'enemy') {
            if (enemySprite && !enemySprite.classList.contains('luna-infected')) enemySprite.classList.add('luna-infected');
        } else {
            if (enemySprite && enemySprite.classList.contains('luna-infected')) enemySprite.classList.remove('luna-infected');
        }
    } catch (e) {  }

    
    const playerNameEl = document.getElementById('player-name');
    const enemyNameEl = document.getElementById('enemy-name');
    if (playerNameEl && gameState.player && typeof gameState.player.name !== 'undefined') {
        playerNameEl.textContent = gameState.player.name;
    }
    if (enemyNameEl && gameState.enemy && typeof gameState.enemy.name !== 'undefined') {
        enemyNameEl.textContent = gameState.enemy.name;
    }

    
    const playerMaxForUI = (gameState.playerBattleMax || gameState.player.health);
    const playerHealthPercent = (playerMaxForUI > 0) ? ((gameState.playerHealth / playerMaxForUI) * 100) : 0;
    const enemyHealthPercent = (gameState.enemy && gameState.enemy.health > 0) ? ((gameState.enemyHealth / gameState.enemy.health) * 100) : 0;

    
    document.getElementById('player-health').style.width = `${Math.max(0, Math.min(100, playerHealthPercent))}%`;
    document.getElementById('enemy-health').style.width = `${Math.max(0, Math.min(100, enemyHealthPercent))}%`;

    
    const playerMaxDisplay = (gameState.playerBattleMax || gameState.player.health);
    const playerHealthTextEl = document.querySelector('.player-section .health-text');
    const enemyHealthTextEl = document.querySelector('.enemy-section .health-text');
    if (playerHealthTextEl) playerHealthTextEl.textContent = `${gameState.playerHealth}/${playerMaxDisplay}`;
    if (enemyHealthTextEl) enemyHealthTextEl.textContent = `${gameState.enemyHealth}/${gameState.enemy.health}`;

    
    try {
        const playerHealthBar = document.querySelector('.player-section .health-bar');
        const enemyHealthBar = document.querySelector('.enemy-section .health-bar');

        const playerBleeding = !!(gameState.bleeds && gameState.bleeds.player && gameState.bleeds.player.active);
        const enemyBleeding = !!(gameState.bleeds && gameState.bleeds.enemy && gameState.bleeds.enemy.active);

        if (playerHealthBar) {
            if (playerBleeding) playerHealthBar.classList.add('bleeding');
            else playerHealthBar.classList.remove('bleeding');
        }
        if (enemyHealthBar) {
            if (enemyBleeding) enemyHealthBar.classList.add('bleeding');
            else enemyHealthBar.classList.remove('bleeding');
        }
    } catch (e) {
        
        console.error('Bleeding UI toggle failed', e);
    }

    
    const playerCDs = (gameState.abilityCooldowns && gameState.abilityCooldowns.player) ? gameState.abilityCooldowns.player : [];
    gameState.player.abilities.forEach((ability, index) => {
        const btn = abilityButtons[index];
        if (!btn) return;

        
        try {
            const isHeal = (typeof ability.damage === 'number' && ability.damage < 0);
            if (isHeal) btn.classList.add('healing-ability');
            else btn.classList.remove('healing-ability');
        } catch (e) {
            try { btn.classList.remove('healing-ability'); } catch (ee) {}
        }

        
        let sublabel = '';
        try {
            sublabel = getAbilitySublabel('player', ability, index, gameState.player, gameState.enemy) || '';
        } catch (e) {
            sublabel = '';
        }

        const cdRemaining = playerCDs[index] || 0;
        
        if (cdRemaining > 0) {
            btn.innerHTML = `<div style="font-weight:900;">${escapeHtml(ability.name)} <span style="font-weight:700;opacity:0.85;">(${cdRemaining})</span></div><div class="ability-sublabel">${escapeHtml(sublabel)}</div>`;
            btn.disabled = true;
            btn.style.opacity = '0.7';
        } else {
            btn.innerHTML = `<div style="font-weight:900;">${escapeHtml(ability.name)}</div><div class="ability-sublabel">${escapeHtml(sublabel)}</div>`;
            btn.disabled = gameState.turn !== 'player';
            btn.style.opacity = '1';
        }
    });

    
    function escapeHtml(str) {
        return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    
    const abilityPanel = document.querySelector('.ability-panel');
    if (abilityPanel && battleLog && battleLog.parentNode !== abilityPanel) {
        battleLog.parentNode.removeChild(battleLog);
        abilityPanel.insertBefore(battleLog, abilityPanel.firstChild);
    }
}


function updateCharacterSelectScreen() {
    const characterGrid = document.querySelector('.character-grid');
    characterGrid.innerHTML = ''; 
    
    
    
    
    if (!characterGrid.dataset.selectDelegationAttached) {
        characterGrid.dataset.selectDelegationAttached = '1';
        characterGrid.addEventListener('click', (ev) => {
            const card = (ev.target && ev.target.closest) ? ev.target.closest('.character-card') : null;
            if (!card) return;
            const key = String(card.getAttribute('data-character') || '').trim();
            if (!key) return;
            startBattle(key);
        });
    }
    
    
    gameState.unlockedCharacters.forEach(characterKey => {
        const character = characters[characterKey] || additionalCharacters[characterKey];
        if (!character) return;
        
        const card = document.createElement('div');
        card.className = 'character-card';
        card.dataset.character = characterKey;
        
        const levelData = gameState.characterLevels[characterKey] || { level: 1, exp: 0 };
        const expNeeded = 100 + Math.max(0, (levelData.level - 1)) * 50;

        
        const classLabel = classifyCharacterByHealing(character, characterKey);
        
        
        
        
        
        try {
            const normalized = String(classLabel || '').toUpperCase();
            if ((character && String(character.classification || '').toUpperCase() === 'PARASITE') || normalized === 'PARASITE') {
                card.classList.add('parasite-glow');
            } else if (normalized.startsWith('BRAWN')) {
                card.classList.add('red-glow');
            } else if (normalized.startsWith('SELF-SUPPORT')) {
                card.classList.add('green-glow');
            }
        } catch (e) {
            
        }
        
        card.innerHTML = `
            <img src="${character.sprite}" alt="${character.name}" class="character-portrait">
            <h3>${character.name.toUpperCase()}</h3>
            <div class="level-display">Level ${levelData.level}</div>
            <div class="class-display">${classLabel}</div>
            <div class="exp-display">EXP: ${levelData.exp}/${expNeeded}</div>
        `;
        
        try {
            if ((additionalCharacters && additionalCharacters[characterKey] && additionalCharacters[characterKey].shs) ||
                (characters && characters[characterKey] && characters[characterKey].shs)) {
                card.setAttribute('data-shs', 'true');
            }
        } catch (e) {  }
        
        characterGrid.appendChild(card);
    });
}



function useAbility(abilityIndex) {
    if (gameState.turn !== 'player') return;
    
    
    if (gameState.playerHealth <= 0) {
        endBattle(false);
        return;
    }

    
    const playerCDs = (gameState.abilityCooldowns && gameState.abilityCooldowns.player) ? gameState.abilityCooldowns.player : [];
    if ((playerCDs[abilityIndex] || 0) > 0) {
        addToBattleLog(`${gameState.player.name} cannot use ${gameState.player.abilities[abilityIndex].name} for ${playerCDs[abilityIndex]} more turn(s)!`);
        return;
    }

    const ability = gameState.player.abilities[abilityIndex];
    
    
    let actualDamage = ability.damage;
    if ((gameState.player.name === "Reflection" || gameState.player.name === "Kyle") && ability.name === "Final Performance") {
        
        if (gameState.playerHealth <= 30) {
            actualDamage = 90;
        } else {
            actualDamage = 15; 
        }
    }


    
    
    if (gameState.enemy.name === "Dragon" && gameState.player.name === "Sally" && actualDamage > 0) {
        
        actualDamage = Math.floor(actualDamage * 0.7);
    }
    
    
    if (gameState.player.name === "Seven") {
        switch (ability.name) {
            case "Lucky Strike":
                
                actualDamage = Math.random() > 0.5 ? ability.damage * 2 : Math.floor(ability.damage / 2);
                break;
            case "Dice Roll":
                
                actualDamage = Math.floor(Math.random() * 21) + 5;
                break;
            case "Jackpot":
                
                actualDamage = Math.random() > 0.7 ? ability.damage : Math.floor(ability.damage / 5);
                break;
        }
    }

    
    const naviaSpecial = isNaviaSpecialBattle();
    if (naviaSpecial && gameState.player && gameState.player.name === 'Navia') {
        
        if (abilityIndex === 0 && typeof ability.damage === 'number' && ability.damage > 0) {
            const oppMax = (gameState.enemy && typeof gameState.enemy.health === 'number') ? gameState.enemy.health : 0;
            actualDamage = Math.floor(oppMax * 0.25);
        }
    }

    
    if (actualDamage > 0) {
        
        
        try {
            if (gameState.stainlessBattle && gameState.player && gameState.player.name === 'The Knight') {
                actualDamage = Math.round(actualDamage * 0.8);
            }
        } catch (e) {  }

        
        try {
            if (gameState.player && gameState.player.name === 'Tao' && ability && ability.name === 'Duality Wave') {
                
                const target = gameState.enemy || {};
                const hadHeals = Array.isArray(target.abilities) && target.abilities.some(a => typeof a.damage === 'number' && a.damage < 0);
                gameState.curses = gameState.curses || { player: null, enemy: null };
                gameState.curses.enemy = { turns: 3, hadHeals: !!hadHeals, active: true };
                addToBattleLog(`${gameState.enemy.name} is CURSED by Duality Wave for 3 turns!`);
            }
        } catch (e) { console.error('Failed to apply Cursed from Tao (player)', e); }

        
        if (gameState.player && gameState.player.name === 'Thirteen' && ability.name === 'Luck Drain') {
            const reduceBy = actualDamage;
            
            const newMax = Math.max(10, (gameState.enemy.health || 0) - reduceBy);
            gameState.enemy.health = newMax;
            
            gameState.enemyHealth = Math.min(gameState.enemyHealth, newMax);
            addToBattleLog(`${gameState.player.name} uses ${ability.name} and reduces ${gameState.enemy.name}'s MAX HP by ${reduceBy}!`);
        } else {
            
            try {
                const actor = gameState.player;
                const actorName = actor && actor.name ? actor.name : '';
                const pacifists = ['Penelope', 'Feathers', 'Lavender', 'Goldie', 'Caldera', 'Emery', 'Finn', 'Subject 192', 'Zed', 'Evergreen', 'Kitten', 'Navia'];
                const targetName = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';
                const isPacifistTarget = pacifists.includes(targetName);
                const abilityNameSafe = (ability && ability.name) ? ability.name : '';

                if ((actorName === 'Judgement' || actorName === 'Navia') && abilityNameSafe === 'Bone Barrage' && !isPacifistTarget) {
                    
                    let karmaAmount = actualDamage;
                    let bonusDamage = 0;
                    if (actorName === 'Navia' && naviaSpecial) {
                        karmaAmount = 25;
                        bonusDamage = 20;
                    }
                    if (bonusDamage > 0) {
                        let dmg = bonusDamage;
                        try {
                            const enemyCurse = (gameState.curses && gameState.curses.enemy && gameState.curses.enemy.active) ? gameState.curses.enemy : null;
                            if (enemyCurse && enemyCurse.hadHeals === false) {
                                dmg = Math.ceil(dmg * 1.10);
                            }
                        } catch (e) {  }
                        try {
                            if (gameState.vulnerable && gameState.vulnerable.enemy && gameState.vulnerable.enemy.active) {
                                dmg = Math.round(dmg * 1.25);
                                addToBattleLog(`${gameState.enemy.name} is VULNERABLE! Damage increased.`);
                            }
                        } catch (e) { }
                        try {
                            if (gameState.protected && gameState.protected.enemy && gameState.protected.enemy.active) {
                                dmg = Math.floor(dmg * 0.65);
                                addToBattleLog(`${gameState.enemy.name} is PROTECTED! Damage reduced.`);
                            }
                        } catch (e) { }
                        setEnemyHealth(Math.max(0, gameState.enemyHealth - dmg));
                        checkProtectedTrigger('enemy');
                        addToBattleLog(`${gameState.player.name} uses ${ability.name} for ${dmg} damage!`);
                    }
                    addToBattleLog(`${gameState.player.name} uses ${ability.name} and inflicts KARMA (${karmaAmount}) on ${gameState.enemy.name}!`);
                    startKarma('enemy', karmaAmount, ability.name || '');
                } else {
                    
                    let damageToApply = actualDamage;
                    try {
                        const enemyCurse = (gameState.curses && gameState.curses.enemy && gameState.curses.enemy.active) ? gameState.curses.enemy : null;
                        if (enemyCurse && enemyCurse.hadHeals === false) {
                            damageToApply = Math.ceil(damageToApply * 1.10);
                        }
                    } catch (e) {  }

                    
                    
                    

                    
                    try {
                        if (gameState.vulnerable && gameState.vulnerable.enemy && gameState.vulnerable.enemy.active) {
                            damageToApply = Math.round(damageToApply * 1.25);
                            addToBattleLog(`${gameState.enemy.name} is VULNERABLE! Damage increased.`);
                        }
                    } catch (e) {  }

                    
                    try {
                        if (gameState.protected && gameState.protected.enemy && gameState.protected.enemy.active) {
                            damageToApply = Math.floor(damageToApply * 0.65);
                            addToBattleLog(`${gameState.enemy.name} is PROTECTED! Damage reduced.`);
                        }
                    } catch (e) {  }

                    setEnemyHealth(Math.max(0, gameState.enemyHealth - damageToApply));
                    checkProtectedTrigger('enemy');
                    addToBattleLog(`${gameState.player.name} uses ${ability.name} for ${damageToApply} damage!`);
                    
                    try {
                        if ((gameState.enemyHealth || 0) > 0) {
                            const enemyKey = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name.toLowerCase() : '';
                            
                            playVoiceline(enemyKey, 'damage' + (Math.floor(Math.random() * 3) + 1));
                        }

                        
                        try {
                            const enemyMax = (gameState.enemy && typeof gameState.enemy.health === 'number') ? gameState.enemy.health : null;
                            const attackerKey = (gameState.player && gameState.player.name) ? gameState.player.name.toLowerCase() : '';
                            if (enemyMax && (gameState.enemyHealth || 0) > 0 && (gameState.enemyHealth < (enemyMax / 2))) {
                                if (gameState.player && gameState.player.name === 'The Roden') {
                                    playVoiceline('roden', 'almost_win', "The Roden: Getting tired, are we?");
                                } else {
                                    playVoiceline(attackerKey, 'almost_win');
                                }
                            }
                        } catch (innerErr) {
                            
                        }

                        
                    } catch (e) {  }

                    
                    
                    
                    try {
                        const actorKey = Object.keys(characters).find(k => characters[k] === actor) ||
                                         Object.keys(additionalCharacters).find(k => additionalCharacters[k] === actor);
                        const firstAbilityDamage = (actor && Array.isArray(actor.abilities) && actor.abilities[0]) ? (actor.abilities[0].damage || 0) : Infinity;
                        const isWeakerThanFirst = (typeof ability.damage === 'number' && typeof firstAbilityDamage === 'number') ? (ability.damage < firstAbilityDamage) : false;

                        const excludedActors = ['Awareness', 'Martial Artist', 'Seven'];
                        const actorExcluded = excludedActors.includes(actorName);

                        if (!actorExcluded && isWeakerThanFirst) {
                            
                            
                            const bleedTotal = Math.max(1, Math.floor(Math.abs(ability.damage) / 2));
                            startBleed('enemy', bleedTotal, ability.name || '');
                        }
                    } catch (e) { console.error('Failed to apply bleeding after player attack', e); }
                }
            } catch (e) {
                console.error('Karma check failed (player attack)', e);
                
                gameState.enemyHealth = Math.max(0, gameState.enemyHealth - actualDamage);
                addToBattleLog(`${gameState.player.name} uses ${ability.name} for ${actualDamage} damage!`);
            }
        }
    } else {
        
        const playerBattleMaxClamp = (gameState.playerBattleMax || gameState.player.health);

        
        let healAmount = -actualDamage;

        
        const actorDef = gameState.player;
        const opponentDef = gameState.enemy;
        
        let actorKey = Object.keys(characters).find(k => characters[k] === actorDef) ||
                       Object.keys(additionalCharacters).find(k => additionalCharacters[k] === actorDef);
        let multiplier = computeHealingMultiplier(actorDef, opponentDef, actorKey);
        if (naviaSpecial && gameState.player && gameState.player.name === 'Navia') {
            multiplier = 3;
        }

        const baseHeal = Math.round((-ability.damage));
        healAmount = Math.round(healAmount * multiplier);

        
        
        const playerCurse = (gameState.curses && gameState.curses.player && gameState.curses.player.active) ? gameState.curses.player : null;
        if (playerCurse && playerCurse.hadHeals) {
            
            
            try {
                const playerObj = gameState.player || {};
                if (playerObj && playerObj.woundedSprite) {
                    const original = playerObj.sprite;
                    playerObj.sprite = playerObj.woundedSprite;
                    
                    try { updateBattleUI(); } catch (e) {}
                    
                    setTimeout(() => {
                        try {
                            if (playerObj) {
                                playerObj.sprite = original || playerObj.sprite;
                                try { updateBattleUI(); } catch (err) {}
                            }
                        } catch (e) {  }
                    }, 3000);
                }
            } catch (e) {  }

            
            gameState.playerHealth = Math.max(10, gameState.playerHealth - healAmount);

            addToBattleLog(`${gameState.player.name} is CURSED! ${ability.name} hurts them for ${healAmount} HP instead of healing!`);
            
        } else {
            
            
            if (healAmount < 16) {
                
                
                try {
                    
                    const prevHP = gameState.playerHealth;
                    gameState.playerHealth = Math.min(playerBattleMaxClamp, gameState.playerHealth + healAmount);
                    const actualApplied = gameState.playerHealth - prevHP;
                    addToBattleLog(`${gameState.player.name} uses ${ability.name} and heals ${actualApplied} HP!`);
                } catch (e) {
                    
                    try { gameState.playerHealth = Math.min(playerBattleMaxClamp, (gameState.playerHealth || 0) + healAmount); } catch (ee) {}
                    addToBattleLog(`${gameState.player.name} uses ${ability.name} and heals ${healAmount} HP!`);
                }

                try {
                    
                    startRegen('player', healAmount, ability.name || '');
                } catch (e) {
                    
                    console.error('startRegen failed:', e);
                }

                
            } else {
                gameState.playerHealth = Math.min(playerBattleMaxClamp, gameState.playerHealth + healAmount);
                addToBattleLog(`${gameState.player.name} uses ${ability.name} and heals ${healAmount} HP!`);
                
                try { clearBleed('player'); } catch (e) {}

                
                try {
                    const cooldownTurns = (typeof ability.cooldown === 'number' && ability.cooldown > 0) ? Math.floor(ability.cooldown) : 4;
                    if (healAmount > 30) {
                        startVulnerable('player', cooldownTurns, ability.name || '');
                        addToBattleLog(`${gameState.player.name} is VULNERABLE for ${cooldownTurns} turn(s)!`);
                    }
                } catch (e) {
                    console.error('Failed to apply Vulnerable after large heal (player)', e);
                }

                
                try {
                    const cooldownTurns = (typeof ability.cooldown === 'number' && ability.cooldown > 0) ? Math.floor(ability.cooldown) : 4;
                    if (healAmount > 30) {
                        startVulnerable('player', cooldownTurns, ability.name || '');
                        addToBattleLog(`${gameState.player.name} is VULNERABLE for ${cooldownTurns} turn(s)!`);
                    }
                } catch (e) {
                    console.error('Failed to apply Vulnerable after large heal (player)', e);
                }
            }
        }

        
        try {
            if (naviaSpecial && gameState.player && gameState.player.name === 'Navia') {
                const enemyHealMax = (gameState.enemy && typeof gameState.enemy.health === 'number') ? gameState.enemy.health : 0;
                gameState.enemyHealth = Math.min(enemyHealMax || gameState.enemyHealth, gameState.enemyHealth + 10);
                addToBattleLog(`${gameState.enemy.name} recovers 10 HP from ${gameState.player.name}'s honeyed touch!`);
                try { updateBattleUI(); } catch (e) { }
            }
        } catch (e) { }

        
        try {
            if (gameState.player && gameState.player.name === 'Subject 192' && (ability.name || '').toLowerCase() === 'cannibalism') {
                
                const reductionBase = 5;
                const reduction = Math.round(reductionBase * (multiplier > 1 ? 2 : 1));
                
                const prevMax = gameState.playerBattleMax || gameState.player.health || 1;
                const newMax = Math.max(10, prevMax - reduction);
                gameState.playerBattleMax = newMax;
                
                if (gameState.player) gameState.player.health = newMax;
                
                if (gameState.playerHealth > newMax) gameState.playerHealth = newMax;
                addToBattleLog(`${gameState.player.name}'s Cannibalism reduces MAX HP by ${reduction}!`);
            }
        } catch (e) {
            console.error('Subject192 Cannibalism max-HP reduction failed', e);
        }
    }

    
    
    if (abilityIndex !== 0) {
        const isHeal = (ability.damage || 0) < 0;
        
        const defaultMaxCd = isHeal ? 2 : 4;
        const appliedCd = (typeof ability.cooldown === 'number') ? ability.cooldown : defaultMaxCd;

        
        if (!gameState.abilityCooldowns) gameState.abilityCooldowns = { player: [], enemy: [] };

        
        if (gameState.player && gameState.player.name === 'Awareness') {
            
        } else {
            gameState.abilityCooldowns.player[abilityIndex] = appliedCd;
        }
    }

    
    if (actualDamage > 0) {
        const playerCharKey = Object.keys(characters).find(key => characters[key] === gameState.player) || 
                              Object.keys(additionalCharacters).find(key => additionalCharacters[key] === gameState.player);
        if (playerCharKey) {
            if (!gameState.characterLevels[playerCharKey]) {
                gameState.characterLevels[playerCharKey] = { level: 1, exp: 0 };
            }
            const charData = gameState.characterLevels[playerCharKey];

            
            const baseExpGain = 10;

            
            let multiplier = 1;
            try {
                const nameCheck = (gameState.player && gameState.player.name) ? gameState.player.name : '';
                if (nameCheck === 'Maturity') {
                    multiplier = Math.max(1, Number(charData.level || 1));
                }
            } catch (e) { multiplier = 1; }

            const expGain = Math.round(baseExpGain * multiplier);
            charData.exp += expGain;

            
            const expNeeded = 100 + Math.max(0, (charData.level - 1)) * 50;
            if (charData.exp >= expNeeded && charData.level < 100) {
                charData.level++;
                charData.exp = charData.exp - expNeeded;
                addToBattleLog(`${gameState.player.name} leveled up to ${charData.level}!`);
            }

            
            saveGameData();
        }
    }

    updateBattleUI();

    if (gameState.enemyHealth <= 0) {
        endBattle(true);
        return;
    }

    
    gameState.turn = 'enemy';
    setTimeout(enemyTurn, 1500);
}

function enemyTurn() {
    
    if (gameState.enemyHealth <= 0) {
        endBattle(true);
        return;
    }

    
    
    try {
        if (gameState.stainlessBattle && gameState.enemy && gameState.enemy.name === 'Wachi' && Number(gameState.enemyHealth) === 10) {
            addToBattleLog("Wachi stares blankly and refuses to move...");
            
            gameState.turn = 'enemy';
            updateBattleUI();

            
            try {
                if (gameState.currentBattleMusic && typeof gameState.currentBattleMusic.pause === 'function') {
                    try { gameState.currentBattleMusic.pause(); } catch (e) {}
                    gameState.currentBattleMusic = null;
                }
                if (window.__finalFightBGM && typeof window.__finalFightBGM.pause === 'function') {
                    try { window.__finalFightBGM.pause(); } catch (e) {}
                    window.__finalFightBGM = null;
                }
            } catch (e) {  }

            
            import('./act1.js').then(mod => {
                try {
                    if (mod && typeof mod.default === 'function') mod.default();
                } catch (err) {
                    console.error('act1.js executed but failed', err);
                }
            }).catch(err => {
                console.error('Failed to load act1.js', err);
            });

            
            return;
        }
    } catch (e) {
        
        console.error('Stainless Wachi refusal / act1 trigger failed', e);
    }

    
    tickCooldownsFor('enemy');

    
    const enemyAbilities = gameState.enemy.abilities || [];
    const enemyCDs = (gameState.abilityCooldowns && gameState.abilityCooldowns.enemy) ? gameState.abilityCooldowns.enemy : [];

    
    
    let availableIndexes = enemyAbilities.map((a, i) => i)
        .filter(i => !(enemyCDs[i] > 0));

    
    try {
        const enemyVuln = !!(gameState.vulnerable && gameState.vulnerable.enemy && gameState.vulnerable.enemy.active);
        if (enemyVuln) {
            const nonHeal = availableIndexes.filter(i => {
                const a = enemyAbilities[i];
                return !(a && typeof a.damage === 'number' && a.damage < 0);
            });
            
            if (nonHeal.length > 0) {
                availableIndexes = nonHeal;
            }
        }
    } catch (e) {  }

    let chosenIndex;
    
    if (availableIndexes.length > 0) {
        chosenIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    } else {
        
        
        let minCd = Infinity;
        let minIdx = 0;
        for (let i = 0; i < enemyCDs.length; i++) {
            const cd = enemyCDs[i] || 0;
            
            const abilityName = (enemyAbilities[i] && enemyAbilities[i].name) ? String(enemyAbilities[i].name).toLowerCase() : '';
            if (gameState.enemy && gameState.enemy.name === 'P' && abilityName === 'battery') {
                continue;
            }
            if (cd < minCd) {
                minCd = cd;
                minIdx = i;
            }
        }

        
        if (minCd === Infinity) {
            
            minCd = Infinity;
            for (let i = 0; i < enemyCDs.length; i++) {
                const cd = enemyCDs[i] || 0;
                if (cd < minCd) {
                    minCd = cd;
                    minIdx = i;
                }
            }
        }

        chosenIndex = minIdx;
        addToBattleLog(`${gameState.enemy.name} forces an action despite cooldowns...`);
        
    }

    const randomAbility = enemyAbilities[chosenIndex];

    
    
    try {
        if (gameState.stainlessBattle && gameState.enemy && gameState.enemy.name === 'The Knight' && typeof randomAbility.damage === 'number' && randomAbility.damage > 0) {
            
            
            
            
        }
    } catch (e) {  }

    
    let actualDamage = randomAbility.damage;
    if ((gameState.enemy.name === "Reflection" || gameState.enemy.name === "Kyle") && randomAbility.name === "Final Performance") {
        if (gameState.enemyHealth <= 30) {
            actualDamage = 90;
        } else {
            actualDamage = 15;
        }
    }
    
    
    if (gameState.enemy.name === "Dragon" && gameState.player.name === "Sally" && actualDamage > 0) {
        actualDamage = Math.floor(actualDamage * 0.7);
    }

    
    const naviaSpecial = isNaviaSpecialBattle();
    if (naviaSpecial && gameState.enemy && gameState.enemy.name === 'Navia') {
        
        if (chosenIndex === 0 && typeof randomAbility.damage === 'number' && randomAbility.damage > 0) {
            const playerMax = (gameState.player && typeof gameState.player.health === 'number') ? gameState.player.health : 0;
            actualDamage = Math.floor(playerMax * 0.25);
        }
    }

    
    
    
    try {
        if (gameState.stainlessBattle && gameState.enemy && gameState.enemy.name === 'The Knight' && actualDamage > 0) {
            actualDamage = Math.round(actualDamage * 0.8);
        }
    } catch (e) {  }

    
    if (actualDamage > 0) {
        
        try {
            if (gameState.enemy && (gameState.enemy.name === 'Judgement' || gameState.enemy.name === 'Navia') && randomAbility && randomAbility.name === 'Bone Barrage') {
                const pacifists = ['Penelope', 'Feathers', 'Lavender', 'Goldie', 'Caldera', 'Emery', 'Finn', 'Subject 192', 'Zed', 'Evergreen', 'Kitten', 'Navia'];
                const targetName = (gameState.player && gameState.player.name) ? gameState.player.name : '';
                const isPacifistTarget = pacifists.includes(targetName);
                if (!isPacifistTarget) {
                    let karmaAmount = actualDamage;
                    let bonusDamage = 0;
                    if (gameState.enemy.name === 'Navia' && naviaSpecial) {
                        karmaAmount = 25;
                        bonusDamage = 20;
                    }
                    if (bonusDamage > 0) {
                        let dmg = bonusDamage;
                        try {
                            const playerCurse = (gameState.curses && gameState.curses.player && gameState.curses.player.active) ? gameState.curses.player : null;
                            if (playerCurse && playerCurse.hadHeals === false) {
                                dmg = Math.ceil(dmg * 1.10);
                            }
                        } catch (e) { }
                        try {
                            if (gameState.vulnerable && gameState.vulnerable.player && gameState.vulnerable.player.active) {
                                dmg = Math.round(dmg * 1.25);
                                addToBattleLog(`${gameState.player.name} is VULNERABLE! Damage increased.`);
                            }
                        } catch (e) { }
                        try {
                            if (gameState.protected && gameState.protected.player && gameState.protected.player.active) {
                                dmg = Math.floor(dmg * 0.65);
                                addToBattleLog(`${gameState.player.name} is PROTECTED! Damage reduced.`);
                            }
                        } catch (e) { }
                        gameState.playerHealth = Math.max(0, gameState.playerHealth - dmg);
                        checkProtectedTrigger('player');
                        addToBattleLog(`${gameState.enemy.name} uses ${randomAbility.name} for ${dmg} damage!`);
                    }
                    addToBattleLog(`${gameState.enemy.name} uses ${randomAbility.name} and inflicts KARMA (${karmaAmount}) on ${gameState.player.name}!`);
                    startKarma('player', karmaAmount, randomAbility.name || '');
                    actualDamage = 0;
                }
            }
        } catch (e) {
            console.error('Failed to apply KARMA from Judgement (enemy)', e);
        }

        
        try {
            if (gameState.enemy && gameState.enemy.name === 'Tao' && randomAbility && randomAbility.name === 'Duality Wave') {
                const target = gameState.player || {};
                const hadHeals = Array.isArray(target.abilities) && target.abilities.some(a => typeof a.damage === 'number' && a.damage < 0);
                gameState.curses = gameState.curses || { player: null, enemy: null };
                gameState.curses.player = { turns: 3, hadHeals: !!hadHeals, active: true };
                addToBattleLog(`${gameState.player.name} is CURSED by Duality Wave for 3 turns!`);
                
                try { updateBattleUI(); } catch (uiErr) {  }
            }
        } catch (e) { console.error('Failed to apply Cursed from Tao (enemy)', e); }

        
        if (gameState.enemy && gameState.enemy.name === 'Thirteen' && randomAbility.name === 'Luck Drain') {
            const reduceBy = actualDamage;
            
            const newMax = Math.max(10, (gameState.player.health || 0) - reduceBy);
            gameState.player.health = newMax;
            
            if (gameState.playerBattleMax) gameState.playerBattleMax = Math.min(gameState.playerBattleMax, newMax);
            
            gameState.playerHealth = Math.min(gameState.playerHealth, newMax);
            addToBattleLog(`${gameState.enemy.name} uses ${randomAbility.name} and reduces ${gameState.player.name}'s MAX HP by ${reduceBy}!`);
        } else {
            
            let damageToApply = actualDamage;
            try {
                const playerCurse = (gameState.curses && gameState.curses.player && gameState.curses.player.active) ? gameState.curses.player : null;
                if (playerCurse && playerCurse.hadHeals === false) {
                    damageToApply = Math.ceil(damageToApply * 1.10);
                }
            } catch (e) {  }

            
            try {
                if (gameState.vulnerable && gameState.vulnerable.player && gameState.vulnerable.player.active) {
                    damageToApply = Math.round(damageToApply * 1.25);
                    addToBattleLog(`${gameState.player.name} is VULNERABLE! Damage increased.`);
                }
            } catch (e) {  }

            
            try {
                if (gameState.protected && gameState.protected.player && gameState.protected.player.active) {
                    damageToApply = Math.floor(damageToApply * 0.65);
                    addToBattleLog(`${gameState.player.name} is PROTECTED! Damage reduced.`);
                }
            } catch (e) {  }

            if (damageToApply > 0) {
                gameState.playerHealth = Math.max(0, gameState.playerHealth - damageToApply);
                checkProtectedTrigger('player');
                addToBattleLog(`${gameState.enemy.name} uses ${randomAbility.name} for ${damageToApply} damage!`);
                
                try {
                    if ((gameState.playerHealth || 0) > 0) {
                        const playerKey = (gameState.player && gameState.player.name) ? gameState.player.name.toLowerCase() : '';
                        playVoiceline(playerKey, 'damage' + (Math.floor(Math.random() * 3) + 1));
                    }

                    
                    try {
                        const playerMax = (gameState.player && typeof gameState.player.health === 'number') ? gameState.player.health : null;
                        const enemyKey = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name.toLowerCase() : '';
                        if (playerMax && (gameState.playerHealth || 0) > 0 && (gameState.playerHealth < (playerMax / 2))) {
                            if (gameState.enemy && gameState.enemy.name === 'The Roden') {
                                playVoiceline('roden', 'almost_win', "The Roden: Getting tired, are we?");
                            } else {
                                playVoiceline(enemyKey, 'almost_win');
                            }
                        }
                    } catch (innerErr) {
                        
                    }
                } catch (e) {  }
            }
        }

        
        
        
        try {
            const actor = gameState.enemy;
            const actorName = actor && actor.name ? actor.name : '';
            const firstAbilityDamage = (actor && Array.isArray(actor.abilities) && actor.abilities[0]) ? (actor.abilities[0].damage || 0) : Infinity;
            const isWeakerThanFirst = (typeof randomAbility.damage === 'number' && typeof firstAbilityDamage === 'number') ? (randomAbility.damage < firstAbilityDamage) : false;

            const excludedActors = ['Awareness', 'Martial Artist', 'Seven'];
            const actorExcluded = excludedActors.includes(actorName);

            if (!actorExcluded && isWeakerThanFirst) {
                const bleedTotal = Math.max(1, Math.floor(Math.abs(randomAbility.damage) / 2));
                startBleed('player', bleedTotal, randomAbility.name || '');
            }
        } catch (e) { console.error('Failed to apply bleeding after enemy attack', e); }
    } else {
        
        const enemyMax = gameState.enemy.health || 100;

        
        let healAmount = -actualDamage;

        
        const actorDef = gameState.enemy;
        const opponentDef = gameState.player;
        let actorKey = Object.keys(characters).find(k => characters[k] === actorDef) ||
                       Object.keys(additionalCharacters).find(k => additionalCharacters[k] === actorDef);
        let multiplier = computeHealingMultiplier(actorDef, opponentDef, actorKey);
        if (naviaSpecial && gameState.enemy && gameState.enemy.name === 'Navia') {
            multiplier = 3;
        }

        healAmount = Math.round(healAmount * multiplier);


        
        
        
        try {
            if (gameState.stainlessBattle && gameState.enemy && gameState.enemy.name === 'Wachi') {
                healAmount = 40;
            }
            if (gameState.stainlessBattle && gameState.enemy && gameState.enemy.name === 'The Knight') {
                const pct = 0.20 + Math.random() * 0.05; 
                healAmount = Math.round(healAmount * (1 + pct));
            }
        } catch (e) {  }

        
        
        const enemyCurse = (gameState.curses && gameState.curses.enemy && gameState.curses.enemy.active) ? gameState.curses.enemy : null;
        if (enemyCurse && enemyCurse.hadHeals) {
            
            
            try {
                const enemyObj = gameState.enemy || {};
                if (enemyObj && enemyObj.woundedSprite) {
                    const originalE = enemyObj.sprite;
                    enemyObj.sprite = enemyObj.woundedSprite;
                    try { updateBattleUI(); } catch (e) {}
                    setTimeout(() => {
                        try {
                            if (enemyObj) {
                                enemyObj.sprite = originalE || enemyObj.sprite;
                                try { updateBattleUI(); } catch (err) {}
                            }
                        } catch (e) {  }
                    }, 3000);
                }
            } catch (e) {  }

            
            gameState.enemyHealth = Math.max(10, gameState.enemyHealth - healAmount);

            addToBattleLog(`${gameState.enemy.name} is CURSED! ${randomAbility.name} hurts them for ${healAmount} HP instead of healing!`);
            
        } else {
            
            if (healAmount < 16) {
                try {
                    
                    
                    const prevHP = gameState.enemyHealth;
                    gameState.enemyHealth = Math.min(enemyMax, gameState.enemyHealth + healAmount);
                    const actualApplied = gameState.enemyHealth - prevHP;
                    addToBattleLog(`${gameState.enemy.name} uses ${randomAbility.name} and heals ${actualApplied} HP!`);
                    startRegen('enemy', healAmount, randomAbility.name || '');
                } catch (e) {
                    
                    gameState.enemyHealth = Math.min(enemyMax, gameState.enemyHealth + healAmount);
                    addToBattleLog(`${gameState.enemy.name} uses ${randomAbility.name} and heals ${healAmount} HP!`);
                }
                
            } else {
                gameState.enemyHealth = Math.min(enemyMax, gameState.enemyHealth + healAmount);
                addToBattleLog(`${gameState.enemy.name} uses ${randomAbility.name} and heals ${healAmount} HP!`);
                try { clearBleed('enemy'); } catch (e) {}

                
                try {
                    const cooldownTurns = (typeof randomAbility.cooldown === 'number' && randomAbility.cooldown > 0) ? Math.floor(randomAbility.cooldown) : 4;
                    if (healAmount > 30) {
                        startVulnerable('enemy', cooldownTurns, randomAbility.name || '');
                        addToBattleLog(`${gameState.enemy.name} is VULNERABLE for ${cooldownTurns} turn(s)!`);
                    }
                } catch (e) {
                    console.error('Failed to apply Vulnerable after large heal (enemy)', e);
                }

                
                try {
                    const cooldownTurns = (typeof randomAbility.cooldown === 'number' && randomAbility.cooldown > 0) ? Math.floor(randomAbility.cooldown) : 4;
                    if (healAmount > 30) {
                        startVulnerable('enemy', cooldownTurns, randomAbility.name || '');
                        addToBattleLog(`${gameState.enemy.name} is VULNERABLE for ${cooldownTurns} turn(s)!`);
                    }
                } catch (e) {
                    console.error('Failed to apply Vulnerable after large heal (enemy)', e);
                }
            }
        }

        
        try {
            if (naviaSpecial && gameState.enemy && gameState.enemy.name === 'Navia') {
                const playerHealMax = (gameState.player && typeof gameState.player.health === 'number') ? gameState.player.health : 0;
                gameState.playerHealth = Math.min(playerHealMax || gameState.playerHealth, gameState.playerHealth + 10);
                addToBattleLog(`${gameState.player.name} recovers 10 HP from ${gameState.enemy.name}'s honeyed touch!`);
                try { updateBattleUI(); } catch (e) { }
            }
        } catch (e) { }

        
        try {
            if (gameState.enemy && gameState.enemy.name === 'Subject 192' && (randomAbility.name || '').toLowerCase() === 'cannibalism') {
                
                const reductionBase = 5;
                const reduction = Math.round(reductionBase * (multiplier > 1 ? 2 : 1));
                const prevMax = gameState.enemy.health || 1;
                const newMax = Math.max(10, prevMax - reduction);
                gameState.enemy.health = newMax;
                
                if (gameState.enemyHealth > newMax) gameState.enemyHealth = newMax;
                addToBattleLog(`${gameState.enemy.name}'s Cannibalism reduces MAX HP by ${reduction}!`);
            }
        } catch (e) {
            console.error('Subject192 Cannibalism enemy max-HP reduction failed', e);
        }
    }



    
    
    if (chosenIndex !== 0) {
        const isHeal = (randomAbility.damage || 0) < 0;
        const maxCd = isHeal ? 2 : 4;
        if (!gameState.abilityCooldowns) gameState.abilityCooldowns = { player: [], enemy: [] };

        
        if (gameState.enemy && gameState.enemy.name === 'Awareness') {
            
        } else {
            gameState.abilityCooldowns.enemy[chosenIndex] = maxCd;
        }
    }

    updateBattleUI();

    if (gameState.playerHealth <= 0) {
        endBattle(false);
        return;
    }

    
    gameState.turn = 'player';
    
    tickCooldownsFor('player');
    updateBattleUI();
}

function clearZeroPassive() {
    
    try {
        if (window.__zeroRegenInterval) {
            clearInterval(window.__zeroRegenInterval);
            window.__zeroRegenInterval = null;
        }
    } catch (e) {  }
}

 
function setupZeroPassive() {
    try {
        
        clearZeroPassive();

        
        const playerIsZero = gameState.player && gameState.player.name === 'Zero';
        const enemyIsZero = gameState.enemy && gameState.enemy.name === 'Zero';

        
        if (!playerIsZero && !enemyIsZero) return;

        
        const zeroDef = (playerIsZero ? gameState.player : (enemyIsZero ? gameState.enemy : null));
        const passive = (zeroDef && zeroDef.passive) ? zeroDef.passive : { regenPerTick: 1, regenIntervalMs: 2000 };
        const healPerTick = Number(passive.regenPerTick) || 1;

        
        const MIN_DELAY = 0; 
        const MAX_DELAY = Number.MAX_SAFE_INTEGER; 

        
        const HEAL_THRESHOLD_FRAC = 0.6; 

        
        
        function computeDelayFromHpFraction(hpFrac) {
            const f = Math.max(0, Math.min(1, hpFrac));
            
            return Math.round(MAX_DELAY - ( (1 - f) * (MAX_DELAY - MIN_DELAY) ));
        }

        
        function scheduleNextTick() {
            
            window.__zeroRegenTimer = setTimeout(() => {
                try {
                    let changed = false;

                    
                    if (playerIsZero && gameState.playerHealth > 0) {
                        const maxHP = gameState.player.health || 100;
                        const hpFrac = (maxHP > 0) ? (gameState.playerHealth / maxHP) : 0;

                        if (hpFrac < HEAL_THRESHOLD_FRAC) {
                            
                            const newHP = Math.min(maxHP, gameState.playerHealth + healPerTick);
                            if (newHP !== gameState.playerHealth) {
                                gameState.playerHealth = newHP;
                                changed = true;
                            }
                        }

                        
                        const afterFrac = (maxHP > 0) ? (gameState.playerHealth / maxHP) : 0;
                        const delayForNext = computeDelayFromHpFraction(afterFrac);
                        pendingDelays.push(delayForNext);
                    }

                    
                    if (enemyIsZero && gameState.enemyHealth > 0) {
                        const maxHP = gameState.enemy.health || 100;
                        const hpFrac = (maxHP > 0) ? (gameState.enemyHealth / maxHP) : 0;

                        if (hpFrac < HEAL_THRESHOLD_FRAC) {
                            const newHP = Math.min(maxHP, gameState.enemyHealth + healPerTick);
                            if (newHP !== gameState.enemyHealth) {
                                gameState.enemyHealth = newHP;
                                changed = true;
                            }
                        }

                        const afterFrac = (maxHP > 0) ? (gameState.enemyHealth / maxHP) : 0;
                        const delayForNext = computeDelayFromHpFraction(afterFrac);
                        pendingDelays.push(delayForNext);
                    }

                    if (changed) {
                        updateBattleUI();
                    }

                    
                    if (pendingDelays.length > 0) {
                        const chosen = Math.max(MIN_DELAY, Math.min(MAX_DELAY, Math.min(...pendingDelays)));
                        pendingDelays.length = 0; 
                        
                        scheduleNextTickWithDelay(chosen);
                    } else {
                        
                        window.__zeroRegenTimer = null;
                    }
                } catch (e) {
                    
                    console.error('Zero regen tick error', e);
                    
                    scheduleNextTickWithDelay(MAX_DELAY);
                }
            }, 0); 
        }

        
        function scheduleNextTickWithDelay(ms) {
            
            if (window.__zeroRegenTimer) {
                clearTimeout(window.__zeroRegenTimer);
                window.__zeroRegenTimer = null;
            }
            window.__zeroRegenTimer = setTimeout(() => {
                try {
                    let changed = false;
                    

                    
                    if (playerIsZero && gameState.playerHealth > 0) {
                        const maxHP = gameState.player.health || 100;
                        const hpFrac = (maxHP > 0) ? (gameState.playerHealth / maxHP) : 0;
                        if (hpFrac < HEAL_THRESHOLD_FRAC) {
                            const newHP = Math.min(maxHP, gameState.playerHealth + healPerTick);
                            if (newHP !== gameState.playerHealth) {
                                gameState.playerHealth = newHP;
                                changed = true;
                            }
                        }
                    }

                    
                    if (enemyIsZero && gameState.enemyHealth > 0) {
                        const maxHP = gameState.enemy.health || 100;
                        const hpFrac = (maxHP > 0) ? (gameState.enemyHealth / maxHP) : 0;
                        if (hpFrac < HEAL_THRESHOLD_FRAC) {
                            const newHP = Math.min(maxHP, gameState.enemyHealth + healPerTick);
                            if (newHP !== gameState.enemyHealth) {
                                gameState.enemyHealth = newHP;
                                changed = true;
                            }
                        }
                    }

                    if (changed) updateBattleUI();

                    
                    const nextDelays = [];
                    if (playerIsZero && gameState.playerHealth > 0) {
                        const maxHP = gameState.player.health || 100;
                        nextDelays.push(computeDelayFromHpFraction((maxHP>0) ? (gameState.playerHealth / maxHP) : 0));
                    }
                    if (enemyIsZero && gameState.enemyHealth > 0) {
                        const maxHP = gameState.enemy.health || 100;
                        nextDelays.push(computeDelayFromHpFraction((maxHP>0) ? (gameState.enemyHealth / maxHP) : 0));
                    }

                    if (nextDelays.length > 0) {
                        const chosen = Math.max(MIN_DELAY, Math.min(MAX_DELAY, Math.min(...nextDelays)));
                        scheduleNextTickWithDelay(chosen);
                    } else {
                        
                        window.__zeroRegenTimer = null;
                    }
                } catch (e) {
                    console.error('Zero regen scheduling error', e);
                    window.__zeroRegenTimer = null;
                }
            }, ms);
        }

        
        const pendingDelays = [];

        
        const initialDelays = [];
        if (playerIsZero && gameState.playerHealth > 0) {
            const maxHP = gameState.player.health || 100;
            initialDelays.push(computeDelayFromHpFraction((maxHP>0) ? (gameState.playerHealth / maxHP) : 0));
        }
        if (enemyIsZero && gameState.enemyHealth > 0) {
            const maxHP = gameState.enemy.health || 100;
            initialDelays.push(computeDelayFromHpFraction((maxHP>0) ? (gameState.enemyHealth / maxHP) : 0));
        }

        if (initialDelays.length > 0) {
            const initial = Math.max(MIN_DELAY, Math.min(MAX_DELAY, Math.min(...initialDelays)));
            
            scheduleNextTickWithDelay(initial);
        }
    } catch (e) {
        console.error('Failed to setup Zero passive regen', e);
    }
}



function endBattle(playerWon) {
    
    if (gameState._battleResolved) return;
    gameState._battleResolved = true;
    try { stopSplitHallucination(); } catch (e) {  }

    
    try { clearZeroPassive(); } catch (e) {  }

    
    if (gameState.currentBattleMusic) {
        gameState.currentBattleMusic.pause();
        gameState.currentBattleMusic = null;
    }
    
    
    gameState.isHouseArrestBattle = false;
    gameState.primeBlitzHouseLike = false;
    
    if (playerWon) {
        
        gameState._lastBattleRewardGiven = true;

        
        try {
            const pName = (gameState.player && gameState.player.name) ? gameState.player.name : '';
            const pKey = pName ? pName.toLowerCase() : '';
            const eName = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';
            if (pName === 'Thalia' && eName === 'Kite') {
                playVoiceline('thalia', 'win_kite', "Thalia: So much for a cop, huh?");
            } else if (pName === 'Awareness') {
                playVoiceline('awareness', 'win', "I apologize...");
            } else if (pName === 'The Roden') {
                playVoiceline('roden', 'win', "The Roden: Keep this interesting for me.");
            } else {
                playVoiceline(pKey, 'win');
            }
        } catch (e) {  }

        
        try {
            const eName = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';
            const eKey = eName ? eName.toLowerCase() : '';
            const pName = (gameState.player && gameState.player.name) ? gameState.player.name : '';
            
            if (eName === 'Thalia' && pName === 'Kite') {
                playVoiceline('thalia', 'lose');
            } else if (eName === 'Awareness') {
                playVoiceline('awareness', 'lose', "Good job.");
            } else if (eName === 'The Roden') {
                playVoiceline('roden', 'lose', "The Roden: What... A RUSH!");
            } else {
                playVoiceline(eKey, 'lose');
            }
        } catch (e) {  }

        
        let earnedCredits = 50; 

        
        if (gameState.lunaInfected && gameState.lunaInfectedTarget === 'enemy') {
            earnedCredits = 150;
            
            gameState.credits += earnedCredits;
            addToBattleLog(`Special reward: +150 Credits for defeating the Luna-infected enemy!`);
            
            gameState.lunaInfected = false;
            gameState.lunaInfectedTarget = null;
        } else {
            
            gameState.credits += earnedCredits;
        }

        
        const playerCharKey = Object.keys(characters).find(key => characters[key] === gameState.player) || 
                             Object.keys(additionalCharacters).find(key => additionalCharacters[key] === gameState.player);
        
        if (playerCharKey && gameState.characterLevels[playerCharKey]) {
            const charData = gameState.characterLevels[playerCharKey];
            const oldLevel = charData.level;

            
            const baseVictoryExp = 25;

            
            let multiplier = 1;
            try {
                const nameCheck = (gameState.player && gameState.player.name) ? gameState.player.name : '';
                if (nameCheck === 'Maturity') {
                    multiplier = Math.max(1, Number(charData.level || 1));
                }
            } catch (e) { multiplier = 1; }

            const victoryExp = Math.round(baseVictoryExp * multiplier);
            charData.exp += victoryExp; 
            
            
            const expNeeded = charData.level * 100; 
            if (charData.exp >= expNeeded && charData.level < 100) {
                charData.level++;
                charData.exp = charData.exp - expNeeded;
                addToBattleLog(`${gameState.player.name} leveled up to ${charData.level}!`);
            }
        }
        
        
        addToBattleLog(`Victory! +${earnedCredits} Credits earned!`);
        
        
        setTimeout(() => showVictoryScreen(earnedCredits), 1500);
    } else {
        
        try {
            const pName = (gameState.player && gameState.player.name) ? gameState.player.name : '';
            const pKey = pName ? pName.toLowerCase() : '';
            if (pName === 'The Roden') {
                playVoiceline('roden', 'lose', "The Roden: What... A RUSH!");
            } else {
                playVoiceline(pKey, 'lose');
            }
        } catch (e) {  }

        
        try {
            const eName = (gameState.enemy && gameState.enemy.name) ? gameState.enemy.name : '';
            const eKey = eName ? eName.toLowerCase() : '';
            const pName = (gameState.player && gameState.player.name) ? gameState.player.name : '';
            if (eName === 'Thalia' && pName === 'Kite') {
                playVoiceline('thalia', 'win_kite');
            } else if (eName === 'The Roden') {
                playVoiceline('roden', 'win', "The Roden: Keep this interesting for me.");
            } else {
                playVoiceline(eKey, 'win');
            }
        } catch (e) {  }

        
        setTimeout(() => showGameOverScreen(), 1500);
    }

    saveGameData(); 
}

async function showVictoryScreen(earnedCredits = 50) {
    const victoryScreen = document.createElement('div');
    victoryScreen.className = 'victory-screen';
    victoryScreen.innerHTML = `
        <div class="victory-content">
            <div class="victory-title">VICTORY</div>
            <div class="victory-subtitle">You have conquered the Void!</div>
            <div class="victory-stats">
                <div class="victory-stat">
                    <span class="stat-label">Credits Earned:</span>
                    <span class="stat-value">+${earnedCredits}</span>
                </div>
                <div class="victory-stat">
                    <span class="stat-label">Total Credits:</span>
                    <span class="stat-value">${gameState.credits}</span>
                </div>
            </div>
            <div class="victory-actions">
                <!-- VISIT US button may be injected to the left of REMATCH based on chance logic -->
                <div id="victory-visit-placeholder" style="display:inline-block;"></div>
                <button class="victory-btn rematch-btn" onclick="location.reload()">REMATCH</button>
            </div>
        </div>
        <div class="victory-particles"></div>
    `;
    
    document.body.appendChild(victoryScreen);
    
    
    try {
        const player = gameState.player || {};
        const playerKey = (player.name || '').toString();
        const isHigherPlane = !!(player && player.higherPlane);
        const isAwareness = playerKey === 'Awareness';
        const lunaInfected = !!gameState.lunaInfected; 
        const hpFrac = (gameState.playerHealth && gameState.playerBattleMax) ? (gameState.playerHealth / gameState.playerBattleMax) : 1;
        const isLowHP = hpFrac < 0.10;
        
        let isBrawnOtherThanAwareness = false;
        try {
            const cls = classifyCharacterByHealing(player, (playerKey || '').toLowerCase());
            if (typeof cls === 'string') {
                const main = cls.split(';')[0].trim().toUpperCase();
                if (main === 'BRAWN' && !isAwareness) isBrawnOtherThanAwareness = true;
            }
        } catch (e) {  }

        
        let chance = 0;
        const unlockedCount = (gameState.unlockedCharacters || []).length;

        
        let blocker2Present = false;
        try {
            try {
                const headResp = await fetch('blocker2.txt', { method: 'HEAD' });
                if (headResp && headResp.ok) blocker2Present = true;
            } catch (headErr) {
                try {
                    const getResp = await fetch('blocker2.txt', { method: 'GET' });
                    if (getResp && getResp.ok) blocker2Present = true;
                } catch (getErr) {
                    
                }
            }
        } catch (e) {
            blocker2Present = false;
        }

        if (!blocker2Present && unlockedCount >= 10) {
            if (isLowHP || isBrawnOtherThanAwareness) {
                chance = 1.0; 
            } else if (lunaInfected) {
                chance = 0.65;
            } else if (isAwareness) {
                chance = 1/5;
            } else if (isHigherPlane) {
                chance = 1/15;
            } else {
                chance = 1/20;
            }
        } else {
            
            chance = 0;
        }

        
        const roll = Math.random();
        if (roll <= chance) {
            
            const visitBtn = document.createElement('button');
            visitBtn.textContent = 'VISIT US!';
            visitBtn.className = 'victory-btn visit-btn';
            visitBtn.style.background = 'linear-gradient(45deg,#FF8C00,#0E6A2B)'; 
            visitBtn.style.color = '#000';
            visitBtn.style.border = 'none';
            visitBtn.style.padding = '0.6rem 1rem';
            visitBtn.style.fontFamily = 'Orbitron, monospace';
            visitBtn.style.fontWeight = '900';
            visitBtn.style.cursor = 'pointer';
            visitBtn.style.borderRadius = '8px';
            visitBtn.style.marginRight = '0.6rem';
            visitBtn.addEventListener('click', async () => {
                try {
                    
                    document.querySelectorAll('body > *').forEach(el => {
                        try { el.remove(); } catch (e) {}
                    });
                } catch (e) {}
                
                document.body.style.background = '#000';
                
                try {
                    const mod = await import('./friends.js');
                    if (mod && typeof mod.default === 'function') mod.default();
                } catch (err) {
                    console.error('Failed to load friends.js', err);
                }
            });

            
            const ph = victoryScreen.querySelector('#victory-visit-placeholder');
            if (ph) ph.appendChild(visitBtn);
        }
    } catch (e) {
        console.error('Victory visit button logic failed', e);
    }
    
    setTimeout(() => {
        victoryScreen.classList.add('active');
        createVictoryParticles();
    }, 100);
}

function showGameOverScreen() {
    const gameOverScreen = document.createElement('div');
    gameOverScreen.className = 'game-over-screen';
    gameOverScreen.innerHTML = `
        <div class="game-over-content">
            <div class="game-over-title">GAME OVER</div>
            <div class="game-over-subtitle">There's always next time...</div>
            <div class="game-over-stats">
                <div class="game-over-stat">
                    <span class="stat-label">Final Credits:</span>
                    <span class="stat-value">${gameState.credits}</span>
                </div>
            </div>
            <div class="game-over-actions">
                <button class="game-over-btn retry-btn" onclick="location.reload()">TRY AGAIN</button>
            </div>
        </div>
        <div class="game-over-glitch"></div>
    `;
    
    document.body.appendChild(gameOverScreen);
    
    
    setTimeout(() => {
        gameOverScreen.classList.add('active');
        startGlitchEffect();
    }, 100);
}

function createVictoryParticles() {
    const particlesContainer = document.querySelector('.victory-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'victory-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesContainer.appendChild(particle);
    }
}

function startGlitchEffect() {
    const glitchElement = document.querySelector('.game-over-glitch');
    if (!glitchElement) return;
    
    let glitchInterval = setInterval(() => {
        glitchElement.style.opacity = Math.random() * 0.3;
        glitchElement.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    }, 100);
    
    
    setTimeout(() => {
        clearInterval(glitchInterval);
        glitchElement.style.opacity = 0;
    }, 3000);
}

function showShop() {
    
    try {
        
        showScreen('shop');
        
        try {
            if (gameState) {
                delete gameState._higherPlaneCached;
                delete gameState._shopSessionActive;
            }
        } catch (e) {  }
        updateShopUI();
        initShopButtons();



    } catch (err) {
        console.error('showShop error (inlined):', err);
    }
}

function updateShopUI() {
    const creditsDisplay = document.getElementById('credits-display');
    if (creditsDisplay) {
        creditsDisplay.textContent = `Credits: ${gameState.credits}`;
    }
    const shopSubText = document.getElementById('shop-sub-text');
    if (shopSubText) {
        try {
            const allDefs = { ...characters, ...additionalCharacters };
            const nonSHS = Object.keys(allDefs).filter(k => {
                if (k === 'broken' || k === 'zero') return false;
                if (allDefs[k] && allDefs[k].shs) return false;
                return true;
            });
            const unlocked = (gameState && Array.isArray(gameState.unlockedCharacters)) ? gameState.unlockedCharacters : [];
            const nonSHSUnlocked = nonSHS.filter(k => unlocked.includes(k));
            const total = nonSHS.length;
            const owned = nonSHSUnlocked.length;
            const pct = total > 0 ? owned / total : 0;

            const allUnlocked = nonSHS.every(k => unlocked.includes(k));
            if (allUnlocked) {
                shopSubText.style.display = 'none';
            } else {
                shopSubText.style.display = '';
                const brokenStillLocked = !unlocked.includes('broken');
                const allNonBrokenUnlocked = brokenStillLocked && nonSHS.every(k => k === 'broken' || unlocked.includes(k));
                if (brokenStillLocked && allNonBrokenUnlocked) {
                    shopSubText.textContent = "DON'T.";
                } else if (pct >= 0.75) {
                    shopSubText.textContent = 'I do not want you to buy all the characters; just have fun.';
                } else if (pct >= 0.50) {
                    shopSubText.textContent = 'i dont want you to buy all the characters';
                } else {
                    shopSubText.textContent = 'i dont want you to buy all the characters, just have fun!!';
                }
            }
        } catch (e) {
            shopSubText.textContent = 'i dont want you to buy all the characters, just have fun!!';
        }
    }

    
    const titleCreditsDisplay = document.getElementById('credits-display-title');
    if (titleCreditsDisplay) {
        titleCreditsDisplay.textContent = `Credits: ${gameState.credits}`;
    }

    
    try {
        const hasWachi = Array.isArray(gameState.unlockedCharacters) && gameState.unlockedCharacters.includes('wachi');
        if (hasWachi && additionalCharacters && additionalCharacters.quinn) {
            additionalCharacters.quinn.higherPlaneChancePercent = 100;
        }
    } catch (e) {
        console.error('Failed to ensure Quinn chance update', e);
    }

    
    try {
        if (!gameState._shopSessionActive) {
            gameState._shopSessionActive = true;
            gameState._higherPlaneCached = gameState._higherPlaneCached || {};
        } else {
            gameState._higherPlaneCached = gameState._higherPlaneCached || {};
        }
    } catch (e) {
        gameState._shopSessionActive = true;
        gameState._higherPlaneCached = gameState._higherPlaneCached || {};
    }

    
    const shopGrid = document.querySelector('.shop-grid');
    if (shopGrid) {
        const items = Array.from(shopGrid.querySelectorAll('.shop-item'));
        const normal = items.filter(i => !i.dataset.higherPlane);
        const higher = items.filter(i => i.dataset.higherPlane);
        
        normal.sort((a, b) => {
            const aBase = parseInt(a.getAttribute('data-base-price') || a.dataset.price || '0');
            const bBase = parseInt(b.getAttribute('data-base-price') || b.dataset.price || '0');
            return aBase - bBase;
        }).forEach(item => shopGrid.appendChild(item));
        
        higher.forEach(item => shopGrid.appendChild(item));
    }

    const shopItems = document.querySelectorAll('.shop-item');

    
    
    const higherPlaneItems = Array.from(shopItems).filter(i => i.dataset.higherPlane === 'true' && !(gameState.unlockedCharacters || []).includes(i.dataset.character));

    
    let selectedHigherKey = null;

    shopItems.forEach(item => {
        const characterKey = item.dataset.character;
        
        if (!item.hasAttribute('data-base-price')) {
            
            item.setAttribute('data-base-price', item.dataset.price || '');
        }
        
        const basePriceAttr = item.getAttribute('data-base-price');
        const basePrice = basePriceAttr === null || basePriceAttr === '' ? NaN : parseInt(basePriceAttr);
        const buyButton = item.querySelector('.buy-button');
        const priceEl = item.querySelector('.price');

        
        if (gameState.unlockedCharacters.includes(characterKey)) {
            item.style.display = 'none';
            return;
        }

        
        if (item.dataset.higherPlane === 'true') {
            
            if (selectedHigherKey && characterKey !== selectedHigherKey) {
                item.dataset.price = 'Infinity';
                if (priceEl) priceEl.textContent = 'FEELING LUCKY?';
                if (buyButton) {
                    buyButton.textContent = 'NOT AVAILABLE';
                    buyButton.disabled = true;
                    buyButton.style.background = 'rgba(255,255,255,0.04)';
                }
                return;
            }

            
            const charDef = (additionalCharacters && additionalCharacters[characterKey]) || (characters && characters[characterKey]);
            
            let chance = 0;
            if (characterKey === 'caldera') {
                const base = 20;
                const bonusPer = 2;
                const deps = ['ayako','drew','wonder','juliet','kitten','jaquavius','charlie','kc'];
                try {
                    const unlocked = (gameState && Array.isArray(gameState.unlockedCharacters)) ? gameState.unlockedCharacters : [];
                    let count = 0;
                    for (const d of deps) if (unlocked.includes(d)) count++;
                    chance = Math.min(100, base + (count * bonusPer));
                } catch (e) {
                    chance = base;
                }
            } else if (characterKey === 'michael') {
                const base = 5;
                const bonusPer = 2;
                try {
                    const allDefs = { ...characters, ...additionalCharacters };
                    const unlocked = (gameState && Array.isArray(gameState.unlockedCharacters)) ? gameState.unlockedCharacters : [];
                    let count = 0;
                    for (const k of unlocked) {
                        const d = allDefs[k];
                        if (d && d.higherPlane) count++;
                    }
                    chance = Math.min(100, base + (count * bonusPer));
                } catch (e) {
                    chance = base;
                }
            } else {
                chance = (charDef && typeof charDef.higherPlaneChancePercent === 'number') ? charDef.higherPlaneChancePercent : 0;
            }

            
            if (characterKey === 'broken') {
                const allDefs = { ...characters, ...additionalCharacters };
                
                const allKeys = Object.keys(allDefs).filter(k => {
                    if (k === 'broken' || k === 'zero') return false;
                    const def = allDefs[k];
                    
                    if (!def) return false;
                    
                    if (def.shs) return false;
                    return true;
                });
                const hasAllOthers = allKeys.every(k => gameState.unlockedCharacters.includes(k));
                chance = hasAllOthers ? 50 : 0;
            }

            
            try {
                const cache = gameState._higherPlaneCached = gameState._higherPlaneCached || {};
                let cached = cache.hasOwnProperty(characterKey) ? cache[characterKey] : null;
                if (cached === null) {
                    const roll = Math.random() * 100;
                    cached = { free: (roll <= chance) };
                    cache[characterKey] = cached;
                }

                if (cached.free) {
                    item.dataset.price = '0';
                    if (priceEl) priceEl.textContent = 'FEELING LUCKY?';
                    if (buyButton) {
                        buyButton.textContent = 'FREE - CLAIM';
                        buyButton.disabled = false;
                        buyButton.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                    }
                } else {
                    item.dataset.price = 'Infinity';
                    if (priceEl) priceEl.textContent = 'FEELING LUCKY?';
                    if (buyButton) {
                        buyButton.textContent = 'NOT AVAILABLE';
                        buyButton.disabled = true;
                        buyButton.style.background = 'rgba(255,255,255,0.04)';
                    }
                }
            } catch (e) {
                
                const roll = Math.random() * 100;
                if (roll <= chance) {
                    item.dataset.price = '0'; 
                    if (priceEl) priceEl.textContent = 'FEELING LUCKY?';
                    if (buyButton) {
                        buyButton.textContent = 'FREE - CLAIM';
                        buyButton.disabled = false;
                        buyButton.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                    }
                } else {
                    item.dataset.price = 'Infinity';
                    if (priceEl) priceEl.textContent = 'FEELING LUCKY?';
                    if (buyButton) {
                        buyButton.textContent = 'NOT AVAILABLE';
                        buyButton.disabled = true;
                        buyButton.style.background = 'rgba(255,255,255,0.04)';
                    }
                }
            }
        } else {
            
            const price = Number.isNaN(basePrice) ? parseInt(item.dataset.price || '0') : basePrice;
            if (!Number.isNaN(price) && gameState.credits >= price) {
                buyButton.textContent = 'BUY';
                buyButton.disabled = false;
                buyButton.style.background = 'rgba(255, 215, 0, 0.2)';
                priceEl.textContent = `${price} Credits`;
                
                item.dataset.price = String(price);
            } else {
                buyButton.textContent = 'INSUFFICIENT CREDITS';
                buyButton.disabled = true;
                buyButton.style.background = 'rgba(255, 0, 0, 0.2)';
                priceEl.textContent = `${price} Credits`;
                item.dataset.price = String(price);
            }
        }
    });
}


function checkAllUnlockedAndTriggerEasterEgg() {
    try {
        
        const titleScreen = document.getElementById('title-screen');
        if (!titleScreen || !titleScreen.classList.contains('active')) return;

        
        const hasBroken = (gameState.unlockedCharacters || []).includes('broken');

        if (hasBroken) {
            
            
            const idsToHide = ['start-game', 'characters-button', 'shop-button', 'extras-button', 'credits-display-title', 'business-button', 'update-notice'];
            idsToHide.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.style.transition = 'opacity 0.6s ease';
                    el.style.opacity = '0';
                    
                    setTimeout(() => {
                        try { el.style.display = 'none'; } catch (e) {  }
                    }, 650);
                }
            });

            
            const pageTitleEl = document.querySelector('.title');
            if (pageTitleEl) {
                pageTitleEl.style.transition = 'opacity 0.6s ease';
                pageTitleEl.style.opacity = '0';
                setTimeout(() => {
                    try { pageTitleEl.style.display = 'none'; } catch (e) {  }
                }, 650);
            }

            
            const subtitleEl = titleScreen?.querySelector('.subtitle') || document.querySelector('.subtitle');
            if (subtitleEl) {
                subtitleEl.style.transition = 'opacity 0.6s ease';
                subtitleEl.style.opacity = '0';
                setTimeout(() => {
                    try { subtitleEl.style.display = 'none'; } catch (e) {  }
                }, 650);
            }

            
            try {
                document.title = '...';
            } catch (e) {  }

            
            const container = titleScreen?.querySelector('.container');
            if (container && !document.getElementById('easter-egg-button')) {
                const btn = document.createElement('button');
                btn.id = 'easter-egg-button';
                btn.textContent = 'SOMETHING NEW';
                btn.className = 'game-button';
                
                btn.style.position = 'fixed';
                
                btn.style.bottom = 'max(env(safe-area-inset-bottom, 12px), 6%)';
                btn.style.left = '50%';
                btn.style.transform = 'translateX(-50%)';
                btn.style.zIndex = '12000';
                
                btn.style.minWidth = '180px';
                btn.style.maxWidth = '520px';
                btn.style.width = 'min(70%, 520px)';
                btn.style.opacity = '0';
                btn.style.transition = 'opacity 0.45s ease, transform 0.35s ease';
                document.body.appendChild(btn);
                
                setTimeout(() => {
                    btn.style.opacity = '1';
                }, 120);

                
                btn.addEventListener('click', () => {
                    addToBattleLog('A new presence stirs within the Void...');

                    
                    import('./final_fight.js').then(module => {
                        try {
                            
                            if (typeof module.default === 'function') {
                                module.default();
                            }
                        } catch (e) {
                            console.error('final_fight module loaded but failed to execute:', e);
                        }
                    }).catch(err => {
                        console.error('Failed to load final_fight.js', err);
                        addToBattleLog('Something failed to awaken...');
                    });

                    
                    const title = document.querySelector('.title');
                    if (title) {
                        
                        title.style.display = 'block';
                        title.style.opacity = '0';
                        
                        title.animate([
                            { transform: 'scale(1)', opacity: 0 },
                            { transform: 'scale(1.02)', opacity: 1 },
                            { transform: 'scale(1)', opacity: 0 }
                        ], { duration: 700, iterations: 1, easing: 'ease-in-out' });
                        
                        setTimeout(() => {
                            try { title.style.display = 'none'; } catch (e) {  }
                        }, 700);
                    }
                });
            }
        }
    } catch (e) {
        console.error('Easter-egg check failed', e);
    }
}

function buyCharacter(characterKey, price) {
    
    if (price === Infinity || price === 'Infinity' || price === 'inf') return;

    const numericPrice = Number(price);

    if (!gameState.unlockedCharacters.includes(characterKey) && !isNaN(numericPrice) && gameState.credits >= numericPrice) {
        gameState.credits -= numericPrice;
        gameState.unlockedCharacters.push(characterKey);
        
        
        if (!gameState.characterLevels[characterKey]) {
            gameState.characterLevels[characterKey] = { level: 1, exp: 0 };
        }
        
        
        if (!gameState.purchasedCharacters) {
            gameState.purchasedCharacters = [];
        }
        gameState.purchasedCharacters.push(characterKey);
        
        
        const characterToAdd = additionalCharacters[characterKey];
        if (characterToAdd) {
            characters[characterKey] = characterToAdd;
        }
        
        
        try {
            if (Array.isArray(gameState.higherPlaneFree)) {
                const idx = gameState.higherPlaneFree.indexOf(characterKey);
                if (idx !== -1) gameState.higherPlaneFree.splice(idx, 1);
            }
        } catch (e) {}

        saveGameData(); 
        updateShopUI();
        addToBattleLog(`${characterToAdd.name} unlocked!`);
        
        
        if (characterKey === 'broken') {
            setTimeout(() => { location.reload(); }, 400);
        }
        
        checkAllUnlockedAndTriggerEasterEgg();
        return;
    }

    
    if (!gameState.unlockedCharacters.includes(characterKey) && Number(price) === 0) {
        
        gameState.unlockedCharacters.push(characterKey);
        if (!gameState.characterLevels[characterKey]) gameState.characterLevels[characterKey] = { level: 1, exp: 0 };
        if (!gameState.purchasedCharacters) gameState.purchasedCharacters = [];
        gameState.purchasedCharacters.push(characterKey);
        const characterToAdd = additionalCharacters[characterKey];
        if (characterToAdd) characters[characterKey] = characterToAdd;
        saveGameData();
        updateShopUI();
        addToBattleLog(`${characterToAdd.name} unlocked for free!`);
        
        
        checkAllUnlockedAndTriggerEasterEgg();
    }

    
    if (typeof updateCreateButtonState === 'function') {
        try { updateCreateButtonState(); } catch (e) {  }
    }
}

function addToBattleLog(message) {
    battleLog.innerHTML = '';
    gameState.battleLog = [message];
    
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    logEntry.style.marginBottom = '0.5rem';
    logEntry.style.padding = '0.3rem';
    logEntry.style.borderLeft = '2px solid #FFD700';
    logEntry.style.paddingLeft = '0.5rem';
    battleLog.appendChild(logEntry);
    
    
    battleLog.scrollTop = battleLog.scrollHeight;
    
    setTimeout(() => {
        logEntry.style.opacity = '0';
        logEntry.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            if (logEntry.parentNode) {
                logEntry.remove();
            }
        }, 500);
    }, 3000);
}


function addPersistentBattleLog(message) {
    try {
        
        gameState.battleLog = gameState.battleLog || [];
        gameState.battleLog.push(message);

        const logEntry = document.createElement('div');
        logEntry.textContent = message;
        logEntry.style.marginBottom = '0.5rem';
        logEntry.style.padding = '0.4rem';
        logEntry.style.borderLeft = '3px solid #FFB74D';
        logEntry.style.paddingLeft = '0.6rem';
        logEntry.style.background = 'rgba(255, 215, 0, 0.03)';
        logEntry.style.fontWeight = '800';
        
        battleLog.appendChild(logEntry);
        battleLog.scrollTop = battleLog.scrollHeight;
    } catch (e) {
        console.error('addPersistentBattleLog error', e);
    }
}


function tickCooldownsFor(side) {
    if (!gameState.abilityCooldowns || !gameState.abilityCooldowns[side]) return;
    for (let i = 0; i < gameState.abilityCooldowns[side].length; i++) {
        if (gameState.abilityCooldowns[side][i] > 0) {
            gameState.abilityCooldowns[side][i] = Math.max(0, gameState.abilityCooldowns[side][i] - 1);
        }
    }

    
    updateBattleUI();

    
    try {
        gameState.curses = gameState.curses || { player: null, enemy: null };
        if (gameState.curses[side] && gameState.curses[side].active && typeof gameState.curses[side].turns === 'number') {
            gameState.curses[side].turns = Math.max(0, gameState.curses[side].turns - 1);
            if (gameState.curses[side].turns <= 0) {
                
                gameState.curses[side].active = false;
                gameState.curses[side] = null;
                
                if (side === 'player') addToBattleLog(`${gameState.player.name} is no longer CURSED.`);
                else addToBattleLog(`${gameState.enemy.name} is no longer CURSED.`);
            } else {
                
                
            }
            
            updateBattleUI();
        }
    } catch (e) {  }

    
    try {
        gameState.vulnerable = gameState.vulnerable || { player: null, enemy: null };
        const vuln = gameState.vulnerable[side];
        if (vuln && vuln.active && typeof vuln.turns === 'number') {
            vuln.turns = Math.max(0, vuln.turns - 1);
            if (vuln.turns <= 0) {
                
                vuln.active = false;
                gameState.vulnerable[side] = null;
                
                try {
                    if (gameState.effects && Array.isArray(gameState.effects[side])) {
                        const idx = gameState.effects[side].indexOf('VULNERABLE');
                        if (idx !== -1) gameState.effects[side].splice(idx, 1);
                    }
                } catch (ee) {  }
                if (side === 'player') addToBattleLog(`${gameState.player.name} is no longer VULNERABLE.`);
                else addToBattleLog(`${gameState.enemy.name} is no longer VULNERABLE.`);
            } else {
                
                
            }
            updateBattleUI();
        }
    } catch (e) {
        console.error('Failed to tick Vulnerable counters', e);
    }
}


function initShopButtons() {
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        const shopItem = button.closest('.shop-item');
        if (!shopItem) return;

        
        if (shopItem.dataset.shopListenerAttached === '1') return;
        shopItem.dataset.shopListenerAttached = '1';

        const characterKey = shopItem.dataset.character;

        
        
        button.addEventListener('click', () => {
            
            const raw = shopItem.dataset.price;
            const numeric = (raw === undefined || raw === null || raw === '') ? NaN : Number(raw);

            
            if (!isFinite(numeric)) {
                
                updateShopUI();
                return;
            }

            
            buyCharacter(characterKey, numeric);

            
            updateShopUI();
        });
    });
}

 
 window.showShop = showShop;
 window.startBattle = startBattle;


window.characters = characters;
window.additionalCharacters = additionalCharacters;

  
 init();

 
 
 window.stopMusicForVoid = function stopMusicForVoid() {
     try {
         if (!window.__VOID_ACTIVE__) return;
         
         const handles = [
             '__finalFightBGM',
             '__deanBGM',
             '__fateSixLeft',
             '__previewAudio',
             'currentBattleMusic',
             '__deanBGM', 
             '__finalFightBGM'
         ];
         handles.forEach(k => {
             try {
                 const a = window[k];
                 if (a && typeof a.pause === 'function') {
                     try { a.pause(); } catch (e) {}
                 }
                 try { if (a) { a.currentTime = 0; } } catch (e) {}
                 try { if (a) { a.src = ''; } } catch (e) {}
             } catch (e) {}
         });

         
         try {
             document.querySelectorAll('audio, video').forEach(m => {
                 try { m.pause(); } catch (e) {}
                 try { m.currentTime = 0; } catch (e) {}
                 try { m.removeAttribute && m.removeAttribute('src'); } catch (e) {}
                 try { m.load && m.load(); } catch (e) {}
             });
         } catch (e) {}

         
         try { window.__finalFightBGM = null; } catch (e) {}
         try { window.__deanBGM = null; } catch (e) {}
         try { window.__fateSixLeft = null; } catch (e) {}
         try { window.__previewAudio = null; } catch (e) {}
         try { window.gameState && (window.gameState.currentBattleMusic = null); } catch (e) {}
     } catch (e) {
         console.error('stopMusicForVoid error', e);
     }
 };
 
 (function initVoicelines() {
     
     try {
         const saved = localStorage.getItem('voicelinesEnabled');
         window.voicelinesEnabled = saved === null ? false : (saved === 'true');
     } catch (e) {
         window.voicelinesEnabled = false;
     }

     
     window.toggleVoicelines = function (val) {
         try {
             if (typeof val === 'boolean') window.voicelinesEnabled = val;
             else window.voicelinesEnabled = !window.voicelinesEnabled;
             localStorage.setItem('voicelinesEnabled', window.voicelinesEnabled ? 'true' : 'false');
         } catch (e) {
             window.voicelinesEnabled = !!window.voicelinesEnabled;
         }
         return window.voicelinesEnabled;
     };

     
     function ensureSubtitleEl() {
         let el = document.getElementById('voiceline-subtitle');
         if (!el) {
             el = document.createElement('div');
             el.id = 'voiceline-subtitle';
             el.style.position = 'fixed';
             el.style.left = '50%';
             el.style.bottom = '10%';
             el.style.transform = 'translateX(-50%)';
             el.style.zIndex = '40050';
             el.style.padding = '0.5rem 0.9rem';
             el.style.borderRadius = '8px';
             el.style.background = 'rgba(0,0,0,0.75)';
             el.style.color = '#FFD700';
             el.style.fontFamily = 'Orbitron, monospace';
             el.style.fontWeight = '800';
             el.style.fontSize = '1rem';
             el.style.pointerEvents = 'none';
             el.style.opacity = '0';
             el.style.transition = 'opacity 220ms ease';
             document.body.appendChild(el);
         }
         return el;
     }

     
     function showSubtitle(text, duration = 1800) {
        try {
            const el = ensureSubtitleEl();
            
            const owner = Symbol('subtitleOwner');
            el._owner = owner;

            el.textContent = text;
            el.style.opacity = '1';

            
            clearTimeout(el._hideTimeout);
            el._hideTimeout = setTimeout(() => {
                try {
                    if (el._owner === owner) {
                        el.style.opacity = '0';
                        el._owner = null;
                    }
                } catch (e) {
                    try { el.style.opacity = '0'; } catch (_) {}
                    el._owner = null;
                }
            }, duration);
        } catch (e) {}
    }

     
     
     
     window.__voicelineState = window.__voicelineState || {
         currentAudio: null,
         currentKey: null,
         currentPriority: 0
     };

     
     function ensureSubtitleContainer() {
         let container = document.getElementById('voiceline-subtitles');
         if (!container) {
             container = document.createElement('div');
             container.id = 'voiceline-subtitles';
             container.style.position = 'fixed';
             container.style.left = '50%';
             container.style.bottom = '8%';
             container.style.transform = 'translateX(-50%)';
             container.style.zIndex = '40050';
             container.style.display = 'flex';
             container.style.flexDirection = 'column';
             container.style.gap = '6px';
             container.style.alignItems = 'center';
             container.style.pointerEvents = 'none';
             document.body.appendChild(container);
         }
         return container;
     }

     
     function showStackedSubtitle(text) {
         const container = ensureSubtitleContainer();
         const item = document.createElement('div');
         item.className = 'voiceline-sub-item';
         item.style.background = 'rgba(0,0,0,0.75)';
         item.style.color = '#FFD700';
         item.style.fontFamily = 'Orbitron, monospace';
         item.style.fontWeight = '800';
         item.style.padding = '0.45rem 0.8rem';
         item.style.borderRadius = '8px';
         item.style.maxWidth = '86vw';
         item.style.textAlign = 'center';
         item.style.pointerEvents = 'none';
         item.style.opacity = '0';
         item.style.transition = 'opacity 180ms ease, transform 220ms ease';
         item.textContent = text;

         
         container.insertBefore(item, container.firstChild);

         
         requestAnimationFrame(() => {
             item.style.transform = 'translateY(0px)';
             item.style.opacity = '1';
         });

         
         let internalTimeout = null;

         const hideNow = (fast = false) => {
             try {
                 item.style.opacity = '0';
                 item.style.transform = 'translateY(6px)';
                 setTimeout(() => {
                     try { if (item.parentNode) item.parentNode.removeChild(item); } catch (e) {}
                 }, fast ? 80 : 200);
             } catch (e) {}
         };

         return {
             
             startAutoHide: function(duration = 1800) {
                 try {
                     if (internalTimeout) {
                         clearTimeout(internalTimeout);
                         internalTimeout = null;
                     }
                     internalTimeout = setTimeout(() => {
                         hideNow(false);
                         internalTimeout = null;
                     }, duration);
                 } catch (e) {
                     try { hideNow(false); } catch (ee) {}
                 }
             },
             
             hide: function() {
                 try {
                     if (internalTimeout) {
                         clearTimeout(internalTimeout);
                         internalTimeout = null;
                     }
                 } catch (e) {}
                 hideNow(true);
             }
         };
     }

     
     window.__voicelineState = window.__voicelineState || {
         playingInstances: [] 
     };

      const VOICELINE_PRIORITIES = {
          awareness: 100,
          echo: 50
      };

      
      
      function getFallbackSubtitle(key, act) {
          if (key === 'echo') {
              const map = {
                  'intro': "Echo: LET'S GET THIS OVER WITH.",
                  'damage1': 'Echo: OUCH',
                  'damage2': 'Echo: OW.',
                  'damage3': 'Echo: OOF.',
                  'win': 'Echo: THAT WAS FUN, SEE YOU NEXT TIME.',
                  'lose': 'Echo: DANG.'
              };
              return map[act] || '';
          } else if (key === 'roden') {
              const map = {
                  'intro': "The Roden: Do you want to play with me?",
                  'intro_alex': "The Roden: *laughter*",
                  'intro_reject': "The Roden: I'm going to have so much fun... TEARING YOU APART!",
                  'almost_win': "The Roden: Getting tired, are we?",
                  'win': "The Roden: Keep this interesting for me.",
                  'lose': "The Roden: My... WHAT A RUSH!"
              };
              return map[act] || '';
          } else if (key === 'reject') {
              const map = {
                  'intro': "Reject: Time to die.",
                  'intro_alex': "Reject: Oh, hi Alex.",
                  'intro_roden': "Reject: *laughter*",
                  'win': "Reject: *laughter*"
              };
              return map[act] || '';
          } else if (key === 'awareness') {
              const mapAw = {
                  'intro': "Right. We're in a battle.",
                  'intro_wachi': "Awareness: ... it's the cat.",
                  'win': 'I apologize...',
                  'lose': 'Good job.'
              };
              return mapAw[act] || mapAw['intro'] || '';
          } else if (key === 'subject192') {
              const mapS = {
                  'intro': "Subject 192: *battle noises*",
                  'intro_awareness': "Subject 192: *competitive noises*",
                  'intro_cyrus': "Subject 192: *happy noises*",
                  'intro_fossil': "Subject 192: *wedding noises*",
                  'intro_tao': "Subject 192: *battle noises*",
                  'intro_broken': "Subject 192: *intimidated noises*",
                  'almost_win': "Subject 192: *happy noises*",
                  'win': "Subject 192: *happy noises*",
                  'lose': "Subject 192: *excited noises*"
              };
              return mapS[act] || '';
          } else if (key === 'pete') {
              const mapP = {
                  'intro': "Pete: Howdy, partner.",
                  'intro_wachi': "Pete: It's the cat.",
                  'almost_win': "Pete: Don't give up already. I know yer stronger.",
                  'win': "Pete: I'm HIGHLY disappointed.",
                  'lose': "Pete: Now THAT'S a real show."
              };
              return mapP[act] || '';
          } else if (key === 'thalia') {
              const mapT = {
                  'intro': "Thalia: *chuckle* Let's go, then.",
                  'intro_kite': "Thalia: We meet again, old buddy!",
                  'almost_win': "Thalia: *laughter*",
                  'win': "Thalia: You're not as strong as you think you are.",
                  'win_kite': "Thalia: So much for a cop, huh?",
                  'lose': "Thalia: *chuckle*"
              };
              return mapT[act] || '';
          } else if (key === 'maturity') {
              const mapM = {
                  'intro': "Maturity: i'm gonna win trust me",
                  'intro_daphne': "Maturity: chat am i cooked",
                  'damage1': "Maturity: ow",
                  'damage2': "Maturity: auw",
                  'damage3': "Maturity: ouch",
                  'win': "Maturity: ez",
                  'lose': "Maturity: ill get u next time bro",
                  'special': "Maturity: you won't see this coming"
              };
              return mapM[act] || '';
          } else if (key === 'martialartist') {
              const mapMA = {
                  'intro': "Martial Artist: Oh, this will be fun!",
                  'intro_awareness': "Martial Artist: Why, hello, Moonie~!",
                  'intro_knight': "Martial Artist: Oh, what's a better fight than between the two who indirectly caused this whole thing?",
                  'intro_twylight': "Martial Artist: Hm. S'almost like I'm confronting myself.",
                  'intro_thalia': "Martial Artist: Wow, I really screwed up on you, didn't I?",
                  'intro_stella': "Martial Artist: You're STILL going after Sunny, eh?",
                  'intro_quinn': "Martial Artist: Oh, it's you. Eugh.",
                  'intro_tao': "Martial Artist: Talk about instability, eh?",
                  'intro_wachi': "Martial Artist: It's the cat! *shuffle*",
                  'almost_win': "Martial Artist: Why are you STILL holding on?",
                  'win': "Martial Artist: You will NEVER be strong enough for me.",
                  'lose': "Martial Artist: Hm. Well, I can't be mad at you. Good job."
              };
              return mapMA[act] || '';
          } else if (key === 'emery') {
              const mapE = {
                  'intro': "Corin: Don't expect me to protect you when you can't even protect yourself.",
                  'win': "Corin: Good job.",
                  'lose': "Corin: You're pathetic."
              };
              return mapE[act] || '';
          } else if (key === 'bai') {
              const mapB = {
                  'intro': "Bai: prepare.",
                  'intro_subject192': "Bai: oh. i remember you.",
                  'damage1': "Bai: ow",
                  'damage2': "Bai: ouch",
                  'damage3': "Bai: auw",
                  'win': "Bai: weak. pathetic.",
                  'lose': "Bai: asshole."
              };
              return mapB[act] || '';
          } else if (key === 'eteled') {
              const mapEteled = {
                  'intro': "eteleD: *laughter*",
                  'lose': "eteleD: *laughter*",
                  'intro_xander': "eteleD: Oh. It's YOU.",
                  'almost_win': "eteleD: Almost there...",
                  'win': "eteleD: Stay down."
              };
              return mapEteled[act] || '';
          } else if (key === 'mona') {
              const mapMona = {
                  'intro': "Mona: Oh, hello.",
                  'intro_kite': "Mona: Mmm... didn't know you were still here.",
                  'intro_wachi': "Mona: ...It's the cat.",
                  'damage1': "Mona: Ow...",
                  'damage2': "Mona: Ouch!",
                  'almost_win': "Mona: Oh?",
                  'win': "Mona: I win.",
                  'lose': "Mona: Well played..."
              };
              return mapMona[act] || '';
          }
          return '';
      }

 window.playVoiceline = async function playVoiceline(characterKey, action, subtitleText = null) {
          try {
              if (!window.voicelinesEnabled) return;
              if (!characterKey) return;

              const keyRaw = String(characterKey || '').toLowerCase();
              
              const key = keyRaw.replace(/\s+/g, '').replace(/[^a-z0-9_]/g, '');
              const act = String(action || '').toLowerCase();

              
              if (key === 'emery' && window.gameState && window.gameState.enemy && window.gameState.enemy.name === 'Emery') return;

             
             const priority = VOICELINE_PRIORITIES[keyRaw] || 10;

             
             try {
                 if (act === 'win' || act === 'lose') {
                     window.__voicelineState = window.__voicelineState || { playingInstances: [] };
                     const instances = window.__voicelineState.playingInstances || [];
                     for (let i = instances.length - 1; i >= 0; i--) {
                         const inst = instances[i];
                         try {
                             if (inst && inst.key === keyRaw && inst.action === 'almost_win') {
                                 try { if (inst.subtitleController && typeof inst.subtitleController.hide === 'function') inst.subtitleController.hide(); } catch (e) {}
                                 try { if (inst.audio && typeof inst.audio.pause === 'function') inst.audio.pause(); } catch (e) {}
                                 try { if (inst.audio) { inst.audio.src = ''; } } catch (e) {}
                                 instances.splice(i, 1);
                             }
                         } catch (e) {  }
                     }
                 }
             } catch (e) {
                 console.error('Failed to pre-clear almost_win instances', e);
             }

             
             const subtitleForAction = (a) => {
                 let s = (a === act && subtitleText) ? subtitleText : getFallbackSubtitle(key, a);
                 if (keyRaw === 'awareness' && s && !s.startsWith('Awareness:')) s = `Awareness: ${s}`;
                 return s;
             };

             
             try {
                 if (act === 'almost_win') {
                     window.gameState = window.gameState || {};
                     window.gameState._almostWinPlayed = window.gameState._almostWinPlayed || {};
                     if (window.gameState._almostWinPlayed[keyRaw]) {
                         
                         return;
                     }
                 }
             } catch (e) {  }

             
             
             const actsToTry = act.startsWith('damage')
                 ? [act, ...(['damage1','damage2','damage3'].filter(a => a !== act))]
                 : [act];

             let audio = null;
             let played = false;
             let usedAct = act;
             let resolvedSubtitle = '';
             let lastErr = null;

             
             
             for (const attemptAct of actsToTry) {
                 const candidates = [
                     `battle_${key}_${attemptAct}.mp3`,
                     `battle_${key}_${attemptAct}.wav`
                 ];
                 let actPlayed = false;
                 for (const src of candidates) {
                 try {
                     const a = new Audio();
                     a.preload = 'auto';
                     a.src = src;
                     
                     let vol = (keyRaw === 'awareness') ? 0.57 : 0.76;
                     
                     if (keyRaw === 'drew') {
                         vol = 0;
                     }

                     
                     try {
                         if (keyRaw.includes('subject192')) {
                             vol = Math.min(1, vol * 1.10);
                         } else if (keyRaw === 'maturity') {
                             vol = Math.max(0, vol * 0.80);
                         } else if (keyRaw === 'reject') {
                             vol = Math.max(0, vol * 0.65);
                         } else if (keyRaw === 'mona') {
                             vol = Math.max(1, vol * 1.25);
                         } else if (keyRaw === 'bai') {
                             vol = Math.max(0, vol * 0.70);
                         } else if (keyRaw === 'pete') {
                             vol = Math.max(1, vol * 1.25);
                         }
                     } catch (e) {  }

                     
                     try {
                         if (keyRaw === 'thalia') {
                             const louderActs = ['intro','lose','almost_win','intro_kite','win_kite','win'];
                             if (louderActs.includes(act)) {
                                 vol = Math.min(1, vol * 1.05);
                             } else {
                                 vol = Math.max(0, vol * 0.60);
                             }
                         }
                     } catch (e) {}
                   
                     
                     if (keyRaw === 'roden') vol = Math.min(1, vol * 1.5);
                     
                     if (key === 'martialartist') vol = Math.min(1, vol * 1.5);

                   
                     a.volume = vol;

                     
                     const p = a.play();
                     if (p && typeof p.then === 'function') {
                         await p.catch(err => { throw err; });
                     }

                    audio = a;
                    actPlayed = true;
                    break;
                } catch (e) {
                    lastErr = e;
                    continue;
                }
                }

                if (actPlayed) {
                    usedAct = attemptAct;
                    resolvedSubtitle = subtitleForAction(attemptAct);
                    played = true;
                    break;
                }
            }

            if (!played) {
                
                console.warn('Voiceline playback failed for', characterKey, action, lastErr);
                return;
            }

            
            
            const subtitleController = resolvedSubtitle ? showStackedSubtitle(resolvedSubtitle) : null;

             
             try {
                 if (act === 'almost_win') {
                     window.gameState = window.gameState || {};
                     window.gameState._almostWinPlayed = window.gameState._almostWinPlayed || {};
                     window.gameState._almostWinPlayed[keyRaw] = true;
                 }
             } catch (e) {  }

             
             const instance = { key: keyRaw, priority, audio, subtitleController, action: act };
             window.__voicelineState.playingInstances = window.__voicelineState.playingInstances || [];
             window.__voicelineState.playingInstances.push(instance);

             
             const cleanup = () => {
                 try {
                     if (instance.subtitleController && typeof instance.subtitleController.hide === 'function') instance.subtitleController.hide();
                 } catch (e) {}

                 try {
                     const idx = (window.__voicelineState.playingInstances || []).indexOf(instance);
                     if (idx !== -1) (window.__voicelineState.playingInstances || []).splice(idx, 1);
                 } catch (e) {}

                 try {
                     if (audio) {
                         try { audio.pause(); } catch (e) {}
                         try { audio.src = ''; } catch (e) {}
                     }
                 } catch (e) {}
             };

             audio.addEventListener('ended', cleanup, { once: true });
             audio.addEventListener('error', cleanup, { once: true });
             audio.addEventListener('pause', cleanup, { once: true });

             
             setTimeout(() => {
                 try {
                     cleanup();
                 } catch (e) {}
             }, 12000);
         } catch (e) {
             console.error('playVoiceline failed', e);
         }
     };

     
     
     async function preloadAllBattleVoicelines() {
         try {
             
             const combined = { ...(window.characters || {}), ...(window.additionalCharacters || {}) };
             const charKeys = Object.keys(combined);

             
             const actions = [
                 'intro', 'intro_wachi', 'intro_alex', 'intro_reject',
                 'damage1', 'damage2', 'damage3',
                 'win', 'lose', 'almost_win'
             ];

             
             const CONCURRENCY = uniqueFiles.length;
             const queue = [];

             for (const key of charKeys) {
                 
                 const normalized = String(key || '').toLowerCase().replace(/\s+/g, '_');
                 for (const act of actions) {
                     const filename = `battle_${normalized}_${act}.mp3`;
                     queue.push(filename);
                     
                     const filenameWav = `battle_${normalized}_${act}.wav`;
                     queue.push(filenameWav);
                 }
             }

             
             const uniqueFiles = Array.from(new Set(queue));

             
             function tryPreload(src) {
                 
                 return new Promise(async (resolve) => {
                     try {
                         
                         let exists = false;
                         try {
                             const resp = await fetch(src, { method: 'HEAD', cache: 'no-store' });
                             if (resp && resp.ok) exists = true;
                         } catch (headErr) {
                             
                             try {
                                 const resp = await fetch(src, { method: 'GET', headers: { Range: 'bytes=0-1023' }, cache: 'no-store' });
                                 if (resp && (resp.ok || resp.status === 206 || resp.type === 'opaque')) exists = true;
                             } catch (getErr) {
                                 exists = false;
                             }
                         }
 
                         if (!exists) {
                             
                             return resolve({ src, ok: false, reason: 'not-found' });
                         }
 
                         const a = new Audio();
                         a.preload = 'auto';
                         let settled = false;
                         const clean = () => {
                             try { a.removeAttribute && a.removeAttribute('src'); } catch (e) {}
                             try { a.src = ''; } catch (e) {}
                             try { a.load && a.load(); } catch (e) {}
                         };
                         const onCan = () => { if (!settled) { settled = true; clean(); resolve({ src, ok: true }); } };
                         const onErr = () => { if (!settled) { settled = true; clean(); resolve({ src, ok: false }); } };
                         a.addEventListener('canplaythrough', onCan, { once: true });
                         a.addEventListener('loadeddata', onCan, { once: true });
                         a.addEventListener('error', onErr, { once: true });
 
                         
                         a.src = src;
 
                         try { a.load(); } catch (e) {}
 
                         setTimeout(() => {
                             if (!settled) {
                                 settled = true;
                                 clean();
                                 resolve({ src, ok: false });
                             }
                         }, 0);
                     } catch (e) {
                         resolve({ src, ok: false });
                     }
                 });
             }

             
             let idx = 0;
             async function worker() {
                 while (idx < uniqueFiles.length) {
                     const i = idx++;
                     const f = uniqueFiles[i];
                     try {
                         await tryPreload(f);
                         
                     } catch (e) {  }
                 }
             }

             const workers = [];
             for (let w = 0; w < CONCURRENCY; w++) workers.push(worker());
             await Promise.all(workers);
         } catch (e) {
             
             console.warn('Voiceline preload failed', e);
         }
     }

     
     if (document.readyState === 'loading') {
         document.addEventListener('DOMContentLoaded', () => {
             preloadAllBattleVoicelines()
                 .then(() => { try { console.clear(); } catch (e) {} })
                 .catch(() => {});
         });
     } else {
         
         setTimeout(() => {
             preloadAllBattleVoicelines()
                 .then(() => { try { console.clear(); } catch (e) {} })
                 .catch(() => {});
         }, 120);
     }
 })();

 
 try { updateStainlessVisibility(); } catch (e) {  }
 
 try { window.gameState = gameState; } catch (e) {  }

 
 
 (function tryRunDeanOnLoad(){
     
     if (window.__deanRunAttempted) return;
     window.__deanRunAttempted = true;

     
     window.addEventListener('load', () => {
         try {
             const saved = JSON.parse(localStorage.getItem('unbrokenSave') || '{}');
             if (saved && saved.deanPending) {
                 
                 
                tryImportDean(true);
             }
         } catch (e) {
             console.error('dean pending startup check failed', e);
         }
     });
 })();
