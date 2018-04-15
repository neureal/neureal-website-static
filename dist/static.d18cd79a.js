(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkRGRDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNTYsMzJDMTMyLjMsMzIsMzIsMTM0LjksMzIsMjYxLjdjMCwxMDEuNSw2NC4yLDE4Ny41LDE1My4yLDIxNy45YzEuNCwwLjMsMi42LDAuNCwzLjgsMC40CgljOC4zLDAsMTEuNS02LjEsMTEuNS0xMS40YzAtNS41LTAuMi0xOS45LTAuMy0zOS4xYy04LjQsMS45LTE1LjksMi43LTIyLjYsMi43Yy00My4xLDAtNTIuOS0zMy41LTUyLjktMzMuNQoJYy0xMC4yLTI2LjUtMjQuOS0zMy42LTI0LjktMzMuNmMtMTkuNS0xMy43LTAuMS0xNC4xLDEuNC0xNC4xYzAuMSwwLDAuMSwwLDAuMSwwYzIyLjUsMiwzNC4zLDIzLjgsMzQuMywyMy44CgljMTEuMiwxOS42LDI2LjIsMjUuMSwzOS42LDI1LjFjMTAuNSwwLDIwLTMuNCwyNS42LTZjMi0xNC44LDcuOC0yNC45LDE0LjItMzAuN2MtNDkuNy01LjgtMTAyLTI1LjUtMTAyLTExMy41CgljMC0yNS4xLDguNy00NS42LDIzLTYxLjZjLTIuMy01LjgtMTAtMjkuMiwyLjItNjAuOGMwLDAsMS42LTAuNSw1LTAuNWM4LjEsMCwyNi40LDMuMSw1Ni42LDI0LjFjMTcuOS01LjEsMzctNy42LDU2LjEtNy43CgljMTksMC4xLDM4LjIsMi42LDU2LjEsNy43YzMwLjItMjEsNDguNS0yNC4xLDU2LjYtMjQuMWMzLjQsMCw1LDAuNSw1LDAuNWMxMi4yLDMxLjYsNC41LDU1LDIuMiw2MC44YzE0LjMsMTYuMSwyMywzNi42LDIzLDYxLjYKCWMwLDg4LjItNTIuNCwxMDcuNi0xMDIuMywxMTMuM2M4LDcuMSwxNS4yLDIxLjEsMTUuMiw0Mi41YzAsMzAuNy0wLjMsNTUuNS0wLjMsNjNjMCw1LjQsMy4xLDExLjUsMTEuNCwxMS41YzEuMiwwLDIuNi0wLjEsNC0wLjQKCUM0MTUuOSw0NDkuMiw0ODAsMzYzLjEsNDgwLDI2MS43QzQ4MCwxMzQuOSwzNzkuNywzMiwyNTYsMzJ6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODgsMTkydi0zOC4xYzAtMTcuMiwzLjgtMjUuOSwzMC41LTI1LjlIMzUyVjY0aC01NS45Yy02OC41LDAtOTEuMSwzMS40LTkxLjEsODUuM1YxOTJoLTQ1djY0aDQ1djE5Mmg4M1YyNTYKCWg1Ni40bDcuNi02NEgyODh6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00ODAuNSwyNTFjMC0yNy43LTIyLjItNTAuMi00OS41LTUwLjJjLTEzLDAtMjQuNyw1LTMzLjYsMTMuM2MtMzIuNC0yMi44LTc2LjEtMzcuOC0xMjQuOS00MC42bDIxLjktNzMuMgoJbDY3LjEsMTMuNWMyLjMsMjIuNywyMS4yLDQwLjQsNDQuMyw0MC40YzAuMSwwLDAuMSwwLDAuMiwwczAuMSwwLDAuMiwwYzI0LjYsMCw0NC41LTIwLjIsNDQuNS00NS4xUzQzMC43LDY0LDQwNi4xLDY0CgljLTAuMSwwLTAuMSwwLTAuMiwwaC0wLjFjLTE3LjIsMC0zMiw5LjgtMzkuNSwyNC4zbC04OS43LTE4bC0zMC44LDEwM2wtMi41LDAuMWMtNTAuMywyLjItOTUuNSwxNy40LTEyOC43LDQwLjcKCWMtOC44LTguMy0yMC42LTEzLjMtMzMuNi0xMy4zYy0yNy4zLDAtNDkuNSwyMi41LTQ5LjUsNTAuMmMwLDE5LjYsMTEsMzYuNSwyNy4xLDQ0LjhjLTAuOCw0LjktMS4yLDkuOC0xLjIsMTQuOAoJQzU3LjUsMzg2LjQsMTQ2LjQsNDQ4LDI1Niw0NDhzMTk4LjUtNjEuNiwxOTguNS0xMzcuNWMwLTUtMC40LTkuOS0xLjEtMTQuOEM0NjkuNSwyODcuNCw0ODAuNSwyNzAuNSw0ODAuNSwyNTF6IE02NS44LDI3MS4xCgljLTYuNi00LjUtMTAuOS0xMi4xLTEwLjktMjAuOGMwLTEzLjgsMTEuMS0yNS4xLDI0LjctMjUuMWM1LjYsMCwxMC44LDEuOSwxNSw1LjFDODEuMSwyNDIuMiw3MS4xLDI1Niw2NS44LDI3MS4xeiBNMzg5LjMsMTA5LjEKCWMwLTkuMiw3LjQtMTYuOCwxNi41LTE2LjhzMTYuNSw3LjUsMTYuNSwxNi44YzAsOS4yLTcuNCwxNi44LTE2LjUsMTYuOFMzODkuMywxMTguNCwzODkuMywxMDkuMXogTTE1OC41LDI4OC40CgljMC0xNy42LDE0LjItMzEuOCwzMS44LTMxLjhzMzEuOCwxNC4yLDMxLjgsMzEuOGMwLDE3LjYtMTQuMiwzMS44LTMxLjgsMzEuOFMxNTguNSwzMDYsMTU4LjUsMjg4LjR6IE0yNTYsNDAwCgljLTQ3LjYtMC4yLTc2LTI4LjUtNzcuMi0yOS43bDEyLjYtMTIuNGMwLjIsMC4yLDIzLjcsMjQuMiw2NC42LDI0LjRjNDAuMy0wLjIsNjQuMi0yNC4yLDY0LjUtMjQuNGwxMi42LDEyLjQKCUMzMzEuOSwzNzEuNSwzMDMuNiwzOTkuOCwyNTYsNDAweiBNMzIyLjMsMzIwLjJjLTE3LjYsMC0zMS44LTE0LjItMzEuOC0zMS44YzAtMTcuNiwxNC4yLTMxLjgsMzEuOC0zMS44czMxLjgsMTQuMiwzMS44LDMxLjgKCUMzNTQuMSwzMDYsMzM5LjgsMzIwLjIsMzIyLjMsMzIwLjJ6IE00NDYuNCwyNzEuNWMtNS40LTE1LjMtMTUuNi0yOS40LTI5LjMtNDEuNGM0LjItMy4zLDkuNS01LjIsMTUuMi01LjIKCWMxMy45LDAsMjUuMSwxMS40LDI1LjEsMjUuNUM0NTcuNSwyNTkuMiw0NTMuMSwyNjYuOSw0NDYuNCwyNzEuNXoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OTIsMTA5LjVjLTE3LjQsNy43LTM2LDEyLjktNTUuNiwxNS4zYzIwLTEyLDM1LjQtMzEsNDIuNi01My42Yy0xOC43LDExLjEtMzkuNCwxOS4yLTYxLjUsMjMuNQoJQzM5OS44LDc1LjgsMzc0LjYsNjQsMzQ2LjgsNjRjLTUzLjUsMC05Ni44LDQzLjQtOTYuOCw5Ni45YzAsNy42LDAuOCwxNSwyLjUsMjIuMUMxNzIsMTc5LDEwMC42LDE0MC40LDUyLjksODEuNwoJYy04LjMsMTQuMy0xMy4xLDMxLTEzLjEsNDguN2MwLDMzLjYsMTcuMiw2My4zLDQzLjIsODAuN2MtMTYtMC40LTMxLTQuOC00NC0xMi4xYzAsMC40LDAsMC44LDAsMS4yYzAsNDcsMzMuNCw4Ni4xLDc3LjcsOTUKCWMtOC4xLDIuMi0xNi43LDMuNC0yNS41LDMuNGMtNi4yLDAtMTIuMy0wLjYtMTguMi0xLjhjMTIuMywzOC41LDQ4LjEsNjYuNSw5MC41LDY3LjNjLTMzLjEsMjYtNzQuOSw0MS41LTEyMC4zLDQxLjUKCWMtNy44LDAtMTUuNS0wLjUtMjMuMS0xLjRDNjIuOCw0MzIsMTEzLjcsNDQ4LDE2OC4zLDQ0OEMzNDYuNiw0NDgsNDQ0LDMwMC4zLDQ0NCwxNzIuMmMwLTQuMi0wLjEtOC40LTAuMy0xMi41CglDNDYyLjYsMTQ2LDQ3OSwxMjksNDkyLDEwOS41eiIvPgo8L3N2Zz4K"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxNy4yLDY0SDk2LjhDNzkuMyw2NCw2NCw3Ni42LDY0LDkzLjlWNDE1YzAsMTcuNCwxNS4zLDMyLjksMzIuOCwzMi45aDMyMC4zYzE3LjYsMCwzMC44LTE1LjYsMzAuOC0zMi45CgkJVjkzLjlDNDQ4LDc2LjYsNDM0LjcsNjQsNDE3LjIsNjR6IE0xODMsMzg0aC01NVYyMTNoNTVWMzg0eiBNMTU3LjQsMTg3SDE1N2MtMTcuNiwwLTI5LTEzLjEtMjktMjkuNWMwLTE2LjcsMTEuNy0yOS41LDI5LjctMjkuNQoJCXMyOSwxMi43LDI5LjQsMjkuNUMxODcuMSwxNzMuOSwxNzUuNywxODcsMTU3LjQsMTg3eiBNMzg0LDM4NGgtNTV2LTkzLjVjMC0yMi40LTgtMzcuNy0yNy45LTM3LjdjLTE1LjIsMC0yNC4yLDEwLjMtMjguMiwyMC4zCgkJYy0xLjUsMy42LTEuOSw4LjUtMS45LDEzLjVWMzg0aC01NVYyMTNoNTV2MjMuOGM4LTExLjQsMjAuNS0yNy44LDQ5LjYtMjcuOGMzNi4xLDAsNjMuNCwyMy44LDYzLjQsNzUuMVYzODR6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUwOC42LDE0OC44YzAtNDUtMzMuMS04MS4yLTc0LTgxLjJDMzc5LjIsNjUsMzIyLjcsNjQsMjY1LDY0Yy0zLDAtNiwwLTksMHMtNiwwLTksMAoJCWMtNTcuNiwwLTExNC4yLDEtMTY5LjYsMy42QzM2LjYsNjcuNiwzLjUsMTA0LDMuNSwxNDlDMSwxODQuNi0wLjEsMjIwLjIsMCwyNTUuOGMtMC4xLDM1LjYsMSw3MS4yLDMuNCwxMDYuOQoJCWMwLDQ1LDMzLjEsODEuNSw3My45LDgxLjVjNTguMiwyLjcsMTE3LjksMy45LDE3OC42LDMuOGM2MC44LDAuMiwxMjAuMy0xLDE3OC42LTMuOGM0MC45LDAsNzQtMzYuNSw3NC04MS41CgkJYzIuNC0zNS43LDMuNS03MS4zLDMuNC0xMDdDNTEyLjEsMjIwLjEsNTExLDE4NC41LDUwOC42LDE0OC44eiBNMjA3LDM1My45VjE1Ny40bDE0NSw5OC4yTDIwNywzNTMuOXoiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAMAAAAuj2TTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAAADzG8zzG8zzG8zzG8zzG8zzG8zzG8zzG8zzG8zzG8zzG8zzG89RkSxYAAAAMdFJOUwC43gwdzoVONGztnq30BrEAAAUqSURBVGje1ZrZoqMgDEANWwL4/987IFsCaDsv05H7cmuN5kA2Qo9jGYZ8tCoNCw6NPt45jIdwshHAmzdiRFv1t9aqSqQivQxDO5UVtw7JGK2NIfQXWIivMjCyl84olNYUM5190aL4PPfR7Owt25h/C0dMysLNvBNkxvdwuPuv3VtI4ifj8e8gyWri8y34vGT/Sbz6zPEV7M/0d0Uxo76a7OQnaoRm9KiXqoB+Zk++agjfCADjzcJKLhCpM/xkyXJMVXkiU5q4ppK8u/7u5pXCqVqeuWqAYOaAYX9RAtgKEms8Mq1aDHRvXJEJT3rDgvZvVyR5SHm9HyWvIDHYtEuoQXMQEZGv5/0QxDd1SG1J0mVrxpJ4AcKTz69BoEdVinlcKqpOkkNa93HqYaGBnPQEolMR/ZcV+CS+vWd6aAFJ5mJlEAVOYi6NG4i2zQs6SF+tBYQcpF0NOOIbBf6Jomsa+XgtLUbbdwwb8fQAdHANhzMILjlEw7CuYm5gmLujBBmRW4Lo2HeavaTOczSsNj8bdA/mrlR0dYl34um+8VpW4RYQtymyOklZD9C8UPETSJ8HAULshr5qyG8vwQXrQldV2pWt+Iir0pELSORmLtZEYXmcNaLiih0kYORuwkFMCRzKKh6mJYgbIFkUMPSnzeJbkF5nFBC7i/2FZHaCkhOhg9gylU17BlKuW69T2RKG9rcrcqWg0Ne3iEOqgUzZfTcZrwLElLNra8FxECU1XUjkt1rV2bVlnimMCWcgnllkmV3zEaSg0xA/WFLoxkUiImkGEvZlhbbbLJ9Aiq4VpGZRJ0GKzZtj9oxPIM60l7D6FM/tXsl26WeQI57CPI9eY0kQ5qEDZHo3tHs/gLi96iDjDZf20rR2INXdNisiTKtNTfazAeJWTS7jeAbpaxBPsfURNRy6mLJI9LSAbJ29xl2Z42vcYM6uB3L6f4DE0teLV+qK0IPRM4gX4BvxJNJdt4QGDgKb8MvLLrkmIvzyoJouTyDTwI8gIsHtxKsZs+E/JMSyHgqRR9emtJtBqsPb8AjycUWCeQKh/p4UgFNBGBaQqUQhJELV9K/Ga45tidKda7yZm5Zjo5ZSTyDjLbE0bmdxzcslE2eQbvXl4UHmDy0qyKtopBVEKwni9xFzAokSxJo15a/SwBsmAkRzJ9GDQ4tqhbq0PVaQmhc7CJ37LhiKekPdgdyIy+nBGYTvX8fUjqcWkvpZbqxY3PYCpNgaLtsK4nsxViJOpnUj7tfQJkCSbY0uD9qQB5h5f4J1EptLTiDNv6s2JZD5GtWgGXadp3x0ZNx5D3KJt45Mijgw0mx7p1uc/dLBsWOEPJZqJbQaiDcfOEgtaZo2hQuc9w6YY1TtLYA6H0D24jVheWOo5RMJkgz8ufmhXTmzyr0HYu0gpZdSoD1Iwy7g93rh0ijeg8wRGLn9qusojSXE1g7K/N826KI4hVg9ebDx5BWGi4aRZ1GWfbC0/xdxdtFN0rbtV744x/E8aaU9l50ipFei94jNfBQ/dkHoG9WUdtuZXn7aVF9gO5Tl4m2ra5OtxRDirAueuzpljp0T7tL6ZQ2w1gtOOdjNp8Lk0kUqnYTxUlorV9qJY5YuWjNX7rq4h/YiSxUvOCCB80MDOq8H/P8cJW745849vOKM+kp78SYKXxUavOWs3V0V6/Yb9Z5D3R7jrZtWxTgrMsEbBpUOY0QqZZo2hKVzCW/7YU1tHZ7Bpm0Y1G3YGfF43yBnZZljHR3vHDr/7qz88MyCp7cY1R+KsGX3bKsg3wAAAABJRU5ErkJggg=="

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailForm = function (_Component) {
  _inherits(EmailForm, _Component);

  function EmailForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmailForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmailForm.__proto__ || Object.getPrototypeOf(EmailForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EmailForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'email-form-flex' },
        _react2.default.createElement(
          'form',
          { action: 'https://neureal.us17.list-manage.com/subscribe/post', method: 'POST', noValidate: true },
          _react2.default.createElement(
            'div',
            { className: 'join' },
            'Join our community'
          ),
          _react2.default.createElement('input', { type: 'hidden', name: 'u', value: 'f8e938b21af569b682acfb96a' }),
          _react2.default.createElement('input', { type: 'hidden', name: 'id', value: 'f47cd5d841' }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'MERGE0' },
            _react2.default.createElement('input', { className: 'subscribe-input', placeholder: 'Email', type: 'email', name: 'EMAIL', id: 'MERGE0', value: this.state.emailValue,
              onChange: function onChange(e) {
                _this2.setState({ emailValue: e.target.value });console.log(e.target.value);
              }, autoCapitalize: 'off', autoCorrect: 'off' })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'MERGE1' },
            _react2.default.createElement('input', { className: 'subscribe-input', placeholder: 'First Name', type: 'text', name: 'FNAME', id: 'MERGE1', value: this.state.fNameValue,
              onChange: function onChange(e) {
                _this2.setState({ fNameValue: e.target.value });
              } })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'MERGE2' },
            _react2.default.createElement('input', { className: 'subscribe-input', placeholder: 'Last Name', type: 'text', name: 'LNAME', id: 'MERGE2', value: this.state.lNameValue,
              onChange: function onChange(e) {
                _this2.setState({ lNameValue: e.target.value });
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'subscribe-button' },
            _react2.default.createElement('input', _defineProperty({ className: 'subscribe-text', type: 'submit', value: 'Subscribe Now', name: 'subscribe', id: 'mc-embedded-subscribe' }, 'className', 'button'))
          )
        )
      );
    }
  }]);

  return EmailForm;
}(_react.Component);

exports.default = EmailForm;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/kyler.32044d4b.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brian.b24dadcc.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/nick.cce55bf5.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brian_sewell.c28806bf.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ethan.db579abb.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jake.e2e8d065.bin";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ben.248306f8.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app

// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactRouterDom.HashRouter,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(24);

__webpack_require__(25);

var _reactStatic = __webpack_require__(26);

var _SocialBar = __webpack_require__(27);

var _SocialBar2 = _interopRequireDefault(_SocialBar);

var _NavigationBar = __webpack_require__(29);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _MobileNav = __webpack_require__(30);

var _MobileNav2 = _interopRequireDefault(_MobileNav);

var _HomePage = __webpack_require__(33);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Footer = __webpack_require__(53);

var _Footer2 = _interopRequireDefault(_Footer);

var _RoadMap = __webpack_require__(55);

var _RoadMap2 = _interopRequireDefault(_RoadMap);

var _Team = __webpack_require__(56);

var _Team2 = _interopRequireDefault(_Team);

var _Blog = __webpack_require__(60);

var _Blog2 = _interopRequireDefault(_Blog);

var _BlogPosts = __webpack_require__(62);

var _BlogPosts2 = _interopRequireDefault(_BlogPosts);

var _News = __webpack_require__(63);

var _News2 = _interopRequireDefault(_News);

var _BlogPost = __webpack_require__(65);

var _BlogPost2 = _interopRequireDefault(_BlogPost);

var _BlogPost3 = __webpack_require__(66);

var _BlogPost4 = _interopRequireDefault(_BlogPost3);

var _BlogPost5 = __webpack_require__(67);

var _BlogPost6 = _interopRequireDefault(_BlogPost5);

var _BlogPost7 = __webpack_require__(68);

var _BlogPost8 = _interopRequireDefault(_BlogPost7);

var _BlogPost9 = __webpack_require__(69);

var _BlogPost10 = _interopRequireDefault(_BlogPost9);

var _BlogPost11 = __webpack_require__(70);

var _BlogPost12 = _interopRequireDefault(_BlogPost11);

var _BlogPost13 = __webpack_require__(71);

var _BlogPost14 = _interopRequireDefault(_BlogPost13);

var _BlogPost15 = __webpack_require__(72);

var _BlogPost16 = _interopRequireDefault(_BlogPost15);

var _BlogPost17 = __webpack_require__(73);

var _BlogPost18 = _interopRequireDefault(_BlogPost17);

var _BlogPost19 = __webpack_require__(74);

var _BlogPost20 = _interopRequireDefault(_BlogPost19);

var _BlogPost21 = __webpack_require__(75);

