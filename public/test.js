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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
		color: 0x000000
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
/* 2 */,
/* 3 */,
/* 4 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
		function App() {
				_classCallCheck(this, App);

				this.animate = this.animate.bind(this);
				this.scene = new THREE.Scene();
				this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
				this.renderer = new THREE.WebGLRenderer();
				this.renderer.setClearColor(0xffffff);
				this.renderer.setSize(window.innerWidth, window.innerHeight);
				document.body.appendChild(this.renderer.domElement);

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
						material = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
						this.bird = new THREE.Mesh(geometry, material);
						this.bird.phase = Math.floor(Math.random() * 62.83);
						this.bird.position.set(0, -3, 1);
						// this.bird.rotation.y = Math.PI/2;
						// this.bird.rotation.z = Math.PI/2; 
						// this.scene.add(this.bird);

						new _Gird2.default(this.scene);

						this.camera.position.set(1, 1, 30);
						this.camera.degree = 0;
				}
		}, {
				key: "animate",
				value: function animate() {
						requestAnimationFrame(this.animate
						// this.cube.rotation.x += 0.1;
						// this.cube.rotation.y += 0.1;
						// this.camera.position.x = 30*Math.sin(this.camera.degree*Math.PI/180);
						// this.camera.position.z = 30*Math.cos(this.camera.degree*Math.PI/180);
						// this.camera.degree += 1;
						// this.camera.lookAt(new THREE.Vector3(0, 0, 0));
						);this.renderer.render(this.scene, this.camera);
				}
		}]);

		return App;
}();

new App();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGZmOTE5ZDcyYmY3MTExZTliNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iai9CaXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmovR2lyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5qcyJdLCJuYW1lcyI6WyJCaXJkIiwidiIsImYzIiwiY29tcHV0ZUZhY2VOb3JtYWxzIiwieCIsInkiLCJ6IiwidmVydGljZXMiLCJwdXNoIiwiVEhSRUUiLCJWZWN0b3IzIiwiYSIsImIiLCJjIiwiZmFjZXMiLCJGYWNlMyIsIkdlb21ldHJ5IiwiR2lyZCIsInNjZW5lIiwibWF0ZXJpYWwiLCJMaW5lQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwiZ2VvbWV0cnkiLCJsaW5lIiwiTGluZSIsImFkZCIsIkFwcCIsImFuaW1hdGUiLCJiaW5kIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJzZXRTaXplIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiaW5pdFNjZW5lIiwiQm94R2VvbWV0cnkiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImN1YmUiLCJNZXNoIiwic2lkZSIsIkRvdWJsZVNpZGUiLCJiaXJkIiwicGhhc2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwb3NpdGlvbiIsInNldCIsImRlZ3JlZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FB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QUFDQTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBTkcsUUFPQSxLQUFLUSxRQUFMLENBQWN3QixNQUFkLENBQXFCLEtBQUt6QyxLQUExQixFQUFpQyxLQUFLWSxNQUF0QztBQUNIOzs7Ozs7QUFHRixJQUFJSixHQUFKLEciLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGZmOTE5ZDcyYmY3MTExZTliNjQiLCIvKiBnbG9iYWwgVEhSRUUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpcmQgZXh0ZW5kcyBUSFJFRS5HZW9tZXRyeSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy52KCA1LCAwLCAwICk7XHJcblx0XHR0aGlzLnYoIC0gNSwgLSAyLCAgIDEgKTtcclxuXHRcdHRoaXMudiggLSA1LCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDUsIC0gMiwgLSAxICk7XHJcblxyXG5cdFx0dGhpcy52KCAgIDAsICAgMiwgLSA2ICk7XHJcblx0XHR0aGlzLnYoICAgMCwgICAyLCAgIDYgKTtcclxuXHRcdHRoaXMudiggICAyLCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDMsICAgMCwgICAwICk7XHJcblxyXG5cdFx0dGhpcy5mMyggMCwgMiwgMSApO1xyXG5cdFx0Ly8gdGhpcy5mMyggMCwgMywgMiApO1xyXG5cclxuXHRcdHRoaXMuZjMoIDQsIDcsIDYgKTtcclxuXHRcdHRoaXMuZjMoIDUsIDYsIDcgKTtcclxuXHJcblx0XHR0aGlzLmNvbXB1dGVGYWNlTm9ybWFscygpO1xyXG5cdH1cdFxyXG5cclxuXHR2KHgsIHksIHopIHtcclxuXHRcdHRoaXMudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSk7XHJcblx0fVxyXG5cclxuXHRmMyhhLCBiLCBjKSB7XHJcblx0XHR0aGlzLmZhY2VzLnB1c2gobmV3IFRIUkVFLkZhY2UzKGEsIGIsIGMpKTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqL0JpcmQuanMiLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lyZHtcclxuXHRjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtcclxuXHRcdFx0Y29sb3I6IDB4MDAwMDAwXHJcblx0XHR9KTtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIC0xMDAsIDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDIwLCAwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAxOSwgMSwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMjAsIDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDE5LCAtMSwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMjAsIDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDEwMCwgMCwgMCApXHJcblx0XHQpO1xyXG5cdFx0dmFyIGxpbmUgPSBuZXcgVEhSRUUuTGluZSggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblx0XHRzY2VuZS5hZGQobGluZSk7XHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2goXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAtMTAwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAyMCwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMSwgMTksIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDIwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMTksIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDIwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxMDAsIDAgKSxcclxuXHRcdCk7XHJcblx0XHR2YXIgbGluZSA9IG5ldyBUSFJFRS5MaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHRcdHNjZW5lLmFkZChsaW5lKTtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsICAtMTAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAgMjAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsICAxOSApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgIDIwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMCwgIDE5ICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAgMjAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsICAxMDAgKSxcclxuXHRcdCk7XHJcblx0XHR2YXIgbGluZSA9IG5ldyBUSFJFRS5MaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHRcdHNjZW5lLmFkZChsaW5lKTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iai9HaXJkLmpzIiwiLyogZ2xvYmFsIFRIUkVFICovXHJcbmltcG9ydCBCaXJkIGZyb20gXCIuL29iai9CaXJkXCJcclxuaW1wb3J0IEdpcmQgZnJvbSBcIi4vb2JqL0dpcmRcIlxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweGZmZmZmZiApO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1x0XHJcblxyXG5cdFx0dGhpcy5pbml0U2NlbmUoKTtcdFxyXG5cclxuXHRcdHRoaXMuYW5pbWF0ZSgpO1xyXG5cdH1cclxuXHJcblx0aW5pdFNjZW5lKCkge1xyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjogMHgwMGZmMDB9KTtcclxuXHRcdHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBCaXJkKCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4MDAwMDAwLCBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlfSk7XHJcblx0XHR0aGlzLmJpcmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cdFx0dGhpcy5iaXJkLnBoYXNlID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDYyLjgzICk7XHJcblx0XHR0aGlzLmJpcmQucG9zaXRpb24uc2V0KDAsIC0zLCAxKTtcclxuXHRcdC8vIHRoaXMuYmlyZC5yb3RhdGlvbi55ID0gTWF0aC5QSS8yO1xyXG5cdFx0Ly8gdGhpcy5iaXJkLnJvdGF0aW9uLnogPSBNYXRoLlBJLzI7IFxyXG5cdFx0Ly8gdGhpcy5zY2VuZS5hZGQodGhpcy5iaXJkKTtcclxuXHJcblx0XHRuZXcgR2lyZCh0aGlzLnNjZW5lKTtcclxuXHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMSwgMSwgMzApO1xyXG5cdFx0dGhpcy5jYW1lcmEuZGVncmVlID0gMDtcclxuXHR9XHJcblx0YW5pbWF0ZSgpIHtcclxuXHQgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcclxuXHQgICAgLy8gdGhpcy5jdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xyXG5cdCAgICAvLyB0aGlzLmN1YmUucm90YXRpb24ueSArPSAwLjE7XHJcblx0XHQvLyB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMzAqTWF0aC5zaW4odGhpcy5jYW1lcmEuZGVncmVlKk1hdGguUEkvMTgwKTtcclxuXHRcdC8vIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAzMCpNYXRoLmNvcyh0aGlzLmNhbWVyYS5kZWdyZWUqTWF0aC5QSS8xODApO1xyXG5cdFx0Ly8gdGhpcy5jYW1lcmEuZGVncmVlICs9IDE7XHJcblx0XHQvLyB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG5cdCAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSlcclxuXHR9XHJcbn1cclxuXHJcbm5ldyBBcHAoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGVzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=