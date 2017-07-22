import './obj/OrbitControls'

class App {

	constructor() {
		this.animate = this.animate.bind(this);

		var WIDTH = window.innerWidth ,
		    HEIGHT = window.innerHeight ;

		var angle = 45,
		    aspect = WIDTH / HEIGHT,
		    near = 0.1,
		    far = 3000;

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(angle, aspect, near, far);
		this.camera.position.set(100, 0, 0);
		this.renderer = new THREE.WebGLRenderer({
		    antialiasing: true
		});
		this.renderer.setClearColor( 0x000000 );
		this.renderer.setSize(WIDTH, HEIGHT);
		document.body.appendChild(this.renderer.domElement);	

		this.initScene();	

		this.animate();
	}

	initScene() {
		var bgTexture = new THREE.TextureLoader().load("img/bg.jpg");
		this.scene.background = bgTexture;

        var ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        this.scene.add(ambientLight);

		var earthGeo = new THREE.SphereGeometry(30, 40, 400),
			earthMat = new THREE.MeshPhongMaterial();

		earthMat.map = THREE.ImageUtils.loadTexture('img/diffuse.jpg');

		this.earthMesh = new THREE.Mesh(earthGeo, earthMat);
		this.earthMesh.position.set(0, 0, 0);

		this.scene.add(this.earthMesh);
		this.earthMesh.nowlocation = new THREE.Vector2(0, 0);
		this.earthMesh.toLocation = new THREE.Vector2(0, 0);

		this.camera.lookAt(this.earthMesh.position);
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
	}

	setLocation(vec2) {
		this.earthMesh.toLocation = vec2;
	}

	checkLocation() {

		if(this.earthMesh.nowlocation.x != this.earthMesh.toLocation.x || this.earthMesh.nowlocation.y != this.earthMesh.toLocation.y) {

			if(this.earthMesh.nowlocation.x < this.earthMesh.toLocation.x) {
				this.earthMesh.nowlocation.x += 1
			} else if(this.earthMesh.nowlocation.x > this.earthMesh.toLocation.x) {
				this.earthMesh.nowlocation.x -= 1
			}

			if(this.earthMesh.nowlocation.y < this.earthMesh.toLocation.y) {
				this.earthMesh.nowlocation.y += 1
			} else if(this.earthMesh.nowlocation.y > this.earthMesh.toLocation.y) {
				this.earthMesh.nowlocation.y -= 1
			}

			var w = this.earthMesh.nowlocation.x*Math.PI/180;
			var j = this.earthMesh.nowlocation.y*Math.PI/180;
			var x = 100*Math.cos(w)*Math.cos(j);
			var y = 100*Math.sin(w);
			var z = 100*Math.cos(w)*Math.sin(j);
			this.camera.position.set(x, y, z);
		}
	}

	animate() {

		requestAnimationFrame(this.animate)
	    this.checkLocation()
	    this.controls.update()
	    this.renderer.render(this.scene, this.camera);
	}

}

var app = new App()
app.setLocation(new THREE.Vector2(40, -116));