var _BlogPost22 = _interopRequireDefault(_BlogPost21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          'div',
          { className: 'overlay-body' },
          _react2.default.createElement(_SocialBar2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'main' },
            _react2.default.createElement(
              'div',
              { className: 'squeeze' },
              _react2.default.createElement(_NavigationBar2.default, null),
              _react2.default.createElement(_MobileNav2.default, null),
              _react2.default.createElement(
                _reactStatic.Switch,
                null,
                _react2.default.createElement(_reactStatic.Route, { component: _HomePage2.default, exact: true, path: '/' }),
                _react2.default.createElement(_reactStatic.Route, { component: _RoadMap2.default, path: '/roadmap' }),
                _react2.default.createElement(_reactStatic.Route, { component: _Blog2.default, path: '/blog' }),
                _react2.default.createElement(_reactStatic.Route, { component: _Team2.default, path: '/team' }),
                _react2.default.createElement(_reactStatic.Route, { component: _News2.default, path: '/news' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPosts2.default, path: '/what-is-neureal' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost2.default, path: '/blockchain-vs-bitcoin' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost4.default, path: '/crypto-wallet' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost6.default, path: '/crypto-community-moves-forward' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost8.default, path: '/when-does-decentralization-make-sense' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost10.default, path: '/how-to-choose-a-crypto-wallet' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost12.default, path: '/how-to-tell' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost14.default, path: '/machine-mind' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost16.default, path: '/expanding-the-mind' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost18.default, path: '/neureal-vitalik' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost20.default, path: '/how-crypto-is-changing' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPost22.default, path: '/blockchain-5-years' })
              )
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialBar = function SocialBar() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        'div',
        { className: 'main-nav' },
        _react2.default.createElement(
          'div',
          { className: 'social-background-nav' },
          _react2.default.createElement(
            'div',
            { className: 'squeeze' },
            _react2.default.createElement(
              'span',
              { className: 'social-icons-container' },
              _react2.default.createElement(
                'a',
                {
                  href: 'mailto:info@neureal.net', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'email-nav',
                  src: __webpack_require__(28),
                  fill: 'white',
                  alt: 'github'
                })
              ),
              _react2.default.createElement(
                'p',
                { className: 'email-nav-margin' },
                'info@neureal.net'
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/neureal', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'social-icons',
                  src: __webpack_require__(2),
                  fill: 'white',
                  alt: 'github'
                })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://www.facebook.com/NeurealAI', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'social-icons',
                  src: __webpack_require__(3),
                  fill: 'white',
                  alt: 'facebook'
                })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://www.reddit.com/r/Neureal/', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'social-icons',
                  src: __webpack_require__(4),
                  fill: 'white',
                  alt: 'reddit'
                })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://twitter.com/neurealai', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'social-icons',
                  src: __webpack_require__(5),
                  fill: 'white',
                  alt: 'twitter'
                })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://www.linkedin.com/company/neureal/', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'social-icons',
                  src: __webpack_require__(6),
                  fill: 'white',
                  alt: 'linkedin'
                })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'social-icons',
                  src: __webpack_require__(7),
                  fill: 'white',
                  alt: 'youtube'
                })
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', target: '_blank' },
                _react2.default.createElement('img', {
                  className: 'telegram-logo',
                  src: __webpack_require__(8),
                  alt: 'telegram' })
              )
            )
          )
        )
      )
    )
  );
};

exports.default = SocialBar;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY3LDE0OC43YzExLDUuOCwxNjMuOCw4OS4xLDE2OS41LDkyLjFzMTEuNSw0LjQsMjAuNSw0LjRzMTQuOC0xLjQsMjAuNS00LjRTNDM2LDE1NC41LDQ0NywxNDguNwoJCWM0LjEtMi4xLDExLTUuOSwxMi41LTEwLjJjMi42LTcuNi0wLjItMTAuNS0xMS4zLTEwLjVIMjU3SDY1LjhjLTExLjEsMC0xMy45LDMtMTEuMywxMC41QzU2LDE0Mi45LDYyLjksMTQ2LjYsNjcsMTQ4Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDU1LjcsMTUzLjJjLTguMiw0LjItODEuOCw1Ni42LTEzMC41LDg4LjFsODIuMiw5Mi41YzIsMiwyLjksNC40LDEuOCw1LjZjLTEuMiwxLjEtMy44LDAuNS01LjktMS40CgkJbC05OC42LTgzLjJjLTE0LjksOS42LTI1LjQsMTYuMi0yNy4yLDE3LjJjLTcuNywzLjktMTMuMSw0LjQtMjAuNSw0LjRzLTEyLjgtMC41LTIwLjUtNC40Yy0xLjktMS0xMi4zLTcuNi0yNy4yLTE3LjJMMTEwLjcsMzM4CgkJYy0yLDItNC43LDIuNi01LjksMS40Yy0xLjItMS4xLTAuMy0zLjYsMS43LTUuNmw4Mi4xLTkyLjVjLTQ4LjctMzEuNS0xMjMuMS04My45LTEzMS4zLTg4LjFjLTguOC00LjUtOS4zLDAuOC05LjMsNC45CgkJYzAsNC4xLDAsMjA1LDAsMjA1YzAsOS4zLDEzLjcsMjAuOSwyMy41LDIwLjlIMjU3aDE4NS41YzkuOCwwLDIxLjUtMTEuNywyMS41LTIwLjljMCwwLDAtMjAxLDAtMjA1CgkJQzQ2NCwxNTMuOSw0NjQuNiwxNDguNyw0NTUuNywxNTMuMnoiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "navigation" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" },
            _react2.default.createElement("img", { src: __webpack_require__(9), alt: "logo", className: "logo" })
          ),
          _react2.default.createElement(
            "nav",
            { className: "nav-menu" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog" },
              _react2.default.createElement(
                "span",
                { className: "nav-menu__item" },
                "Blog"
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/team" },
              _react2.default.createElement(
                "span",
                { className: "nav-menu__item" },
                "Team"
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/news" },
              _react2.default.createElement(
                "span",
                { className: "nav-menu__item" },
                "News"
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/" },
          _react2.default.createElement(
            "div",
            { className: "mobile-logo-container" },
            _react2.default.createElement("img", { src: __webpack_require__(9), alt: "logo", className: "mobile-logo" })
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(_react.Component);

exports.default = NavigationBar;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileNav = function (_Component) {
  _inherits(MobileNav, _Component);

  function MobileNav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MobileNav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MobileNav.__proto__ || Object.getPrototypeOf(MobileNav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sideMenuOpen: false,
      hamburgerAnimate: false
    }, _this.slideOpenSideMenu = function () {

      _this.setState({
        sideMenuOpen: !_this.state.sideMenuOpen
      });
    }, _this.animateHamburger = function () {
      _this.setState({
        hamburgerAnimate: !_this.state.hamburgerAnimate
      });
    }, _this.closeMenu = function () {
      _this.setState({
        sideMenuOpen: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MobileNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'menu-icon', onClick: this.slideOpenSideMenu.bind(this) },
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null)
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.sideMenuOpen ? 'sidebar-active' : 'sidebar' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', onClick: this.closeMenu.bind(this) },
            _react2.default.createElement(
              'a',
              null,
              _react2.default.createElement('img', { src: __webpack_require__(31), alt: 'logo', className: 'logo' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'menu' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/blog', onClick: this.closeMenu.bind(this) },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  null,
                  'Blog'
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/team', onClick: this.closeMenu.bind(this) },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  null,
                  'Team'
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/News', onClick: this.closeMenu.bind(this) },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  null,
                  'News'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { className: 'sidebar-image', src: __webpack_require__(32), alt: 'logo' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'social-icon' },
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/neureal', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-mobile',
                src: __webpack_require__(2),
                fill: 'white',
                alt: 'github'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.facebook.com/NeurealAI', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-mobile',
                src: __webpack_require__(3),
                fill: 'white',
                alt: 'facebook'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.reddit.com/r/Neureal/', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-mobile',
                src: __webpack_require__(4),
                fill: 'white',
                alt: 'reddit'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://twitter.com/neurealai', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-mobile',
                src: __webpack_require__(5),
                fill: 'white',
                alt: 'twitter'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/company/neureal/', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-mobile',
                src: __webpack_require__(6),
                fill: 'white',
                alt: 'linkedin'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-mobile',
                src: __webpack_require__(7),
                fill: 'white',
                alt: 'youtube'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'telegram-icon-mobile',
                src: __webpack_require__(8),
                alt: 'telegram' })
            )
          )
        ),
        _react2.default.createElement('div', { className: this.state.sideMenuOpen ? 'background-mobile' : 'none', onClick: this.closeMenu.bind(this) })
      );
    }
  }]);

  return MobileNav;
}(_react.Component);

exports.default = MobileNav;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAA+CAMAAAA1S/atAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAAAP///////////////////////////////////////////////649SjkAAAAMdFJOUwDTujGd5oIeaQxN9CHcseAAAAYFSURBVGje5ZvrlqQoDIArEAJE3/95t7ygJASK3p2zp9rh10xrIR+5B329OiMyOQhhCeCQOL/+kpETwirG4sj/BeCRltUawE8HdxdrcPgeDu6dSE9WdTwhkf1t39Gn0wCWx0qeww7oUuvWPB7X8Jke7xA59BxaOgT/QH+XYQi+DXqmxcddoenDTTBx068j3/04zxkFPU7mYcaFpaexb4oMc847PcvecZ78ZH+Kn+ctaMXp2zdHH34zL60LVS7uJ2J02tyZKFlK4yl9qY6f68efOq4c5F5hJ8lNP7Gj/2/sYRx20Wy568nE5/CfzR1VYGwVJ4evjAZ5X24o6stVQnfk6p915pJyLKWeErA/KoKvQw8F3d+gWJXnY3ZfM8XOb74eHW9VdeuInUmZd9ToSrm/HX0zVFcFuS670PEdixp0ae7fjp7q3IxhG24x2PFyi1f+F1p0kR18OzoauXt2DftRr4L8g2/QBaiNHhO9R2pCofejP8TSFc4scwV/TGeFpMhpHxxtdDA9Gip2bPbC39oSO2ZiofvLnyxJ7zbqJbhcbzRfWfS9bQy9rmmkqqvsvIHuO7UICiGSYQH3ngl05Q8UunCkdcMH9PxU/5aLIwHRLPFBtIyzys07Fwt66lXptZxpNeSHl/5L9NvVNehet7lVagDNJkXZHgLRGU5qthA7eywvFnTsFi5F7jmb5Ntyllyjp/M+6KH7tsHvu+hQXz9mZhZN8dTMVjkt154jaHQnH2iwWw6sPNnLdUsr0ej5VE/H0RcbLYudQndFv+M9+1svffQpaIs89iVAdYyQFDoMog+OyHdrYrVuEJmNQkdh4CwWO4VeVhKrjSyekPQhCSP548ZyqgIKPYxSVjTUxXDx97q9sGGJzsq1cS32afTLketoS4MkgoRnKejLMFsHM1W5BaXRi/0tsUVHnepiJadZdJKV56pjxBq7DYbrxxU6fWq827tpootgINDjXSqKWhd+gk7KllH3zTowXK9kSuFvP2k0a70tsioRFOjJzAyKgsyhg1YZHuaO72xuSxu9ujbj5mrv4l4zbq7qW7B64DFXeLvjY8TMVXybQ2d92cV7OpQyyum2VnQW+iC4ffDwRnB71UHHS3RcO2MeHSwvpMYSjZggEeqUJv+ruE6XU1HrTkU759B5Gh0n0M8lufUzeuo2Y7FEE3Ymu05kofll+MNSx2mpl0RvAeccdNB75cur5kWL3fXzkWDsNZXFyBFw3sNTix7UbCHdjcf3D86k4cwdFfq2TNVWcttWhdUQmTNjW7vuuLToqa2u1Gwy9IUWPTWSwcH5UF3NRBNd+zlvFt8te1XytSLjFn3csok6cfLrGH141I/6oo1OKjwmu+3QsLtR7WGFRVgHx9hRp+D4Ad330g0z6JtxXbaVJToO+jZR/VvHSNegp04tUB0L3Chx/YA+1PgGHU30bQ6RocOgIyubB36AnoNGPx3A3XSKLtyvrxSvmmX7pY/OOrVlCGVuNCvYFp015d7nI2I7t4u9Iwiw0ub6tnMBIR21DQkxF2UL78wzoW5lWJZdTHDvV2bGijYJ2V1vxDXou5inzlmrY0kad5dqGNcaATgIupsF/aDfcWrhDt6lHwHCfN4ZbGJyvZTGEnv/HL6ognQQNroRFbDfNdLtpuTGcV2eEOqaVjclQ4sOlzR+dg4ORi3hOtU+2o5fGb66RrItmczokF2HXD+IDj+D9brgkuEPXqo4JkZt123Y2h8oJ/a1pGQnvpZ7Ov+HtYANzUx13ihe+eNFPAbrBlHdy0/roH6zkyVJFImsCJsTNi9bRDoMM2DrX9J+CdJpXVjtJqOdEfjz/XUgLTveM9LFcWnV5Xq5sXZA02djPPeG3eDQ611f5+6l/Oemi/6zLu+WP+fqjszoQS/O+ekzUV7nd+kXsUOc8nDfd27838YuzfDJhPGB5OVEzI28DC+P03aRHXXJPDz4A5izYWxE3HeIduvHTwV+tdKfyRYkESmjx2Xqdbrf7e2u1BCQthdRCF2wUu5HSt512rwUX48fHp1+/yFg+lu+a82M29e82wB45get/wDXCJ5obQCiCgAAAABJRU5ErkJggg=="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _EmailForm = __webpack_require__(10);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

var _LearnMore = __webpack_require__(34);

var _LearnMore2 = _interopRequireDefault(_LearnMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import CountdownTimer from './CountdownTimer';

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'flex' },
                        _react2.default.createElement(
                            'div',
                            { className: 'column column__one-third' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'content__title' },
                                'What is Neureal?'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'content__paragraph' },
                                'A limitless and infinitely scalable ability to forecast the future.',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null),
                                ' That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly gives rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft. Our architecture is capable of predicting a heart attack accurately enough to save a life; predict a hurricane accurately enough to move vulnerable people out of harm\u2019s way, predict traffic and human patterns accurately enough for companies like Lyft to adjust actions and add to their bottom line. From complicated to simple, Neureal\u2019s impact is far-reaching.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'home-button-flex' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://drive.google.com/file/d/1foF_O3EBGk6h6tCCx9NPZuUhNUmGLpMv/view?usp=drivesdk', target: '_blank' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'learn-more-button' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'learn-more' },
                                            'WHITEPAPER'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://drive.google.com/file/d/1GGL177_u3zs4nfQYbLpjhVGLSy9G0lLM/view?usp=sharing', target: '_blank' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'roadmap-button' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'road-map' },
                                            'ROADMAP'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'column column__two-thirds' },
                            _react2.default.createElement('img', { src: __webpack_require__(38), alt: '', className: 'content__image' })
                        )
                    ),
                    _react2.default.createElement(
                        'h1',
                        { className: 'content__quote' },
                        '"Top 20 Most Promising Artificial Intelligence Solution Providers',
                        _react2.default.createElement('br', null),
                        ' 2017\u2013CIOReview"'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'flex-columns' },
                        _react2.default.createElement(
                            'div',
                            { className: 'info-box' },
                            _react2.default.createElement(
                                'div',
                                { className: 'info-box-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: '.column-half' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info-subtitle-flex' },
                                        _react2.default.createElement('img', {
                                            className: 'info-icon',
                                            src: __webpack_require__(39),
                                            fill: 'white',
                                            alt: 'github'
                                        }),
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'content__title' },
                                            'Accuracy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'content__paragraph' },
                                        'Prediction is worthless without accuracy. Our ability to harness compute via blockchain technology, coupled with the ability to create predictors out of novice users creates unsurpassed accuracy.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'info-box' },
                            _react2.default.createElement(
                                'div',
                                { className: 'info-box-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: '.column-half' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info-subtitle-flex' },
                                        _react2.default.createElement('img', {
                                            className: 'info-icon',
                                            src: __webpack_require__(40),
                                            fill: 'white',
                                            alt: 'github'
                                        }),
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'content__title' },
                                            'Proven'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'content__paragraph' },
                                        'Folding@home + Bitcoin. Community is far more powerful than individual effort, whether measured inside company structures or global neighborhoods.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'padding-header-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'info-box' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'info-box-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: '.column-half' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'info-subtitle-flex' },
                                            _react2.default.createElement('img', {
                                                className: 'info-icon-card',
                                                src: __webpack_require__(41),
                                                fill: 'white',
                                                alt: 'github'
                                            }),
                                            _react2.default.createElement(
                                                'h1',
                                                { className: 'content__title' },
                                                'Incentivized'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'content__paragraph' },
                                            'Adding the ability to pay and get paid within an open-source governance incentivizes and rewards all participants, no matter what role they play inside the organism.'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'as-seen-caption' },
                            'As seen in'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'as-seen-container' },
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(42), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(43), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(44), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(45), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(46), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(47), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(48), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(49), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(50), alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: __webpack_require__(51), alt: 'team' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'grid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'video-container' },
                            _react2.default.createElement(
                                'video',
                                { className: 'video-neureal', controls: true },
                                _react2.default.createElement('source', { src: __webpack_require__(52), type: 'video/mp4' }),
                                ' Your browser does not support the video tag.'
                            )
                        )
                    ),
                    _react2.default.createElement(_LearnMore2.default, null)
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = HomePage;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LearnMore = function (_Component) {
    _inherits(LearnMore, _Component);

    function LearnMore() {
        _classCallCheck(this, LearnMore);

        return _possibleConstructorReturn(this, (LearnMore.__proto__ || Object.getPrototypeOf(LearnMore)).apply(this, arguments));
    }

    _createClass(LearnMore, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "content" },
                    _react2.default.createElement(
                        "div",
                        { className: "flex-reverse" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement(
                                "div",
                                { className: "padding-image" },
                                _react2.default.createElement("img", { src: __webpack_require__(35), alt: "", className: "content__image" })
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Breakthrough."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "Neureal\u2019s solution is a breakthrough because it is Limitless. The network\u2019s architecture allows users to ask Neureal about the future the same way we ask Google about the present and the past\u2013with the same confidence we have in the results of Google\u2019s algorithms and first page. This limitless ability creates not only the avoidance of bad things, but the ability to be a first-mover\u2013true time travelers who can see different possible futures, make informed decisions to affect the present through actions, and impact the future one decision at a time. Whether users are companies or governments or individuals, actions based on accurate predictions will have profound impacts across every industry, topic, and social good."
                            ),
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Impact."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "We are giving everyone the ability to matter, to make a difference in the world on a grand scale. Users will be able to predict anything they\u2019re passionate about, from hurricane paths to the extinction of a species, to climate change, to medical advances. And, of course\u2026 Bitcoin prices."
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "flex" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Decentralized."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "There is no centralized system that can be more accurate\u2013not Facebook, not Google\u2013they cannot harness the massive and raw amounts of data needed to surpass what Neureal\u2019s architecture allows. We will always be one step ahead in size and accuracy. Bitcoin itself proved the power of community, creating a distributed computing platform that is 1,000,000 times faster than the largest centralized supercomputer in the world."
                            ),
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Timeless."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "Data science continues to hit limitations. Neureal\u2019s ability to be agnostic to the algorithms used allows the system to be forever adaptable."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: __webpack_require__(36), alt: "", className: "content__image" })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "flex-reverse" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: __webpack_require__(37), alt: "", className: "content__image" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "div",
                                { "learn-more-flex": true },
                                _react2.default.createElement(
                                    "h1",
                                    { className: "content__title" },
                                    "Beyond AlphaGO."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { className: "content__paragraph" },
                                    "Humans are the unknown. Their patterns constantly change. The only way to account for this \u201Chuman-factor\u201D is by forecasting black swans, allowing humans to foresee outcomes and shift their actions, preventing the bad and capitalizing on the good."
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "learn-more-padding" },
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "content__title" },
                                        "Efficiency of Data."
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        { className: "content__paragraph" },
                                        "By giving Neureal raw data, the AI is allowed the freedom to do the right thing for itself beyond the constraints of human decision-making on the front end."
                                    ),
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "content__title" },
                                        "Limitless. Without limits. Beyond today."
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        { className: "content__paragraph" },
                                        "Neureal gives humans the power to become limitless by predicting the future of anything."
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LearnMore;
}(_react.Component);

