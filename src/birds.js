import Bird from "./obj/Bird"

class Boid {
	constructor() {
		this.vector = new THREE.Vector3();
		this._acceleration = new THREE.Vector3();					//加速度
		this._width = 500;
		this._height = 500;
		this._depth = 200;
		this._goal = null;							//
		this._neighborhoodRadius = 100;
		this._maxSpeed = 4;
		this._maxSteerForce = 0.1;
		this._avoidWalls = false;
		this.position = new THREE.Vector3();
		this.velocity = new THREE.Vector3();		//速度
	}

	setGoal(target) {
		this._goal = target;
	}

	setAvoidWalls(value) {
		this._avoidWalls = value;
	}

	setWorldSize ( width, height, depth ) {
		this._width = width;
		this._height = height;
		this._depth = depth;
	}

	avoid(target) {
		var steer = new THREE.Vector3();		
		steer.copy(this.position);
		steer.sub(target);
		steer.multiplyScalar(1/this.position.distanceToSquared(target));
		//(a-b)/|a-b|^2
		return steer;
	}

	repulse ( target ) {
		var distance = this.position.distanceTo( target );
		if ( distance < 150 ) {
			var steer = new THREE.Vector3();
			steer.subVectors( this.position, target );
			steer.multiplyScalar( 0.5 / distance );
			this._acceleration.add( steer );
		}
	}

	reach ( target, amount ) {
		var steer = new THREE.Vector3();
		steer.subVectors( target, this.position );
		steer.multiplyScalar( amount );
		return steer;
	}

	alignment ( boids ) {
		var boid, velSum = new THREE.Vector3(),
		count = 0;
		for ( var i = 0, il = boids.length; i < il; i++ ) {
			if ( Math.random() > 0.6 ) continue;
			boid = boids[ i ];
			var distance = boid.position.distanceTo( this.position );
			if ( distance > 0 && distance <= this._neighborhoodRadius ) {
				velSum.add( boid.velocity );
				count++;
			}
		}
		if ( count > 0 ) {
			velSum.divideScalar( count );
			var l = velSum.length();
			if ( l > this._maxSteerForce ) {
				velSum.divideScalar( l / this._maxSteerForce );
			}
		}
		return velSum;
	}

	cohesion ( boids ) {
		var boid, distance,
		posSum = new THREE.Vector3(),
		steer = new THREE.Vector3(),
		count = 0;
		for ( var i = 0, il = boids.length; i < il; i ++ ) {
			if ( Math.random() > 0.6 ) continue;
			boid = boids[ i ];
			distance = boid.position.distanceTo( this.position );
			if ( distance > 0 && distance <= this._neighborhoodRadius ) {
				posSum.add( boid.position );
				count++;
			}
		}
		if ( count > 0 ) {
			posSum.divideScalar( count );
		}
		steer.subVectors( posSum, this.position );
		var l = steer.length();
		if ( l > this._maxSteerForce ) {
			steer.divideScalar( l / this._maxSteerForce );
		}
		return steer;
	}

	separation ( boids ) {
		var boid, distance,
		posSum = new THREE.Vector3(),
		repulse = new THREE.Vector3();
		for ( var i = 0, il = boids.length; i < il; i ++ ) {
			if ( Math.random() > 0.6 ) continue;
			boid = boids[ i ];
			distance = boid.position.distanceTo( this.position );
			if ( distance > 0 && distance <= this._neighborhoodRadius ) {
				repulse.subVectors( this.position, boid.position );
				repulse.normalize();
				repulse.divideScalar( distance );
				posSum.add( repulse );
			}
		}
		return posSum;
	}

	flock(boids) {
		if(this._goal) {
			this._acceleration.add(this.reach(this._goal, 0.005));
		}
		this._acceleration.add(this.alignment(boids));
		this._acceleration.add(this.cohesion(boids));
		this._acceleration.add(this.separation(boids));
	}

	move () {
		this.velocity.add( this._acceleration );
		var l = this.velocity.length();
		if ( l > this._maxSpeed ) {
			this.velocity.divideScalar( l / this._maxSpeed );
		}
		this.position.add( this.velocity );
		this._acceleration.set( 0, 0, 0 );
	}

