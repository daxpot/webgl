
uniform float amplitude;
attribute float displacement;
varying vec2 vUv;
varying vec3 vNormal;
varying mat4 pos;
void main() { 
	vNormal = normal;
	vUv = uv;
	vec3 newPosition = position + normal*vec3(displacement*amplitude)*0.0;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1); 
	pos = modelViewMatrix;
}