import './obj/OrbitControls'

window.position = {
	"w": 0,
	"j": 0,
}

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
		// this.earthMesh.rotation.y = 2.8;

		this.scene.add(this.earthMesh);

		this.camera.lookAt(this.earthMesh.position);
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
	    this.clock = new THREE.Clock();
	    this._position = {
	    	"w": window.position.w,
	    	"j": window.position.j
	    };
	}

	animate() {

		requestAnimationFrame(this.animate)
	    var delta = this.clock.getDelta();
	    if(this._position.w != window.position.w || this._position.j != window.position.j) {

	    	var w = position.w*Math.PI/180;
	    	var j = position.j*Math.PI/180;
	    	var x = 100*Math.cos(w)*Math.cos(j);
	    	var y = 100*Math.sin(w);
	    	var z = 100*Math.cos(w)*Math.sin(j);
	    	this.camera.position.set(x, y, z);
	    	this._position = {
		    	"w": window.position.w,
		    	"j": window.position.j
		    };
	    }

	    // this.earthMesh.rotation.y += 0.2 * delta;
	    this.controls.update()
	    this.renderer.render(this.scene, this.camera);
	}

}

new App()