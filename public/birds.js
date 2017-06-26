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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* 1 */,
/* 2 */,
/* 3 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/birds.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bird = __webpack_require__(/*! ./obj/Bird */ 0);

var _Bird2 = _interopRequireDefault(_Bird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boid = function () {
	function Boid() {
		_classCallCheck(this, Boid);

		this.vector = new THREE.Vector3();
		this._acceleration = new THREE.Vector3(); //加速度
		this._width = 500;
		this._height = 500;
		this._depth = 200;
		this._goal = null; //
		this._neighborhoodRadius = 100;
		this._maxSpeed = 4;
		this._maxSteerForce = 0.1;
		this._avoidWalls = false;
		this.position = new THREE.Vector3();
		this.velocity = new THREE.Vector3(); //速度
	}

	_createClass(Boid, [{
		key: 'setGoal',
		value: function setGoal(target) {
			this._goal = target;
		}
	}, {
		key: 'setAvoidWalls',
		value: function setAvoidWalls(value) {
			this._avoidWalls = value;
		}
	}, {
		key: 'setWorldSize',
		value: function setWorldSize(width, height, depth) {
			this._width = width;
			this._height = height;
			this._depth = depth;
		}
	}, {
		key: 'avoid',
		value: function avoid(target) {
			var steer = new THREE.Vector3();
			steer.copy(this.position);
			steer.sub(target);
			steer.multiplyScalar(1 / this.position.distanceToSquared(target));
			//(a-b)/|a-b|^2
			return steer;
		}
	}, {
		key: 'repulse',
		value: function repulse(target) {
			var distance = this.position.distanceTo(target);
			if (distance < 150) {
				var steer = new THREE.Vector3();
				steer.subVectors(this.position, target);
				steer.multiplyScalar(0.5 / distance);
				this._acceleration.add(steer);
			}
		}
	}, {
		key: 'reach',
		value: function reach(target, amount) {
			var steer = new THREE.Vector3();
			steer.subVectors(target, this.position);
			steer.multiplyScalar(amount);
			return steer;
		}
	}, {
		key: 'alignment',
		value: function alignment(boids) {
			var boid,
			    velSum = new THREE.Vector3(),
			    count = 0;
			for (var i = 0, il = boids.length; i < il; i++) {
				if (Math.random() > 0.6) continue;
				boid = boids[i];
				var distance = boid.position.distanceTo(this.position);
				if (distance > 0 && distance <= this._neighborhoodRadius) {
					velSum.add(boid.velocity);
					count++;
				}
			}
			if (count > 0) {
				velSum.divideScalar(count);
				var l = velSum.length();
				if (l > this._maxSteerForce) {
					velSum.divideScalar(l / this._maxSteerForce);
				}
			}
			return velSum;
		}
	}, {
		key: 'cohesion',
		value: function cohesion(boids) {
			var boid,
			    distance,
			    posSum = new THREE.Vector3(),
			    steer = new THREE.Vector3(),
			    count = 0;
			for (var i = 0, il = boids.length; i < il; i++) {
				if (Math.random() > 0.6) continue;
				boid = boids[i];
				distance = boid.position.distanceTo(this.position);
				if (distance > 0 && distance <= this._neighborhoodRadius) {
					posSum.add(boid.position);
					count++;
				}
			}
			if (count > 0) {
				posSum.divideScalar(count);
			}
			steer.subVectors(posSum, this.position);
			var l = steer.length();
			if (l > this._maxSteerForce) {
				steer.divideScalar(l / this._maxSteerForce);
			}
			return steer;
		}
	}, {
		key: 'separation',
		value: function separation(boids) {
			var boid,
			    distance,
			    posSum = new THREE.Vector3(),
			    repulse = new THREE.Vector3();
			for (var i = 0, il = boids.length; i < il; i++) {
				if (Math.random() > 0.6) continue;
				boid = boids[i];
				distance = boid.position.distanceTo(this.position);
				if (distance > 0 && distance <= this._neighborhoodRadius) {
					repulse.subVectors(this.position, boid.position);
					repulse.normalize();
					repulse.divideScalar(distance);
					posSum.add(repulse);
				}
			}
			return posSum;
		}
	}, {
		key: 'flock',
		value: function flock(boids) {
			if (this._goal) {
				this._acceleration.add(this.reach(this._goal, 0.005));
			}
			this._acceleration.add(this.alignment(boids));
			this._acceleration.add(this.cohesion(boids));
			this._acceleration.add(this.separation(boids));
		}
	}, {
		key: 'move',
		value: function move() {
			this.velocity.add(this._acceleration);
			var l = this.velocity.length();
			if (l > this._maxSpeed) {
				this.velocity.divideScalar(l / this._maxSpeed);
			}
			this.position.add(this.velocity);
			this._acceleration.set(0, 0, 0);
		}
	}, {
		key: 'run',
		value: function run(boids) {
			if (this._avoidWalls) {
				this.vector.set(-this._width, this.position.y, this.position.z);
				this.vector = this.avoid(this.vector);
				this.vector.multiplyScalar(5);
				this._acceleration.add(this.vector);
				this.vector.set(this._width, this.position.y, this.position.z);
				this.vector = this.avoid(this.vector);
				this.vector.multiplyScalar(5);
				this._acceleration.add(this.vector);
				this.vector.set(this.position.x, -this._height, this.position.z);
				this.vector = this.avoid(this.vector);
				this.vector.multiplyScalar(5);
				this._acceleration.add(this.vector);
				this.vector.set(this.position.x, this._height, this.position.z);
				this.vector = this.avoid(this.vector);
				this.vector.multiplyScalar(5);
				this._acceleration.add(this.vector);
				this.vector.set(this.position.x, this.position.y, -this._depth);
				this.vector = this.avoid(this.vector);
				this.vector.multiplyScalar(5);
				this._acceleration.add(this.vector);
				this.vector.set(this.position.x, this.position.y, this._depth);
				this.vector = this.avoid(this.vector);
				this.vector.multiplyScalar(5);
				this._acceleration.add(this.vector);
			}

			if (Math.random() > 0.5) {
				this.flock(boids);
			}
			this.move();
		}
	}]);

	return Boid;
}();

var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    SCREEN_WIDTH_HALF = SCREEN_WIDTH / 2,
    SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.animate = this.animate.bind(this);
		this.onWindowResize = this.onWindowResize.bind(this);
		this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);

		this.camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1000);
		this.camera.position.z = 450;
		this.scene = new THREE.Scene();
		this.birds = [];
		this.boids = [];

		for (var i = 0; i < 200; i++) {
			var boid = this.boids[i] = new Boid();
			boid.position.x = Math.random() * 400 - 200;
			boid.position.x = Math.random() * 400 - 200;
			boid.position.y = Math.random() * 400 - 200;
			boid.position.z = Math.random() * 400 - 200;
			boid.velocity.x = Math.random() * 2 - 1;
			boid.velocity.y = Math.random() * 2 - 1;
			boid.velocity.z = Math.random() * 2 - 1;
			boid.setAvoidWalls(true);
			boid.setWorldSize(500, 500, 400);
			var bird = this.birds[i] = new THREE.Mesh(new _Bird2.default(), new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, side: THREE.DoubleSide }));
			bird.phase = Math.floor(Math.random() * 62.83);
			this.scene.add(bird);
		}
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(0xffffff);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
		document.addEventListener('mousemove', this.onDocumentMouseMove, false);
		document.body.appendChild(this.renderer.domElement);
		window.addEventListener('resize', this.onWindowResize, false);

		this.animate();
	}

	_createClass(App, [{
		key: 'onWindowResize',
		value: function onWindowResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		}
	}, {
		key: 'onDocumentMouseMove',
		value: function onDocumentMouseMove(event) {
			var vector = new THREE.Vector3(event.clientX - SCREEN_WIDTH_HALF, -event.clientY + SCREEN_HEIGHT_HALF, 0);
			for (var i = 0, il = this.boids.length; i < il; i++) {
				var boid = this.boids[i];
				vector.z = boid.position.z;
				boid.repulse(vector);
			}
		}
		//

	}, {
		key: 'animate',
		value: function animate() {
			requestAnimationFrame(this.animate);
			this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			for (var i = 0, il = this.birds.length; i < il; i++) {
				var boid = this.boids[i];
				boid.run(this.boids);
				var bird = this.birds[i];
				bird.position.copy(this.boids[i].position);
				var color = bird.material.color;
				color.r = color.g = color.b = (500 - bird.position.z) / 1000;
				bird.rotation.y = Math.atan2(-boid.velocity.z, boid.velocity.x);
				bird.rotation.z = Math.asin(boid.velocity.y / boid.velocity.length());
				bird.phase = (bird.phase + (Math.max(0, bird.rotation.z) + 0.1)) % 62.83;
				bird.geometry.vertices[5].y = bird.geometry.vertices[4].y = Math.sin(bird.phase) * 5;
			}
			this.renderer.render(this.scene, this.camera);
		}
	}]);

	return App;
}();

