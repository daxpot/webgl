
uniform sampler2D tDiffuse;
varying vec3 vNormal;
varying vec2 vUv;
varying mat4 pos;
void main() { 
	vec3 light = vec3(0.5, 0.2, 1.0);
	light = normalize(light);
	float dProd = max(0.0, dot(vNormal, light));
	vec4 texel = texture2D( tDiffuse, vUv);
	gl_FragColor = pos*vec4(1.0, 1.0, 1.0, 1.0);
}