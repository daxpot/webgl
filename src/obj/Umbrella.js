
export default class Umbrella extends THREE.Object3D {
	constructor() {
	    super()

		var geometry = new THREE.Geometry();
		var radius = 10
		var triangle = 16
		var fixed = new THREE.Vector3(0, 0, 3)

		for(let i =0; i<triangle; i++) {
			let euler = i*Math.PI*2/triangle
			geometry.vertices.push(new THREE.Vector3(radius*Math.cos(euler), radius*Math.sin(euler), 0))
		}
		geometry.vertices.push(fixed);
		geometry.colors.push(new THREE.Color(0xffffff))
		for(let i=0; i<triangle; i++) {
			geometry.faces.push(new THREE.Face3(i, (i+1)%triangle, triangle))
		}
	    geometry.computeBoundingSphere();

	    var material = new THREE.MeshPhongMaterial({
	    	color: 0x156289, 
	    	side: THREE.DoubleSide,
	    	emissive: 0x072534,
	    	shading: THREE.FlatShading
	    });
	    this.add(new THREE.Mesh(geometry, material))

	    material = new THREE.LineBasicMaterial({
	    	color: 0xffffff,
			transparent: true,
			opacity: 0.5
	    });

	    let euler = (triangle-1)*Math.PI*2/triangle
	    var lastPoint = new THREE.Vector3(radius*Math.cos(euler), radius*Math.sin(euler), 0)
		for(let i =0; i<triangle; i++) {
			var geometry = new THREE.Geometry();
			let euler = i*Math.PI*2/triangle
			let nowpoint = new THREE.Vector3(radius*Math.cos(euler), radius*Math.sin(euler), 0)
			geometry.vertices.push(
				lastPoint,
				nowpoint,
				fixed
			);
			lastPoint = nowpoint
			this.add(new THREE.Line(geometry, material))
		}

	}
}