exports.default = LearnMore;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_5.015f8bc8.gif";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_2.8111c5ce.gif";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_4.14236c39.gif";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_1.74ffc125.gif";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwQThFMTt9Cjwvc3R5bGU+CjxnIGlkPSJJY29uIj4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNTYsMTc2Yy00NCwwLTgwLDM2LTgwLDgwYzAsNDQsMzYsODAsODAsODBjNDQsMCw4MC0zNiw4MC04MEMzMzYsMjEyLDMwMCwxNzYsMjU2LDE3NnogTTQ0Ni45LDIzNC43CgkJCWMtOS42LTg4LjUtODEuMS0xNjAtMTY5LjYtMTY5LjZWMzJoLTQyLjd2MzMuMWMtODguNSw5LjYtMTYwLDgxLjEtMTY5LjYsMTY5LjZIMzJ2NDIuN2gzMy4xYzkuNiw4OC41LDgxLjEsMTYwLDE2OS42LDE2OS42VjQ4MAoJCQloNDIuN3YtMzMuMWM4OC41LTkuNiwxNjAtODEuMSwxNjkuNi0xNjkuNkg0ODB2LTQyLjdMNDQ2LjksMjM0LjdMNDQ2LjksMjM0Ljd6IE0yNTYsNDA1LjNjLTgyLjEsMC0xNDkuMy02Ny4yLTE0OS4zLTE0OS4zCgkJCWMwLTgyLjEsNjcuMi0xNDkuMywxNDkuMy0xNDkuM2M4Mi4xLDAsMTQ5LjMsNjcuMiwxNDkuMywxNDkuM1MzMzguMSw0MDUuMywyNTYsNDA1LjN6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwQThFMTt9Cjwvc3R5bGU+CjxnIGlkPSJJY29uXzI0XyI+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTY4LjUsMjE1LjVsLTI5LjksMjkuOWw5Niw5Nkw0NDgsMTI4bC0yOS45LTI5LjlMMjM0LjcsMjgwLjVMMTY4LjUsMjE1LjV6IE00MDUuMyw0MDUuM0gxMDYuN1YxMDYuN0gzMjBWNjQKCQkJSDEwNi43QzgzLjIsNjQsNjQsODMuMiw2NCwxMDYuN3YyOTguN2MwLDIzLjUsMTkuMiw0Mi43LDQyLjcsNDIuN2gyOTguN2MyMy41LDAsNDIuNy0xOS4yLDQyLjctNDIuN1YyMzQuN2gtNDIuN1Y0MDUuM3oiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwQThFMTt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1Miw5Nkg2MGMtMTUuNSwwLTI3LjksMTIuNS0yOCwyOGwwLDB2MC4zdjI2My40djAuM2wwLDBjMC4yLDE1LjUsMTIuNSwyOCwyOCwyOGgzOTJjMTUuNiwwLDI4LTEyLjcsMjgtMjguMwoJCWwwLDBWMTI0LjNsMCwwQzQ4MCwxMDguNyw0NjcuNiw5Niw0NTIsOTZ6IE03Ny4xLDEyOGgzNTcuN2M2LjksMCwxMi4xLDUuMSwxMy4xLDEydjIwSDY0di0yMC4zQzY1LDEzMi45LDcwLjMsMTI4LDc3LjEsMTI4egoJCSBNNDM0LjksMzg0SDc3LjFjLTYuOSwwLTEyLjEtNC45LTEzLjEtMTEuN1YyNTZoMzg0djExNkM0NDcsMzc4LjksNDQxLjcsMzg0LDQzNC45LDM4NHoiLz4KCTxyZWN0IHg9Ijk2IiB5PSIzMDQiIGNsYXNzPSJzdDAiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTYiLz4KCTxyZWN0IHg9Ijk2IiB5PSIzMzYiIGNsYXNzPSJzdDAiIHdpZHRoPSI5NiIgaGVpZ2h0PSIxNiIvPgoJPHJlY3QgeD0iMzUyIiB5PSIzMDQiIGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0OCIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCACoASwDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgcDAgH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/9oADAMBAAIQAxAAAAHODxvpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFrH1mRu86R4XNfyXzG0lV2NNJjdI5Zzf6mwK9VzC2GUuwSIPSeZIWCbf9hlofjNr2/X3qMNPN7e/wCal3Hy/wB+I2eH1O9e8oLOm6Kc+s4thG2iFesAADcZC0sdHkQqPR1kbtFOy9jb59Do/LK17d1gemc97X67TnnQyHKwG/nRhd5zzo8NFLktBJ5O4rbXO24c7vqu2hfKwFhsJV5P1kTI2YefeUle7dc16RzieX8Gf1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAqEAACAgECBAUEAwAAAAAAAAADBAIFAQAGEhMUFREiMDI1EDM0gCMkJf/aAAgBAQABBQL9NB17RIMKmX0JBko2Fir5CgyaBFyi+ggELDUcZlLtjmirFEXtjmsrlieVc3GMa1uUe1uaYVOviNc3KPa3NMKHXjCuanAypgz7a3oCZ2ImSYAMQ5FJ2xzXDnjlXNRj6G2M+ZvOZNbflnFipjBrK+Az1PWZnXapuAEHgdM3rbbGrAPIcpo+FeUeRmuJ5hrbmf6YYEKQzeTJbZ+zCMynI3kiG2PaFbLLLzfP1RfJ7hz/AKOqk2HkOmJ1VkbHo7X97P5ND8l4ZzNK8zHDqizyqAOpbmFnue5AeMNIH6du7T57S7mO+tLYxdmJkxtt/iIPi52tsfaQfFFvW1/at0jy7QJrGovk9wfJaSYkqzbcC8PRqHMJsuphYMLIa6FZOI3JJDnmBx16Si+BJ5j518ilVMByCehWMcU0c5jK2fGSt1TctVYld4SKAStbR8tUJq7+SS4la+i4FRyiRd+wiu8tUB5DtssNphJAcD5jllu15TCP6t//xAAvEQABAwICCQMDBQAAAAAAAAADAQIRAAQhMQUSExRBUWGRoULR8CBgsSIkM8Hh/9oACAEDAQE/Afs4NwV9y8KxDfnOtuVpXo6Iak/nr0oNwUrGkbCovir+6W2HrNSVpj0I1HN40C5M64cAkYefNWd4Q5HjdH6fnOi3hx228Ydl961jo9EVUXn8mh3J3lIOUTU6f7VzcnBbqVYlK2xnORjInjhl5pbgu97DCIn5jV/cFt27RkRxp5Xq9rRKmP47/TrbveveTJyJjTXqriHamEYdYmiAGj0JZyj5y9+VL+5K7VXBEjLvyrRJYatu705dUrSLCMKw4c8u9XNq4JmIL1Jqr71pdES21G0MgBOkWKujnUBLcG2mSxGdaQOh7V6N598qG/ciJCyx/hacZiX6P4asVvAz6zPTGNaG/iWc/wCuH3F//8QAJREAAgICAQMDBQAAAAAAAAAAAQIAEQMSIQQiMhMgYDFBUWFx/9oACAECAQE/AfhzKoQNNQQKjIqmpiTc8wijRjIugYTJjCgGDGpfWdtQooUH8xEVmqaqOTNF02mJVc0YFFEt7fPGAJXAUwMarJ9J4ATOvOwmEggq0Rwynb+zp/O4QzDu+07gq1MS6uLhHqD9iBT6VTUrzOo8vkX/xAA1EAABAwIDBAgFAwUAAAAAAAABAAIDERIEITEQEzNBIiNRYXFygZEUMEKxwWKA8DJDUqHR/9oACAEBAAY/Av2aB7IiWnvCG+ZbXvQfHFc096AmbaSro4XFvbonbyNzbda7HujYXNZm7u2Bo1OS4B9wmxyNo92gquAfdbkt6zsqi50JAGdahAthJB71wD7hAzRltUHNhJB7wuAfcIGaMtBQcyIlpz1Ca2VlrnaZrgmniFdDHcNNVfLHa3xQYwVcVwD7hW/VWiLjF0RnWo+TiByyUxOt5TQOYKj3uYc/NGQhzofppyT8PK4kggs2R4Zw6yVm9P8AxSRcgcvDY/DuP6mqWPvyTI5HdJwup2NToj/U02qHCA5QsFfFTeb8IMjqXlRxSFznsdUE9inHeFYypc45JsEhc5zX1BPZRYj0Ur5HWxNJL3pscXQw7MmtUXr9kfKNkmFmPSAp6L4enWXWpmFiPUw5eY8z8nEeAUvnKZ4H7I21qM8kG4pt362p2Iwtt4zy5+Kjj5E5+C+KG7ydkN4NFHiG+U7IpOQOfgsM5v1mw/z3WXCPUhCZ3DDd670/gT5HauNVP5vwrXYeCK4EXtypsn8QgH4eCOuV7RSmzEen5U2EY0stPr5k6KTUf7UXr9k7wGxko5ajtCOMj40jbGns7/lVfw3ChTpsNioKPzLXOopHCZs2JcLW2aNTHScOhu9ldhsTCYzye60hSxMkbLPJ/jo1Yg7+DfyNtaN4MhzVuVa01Xw2Jnhupbk8ZditL2P72OrsreN+0WAVzQI1Cbu3NvlpUA6bHtmnhq41oHhGzFYUt5VkUw38UsshA6B0Cfvp4QXnS8I7vFYYt5VkU/XxSTPoKMdoKqQzTQi+lBeEDDLHW6rXB4p6pt00DJwMumPZCSWaANZX+4M1vYcVh9KEOemPxGKw9rTWgfqpKOYLnE1caBMiixENzSPrH7XP/8QAJxABAAIBAgUEAwEBAAAAAAAAAQARITFBEFFhkbFxodHwMIHBgPH/2gAIAQEAAT8h/wAaCLWxPkgL2osMZFoEHzNrXSx8QIwaKrelxrQDBVXpwHYNhs+nA1bSh1nWfT5Jgq7A3an/ADXzDNZtYvOkNwdlod4AWrEGfefVP7BVOJdZhqCsTId59U/sVO1C1rC2rRPkmwsJGYmW9Ri8xqg21CPFluibE5l1OcPr8kTTMMF7xaYFsKu/4WyNDrvFJteWKxgz1xf8hRre2+YisktkGtOkEKy3PqLwWcWs5ODszH+SRpwdzAGbbmePeM9oX9DkjWqkXymkGy005tywlIz1ZGrtow6RsODmJUD0Lp3jczBi/UGYSi95dgP19LvG1bX/AHLFHvtnzMZI8v3esaVbnmiJrgA4MFc9u7X9fE7PnXn6QWXDP6mfw/Q9Z9rz4dCgqzoVvEL0xufsjygW2OGw5y4956WWJo0t2HiteUEvdZTls+e/DJvlmGJzPZ3vt7Jqmgp2o09/Mx4/bfWNaDv9zDchpKELY68PruTBArc47+HuZKwipbln+oJNb+w5k9v5p9Ny4WM513giImh1jyrH4mBrhepyYUsmZh3iEok7u1bi8hRtuXxNtEP2kMw91deKtd5Xh3EDm5sUd6slK7wMPbkqX4YnPIgB4X/1WTQa9IodNY9YQuLVB1R8cCQ+eKipSt9AGBihIWhvEwcggait4GX7aAY3p8wOAsvV7skVeveK0tIFL3bTPSZXA725QacRqZG3eZhCAppKysU60l7vQ3W5wKC4WV0VEpT/AC3/AP/aAAwDAQACAAMAAAAQ/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD+Z/vP5P3gpjC3GQv/AP8A/wB6v8X6iQZkJ8d7Wv8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/8QAJBEBAQABBAICAgMBAAAAAAAAAREhADFBUWGBcaFgkSCxweH/2gAIAQMBAT8Q/DtmMNBrSnhPfxptJtA1HA4U5TPRq8UFC0KWtynOCb8a3OjbwZX0faaQvAp71E4mkHB5zhKUz86UwcEHOUudhNvO+hyuuDgWD8t/egbLgCINjuxSaQooyrIl6yaDWmSMRQEzjfzoS6BXUrYO3i7ZUwIwcmWNlk4Xz9aLgihQqXnCX4++n2Iqos7EG7gOctx/EiCSIUoBGbOkPsChNwwczMMZ0+iBQIS5hMD9dGqaJuKaOUZwcF8aVzlIozsPv1NGtc3+0vgb9aCXFbry8zPrUHZpA6E/rV3qTOGXNbIO3jzoItMpswR2wzzo63YGGwpQlh/mne2c7ryPcef+ZcL3Ipas260qUoyIhnEyddaAZkszvGzPG89/kX//xAAlEQACAQMDBAIDAAAAAAAAAAABEQAhMUFRYfBgkaHRIOFxgcH/2gAIAQIBAT8Q6OCBs80j0zJW2Nt4QGwR5gUkhxQhsEEZ18eIDrrzSXt7j1EZEAjTiipk/l9QHFoxAsWK/UGTbXKSqJ4gAA0p+/ispBNIQBarrs1DyUdXrWC6FSXftrHBmvsZYqv2hQwKeoRLYuUBtI8tDdoc7RXa8dsLyCFFm3KfJ0lpW/ueov/EACYQAQACAgEEAgIDAQEAAAAAAAERIQAxQVFhcYEQkaHBMIDwseH/2gAIAQEAAT8Q/poHlr9IknZvTj0Q0UlN0Km+cDd63+4ssWO8RCBWYhEyJjZvAj/MAHWQk8YANoT9j2GGE6fFUOLxAsst0tdPiEk8oJTAS1vBSQDpQPsxuQAvNCUYLOYzvfjEQEActJC3DvjJiwkAlerC2DeQJI/AI5DlWpGylwef3gQkfgAmmZ9DCYpeDAWxXBEk7PDj4UQ5VIXDWzcbxeUCV0Os0yZcsKjA6UeS8cbYM7KwQDLaaMnRxI0kF2oaMRlANoA94JoIcHKInW+cbflEAErO38N3OWVM3xhjRXzxsgfzQIPyMi8gW41MPWWD3gnkBUYSg2mWXc74ARdtUFHGQBk3ydPgiOsUSCjrFh5xkDJW82P6T3Pw8/CK0mC+1HlgsM9nn7ik9zieWjtqR5hhR79sXDAgsIV5x0hbKCK+iI6S4m2NE8hrJjUY1VBVleguLHFCSRBKypL1GOYpolQqn/hkg7KlU9V/OUKYQCQzWVlJ2fGXMwcJqUv+D6zjl6cyo6vgv3pRAw5YPvX4+1IEgJh2TfoxMSOPBCx9r8PyEWyj7lQepbxBiXg7cuy56XkwNcNWyeyHuN/w/wCb1zQHf7OBYxYm+2NjyUqizTQBM8YPyBQmdXpe4njGbNTixLxYcwOprIUbnqOZ4oTymQZTQjidKa+3DSdXJcvimE9nwkyAHf8AoVw3aPgiz+R6Y5hQi0qj2TWBwF2ihEP4L25rHAnUpjwaxy0ASh00x6ksimuJU0tUm8Cjx8AJJoBSZBVNaHVPrI4z/B6YEUFpl0ly8hmCDSZN5VDY11h/82fKOYJowkF0TJX0a6IPGRy70ghV6yOD47/xS9IJm2ROYeOi+MctUE2yjmFVhCMT5cAsJdV1R0jlQ+UE1UXuXQcqYxRkkjeCXGpNxk1ElaJs4oJ1zHBcSc02ItKAPqN3StShJOYnhHeYxh6mQYpbiYfQyASSTEmNmvDD8QxWoFdfZhCvZx1xZtgZH7wZygDFDCywg9X4u0aEgFsxO9YM5NpVNSXD4XFc2u9RpZS2Dj2ZnpiB3Kb1g3SsBa0Jd+HAaIZaI5Zi64wskCUAaJrs3TiP3bFKpICUjG8ijgVDCQNy5iqeoyx2GUlCjZ1dnnDx98jlYi8RVa74EDPXikFYAne/3iwzOGWcyrnReDS9jCqBXdzfTGchRimT+rf/2Q=="

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjwAAACWCAMAAADtyaIJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFY3HCoAAAAHdFJOUwBIv5wmaeGMnJvSAAAJKklEQVR42u3d3Xb0KggAUBEx7//Gpz+r67RfZyIgoB3xus0Ys6NgNCklS5YsWbJkOak0AMKvQgRNc4TnZapirMPe/VljHu7BfzaTpp0+A30jNmbDKM+NsPZ+/Sq9IknqS9dN0eu5Pey3k+83f1a/XaFLWPpHO8y0ssUZfBTU/PrtCdcZOED1vspvLQcWtfTHU53wfB0C1YAszuDXH9vgwYkepzMbjtrxePjt4Iin7oGnUbVut9fH89EOK/FomtEcD6Cm3SDxvA/k2Nbh6cvxCDudb1WnxPPR5G0VnovW4qE+c9tR4hHzscRzrcQzReeez0l4RF2AKR5chmeazh2fs/BcHZbgEafrRnhaNWq3x6HzYXj4LW+Lpy7Bg5dvux2Hh9v52OKRNqUFHujX5dtu5+FhRj7GeHo4HrysCyYeZusb4xGm69N4zKKdH3dASzysEMQajyxmnsUDl0+hxPP7HgrAUwPx0OVVMPEw9JjjEbXmHB68/EpNPONhxB5Pj8JTL9eSeIZ67PFIYuYZPN3XDiae4cjlgOeKwNOc7VAOW+NxxAMPBuAJtHM0ntsEyAMPP11X44m0czaeu8vggqd64wm1cziemzN0wXOBL54aaud0PM8HEh883RUPxto5Hk+NxcNN11V4KNjO8XieXk0nPJcfHoi2k3iuYDzohadpJyx6195kiafG4uGl6wo80kTrc0P2Z21ag/ft69IO+gXw4L8vAqC3hpjOgNzwVB88smD58XbQ59uR6VUXwD+sJX9b9pMMyA0Pq1XFeEAk5+6XkR8Yviqej0rMrC/2w9M98LAHrfHe2fZruw6V8/C8/V9VX00/PJx0XYqHO2h13lTBTz6vvOkPptfUQSyeyxwPN9NCzQWkcioe1krwHowHrfEwN49JllE3HPeTL4+H1fm0WDxXs8UDVqPlg7GLytF4GHowGE+3xcOJlrvifZV1IO4EPIw7MxjPsM4iPGQyUj6cPMJyPJ6xHgrG0y3xuNmZataXwTO8OWswntHVlOBhdDxUEs9ELUcTIS0YzyBmluDpq+wcg2fUxBSNp1rhoWV2zsHThMOIN577agvw+LxFPPEIBq4ejqfb4IF1dg7CU2QxiDse/fQbSoK5XhKPQS1RdCn98VwmeKYnsxPPfNSD8XjQAA9NdG+JR1DLKsl+AvDc9ApsPHUmp0s8/FqCJDaIwFOn8bSFg9ZZeIqknSPwPK86Fw8ty7SOw1MFh7E4g+EUTJ/FU9UheeIR1pIEoaXFGeBw9pcm8SyMlk/DA9F4xtO/c3hgacdzFp5m9ayafQba+V8mHlza8ZyFp4TjGcfTbQZPXZhqHYenh+MZ7muoM3gWzvGch6eG4xnvqAI9Hrh8rl7i2QTP8OFT1+OhpeFy4vHHo0rXeXhw4QRhxjw3IYLdGWjSdR6eujTXSjz+PY8qXefh6UtzrZznCcCjSdd5eFRPPhLP35hhrrxH3w8uNAtPW5uo57OtCDzjdJ1UeAw/vp54hgWDn6pX3vPLBzEzywWJPCaeuVpKAkzTMxim62iOBxKPaS2b5Oa3PYNhut4UeHBxsnUUHpQErbZnMEzXa+LZG49o4DA+g2G6DrZ4IjL1k/CQKOExPgNhup54NsPTRc+gjc9AmK4nnr3wkCxZtsYjS9cTz154RAGrAx5Rup54tsKDwjleczyidH0+20o8drUE/oXzwiNZkZqp+kZ4RheuF388khWpOcO8EZ4uiDfc8AhWpCaeffBInw444eGvSJ1/qp4PRo1q2QXRhice/orU+fU8uSTDpJZN9a5ZFzzsFanzeHIloUUtOS/XL0F42CtScw3zDnga5zNmFIaHm64b7J6AxDNZS9536ksYHm66nvu2luMh3pc3MRAPM1032DHaF+NpfxkPsD8WXSLx8NL13Ku+DE8Dqvxv1FMoHt6cEw9Pu9aOW/dvCNWXQDyi32Z37254WCtSTd7PsxaPUzHGM1kgGA8rXX+BN4OdgKeWaDycFalMPKTpUxOPWSnheDgrUpl4mqpTTTy+g5YrHsaKVO5jq7q06zkcD5YVeBjpOrPSpEkkE49J6WUJnmG63omJZxQ/JR6/WrZFeMCsu+zanjXxeAU83njmPnci+d4WJB6fWlJZhqdZ4ZEvzk487nac8RQ0wjPsw2riCbfjjadY4YHJ80w89nbc8ZARnvGDVkg8wXbc8ZRuhGc8AELiibXjj6cZ4WEMgJB4DOcGGa3pjkcfM6P4OJB4rErlrJD0x1OM8HC6MEg8NoU36xqAh4xOQLtBhKEj8YiHrCA82pgZNV2Y5kEFDv7rNDzsNozAA0bnQJZ3zf/DYR2111l4utGnBozwKB9xobILk3U+NP6nk/B0kredL55mhAfM7x2oDHLn4OmkufF88ejSddR3YZXH58cmbTweT5emGzF4ihEefhfG4PPvdkk8G0+VZ6pBeMgGj+Q4ne7muRpVdrB0AJ5Kmm3TQXg06TpOx96VgC3nRs+L4+k6OYF4wAhPkbcMfG+aBoRd+JOvi6dXpIlZ+Sg8inTd8Er2+lm66jdvf7KittRAPA9qST/vqq3xNCM8MyuElD/q9IoVCMTj89AvDI88XUePVfWaXz3ru+pb4ilWeCbWlznMTSaeEDxkhSdaT+JZj0d6zdFhdaLqhxPPBnjACk+wnsSzAR5hqLvwQTcmnu3wNDM8oXoSzw54ZOn60uV9mHh2wyOKmQeLulpYzpV49sADdnh89XxfUJZ49sAjiZnR8mDC8mPbUuLZBE+zxDP1Eo7Mtv4cHsH1RuNhkF8o53n2xFNM8XxunDEOd1rOMO+Kh0zx2C/RyAejG+Nhp+vc/Vemnc+jbTuJZx88YIyH/cExebSTeHbDw82wBTs/m03aha0kns3xNHM8JnyebvVKPBvhYabrwhdeAPrQSTx74SkeeKZ6HwRtkJZ4ovGQC5733Xya0Llj00f4iScaDytd131QArCbjVeJZ0s84IZH5KcjZ6dt4tkLDyddn/mUDee7zxXBQHriicfTfPF8AsIngoRbtF8ADy3F043xMNJ1k49oNXgzhPWrqLZoZ8+zWc/DiJnNvsDW3gQBvRWAptla3u5eVzCxV515WLr5M2LW0ukF1bZnIGE7eouE+/fSs2TJkiVLFtvyH/Rn2ciODPKZAAAAAElFTkSuQmCC"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABiCAMAAACRQNFSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURQAAACUxNyg0OigzOSYyOCk1OiczOSYyOCw3PjQ+QSQwNyUxNycyOSYyOCk1OvvALPzDMfvALvzCMPq/K/nHRPXGRGdtbLeTMHFjMSUxN/q/Kx8sMw8eKv/TKgdl8SEAAAAZdFJOUwDWRluvNX5tIw7k85/Dj71Sm3PfNBxm+P7xNGliAAAQV0lEQVR42u1d6WKrKhAOiwgqZG+Pwb7/a17ZBASNSdrcpHV+nJMaI8snszLDZpMnConAHFRVXVeA44ZAulnpFxMtm6pt2072/7RS/9v/34IGsXVyfifiBLTThOE6Q7+OILbo1gATBAtKGSsKWArsXoWarMv9d0HODbCcwBRZijTTV7CvM/V7GLuBHJTTKhtsai3fVyb/S6g0QruYv4uVVa/adc3K438BMa60dLzELivrrpV1sc7Z27P2qrfNqoVcmzWKxaN11t6bCiWqmxs0PiUJynXe3hpz5Yr5uEkaALmu9Xfn7W17q0LedF33LXKdlSMi5rGQlKV/rfq/CPKfQ5rQKaHAGIvUFClIg/HIuUjVE92dKGiq/6vvEHTX435C+7xMb5gfR0Ao83PXAdWpEmbvRgXLzlr0hGAeUWRwR2MzvVUf8FXMD8ftiPb7z562S+l4mmUzMRm5oXpVDb1X5iRw71t8e1b5/Kit+7iNDY2C566jNpgCEP7BvOBLPJU4sHoGKvygEvlXZX6uccHG4921oVoV3F0LlrG1JJicR17kx7Yh6mn291c49faS0Jeiy2I6T/OZGdD9qBToPAt6nQNdyPwNxIQS9D8VnQZdVg706udBh23QW69Zxe2NVqX2qchiAvT+eSIPemlA74clr+hw58ujtN38HOgZ9k4MqtzMm+cXREeQagBGb0O60mX5NND1vbLmXH/tdSuQe3A8aWSGY4o50Ek4K3naXS7H3d102l8u+zmVQhHT3Fx/tBJsHvSqoIYKOiExajh4GUlwXdZIM9Q2eGAG9LY7j0Gnqkkm1JeI+ZbL4ULQ+WnQMRt3HAzCJubZ6jpXd0MQSwP79kbzY5skumMiZANZ0Kvravjhcjk8oKr1wmF39SY8GsM10NmVZ7kxg+Ax6iFO+9TsAk2DbrlfAHrguCzmLsyDnjBV1ba0y7KUgY8beKTBWHdxmkkxatIOCEnfUg50eH2hL0Ntmo6Xy+mZoNPQ69BLcSmpn5YmFNZ8GvS2Q88BnQej0WpjmYKORlL9bPY6tJJMNKleCjANurjulWGzithVOvXCYfNM0KNhQgU6zMAjAqmeA900/uOgK5y9TkVwgzMrHbaxsv3R9bMh4hmLmhRe2cmBzq+q7gq17QML/TAv0r8f9DJkhlqE5n6HpuSelqXcqgI/Dnox6dwMV7qM21BfERrr77eADtIe34faJO0XaQRXQMcTilyR090ndPr4ieHqSUAXheUDC0G3itygnF1V5IY7x4s4Rta23NvxgxGpni51dyuvDIybBH66UNRhA3o94d14skjPg14LR9WUyZZZJGIGdL4MdKxvbhaDPrayF5hsdAnonBZFgYCMRbp9q5toykJFTgQ2mx4bJmYaCV8K+vEJIj0PeisdtVOgk9tAB0tBp+bS80BnxJAoEzu9H30UAbWyLmb6Rk2FCKGSt2N9pQ3nUYNefAtqDwqHPOgRPRV0vZxAKod/DPTBuQJyzhk0UgPkh+JCoectds5IGZmjsTtLgY5eQKRPgF45qkeg1yUKozN3sPfiCuj6f7QQdILiIMo06BzFcaKFoIe+GeVvlOrnogvmLALduKD82OpwHhXogTLwCGqPifQJRY5tmKLbtHfyLStdc8+Kgh/W3oduUIyx3noags57dg1LtaL9krZz0dskZdjtAPQaBFuW7diYmUjiQAffgtqDwuEbTTYSmWzFoOKnJltbzICudOYW86eabHwEutPeu2BExsmsl2zoY7du2F7xo2zSa+G193n+/qBI3y0UDt8IunJdDM5M6DEhkWErglcjDzqVSeTrZ5wz/uIYdOxHNKBEYgkNMuJqCej8ikh/xDWzVDh8I+hMBk6uYNkXgZdbq+Ud3syBboN1T3TDToFOQ5UVhOqa7/eUl2cK9NntbvuHoy2nJ4Ouf9qd8gEXh48IN3dOgM6qJ4AeBlyiQU+Arh+NS2Pf1V5/vxn0mv6USD/3woH9BOjUhShnQ6s6YjuEJaBaGFqv1Rt6/eMnQDeW8BLQ4cb1JgitktFF45EbXzSbNsw+nrKeBt2NgoQdwD6wcjPoLZhD7bJPaZv66M773H1LhcONoM/vnDGbJQDmdbqJwm+u8NhNgW6dBcvtdPeU0Y6GJmOnx5so2prb3nYi7YcW/CJlXWZA8A7QgdpbxGdEepYOD9z5raBnHYrCf911gTsx2kY1sY8sBJ0+AXTjSk8vh/3wXugi1NjDv24DvdYKC2eTIj1Lp5wcyNJuMehVcuHujZHQTbCMs3aG6y1mCYtOJ9u8Pc3YHvwW0P06o3jwtwIYh2fckKVTzZs4tA6GWVoGurPTW6ZFQ5WX67tDQrt9zorrbbNt5ubDQi0QipJEXVabnv0FNLUFmsxsgea8ITR3HTfx1miqlKLsFmjWNyBCv3ehbg2bLETYG/sURsI+ugeUUcdD84qWjepV5F9U/YC+g6VA7mowZDVLpk09hox/Mhqb7n5pAy76TVqcsvLxlRHU24cUvpWeSTbgorkWX1RXhjWfX6mgzu+0YOd1hl8SdLPpFmrV8XraKiN1e/xKF3XWnN8dd+sMvyTo1jPAsN5tN5+gTnudr6sze+bO6bXz4fhQeG6ln2TvLiJlU34AmcCdllz5/bp/GZGexF/VbveH/Lcr/SjoPqkCWa9F1YyT5igStiCNbPZf6Qo+xqbZ7jhh1630IqCHsdVi2LBScyxUBiQqidAZN1Jv2xE0t2duFxpx5/1NbpmV/g/Q420UrMT1aH9NJ02KHdAGZ0Z8q/fALf7ddkEC20r/O+jjnEgGzdoOPdygKYvMqh7sNcPK2UHz9ePx8liCxEpPAD0TtaCwVJnyHDciTnPP5CPuzbI+Wb5+OB9X5v7aoANyJbiasvKRSD9rNc7y9ePBOOxXa+2VQa9VzEAurj9yTrVyFV/bG31dh1x3CvuVub8w6LI308UN1aIyIn2Ir+1PbuFfVlfcS4PeMruVepnrPd0zt3OQnwcJvzL3V1fklFYOTcmKBTubtomKtnWi3L8Dx3ViXxx0zdcZz5cxGlORiPSTE+Veq1uZ+6uD7nYLI2O98ZnzGxjiabRlb0X5ZmXub7TSnbmmiujo/aK4zKV90xLXMo22nCPIV+b+JqD7zE9GKpcAxxt1soMiWkBUCmy+6T6/ZtexZu5rnOUNQJfBuoaJ5z3yxpLjvMDer664dwE9qlGmPO+1K6sYZU0JuDl/zfrUd2uc5V1AT0tAM4hEwznoqaoqAIaD2Q6zEntl7u8COmhc0bQJlX3Evvcrc39/0GuGu8XF249zqN7P3NkTz4Rh6/kztVLj1Oa4Ra730yz7Pt4XRGcC2HzDnyeqij1UxQo60yk0Ei9YAbs5kX4nc6e6ukb7FNCpKQO/gq6TwbhL4p2nOZF+L3PHppzGUw7wBabqzl9n8MCuMTE6ECBP25m1fLwviF6YevtZHFAjvvWUTxVWAhNt/SVqpJXmUHO++RN0zzMifX9nnAXNFL1pbtrSc53Is8TIi9NHN+TDquRtKSsxvdw/viZF+u7eOEs5I2ObfG2wu0m01+tj/gUqgnmwedI97ukBQaxAosrltgTMffMDoFffDHq9gq5VuGDbO21c1aKaq12wCEKI0IfAaku0lGm66vn8GHMnOnEGEyVWSIMtn+8/lb0lp025piGb5DsVI+ivs6YybIoKDgBOpUTR+OvmeW0jmqBedtP0g0e4v6nQfwLA/VMY6X/NXXJ3oVo098JgwoD7G2LheqA+vrQYQfGpPwzxsc9dJbBJ7Yy/fMXInvdWxN/N3IE/Z0YVVvFVnbg/0acyV/x32IhnoMo5AsstTDYGzRgGrTXMWZ1Wji6VEmnu6j42pTkwISo05u9HraxZE5+K48qcqDoeha8uwV/eLATjijMMmYjLiCos4miL2vN8fJC5g6Cw7whYGpTHy4JeqZLY9rMqn9iNCyZxfTaTfmmLEHQUvvG1SdlqJShlVGS4NE+VrrATUiWKZPSIpnV1G7l5xTpTFOJabb7/n2CXqW7Wi3AiMOaaVL6DirdEeyJNLst2YO73xVkoI6ZGPktA3+gjnOqC0gnQe+WjUcxYG32QUTEqCk2Ux6kw14FuS4EEGR0VThWUqVI0smsJpcQVcVHIdSVjH7VdtrrgG+67MxQWViXKqr4BbLgBcpGr8g1OolVFKMWSG33G2pCjqP8+PRJn8YpcAqxX5LKgu4gwdk/ozc+gVpFa2dUwQJTV3pF7T+BQyUdYs66R0hQgLFyB4IGtK+6tugV6PkLtBW66plkNlm+gL4J2GepuA8Vpq49gHEpHHR8Jol8BvZ4B3fyMDuWbUCRK0VASctAWsqAbjatn3GBw4KhlWknJ/UtFw3uJaacYKvqVxiognb7RKycvj/r1bp5MPEXnnveQ/+t1ec3U9w8F0e8H3eKHXHFGhiLfS4AwthxjCeiFWfzQs2h7k7+3NEqCOa9UNVyarwrp2Hz7BidO6/3P1YIDfLbng4H8819XHoyr5vRYEP1h0IlTpkZKGvZGvgN7DvQ2Bh3FpXbLDOgiahiaxYO/37vwY4TTA4hzjlaVg9wv8h7yrnRcffvYDqlvAT13kA/3yjy5HXSlBwSgkwzoTVI1kOj+VtePunsRIso2qWfDG0dzmvLls+66GmpH/MFkL57/b9DdaUSh4wX7EpTiYdCnVnozNEytegFpUG3+5f2xJuwo6JxI//o6/mu7Thct3mk97vToDqlFoG/mZXp2koXVsRfK9HZapkstNRLQSfaEa0JG9U5fm0qb4lJOFAz9UqJcdr3GUzjj/Pwocw9BB63Vl1OTzXuQUtBpUDl5DOgN2vsI9EAFV4EomgG9SI2efjCgWmgAv4o+R6xeAhpER9WlIPn8UnxdthwOVvtR7449fxPo2EECWw+6BSn5zoOuHW/Q+XpiO50PAgDdCLqunAqdSYg3GdAV+3H2uEsSesedOawEvrpU05Dy46MkJtzS/ushDwLuuhD8+fFkRQ+6mktOGSXSulc1WkKX8S9b+12bgq4cKzVijEIcsVtd3Jr2Y+ocw70F9MI8VdeN1u9UCrq6UumGuQtfqNLKLdi8GxUEBAeESBkUTo+SG5VIP+wfT1b0oLvTMyTvjWbsADBzOHwHQAK6PWtFJ2hELm/tKa/7IUjjE78JdA2tORWpJZss6JumM7dIKYPTypMsgrcgihpejzJcai7idFaltW+XHtYxazYM6hDtzMvGehR5ENFgeuEZZJUnHXuv2GZAQb+XVTzf2B4zXgUHtxTjNw450KvBIxdEXHwABskB9KHLwi2PKqgW371tyJ4VsGfsTYOx4vIwTWPd3lLCfy7e0zcw7OIQoFIHyUGMreZc9hdMzjwj5qP9LvyZjadznCwxqMPdg+2O+h9FAyn6C1a26Gi5elQzHGFOdTxd+Hi6bTFo2zQcVITHb+GCvZeOPuCykn/76tcPsN1PptDMmomeOgd+8Yasw1rxN+8bkM3vHd52rfibEJ8+SOj3iPQ1Ez2W5237HkHVe+m0MvesEgd+MeZapK/MPTFzf/em+v3K3P8eHddy7n+OTitz/3u0W5n736P9ytz/oEhfmfvfE+lrnOUPgr66Zd6Z/gPH13aSkdQmwgAAAABJRU5ErkJggg=="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/future_compressor.6f0e245b.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/decentral_market_compressor.a62c5579.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cryptoknight_compressor.7ceb50ab.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/neureal-video.3806cf83.mp4";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EmailForm = __webpack_require__(10);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'main-nav' },
        _react2.default.createElement(
          'div',
          { className: 'footer-background' },
          _react2.default.createElement(
            'div',
            { className: 'squeeze' },
            _react2.default.createElement(
              'div',
              { className: 'footer-container' },
              _react2.default.createElement('img', { className: 'footer-asset', src: __webpack_require__(54), alt: '' }),
              _react2.default.createElement(
                'div',
                { className: 'community' },
                _react2.default.createElement(_EmailForm2.default, null)
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'social-icon-footer' },
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/neureal', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-footer',
                src: __webpack_require__(2),
                fill: 'white',
                alt: 'github'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.facebook.com/NeurealAI', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-footer',
                src: __webpack_require__(3),
                fill: 'white',
                alt: 'facebook'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.reddit.com/r/Neureal/', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-footer',
                src: __webpack_require__(4),
                fill: 'white',
                alt: 'reddit'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://twitter.com/neurealai', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-footer',
                src: __webpack_require__(5),
                fill: 'white',
                alt: 'twitter'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/company/neureal/', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-footer',
                src: __webpack_require__(6),
                fill: 'white',
                alt: 'linkedin'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'social-icons-footer',
                src: __webpack_require__(7),
                fill: 'white',
                alt: 'youtube'
              })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', target: '_blank' },
              _react2.default.createElement('img', {
                className: 'telegram-logo-footer',
                src: __webpack_require__(8),
                alt: 'telegram' })
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/footer_asset.c9c063ef.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoadMap = function (_Component) {
  _inherits(RoadMap, _Component);

  function RoadMap() {
    _classCallCheck(this, RoadMap);

    return _possibleConstructorReturn(this, (RoadMap.__proto__ || Object.getPrototypeOf(RoadMap)).apply(this, arguments));
  }

  _createClass(RoadMap, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { "class": "content" },
          _react2.default.createElement(
            "div",
            { "class": "grid" },
            _react2.default.createElement("img", { src: "https://image.ibb.co/fF33Nn/Neureal_Roadmap_PDF_compressor.png", alt: "roadmap", "class": "roadmap-img" })
          )
        )
      );
    }
  }]);

  return RoadMap;
}(_react.Component);

