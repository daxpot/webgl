/* global THREE */
import './obj/OrbitControls'
import Sprites from "./obj/sprites"

var images = [
	"https://tu.kagirl.cn/pic/view/1.jpg",
	"https://tu.kagirl.cn/pic/view/2.jpg",
	"https://tu.kagirl.cn/pic/view/3.jpg",
	"https://tu.kagirl.cn/pic/view/4.jpg",
	"https://tu.kagirl.cn/pic/view/5.jpg",
	"https://tu.kagirl.cn/pic/view/7.jpg",
	"https://tu.kagirl.cn/pic/view/8.jpg",
	"https://tu.kagirl.cn/pic/view/9.jpg"
]

var texures = [
	"img/p1.png",
	"img/p2.png",
	"img/p3.png",
	"img/p4.png",
	"img/p5.png"
]

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
		var loader = new THREE.TextureLoader();
		loader.setCrossOrigin("anonymous")
		for(let i=0; i<images.length; i++) {
			let geometry = new THREE.PlaneGeometry(100, 100)//image.width, image.height)
			let material = new THREE.MeshBasicMaterial({map: loader.load(images[i])})
			material.side = THREE.DoubleSide;
			let mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(200*Math.sin(i/images.length*Math.PI*2), 0, 200*Math.cos(i/images.length*Math.PI*2))
			mesh.rotateY(i/images.length*Math.PI*2)
			this.scene.add(mesh);
		}

		this.camera.degree = 0;
		this.camera.position.z = 500;
		this.scene.fog = new THREE.FogExp2( 0x000000, 0.0008 );
		this.sprites = new Sprites();
		this.scene.add(this.sprites);
	}

	animate() {
	    requestAnimationFrame(this.animate)

	    this.sprites.update();

	    this.renderer.render(this.scene, this.camera)
	}
}

new App()