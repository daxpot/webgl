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
		this.camera.position.set(0, 0, 100);
		this.renderer = new THREE.WebGLRenderer({
		    antialiasing: true
		});
		this.renderer.setClearColor( 0x000000 );
		this.renderer.setSize(WIDTH, HEIGHT);
		document.body.appendChild(this.renderer.domElement);	

		// this.renderer.autoClear = false;
		// this.renderer.shadowMapEnabled = true;

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

		// diffuse map
		earthMat.map = THREE.ImageUtils.loadTexture('img/diffuse.jpg');
		// earthMat.shininess = 300;

		// bump map
		// earthMat.bumpMap = THREE.ImageUtils.loadTexture('/uploads/150301/bump-map.jpg');
		// earthMat.bumpScale = 8;

		this.earthMesh = new THREE.Mesh(earthGeo, earthMat);
		this.earthMesh.position.set(0, 0, 0);
		this.earthMesh.rotation.y = 5;

		this.scene.add(this.earthMesh);

		this.camera.lookAt(this.earthMesh.position);
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
	    this.clock = new THREE.Clock();
	}

	animate() {

		requestAnimationFrame(this.animate)
	    var delta = this.clock.getDelta();

	    this.earthMesh.rotation.y += 0.2 * delta;
	    // this.controls.update()
	    this.renderer.render(this.scene, this.camera);
	}

}

new App()