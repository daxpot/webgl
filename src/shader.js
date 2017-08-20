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
		var geometry = new THREE.SphereBufferGeometry(10, 128, 32);
		var vShader = "\
varying vec3 vNormal;\
attribute float displacement;\
varying vec2 vUv;\
void main() { \
	vNormal = normal;\
	vUv = uv;\
	vec3 newPosition = position + normal*vec3(displacement);\
	gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1); \
}";
		var fShader = "\
varying vec3 vNormal;\
varying vec2 vUv;\
void main() { \
	vec3 light = vec3(0.5, 0.2, 1.0);\
	light = normalize(light);\
	float dProd = max(0.0, dot(vNormal, light));\
	gl_FragColor = vec4(vUv, 1.0, 0);\
}";
		var shader = new THREE.ShaderMaterial({
			vertexShader: vShader, 
			fragmentShader: fShader 
		});
		this.cube = new THREE.Mesh(geometry, shader);

		this.scene.add(this.cube);

		this.displacement = new Float32Array(geometry.attributes.position.count);
		this.noise = new Float32Array(geometry.attributes.position.count);
		for(var i = 0; i<this.displacement.length; i++) {
			this.displacement[i] = Math.random();
			this.noise[i] = Math.random();
		}
		geometry.addAttribute("displacement", new THREE.BufferAttribute(this.displacement, 1));
		// var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	 //    directionalLight.position.set( 0, 0, 10 );
	 //    this.scene.add( directionalLight );

		this.camera.position.set(0, 0, 30);

	}


	animate() {
	    requestAnimationFrame(this.animate)
	    for(var i = 0; i<this.displacement.length; i++) {
	    	this.displacement[i] += this.noise[i]/10;
	    	if(this.displacement[i] >= 1 || this.displacement[i] <= -1) {
	    		this.noise[i] *= -1;
	    	}
	    }
	    this.cube.geometry.attributes.displacement.needsUpdate = true;

	    this.renderer.render(this.scene, this.camera)
	}
}

new App();