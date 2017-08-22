var i, h, time, color, sprite, size, object;

export default class Sprites extends THREE.Object3D {
	constructor(options) {
		super();
		var textureLoader = new THREE.TextureLoader();

		var sprite1 = textureLoader.load( "img/sprites/snowflake1.png" );
		var sprite2 = textureLoader.load( "img/sprites/snowflake2.png" );
		var sprite3 = textureLoader.load( "img/sprites/snowflake3.png" );
		var sprite4 = textureLoader.load( "img/sprites/snowflake4.png" );
		var sprite5 = textureLoader.load( "img/sprites/snowflake5.png" );

		var geometry = new THREE.Geometry();
		for(i=0; i<10000; i++) {
			var vertex = new THREE.Vector3();
			vertex.x = Math.random() * 2000 - 1000;
			vertex.y = Math.random() * 2000 - 1000;
			vertex.z = Math.random() * 2000 - 1000;

			geometry.vertices.push( vertex );
		}

		this.parameters = [
			[ [1.0, 0.2, 0.5], sprite2, 20 ],
			[ [0.95, 0.1, 0.5], sprite3, 15 ],
			[ [0.90, 0.05, 0.5], sprite1, 10 ],
			[ [0.85, 0, 0.5], sprite5, 8 ],
			[ [0.80, 0, 0.5], sprite4, 5 ]
		];
		this.materials = [];
		for (i = 0; i < this.parameters.length; i ++ ) {

			color  = this.parameters[i][0],
			sprite = this.parameters[i][1],
			size   = this.parameters[i][2];

			this.materials[i] = new THREE.PointsMaterial( { 
				size: size, 
				map: sprite, 
				blending: THREE.AdditiveBlending, 
				depthTest: false, 
				transparent : true 
			} );
			this.materials[i].color.setHSL( color[0], color[1], color[2] );

			var particles = new THREE.Points( geometry, this.materials[i] );

			particles.rotation.x = Math.random() * 6;
			particles.rotation.y = Math.random() * 6;
			particles.rotation.z = Math.random() * 6;
			this.add(particles);
		}
	}

	update() {
		time = Date.now() * 0.00005;
		for ( i = 0; i < this.children.length; i ++ ) {

			object = this.children[ i ];

			if ( object instanceof THREE.Points ) {

				object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

			}

		}
		for ( i = 0; i < this.materials.length; i ++ ) {

			color = this.parameters[i][0];

			h = ( 360 * ( color[0] + time ) % 360 ) / 360;
			this.materials[i].color.setHSL( h, color[1], color[2] );

		}
	}
}