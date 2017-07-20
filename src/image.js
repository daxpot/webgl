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

		let geometry = new THREE.Geometry();
		for(let j =0; j<1000; j++) {

			let vertex1 = new THREE.Vector3();
			vertex1.x = Math.random() * 3000 - 1500;
			vertex1.y = Math.random() * 2000 - 1000;
			vertex1.z = Math.random() * 1500;
			geometry.vertices.push(vertex1);
		}

		let parameters = [ 
			[ [0.90, 0.05, 1], 15 ],
			[ [1.0, 0.2, 1.0], 20 ],
			[ [0.95, 0.1, 1], 18 ],
			[ [0.85, 0, 0.8], 20 ],
			[ [0.80, 0, 0.7], 16 ],
		];

		for(let i=0; i<texures.length; i++) {
			loader.load(
				texures[i],
				(image) => {
					let texure = new THREE.Texture(image)
					texure.needsUpdate = true;
					let color = parameters[i][0];
					let size = parameters[i][1];

					let material =  new THREE.ParticleBasicMaterial( { size: size, map: texure, blending: THREE.AdditiveBlending, depthTest: false, transparent : true } );
					material.color.setHSL( color[0], color[1], color[2] );
					let particle1 = new THREE.ParticleSystem(geometry, material);
					
					particle1.position.z = 1500*i;

					particle1.rotation.x = Math.random() * 6;
					particle1.rotation.y = Math.random() * 6;
					particle1.rotation.z = Math.random() * 6;

					this.scene.add(particle1);
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