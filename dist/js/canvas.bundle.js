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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Dot.js":
/*!***********************!*\
  !*** ./src/js/Dot.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dot; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dot =
/*#__PURE__*/
function () {
  function Dot(x, y, r, g, b, imageX, imageY) {
    _classCallCheck(this, Dot);

    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.imageX = imageX;
    this.imageY = imageY;
  }

  _createClass(Dot, [{
    key: "draw",
    value: function draw(c) {
      c.beginPath();
      c.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      c.fillStyle = 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
      c.fill();
    }
  }]);

  return Dot;
}();



/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dot */ "./src/js/Dot.js");

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var img = document.querySelector('img');
canvas.width = innerWidth;
canvas.height = innerHeight;
addEventListener('load', function (e) {
  c.drawImage(img, 0, 0);
  var imageData = c.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;
  var dots = [];
  var pixels = [];

  for (var i = 0; i < imageData.length; i += 4) {
    if (imageData[i] === 0) continue;
    var x = i / 4 % img.naturalWidth;
    var y = Math.floor(Math.floor(i / img.naturalWidth) / 4);

    if (x % 5 === 0 && y % 5 === 0) {
      pixels.push({
        x: x,
        y: y,
        r: imageData[i],
        g: imageData[i + 1],
        b: imageData[i + 2]
      });
    }
  }

  pixels.forEach(function (pixel) {
    dots.push(new _Dot__WEBPACK_IMPORTED_MODULE_0__["default"](pixel.x, pixel.y, pixel.r, pixel.g, pixel.b, 0, 0));
  });
  c.clearRect(0, 0, innerHeight, innerWidth);

  function animate() {
    requestAnimationFrame(animate);
    dots.forEach(function (dot) {
      dot.draw(c);
      dot.x++;
    });
  }

  animate();
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map