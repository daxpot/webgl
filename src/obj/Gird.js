
export default class Gird{
	constructor(scene) {
		var material = new THREE.LineBasicMaterial({
			color: 0xffffff
		});
		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( -100, 0, 0 ),
			new THREE.Vector3( 20, 0, 0 ),
			new THREE.Vector3( 19, 1, 0 ),
			new THREE.Vector3( 20, 0, 0 ),
			new THREE.Vector3( 19, -1, 0 ),
			new THREE.Vector3( 20, 0, 0 ),
			new THREE.Vector3( 100, 0, 0 )
		);
		var line = new THREE.Line( geometry, material );
		scene.add(line);
		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, -100, 0 ),
			new THREE.Vector3( 0, 20, 0 ),
			new THREE.Vector3( 1, 19, 0 ),
			new THREE.Vector3( 0, 20, 0 ),
			new THREE.Vector3( -1, 19, 0 ),
			new THREE.Vector3( 0, 20, 0 ),
			new THREE.Vector3( 0, 100, 0 ),
		);
		var line = new THREE.Line( geometry, material );
		scene.add(line);
		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, 0,  -100 ),
			new THREE.Vector3( 0, 0,  20 ),
			new THREE.Vector3( 1, 0,  19 ),
			new THREE.Vector3( 0, 0,  20 ),
			new THREE.Vector3( -1, 0,  19 ),
			new THREE.Vector3( 0, 0,  20 ),
			new THREE.Vector3( 0, 0,  100 ),
		);
		var line = new THREE.Line( geometry, material );
		scene.add(line);
	}
}
