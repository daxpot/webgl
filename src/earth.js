import './obj/OrbitControls'
import Pentagram from "./obj/Pentagram"

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

        this.earthRadius = 30;

		var earthGeo = new THREE.SphereGeometry(this.earthRadius, 40, 400),
			earthMat = new THREE.MeshPhongMaterial();

		earthMat.map = THREE.ImageUtils.loadTexture('img/diffuse.jpg');

		this.earthMesh = new THREE.Mesh(earthGeo, earthMat);
		this.earthMesh.position.set(0, 0, 0);

		this.scene.add(this.earthMesh);
		this.earthMesh.nowlocation = new THREE.Vector2(0, 0);
		this.earthMesh.toLocation = new THREE.Vector2(0, 0);

		this.camera.lookAt(this.earthMesh.position);
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
		this.points = [];
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

	setPoint(vec2) {

		var w = vec2.x*Math.PI/180;
		var j = vec2.y*Math.PI/180;
		var x1 = Math.cos(w)*Math.cos(j);
		var y1 = Math.sin(w);
		var z1 = Math.cos(w)*Math.sin(j);
		var h = 0
		var x = (this.earthRadius + h)*x1;
		var y = (this.earthRadius + h)*y1;
		var z = (this.earthRadius + h)*z1;
		var geometry = new THREE.SphereGeometry(0.1, 20, 20)
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		var point = new THREE.Mesh( geometry, material );
		point.position.set(x, y, z);

		point.nowscale = 1;
		point.direct = 1;
		point.animation = function(maxS, minS) {
			if(this.nowscale >= maxS) {
				this.direct = -1;
			}
			if(this.nowscale <= minS) {
				this.direct = 1;
			}
			var scale = this.nowscale + this.direct*this.nowscale/50
			this.scale.set(scale, scale, scale)
			this.nowscale = scale
		}

		var penta = new Pentagram({
			fixed: new THREE.Vector3(x, y, z),
			radius: 1,
			height: 0.3
		})
		// penta.rotateY(w);
		this.scene.add(penta)
		this.points.push(point);
	}

	animate() {

		requestAnimationFrame(this.animate)
	    this.checkLocation()
	    var dis = this.camera.position.distanceTo(new THREE.Vector3(0,0,0))
	    var scale = dis/100
	  	var maxS = 1.2*scale,
	  	    minS = 0.8*scale;

	    for(var i=0;i<this.points.length; i++) {
	    	this.points[i].animation(maxS, minS)
	    }
	    this.controls.update()
	    this.renderer.render(this.scene, this.camera);
	}

}

var app = new App()
var bj = new THREE.Vector2(40, -116)
app.setLocation(bj);
app.setPoint(bj);
app.setPoint(new THREE.Vector2(22.3,-114))
app.setPoint(new THREE.Vector2(22.1,-114.3))
app.setPoint(new THREE.Vector2(22.2,-114.5))
app.setPoint(new THREE.Vector2(22.4,-114.7))