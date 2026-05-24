let scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
// -------------------------
// CAMERA
// -------------------------
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000000);
camera.position.set(0, 1000, 1000);
// -------------------------
// RENDERER
// -------------------------
let renderer = new THREE.WebGLRenderer({
	antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// -------------------------
// CONTROLS
// -------------------------
let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
// -------------------------
// LIGHTING
// -------------------------
let ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);
// -------------------------
// RESIZE
// -------------------------
window.addEventListener("resize",
	() => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});
// -------------------------
// MESH STORAGE
// -------------------------
let pointsMesh = null;
let lineMesh = null;
let markerMeshes = [];
// -------------------------
// LOAD DATA
// -------------------------
async function load() {
	try {
		// -------------------------
		// REMOVE OLD OBJECTS
		// -------------------------
		if (pointsMesh) {
			scene.remove(pointsMesh);
		}
		if (lineMesh) {
			scene.remove(lineMesh);
		}
		for (let m of markerMeshes) {
			scene.remove(m);
		}
		markerMeshes = [];
		// -------------------------
		// LOAD FILES
		// -------------------------
		let res1 = await fetch("points.json?t=" + Date.now());
		let points = await res1.json();
		let res2 = await fetch("markers.json?t=" + Date.now());
		let markers = await res2.json();
		console.log("Loaded points:", points.length);
		console.log("Loaded markers:", markers.length);
		// -------------------------
		// BUILD POSITIONS
		// -------------------------
		let positions = [];
		for (let p of points) {
			positions.push(p.x, p.y, p.z);
		}
		// -------------------------
		// POINT CLOUD
		// -------------------------
		let geometry = new THREE.BufferGeometry();
		geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
		let material = new THREE.PointsMaterial({
			size: 20,
			color: 0x00ffcc
		});
		pointsMesh = new THREE.Points(geometry, material);
		scene.add(pointsMesh);
		// -------------------------
		// ROUTE LINE
		// -------------------------
		let lineGeo = new THREE.BufferGeometry();
		lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
		let lineMat = new THREE.LineBasicMaterial({
			color: 0xffaa00
		});
		lineMesh = new THREE.Line(lineGeo, lineMat);
		scene.add(lineMesh);
		// -------------------------
		// MARKERS
		// -------------------------
		for (let m of markers) {
			let geo = new THREE.SphereGeometry(100, 16, 16);
			let mat = new THREE.MeshBasicMaterial({
				color: 0xff0000
			});
			let sphere = new THREE.Mesh(geo, mat);
			sphere.position.set(m.x, m.y, m.z);
			scene.add(sphere);
			markerMeshes.push(sphere);
		}
	} catch (err) {
		console.error(err);
	}
}
// -------------------------
// AUTO RELOAD
// -------------------------
load();
setInterval(load, 3000);
// -------------------------
// ANIMATION LOOP
// -------------------------
function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}
animate();