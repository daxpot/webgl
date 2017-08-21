/* global THREE */
import Gird from "./obj/Gird"
import './obj/OrbitControls'

import './shaders/CopyShader'
import './shaders/ToneMapShader'
import './shaders/BokehShader'
import './shaders/FXAAShader'
import './shaders/VignetteShader'
import './shaders/ConvolutionShader'
import './shaders/DotScreenShader'
import './shaders/FilmShader'
import './postprocessing/ShaderPass'
import './postprocessing/MaskPass'
import './postprocessing/RenderPass'
import './postprocessing/BokehPass'
import './postprocessing/TexturePass'
import './postprocessing/DotScreenPass'
import './postprocessing/BloomPass'
import './postprocessing/FilmPass'
import './postprocessing/EffectComposer'


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
		this.renderer.domElement.addEventListener( 'click', this.onMouseClick );

		this.initScene();	
		this.initPostprocessing()

		this.animate();
	}

	initScene() {
		var geometry = new THREE.BoxGeometry(3, 3, 3);
		var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
		this.cube = new THREE.Mesh(geometry, material);

		this.scene.add(this.cube);

		this.scene.add(new Gird());

		this.camera.position.set(1, 1, 30);
		this.camera.degree = 0;

		var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	    directionalLight.position.set( 0, 0, 10 );
	    this.scene.add( directionalLight );

	}

	initPostprocessing() {

		this.composer = new THREE.EffectComposer(this.renderer)

		this.composer.addPass(new THREE.RenderPass(this.scene, this.camera))

		var bloomPass = new THREE.BloomPass();
		this.composer.addPass(bloomPass)

		// var dotScreenPass = new THREE.DotScreenPass();
		// this.composer.addPass(dotScreenPass);

		var effectCopy = new THREE.ShaderPass(THREE.CopyShader);
		effectCopy.renderToScreen = true;
		this.composer.addPass(effectCopy);

		// var effectFilm = new THREE.FilmPass(0.8, 0.325, 256, false);
		// effectFilm.renderToScreen = true;
		// this.composer.addPass(effectFilm);

	}


	animate() {
	    requestAnimationFrame(this.animate)
	    this.renderer.render(this.scene, this.camera)
	    // this.composer.render()
	}
}

new App();