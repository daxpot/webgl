varying vec3 vNormal;
uniform float amplitude;
attribute float displacement;
varying vec2 vUv;
void main() { 
	vNormal = normal;
	vUv = uv;
	vec3 newPosition = position + normal*vec3(displacement*amplitude);
	gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1); 
}