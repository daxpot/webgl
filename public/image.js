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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global THREE */

var images = ["https://tu.kagirl.cn/pic/view/1.jpg", "https://tu.kagirl.cn/pic/view/2.jpg", "https://tu.kagirl.cn/pic/view/3.jpg", "https://tu.kagirl.cn/pic/view/4.jpg", "https://tu.kagirl.cn/pic/view/5.jpg", "https://tu.kagirl.cn/pic/view/7.jpg", "https://tu.kagirl.cn/pic/view/8.jpg", "https://tu.kagirl.cn/pic/view/9.jpg"];

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
			var _this = this;

			var loader = new THREE.ImageLoader();
			loader.setCrossOrigin("anonymous");

			var _loop = function _loop(i) {
				loader.load(images[i], function (image) {
					var texure = new THREE.Texture(image);
					texure.needsUpdate = true;
					var geometry = new THREE.PlaneGeometry(100, 100); //image.width, image.height)
					var material = new THREE.MeshBasicMaterial({ map: texure });
					material.side = THREE.DoubleSide;
					var mesh = new THREE.Mesh(geometry, material);
					mesh.position.set(200 * Math.sin(i / images.length * Math.PI * 2), 0, 200 * Math.cos(i / images.length * Math.PI * 2));
					mesh.rotateY(i / images.length * Math.PI * 2);
					_this.scene.add(mesh);
				});
			};

			for (var i = 0; i < images.length; i++) {
				_loop(i);
			}
			this.camera.degree = 0;
			this.camera.position.z = 500;
		}
	}, {
		key: "animate",
		value: function animate() {
			requestAnimationFrame(this.animate);

			this.camera.position.x = 500 * Math.cos(this.camera.degree * Math.PI / 180);
			this.camera.position.z = 500 * Math.sin(this.camera.degree * Math.PI / 180);
			this.camera.degree += 0.1;
			this.camera.lookAt(new THREE.Vector3(0, 0, 0));

			this.renderer.render(this.scene, this.camera);
		}
	}]);

	return App;
}();