exports.default = RoadMap;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TeamModal = __webpack_require__(57);

var _TeamModal2 = _interopRequireDefault(_TeamModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jenImage = 'https://image.ibb.co/iWPucn/jen.jpg';
var wilImage = 'https://image.ibb.co/k0iy3S/wil.jpg';
var jordanImage = __webpack_require__(11);
var kylerImage = __webpack_require__(12);
var jamesImage = __webpack_require__(13);
var brianImage = __webpack_require__(14);
var nickImage = __webpack_require__(15);
var brianSewImage = __webpack_require__(16);
var ethanImage = __webpack_require__(17);
var jakeImage = __webpack_require__(18);
var benImage = __webpack_require__(19);

var Team = function (_Component) {
  _inherits(Team, _Component);

  function Team() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Team);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Team.__proto__ || Object.getPrototypeOf(Team)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openJen: false,
      openWil: false,
      openKyler: false,
      openJames: false,
      openBrianNel: false,
      openNick: false,
      openBrianBag: false,
      openJordan: false,
      openEthan: false,
      openJake: false,
      openBen: false
    }, _this.clickOpenJen = function () {
      _this.setState({
        openJen: !_this.state.openJen
      });
    }, _this.clickOpenWil = function () {
      _this.setState({
        openWil: !_this.state.openWil
      });
      console.log('hi');
    }, _this.clickOpenKyler = function () {
      _this.setState({
        openKyler: !_this.state.openKyler
      });
    }, _this.clickOpenJames = function () {
      _this.setState({
        openJames: !_this.state.openJames
      });
    }, _this.clickOpenBrianNel = function () {
      _this.setState({
        openBrianNel: !_this.state.openBrianNel
      });
    }, _this.clickOpenNick = function () {
      _this.setState({
        openNick: !_this.state.openNick
      });
    }, _this.clickOpenBrianBag = function () {
      _this.setState({
        openBrianBag: !_this.state.openBrianBag
      });
    }, _this.clickOpenJordan = function () {
      _this.setState({
        openJordan: !_this.state.openJordan
      });
    }, _this.clickOpenEthan = function () {
      _this.setState({
        openEthan: !_this.state.openEthan
      });
    }, _this.clickOpenJake = function () {
      _this.setState({
        openJake: !_this.state.openJake
      });
    }, _this.clickOpenBen = function () {
      _this.setState({
        openBen: !_this.state.openBen
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Team, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenJen,
          clickOpen: this.state.openJen,
          nameModal: 'Jen Greyson',
          roleModal: 'CEO',
          biographyModal: 'Prior to being named one of the Top 8 Women in Crypto, Jen managed a multi-million dollar life insurance company during a highly lucrative and chaotic run-up of the industry, as well as managing morale, forecasting, and finances during the impacts of AIG’s multi-billion dollar crash, giving her a unique comfort level of leading from within the volatility of cryptocurrency. With over two decades of experience building and maintaining entrepreneurial organisms, from startups to established partnerships in numerous industries, her involvement at the onset of new development has repeatedly generated millions to bottom line. For the last decade, she specialized in intellectual property, working intimately with both NYT bestselling clients as well as smaller first-time movers into the publishing space to create, systematize, and deploy new income streams. Clients include New York Times and USA Today bestselling thriller, mystery, and fantasy writers, as well as international speakers, business coaches, and serial entre- preneurs. Her chaos management strategies identify and implement systems to enable the structures to exist beyond her involvement, ensuring their continued success is not based on singular individuals, but as a whole. Systems are everything. Strategic decisions are everything else. Nothing works without community',
          imageModal: jenImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenWil,
          clickOpen: this.state.openWil,
          nameModal: 'Wil Bown',
          roleModal: 'Founder | Chief Architect',
          biographyModal: 'Wil has been working as a contract so ware engineer for over 23 years. He almost single-handedly developed the Mozaex Media Server which did over $30 million in sales. A local Bitcoin activist, he has been mining cryptocurrencies since 2011, is the organizer of the 500+ member Utah Bitcoin Community meetup, won top prize at the Million Dollar Texas Bitcoin Conference hackathon in 2015, contributed code to main fork Bitcoin, and has been involved in several bitcoin startup projects. Wil considers himself an old school Cyberpunk and hopes to gradually merge his mind directly with machines and to help build strong artificial intelligence. As founder of Neureal, Wil is the keeper of the vision and passion of where Neureal is headed. He is the torchbearer for open source and ongoing educator, committed to enrolling people in both his vision and his uniquely expansive view of the future for artificial intelli- gence and the way humans and technology will interact and integrate in a future that is no longer very far away. The architecture for Neureal exists as a whole inside his head and it is through the coming phases of Neureal’s road map-- with the help, guidance, and stewardship of other members of the core team--that we, as a community, will be able to begin using what he’s already envisioned.',
          imageModal: wilImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenJordan,
          clickOpen: this.state.openJordan,
          nameModal: 'Jordan Miller',
          roleModal: 'Founder | Architect',
          biographyModal: 'Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning, economics, phi- losophy and information theory. Jordan’s ability to maintain a 30,000-foot view allows him to quickly locate pertinent and relevant details, disseminate the information, and move projects and people forward. An autodidact, Jordan wants to know everything and thinks the easiest way to do this is to build a learning machine.',
          imageModal: jordanImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenKyler,
          clickOpen: this.state.openKyler,
          nameModal: 'Kyler Anderson',
          roleModal: 'Community Manager',
          biographyModal: 'For Kyler, understanding human behavior and the dynamics of communities has been a lifelong fascination and obsession. He has studied and maintained a working knowledge of the field of applied behavior analysis psychology. Kyler was recruited by the USMC and trained in advanced electrical engineering. He later became a chief marksmanship instructor, distinguishing himself as an exem- plary leader, presenter, and educator. For three years he presented on a daily basis to hundreds of individuals from wildly di ering edu- cational, intellectual, and socioeconomic backgrounds, including Generals and foreign dignitaries. His intuitive communication style ensures each connection receives the same understanding, committed to following up until the participant has a full grasp of the mate- rial. Kyler was the lead producer for the worlds first terrestrial radio program about cryptocurrency, has been active in the cryptocurrency community since 2012, and has an extensive and successful history in deal flow, team building and sales. Kyler is passionate about free- ing all humanity, and he firmly believes Blockchain technology, decentralization, and servant leadership are all necessary components of that future.',
          imageModal: kylerImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenJames,
          clickOpen: this.state.openJames,
          nameModal: 'James Alton',
          roleModal: 'Developer | Dev Ops, Ethereum',
          biographyModal: 'With over 17 years as a so ware developer heavily involved with information technology, his diversified experience includes applica- tions in hardware and so ware solutions for the U.S. Federal Government and banking industries. Programming language expert in Solidity, Javascript and Python. His intense research in blockchain technology started in 2011 and he was an early bitcoin miner. James has also contributed to many other projects including ones involving artificial intelligence. James and Wil collaborate and develop smart contracts and code deployed within the Neureal so ware. Additionally, James is pas- sionate about weather prediction, having invested heavily in sensors being deployed across remote locations to further increase the accuracy of the ability for the Neureal sotware’s predictive ensembles. His work on Neureal’s MVP for hurricane modeling helped guide the decision to add Barbuda as a corporate location and setting for Neureal’s first digital/physical humanitarian e ort.',
          imageModal: jamesImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenBrianNel,
          clickOpen: this.state.openBrianNel,
          nameModal: 'Brian Nelson',
          roleModal: 'Relationships | Regulation',
          biographyModal: 'Brian Nelson is the founder of ExTech Ventures, an organization focused on helping exponential technology entrepreneurs launch world changing products and services. Before launching ExTech Ventures, Brian co-founded Sig3, an automated co-signer security product for multi-sig bitcoin wallets. As a recognized figure in the Bitcoin and blockchain technology ecosystem, he has consulted many of the top digital currency companies, spoken at numerous industry events and was one of 40 industry insiders to attend the Blockchain Summit with Richard Branson on Necker Island. Brian has recently traveled to London and Kiev to represent Neureal at cryptocurrency events, building relationships and expanding the community for Neureal. He has made numerous connections and is working closely with the sales and relationship team to hando  these connections in a way to best expand Neureal’s community.',
          imageModal: brianImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenNick,
          clickOpen: this.state.openNick,
          nameModal: 'Nick Baguley',
          roleModal: 'Data Science | Contacts, Strategy',
          biographyModal: 'Nick Baguley is a well-known Community Leader in the technology space in the West. His connections in Data Science and Big Data spread around the world. As one of the earliest co-founders of a HUG (Hadoop User’s Group) in the United States and as an entrepre- neur, Nick has been able to influence and help create the rising wave of Big Data and Analytics in Utah. He has been heavily involved in the Big Data Hubs and the National Data Science Organizers (NDSO) group from the White House. Through Big Data Utah and Utah Geek Events, he has created and co-organized many large conferences and competitions. Nick founded Evolve STEAM, a training entity focused on Data Science, AI and Data Engineering. Nick co-founded Data Scrubs, a Data Science company that is creating a Data pipeline product with a near-real time serverless architec- ture for the finance industry and other decisioning functions. Nick co-founded Crossfold.tech, a recruiting company focused on the Data Science, Data Engineering and roles in the algorithmic economy. Nick has acted as an advisor to Universities, Non-Profits, Corpo- rations, Startups, and Individuals for years. This has allowed Nick to impact curriculum, strategic directions for companies, hiring deci- sions, career advancements and to build communities.',
          imageModal: nickImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenBrianBag,
          clickOpen: this.state.openBrianBag,
          nameModal: 'Brian Sewell',
          roleModal: 'Education',
          biographyModal: 'Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education. Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing industries. Mr. Sewell is also a former executive with World Savings & Loan, a Fortune 500 company that was purchased by Wells Fargo (NYSE: WFC). His passion for entrepreneurship and learning from the best leaders in the world also led him to host of the internationally acclaimed entrepreneurial radio broadcast, “The Brian Sewell Show.” He has previously managed more than $1.1 Billion in assets and is recognized for his fiscal, strategic, and operational vision and leadership. Mr. Sewell received his education from Dixie University, Johns Hopkins University and Stanford.',
          imageModal: brianSewImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenEthan,
          clickOpen: this.state.openEthan,
          nameModal: 'Ethan Erkiletian',
          roleModal: 'Blockchain Educator | Advisor',
          biographyModal: "Ethan started out in the crypto space in 2012 when Bitcoin luminaries and economists at the time began educating him in regard to the potential of blockchain technology. Primarily focussed on the currency and money value proposition in Bitcoin, Ethan drove discussion on Bitcoin and blockchain tech amongst economists, technologists, industry leaders and entrepreneurs both as a method of learning more about the technology, and as a way to drive blockchain tech adoption among members of his audience and beyond. Ethan has since become an investor in cryptocurrency projects and has performed freelance consulting to major and minor concerns alike in respect to high level blockchain concepts.",
          imageModal: ethanImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenJake,
          clickOpen: this.state.openJake,
          nameModal: 'Jake Wiser',
          roleModal: 'Senior Strategic Planner at CureCoin',
          biographyModal: "A futurist with a knack for seeing the big picture, I have found my niche in Crypto.  I have been involved in all aspects of the Crypto world since 2011 and spend more time examining charts and live order books than most people do at their jobs.  In my years of researching Bitcoin, Altcoins, and the Blockchain I have built a network of over 13,000 like minded individuals.  This access has given me the ability to attend developer meetings for a wide variety of Altcoins.  I also serve as the Senior Strategic Planner for CureCoin after joining their core team in 2013 as well as an adviser to a couple of Crypto based startup companies.  Crypto has been very kind to me and through it I was able to remodel my home here in beautiful Utah.  I bring to the team an unprecedented network of news and information about Crypto along with my long time experience in various exchanges and markets.  I have a desire to share what I've learned so others may benefit just as I have.",
          imageModal: jakeImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenBen,
          clickOpen: this.state.openBen,
          nameModal: 'Ben Taylor',
          roleModal: 'Data Science',
          biographyModal: "Ben Taylor has over 13 years of machine learning experience. He has worked for 5 years in the semiconductor industry for Intel and Micron in photolithography, process control, and yield prediction. He has also worked as a Wall Street “quant” building sentiment stock models for a hedge fund trading the S&P 1500 on the news content. During that time Ben helped build a 600 GPU core computing cluster from the ground up that he used to backtest up to 10M trading scenarios per day. Ben left finance and semiconductor to work for a new HR start-up called HireVue in 2013 and lead their machine learning efforts around digital interviewing. His greatest accomplishment has been developing the features and methods which have allowed short unstructured video recorded interviews to see r-values in the 0.3-0.4 range in the HireVue insights product. He has a M.S. in chemical engineering from the University of Utah where he is currently finishing his Ph.D., also in chemical engineering.",
          imageModal: benImage
        }),
        _react2.default.createElement(
          'div',
          { className: 'content-team' },
          _react2.default.createElement(
            'div',
            { className: 'column column__title' },
            _react2.default.createElement(
              'h2',
              { className: 'team-title' },
              'Meet the Core Team & Advisors'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column__full' },
            _react2.default.createElement(
              'div',
              { className: 'flex-team' },
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenJen },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container', type: 'button', value: 'Show Modal' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(58), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Jen Greyson'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'CEO'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    '20+ years executive-level. Multi-million dollar leadership. IP Specialist.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jengreyson/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenWil },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(59), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Wil Bown'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Founder | Chief Architect'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    '25+ years software engineer. Million Dollar Texas Bitcoin Conference hackathon winner. Coding contributor to main fork Bitcoin. Bitcoin miner since 2011. Experience developing multi-million dollar software.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/wil-bown-b68bb718/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenJordan },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(11), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Jordan Miller'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Founder | Architect'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning, economics, phi- losophy and information theory.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jordan-miller-636724b/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenKyler },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(12), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Kyler Anderson'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Community Manager'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Expert connector focused in applied behavior analysis psychology. Marine. Miner. Engineer. Educator. Deal flow. Producer of the first live crypto radio show.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement(
                    'a',
                    { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/kyleranderson/', target: '_blank' },
                    ' '
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenJames },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(13), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'James Alton'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Developer | Dev Ops, Ethereum'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    '17+ years software development. Wrote the first completed Ethereum contract. Bitcoin miner since 2011. Federal Government and Banking software solutions.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jamesalton', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenBrianNel },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(14), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Brian Nelson'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Relationships | Regulation'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Token sale consultant. Bitcoin and Blockchain Expert. International speaker.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/briannelson36/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenNick },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(15), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Nick Baguley'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Data Science | Contacts, Strategy'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Creator of a near-real time serverless architecture for the finance industry.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/nickbaguley/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenBrianBag },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(16), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Brian Sewell'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Education'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education. Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing industries.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/briansewell2/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenEthan },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(17), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Ethan Erkiletian'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Blockchain Educator | Advisor'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Former radio talk show host, blockchain educator and advisor.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/ethan-erkiletian-6674a275/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenJake },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(18), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Jake Wiser'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Senior Strategic Planner at CureCoin'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Early adopter. Connector. Strategist. Heavy involvement in crypto projects founded in social and scientific good. Front-line educator.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jakewiser/', target: '_blank' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenBen },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(19), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Ben Taylor'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Data Science'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Passionate about machine learning. Life\'s mission is to further the boundaries of what is possible with data science.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/bentaylordata/', target: '_blank' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Team;
}(_react.Component);

exports.default = Team;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamModal = function (_Component) {
  _inherits(TeamModal, _Component);

  function TeamModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeamModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeamModal.__proto__ || Object.getPrototypeOf(TeamModal)).call.apply(_ref, [this].concat(args))), _this), _this.onClose = function (e) {
      _this.props.onClose && _this.props.onClose(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TeamModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.clickOpen) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'modal-background', onClick: function onClick(e) {
            _this2.onClose(e);
          } },
        _react2.default.createElement(
          'div',
          { className: 'modal-style' },
          _react2.default.createElement('img', { className: 'modal-image', src: this.props.imageModal, alt: 'modal image' }),
          _react2.default.createElement(
            'div',
            { className: 'modal-detail-padding' },
            _react2.default.createElement(
              'div',
              { className: 'team-name-modal' },
              this.props.nameModal
            ),
            _react2.default.createElement(
              'div',
              { className: 'team-role-modal' },
              this.props.roleModal
            ),
            _react2.default.createElement(
              'div',
              { className: 'biography-modal' },
              this.props.biographyModal
            )
          ),
          _react2.default.createElement('div', { style: footerStyle })
        )
      );
    }
  }]);

  return TeamModal;
}(_react.Component);

