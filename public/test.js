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
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global THREE */


var _Bird = __webpack_require__(/*! ./obj/Bird */ 0);

var _Bird2 = _interopRequireDefault(_Bird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
		function App() {
				_classCallCheck(this, App);

				this.animate = this.animate.bind(this);
				this.scene = new THREE.Scene();
				this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
				this.renderer = new THREE.WebGLRenderer();
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
						material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
						var bird = new THREE.Mesh(geometry, material);
						bird.position.set(1, 2, 0);
						this.scene.add(bird);

						var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
						// light.position.set(3, 2, 0);
						this.scene.add(light);

						this.camera.position.set(1, 1, 5);
						// this.camera.lookAt([,0,0]);
				}
		}, {
				key: "animate",
				value: function animate() {
						requestAnimationFrame(this.animate);
						this.cube.rotation.x += 0.1;
						this.cube.rotation.y += 0.1;
						// this.camera.position.z += 0.1;

						this.renderer.render(this.scene, this.camera);
				}
		}]);

		return App;
}();

new App();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmE1MWYxNmZlZDJkYjliNjE3NWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iai9CaXJkLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIl0sIm5hbWVzIjpbIkJpcmQiLCJ2IiwiZjMiLCJjb21wdXRlRmFjZU5vcm1hbHMiLCJ4IiwieSIsInoiLCJ2ZXJ0aWNlcyIsInB1c2giLCJUSFJFRSIsIlZlY3RvcjMiLCJhIiwiYiIsImMiLCJmYWNlcyIsIkZhY2UzIiwiR2VvbWV0cnkiLCJBcHAiLCJhbmltYXRlIiwiYmluZCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJpbml0U2NlbmUiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwiY3ViZSIsIk1lc2giLCJhZGQiLCJiaXJkIiwicG9zaXRpb24iLCJzZXQiLCJsaWdodCIsIkhlbWlzcGhlcmVMaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvdGF0aW9uIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiww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LENBQWUsS0FBS0YsSUFBcEI7O0FBRUFMLGlCQUFXLG9CQUFYO0FBQ0FFLGlCQUFXLElBQUk1QixNQUFNNkIsaUJBQVYsQ0FBNEIsRUFBQ0MsT0FBTyxRQUFSLEVBQTVCLENBQVg7QUFDQSxVQUFJSSxPQUFPLElBQUlsQyxNQUFNZ0MsSUFBVixDQUFlTixRQUFmLEVBQXlCRSxRQUF6QixDQUFYO0FBQ0FNLFdBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QjtBQUNBLFdBQUt6QixLQUFMLENBQVdzQixHQUFYLENBQWVDLElBQWY7O0FBRUEsVUFBSUcsUUFBUyxJQUFJckMsTUFBTXNDLGVBQVYsQ0FBMkIsUUFBM0IsRUFBcUMsUUFBckMsRUFBK0MsQ0FBL0MsQ0FBYjtBQUNBO0FBQ0EsV0FBSzNCLEtBQUwsQ0FBV3NCLEdBQVgsQ0FBZUksS0FBZjs7QUFFQSxXQUFLeEIsTUFBTCxDQUFZc0IsUUFBWixDQUFxQkMsR0FBckIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDQTtBQUNBOzs7OEJBQ1M7QUFDTkcsNEJBQXNCLEtBQUs5QixPQUEzQjtBQUNBLFdBQUtzQixJQUFMLENBQVVTLFFBQVYsQ0FBbUI3QyxDQUFuQixJQUF3QixHQUF4QjtBQUNBLFdBQUtvQyxJQUFMLENBQVVTLFFBQVYsQ0FBbUI1QyxDQUFuQixJQUF3QixHQUF4QjtBQUNBOztBQUVBLFdBQUtzQixRQUFMLENBQWN1QixNQUFkLENBQXFCLEtBQUs5QixLQUExQixFQUFpQyxLQUFLRSxNQUF0QztBQUNIOzs7Ozs7QUFHRixJQUFJTCxHQUFKLEciLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmE1MWYxNmZlZDJkYjliNjE3NWYiLCIvKiBnbG9iYWwgVEhSRUUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpcmQgZXh0ZW5kcyBUSFJFRS5HZW9tZXRyeSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy52KCA1LCAwLCAwICk7XHJcblx0XHR0aGlzLnYoIC0gNSwgLSAyLCAgIDEgKTtcclxuXHRcdHRoaXMudiggLSA1LCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDUsIC0gMiwgLSAxICk7XHJcblxyXG5cdFx0dGhpcy52KCAgIDAsICAgMiwgLSA2ICk7XHJcblx0XHR0aGlzLnYoICAgMCwgICAyLCAgIDYgKTtcclxuXHRcdHRoaXMudiggICAyLCAgIDAsICAgMCApO1xyXG5cdFx0dGhpcy52KCAtIDMsICAgMCwgICAwICk7XHJcblxyXG5cdFx0dGhpcy5mMyggMCwgMiwgMSApO1xyXG5cdFx0Ly8gdGhpcy5mMyggMCwgMywgMiApO1xyXG5cclxuXHRcdHRoaXMuZjMoIDQsIDcsIDYgKTtcclxuXHRcdHRoaXMuZjMoIDUsIDYsIDcgKTtcclxuXHJcblx0XHR0aGlzLmNvbXB1dGVGYWNlTm9ybWFscygpO1xyXG5cdH1cdFxyXG5cclxuXHR2KHgsIHksIHopIHtcclxuXHRcdHRoaXMudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSk7XHJcblx0fVxyXG5cclxuXHRmMyhhLCBiLCBjKSB7XHJcblx0XHR0aGlzLmZhY2VzLnB1c2gobmV3IFRIUkVFLkZhY2UzKGEsIGIsIGMpKTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqL0JpcmQuanMiLCIvKiBnbG9iYWwgVEhSRUUgKi9cclxuaW1wb3J0IEJpcmQgZnJvbSBcIi4vb2JqL0JpcmRcIlxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1x0XHJcblxyXG5cdFx0dGhpcy5pbml0U2NlbmUoKTtcdFxyXG5cclxuXHRcdHRoaXMuYW5pbWF0ZSgpO1xyXG5cdH1cclxuXHJcblx0aW5pdFNjZW5lKCkge1xyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjogMHgwMGZmMDB9KTtcclxuXHRcdHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBCaXJkKCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4MDBmZjAwfSk7XHJcblx0XHR2YXIgYmlyZCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRiaXJkLnBvc2l0aW9uLnNldCgxLCAyLCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJpcmQpO1xyXG5cclxuXHRcdHZhciBsaWdodCA9ICBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZiYiwgMHgwODA4MjAsIDEgKTtcclxuXHRcdC8vIGxpZ2h0LnBvc2l0aW9uLnNldCgzLCAyLCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGxpZ2h0KTtcclxuXHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMSwgMSwgNSk7XHJcblx0XHQvLyB0aGlzLmNhbWVyYS5sb29rQXQoWywwLDBdKTtcclxuXHR9XHJcblx0YW5pbWF0ZSgpIHtcclxuXHQgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcclxuXHQgICAgdGhpcy5jdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xyXG5cdCAgICB0aGlzLmN1YmUucm90YXRpb24ueSArPSAwLjE7XHJcblx0ICAgIC8vIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gMC4xO1xyXG5cclxuXHQgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpXHJcblx0fVxyXG59XHJcblxyXG5uZXcgQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9