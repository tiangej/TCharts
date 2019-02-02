(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["radar"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["radar"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/radarEntry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/radar/css/chart.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/radar/css/chart.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.radarChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.radarChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}     ", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/base/chart/ChartBase.js":
/*!*************************************!*\
  !*** ./src/base/chart/ChartBase.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartBase; });
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../support/Status.js */ "./src/support/Status.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ChartBase =
/*#__PURE__*/
function () {
  function ChartBase() {
    _classCallCheck(this, ChartBase);

    ///////////////////////
    // 公有成员变量
    ///////////////////////
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    this._parentDiv = null; //子组件: 图表各个子组件的父容器

    this._canvas = null;
    this._tipDiv = null;
    this._painter = null; //画家引用

    this._status = ''; //状态

    this._eventListenersAddedFlag = false; //由于js无法判断事件监听函数是否已经存在，因此自定义标志位来判断

    this._surfaceImageData = null; //Canvas绘图表面，用于保存Canvas图片

    this._animationFrameID; ///////////////////////
    // 初始化
    ///////////////////////
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(ChartBase, [{
    key: "stop",
    value: function stop() {
      this._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_0__["default"].STOP;
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_setPainter",
    value: function _setPainter(painter) {
      this._painter = painter.getInstance();
    }
  }, {
    key: "_paint",
    value: function _paint() {
      this._painter.setChart(this);

      this._painter.paint();
    }
    /*
    * 动态生成tip对象
    * 在本图表系列中，tip是由段落p对象和table对象构成，其外观由外部指定的CSS控制
    */

  }, {
    key: "_createTip",
    value: function _createTip(className) {
      var tip; //生成tip的div对象,并增加class样式。注意：是增加而不是替换

      tip = document.createElement('div');
      tip.className += ' ' + className; //生成段落对象，用于显示类目名称

      tip.appendChild(document.createElement('p')); //生成表格对象，用于系列名称和数据

      tip.appendChild(document.createElement('table')); //返回

      return tip;
    }
  }]);

  return ChartBase;
}();



/***/ }),

/***/ "./src/base/chart/PartBase.js":
/*!************************************!*\
  !*** ./src/base/chart/PartBase.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartBase; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PartBase = function PartBase() {
  _classCallCheck(this, PartBase);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  this.x = 10;
  this.y = 10;
  this.width = 10;
  this.height = 10;
  this.dirtyFlag = false; //脏数据（无效数据）
  ///////////////////////
  // 私有成员变量
  ///////////////////////
  ///////////////////////
  // 初始化
  ///////////////////////
};



/***/ }),

/***/ "./src/base/info/ChartInfoBase_In.js":
/*!*******************************************!*\
  !*** ./src/base/info/ChartInfoBase_In.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartInfoBase_In; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartInfoBase_In = function ChartInfoBase_In() {
  _classCallCheck(this, ChartInfoBase_In);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  this.title = 'TCharts'; //图表标题

  this.titleTop = 10; //标题位置：相对于div边缘

  this.titleLeft = 10;
  this.legendTop = 10; //图例位置：相对于div边缘

  this.legendLeft = 20;
  this.legendRight = 20;
  this.bodyTop = 70; //图表主体区域（xy两轴围成的矩形区域）：相对于div边缘

  this.bodyBottom = 50;
  this.bodyLeft = 50;
  this.bodyRight = 50; //图表使用的颜色数组

  this.colors = ['#C23531', '#2F4554', '#61A0A8', '#D48265', '#91C7AE', '#CA8622', '#BDA29A', '#6E7074'];
  this.series = []; //数据系列

  this.selectedIndex = -1; //选择项的索引 
  ///////////////////////
  // 私有成员变量
  ///////////////////////
  ///////////////////////
  // 初始化
  ///////////////////////
};



/***/ }),

/***/ "./src/base/series/SeriesBase.js":
/*!***************************************!*\
  !*** ./src/base/series/SeriesBase.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeriesBase; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SeriesBase = function SeriesBase() {
  _classCallCheck(this, SeriesBase);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  this.name = '';
  this.data = [];
  this.selected = true; ///////////////////////
  // 私有成员变量
  ///////////////////////
  ///////////////////////
  // 初始化
  ///////////////////////
};



/***/ }),

/***/ "./src/chart/radar/Chart.js":
/*!**********************************!*\
  !*** ./src/chart/radar/Chart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/chart/ChartBase.js */ "./src/base/chart/ChartBase.js");
/* harmony import */ var _base_chart_PartBase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/chart/PartBase.js */ "./src/base/chart/PartBase.js");
/* harmony import */ var _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/ChartInfo_In.js */ "./src/chart/radar/info/ChartInfo_In.js");
/* harmony import */ var _parts_Legend_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/Legend.js */ "./src/chart/radar/parts/Legend.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/radar/painter/Painter.js");
/* harmony import */ var _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/ObjectPool.js */ "./src/support/ObjectPool.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/Utility.js */ "./src/support/Utility.js");
/* harmony import */ var _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tween/TWAlgorithm.js */ "./src/tween/TWAlgorithm.js");
/* harmony import */ var _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../tween/TWEngine.js */ "./src/tween/TWEngine.js");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var Chart =
/*#__PURE__*/
function (_ChartBase) {
  _inherits(Chart, _ChartBase);

  function Chart(parentDivID) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////
    //用户输入（图表必备信息）

    _this.chartInfo_In = new _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_6__["default"](); //图表信息。例：图表名称
    ///////////////////////
    // 私有成员变量
    ///////////////////////

    _this._angles = []; //每个指标所在的角度  

    _this._radians = []; //每个指标所在的角度对应的弧度

    _this._labels = [];
    _this._maxData = [];
    _this._legends = [];
    _this._itemArray = []; //存放扇形的一维数组

    _this._indicatorPositions = [];
    _this._pointPool = null; //点对象对象池

    _this._legendPool = null; //图例对象对象池

    _this._parentDivClassName = 'radarChartDiv'; //样式名

    _this._twEngine = new _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_14__["default"](); //缓动动画相关

    _this._tweenCallBackBind = _this._tweenCallBack.bind(_assertThisInitialized(_assertThisInitialized(_this))); ///////////////////////
    // 初始化
    ///////////////////////
    //设置画家

    _this._setPainter(_painter_Painter_js__WEBPACK_IMPORTED_MODULE_8__["default"]); //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换


    _this._parentDiv = document.getElementById(parentDivID);
    _this._parentDiv.className += ' ' + _this._parentDivClassName; //动态生成_canvas，并添加到DOM树。同时获取其上下文

    _this._canvas = document.createElement('canvas');

    _this._parentDiv.appendChild(_this._canvas); //初始化对象池


    _this._pointPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_9__["default"](_base_chart_PartBase_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
    _this._legendPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_9__["default"](_parts_Legend_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
    return _this;
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(Chart, [{
    key: "start",
    value: function start() {
      //验证数据合法性
      if (this._check() == false) {
        console.log('[TCharts] Incorrect chart data !');
        return;
      } //重设各种状态，数据


      this._reset(); //计算扇形信息


      this._getItemsAndSetTween(); //启动帧循环，在循环内部绘制图表


      this._startPaint();
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_check",
    value: function _check() {
      var rtn = true; //检查1： 数据是否为空

      if (this.chartInfo_In.series.length == 0) {
        rtn = false;
      }

      return rtn;
    }
  }, {
    key: "_reset",
    value: function _reset() {
      var canvas = this._canvas,
          div = this._parentDiv,
          itemArr = this._itemArray,
          i,
          len; //移除鼠标事件监听器

      this._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].REMOVE); //设置尺寸


      canvas.width = div.offsetWidth;
      canvas.height = div.offsetHeight; //初始化图例数据、line对象数组

      itemArr.length = 0;
      len = this.chartInfo_In.series.length;

      for (i = 0; i < len; i++) {
        itemArr[i] = [];
      } //从对象池中释放曾经使用过的扇形


      this._pointPool.releaseAll();

      this._legendPool.releaseAll(); //释放缓动资源


      this._twEngine.releaseAllTWData();

      this._twEngine.releaseAllTWAction(); //取消上一次绑定的动画函数


      window.cancelAnimationFrame(this._animationFrameID);
    }
  }, {
    key: "_getItemsAndSetTween",
    value: function _getItemsAndSetTween() {
      var chartInfo_In = this.chartInfo_In,
          indicator = chartInfo_In.indicator,
          chartRadius = chartInfo_In.radius,
          series = chartInfo_In.series,
          colors = chartInfo_In.colors,
          itemArray = this._itemArray,
          labels = this._labels,
          maxData = this._maxData,
          angles = this._angles,
          radians = this._radians,
          legends = this._legends,
          indicatorPositions = this._indicatorPositions,
          pointPool = this._pointPool,
          legendPool = this._legendPool,
          twEngine = this._twEngine,
          twFlag,
          from,
          to,
          twData,
          twAction,
          twDataArr = [],
          tweenCallBack = this._tweenCallBack,
          i,
          j,
          len1,
          len2,
          angle,
          num,
          obj,
          arr,
          ser,
          point,
          p,
          radianUnit,
          radian,
          rate,
          legend; //【1】计算各个指标所在的角度，并存入数组

      len1 = indicator.length;
      num = 360 / len1;
      angle = -90;
      radianUnit = _support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].RADIAN_UNIT;

      for (i = 0; i < len1; i++) {
        obj = indicator[i];
        labels[i] = obj.name;
        maxData[i] = obj.max;
        angles[i] = angle;
        radians[i] = angle * radianUnit;
        angle += num;
      } //【3】遍历数据系列，生成项目，设置属性，并存入数组，加入到显示列表


      for (i = 0; i < len1; i++) {
        radian = radians[i]; //计算指示点位置，存入数组

        point = pointPool.getObj();
        point.x = chartRadius * Math.cos(radian);
        point.y = chartRadius * Math.sin(radian);
        indicatorPositions[i] = point;
      }

      len1 = series.length;

      for (i = 0; i < len1; i++) {
        ser = series[i];
        twFlag = ser.selected;
        legend = legendPool.getObj();
        legend.name = ser.name;
        legend.color = colors[i];
        legend.selected = ser.selected;
        legends[i] = legend;
        arr = [];
        len2 = ser.data.length;

        for (j = 0; j < len2; j++) {
          //根据数值计算比率
          num = ser.data[j];
          rate = num / maxData[j]; //根据指标点和比率计算数据系列点的位置，并加入数组

          p = indicatorPositions[j];
          point = pointPool.getObj();
          point.x = p.x * rate;
          point.y = p.y * rate;
          arr[j] = point; //取得缓动数据

          if (twFlag == true) {
            from = [0, 0];
            to = [point.x, point.y];
            twData = twEngine.getTWData();
            twData.setData(point, from, to, tweenCallBack);
            twDataArr.push(twData);
          }
        }

        itemArray[i] = arr;
      }

      twAction = twEngine.getTWAction();
      twAction.setData(twDataArr, _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_13__["default"].Bounce.easeOut, 1000);
      twEngine.setFirstTWAction(twAction);
    }
  }, {
    key: "_addOrRemoveEventListener",
    value: function _addOrRemoveEventListener(command) {
      var canvas = this._canvas,
          legends = this._legends,
          legend,
          rect,
          position = {
        x: -1,
        y: -1
      },
          i,
          len,
          me = this;

      function doMouseClick(e) {
        //获取鼠标相对于Canvas的位置
        rect = me._canvas.getBoundingClientRect();
        _support_Utility_js__WEBPACK_IMPORTED_MODULE_12__["default"].windowToCanvas(rect.left, rect.top, rect.width, rect.height, canvas.width, canvas.height, e.clientX, e.clientY, position); //根据鼠标位置，找到鼠标位于哪个对象之上

        len = legends.length;

        for (i = 0; i < len; i++) {
          legend = legends[i]; //判断鼠标位于哪个对象之上

          if (legend.isPointInPath(position.x, position.y) == true) {
            legend.selected = !legend.selected;
            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP4;
            break;
          }
        }
      } //执行


      if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].ADD && me._eventListenersAddedFlag == false) {
        me._canvas.addEventListener('click', doMouseClick);

        me._eventListenersAddedFlag = true;
      } else if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].REMOVE && me._eventListenersAddedFlag == true) {
        me._canvas.removeEventListener('click', doMouseClick);

        me._eventListenersAddedFlag = false;
      }
    }
  }, {
    key: "_startPaint",
    value: function _startPaint() {
      var me = this;

      function paint() {
        switch (me._status) {
          case _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP1:
            //绘制图表框架（标题、图例等），为缓动效果做准备
            me._paint();

            me._twEngine.start();

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP2;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP2:
            //绘制缓动效果
            //      如果缓动没有结束，就绘制
            //      反之，设置状态，在下一停止绘制
            if (me._twEngine.nextFrame() == true) {
              me._paint();
            } else {
              me._twEngine.stop(); //停止缓动


              me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP3;
            }

            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP3:
            me._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].ADD);

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].WAITING;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP4:
            me._paint(); //绘制选择项


            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].WAITING;
            break;
        } //循环调用自己，进行绘画


        if (me._status != _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STOP) {
          me._animationFrameID = window.requestNextAnimationFrame(paint);
        }
      } //设置初始状态，开始绘制


      me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_11__["default"].STEP1;
      paint();
    }
    /*
     * 缓动效果
     */

  }, {
    key: "_tweenCallBack",
    value: function _tweenCallBack(target, resultArray) {
      target.x = resultArray[0];
      target.y = resultArray[1];
    }
  }]);

  return Chart;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/chart/radar/css/chart.css":
/*!***************************************!*\
  !*** ./src/chart/radar/css/chart.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/radar/css/chart.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/chart/radar/info/ChartInfo_In.js":
/*!**********************************************!*\
  !*** ./src/chart/radar/info/ChartInfo_In.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartInfo_In; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_info_ChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/info/ChartInfoBase_In.js */ "./src/base/info/ChartInfoBase_In.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ChartInfo_In =