exports.default = TeamModal;


var footerStyle = {
  bottom: 20
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jen.a585ef7f.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/wil.81fce17e.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _SecondaryBlog = __webpack_require__(61);

var _SecondaryBlog2 = _interopRequireDefault(_SecondaryBlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blog = function (_Component) {
  _inherits(Blog, _Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/what-is-neureal' },
            _react2.default.createElement(
              'div',
              { className: 'blog-header-container' },
              _react2.default.createElement(
                'div',
                { className: 'blog-column__two-thirds' },
                _react2.default.createElement(
                  'div',
                  { className: 'image-blog-container' },
                  _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/h7KyS7/main_banner_compressor.jpg', alt: 'blog post' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'blog-column__one-thirds' },
                _react2.default.createElement(
                  'div',
                  { className: 'blog-detail-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'title-blog' },
                    'What is Neureal?'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'caption-blog' },
                    ' Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity, rather than just trying to crack a useless hash. '
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'creator-blog' },
                    'January 17, 2018'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'blog-secondary-grid-container' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/blockchain-vs-bitcoin' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/eWUqqS/Round_1_Blogs_02.png',
                blogTitle: 'Blockchain vs Bitcoin',
                blogCaption: 'It’s 2018 and it’s official: everyone knows about bitcoin.',
                author: 'Eric Nease',
                blogDate: 'February 21, 2018'
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/crypto-wallet' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/gsDrVS/Round_1_Blogs_03.png',
                blogTitle: 'What is a Bitcoin Wallet Anyway',
                blogCaption: 'Crypto assets require a fundamental change in how we perceive...',
                author: 'Eric Nease',
                blogDate: 'February 28, 2018'
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/crypto-community-moves-forward' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/mwjRx7/Round_1_Blogs_07.png',
                blogTitle: 'Crypto Market Moves Forward Despite FUD',
                blogCaption: 'Has the sky fallen? Has the bubble popped? Is this what...',
                author: 'Eric Nease',
                blogDate: 'March 7, 2018'
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/neureal-vitalik' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/mmEJun/Round_1_04.png',
                blogTitle: "Neureal and Vitalik's DAICO",
                blogCaption: 'Before he presented the idea publicly in January, Neureal had already...',
                author: 'Jen Greyson',
                blogDate: 'March 14, 2018'
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/when-does-decentralization-make-sense' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/hGBpH7/Round_1_Blogs_04.png',
                blogTitle: 'When Does Decentralization Make Sense',
                blogCaption: 'Whether you’re interested in the wide world of crypto assets...',
                author: 'Eric Nease',
                blogDate: 'March 21, 2018'
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/how-crypto-is-changing' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/kaREZn/RAISE_1_M_03_07.png',
                blogTitle: 'How crypto is changing the VC game',
                blogCaption: 'After a recent conversation on LinkedIn spurred my curiosity...',
                author: 'Jen Greyson',
                blogDate: 'March 28, 2018'
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/how-to-choose-a-crypto-wallet' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/kbULPn/Round_1_Blogs_05.png',
                blogTitle: 'How to Choose a Crypto Wallet',
                blogCaption: 'Whether you’re interested in the wide world of crypto assets...',
                author: 'Eric Nease',
                blogDate: 'April 4, 2018'
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/blockchain-5-years' },
              _react2.default.createElement(_SecondaryBlog2.default, {
                blogImage: 'https://image.ibb.co/f1hmUx/blockchain_5_years.png',
                blogTitle: 'Blockchain. 5 Years From Now.',
                blogCaption: 'I had an interviewer ask me where I thought Ethereum was going...',
                author: 'Jen Greyson',
                blogDate: 'April 11, 2018'
              })
            )
          )
        )
      );
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecondaryBlog = function (_Component) {
  _inherits(SecondaryBlog, _Component);

  function SecondaryBlog() {
    _classCallCheck(this, SecondaryBlog);

    return _possibleConstructorReturn(this, (SecondaryBlog.__proto__ || Object.getPrototypeOf(SecondaryBlog)).apply(this, arguments));
  }

  _createClass(SecondaryBlog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'blog-secondary-container' },
        _react2.default.createElement(
          'div',
          { className: 'image-blog-container-secondary' },
          _react2.default.createElement('img', { className: 'img-secondary-blog', src: this.props.blogImage, alt: 'blog post' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'blog-column-secondary' },
          _react2.default.createElement(
            'div',
            { className: 'blog-detail-container-secondary' },
            _react2.default.createElement(
              'div',
              { className: 'title-blog-secondary' },
              this.props.blogTitle
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              ' ',
              this.props.blogCaption,
              ' '
            ),
            _react2.default.createElement(
              'div',
              { className: 'creator-blog' },
              _react2.default.createElement(
                'div',
                { className: 'flex-author' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex-date' },
                  _react2.default.createElement(
                    'div',
                    { className: 'author-name' },
                    this.props.author
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'author-date-posted' },
                    this.props.blogDate
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SecondaryBlog;
}(_react.Component);

exports.default = SecondaryBlog;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPosts = function (_Component) {
  _inherits(BlogPosts, _Component);

  function BlogPosts() {
    _classCallCheck(this, BlogPosts);

    return _possibleConstructorReturn(this, (BlogPosts.__proto__ || Object.getPrototypeOf(BlogPosts)).apply(this, arguments));
  }

  _createClass(BlogPosts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/h7KyS7/main_banner_compressor.jpg', alt: 'blog post' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'blog-detail-container-secondary' },
                _react2.default.createElement(
                  'div',
                  { className: 'title-blog' },
                  'What is Neureal?'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'caption-blog' },
                  'Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity, rather than just trying to crack a useless hash. Neureal seeks to give humanity the power to see the future and become limitless by putting tools currently used by the world\u2019s most powerful companies in the hands of EVERYONE. Neureal\u2019s design means it has great potential to become the world\u2019s most accurate predictor. Forget reliable accuracy, we are going black swan hunting! ',
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: 'https://www.visualcapitalist.com/black-swans-9-recent-events-that-changed-finance-forever/', 'data-href': 'https://www.visualcapitalist.com/black-swans-9-recent-events-that-changed-finance-forever/' },
                    '(Black Swans: 9 Recent Events That Changed Finance Forever)'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Let me give you a brief overview of our team, the project, a few use cases and provide links so you can do your own research. If you have any questions, please feel free to reach out to me and I will get you answers or get you connected directly with the CEO or Chief Architect. Our policy is extreme transparency, so if you want access to any of our documentation, you only have to ask and I will show you where to find it.',
                  _react2.default.createElement('br', null),
                  ' Our CEO is Jen Greyson. This month she was voted among Chipin\u2019s \u201CTop 8 Women in Cryptocurrency.\u201D She brings over a decade of business experience running a multi-million dollar life insurance company and another decade running a publishing company, where she specialized in intellectual property, turning ideas into money.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' I have known our Chief Architect, Wil Bown, since he was organizing Bitcoin meetups in 2013, where we each easily spent over $50K (today\u2019s exchange) of BTC doing Bitmob events at restaurants in the Salt Lake valley. He has been programming for over 30 years, has been programming blockchain projects since 2011, and won first prize at the 2015 Texas Blockchain Hackathon with a prototype of Neureal. This prize entitled him to a $500,000 investment if he was able to launch an ICO within a year. Wil was, unfortunately, unable to capitalize on this opportunity at the time and has since built a team, made connections, and strategized to ensure the project\u2019s success long after its Token Generation Event.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' More information about our team can be found here:',
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: 'https://docs.google.com/presentation/d/18aTxA6LZCq4ewikatIYKymD9ZRBjUtZMJueIEtWeQ-o/edit?usp=sharing',
                      'data-href': 'https://docs.google.com/presentation/d/18aTxA6LZCq4ewikatIYKymD9ZRBjUtZMJueIEtWeQ-o/edit?usp=sharing' },
                    _react2.default.createElement('br', null),
                    'Neureal Team and Advisors'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Neureal is a platform, one which allows anyone to approach the platform with something they want to be predicted, data they believe is relevant to that prediction, and a reward for the most accurate predictors (in our currency of Neurons). From there, predictive algorithms, neural networks, human-powered/augmented prediction markets compete to give the most accurate prediction. This competition has an incredible number of advantages over existing models. For example, it ensures the most accurate predictor available is used to make the prediction every time, incentivizes the further development of new predictive algorithms/techniques, and the refinement of existing ones.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' It also creates a great market for the projects currently trying to make it possible for individuals to regain control of their data and monetize it for themselves, as our predictors would always be attempting to obtain more data they believe would allow them to predict more accurately. (As an aside, our CEO is working several valuable connections to bring several hospitals and cancer centers into the data stream discussion.)',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' The project is also, in my opinion, a very eloquent solution to the question of, \u201CWhat is being done about all this power waste in crypto?\u201D With Neureal, the power is used to make useful predictions for individuals and businesses rather than trying to crack a useless hash. Most of the experts I have been listening to in the space have said for years that all this hash power is ultimately going to be used for AI.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Here is our current roadmap (please note this is subject to change): We just closed our Pre-Pre sale on the 14th, and are now moving forward into our pre-sale which begins April 5th. The presale is for accredited investors only and has a minimum purchase of $100,000. This will continue until April 15 when we will begin the Token Generation Event public sale. In this sale, tokens will be available in hourly buckets. The price will rise slightly after each bucket with a maximum of 6X the opening price. We have designed the sale this way in an attempt to distribute the tokens as widely as possible. Unfortunately, we will not be allowing US citizens to participate in the Token Generation Event public sale.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' All Neureal tokens received will be locked in their wallets. This lock will remain in place until the Neureal network is fully secure, has passed internal auditing and testing, publicly demonstrates its ability to scale, capability for accuracy (Via our 2 MVPs), and is ready to accept prediction contracts (Oracles) from the general public. We conservatively expect this process to take 2 years. During that period, we will be running our 2 MVP products. The first is a crypto trading bot which will predict not just what a pairing will be tomorrow, but a continuous prediction of the price going from the next second onward, being constantly updated by live data. We feel this is a good first project because it\u2019s not extremely complicated, there is a glut of freely available data, and it\u2019s appealing for our target audience. The second MVP uses the Neureal network to predict hurricane travel path and intensity using live streaming meteorological data, and do so more accurately than any prediction system currently available. The progress on and predictions made by these MVPs will be freely available to the public as a demonstration of the network\u2019s capabilities.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' We have been in talks with a number of companies who want to use Neureal as a service, but for a concrete example, let\u2019s use Lyft. When/if Neureal\u2019s services become available, they would like to have their driverless cars autonomously ask for predictions about where the most profitable place to wait for their next customer. In practice, a Lyft car could be available before you knew you needed it. As another example, airlines could use the Neureal network to improve their existing predictive algorithms, such as their \u201Cno show\u201D algorithm which caused so much trouble this past year. New practical examples are being offered up by our community as they continue to answer how they\u2019d use the power of Neureal.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' We are also in talks to partner with several projects in the blockchain space, for instance, SingularityNET. They are building a piece of our network described in our whitepaper which would allow AI agents to interact autonomously with each other, Neureal in this case. Harnessing their efforts frees up development time and resources. Having Neureal would mean they could add predictive algorithm services to every AI product on their marketplace, you could use agents on SingularityNET as predictors on the Neureal network, and the data generated by each project will be useful to the AI agents of the other. Neureal has this kind of synergistic potential with virtually every AI project currently active or proposed\u200A\u2014\u200Aevery AI project in the world, not just AI+blockchain.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Additionally, we are pursuing partnerships with institutions like the University of Utah, participating in a program that allows students of the University to design predictors to compete on the Neureal network for credit. We will also be providing a Default Prediction Strategy (DPS) as outlined in our white paper. The DPS will run on NVIDIA GPUs and is plug-and-play, so non-technical individuals can run it just like they would run a cryptocurrency miner. That system itself has the potential to eclipse any kind of cloud offering like Google TPU cloud.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Our legal team has been doing everything possible to comply with regulations on all fronts. They say the strategy we are currently pursuing is one that many cryptocurrency projects will want to look to going forward. I cannot say more about this at this time, as we are still finalizing everything. Please watch our official channels for announcements.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' I hope I still have your attention after that massive wall of text. Thank you so much for your time. Information about our project can be found at the links below. We would love to answer any questions here or in our official telegram.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: 'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', 'data-href': 'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                    'Please join our Telegram community!'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null)
                ),
                _react2.default.createElement('div', { className: 'creator-blog' })
              )
            )
          )
        )
      );
    }
  }]);

  return BlogPosts;
}(_react.Component);

