
function len(str) {
	let l = 0;
	let a = str.split("");
	for(let i = 0, L=a.length; i < L; i++) {
		if(a[i].charCodeAt(0) < 299) {
			l += 0.6;
		} else {
			l++;
		}
	}
	return l;
}

export default class TextMesh extends THREE.Mesh {
	constructor(text, fontSize, color) {
		fontSize = arguments[1] ? arguments[1] : 30
		color = arguments[2] ? arguments[2] : "#ffffff"
		let stringLen = Math.round(len(text))
		let c = document.createElement("canvas")
		c.width = fontSize*stringLen
		c.height = fontSize
		let font = fontSize + "px 微软雅黑"
		let ctx = c.getContext("2d")
		ctx.font = font
		ctx.fillStyle = color
		ctx.fillText(text, 0, fontSize-3)

		let Tex = new THREE.Texture(c)
		Tex.needsUpdate = true

		var mat = new THREE.MeshBasicMaterial({map: Tex});
        mat.transparent = true;
	    mat.side = THREE.DoubleSide;

	    super(new THREE.PlaneGeometry(c.width, c.height), mat)
	    this.width = c.width
	    this.height = c.height
	}
}