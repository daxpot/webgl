
export default class Pentagram extends THREE.Object3D {
	constructor(options) {
	    super()
	    options ? true : options = {}
	    options.radius ? true : options.radius = 10;
	    options.fixed ? true : options.fixed = new THREE.Vector3(0, 0, 7);
	    options.height ? true : options.height = 6

		var geometry = new THREE.Geometry();
		var radius = options.radius
		var top = options.fixed
		var bottom = options.fixed.clone();
		bottom.z = bottom.z - options.height;

	    for(let i =0; i<5; i++) {
	    	let euler = i*Math.PI*2/5
	    	geometry.vertices.push(new THREE.Vector3(radius*Math.cos(euler) + top.x, radius*Math.sin(euler) + top.y, top.z - options.height/2))
	    }
	    for(let i=0; i<5; i++) {
	    	let euler = (i+1)*Math.PI*2/5
	    	geometry.vertices.push(new THREE.Vector3(radius*Math.cos(euler) + top.x, radius*Math.sin(euler) + top.y, top.z - options.height/2))	
	    }
	    geometry.vertices.push(top)
	    geometry.vertices.push(bottom)

	    for(let i=0; i<5; i++) {
	    	geometry.faces.push(new THREE.Face3(i, 10, (i+1)%5+5))
	    	geometry.faces.push(new THREE.Face3(i, 10, i))
	    	geometry.faces.push(new THREE.Face3(i, 11, (i+1)%5+5))
	    	geometry.faces.push(new THREE.Face3(i, 11, i))
	    }

	    geometry.computeBoundingSphere();

	    var material = new THREE.MeshPhongMaterial({
	    	color: 0x156289, 
	    	side: THREE.DoubleSide,
	    	emissive: 0x072534,
	    	shading: THREE.FlatShading
	    });
	    this.add(new THREE.Mesh(geometry, material))

	}	
}