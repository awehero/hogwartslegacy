let SCALE = 1000;

let scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000);

// -------------------------
// CAMERA
// -------------------------

let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100000
);

camera.position.set(0, 50, 50);

// -------------------------
// RENDERER
// -------------------------

let renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

// -------------------------
// LIGHTING
// -------------------------

let ambient = new THREE.AmbientLight(
    0xffffff,
    1
);

scene.add(ambient);

// -------------------------
// RESIZE
// -------------------------

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);

// -------------------------
// MOUSE LOOK
// -------------------------

let yaw = 0;
let pitch = 0;

let sensitivity = 0.002;

document.body.addEventListener(
    "click",
    () => {

        renderer.domElement.requestPointerLock();

    }
);

document.addEventListener(
    "mousemove",
    (e) => {

        if (
            document.pointerLockElement !==
            renderer.domElement
        ) return;

        yaw -= e.movementX * sensitivity;
        pitch -= e.movementY * sensitivity;

        pitch = Math.max(
            -Math.PI / 2,
            Math.min(
                Math.PI / 2,
                pitch
            )
        );

        camera.rotation.order = "YXZ";

        camera.rotation.y = yaw;
        camera.rotation.x = pitch;

    }
);

// -------------------------
// MOVEMENT
// -------------------------

let keys = {};

document.addEventListener(
    "keydown",
    (e) => {

        keys[e.key.toLowerCase()] = true;

    }
);

document.addEventListener(
    "keyup",
    (e) => {

        keys[e.key.toLowerCase()] = false;

    }
);

// -------------------------
// LOAD DATA
// -------------------------

async function load() {

    // -------------------------
    // LOAD POINTS
    // -------------------------

    let res1 = await fetch(
        "points.json"
    );

    let points = await res1.json();

    // -------------------------
    // LOAD MARKERS
    // -------------------------

    let res2 = await fetch(
        "markers.json"
    );

    let markers = await res2.json();

    console.log(
        "Loaded points:",
        points.length
    );

    console.log(
        "Loaded markers:",
        markers.length
    );

    // -------------------------
    // BUILD POSITIONS
    // -------------------------

    let positions = [];

    for (let p of points) {

        positions.push(
            p.x / SCALE,
            p.y / SCALE,
            p.z / SCALE
        );

    }

    // -------------------------
    // POINT CLOUD
    // -------------------------

    let geometry =
        new THREE.BufferGeometry();

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            positions,
            3
        )
    );

    let material =
        new THREE.PointsMaterial({
            size: 0.5,
            color: 0x00ffcc
        });

    let pointsMesh =
        new THREE.Points(
            geometry,
            material
        );

    scene.add(pointsMesh);

    // -------------------------
    // ROUTE LINE
    // -------------------------

    let lineGeo =
        new THREE.BufferGeometry();

    lineGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            positions,
            3
        )
    );

    let lineMat =
        new THREE.LineBasicMaterial({
            color: 0xffaa00
        });

    let lineMesh =
        new THREE.Line(
            lineGeo,
            lineMat
        );

    scene.add(lineMesh);

    // -------------------------
    // MARKERS
    // -------------------------

    for (let m of markers) {

        let geo =
            new THREE.SphereGeometry(
                1,
                12,
                12
            );

        let mat =
            new THREE.MeshBasicMaterial({
                color: 0xff0000
            });

        let sphere =
            new THREE.Mesh(
                geo,
                mat
            );

        sphere.position.set(
            m.x / SCALE,
            m.y / SCALE,
            m.z / SCALE
        );

        scene.add(sphere);

    }

}

load();

// -------------------------
// MOVEMENT UPDATE
// -------------------------

function updateMovement() {

    let speed = 0.5;

    let forward =
        new THREE.Vector3();

    camera.getWorldDirection(
        forward
    );

    forward.y = 0;
    forward.normalize();

    let right =
        new THREE.Vector3();

    right.crossVectors(
        forward,
        new THREE.Vector3(0, 1, 0)
    );

    if (keys["w"]) {

        camera.position.add(
            forward.clone()
                .multiplyScalar(speed)
        );

    }

    if (keys["s"]) {

        camera.position.add(
            forward.clone()
                .multiplyScalar(-speed)
        );

    }

    if (keys["a"]) {

        camera.position.add(
            right.clone()
                .multiplyScalar(speed)
        );

    }

    if (keys["d"]) {

        camera.position.add(
            right.clone()
                .multiplyScalar(-speed)
        );

    }

    if (keys["e"]) {

        camera.position.y += speed;

    }

    if (keys["c"]) {

        camera.position.y -= speed;

    }

}

// -------------------------
// ANIMATION LOOP
// -------------------------

function animate() {

    requestAnimationFrame(
        animate
    );

    updateMovement();

    renderer.render(
        scene,
        camera
    );

}

animate();