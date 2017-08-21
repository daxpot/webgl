import './obj/OrbitControls'
import Pentagram from "./obj/Pentagram"

var WIDTH = window.innerWidth ,
    HEIGHT = window.innerHeight ;

class App {

	constructor() {
		this.animate = this.animate.bind(this);
		this.onMouseClick = this.onMouseClick.bind(this);

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
		this.renderer.domElement.addEventListener( 'click', this.onMouseClick );

		this.initScene();	

		this.animate();
	}

	initScene() {
		var loader = new THREE.TextureLoader();
		var bgTexture = loader.load("img/bg.jpg");
		this.scene.background = bgTexture;

        var ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        this.scene.add(ambientLight);

        this.earthRadius = 30;

		var earthGeo = new THREE.SphereGeometry(this.earthRadius, 40, 400),
			earthMat = new THREE.MeshPhongMaterial();

		earthMat.map = loader.load('img/diffuse.jpg');

		// earthMat.bumpMap = loader.load('img/earth_bump.jpg')
		// earthMat.bumpScale = 0.15;
		// earthMat.specularMap = loader.load('img/earth_spec.jpg')

		var vertexShader = 'varying vec3 vNormal;\
void main()\
{\
    vNormal = normalize( normalMatrix * normal );\
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\
}';

		var fragmentShader = 'uniform float c;\
uniform float p;\
varying vec3 vNormal;\
void main()\
{\
	float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );\
	gl_FragColor = vec4( 0.2, 0.58, 0.9, 0.3 ) * intensity;\
}';


		var material = new THREE.ShaderMaterial({

	        uniforms: {
	            'c': { type: 'f', value: 0.5 },
	            'p': { type: 'f', value: 2.0 }
	        },
	        vertexShader: vertexShader,
	        fragmentShader: fragmentShader

	    });

		this.earthMesh = new THREE.Mesh(earthGeo, earthMat);
		this.earthMesh.position.set(0, 0, 0);


		this.earthMesh2 = new THREE.Mesh(earthGeo.clone(), material);
		this.earthMesh2.position.set(0, 0, 0);
		this.earthMesh2.material.side = THREE.BackSide;
		this.earthMesh2.scale.set(1.08, 1.08, 1.08)

		this.scene.add(this.earthMesh);
		this.scene.add(this.earthMesh2);
		this.earthMesh.nowlocation = new THREE.Vector2(0, 0);
		this.earthMesh.toLocation = new THREE.Vector2(0, 0);

		this.camera.lookAt(this.earthMesh.position);
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
		this.points = [];
		this.pentas = [];
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
			if(Math.abs(this.earthMesh.nowlocation.x-this.earthMesh.toLocation.x) <= 1) {
				this.earthMesh.nowlocation.x = this.earthMesh.toLocation.x
			}

			if(this.earthMesh.nowlocation.y < this.earthMesh.toLocation.y) {
				this.earthMesh.nowlocation.y += 1
			} else if(this.earthMesh.nowlocation.y > this.earthMesh.toLocation.y) {
				this.earthMesh.nowlocation.y -= 1
			}

			if(Math.abs(this.earthMesh.nowlocation.y-this.earthMesh.toLocation.y) <= 1) {
				this.earthMesh.nowlocation.y = this.earthMesh.toLocation.y
			}

			var w = this.earthMesh.nowlocation.x*Math.PI/180;
			var j = -this.earthMesh.nowlocation.y*Math.PI/180;
			var x = 100*Math.cos(w)*Math.cos(j);
			var y = 100*Math.sin(w);
			var z = 100*Math.cos(w)*Math.sin(j);
			this.camera.position.set(x, y, z);
		}

	    var dis = this.camera.position.distanceTo(new THREE.Vector3(0,0,0))
	    var minDis = 45;
	    var maxDis = 200;
	    if(dis < minDis) {
	    	this.camera.position.multiplyScalar(minDis/dis);
	    } else if(dis > maxDis) {
	    	this.camera.position.multiplyScalar(maxDis/dis);
	    }
	}

	setPoint(vec2) {

		var w = vec2.x*Math.PI/180;
		var j = -vec2.y*Math.PI/180;
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

		var penta = new Pentagram({
			fixed: new THREE.Vector3(x, y, z),
			radius: 0.8,
			height: 0.3,
			color: Math.floor(Math.random()*16777215)
		})
		penta.rotation.set(0, -j, w)
		penta.g = 0.01
		penta.maxv = 0.2
		penta.v = penta.maxv*Math.random()
		penta.maxd = penta.maxv*penta.maxv/(2*penta.g)
		penta.d = penta.v*penta.v/(2*penta.g)
		penta.top = this.earthRadius + h;
		penta.direct = new THREE.Vector3(x1, y1, z1)
		penta.rot = Math.random()*6
		penta.pos = new THREE.Vector2(w, j);
		penta.animation = function() {
			if(this.v >= this.maxv) {
				this.v *= -1
			}
			this.v += this.g
			this.d += this.v

			if(this.d>=this.maxd) {
				this.v = -this.maxv
			} else if(this.d <= 0) {
				this.v = 0;
			}

			var h = this.maxd-this.d + this.top
			this.position.set(h*this.direct.x, h*this.direct.y, h*this.direct.z)
			this.rot += 0.005
			this.rotateX(this.rot)
		}
		this.scene.add(penta)
		this.scene.add(point)
		this.points.push(point);
		this.pentas.push(penta)
	}

	onMouseClick(event) {
		// update the mouse variable
		var mouse = new THREE.Vector2();
		mouse.x = ( event.clientX / WIDTH ) * 2 - 1;
		mouse.y = - ( event.clientY / HEIGHT ) * 2 + 1;	

		var raycaster = new THREE.Raycaster();
		raycaster.setFromCamera( mouse, this.camera );	

		// calculate objects intersecting the picking ray
		var intersects = raycaster.intersectObjects( this.pentas, true );

		if(intersects.length > 0) {
			var A = intersects[0].object.parent.pos;
			var B = this.pentas[0].pos;
			var dis = Math.floor(6378.1*Math.acos(Math.cos(A.x)*Math.cos(B.x)*Math.cos(A.y-B.y)+ Math.sin(A.x)*Math.sin(B.x)));
			if(dis > 0) {
				alert("您与他/她的直线距离为:" + dis + "公里");
			}
		}

	}

	animate() {

		requestAnimationFrame(this.animate)
	    this.checkLocation()

	    for(var i=0;i<this.pentas.length; i++) {
	    	this.pentas[i].animation()
	    }
	    this.controls.update()
	    this.renderer.render(this.scene, this.camera);
	}

}

var app = new App()
var bj = new THREE.Vector2(39.26, 116.3)
app.setLocation(bj);
app.setPoint(bj);
app.setPoint(new THREE.Vector2(22.3,114))
app.setPoint(new THREE.Vector2(22.1,114.3))
app.setPoint(new THREE.Vector2(22.2,114.5))
app.setPoint(new THREE.Vector2(22.4,114.7))
app.setPoint(new THREE.Vector2(43.46,87.36))
app.setPoint(new THREE.Vector2(40.7,-74.0))