/*#__PURE__*/
function (_ChartInfoBase_In) {
  _inherits(ChartInfo_In, _ChartInfoBase_In);

  function ChartInfo_In() {
    var _this;

    _classCallCheck(this, ChartInfo_In);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartInfo_In).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.centerX = 350; //雷达图中心位置：相对于div左上角

    _this.centerY = 150;
    _this.radius = 120; //雷达图正多边形半径

    _this.splitNumber = 5; //半径分割数

    _this.indicator = []; //指标数组，例：  [ {name: 'AQI', max: 400} ,  {name: 'PM2.5', max: 250} ]
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    _this.legendTop = 50;
    _this.legendLeft = 20;
    return _this;
  }

  return ChartInfo_In;
}(_base_info_ChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/chart/radar/painter/Painter.js":
/*!********************************************!*\
  !*** ./src/chart/radar/painter/Painter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Painter; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/Styles.js */ "./src/support/Styles.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../support/Utility.js */ "./src/support/Utility.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Painter =
/*#__PURE__*/
function () {
  function Painter() {
    _classCallCheck(this, Painter);

    ///////////////////////
    // 公有成员变量
    ///////////////////////
    //Painter中无公有成员变量
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    this._chart; //图表各类数据 

    this._canvas;
    this._ctx; //Canvas上下文

    this._canvasSurface1; //Canvas绘图表面

    this._canvasSurface2; //Canvas绘图表面

    this._chartInfo_In; //图表各类数据 

    this._indicatorPositions;
    this._labels;
    this._angles;
    this._legends;
    this._itemArray; //存储扇形点的数组

    this._selectedIndex; //被选择的扇形
    ///////////////////////
    // 初始化
    ///////////////////////
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(Painter, [{
    key: "setChart",
    value: function setChart(chart) {
      this._chart = chart;
      this._canvas = chart._canvas;
      this._ctx = this._canvas.getContext('2d');
      this._chartInfo_In = chart.chartInfo_In;
      this._indicatorPositions = chart._indicatorPositions;
      this._labels = chart._labels;
      this._angles = chart._angles;
      this._legends = chart._legends;
      this._itemArray = chart._itemArray;
      this._selectedIndex = this._chartInfo_In.selectedIndex;
    }
  }, {
    key: "paint",
    value: function paint() {
      var ctx = this._ctx,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height;

      switch (this._chart._status) {
        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP1:
          //绘制图表并缓存Canvas绘图表面
          //清空画布
          ctx.clearRect(0, 0, canvasWidth, canvasHeight); //在_ctx上绘制图表固定的内容

          this._paintTitle();

          this._paintBak();

          this._paintLabel(); //缓存此时的_ctx绘图表面（全尺寸）


          this._canvasSurface1 = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

          this._paintLegend(); //缓存此时的_ctx绘图表面（全尺寸）


          this._canvasSurface2 = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP2:
          //绘制缓动效果
          ctx.putImageData(this._canvasSurface2, 0, 0);

          this._paintRadar();

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP4:
          //绘制选择
          ctx.putImageData(this._canvasSurface1, 0, 0);

          this._paintLegend();

          this._paintRadar();

          break;
      }
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_paintTitle",
    value: function _paintTitle() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In;
      ctx.save();
      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].TITLE_FONT;
      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_LEFT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_TOP;
      ctx.fillText(chartInfo_In.title, chartInfo_In.titleLeft, chartInfo_In.titleTop);
      ctx.restore();
    }
  }, {
    key: "_paintBak",
    value: function _paintBak() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          indicatorPositions = this._indicatorPositions,
          pointItem,
          obj,
          points1 = [],
          points2 = [],
          rate,
          x1,
          x2,
          y1,
          y2,
          i,
          j,
          len1,
          len2,
          len3;
      ctx.save(); //设置样式

      ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].RADAR_BAK_LINE_WIDTH;
      ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].RADAR_BAK_LINE_COLOR;
      ctx.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].RADAR_BAK_FILL_COLOR; //平移到中心

      ctx.translate(chartInfo_In.centerX, chartInfo_In.centerY); //绘制带有背景颜色的多边形

      len1 = chartInfo_In.splitNumber;
      len2 = indicatorPositions.length;

      for (i = 1; i < len1; i += 2) {
        points1.length = 0;
        points2.length = 0; //计算相邻两个多边形各个顶点坐标

        for (j = 0; j < len2; j++) {
          pointItem = indicatorPositions[j];
          rate = i / len1;
          x1 = pointItem.x * rate;
          y1 = pointItem.y * rate;
          points1[j] = {
            x: x1,
            y: y1
          };
          rate = (i + 1) / len1;
          x2 = pointItem.x * rate;
          y2 = pointItem.y * rate;
          points2[j] = {
            x: x2,
            y: y2
          };
        } //开始新的路径
        //此后逻辑使用路径缠绕特性绘制有背景颜色的区域


        ctx.beginPath(); //顺时针连接第一个多边形所有顶点

        pointItem = points1[0];
        ctx.moveTo(pointItem.x, pointItem.y);
        len3 = points1.length;

        for (j = 1; j < len3; j++) {
          obj = points1[j];
          ctx.lineTo(obj.x, obj.y);
        }

        obj = points1[0];
        ctx.lineTo(obj.x, obj.y); //逆时针连接第二个多边形所有顶点

        obj = points2[0];
        ctx.moveTo(obj.x, obj.y);
        len3 = points2.length;

        for (j = len3 - 1; j >= 0; j--) {
          obj = points2[j];
          ctx.lineTo(obj.x, obj.y);
        }

        obj = points2[0];
        ctx.lineTo(obj.x, obj.y); //闭合路径

        ctx.closePath(); //填充并描边

        ctx.fill();
        ctx.stroke();
      } //绘制最外层多边形


      if (len1 % 2 == 1) {
        pointItem = indicatorPositions[0];
        ctx.moveTo(pointItem.x, pointItem.y); //循环绘制圆环

        len3 = indicatorPositions.length;

        for (i = 1; i < len3; i++) {
          pointItem = indicatorPositions[i];
          ctx.lineTo(pointItem.x, pointItem.y);
        }

        ctx.closePath();
        ctx.stroke();
      } //绘制中心点到最外层多边形顶点的连线


      for (j = 0; j < len2; j++) {
        pointItem = indicatorPositions[j];
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(pointItem.x, pointItem.y);
        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: "_paintLegend",
    value: function _paintLegend() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          legends = this._legends,
          legend,
          str,
          w,
          h,
          x1,
          x2,
          y1,
          i,
          len;
      ctx.save(); //设置文字样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEGEND_FONT;
      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_LEFT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_TOP; //获取文字高度

      h = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].getTextHeight(ctx); //第一个图例的位置

      x1 = chartInfo_In.legendLeft;
      y1 = chartInfo_In.legendTop;
      x2 = x1 + h + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEGEND_SHAPE_TEXT_GAP; //逆序依次绘制图例文字和色块

      len = legends.length;

      for (i = 0; i < len; i++) {
        legend = legends[i]; //绘制色块

        if (legend.selected == false) {
          ctx.fillStyle = '#999999';
        } else {
          ctx.fillStyle = legend.color;
        }

        ctx.fillRect(x1, y1, h, h);
        legend.x = x1;
        legend.y = y1; //计算图例文字宽度

        str = legend.name;
        w = ctx.measureText(str).width; //绘制文字

        ctx.fillText(str, x2, y1);
        legend.width = h + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEGEND_SHAPE_TEXT_GAP + w;
        legend.height = h; //

        y1 += _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEGEND_SHAPE_TEXT_GAP + h;
      }

      ctx.restore();
    }
  }, {
    key: "_paintRadar",
    value: function _paintRadar() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          itemArray = this._itemArray,
          items,
          pointItem,
          legends = this._legends,
          legend,
          i,
          j,
          len1,
          len2;
      ctx.save(); //设置样式

      ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].RADAR_LINE_WIDTH; //平移到中心

      ctx.translate(chartInfo_In.centerX, chartInfo_In.centerY); //绘制带有背景颜色的多边形

      len1 = itemArray.length;

      for (i = 0; i < len1; i++) {
        legend = legends[i];

        if (legend.selected == false) {
          continue;
        } //设置填充样式


        ctx.strokeStyle = legend.color; //开始新路径

        ctx.beginPath(); //获取某数据系列对应的坐标点集合

        items = itemArray[i];
        pointItem = items[0];
        ctx.moveTo(pointItem.x, pointItem.y);
        len2 = items.length;

        for (j = 1; j < len2; j++) {
          pointItem = items[j];
          ctx.lineTo(pointItem.x, pointItem.y);
        } //闭合路径


        ctx.closePath(); //描边

        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: "_paintLabel",
    value: function _paintLabel() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          indicatorPositions = this._indicatorPositions,
          angles = this._angles,
          labels = this._labels,
          pointItem,
          angle,
          label,
          rate,
          x,
          y,
          i,
          len;
      ctx.save(); //(1)设置共同样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].RADAR_LABEL_FONT;
      ctx.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].RADAR_LABEL_COLOR; //平移到中心

      ctx.translate(chartInfo_In.centerX, chartInfo_In.centerY); //(3)绘制标签：根据标签是否绘制在扇形内部分别进行处理
      //循环绘制标签以及引导线

      rate = (chartInfo_In.radius + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].RADAR_LABEL_POSITION_OFFSET) / chartInfo_In.radius;
      len = indicatorPositions.length;

      for (i = 0; i < len; i++) {
        ctx.save(); //绘制标签

        angle = angles[i];

        if (angle > -90 && angle < 90) {
          ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_MIDDLE;
          ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_LEFT;
        } else if (angle > 90 && angle < 270) {
          ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_MIDDLE;
          ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_RIGHT;
        } else if (angle == -90) {
          ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_BOTTOM;
          ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_CENTER;
        } else if (angle == 90) {
          ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_TOP;
          ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_CENTER;
        } //取得扇形对象


        label = labels[i];
        pointItem = indicatorPositions[i];
        x = pointItem.x * rate;
        y = pointItem.y * rate;
        ctx.fillText(label, x, y);
        ctx.restore();
      }

      ctx.restore();
    }
  }]);

  return Painter;
}(); //////////////////////////////////////////////////////////////////////////////////////////
//  利用闭包和立即执行函数创建单例
//////////////////////////////////////////////////////////////////////////////////////////




Painter.getInstance = function () {
  var instance;
  return function () {
    if (!instance) {
      instance = new Painter();
    }

    return instance;
  };
}();

/***/ }),

/***/ "./src/chart/radar/parts/Legend.js":
/*!*****************************************!*\
  !*** ./src/chart/radar/parts/Legend.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legend; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/chart/ChartBase.js */ "./src/base/chart/ChartBase.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Legend =
/*#__PURE__*/
function (_PartBase) {
  _inherits(Legend, _PartBase);

  function Legend() {
    var _this;

    _classCallCheck(this, Legend);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Legend).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.name = '';
    _this.color = '#000000';
    _this.selected = true; ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }
  /*****************************************************************
   * 公有成员函数
   ****************************************************************/


  _createClass(Legend, [{
    key: "isPointInPath",
    value: function isPointInPath(x, y) {
      if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Legend;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/requestNextAnimationFrame.js":
/*!******************************************!*\
  !*** ./src/requestNextAnimationFrame.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*****************************************************************************
 * 定义window动画循环控制函数（利用立即执行函数）
 ***************************************************************************************/
window.requestNextAnimationFrame = function () {
  return window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (func) {
    setTimeout(func, 16);
  };
}();

/***/ }),

/***/ "./src/support/Constants.js":
/*!**********************************!*\
  !*** ./src/support/Constants.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Constants = {
  DIRTY: '-',
  //定义数据时，用来表示没有数据，或脏数据（无效数据）
  HALF_PIXEL: 0.5,
  //半个像素
  CLOSE_TO_ZERO: 0.0000001,
  //浮点数计算会有精度误差，该常量用于判断两个浮点数是否相等。如果两个浮点数的差值小于该数，则认为相等。
  TEXT_BASE_LINE_MIDDLE: 'middle',
  //在Canvas上绘制文字时，设置Context上下文的文字纵向排列属性
  TEXT_BASE_LINE_TOP: 'top',
  TEXT_BASE_LINE_BOTTOM: 'bottom',
  TEXT_ALIGN_CENTER: 'center',
  //在Canvas上绘制文字时，设置Context上下文的文字横向排列属性
  TEXT_ALIGN_LEFT: 'left',
  TEXT_ALIGN_RIGHT: 'right',
  TEXT_BASE_LINE_IDEOGRAPHIC: 'ideographic',
  //在Canvas上绘制文字时，设置Context上下文的文字基线属性
  ADD: 'add',
  REMOVE: 'remove',
  X_AXIS: 'x-axis',
  //代表是x轴还是y轴
  Y_AXIS: 'y-axis',
  RADIAN_UNIT: Math.PI / 180 //弧度单位

};
/* harmony default export */ __webpack_exports__["default"] = (Constants);

/***/ }),

/***/ "./src/support/ObjectPool.js":
/*!***********************************!*\
  !*** ./src/support/ObjectPool.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectPool; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectPool =
/*#__PURE__*/
function () {
  function ObjectPool(clazz, para) {
    _classCallCheck(this, ObjectPool);

    ///////////////////////
    // 公有成员变量
    ///////////////////////
    this._class = clazz; //类名

    this._para = para; //实例化对象时的参数

    this._count = 0; //对象池中对象的个数

    this._pool = []; //对象池
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(ObjectPool, [{
    key: "getObj",
    value: function getObj() {
      var pool = this._pool,
          len,
          obj; //如果当前已使用的对象个数大于或等于池中已有对象个数，
      //则新生成一个对象；否则从池中直接取得对象

      if (this._count >= pool.length) {
        obj = new this._class(this._para);
        len = pool.length;
        pool[len] = obj;
      } else {
        obj = pool[this._count];
      } //记录当前已使用的对象个数


      this._count++; //返回对象

      return obj;
    }
    /*
    * 当前已使用的对象个数清零
    * 这样，当函数getObj()被调用的时候，池中所有对象都可使用
    */

  }, {
    key: "releaseAll",
    value: function releaseAll() {
      this._count = 0;
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }]);

  return ObjectPool;
}();



/***/ }),

/***/ "./src/support/Status.js":
/*!*******************************!*\
  !*** ./src/support/Status.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Status = {
  STEP1: 'step1',
  STEP2: 'step2',
  STEP3: 'step3',
  STEP4: 'step4',
  STEP5: 'step5',
  WAITING: 'waiting',
  STOP: 'stop'
};
/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ }),

/***/ "./src/support/Styles.js":
/*!*******************************!*\
  !*** ./src/support/Styles.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Styles = {
  //共同部分
  TITLE_FONT: '16px Microsoft YaHei',
  //标题字体        
  LEGEND_FONT: '14px Microsoft YaHei',
  //图例字体  
  LABEL_FONT: '10px Microsoft YaHei',
  //标签字体  
  AXIS_NAME_FONT: '14px Microsoft YaHei',
  //轴名称字体  
  FONT_FILL_COLOR: '#000000',
  //默认字体填充颜色
  AXIS_LINE_WIDTH: 0.5,
  //轴线的线宽
  AXIS_LINE_COLOR: '#333333',
  //轴线颜色
  AXIS_SCALE_UNIT_LINE_SIZE: 5,
  //刻度线的长度
  GRID_LINE_WIDTH: 0.5,
  //网格虚线的线宽
  GRID_LINE_COLOR: '#BBCCDD',
  //网格虚线颜色
  GRID_LINE_DASH: [5, 5],
  //网格虚线点的间隔
  XAXIS_LABEL_OFFSET: 16,
  //x轴标签文字中心点到x轴线的距离
  XAXIS_LABEL_OFFSET_FOR_ROTATE: 16,
  //x轴标签旋转时，文字中心点到x轴线的距离
  YAXIS_LABEL_OFFSET: 16,
  //y轴标签文字中心点到y轴线的距离
  YAXIS_LABEL_OFFSET_FOR_ROTATE: 16,
  //y轴标签旋转时，文字中心点到y轴线的距离
  LEGEND_SHAPE_TEXT_GAP: 5,
  //图例中，色块和文字的间隔
  LEGEND_GAP: 15,
  //图例横向排列时，图例之间的间隔
  TIP_LOCATION_OFFSET: 20,
  //定位Tip位置时，相对鼠标位置的偏移量
  //气泡图
  BUBBLE_ALPHA: 0.7,
  //气泡的透明度
  //柱状图
  COLUMN_SELECTOR_LINE_WIDTH: 1.0,
  //用于框选项目的方框的边框线线宽
  COLUMN_SELECTOR_LINE_COLOR: '#C23531',
  //用于框选项目的方框的边框线颜色
  //折线图
  LINE_LINE_WIDTH: 1.0,
  //折线的线宽
  LINE_AREA_ALPHA: 0.7,
  //绘制面积图时的透明度
  LINE_MARKPOINT_WIDTH: 1.0,
  //标记点的线宽
  LINE_MARKPOINT_RADIUS: 2,
  //标记点的圆半径
  LINE_MARKPOINT_BAK_COLOR: '#F3F3F3',
  //标记点的背景颜色
  LINE_SELECTOR_LINE_WIDTH: 1.0,
  //用于标志选择项的线段的线宽
  LINE_SELECTOR_LINE_COLOR: '#C23531',
  //用于标志选择项的线段的颜色
  //饼图
  PIE_LABEL_INNER_FONT_COLOR: '#FFFFFF',
  //当标签文字在饼内显示时，文字的颜色
  PIE_LABEL_GUIDE_LINE1_SIZE: 20,
  //当标签文字在饼外显示时，连接饼块和标签文字的引导线1的长度
  PIE_LABEL_GUIDE_LINE2_SIZE: 15,
  //当标签文字在饼外显示时，连接饼块和标签文字的引导线2的长度
  PIE_LABEL_OFFSET: 5,
  //引导线和标签文字的间距
  PIE_SELECTOR_TRANSLATE: 10,
  //被选择的饼块的位移量
  PIE_SELECTOR_LINE_WIDTH: 1.0,
  //框选数据项的方框的边框线线宽
  PIE_SELECTOR_LINE_COLOR: '#FF0000',
  //框选数据项的方框的边框颜色
  //雷达图
  RADAR_LABEL_FONT: '12px Microsoft YaHei',
  //指标文字的字体
  RADAR_LABEL_COLOR: '#000000',
  //指标文字的颜色
  RADAR_LABEL_POSITION_OFFSET: 10,
  //指标文字和对应多边形顶点之间的间距
  RADAR_LINE_WIDTH: 3.0,
  //数据雷达线的线宽
  RADAR_BAK_LINE_WIDTH: 1.0,
  //指标多边形框线和半径分割线的线宽
  RADAR_BAK_LINE_COLOR: '#C9C9C9',
  //指标多边形框线和半径分割线的颜色
  RADAR_BAK_FILL_COLOR: '#E6E6E6',
  //指标多边形的背景颜色
  //散点图
  SCATTER_POINT_ALPHA: 0.7,
  //散点的透明度
  SCATTER_CROSS_LINE_WIDTH: 1.0,
  //用于标识鼠标位置的十字线的线宽
  SCATTER_CROSS_COLOR: '#FF0000',
  //用于标识鼠标位置的十字线的颜色
  //旭日图
  SUNBURS_LABEL_COLOR: '#000000',
  //标签文字的颜色
  SUNBURS_BORDER_COLOR: '#000000' //扇形块的边框颜色

};
/* harmony default export */ __webpack_exports__["default"] = (Styles);

/***/ }),

