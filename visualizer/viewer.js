let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set(0, 1000, 1000);

let pointsMesh = null;
let lineMesh = null;

async function load() {

    let res1 = await fetch("points.json");
    let data = await res1.json();

    let res2 = await fetch("markers.json");
    let markers = await res2.json();

    // -------------------------
    // ROUTE POINTS
    // -------------------------
    let positions = [];

    for (let p of data) {
        positions.push(p.x, p.y, p.z);
    }

    let geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
    );

    let material = new THREE.PointsMaterial({
        size: 5,
        color: 0x00ffcc
    });

    pointsMesh = new THREE.Points(geometry, material);
    scene.add(pointsMesh);

    // -------------------------
    // ROUTE LINE
    // -------------------------
    let lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
    );

    let lineMat = new THREE.LineBasicMaterial({
        color: 0xffaa00
    });

    lineMesh = new THREE.Line(lineGeo, lineMat);
    scene.add(lineMesh);

    // -------------------------
    // MARKERS
    // -------------------------
    for (let m of markers) {

        let geo = new THREE.SphereGeometry(20);
        let mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        let sphere = new THREE.Mesh(geo, mat);

        sphere.position.set(m.x, m.y, m.z);

        scene.add(sphere);
    }
}

load();

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();