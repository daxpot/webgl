
import './obj/OrbitControls'
import './shaders/CopyShader'
import './shaders/AdditiveBlendShader'
import './postprocessing/ShaderPass'
import './postprocessing/MaskPass'
import './postprocessing/RenderPass'
import './postprocessing/EffectComposer'

/*
	Three.js "tutorials by example"
	Author: Lee Stemkoski
	Date: July 2013 (three.js v58)
*/
// MAIN
// standard global variables
var container, scene, camera, renderer, controls;
var clock = new THREE.Clock();
// custom global variables
var cube;
var atmosphereScene, camera2, composer2, finalComposer;

init();
animate();
// FUNCTIONS 		
function init() 
{
	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);	
	// RENDERER
	renderer = new THREE.WebGLRenderer( {antialias:true} );
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container = document.body;
	container.appendChild( renderer.domElement );
	// CONTROLS
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	// LIGHT
	var light = new THREE.PointLight(0xffffff);
	light.position.set(0,250,0);
	scene.add(light);
	
	////////////
	// CUSTOM //
	////////////
	
	// create custom material from the shader code above
	//   that is within specially labeled script tags
	
	var customMaterialAtmosphere = new THREE.ShaderMaterial( 
	{
	    uniforms:       
		{ 
			"c":   { type: "f", value: 0.5 },
			"p":   { type: "f", value: 4.0 }
		},
		vertexShader:   'varying vec3 vNormal;\
void main() \
{\
    vNormal = normalize( normalMatrix * normal );\
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\
}',
		fragmentShader: 'uniform float c;\
uniform float p;\
varying vec3 vNormal;\
void main()\
{\
	float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p ); \
	gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;\
}'
	}   );
	var sphereGeo = new THREE.SphereGeometry(100, 32, 16);
    
	var moonTexture = THREE.ImageUtils.loadTexture( 'img/diffuse.jpg' );
	var moonMaterial = new THREE.MeshBasicMaterial( { map: moonTexture } );
    var moon = new THREE.Mesh(sphereGeo, moonMaterial);
    scene.add(moon);
	
	// create secondary scene to add atmosphere effect
	
	atmosphereScene = new THREE.Scene();
	
	camera2 = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	camera2.position.copy(camera.position);
	camera2.rotation.copy(camera.rotation);
	atmosphereScene.add( camera2 );
	
	var mesh = new THREE.Mesh( sphereGeo.clone(), customMaterialAtmosphere );
	mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.2;
	// atmosphere should provide light from behind the sphere, so only render the back side
	mesh.material.side = THREE.BackSide;
	atmosphereScene.add(mesh);
	
	// clone earlier sphere geometry to block light correctly
	// and make it a bit smaller so that light blends into surface a bit
	var blackMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
	var sphere = new THREE.Mesh(sphereGeo.clone(), blackMaterial);
	sphere.scale.x = sphere.scale.y = sphere.scale.z = 1;
	atmosphereScene.add(sphere);
	
	////////////////////////////////////////////////////////////////////////
	// final composer will blend composer2.render() results with the scene 
	////////////////////////////////////////////////////////////////////////
	
	// prepare secondary composer
	var renderTargetParameters = 
		{ minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, 
		  format: THREE.RGBFormat, stencilBuffer: false };
	var renderTarget = new THREE.WebGLRenderTarget( SCREEN_WIDTH, SCREEN_HEIGHT, renderTargetParameters );
	composer2 = new THREE.EffectComposer( renderer, renderTarget );
	
	// prepare the secondary render's passes
	var render2Pass = new THREE.RenderPass( atmosphereScene, camera2 );
	composer2.addPass( render2Pass );
	
	// prepare final composer
	finalComposer = new THREE.EffectComposer( renderer, renderTarget );
	// prepare the final render's passes
	var renderModel = new THREE.RenderPass( scene, camera );
	finalComposer.addPass( renderModel );
	var effectBlend = new THREE.ShaderPass( THREE.AdditiveBlendShader, "tDiffuse1" );
	effectBlend.uniforms[ 'tDiffuse2' ].value = composer2.renderTarget2;
	effectBlend.renderToScreen = true;
	finalComposer.addPass( effectBlend );
	/////////
	// GUI //
	/////////
	
	
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
}
function animate() 
{
    requestAnimationFrame( animate );
	render();		
	update();
}
function update()
{
	
	controls.update();
}
function render() 
{
	composer2.render();
	finalComposer.render();
}