/* global THREE */
class App {
	constructor() {
		this.animate = this.animate.bind(this);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);	

		this.initScene();	

		this.animate();
	}

	initScene() {
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
		this.cube = new THREE.Mesh(geometry, material);

		this.scene.add(this.cube);
		this.camera.position.z = 5;
	}
	animate() {
	    requestAnimationFrame(this.animate)
	    this.cube.rotation.x += 0.1;
	    this.cube.rotation.y += 0.1;
	    // this.camera.position.z += 0.1;

	    this.renderer.render(this.scene, this.camera)
	}
}

new App();