exports.default = BlogPosts;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _NewsPost = __webpack_require__(64);

var _NewsPost2 = _interopRequireDefault(_NewsPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_Component) {
  _inherits(News, _Component);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  _createClass(News, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'div',
          { className: 'podcast-news-flex' },
          _react2.default.createElement(
            'div',
            { className: 'news-column' },
            _react2.default.createElement(
              'h2',
              { className: 'news-header' },
              'News'
            ),
            _react2.default.createElement(_NewsPost2.default, {
              newsLink: "https://medium.com/@Francesco_AI/the-convergence-of-ai-and-blockchain-whats-the-deal-60c618e3accc",
              newsImage: "https://cdn-images-1.medium.com/max/2000/1*xJ9uihFO6wBW5RfyEVbuEQ.jpeg",
              newsTitle: "The convergence of AI and Blockchain: what’s the deal?",
              newsCaption: "It is undeniable that AI and blockchain are two of the major technologies that are catalyzing the pace of innovation and introducing radical shifts in every industry. Each technology has its"
            }),
            _react2.default.createElement(_NewsPost2.default, {
              newsLink: "https://cointelegraph.com/news/neureal-bringing-artificial-intelligence-to-the-people?utm_content=bufferae0b9&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer",
              newsImage: "https://cointelegraph.com/images/725_Ly9jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9kM2Q3YzgzNzIxZjdmODNiMDMxOTNlZWI2Y2JjMWUzMS5wbmc=.jpg",
              newsTitle: "Иeureal: Bringing Artificial Intelligence to the People",
              newsCaption: "Иeureal is the first decentralized open-source protocol designed to produce a distributed artificial intelligence (AI) architecture that is incentivized, maintained and housed"
            }),
            _react2.default.createElement(_NewsPost2.default, {
              newsLink: "https://www.newgenapps.com/blog/future-of-ico-impact-of-initial-coin-offering",
              newsImage: "https://www.newgenapps.com/hs-fs/hubfs/bitcoin.jpg?width=1196&height=598&name=bitcoin.jpg",
              newsTitle: "11 Experts on the Future of ICO & its Impact on Financial Markets",
              newsCaption: "ICO i.e. Initial Coin Offering is the new wave of fundraising where ideators ditch the complete hassle of the lengthy funding process and raise capital via blockchain technology"
            }),
            _react2.default.createElement(_NewsPost2.default, {
              newsLink: "https://medium.com/@chain_explainer/blockchain-insider-jen-greyson-2610af01c709",
              newsImage: "https://cdn-images-1.medium.com/max/1600/1*pYXvf8puA9rCQunqjBJlWw.jpeg",
              newsTitle: "Blockchain Insider: Jen Greyson",
              newsCaption: "Recently named one of the Top 8 Women in Crypto, Jen Greyson of the Neureal Network and CEO of Powered by Neureal brings decades of executive leadership to the blockchain/crypto"
            }),
            _react2.default.createElement(_NewsPost2.default, {
              newsLink: "http://usaweekly.com/2018/01/interview-with-jen-greyson-ceo-at-neureal/",
              newsImage: "https://www.strongholdcybersecurity.com/wp-content/uploads/2018/01/usa-weekly.jpg",
              newsTitle: "Interview with Jen Greyson, CEO at Neureal",
              newsCaption: "Starting a business is a big achievement for many entrepreneurs, but maintaining one is the larger challenge. There are many standard challenges that face every business whether they"
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'podcast-column' },
            _react2.default.createElement(
              'h2',
              { className: 'podcast-header' },
              'Podcasts'
            ),
            _react2.default.createElement(
              'div',
              { className: 'podcast-container' },
              _react2.default.createElement(
                'div',
                { className: 'podcast-post' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://vimeo.com/227450398', target: '_blank' },
                  _react2.default.createElement(
                    'div',
                    { className: 'news-detail-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'news-container-padding' },
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-author' },
                        'Ernest Hancock'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-detail-flex' },
                        _react2.default.createElement('a', { className: 'headphone ion-headphone' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'podcast-title' },
                          'Hour 3'
                        )
                      ),
                      _react2.default.createElement('div', { className: 'learn-more-container' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'podcast-container' },
              _react2.default.createElement(
                'div',
                { className: 'podcast-post' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://onthebus.podbean.com/e/043-wil-brown-robots-virtual-reality-and-data-on-the-blockchain/', target: '_blank' },
                  _react2.default.createElement(
                    'div',
                    { className: 'news-detail-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'news-container-padding' },
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-author' },
                        'Brandon Reese & Daniel Blum'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-detail-flex' },
                        _react2.default.createElement('a', { className: 'headphone ion-headphone' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'podcast-title' },
                          'On The Bus Podcast'
                        )
                      ),
                      _react2.default.createElement('div', { className: 'learn-more-container' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'podcast-container' },
              _react2.default.createElement(
                'div',
                { className: 'podcast-post' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://alwaysthejourney.com/2017/12/08/always-the-journey-podcast-episode-no-2/', target: '_blank' },
                  _react2.default.createElement(
                    'div',
                    { className: 'news-detail-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'news-container-padding' },
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-author' },
                        'Jason Woodland'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-detail-flex' },
                        _react2.default.createElement('a', { className: 'headphone ion-headphone' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'podcast-title' },
                          'Always the Journey Podcast Episode No. 2'
                        )
                      ),
                      _react2.default.createElement('div', { className: 'learn-more-container' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'podcast-container' },
              _react2.default.createElement(
                'div',
                { className: 'podcast-post' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://freecitiespodcast.libsyn.com/decentral-hub-and-d10e-recap', target: '_blank' },
                  _react2.default.createElement(
                    'div',
                    { className: 'news-detail-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'news-container-padding' },
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-author' },
                        'Anthoney'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-detail-flex' },
                        _react2.default.createElement('a', { className: 'headphone ion-headphone' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'podcast-title' },
                          'DeCentral Hub and D10e ReCap'
                        )
                      ),
                      _react2.default.createElement('div', { className: 'learn-more-container' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'podcast-container' },
              _react2.default.createElement(
                'div',
                { className: 'podcast-post' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.youtube.com/watch?v=tZ2XKUoNtyc', target: '_blank' },
                  _react2.default.createElement(
                    'div',
                    { className: 'news-detail-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'news-container-padding' },
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-author' },
                        'Future Tech Podcast'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'podcast-detail-flex' },
                        _react2.default.createElement('a', { className: 'headphone ion-headphone' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'podcast-title' },
                          'Neureal Open-Source, Peer-to-Peer Predictive AI, Built on the Blockchain'
                        )
                      ),
                      _react2.default.createElement('div', { className: 'learn-more-container' })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return News;
}(_react.Component);

exports.default = News;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsPost = function (_Component) {
  _inherits(NewsPost, _Component);

  function NewsPost() {
    _classCallCheck(this, NewsPost);

    return _possibleConstructorReturn(this, (NewsPost.__proto__ || Object.getPrototypeOf(NewsPost)).apply(this, arguments));
  }

  _createClass(NewsPost, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'news-container' },
        _react2.default.createElement(
          'div',
          { className: 'news-post' },
          _react2.default.createElement(
            'a',
            { href: this.props.newsLink, target: '_blank' },
            _react2.default.createElement('img', { className: 'news-img', src: this.props.newsImage, alt: 'news' })
          ),
          _react2.default.createElement(
            'a',
            { href: this.props.newsLink, target: '_blank' },
            _react2.default.createElement(
              'div',
              { className: 'news-detail-container' },
              _react2.default.createElement(
                'div',
                { className: 'news-container-padding' },
                _react2.default.createElement(
                  'h2',
                  { className: 'news-title' },
                  this.props.newsTitle
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'news-caption' },
                  this.props.newsCaption + '...'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'learn-more-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'news-learn-more' },
                    'Learn More'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NewsPost;
}(_react.Component);

exports.default = NewsPost;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost1 = function (_Component) {
  _inherits(BlogPost1, _Component);

  function BlogPost1() {
    _classCallCheck(this, BlogPost1);

    return _possibleConstructorReturn(this, (BlogPost1.__proto__ || Object.getPrototypeOf(BlogPost1)).apply(this, arguments));
  }

  _createClass(BlogPost1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/eWUqqS/Round_1_Blogs_02.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Eric Nease'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'February 21, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'blog-detail-container-secondary' },
                _react2.default.createElement(
                  'div',
                  { className: 'title-blog' },
                  'Blockchain vs Bitcoin: Separating Tech and Use Case'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'caption-blog' },
                  'It\u2019s 2018 and it\u2019s official: everyone knows about bitcoin. Unfortunately, not everyone knows the wider world of crypto assets beyond bitcoin. That\u2019s a shame because some of the most interesting projects and benefits of blockchain exist outside of use cases like currency or storage of value.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' To go beyond bitcoin, one must first understand the blockchain.',
                  _react2.default.createElement(
                    'div',
                    { className: 'sub-title-blog' },
                    'The Blockchain Behind Bitcoin'
                  ),
                  _react2.default.createElement('br', null),
                  ' The blockchain is a trustless and decentralized method of exchange. It is an immutable ledger distributed across members of the network that does not require a centralized authority to ensure the integrity of the system. This exchange can be transacting value in the form of digital currency: bitcoin.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' If we look at bitcoin, the blockchain records every transaction made on the network since its inception. When you send or receive bitcoin, special users known as \u201Cminers\u201D verify those transactions by checking all transactions in the network to make sure that transaction is valid. That transaction is then committed to a block in the chain and will be referenced every time a miner verifies a new transaction. This ensures the system is updated and correct with every exchange made between its users.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' This solves a fundamental issue with exchanging digital information known as the double spending problem. If you send a file via email, you do not lose that file. It is merely copied and now two of those files exist. For money, this would not work. With blockchain, transacting value is transparent and fair across the network. It maintains its integrity by accurately accounting for changes in value due to each transaction.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'sub-title-blog' },
                    'Why This Matters for Currency in a Modern World'
                  ),
                  _react2.default.createElement('br', null),
                  ' The evolution of both money and the systems to control/facilitate that money have evolved over time. Progressing from precious metals to paper money to debit and credit has made it easier for money to move in an economy. It offers more services and options for users. But in order to use those services, we put trust in those who offer them. Third party intermediaries hold participants accountable. This centralization has drawbacks that can include corruption, fraud, vulnerability to cyber attack, and trust in a fourth party (regulation) to keep intermediaries honest.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' With blockchain, we have achieved the best of both worlds. We can develop a system of reliable, cheap, and fast transactions\u2014and we can do it without a third party. These networks are global and open allowing for participation across the globe unfettered from regional governance. Blockchain allows for the sort of reach and opportunity not seen since the dawn of the internet.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'sub-title-blog' },
                    'The Blockchain Beyond Bitcoin'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Let\u2019s look outside of currency. We have a network with global reach, open participation, and a reliable ledger of exchange.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'bold-caption' },
                    'Energy Sector:'
                  ),
                  ' As green energy options like solar become more viable, it creates opportunity for energy users to also become energy producers. There are currently centralized methods of selling power you generate via solar panels to the grid. With blockchain, individuals who produce energy and those who need it can exchange directly between one another.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'bold-caption' },
                    'Supply Chain (and your food!):'
                  ),
                  ' Consumer awareness is at an all time high\u2014and that\u2019s a good thing! Consumers can get piece of mind by checking that products make legitimate claims by various stamps of approval from third parties. We trust that those third parties are honest and reliable. But what if we tracked an item through production using the blockchain? Each product could be traced with full transparency from production to sales floor.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' This can be applied to food by verifying organic or non-GMO labelled products. In the instance there is a food scare leading to a recall, it can take time to check product and trace its origin to determine whether it is safe. With blockchain, items can be traced in a fraction of the time and get potentially harmful food product off shelves faster.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'bold-caption' },
                    'Distributed Supercomputing:'
                  ),
                  ' In 2007, researchers at Stanford University sought to understand how proteins fold and thus affect how they work in your body. The findings would help understand disorders linked to incorrect folding such as Alzheimer\u2019s disease. Unfortunately, this is a complex task requiring plenty of processing power-- so they outsourced it using PlayStation 3.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' PlayStation 3 owners were able to donate idle processing power to the project. But what if this was available to any organization or individual? Instead of going through costly data centers, you could leverage users on the blockchain willing to offer their processing power to your project. As a contributor, you would be incentivized to provide that computing power. By leveraging thousands (or millions) of computers across the network, you could have a supercomputer at your fingertips for a fraction of what it would cost to go through a centralized institution.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Now take that distributed network, and imagine combining access to live data streams that allow that processing power to make accurate predictions based on that data. Low level predictions can be fed back into the network and incorporate more data and processing power to increase the accuracy and precision of those predictions. Protein folding is complex, but by leveraging global computation we can create models to predict everything from heart attacks to hurricanes\u2014and we can do it far better than any human generated predictions in existence.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Whether it\u2019s voting, healthcare records, ride sharing, autonomous vehicles, or artificial intelligence\u2014blockchain can establishing a trustless record of accountability for people in a way that offers transparency, can leverage distributed populations, and allow for transactions with fewer barriers placed by third party intermediaries.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' To see how blockchain is impacting AI and supercomputing, join our Telegram:',
                  _react2.default.createElement('br', null),
                  ' Link:',
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', 'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                    'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
                  ),
                  _react2.default.createElement('br', null)
                ),
                _react2.default.createElement('div', { className: 'creator-blog' })
              )
            )
          )
        )
      );
    }
  }]);

  return BlogPost1;
}(_react.Component);

exports.default = BlogPost1;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost2 = function (_Component) {
  _inherits(BlogPost2, _Component);

  function BlogPost2() {
    _classCallCheck(this, BlogPost2);

    return _possibleConstructorReturn(this, (BlogPost2.__proto__ || Object.getPrototypeOf(BlogPost2)).apply(this, arguments));
  }

  _createClass(BlogPost2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/gsDrVS/Round_1_Blogs_03.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Eric Nease'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'February 28, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'blog-detail-container-secondary' },
                _react2.default.createElement(
                  'div',
                  { className: 'title-blog' },
                  'What is a Bitcoin/Crypto-Wallet Anyway?'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'caption-blog' },
                  'Crypto assets require a fundamental change in how we perceive and approach not only money but security. Once you decide to own crypto assets, you will also have to decide where and how to keep them.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' To go beyond bitcoin, one must first understand the blockchain.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' When thinking of storing value, cash is easiest to wrap our heads around. The bank holds cash available to you. You can withdraw funds in that cash and store it in a physical wallet. Simple, easy, and somewhat effective if not cumbersome. Not many people are willing to hold all the cash available to them when they have cards that can accesses it far easier. These offer a level of convenience and access but also come with extra security measures like a PIN number.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Crypto-wallets offer a unique combination of access, ownership, and security to storing and using your wealth.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'sub-title-blog' },
                    'Wallets? Try \u201CKeychain\u201D'
                  ),
                  _react2.default.createElement('br', null),
                  ' Take your debit card. It doesn\u2019t hold your money\u2014it allows you to transact by accessing those funds through your bank. There are measures in place to ensure those transactions are secure.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Crypto assets don\u2019t use cards. Instead, blockchain platforms like bitcoin use public and private keys. Your public key is an alphanumeric string of characters that funds can be sent to and from. When you send bitcoin to a friend, you are sending it to their public key.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' In this way, your public key is like the account number attached to your debit card, or even your email address.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  'Your private key is kept hidden. How you handle your private key will depend on which wallet you use and the level of security you prefer for your wealth. When someone sends you bitcoin, the only way to tell that it\u2019s you is to tie your public key to your private key. The private key is used to generate a digital signature to ensure its authenticity.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  'In other words, your private key is kind of like your PIN number, or password for your email. Even though the terms are different, the principle is the same. There must be a destination to send and/or receive funds and then a way to ensure those are tied to the correct individuals securely.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'sub-title-blog' },
                    'Security & Theft'
                  ),
                  _react2.default.createElement('br', null),
                  ' The security of wallets will vary depending on which type you choose, but there are commonalities between them that you ought to know.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' First, like your PIN, your private key must be kept secret unless you want someone to have access to your funds. Your public key will appear as an address and will change with each transaction to hide your transaction history from others on the network while still tying those transactions back to you.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Maybe the most appealing aspect of crypto assets is that no one can steal your bitcoin or hack the blockchain in a way that jeopardizes your wealth. This is true even if you lose your phone that has your crypto-wallet, or worse, someone stole it and can access your funds. What happens to your crypto then?',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' With crypto-wallets, you are able to recover your funds using instructions given to you when you set up your wallet. By completing the security protocol that has you input information provided exclusively to you while registering your wallet, you can recover your funds to a new wallet and they will be unavailable to anyone who gets a hold of your lost/stolen device.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Crypto-wallets also come with password and/or PIN requirements for sending and receiving any funds meaning that even if they can access your wallet and view your funds, they will be unable to transact with them unless they know your password/PIN.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Deciding your level of security will depend on how you intend to use your crypto assets and can be found [here].',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Don\u2019t forget to follow us on Telegram:',
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A',
                      'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                    ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
                  )
                ),
                _react2.default.createElement('div', { className: 'creator-blog' })
              )
            )
          )
        )
      );
    }
  }]);

  return BlogPost2;
}(_react.Component);

