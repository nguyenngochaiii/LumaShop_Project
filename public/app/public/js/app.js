/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/app/js/toggle.js":
/*!*********************************!*\
  !*** ./public/app/js/toggle.js ***!
  \*********************************/
/***/ (() => {

$(document).ready(function () {
  $('.cart-button').click(function () {
    $('.cart-wrap').toggleClass('active');
    $('.cart-container').toggleClass('active');
  });
  $('.close-button').click(function () {
    $('.cart-wrap').removeClass('active');
    $('.cart-container').removeClass('active');
  });
  $('.menu-button').click(function () {
    $('.navbar-menu-overlay').toggleClass('active');
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./public/app/js/app.js ***!
  \******************************/
__webpack_require__(/*! ./toggle */ "./public/app/js/toggle.js");
})();

/******/ })()
;