/* global THREE */

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

class App {
	constructor() {

		this.animate = this.animate.bind(this);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor( 0x000000 );
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);	

		this.initScene();	

		this.animate();
	}

	initScene() {
		var loader = new THREE.ImageLoader();
		loader.setCrossOrigin("anonymous")
		for(let i=0; i<images.length; i++) {
			loader.load(
				images[i],
				(image) => {
					let texure = new THREE.Texture(image)
					texure.needsUpdate = true;
					let geometry = new THREE.PlaneGeometry(100, 100)//image.width, image.height)
					let material = new THREE.MeshBasicMaterial({map: texure})
					material.side = THREE.DoubleSide;
					let mesh = new THREE.Mesh(geometry, material);
					mesh.position.set(200*Math.sin(i/images.length*Math.PI*2), 0, 200*Math.cos(i/images.length*Math.PI*2))
					mesh.rotateY(i/images.length*Math.PI*2)
					this.scene.add(mesh);
				}
			)
		}
		this.camera.degree = 0;
		this.camera.position.z = 500;
	}

	animate() {
	    requestAnimationFrame(this.animate)

	    this.camera.position.x = 500*Math.cos(this.camera.degree*Math.PI/180);
	    this.camera.position.z = 500*Math.sin(this.camera.degree*Math.PI/180);
	    this.camera.degree += 0.1
	    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	    this.renderer.render(this.scene, this.camera)
	}
}

new App()