/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./src/obj/Bird.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global THREE */

var Bird = function (_THREE$Geometry) {
	_inherits(Bird, _THREE$Geometry);

	function Bird() {
		_classCallCheck(this, Bird);

		var _this = _possibleConstructorReturn(this, (Bird.__proto__ || Object.getPrototypeOf(Bird)).call(this));

		_this.v(5, 0, 0);
		_this.v(-5, -2, 1);
		_this.v(-5, 0, 0);
		_this.v(-5, -2, -1);

		_this.v(0, 2, -6);
		_this.v(0, 2, 6);
		_this.v(2, 0, 0);
		_this.v(-3, 0, 0);

		_this.f3(0, 2, 1);
		// this.f3( 0, 3, 2 );

		_this.f3(4, 7, 6);
		_this.f3(5, 6, 7);

		_this.computeFaceNormals();
		return _this;
	}

	_createClass(Bird, [{
		key: "v",
		value: function v(x, y, z) {
			this.vertices.push(new THREE.Vector3(x, y, z));
		}
	}, {
		key: "f3",
		value: function f3(a, b, c) {
			this.faces.push(new THREE.Face3(a, b, c));
		}
	}]);

	return Bird;
}(THREE.Geometry);

exports.default = Bird;

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./src/obj/Gird.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gird = function Gird(scene) {
	_classCallCheck(this, Gird);

	var material = new THREE.LineBasicMaterial({
		color: 0xffffff
	});
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(-100, 0, 0), new THREE.Vector3(20, 0, 0), new THREE.Vector3(19, 1, 0), new THREE.Vector3(20, 0, 0), new THREE.Vector3(19, -1, 0), new THREE.Vector3(20, 0, 0), new THREE.Vector3(100, 0, 0));
	var line = new THREE.Line(geometry, material);
	scene.add(line);
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(0, -100, 0), new THREE.Vector3(0, 20, 0), new THREE.Vector3(1, 19, 0), new THREE.Vector3(0, 20, 0), new THREE.Vector3(-1, 19, 0), new THREE.Vector3(0, 20, 0), new THREE.Vector3(0, 100, 0));
	var line = new THREE.Line(geometry, material);
	scene.add(line);
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(0, 0, -100), new THREE.Vector3(0, 0, 20), new THREE.Vector3(1, 0, 19), new THREE.Vector3(0, 0, 20), new THREE.Vector3(-1, 0, 19), new THREE.Vector3(0, 0, 20), new THREE.Vector3(0, 0, 100));
	var line = new THREE.Line(geometry, material);
	scene.add(line);
};

exports.default = Gird;

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./src/obj/Text.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function len(str) {
	var l = 0;
	var a = str.split("");
	for (var i = 0, L = a.length; i < L; i++) {
		if (a[i].charCodeAt(0) < 299) {
			l += 0.6;
		} else {
			l++;
		}
	}
	return l;
}

var TextMesh = function (_THREE$Mesh) {
	_inherits(TextMesh, _THREE$Mesh);

	function TextMesh(text, fontSize, color) {
		_classCallCheck(this, TextMesh);

		fontSize = arguments[1] ? arguments[1] : 30;
		color = arguments[2] ? arguments[2] : "#ffffff";
		var stringLen = Math.round(len(text));
		var c = document.createElement("canvas");
		c.width = fontSize * stringLen;
		c.height = fontSize;
		var font = fontSize + "px 微软雅黑";
		var ctx = c.getContext("2d");
		ctx.font = font;
		ctx.fillStyle = color;
		ctx.fillText(text, 0, fontSize - 3);

		var Tex = new THREE.Texture(c);
		Tex.needsUpdate = true;

		var mat = new THREE.MeshBasicMaterial({ map: Tex });
		mat.transparent = true;
		mat.side = THREE.DoubleSide;

		var _this = _possibleConstructorReturn(this, (TextMesh.__proto__ || Object.getPrototypeOf(TextMesh)).call(this, new THREE.PlaneGeometry(c.width, c.height), mat));

		_this.width = c.width;
		_this.height = c.height;
		return _this;
	}

	return TextMesh;
}(THREE.Mesh);

exports.default = TextMesh;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/* no static exports found */
/* all exports used */
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global THREE */


var _Bird = __webpack_require__(/*! ./obj/Bird */ 0);

var _Bird2 = _interopRequireDefault(_Bird);

var _Gird = __webpack_require__(/*! ./obj/Gird */ 1);

var _Gird2 = _interopRequireDefault(_Gird);

var _Text = __webpack_require__(/*! ./obj/Text */ 2);

var _Text2 = _interopRequireDefault(_Text);

__webpack_require__(/*! ./obj/OrbitControls */ 8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.animate = this.animate.bind(this);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(0x000000);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

		this.initScene();

		this.animate();
	}

	_createClass(App, [{
		key: "initScene",
		value: function initScene() {
			var geometry = new THREE.BoxGeometry(1, 1, 1);
			var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			this.cube = new THREE.Mesh(geometry, material);

			this.scene.add(this.cube);

			geometry = new _Bird2.default();
			material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
			this.bird = new THREE.Mesh(geometry, material);
			this.bird.phase = Math.floor(Math.random() * 62.83);
			this.bird.position.set(0, -3, 1);
			// this.bird.rotation.y = Math.PI/2;
			// this.bird.rotation.z = Math.PI/2; 
			// this.scene.add(this.bird);

			new _Gird2.default(this.scene);

			this.camera.position.set(1, 1, 30);
			this.camera.degree = 0;

			var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
			directionalLight.position.set(0, 0, 10);
			this.scene.add(directionalLight);

			var mesh = new _Text2.default("x");
			mesh.position.set(0, 0, -200);
			this.scene.add(mesh);
		}
	}, {
		key: "animate",
		value: function animate() {
			requestAnimationFrame(this.animate);
			// this.cube.rotation.x += 0.1;
			// this.cube.rotation.y += 0.1;
			// this.camera.position.x = 30*Math.sin(this.camera.degree*Math.PI/180);
			// this.camera.position.z = 30*Math.cos(this.camera.degree*Math.PI/180);
			// this.camera.degree += 1;
			// this.camera.lookAt(new THREE.Vector3(0, 0, 0));
			this.renderer.render(this.scene, this.camera);
		}
	}]);

	return App;
}();

new App();

/***/ }),
/* 8 */
/* no static exports found */
/* all exports used */
/*!**********************************!*\
  !*** ./src/obj/OrbitControls.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
/*global THREE, console */