	run(boids) {
		if(this._avoidWalls) {
			this.vector.set(-this._width, this.position.y, this.position.z);
			this.vector = this.avoid(this.vector);
			this.vector.multiplyScalar(5);
			this._acceleration.add(this.vector);
			this.vector.set(this._width, this.position.y, this.position.z);
			this.vector = this.avoid(this.vector);
			this.vector.multiplyScalar(5);
			this._acceleration.add(this.vector);
			this.vector.set(this.position.x, -this._height, this.position.z);
			this.vector = this.avoid(this.vector);
			this.vector.multiplyScalar(5);
			this._acceleration.add(this.vector);
			this.vector.set(this.position.x, this._height, this.position.z);
			this.vector = this.avoid(this.vector);
			this.vector.multiplyScalar(5);
			this._acceleration.add(this.vector);
			this.vector.set(this.position.x, this.position.y, -this._depth);
			this.vector = this.avoid(this.vector);
			this.vector.multiplyScalar(5);
			this._acceleration.add(this.vector);
			this.vector.set(this.position.x, this.position.y, this._depth);
			this.vector = this.avoid(this.vector);
			this.vector.multiplyScalar(5);
			this._acceleration.add(this.vector);
		}

		if(Math.random() > 0.5) {
			this.flock(boids);
		}
		this.move();
	}
}

var SCREEN_WIDTH = window.innerWidth,
SCREEN_HEIGHT = window.innerHeight,
SCREEN_WIDTH_HALF = SCREEN_WIDTH  / 2,
SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

class App {
	constructor() {
		this.animate = this.animate.bind(this);
		this.onWindowResize = this.onWindowResize.bind(this);
		this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);

		this.camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH/SCREEN_HEIGHT, 1, 1000);
		this.camera.position.z = 450;
		this.scene = new THREE.Scene();
		this.birds = [];
		this.boids = [];

		for(var i = 0; i<200; i++) {
			var boid = this.boids[i] = new Boid();
			boid.position.x = Math.random() * 400 - 200;
			boid.position.x = Math.random() * 400 - 200;
			boid.position.y = Math.random() * 400 - 200;
			boid.position.z = Math.random() * 400 - 200;
			boid.velocity.x = Math.random() * 2 - 1;
			boid.velocity.y = Math.random() * 2 - 1;
			boid.velocity.z = Math.random() * 2 - 1;
			boid.setAvoidWalls( true );
			boid.setWorldSize( 500, 500, 400 );
			var bird = this.birds[ i ] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color:Math.random() * 0xffffff, side: THREE.DoubleSide } ) );
			bird.phase = Math.floor( Math.random() * 62.83 );
			this.scene.add( bird );
		}
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor( 0xffffff );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
		document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
		document.body.appendChild( this.renderer.domElement );
		window.addEventListener( 'resize', this.onWindowResize, false );

		this.animate();
	}
	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
	}
	onDocumentMouseMove( event ) {
		var vector = new THREE.Vector3( event.clientX - SCREEN_WIDTH_HALF, - event.clientY + SCREEN_HEIGHT_HALF, 0 );
		for ( var i = 0, il = this.boids.length; i < il; i++ ) {
			var boid = this.boids[ i ];
			vector.z = boid.position.z;
			boid.repulse( vector );
		}
	}
	//
	animate() {
		requestAnimationFrame( this.animate );
		this.render();
	}
	render() {
		for ( var i = 0, il = this.birds.length; i < il; i++ ) {
			var boid = this.boids[ i ];
			boid.run( this.boids );
			var bird = this.birds[ i ];
			bird.position.copy( this.boids[ i ].position );
			var color = bird.material.color;
			color.r = color.g = color.b = ( 500 - bird.position.z ) / 1000;
			bird.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
			bird.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length() );
			bird.phase = ( bird.phase + ( Math.max( 0, bird.rotation.z ) + 0.1 )  ) % 62.83;
			bird.geometry.vertices[ 5 ].y = bird.geometry.vertices[ 4 ].y = Math.sin( bird.phase ) * 5;
		}
		this.renderer.render( this.scene, this.camera );
	}
}

new App();