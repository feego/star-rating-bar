/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * Registration of polymer start-rating-bar custom element.
	 * ECMAScript 6 - using BabelJS traspiler.
	 */
	'use strict';
	
	Polymer('start-rating-bar', {
	    ready: function ready() {
	        for (var star = undefined, it = 0; it < 5; it++) {
	            star = document.createElement('core-icon');
	            star.setAttribute('icon', 'star');
	            this.$.container.appendChild(star);
	        }
	    },
	    classificationChanged: function classificationChanged() {
	        var classification = parseInt(this.classification);
	        if (classification > 5 || classification < 0) {
	            throw new Error('Classification must be an integer between 0 and 5.');
	        }
	
	        var it = 0,
	            container = this.$.container;
	        for (it; it < classification; it++) {
	            container.children[it].setAttribute('class', 'yellow');
	        }
	        for (it; it < 5; it++) {
	            container.children[it].removeAttribute('class', 'yellow');
	        }
	    }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map