exports.default = BlogPost2;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost3 = function (_Component) {
  _inherits(BlogPost3, _Component);

  function BlogPost3() {
    _classCallCheck(this, BlogPost3);

    return _possibleConstructorReturn(this, (BlogPost3.__proto__ || Object.getPrototypeOf(BlogPost3)).apply(this, arguments));
  }

  _createClass(BlogPost3, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/mwjRx7/Round_1_Blogs_07.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Eric Nease'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'March 7, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'Business as Usual: Crypto Community Moves Forward Despite FUD'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'Has the sky fallen? Has the bubble popped? Is this what the news has warned us about when it comes to vague bitcoin press coverage?',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' If you\u2019re newer to the world of crypto assets, the following chart might cause some discomfort, especially if you\u2019ve recently purchased bitcoin since December.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('img', { className: 'blog-image', src: 'https://image.ibb.co/eVjsx7/bitcoin_Chart_compressor.jpg', alt: 'bitcoin chart' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' We are using bitcoin here because it best represents the market. The sudden rise and recent fall has left many worried about the state of crypto assets. But it isn\u2019t the first time bitcoin has seen sharp corrections. In fact, we can show almost the same pattern from 2012-2013 here:',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('img', { className: 'blog-image', src: 'https://image.ibb.co/g6QnVS/chart_Span_compressor.jpg', alt: 'bitcoin chart' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Those in the crypto community for long enough know that this is par for the course. It\u2019s part of the process. In fact, it\u2019s not even the worst bitcoin has seen. As of February 1st, 2018, the correction from all time highs is 55%.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Yet we only have to go back to September to recall the 40% correction. Go back even further and you can see a ~50% correction in February 2014. The tumultuous year-long fall from ~$1072 to $206 throughout 2014, the sharp correction of over 70% in one week of April 2013, the 90% crash in 2011 [1]\u2014none of it changes the fact that the crypto community is still here and moving forward.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' These numbers aren\u2019t meant to predict what will happen next in the market. It\u2019s to illustrate that developers and entrepreneurs continue to drive the space forward despite these setbacks. This is grounded in the belief that the fundamental technology that allows for effective decentralization has revolutionary value for our world.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' This is the crux of crypto. It is beyond bitcoin. It\u2019s the promise of benefitting everyone with viable use cases for this technology.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Market FUD won\u2019t deter Mark Zuckerberg from dedicating research to blockchain and decentralized protocols. It doesn\u2019t stop tech giants like Samsung from entering the mining hardware market. [3] And it isn\u2019t stopping promising ICOs from hitting their fundraising targets, sometimes at breakneck speeds.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' As FUD works its way into the minds of retail investors, it\u2019s important to look at the fundamentals for why this space is valuable. That boils down to the technology underpinning crypto assets and the myriad applications in which it can benefit existing and emerging industries.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' If the current crypto climate worries you, dig into these projects. Gravitate to ones with promise and spread your focus across several teams, what they are trying to accomplish, and how they\u2019re going to change their industry.',
              _react2.default.createElement('br', null),
              'It might surprise some who have jumped on the crypto-coaster of investing to fall so quickly, but long- term outlook and knowledge about the fundamentals driving the crypto-community outside of price action will offer perspective instead of frenzy. So, while impulsivity might get the best of many retail investors, take stock in the fact that developers continue to drive innovation and come up with better solutions using decentralizing technologies.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A',
                  'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost3;
}(_react.Component);

exports.default = BlogPost3;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost4 = function (_Component) {
  _inherits(BlogPost4, _Component);

  function BlogPost4() {
    _classCallCheck(this, BlogPost4);

    return _possibleConstructorReturn(this, (BlogPost4.__proto__ || Object.getPrototypeOf(BlogPost4)).apply(this, arguments));
  }

  _createClass(BlogPost4, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/hGBpH7/Round_1_Blogs_04.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Eric Nease'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'March 21, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'When Does Decentralization Make Sense?'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'At the time of this article, there are over 1,400 crypto assets listed on coinmarketcap.com. Where once we barely heard bitcoin spoken outside the occasional news release, today you can hear people discussing Ethereum in the grocery store. Those who would never concern themselves with cryptocurrencies and fintech are arguing the merit of Ripple and asking what this Cardano thing is.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'caption-blog' },
                'Digging through the rich world of crypto will inevitably lead to utility tokens. These are often businesses leveraging blockchain technology to disrupt an existing category in the market. And make no mistake, with this many crypto assets in existence, there\u2019s bound to be one disrupting any industry you can think of. Whether it\u2019s publishing, ride sharing, dozens of gaming application, energy, computing, virtual/augmented reality, insurance, advertising\u2014you name it and there\u2019s a blockchain for it.'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' But are all of these crypto assets necessary, or are we adding blockchain to business the way we added .com\u2019s to them in the 90\u2019s?',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'We Already Love Pseudo-Decentralized Platforms'
              ),
              _react2.default.createElement('br', null),
              ' The internet has been decentralizing aspects of business since the world wide web began. From eliminating the need to go to the store with Amazon and eBay to not even needing your computer to store your data with cloud storage. This approach to distributing these ecosystems has continued to evolved in recent years.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Uber and AirBNB are prime examples of our affinity for this model. With Uber, you no longer have to resort to individual taxi services. As long as Uber is allowed in your city, anybody who is authorized to be an Uber driver can offer you that service which is handled by Uber\u2019s platform. Similarly, AirBNB means you don\u2019t have to stay at the same hotels that limit your accommodation options.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' These platforms offer incentives for all users of the platform. Uber drivers are able to earn money while users have more convenience and flexible payment options that could suit them better. AirBNB creates more locations and rooming options to accommodate travellers. Reputation based systems allow users to be more confident in their rooming choices\u2014often at better rates than they might find elsewhere',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' This has opened up the marketplace in a way. It has lowered the barriers to entry and improved upon the user experience. Of course, these are still centralized companies, so we will have to dig deeper.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Decentralizing, Blockchain, and the Token'
              ),
              _react2.default.createElement('br', null),
              ' The companies above do a good job of decentralizing their workforce but their platforms still depend on the trust of the central authority that secures the network. Blockchain and similar paradigms in the crypto-asset space can do this independent of a third party.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Blockchain is the foundational technology of cryptocurrency. It is an open, immutable record of data that is committed to a distributed ledger by distinct members of the network. That means we don\u2019t need a third party to verify when a transaction goes through (as in banks for currency) or an agreement is legitimate (contracts). We\u2019ve created remarkably secure and reliable platforms with the blockchain. But before we rush to blockchain the world, we need to assess when it\u2019s better than trusting a third party, and what advantages it offers.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog-underline' },
                '1. Decentralizing, Blockchain, and the Token'
              ),
              _react2.default.createElement('br', null),
              ' Any system that requires trust in another party is susceptible to fraud. Globally, the average percentage loss due to fraud between 1997 and 2016 was 5.85% as a proportion of global GDP. [1] That equates to $4.39 trillion.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' And it\u2019s increased 43% between study windows (1997-2007, 2014-2016).',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' This can have a real effect on industries. Take affiliate marketing platforms that drive traffic to websites. Companies rely on these platforms to delivery quality prospects to their business. In turn they receive metrics from paid campaigns and trust the results to be fair and accurate. Roughly half of all website visitors are bots [2] while losses from fraud could account for over $16 billion USD in 2017.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Decentralizing allows for an immutable record that can log transactions and agreements in a way that can\u2019t be forged. Transparency is a necessity to participate in the network and offers users piece of mind for companies, users, and stakeholders alike.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog-underline' },
                '2. Security (Redundancy)'
              ),
              _react2.default.createElement('br', null),
              ' Due to the distributed nature of the blockchain, the network remains secure. This is partly due to how special users commit data to the blockchain. These miners are many and anonymous and each contain a full copy of the ledger since its inception (known as running a full node). This means that if one is hacked, the network isn\u2019t compromised because the integrity of the ledger is maintained by the other nodes in the network. It has its own sort of internal redundancy.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Centralized systems do something similar. For instance, a data center will install multiple backup servers in case one fails. For critical information, a system shutdown is unacceptable and thus contingencies have to be build in. With blockchain, it\u2019s intrinsic to the design of the network and does not need a third party to handle that data for you.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog-underline' },
                '3. Open Access & Leveraging Populations'
              ),
              _react2.default.createElement('br', null),
              ' Decentralization often broadens participation. We have spread our communities beyond traditional borders and multinational ecosystems are built around these communities. Between the internet and gaming alone we have global reach to build and develop.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' In cases like bitcoin, this reach extends globally. It is open and allows anyone to take part. If you have an interesting project and want to promote an international community around your cause, you can leverage decentralization to allow more people to engage and contribute to your network. Thousands (or millions) of users can engage in projects they believe in.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Imagine clinical trials contributed by teams of researchers in different countries that allow each team to glean critical insights instead of wasting time doing one trial after another in small research groups and having to compare those with every other research group. Imagine the open marketplace that could be created for the gaming community from development to downloadable content. Imagine being able to contribute data to millions of computers worldwide that can process and make predictions based on that data',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' In 2007 Playstation participated in a Stratford study of human proteins to determine the role of protein folding in disorders like Alzheimer\u2019s\u2014a computationally expensive task. To circumvent this cost, Playstation 3 owners were able to contribute some of their processing power to the project. A single PS3 might not sound like a lot but taken together they can add up to a very significant contribution.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog-underline' },
                '4. Inefficiency in Centralization'
              ),
              _react2.default.createElement('br', null),
              ' Sometimes centralization makes sense. Other times, it\u2019s the hub of dated, inefficient protocols that cost time and money. The \u201Cif it ain\u2019t broke, don\u2019t fix it\u201D mentality stifles creativity and innovation. It keeps progress pigeonholed by the few who control that centralized authority.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Decentralized platforms allow for faster innovation due to their open nature of contribution. They can open up the roadblocks between agents in new ways that get rid of headaches. We are already seeing this in healthcare applications that aim to ease the logistical nightmare of coordinating patient, insurer, and care provider. Here we have a system that requires excessive correspondence and follow ups to manage a patient\u2019s care. Decentralized systems can allow open, encrypted communication between these three parties that can pre-qualify patients and fit them automatically to physicians according to insurance coverage, patient condition, physician specialization, and availability. These things don\u2019t have to be the headache they are with effective application of a decentralized system.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Decentralization is nothing new, but the new world of crypto assets and blockchain have given it a new spin with revolutionary ways of approaching our favorite industries. Blockchain business models align incentives through tokens. Whereas once, a shareholder, business, and customer would be competing for best interests, tokens align incentives. These new ecosystems allow for opportunity to disrupt and improve existing sectors while innovating for future markets.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A',
                  'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost4;
}(_react.Component);

exports.default = BlogPost4;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost5 = function (_Component) {
  _inherits(BlogPost5, _Component);

  function BlogPost5() {
    _classCallCheck(this, BlogPost5);

    return _possibleConstructorReturn(this, (BlogPost5.__proto__ || Object.getPrototypeOf(BlogPost5)).apply(this, arguments));
  }

  _createClass(BlogPost5, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/kbULPn/Round_1_Blogs_05.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Eric Nease'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'April 4, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'How to Choose a Crypto Wallet'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'Whether you\u2019re interested in the wide world of crypto assets or looking for another method to store your coins, there are plenty of options to choose from. Deciding which crypto-wallet you want to use will depend on which crypto asset you want to store among other factors.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Digging through the rich world of crypto will inevitably lead to utility tokens. These are often businesses leveraging blockchain technology to disrupt an existing category in the market. And make no mistake, with this many crypto assets in existence, there\u2019s bound to be one disrupting any industry you can think of. Whether it\u2019s publishing, ride sharing, dozens of gaming application, energy, couting, virtual/augmented reality, insurance, advertising\u2014you name it and there\u2019s a blockchain for it.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' If you\u2019ve read our previous article, you will know that when you buy a crypto asset like bitcoin you are participating in the blockchain using private and public keys. Choosing which crypto-wallet will depend on how you want to handle those keys.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                '\u201CHot\u201D Storage Crypto-Wallets'
              ),
              _react2.default.createElement('br', null),
              ' Most people purchase their crypto assets from an exchange where those tokens will appear in your online account. It knows you own that amount because these exchanges manage your private keys. They are also high-volume centers of wealth that are freely accessible to anyone with an internet connection.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Herein lies the heart of hot wallets: they are tied, in some way, to an internet connection.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Web Wallets (Browser)'
              ),
              _react2.default.createElement('br', null),
              ' Any crypto-wallet that requires you to log on to a website to view your crypto falls under this category. That includes any exchange that holds your crypto-asset. This involves increased trust in a third party\u2014a facet that runs counter to many crypto-enthusiasts.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Many web wallets hold your private keys which means they technically control your funds. Others allow you to own your private keys but require using their servers to load your wallet.',
              _react2.default.createElement('br', null),
              ' The advantage of a web wallet is that you can access it from any device with an internet connection. Unfortunately increased accessibility leads to increased vulnerability. Having your private keys available through an online source makes it more susceptible to hacks and fraud. To combat this, some web wallets include multi-sig verifications among other security measures to help protect your crypto assets.',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Software\u2014Desktop & Mobile'
              ),
              _react2.default.createElement('br', null),
              ' Software wallets are downloaded onto your computer or mobile device. This offers an extra layer of security by allowing you to own your private keys and keep your crypto assets off websites and exchanges susceptible to cyber attack. The odds of you being a specific target of crypto-theft are lower than centralized sites that are responsible for large volumes of funds.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' You can download a software wallet for your desktop or mobile device. Some are specific to a single crypto asset while others allow you to store multiple crypto assets on the same wallet.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' But that doesn\u2019t mean these wallets are full-proof safety precautions. As long as your device is tied to an internet connection it is still vulnerable. A hacker who breaks into your computer or mobile device can gain access to your wallet and take any number of actions to siphon your wealth away or simply steal your crypto assets.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Mobile wallets are convenient for those who want to have their crypto assets on hand wherever they go. In a world where we can transact peer to peer with nothing more than a QR code, mobile wallets are an appealing storage and usage method.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                '\u201CCold\u201D Storage Crypto-Wallets'
              ),
              _react2.default.createElement('br', null),
              ' Hot wallets offer ease of access to your crypto assets. Whether on your phone, desktop, or online, you can use your crypto assets conveniently. But given their level of security, what if you\u2019re uncomfortable with the amount you\u2019re storing in those wallets?',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Let\u2019s imagine your crypto-wallet as a regular physical wallet for cash. How much cash are you willing to walk around with? At some point, you would store unnecessary cash with the bulk of your wealth in a bank. For crypto assets, you would put them in cold storage.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Paper Wallet'
              ),
              _react2.default.createElement('br', null),
              ' Using and storing your crypto assets has everything to do with your private and public keys. We know from our last article that your public key is used to send and receive transactions while your private key ties those transactions back to you.\'',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' A paper wallet simply prints your private and public keys with their corresponding QR codes.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Paper wallets are used for a single cryptocurrency at a time since you would need to generate them separately for each crypto asset you own. By doing this, you can transfer the entirety of a crypto asset to a paper wallet and store it in a secure location.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Hardware Wallets'
              ),
              _react2.default.createElement('br', null),
              ' The holy grail for secure storage of your crypto assets. When it comes to versatility and security, hardware wallets are your ideal choice. These are devices that store your crypto assets and private keys offline.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Hardware wallets can be both password and PIN protected. They also provide versatility by allowing the storage of multiple crypto assets. Being able to interact with your crypto offers a much more user friendly experience than simply printing individual crypto assets on to paper wallets.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' When it comes to storing crypto asset values you are uncomfortable leaving in hot storage, hardware wallets are the best overall solution to securing your tokens.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Which Crypto-Wallet Should You Use?'
              ),
              _react2.default.createElement('br', null),
              ' This will ultimately come down to personal preference but there are some things to keep in mind. It helps to think in terms of paper money. Cash on hand can be used easily and freely but also means that money is more susceptible to theft or loss. Cash kept in the bank is safer but requires you to withdraw it from your account prior to spending it. This is similar to the relationship between hot and cold storage methods for crypto assets.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' It\u2019s best practice to only keep crypto assets in hot storage that you intend to use or will need to use quickly. Keeping your money on an exchange isn\u2019t your best option for security, but it makes it easier to sell those crypto assets if you need to.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Likewise, when it comes to values you would not be comfortable carrying in a regular cash wallet day-to-day, it would be in your best interest to move toward better security measures including a hardware wallet. This means if need to use your crypto assets, you may need to transfer them from your hardware wallet to an exchange or other platform.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' When it comes to choosing your crypto-wallet your assets will be a balance of long term security and short term usability. Use both hot and cold storage methods to balance your crypto assets appropriately and you\u2019ll be ahead with managing your tokens in the wide world of crypto.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A',
                  'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost5;
}(_react.Component);

exports.default = BlogPost5;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost6 = function (_Component) {
  _inherits(BlogPost6, _Component);

  function BlogPost6() {
    _classCallCheck(this, BlogPost6);

    return _possibleConstructorReturn(this, (BlogPost6.__proto__ || Object.getPrototypeOf(BlogPost6)).apply(this, arguments));
  }

  _createClass(BlogPost6, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/dwofPn/Round_1_Blogs_06.png', alt: 'blog post' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'How to Tell if Your AI + Blockchain Start Up is Doing It Right'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'In a world where no AI + Blockchain company is fully developed, this headline might seem like a bold statement to make. That doesn\u2019t mean we can\u2019t examine the criteria for viable solutions to AI using blockchain and how companies should navigate this space.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Start with Your Blockchain'
              ),
              _react2.default.createElement('br', null),
              ' An AI + Blockchain start up is, in many ways, like any other blockchain start up (which, in turn, is like any other start up). The market is flooded with ICOs grasping at contributor dollars for their platform. Those who have spent any time with these ICOs know that they are not created equal.',
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'The Marketing Mistake'
              ),
              _react2.default.createElement('br', null),
              ' The advice for most ICOs is to review the whitepaper, team, website, and so on. The assumption here is that a well developed and presented project is safer because they have invested resources into developing their platform.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' The pendulum has swung the other way and flashy, well designed ICOs are abundant. But why is this the case? In many instances it\u2019s because the marketing captures attention and fast funding from eager contributors.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' The dollars go toward marketing instead of development and growth. [The result is a situation that can have contributor funding sitting on a promise of something while the focus remains on more eyes.]',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'The Money First Mistake'
              ),
              _react2.default.createElement('br', null),
              ' Similar to the marketing mistake, these two go hand in hand with a problematic theme in the ICO space: lots of funding and little to show for it.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Big players like Cardano, EOS, and even TRON have found themselves in the top 10 crypto assets with multi-billion dollar market caps and no product, simply due to the promise of their product and a few names associated with them. In some cases, names that inspire great confidence and promising track records. Are these names worth billions of dollars? Remember: no product.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' This isn\u2019t to say these projects are doomed, but the aforementioned examples aren\u2019t the only ones. The paradigm in the ICO space seems to involve a premise and a white paper followed by funding and hope. Few projects dare to develop their product and forego the sexy face lift for foundational engineering of effective decentralized solutions.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Token Economics'
              ),
              _react2.default.createElement('br', null),
              ' Perhaps one of the trickiest aspects of understanding crypto assets for newcomers involves understanding token economics. This deals with creation and distribution of the token associated with a platform.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Important factors include how many tokens will be available, tokens available for purchase, contribution restrictions, type of token, among others. These are important to understanding the network and how to participate in it. But the way in which they\u2019re managed has implications.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Decentralized platforms rely on widespread participation. Start ups that are in line with that vision look to build communities around their solutions that foster the growth of the community and start up together. Positive signs include structuring their ICO in a way that is as inclusive as possible. Limiting funding to few sources encourages the same problems centralized entities already face (and if that\u2019s the case, why use blockchain at all?). Similar red flags pop up when start ups reserve the bulk of their tokens for themselves.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' It\u2019s not good enough to just add blockchain. There are no shortage of companies looking to raise fast cash because they can add blockchain. These aren\u2019t unlike businesses that made an employee open social media accounts because he heard he has to have his business on social media.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Combined with the right outlook/roadmap, great blockchain start ups are built with the vision, development, and community aligned with Satoshi\u2019s vision. The AI renaissance can benefit immensely from blockchain but only if done the right way. The way to see AI into the future is as a global community, not under lock and key of a few corporate entities.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'About the AI part... '
              ),
              _react2.default.createElement('br', null),
              ' Artificial intelligence isn\u2019t just an engineering challenge, it\u2019s also poses logistical problems. Those developing AI + Blockchain platforms',
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Knowledge of Blockchain'
              ),
              _react2.default.createElement('br', null),
              ' This isn\u2019t as obvious as it might sound. The requirements of AI can impose certain challenges for blockchain. Already we\u2019ve seen issues with network congestion in both bitcoin and Ethereum networks with transaction upon transaction in queue.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' That doesn\u2019t work for a competitive marketplace especially if working with live data. Start ups looking to blend AI + blockchain need to understand the limitations of various blockchain protocols and issues facing existing protocols today.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' The same issues facing crypto assets today are issues that AI + blockchain will have to address tomorrow. Low throughput, slow and expensive transactions, and a host of scaling issues await on the other side of highly successful AI + blockchain start ups.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' AI + Blockchain teams not only require foundational understanding of blockchain but should have at least one blockchain expert on their team to merge these technologies effectively and avoid the trap of merely adding buzzwords to bolster business ideas. Evaluate the AI + blockchain platform for how they address the shortcomings of blockchain for a competitive AI marketplace.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'The Where and How of The Data'
              ),
              _react2.default.createElement('br', null),
              ' Data is the food that feeds AI. Without it, AI cannot be trained effectively. Predictive AI algorithms depend on good data in order to achieve the best predictions. Because of this, data ought to be both varied and open.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Both static and live data feeds are invaluable depending on the design and goal of the AI platform. Since different entities may use an AI marketplace, that marketplace must be able to accommodate the necessary data. If we look at predictive AI, its predictions are limited by the data and how well it can predict that data. Access to, and the ability to handle, various data inputs is crucial to the platform\u2019s effectiveness. How is the platform going to operate based on the type of data provided and how can it leverage that for the end user?',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Perhaps the biggest advantage of a decentralized AI marketplace is the diversity of data. Data from a single source is problematic and serves as one of the roadblocks of the current centralized AI paradigm. This can lead to biases in the data that are collected from a single source. AI + blockchain start ups need to understand the role for open participation in data sharing and processing.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' When it comes to that data, start ups must remember that there are no \u201Cwalled gardens\u201D in a decentralized marketplace. Innovators must exercise caution when designing their AI + blockchain platforms to handle that data. Fortunately the encrypted nature of blockchain technology can allow for safe use and processing of data without compromising the security of that data. AI + blockchain start ups need to clearly define how they handle this issue in a way that maintains the integrity of the network.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'sub-title-blog' },
                'Method of Application'
              ),
              _react2.default.createElement('br', null),
              ' What is the purpose of blending AI + blockchain? Is it to build a global recognition platform? To contribute to general AI? To predict specific events?',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Artificial intelligence is quickly suffering from buzzword symptoms. Many hear AI and think, \u201CMachine that does it without humans.\u201D There\u2019s very little context. For AI + blockchain start ups, that simply won\u2019t do. In many cases, it\u2019s less about the AI specifically and more about the focus and execution of how it is integrated into the blockchain.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' AI + blockchain start ups need to be clearly defined. This can be difficult due to the nature of development. Many platforms are still being built as funding fuels that development. That means going back to the whitepaper and visiting the community to understand what the team is trying to achieve and how that fits into the current AI + blockchain ecosystem.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Some contributors might be surprised to discover that certain AI + blockchain start ups are not mutually exclusive and can even compliment one another. To discover how you will have to do a little research into each of their projects. While doing so, make sure they have detailed the method of AI application, the aim of that AI, and how it integrates into a decentralized global community.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' When looking at AI + blockchain start ups, you should investigate the possible pitfalls inherent to all budding blockchain projects. This is a tech focused industry drowning in marketing material hyping one ICO after another. When the tide settles, those with strong fundamentals and solid community will remain. Communities like Neureal aim to deliver a focused product with the right vision and development to see through the noise. Better to build it so that they may come than to fund it and hope it works.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A',
                  'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost6;
}(_react.Component);