/***/ "./src/support/Utility.js":
/*!********************************!*\
  !*** ./src/support/Utility.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utility; });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./src/support/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Utility =
/*#__PURE__*/
function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: "getScaleUnit",

    /***************************************************************
     * 静态函数
     ***************************************************************/

    /*
    * 计算【值轴】的刻度单位
    */
    value: function getScaleUnit(min, max, scaleMaxCount) {
      var i,
          len,
          avg,
          gaps = [1, 2, 2.5, 5, 10],
          scaleUnit,
          magnitude; //计算均分值

      avg = (max - min) / (scaleMaxCount - 1); //计算均分值的数量级

      magnitude = this.getMagnitude(avg); //循环，直至第一个大于或等于均分值的整数值出现

      len = gaps.length;

      for (i = 0; i < len; i++) {
        scaleUnit = gaps[i] * magnitude;

        if (scaleUnit >= avg) {
          break;
        }
      } //返回


      return scaleUnit;
    }
    /*
    * 计算指定数值的数量级
    */

  }, {
    key: "getMagnitude",
    value: function getMagnitude(num) {
      //计算数值的10的幂
      var pow = Math.floor(Math.log(num) / Math.log(10));
      ; //计算数值的数量级

      var magnitude = Math.pow(10, pow);
      return magnitude;
    }
    /*
    * Canvas绘制时对坐标进行微调
    * 四舍五入取整后减小0.5像素。这样，在Canvas时位置处于两个像素之间，避免发虚。
    */

  }, {
    key: "adjustPosition",
    value: function adjustPosition(xORy) {
      return Math.round(xORy) - _Constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].HALF_PIXEL;
    }
  }, {
    key: "windowToCanvas",
    value: function windowToCanvas(boundingClientRectLeft, boundingClientRectTop, boundingClientRectWidth, boundingClientRectHeight, canvasWidth, canvasHeight, globleX, globleY, position) {
      position.x = globleX - boundingClientRectLeft * (canvasWidth / boundingClientRectWidth);
      position.y = globleY - boundingClientRectTop * (canvasHeight / boundingClientRectHeight);
    }
  }, {
    key: "getTextWidth",
    value: function getTextWidth(canvasContext, text) {
      return canvasContext.measureText(text).width;
    }
  }, {
    key: "getTextHeight",
    value: function getTextHeight(canvasContext) {
      return canvasContext.measureText('M').width * 7 / 6;
    }
  }]);

  return Utility;
}();



/***/ }),

/***/ "./src/tween/TWAction.js":
/*!*******************************!*\
  !*** ./src/tween/TWAction.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TWAction; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TWAction =
/*#__PURE__*/
function () {
  function TWAction() {
    _classCallCheck(this, TWAction);

    ///////////////////////
    // 公有成员变量
    ///////////////////////
    this.totleTimes = 0; //缓动次数

    this.start = 0; //缓动开始时，从第几次缓动开始  

    this.dataArray = []; //本动作操控的TWData数据集

    this.algorithm = null; //缓动算法

    this.nextAction = null; //本动作结束后的下一个动作
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(TWAction, [{
    key: "setData",
    value: function setData(dataArray, algorithm, duration) {
      this.dataArray = dataArray;
      this.algorithm = algorithm;
      this.start = 0;
      this.totleTimes = Math.ceil(duration / TWAction.FRAME_DURATION);
    }
  }, {
    key: "chain",
    value: function chain(action) {
      this.nextAction = action;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      var target,
          from,
          to,
          callBack,
          arr,
          value,
          i,
          j,
          len1,
          len2,
          rtn = true;

      if (this.start > this.totleTimes) {
        this.start = 0;
        rtn = false;
      } else {
        len1 = this.dataArray.length;

        for (i = 0; i < len1; i++) {
          target = this.dataArray[i].target;
          from = this.dataArray[i].from;
          to = this.dataArray[i].to;
          callBack = this.dataArray[i].callBack;
          arr = [];
          len2 = from.length;

          for (j = 0; j < len2; j++) {
            value = this.algorithm(this.start, from[j], to[j] - from[j], this.totleTimes);
            arr.push(value);
          }

          callBack(target, arr);
        }

        this.start++;
      }

      return rtn;
    }
  }, {
    key: "init",
    value: function init() {
      this.totleTimes = 0;
      this.start = 0;
      this.dataArray = [];
      this.algorithm = null;
      this.callBack = null;
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }]);

  return TWAction;
}();
/***************************************************************
 * 静态变量
 ***************************************************************/



TWAction.FRAME_DURATION = 17; //帧频为60的状态下，一帧的播放时长为17ms ( 1000ms/60 )

/***/ }),

/***/ "./src/tween/TWAlgorithm.js":
/*!**********************************!*\
  !*** ./src/tween/TWAlgorithm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TWAlgorithm; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
 * 
 * 
 * 缓动函数:
 * 1.Linear 匀速
 * 2.Quad 二次方缓动效果
 * 3.Cubic 三次方缓动效果
 * 4.Quart 四次方缓动效果
 * 5.Quint 五次方缓动效果
 * 6.Sine  正弦缓动效果
 * 7.Expo  指数缓动效果
 * 8.Circ  圆形缓动函数
 * 9.Elastic 指数衰减正弦曲线缓动函数
 * 10.Back  超过范围的三次方的缓动函数
 * 11.Bounce 指数衰减的反弹曲线缓动函数
 * 
 * 
 * 每种缓动函数都由三种效果:
 * 1.easeIn  加速
 * 2.easeOut 减速
 * 3.easeInOut  先加速后减速
*/
var TWAlgorithm =
/*#__PURE__*/
function () {
  function TWAlgorithm() {
    _classCallCheck(this, TWAlgorithm);
  }

  _createClass(TWAlgorithm, null, [{
    key: "linear",

    /***************************************************************
     * 静态函数
     ***************************************************************/
    value: function linear(t, b, c, d) {
      return c * t / d + b;
    }
  }]);

  return TWAlgorithm;
}();
/***************************************************************
 * 静态变量
 ***************************************************************/



