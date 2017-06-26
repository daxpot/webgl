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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
  !*** ./src/obj/text.js ***!
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
/* 6 */
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

var _text = __webpack_require__(/*! ./obj/text */ 2);

var _text2 = _interopRequireDefault(_text);

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

			var mesh = new _text2.default("x");
			mesh.position.set(0, 0, -200);
			this.scene.add(mesh);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJkZmRkNmRjZDcyZjNiMTZiZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iai9CaXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmovR2lyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QuanMiXSwibmFtZXMiOlsiQmlyZCIsInYiLCJmMyIsImNvbXB1dGVGYWNlTm9ybWFscyIsIngiLCJ5IiwieiIsInZlcnRpY2VzIiwicHVzaCIsIlRIUkVFIiwiVmVjdG9yMyIsImEiLCJiIiwiYyIsImZhY2VzIiwiRmFjZTMiLCJHZW9tZXRyeSIsIkdpcmQiLCJzY2VuZSIsIm1hdGVyaWFsIiwiTGluZUJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsImdlb21ldHJ5IiwibGluZSIsIkxpbmUiLCJhZGQiLCJsZW4iLCJzdHIiLCJsIiwic3BsaXQiLCJpIiwiTCIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJUZXh0TWVzaCIsInRleHQiLCJmb250U2l6ZSIsImFyZ3VtZW50cyIsInN0cmluZ0xlbiIsIk1hdGgiLCJyb3VuZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIlRleCIsIlRleHR1cmUiLCJuZWVkc1VwZGF0ZSIsIm1hdCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwidHJhbnNwYXJlbnQiLCJzaWRlIiwiRG91YmxlU2lkZSIsIlBsYW5lR2VvbWV0cnkiLCJNZXNoIiwiQXBwIiwiYW5pbWF0ZSIsImJpbmQiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0Q2xlYXJDb2xvciIsInNldFNpemUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiaW5pdFNjZW5lIiwiQm94R2VvbWV0cnkiLCJjdWJlIiwiYmlyZCIsInBoYXNlIiwiZmxvb3IiLCJyYW5kb20iLCJwb3NpdGlvbiIsInNldCIsImRlZ3JlZSIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwibWVzaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0lBRXFCQSxJOzs7QUFDcEIsaUJBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxDQUFMLENBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0EsUUFBS0EsQ0FBTCxDQUFRLENBQUUsQ0FBVixFQUFhLENBQUUsQ0FBZixFQUFvQixDQUFwQjtBQUNBLFFBQUtBLENBQUwsQ0FBUSxDQUFFLENBQVYsRUFBZSxDQUFmLEVBQW9CLENBQXBCO0FBQ0EsUUFBS0EsQ0FBTCxDQUFRLENBQUUsQ0FBVixFQUFhLENBQUUsQ0FBZixFQUFrQixDQUFFLENBQXBCOztBQUVBLFFBQUtBLENBQUwsQ0FBVSxDQUFWLEVBQWUsQ0FBZixFQUFrQixDQUFFLENBQXBCO0FBQ0EsUUFB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QUtuRSxLQUFMLENBQVdPLEdBQVgsQ0FBZ0I4RCxnQkFBaEI7O0FBRUEsT0FBSUUsT0FBTyxtQkFBYSxHQUFiLENBQVg7QUFDQUEsUUFBS0wsUUFBTCxDQUFjQyxHQUFkLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQUMsR0FBekI7QUFDQSxRQUFLbkUsS0FBTCxDQUFXTyxHQUFYLENBQWVnRSxJQUFmO0FBRUg7Ozs0QkFDUztBQUNOQyx5QkFBc0IsS0FBSzVCO0FBQzNCO0FBQ0E7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQU5HLEtBT0EsS0FBS1EsUUFBTCxDQUFjcUIsTUFBZCxDQUFxQixLQUFLekUsS0FBMUIsRUFBaUMsS0FBSytDLE1BQXRDO0FBQ0g7Ozs7OztBQUdGLElBQUlKLEdBQUosRyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MmRmZGQ2ZGNkNzJmM2IxNmJkNiIsIi8qIGdsb2JhbCBUSFJFRSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlyZCBleHRlbmRzIFRIUkVFLkdlb21ldHJ5IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnYoIDUsIDAsIDAgKTtcclxuXHRcdHRoaXMudiggLSA1LCAtIDIsICAgMSApO1xyXG5cdFx0dGhpcy52KCAtIDUsICAgMCwgICAwICk7XHJcblx0XHR0aGlzLnYoIC0gNSwgLSAyLCAtIDEgKTtcclxuXHJcblx0XHR0aGlzLnYoICAgMCwgICAyLCAtIDYgKTtcclxuXHRcdHRoaXMudiggICAwLCAgIDIsICAgNiApO1xyXG5cdFx0dGhpcy52KCAgIDIsICAgMCwgICAwICk7XHJcblx0XHR0aGlzLnYoIC0gMywgICAwLCAgIDAgKTtcclxuXHJcblx0XHR0aGlzLmYzKCAwLCAyLCAxICk7XHJcblx0XHQvLyB0aGlzLmYzKCAwLCAzLCAyICk7XHJcblxyXG5cdFx0dGhpcy5mMyggNCwgNywgNiApO1xyXG5cdFx0dGhpcy5mMyggNSwgNiwgNyApO1xyXG5cclxuXHRcdHRoaXMuY29tcHV0ZUZhY2VOb3JtYWxzKCk7XHJcblx0fVx0XHJcblxyXG5cdHYoeCwgeSwgeikge1xyXG5cdFx0dGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIHopKTtcclxuXHR9XHJcblxyXG5cdGYzKGEsIGIsIGMpIHtcclxuXHRcdHRoaXMuZmFjZXMucHVzaChuZXcgVEhSRUUuRmFjZTMoYSwgYiwgYykpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmovQmlyZC5qcyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXJke1xyXG5cdGNvbnN0cnVjdG9yKHNjZW5lKSB7XHJcblx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xyXG5cdFx0XHRjb2xvcjogMHhmZmZmZmZcclxuXHRcdH0pO1xyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggLTEwMCwgMCwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMjAsIDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDE5LCAxLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAyMCwgMCwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMTksIC0xLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAyMCwgMCwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMTAwLCAwLCAwIClcclxuXHRcdCk7XHJcblx0XHR2YXIgbGluZSA9IG5ldyBUSFJFRS5MaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHRcdHNjZW5lLmFkZChsaW5lKTtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIC0xMDAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDIwLCAwICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAxLCAxOSwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMCwgMjAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIC0xLCAxOSwgMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMCwgMjAsIDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEwMCwgMCApLFxyXG5cdFx0KTtcclxuXHRcdHZhciBsaW5lID0gbmV3IFRIUkVFLkxpbmUoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cdFx0c2NlbmUuYWRkKGxpbmUpO1xyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgIC0xMDAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsICAyMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgIDE5ICksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAgMjAgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIC0xLCAwLCAgMTkgKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsICAyMCApLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgIDEwMCApLFxyXG5cdFx0KTtcclxuXHRcdHZhciBsaW5lID0gbmV3IFRIUkVFLkxpbmUoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cdFx0c2NlbmUuYWRkKGxpbmUpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqL0dpcmQuanMiLCJcclxuZnVuY3Rpb24gbGVuKHN0cikge1xyXG5cdGxldCBsID0gMDtcclxuXHRsZXQgYSA9IHN0ci5zcGxpdChcIlwiKTtcclxuXHRmb3IobGV0IGkgPSAwLCBMPWEubGVuZ3RoOyBpIDwgTDsgaSsrKSB7XHJcblx0XHRpZihhW2ldLmNoYXJDb2RlQXQoMCkgPCAyOTkpIHtcclxuXHRcdFx0bCArPSAwLjY7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsKys7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0TWVzaCBleHRlbmRzIFRIUkVFLk1lc2gge1xyXG5cdGNvbnN0cnVjdG9yKHRleHQsIGZvbnRTaXplLCBjb2xvcikge1xyXG5cdFx0Zm9udFNpemUgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAzMFxyXG5cdFx0Y29sb3IgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiBcIiNmZmZmZmZcIlxyXG5cdFx0bGV0IHN0cmluZ0xlbiA9IE1hdGgucm91bmQobGVuKHRleHQpKVxyXG5cdFx0bGV0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcblx0XHRjLndpZHRoID0gZm9udFNpemUqc3RyaW5nTGVuXHJcblx0XHRjLmhlaWdodCA9IGZvbnRTaXplXHJcblx0XHRsZXQgZm9udCA9IGZvbnRTaXplICsgXCJweCDlvq7ova/pm4Xpu5FcIlxyXG5cdFx0bGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpXHJcblx0XHRjdHguZm9udCA9IGZvbnRcclxuXHRcdGN0eC5maWxsU3R5bGUgPSBjb2xvclxyXG5cdFx0Y3R4LmZpbGxUZXh0KHRleHQsIDAsIGZvbnRTaXplLTMpXHJcblxyXG5cdFx0bGV0IFRleCA9IG5ldyBUSFJFRS5UZXh0dXJlKGMpXHJcblx0XHRUZXgubmVlZHNVcGRhdGUgPSB0cnVlXHJcblxyXG5cdFx0dmFyIG1hdCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7bWFwOiBUZXh9KTtcclxuICAgICAgICBtYXQudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG5cdCAgICBtYXQuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblxyXG5cdCAgICBzdXBlcihuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShjLndpZHRoLCBjLmhlaWdodCksIG1hdClcclxuXHQgICAgdGhpcy53aWR0aCA9IGMud2lkdGhcclxuXHQgICAgdGhpcy5oZWlnaHQgPSBjLmhlaWdodFxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmovdGV4dC5qcyIsIi8qIGdsb2JhbCBUSFJFRSAqL1xyXG5pbXBvcnQgQmlyZCBmcm9tIFwiLi9vYmovQmlyZFwiXHJcbmltcG9ydCBHaXJkIGZyb20gXCIuL29iai9HaXJkXCJcclxuaW1wb3J0IFRleHRNZXNoIGZyb20gXCIuL29iai90ZXh0XCJcclxuXHJcbmNsYXNzIEFwcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgwMDAwMDAgKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcdFxyXG5cclxuXHRcdHRoaXMuaW5pdFNjZW5lKCk7XHRcclxuXHJcblx0XHR0aGlzLmFuaW1hdGUoKTtcclxuXHR9XHJcblxyXG5cdGluaXRTY2VuZSgpIHtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuXHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4MDBmZjAwfSk7XHJcblx0XHR0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgQmlyZCgpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe2NvbG9yOiAweGZmZmZmZiwgc2lkZTogVEhSRUUuRG91YmxlU2lkZX0pO1xyXG5cdFx0dGhpcy5iaXJkID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHRcdHRoaXMuYmlyZC5waGFzZSA9IE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiA2Mi44MyApO1xyXG5cdFx0dGhpcy5iaXJkLnBvc2l0aW9uLnNldCgwLCAtMywgMSk7XHJcblx0XHQvLyB0aGlzLmJpcmQucm90YXRpb24ueSA9IE1hdGguUEkvMjtcclxuXHRcdC8vIHRoaXMuYmlyZC5yb3RhdGlvbi56ID0gTWF0aC5QSS8yOyBcclxuXHRcdC8vIHRoaXMuc2NlbmUuYWRkKHRoaXMuYmlyZCk7XHJcblxyXG5cdFx0bmV3IEdpcmQodGhpcy5zY2VuZSk7XHJcblxyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDEsIDEsIDMwKTtcclxuXHRcdHRoaXMuY2FtZXJhLmRlZ3JlZSA9IDA7XHJcblxyXG5cdFx0dmFyIGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDEgKTtcclxuXHQgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoIDAsIDAsIDEwICk7XHJcblx0ICAgIHRoaXMuc2NlbmUuYWRkKCBkaXJlY3Rpb25hbExpZ2h0ICk7XHJcblxyXG5cdCAgICB2YXIgbWVzaCA9IG5ldyBUZXh0TWVzaChcInhcIilcclxuXHQgICAgbWVzaC5wb3NpdGlvbi5zZXQoMCwgMCwgLTIwMClcclxuXHQgICAgdGhpcy5zY2VuZS5hZGQobWVzaClcclxuXHJcblx0fVxyXG5cdGFuaW1hdGUoKSB7XHJcblx0ICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXHJcblx0ICAgIC8vIHRoaXMuY3ViZS5yb3RhdGlvbi54ICs9IDAuMTtcclxuXHQgICAgLy8gdGhpcy5jdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xyXG5cdFx0Ly8gdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDMwKk1hdGguc2luKHRoaXMuY2FtZXJhLmRlZ3JlZSpNYXRoLlBJLzE4MCk7XHJcblx0XHQvLyB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMzAqTWF0aC5jb3ModGhpcy5jYW1lcmEuZGVncmVlKk1hdGguUEkvMTgwKTtcclxuXHRcdC8vIHRoaXMuY2FtZXJhLmRlZ3JlZSArPSAxO1xyXG5cdFx0Ly8gdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcclxuXHQgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpXHJcblx0fVxyXG59XHJcblxyXG5uZXcgQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9