new App();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJkZmRkNmRjZDcyZjNiMTZiZDY/N2FhNCIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqL0JpcmQuanM/ZmVmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYmlyZHMuanMiXSwibmFtZXMiOlsiQmlyZCIsInYiLCJmMyIsImNvbXB1dGVGYWNlTm9ybWFscyIsIngiLCJ5IiwieiIsInZlcnRpY2VzIiwicHVzaCIsIlRIUkVFIiwiVmVjdG9yMyIsImEiLCJiIiwiYyIsImZhY2VzIiwiRmFjZTMiLCJHZW9tZXRyeSIsIkJvaWQiLCJ2ZWN0b3IiLCJfYWNjZWxlcmF0aW9uIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9kZXB0aCIsIl9nb2FsIiwiX25laWdoYm9yaG9vZFJhZGl1cyIsIl9tYXhTcGVlZCIsIl9tYXhTdGVlckZvcmNlIiwiX2F2b2lkV2FsbHMiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwic3RlZXIiLCJjb3B5Iiwic3ViIiwibXVsdGlwbHlTY2FsYXIiLCJkaXN0YW5jZVRvU3F1YXJlZCIsImRpc3RhbmNlIiwiZGlzdGFuY2VUbyIsInN1YlZlY3RvcnMiLCJhZGQiLCJhbW91bnQiLCJib2lkcyIsImJvaWQiLCJ2ZWxTdW0iLCJjb3VudCIsImkiLCJpbCIsImxlbmd0aCIsIk1hdGgiLCJyYW5kb20iLCJkaXZpZGVTY2FsYXIiLCJsIiwicG9zU3VtIiwicmVwdWxzZSIsIm5vcm1hbGl6ZSIsInJlYWNoIiwiYWxpZ25tZW50IiwiY29oZXNpb24iLCJzZXBhcmF0aW9uIiwic2V0IiwiYXZvaWQiLCJmbG9jayIsIm1vdmUiLCJTQ1JFRU5fV0lEVEgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiU0NSRUVOX0hFSUdIVCIsImlubmVySGVpZ2h0IiwiU0NSRUVOX1dJRFRIX0hBTEYiLCJTQ1JFRU5fSEVJR0hUX0hBTEYiLCJBcHAiLCJhbmltYXRlIiwiYmluZCIsIm9uV2luZG93UmVzaXplIiwib25Eb2N1bWVudE1vdXNlTW92ZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwic2NlbmUiLCJTY2VuZSIsImJpcmRzIiwic2V0QXZvaWRXYWxscyIsInNldFdvcmxkU2l6ZSIsImJpcmQiLCJNZXNoIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsInNpZGUiLCJEb3VibGVTaWRlIiwicGhhc2UiLCJmbG9vciIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJydW4iLCJtYXRlcmlhbCIsInIiLCJnIiwicm90YXRpb24iLCJhdGFuMiIsImFzaW4iLCJtYXgiLCJnZW9tZXRyeSIsInNpbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0lBRXFCQSxJOzs7QUFDcEIsaUJBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxDQUFMLENBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0EsUUFBS0EsQ0FBTCxDQUFRLENBQUUsQ0FBVixFQUFhLENBQUUsQ0FBZixFQUFvQixDQUFwQjtBQUNBLFFBQUtBLENBQUwsQ0FBUSxDQUFFLENBQVYsRUFBZSxDQUFmLEVBQW9CLENBQXBCO0FBQ0EsUUFBS0EsQ0FBTCxDQUFRLENBQUUsQ0FBVixFQUFhLENBQUUsQ0FBZixFQUFrQixDQUFFLENBQXBCOztBQUVBLFFBQUtBLENBQUwsQ0FBVSxDQUFWLEVBQWUsQ0FBZixFQUFrQixDQUFFLENBQXBCO0FBQ0EsUUFBS0EsQ0FBTCxDQUFVLENBQVYsRUFBZSxDQUFmLEVBQW9CLENBQXBCO0FBQ0EsUUFBS0EsQ0FBTCxDQUFVLENBQVYsRUFBZSxDQUFmLEVBQW9CLENBQXBCO0FBQ0EsUUFBS0EsQ0FBTCxDQUFRLENBQUUsQ0FBVixFQUFlLENBQWYsRUFBb0IsQ0FBcEI7O0FBRUEsUUFBS0MsRUFBTCxDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZjtBQUNBOztBQUVBLFFBQUtBLEVBQUwsQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWY7QUFDQSxRQUFLQSxFQUFMLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmOztBQUVBLFFBQUtDLGtCQUFMO0FBbEJhO0FBbUJiOzs7O29CQUVDQyxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQ1YsUUFBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQUlDLE1BQU1DLE9BQVYsQ0FBa0JOLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsQ0FBbkI7QUFDQTs7O3FCQUVFSyxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQ1gsUUFBS0MsS0FBTCxDQUFXTixJQUFYLENBQWdCLElBQUlDLE1BQU1NLEtBQVYsQ0FBZ0JKLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEIsQ0FBaEI7QUFDQTs7OztFQTVCZ0NKLE1BQU1PLFE7O2tCQUFuQmhCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7SUFFTWlCLEk7QUFDTCxpQkFBYztBQUFBOztBQUNiLE9BQUtDLE1BQUwsR0FBYyxJQUFJVCxNQUFNQyxPQUFWLEVBQWQ7QUFDQSxPQUFLUyxhQUFMLEdBQXFCLElBQUlWLE1BQU1DLE9BQVYsRUFBckIsQ0FGYSxDQUVpQztBQUM5QyxPQUFLVSxNQUFMLEdBQWMsR0FBZDtBQUNBLE9BQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxPQUFLQyxLQUFMLEdBQWEsSUFBYixDQU5hLENBTVk7QUFDekIsT0FBS0MsbUJBQUwsR0FBMkIsR0FBM0I7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0MsY0FBTCxHQUFzQixHQUF0QjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLElBQUluQixNQUFNQyxPQUFWLEVBQWhCO0FBQ0EsT0FBS21CLFFBQUwsR0FBZ0IsSUFBSXBCLE1BQU1DLE9BQVYsRUFBaEIsQ0FaYSxDQVl5QjtBQUN0Qzs7OzswQkFFT29CLE0sRUFBUTtBQUNmLFFBQUtQLEtBQUwsR0FBYU8sTUFBYjtBQUNBOzs7Z0NBRWFDLEssRUFBTztBQUNwQixRQUFLSixXQUFMLEdBQW1CSSxLQUFuQjtBQUNBOzs7K0JBRWNDLEssRUFBT0MsTSxFQUFRQyxLLEVBQVE7QUFDckMsUUFBS2QsTUFBTCxHQUFjWSxLQUFkO0FBQ0EsUUFBS1gsT0FBTCxHQUFlWSxNQUFmO0FBQ0EsUUFBS1gsTUFBTCxHQUFjWSxLQUFkO0FBQ0E7Ozt3QkFFS0osTSxFQUFRO0FBQ2IsT0FBSUssUUFBUSxJQUFJMUIsTUFBTUMsT0FBVixFQUFaO0FBQ0F5QixTQUFNQyxJQUFOLENBQVcsS0FBS1IsUUFBaEI7QUFDQU8sU0FBTUUsR0FBTixDQUFVUCxNQUFWO0FBQ0FLLFNBQU1HLGNBQU4sQ0FBcUIsSUFBRSxLQUFLVixRQUFMLENBQWNXLGlCQUFkLENBQWdDVCxNQUFoQyxDQUF2QjtBQUNBO0FBQ0EsVUFBT0ssS0FBUDtBQUNBOzs7MEJBRVNMLE0sRUFBUztBQUNsQixPQUFJVSxXQUFXLEtBQUtaLFFBQUwsQ0FBY2EsVUFBZCxDQUEwQlgsTUFBMUIsQ0FBZjtBQUNBLE9BQUtVLFdBQVcsR0FBaEIsRUFBc0I7QUFDckIsUUFBSUwsUUFBUSxJQUFJMUIsTUFBTUMsT0FBVixFQUFaO0FBQ0F5QixVQUFNTyxVQUFOLENBQWtCLEtBQUtkLFFBQXZCLEVBQWlDRSxNQUFqQztBQUNBSyxVQUFNRyxjQUFOLENBQXNCLE1BQU1FLFFBQTVCO0FBQ0EsU0FBS3JCLGFBQUwsQ0FBbUJ3QixHQUFuQixDQUF3QlIsS0FBeEI7QUFDQTtBQUNEOzs7d0JBRU9MLE0sRUFBUWMsTSxFQUFTO0FBQ3hCLE9BQUlULFFBQVEsSUFBSTFCLE1BQU1DLE9BQVYsRUFBWjtBQUNBeUIsU0FBTU8sVUFBTixDQUFrQlosTUFBbEIsRUFBMEIsS0FBS0YsUUFBL0I7QUFDQU8sU0FBTUcsY0FBTixDQUFzQk0sTUFBdEI7QUFDQSxVQUFPVCxLQUFQO0FBQ0E7Ozs0QkFFV1UsSyxFQUFRO0FBQ25CLE9BQUlDLElBQUo7QUFBQSxPQUFVQyxTQUFTLElBQUl0QyxNQUFNQyxPQUFWLEVBQW5CO0FBQUEsT0FDQXNDLFFBQVEsQ0FEUjtBQUVBLFFBQU0sSUFBSUMsSUFBSSxDQUFSLEVBQVdDLEtBQUtMLE1BQU1NLE1BQTVCLEVBQW9DRixJQUFJQyxFQUF4QyxFQUE0Q0QsR0FBNUMsRUFBa0Q7QUFDakQsUUFBS0csS0FBS0MsTUFBTCxLQUFnQixHQUFyQixFQUEyQjtBQUMzQlAsV0FBT0QsTUFBT0ksQ0FBUCxDQUFQO0FBQ0EsUUFBSVQsV0FBV00sS0FBS2xCLFFBQUwsQ0FBY2EsVUFBZCxDQUEwQixLQUFLYixRQUEvQixDQUFmO0FBQ0EsUUFBS1ksV0FBVyxDQUFYLElBQWdCQSxZQUFZLEtBQUtoQixtQkFBdEMsRUFBNEQ7QUFDM0R1QixZQUFPSixHQUFQLENBQVlHLEtBQUtqQixRQUFqQjtBQUNBbUI7QUFDQTtBQUNEO0FBQ0QsT0FBS0EsUUFBUSxDQUFiLEVBQWlCO0FBQ2hCRCxXQUFPTyxZQUFQLENBQXFCTixLQUFyQjtBQUNBLFFBQUlPLElBQUlSLE9BQU9JLE1BQVAsRUFBUjtBQUNBLFFBQUtJLElBQUksS0FBSzdCLGNBQWQsRUFBK0I7QUFDOUJxQixZQUFPTyxZQUFQLENBQXFCQyxJQUFJLEtBQUs3QixjQUE5QjtBQUNBO0FBQ0Q7QUFDRCxVQUFPcUIsTUFBUDtBQUNBOzs7MkJBRVVGLEssRUFBUTtBQUNsQixPQUFJQyxJQUFKO0FBQUEsT0FBVU4sUUFBVjtBQUFBLE9BQ0FnQixTQUFTLElBQUkvQyxNQUFNQyxPQUFWLEVBRFQ7QUFBQSxPQUVBeUIsUUFBUSxJQUFJMUIsTUFBTUMsT0FBVixFQUZSO0FBQUEsT0FHQXNDLFFBQVEsQ0FIUjtBQUlBLFFBQU0sSUFBSUMsSUFBSSxDQUFSLEVBQVdDLEtBQUtMLE1BQU1NLE1BQTVCLEVBQW9DRixJQUFJQyxFQUF4QyxFQUE0Q0QsR0FBNUMsRUFBbUQ7QUFDbEQsUUFBS0csS0FBS0MsTUFBTCxLQUFnQixHQUFyQixFQUEyQjtBQUMzQlAsV0FBT0QsTUFBT0ksQ0FBUCxDQUFQO0FBQ0FULGVBQVdNLEtBQUtsQixRQUFMLENBQWNhLFVBQWQsQ0FBMEIsS0FBS2IsUUFBL0IsQ0FBWDtBQUNBLFFBQUtZLFdBQVcsQ0FBWCxJQUFnQkEsWUFBWSxLQUFLaEIsbUJBQXRDLEVBQTREO0FBQzNEZ0MsWUFBT2IsR0FBUCxDQUFZRyxLQUFLbEIsUUFBakI7QUFDQW9CO0FBQ0E7QUFDRDtBQUNELE9BQUtBLFFBQVEsQ0FBYixFQUFpQjtBQUNoQlEsV0FBT0YsWUFBUCxDQUFxQk4sS0FBckI7QUFDQTtBQUNEYixTQUFNTyxVQUFOLENBQWtCYyxNQUFsQixFQUEwQixLQUFLNUIsUUFBL0I7QUFDQSxPQUFJMkIsSUFBSXBCLE1BQU1nQixNQUFOLEVBQVI7QUFDQSxPQUFLSSxJQUFJLEtBQUs3QixjQUFkLEVBQStCO0FBQzlCUyxVQUFNbUIsWUFBTixDQUFvQkMsSUFBSSxLQUFLN0IsY0FBN0I7QUFDQTtBQUNELFVBQU9TLEtBQVA7QUFDQTs7OzZCQUVZVSxLLEVBQVE7QUFDcEIsT0FBSUMsSUFBSjtBQUFBLE9BQVVOLFFBQVY7QUFBQSxPQUNBZ0IsU0FBUyxJQUFJL0MsTUFBTUMsT0FBVixFQURUO0FBQUEsT0FFQStDLFVBQVUsSUFBSWhELE1BQU1DLE9BQVYsRUFGVjtBQUdBLFFBQU0sSUFBSXVDLElBQUksQ0FBUixFQUFXQyxLQUFLTCxNQUFNTSxNQUE1QixFQUFvQ0YsSUFBSUMsRUFBeEMsRUFBNENELEdBQTVDLEVBQW1EO0FBQ2xELFFBQUtHLEtBQUtDLE1BQUwsS0FBZ0IsR0FBckIsRUFBMkI7QUFDM0JQLFdBQU9ELE1BQU9JLENBQVAsQ0FBUDtBQUNBVCxlQUFXTSxLQUFLbEIsUUFBTCxDQUFjYSxVQUFkLENBQTBCLEtBQUtiLFFBQS9CLENBQVg7QUFDQSxRQUFLWSxXQUFXLENBQVgsSUFBZ0JBLFlBQVksS0FBS2hCLG1CQUF0QyxFQUE0RDtBQUMzRGlDLGFBQVFmLFVBQVIsQ0FBb0IsS0FBS2QsUUFBekIsRUFBbUNrQixLQUFLbEIsUUFBeEM7QUFDQTZCLGFBQVFDLFNBQVI7QUFDQUQsYUFBUUgsWUFBUixDQUFzQmQsUUFBdEI7QUFDQWdCLFlBQU9iLEdBQVAsQ0FBWWMsT0FBWjtBQUNBO0FBQ0Q7QUFDRCxVQUFPRCxNQUFQO0FBQ0E7Ozt3QkFFS1gsSyxFQUFPO0FBQ1osT0FBRyxLQUFLdEIsS0FBUixFQUFlO0FBQ2QsU0FBS0osYUFBTCxDQUFtQndCLEdBQW5CLENBQXVCLEtBQUtnQixLQUFMLENBQVcsS0FBS3BDLEtBQWhCLEVBQXVCLEtBQXZCLENBQXZCO0FBQ0E7QUFDRCxRQUFLSixhQUFMLENBQW1Cd0IsR0FBbkIsQ0FBdUIsS0FBS2lCLFNBQUwsQ0FBZWYsS0FBZixDQUF2QjtBQUNBLFFBQUsxQixhQUFMLENBQW1Cd0IsR0FBbkIsQ0FBdUIsS0FBS2tCLFFBQUwsQ0FBY2hCLEtBQWQsQ0FBdkI7QUFDQSxRQUFLMUIsYUFBTCxDQUFtQndCLEdBQW5CLENBQXVCLEtBQUttQixVQUFMLENBQWdCakIsS0FBaEIsQ0FBdkI7QUFDQTs7O3lCQUVPO0FBQ1AsUUFBS2hCLFFBQUwsQ0FBY2MsR0FBZCxDQUFtQixLQUFLeEIsYUFBeEI7QUFDQSxPQUFJb0MsSUFBSSxLQUFLMUIsUUFBTCxDQUFjc0IsTUFBZCxFQUFSO0FBQ0EsT0FBS0ksSUFBSSxLQUFLOUIsU0FBZCxFQUEwQjtBQUN6QixTQUFLSSxRQUFMLENBQWN5QixZQUFkLENBQTRCQyxJQUFJLEtBQUs5QixTQUFyQztBQUNBO0FBQ0QsUUFBS0csUUFBTCxDQUFjZSxHQUFkLENBQW1CLEtBQUtkLFFBQXhCO0FBQ0EsUUFBS1YsYUFBTCxDQUFtQjRDLEdBQW5CLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCO0FBQ0E7OztzQkFFR2xCLEssRUFBTztBQUNWLE9BQUcsS0FBS2xCLFdBQVIsRUFBcUI7QUFDcEIsU0FBS1QsTUFBTCxDQUFZNkMsR0FBWixDQUFnQixDQUFDLEtBQUszQyxNQUF0QixFQUE4QixLQUFLUSxRQUFMLENBQWN2QixDQUE1QyxFQUErQyxLQUFLdUIsUUFBTCxDQUFjdEIsQ0FBN0Q7QUFDQSxTQUFLWSxNQUFMLEdBQWMsS0FBSzhDLEtBQUwsQ0FBVyxLQUFLOUMsTUFBaEIsQ0FBZDtBQUNBLFNBQUtBLE1BQUwsQ0FBWW9CLGNBQVosQ0FBMkIsQ0FBM0I7QUFDQSxTQUFLbkIsYUFBTCxDQUFtQndCLEdBQW5CLENBQXVCLEtBQUt6QixNQUE1QjtBQUNBLFNBQUtBLE1BQUwsQ0FBWTZDLEdBQVosQ0FBZ0IsS0FBSzNDLE1BQXJCLEVBQTZCLEtBQUtRLFFBQUwsQ0FBY3ZCLENBQTNDLEVBQThDLEtBQUt1QixRQUFMLENBQWN0QixDQUE1RDtBQUNBLFNBQUtZLE1BQUwsR0FBYyxLQUFLOEMsS0FBTCxDQUFXLEtBQUs5QyxNQUFoQixDQUFkO0FBQ0EsU0FBS0EsTUFBTCxDQUFZb0IsY0FBWixDQUEyQixDQUEzQjtBQUNBLFNBQUtuQixhQUFMLENBQW1Cd0IsR0FBbkIsQ0FBdUIsS0FBS3pCLE1BQTVCO0FBQ0EsU0FBS0EsTUFBTCxDQUFZNkMsR0FBWixDQUFnQixLQUFLbkMsUUFBTCxDQUFjeEIsQ0FBOUIsRUFBaUMsQ0FBQyxLQUFLaUIsT0FBdkMsRUFBZ0QsS0FBS08sUUFBTCxDQUFjdEIsQ0FBOUQ7QUFDQSxTQUFLWSxNQUFMLEdBQWMsS0FBSzhDLEtBQUwsQ0FBVyxLQUFLOUMsTUFBaEIsQ0FBZDtBQUNBLFNBQUtBLE1BQUwsQ0FBWW9CLGNBQVosQ0FBMkIsQ0FBM0I7QUFDQSxTQUFLbkIsYUFBTCxDQUFtQndCLEdBQW5CLENBQXVCLEtBQUt6QixNQUE1QjtBQUNBLFNBQUtBLE1BQUwsQ0FBWTZDLEdBQVosQ0FBZ0IsS0FBS25DLFFBQUwsQ0FBY3hCLENBQTlCLEVBQWlDLEtBQUtpQixPQUF0QyxFQUErQyxLQUFLTyxRQUFMLENBQWN0QixDQUE3RDtBQUNBLFNBQUtZLE1BQUwsR0FBYyxLQUFLOEMsS0FBTCxDQUFXLEtBQUs5QyxNQUFoQixDQUFkO0FBQ0EsU0FBS0EsTUFBTCxDQUFZb0IsY0FBWixDQUEyQixDQUEzQjtBQUNBLFNBQUtuQixhQUFMLENBQW1Cd0IsR0FBbkIsQ0FBdUIsS0FBS3pCLE1BQTVCO0FBQ0EsU0FBS0EsTUFBTCxDQUFZNkMsR0FBWixDQUFnQixLQUFLbkMsUUFBTCxDQUFjeEIsQ0FBOUIsRUFBaUMsS0FBS3dCLFFBQUwsQ0FBY3ZCLENBQS9DLEVBQWtELENBQUMsS0FBS2lCLE1BQXhEO0FBQ0EsU0FBS0osTUFBTCxHQUFjLEtBQUs4QyxLQUFMLENBQVcsS0FBSzlDLE1BQWhCLENBQWQ7QUFDQSxTQUFLQSxNQUFMLENBQVlvQixjQUFaLENBQTJCLENBQTNCO0FBQ0EsU0FBS25CLGFBQUwsQ0FBbUJ3QixHQUFuQixDQUF1QixLQUFLekIsTUFBNUI7QUFDQSxTQUFLQSxNQUFMLENBQVk2QyxHQUFaLENBQWdCLEtBQUtuQyxRQUFMLENBQWN4QixDQUE5QixFQUFpQyxLQUFLd0IsUUFBTCxDQUFjdkIsQ0FBL0MsRUFBa0QsS0FBS2lCLE1BQXZEO0FBQ0EsU0FBS0osTUFBTCxHQUFjLEtBQUs4QyxLQUFMLENBQVcsS0FBSzlDLE1BQWhCLENBQWQ7QUFDQSxTQUFLQSxNQUFMLENBQVlvQixjQUFaLENBQTJCLENBQTNCO0FBQ0EsU0FBS25CLGFBQUwsQ0FBbUJ3QixHQUFuQixDQUF1QixLQUFLekIsTUFBNUI7QUFDQTs7QUFFRCxPQUFHa0MsS0FBS0MsTUFBTCxLQUFnQixHQUFuQixFQUF3QjtBQUN2QixTQUFLWSxLQUFMLENBQVdwQixLQUFYO0FBQ0E7QUFDRCxRQUFLcUIsSUFBTDtBQUNBOzs7Ozs7QUFHRixJQUFJQyxlQUFlQyxPQUFPQyxVQUExQjtBQUFBLElBQ0FDLGdCQUFnQkYsT0FBT0csV0FEdkI7QUFBQSxJQUVBQyxvQkFBb0JMLGVBQWdCLENBRnBDO0FBQUEsSUFHQU0scUJBQXFCSCxnQkFBZ0IsQ0FIckM7O0lBS01JLEc7QUFDTCxnQkFBYztBQUFBOztBQUNiLE9BQUtDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLE9BQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxPQUFLRSxtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QkYsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7O0FBRUEsT0FBS0csTUFBTCxHQUFjLElBQUl0RSxNQUFNdUUsaUJBQVYsQ0FBNEIsRUFBNUIsRUFBZ0NiLGVBQWFHLGFBQTdDLEVBQTRELENBQTVELEVBQStELElBQS9ELENBQWQ7QUFDQSxPQUFLUyxNQUFMLENBQVluRCxRQUFaLENBQXFCdEIsQ0FBckIsR0FBeUIsR0FBekI7QUFDQSxPQUFLMkUsS0FBTCxHQUFhLElBQUl4RSxNQUFNeUUsS0FBVixFQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLdEMsS0FBTCxHQUFhLEVBQWI7O0FBRUEsT0FBSSxJQUFJSSxJQUFJLENBQVosRUFBZUEsSUFBRSxHQUFqQixFQUFzQkEsR0FBdEIsRUFBMkI7QUFDMUIsT0FBSUgsT0FBTyxLQUFLRCxLQUFMLENBQVdJLENBQVgsSUFBZ0IsSUFBSWhDLElBQUosRUFBM0I7QUFDQTZCLFFBQUtsQixRQUFMLENBQWN4QixDQUFkLEdBQWtCZ0QsS0FBS0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixHQUF4QztBQUNBUCxRQUFLbEIsUUFBTCxDQUFjeEIsQ0FBZCxHQUFrQmdELEtBQUtDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsR0FBeEM7QUFDQVAsUUFBS2xCLFFBQUwsQ0FBY3ZCLENBQWQsR0FBa0IrQyxLQUFLQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLEdBQXhDO0FBQ0FQLFFBQUtsQixRQUFMLENBQWN0QixDQUFkLEdBQWtCOEMsS0FBS0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixHQUF4QztBQUNBUCxRQUFLakIsUUFBTCxDQUFjekIsQ0FBZCxHQUFrQmdELEtBQUtDLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBdEM7QUFDQVAsUUFBS2pCLFFBQUwsQ0FBY3hCLENBQWQsR0FBa0IrQyxLQUFLQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLENBQXRDO0FBQ0FQLFFBQUtqQixRQUFMLENBQWN2QixDQUFkLEdBQWtCOEMsS0FBS0MsTUFBTCxLQUFnQixDQUFoQixHQUFvQixDQUF0QztBQUNBUCxRQUFLc0MsYUFBTCxDQUFvQixJQUFwQjtBQUNBdEMsUUFBS3VDLFlBQUwsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0I7QUFDQSxPQUFJQyxPQUFPLEtBQUtILEtBQUwsQ0FBWWxDLENBQVosSUFBa0IsSUFBSXhDLE1BQU04RSxJQUFWLENBQWdCLG9CQUFoQixFQUE0QixJQUFJOUUsTUFBTStFLGlCQUFWLENBQTZCLEVBQUVDLE9BQU1yQyxLQUFLQyxNQUFMLEtBQWdCLFFBQXhCLEVBQWtDcUMsTUFBTWpGLE1BQU1rRixVQUE5QyxFQUE3QixDQUE1QixDQUE3QjtBQUNBTCxRQUFLTSxLQUFMLEdBQWF4QyxLQUFLeUMsS0FBTCxDQUFZekMsS0FBS0MsTUFBTCxLQUFnQixLQUE1QixDQUFiO0FBQ0EsUUFBSzRCLEtBQUwsQ0FBV3RDLEdBQVgsQ0FBZ0IyQyxJQUFoQjtBQUNBO0FBQ0QsT0FBS1EsUUFBTCxHQUFnQixJQUFJckYsTUFBTXNGLGFBQVYsRUFBaEI7QUFDQSxPQUFLRCxRQUFMLENBQWNFLGFBQWQsQ0FBNkIsUUFBN0I7QUFDQSxPQUFLRixRQUFMLENBQWNHLGFBQWQsQ0FBNkI3QixPQUFPOEIsZ0JBQXBDO0FBQ0EsT0FBS0osUUFBTCxDQUFjSyxPQUFkLENBQXVCaEMsWUFBdkIsRUFBcUNHLGFBQXJDO0FBQ0E4QixXQUFTQyxnQkFBVCxDQUEyQixXQUEzQixFQUF3QyxLQUFLdkIsbUJBQTdDLEVBQWtFLEtBQWxFO0FBQ0FzQixXQUFTRSxJQUFULENBQWNDLFdBQWQsQ0FBMkIsS0FBS1QsUUFBTCxDQUFjVSxVQUF6QztBQUNBcEMsU0FBT2lDLGdCQUFQLENBQXlCLFFBQXpCLEVBQW1DLEtBQUt4QixjQUF4QyxFQUF3RCxLQUF4RDs7QUFFQSxPQUFLRixPQUFMO0FBQ0E7Ozs7bUNBQ2dCO0FBQ2hCLFFBQUtJLE1BQUwsQ0FBWTBCLE1BQVosR0FBcUJyQyxPQUFPQyxVQUFQLEdBQW9CRCxPQUFPRyxXQUFoRDtBQUNBLFFBQUtRLE1BQUwsQ0FBWTJCLHNCQUFaO0FBQ0EsUUFBS1osUUFBTCxDQUFjSyxPQUFkLENBQXVCL0IsT0FBT0MsVUFBOUIsRUFBMENELE9BQU9HLFdBQWpEO0FBQ0E7OztzQ0FDb0JvQyxLLEVBQVE7QUFDNUIsT0FBSXpGLFNBQVMsSUFBSVQsTUFBTUMsT0FBVixDQUFtQmlHLE1BQU1DLE9BQU4sR0FBZ0JwQyxpQkFBbkMsRUFBc0QsQ0FBRW1DLE1BQU1FLE9BQVIsR0FBa0JwQyxrQkFBeEUsRUFBNEYsQ0FBNUYsQ0FBYjtBQUNBLFFBQU0sSUFBSXhCLElBQUksQ0FBUixFQUFXQyxLQUFLLEtBQUtMLEtBQUwsQ0FBV00sTUFBakMsRUFBeUNGLElBQUlDLEVBQTdDLEVBQWlERCxHQUFqRCxFQUF1RDtBQUN0RCxRQUFJSCxPQUFPLEtBQUtELEtBQUwsQ0FBWUksQ0FBWixDQUFYO0FBQ0EvQixXQUFPWixDQUFQLEdBQVd3QyxLQUFLbEIsUUFBTCxDQUFjdEIsQ0FBekI7QUFDQXdDLFNBQUtXLE9BQUwsQ0FBY3ZDLE1BQWQ7QUFDQTtBQUNEO0FBQ0Q7Ozs7NEJBQ1U7QUFDVDRGLHlCQUF1QixLQUFLbkMsT0FBNUI7QUFDQSxRQUFLb0MsTUFBTDtBQUNBOzs7MkJBQ1E7QUFDUixRQUFNLElBQUk5RCxJQUFJLENBQVIsRUFBV0MsS0FBSyxLQUFLaUMsS0FBTCxDQUFXaEMsTUFBakMsRUFBeUNGLElBQUlDLEVBQTdDLEVBQWlERCxHQUFqRCxFQUF1RDtBQUN0RCxRQUFJSCxPQUFPLEtBQUtELEtBQUwsQ0FBWUksQ0FBWixDQUFYO0FBQ0FILFNBQUtrRSxHQUFMLENBQVUsS0FBS25FLEtBQWY7QUFDQSxRQUFJeUMsT0FBTyxLQUFLSCxLQUFMLENBQVlsQyxDQUFaLENBQVg7QUFDQXFDLFNBQUsxRCxRQUFMLENBQWNRLElBQWQsQ0FBb0IsS0FBS1MsS0FBTCxDQUFZSSxDQUFaLEVBQWdCckIsUUFBcEM7QUFDQSxRQUFJNkQsUUFBUUgsS0FBSzJCLFFBQUwsQ0FBY3hCLEtBQTFCO0FBQ0FBLFVBQU15QixDQUFOLEdBQVV6QixNQUFNMEIsQ0FBTixHQUFVMUIsTUFBTTdFLENBQU4sR0FBVSxDQUFFLE1BQU0wRSxLQUFLMUQsUUFBTCxDQUFjdEIsQ0FBdEIsSUFBNEIsSUFBMUQ7QUFDQWdGLFNBQUs4QixRQUFMLENBQWMvRyxDQUFkLEdBQWtCK0MsS0FBS2lFLEtBQUwsQ0FBWSxDQUFFdkUsS0FBS2pCLFFBQUwsQ0FBY3ZCLENBQTVCLEVBQStCd0MsS0FBS2pCLFFBQUwsQ0FBY3pCLENBQTdDLENBQWxCO0FBQ0FrRixTQUFLOEIsUUFBTCxDQUFjOUcsQ0FBZCxHQUFrQjhDLEtBQUtrRSxJQUFMLENBQVd4RSxLQUFLakIsUUFBTCxDQUFjeEIsQ0FBZCxHQUFrQnlDLEtBQUtqQixRQUFMLENBQWNzQixNQUFkLEVBQTdCLENBQWxCO0FBQ0FtQyxTQUFLTSxLQUFMLEdBQWEsQ0FBRU4sS0FBS00sS0FBTCxJQUFleEMsS0FBS21FLEdBQUwsQ0FBVSxDQUFWLEVBQWFqQyxLQUFLOEIsUUFBTCxDQUFjOUcsQ0FBM0IsSUFBaUMsR0FBaEQsQ0FBRixJQUE2RCxLQUExRTtBQUNBZ0YsU0FBS2tDLFFBQUwsQ0FBY2pILFFBQWQsQ0FBd0IsQ0FBeEIsRUFBNEJGLENBQTVCLEdBQWdDaUYsS0FBS2tDLFFBQUwsQ0FBY2pILFFBQWQsQ0FBd0IsQ0FBeEIsRUFBNEJGLENBQTVCLEdBQWdDK0MsS0FBS3FFLEdBQUwsQ0FBVW5DLEtBQUtNLEtBQWYsSUFBeUIsQ0FBekY7QUFDQTtBQUNELFFBQUtFLFFBQUwsQ0FBY2lCLE1BQWQsQ0FBc0IsS0FBSzlCLEtBQTNCLEVBQWtDLEtBQUtGLE1BQXZDO0FBQ0E7Ozs7OztBQUdGLElBQUlMLEdBQUosRyIsImZpbGUiOiJiaXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjJkZmRkNmRjZDcyZjNiMTZiZDYiLCIvKiBnbG9iYWwgVEhSRUUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpcmQgZXh0ZW5kcyBUSFJFRS5HZW9tZXRyeSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy52KCA1LCAwLCAwICk7XHJcblx0XHR0aGlzLnYoIC0gNSwgLSAyLCAgIDEgKTtcclxuXHRcdHRoaXMudiggLSA1LCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDUsIC0gMiwgLSAxICk7XHJcblxyXG5cdFx0dGhpcy52KCAgIDAsICAgMiwgLSA2ICk7XHJcblx0XHR0aGlzLnYoICAgMCwgICAyLCAgIDYgKTtcclxuXHRcdHRoaXMudiggICAyLCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDMsICAgMCwgICAwICk7XHJcblxyXG5cdFx0dGhpcy5mMyggMCwgMiwgMSApO1xyXG5cdFx0Ly8gdGhpcy5mMyggMCwgMywgMiApO1xyXG5cclxuXHRcdHRoaXMuZjMoIDQsIDcsIDYgKTtcclxuXHRcdHRoaXMuZjMoIDUsIDYsIDcgKTtcclxuXHJcblx0XHR0aGlzLmNvbXB1dGVGYWNlTm9ybWFscygpO1xyXG5cdH1cdFxyXG5cclxuXHR2KHgsIHksIHopIHtcclxuXHRcdHRoaXMudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSk7XHJcblx0fVxyXG5cclxuXHRmMyhhLCBiLCBjKSB7XHJcblx0XHR0aGlzLmZhY2VzLnB1c2gobmV3IFRIUkVFLkZhY2UzKGEsIGIsIGMpKTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqL0JpcmQuanMiLCJpbXBvcnQgQmlyZCBmcm9tIFwiLi9vYmovQmlyZFwiXHJcblxyXG5jbGFzcyBCb2lkIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMudmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHRoaXMuX2FjY2VsZXJhdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHRcdFx0XHRcdC8v5Yqg6YCf5bqmXHJcblx0XHR0aGlzLl93aWR0aCA9IDUwMDtcclxuXHRcdHRoaXMuX2hlaWdodCA9IDUwMDtcclxuXHRcdHRoaXMuX2RlcHRoID0gMjAwO1xyXG5cdFx0dGhpcy5fZ29hbCA9IG51bGw7XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0dGhpcy5fbmVpZ2hib3Job29kUmFkaXVzID0gMTAwO1xyXG5cdFx0dGhpcy5fbWF4U3BlZWQgPSA0O1xyXG5cdFx0dGhpcy5fbWF4U3RlZXJGb3JjZSA9IDAuMTtcclxuXHRcdHRoaXMuX2F2b2lkV2FsbHMgPSBmYWxzZTtcclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0dGhpcy52ZWxvY2l0eSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHRcdC8v6YCf5bqmXHJcblx0fVxyXG5cclxuXHRzZXRHb2FsKHRhcmdldCkge1xyXG5cdFx0dGhpcy5fZ29hbCA9IHRhcmdldDtcclxuXHR9XHJcblxyXG5cdHNldEF2b2lkV2FsbHModmFsdWUpIHtcclxuXHRcdHRoaXMuX2F2b2lkV2FsbHMgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldFdvcmxkU2l6ZSAoIHdpZHRoLCBoZWlnaHQsIGRlcHRoICkge1xyXG5cdFx0dGhpcy5fd2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuXHRcdHRoaXMuX2RlcHRoID0gZGVwdGg7XHJcblx0fVxyXG5cclxuXHRhdm9pZCh0YXJnZXQpIHtcclxuXHRcdHZhciBzdGVlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHRcdFxyXG5cdFx0c3RlZXIuY29weSh0aGlzLnBvc2l0aW9uKTtcclxuXHRcdHN0ZWVyLnN1Yih0YXJnZXQpO1xyXG5cdFx0c3RlZXIubXVsdGlwbHlTY2FsYXIoMS90aGlzLnBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKHRhcmdldCkpO1xyXG5cdFx0Ly8oYS1iKS98YS1ifF4yXHJcblx0XHRyZXR1cm4gc3RlZXI7XHJcblx0fVxyXG5cclxuXHRyZXB1bHNlICggdGFyZ2V0ICkge1xyXG5cdFx0dmFyIGRpc3RhbmNlID0gdGhpcy5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0YXJnZXQgKTtcclxuXHRcdGlmICggZGlzdGFuY2UgPCAxNTAgKSB7XHJcblx0XHRcdHZhciBzdGVlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRcdHN0ZWVyLnN1YlZlY3RvcnMoIHRoaXMucG9zaXRpb24sIHRhcmdldCApO1xyXG5cdFx0XHRzdGVlci5tdWx0aXBseVNjYWxhciggMC41IC8gZGlzdGFuY2UgKTtcclxuXHRcdFx0dGhpcy5fYWNjZWxlcmF0aW9uLmFkZCggc3RlZXIgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlYWNoICggdGFyZ2V0LCBhbW91bnQgKSB7XHJcblx0XHR2YXIgc3RlZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0c3RlZXIuc3ViVmVjdG9ycyggdGFyZ2V0LCB0aGlzLnBvc2l0aW9uICk7XHJcblx0XHRzdGVlci5tdWx0aXBseVNjYWxhciggYW1vdW50ICk7XHJcblx0XHRyZXR1cm4gc3RlZXI7XHJcblx0fVxyXG5cclxuXHRhbGlnbm1lbnQgKCBib2lkcyApIHtcclxuXHRcdHZhciBib2lkLCB2ZWxTdW0gPSBuZXcgVEhSRUUuVmVjdG9yMygpLFxyXG5cdFx0Y291bnQgPSAwO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGJvaWRzLmxlbmd0aDsgaSA8IGlsOyBpKysgKSB7XHJcblx0XHRcdGlmICggTWF0aC5yYW5kb20oKSA+IDAuNiApIGNvbnRpbnVlO1xyXG5cdFx0XHRib2lkID0gYm9pZHNbIGkgXTtcclxuXHRcdFx0dmFyIGRpc3RhbmNlID0gYm9pZC5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLnBvc2l0aW9uICk7XHJcblx0XHRcdGlmICggZGlzdGFuY2UgPiAwICYmIGRpc3RhbmNlIDw9IHRoaXMuX25laWdoYm9yaG9vZFJhZGl1cyApIHtcclxuXHRcdFx0XHR2ZWxTdW0uYWRkKCBib2lkLnZlbG9jaXR5ICk7XHJcblx0XHRcdFx0Y291bnQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCBjb3VudCA+IDAgKSB7XHJcblx0XHRcdHZlbFN1bS5kaXZpZGVTY2FsYXIoIGNvdW50ICk7XHJcblx0XHRcdHZhciBsID0gdmVsU3VtLmxlbmd0aCgpO1xyXG5cdFx0XHRpZiAoIGwgPiB0aGlzLl9tYXhTdGVlckZvcmNlICkge1xyXG5cdFx0XHRcdHZlbFN1bS5kaXZpZGVTY2FsYXIoIGwgLyB0aGlzLl9tYXhTdGVlckZvcmNlICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB2ZWxTdW07XHJcblx0fVxyXG5cclxuXHRjb2hlc2lvbiAoIGJvaWRzICkge1xyXG5cdFx0dmFyIGJvaWQsIGRpc3RhbmNlLFxyXG5cdFx0cG9zU3VtID0gbmV3IFRIUkVFLlZlY3RvcjMoKSxcclxuXHRcdHN0ZWVyID0gbmV3IFRIUkVFLlZlY3RvcjMoKSxcclxuXHRcdGNvdW50ID0gMDtcclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBib2lkcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHRcdFx0aWYgKCBNYXRoLnJhbmRvbSgpID4gMC42ICkgY29udGludWU7XHJcblx0XHRcdGJvaWQgPSBib2lkc1sgaSBdO1xyXG5cdFx0XHRkaXN0YW5jZSA9IGJvaWQucG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5wb3NpdGlvbiApO1xyXG5cdFx0XHRpZiAoIGRpc3RhbmNlID4gMCAmJiBkaXN0YW5jZSA8PSB0aGlzLl9uZWlnaGJvcmhvb2RSYWRpdXMgKSB7XHJcblx0XHRcdFx0cG9zU3VtLmFkZCggYm9pZC5wb3NpdGlvbiApO1xyXG5cdFx0XHRcdGNvdW50Kys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICggY291bnQgPiAwICkge1xyXG5cdFx0XHRwb3NTdW0uZGl2aWRlU2NhbGFyKCBjb3VudCApO1xyXG5cdFx0fVxyXG5cdFx0c3RlZXIuc3ViVmVjdG9ycyggcG9zU3VtLCB0aGlzLnBvc2l0aW9uICk7XHJcblx0XHR2YXIgbCA9IHN0ZWVyLmxlbmd0aCgpO1xyXG5cdFx0aWYgKCBsID4gdGhpcy5fbWF4U3RlZXJGb3JjZSApIHtcclxuXHRcdFx0c3RlZXIuZGl2aWRlU2NhbGFyKCBsIC8gdGhpcy5fbWF4U3RlZXJGb3JjZSApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0ZWVyO1xyXG5cdH1cclxuXHJcblx0c2VwYXJhdGlvbiAoIGJvaWRzICkge1xyXG5cdFx0dmFyIGJvaWQsIGRpc3RhbmNlLFxyXG5cdFx0cG9zU3VtID0gbmV3IFRIUkVFLlZlY3RvcjMoKSxcclxuXHRcdHJlcHVsc2UgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGJvaWRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cdFx0XHRpZiAoIE1hdGgucmFuZG9tKCkgPiAwLjYgKSBjb250aW51ZTtcclxuXHRcdFx0Ym9pZCA9IGJvaWRzWyBpIF07XHJcblx0XHRcdGRpc3RhbmNlID0gYm9pZC5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLnBvc2l0aW9uICk7XHJcblx0XHRcdGlmICggZGlzdGFuY2UgPiAwICYmIGRpc3RhbmNlIDw9IHRoaXMuX25laWdoYm9yaG9vZFJhZGl1cyApIHtcclxuXHRcdFx0XHRyZXB1bHNlLnN1YlZlY3RvcnMoIHRoaXMucG9zaXRpb24sIGJvaWQucG9zaXRpb24gKTtcclxuXHRcdFx0XHRyZXB1bHNlLm5vcm1hbGl6ZSgpO1xyXG5cdFx0XHRcdHJlcHVsc2UuZGl2aWRlU2NhbGFyKCBkaXN0YW5jZSApO1xyXG5cdFx0XHRcdHBvc1N1bS5hZGQoIHJlcHVsc2UgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBvc1N1bTtcclxuXHR9XHJcblxyXG5cdGZsb2NrKGJvaWRzKSB7XHJcblx0XHRpZih0aGlzLl9nb2FsKSB7XHJcblx0XHRcdHRoaXMuX2FjY2VsZXJhdGlvbi5hZGQodGhpcy5yZWFjaCh0aGlzLl9nb2FsLCAwLjAwNSkpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fYWNjZWxlcmF0aW9uLmFkZCh0aGlzLmFsaWdubWVudChib2lkcykpO1xyXG5cdFx0dGhpcy5fYWNjZWxlcmF0aW9uLmFkZCh0aGlzLmNvaGVzaW9uKGJvaWRzKSk7XHJcblx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMuc2VwYXJhdGlvbihib2lkcykpO1xyXG5cdH1cclxuXHJcblx0bW92ZSAoKSB7XHJcblx0XHR0aGlzLnZlbG9jaXR5LmFkZCggdGhpcy5fYWNjZWxlcmF0aW9uICk7XHJcblx0XHR2YXIgbCA9IHRoaXMudmVsb2NpdHkubGVuZ3RoKCk7XHJcblx0XHRpZiAoIGwgPiB0aGlzLl9tYXhTcGVlZCApIHtcclxuXHRcdFx0dGhpcy52ZWxvY2l0eS5kaXZpZGVTY2FsYXIoIGwgLyB0aGlzLl9tYXhTcGVlZCApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wb3NpdGlvbi5hZGQoIHRoaXMudmVsb2NpdHkgKTtcclxuXHRcdHRoaXMuX2FjY2VsZXJhdGlvbi5zZXQoIDAsIDAsIDAgKTtcclxuXHR9XHJcblxyXG5cdHJ1bihib2lkcykge1xyXG5cdFx0aWYodGhpcy5fYXZvaWRXYWxscykge1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5zZXQoLXRoaXMuX3dpZHRoLCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucG9zaXRpb24ueik7XHJcblx0XHRcdHRoaXMudmVjdG9yID0gdGhpcy5hdm9pZCh0aGlzLnZlY3Rvcik7XHJcblx0XHRcdHRoaXMudmVjdG9yLm11bHRpcGx5U2NhbGFyKDUpO1xyXG5cdFx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3Iuc2V0KHRoaXMuX3dpZHRoLCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucG9zaXRpb24ueik7XHJcblx0XHRcdHRoaXMudmVjdG9yID0gdGhpcy5hdm9pZCh0aGlzLnZlY3Rvcik7XHJcblx0XHRcdHRoaXMudmVjdG9yLm11bHRpcGx5U2NhbGFyKDUpO1xyXG5cdFx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3Iuc2V0KHRoaXMucG9zaXRpb24ueCwgLXRoaXMuX2hlaWdodCwgdGhpcy5wb3NpdGlvbi56KTtcclxuXHRcdFx0dGhpcy52ZWN0b3IgPSB0aGlzLmF2b2lkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3IubXVsdGlwbHlTY2FsYXIoNSk7XHJcblx0XHRcdHRoaXMuX2FjY2VsZXJhdGlvbi5hZGQodGhpcy52ZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5zZXQodGhpcy5wb3NpdGlvbi54LCB0aGlzLl9oZWlnaHQsIHRoaXMucG9zaXRpb24ueik7XHJcblx0XHRcdHRoaXMudmVjdG9yID0gdGhpcy5hdm9pZCh0aGlzLnZlY3Rvcik7XHJcblx0XHRcdHRoaXMudmVjdG9yLm11bHRpcGx5U2NhbGFyKDUpO1xyXG5cdFx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3Iuc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAtdGhpcy5fZGVwdGgpO1xyXG5cdFx0XHR0aGlzLnZlY3RvciA9IHRoaXMuYXZvaWQodGhpcy52ZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5tdWx0aXBseVNjYWxhcig1KTtcclxuXHRcdFx0dGhpcy5fYWNjZWxlcmF0aW9uLmFkZCh0aGlzLnZlY3Rvcik7XHJcblx0XHRcdHRoaXMudmVjdG9yLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5fZGVwdGgpO1xyXG5cdFx0XHR0aGlzLnZlY3RvciA9IHRoaXMuYXZvaWQodGhpcy52ZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5tdWx0aXBseVNjYWxhcig1KTtcclxuXHRcdFx0dGhpcy5fYWNjZWxlcmF0aW9uLmFkZCh0aGlzLnZlY3Rvcik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG5cdFx0XHR0aGlzLmZsb2NrKGJvaWRzKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubW92ZSgpO1xyXG5cdH1cclxufVxyXG5cclxudmFyIFNDUkVFTl9XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoLFxyXG5TQ1JFRU5fSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0LFxyXG5TQ1JFRU5fV0lEVEhfSEFMRiA9IFNDUkVFTl9XSURUSCAgLyAyLFxyXG5TQ1JFRU5fSEVJR0hUX0hBTEYgPSBTQ1JFRU5fSEVJR0hUIC8gMjtcclxuXHJcbmNsYXNzIEFwcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25XaW5kb3dSZXNpemUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uRG9jdW1lbnRNb3VzZU1vdmUgPSB0aGlzLm9uRG9jdW1lbnRNb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgU0NSRUVOX1dJRFRIL1NDUkVFTl9IRUlHSFQsIDEsIDEwMDApO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDQ1MDtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHRoaXMuYmlyZHMgPSBbXTtcclxuXHRcdHRoaXMuYm9pZHMgPSBbXTtcclxuXHJcblx0XHRmb3IodmFyIGkgPSAwOyBpPDIwMDsgaSsrKSB7XHJcblx0XHRcdHZhciBib2lkID0gdGhpcy5ib2lkc1tpXSA9IG5ldyBCb2lkKCk7XHJcblx0XHRcdGJvaWQucG9zaXRpb24ueCA9IE1hdGgucmFuZG9tKCkgKiA0MDAgLSAyMDA7XHJcblx0XHRcdGJvaWQucG9zaXRpb24ueCA9IE1hdGgucmFuZG9tKCkgKiA0MDAgLSAyMDA7XHJcblx0XHRcdGJvaWQucG9zaXRpb24ueSA9IE1hdGgucmFuZG9tKCkgKiA0MDAgLSAyMDA7XHJcblx0XHRcdGJvaWQucG9zaXRpb24ueiA9IE1hdGgucmFuZG9tKCkgKiA0MDAgLSAyMDA7XHJcblx0XHRcdGJvaWQudmVsb2NpdHkueCA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcclxuXHRcdFx0Ym9pZC52ZWxvY2l0eS55ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xyXG5cdFx0XHRib2lkLnZlbG9jaXR5LnogPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XHJcblx0XHRcdGJvaWQuc2V0QXZvaWRXYWxscyggdHJ1ZSApO1xyXG5cdFx0XHRib2lkLnNldFdvcmxkU2l6ZSggNTAwLCA1MDAsIDQwMCApO1xyXG5cdFx0XHR2YXIgYmlyZCA9IHRoaXMuYmlyZHNbIGkgXSA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgQmlyZCgpLCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6TWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmLCBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlIH0gKSApO1xyXG5cdFx0XHRiaXJkLnBoYXNlID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDYyLjgzICk7XHJcblx0XHRcdHRoaXMuc2NlbmUuYWRkKCBiaXJkICk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHhmZmZmZmYgKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUICk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5vbkRvY3VtZW50TW91c2VNb3ZlLCBmYWxzZSApO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggdGhpcy5yZW5kZXJlci5kb21FbGVtZW50ICk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUsIGZhbHNlICk7XHJcblxyXG5cdFx0dGhpcy5hbmltYXRlKCk7XHJcblx0fVxyXG5cdG9uV2luZG93UmVzaXplKCkge1xyXG5cdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcclxuXHR9XHJcblx0b25Eb2N1bWVudE1vdXNlTW92ZSggZXZlbnQgKSB7XHJcblx0XHR2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIGV2ZW50LmNsaWVudFggLSBTQ1JFRU5fV0lEVEhfSEFMRiwgLSBldmVudC5jbGllbnRZICsgU0NSRUVOX0hFSUdIVF9IQUxGLCAwICk7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gdGhpcy5ib2lkcy5sZW5ndGg7IGkgPCBpbDsgaSsrICkge1xyXG5cdFx0XHR2YXIgYm9pZCA9IHRoaXMuYm9pZHNbIGkgXTtcclxuXHRcdFx0dmVjdG9yLnogPSBib2lkLnBvc2l0aW9uLno7XHJcblx0XHRcdGJvaWQucmVwdWxzZSggdmVjdG9yICk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vXHJcblx0YW5pbWF0ZSgpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5hbmltYXRlICk7XHJcblx0XHR0aGlzLnJlbmRlcigpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gdGhpcy5iaXJkcy5sZW5ndGg7IGkgPCBpbDsgaSsrICkge1xyXG5cdFx0XHR2YXIgYm9pZCA9IHRoaXMuYm9pZHNbIGkgXTtcclxuXHRcdFx0Ym9pZC5ydW4oIHRoaXMuYm9pZHMgKTtcclxuXHRcdFx0dmFyIGJpcmQgPSB0aGlzLmJpcmRzWyBpIF07XHJcblx0XHRcdGJpcmQucG9zaXRpb24uY29weSggdGhpcy5ib2lkc1sgaSBdLnBvc2l0aW9uICk7XHJcblx0XHRcdHZhciBjb2xvciA9IGJpcmQubWF0ZXJpYWwuY29sb3I7XHJcblx0XHRcdGNvbG9yLnIgPSBjb2xvci5nID0gY29sb3IuYiA9ICggNTAwIC0gYmlyZC5wb3NpdGlvbi56ICkgLyAxMDAwO1xyXG5cdFx0XHRiaXJkLnJvdGF0aW9uLnkgPSBNYXRoLmF0YW4yKCAtIGJvaWQudmVsb2NpdHkueiwgYm9pZC52ZWxvY2l0eS54ICk7XHJcblx0XHRcdGJpcmQucm90YXRpb24ueiA9IE1hdGguYXNpbiggYm9pZC52ZWxvY2l0eS55IC8gYm9pZC52ZWxvY2l0eS5sZW5ndGgoKSApO1xyXG5cdFx0XHRiaXJkLnBoYXNlID0gKCBiaXJkLnBoYXNlICsgKCBNYXRoLm1heCggMCwgYmlyZC5yb3RhdGlvbi56ICkgKyAwLjEgKSAgKSAlIDYyLjgzO1xyXG5cdFx0XHRiaXJkLmdlb21ldHJ5LnZlcnRpY2VzWyA1IF0ueSA9IGJpcmQuZ2VvbWV0cnkudmVydGljZXNbIDQgXS55ID0gTWF0aC5zaW4oIGJpcmQucGhhc2UgKSAqIDU7XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuXHR9XHJcbn1cclxuXHJcbm5ldyBBcHAoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmlyZHMuanMiXSwic291cmNlUm9vdCI6IiJ9