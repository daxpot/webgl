/* global THREE */
import Bird from "./obj/Bird"
import Gird from "./obj/Gird"
import TextMesh from "./obj/Text"
import './obj/OrbitControls'
import Umbrella from "./obj/Umbrella"
import Pentagram from "./obj/Pentagram"

class App {
	constructor() {
		this.animate = this.animate.bind(this);
		this.onMouseClick = this.onMouseClick.bind(this);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor( 0x000000 );
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);	
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
		this.renderer.domElement.addEventListener( 'click', this.onMouseClick );

		this.initScene();	

		this.animate();
	}

	initScene() {
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
		this.cube = new THREE.Mesh(geometry, material);

		this.scene.add(this.cube);

		geometry = new Bird();
		material = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
		this.bird = new THREE.Mesh(geometry, material);
		this.bird.phase = Math.floor( Math.random() * 62.83 );
		this.bird.position.set(0, -3, 1);
		// this.bird.rotation.y = Math.PI/2;
		// this.bird.rotation.z = Math.PI/2; 
		// this.scene.add(this.bird);

		this.scene.add(new Gird());

		this.camera.position.set(1, 1, 30);
		this.camera.degree = 0;

		var directionalLight = new THREE.AmbientLight( 0xffffff, 1 );
	    directionalLight.position.set( 0, 0, 10 );
	    this.scene.add( directionalLight );

	    // var mesh = new TextMesh("x")
	    // mesh.position.set(-20, 0, 0)
	    // this.scene.add(mesh)
	    // this.setPoint(new THREE.Vector2(0,0))

	    var options = {
	    	fixed: new THREE.Vector3(0, 0, 7),
	    	height: 5,
	    	color: 0xff0000
	    }
	    var penta = new Pentagram(options);
	    penta.rotateY(Math.PI/2);
	    this.scene.add(penta)
	}

	setPoint(vec2) {

		var w = vec2.x*Math.PI/180;
		var j = vec2.y*Math.PI/180;
		var x = 30*Math.cos(w)*Math.cos(j);
		var y = 30*Math.sin(w);
		var z = 30*Math.cos(w)*Math.sin(j);
		var geometry = new THREE.SphereGeometry(1, 32, 32)
		var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		var point = new THREE.Mesh( geometry, material );
		point.position.set(x, y, z);
		// point.rotation.z = Math.PI/2;
		// point.rotateX(90)
		this.scene.add(point)
	}

	onMouseClick(event) {
		console.log("Click.");
		// update the mouse variable
		// var mouse = new THREE.Vector2();
		// mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		// mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;	

		// var raycaster = new THREE.Raycaster();
		// raycaster.setFromCamera( mouse, this.camera );	

		// // calculate objects intersecting the picking ray
		// var intersects = raycaster.intersectObjects( this.scene.children, true );
		// console.log(intersects.length)

		// for ( var i = 0; i < intersects.length; i++ ) {

		// 	intersects[ i ].object.material.color.set( 0xff0000 );
		
		// }

	}

	animate() {
	    requestAnimationFrame(this.animate)
	    // this.cube.rotation.x += 0.1;
	    // this.cube.rotation.y += 0.1;
		// this.camera.position.x = 30*Math.sin(this.camera.degree*Math.PI/180);
		// this.camera.position.z = 30*Math.cos(this.camera.degree*Math.PI/180);
		// this.camera.degree += 1;
		// this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    this.renderer.render(this.scene, this.camera)
	}
}

new App();