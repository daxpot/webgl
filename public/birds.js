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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* 2 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDc4MjU2ZjRkNThjMjdmYjExZjg/YmMxMiIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqL0JpcmQuanM/ZmVmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYmlyZHMuanMiXSwibmFtZXMiOlsiQmlyZCIsInYiLCJmMyIsImNvbXB1dGVGYWNlTm9ybWFscyIsIngiLCJ5IiwieiIsInZlcnRpY2VzIiwicHVzaCIsIlRIUkVFIiwiVmVjdG9yMyIsImEiLCJiIiwiYyIsImZhY2VzIiwiRmFjZTMiLCJHZW9tZXRyeSIsIkJvaWQiLCJ2ZWN0b3IiLCJfYWNjZWxlcmF0aW9uIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9kZXB0aCIsIl9nb2FsIiwiX25laWdoYm9yaG9vZFJhZGl1cyIsIl9tYXhTcGVlZCIsIl9tYXhTdGVlckZvcmNlIiwiX2F2b2lkV2FsbHMiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwic3RlZXIiLCJjb3B5Iiwic3ViIiwibXVsdGlwbHlTY2FsYXIiLCJkaXN0YW5jZVRvU3F1YXJlZCIsImRpc3RhbmNlIiwiZGlzdGFuY2VUbyIsInN1YlZlY3RvcnMiLCJhZGQiLCJhbW91bnQiLCJib2lkcyIsImJvaWQiLCJ2ZWxTdW0iLCJjb3VudCIsImkiLCJpbCIsImxlbmd0aCIsIk1hdGgiLCJyYW5kb20iLCJkaXZpZGVTY2FsYXIiLCJsIiwicG9zU3VtIiwicmVwdWxzZSIsIm5vcm1hbGl6ZSIsInJlYWNoIiwiYWxpZ25tZW50IiwiY29oZXNpb24iLCJzZXBhcmF0aW9uIiwic2V0IiwiYXZvaWQiLCJmbG9jayIsIm1vdmUiLCJTQ1JFRU5fV0lEVEgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiU0NSRUVOX0hFSUdIVCIsImlubmVySGVpZ2h0IiwiU0NSRUVOX1dJRFRIX0hBTEYiLCJTQ1JFRU5fSEVJR0hUX0hBTEYiLCJBcHAiLCJhbmltYXRlIiwiYmluZCIsIm9uV2luZG93UmVzaXplIiwib25Eb2N1bWVudE1vdXNlTW92ZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwic2NlbmUiLCJTY2VuZSIsImJpcmRzIiwic2V0QXZvaWRXYWxscyIsInNldFdvcmxkU2l6ZSIsImJpcmQiLCJNZXNoIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsInNpZGUiLCJEb3VibGVTaWRlIiwicGhhc2UiLCJmbG9vciIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJydW4iLCJtYXRlcmlhbCIsInIiLCJnIiwicm90YXRpb24iLCJhdGFuMiIsImFzaW4iLCJtYXgiLCJnZW9tZXRyeSIsInNpbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LE1BQWQsRUFBN0IsQ0FBbEI7QUFDQW1DLFNBQUtNLEtBQUwsR0FBYSxDQUFFTixLQUFLTSxLQUFMLElBQWV4QyxLQUFLbUUsR0FBTCxDQUFVLENBQVYsRUFBYWpDLEtBQUs4QixRQUFMLENBQWM5RyxDQUEzQixJQUFpQyxHQUFoRCxDQUFGLElBQTZELEtBQTFFO0FBQ0FnRixTQUFLa0MsUUFBTCxDQUFjakgsUUFBZCxDQUF3QixDQUF4QixFQUE0QkYsQ0FBNUIsR0FBZ0NpRixLQUFLa0MsUUFBTCxDQUFjakgsUUFBZCxDQUF3QixDQUF4QixFQUE0QkYsQ0FBNUIsR0FBZ0MrQyxLQUFLcUUsR0FBTCxDQUFVbkMsS0FBS00sS0FBZixJQUF5QixDQUF6RjtBQUNBO0FBQ0QsUUFBS0UsUUFBTCxDQUFjaUIsTUFBZCxDQUFzQixLQUFLOUIsS0FBM0IsRUFBa0MsS0FBS0YsTUFBdkM7QUFDQTs7Ozs7O0FBR0YsSUFBSUwsR0FBSixHIiwiZmlsZSI6ImJpcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNzgyNTZmNGQ1OGMyN2ZiMTFmOCIsIi8qIGdsb2JhbCBUSFJFRSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlyZCBleHRlbmRzIFRIUkVFLkdlb21ldHJ5IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnYoIDUsIDAsIDAgKTtcclxuXHRcdHRoaXMudiggLSA1LCAtIDIsICAgMSApO1xyXG5cdFx0dGhpcy52KCAtIDUsICAgMCwgICAwICk7XHJcblx0XHR0aGlzLnYoIC0gNSwgLSAyLCAtIDEgKTtcclxuXHJcblx0XHR0aGlzLnYoICAgMCwgICAyLCAtIDYgKTtcclxuXHRcdHRoaXMudiggICAwLCAgIDIsICAgNiApO1xyXG5cdFx0dGhpcy52KCAgIDIsICAgMCwgICAwICk7XHJcblx0XHR0aGlzLnYoIC0gMywgICAwLCAgIDAgKTtcclxuXHJcblx0XHR0aGlzLmYzKCAwLCAyLCAxICk7XHJcblx0XHQvLyB0aGlzLmYzKCAwLCAzLCAyICk7XHJcblxyXG5cdFx0dGhpcy5mMyggNCwgNywgNiApO1xyXG5cdFx0dGhpcy5mMyggNSwgNiwgNyApO1xyXG5cclxuXHRcdHRoaXMuY29tcHV0ZUZhY2VOb3JtYWxzKCk7XHJcblx0fVx0XHJcblxyXG5cdHYoeCwgeSwgeikge1xyXG5cdFx0dGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIHopKTtcclxuXHR9XHJcblxyXG5cdGYzKGEsIGIsIGMpIHtcclxuXHRcdHRoaXMuZmFjZXMucHVzaChuZXcgVEhSRUUuRmFjZTMoYSwgYiwgYykpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmovQmlyZC5qcyIsImltcG9ydCBCaXJkIGZyb20gXCIuL29iai9CaXJkXCJcclxuXHJcbmNsYXNzIEJvaWQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0dGhpcy5fYWNjZWxlcmF0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcdFx0XHRcdFx0Ly/liqDpgJ/luqZcclxuXHRcdHRoaXMuX3dpZHRoID0gNTAwO1xyXG5cdFx0dGhpcy5faGVpZ2h0ID0gNTAwO1xyXG5cdFx0dGhpcy5fZGVwdGggPSAyMDA7XHJcblx0XHR0aGlzLl9nb2FsID0gbnVsbDtcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHR0aGlzLl9uZWlnaGJvcmhvb2RSYWRpdXMgPSAxMDA7XHJcblx0XHR0aGlzLl9tYXhTcGVlZCA9IDQ7XHJcblx0XHR0aGlzLl9tYXhTdGVlckZvcmNlID0gMC4xO1xyXG5cdFx0dGhpcy5fYXZvaWRXYWxscyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHR0aGlzLnZlbG9jaXR5ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcdFx0Ly/pgJ/luqZcclxuXHR9XHJcblxyXG5cdHNldEdvYWwodGFyZ2V0KSB7XHJcblx0XHR0aGlzLl9nb2FsID0gdGFyZ2V0O1xyXG5cdH1cclxuXHJcblx0c2V0QXZvaWRXYWxscyh2YWx1ZSkge1xyXG5cdFx0dGhpcy5fYXZvaWRXYWxscyA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0V29ybGRTaXplICggd2lkdGgsIGhlaWdodCwgZGVwdGggKSB7XHJcblx0XHR0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdFx0dGhpcy5fZGVwdGggPSBkZXB0aDtcclxuXHR9XHJcblxyXG5cdGF2b2lkKHRhcmdldCkge1xyXG5cdFx0dmFyIHN0ZWVyID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcdFx0XHJcblx0XHRzdGVlci5jb3B5KHRoaXMucG9zaXRpb24pO1xyXG5cdFx0c3RlZXIuc3ViKHRhcmdldCk7XHJcblx0XHRzdGVlci5tdWx0aXBseVNjYWxhcigxL3RoaXMucG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQodGFyZ2V0KSk7XHJcblx0XHQvLyhhLWIpL3xhLWJ8XjJcclxuXHRcdHJldHVybiBzdGVlcjtcclxuXHR9XHJcblxyXG5cdHJlcHVsc2UgKCB0YXJnZXQgKSB7XHJcblx0XHR2YXIgZGlzdGFuY2UgPSB0aGlzLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRhcmdldCApO1xyXG5cdFx0aWYgKCBkaXN0YW5jZSA8IDE1MCApIHtcclxuXHRcdFx0dmFyIHN0ZWVyID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdFx0c3RlZXIuc3ViVmVjdG9ycyggdGhpcy5wb3NpdGlvbiwgdGFyZ2V0ICk7XHJcblx0XHRcdHN0ZWVyLm11bHRpcGx5U2NhbGFyKCAwLjUgLyBkaXN0YW5jZSApO1xyXG5cdFx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKCBzdGVlciApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVhY2ggKCB0YXJnZXQsIGFtb3VudCApIHtcclxuXHRcdHZhciBzdGVlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRzdGVlci5zdWJWZWN0b3JzKCB0YXJnZXQsIHRoaXMucG9zaXRpb24gKTtcclxuXHRcdHN0ZWVyLm11bHRpcGx5U2NhbGFyKCBhbW91bnQgKTtcclxuXHRcdHJldHVybiBzdGVlcjtcclxuXHR9XHJcblxyXG5cdGFsaWdubWVudCAoIGJvaWRzICkge1xyXG5cdFx0dmFyIGJvaWQsIHZlbFN1bSA9IG5ldyBUSFJFRS5WZWN0b3IzKCksXHJcblx0XHRjb3VudCA9IDA7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gYm9pZHMubGVuZ3RoOyBpIDwgaWw7IGkrKyApIHtcclxuXHRcdFx0aWYgKCBNYXRoLnJhbmRvbSgpID4gMC42ICkgY29udGludWU7XHJcblx0XHRcdGJvaWQgPSBib2lkc1sgaSBdO1xyXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBib2lkLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMucG9zaXRpb24gKTtcclxuXHRcdFx0aWYgKCBkaXN0YW5jZSA+IDAgJiYgZGlzdGFuY2UgPD0gdGhpcy5fbmVpZ2hib3Job29kUmFkaXVzICkge1xyXG5cdFx0XHRcdHZlbFN1bS5hZGQoIGJvaWQudmVsb2NpdHkgKTtcclxuXHRcdFx0XHRjb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIGNvdW50ID4gMCApIHtcclxuXHRcdFx0dmVsU3VtLmRpdmlkZVNjYWxhciggY291bnQgKTtcclxuXHRcdFx0dmFyIGwgPSB2ZWxTdW0ubGVuZ3RoKCk7XHJcblx0XHRcdGlmICggbCA+IHRoaXMuX21heFN0ZWVyRm9yY2UgKSB7XHJcblx0XHRcdFx0dmVsU3VtLmRpdmlkZVNjYWxhciggbCAvIHRoaXMuX21heFN0ZWVyRm9yY2UgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZlbFN1bTtcclxuXHR9XHJcblxyXG5cdGNvaGVzaW9uICggYm9pZHMgKSB7XHJcblx0XHR2YXIgYm9pZCwgZGlzdGFuY2UsXHJcblx0XHRwb3NTdW0gPSBuZXcgVEhSRUUuVmVjdG9yMygpLFxyXG5cdFx0c3RlZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygpLFxyXG5cdFx0Y291bnQgPSAwO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGJvaWRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cdFx0XHRpZiAoIE1hdGgucmFuZG9tKCkgPiAwLjYgKSBjb250aW51ZTtcclxuXHRcdFx0Ym9pZCA9IGJvaWRzWyBpIF07XHJcblx0XHRcdGRpc3RhbmNlID0gYm9pZC5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLnBvc2l0aW9uICk7XHJcblx0XHRcdGlmICggZGlzdGFuY2UgPiAwICYmIGRpc3RhbmNlIDw9IHRoaXMuX25laWdoYm9yaG9vZFJhZGl1cyApIHtcclxuXHRcdFx0XHRwb3NTdW0uYWRkKCBib2lkLnBvc2l0aW9uICk7XHJcblx0XHRcdFx0Y291bnQrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCBjb3VudCA+IDAgKSB7XHJcblx0XHRcdHBvc1N1bS5kaXZpZGVTY2FsYXIoIGNvdW50ICk7XHJcblx0XHR9XHJcblx0XHRzdGVlci5zdWJWZWN0b3JzKCBwb3NTdW0sIHRoaXMucG9zaXRpb24gKTtcclxuXHRcdHZhciBsID0gc3RlZXIubGVuZ3RoKCk7XHJcblx0XHRpZiAoIGwgPiB0aGlzLl9tYXhTdGVlckZvcmNlICkge1xyXG5cdFx0XHRzdGVlci5kaXZpZGVTY2FsYXIoIGwgLyB0aGlzLl9tYXhTdGVlckZvcmNlICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3RlZXI7XHJcblx0fVxyXG5cclxuXHRzZXBhcmF0aW9uICggYm9pZHMgKSB7XHJcblx0XHR2YXIgYm9pZCwgZGlzdGFuY2UsXHJcblx0XHRwb3NTdW0gPSBuZXcgVEhSRUUuVmVjdG9yMygpLFxyXG5cdFx0cmVwdWxzZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gYm9pZHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblx0XHRcdGlmICggTWF0aC5yYW5kb20oKSA+IDAuNiApIGNvbnRpbnVlO1xyXG5cdFx0XHRib2lkID0gYm9pZHNbIGkgXTtcclxuXHRcdFx0ZGlzdGFuY2UgPSBib2lkLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMucG9zaXRpb24gKTtcclxuXHRcdFx0aWYgKCBkaXN0YW5jZSA+IDAgJiYgZGlzdGFuY2UgPD0gdGhpcy5fbmVpZ2hib3Job29kUmFkaXVzICkge1xyXG5cdFx0XHRcdHJlcHVsc2Uuc3ViVmVjdG9ycyggdGhpcy5wb3NpdGlvbiwgYm9pZC5wb3NpdGlvbiApO1xyXG5cdFx0XHRcdHJlcHVsc2Uubm9ybWFsaXplKCk7XHJcblx0XHRcdFx0cmVwdWxzZS5kaXZpZGVTY2FsYXIoIGRpc3RhbmNlICk7XHJcblx0XHRcdFx0cG9zU3VtLmFkZCggcmVwdWxzZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zU3VtO1xyXG5cdH1cclxuXHJcblx0ZmxvY2soYm9pZHMpIHtcclxuXHRcdGlmKHRoaXMuX2dvYWwpIHtcclxuXHRcdFx0dGhpcy5fYWNjZWxlcmF0aW9uLmFkZCh0aGlzLnJlYWNoKHRoaXMuX2dvYWwsIDAuMDA1KSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMuYWxpZ25tZW50KGJvaWRzKSk7XHJcblx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMuY29oZXNpb24oYm9pZHMpKTtcclxuXHRcdHRoaXMuX2FjY2VsZXJhdGlvbi5hZGQodGhpcy5zZXBhcmF0aW9uKGJvaWRzKSk7XHJcblx0fVxyXG5cclxuXHRtb3ZlICgpIHtcclxuXHRcdHRoaXMudmVsb2NpdHkuYWRkKCB0aGlzLl9hY2NlbGVyYXRpb24gKTtcclxuXHRcdHZhciBsID0gdGhpcy52ZWxvY2l0eS5sZW5ndGgoKTtcclxuXHRcdGlmICggbCA+IHRoaXMuX21heFNwZWVkICkge1xyXG5cdFx0XHR0aGlzLnZlbG9jaXR5LmRpdmlkZVNjYWxhciggbCAvIHRoaXMuX21heFNwZWVkICk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBvc2l0aW9uLmFkZCggdGhpcy52ZWxvY2l0eSApO1xyXG5cdFx0dGhpcy5fYWNjZWxlcmF0aW9uLnNldCggMCwgMCwgMCApO1xyXG5cdH1cclxuXHJcblx0cnVuKGJvaWRzKSB7XHJcblx0XHRpZih0aGlzLl9hdm9pZFdhbGxzKSB7XHJcblx0XHRcdHRoaXMudmVjdG9yLnNldCgtdGhpcy5fd2lkdGgsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5wb3NpdGlvbi56KTtcclxuXHRcdFx0dGhpcy52ZWN0b3IgPSB0aGlzLmF2b2lkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3IubXVsdGlwbHlTY2FsYXIoNSk7XHJcblx0XHRcdHRoaXMuX2FjY2VsZXJhdGlvbi5hZGQodGhpcy52ZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5zZXQodGhpcy5fd2lkdGgsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5wb3NpdGlvbi56KTtcclxuXHRcdFx0dGhpcy52ZWN0b3IgPSB0aGlzLmF2b2lkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3IubXVsdGlwbHlTY2FsYXIoNSk7XHJcblx0XHRcdHRoaXMuX2FjY2VsZXJhdGlvbi5hZGQodGhpcy52ZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5zZXQodGhpcy5wb3NpdGlvbi54LCAtdGhpcy5faGVpZ2h0LCB0aGlzLnBvc2l0aW9uLnopO1xyXG5cdFx0XHR0aGlzLnZlY3RvciA9IHRoaXMuYXZvaWQodGhpcy52ZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5tdWx0aXBseVNjYWxhcig1KTtcclxuXHRcdFx0dGhpcy5fYWNjZWxlcmF0aW9uLmFkZCh0aGlzLnZlY3Rvcik7XHJcblx0XHRcdHRoaXMudmVjdG9yLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMuX2hlaWdodCwgdGhpcy5wb3NpdGlvbi56KTtcclxuXHRcdFx0dGhpcy52ZWN0b3IgPSB0aGlzLmF2b2lkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3IubXVsdGlwbHlTY2FsYXIoNSk7XHJcblx0XHRcdHRoaXMuX2FjY2VsZXJhdGlvbi5hZGQodGhpcy52ZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnZlY3Rvci5zZXQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIC10aGlzLl9kZXB0aCk7XHJcblx0XHRcdHRoaXMudmVjdG9yID0gdGhpcy5hdm9pZCh0aGlzLnZlY3Rvcik7XHJcblx0XHRcdHRoaXMudmVjdG9yLm11bHRpcGx5U2NhbGFyKDUpO1xyXG5cdFx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMudmVjdG9yKTtcclxuXHRcdFx0dGhpcy52ZWN0b3Iuc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLl9kZXB0aCk7XHJcblx0XHRcdHRoaXMudmVjdG9yID0gdGhpcy5hdm9pZCh0aGlzLnZlY3Rvcik7XHJcblx0XHRcdHRoaXMudmVjdG9yLm11bHRpcGx5U2NhbGFyKDUpO1xyXG5cdFx0XHR0aGlzLl9hY2NlbGVyYXRpb24uYWRkKHRoaXMudmVjdG9yKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcblx0XHRcdHRoaXMuZmxvY2soYm9pZHMpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5tb3ZlKCk7XHJcblx0fVxyXG59XHJcblxyXG52YXIgU0NSRUVOX1dJRFRIID0gd2luZG93LmlubmVyV2lkdGgsXHJcblNDUkVFTl9IRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblNDUkVFTl9XSURUSF9IQUxGID0gU0NSRUVOX1dJRFRIICAvIDIsXHJcblNDUkVFTl9IRUlHSFRfSEFMRiA9IFNDUkVFTl9IRUlHSFQgLyAyO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25Eb2N1bWVudE1vdXNlTW92ZSA9IHRoaXMub25Eb2N1bWVudE1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCBTQ1JFRU5fV0lEVEgvU0NSRUVOX0hFSUdIVCwgMSwgMTAwMCk7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNDUwO1xyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cdFx0dGhpcy5iaXJkcyA9IFtdO1xyXG5cdFx0dGhpcy5ib2lkcyA9IFtdO1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IDA7IGk8MjAwOyBpKyspIHtcclxuXHRcdFx0dmFyIGJvaWQgPSB0aGlzLmJvaWRzW2ldID0gbmV3IEJvaWQoKTtcclxuXHRcdFx0Ym9pZC5wb3NpdGlvbi54ID0gTWF0aC5yYW5kb20oKSAqIDQwMCAtIDIwMDtcclxuXHRcdFx0Ym9pZC5wb3NpdGlvbi54ID0gTWF0aC5yYW5kb20oKSAqIDQwMCAtIDIwMDtcclxuXHRcdFx0Ym9pZC5wb3NpdGlvbi55ID0gTWF0aC5yYW5kb20oKSAqIDQwMCAtIDIwMDtcclxuXHRcdFx0Ym9pZC5wb3NpdGlvbi56ID0gTWF0aC5yYW5kb20oKSAqIDQwMCAtIDIwMDtcclxuXHRcdFx0Ym9pZC52ZWxvY2l0eS54ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xyXG5cdFx0XHRib2lkLnZlbG9jaXR5LnkgPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XHJcblx0XHRcdGJvaWQudmVsb2NpdHkueiA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcclxuXHRcdFx0Ym9pZC5zZXRBdm9pZFdhbGxzKCB0cnVlICk7XHJcblx0XHRcdGJvaWQuc2V0V29ybGRTaXplKCA1MDAsIDUwMCwgNDAwICk7XHJcblx0XHRcdHZhciBiaXJkID0gdGhpcy5iaXJkc1sgaSBdID0gbmV3IFRIUkVFLk1lc2goIG5ldyBCaXJkKCksIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjpNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSApICk7XHJcblx0XHRcdGJpcmQucGhhc2UgPSBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogNjIuODMgKTtcclxuXHRcdFx0dGhpcy5zY2VuZS5hZGQoIGJpcmQgKTtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweGZmZmZmZiApO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQgKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jdW1lbnRNb3VzZU1vdmUsIGZhbHNlICk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSwgZmFsc2UgKTtcclxuXHJcblx0XHR0aGlzLmFuaW1hdGUoKTtcclxuXHR9XHJcblx0b25XaW5kb3dSZXNpemUoKSB7XHJcblx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xyXG5cdH1cclxuXHRvbkRvY3VtZW50TW91c2VNb3ZlKCBldmVudCApIHtcclxuXHRcdHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggZXZlbnQuY2xpZW50WCAtIFNDUkVFTl9XSURUSF9IQUxGLCAtIGV2ZW50LmNsaWVudFkgKyBTQ1JFRU5fSEVJR0hUX0hBTEYsIDAgKTtcclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSB0aGlzLmJvaWRzLmxlbmd0aDsgaSA8IGlsOyBpKysgKSB7XHJcblx0XHRcdHZhciBib2lkID0gdGhpcy5ib2lkc1sgaSBdO1xyXG5cdFx0XHR2ZWN0b3IueiA9IGJvaWQucG9zaXRpb24uejtcclxuXHRcdFx0Ym9pZC5yZXB1bHNlKCB2ZWN0b3IgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9cclxuXHRhbmltYXRlKCkge1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLmFuaW1hdGUgKTtcclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSB0aGlzLmJpcmRzLmxlbmd0aDsgaSA8IGlsOyBpKysgKSB7XHJcblx0XHRcdHZhciBib2lkID0gdGhpcy5ib2lkc1sgaSBdO1xyXG5cdFx0XHRib2lkLnJ1biggdGhpcy5ib2lkcyApO1xyXG5cdFx0XHR2YXIgYmlyZCA9IHRoaXMuYmlyZHNbIGkgXTtcclxuXHRcdFx0YmlyZC5wb3NpdGlvbi5jb3B5KCB0aGlzLmJvaWRzWyBpIF0ucG9zaXRpb24gKTtcclxuXHRcdFx0dmFyIGNvbG9yID0gYmlyZC5tYXRlcmlhbC5jb2xvcjtcclxuXHRcdFx0Y29sb3IuciA9IGNvbG9yLmcgPSBjb2xvci5iID0gKCA1MDAgLSBiaXJkLnBvc2l0aW9uLnogKSAvIDEwMDA7XHJcblx0XHRcdGJpcmQucm90YXRpb24ueSA9IE1hdGguYXRhbjIoIC0gYm9pZC52ZWxvY2l0eS56LCBib2lkLnZlbG9jaXR5LnggKTtcclxuXHRcdFx0YmlyZC5yb3RhdGlvbi56ID0gTWF0aC5hc2luKCBib2lkLnZlbG9jaXR5LnkgLyBib2lkLnZlbG9jaXR5Lmxlbmd0aCgpICk7XHJcblx0XHRcdGJpcmQucGhhc2UgPSAoIGJpcmQucGhhc2UgKyAoIE1hdGgubWF4KCAwLCBiaXJkLnJvdGF0aW9uLnogKSArIDAuMSApICApICUgNjIuODM7XHJcblx0XHRcdGJpcmQuZ2VvbWV0cnkudmVydGljZXNbIDUgXS55ID0gYmlyZC5nZW9tZXRyeS52ZXJ0aWNlc1sgNCBdLnkgPSBNYXRoLnNpbiggYmlyZC5waGFzZSApICogNTtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG5cdH1cclxufVxyXG5cclxubmV3IEFwcCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iaXJkcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=