new App();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTVlMmEyMzMxMjk0OTBjNGY1MDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLmpzIl0sIm5hbWVzIjpbImltYWdlcyIsIkFwcCIsImFuaW1hdGUiLCJiaW5kIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImluaXRTY2VuZSIsImxvYWRlciIsIkltYWdlTG9hZGVyIiwic2V0Q3Jvc3NPcmlnaW4iLCJpIiwibG9hZCIsImltYWdlIiwidGV4dXJlIiwiVGV4dHVyZSIsIm5lZWRzVXBkYXRlIiwiZ2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInNpZGUiLCJEb3VibGVTaWRlIiwibWVzaCIsIk1lc2giLCJwb3NpdGlvbiIsInNldCIsIk1hdGgiLCJzaW4iLCJsZW5ndGgiLCJQSSIsImNvcyIsInJvdGF0ZVkiLCJhZGQiLCJkZWdyZWUiLCJ6IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsImxvb2tBdCIsIlZlY3RvcjMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FB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S0FBS2hELE9BQTNCOztBQUVBLFFBQUtLLE1BQUwsQ0FBWWdDLFFBQVosQ0FBcUJZLENBQXJCLEdBQXlCLE1BQUlWLEtBQUtJLEdBQUwsQ0FBUyxLQUFLdEMsTUFBTCxDQUFZeUMsTUFBWixHQUFtQlAsS0FBS0csRUFBeEIsR0FBMkIsR0FBcEMsQ0FBN0I7QUFDQSxRQUFLckMsTUFBTCxDQUFZZ0MsUUFBWixDQUFxQlUsQ0FBckIsR0FBeUIsTUFBSVIsS0FBS0MsR0FBTCxDQUFTLEtBQUtuQyxNQUFMLENBQVl5QyxNQUFaLEdBQW1CUCxLQUFLRyxFQUF4QixHQUEyQixHQUFwQyxDQUE3QjtBQUNBLFFBQUtyQyxNQUFMLENBQVl5QyxNQUFaLElBQXNCLEdBQXRCO0FBQ0EsUUFBS3pDLE1BQUwsQ0FBWTZDLE1BQVosQ0FBbUIsSUFBSS9DLE1BQU1nRCxPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQW5COztBQUVBLFFBQUt6QyxRQUFMLENBQWMwQyxNQUFkLENBQXFCLEtBQUtsRCxLQUExQixFQUFpQyxLQUFLRyxNQUF0QztBQUNIOzs7Ozs7QUFHRixJQUFJTixHQUFKLEciLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE1ZTJhMjMzMTI5NDkwYzRmNTAyIiwiLyogZ2xvYmFsIFRIUkVFICovXHJcblxyXG52YXIgaW1hZ2VzID0gW1xyXG5cdFwiaHR0cHM6Ly90dS5rYWdpcmwuY24vcGljL3ZpZXcvMS5qcGdcIixcclxuXHRcImh0dHBzOi8vdHUua2FnaXJsLmNuL3BpYy92aWV3LzIuanBnXCIsXHJcblx0XCJodHRwczovL3R1LmthZ2lybC5jbi9waWMvdmlldy8zLmpwZ1wiLFxyXG5cdFwiaHR0cHM6Ly90dS5rYWdpcmwuY24vcGljL3ZpZXcvNC5qcGdcIixcclxuXHRcImh0dHBzOi8vdHUua2FnaXJsLmNuL3BpYy92aWV3LzUuanBnXCIsXHJcblx0XCJodHRwczovL3R1LmthZ2lybC5jbi9waWMvdmlldy83LmpwZ1wiLFxyXG5cdFwiaHR0cHM6Ly90dS5rYWdpcmwuY24vcGljL3ZpZXcvOC5qcGdcIixcclxuXHRcImh0dHBzOi8vdHUua2FnaXJsLmNuL3BpYy92aWV3LzkuanBnXCJcclxuXVxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgwMDAwMDAgKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcdFxyXG5cclxuXHRcdHRoaXMuaW5pdFNjZW5lKCk7XHRcclxuXHJcblx0XHR0aGlzLmFuaW1hdGUoKTtcclxuXHR9XHJcblxyXG5cdGluaXRTY2VuZSgpIHtcclxuXHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHRcdGxvYWRlci5zZXRDcm9zc09yaWdpbihcImFub255bW91c1wiKVxyXG5cdFx0Zm9yKGxldCBpPTA7IGk8aW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdGltYWdlc1tpXSxcclxuXHRcdFx0XHQoaW1hZ2UpID0+IHtcclxuXHRcdFx0XHRcdGxldCB0ZXh1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShpbWFnZSlcclxuXHRcdFx0XHRcdHRleHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxMDAsIDEwMCkvL2ltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpXHJcblx0XHRcdFx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe21hcDogdGV4dXJlfSlcclxuXHRcdFx0XHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0XHRcdFx0bGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cdFx0XHRcdFx0bWVzaC5wb3NpdGlvbi5zZXQoMjAwKk1hdGguc2luKGkvaW1hZ2VzLmxlbmd0aCpNYXRoLlBJKjIpLCAwLCAyMDAqTWF0aC5jb3MoaS9pbWFnZXMubGVuZ3RoKk1hdGguUEkqMikpXHJcblx0XHRcdFx0XHRtZXNoLnJvdGF0ZVkoaS9pbWFnZXMubGVuZ3RoKk1hdGguUEkqMilcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jYW1lcmEuZGVncmVlID0gMDtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1MDA7XHJcblx0fVxyXG5cclxuXHRhbmltYXRlKCkge1xyXG5cdCAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxyXG5cclxuXHQgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDUwMCpNYXRoLmNvcyh0aGlzLmNhbWVyYS5kZWdyZWUqTWF0aC5QSS8xODApO1xyXG5cdCAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTAwKk1hdGguc2luKHRoaXMuY2FtZXJhLmRlZ3JlZSpNYXRoLlBJLzE4MCk7XHJcblx0ICAgIHRoaXMuY2FtZXJhLmRlZ3JlZSArPSAwLjFcclxuXHQgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcclxuXHJcblx0ICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKVxyXG5cdH1cclxufVxyXG5cclxubmV3IEFwcCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ltYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==