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

var texures = ["img/p1.png", "img/p2.png", "img/p3.png", "img/p4.png", "img/p5.png"];

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

			var geometry = new THREE.Geometry();
			for (var j = 0; j < 1000; j++) {

				var vertex1 = new THREE.Vector3();
				vertex1.x = Math.random() * 3000 - 1500;
				vertex1.y = Math.random() * 2000 - 1000;
				vertex1.z = Math.random() * 1500;
				geometry.vertices.push(vertex1);
			}

			var parameters = [[[0.90, 0.05, 1], 15], [[1.0, 0.2, 1.0], 20], [[0.95, 0.1, 1], 18], [[0.85, 0, 0.8], 20], [[0.80, 0, 0.7], 16]];

			var _loop2 = function _loop2(i) {
				loader.load(texures[i], function (image) {
					var texure = new THREE.Texture(image);
					texure.needsUpdate = true;
					var color = parameters[i][0];
					var size = parameters[i][1];

					var material = new THREE.ParticleBasicMaterial({ size: size, map: texure, blending: THREE.AdditiveBlending, depthTest: false, transparent: true });
					material.color.setHSL(color[0], color[1], color[2]);
					var particle1 = new THREE.ParticleSystem(geometry, material);

					particle1.position.z = 1500 * i;

					particle1.rotation.x = Math.random() * 6;
					particle1.rotation.y = Math.random() * 6;
					particle1.rotation.z = Math.random() * 6;

					_this.scene.add(particle1);
				});
			};

			for (var i = 0; i < texures.length; i++) {
				_loop2(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2MwOTNkM2I2ZTdiMzMzZTU3OWM/NDVjOSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLmpzIl0sIm5hbWVzIjpbImltYWdlcyIsInRleHVyZXMiLCJBcHAiLCJhbmltYXRlIiwiYmluZCIsInNjZW5lIiwiVEhSRUUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0Q2xlYXJDb2xvciIsInNldFNpemUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJpbml0U2NlbmUiLCJsb2FkZXIiLCJJbWFnZUxvYWRlciIsInNldENyb3NzT3JpZ2luIiwiaSIsImxvYWQiLCJpbWFnZSIsInRleHVyZSIsIlRleHR1cmUiLCJuZWVkc1VwZGF0ZSIsImdlb21ldHJ5IiwiUGxhbmVHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJtYXAiLCJzaWRlIiwiRG91YmxlU2lkZSIsIm1lc2giLCJNZXNoIiwicG9zaXRpb24iLCJzZXQiLCJNYXRoIiwic2luIiwibGVuZ3RoIiwiUEkiLCJjb3MiLCJyb3RhdGVZIiwiYWRkIiwiR2VvbWV0cnkiLCJqIiwidmVydGV4MSIsIlZlY3RvcjMiLCJ4IiwicmFuZG9tIiwieSIsInoiLCJ2ZXJ0aWNlcyIsInB1c2giLCJwYXJhbWV0ZXJzIiwiY29sb3IiLCJzaXplIiwiUGFydGljbGVCYXNpY01hdGVyaWFsIiwiYmxlbmRpbmciLCJBZGRpdGl2ZUJsZW5kaW5nIiwiZGVwdGhUZXN0IiwidHJhbnNwYXJlbnQiLCJzZXRIU0wiLCJwYXJ0aWNsZTEiLCJQYXJ0aWNsZVN5c3RlbSIsInJvdGF0aW9uIiwiZGVncmVlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibG9va0F0IiwicmVuZGVyIl0s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UTJDLE1BQXZCLEVBQStCbkIsR0FBL0IsRUFBb0M7QUFBQSxXQUE1QkEsQ0FBNEI7QUFzQm5DOztBQUVELFFBQUtqQixNQUFMLENBQVkrRCxNQUFaLEdBQXFCLENBQXJCO0FBQ0EsUUFBSy9ELE1BQUwsQ0FBWWdDLFFBQVosQ0FBcUJnQixDQUFyQixHQUF5QixHQUF6QjtBQUNBOzs7NEJBRVM7QUFDTmdCLHlCQUFzQixLQUFLckUsT0FBM0I7O0FBRUEsUUFBS0ssTUFBTCxDQUFZZ0MsUUFBWixDQUFxQmEsQ0FBckIsR0FBeUIsTUFBSVgsS0FBS0ksR0FBTCxDQUFTLEtBQUt0QyxNQUFMLENBQVkrRCxNQUFaLEdBQW1CN0IsS0FBS0csRUFBeEIsR0FBMkIsR0FBcEMsQ0FBN0I7QUFDQSxRQUFLckMsTUFBTCxDQUFZZ0MsUUFBWixDQUFxQmdCLENBQXJCLEdBQXlCLE1BQUlkLEtBQUtDLEdBQUwsQ0FBUyxLQUFLbkMsTUFBTCxDQUFZK0QsTUFBWixHQUFtQjdCLEtBQUtHLEVBQXhCLEdBQTJCLEdBQXBDLENBQTdCO0FBQ0EsUUFBS3JDLE1BQUwsQ0FBWStELE1BQVosSUFBc0IsR0FBdEI7QUFDQSxRQUFLL0QsTUFBTCxDQUFZaUUsTUFBWixDQUFtQixJQUFJbkUsTUFBTThDLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBbkI7O0FBRUEsUUFBS3ZDLFFBQUwsQ0FBYzZELE1BQWQsQ0FBcUIsS0FBS3JFLEtBQTFCLEVBQWlDLEtBQUtHLE1BQXRDO0FBQ0g7Ozs7OztBQUdGLElBQUlOLEdBQUosRyIsImZpbGUiOiJpbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2MwOTNkM2I2ZTdiMzMzZTU3OWMiLCIvKiBnbG9iYWwgVEhSRUUgKi9cclxuXHJcbnZhciBpbWFnZXMgPSBbXHJcblx0XCJodHRwczovL3R1LmthZ2lybC5jbi9waWMvdmlldy8xLmpwZ1wiLFxyXG5cdFwiaHR0cHM6Ly90dS5rYWdpcmwuY24vcGljL3ZpZXcvMi5qcGdcIixcclxuXHRcImh0dHBzOi8vdHUua2FnaXJsLmNuL3BpYy92aWV3LzMuanBnXCIsXHJcblx0XCJodHRwczovL3R1LmthZ2lybC5jbi9waWMvdmlldy80LmpwZ1wiLFxyXG5cdFwiaHR0cHM6Ly90dS5rYWdpcmwuY24vcGljL3ZpZXcvNS5qcGdcIixcclxuXHRcImh0dHBzOi8vdHUua2FnaXJsLmNuL3BpYy92aWV3LzcuanBnXCIsXHJcblx0XCJodHRwczovL3R1LmthZ2lybC5jbi9waWMvdmlldy84LmpwZ1wiLFxyXG5cdFwiaHR0cHM6Ly90dS5rYWdpcmwuY24vcGljL3ZpZXcvOS5qcGdcIlxyXG5dXHJcblxyXG52YXIgdGV4dXJlcyA9IFtcclxuXHRcImltZy9wMS5wbmdcIixcclxuXHRcImltZy9wMi5wbmdcIixcclxuXHRcImltZy9wMy5wbmdcIixcclxuXHRcImltZy9wNC5wbmdcIixcclxuXHRcImltZy9wNS5wbmdcIlxyXG5dXHJcblxyXG5jbGFzcyBBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweDAwMDAwMCApO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1x0XHJcblxyXG5cdFx0dGhpcy5pbml0U2NlbmUoKTtcdFxyXG5cclxuXHRcdHRoaXMuYW5pbWF0ZSgpO1xyXG5cdH1cclxuXHJcblx0aW5pdFNjZW5lKCkge1xyXG5cdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpO1xyXG5cdFx0bG9hZGVyLnNldENyb3NzT3JpZ2luKFwiYW5vbnltb3VzXCIpXHJcblx0XHRmb3IobGV0IGk9MDsgaTxpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0aW1hZ2VzW2ldLFxyXG5cdFx0XHRcdChpbWFnZSkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHRleHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGltYWdlKVxyXG5cdFx0XHRcdFx0dGV4dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEwMCwgMTAwKS8vaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodClcclxuXHRcdFx0XHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7bWFwOiB0ZXh1cmV9KVxyXG5cdFx0XHRcdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRcdFx0XHRsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRcdFx0XHRtZXNoLnBvc2l0aW9uLnNldCgyMDAqTWF0aC5zaW4oaS9pbWFnZXMubGVuZ3RoKk1hdGguUEkqMiksIDAsIDIwMCpNYXRoLmNvcyhpL2ltYWdlcy5sZW5ndGgqTWF0aC5QSSoyKSlcclxuXHRcdFx0XHRcdG1lc2gucm90YXRlWShpL2ltYWdlcy5sZW5ndGgqTWF0aC5QSSoyKVxyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRmb3IobGV0IGogPTA7IGo8MTAwMDsgaisrKSB7XHJcblxyXG5cdFx0XHRsZXQgdmVydGV4MSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRcdHZlcnRleDEueCA9IE1hdGgucmFuZG9tKCkgKiAzMDAwIC0gMTUwMDtcclxuXHRcdFx0dmVydGV4MS55ID0gTWF0aC5yYW5kb20oKSAqIDIwMDAgLSAxMDAwO1xyXG5cdFx0XHR2ZXJ0ZXgxLnogPSBNYXRoLnJhbmRvbSgpICogMTUwMDtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaCh2ZXJ0ZXgxKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcGFyYW1ldGVycyA9IFsgXHJcblx0XHRcdFsgWzAuOTAsIDAuMDUsIDFdLCAxNSBdLFxyXG5cdFx0XHRbIFsxLjAsIDAuMiwgMS4wXSwgMjAgXSxcclxuXHRcdFx0WyBbMC45NSwgMC4xLCAxXSwgMTggXSxcclxuXHRcdFx0WyBbMC44NSwgMCwgMC44XSwgMjAgXSxcclxuXHRcdFx0WyBbMC44MCwgMCwgMC43XSwgMTYgXSxcclxuXHRcdF07XHJcblxyXG5cdFx0Zm9yKGxldCBpPTA7IGk8dGV4dXJlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsb2FkZXIubG9hZChcclxuXHRcdFx0XHR0ZXh1cmVzW2ldLFxyXG5cdFx0XHRcdChpbWFnZSkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHRleHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGltYWdlKVxyXG5cdFx0XHRcdFx0dGV4dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGxldCBjb2xvciA9IHBhcmFtZXRlcnNbaV1bMF07XHJcblx0XHRcdFx0XHRsZXQgc2l6ZSA9IHBhcmFtZXRlcnNbaV1bMV07XHJcblxyXG5cdFx0XHRcdFx0bGV0IG1hdGVyaWFsID0gIG5ldyBUSFJFRS5QYXJ0aWNsZUJhc2ljTWF0ZXJpYWwoIHsgc2l6ZTogc2l6ZSwgbWFwOiB0ZXh1cmUsIGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLCBkZXB0aFRlc3Q6IGZhbHNlLCB0cmFuc3BhcmVudCA6IHRydWUgfSApO1xyXG5cdFx0XHRcdFx0bWF0ZXJpYWwuY29sb3Iuc2V0SFNMKCBjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdICk7XHJcblx0XHRcdFx0XHRsZXQgcGFydGljbGUxID0gbmV3IFRIUkVFLlBhcnRpY2xlU3lzdGVtKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHBhcnRpY2xlMS5wb3NpdGlvbi56ID0gMTUwMCppO1xyXG5cclxuXHRcdFx0XHRcdHBhcnRpY2xlMS5yb3RhdGlvbi54ID0gTWF0aC5yYW5kb20oKSAqIDY7XHJcblx0XHRcdFx0XHRwYXJ0aWNsZTEucm90YXRpb24ueSA9IE1hdGgucmFuZG9tKCkgKiA2O1xyXG5cdFx0XHRcdFx0cGFydGljbGUxLnJvdGF0aW9uLnogPSBNYXRoLnJhbmRvbSgpICogNjtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLmFkZChwYXJ0aWNsZTEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2FtZXJhLmRlZ3JlZSA9IDA7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTAwO1xyXG5cdH1cclxuXHJcblx0YW5pbWF0ZSgpIHtcclxuXHQgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcclxuXHJcblx0ICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSA1MDAqTWF0aC5jb3ModGhpcy5jYW1lcmEuZGVncmVlKk1hdGguUEkvMTgwKTtcclxuXHQgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDUwMCpNYXRoLnNpbih0aGlzLmNhbWVyYS5kZWdyZWUqTWF0aC5QSS8xODApO1xyXG5cdCAgICB0aGlzLmNhbWVyYS5kZWdyZWUgKz0gMC4xXHJcblx0ICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XHJcblxyXG5cdCAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSlcclxuXHR9XHJcbn1cclxuXHJcbm5ldyBBcHAoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbWFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=