(function () {

	function OrbitConstraint(object) {

		this.object = object;

		// "target" sets the location of focus, where the object orbits around
		// and where it pans with respect to.
		this.target = new THREE.Vector3();

		// Limits to how far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// Limits to how far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = -Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;

		////////////
		// internals

		var scope = this;

		var EPS = 0.000001;

		// Current position in spherical coordinate system.
		var theta;
		var phi;

		// Pending changes
		var phiDelta = 0;
		var thetaDelta = 0;
		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;

		// API

		this.getPolarAngle = function () {

			return phi;
		};

		this.getAzimuthalAngle = function () {

			return theta;
		};

		this.rotateLeft = function (angle) {

			thetaDelta -= angle;
		};

		this.rotateUp = function (angle) {

			phiDelta -= angle;
		};

		// pass in distance in world space to move left
		this.panLeft = function () {

			var v = new THREE.Vector3();

			return function panLeft(distance) {

				var te = this.object.matrix.elements;

				// get X column of matrix
				v.set(te[0], te[1], te[2]);
				v.multiplyScalar(-distance);

				panOffset.add(v);
			};
		}();

		// pass in distance in world space to move up
		this.panUp = function () {

			var v = new THREE.Vector3();

			return function panUp(distance) {

				var te = this.object.matrix.elements;

				// get Y column of matrix
				v.set(te[4], te[5], te[6]);
				v.multiplyScalar(distance);

				panOffset.add(v);
			};
		}();

		// pass in x,y of change desired in pixel space,
		// right and down are positive
		this.pan = function (deltaX, deltaY, screenWidth, screenHeight) {

			if (scope.object instanceof THREE.PerspectiveCamera) {

				// perspective
				var position = scope.object.position;
				var offset = position.clone().sub(scope.target);
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				scope.panLeft(2 * deltaX * targetDistance / screenHeight);
				scope.panUp(2 * deltaY * targetDistance / screenHeight);
			} else if (scope.object instanceof THREE.OrthographicCamera) {

				// orthographic
				scope.panLeft(deltaX * (scope.object.right - scope.object.left) / screenWidth);
				scope.panUp(deltaY * (scope.object.top - scope.object.bottom) / screenHeight);
			} else {

				// camera neither orthographic or perspective
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
			}
		};

		this.dollyIn = function (dollyScale) {

			if (scope.object instanceof THREE.PerspectiveCamera) {

				scale /= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {

				scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {

				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
			}
		};

		this.dollyOut = function (dollyScale) {

			if (scope.object instanceof THREE.PerspectiveCamera) {

				scale *= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {

				scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {

				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
			}
		};

		this.update = function () {

			var offset = new THREE.Vector3();

			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
			var quatInverse = quat.clone().inverse();

			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();

			return function () {

				var position = this.object.position;

				offset.copy(position).sub(this.target);

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion(quat);

				// angle from z-axis around y-axis

				theta = Math.atan2(offset.x, offset.z);

				// angle from y-axis

				phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

				theta += thetaDelta;
				phi += phiDelta;

				// restrict theta to be between desired limits
				theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, theta));

				// restrict phi to be between desired limits
				phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));

				// restrict phi to be betwee EPS and PI-EPS
				phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));

				var radius = offset.length() * scale;

				// restrict radius to be between desired limits
				radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));

				// move target to panned location
				this.target.add(panOffset);

				offset.x = radius * Math.sin(phi) * Math.sin(theta);
				offset.y = radius * Math.cos(phi);
				offset.z = radius * Math.sin(phi) * Math.cos(theta);

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion(quatInverse);

				position.copy(this.target).add(offset);

				this.object.lookAt(this.target);

				if (this.enableDamping === true) {

					thetaDelta *= 1 - this.dampingFactor;
					phiDelta *= 1 - this.dampingFactor;
				} else {

					thetaDelta = 0;
					phiDelta = 0;
				}

				scale = 1;
				panOffset.set(0, 0, 0);

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if (zoomChanged || lastPosition.distanceToSquared(this.object.position) > EPS || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS) {

					lastPosition.copy(this.object.position);
					lastQuaternion.copy(this.object.quaternion);
					zoomChanged = false;

					return true;
				}

				return false;
			};
		}();
	};

	// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
	// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
	// supported.
	//
	//    Orbit - left mouse / touch: one finger move
	//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
	//    Pan - right mouse, or arrow keys / touch: three finter swipe

	THREE.OrbitControls = function (object, domElement) {

		var constraint = new OrbitConstraint(object);

		this.domElement = domElement !== undefined ? domElement : document;

		// API

		Object.defineProperty(this, 'constraint', {

			get: function get() {

				return constraint;
			}

		});

		this.getPolarAngle = function () {

			return constraint.getPolarAngle();
		};

		this.getAzimuthalAngle = function () {

			return constraint.getAzimuthalAngle();
		};

		// Set to false to disable this control
		this.enabled = true;

		// center is old, deprecated; use "target" instead
		this.center = this.target;

		// This option actually enables dollying in and out; left as "zoom" for
		// backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0; // pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// Set to false to disable use of the keys
		this.enableKeys = true;

		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

		////////////
		// internals

		var scope = this;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

		var state = STATE.NONE;

		// for reset

		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		// events

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		// pass in x,y of change desired in pixel space,
		// right and down are positive
		function pan(deltaX, deltaY) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			constraint.pan(deltaX, deltaY, element.clientWidth, element.clientHeight);
		}

		this.update = function () {

			if (this.autoRotate && state === STATE.NONE) {

				constraint.rotateLeft(getAutoRotationAngle());
			}

			if (constraint.update() === true) {

				this.dispatchEvent(changeEvent);
			}
		};

		this.reset = function () {

			state = STATE.NONE;

			this.target.copy(this.target0);
			this.object.position.copy(this.position0);
			this.object.zoom = this.zoom0;

			this.object.updateProjectionMatrix();
			this.dispatchEvent(changeEvent);

			this.update();
		};

		function getAutoRotationAngle() {

			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}

		function getZoomScale() {

			return Math.pow(0.95, scope.zoomSpeed);
		}

		function onMouseDown(event) {

			if (scope.enabled === false) return;

			event.preventDefault();

			if (event.button === scope.mouseButtons.ORBIT) {

				if (scope.enableRotate === false) return;

				state = STATE.ROTATE;

				rotateStart.set(event.clientX, event.clientY);
			} else if (event.button === scope.mouseButtons.ZOOM) {

				if (scope.enableZoom === false) return;

				state = STATE.DOLLY;

				dollyStart.set(event.clientX, event.clientY);
			} else if (event.button === scope.mouseButtons.PAN) {

				if (scope.enablePan === false) return;

				state = STATE.PAN;

				panStart.set(event.clientX, event.clientY);
			}

			if (state !== STATE.NONE) {

				document.addEventListener('mousemove', onMouseMove, false);
				document.addEventListener('mouseup', onMouseUp, false);
				scope.dispatchEvent(startEvent);
			}
		}

		function onMouseMove(event) {

			if (scope.enabled === false) return;

			event.preventDefault();

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if (state === STATE.ROTATE) {

				if (scope.enableRotate === false) return;

				rotateEnd.set(event.clientX, event.clientY);
				rotateDelta.subVectors(rotateEnd, rotateStart);

				// rotating across whole screen goes 360 degrees around
				constraint.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

				// rotating up and down along whole screen attempts to go 360, but limited to 180
				constraint.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

				rotateStart.copy(rotateEnd);
			} else if (state === STATE.DOLLY) {

				if (scope.enableZoom === false) return;

				dollyEnd.set(event.clientX, event.clientY);
				dollyDelta.subVectors(dollyEnd, dollyStart);

				if (dollyDelta.y > 0) {

					constraint.dollyIn(getZoomScale());
				} else if (dollyDelta.y < 0) {

					constraint.dollyOut(getZoomScale());
				}

				dollyStart.copy(dollyEnd);
			} else if (state === STATE.PAN) {

				if (scope.enablePan === false) return;

				panEnd.set(event.clientX, event.clientY);
				panDelta.subVectors(panEnd, panStart);

				pan(panDelta.x, panDelta.y);

				panStart.copy(panEnd);
			}

			if (state !== STATE.NONE) scope.update();
		}

		function onMouseUp() /* event */{

			if (scope.enabled === false) return;

			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);
			scope.dispatchEvent(endEvent);
			state = STATE.NONE;
		}

		function onMouseWheel(event) {

			if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;

			event.preventDefault();
			event.stopPropagation();

			var delta = 0;

			if (event.wheelDelta !== undefined) {

				// WebKit / Opera / Explorer 9

				delta = event.wheelDelta;
			} else if (event.detail !== undefined) {

				// Firefox

				delta = -event.detail;
			}

			if (delta > 0) {

				constraint.dollyOut(getZoomScale());
			} else if (delta < 0) {

				constraint.dollyIn(getZoomScale());
			}

			scope.update();
			scope.dispatchEvent(startEvent);
			scope.dispatchEvent(endEvent);
		}

		function onKeyDown(event) {

			if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

			switch (event.keyCode) {

				case scope.keys.UP:
					pan(0, scope.keyPanSpeed);
					scope.update();
					break;

				case scope.keys.BOTTOM:
					pan(0, -scope.keyPanSpeed);
					scope.update();
					break;

				case scope.keys.LEFT:
					pan(scope.keyPanSpeed, 0);
					scope.update();
					break;

				case scope.keys.RIGHT:
					pan(-scope.keyPanSpeed, 0);
					scope.update();
					break;

			}
		}

		function touchstart(event) {

			if (scope.enabled === false) return;

			switch (event.touches.length) {

				case 1:
					// one-fingered touch: rotate

					if (scope.enableRotate === false) return;

					state = STATE.TOUCH_ROTATE;

					rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
					break;

				case 2:
					// two-fingered touch: dolly

					if (scope.enableZoom === false) return;

					state = STATE.TOUCH_DOLLY;

					var dx = event.touches[0].pageX - event.touches[1].pageX;
					var dy = event.touches[0].pageY - event.touches[1].pageY;
					var distance = Math.sqrt(dx * dx + dy * dy);
					dollyStart.set(0, distance);
					break;

				case 3:
					// three-fingered touch: pan

					if (scope.enablePan === false) return;

					state = STATE.TOUCH_PAN;

					panStart.set(event.touches[0].pageX, event.touches[0].pageY);
					break;

				default:

					state = STATE.NONE;

			}

			if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
		}

		function touchmove(event) {

			if (scope.enabled === false) return;

			event.preventDefault();
			event.stopPropagation();

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			switch (event.touches.length) {

				case 1:
					// one-fingered touch: rotate

					if (scope.enableRotate === false) return;
					if (state !== STATE.TOUCH_ROTATE) return;

					rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
					rotateDelta.subVectors(rotateEnd, rotateStart);

					// rotating across whole screen goes 360 degrees around
					constraint.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
					// rotating up and down along whole screen attempts to go 360, but limited to 180
					constraint.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

					rotateStart.copy(rotateEnd);

					scope.update();
					break;

				case 2:
					// two-fingered touch: dolly

					if (scope.enableZoom === false) return;
					if (state !== STATE.TOUCH_DOLLY) return;

					var dx = event.touches[0].pageX - event.touches[1].pageX;
					var dy = event.touches[0].pageY - event.touches[1].pageY;
					var distance = Math.sqrt(dx * dx + dy * dy);

					dollyEnd.set(0, distance);
					dollyDelta.subVectors(dollyEnd, dollyStart);

					if (dollyDelta.y > 0) {

						constraint.dollyOut(getZoomScale());
					} else if (dollyDelta.y < 0) {

						constraint.dollyIn(getZoomScale());
					}

					dollyStart.copy(dollyEnd);

					scope.update();
					break;

				case 3:
					// three-fingered touch: pan

					if (scope.enablePan === false) return;
					if (state !== STATE.TOUCH_PAN) return;

					panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
					panDelta.subVectors(panEnd, panStart);

					pan(panDelta.x, panDelta.y);

					panStart.copy(panEnd);

					scope.update();
					break;

				default:

					state = STATE.NONE;

			}
		}

		function touchend() /* event */{

			if (scope.enabled === false) return;

			scope.dispatchEvent(endEvent);
			state = STATE.NONE;
		}

		function contextmenu(event) {

			event.preventDefault();
		}

		this.dispose = function () {

			this.domElement.removeEventListener('contextmenu', contextmenu, false);
			this.domElement.removeEventListener('mousedown', onMouseDown, false);
			this.domElement.removeEventListener('mousewheel', onMouseWheel, false);
			this.domElement.removeEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

			this.domElement.removeEventListener('touchstart', touchstart, false);
			this.domElement.removeEventListener('touchend', touchend, false);
			this.domElement.removeEventListener('touchmove', touchmove, false);

			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);

			window.removeEventListener('keydown', onKeyDown, false);
		};

		this.domElement.addEventListener('contextmenu', contextmenu, false);

		this.domElement.addEventListener('mousedown', onMouseDown, false);
		this.domElement.addEventListener('mousewheel', onMouseWheel, false);
		this.domElement.addEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

		this.domElement.addEventListener('touchstart', touchstart, false);
		this.domElement.addEventListener('touchend', touchend, false);
		this.domElement.addEventListener('touchmove', touchmove, false);

		window.addEventListener('keydown', onKeyDown, false);

		// force an update at start
		this.update();
	};

	THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
	THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

	Object.defineProperties(THREE.OrbitControls.prototype, {

		object: {

			get: function get() {

				return this.constraint.object;
			}

		},

		target: {

			get: function get() {

				return this.constraint.target;
			},

			set: function set(value) {

				console.warn('THREE.OrbitControls: target is now immutable. Use target.set() instead.');
				this.constraint.target.copy(value);
			}

		},

		minDistance: {

			get: function get() {

				return this.constraint.minDistance;
			},

			set: function set(value) {

				this.constraint.minDistance = value;
			}

		},

		maxDistance: {

			get: function get() {

				return this.constraint.maxDistance;
			},

			set: function set(value) {

				this.constraint.maxDistance = value;
			}

		},

		minZoom: {

			get: function get() {

				return this.constraint.minZoom;
			},

			set: function set(value) {

				this.constraint.minZoom = value;
			}

		},

		maxZoom: {

			get: function get() {

				return this.constraint.maxZoom;
			},

			set: function set(value) {

				this.constraint.maxZoom = value;
			}

		},

		minPolarAngle: {

			get: function get() {

				return this.constraint.minPolarAngle;
			},

			set: function set(value) {

				this.constraint.minPolarAngle = value;
			}

		},

		maxPolarAngle: {

			get: function get() {

				return this.constraint.maxPolarAngle;
			},

			set: function set(value) {

				this.constraint.maxPolarAngle = value;
			}

		},

		minAzimuthAngle: {

			get: function get() {

				return this.constraint.minAzimuthAngle;
			},

			set: function set(value) {

				this.constraint.minAzimuthAngle = value;
			}

		},

		maxAzimuthAngle: {

			get: function get() {

				return this.constraint.maxAzimuthAngle;
			},

			set: function set(value) {

				this.constraint.maxAzimuthAngle = value;
			}

		},

		enableDamping: {

			get: function get() {

				return this.constraint.enableDamping;
			},

			set: function set(value) {

				this.constraint.enableDamping = value;
			}

		},

		dampingFactor: {

			get: function get() {

				return this.constraint.dampingFactor;
			},

			set: function set(value) {

				this.constraint.dampingFactor = value;
			}

		},

		// backward compatibility

		noZoom: {

			get: function get() {

				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				return !this.enableZoom;
			},

			set: function set(value) {

				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				this.enableZoom = !value;
			}

		},

		noRotate: {

			get: function get() {

				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				return !this.enableRotate;
			},

			set: function set(value) {

				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				this.enableRotate = !value;
			}

		},

		noPan: {

			get: function get() {

				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				return !this.enablePan;
			},

			set: function set(value) {

				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				this.enablePan = !value;
			}

		},

		noKeys: {

			get: function get() {

				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				return !this.enableKeys;
			},

			set: function set(value) {

				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				this.enableKeys = !value;
			}

		},

		staticMoving: {

			get: function get() {

				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				return !this.constraint.enableDamping;
			},

			set: function set(value) {

				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				this.constraint.enableDamping = !value;
			}

		},

		dynamicDampingFactor: {

			get: function get() {

				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				return this.constraint.dampingFactor;
			},

			set: function set(value) {

				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				this.constraint.dampingFactor = value;
			}

		}

	});
})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2Y3NWY0YWRmNmIxZjY2NDQ5OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL29iai9CaXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmovR2lyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iai9PcmJpdENvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIkJpcmQiLCJ2IiwiZjMiLCJjb21wdXRlRmFjZU5vcm1hbHMiLCJ4IiwieSIsInoiLCJ2ZXJ0aWNlcyIsInB1c2giLCJUSFJFRSIsIlZlY3RvcjMiLCJhIiwiYiIsImMiLCJmYWNlcyIsIkZhY2UzIiwiR2VvbWV0cnkiLCJHaXJkIiwic2NlbmUiLCJtYXRlcmlhbCIsIkxpbmVCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJnZW9tZXRyeSIsImxpbmUiLCJMaW5lIiwiYWRkIiwibGVuIiwic3RyIiwibCIsInNwbGl0IiwiaSIsIkwiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiVGV4dE1lc2giLCJ0ZXh0IiwiZm9udFNpemUiLCJhcmd1bWVudHMiLCJzdHJpbmdMZW4iLCJNYXRoIiwicm91bmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImZvbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJUZXgiLCJUZXh0dXJlIiwibmVlZHNVcGRhdGUiLCJtYXQiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInRyYW5zcGFyZW50Iiwic2lkZSIsIkRvdWJsZVNpZGUiLCJQbGFuZUdlb21ldHJ5IiwiTWVzaCIsIkFwcCIsImFuaW1hdGUiLCJiaW5kIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJzZXRTaXplIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbnRyb2xzIiwiT3JiaXRDb250cm9scyIsImluaXRTY2VuZSIsIkJveEdlb21ldHJ5IiwiY3ViZSIsImJpcmQiLCJwaGFzZSIsImZsb29yIiwicmFuZG9tIiwicG9zaXRpb24iLCJzZXQiLCJkZWdyZWUiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsIm1lc2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJPcmJpdENvbnN0cmFpbnQiLCJvYmplY3QiLCJ0YXJnZXQiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwiUEkiLCJtaW5BemltdXRoQW5nbGUiLCJtYXhBemltdXRoQW5nbGUiLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsInNjb3BlIiwiRVBTIiwidGhldGEiLCJwaGkiLCJwaGlEZWx0YSIsInRoZXRhRGVsdGEiLCJzY2FsZSIsInBhbk9mZnNldCIsInpvb21DaGFuZ2VkIiwiZ2V0UG9sYXJBbmdsZSIsImdldEF6aW11dGhhbEFuZ2xlIiwicm90YXRlTGVmdCIsImFuZ2xlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJ0ZSIsIm1hdHJpeCIsImVsZW1lbnRzIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImRlbHRhWCIsImRlbHRhWSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0Iiwib2Zmc2V0IiwiY2xvbmUiLCJzdWIiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImZvdiIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJpZ2h0IiwibGVmdCIsInRvcCIsImJvdHRvbSIsImNvbnNvbGUiLCJ3YXJuIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJ6b29tIiwibWF4IiwibWluIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImRvbGx5T3V0IiwidXBkYXRlIiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwiY29weSIsImFwcGx5UXVhdGVybmlvbiIsImF0YW4yIiwic3FydCIsInJhZGl1cyIsInNpbiIsImNvcyIsImxvb2tBdCIsImRpc3RhbmNlVG9TcXVhcmVkIiwiZG90IiwicXVhdGVybmlvbiIsImNvbnN0cmFpbnQiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImVuYWJsZWQiLCJjZW50ZXIiLCJlbmFibGVab29tIiwiem9vbVNwZWVkIiwiZW5hYmxlUm90YXRlIiwicm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImF1dG9Sb3RhdGUiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVLZXlzIiwia2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJyb3RhdGVTdGFydCIsIlZlY3RvcjIiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiU1RBVEUiLCJOT05FIiwiUk9UQVRFIiwiRE9MTFkiLCJUT1VDSF9ST1RBVEUiLCJUT1VDSF9ET0xMWSIsIlRPVUNIX1BBTiIsInN0YXRlIiwidGFyZ2V0MCIsInBvc2l0aW9uMCIsInpvb20wIiwiY2hhbmdlRXZlbnQiLCJ0eXBlIiwic3RhcnRFdmVudCIsImVuZEV2ZW50IiwiZWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJkaXNwYXRjaEV2ZW50IiwicmVzZXQiLCJnZXRab29tU2NhbGUiLCJwb3ciLCJvbk1vdXNlRG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJjbGllbnRYIiwiY2xpZW50WSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInN1YlZlY3RvcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3VzZVdoZWVsIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwib25LZXlEb3duIiwia2V5Q29kZSIsInRvdWNoc3RhcnQiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImR4IiwiZHkiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsImNvbnRleHRtZW51IiwiZGlzcG9zZSIsInByb3RvdHlwZSIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImNvbnN0cnVjdG9yIiwiZGVmaW5lUHJvcGVydGllcyIsInZhbHVlIiwibm9ab29tIiwibm9Sb3RhdGUiLCJub1BhbiIsIm5vS2V5cyIsInN0YXRpY01vdmluZyIsImR5bmFtaWNEYW1waW5nRmFjdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7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LEtBQUsyQyxVQUFkO0FBRUEsSUFQTTs7QUFTUHZHLFFBQUssYUFBV3FMLEtBQVgsRUFBbUI7O0FBRXZCMUgsWUFBUUMsSUFBUixDQUFjLDRFQUFkO0FBQ0EsU0FBSzJDLFVBQUwsR0FBa0IsQ0FBRThFLEtBQXBCO0FBRUE7O0FBZE0sR0FyUCtDOztBQXVRdkRLLGdCQUFlOztBQUVkOUYsUUFBSyxlQUFZOztBQUVoQmpDLFlBQVFDLElBQVIsQ0FBYyxxRkFBZDtBQUNBLFdBQU8sQ0FBRSxLQUFLNEIsVUFBTCxDQUFnQnBFLGFBQXpCO0FBRUEsSUFQYTs7QUFTZHBCLFFBQUssYUFBV3FMLEtBQVgsRUFBbUI7O0FBRXZCMUgsWUFBUUMsSUFBUixDQUFjLHFGQUFkO0FBQ0EsU0FBSzRCLFVBQUwsQ0FBZ0JwRSxhQUFoQixHQUFnQyxDQUFFaUssS0FBbEM7QUFFQTs7QUFkYSxHQXZRd0M7O0FBeVJ2RE0sd0JBQXVCOztBQUV0Qi9GLFFBQUssZUFBWTs7QUFFaEJqQyxZQUFRQyxJQUFSLENBQWMsMEZBQWQ7QUFDQSxXQUFPLEtBQUs0QixVQUFMLENBQWdCbkUsYUFBdkI7QUFFQSxJQVBxQjs7QUFTdEJyQixRQUFLLGFBQVdxTCxLQUFYLEVBQW1COztBQUV2QjFILFlBQVFDLElBQVIsQ0FBYywwRkFBZDtBQUNBLFNBQUs0QixVQUFMLENBQWdCbkUsYUFBaEIsR0FBZ0NnSyxLQUFoQztBQUVBOztBQWRxQjs7QUF6UmdDLEVBQXhEO0FBNlNBLENBamxDQyxHQUFGLEMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2Y3NWY0YWRmNmIxZjY2NDQ5OTciLCIvKiBnbG9iYWwgVEhSRUUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpcmQgZXh0ZW5kcyBUSFJFRS5HZW9tZXRyeSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy52KCA1LCAwLCAwICk7XHJcblx0XHR0aGlzLnYoIC0gNSwgLSAyLCAgIDEgKTtcclxuXHRcdHRoaXMudiggLSA1LCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDUsIC0gMiwgLSAxICk7XHJcblxyXG5cdFx0dGhpcy52KCAgIDAsICAgMiwgLSA2ICk7XHJcblx0XHR0aGlzLnYoICAgMCwgICAyLCAgIDYgKTtcclxuXHRcdHRoaXMudiggICAyLCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDMsICAgMCwgICAwICk7XHJcblxyXG5cdFx0dGhpcy5mMyggMCwgMiwgMSApO1xyXG5cdFx0Ly8gdGhpcy5mMyggMCwgMywgMiApO1xyXG5cclxuXHRcdHRoaXMuZjMoIDQsIDcsIDYgKTtcclxuXHRcdHRoaXMuZjMoIDUsIDYsIDcgKTtcclxuXHJcblx0XHR0aGlzLmNvbXB1dGVGYWNlTm9ybWFscygpO1xyXG5cdH1cdFxyXG5cclxuXHR2KHgsIHksIHopIHtcclxuXHRcdHRoaXMudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSk7XHJcblx0fVxyXG5cclxuXHRmMyhhLCBiLCBjKSB7XHJcblx0XHR0aGlzLmZhY2VzLnB1c2gobmV3IFRIUkVFLkZhY2UzKGEsIGIsIGMpKTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqL0JpcmQuanMiLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lyZHtcclxuXHRjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtcclxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmXHJcblx0XHR9KTtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIC0xMDAsIDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDIwLCAwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAxOSwgMSwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMjAsIDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDE5LCAtMSwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMjAsIDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDEwMCwgMCwgMCApXHJcblx0XHQpO1xyXG5cdFx0dmFyIGxpbmUgPSBuZXcgVEhSRUUuTGluZSggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblx0XHRzY2VuZS5hZGQobGluZSk7XHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2goXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAtMTAwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAyMCwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMSwgMTksIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDIwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMTksIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDIwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxMDAsIDAgKSxcclxuXHRcdCk7XHJcblx0XHR2YXIgbGluZSA9IG5ldyBUSFJFRS5MaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHRcdHNjZW5lLmFkZChsaW5lKTtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsICAtMTAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAgMjAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsICAxOSApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgIDIwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMCwgIDE5ICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAgMjAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsICAxMDAgKSxcclxuXHRcdCk7XHJcblx0XHR2YXIgbGluZSA9IG5ldyBUSFJFRS5MaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHRcdHNjZW5lLmFkZChsaW5lKTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iai9HaXJkLmpzIiwiXHJcbmZ1bmN0aW9uIGxlbihzdHIpIHtcclxuXHRsZXQgbCA9IDA7XHJcblx0bGV0IGEgPSBzdHIuc3BsaXQoXCJcIik7XHJcblx0Zm9yKGxldCBpID0gMCwgTD1hLmxlbmd0aDsgaSA8IEw7IGkrKykge1xyXG5cdFx0aWYoYVtpXS5jaGFyQ29kZUF0KDApIDwgMjk5KSB7XHJcblx0XHRcdGwgKz0gMC42O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bCsrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE1lc2ggZXh0ZW5kcyBUSFJFRS5NZXNoIHtcclxuXHRjb25zdHJ1Y3Rvcih0ZXh0LCBmb250U2l6ZSwgY29sb3IpIHtcclxuXHRcdGZvbnRTaXplID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogMzBcclxuXHRcdGNvbG9yID0gYXJndW1lbnRzWzJdID8gYXJndW1lbnRzWzJdIDogXCIjZmZmZmZmXCJcclxuXHRcdGxldCBzdHJpbmdMZW4gPSBNYXRoLnJvdW5kKGxlbih0ZXh0KSlcclxuXHRcdGxldCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG5cdFx0Yy53aWR0aCA9IGZvbnRTaXplKnN0cmluZ0xlblxyXG5cdFx0Yy5oZWlnaHQgPSBmb250U2l6ZVxyXG5cdFx0bGV0IGZvbnQgPSBmb250U2l6ZSArIFwicHgg5b6u6L2v6ZuF6buRXCJcclxuXHRcdGxldCBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKVxyXG5cdFx0Y3R4LmZvbnQgPSBmb250XHJcblx0XHRjdHguZmlsbFN0eWxlID0gY29sb3JcclxuXHRcdGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBmb250U2l6ZS0zKVxyXG5cclxuXHRcdGxldCBUZXggPSBuZXcgVEhSRUUuVGV4dHVyZShjKVxyXG5cdFx0VGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZVxyXG5cclxuXHRcdHZhciBtYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe21hcDogVGV4fSk7XHJcbiAgICAgICAgbWF0LnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuXHQgICAgbWF0LnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cclxuXHQgICAgc3VwZXIobmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoYy53aWR0aCwgYy5oZWlnaHQpLCBtYXQpXHJcblx0ICAgIHRoaXMud2lkdGggPSBjLndpZHRoXHJcblx0ICAgIHRoaXMuaGVpZ2h0ID0gYy5oZWlnaHRcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqL1RleHQuanMiLCIvKiBnbG9iYWwgVEhSRUUgKi9cclxuaW1wb3J0IEJpcmQgZnJvbSBcIi4vb2JqL0JpcmRcIlxyXG5pbXBvcnQgR2lyZCBmcm9tIFwiLi9vYmovR2lyZFwiXHJcbmltcG9ydCBUZXh0TWVzaCBmcm9tIFwiLi9vYmovVGV4dFwiXHJcbmltcG9ydCAnLi9vYmovT3JiaXRDb250cm9scydcclxuXHJcbmNsYXNzIEFwcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgwMDAwMDAgKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcdFxyXG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcblxyXG5cdFx0dGhpcy5pbml0U2NlbmUoKTtcdFxyXG5cclxuXHRcdHRoaXMuYW5pbWF0ZSgpO1xyXG5cdH1cclxuXHJcblx0aW5pdFNjZW5lKCkge1xyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjogMHgwMGZmMDB9KTtcclxuXHRcdHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBCaXJkKCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4ZmZmZmZmLCBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlfSk7XHJcblx0XHR0aGlzLmJpcmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cdFx0dGhpcy5iaXJkLnBoYXNlID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDYyLjgzICk7XHJcblx0XHR0aGlzLmJpcmQucG9zaXRpb24uc2V0KDAsIC0zLCAxKTtcclxuXHRcdC8vIHRoaXMuYmlyZC5yb3RhdGlvbi55ID0gTWF0aC5QSS8yO1xyXG5cdFx0Ly8gdGhpcy5iaXJkLnJvdGF0aW9uLnogPSBNYXRoLlBJLzI7IFxyXG5cdFx0Ly8gdGhpcy5zY2VuZS5hZGQodGhpcy5iaXJkKTtcclxuXHJcblx0XHRuZXcgR2lyZCh0aGlzLnNjZW5lKTtcclxuXHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMSwgMSwgMzApO1xyXG5cdFx0dGhpcy5jYW1lcmEuZGVncmVlID0gMDtcclxuXHJcblx0XHR2YXIgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweGZmZmZmZiwgMSApO1xyXG5cdCAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCggMCwgMCwgMTAgKTtcclxuXHQgICAgdGhpcy5zY2VuZS5hZGQoIGRpcmVjdGlvbmFsTGlnaHQgKTtcclxuXHJcblx0ICAgIHZhciBtZXNoID0gbmV3IFRleHRNZXNoKFwieFwiKVxyXG5cdCAgICBtZXNoLnBvc2l0aW9uLnNldCgwLCAwLCAtMjAwKVxyXG5cdCAgICB0aGlzLnNjZW5lLmFkZChtZXNoKVxyXG5cclxuXHR9XHJcblx0YW5pbWF0ZSgpIHtcclxuXHQgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcclxuXHQgICAgLy8gdGhpcy5jdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xyXG5cdCAgICAvLyB0aGlzLmN1YmUucm90YXRpb24ueSArPSAwLjE7XHJcblx0XHQvLyB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMzAqTWF0aC5zaW4odGhpcy5jYW1lcmEuZGVncmVlKk1hdGguUEkvMTgwKTtcclxuXHRcdC8vIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAzMCpNYXRoLmNvcyh0aGlzLmNhbWVyYS5kZWdyZWUqTWF0aC5QSS8xODApO1xyXG5cdFx0Ly8gdGhpcy5jYW1lcmEuZGVncmVlICs9IDE7XHJcblx0XHQvLyB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG5cdCAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSlcclxuXHR9XHJcbn1cclxuXHJcbm5ldyBBcHAoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGVzdC5qcyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqL1xuLypnbG9iYWwgVEhSRUUsIGNvbnNvbGUgKi9cblxuKCBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gT3JiaXRDb25zdHJhaW50ICggb2JqZWN0ICkge1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0XHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0XHQvLyBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG5cdFx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdFx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5ab29tID0gMDtcblx0XHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0XHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0XHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0XHQvLy8vLy8vLy8vLy9cblx0XHQvLyBpbnRlcm5hbHNcblxuXHRcdHZhciBzY29wZSA9IHRoaXM7XG5cblx0XHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0XHQvLyBDdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlIHN5c3RlbS5cblx0XHR2YXIgdGhldGE7XG5cdFx0dmFyIHBoaTtcblxuXHRcdC8vIFBlbmRpbmcgY2hhbmdlc1xuXHRcdHZhciBwaGlEZWx0YSA9IDA7XG5cdFx0dmFyIHRoZXRhRGVsdGEgPSAwO1xuXHRcdHZhciBzY2FsZSA9IDE7XG5cdFx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHQvLyBBUElcblxuXHRcdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHBoaTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gdGhldGE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuXHRcdFx0dGhldGFEZWx0YSAtPSBhbmdsZTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnJvdGF0ZVVwID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuXHRcdFx0cGhpRGVsdGEgLT0gYW5nbGU7XG5cblx0XHR9O1xuXG5cdFx0Ly8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIGxlZnRcblx0XHR0aGlzLnBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHRcdHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuXHRcdFx0XHQvLyBnZXQgWCBjb2x1bW4gb2YgbWF0cml4XG5cdFx0XHRcdHYuc2V0KCB0ZVsgMCBdLCB0ZVsgMSBdLCB0ZVsgMiBdICk7XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHQvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgdXBcblx0XHR0aGlzLnBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwICggZGlzdGFuY2UgKSB7XG5cblx0XHRcdFx0dmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xuXG5cdFx0XHRcdC8vIGdldCBZIGNvbHVtbiBvZiBtYXRyaXhcblx0XHRcdFx0di5zZXQoIHRlWyA0IF0sIHRlWyA1IF0sIHRlWyA2IF0gKTtcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHQvLyBwYXNzIGluIHgseSBvZiBjaGFuZ2UgZGVzaXJlZCBpbiBwaXhlbCBzcGFjZSxcblx0XHQvLyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0XHR0aGlzLnBhbiA9IGZ1bmN0aW9uICggZGVsdGFYLCBkZWx0YVksIHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHR2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHNjb3BlLnBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIHNjcmVlbkhlaWdodCApO1xuXHRcdFx0XHRzY29wZS5wYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gc2NyZWVuSGVpZ2h0ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0c2NvcGUucGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NyZWVuV2lkdGggKTtcblx0XHRcdFx0c2NvcGUucGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjcmVlbkhlaWdodCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBvciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kb2xseUluID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCB0aGlzLm1pblpvb20sIE1hdGgubWluKCB0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kb2xseU91dCA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggdGhpcy5taW5ab29tLCBNYXRoLm1pbiggdGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHRoaXMub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1YiggdGhpcy50YXJnZXQgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblxuXHRcdFx0XHR0aGV0YSA9IE1hdGguYXRhbjIoIG9mZnNldC54LCBvZmZzZXQueiApO1xuXG5cdFx0XHRcdC8vIGFuZ2xlIGZyb20geS1heGlzXG5cblx0XHRcdFx0cGhpID0gTWF0aC5hdGFuMiggTWF0aC5zcXJ0KCBvZmZzZXQueCAqIG9mZnNldC54ICsgb2Zmc2V0LnogKiBvZmZzZXQueiApLCBvZmZzZXQueSApO1xuXG5cdFx0XHRcdHRoZXRhICs9IHRoZXRhRGVsdGE7XG5cdFx0XHRcdHBoaSArPSBwaGlEZWx0YTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHRoZXRhID0gTWF0aC5tYXgoIHRoaXMubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhBemltdXRoQW5nbGUsIHRoZXRhICkgKTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWUgRVBTIGFuZCBQSS1FUFNcblx0XHRcdFx0cGhpID0gTWF0aC5tYXgoIEVQUywgTWF0aC5taW4oIE1hdGguUEkgLSBFUFMsIHBoaSApICk7XG5cblx0XHRcdFx0dmFyIHJhZGl1cyA9IG9mZnNldC5sZW5ndGgoKSAqIHNjYWxlO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHJhZGl1cyA9IE1hdGgubWF4KCB0aGlzLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggdGhpcy5tYXhEaXN0YW5jZSwgcmFkaXVzICkgKTtcblxuXHRcdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdFx0dGhpcy50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0XHRvZmZzZXQueCA9IHJhZGl1cyAqIE1hdGguc2luKCBwaGkgKSAqIE1hdGguc2luKCB0aGV0YSApO1xuXHRcdFx0XHRvZmZzZXQueSA9IHJhZGl1cyAqIE1hdGguY29zKCBwaGkgKTtcblx0XHRcdFx0b2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLmNvcyggdGhldGEgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0XHRwb3NpdGlvbi5jb3B5KCB0aGlzLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdFx0dGhpcy5vYmplY3QubG9va0F0KCB0aGlzLnRhcmdldCApO1xuXG5cdFx0XHRcdGlmICggdGhpcy5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0dGhldGFEZWx0YSAqPSAoIDEgLSB0aGlzLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0XHRwaGlEZWx0YSAqPSAoIDEgLSB0aGlzLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dGhldGFEZWx0YSA9IDA7XG5cdFx0XHRcdFx0cGhpRGVsdGEgPSAwO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRcdCBsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHRoaXMub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0ICAgIDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHRoaXMub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHRoaXMub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggdGhpcy5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdH07XG5cblxuXHQvLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy4gSXQgbWFpbnRhaW5zXG5cdC8vIHRoZSBcInVwXCIgZGlyZWN0aW9uIGFzICtZLCB1bmxpa2UgdGhlIFRyYWNrYmFsbENvbnRyb2xzLiBUb3VjaCBvbiB0YWJsZXQgYW5kIHBob25lcyBpc1xuXHQvLyBzdXBwb3J0ZWQuXG5cdC8vXG5cdC8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcblx0Ly8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcblx0Ly8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblx0VEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdFx0dmFyIGNvbnN0cmFpbnQgPSBuZXcgT3JiaXRDb25zdHJhaW50KCBvYmplY3QgKTtcblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0XHQvLyBBUElcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgJ2NvbnN0cmFpbnQnLCB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0cmV0dXJuIGNvbnN0cmFpbnQ7XG5cblx0XHRcdH1cblxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIGNvbnN0cmFpbnQuZ2V0UG9sYXJBbmdsZSgpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBjb25zdHJhaW50LmdldEF6aW11dGhhbEFuZ2xlKCk7XG5cblx0XHR9O1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdC8vIGNlbnRlciBpcyBvbGQsIGRlcHJlY2F0ZWQ7IHVzZSBcInRhcmdldFwiIGluc3RlYWRcblx0XHR0aGlzLmNlbnRlciA9IHRoaXMudGFyZ2V0O1xuXG5cdFx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvclxuXHRcdC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0XHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHRcdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0XHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdFx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdFx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdFx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0XHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdFx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHRcdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0XHQvLyBNb3VzZSBidXR0b25zXG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHRcdC8vLy8vLy8vLy8vL1xuXHRcdC8vIGludGVybmFsc1xuXG5cdFx0dmFyIHNjb3BlID0gdGhpcztcblxuXHRcdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHRcdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHQvLyBmb3IgcmVzZXRcblxuXHRcdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdFx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHRcdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdFx0Ly8gZXZlbnRzXG5cblx0XHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdFx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0XHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0XHQvLyBwYXNzIGluIHgseSBvZiBjaGFuZ2UgZGVzaXJlZCBpbiBwaXhlbCBzcGFjZSxcblx0XHQvLyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0XHRmdW5jdGlvbiBwYW4oIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0Y29uc3RyYWludC5wYW4oIGRlbHRhWCwgZGVsdGFZLCBlbGVtZW50LmNsaWVudFdpZHRoLCBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGlmICggdGhpcy5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdGNvbnN0cmFpbnQucm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggY29uc3RyYWludC51cGRhdGUoKSA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0XHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdHRoaXMudGFyZ2V0LmNvcHkoIHRoaXMudGFyZ2V0MCApO1xuXHRcdFx0dGhpcy5vYmplY3QucG9zaXRpb24uY29weSggdGhpcy5wb3NpdGlvbjAgKTtcblx0XHRcdHRoaXMub2JqZWN0Lnpvb20gPSB0aGlzLnpvb20wO1xuXG5cdFx0XHR0aGlzLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdFx0Y29uc3RyYWludC5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRcdFx0Y29uc3RyYWludC5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRcdGNvbnN0cmFpbnQuZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdFx0Y29uc3RyYWludC5kb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkgc2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlVXAoIC8qIGV2ZW50ICovICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8IHN0YXRlICE9PSBTVEFURS5OT05FICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdHZhciBkZWx0YSA9IDA7XG5cblx0XHRcdGlmICggZXZlbnQud2hlZWxEZWx0YSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG5cdFx0XHRcdGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Ly8gRmlyZWZveFxuXG5cdFx0XHRcdGRlbHRhID0gLSBldmVudC5kZXRhaWw7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkZWx0YSA+IDAgKSB7XG5cblx0XHRcdFx0Y29uc3RyYWludC5kb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xuXG5cdFx0XHRcdGNvbnN0cmFpbnQuZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRvdWNoc3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXHRcdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblx0XHRcdFx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRvdWNobW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47XG5cblx0XHRcdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdFx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdFx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdFx0XHRjb25zdHJhaW50LnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXHRcdFx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0XHRcdGNvbnN0cmFpbnQucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblx0XHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdFx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cdFx0XHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdHJhaW50LmRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3RyYWludC5kb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRcdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRcdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdG91Y2hlbmQoIC8qIGV2ZW50ICovICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY29udGV4dG1lbnUoIGV2ZW50ICkge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBjb250ZXh0bWVudSwgZmFsc2UgKTtcblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7IC8vIGZpcmVmb3hcblxuXHRcdFx0dGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCwgZmFsc2UgKTtcblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaGVuZCwgZmFsc2UgKTtcblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlLCBmYWxzZSApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIGNvbnRleHRtZW51LCBmYWxzZSApO1xuXG5cdFx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cdFx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApOyAvLyBmaXJlZm94XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0LCBmYWxzZSApO1xuXHRcdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaGVuZCwgZmFsc2UgKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNobW92ZSwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0fTtcblxuXHRUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblx0VEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUSFJFRS5PcmJpdENvbnRyb2xzO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdFx0b2JqZWN0OiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnQub2JqZWN0O1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0dGFyZ2V0OiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnQudGFyZ2V0O1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogdGFyZ2V0IGlzIG5vdyBpbW11dGFibGUuIFVzZSB0YXJnZXQuc2V0KCkgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuY29uc3RyYWludC50YXJnZXQuY29weSggdmFsdWUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG1pbkRpc3RhbmNlIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJhaW50Lm1pbkRpc3RhbmNlO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0dGhpcy5jb25zdHJhaW50Lm1pbkRpc3RhbmNlID0gdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRtYXhEaXN0YW5jZSA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludC5tYXhEaXN0YW5jZTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdHRoaXMuY29uc3RyYWludC5tYXhEaXN0YW5jZSA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bWluWm9vbSA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludC5taW5ab29tO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0dGhpcy5jb25zdHJhaW50Lm1pblpvb20gPSB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG1heFpvb20gOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnQubWF4Wm9vbTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdHRoaXMuY29uc3RyYWludC5tYXhab29tID0gdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRtaW5Qb2xhckFuZ2xlIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJhaW50Lm1pblBvbGFyQW5nbGU7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHR0aGlzLmNvbnN0cmFpbnQubWluUG9sYXJBbmdsZSA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bWF4UG9sYXJBbmdsZSA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludC5tYXhQb2xhckFuZ2xlO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0dGhpcy5jb25zdHJhaW50Lm1heFBvbGFyQW5nbGUgPSB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG1pbkF6aW11dGhBbmdsZSA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludC5taW5BemltdXRoQW5nbGU7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHR0aGlzLmNvbnN0cmFpbnQubWluQXppbXV0aEFuZ2xlID0gdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRtYXhBemltdXRoQW5nbGUgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnQubWF4QXppbXV0aEFuZ2xlO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0dGhpcy5jb25zdHJhaW50Lm1heEF6aW11dGhBbmdsZSA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0ZW5hYmxlRGFtcGluZyA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludC5lbmFibGVEYW1waW5nO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0dGhpcy5jb25zdHJhaW50LmVuYWJsZURhbXBpbmcgPSB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdGRhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnQuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdHRoaXMuY29uc3RyYWludC5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRub1pvb206IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9Sb3RhdGU6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9QYW46IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9LZXlzOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuY29uc3RyYWludC5lbmFibGVEYW1waW5nO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuY29uc3RyYWludC5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJhaW50LmRhbXBpbmdGYWN0b3I7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmNvbnN0cmFpbnQuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSApO1xuXG59KCkgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmovT3JiaXRDb250cm9scy5qcyJdLCJzb3VyY2VSb290IjoiIn0=