TWAlgorithm.Quad = {
  easeIn: function easeIn(t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOut: function easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  }
};
TWAlgorithm.Cubic = {
  easeIn: function easeIn(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOut: function easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }
};
TWAlgorithm.Quart = {
  easeIn: function easeIn(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOut: function easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }
};
TWAlgorithm.Quint = {
  easeIn: function easeIn(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOut: function easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }
};
TWAlgorithm.Sine = {
  easeIn: function easeIn(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOut: function easeInOut(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }
};
TWAlgorithm.Expo = {
  easeIn: function easeIn(t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOut: function easeInOut(t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
};
TWAlgorithm.Circ = {
  easeIn: function easeIn(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOut: function easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
};
TWAlgorithm.Elastic = {
  easeIn: function easeIn(t, b, c, d, a, p) {
    var s;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (typeof p == "undefined") p = d * .3;

    if (!a || a < Math.abs(c)) {
      s = p / 4;
      a = c;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOut: function easeOut(t, b, c, d, a, p) {
    var s;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (typeof p == "undefined") p = d * .3;

    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOut: function easeInOut(t, b, c, d, a, p) {
    var s;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (typeof p == "undefined") p = d * (.3 * 1.5);

    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  }
};
TWAlgorithm.Back = {
  easeIn: function easeIn(t, b, c, d, s) {
    if (typeof s == "undefined") s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOut: function easeOut(t, b, c, d, s) {
    if (typeof s == "undefined") s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOut: function easeInOut(t, b, c, d, s) {
    if (typeof s == "undefined") s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
};
TWAlgorithm.Bounce = {
  easeIn: function easeIn(t, b, c, d) {
    var TWAlgorithm = T.tween;
    return c - Bounce.easeOut(d - t, 0, c, d) + b;
  },
  easeOut: function easeOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
  easeInOut: function easeInOut(t, b, c, d) {
    var TWAlgorithm = T.tween;

    if (t < d / 2) {
      return Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
    } else {
      return Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
  }
};

/***/ }),

/***/ "./src/tween/TWData.js":
/*!*****************************!*\
  !*** ./src/tween/TWData.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TWData; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TWData =
/*#__PURE__*/
function () {
  function TWData() {
    _classCallCheck(this, TWData);

    ///////////////////////
    // 公有成员变量
    ///////////////////////
    this.target = null;
    this.from = [];
    this.to = [];
    this.callBack = null; ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(TWData, [{
    key: "init",
    value: function init() {
      this.target = null;
      this.from = [];
      this.to = [];
      this.callBack = null;
    }
  }, {
    key: "setData",
    value: function setData(target, fromArray, toArray, callBack) {
      this.target = target;
      this.from = fromArray;
      this.to = toArray;
      this.callBack = callBack;
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }]);

  return TWData;
}();



/***/ }),

/***/ "./src/tween/TWEngine.js":
/*!*******************************!*\
  !*** ./src/tween/TWEngine.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TWEngine; });
/* harmony import */ var _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../support/ObjectPool.js */ "./src/support/ObjectPool.js");
/* harmony import */ var _tween_TWAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tween/TWAction.js */ "./src/tween/TWAction.js");
/* harmony import */ var _tween_TWData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tween/TWData.js */ "./src/tween/TWData.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var TWEngine =
/*#__PURE__*/
function () {
  function TWEngine() {
    _classCallCheck(this, TWEngine);

    ///////////////////////
    // 公有成员变量
    ///////////////////////
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    this._actions = [];
    this._firstAction = null;
    this._currentAction = null;
    this._actionPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](_tween_TWAction_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this._dataPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](_tween_TWData_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this._isPlaying = false; ///////////////////////
    // 初始化
    ///////////////////////
  }

  _createClass(TWEngine, [{
    key: "getTWAction",
    value: function getTWAction() {
      var obj;
      obj = this._actionPool.getObj();
      obj.init();

      this._actions.push(obj);

      return obj;
    }
  }, {
    key: "getTWData",
    value: function getTWData() {
      var obj;
      obj = this._dataPool.getObj();
      obj.init();
      return obj;
    }
  }, {
    key: "releaseAllTWData",
    value: function releaseAllTWData() {
      this._dataPool.releaseAll();
    }
  }, {
    key: "releaseAllTWAction",
    value: function releaseAllTWAction() {
      this._actions.length = 0;

      this._actionPool.releaseAll();
    }
  }, {
    key: "setFirstTWAction",
    value: function setFirstTWAction(action) {
      this._firstAction = action;
      this._currentAction = this._firstAction;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      var rtn = true;

      if (this._isPlaying == true) {
        if (this._currentAction.nextFrame() == false) //当前action的缓动已经结束 
          {
            if (this._currentAction.nextAction != null) {
              this._currentAction = this._currentAction.nextAction;
            } else {
              rtn = false;
            }
          }
      } else {
        rtn = false;
      }

      return rtn;
    }
  }, {
    key: "start",
    value: function start() {
      this._isPlaying = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      var i, len;
      this._isPlaying = false;
      this._currentAction = this._firstAction;
      len = this._actions.length;

      for (i = 0; i < len; i++) {
        this._actions[i].init();
      }
    }
  }]);

  return TWEngine;
}();



/***/ }),

/***/ "./webpackEntry/radarEntry.js":
/*!************************************!*\
  !*** ./webpackEntry/radarEntry.js ***!
  \************************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_radar_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/radar/css/chart.css */ "./src/chart/radar/css/chart.css");
/* harmony import */ var _src_chart_radar_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_radar_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_radar_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/radar/Chart.js */ "./src/chart/radar/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_radar_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/base/series/SeriesBase.js */ "./src/base/series/SeriesBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9yYWRhci9jc3MvY2hhcnQuY3NzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9jaGFydC9DaGFydEJhc2UuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9jaGFydC9QYXJ0QmFzZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vQ2hhcnRJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL3Nlcmllcy9TZXJpZXNCYXNlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3JhZGFyL0NoYXJ0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3JhZGFyL2Nzcy9jaGFydC5jc3M/OTAzYSIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9yYWRhci9pbmZvL0NoYXJ0SW5mb19Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9yYWRhci9wYWludGVyL1BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvcmFkYXIvcGFydHMvTGVnZW5kLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9PYmplY3RQb29sLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvU3RhdHVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvU3R5bGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0RhdGEuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvdHdlZW4vVFdFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi93ZWJwYWNrRW50cnkvcmFkYXJFbnRyeS5qcyJdLCJuYW1lcyI6WyJDaGFydEJhc2UiLCJfcGFyZW50RGl2IiwiX2NhbnZhcyIsIl90aXBEaXYiLCJfcGFpbnRlciIsIl9zdGF0dXMiLCJfZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWciLCJfc3VyZmFjZUltYWdlRGF0YSIsIl9hbmltYXRpb25GcmFtZUlEIiwiU3RhdHVzIiwiU1RPUCIsInBhaW50ZXIiLCJnZXRJbnN0YW5jZSIsInNldENoYXJ0IiwicGFpbnQiLCJjbGFzc05hbWUiLCJ0aXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIlBhcnRCYXNlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImRpcnR5RmxhZyIsIkNoYXJ0SW5mb0Jhc2VfSW4iLCJ0aXRsZSIsInRpdGxlVG9wIiwidGl0bGVMZWZ0IiwibGVnZW5kVG9wIiwibGVnZW5kTGVmdCIsImxlZ2VuZFJpZ2h0IiwiYm9keVRvcCIsImJvZHlCb3R0b20iLCJib2R5TGVmdCIsImJvZHlSaWdodCIsImNvbG9ycyIsInNlcmllcyIsInNlbGVjdGVkSW5kZXgiLCJTZXJpZXNCYXNlIiwibmFtZSIsImRhdGEiLCJzZWxlY3RlZCIsIkNoYXJ0IiwicGFyZW50RGl2SUQiLCJjaGFydEluZm9fSW4iLCJDaGFydEluZm9fSW4iLCJfYW5nbGVzIiwiX3JhZGlhbnMiLCJfbGFiZWxzIiwiX21heERhdGEiLCJfbGVnZW5kcyIsIl9pdGVtQXJyYXkiLCJfaW5kaWNhdG9yUG9zaXRpb25zIiwiX3BvaW50UG9vbCIsIl9sZWdlbmRQb29sIiwiX3BhcmVudERpdkNsYXNzTmFtZSIsIl90d0VuZ2luZSIsIlRXRW5naW5lIiwiX3R3ZWVuQ2FsbEJhY2tCaW5kIiwiX3R3ZWVuQ2FsbEJhY2siLCJiaW5kIiwiX3NldFBhaW50ZXIiLCJQYWludGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJPYmplY3RQb29sIiwiTGVnZW5kIiwiX2NoZWNrIiwiY29uc29sZSIsImxvZyIsIl9yZXNldCIsIl9nZXRJdGVtc0FuZFNldFR3ZWVuIiwiX3N0YXJ0UGFpbnQiLCJydG4iLCJsZW5ndGgiLCJjYW52YXMiLCJkaXYiLCJpdGVtQXJyIiwiaSIsImxlbiIsIl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb25zdGFudHMiLCJSRU1PVkUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJlbGVhc2VBbGwiLCJyZWxlYXNlQWxsVFdEYXRhIiwicmVsZWFzZUFsbFRXQWN0aW9uIiwid2luZG93IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbmRpY2F0b3IiLCJjaGFydFJhZGl1cyIsInJhZGl1cyIsIml0ZW1BcnJheSIsImxhYmVscyIsIm1heERhdGEiLCJhbmdsZXMiLCJyYWRpYW5zIiwibGVnZW5kcyIsImluZGljYXRvclBvc2l0aW9ucyIsInBvaW50UG9vbCIsImxlZ2VuZFBvb2wiLCJ0d0VuZ2luZSIsInR3RmxhZyIsImZyb20iLCJ0byIsInR3RGF0YSIsInR3QWN0aW9uIiwidHdEYXRhQXJyIiwidHdlZW5DYWxsQmFjayIsImoiLCJsZW4xIiwibGVuMiIsImFuZ2xlIiwibnVtIiwib2JqIiwiYXJyIiwic2VyIiwicG9pbnQiLCJwIiwicmFkaWFuVW5pdCIsInJhZGlhbiIsInJhdGUiLCJsZWdlbmQiLCJSQURJQU5fVU5JVCIsIm1heCIsImdldE9iaiIsIk1hdGgiLCJjb3MiLCJzaW4iLCJjb2xvciIsImdldFRXRGF0YSIsInNldERhdGEiLCJwdXNoIiwiZ2V0VFdBY3Rpb24iLCJUV0FsZ29yaXRobSIsIkJvdW5jZSIsImVhc2VPdXQiLCJzZXRGaXJzdFRXQWN0aW9uIiwiY29tbWFuZCIsInJlY3QiLCJwb3NpdGlvbiIsIm1lIiwiZG9Nb3VzZUNsaWNrIiwiZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIlV0aWxpdHkiLCJ3aW5kb3dUb0NhbnZhcyIsImxlZnQiLCJ0b3AiLCJjbGllbnRYIiwiY2xpZW50WSIsImlzUG9pbnRJblBhdGgiLCJTVEVQNCIsIkFERCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU1RFUDEiLCJfcGFpbnQiLCJzdGFydCIsIlNURVAyIiwibmV4dEZyYW1lIiwic3RvcCIsIlNURVAzIiwiV0FJVElORyIsInJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJyZXN1bHRBcnJheSIsImNlbnRlclgiLCJjZW50ZXJZIiwic3BsaXROdW1iZXIiLCJfY2hhcnQiLCJfY3R4IiwiX2NhbnZhc1N1cmZhY2UxIiwiX2NhbnZhc1N1cmZhY2UyIiwiX2NoYXJ0SW5mb19JbiIsIl9zZWxlY3RlZEluZGV4IiwiY2hhcnQiLCJnZXRDb250ZXh0IiwiY3R4IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGVhclJlY3QiLCJfcGFpbnRUaXRsZSIsIl9wYWludEJhayIsIl9wYWludExhYmVsIiwiZ2V0SW1hZ2VEYXRhIiwiX3BhaW50TGVnZW5kIiwicHV0SW1hZ2VEYXRhIiwiX3BhaW50UmFkYXIiLCJzYXZlIiwiZm9udCIsIlN0eWxlcyIsIlRJVExFX0ZPTlQiLCJ0ZXh0QWxpZ24iLCJURVhUX0FMSUdOX0xFRlQiLCJ0ZXh0QmFzZWxpbmUiLCJURVhUX0JBU0VfTElORV9UT1AiLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJwb2ludEl0ZW0iLCJwb2ludHMxIiwicG9pbnRzMiIsIngxIiwieDIiLCJ5MSIsInkyIiwibGVuMyIsImxpbmVXaWR0aCIsIlJBREFSX0JBS19MSU5FX1dJRFRIIiwic3Ryb2tlU3R5bGUiLCJSQURBUl9CQUtfTElORV9DT0xPUiIsImZpbGxTdHlsZSIsIlJBREFSX0JBS19GSUxMX0NPTE9SIiwidHJhbnNsYXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsInN0cm9rZSIsInN0ciIsInciLCJoIiwiTEVHRU5EX0ZPTlQiLCJnZXRUZXh0SGVpZ2h0IiwiTEVHRU5EX1NIQVBFX1RFWFRfR0FQIiwiZmlsbFJlY3QiLCJtZWFzdXJlVGV4dCIsIml0ZW1zIiwiUkFEQVJfTElORV9XSURUSCIsImxhYmVsIiwiUkFEQVJfTEFCRUxfRk9OVCIsIlJBREFSX0xBQkVMX0NPTE9SIiwiUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUIiwiVEVYVF9CQVNFX0xJTkVfTUlERExFIiwiVEVYVF9BTElHTl9SSUdIVCIsIlRFWFRfQkFTRV9MSU5FX0JPVFRPTSIsIlRFWFRfQUxJR05fQ0VOVEVSIiwiaW5zdGFuY2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZ1bmMiLCJzZXRUaW1lb3V0IiwiRElSVFkiLCJIQUxGX1BJWEVMIiwiQ0xPU0VfVE9fWkVSTyIsIlRFWFRfQkFTRV9MSU5FX0lERU9HUkFQSElDIiwiWF9BWElTIiwiWV9BWElTIiwiUEkiLCJjbGF6eiIsInBhcmEiLCJfY2xhc3MiLCJfcGFyYSIsIl9jb3VudCIsIl9wb29sIiwicG9vbCIsIlNURVA1IiwiTEFCRUxfRk9OVCIsIkFYSVNfTkFNRV9GT05UIiwiRk9OVF9GSUxMX0NPTE9SIiwiQVhJU19MSU5FX1dJRFRIIiwiQVhJU19MSU5FX0NPTE9SIiwiQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRSIsIkdSSURfTElORV9XSURUSCIsIkdSSURfTElORV9DT0xPUiIsIkdSSURfTElORV9EQVNIIiwiWEFYSVNfTEFCRUxfT0ZGU0VUIiwiWEFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEUiLCJZQVhJU19MQUJFTF9PRkZTRVQiLCJZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURSIsIkxFR0VORF9HQVAiLCJUSVBfTE9DQVRJT05fT0ZGU0VUIiwiQlVCQkxFX0FMUEhBIiwiQ09MVU1OX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJDT0xVTU5fU0VMRUNUT1JfTElORV9DT0xPUiIsIkxJTkVfTElORV9XSURUSCIsIkxJTkVfQVJFQV9BTFBIQSIsIkxJTkVfTUFSS1BPSU5UX1dJRFRIIiwiTElORV9NQVJLUE9JTlRfUkFESVVTIiwiTElORV9NQVJLUE9JTlRfQkFLX0NPTE9SIiwiTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIIiwiTElORV9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiUElFX0xBQkVMX0lOTkVSX0ZPTlRfQ09MT1IiLCJQSUVfTEFCRUxfR1VJREVfTElORTFfU0laRSIsIlBJRV9MQUJFTF9HVUlERV9MSU5FMl9TSVpFIiwiUElFX0xBQkVMX09GRlNFVCIsIlBJRV9TRUxFQ1RPUl9UUkFOU0xBVEUiLCJQSUVfU0VMRUNUT1JfTElORV9XSURUSCIsIlBJRV9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiU0NBVFRFUl9QT0lOVF9BTFBIQSIsIlNDQVRURVJfQ1JPU1NfTElORV9XSURUSCIsIlNDQVRURVJfQ1JPU1NfQ09MT1IiLCJTVU5CVVJTX0xBQkVMX0NPTE9SIiwiU1VOQlVSU19CT1JERVJfQ09MT1IiLCJtaW4iLCJzY2FsZU1heENvdW50IiwiYXZnIiwiZ2FwcyIsInNjYWxlVW5pdCIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsInBvdyIsImZsb29yIiwieE9SeSIsInJvdW5kIiwiYm91bmRpbmdDbGllbnRSZWN0TGVmdCIsImJvdW5kaW5nQ2xpZW50UmVjdFRvcCIsImJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoIiwiYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0IiwiZ2xvYmxlWCIsImdsb2JsZVkiLCJjYW52YXNDb250ZXh0IiwidGV4dCIsIlRXQWN0aW9uIiwidG90bGVUaW1lcyIsImRhdGFBcnJheSIsImFsZ29yaXRobSIsIm5leHRBY3Rpb24iLCJkdXJhdGlvbiIsImNlaWwiLCJGUkFNRV9EVVJBVElPTiIsImFjdGlvbiIsImNhbGxCYWNrIiwidmFsdWUiLCJ0IiwiYiIsImMiLCJkIiwiUXVhZCIsImVhc2VJbiIsImVhc2VJbk91dCIsIkN1YmljIiwiUXVhcnQiLCJRdWludCIsIlNpbmUiLCJFeHBvIiwiQ2lyYyIsInNxcnQiLCJFbGFzdGljIiwiYSIsInMiLCJhYnMiLCJhc2luIiwiQmFjayIsIlQiLCJ0d2VlbiIsIlRXRGF0YSIsImZyb21BcnJheSIsInRvQXJyYXkiLCJfYWN0aW9ucyIsIl9maXJzdEFjdGlvbiIsIl9jdXJyZW50QWN0aW9uIiwiX2FjdGlvblBvb2wiLCJfZGF0YVBvb2wiLCJfaXNQbGF5aW5nIiwiaW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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Ozs7O0FDbkdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEiLCJmaWxlIjoicmFkYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyYWRhclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUXCJdID0gcm9vdFtcIlRcIl0gfHwge30sIHJvb3RbXCJUXCJdW1wicmFkYXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnBhY2tFbnRyeS9yYWRhckVudHJ5LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qICwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICB2YXIgZW5kID0gYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlIChlbmRQb3MgPiBpbmRleCkgT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5JywgeyBmaWxsOiByZXF1aXJlKCcuL19hcnJheS1maWxsJykgfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmaWxsJyk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBcXHJcXG4gKiDlm77ooajlhoXlhajlsYDorr7lrprvvIjlv4Xpobvpobnnm67vvIlcXHJcXG4gKiDnlKjkuo7muIXpmaTvvIjliJ3lp4vljJbvvInmiYDmnInpu5jorqTlhoXlpJbovrnot50gXFxyXFxuICovXFxyXFxuLnJhZGFyQ2hhcnREaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDsgICAgICAgICAgICAvKiDmuIXpmaTvvIjliJ3lp4vljJbvvInlm77ooajlhoXmiYDmnInlhYPntKDnmoTpu5jorqTlhoXovrnot50gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggOyAgICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5aSW6L656LedICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFxcclxcbiAqIOe7mOWItuS4u+S9k+eahENhbnZhc1xcclxcbiAqL1xcclxcbi5yYWRhckNoYXJ0RGl2IGNhbnZhcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAvKiDnu53lr7nlrprkvY3vvIzov5nmoLcy5Liq5Z2X5YWD57Sg77yIQ2FudmFz77yJ5omN5Lya6YeN5Y+g5Zyo5LiA6LW3ICovXFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjYWFhYWFhO1xcclxcbn0gICAgIFwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uL3N1cHBvcnQvU3RhdHVzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gbnVsbDsgICAgICAgICAgICAgICAgIC8v5a2Q57uE5Lu2OiDlm77ooajlkITkuKrlrZDnu4Tku7bnmoTniLblrrnlmahcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3RpcERpdiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIgPSBudWxsOyAgICAgICAgICAgICAgICAgICAvL+eUu+WutuW8leeUqFxyXG5cclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnJzsgICAgICAgICAgICAgICAgICAgICAgLy/nirbmgIFcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSBmYWxzZTsgIC8v55Sx5LqOanPml6Dms5XliKTmlq3kuovku7bnm5HlkKzlh73mlbDmmK/lkKblt7Lnu4/lrZjlnKjvvIzlm6DmraToh6rlrprkuYnmoIflv5fkvY3mnaXliKTmlq1cclxuICAgICAgICB0aGlzLl9zdXJmYWNlSW1hZ2VEYXRhID0gbnVsbDsgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaLvvIznlKjkuo7kv53lrZhDYW52YXPlm77niYdcclxuXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRDtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0b3AgKCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IFN0YXR1cy5TVE9QO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfc2V0UGFpbnRlciAocGFpbnRlcikge1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIgPSBwYWludGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50ICgpIHtcclxuICAgICAgICB0aGlzLl9wYWludGVyLnNldENoYXJ0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIucGFpbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiDliqjmgIHnlJ/miJB0aXDlr7nosaFcclxuICAgICog5Zyo5pys5Zu+6KGo57O75YiX5Lit77yMdGlw5piv55Sx5q616JC9cOWvueixoeWSjHRhYmxl5a+56LGh5p6E5oiQ77yM5YW25aSW6KeC55Sx5aSW6YOo5oyH5a6a55qEQ1NT5o6n5Yi2XHJcbiAgICAqL1xyXG4gICAgX2NyZWF0ZVRpcCAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IHRpcDtcclxuXHJcbiAgICAgICAgLy/nlJ/miJB0aXDnmoRkaXblr7nosaEs5bm25aKe5YqgY2xhc3PmoLflvI/jgILms6jmhI/vvJrmmK/lop7liqDogIzkuI3mmK/mm7/mjaJcclxuICAgICAgICB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXAuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDmrrXokL3lr7nosaHvvIznlKjkuo7mmL7npLrnsbvnm67lkI3np7BcclxuICAgICAgICB0aXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDooajmoLzlr7nosaHvvIznlKjkuo7ns7vliJflkI3np7DlkozmlbDmja5cclxuICAgICAgICB0aXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKSk7XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHRpcDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy54ID0gMTA7XHJcbiAgICAgICAgdGhpcy55ID0gMTA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgdGhpcy5kaXJ0eUZsYWcgPSBmYWxzZTsgICAgICAvL+iEj+aVsOaNru+8iOaXoOaViOaVsOaNru+8iVxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0SW5mb0Jhc2VfSW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnRpdGxlID0gJ1RDaGFydHMnOyAgICAgICAvL+WbvuihqOagh+mimFxyXG5cclxuICAgICAgICB0aGlzLnRpdGxlVG9wID0gMTA7ICAgICAgICAgLy/moIfpopjkvY3nva7vvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLnRpdGxlTGVmdCA9IDEwO1xyXG5cclxuICAgICAgICB0aGlzLmxlZ2VuZFRvcCA9IDEwOyAgICAgICAgLy/lm77kvovkvY3nva7vvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLmxlZ2VuZExlZnQgPSAyMDtcclxuICAgICAgICB0aGlzLmxlZ2VuZFJpZ2h0ID0gMjA7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keVRvcCA9IDcwOyAgICAgICAvL+WbvuihqOS4u+S9k+WMuuWfn++8iHh55Lik6L205Zu05oiQ55qE55+p5b2i5Yy65Z+f77yJ77ya55u45a+55LqOZGl26L6557yYXHJcbiAgICAgICAgdGhpcy5ib2R5Qm90dG9tID0gNTA7XHJcbiAgICAgICAgdGhpcy5ib2R5TGVmdCA9IDUwO1xyXG4gICAgICAgIHRoaXMuYm9keVJpZ2h0ID0gNTA7XHJcblxyXG4gICAgICAgIC8v5Zu+6KGo5L2/55So55qE6aKc6Imy5pWw57uEXHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbJyNDMjM1MzEnLCAnIzJGNDU1NCcsICcjNjFBMEE4JywgJyNENDgyNjUnLCAnIzkxQzdBRScsICcjQ0E4NjIyJywgJyNCREEyOUEnLCAnIzZFNzA3NCddO1xyXG4gICAgICAgIHRoaXMuc2VyaWVzID0gW107ICAgICAgICAgICAgICAgICAvL+aVsOaNruezu+WIl1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xOyAgICAgICAgIC8v6YCJ5oup6aG555qE57Si5byVIFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VyaWVzQmFzZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ2hhcnRCYXNlIGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzJztcclxuaW1wb3J0IFBhcnRCYXNlIGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQvUGFydEJhc2UuanMnO1xyXG5cclxuaW1wb3J0IENoYXJ0SW5mb19JbiBmcm9tICcuL2luZm8vQ2hhcnRJbmZvX0luLmpzJztcclxuXHJcbmltcG9ydCBMZWdlbmQgZnJvbSAnLi9wYXJ0cy9MZWdlbmQuanMnO1xyXG5pbXBvcnQgUGFpbnRlciBmcm9tICcuL3BhaW50ZXIvUGFpbnRlci5qcyc7XHJcblxyXG5pbXBvcnQgT2JqZWN0UG9vbCBmcm9tICcuLi8uLi9zdXBwb3J0L09iamVjdFBvb2wuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3N1cHBvcnQvQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uL3N1cHBvcnQvVXRpbGl0eS5qcyc7XHJcblxyXG5pbXBvcnQgVFdBbGdvcml0aG0gZnJvbSAnLi4vLi4vdHdlZW4vVFdBbGdvcml0aG0uanMnO1xyXG5pbXBvcnQgVFdFbmdpbmUgZnJvbSAnLi4vLi4vdHdlZW4vVFdFbmdpbmUuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ2hhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnREaXZJRCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy/nlKjmiLfovpPlhaXvvIjlm77ooajlv4XlpIfkv6Hmga/vvIlcclxuICAgICAgICB0aGlzLmNoYXJ0SW5mb19JbiA9IG5ldyBDaGFydEluZm9fSW4oKTsgICAgICAgICAgICAgICAgICAgICAvL+WbvuihqOS/oeaBr+OAguS+i++8muWbvuihqOWQjeensFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fYW5nbGVzID0gW107ICAgICAgICAgICAgICAgICAgICAgICAgICAvL+avj+S4quaMh+agh+aJgOWcqOeahOinkuW6piAgXHJcbiAgICAgICAgdGhpcy5fcmFkaWFucyA9IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mr4/kuKrmjIfmoIfmiYDlnKjnmoTop5Lluqblr7nlupTnmoTlvKfluqZcclxuICAgICAgICB0aGlzLl9sYWJlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9tYXhEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5fbGVnZW5kcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtQXJyYXkgPSBbXTsgICAgICAgICAvL+WtmOaUvuaJh+W9oueahOS4gOe7tOaVsOe7hFxyXG4gICAgICAgIHRoaXMuX2luZGljYXRvclBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9wb2ludFBvb2wgPSBudWxsOyAgICAgICAgLy/ngrnlr7nosaHlr7nosaHmsaBcclxuICAgICAgICB0aGlzLl9sZWdlbmRQb29sID0gbnVsbDsgICAgICAgIC8v5Zu+5L6L5a+56LGh5a+56LGh5rGgXHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdkNsYXNzTmFtZSA9ICdyYWRhckNoYXJ0RGl2JzsgICAgLy/moLflvI/lkI1cclxuXHJcbiAgICAgICAgdGhpcy5fdHdFbmdpbmUgPSBuZXcgVFdFbmdpbmUoKTsgICAgIC8v57yT5Yqo5Yqo55S755u45YWzXHJcbiAgICAgICAgdGhpcy5fdHdlZW5DYWxsQmFja0JpbmQgPSB0aGlzLl90d2VlbkNhbGxCYWNrLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8v6K6+572u55S75a62XHJcbiAgICAgICAgdGhpcy5fc2V0UGFpbnRlcihQYWludGVyKTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bkvZzkuLrlm77ooajlrrnlmajnmoRkaXblr7nosaHvvIzlubblop7liqDnibnlrprmoLflvI/jgILms6jmhI/vvJrmmK/lop7liqDogIzkuI3mmK/mm7/mjaJcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnREaXZJRCk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2LmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLl9wYXJlbnREaXZDbGFzc05hbWU7XHJcblxyXG4gICAgICAgIC8v5Yqo5oCB55Sf5oiQX2NhbnZhc++8jOW5tua3u+WKoOWIsERPTeagkeOAguWQjOaXtuiOt+WPluWFtuS4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluWvueixoeaxoFxyXG4gICAgICAgIHRoaXMuX3BvaW50UG9vbCA9IG5ldyBPYmplY3RQb29sKFBhcnRCYXNlKTtcclxuICAgICAgICB0aGlzLl9sZWdlbmRQb29sID0gbmV3IE9iamVjdFBvb2woTGVnZW5kKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+mqjOivgeaVsOaNruWQiOazleaAp1xyXG4gICAgICAgIGlmICh0aGlzLl9jaGVjaygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVENoYXJ0c10gSW5jb3JyZWN0IGNoYXJ0IGRhdGEgIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+mHjeiuvuWQhOenjeeKtuaAge+8jOaVsOaNrlxyXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5omH5b2i5L+h5oGvXHJcbiAgICAgICAgdGhpcy5fZ2V0SXRlbXNBbmRTZXRUd2VlbigpO1xyXG5cclxuICAgICAgICAvL+WQr+WKqOW4p+W+queOr++8jOWcqOW+queOr+WGhemDqOe7mOWItuWbvuihqFxyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGFpbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIF9jaGVjayAoKSB7XHJcbiAgICAgICAgbGV0IHJ0biA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v5qOA5p+lMe+8miDmlbDmja7mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAodGhpcy5jaGFydEluZm9fSW4uc2VyaWVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3Jlc2V0ICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NhbnZhcyxcclxuICAgICAgICAgICAgZGl2ID0gdGhpcy5fcGFyZW50RGl2LFxyXG4gICAgICAgICAgICBpdGVtQXJyID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG5cclxuICAgICAgICAvL+enu+mZpOm8oOagh+S6i+S7tuebkeWQrOWZqFxyXG4gICAgICAgIHRoaXMuX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lcihDb25zdGFudHMuUkVNT1ZFKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7lsLrlr7hcclxuICAgICAgICBjYW52YXMud2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGRpdi5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5Zu+5L6L5pWw5o2u44CBbGluZeWvueixoeaVsOe7hFxyXG4gICAgICAgIGl0ZW1BcnIubGVuZ3RoID0gMDtcclxuICAgICAgICBsZW4gPSB0aGlzLmNoYXJ0SW5mb19Jbi5zZXJpZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtQXJyW2ldID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+S7juWvueixoeaxoOS4remHiuaUvuabvue7j+S9v+eUqOi/h+eahOaJh+W9olxyXG4gICAgICAgIHRoaXMuX3BvaW50UG9vbC5yZWxlYXNlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5fbGVnZW5kUG9vbC5yZWxlYXNlQWxsKCk7XHJcblxyXG4gICAgICAgIC8v6YeK5pS+57yT5Yqo6LWE5rqQXHJcbiAgICAgICAgdGhpcy5fdHdFbmdpbmUucmVsZWFzZUFsbFRXRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuX3R3RW5naW5lLnJlbGVhc2VBbGxUV0FjdGlvbigpO1xyXG5cclxuICAgICAgICAvL+WPlua2iOS4iuS4gOasoee7keWumueahOWKqOeUu+WHveaVsFxyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRpb25GcmFtZUlEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldEl0ZW1zQW5kU2V0VHdlZW4gKCkge1xyXG4gICAgICAgIGxldCBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgaW5kaWNhdG9yID0gY2hhcnRJbmZvX0luLmluZGljYXRvcixcclxuICAgICAgICAgICAgY2hhcnRSYWRpdXMgPSBjaGFydEluZm9fSW4ucmFkaXVzLFxyXG4gICAgICAgICAgICBzZXJpZXMgPSBjaGFydEluZm9fSW4uc2VyaWVzLFxyXG4gICAgICAgICAgICBjb2xvcnMgPSBjaGFydEluZm9fSW4uY29sb3JzLFxyXG5cclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG5cclxuICAgICAgICAgICAgbGFiZWxzID0gdGhpcy5fbGFiZWxzLFxyXG4gICAgICAgICAgICBtYXhEYXRhID0gdGhpcy5fbWF4RGF0YSxcclxuICAgICAgICAgICAgYW5nbGVzID0gdGhpcy5fYW5nbGVzLFxyXG4gICAgICAgICAgICByYWRpYW5zID0gdGhpcy5fcmFkaWFucyxcclxuICAgICAgICAgICAgbGVnZW5kcyA9IHRoaXMuX2xlZ2VuZHMsXHJcblxyXG4gICAgICAgICAgICBpbmRpY2F0b3JQb3NpdGlvbnMgPSB0aGlzLl9pbmRpY2F0b3JQb3NpdGlvbnMsXHJcblxyXG4gICAgICAgICAgICBwb2ludFBvb2wgPSB0aGlzLl9wb2ludFBvb2wsXHJcbiAgICAgICAgICAgIGxlZ2VuZFBvb2wgPSB0aGlzLl9sZWdlbmRQb29sLFxyXG5cclxuICAgICAgICAgICAgdHdFbmdpbmUgPSB0aGlzLl90d0VuZ2luZSxcclxuICAgICAgICAgICAgdHdGbGFnLFxyXG4gICAgICAgICAgICBmcm9tLCB0bywgdHdEYXRhLCB0d0FjdGlvbixcclxuICAgICAgICAgICAgdHdEYXRhQXJyID0gW10sXHJcbiAgICAgICAgICAgIHR3ZWVuQ2FsbEJhY2sgPSB0aGlzLl90d2VlbkNhbGxCYWNrLFxyXG5cclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMixcclxuICAgICAgICAgICAgYW5nbGUsXHJcbiAgICAgICAgICAgIG51bSxcclxuICAgICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIHNlcixcclxuICAgICAgICAgICAgcG9pbnQsXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIHJhZGlhblVuaXQsXHJcbiAgICAgICAgICAgIHJhZGlhbixcclxuICAgICAgICAgICAgcmF0ZSxcclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZDtcclxuXHJcblxyXG4gICAgICAgIC8v44CQMeOAkeiuoeeul+WQhOS4quaMh+agh+aJgOWcqOeahOinkuW6pu+8jOW5tuWtmOWFpeaVsOe7hFxyXG4gICAgICAgIGxlbjEgPSBpbmRpY2F0b3IubGVuZ3RoO1xyXG4gICAgICAgIG51bSA9IDM2MCAvIGxlbjE7XHJcbiAgICAgICAgYW5nbGUgPSAtOTA7XHJcbiAgICAgICAgcmFkaWFuVW5pdCA9IENvbnN0YW50cy5SQURJQU5fVU5JVDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IGluZGljYXRvcltpXTtcclxuXHJcbiAgICAgICAgICAgIGxhYmVsc1tpXSA9IG9iai5uYW1lO1xyXG4gICAgICAgICAgICBtYXhEYXRhW2ldID0gb2JqLm1heDtcclxuXHJcbiAgICAgICAgICAgIGFuZ2xlc1tpXSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICByYWRpYW5zW2ldID0gYW5nbGUgKiByYWRpYW5Vbml0O1xyXG4gICAgICAgICAgICBhbmdsZSArPSBudW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+OAkDPjgJHpgY3ljobmlbDmja7ns7vliJfvvIznlJ/miJDpobnnm67vvIzorr7nva7lsZ7mgKfvvIzlubblrZjlhaXmlbDnu4TvvIzliqDlhaXliLDmmL7npLrliJfooahcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJhZGlhbiA9IHJhZGlhbnNbaV07XHJcblxyXG4gICAgICAgICAgICAvL+iuoeeul+aMh+ekuueCueS9jee9ru+8jOWtmOWFpeaVsOe7hFxyXG4gICAgICAgICAgICBwb2ludCA9IHBvaW50UG9vbC5nZXRPYmooKTtcclxuICAgICAgICAgICAgcG9pbnQueCA9IGNoYXJ0UmFkaXVzICogTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICAgICAgcG9pbnQueSA9IGNoYXJ0UmFkaXVzICogTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICAgICAgaW5kaWNhdG9yUG9zaXRpb25zW2ldID0gcG9pbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZW4xID0gc2VyaWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlciA9IHNlcmllc1tpXTtcclxuICAgICAgICAgICAgdHdGbGFnID0gc2VyLnNlbGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgbGVnZW5kID0gbGVnZW5kUG9vbC5nZXRPYmooKTtcclxuICAgICAgICAgICAgbGVnZW5kLm5hbWUgPSBzZXIubmFtZTtcclxuICAgICAgICAgICAgbGVnZW5kLmNvbG9yID0gY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBsZWdlbmQuc2VsZWN0ZWQgPSBzZXIuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIGxlZ2VuZHNbaV0gPSBsZWdlbmQ7XHJcblxyXG4gICAgICAgICAgICBhcnIgPSBbXTtcclxuICAgICAgICAgICAgbGVuMiA9IHNlci5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgLy/moLnmja7mlbDlgLzorqHnrpfmr5TnjodcclxuICAgICAgICAgICAgICAgIG51bSA9IHNlci5kYXRhW2pdO1xyXG4gICAgICAgICAgICAgICAgcmF0ZSA9IG51bSAvIG1heERhdGFbal07XHJcblxyXG4gICAgICAgICAgICAgICAgLy/moLnmja7mjIfmoIfngrnlkozmr5TnjoforqHnrpfmlbDmja7ns7vliJfngrnnmoTkvY3nva7vvIzlubbliqDlhaXmlbDnu4RcclxuICAgICAgICAgICAgICAgIHAgPSBpbmRpY2F0b3JQb3NpdGlvbnNbal07XHJcbiAgICAgICAgICAgICAgICBwb2ludCA9IHBvaW50UG9vbC5nZXRPYmooKTtcclxuICAgICAgICAgICAgICAgIHBvaW50LnggPSBwLnggKiByYXRlO1xyXG4gICAgICAgICAgICAgICAgcG9pbnQueSA9IHAueSAqIHJhdGU7XHJcbiAgICAgICAgICAgICAgICBhcnJbal0gPSBwb2ludDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WPluW+l+e8k+WKqOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgaWYgKHR3RmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9IFswLCAwXTtcclxuICAgICAgICAgICAgICAgICAgICB0byA9IFtwb2ludC54LCBwb2ludC55XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHdEYXRhID0gdHdFbmdpbmUuZ2V0VFdEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHdEYXRhLnNldERhdGEocG9pbnQsIGZyb20sIHRvLCB0d2VlbkNhbGxCYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB0d0RhdGFBcnIucHVzaCh0d0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpdGVtQXJyYXlbaV0gPSBhcnI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0d0FjdGlvbiA9IHR3RW5naW5lLmdldFRXQWN0aW9uKCk7XHJcbiAgICAgICAgdHdBY3Rpb24uc2V0RGF0YSh0d0RhdGFBcnIsIFRXQWxnb3JpdGhtLkJvdW5jZS5lYXNlT3V0LCAxMDAwKTtcclxuXHJcbiAgICAgICAgdHdFbmdpbmUuc2V0Rmlyc3RUV0FjdGlvbih0d0FjdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyIChjb21tYW5kKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NhbnZhcyxcclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZHMgPSB0aGlzLl9sZWdlbmRzLFxyXG4gICAgICAgICAgICBsZWdlbmQsXHJcbiAgICAgICAgICAgIHJlY3QsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0geyB4OiAtMSwgeTogLTEgfSxcclxuXHJcbiAgICAgICAgICAgIGksIGxlbixcclxuXHJcbiAgICAgICAgICAgIG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9Nb3VzZUNsaWNrIChlKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W6byg5qCH55u45a+55LqOQ2FudmFz55qE5L2N572uXHJcbiAgICAgICAgICAgIHJlY3QgPSBtZS5fY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBVdGlsaXR5LndpbmRvd1RvQ2FudmFzKHJlY3QubGVmdCxcclxuICAgICAgICAgICAgICAgIHJlY3QudG9wLFxyXG4gICAgICAgICAgICAgICAgcmVjdC53aWR0aCxcclxuICAgICAgICAgICAgICAgIHJlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGUuY2xpZW50WSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u6byg5qCH5L2N572u77yM5om+5Yiw6byg5qCH5L2N5LqO5ZOq5Liq5a+56LGh5LmL5LiKXHJcbiAgICAgICAgICAgIGxlbiA9IGxlZ2VuZHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZCA9IGxlZ2VuZHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3pvKDmoIfkvY3kuo7lk6rkuKrlr7nosaHkuYvkuIpcclxuICAgICAgICAgICAgICAgIGlmIChsZWdlbmQuaXNQb2ludEluUGF0aChwb3NpdGlvbi54LCBwb3NpdGlvbi55KSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kLnNlbGVjdGVkID0gIWxlZ2VuZC5zZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5omn6KGMXHJcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gQ29uc3RhbnRzLkFERCAmJiBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWUuX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvTW91c2VDbGljayk7XHJcbiAgICAgICAgICAgIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09IENvbnN0YW50cy5SRU1PVkUgJiYgbWUuX2V2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID09IHRydWUpIHtcclxuICAgICAgICAgICAgbWUuX2NhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvTW91c2VDbGljayk7XHJcbiAgICAgICAgICAgIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc3RhcnRQYWludCAoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFpbnQgKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1lLl9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAxOiAgICAgICAgICAgICAgICAgICAgLy/nu5jliLblm77ooajmoYbmnrbvvIjmoIfpopjjgIHlm77kvovnrYnvvInvvIzkuLrnvJPliqjmlYjmnpzlgZrlh4blpIdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3R3RW5naW5lLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDI6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v57uY5Yi257yT5Yqo5pWI5p6cXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICDlpoLmnpznvJPliqjmsqHmnInnu5PmnZ/vvIzlsLHnu5jliLZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIOWPjeS5i++8jOiuvue9rueKtuaAge+8jOWcqOS4i+S4gOWBnOatoue7mOWItlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5fdHdFbmdpbmUubmV4dEZyYW1lKCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fcGFpbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3R3RW5naW5lLnN0b3AoKTsgICAgICAvL+WBnOatoue8k+WKqFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAzOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKENvbnN0YW50cy5BREQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLldBSVRJTkc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpOyAgIC8v57uY5Yi26YCJ5oup6aG5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuV0FJVElORztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lvqrnjq/osIPnlKjoh6rlt7HvvIzov5vooYznu5jnlLtcclxuICAgICAgICAgICAgaWYgKG1lLl9zdGF0dXMgIT0gU3RhdHVzLlNUT1ApIHtcclxuICAgICAgICAgICAgICAgIG1lLl9hbmltYXRpb25GcmFtZUlEID0gd2luZG93LnJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUocGFpbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iuvue9ruWIneWni+eKtuaAge+8jOW8gOWni+e7mOWItlxyXG4gICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDE7XHJcbiAgICAgICAgcGFpbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAqIOe8k+WKqOaViOaenFxyXG4gICAgICovXHJcbiAgICBfdHdlZW5DYWxsQmFjayAodGFyZ2V0LCByZXN1bHRBcnJheSkge1xyXG4gICAgICAgIHRhcmdldC54ID0gcmVzdWx0QXJyYXlbMF07XHJcbiAgICAgICAgdGFyZ2V0LnkgPSByZXN1bHRBcnJheVsxXTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhcnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhcnQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IENoYXJ0SW5mb0Jhc2VfSW4gZnJvbSAnLi4vLi4vLi4vYmFzZS9pbmZvL0NoYXJ0SW5mb0Jhc2VfSW4uanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0SW5mb19JbiBleHRlbmRzIENoYXJ0SW5mb0Jhc2VfSW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuY2VudGVyWCA9IDM1MDsgICAgICAgICAgLy/pm7fovr7lm77kuK3lv4PkvY3nva7vvJrnm7jlr7nkuo5kaXblt6bkuIrop5JcclxuICAgICAgICB0aGlzLmNlbnRlclkgPSAxNTA7XHJcblxyXG4gICAgICAgIHRoaXMucmFkaXVzID0gMTIwOyAgICAgICAgICAgICAvL+mbt+i+vuWbvuato+Wkmui+ueW9ouWNiuW+hFxyXG4gICAgICAgIHRoaXMuc3BsaXROdW1iZXIgPSA1OyAgICAgICAgLy/ljYrlvoTliIblibLmlbBcclxuXHJcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IgPSBbXTsgICAgICAgICAgICAgIC8v5oyH5qCH5pWw57uE77yM5L6L77yaICBbIHtuYW1lOiAnQVFJJywgbWF4OiA0MDB9ICwgIHtuYW1lOiAnUE0yLjUnLCBtYXg6IDI1MH0gXVxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMubGVnZW5kVG9wID0gNTA7XHJcbiAgICAgICAgdGhpcy5sZWdlbmRMZWZ0ID0gMjA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvU3R5bGVzLmpzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvVXRpbGl0eS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy9QYWludGVy5Lit5peg5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2hhcnQ7ICAgICAgICAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eDsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2UxOyAgICAgICAgICAgIC8vQ2FudmFz57uY5Zu+6KGo6Z2iXHJcbiAgICAgICAgdGhpcy5fY2FudmFzU3VyZmFjZTI7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luOyAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuXHJcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yUG9zaXRpb25zO1xyXG4gICAgICAgIHRoaXMuX2xhYmVscztcclxuICAgICAgICB0aGlzLl9hbmdsZXM7XHJcbiAgICAgICAgdGhpcy5fbGVnZW5kcztcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5OyAgICAgICAgICAgICAgICAgLy/lrZjlgqjmiYflvaLngrnnmoTmlbDnu4RcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleDsgICAgLy/ooqvpgInmi6nnmoTmiYflvaJcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXRDaGFydCAoY2hhcnQpIHtcclxuICAgICAgICB0aGlzLl9jaGFydCA9IGNoYXJ0O1xyXG5cclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjaGFydC5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGFydEluZm9fSW4gPSBjaGFydC5jaGFydEluZm9fSW47XHJcblxyXG4gICAgICAgIHRoaXMuX2luZGljYXRvclBvc2l0aW9ucyA9IGNoYXJ0Ll9pbmRpY2F0b3JQb3NpdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fbGFiZWxzID0gY2hhcnQuX2xhYmVscztcclxuICAgICAgICB0aGlzLl9hbmdsZXMgPSBjaGFydC5fYW5nbGVzO1xyXG4gICAgICAgIHRoaXMuX2xlZ2VuZHMgPSBjaGFydC5fbGVnZW5kcztcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gY2hhcnQuX2l0ZW1BcnJheTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2NoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwYWludCAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY2hhcnQuX3N0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMTogICAgICAgICAvL+e7mOWItuWbvuihqOW5tue8k+WtmENhbnZhc+e7mOWbvuihqOmdolxyXG5cclxuICAgICAgICAgICAgICAgIC8v5riF56m655S75biDXHJcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5ZyoX2N0eOS4iue7mOWItuWbvuihqOWbuuWumueahOWGheWuuVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRUaXRsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRCYWsoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGFiZWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e8k+WtmOatpOaXtueahF9jdHjnu5jlm77ooajpnaLvvIjlhajlsLrlr7jvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2UxID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExlZ2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgLy/nvJPlrZjmraTml7bnmoRfY3R457uY5Zu+6KGo6Z2i77yI5YWo5bC65a+477yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNTdXJmYWNlMiA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAyOiAgICAgICAgIC8v57uY5Yi257yT5Yqo5pWI5p6cXHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLl9jYW52YXNTdXJmYWNlMiwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFJhZGFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQNDogICAgICAgICAvL+e7mOWItumAieaLqVxyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5fY2FudmFzU3VyZmFjZTEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRMZWdlbmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50UmFkYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfcGFpbnRUaXRsZSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5USVRMRV9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9MRUZUO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfVE9QO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChjaGFydEluZm9fSW4udGl0bGUsIGNoYXJ0SW5mb19Jbi50aXRsZUxlZnQsIGNoYXJ0SW5mb19Jbi50aXRsZVRvcCk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9wYWludEJhayAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBpbmRpY2F0b3JQb3NpdGlvbnMgPSB0aGlzLl9pbmRpY2F0b3JQb3NpdGlvbnMsXHJcblxyXG4gICAgICAgICAgICBwb2ludEl0ZW0sXHJcbiAgICAgICAgICAgIG9iaixcclxuXHJcbiAgICAgICAgICAgIHBvaW50czEgPSBbXSwgcG9pbnRzMiA9IFtdLFxyXG5cclxuICAgICAgICAgICAgcmF0ZSxcclxuICAgICAgICAgICAgeDEsIHgyLCB5MSwgeTIsXHJcbiAgICAgICAgICAgIGksIGosIGxlbjEsIGxlbjIsIGxlbjM7XHJcblxyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruagt+W8j1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBTdHlsZXMuUkFEQVJfQkFLX0xJTkVfV0lEVEg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gU3R5bGVzLlJBREFSX0JBS19MSU5FX0NPTE9SO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBTdHlsZXMuUkFEQVJfQkFLX0ZJTExfQ09MT1I7XHJcblxyXG4gICAgICAgIC8v5bmz56e75Yiw5Lit5b+DXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZShjaGFydEluZm9fSW4uY2VudGVyWCwgY2hhcnRJbmZvX0luLmNlbnRlclkpO1xyXG5cclxuICAgICAgICAvL+e7mOWItuW4puacieiDjOaZr+minOiJsueahOWkmui+ueW9olxyXG4gICAgICAgIGxlbjEgPSBjaGFydEluZm9fSW4uc3BsaXROdW1iZXI7XHJcbiAgICAgICAgbGVuMiA9IGluZGljYXRvclBvc2l0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjE7IGkgKz0gMikge1xyXG4gICAgICAgICAgICBwb2ludHMxLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHBvaW50czIubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8v6K6h566X55u46YK75Lik5Liq5aSa6L655b2i5ZCE5Liq6aG254K55Z2Q5qCHXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHBvaW50SXRlbSA9IGluZGljYXRvclBvc2l0aW9uc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICByYXRlID0gaSAvIGxlbjE7XHJcbiAgICAgICAgICAgICAgICB4MSA9IHBvaW50SXRlbS54ICogcmF0ZTtcclxuICAgICAgICAgICAgICAgIHkxID0gcG9pbnRJdGVtLnkgKiByYXRlO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzMVtqXSA9IHsgeDogeDEsIHk6IHkxIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmF0ZSA9IChpICsgMSkgLyBsZW4xO1xyXG4gICAgICAgICAgICAgICAgeDIgPSBwb2ludEl0ZW0ueCAqIHJhdGU7XHJcbiAgICAgICAgICAgICAgICB5MiA9IHBvaW50SXRlbS55ICogcmF0ZTtcclxuICAgICAgICAgICAgICAgIHBvaW50czJbal0gPSB7IHg6IHgyLCB5OiB5MiB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W8gOWni+aWsOeahOi3r+W+hFxyXG4gICAgICAgICAgICAvL+atpOWQjumAu+i+keS9v+eUqOi3r+W+hOe8oOe7leeJueaAp+e7mOWItuacieiDjOaZr+minOiJsueahOWMuuWfn1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAvL+mhuuaXtumSiOi/nuaOpeesrOS4gOS4quWkmui+ueW9ouaJgOaciemhtueCuVxyXG4gICAgICAgICAgICBwb2ludEl0ZW0gPSBwb2ludHMxWzBdO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHBvaW50SXRlbS54LCBwb2ludEl0ZW0ueSk7XHJcblxyXG4gICAgICAgICAgICBsZW4zID0gcG9pbnRzMS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCBsZW4zOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIG9iaiA9IHBvaW50czFbal07XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhvYmoueCwgb2JqLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvYmogPSBwb2ludHMxWzBdO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKG9iai54LCBvYmoueSk7XHJcblxyXG4gICAgICAgICAgICAvL+mAhuaXtumSiOi/nuaOpeesrOS6jOS4quWkmui+ueW9ouaJgOaciemhtueCuVxyXG4gICAgICAgICAgICBvYmogPSBwb2ludHMyWzBdO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKG9iai54LCBvYmoueSk7XHJcblxyXG4gICAgICAgICAgICBsZW4zID0gcG9pbnRzMi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaiA9IGxlbjMgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gcG9pbnRzMltqXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKG9iai54LCBvYmoueSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9iaiA9IHBvaW50czJbMF07XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ob2JqLngsIG9iai55KTtcclxuXHJcbiAgICAgICAgICAgIC8v6Zet5ZCI6Lev5b6EXHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgIC8v5aGr5YWF5bm25o+P6L65XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+e7mOWItuacgOWkluWxguWkmui+ueW9olxyXG4gICAgICAgIGlmIChsZW4xICUgMiA9PSAxKSB7XHJcbiAgICAgICAgICAgIHBvaW50SXRlbSA9IGluZGljYXRvclBvc2l0aW9uc1swXTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwb2ludEl0ZW0ueCwgcG9pbnRJdGVtLnkpO1xyXG5cclxuICAgICAgICAgICAgLy/lvqrnjq/nu5jliLblnIbnjq9cclxuICAgICAgICAgICAgbGVuMyA9IGluZGljYXRvclBvc2l0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW4zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBvaW50SXRlbSA9IGluZGljYXRvclBvc2l0aW9uc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHBvaW50SXRlbS54LCBwb2ludEl0ZW0ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+e7mOWItuS4reW/g+eCueWIsOacgOWkluWxguWkmui+ueW9oumhtueCueeahOi/nue6v1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgcG9pbnRJdGVtID0gaW5kaWNhdG9yUG9zaXRpb25zW2pdO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRJdGVtLngsIHBvaW50SXRlbS55KTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRMZWdlbmQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgbGVnZW5kcyA9IHRoaXMuX2xlZ2VuZHMsXHJcbiAgICAgICAgICAgIGxlZ2VuZCxcclxuICAgICAgICAgICAgc3RyLFxyXG4gICAgICAgICAgICB3LCBoLFxyXG4gICAgICAgICAgICB4MSwgeDIsIHkxLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5paH5a2X5qC35byPXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuTEVHRU5EX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0xFRlQ7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9UT1A7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5paH5a2X6auY5bqmXHJcbiAgICAgICAgaCA9IFV0aWxpdHkuZ2V0VGV4dEhlaWdodChjdHgpO1xyXG5cclxuICAgICAgICAvL+esrOS4gOS4quWbvuS+i+eahOS9jee9rlxyXG4gICAgICAgIHgxID0gY2hhcnRJbmZvX0luLmxlZ2VuZExlZnQ7XHJcbiAgICAgICAgeTEgPSBjaGFydEluZm9fSW4ubGVnZW5kVG9wO1xyXG5cclxuICAgICAgICB4MiA9IHgxICsgaCArIFN0eWxlcy5MRUdFTkRfU0hBUEVfVEVYVF9HQVA7XHJcblxyXG4gICAgICAgIC8v6YCG5bqP5L6d5qyh57uY5Yi25Zu+5L6L5paH5a2X5ZKM6Imy5Z2XXHJcbiAgICAgICAgbGVuID0gbGVnZW5kcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZCA9IGxlZ2VuZHNbaV07XHJcblxyXG4gICAgICAgICAgICAvL+e7mOWItuiJsuWdl1xyXG4gICAgICAgICAgICBpZiAobGVnZW5kLnNlbGVjdGVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyM5OTk5OTknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGxlZ2VuZC5jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoeDEsIHkxLCBoLCBoKTtcclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZC54ID0geDE7XHJcbiAgICAgICAgICAgIGxlZ2VuZC55ID0geTE7XHJcblxyXG4gICAgICAgICAgICAvL+iuoeeul+WbvuS+i+aWh+Wtl+WuveW6plxyXG4gICAgICAgICAgICBzdHIgPSBsZWdlbmQubmFtZTtcclxuICAgICAgICAgICAgdyA9IGN0eC5tZWFzdXJlVGV4dChzdHIpLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbmloflrZdcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgeDIsIHkxKTtcclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZC53aWR0aCA9IGggKyBTdHlsZXMuTEVHRU5EX1NIQVBFX1RFWFRfR0FQICsgdztcclxuICAgICAgICAgICAgbGVnZW5kLmhlaWdodCA9IGg7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHkxICs9IFN0eWxlcy5MRUdFTkRfU0hBUEVfVEVYVF9HQVAgKyBoO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50UmFkYXIgKCkge1xyXG5cclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGl0ZW1BcnJheSA9IHRoaXMuX2l0ZW1BcnJheSxcclxuICAgICAgICAgICAgaXRlbXMsIHBvaW50SXRlbSxcclxuICAgICAgICAgICAgbGVnZW5kcyA9IHRoaXMuX2xlZ2VuZHMsXHJcbiAgICAgICAgICAgIGxlZ2VuZCxcclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7moLflvI9cclxuICAgICAgICBjdHgubGluZVdpZHRoID0gU3R5bGVzLlJBREFSX0xJTkVfV0lEVEg7XHJcblxyXG4gICAgICAgIC8v5bmz56e75Yiw5Lit5b+DXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZShjaGFydEluZm9fSW4uY2VudGVyWCwgY2hhcnRJbmZvX0luLmNlbnRlclkpO1xyXG5cclxuICAgICAgICAvL+e7mOWItuW4puacieiDjOaZr+minOiJsueahOWkmui+ueW9olxyXG4gICAgICAgIGxlbjEgPSBpdGVtQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgbGVnZW5kID0gbGVnZW5kc1tpXTtcclxuICAgICAgICAgICAgaWYgKGxlZ2VuZC5zZWxlY3RlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v6K6+572u5aGr5YWF5qC35byPXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxlZ2VuZC5jb2xvcjtcclxuXHJcbiAgICAgICAgICAgIC8v5byA5aeL5paw6Lev5b6EXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgIC8v6I635Y+W5p+Q5pWw5o2u57O75YiX5a+55bqU55qE5Z2Q5qCH54K56ZuG5ZCIXHJcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbUFycmF5W2ldO1xyXG5cclxuICAgICAgICAgICAgcG9pbnRJdGVtID0gaXRlbXNbMF07XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRJdGVtLngsIHBvaW50SXRlbS55KTtcclxuXHJcbiAgICAgICAgICAgIGxlbjIgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHBvaW50SXRlbSA9IGl0ZW1zW2pdO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwb2ludEl0ZW0ueCwgcG9pbnRJdGVtLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+mXreWQiOi3r+W+hFxyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAvL+aPj+i+uVxyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRMYWJlbCAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBpbmRpY2F0b3JQb3NpdGlvbnMgPSB0aGlzLl9pbmRpY2F0b3JQb3NpdGlvbnMsXHJcbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMuX2FuZ2xlcyxcclxuICAgICAgICAgICAgbGFiZWxzID0gdGhpcy5fbGFiZWxzLFxyXG4gICAgICAgICAgICBwb2ludEl0ZW0sXHJcbiAgICAgICAgICAgIGFuZ2xlLCBsYWJlbCwgcmF0ZSxcclxuICAgICAgICAgICAgeCwgeSxcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvLygxKeiuvue9ruWFseWQjOagt+W8j1xyXG4gICAgICAgIGN0eC5mb250ID0gU3R5bGVzLlJBREFSX0xBQkVMX0ZPTlQ7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFN0eWxlcy5SQURBUl9MQUJFTF9DT0xPUjtcclxuXHJcbiAgICAgICAgLy/lubPnp7vliLDkuK3lv4NcclxuICAgICAgICBjdHgudHJhbnNsYXRlKGNoYXJ0SW5mb19Jbi5jZW50ZXJYLCBjaGFydEluZm9fSW4uY2VudGVyWSk7XHJcblxyXG4gICAgICAgIC8vKDMp57uY5Yi25qCH562+77ya5qC55o2u5qCH562+5piv5ZCm57uY5Yi25Zyo5omH5b2i5YaF6YOo5YiG5Yir6L+b6KGM5aSE55CGXHJcbiAgICAgICAgLy/lvqrnjq/nu5jliLbmoIfnrb7ku6Xlj4rlvJXlr7znur9cclxuICAgICAgICByYXRlID0gKGNoYXJ0SW5mb19Jbi5yYWRpdXMgKyBTdHlsZXMuUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUKSAvIGNoYXJ0SW5mb19Jbi5yYWRpdXM7XHJcbiAgICAgICAgbGVuID0gaW5kaWNhdG9yUG9zaXRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi25qCH562+XHJcbiAgICAgICAgICAgIGFuZ2xlID0gYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPiAtOTAgJiYgYW5nbGUgPCA5MCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9NSURETEU7XHJcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fTEVGVDtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5nbGUgPiA5MCAmJiBhbmdsZSA8IDI3MCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9NSURETEU7XHJcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fUklHSFQ7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlID09IC05MCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9CT1RUT007XHJcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fQ0VOVEVSO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbmdsZSA9PSA5MCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9UT1A7XHJcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fQ0VOVEVSO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8v5Y+W5b6X5omH5b2i5a+56LGhXHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWxzW2ldO1xyXG4gICAgICAgICAgICBwb2ludEl0ZW0gPSBpbmRpY2F0b3JQb3NpdGlvbnNbaV07XHJcblxyXG4gICAgICAgICAgICB4ID0gcG9pbnRJdGVtLnggKiByYXRlO1xyXG4gICAgICAgICAgICB5ID0gcG9pbnRJdGVtLnkgKiByYXRlO1xyXG5cclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGxhYmVsLCB4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vICDliKnnlKjpl63ljIXlkoznq4vljbPmiafooYzlh73mlbDliJvlu7rljZXkvotcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblBhaW50ZXIuZ2V0SW5zdGFuY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGluc3RhbmNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBQYWludGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0pKCk7IiwiaW1wb3J0IFBhcnRCYXNlIGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2VuZCBleHRlbmRzIFBhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGlzUG9pbnRJblBhdGggKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiZcclxuICAgICAgICAgICAgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiZcclxuICAgICAgICAgICAgeSA+PSB0aGlzLnkgJiZcclxuICAgICAgICAgICAgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDlrprkuYl3aW5kb3fliqjnlLvlvqrnjq/mjqfliLblh73mlbDvvIjliKnnlKjnq4vljbPmiafooYzlh73mlbDvvIlcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxud2luZG93LnJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgICAgICAgfHwgZnVuY3Rpb24gKGZ1bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jLCAxNik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG59KSgpO1xyXG4iLCJjb25zdCBDb25zdGFudHMgPSB7XHJcbiAgICBESVJUWTogJy0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lrprkuYnmlbDmja7ml7bvvIznlKjmnaXooajnpLrmsqHmnInmlbDmja7vvIzmiJbohI/mlbDmja7vvIjml6DmlYjmlbDmja7vvIlcclxuICAgIEhBTEZfUElYRUw6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+WNiuS4quWDj+e0oFxyXG5cclxuICAgIENMT1NFX1RPX1pFUk86IDAuMDAwMDAwMSwgICAgICAgICAgICAgICAvL+a1rueCueaVsOiuoeeul+S8muacieeyvuW6puivr+W3ru+8jOivpeW4uOmHj+eUqOS6juWIpOaWreS4pOS4qua1rueCueaVsOaYr+WQpuebuOetieOAguWmguaenOS4pOS4qua1rueCueaVsOeahOW3ruWAvOWwj+S6juivpeaVsO+8jOWImeiupOS4uuebuOetieOAglxyXG5cclxuICAgIFRFWFRfQkFTRV9MSU5FX01JRERMRTogJ21pZGRsZScsICAgICAgICAvL+WcqENhbnZhc+S4iue7mOWItuaWh+Wtl+aXtu+8jOiuvue9rkNvbnRleHTkuIrkuIvmlofnmoTmloflrZfnurXlkJHmjpLliJflsZ7mgKdcclxuICAgIFRFWFRfQkFTRV9MSU5FX1RPUDogJ3RvcCcsXHJcbiAgICBURVhUX0JBU0VfTElORV9CT1RUT006ICdib3R0b20nLFxyXG5cclxuICAgIFRFWFRfQUxJR05fQ0VOVEVSOiAnY2VudGVyJywgICAgICAgICAgICAvL+WcqENhbnZhc+S4iue7mOWItuaWh+Wtl+aXtu+8jOiuvue9rkNvbnRleHTkuIrkuIvmlofnmoTmloflrZfmqKrlkJHmjpLliJflsZ7mgKdcclxuICAgIFRFWFRfQUxJR05fTEVGVDogJ2xlZnQnLFxyXG4gICAgVEVYVF9BTElHTl9SSUdIVDogJ3JpZ2h0JyxcclxuXHJcbiAgICBURVhUX0JBU0VfTElORV9JREVPR1JBUEhJQzogJ2lkZW9ncmFwaGljJywgICAgICAvL+WcqENhbnZhc+S4iue7mOWItuaWh+Wtl+aXtu+8jOiuvue9rkNvbnRleHTkuIrkuIvmlofnmoTmloflrZfln7rnur/lsZ7mgKdcclxuXHJcbiAgICBBREQ6ICdhZGQnLFxyXG4gICAgUkVNT1ZFOiAncmVtb3ZlJyxcclxuXHJcbiAgICBYX0FYSVM6ICd4LWF4aXMnLCAgICAgICAgICAgICAgIC8v5Luj6KGo5piveOi9tOi/mOaYr3novbRcclxuICAgIFlfQVhJUzogJ3ktYXhpcycsXHJcblxyXG4gICAgUkFESUFOX1VOSVQ6IE1hdGguUEkgLyAxODAgICAgICAvL+W8p+W6puWNleS9jVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQb29sIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGF6eiwgcGFyYSkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9jbGFzcyA9IGNsYXp6OyAgIC8v57G75ZCNXHJcbiAgICAgICAgdGhpcy5fcGFyYSA9IHBhcmE7ICAgICAgLy/lrp7kvovljJblr7nosaHml7bnmoTlj4LmlbBcclxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7ICAgICAgICAvL+WvueixoeaxoOS4reWvueixoeeahOS4quaVsFxyXG4gICAgICAgIHRoaXMuX3Bvb2wgPSBbXTsgICAgICAgIC8v5a+56LGh5rGgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgZ2V0T2JqICgpIHtcclxuICAgICAgICBsZXQgcG9vbCA9IHRoaXMuX3Bvb2wsXHJcbiAgICAgICAgICAgIGxlbixcclxuICAgICAgICAgICAgb2JqO1xyXG5cclxuICAgICAgICAvL+WmguaenOW9k+WJjeW3suS9v+eUqOeahOWvueixoeS4quaVsOWkp+S6juaIluetieS6juaxoOS4reW3suacieWvueixoeS4quaVsO+8jFxyXG4gICAgICAgIC8v5YiZ5paw55Sf5oiQ5LiA5Liq5a+56LGh77yb5ZCm5YiZ5LuO5rGg5Lit55u05o6l5Y+W5b6X5a+56LGhXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvdW50ID49IHBvb2wubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyB0aGlzLl9jbGFzcyh0aGlzLl9wYXJhKTtcclxuXHJcbiAgICAgICAgICAgIGxlbiA9IHBvb2wubGVuZ3RoO1xyXG4gICAgICAgICAgICBwb29sW2xlbl0gPSBvYmo7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHBvb2xbdGhpcy5fY291bnRdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/orrDlvZXlvZPliY3lt7Lkvb/nlKjnmoTlr7nosaHkuKrmlbBcclxuICAgICAgICB0aGlzLl9jb3VudCsrO1xyXG5cclxuICAgICAgICAvL+i/lOWbnuWvueixoVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgKiDlvZPliY3lt7Lkvb/nlKjnmoTlr7nosaHkuKrmlbDmuIXpm7ZcclxuICAgICog6L+Z5qC377yM5b2T5Ye95pWwZ2V0T2JqKCnooqvosIPnlKjnmoTml7blgJnvvIzmsaDkuK3miYDmnInlr7nosaHpg73lj6/kvb/nlKhcclxuICAgICovXHJcbiAgICByZWxlYXNlQWxsICgpIHtcclxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG59IiwiY29uc3QgU3RhdHVzID0ge1xyXG4gICAgXHJcbiAgICBTVEVQMTogJ3N0ZXAxJyxcclxuICAgIFNURVAyOiAnc3RlcDInLFxyXG4gICAgU1RFUDM6ICdzdGVwMycsXHJcbiAgICBTVEVQNDogJ3N0ZXA0JyxcclxuICAgIFNURVA1OiAnc3RlcDUnLFxyXG4gICAgV0FJVElORzogJ3dhaXRpbmcnLFxyXG4gICAgU1RPUDogJ3N0b3AnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7IiwiY29uc3QgU3R5bGVzID0ge1xyXG4gICAgXHJcbiAgICAvL+WFseWQjOmDqOWIhlxyXG4gICAgVElUTEVfRk9OVDogJzE2cHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAgICAgLy/moIfpopjlrZfkvZMgICAgICAgIFxyXG4gICAgTEVHRU5EX0ZPTlQ6ICcxNHB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgLy/lm77kvovlrZfkvZMgIFxyXG4gICAgTEFCRUxfRk9OVDogJzEwcHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAgICAgLy/moIfnrb7lrZfkvZMgIFxyXG4gICAgQVhJU19OQU1FX0ZPTlQ6ICcxNHB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgLy/ovbTlkI3np7DlrZfkvZMgIFxyXG4gICAgRk9OVF9GSUxMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgICAgICAgLy/pu5jorqTlrZfkvZPloavlhYXpopzoibJcclxuICAgIEFYSVNfTElORV9XSURUSDogMC41LCAgICAgICAgICAgICAgICAgICAgICAgIC8v6L2057q/55qE57q/5a69XHJcbiAgICBBWElTX0xJTkVfQ09MT1I6ICcjMzMzMzMzJywgICAgICAgICAgICAgICAgICAvL+i9tOe6v+minOiJslxyXG4gICAgQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRTogNSwgICAgICAgICAgICAgICAgLy/liLvluqbnur/nmoTplb/luqZcclxuICAgIEdSSURfTElORV9XSURUSDogMC41LCAgICAgICAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/55qE57q/5a69XHJcbiAgICBHUklEX0xJTkVfQ09MT1I6ICcjQkJDQ0REJywgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+minOiJslxyXG4gICAgR1JJRF9MSU5FX0RBU0g6IFs1LCA1XSwgICAgICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/ngrnnmoTpl7TpmpRcclxuICAgIFhBWElTX0xBQkVMX09GRlNFVDogMTYsICAgICAgICAgICAgICAgICAgICAgIC8veOi9tOagh+etvuaWh+Wtl+S4reW/g+eCueWIsHjovbTnur/nmoTot53nprtcclxuICAgIFhBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFOiAxNiwgICAgICAgICAgIC8veOi9tOagh+etvuaXi+i9rOaXtu+8jOaWh+Wtl+S4reW/g+eCueWIsHjovbTnur/nmoTot53nprtcclxuICAgIFlBWElTX0xBQkVMX09GRlNFVDogMTYsICAgICAgICAgICAgICAgICAgICAgIC8veei9tOagh+etvuaWh+Wtl+S4reW/g+eCueWIsHnovbTnur/nmoTot53nprtcclxuICAgIFlBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFOiAxNiwgICAgICAgICAgIC8veei9tOagh+etvuaXi+i9rOaXtu+8jOaWh+Wtl+S4reW/g+eCueWIsHnovbTnur/nmoTot53nprtcclxuICAgIExFR0VORF9TSEFQRV9URVhUX0dBUDogNSwgICAgICAgICAgICAgICAgICAgIC8v5Zu+5L6L5Lit77yM6Imy5Z2X5ZKM5paH5a2X55qE6Ze06ZqUXHJcbiAgICBMRUdFTkRfR0FQOiAxNSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvuS+i+aoquWQkeaOkuWIl+aXtu+8jOWbvuS+i+S5i+mXtOeahOmXtOmalFxyXG4gICAgVElQX0xPQ0FUSU9OX09GRlNFVDogMjAsICAgICAgICAgICAgICAgICAgICAgLy/lrprkvY1UaXDkvY3nva7ml7bvvIznm7jlr7npvKDmoIfkvY3nva7nmoTlgY/np7vph49cclxuXHJcblxyXG4gICAgLy/msJTms6Hlm75cclxuICAgIEJVQkJMRV9BTFBIQTogMC43LCAgICAgICAgICAgICAgICAgICAgICAgICAvL+awlOazoeeahOmAj+aYjuW6plxyXG5cclxuXHJcbiAgICAvL+afseeKtuWbvlxyXG4gICAgQ09MVU1OX1NFTEVDVE9SX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgIC8v55So5LqO5qGG6YCJ6aG555uu55qE5pa55qGG55qE6L655qGG57q/57q/5a69XHJcbiAgICBDT0xVTU5fU0VMRUNUT1JfTElORV9DT0xPUjogJyNDMjM1MzEnLCAgICAgLy/nlKjkuo7moYbpgInpobnnm67nmoTmlrnmoYbnmoTovrnmoYbnur/popzoibJcclxuXHJcblxyXG4gICAgLy/mipjnur/lm75cclxuICAgIExJTkVfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAgICAgICAgICAvL+aKmOe6v+eahOe6v+WuvVxyXG4gICAgTElORV9BUkVBX0FMUEhBOiAwLjcsICAgICAgICAgICAgICAgICAgICAgIC8v57uY5Yi26Z2i56ev5Zu+5pe255qE6YCP5piO5bqmXHJcbiAgICBMSU5FX01BUktQT0lOVF9XSURUSDogMS4wLCAgICAgICAgICAgICAgICAgLy/moIforrDngrnnmoTnur/lrr1cclxuICAgIExJTkVfTUFSS1BPSU5UX1JBRElVUzogMiwgICAgICAgICAgICAgICAgICAvL+agh+iusOeCueeahOWchuWNiuW+hFxyXG4gICAgTElORV9NQVJLUE9JTlRfQkFLX0NPTE9SOiAnI0YzRjNGMycsICAgICAgIC8v5qCH6K6w54K555qE6IOM5pmv6aKc6ImyXHJcbiAgICBMSU5FX1NFTEVDVE9SX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgLy/nlKjkuo7moIflv5fpgInmi6npobnnmoTnur/mrrXnmoTnur/lrr1cclxuICAgIExJTkVfU0VMRUNUT1JfTElORV9DT0xPUjogJyNDMjM1MzEnLCAgICAgICAvL+eUqOS6juagh+W/l+mAieaLqemhueeahOe6v+auteeahOminOiJslxyXG5cclxuXHJcbiAgICAvL+mlvOWbvlxyXG4gICAgUElFX0xBQkVMX0lOTkVSX0ZPTlRfQ09MT1I6ICcjRkZGRkZGJywgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85YaF5pi+56S65pe277yM5paH5a2X55qE6aKc6ImyXHJcbiAgICBQSUVfTEFCRUxfR1VJREVfTElORTFfU0laRTogMjAsICAgICAgICAgICAgLy/lvZPmoIfnrb7mloflrZflnKjppbzlpJbmmL7npLrml7bvvIzov57mjqXppbzlnZflkozmoIfnrb7mloflrZfnmoTlvJXlr7znur8x55qE6ZW/5bqmXHJcbiAgICBQSUVfTEFCRUxfR1VJREVfTElORTJfU0laRTogMTUsICAgICAgICAgICAgLy/lvZPmoIfnrb7mloflrZflnKjppbzlpJbmmL7npLrml7bvvIzov57mjqXppbzlnZflkozmoIfnrb7mloflrZfnmoTlvJXlr7znur8y55qE6ZW/5bqmXHJcbiAgICBQSUVfTEFCRUxfT0ZGU0VUOiA1LCAgICAgICAgICAgICAgICAgICAgICAgLy/lvJXlr7znur/lkozmoIfnrb7mloflrZfnmoTpl7Tot51cclxuICAgIFBJRV9TRUxFQ1RPUl9UUkFOU0xBVEU6IDEwLCAgICAgICAgICAgICAgICAvL+iiq+mAieaLqeeahOmlvOWdl+eahOS9jeenu+mHj1xyXG4gICAgUElFX1NFTEVDVE9SX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgIC8v5qGG6YCJ5pWw5o2u6aG555qE5pa55qGG55qE6L655qGG57q/57q/5a69XHJcbiAgICBQSUVfU0VMRUNUT1JfTElORV9DT0xPUjogJyNGRjAwMDAnLCAgICAgICAgLy/moYbpgInmlbDmja7pobnnmoTmlrnmoYbnmoTovrnmoYbpopzoibJcclxuXHJcblxyXG4gICAgLy/pm7fovr7lm75cclxuICAgIFJBREFSX0xBQkVMX0ZPTlQ6ICcxMnB4IE1pY3Jvc29mdCBZYUhlaScsICAvL+aMh+agh+aWh+Wtl+eahOWtl+S9k1xyXG4gICAgUkFEQVJfTEFCRUxfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAgIC8v5oyH5qCH5paH5a2X55qE6aKc6ImyXHJcbiAgICBSQURBUl9MQUJFTF9QT1NJVElPTl9PRkZTRVQ6IDEwLCAgICAgICAgICAgLy/mjIfmoIfmloflrZflkozlr7nlupTlpJrovrnlvaLpobbngrnkuYvpl7TnmoTpl7Tot51cclxuICAgIFJBREFSX0xJTkVfV0lEVEg6IDMuMCwgICAgICAgICAgICAgICAgICAgICAvL+aVsOaNrumbt+i+vue6v+eahOe6v+WuvVxyXG4gICAgUkFEQVJfQkFLX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i5qGG57q/5ZKM5Y2K5b6E5YiG5Ymy57q/55qE57q/5a69XHJcbiAgICBSQURBUl9CQUtfTElORV9DT0xPUjogJyNDOUM5QzknLCAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLmoYbnur/lkozljYrlvoTliIblibLnur/nmoTpopzoibJcclxuICAgIFJBREFSX0JBS19GSUxMX0NPTE9SOiAnI0U2RTZFNicsICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9oueahOiDjOaZr+minOiJslxyXG5cclxuXHJcbiAgICAvL+aVo+eCueWbvlxyXG4gICAgU0NBVFRFUl9QT0lOVF9BTFBIQTogMC43LCAgICAgICAgICAgICAgICAgIC8v5pWj54K555qE6YCP5piO5bqmXHJcbiAgICBTQ0FUVEVSX0NST1NTX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgLy/nlKjkuo7moIfor4bpvKDmoIfkvY3nva7nmoTljYHlrZfnur/nmoTnur/lrr1cclxuICAgIFNDQVRURVJfQ1JPU1NfQ09MT1I6ICcjRkYwMDAwJywgICAgICAgICAgICAvL+eUqOS6juagh+ivhum8oOagh+S9jee9rueahOWNgeWtl+e6v+eahOminOiJslxyXG5cclxuXHJcbiAgICAvL+aXreaXpeWbvlxyXG4gICAgU1VOQlVSU19MQUJFTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgIC8v5qCH562+5paH5a2X55qE6aKc6ImyXHJcbiAgICBTVU5CVVJTX0JPUkRFUl9DT0xPUjogJyMwMDAwMDAnICAgICAgICAgICAgLy/miYflvaLlnZfnmoTovrnmoYbpopzoibJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0eWxlczsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdHkge1xyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDpnZnmgIHlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgLypcclxuICAgICog6K6h566X44CQ5YC86L2044CR55qE5Yi75bqm5Y2V5L2NXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGdldFNjYWxlVW5pdCAobWluLCBtYXgsIHNjYWxlTWF4Q291bnQpIHtcclxuICAgICAgICBsZXQgaSwgbGVuLFxyXG4gICAgICAgICAgICBhdmcsXHJcbiAgICAgICAgICAgIGdhcHMgPSBbMSwgMiwgMi41LCA1LCAxMF0sXHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCxcclxuICAgICAgICAgICAgbWFnbml0dWRlO1xyXG5cclxuICAgICAgICAvL+iuoeeul+Wdh+WIhuWAvFxyXG4gICAgICAgIGF2ZyA9IChtYXggLSBtaW4pIC8gKHNjYWxlTWF4Q291bnQtMSk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5Z2H5YiG5YC855qE5pWw6YeP57qnXHJcbiAgICAgICAgbWFnbml0dWRlID0gdGhpcy5nZXRNYWduaXR1ZGUoYXZnKTtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/vvIznm7Toh7PnrKzkuIDkuKrlpKfkuo7miJbnrYnkuo7lnYfliIblgLznmoTmlbTmlbDlgLzlh7rnjrBcclxuICAgICAgICBsZW4gPSBnYXBzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgc2NhbGVVbml0ID0gZ2Fwc1tpXSAqIG1hZ25pdHVkZTtcclxuICAgICAgICAgICAgaWYgKHNjYWxlVW5pdCA+PSBhdmcpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+i/lOWbnlxyXG4gICAgICAgIHJldHVybiBzY2FsZVVuaXQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgKiDorqHnrpfmjIflrprmlbDlgLznmoTmlbDph4/nuqdcclxuICAgICovXHJcbiAgICBzdGF0aWMgZ2V0TWFnbml0dWRlIChudW0pIHtcclxuICAgICAgICAvL+iuoeeul+aVsOWAvOeahDEw55qE5bmCXHJcbiAgICAgICAgbGV0IHBvdyA9IE1hdGguZmxvb3IoTWF0aC5sb2cobnVtKSAvIE1hdGgubG9nKDEwKSk7O1xyXG5cclxuICAgICAgICAvL+iuoeeul+aVsOWAvOeahOaVsOmHj+e6p1xyXG4gICAgICAgIGxldCBtYWduaXR1ZGUgPSBNYXRoLnBvdygxMCwgcG93KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hZ25pdHVkZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAqIENhbnZhc+e7mOWItuaXtuWvueWdkOagh+i/m+ihjOW+ruiwg1xyXG4gICAgKiDlm5voiI3kupTlhaXlj5bmlbTlkI7lh4/lsI8wLjXlg4/ntKDjgILov5nmoLfvvIzlnKhDYW52YXPml7bkvY3nva7lpITkuo7kuKTkuKrlg4/ntKDkuYvpl7TvvIzpgb/lhY3lj5HomZrjgIJcclxuICAgICovXHJcbiAgICBzdGF0aWMgYWRqdXN0UG9zaXRpb24gKHhPUnkpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh4T1J5KSAtIENvbnN0YW50cy5IQUxGX1BJWEVMO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIHdpbmRvd1RvQ2FudmFzIChib3VuZGluZ0NsaWVudFJlY3RMZWZ0LFxyXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdFRvcCxcclxuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3RXaWR0aCxcclxuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3RIZWlnaHQsXHJcbiAgICAgICAgY2FudmFzV2lkdGgsXHJcbiAgICAgICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgICAgIGdsb2JsZVgsXHJcbiAgICAgICAgZ2xvYmxlWSxcclxuICAgICAgICBwb3NpdGlvbikge1xyXG4gICAgICAgIHBvc2l0aW9uLnggPSBnbG9ibGVYIC0gYm91bmRpbmdDbGllbnRSZWN0TGVmdCAqIChjYW52YXNXaWR0aCAvIGJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoKTtcclxuICAgICAgICBwb3NpdGlvbi55ID0gZ2xvYmxlWSAtIGJvdW5kaW5nQ2xpZW50UmVjdFRvcCAqIChjYW52YXNIZWlnaHQgLyBib3VuZGluZ0NsaWVudFJlY3RIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGdldFRleHRXaWR0aCAoY2FudmFzQ29udGV4dCwgdGV4dCkge1xyXG4gICAgICAgIHJldHVybiBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGdldFRleHRIZWlnaHQgKGNhbnZhc0NvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5tZWFzdXJlVGV4dCgnTScpLndpZHRoICogNyAvIDY7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdBY3Rpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnRvdGxlVGltZXMgPSAwOyAgICAgICAgICAgLy/nvJPliqjmrKHmlbBcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gMDsgICAgICAgICAgICAgIC8v57yT5Yqo5byA5aeL5pe277yM5LuO56ys5Yeg5qyh57yT5Yqo5byA5aeLICBcclxuICAgICAgICB0aGlzLmRhdGFBcnJheSA9IFtdOyAgICAgICAgICAvL+acrOWKqOS9nOaTjeaOp+eahFRXRGF0YeaVsOaNrumbhlxyXG4gICAgICAgIHRoaXMuYWxnb3JpdGhtID0gbnVsbDsgICAgICAgIC8v57yT5Yqo566X5rOVXHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uID0gbnVsbDsgICAgICAgLy/mnKzliqjkvZznu5PmnZ/lkI7nmoTkuIvkuIDkuKrliqjkvZxcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHNldERhdGEgKGRhdGFBcnJheSwgYWxnb3JpdGhtLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGF0YUFycmF5ID0gZGF0YUFycmF5O1xyXG4gICAgICAgIHRoaXMuYWxnb3JpdGhtID0gYWxnb3JpdGhtO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLnRvdGxlVGltZXMgPSBNYXRoLmNlaWwoZHVyYXRpb24gLyBUV0FjdGlvbi5GUkFNRV9EVVJBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhaW4gKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbiA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUgKCkge1xyXG4gICAgICAgIGxldCB0YXJnZXQsXHJcbiAgICAgICAgICAgIGZyb20sXHJcbiAgICAgICAgICAgIHRvLFxyXG4gICAgICAgICAgICBjYWxsQmFjayxcclxuXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGksIGosIGxlbjEsIGxlbjIsXHJcblxyXG4gICAgICAgICAgICBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFydCA+IHRoaXMudG90bGVUaW1lcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZW4xID0gdGhpcy5kYXRhQXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5kYXRhQXJyYXlbaV0udGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgZnJvbSA9IHRoaXMuZGF0YUFycmF5W2ldLmZyb207XHJcbiAgICAgICAgICAgICAgICB0byA9IHRoaXMuZGF0YUFycmF5W2ldLnRvO1xyXG4gICAgICAgICAgICAgICAgY2FsbEJhY2sgPSB0aGlzLmRhdGFBcnJheVtpXS5jYWxsQmFjaztcclxuXHJcbiAgICAgICAgICAgICAgICBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxlbjIgPSBmcm9tLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmFsZ29yaXRobSh0aGlzLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tW2pdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1tqXSAtIGZyb21bal0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90bGVUaW1lcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsQmFjayh0YXJnZXQsIGFycik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIHRoaXMudG90bGVUaW1lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOmdmeaAgeWPmOmHj1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5UV0FjdGlvbi5GUkFNRV9EVVJBVElPTiA9IDE3OyAgICAgIC8v5bin6aKR5Li6NjDnmoTnirbmgIHkuIvvvIzkuIDluKfnmoTmkq3mlL7ml7bplb/kuLoxN21zICggMTAwMG1zLzYwIClcclxuIiwiLypcclxuICogdDogY3VycmVudCB0aW1l77yI5b2T5YmN5pe26Ze077yJXHJcbiAqIGI6IGJlZ2lubmluZyB2YWx1Ze+8iOWIneWni+WAvO+8iVxyXG4gKiBjOiBjaGFuZ2UgaW4gdmFsdWXvvIjlj5jljJbph4/vvIlcclxuICogZDogZHVyYXRpb27vvIjmjIHnu63ml7bpl7TvvIlcclxuICogXHJcbiAqIFxyXG4gKiDnvJPliqjlh73mlbA6XHJcbiAqIDEuTGluZWFyIOWMgOmAn1xyXG4gKiAyLlF1YWQg5LqM5qyh5pa557yT5Yqo5pWI5p6cXHJcbiAqIDMuQ3ViaWMg5LiJ5qyh5pa557yT5Yqo5pWI5p6cXHJcbiAqIDQuUXVhcnQg5Zub5qyh5pa557yT5Yqo5pWI5p6cXHJcbiAqIDUuUXVpbnQg5LqU5qyh5pa557yT5Yqo5pWI5p6cXHJcbiAqIDYuU2luZSAg5q2j5bym57yT5Yqo5pWI5p6cXHJcbiAqIDcuRXhwbyAg5oyH5pWw57yT5Yqo5pWI5p6cXHJcbiAqIDguQ2lyYyAg5ZyG5b2i57yT5Yqo5Ye95pWwXHJcbiAqIDkuRWxhc3RpYyDmjIfmlbDoobDlh4/mraPlvKbmm7Lnur/nvJPliqjlh73mlbBcclxuICogMTAuQmFjayAg6LaF6L+H6IyD5Zu055qE5LiJ5qyh5pa555qE57yT5Yqo5Ye95pWwXHJcbiAqIDExLkJvdW5jZSDmjIfmlbDoobDlh4/nmoTlj43lvLnmm7Lnur/nvJPliqjlh73mlbBcclxuICogXHJcbiAqIFxyXG4gKiDmr4/np43nvJPliqjlh73mlbDpg73nlLHkuInnp43mlYjmnpw6XHJcbiAqIDEuZWFzZUluICDliqDpgJ9cclxuICogMi5lYXNlT3V0IOWHj+mAn1xyXG4gKiAzLmVhc2VJbk91dCAg5YWI5Yqg6YCf5ZCO5YeP6YCfXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUV0FsZ29yaXRobSB7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog6Z2Z5oCB5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc3RhdGljIGxpbmVhciAodCwgYiwgYywgZCkge1xyXG4gICAgICAgIHJldHVybiBjICogdCAvIGQgKyBiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog6Z2Z5oCB5Y+Y6YePXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblRXQWxnb3JpdGhtLlF1YWQgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC1jICogKHQgLz0gZCkgKiAodCAtIDIpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICgoLS10KSAqICh0IC0gMikgLSAxKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5DdWJpYyA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLlF1YXJ0ID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC1jICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAtIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uUXVpbnQgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCAqIHQgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0ICogdCArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLlNpbmUgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC1jICogTWF0aC5jb3ModCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGMgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCAvIGQpIC0gMSkgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uRXhwbyA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHQgPT0gMCkgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICogKHQgLyBkIC0gMSkpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodCA9PSBkKSA/IGIgKyBjIDogYyAqICgtTWF0aC5wb3coMiwgLTEwICogdCAvIGQpICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtcclxuICAgICAgICAgICAgaWYgKHQgPT0gZCkgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkNpcmMgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSAodCA9IHQgLyBkIC0gMSkgKiB0KSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gLWMgLyAyICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uRWxhc3RpYyA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgICAgICAgICBsZXQgcztcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PSBcInVuZGVmaW5lZFwiKSBwID0gZCAqIC4zO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgICAgICBhID0gYztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICAgICAgICAgIGxldCBzO1xyXG4gICAgICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQpID09IDEpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09IFwidW5kZWZpbmVkXCIpIHAgPSBkICogLjM7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBjO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgYyArIGIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgICAgICAgICBsZXQgcztcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPT0gMikgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHAgPT0gXCJ1bmRlZmluZWRcIikgcCA9IGQgKiAoLjMgKiAxLjUpO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gYztcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKiAuNSArIGMgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uQmFjayA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCwgcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT0gXCJ1bmRlZmluZWRcIikgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogKChzICsgMSkgKiB0IC0gcykgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09IFwidW5kZWZpbmVkXCIpIHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PSBcInVuZGVmaW5lZFwiKSBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgLSBzKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdCArIHMpICsgMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uQm91bmNlID1cclxuICAgIHtcclxuXHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBsZXQgVFdBbGdvcml0aG0gPSBULnR3ZWVuO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAtIEJvdW5jZS5lYXNlT3V0KGQgLSB0LCAwLCBjLCBkKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPCAoMSAvIDIuNzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHQgPCAoMiAvIDIuNzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMS41IC8gMi43NSkpICogdCArIC43NSkgKyBiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHQgPCAoMi41IC8gMi43NSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgyLjI1IC8gMi43NSkpICogdCArIC45Mzc1KSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMi42MjUgLyAyLjc1KSkgKiB0ICsgLjk4NDM3NSkgKyBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGxldCBUV0FsZ29yaXRobSA9IFQudHdlZW47XHJcbiAgICAgICAgICAgIGlmICh0IDwgZCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBCb3VuY2UuZWFzZUluKHQgKiAyLCAwLCBjLCBkKSAqIC41ICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBCb3VuY2UuZWFzZU91dCh0ICogMiAtIGQsIDAsIGMsIGQpICogLjUgKyBjICogLjUgKyBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXRGF0YSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZyb20gPSBbXTtcclxuICAgICAgICB0aGlzLnRvID0gW107XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gW107XHJcbiAgICAgICAgdGhpcy50byA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEgKHRhcmdldCwgZnJvbUFycmF5LCB0b0FycmF5LCBjYWxsQmFjaykge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb21BcnJheTtcclxuICAgICAgICB0aGlzLnRvID0gdG9BcnJheTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gY2FsbEJhY2s7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG59XHJcbiIsImltcG9ydCBPYmplY3RQb29sIGZyb20gJy4uL3N1cHBvcnQvT2JqZWN0UG9vbC5qcyc7XHJcbmltcG9ydCBUV0FjdGlvbiBmcm9tIFwiLi4vdHdlZW4vVFdBY3Rpb24uanNcIjtcclxuaW1wb3J0IFRXRGF0YSBmcm9tIFwiLi4vdHdlZW4vVFdEYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUV0VuZ2luZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9maXJzdEFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGlvblBvb2wgPSBuZXcgT2JqZWN0UG9vbChUV0FjdGlvbik7XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2wgPSBuZXcgT2JqZWN0UG9vbChUV0RhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFRXQWN0aW9uICgpIHtcclxuICAgICAgICBsZXQgb2JqO1xyXG5cclxuICAgICAgICBvYmogPSB0aGlzLl9hY3Rpb25Qb29sLmdldE9iaigpO1xyXG4gICAgICAgIG9iai5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5wdXNoKG9iaik7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VFdEYXRhICgpIHtcclxuICAgICAgICBsZXQgb2JqO1xyXG5cclxuICAgICAgICBvYmogPSB0aGlzLl9kYXRhUG9vbC5nZXRPYmooKTtcclxuICAgICAgICBvYmouaW5pdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2VBbGxUV0RhdGEgKCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sLnJlbGVhc2VBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlQWxsVFdBY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9hY3Rpb25Qb29sLnJlbGVhc2VBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaXJzdFRXQWN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9maXJzdEFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICB0aGlzLl9jdXJyZW50QWN0aW9uID0gdGhpcy5fZmlyc3RBY3Rpb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5leHRGcmFtZSAoKSB7XHJcbiAgICAgICAgbGV0IHJ0biA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc1BsYXlpbmcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEFjdGlvbi5uZXh0RnJhbWUoKSA9PSBmYWxzZSkgICAvL+W9k+WJjWFjdGlvbueahOe8k+WKqOW3sue7j+e7k+adnyBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRBY3Rpb24ubmV4dEFjdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEFjdGlvbiA9IHRoaXMuX2N1cnJlbnRBY3Rpb24ubmV4dEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBydG47XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCAoKSB7XHJcbiAgICAgICAgbGV0IGksIGxlbjtcclxuXHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGlvbiA9IHRoaXMuX2ZpcnN0QWN0aW9uO1xyXG5cclxuICAgICAgICBsZW4gPSB0aGlzLl9hY3Rpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uc1tpXS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgJy4uL3NyYy9jaGFydC9yYWRhci9jc3MvY2hhcnQuY3NzJyA7XHJcbmltcG9ydCAnLi4vc3JjL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFydCB9ICBmcm9tICcuLi9zcmMvY2hhcnQvcmFkYXIvQ2hhcnQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcmllcyB9ICBmcm9tICcuLi9zcmMvYmFzZS9zZXJpZXMvU2VyaWVzQmFzZS5qcyc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=