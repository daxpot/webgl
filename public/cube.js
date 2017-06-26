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
/******/ ({

/***/ 4:
/* no static exports found */
/* all exports used */
/*!*********************!*\
  !*** ./src/cube.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global THREE */
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
			this.camera.position.z = 5;
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJkZmRkNmRjZDcyZjNiMTZiZDY/N2FhNCoqIiwid2VicGFjazovLy8uL3NyYy9jdWJlLmpzIl0sIm5hbWVzIjpbIkFwcCIsImFuaW1hdGUiLCJiaW5kIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiaW5pdFNjZW5lIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsImN1YmUiLCJNZXNoIiwiYWRkIiwicG9zaXRpb24iLCJ6IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtJQUNNQSxHO0FBQ0wsZ0JBQWM7QUFBQTs7QUFDYixPQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDQSxPQUFLQyxLQUFMLEdBQWEsSUFBSUMsTUFBTUMsS0FBVixFQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUlGLE1BQU1HLGlCQUFWLENBQTRCLEVBQTVCLEVBQWdDQyxPQUFPQyxVQUFQLEdBQWtCRCxPQUFPRSxXQUF6RCxFQUFzRSxHQUF0RSxFQUEyRSxJQUEzRSxDQUFkO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixJQUFJUCxNQUFNUSxhQUFWLEVBQWhCO0FBQ0EsT0FBS0QsUUFBTCxDQUFjRSxPQUFkLENBQXNCTCxPQUFPQyxVQUE3QixFQUF5Q0QsT0FBT0UsV0FBaEQ7QUFDQUksV0FBU0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtMLFFBQUwsQ0FBY00sVUFBeEM7O0FBRUEsT0FBS0MsU0FBTDs7QUFFQSxPQUFLakIsT0FBTDtBQUNBOzs7OzhCQUVXO0FBQ1gsT0FBSWtCLFdBQVcsSUFBSWYsTUFBTWdCLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBZjtBQUNBLE9BQUlDLFdBQVcsSUFBSWpCLE1BQU1rQixpQkFBVixDQUE0QixFQUFDQyxPQUFPLFFBQVIsRUFBNUIsQ0FBZjtBQUNBLFFBQUtDLElBQUwsR0FBWSxJQUFJcEIsTUFBTXFCLElBQVYsQ0FBZU4sUUFBZixFQUF5QkUsUUFBekIsQ0FBWjs7QUFFQSxRQUFLbEIsS0FBTCxDQUFXdUIsR0FBWCxDQUFlLEtBQUtGLElBQXBCO0FBQ0EsUUFBS2xCLE1BQUwsQ0FBWXFCLFFBQVosQ0FBcUJDLENBQXJCLEdBQXlCLENBQXpCO0FBQ0E7Ozs0QkFDUztBQUNOQyx5QkFBc0IsS0FBSzVCLE9BQTNCO0FBQ0EsUUFBS3VCLElBQUwsQ0FBVU0sUUFBVixDQUFtQkMsQ0FBbkIsSUFBd0IsR0FBeEI7QUFDQSxRQUFLUCxJQUFMLENBQVVNLFFBQVYsQ0FBbUJFLENBQW5CLElBQXdCLEdBQXhCO0FBQ0E7O0FBRUEsUUFBS3JCLFFBQUwsQ0FBY3NCLE1BQWQsQ0FBcUIsS0FBSzlCLEtBQTFCLEVBQWlDLEtBQUtHLE1BQXRDO0FBQ0g7Ozs7OztBQUdGLElBQUlOLEdBQUosRyIsImZpbGUiOiJjdWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MmRmZGQ2ZGNkNzJmM2IxNmJkNiIsIi8qIGdsb2JhbCBUSFJFRSAqL1xyXG5jbGFzcyBBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHRcclxuXHJcblx0XHR0aGlzLmluaXRTY2VuZSgpO1x0XHJcblxyXG5cdFx0dGhpcy5hbmltYXRlKCk7XHJcblx0fVxyXG5cclxuXHRpbml0U2NlbmUoKSB7XHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcblx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe2NvbG9yOiAweDAwZmYwMH0pO1xyXG5cdFx0dGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmN1YmUpO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDU7XHJcblx0fVxyXG5cdGFuaW1hdGUoKSB7XHJcblx0ICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXHJcblx0ICAgIHRoaXMuY3ViZS5yb3RhdGlvbi54ICs9IDAuMTtcclxuXHQgICAgdGhpcy5jdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xyXG5cdCAgICAvLyB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IDAuMTtcclxuXHJcblx0ICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKVxyXG5cdH1cclxufVxyXG5cclxubmV3IEFwcCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jdWJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==