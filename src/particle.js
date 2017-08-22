/* global THREE */
import './obj/OrbitControls'

class App {
	constructor() {
		this.animate = this.animate.bind(this);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor( 0x000000 );
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);	
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)

		this.initScene();	

		this.animate();
	}

	initScene() {
		var particleCount = 1800,
			particles = new THREE.Geometry(),
			pMaterial = new THREE.ParticleBaseMaterial({
				color: 0xffffff,
				size: 20
			});
	}


	animate() {
	    requestAnimationFrame(this.animate)

	    this.renderer.render(this.scene, this.camera)
	}
}

new App();