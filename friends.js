

export default async function startFriends() {
    if (document.getElementById('friends-overlay')) return;

    
    const overlay = document.createElement('div');
    overlay.id = 'friends-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = 50000;
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'black';
    overlay.style.pointerEvents = 'auto';
    document.body.appendChild(overlay);

    
    const loadingWrap = document.createElement('div');
    loadingWrap.id = 'friends-loading';
    loadingWrap.style.position = 'absolute';
    loadingWrap.style.inset = '0';
    loadingWrap.style.display = 'flex';
    loadingWrap.style.alignItems = 'center';
    loadingWrap.style.justifyContent = 'center';
    loadingWrap.style.flexDirection = 'column';
    loadingWrap.style.gap = '12px';
    loadingWrap.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.5))';
    loadingWrap.style.zIndex = '50010';
    loadingWrap.style.pointerEvents = 'none';

    const spinner = document.createElement('div');
    spinner.style.width = '64px';
    spinner.style.height = '64px';
    spinner.style.border = '6px solid rgba(255,255,255,0.08)';
    spinner.style.borderTop = '6px solid #FF8C00';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'friends-spin 900ms linear infinite';
    loadingWrap.appendChild(spinner);

    const loadingText = document.createElement('div');
    loadingText.textContent = 'LOADING...';
    loadingText.style.color = '#FFD700';
    loadingText.style.fontFamily = 'Orbitron, monospace';
    loadingText.style.fontWeight = '900';
    loadingText.style.letterSpacing = '0.06em';
    loadingWrap.appendChild(loadingText);

    
    if (!document.getElementById('friends-loading-style')) {
        const style = document.createElement('style');
        style.id = 'friends-loading-style';
        style.textContent = `
            @keyframes friends-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `;
        document.head.appendChild(style);
    }

    overlay.appendChild(loadingWrap);

    
    const container = document.createElement('div');
    container.id = 'friends-container';
    container.style.width = 'min(1148px, 96vw)';
    container.style.maxWidth = '96vw';
    container.style.aspectRatio = '1148 / 855';
    container.style.background = 'linear-gradient(135deg, #FF8C00 0%, #0E6A2B 100%)';
    container.style.borderRadius = '10px';
    container.style.overflow = 'hidden';
    container.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)';
    
    container.style.opacity = '0';
    container.style.transition = 'opacity 360ms ease';
    overlay.appendChild(container);

    
    const canvas = document.createElement('canvas');
    canvas.id = 'friends-canvas';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    
    let THREE;
    let threeLoaded = false;
    let threeErr = null;
    const THREE_IMPORT = import('https://esm.sh/three@0.154.0')
        .then(mod => { THREE = mod; threeLoaded = true; })
        .catch(err => { threeErr = err; threeLoaded = false; });

    
    const MIN_LOAD_MS = 700;   
    const MAX_WAIT_MS = 5000;  

    const wait = (ms) => new Promise(r => setTimeout(r, ms));
    const startTs = performance.now();

    
    await Promise.all([
        THREE_IMPORT.catch(() => {}), 
        wait(MIN_LOAD_MS)
    ]);

    const elapsed = performance.now() - startTs;
    const remainingCap = Math.max(0, MAX_WAIT_MS - elapsed);
    
    const importPromise = Promise.race([
        THREE_IMPORT.catch(() => {}),
        wait(remainingCap)
    ]);
    await importPromise;

    
    try {
        loadingWrap.style.transition = 'opacity 320ms ease';
        loadingWrap.style.opacity = '0';
    } catch (e) {}
    
    container.style.opacity = '1';

    
    setTimeout(() => {
        try { if (loadingWrap.parentNode) loadingWrap.parentNode.removeChild(loadingWrap); } catch (e) {}
        try { const s = document.getElementById('friends-loading-style'); if (s && s.parentNode) s.parentNode.removeChild(s); } catch (e) {}
    }, 420);

    
    if (!threeLoaded || !THREE) {
        const label = document.createElement('div');
        label.textContent = 'Friends — placeholder (3D canvas failed to initialize)';
        label.style.color = '#fff';
        label.style.fontFamily = 'Orbitron, monospace';
        label.style.fontWeight = '900';
        label.style.fontSize = '1.2rem';
        label.style.textAlign = 'center';
        label.style.padding = '1rem';
        container.appendChild(label);
        return;
    }

    
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x1a1a2e, 8, 25);

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / Math.max(1, container.clientHeight), 0.1, 100);
    
    camera.position.set(0, 1.6, 4.5);
    camera.lookAt(0, 1.1, -1);

    
    
    scene.add(new THREE.AmbientLight(0xffeedd, 0.25));

    
    const overheadLight = new THREE.DirectionalLight(0xfff8e7, 0.7);
    overheadLight.position.set(0, 6, 2);
    overheadLight.castShadow = true;
    overheadLight.shadow.mapSize.width = 1024;
    overheadLight.shadow.mapSize.height = 1024;
    overheadLight.shadow.camera.near = 0.5;
    overheadLight.shadow.camera.far = 20;
    overheadLight.shadow.camera.left = -6;
    overheadLight.shadow.camera.right = 6;
    overheadLight.shadow.camera.top = 6;
    overheadLight.shadow.camera.bottom = -6;
    scene.add(overheadLight);

    
    const fillLight = new THREE.PointLight(0xffaa66, 0.3, 8);
    fillLight.position.set(0, 1.5, 3);
    scene.add(fillLight);

    
    const backLight = new THREE.PointLight(0x88ccff, 0.15, 10);
    backLight.position.set(0, 3, -4);
    scene.add(backLight);

    
    const counterMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.6, metalness: 0.05 });
    const counterTopMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.3, metalness: 0.1 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xe8e0d5, roughness: 0.9, metalness: 0.0 });
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.7, metalness: 0.05 });
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x8b7355, roughness: 0.8, metalness: 0.0 });
    const registerMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4, metalness: 0.3 });
    const screenMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.1, emissive: 0x001133, emissiveIntensity: 0.3 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.3, metalness: 0.8 });

    
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMat);
    backWall.position.set(0, 4, -5);
    backWall.receiveShadow = true;
    scene.add(backWall);

    
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-6, 4, 0);
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(6, 4, 0);
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    
    
    const counterBody = new THREE.Mesh(new THREE.BoxGeometry(4, 1.1, 1.2), counterMat);
    counterBody.position.set(0, 0.55, -1.5);
    counterBody.castShadow = true;
    counterBody.receiveShadow = true;
    scene.add(counterBody);

    
    const counterTop = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.05, 1.4), counterTopMat);
    counterTop.position.set(0, 1.125, -1.5);
    counterTop.castShadow = true;
    counterTop.receiveShadow = true;
    scene.add(counterTop);

    
    const counterFront = new THREE.Mesh(new THREE.BoxGeometry(4, 0.9, 0.05), new THREE.MeshStandardMaterial({ color: 0x6b4e3d, roughness: 0.7 }));
    counterFront.position.set(0, 0.5, -0.86);
    scene.add(counterFront);

    
    const registerBase = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.15, 0.4), registerMat);
    registerBase.position.set(0.8, 1.2, -1.4);
    registerBase.castShadow = true;
    scene.add(registerBase);

    const registerScreen = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.25, 0.03), screenMat);
    registerScreen.position.set(0.8, 1.38, -1.55);
    registerScreen.rotation.x = -0.2;
    registerScreen.castShadow = true;
    scene.add(registerScreen);

    
    const registerPole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8), metalMat);
    registerPole.position.set(0.8, 1.3, -1.5);
    scene.add(registerPole);

    
    function createShelf(x, y, z, width) {
        const shelf = new THREE.Mesh(new THREE.BoxGeometry(width, 0.04, 0.5), shelfMat);
        shelf.position.set(x, y, z);
        shelf.castShadow = true;
        shelf.receiveShadow = true;
        scene.add(shelf);

        
        const bracketGeo = new THREE.BoxGeometry(0.04, 0.3, 0.04);
        const leftBracket = new THREE.Mesh(bracketGeo, metalMat);
        leftBracket.position.set(x - width / 2 + 0.1, y - 0.15, z + 0.22);
        scene.add(leftBracket);

        const rightBracket = new THREE.Mesh(bracketGeo, metalMat);
        rightBracket.position.set(x + width / 2 - 0.1, y - 0.15, z + 0.22);
        scene.add(rightBracket);
    }

    
    createShelf(-2.5, 2.0, -4.5, 2);
    createShelf(-2.5, 2.8, -4.5, 2);
    createShelf(-2.5, 3.6, -4.5, 2);

    
    createShelf(2.5, 2.0, -4.5, 2);
    createShelf(2.5, 2.8, -4.5, 2);
    createShelf(2.5, 3.6, -4.5, 2);

    
    
    const penCup = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.15, 12), new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.5 }));
    penCup.position.set(-0.6, 1.2, -1.3);
    penCup.castShadow = true;
    scene.add(penCup);

    
    const notepad = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.02, 0.18), new THREE.MeshStandardMaterial({ color: 0xf5f5dc, roughness: 0.9 }));
    notepad.position.set(-0.3, 1.14, -1.35);
    notepad.rotation.y = 0.1;
    scene.add(notepad);

    
    const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.5), new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 }));
    chairSeat.position.set(0, 0.6, -2.8);
    chairSeat.castShadow = true;
    scene.add(chairSeat);

    const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.06), new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 }));
    chairBack.position.set(0, 0.9, -3.02);
    chairBack.castShadow = true;
    scene.add(chairBack);

    const chairStem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5, 8), metalMat);
    chairStem.position.set(0, 0.3, -2.8);
    scene.add(chairStem);

    const chairBase = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.04, 12), metalMat);
    chairBase.position.set(0, 0.06, -2.8);
    scene.add(chairBase);

    
    
    const lightFixture = new THREE.Mesh(new THREE.BoxGeometry(3, 0.08, 0.4), new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.4, metalness: 0.5 }));
    lightFixture.position.set(0, 5.9, 0);
    scene.add(lightFixture);

    const lightGlow = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.02, 0.3), new THREE.MeshBasicMaterial({ color: 0xffffee }));
    lightGlow.position.set(0, 5.85, 0);
    scene.add(lightGlow);

    
    let time = 0;
    const mouse = { x: 0, y: 0 };
    const targetCameraPos = { x: 0, y: 1.6, z: 4.5 };
    const targetLookAt = { x: 0, y: 1.1, z: -1 };

    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    function resize() {
        const rect = container.getBoundingClientRect();
        const w = Math.max(1, Math.floor(rect.width));
        const h = Math.max(1, Math.floor(rect.height));
        renderer.setSize(w, h, false);
        camera.aspect = w / Math.max(1, h);
        camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    function animate(now) {
        time += 0.008;

        
        const swayX = Math.sin(time * 0.5) * 0.03 + mouse.x * 0.08;
        const swayY = Math.sin(time * 0.3) * 0.015 + mouse.y * 0.04;

        camera.position.x = targetCameraPos.x + swayX;
        camera.position.y = targetCameraPos.y + swayY;
        camera.position.z = targetCameraPos.z + Math.sin(time * 0.2) * 0.02;

        camera.lookAt(
            targetLookAt.x + swayX * 0.5,
            targetLookAt.y + swayY * 0.3,
            targetLookAt.z
        );

        
        overheadLight.intensity = 0.7 + Math.sin(time * 12) * 0.02 + Math.sin(time * 23) * 0.01;

        
        screenMat.emissiveIntensity = 0.3 + Math.sin(time * 2) * 0.05;

        renderer.render(scene, camera);
        if (document.getElementById('friends-overlay')) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    
    window.__friendsPanel = {
        destroy: () => {
            try { window.removeEventListener('resize', resize); } catch (e) {}
            try { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); } catch (e) {}
        }
    };
}