exports.default = BlogPost6;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost7 = function (_Component) {
  _inherits(BlogPost7, _Component);

  function BlogPost7() {
    _classCallCheck(this, BlogPost7);

    return _possibleConstructorReturn(this, (BlogPost7.__proto__ || Object.getPrototypeOf(BlogPost7)).apply(this, arguments));
  }

  _createClass(BlogPost7, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/jV60Pn/Round_1_Blogs_08.png', alt: 'blog post' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'Inspiring AI: The Biological Basis for a Machine Mind'
            ),
            _react2.default.createElement(
              'div',
              { className: 'sub-title-blog' },
              'This is a neuron:'
            ),
            _react2.default.createElement('img', { className: 'blog-image-small', src: 'https://image.ibb.co/gFMr77/neuron_compressor.jpg', alt: 'neuron' }),
            _react2.default.createElement(
              'div',
              { className: 'image-caption' },
              '(https://www.evolvingsciences.com/Neuron%20.html)'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'It is a specialized cell in your nervous system responsible for relaying information from one location to another. It does this through action potentials\u2014small surges of electrical current that travel along the neuron.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Your brain is comprised of about 86 billion neurons organized in a way that allows you to see, hear, and smell the world around you. It makes sense of these sensations by organizing them in a way we can interpret. Complex brains can use higher level processing to apply cognition for awareness, context, and decision making.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' These neurons form a network by connecting to one another. If you bang your knee, a single neuron might relay that message to another until they reach the part of your brain that interprets pain. When it comes to complex tasks like interpreting the world around you, connections become a little more complicated.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('img', { className: 'blog-image-small', src: 'https://image.ibb.co/dbSaZn/neuron_detail_compressor.jpg', alt: 'neuron detail' }),
              _react2.default.createElement(
                'div',
                { className: 'image-caption' },
                '(https://ehumanbiofield.wikispaces.com/Neurons)'
              ),
              'Neurons in your brain have multiple sites where other neurons can connect known as dendrites. The electrical signal is sent through the cell, down the long tail known as the axon, and transmitted into the dendrite of yet another cell. A single cell can receive one to thousands of inputs along its dendrites which culminate in an output that travels down the cell and delivered to more dendrites at the next stage of the signal.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' In your cortex\u2014the folded fleshy outside always pictured in diagrams\u2014these neurons are arranged in layers.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('img', { className: 'blog-image-small', src: 'https://image.ibb.co/dwywPn/neuron_layers_compressor.jpg', alt: 'neuron layers' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Adding these layers of complexity to a simple functional unit like a neuron gives you a processor that can absorb, organize, and interpret data on its own. The field of neuroscience is tasked with decoding this single organ to understand how the brain works.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Neuroscientists of the world aren\u2019t the only ones looking at this sort of neural architecture. In recent decades, computer science has pushed machine learning forward into new realms. But before we delve into them, let\u2019s look at how you\u2019re able to read this article.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Light hits the cells at the back of your eye called retina. That is the last time your body is exposed to the raw data of what you are seeing. That\u2019s because the retina initiate a chain reaction of electrochemical signals that travel down your optic nerve. Light is our input.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' At this point, the information is simply electrical impulses. They go to the back of the brain which is responsible for sorting out the basic details like lines, curves, and shapes. From there it goes on to higher level processing that identifies what the object is and what it is doing.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('img', { className: 'blog-image-half', src: 'https://image.ibb.co/i1HO4n/brain_layer_compressor.jpg', alt: 'brain layer' }),
              _react2.default.createElement('img', { className: 'blog-image-half', src: 'https://image.ibb.co/dbNUc7/brain_compressor.jpg', alt: 'brain' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' This allows us to arrive at some conclusion about what we are seeing. It could be a man walking or a woman riding a bike or a bird chirping. This could be an output. We have taken information in the form of light and interpreted it to arrive at some conclusion.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' The bottom up processing is met by top-down ideas and concepts about what you are looking at\u2014experiences and information about it that are stored in your brain. Combined, your neural pathways allow you to perceive, recognize, and identify. They allow you to form judgements, memories, and impressions. Your brain is able to take light as an input and create any number of outputs from identifying a dog to deciding whether or not to eat a spoiled piece of food.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Of course this is just one example in a sea of complex things our brains are able to achieve. Things we take for granted. People have sought to achieve this level of learning with machines and for a long time those machines depended on humans to program these functions. We had to explicitly tell the system the criteria for identifying an object for it to be successful at the task.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' How does a program recognize a car? We tell it what makes a car and it compares photos or videos of cars to the criteria we\u2019ve programmed. We couldn\u2019t simply ask the program to figure out whether it saw a car or not on its own.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Enter neural networks and deep learning.',
              _react2.default.createElement('img', { className: 'blog-image-small', src: 'https://image.ibb.co/gLCHUn/artificial_neuron_compressor.jpg', alt: 'neuron detail'
              }),
              _react2.default.createElement(
                'div',
                { className: 'image-caption' },
                '(http://neuralnetworksanddeeplearning.com/chap1.html)'
              ),
              _react2.default.createElement('br', null),
              ' Each artificial neuron receives information from all the inputs in the previous layer, but it doesn\u2019t treat them equally. The information that neuron generates is a result of the information from prior neurons plus whatever bias that neuron has to the previous layer. Each neuron in this layer will then have its own weight for every neuron in the following layer and so on until arriving at the output.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Tuning these neurons is necessary to make sure the outputs are correct. The process of adjusting the weights and biases that artificial neurons have toward one another is akin to your brain deciding which connections are more important for understanding the data in the input.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' So how does this system work? Let\u2019s say you want to teach it to recognize people. Instead of programming the system to recognize Bill and tell him apart from Mary, you can train the system to learn on its own.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' We begin with pictures of Bill (input) and want to know whether it is Bill or Mary (outputs, 2). How can we tune all the artificial neurons in the hidden layers to spit out the correct answer? We don\u2019t. We leave them random and see what conclusion the system has. Then, using some calculus, we can tell the system how far off its output was from the correct answer.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' We minimize that error by nudging the weights of all the neurons in the system to arrive at the correct answer\u2014and we can build that adjustment into the system. The system establishes which connections are most important.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' This results in very specific pathways through the network to arrive at the right answer. We didn\u2019t have to tell the system anything about Bill or Mary. Instead we simply trained it by giving it examples off which to base its judgement',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' This is similar to the prototype theory in cognitive psychology whereby we can identify things based on an idealized prototype of that thing. By exposing an artificial neural network to many examples of a specific input, it creates concepts that it can apply to future examples it has never seen. Having seen 100,000 photos of birds, it might readily recognize everything from a sparrow to an eagle but also might lose accuracy on fringe examples like am emu or penguin.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Interestingly, each layer seems to respond to higher forms of complexity. Just as we saw our visual pathways construct an idea of a car from light, a neural network might piece together basic lines and curves in its first layer while combining noses and eyes correctly in later layers. Given a picture of a dog, initial layers might only process the many lines and angles from the fur. Deeper in the network, those lines might piece together to create dog-like shapes. Later still those shapes may coalesce into dog-like representations that allow the network to arrive at the simple decision: is this a dog or not?',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Both artificial and biological neural networks function like assembly lines. They build their conclusions by parsing simple pieces of information into increasingly complex forms and ideas as those inputs are relayed down the assembly line. The product we end up with depends on our goal, but in our case it\u2019s identification.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('img', { className: 'blog-image-half', src: 'https://image.ibb.co/jrjmN7/inner_brain_compressor.jpg', alt: 'neuron detail' }),
              _react2.default.createElement('img', { className: 'blog-image-half', src: 'https://image.ibb.co/dxCFh7/neuron_learning_compressor.jpg', alt: 'neuron detail' }),
              _react2.default.createElement('br', null),
              ' Our examination of neurons and the brain is simplistic here. Neurons account for 10% of the brains mass and supporting glial cells also transmit information between them. And although your brain is the hub of processing, it does not exist in isolation. The nervous system enervates the entire body which in turn influences the brain\u2019s behaviour. Our bodies and brains together are the complete ecosystem.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' While great progress has been made with neural networks, refining AI and bringing it to a place that can make safe and sophisticated solutions for humanity\u2019s problems is an ever-evolving pursuit. While machines can compute far beyond human capabilities we still reign supreme in tasks we take for granted simply because our brain was built for them.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Artifical intelligence may have found its inspiration in biology, but time will tell how these processors diverge in their approach and converge in their application in a world destined for AI.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', 'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost7;
}(_react.Component);

exports.default = BlogPost7;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost8 = function (_Component) {
  _inherits(BlogPost8, _Component);

  function BlogPost8() {
    _classCallCheck(this, BlogPost8);

    return _possibleConstructorReturn(this, (BlogPost8.__proto__ || Object.getPrototypeOf(BlogPost8)).apply(this, arguments));
  }

  _createClass(BlogPost8, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/jV60Pn/Round_1_Blogs_08.png', alt: 'blog post' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'Expanding the mind'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'How does the human mind perceive knowledge? Being human, we have our perception to connect us to the outer world. We see with our eyes, hear with our ears and smell with our nose. As we grow up we start to form opinions and learn to verbally communicate with one another. Our interests change over time, but curiosity never ceases. In the end, a lifelong of thinking, learning and answering questions leaves one with more questions than answers. It is the complex network within ourselves responsible for processing all that we perceive. An interconnected network of neurons that communicate internally, which requires no conscious thought. It is not this network that limits us, but it is our capabilities of processing all that we perceive. Our perception creates converged information formats, which we call thoughts. The human mind is incredibly effective in focusing its efforts, but as it specializes in one direction, it takes away from another.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Science is ingrained within our society and it affects our personal living space. Its focus is to take in the whole picture in a systematic way on a specific subject. Science gathers large amounts of data, looks for connections and draws conclusions from them. Regardless of our best efforts to minimise error, we arguably are innately biased from the way that we perceive. Historically having evolved technically and intellectually requires us to constantly reassess our approach. The entire human learning curve has been a process of trial and error. A comprehensible next step in human evolution would be the integration of artificial intelligence within our society, to substitute our traits which we are innately not optimally competent at. A societal introspection is necessary for humanity to evolve.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' \u0418eureal offers an expansion of our minds. Although it is an artificial intelligence platform, it shows similar basic mechanisms with the human mind. It learns a lot like humans do, only faster, more effective and efficiently by using an algorithm in a hierarchical fashion. It uses a mining strategy with stackable architecture. These miners are those who run this algorithm or an altered version of it, and therefore they serve as predictors on multiple levels. It is as if multiple brains are interconnected with one another, seemingly communicating information automatically into a live data stream. Collecting data through \u0418eureal counters the problem of human perception bias.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Perhaps \u0418eureal is the bridge that connects our neural network with those of others. It uses blockchain technology to make this computing power infinitely scalable and accessible by the entire world. Blockchain offers an interconnected network similar to our nervous system. It allows us to process all the data input globally, in which miners serve as its neurons. These miners continually exchange information, constantly learning and evolving. Traditionally processing this amount of information would require an enormous data center, significantly increasing risk for it is centralized. If a single neuron in our nervous system would for some reason perish, in the grand scheme of things nothing changes. Although if a centralized location where all the data is processed would fail, we would soon be flatlining. The limitations that human perception has are difficult to deal with. Nonetheless this is precisely what modern science attempts. It is through the compliance of scientific principles that researchers battle our innate biases. By using artificial intelligence, scientific compliance is optimized, error is reduced, and learning is accelerated. The blockchain eliminates logistical problems and greatly enhances the availability of data subjects, a problem often faced in research. It is through a stream of data that results no longer just reflect the past. Instead this stream of data gives a representation of the present, while potentially even predicting the future. \u0418eureal expands upon a global mind in a way the human mind on its own never could.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', 'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost8;
}(_react.Component);

exports.default = BlogPost8;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost9 = function (_Component) {
  _inherits(BlogPost9, _Component);

  function BlogPost9() {
    _classCallCheck(this, BlogPost9);

    return _possibleConstructorReturn(this, (BlogPost9.__proto__ || Object.getPrototypeOf(BlogPost9)).apply(this, arguments));
  }

  _createClass(BlogPost9, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/mmEJun/Round_1_04.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Jen Greyson'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'March 14, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'Neureal and Vitalik\u2019s DAICO'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'Before he presented the idea publicly in January, Neureal had already implemented several of the Best Practices he suggests, among them, the requirement of community vote to release funds based on milestones, much in the way of current startup incubators.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Neureal has instituted several decisions to postpone its token generation event in order to implement Best Practices based on industry-wide issues. One of which was the removal of the soft and hard caps in order to prevent whales from dominating the token sale, as was seen in',
              _react2.default.createElement(
                'a',
                { className: 'link-accent', href: 'https://bravenewcoin.com/news/decentraland-raises-24-million-in-35-seconds-leaving-retail-investors-out-in-the-cold/',
                  'data-href': 'https://bravenewcoin.com/news/decentraland-raises-24-million-in-35-seconds-leaving-retail-investors-out-in-the-cold/',
                  target: '_blank' },
                ' Decentraland\u2019s 35-second, $24MM raise'
              ),
              ' that left a majority of the community unable to purchase tokens in the sale. Theirs wasn\u2019t the first occurrence, nor the last. What bothered the team at Neureal was that no one seemed to be making adjustments to counterbalance what was happening in the token sales.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'But the decision to pull the Neureal cap presented the problem of selling a vast amount of pre-release software access and the resulting deluge of a large stream of working capital without a way for the community to weigh in on the project\u2019s ability to reach its internal milestones.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'To account for this, Neureal implemented a strategy to engage smart contracts and voting to reward the project for successfully accomplishing milestones, thus keeping the majority of the funds received during the token generation event locked up.',
              _react2.default.createElement('br', null),
              'Bonus. By keeping the funds frozen, they can continue to appreciate based on an increasing value of ETH, as seen in their CEO\u2019s ',
              _react2.default.createElement(
                'a',
                { className: 'link-accent', href: 'https://medium.com/@JenGreyson/raise-1m-hodl-132mm-how-crypto-is-changing-the-vc-game-707112d6f79d',
                  'data-href': 'https://medium.com/@JenGreyson/raise-1m-hodl-132mm-how-crypto-is-changing-the-vc-game-707112d6f79d',
                  target: '_blank' },
                'recently published dataset'
              ),
              ' showing the current value of ETH for 2017 ICOs.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'This forward-thinking, community-driven philosophy is what continues to showcase Neureal as an emerging leader in the blockchain space. Coupled with their AI + Blockchain project, this startup is continuing to show why it will be one of the 2% who will still be around long after their token generation event.',
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', 'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost9;
}(_react.Component);

exports.default = BlogPost9;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost9 = function (_Component) {
  _inherits(BlogPost9, _Component);

  function BlogPost9() {
    _classCallCheck(this, BlogPost9);

    return _possibleConstructorReturn(this, (BlogPost9.__proto__ || Object.getPrototypeOf(BlogPost9)).apply(this, arguments));
  }

  _createClass(BlogPost9, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/kaREZn/RAISE_1_M_03_07.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Jen Greyson'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'March 28, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'Raise $1M; HODL $132MM. How crypto is changing the VC game.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'After a recent conversation on LinkedIn spurred my curiosity, I went looking at how the current spike of ETH would look for the ICOs of 2017. The results shocked me.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Raising capital isn\u2019t new. Raising capital in an asset class that can cause 15,000% gains; that\u2019s a big deal. A damn big deal considering the cost to bring some of these nascent technologies to market. Dev costs alone are skyrocketing (as they should be).',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Still, I would venture that most of the teams putting out ICOs in 2016 and early 2017 could not have predicted the run of BTC and ETH. I ran the numbers using just ETH, so some of these aren\u2019t accurate if they only took BTC, but the meteoric rise of BTC tracked with ETH, better some months. (Anyone\u2019s welcome to add a BTC column to the below spreadsheet.)',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Let\u2019s take a look at the leaderboard from two angles, % increase and current estimated value.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Mercatox, BlockCDN, Hacker Gold\u2014 all up 15,071% from the day\u2019s high of $7USD for ETH in December 2016.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' FIFTEEN THOUSAND PERCENT',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Hacker Gold raised $653k, currently worth $99MM',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Wings and Golem\u200A\u2014\u200Aup 10,520%',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Wings\u2019s raise of $2MM, currently at $220MM based on the day\u2019s high of $10USD for ETH compared to where it sits today at $1062USD (to say nothing of where it was when it was up at $1400 a few weeks ago.)',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Golem went from a respectable $8.5MM raise to $912MM\u200A\u2014\u200Anearly a billion in USD.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Ironically, the biggest leader is The DAO, turning their $168MM raise to $14.8B. Another irony is Tezos; their $232MM raise is valued at a little over a billion as well (though only a 360% increase).',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' So while ICOs have been touted for their ability to circumvent the silver handcuffs of VC deals, it is the ongoing gains that are an astounding infusion of working capital that will likely speed this new tech into the market.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' To that point, I didn\u2019t take the time to delve into where these companies are spending that money, how well they\u2019ve met their milestones, and how many of them have crashed. That dataset would be another interesting research project, likely one that could help dispel this ongoing fear that most ICOs are ideas with no ability to execute.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Spreadsheet of figures here:',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: 'https://docs.google.com/spreadsheets/d/1tuxyFdWWerddt7gZnCXixsj-eVh1SXrm0uiPrnfupM0/edit?usp=sharing',
                  'data-href': 'https://docs.google.com/spreadsheets/d/1tuxyFdWWerddt7gZnCXixsj-eVh1SXrm0uiPrnfupM0/edit?usp=sharing' },
                'https://docs.google.com/spreadsheets/d/1tuxyFdWWerddt7gZnCXixsj-eVh1SXrm0uiPrnfupM0/edit?usp=sharing'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', 'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost9;
}(_react.Component);

exports.default = BlogPost9;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost9 = function (_Component) {
  _inherits(BlogPost9, _Component);

  function BlogPost9() {
    _classCallCheck(this, BlogPost9);

    return _possibleConstructorReturn(this, (BlogPost9.__proto__ || Object.getPrototypeOf(BlogPost9)).apply(this, arguments));
  }

  _createClass(BlogPost9, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/f1hmUx/blockchain_5_years.png', alt: 'blog post' }),
                _react2.default.createElement(
                  'div',
                  { className: 'author-name-detail' },
                  'Jen Greyson'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'author-date-posted-detail' },
                  'April 11, 2018'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title-blog' },
              'Blockchain. 5 Years From Now.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'caption-blog' },
              'After a recent conversation on LinkedIn spurred my curiosity, I went looking at how the current spike of ETH would look for the ICOs of 2017. The results shocked me.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Five years. That\u2019s a lifetime in blockchain.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Look what we\u2019ve seen in the last five MONTHS.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Even from a hardware perspective, we\u2019re already seeing the shortage of chips because of the drain that mining is putting on the industry. NVIDIA had to create new chips solely for the purpose of mining, and now they\u2019ve released a new one customized for AI; if those can be used for mining they will be.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' And when the first mining operation ponies up the Bitcoin to buy a quantum computer the blockchain is going to have to adapt. And we\u2019ll see another huge spike in the applications and productivity.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Factor in the brainpower currently operating in the space, and the decentralized nature and the application of blockchain five years from now is going to exceed anything we could imagine today. Look what Vitalik did with a handful of coders; what Elon did with his team, Gates and his. Now, with the power of blockchain and open-source, you have entire teams of Elons + Vitaliks + Gates.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Five years? Who knows.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' That\u2019s what I love about this technology; it\u2019s keeping us all on our toes, striving into a future that is shifting as quickly as we turn calendar pages.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' #womenintech #AI #VR #AR #womenofblockchain #artificialintelligence #crypto #blockchain #bitcoin #crypto',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' Don\u2019t forget to follow us on Telegram:',
              _react2.default.createElement(
                'a',
                { className: 'link-underline', href: ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A', 'data-href': ' https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A' },
                'https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A'
              ),
              _react2.default.createElement('div', { className: 'creator-blog' })
            )
          )
        )
      );
    }
  }]);

  return BlogPost9;
}(_react.Component);

exports.default = BlogPost9;

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.d18cd79a.js.map