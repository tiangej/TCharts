(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pie"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["pie"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/pieEntry.js");
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

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
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

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


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

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


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

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/pie/css/chart.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/pie/css/chart.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.pieChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.pieChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}     ", ""]);



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

/***/ "./src/chart/pie/Chart.js":
/*!********************************!*\
  !*** ./src/chart/pie/Chart.js ***!
  \********************************/
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
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/chart/ChartBase.js */ "./src/base/chart/ChartBase.js");
/* harmony import */ var _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/ChartInfo_In.js */ "./src/chart/pie/info/ChartInfo_In.js");
/* harmony import */ var _parts_PieItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/PieItem.js */ "./src/chart/pie/parts/PieItem.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/pie/painter/Painter.js");
/* harmony import */ var _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/ObjectPool.js */ "./src/support/ObjectPool.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/Utility.js */ "./src/support/Utility.js");
/* harmony import */ var _support_Styles_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../support/Styles.js */ "./src/support/Styles.js");
/* harmony import */ var _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../tween/TWAlgorithm.js */ "./src/tween/TWAlgorithm.js");
/* harmony import */ var _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tween/TWEngine.js */ "./src/tween/TWEngine.js");






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

    _this._canvasBak = null; //不显示的Canvas，用于后台绘制

    _this._itemArray = []; //存放扇形的一维数组

    _this._itemPool = null; //扇形对象池

    _this._maskRadian = 0; //用于缓动效果的参数

    _this._maskRadius = 0;
    _this._twEngine = new _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_15__["default"](); //缓动动画相关

    _this._tweenCallBackBind = _this._tweenCallBack.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._parentDivClassName = 'pieChartDiv'; //样式名
    ///////////////////////
    // 初始化
    ///////////////////////
    //设置画家

    _this._setPainter(_painter_Painter_js__WEBPACK_IMPORTED_MODULE_8__["default"]); //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换


    _this._parentDiv = document.getElementById(parentDivID);
    _this._parentDiv.className += ' ' + _this._parentDivClassName; //动态生成_canvas，并添加到DOM树。同时获取其上下文

    _this._canvas = document.createElement('canvas');
    _this._canvasBak = document.createElement('canvas');

    _this._parentDiv.appendChild(_this._canvas); //初始化对象池


    _this._itemPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_9__["default"](_parts_PieItem_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
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


      this._getItemAndComputePieInfo(); //设置缓动动画


      this._setTween(); //启动帧循环，在循环内部绘制图表


      this._startPaint();
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_check",
    value: function _check() {
      var rtn = true; //检查1： 数据是否为空

      if (this.chartInfo_In.series.length != 1) {
        rtn = false;
      }

      return rtn;
    }
  }, {
    key: "_reset",
    value: function _reset() {
      var canvas = this._canvas,
          canvasBak = this._canvasBak,
          div = this._parentDiv,
          chartInfo_In = this.chartInfo_In,
          itemArr = this._itemArray,
          centerX = chartInfo_In.centerX,
          centerY = chartInfo_In.centerY,
          offsetX,
          offsetY,
          canvasWidth,
          canvasHeight,
          i,
          len; //移除鼠标事件监听器

      this._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].REMOVE); //设置尺寸


      canvasWidth = canvas.width = canvasBak.width = div.offsetWidth;
      canvasHeight = canvas.height = canvasBak.height = div.offsetHeight; //计算缓动效果需要的半径

      if (centerX >= canvasWidth / 2) {
        if (centerY >= canvasHeight / 2) {
          this._maskRadius = Math.sqrt(centerX * centerX + centerY * centerY);
        } else {
          offsetX = centerX;
          offsetY = canvasHeight - centerY;
          this._maskRadius = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        }
      } else {
        if (centerY >= canvasHeight / 2) {
          offsetX = canvasWidth - centerX;
          offsetY = centerY;
          this._maskRadius = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        } else {
          offsetX = canvasWidth - centerX;
          offsetY = canvasHeight - centerY;
          this._maskRadius = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        }
      } //初始化图例数据、line对象数组


      itemArr.length = 0;
      len = chartInfo_In.series.length;

      for (i = 0; i < len; i++) {
        itemArr[i] = [];
      } //从对象池中释放曾经使用过的扇形


      this._itemPool.releaseAll(); //释放缓动资源


      this._twEngine.releaseAllTWData();

      this._twEngine.releaseAllTWAction(); //取消上一次绑定的动画函数


      window.cancelAnimationFrame(this._animationFrameID);
    }
  }, {
    key: "_getItemAndComputePieInfo",
    value: function _getItemAndComputePieInfo() {
      var chartInfo_In = this.chartInfo_In,
          colors = chartInfo_In.colors,
          itemArray = this._itemArray[0],
          pool = this._itemPool,
          arr,
          total,
          obj,
          item,
          currentstartAngle,
          radianUnit,
          i,
          len;
      radianUnit = _support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].RADIAN_UNIT;
      total = 0;
      arr = chartInfo_In.series[0].data;
      len = arr.length;

      for (i = 0; i < len; i++) {
        obj = arr[i];
        total += Number(obj.value);
      } //生成扇形项目，设置属性


      currentstartAngle = -90;

      for (i = 0; i < len; i++) {
        obj = arr[i];
        item = pool.getObj();
        item.index = i;
        item.name = obj.name;
        item.value = obj.value;
        item.percent = item.value / total;
        item.startAngle = currentstartAngle;
        item.startRadian = currentstartAngle * radianUnit;
        item.angle = item.percent * 360;
        item.radian = item.angle * radianUnit;
        item.bisectingAngle = item.startAngle + item.angle / 2;
        item.bisectingRadian = item.bisectingAngle * radianUnit;
        item.insideRadius = chartInfo_In.insideRadius;
        item.sectorRadius = chartInfo_In.sectorRadius;
        item.backgroundColor = colors[i];

        if (i == chartInfo_In.selectedIndex) {
          this._setItemPosition(item, true);
        } else {
          this._setItemPosition(item, false);
        }

        itemArray.push(item);
        currentstartAngle += item.angle;
      }
    }
  }, {
    key: "_setItemPosition",
    value: function _setItemPosition(item, selectedFlag) {
      var chartInfo_In = this.chartInfo_In,
          centerX = chartInfo_In.centerX,
          centerY = chartInfo_In.centerY,
          num;

      if (selectedFlag == true) {
        num = _support_Styles_js__WEBPACK_IMPORTED_MODULE_13__["default"].PIE_SELECTOR_TRANSLATE * Math.cos(item.bisectingRadian);
        item.x = centerX + num;
        num = _support_Styles_js__WEBPACK_IMPORTED_MODULE_13__["default"].PIE_SELECTOR_TRANSLATE * Math.sin(item.bisectingRadian);
        item.y = centerY + num;
      } else {
        item.x = centerX;
        item.y = centerY;
      }
    }
  }, {
    key: "_setTween",
    value: function _setTween() {
      var radianUnit = _support_Constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].RADIAN_UNIT,
          twEngine = this._twEngine,
          tweenCallBackBind = this._tweenCallBackBind,
          from,
          to,
          twData,
          twAction;
      from = [1 * radianUnit];
      to = [360 * radianUnit];
      twData = twEngine.getTWData();
      twData.setData(null, from, to, tweenCallBackBind);
      twAction = twEngine.getTWAction();
      twAction.setData([twData], _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_14__["default"].linear, 1000);
      twEngine.setFirstTWAction(twAction);
    }
  }, {
    key: "_addOrRemoveEventListener",
    value: function _addOrRemoveEventListener(command) {
      var canvas = this._canvas,
          chartInfo_In = this.chartInfo_In,
          itemArray = this._itemArray,
          items,
          item,
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

        items = itemArray[0];
        len = items.length;

        for (i = 0; i < len; i++) {
          item = items[i]; //判断鼠标位于哪个对象之上

          if (item.isPointInPath(position.x, position.y) == true) {
            if (chartInfo_In.selectedIndex == i) {
              me._setItemPosition(item, false);

              chartInfo_In.selectedIndex = -1;
            } else if (chartInfo_In.selectedIndex == -1) {
              me._setItemPosition(item, true);

              chartInfo_In.selectedIndex = i;
            } else {
              me._setItemPosition(items[chartInfo_In.selectedIndex], false);

              me._setItemPosition(item, true);

              chartInfo_In.selectedIndex = i;
            }

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
            me._paint(); //绘制图表并保存绘图表面


            me._twEngine.start(); //启动缓动，从下一帧开始缓动


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
            me._paint();

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
      this._maskRadian = resultArray[0];
    }
  }]);

  return Chart;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/chart/pie/css/chart.css":
/*!*************************************!*\
  !*** ./src/chart/pie/css/chart.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/pie/css/chart.css");

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

/***/ "./src/chart/pie/info/ChartInfo_In.js":
/*!********************************************!*\
  !*** ./src/chart/pie/info/ChartInfo_In.js ***!
  \********************************************/
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

    _this.centerX = 350; //圆环中心位置：相对于div左上角

    _this.centerY = 150;
    _this.insideRadius = 0; //扇形内半径

    _this.sectorRadius = 100; //扇形半径

    _this.labelInnerFlag = false; //标签显示位置

    _this.percentDecimalDigits = 2; //扇形角度百分比小数位数
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

/***/ "./src/chart/pie/painter/Painter.js":
/*!******************************************!*\
  !*** ./src/chart/pie/painter/Painter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Painter; });
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../support/Styles.js */ "./src/support/Styles.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../support/Utility.js */ "./src/support/Utility.js");




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

    this._canvasSurface; //Canvas绘图表面

    this._canvasBak;
    this._ctxBak; //Canvas上下文

    this._canvasSurfaceBak; //Canvas绘图表面

    this._chartInfo_In; //图表各类数据 

    this._itemArray; //存储扇形点的数组

    this._selectedIndex; //被选择的扇形

    this._selectorRowHeight;
    this._selectorRectWidth;
    this._selectorRectHeight;
    this._selectorPositionX;
    this._selectorPositionOffsetY;
    this._maskRadian; //缓动效果相关

    this._maskRadius; ///////////////////////
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
      this._canvasBak = chart._canvasBak;
      this._ctxBak = this._canvasBak.getContext('2d');
      this._chartInfo_In = chart.chartInfo_In;
      this._selectedIndex = this._chartInfo_In.selectedIndex;
      this._itemArray = chart._itemArray; //缓动效果相关

      this._maskRadian = chart._maskRadian;
      this._maskRadius = chart._maskRadius;
    }
  }, {
    key: "paint",
    value: function paint() {
      var ctx = this._ctx,
          ctxBak = this._ctxBak,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height;

      switch (this._chart._status) {
        case _support_Status_js__WEBPACK_IMPORTED_MODULE_3__["default"].STEP1:
          //绘制图表并缓存Canvas绘图表面
          //清空画布
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctxBak.clearRect(0, 0, canvasWidth, canvasHeight); //在_ctx上绘制图表固定的内容

          this._paintTitle();

          this._paintLegend(); //缓存此时的_ctx绘图表面（全尺寸）


          this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight); //在_ctxBak上绘制扇形和标签

          this._paintPie(ctxBak);

          this._paintLabel(ctxBak);

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_3__["default"].STEP2:
          //绘制缓动效果
          this._paintMaskImage();

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_3__["default"].STEP3:
          this._paintSelector();

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_3__["default"].STEP4:
          //绘制选择项
          //恢复绘图表面，将在此之上绘制圆环
          ctx.putImageData(this._canvasSurface, 0, 0); //在ctx上绘制扇形和标签

          this._paintPie(ctx);

          this._paintLabel(ctx);

          this._paintSelector();

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
      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].TITLE_FONT;
      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_LEFT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_BASE_LINE_TOP;
      ctx.fillText(chartInfo_In.title, chartInfo_In.titleLeft, chartInfo_In.titleTop);
      ctx.restore();
    }
  }, {
    key: "_paintLegend",
    value: function _paintLegend() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          itemArray = this._itemArray,
          colors = chartInfo_In.colors,
          legendWidth,
          valueWidth,
          decimalDigits,
          percentWidth,
          items,
          item,
          str,
          num,
          gapH,
          gapV,
          h,
          x1,
          x2,
          x3,
          x4,
          y1,
          i,
          len;
      ctx.save(); //设置文字样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].LEGEND_FONT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_BASE_LINE_TOP; //计算各个要素的最大长度

      legendWidth = valueWidth = 0;
      items = itemArray[0];
      len = items.length;

      for (i = 0; i < len; i++) {
        item = items[i]; //比较图例文字的长度

        str = item.name;
        num = _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__["default"].getTextWidth(ctx, str);

        if (num > legendWidth) {
          legendWidth = num;
        } //比较数值文字的长度


        str = item.value;
        num = _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__["default"].getTextWidth(ctx, str);

        if (num > valueWidth) {
          valueWidth = num;
        }
      }

      decimalDigits = chartInfo_In.percentDecimalDigits;
      num = Math.pow(10, decimalDigits);
      str = num.toString();

      if (str.length == 1) // str == '1'
        {
          str = '99 %';
        } else {
        str = str.substr(1);
        str = '99.' + str + ' %';
      }

      percentWidth = _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__["default"].getTextWidth(ctx, str); //获取文字高度

      h = _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__["default"].getTextHeight(ctx); //计算各个元素之间的横向、纵向间隔

      gapH = h;
      gapV = h * 1.5; //计算各个要素的x坐标

      x1 = chartInfo_In.legendLeft; //色块

      x2 = x1 + h + gapH; //图例文字

      x3 = x2 + legendWidth + gapH + percentWidth; //百分比（右对齐）

      x4 = x3 + gapH + valueWidth; //数值（右对齐）
      //设定初始y坐标

      y1 = chartInfo_In.legendTop; //保存相关信息

      this._selectorRectWidth = Math.ceil(x4 - x1 + h);
      this._selectorRectHeight = Math.ceil(gapV);
      this._selectorRowHeight = gapV;
      this._selectorPositionX = _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__["default"].adjustPosition(x1 - h / 2);
      this._selectorPositionOffsetY = (gapV - h) / 2; //依次绘制图例色块、文字、百分率、数值

      for (i = 0; i < len; i++) {
        item = items[i]; //绘制色块

        ctx.fillStyle = colors[i];
        ctx.fillRect(x1, y1, h, h); //绘制图例文字

        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_LEFT;
        ctx.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].FONT_FILL_COLOR;
        ctx.fillText(item.name, x2, y1); //绘制百分比

        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_RIGHT;
        num = item.percent * 10000 / 100;
        str = num.toFixed(decimalDigits) + ' %';
        ctx.fillText(str, x3, y1); //绘制数值

        ctx.fillText(item.value, x4, y1);
        y1 += gapV;
      }

      ctx.restore();
    }
  }, {
    key: "_paintPie",
    value: function _paintPie(ctx) {
      var itemArray = this._itemArray,
          items,
          item,
          radius,
          i,
          len;
      ctx.save(); //循环绘制圆环

      items = itemArray[0];
      len = items.length;

      for (i = 0; i < len; i++) {
        ctx.save(); //取得扇形对象

        item = items[i]; //设置填充颜色

        ctx.fillStyle = item.backgroundColor; //平移到扇形中心

        ctx.translate(item.x, item.y); //根据偏移角度进行旋转

        ctx.rotate(item.startRadian); //构建路径

        radius = item.insideRadius + item.sectorRadius;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, item.radian);

        if (item.insideRadius == 0) //根据内半径是否为0分别处理
          {
            ctx.lineTo(0, 0);
          } else {
          ctx.rotate(item.radian);
          ctx.lineTo(item.insideRadius, 0);
          ctx.rotate(-item.radian);
          ctx.arc(0, 0, item.insideRadius, item.radian, 0, true);
        }

        ctx.closePath(); //填充颜色

        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
    }
  }, {
    key: "_paintLabel",
    value: function _paintLabel(ctx) {
      var labelInnerFlag = this._chartInfo_In.labelInnerFlag,
          itemArray = this._itemArray,
          items,
          item,
          r1,
          r2,
          x1,
          y1,
          x2,
          y2,
          x3,
          y3,
          h,
          i,
          len;
      ctx.save(); //(1)设置共同样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].LABEL_FONT; //(2)获取文字高度

      h = _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__["default"].getTextHeight(ctx); //(3)绘制标签：根据标签是否绘制在扇形内部分别进行处理

      if (labelInnerFlag == true) {
        //设置文字对齐方式
        ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_BASE_LINE_MIDDLE;
        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_CENTER; //设置填充颜色(白色)

        ctx.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_INNER_FONT_COLOR; //循环绘制标签

        items = itemArray[0];
        len = items.length;

        for (i = 0; i < len; i++) {
          ctx.save(); //取得扇形对象

          item = items[i]; //平移到扇形中心

          ctx.translate(item.x, item.y); //计算文字绘制位置

          r1 = item.insideRadius + item.sectorRadius / 2;
          x1 = r1 * Math.cos(item.bisectingRadian);
          y1 = r1 * Math.sin(item.bisectingRadian);
          ctx.fillText(item.name, x1, y1);
          ctx.restore();
        }
      } else {
        //循环绘制标签以及引导线
        items = itemArray[0];
        len = items.length;

        for (i = 0; i < len; i++) {
          ctx.save(); //取得扇形对象

          item = items[i]; //设置描边和填充颜色

          ctx.strokeStyle = item.backgroundColor;
          ctx.fillStyle = item.backgroundColor; //计算引导线前两个点坐标

          r1 = item.insideRadius + item.sectorRadius;
          r2 = r1 + _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_GUIDE_LINE1_SIZE;
          x1 = r1 * Math.cos(item.bisectingRadian);
          y1 = r1 * Math.sin(item.bisectingRadian);
          x2 = r2 * Math.cos(item.bisectingRadian);
          y2 = r2 * Math.sin(item.bisectingRadian); //计算第三个点坐标
          //下面逻辑中的1.0是一个像素的概念。是一种粗糙的比较，但是足够用

          y3 = y2;

          if (x2 - x1 > 1.0) {
            x3 = x2 + _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_GUIDE_LINE2_SIZE;
          } else if (x1 - x2 > 1.0) {
            x3 = x2 - _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_GUIDE_LINE2_SIZE;
          } else {
            x3 = x2;
          }

          if (Math.abs(y1 - y2) < 1.0) {
            x3 = x2;
          } //平移到扇形中心


          ctx.translate(item.x, item.y); //绘制引导线

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.stroke(); //绘制标签

          if (item.bisectingAngle > -90 && item.bisectingAngle < 90) {
            ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_BASE_LINE_MIDDLE;
            ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_LEFT;
            x1 = x3 + _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_OFFSET;
            y1 = y3;
          } else if (item.bisectingAngle > 90 && item.bisectingAngle < 270) {
            ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_BASE_LINE_MIDDLE;
            ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_RIGHT;
            x1 = x3 - _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_OFFSET;
            y1 = y3;
          } else if (item.bisectingAngle == -90) {
            ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_BASE_LINE_BOTTOM;
            ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_CENTER;
            x1 = x3;
            y1 = y3 - _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_OFFSET;
          } else if (item.bisectingAngle == 90) {
            ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_BASE_LINE_TOP;
            ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].TEXT_ALIGN_CENTER;
            x1 = x3;
            y1 = y3 + _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_LABEL_OFFSET;
          }

          ctx.fillText(item.name, x1, y1);
          ctx.restore();
        }
      }

      ctx.restore();
    }
  }, {
    key: "_paintMaskImage",
    value: function _paintMaskImage() {
      var ctx = this._ctx,
          ctxBak = this._ctxBak,
          chartInfo_In = this._chartInfo_In,
          centerX = chartInfo_In.centerX,
          centerY = chartInfo_In.centerY,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          maskRadius = this._maskRadius,
          maskRadian = this._maskRadian; //恢复绘图表面，将在此之上绘制圆环

      ctx.putImageData(this._canvasSurface, 0, 0);
      ctx.save(); //构建剪切路径

      ctx.beginPath();
      ctx.arc(centerX, centerY, maskRadius, -Math.PI / 2, -Math.PI / 2 + maskRadian);
      ctx.lineTo(centerX, centerY);
      ctx.closePath(); //剪切

      ctx.clip(); //将_ctxBak的内容绘制到剪切区域

      ctx.drawImage(ctxBak.canvas, 0, 0, canvasWidth, canvasHeight);
      ctx.restore();
    }
  }, {
    key: "_paintSelector",
    value: function _paintSelector() {
      var ctx = this._ctx,
          selectedIndex = this._selectedIndex,
          legendTop = this._chartInfo_In.legendTop,
          selectorPositionX = this._selectorPositionX,
          selectorPositionOffsetY = this._selectorPositionOffsetY,
          selectorRectWidth = this._selectorRectWidth,
          selectorRectHeight = this._selectorRectHeight,
          selectorRowHeight = this._selectorRowHeight;

      if (selectedIndex >= 0) {
        ctx.save();
        ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_SELECTOR_LINE_WIDTH;
        ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].PIE_SELECTOR_LINE_COLOR;
        ctx.strokeRect(selectorPositionX, _support_Utility_js__WEBPACK_IMPORTED_MODULE_6__["default"].adjustPosition(legendTop + selectorRowHeight * selectedIndex - selectorPositionOffsetY), selectorRectWidth, selectorRectHeight);
        ctx.restore();
      }
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

/***/ "./src/chart/pie/parts/PieItem.js":
/*!****************************************!*\
  !*** ./src/chart/pie/parts/PieItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PieItem; });
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



var PieItem =
/*#__PURE__*/
function (_PartBase) {
  _inherits(PieItem, _PartBase);

  function PieItem() {
    var _this;

    _classCallCheck(this, PieItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PieItem).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.index; //扇形对象对应的数据项在数据系列中的索引    

    _this.value; //扇形对象对应的数据项中的值

    _this.percent; //value占所有饼块总值的百分比

    _this.sectorRadius; //扇形半径

    _this.insideRadius; //扇形内圆半径

    _this.startAngle; //扇形的起始角度

    _this.startRadian; //扇形的起始弧度（角度转弧度）

    _this.angle; //扇形的角度

    _this.radian; //扇形的弧度（角度转弧度）

    _this.bisectingAngle; //扇形的角分线角度

    _this.bisectingRadian; //扇形的角分线弧度（角度转弧度）

    _this.backgroundColor; //扇形颜色
    ///////////////////////
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


  _createClass(PieItem, [{
    key: "isPointInPath",
    value: function isPointInPath(x, y) {
      var rtn = false,
          diffX,
          diffY,
          radius,
          angle; //计算指定点和本扇形坐标之间的横向，纵向距离

      diffX = x - this.x;
      diffY = y - this.y; //计算指定点和本扇形坐标之间的距离

      radius = Math.sqrt(diffX * diffX + diffY * diffY); //计算指定点和本扇形坐标连线与x轴的夹角

      angle = Math.atan2(diffY, diffX) * 180 / Math.PI; //校正第四象限角度

      if (angle > -180 && angle < -90) {
        angle += 360;
      } //判断指定点与本扇形的关系


      if (radius >= this.insideRadius && radius <= this.insideRadius + this.sectorRadius && angle >= this.startAngle && angle < this.startAngle + this.angle) {
        rtn = true;
      }

      return rtn;
    }
  }]);

  return PieItem;
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

/***/ "./webpackEntry/pieEntry.js":
/*!**********************************!*\
  !*** ./webpackEntry/pieEntry.js ***!
  \**********************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_pie_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/pie/css/chart.css */ "./src/chart/pie/css/chart.css");
/* harmony import */ var _src_chart_pie_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_pie_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_pie_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/pie/Chart.js */ "./src/chart/pie/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_pie_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/base/series/SeriesBase.js */ "./src/base/series/SeriesBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9waWUvY3NzL2NoYXJ0LmNzcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9DaGFydEluZm9CYXNlX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2Uvc2VyaWVzL1Nlcmllc0Jhc2UuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvcGllL0NoYXJ0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3BpZS9jc3MvY2hhcnQuY3NzPzA0NGUiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvcGllL2luZm8vQ2hhcnRJbmZvX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3BpZS9wYWludGVyL1BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvcGllL3BhcnRzL1BpZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L09iamVjdFBvb2wuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9VdGlsaXR5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXQWN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXQWxnb3JpdGhtLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXRGF0YS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3dlYnBhY2tFbnRyeS9waWVFbnRyeS5qcyJdLCJuYW1lcyI6WyJDaGFydEJhc2UiLCJfcGFyZW50RGl2IiwiX2NhbnZhcyIsIl90aXBEaXYiLCJfcGFpbnRlciIsIl9zdGF0dXMiLCJfZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWciLCJfc3VyZmFjZUltYWdlRGF0YSIsIl9hbmltYXRpb25GcmFtZUlEIiwiU3RhdHVzIiwiU1RPUCIsInBhaW50ZXIiLCJnZXRJbnN0YW5jZSIsInNldENoYXJ0IiwicGFpbnQiLCJjbGFzc05hbWUiLCJ0aXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIkNoYXJ0SW5mb0Jhc2VfSW4iLCJ0aXRsZSIsInRpdGxlVG9wIiwidGl0bGVMZWZ0IiwibGVnZW5kVG9wIiwibGVnZW5kTGVmdCIsImxlZ2VuZFJpZ2h0IiwiYm9keVRvcCIsImJvZHlCb3R0b20iLCJib2R5TGVmdCIsImJvZHlSaWdodCIsImNvbG9ycyIsInNlcmllcyIsInNlbGVjdGVkSW5kZXgiLCJTZXJpZXNCYXNlIiwibmFtZSIsImRhdGEiLCJzZWxlY3RlZCIsIkNoYXJ0IiwicGFyZW50RGl2SUQiLCJjaGFydEluZm9fSW4iLCJDaGFydEluZm9fSW4iLCJfY2FudmFzQmFrIiwiX2l0ZW1BcnJheSIsIl9pdGVtUG9vbCIsIl9tYXNrUmFkaWFuIiwiX21hc2tSYWRpdXMiLCJfdHdFbmdpbmUiLCJUV0VuZ2luZSIsIl90d2VlbkNhbGxCYWNrQmluZCIsIl90d2VlbkNhbGxCYWNrIiwiYmluZCIsIl9wYXJlbnREaXZDbGFzc05hbWUiLCJfc2V0UGFpbnRlciIsIlBhaW50ZXIiLCJnZXRFbGVtZW50QnlJZCIsIk9iamVjdFBvb2wiLCJQaWVJdGVtIiwiX2NoZWNrIiwiY29uc29sZSIsImxvZyIsIl9yZXNldCIsIl9nZXRJdGVtQW5kQ29tcHV0ZVBpZUluZm8iLCJfc2V0VHdlZW4iLCJfc3RhcnRQYWludCIsInJ0biIsImxlbmd0aCIsImNhbnZhcyIsImNhbnZhc0JhayIsImRpdiIsIml0ZW1BcnIiLCJjZW50ZXJYIiwiY2VudGVyWSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpIiwibGVuIiwiX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbnN0YW50cyIsIlJFTU9WRSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwic3FydCIsInJlbGVhc2VBbGwiLCJyZWxlYXNlQWxsVFdEYXRhIiwicmVsZWFzZUFsbFRXQWN0aW9uIiwid2luZG93IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpdGVtQXJyYXkiLCJwb29sIiwiYXJyIiwidG90YWwiLCJvYmoiLCJpdGVtIiwiY3VycmVudHN0YXJ0QW5nbGUiLCJyYWRpYW5Vbml0IiwiUkFESUFOX1VOSVQiLCJOdW1iZXIiLCJ2YWx1ZSIsImdldE9iaiIsImluZGV4IiwicGVyY2VudCIsInN0YXJ0QW5nbGUiLCJzdGFydFJhZGlhbiIsImFuZ2xlIiwicmFkaWFuIiwiYmlzZWN0aW5nQW5nbGUiLCJiaXNlY3RpbmdSYWRpYW4iLCJpbnNpZGVSYWRpdXMiLCJzZWN0b3JSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJfc2V0SXRlbVBvc2l0aW9uIiwicHVzaCIsInNlbGVjdGVkRmxhZyIsIm51bSIsIlN0eWxlcyIsIlBJRV9TRUxFQ1RPUl9UUkFOU0xBVEUiLCJjb3MiLCJ4Iiwic2luIiwieSIsInR3RW5naW5lIiwidHdlZW5DYWxsQmFja0JpbmQiLCJmcm9tIiwidG8iLCJ0d0RhdGEiLCJ0d0FjdGlvbiIsImdldFRXRGF0YSIsInNldERhdGEiLCJnZXRUV0FjdGlvbiIsIlRXQWxnb3JpdGhtIiwibGluZWFyIiwic2V0Rmlyc3RUV0FjdGlvbiIsImNvbW1hbmQiLCJpdGVtcyIsInJlY3QiLCJwb3NpdGlvbiIsIm1lIiwiZG9Nb3VzZUNsaWNrIiwiZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIlV0aWxpdHkiLCJ3aW5kb3dUb0NhbnZhcyIsImxlZnQiLCJ0b3AiLCJjbGllbnRYIiwiY2xpZW50WSIsImlzUG9pbnRJblBhdGgiLCJTVEVQNCIsIkFERCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU1RFUDEiLCJfcGFpbnQiLCJzdGFydCIsIlNURVAyIiwibmV4dEZyYW1lIiwic3RvcCIsIlNURVAzIiwiV0FJVElORyIsInJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJyZXN1bHRBcnJheSIsImxhYmVsSW5uZXJGbGFnIiwicGVyY2VudERlY2ltYWxEaWdpdHMiLCJfY2hhcnQiLCJfY3R4IiwiX2NhbnZhc1N1cmZhY2UiLCJfY3R4QmFrIiwiX2NhbnZhc1N1cmZhY2VCYWsiLCJfY2hhcnRJbmZvX0luIiwiX3NlbGVjdGVkSW5kZXgiLCJfc2VsZWN0b3JSb3dIZWlnaHQiLCJfc2VsZWN0b3JSZWN0V2lkdGgiLCJfc2VsZWN0b3JSZWN0SGVpZ2h0IiwiX3NlbGVjdG9yUG9zaXRpb25YIiwiX3NlbGVjdG9yUG9zaXRpb25PZmZzZXRZIiwiY2hhcnQiLCJnZXRDb250ZXh0IiwiY3R4IiwiY3R4QmFrIiwiY2xlYXJSZWN0IiwiX3BhaW50VGl0bGUiLCJfcGFpbnRMZWdlbmQiLCJnZXRJbWFnZURhdGEiLCJfcGFpbnRQaWUiLCJfcGFpbnRMYWJlbCIsIl9wYWludE1hc2tJbWFnZSIsIl9wYWludFNlbGVjdG9yIiwicHV0SW1hZ2VEYXRhIiwic2F2ZSIsImZvbnQiLCJUSVRMRV9GT05UIiwidGV4dEFsaWduIiwiVEVYVF9BTElHTl9MRUZUIiwidGV4dEJhc2VsaW5lIiwiVEVYVF9CQVNFX0xJTkVfVE9QIiwiZmlsbFRleHQiLCJyZXN0b3JlIiwibGVnZW5kV2lkdGgiLCJ2YWx1ZVdpZHRoIiwiZGVjaW1hbERpZ2l0cyIsInBlcmNlbnRXaWR0aCIsInN0ciIsImdhcEgiLCJnYXBWIiwiaCIsIngxIiwieDIiLCJ4MyIsIng0IiwieTEiLCJMRUdFTkRfRk9OVCIsImdldFRleHRXaWR0aCIsInBvdyIsInRvU3RyaW5nIiwic3Vic3RyIiwiZ2V0VGV4dEhlaWdodCIsImNlaWwiLCJhZGp1c3RQb3NpdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiRk9OVF9GSUxMX0NPTE9SIiwiVEVYVF9BTElHTl9SSUdIVCIsInRvRml4ZWQiLCJyYWRpdXMiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJiZWdpblBhdGgiLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwicjEiLCJyMiIsInkyIiwieTMiLCJMQUJFTF9GT05UIiwiVEVYVF9CQVNFX0xJTkVfTUlERExFIiwiVEVYVF9BTElHTl9DRU5URVIiLCJQSUVfTEFCRUxfSU5ORVJfRk9OVF9DT0xPUiIsInN0cm9rZVN0eWxlIiwiUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkUiLCJQSUVfTEFCRUxfR1VJREVfTElORTJfU0laRSIsImFicyIsIm1vdmVUbyIsInN0cm9rZSIsIlBJRV9MQUJFTF9PRkZTRVQiLCJURVhUX0JBU0VfTElORV9CT1RUT00iLCJtYXNrUmFkaXVzIiwibWFza1JhZGlhbiIsIlBJIiwiY2xpcCIsImRyYXdJbWFnZSIsInNlbGVjdG9yUG9zaXRpb25YIiwic2VsZWN0b3JQb3NpdGlvbk9mZnNldFkiLCJzZWxlY3RvclJlY3RXaWR0aCIsInNlbGVjdG9yUmVjdEhlaWdodCIsInNlbGVjdG9yUm93SGVpZ2h0IiwibGluZVdpZHRoIiwiUElFX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJQSUVfU0VMRUNUT1JfTElORV9DT0xPUiIsInN0cm9rZVJlY3QiLCJpbnN0YW5jZSIsImRpZmZYIiwiZGlmZlkiLCJhdGFuMiIsIlBhcnRCYXNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmdW5jIiwic2V0VGltZW91dCIsIkRJUlRZIiwiSEFMRl9QSVhFTCIsIkNMT1NFX1RPX1pFUk8iLCJURVhUX0JBU0VfTElORV9JREVPR1JBUEhJQyIsIlhfQVhJUyIsIllfQVhJUyIsImNsYXp6IiwicGFyYSIsIl9jbGFzcyIsIl9wYXJhIiwiX2NvdW50IiwiX3Bvb2wiLCJTVEVQNSIsIkFYSVNfTkFNRV9GT05UIiwiQVhJU19MSU5FX1dJRFRIIiwiQVhJU19MSU5FX0NPTE9SIiwiQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRSIsIkdSSURfTElORV9XSURUSCIsIkdSSURfTElORV9DT0xPUiIsIkdSSURfTElORV9EQVNIIiwiWEFYSVNfTEFCRUxfT0ZGU0VUIiwiWEFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEUiLCJZQVhJU19MQUJFTF9PRkZTRVQiLCJZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURSIsIkxFR0VORF9TSEFQRV9URVhUX0dBUCIsIkxFR0VORF9HQVAiLCJUSVBfTE9DQVRJT05fT0ZGU0VUIiwiQlVCQkxFX0FMUEhBIiwiQ09MVU1OX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJDT0xVTU5fU0VMRUNUT1JfTElORV9DT0xPUiIsIkxJTkVfTElORV9XSURUSCIsIkxJTkVfQVJFQV9BTFBIQSIsIkxJTkVfTUFSS1BPSU5UX1dJRFRIIiwiTElORV9NQVJLUE9JTlRfUkFESVVTIiwiTElORV9NQVJLUE9JTlRfQkFLX0NPTE9SIiwiTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIIiwiTElORV9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiUkFEQVJfTEFCRUxfRk9OVCIsIlJBREFSX0xBQkVMX0NPTE9SIiwiUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUIiwiUkFEQVJfTElORV9XSURUSCIsIlJBREFSX0JBS19MSU5FX1dJRFRIIiwiUkFEQVJfQkFLX0xJTkVfQ09MT1IiLCJSQURBUl9CQUtfRklMTF9DT0xPUiIsIlNDQVRURVJfUE9JTlRfQUxQSEEiLCJTQ0FUVEVSX0NST1NTX0xJTkVfV0lEVEgiLCJTQ0FUVEVSX0NST1NTX0NPTE9SIiwiU1VOQlVSU19MQUJFTF9DT0xPUiIsIlNVTkJVUlNfQk9SREVSX0NPTE9SIiwibWluIiwibWF4Iiwic2NhbGVNYXhDb3VudCIsImF2ZyIsImdhcHMiLCJzY2FsZVVuaXQiLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJmbG9vciIsInhPUnkiLCJyb3VuZCIsImJvdW5kaW5nQ2xpZW50UmVjdExlZnQiLCJib3VuZGluZ0NsaWVudFJlY3RUb3AiLCJib3VuZGluZ0NsaWVudFJlY3RXaWR0aCIsImJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCIsImdsb2JsZVgiLCJnbG9ibGVZIiwiY2FudmFzQ29udGV4dCIsInRleHQiLCJtZWFzdXJlVGV4dCIsIlRXQWN0aW9uIiwidG90bGVUaW1lcyIsImRhdGFBcnJheSIsImFsZ29yaXRobSIsIm5leHRBY3Rpb24iLCJkdXJhdGlvbiIsIkZSQU1FX0RVUkFUSU9OIiwiYWN0aW9uIiwiY2FsbEJhY2siLCJqIiwibGVuMSIsImxlbjIiLCJ0IiwiYiIsImMiLCJkIiwiUXVhZCIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJDdWJpYyIsIlF1YXJ0IiwiUXVpbnQiLCJTaW5lIiwiRXhwbyIsIkNpcmMiLCJFbGFzdGljIiwiYSIsInAiLCJzIiwiYXNpbiIsIkJhY2siLCJCb3VuY2UiLCJUIiwidHdlZW4iLCJUV0RhdGEiLCJmcm9tQXJyYXkiLCJ0b0FycmF5IiwiX2FjdGlvbnMiLCJfZmlyc3RBY3Rpb24iLCJfY3VycmVudEFjdGlvbiIsIl9hY3Rpb25Qb29sIiwiX2RhdGFQb29sIiwiX2lzUGxheWluZyIsImluaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEdBQUdDLEdBQWhCLEVBQXFCRCxDQUFDLEVBQXRCLEVBQTBCO0FBQ3RCLGFBQUtxVCxRQUFMLENBQWNyVCxDQUFkLEVBQWlCMlQsSUFBakI7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSIsImZpbGUiOiJwaWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwaWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVFwiXSA9IHJvb3RbXCJUXCJdIHx8IHt9LCByb290W1wiVFwiXVtcInBpZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2VicGFja0VudHJ5L3BpZUVudHJ5LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qICwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICB2YXIgZW5kID0gYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlIChlbmRQb3MgPiBpbmRleCkgT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNwYWNlcyA9IHJlcXVpcmUoJy4vX3N0cmluZy13cycpO1xudmFyIHNwYWNlID0gJ1snICsgc3BhY2VzICsgJ10nO1xudmFyIG5vbiA9ICdcXHUyMDBiXFx1MDA4NSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBBTElBUykge1xuICB2YXIgZXhwID0ge307XG4gIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KTtcbiAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcbiAgaWYgKEFMSUFTKSBleHBbQUxJQVNdID0gZm47XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24gKHN0cmluZywgVFlQRSkge1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgJE51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIEJhc2UgPSAkTnVtYmVyO1xudmFyIHByb3RvID0gJE51bWJlci5wcm90b3R5cGU7XG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ09GID0gY29mKHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKShwcm90bykpID09IE5VTUJFUjtcbnZhciBUUklNID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcbiAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYgKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSkge1xuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QTihCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSkge1xuICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfVxuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcclxcbiAqIOWbvuihqOWGheWFqOWxgOiuvuWumu+8iOW/hemhu+mhueebru+8iVxcclxcbiAqIOeUqOS6jua4hemZpO+8iOWIneWni+WMlu+8ieaJgOaciem7mOiupOWGheWklui+uei3nSBcXHJcXG4gKi9cXHJcXG4ucGllQ2hhcnREaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDsgICAgICAgICAgICAvKiDmuIXpmaTvvIjliJ3lp4vljJbvvInlm77ooajlhoXmiYDmnInlhYPntKDnmoTpu5jorqTlhoXovrnot50gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggOyAgICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5aSW6L656LedICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFxcclxcbiAqIOe7mOWItuS4u+S9k+eahENhbnZhc1xcclxcbiAqL1xcclxcbi5waWVDaGFydERpdiBjYW52YXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgLyog57ud5a+55a6a5L2N77yM6L+Z5qC3MuS4quWdl+WFg+e0oO+8iENhbnZhc++8ieaJjeS8mumHjeWPoOWcqOS4gOi1tyAqL1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXHJcXG59ICAgICBcIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdiA9IG51bGw7ICAgICAgICAgICAgICAgICAvL+WtkOe7hOS7tjog5Zu+6KGo5ZCE5Liq5a2Q57uE5Lu255qE54i25a655ZmoXHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl90aXBEaXYgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9wYWludGVyID0gbnVsbDsgICAgICAgICAgICAgICAgICAgLy/nlLvlrrblvJXnlKhcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJyc7ICAgICAgICAgICAgICAgICAgICAgIC8v54q25oCBXHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID0gZmFsc2U7ICAvL+eUseS6jmpz5peg5rOV5Yik5pat5LqL5Lu255uR5ZCs5Ye95pWw5piv5ZCm5bey57uP5a2Y5Zyo77yM5Zug5q2k6Ieq5a6a5LmJ5qCH5b+X5L2N5p2l5Yik5patXHJcbiAgICAgICAgdGhpcy5fc3VyZmFjZUltYWdlRGF0YSA9IG51bGw7ICAgICAgICAgIC8vQ2FudmFz57uY5Zu+6KGo6Z2i77yM55So5LqO5L+d5a2YQ2FudmFz5Zu+54mHXHJcblxyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQ7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdG9wICgpIHtcclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSBTdGF0dXMuU1RPUDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgX3NldFBhaW50ZXIgKHBhaW50ZXIpIHtcclxuICAgICAgICB0aGlzLl9wYWludGVyID0gcGFpbnRlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludCAoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlci5zZXRDaGFydCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9wYWludGVyLnBhaW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICog5Yqo5oCB55Sf5oiQdGlw5a+56LGhXHJcbiAgICAqIOWcqOacrOWbvuihqOezu+WIl+S4re+8jHRpcOaYr+eUseauteiQvXDlr7nosaHlkox0YWJsZeWvueixoeaehOaIkO+8jOWFtuWkluingueUseWklumDqOaMh+WumueahENTU+aOp+WItlxyXG4gICAgKi9cclxuICAgIF9jcmVhdGVUaXAgKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCB0aXA7XHJcblxyXG4gICAgICAgIC8v55Sf5oiQdGlw55qEZGl25a+56LGhLOW5tuWinuWKoGNsYXNz5qC35byP44CC5rOo5oSP77ya5piv5aKe5Yqg6ICM5LiN5piv5pu/5o2iXHJcbiAgICAgICAgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGlwLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ5q616JC95a+56LGh77yM55So5LqO5pi+56S657G755uu5ZCN56ewXHJcbiAgICAgICAgdGlwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ6KGo5qC85a+56LGh77yM55So5LqO57O75YiX5ZCN56ew5ZKM5pWw5o2uXHJcbiAgICAgICAgdGlwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJykpO1xyXG5cclxuICAgICAgICAvL+i/lOWbnlxyXG4gICAgICAgIHJldHVybiB0aXA7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydEluZm9CYXNlX0luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy50aXRsZSA9ICdUQ2hhcnRzJzsgICAgICAgLy/lm77ooajmoIfpophcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZVRvcCA9IDEwOyAgICAgICAgIC8v5qCH6aKY5L2N572u77ya55u45a+55LqOZGl26L6557yYXHJcbiAgICAgICAgdGhpcy50aXRsZUxlZnQgPSAxMDtcclxuXHJcbiAgICAgICAgdGhpcy5sZWdlbmRUb3AgPSAxMDsgICAgICAgIC8v5Zu+5L6L5L2N572u77ya55u45a+55LqOZGl26L6557yYXHJcbiAgICAgICAgdGhpcy5sZWdlbmRMZWZ0ID0gMjA7XHJcbiAgICAgICAgdGhpcy5sZWdlbmRSaWdodCA9IDIwO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlUb3AgPSA3MDsgICAgICAgLy/lm77ooajkuLvkvZPljLrln5/vvIh4eeS4pOi9tOWbtOaIkOeahOefqeW9ouWMuuWfn++8ie+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMuYm9keUJvdHRvbSA9IDUwO1xyXG4gICAgICAgIHRoaXMuYm9keUxlZnQgPSA1MDtcclxuICAgICAgICB0aGlzLmJvZHlSaWdodCA9IDUwO1xyXG5cclxuICAgICAgICAvL+WbvuihqOS9v+eUqOeahOminOiJsuaVsOe7hFxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gWycjQzIzNTMxJywgJyMyRjQ1NTQnLCAnIzYxQTBBOCcsICcjRDQ4MjY1JywgJyM5MUM3QUUnLCAnI0NBODYyMicsICcjQkRBMjlBJywgJyM2RTcwNzQnXTtcclxuICAgICAgICB0aGlzLnNlcmllcyA9IFtdOyAgICAgICAgICAgICAgICAgLy/mlbDmja7ns7vliJdcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTsgICAgICAgICAvL+mAieaLqemhueeahOe0ouW8lSBcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcmllc0Jhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IENoYXJ0QmFzZSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0L0NoYXJ0QmFzZS5qcyc7XHJcblxyXG5pbXBvcnQgQ2hhcnRJbmZvX0luIGZyb20gJy4vaW5mby9DaGFydEluZm9fSW4uanMnO1xyXG5cclxuaW1wb3J0IFBpZUl0ZW0gZnJvbSAnLi9wYXJ0cy9QaWVJdGVtLmpzJztcclxuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi9wYWludGVyL1BhaW50ZXIuanMnO1xyXG5cclxuaW1wb3J0IE9iamVjdFBvb2wgZnJvbSAnLi4vLi4vc3VwcG9ydC9PYmplY3RQb29sLmpzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9zdXBwb3J0L0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tICcuLi8uLi9zdXBwb3J0L1V0aWxpdHkuanMnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uL3N1cHBvcnQvU3R5bGVzLmpzJztcclxuXHJcbmltcG9ydCBUV0FsZ29yaXRobSBmcm9tICcuLi8uLi90d2Vlbi9UV0FsZ29yaXRobS5qcyc7XHJcbmltcG9ydCBUV0VuZ2luZSBmcm9tICcuLi8uLi90d2Vlbi9UV0VuZ2luZS5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBDaGFydEJhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudERpdklEKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvL+eUqOaIt+i+k+WFpe+8iOWbvuihqOW/heWkh+S/oeaBr++8iVxyXG4gICAgICAgIHRoaXMuY2hhcnRJbmZvX0luID0gbmV3IENoYXJ0SW5mb19JbigpOyAgICAgICAgICAgICAgICAgICAgIC8v5Zu+6KGo5L+h5oGv44CC5L6L77ya5Zu+6KGo5ZCN56ewXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9jYW52YXNCYWsgPSBudWxsOyAgICAgICAvL+S4jeaYvuekuueahENhbnZhc++8jOeUqOS6juWQjuWPsOe7mOWItlxyXG5cclxuICAgICAgICB0aGlzLl9pdGVtQXJyYXkgPSBbXTsgICAgICAgICAvL+WtmOaUvuaJh+W9oueahOS4gOe7tOaVsOe7hFxyXG4gICAgICAgIHRoaXMuX2l0ZW1Qb29sID0gbnVsbDsgICAgICAgIC8v5omH5b2i5a+56LGh5rGgXHJcblxyXG4gICAgICAgIHRoaXMuX21hc2tSYWRpYW4gPSAwOyAgICAgIC8v55So5LqO57yT5Yqo5pWI5p6c55qE5Y+C5pWwXHJcbiAgICAgICAgdGhpcy5fbWFza1JhZGl1cyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX3R3RW5naW5lID0gbmV3IFRXRW5naW5lKCk7ICAgICAgICAgICAgICAgIC8v57yT5Yqo5Yqo55S755u45YWzXHJcbiAgICAgICAgdGhpcy5fdHdlZW5DYWxsQmFja0JpbmQgPSB0aGlzLl90d2VlbkNhbGxCYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lID0gJ3BpZUNoYXJ0RGl2JzsgICAgLy/moLflvI/lkI1cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy/orr7nva7nlLvlrrZcclxuICAgICAgICB0aGlzLl9zZXRQYWludGVyKFBhaW50ZXIpO1xyXG5cclxuICAgICAgICAvL+iOt+WPluS9nOS4uuWbvuihqOWuueWZqOeahGRpduWvueixoe+8jOW5tuWinuWKoOeJueWumuagt+W8j+OAguazqOaEj++8muaYr+WinuWKoOiAjOS4jeaYr+abv+aNolxyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudERpdklEKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuX3BhcmVudERpdkNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgLy/liqjmgIHnlJ/miJBfY2FudmFz77yM5bm25re75Yqg5YiwRE9N5qCR44CC5ZCM5pe26I635Y+W5YW25LiK5LiL5paHXHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQmFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5a+56LGh5rGgXHJcbiAgICAgICAgdGhpcy5faXRlbVBvb2wgPSBuZXcgT2JqZWN0UG9vbChQaWVJdGVtKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+mqjOivgeaVsOaNruWQiOazleaAp1xyXG4gICAgICAgIGlmICh0aGlzLl9jaGVjaygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVENoYXJ0c10gSW5jb3JyZWN0IGNoYXJ0IGRhdGEgIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+mHjeiuvuWQhOenjeeKtuaAge+8jOaVsOaNrlxyXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5omH5b2i5L+h5oGvXHJcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUFuZENvbXB1dGVQaWVJbmZvKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u57yT5Yqo5Yqo55S7XHJcbiAgICAgICAgdGhpcy5fc2V0VHdlZW4oKTtcclxuXHJcbiAgICAgICAgLy/lkK/liqjluKflvqrnjq/vvIzlnKjlvqrnjq/lhoXpg6jnu5jliLblm77ooahcclxuICAgICAgICB0aGlzLl9zdGFydFBhaW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfY2hlY2sgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICAvL+ajgOafpTHvvJog5pWw5o2u5piv5ZCm5Li656m6XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcnRJbmZvX0luLnNlcmllcy5sZW5ndGggIT0gMSkge1xyXG4gICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBydG47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9yZXNldCAoKSB7XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcbiAgICAgICAgICAgIGNhbnZhc0JhayA9IHRoaXMuX2NhbnZhc0JhayxcclxuICAgICAgICAgICAgZGl2ID0gdGhpcy5fcGFyZW50RGl2LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgaXRlbUFyciA9IHRoaXMuX2l0ZW1BcnJheSxcclxuICAgICAgICAgICAgY2VudGVyWCA9IGNoYXJ0SW5mb19Jbi5jZW50ZXJYLFxyXG4gICAgICAgICAgICBjZW50ZXJZID0gY2hhcnRJbmZvX0luLmNlbnRlclksXHJcbiAgICAgICAgICAgIG9mZnNldFgsIG9mZnNldFksXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgLy/np7vpmaTpvKDmoIfkuovku7bnm5HlkKzlmahcclxuICAgICAgICB0aGlzLl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLlJFTU9WRSk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5bC65a+4XHJcbiAgICAgICAgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGggPSBjYW52YXNCYWsud2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodCA9IGNhbnZhc0Jhay5oZWlnaHQgPSBkaXYub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAvL+iuoeeul+e8k+WKqOaViOaenOmcgOimgeeahOWNiuW+hFxyXG4gICAgICAgIGlmIChjZW50ZXJYID49IGNhbnZhc1dpZHRoIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoY2VudGVyWSA+PSBjYW52YXNIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUmFkaXVzID0gTWF0aC5zcXJ0KGNlbnRlclggKiBjZW50ZXJYICsgY2VudGVyWSAqIGNlbnRlclkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IGNlbnRlclg7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gY2FudmFzSGVpZ2h0IC0gY2VudGVyWTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hc2tSYWRpdXMgPSBNYXRoLnNxcnQob2Zmc2V0WCAqIG9mZnNldFggKyBvZmZzZXRZICogb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2VudGVyWSA+PSBjYW52YXNIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gY2FudmFzV2lkdGggLSBjZW50ZXJYO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IGNlbnRlclk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUmFkaXVzID0gTWF0aC5zcXJ0KG9mZnNldFggKiBvZmZzZXRYICsgb2Zmc2V0WSAqIG9mZnNldFkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IGNhbnZhc1dpZHRoIC0gY2VudGVyWDtcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSBjYW52YXNIZWlnaHQgLSBjZW50ZXJZO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFza1JhZGl1cyA9IE1hdGguc3FydChvZmZzZXRYICogb2Zmc2V0WCArIG9mZnNldFkgKiBvZmZzZXRZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5Zu+5L6L5pWw5o2u44CBbGluZeWvueixoeaVsOe7hFxyXG4gICAgICAgIGl0ZW1BcnIubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgbGVuID0gY2hhcnRJbmZvX0luLnNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1BcnJbaV0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5LuO5a+56LGh5rGg5Lit6YeK5pS+5pu+57uP5L2/55So6L+H55qE5omH5b2iXHJcbiAgICAgICAgdGhpcy5faXRlbVBvb2wucmVsZWFzZUFsbCgpO1xyXG5cclxuICAgICAgICAvL+mHiuaUvue8k+WKqOi1hOa6kFxyXG4gICAgICAgIHRoaXMuX3R3RW5naW5lLnJlbGVhc2VBbGxUV0RhdGEoKTtcclxuICAgICAgICB0aGlzLl90d0VuZ2luZS5yZWxlYXNlQWxsVFdBY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy/lj5bmtojkuIrkuIDmrKHnu5HlrprnmoTliqjnlLvlh73mlbBcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0aW9uRnJhbWVJRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRJdGVtQW5kQ29tcHV0ZVBpZUluZm8gKCkge1xyXG4gICAgICAgIGxldCBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY29sb3JzID0gY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5WzBdLFxyXG4gICAgICAgICAgICBwb29sID0gdGhpcy5faXRlbVBvb2wsXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgY3VycmVudHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgIHJhZGlhblVuaXQsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgcmFkaWFuVW5pdCA9IENvbnN0YW50cy5SQURJQU5fVU5JVDtcclxuXHJcbiAgICAgICAgdG90YWwgPSAwO1xyXG4gICAgICAgIGFyciA9IGNoYXJ0SW5mb19Jbi5zZXJpZXNbMF0uZGF0YTtcclxuICAgICAgICBsZW4gPSBhcnIubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgb2JqID0gYXJyW2ldO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBOdW1iZXIob2JqLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ5omH5b2i6aG555uu77yM6K6+572u5bGe5oCnXHJcbiAgICAgICAgY3VycmVudHN0YXJ0QW5nbGUgPSAtOTA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IGFycltpXTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0gPSBwb29sLmdldE9iaigpO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5pbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9IG9iai5uYW1lO1xyXG4gICAgICAgICAgICBpdGVtLnZhbHVlID0gb2JqLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5wZXJjZW50ID0gaXRlbS52YWx1ZSAvIHRvdGFsO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5zdGFydEFuZ2xlID0gY3VycmVudHN0YXJ0QW5nbGU7XHJcbiAgICAgICAgICAgIGl0ZW0uc3RhcnRSYWRpYW4gPSBjdXJyZW50c3RhcnRBbmdsZSAqIHJhZGlhblVuaXQ7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFuZ2xlID0gaXRlbS5wZXJjZW50ICogMzYwO1xyXG4gICAgICAgICAgICBpdGVtLnJhZGlhbiA9IGl0ZW0uYW5nbGUgKiByYWRpYW5Vbml0O1xyXG5cclxuICAgICAgICAgICAgaXRlbS5iaXNlY3RpbmdBbmdsZSA9IGl0ZW0uc3RhcnRBbmdsZSArIGl0ZW0uYW5nbGUgLyAyO1xyXG4gICAgICAgICAgICBpdGVtLmJpc2VjdGluZ1JhZGlhbiA9IGl0ZW0uYmlzZWN0aW5nQW5nbGUgKiByYWRpYW5Vbml0O1xyXG5cclxuICAgICAgICAgICAgaXRlbS5pbnNpZGVSYWRpdXMgPSBjaGFydEluZm9fSW4uaW5zaWRlUmFkaXVzO1xyXG4gICAgICAgICAgICBpdGVtLnNlY3RvclJhZGl1cyA9IGNoYXJ0SW5mb19Jbi5zZWN0b3JSYWRpdXM7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpID09IGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRJdGVtUG9zaXRpb24oaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRJdGVtUG9zaXRpb24oaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpdGVtQXJyYXkucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRzdGFydEFuZ2xlICs9IGl0ZW0uYW5nbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3NldEl0ZW1Qb3NpdGlvbiAoaXRlbSwgc2VsZWN0ZWRGbGFnKSB7XHJcbiAgICAgICAgbGV0IGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBjZW50ZXJYID0gY2hhcnRJbmZvX0luLmNlbnRlclgsXHJcbiAgICAgICAgICAgIGNlbnRlclkgPSBjaGFydEluZm9fSW4uY2VudGVyWSxcclxuICAgICAgICAgICAgbnVtO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWRGbGFnID09IHRydWUpIHtcclxuICAgICAgICAgICAgbnVtID0gU3R5bGVzLlBJRV9TRUxFQ1RPUl9UUkFOU0xBVEUgKiBNYXRoLmNvcyhpdGVtLmJpc2VjdGluZ1JhZGlhbik7XHJcbiAgICAgICAgICAgIGl0ZW0ueCA9IGNlbnRlclggKyBudW07XHJcblxyXG4gICAgICAgICAgICBudW0gPSBTdHlsZXMuUElFX1NFTEVDVE9SX1RSQU5TTEFURSAqIE1hdGguc2luKGl0ZW0uYmlzZWN0aW5nUmFkaWFuKTtcclxuICAgICAgICAgICAgaXRlbS55ID0gY2VudGVyWSArIG51bTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS54ID0gY2VudGVyWDtcclxuICAgICAgICAgICAgaXRlbS55ID0gY2VudGVyWTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9zZXRUd2VlbiAoKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhblVuaXQgPSBDb25zdGFudHMuUkFESUFOX1VOSVQsXHJcbiAgICAgICAgICAgIHR3RW5naW5lID0gdGhpcy5fdHdFbmdpbmUsXHJcbiAgICAgICAgICAgIHR3ZWVuQ2FsbEJhY2tCaW5kID0gdGhpcy5fdHdlZW5DYWxsQmFja0JpbmQsXHJcbiAgICAgICAgICAgIGZyb20sIHRvLCB0d0RhdGEsIHR3QWN0aW9uO1xyXG5cclxuICAgICAgICBmcm9tID0gWzEgKiByYWRpYW5Vbml0XTtcclxuICAgICAgICB0byA9IFszNjAgKiByYWRpYW5Vbml0XTtcclxuXHJcbiAgICAgICAgdHdEYXRhID0gdHdFbmdpbmUuZ2V0VFdEYXRhKCk7XHJcbiAgICAgICAgdHdEYXRhLnNldERhdGEobnVsbCwgZnJvbSwgdG8sIHR3ZWVuQ2FsbEJhY2tCaW5kKTtcclxuXHJcbiAgICAgICAgdHdBY3Rpb24gPSB0d0VuZ2luZS5nZXRUV0FjdGlvbigpO1xyXG4gICAgICAgIHR3QWN0aW9uLnNldERhdGEoW3R3RGF0YV0sIFRXQWxnb3JpdGhtLmxpbmVhciwgMTAwMCk7XHJcblxyXG4gICAgICAgIHR3RW5naW5lLnNldEZpcnN0VFdBY3Rpb24odHdBY3Rpb24pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lciAoY29tbWFuZCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG5cclxuICAgICAgICAgICAgcmVjdCxcclxuICAgICAgICAgICAgcG9zaXRpb24gPSB7IHg6IC0xLCB5OiAtMSB9LFxyXG5cclxuICAgICAgICAgICAgaSwgbGVuLFxyXG5cclxuICAgICAgICAgICAgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb01vdXNlQ2xpY2sgKGUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bpvKDmoIfnm7jlr7nkuo5DYW52YXPnmoTkvY3nva5cclxuICAgICAgICAgICAgcmVjdCA9IG1lLl9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIFV0aWxpdHkud2luZG93VG9DYW52YXMocmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmVjdC50b3AsXHJcbiAgICAgICAgICAgICAgICByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgcmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZS5jbGllbnRZLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgLy/moLnmja7pvKDmoIfkvY3nva7vvIzmib7liLDpvKDmoIfkvY3kuo7lk6rkuKrlr7nosaHkuYvkuIpcclxuICAgICAgICAgICAgaXRlbXMgPSBpdGVtQXJyYXlbMF07XHJcbiAgICAgICAgICAgIGxlbiA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3pvKDmoIfkvY3kuo7lk6rkuKrlr7nosaHkuYvkuIpcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzUG9pbnRJblBhdGgocG9zaXRpb24ueCwgcG9zaXRpb24ueSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9zZXRJdGVtUG9zaXRpb24oaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9zZXRJdGVtUG9zaXRpb24oaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4ID0gaTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3NldEl0ZW1Qb3NpdGlvbihpdGVtc1tjaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3NldEl0ZW1Qb3NpdGlvbihpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRJbmZvX0luLnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5omn6KGMXHJcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gQ29uc3RhbnRzLkFERCAmJiBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWUuX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvTW91c2VDbGljayk7XHJcbiAgICAgICAgICAgIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09IENvbnN0YW50cy5SRU1PVkUgJiYgbWUuX2V2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID09IHRydWUpIHtcclxuICAgICAgICAgICAgbWUuX2NhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvTW91c2VDbGljayk7XHJcbiAgICAgICAgICAgIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc3RhcnRQYWludCAoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFpbnQgKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1lLl9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAxOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fcGFpbnQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uY5Yi25Zu+6KGo5bm25L+d5a2Y57uY5Zu+6KGo6Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3R3RW5naW5lLnN0YXJ0KCk7ICAgICAgICAgICAgICAgICAgLy/lkK/liqjnvJPliqjvvIzku47kuIvkuIDluKflvIDlp4vnvJPliqhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMjpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/nu5jliLbnvJPliqjmlYjmnpxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIOWmguaenOe8k+WKqOayoeaciee7k+adn++8jOWwsee7mOWItlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAg5Y+N5LmL77yM6K6+572u54q25oCB77yM5Zyo5LiL5LiA5YGc5q2i57uY5Yi2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLl90d0VuZ2luZS5uZXh0RnJhbWUoKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fdHdFbmdpbmUuc3RvcCgpOyAgICAgIC8v5YGc5q2i57yT5YqoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLlNURVAzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDM6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLkFERCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuV0FJVElORztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQNDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7ICAgLy/nu5jliLbpgInmi6npoblcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5XQUlUSU5HO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W+queOr+iwg+eUqOiHquW3se+8jOi/m+ihjOe7mOeUu1xyXG4gICAgICAgICAgICBpZiAobWUuX3N0YXR1cyAhPSBTdGF0dXMuU1RPUCkge1xyXG4gICAgICAgICAgICAgICAgbWUuX2FuaW1hdGlvbkZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZShwYWludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6+572u5Yid5aeL54q25oCB77yM5byA5aeL57uY5Yi2XHJcbiAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMTtcclxuICAgICAgICBwYWludCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICog57yT5Yqo5pWI5p6cXHJcbiAgICAgKi9cclxuICAgIF90d2VlbkNhbGxCYWNrICh0YXJnZXQsIHJlc3VsdEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5fbWFza1JhZGlhbiA9IHJlc3VsdEFycmF5WzBdO1xyXG4gICAgfVxyXG5cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFydC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBDaGFydEluZm9CYXNlX0luIGZyb20gJy4uLy4uLy4uL2Jhc2UvaW5mby9DaGFydEluZm9CYXNlX0luLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydEluZm9fSW4gZXh0ZW5kcyBDaGFydEluZm9CYXNlX0luIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLmNlbnRlclggPSAzNTA7ICAgICAgICAgIC8v5ZyG546v5Lit5b+D5L2N572u77ya55u45a+55LqOZGl25bem5LiK6KeSXHJcbiAgICAgICAgdGhpcy5jZW50ZXJZID0gMTUwO1xyXG5cclxuICAgICAgICB0aGlzLmluc2lkZVJhZGl1cyA9IDA7ICAgICAgICAgICAgICAgLy/miYflvaLlhoXljYrlvoRcclxuICAgICAgICB0aGlzLnNlY3RvclJhZGl1cyA9IDEwMDsgICAgICAgICAgIC8v5omH5b2i5Y2K5b6EXHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxJbm5lckZsYWcgPSBmYWxzZTsgICAgICAgLy/moIfnrb7mmL7npLrkvY3nva5cclxuICAgICAgICB0aGlzLnBlcmNlbnREZWNpbWFsRGlnaXRzID0gMjsgIC8v5omH5b2i6KeS5bqm55m+5YiG5q+U5bCP5pWw5L2N5pWwXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5sZWdlbmRUb3AgPSA1MDtcclxuICAgICAgICB0aGlzLmxlZ2VuZExlZnQgPSAyMDtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9TdHlsZXMuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9VdGlsaXR5LmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy9QYWludGVy5Lit5peg5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2hhcnQ7ICAgICAgICAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eDsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2U7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQmFrO1xyXG4gICAgICAgIHRoaXMuX2N0eEJhazsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2VCYWs7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luOyAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5OyAgICAgICAgICAgICAgICAgLy/lrZjlgqjmiYflvaLngrnnmoTmlbDnu4RcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleDsgICAgIC8v6KKr6YCJ5oup55qE5omH5b2iXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0b3JSb3dIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdG9yUmVjdFdpZHRoO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdG9yUmVjdEhlaWdodDtcclxuICAgICAgICB0aGlzLl9zZWxlY3RvclBvc2l0aW9uWDtcclxuICAgICAgICB0aGlzLl9zZWxlY3RvclBvc2l0aW9uT2Zmc2V0WTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWFza1JhZGlhbjsgICAgICAgICAvL+e8k+WKqOaViOaenOebuOWFs1xyXG4gICAgICAgIHRoaXMuX21hc2tSYWRpdXM7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2V0Q2hhcnQgKGNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5fY2hhcnQgPSBjaGFydDtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2hhcnQuX2NhbnZhcztcclxuICAgICAgICB0aGlzLl9jdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQmFrID0gY2hhcnQuX2NhbnZhc0JhaztcclxuICAgICAgICB0aGlzLl9jdHhCYWsgPSB0aGlzLl9jYW52YXNCYWsuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luID0gY2hhcnQuY2hhcnRJbmZvX0luO1xyXG5cclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fY2hhcnRJbmZvX0luLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gY2hhcnQuX2l0ZW1BcnJheTtcclxuXHJcbiAgICAgICAgLy/nvJPliqjmlYjmnpznm7jlhbNcclxuICAgICAgICB0aGlzLl9tYXNrUmFkaWFuID0gY2hhcnQuX21hc2tSYWRpYW47XHJcbiAgICAgICAgdGhpcy5fbWFza1JhZGl1cyA9IGNoYXJ0Ll9tYXNrUmFkaXVzO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGFpbnQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGN0eEJhayA9IHRoaXMuX2N0eEJhayxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY2hhcnQuX3N0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMTogICAgICAgICAvL+e7mOWItuWbvuihqOW5tue8k+WtmENhbnZhc+e7mOWbvuihqOmdolxyXG5cclxuICAgICAgICAgICAgICAgIC8v5riF56m655S75biDXHJcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY3R4QmFrLmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WcqF9jdHjkuIrnu5jliLblm77ooajlm7rlrprnmoTlhoXlrrlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50VGl0bGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGVnZW5kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nvJPlrZjmraTml7bnmoRfY3R457uY5Zu+6KGo6Z2i77yI5YWo5bC65a+477yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNTdXJmYWNlID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WcqF9jdHhCYWvkuIrnu5jliLbmiYflvaLlkozmoIfnrb5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50UGllKGN0eEJhayk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExhYmVsKGN0eEJhayk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMjogICAgICAgICAvL+e7mOWItue8k+WKqOaViOaenFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludE1hc2tJbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDM6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRTZWxlY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQNDogICAgICAgICAvL+e7mOWItumAieaLqemhuVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5oGi5aSN57uY5Zu+6KGo6Z2i77yM5bCG5Zyo5q2k5LmL5LiK57uY5Yi25ZyG546vXHJcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuX2NhbnZhc1N1cmZhY2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5ZyoY3R45LiK57uY5Yi25omH5b2i5ZKM5qCH562+XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFBpZShjdHgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRMYWJlbChjdHgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRTZWxlY3RvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIF9wYWludFRpdGxlICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIGN0eC5mb250ID0gU3R5bGVzLlRJVExFX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0xFRlQ7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9UT1A7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGNoYXJ0SW5mb19Jbi50aXRsZSwgY2hhcnRJbmZvX0luLnRpdGxlTGVmdCwgY2hhcnRJbmZvX0luLnRpdGxlVG9wKTtcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3BhaW50TGVnZW5kICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGl0ZW1BcnJheSA9IHRoaXMuX2l0ZW1BcnJheSxcclxuICAgICAgICAgICAgY29sb3JzID0gY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgbGVnZW5kV2lkdGgsIHZhbHVlV2lkdGgsXHJcbiAgICAgICAgICAgIGRlY2ltYWxEaWdpdHMsXHJcbiAgICAgICAgICAgIHBlcmNlbnRXaWR0aCxcclxuICAgICAgICAgICAgaXRlbXMsIGl0ZW0sXHJcbiAgICAgICAgICAgIHN0ciwgbnVtLFxyXG4gICAgICAgICAgICBnYXBILCBnYXBWLFxyXG4gICAgICAgICAgICBoLFxyXG4gICAgICAgICAgICB4MSwgeDIsIHgzLCB4NCwgeTEsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7mloflrZfmoLflvI9cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5MRUdFTkRfRk9OVDtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuXHJcbiAgICAgICAgLy/orqHnrpflkITkuKropoHntKDnmoTmnIDlpKfplb/luqZcclxuICAgICAgICBsZWdlbmRXaWR0aCA9IHZhbHVlV2lkdGggPSAwO1xyXG4gICAgICAgIGl0ZW1zID0gaXRlbUFycmF5WzBdO1xyXG4gICAgICAgIGxlbiA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xyXG5cclxuICAgICAgICAgICAgLy/mr5TovoPlm77kvovmloflrZfnmoTplb/luqZcclxuICAgICAgICAgICAgc3RyID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICBudW0gPSBVdGlsaXR5LmdldFRleHRXaWR0aChjdHgsIHN0cik7XHJcbiAgICAgICAgICAgIGlmIChudW0gPiBsZWdlbmRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kV2lkdGggPSBudW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5q+U6L6D5pWw5YC85paH5a2X55qE6ZW/5bqmXHJcbiAgICAgICAgICAgIHN0ciA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgIG51bSA9IFV0aWxpdHkuZ2V0VGV4dFdpZHRoKGN0eCwgc3RyKTtcclxuICAgICAgICAgICAgaWYgKG51bSA+IHZhbHVlV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlV2lkdGggPSBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlY2ltYWxEaWdpdHMgPSBjaGFydEluZm9fSW4ucGVyY2VudERlY2ltYWxEaWdpdHM7XHJcbiAgICAgICAgbnVtID0gTWF0aC5wb3coMTAsIGRlY2ltYWxEaWdpdHMpO1xyXG4gICAgICAgIHN0ciA9IG51bS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDEpICAvLyBzdHIgPT0gJzEnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHIgPSAnOTkgJSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgc3RyID0gJzk5LicgKyBzdHIgKyAnICUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwZXJjZW50V2lkdGggPSBVdGlsaXR5LmdldFRleHRXaWR0aChjdHgsIHN0cik7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5paH5a2X6auY5bqmXHJcbiAgICAgICAgaCA9IFV0aWxpdHkuZ2V0VGV4dEhlaWdodChjdHgpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+WQhOS4quWFg+e0oOS5i+mXtOeahOaoquWQkeOAgee6teWQkemXtOmalFxyXG4gICAgICAgIGdhcEggPSBoO1xyXG4gICAgICAgIGdhcFYgPSBoICogMS41O1xyXG5cclxuICAgICAgICAvL+iuoeeul+WQhOS4quimgee0oOeahHjlnZDmoIdcclxuICAgICAgICB4MSA9IGNoYXJ0SW5mb19Jbi5sZWdlbmRMZWZ0OyAgICAgICAgICAgICAgICAgICAgICAgIC8v6Imy5Z2XXHJcbiAgICAgICAgeDIgPSB4MSArIGggKyBnYXBIOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+5L6L5paH5a2XXHJcbiAgICAgICAgeDMgPSB4MiArIGxlZ2VuZFdpZHRoICsgZ2FwSCArIHBlcmNlbnRXaWR0aDsgIC8v55m+5YiG5q+U77yI5Y+z5a+56b2Q77yJXHJcbiAgICAgICAgeDQgPSB4MyArIGdhcEggKyB2YWx1ZVdpZHRoOyAgICAgICAgICAgICAgICAgIC8v5pWw5YC877yI5Y+z5a+56b2Q77yJXHJcblxyXG4gICAgICAgIC8v6K6+5a6a5Yid5aeLeeWdkOagh1xyXG4gICAgICAgIHkxID0gY2hhcnRJbmZvX0luLmxlZ2VuZFRvcDtcclxuXHJcbiAgICAgICAgLy/kv53lrZjnm7jlhbPkv6Hmga9cclxuICAgICAgICB0aGlzLl9zZWxlY3RvclJlY3RXaWR0aCA9IE1hdGguY2VpbCh4NCAtIHgxICsgaCk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0b3JSZWN0SGVpZ2h0ID0gTWF0aC5jZWlsKGdhcFYpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdG9yUm93SGVpZ2h0ID0gZ2FwVjtcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0b3JQb3NpdGlvblggPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKHgxIC0gaCAvIDIpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdG9yUG9zaXRpb25PZmZzZXRZID0gKGdhcFYgLSBoKSAvIDI7XHJcblxyXG4gICAgICAgIC8v5L6d5qyh57uY5Yi25Zu+5L6L6Imy5Z2X44CB5paH5a2X44CB55m+5YiG546H44CB5pWw5YC8XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi26Imy5Z2XXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh4MSwgeTEsIGgsIGgpO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLblm77kvovmloflrZdcclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0xFRlQ7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBTdHlsZXMuRk9OVF9GSUxMX0NPTE9SO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoaXRlbS5uYW1lLCB4MiwgeTEpO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbnmb7liIbmr5RcclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX1JJR0hUO1xyXG4gICAgICAgICAgICBudW0gPSBpdGVtLnBlcmNlbnQgKiAxMDAwMCAvIDEwMDtcclxuICAgICAgICAgICAgc3RyID0gbnVtLnRvRml4ZWQoZGVjaW1hbERpZ2l0cykgKyAnICUnO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCB4MywgeTEpO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbmlbDlgLxcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGl0ZW0udmFsdWUsIHg0LCB5MSk7XHJcblxyXG4gICAgICAgICAgICB5MSArPSBnYXBWO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRQaWUgKGN0eCkge1xyXG4gICAgICAgIGxldCBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGl0ZW1zLCBpdGVtLFxyXG4gICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/nu5jliLblnIbnjq9cclxuICAgICAgICBpdGVtcyA9IGl0ZW1BcnJheVswXTtcclxuICAgICAgICBsZW4gPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL+WPluW+l+aJh+W9ouWvueixoVxyXG4gICAgICAgICAgICBpdGVtID0gaXRlbXNbaV07XHJcblxyXG4gICAgICAgICAgICAvL+iuvue9ruWhq+WFheminOiJslxyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gaXRlbS5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAvL+W5s+enu+WIsOaJh+W9ouS4reW/g1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKGl0ZW0ueCwgaXRlbS55KTtcclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u5YGP56e76KeS5bqm6L+b6KGM5peL6L2sXHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoaXRlbS5zdGFydFJhZGlhbik7XHJcblxyXG4gICAgICAgICAgICAvL+aehOW7uui3r+W+hFxyXG4gICAgICAgICAgICByYWRpdXMgPSBpdGVtLmluc2lkZVJhZGl1cyArIGl0ZW0uc2VjdG9yUmFkaXVzO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmMoMCwgMCwgcmFkaXVzLCAwLCBpdGVtLnJhZGlhbik7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmluc2lkZVJhZGl1cyA9PSAwKSAgICAgICAgLy/moLnmja7lhoXljYrlvoTmmK/lkKbkuLow5YiG5Yir5aSE55CGXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKGl0ZW0ucmFkaWFuKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oaXRlbS5pbnNpZGVSYWRpdXMsIDApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSgtaXRlbS5yYWRpYW4pO1xyXG4gICAgICAgICAgICAgICAgY3R4LmFyYygwLCAwLCBpdGVtLmluc2lkZVJhZGl1cywgaXRlbS5yYWRpYW4sIDAsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgIC8v5aGr5YWF6aKc6ImyXHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3BhaW50TGFiZWwgKGN0eCkge1xyXG4gICAgICAgIGxldCBsYWJlbElubmVyRmxhZyA9IHRoaXMuX2NoYXJ0SW5mb19Jbi5sYWJlbElubmVyRmxhZyxcclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtcywgaXRlbSxcclxuICAgICAgICAgICAgcjEsIHIyLFxyXG4gICAgICAgICAgICB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzLFxyXG4gICAgICAgICAgICBoLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8vKDEp6K6+572u5YWx5ZCM5qC35byPXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuTEFCRUxfRk9OVDtcclxuXHJcbiAgICAgICAgLy8oMinojrflj5bmloflrZfpq5jluqZcclxuICAgICAgICBoID0gVXRpbGl0eS5nZXRUZXh0SGVpZ2h0KGN0eCk7XHJcblxyXG4gICAgICAgIC8vKDMp57uY5Yi25qCH562+77ya5qC55o2u5qCH562+5piv5ZCm57uY5Yi25Zyo5omH5b2i5YaF6YOo5YiG5Yir6L+b6KGM5aSE55CGXHJcbiAgICAgICAgaWYgKGxhYmVsSW5uZXJGbGFnID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy/orr7nva7mloflrZflr7npvZDmlrnlvI9cclxuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9NSURETEU7XHJcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9DRU5URVI7XHJcblxyXG4gICAgICAgICAgICAvL+iuvue9ruWhq+WFheminOiJsijnmb3oibIpXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBTdHlsZXMuUElFX0xBQkVMX0lOTkVSX0ZPTlRfQ09MT1I7XHJcblxyXG4gICAgICAgICAgICAvL+W+queOr+e7mOWItuagh+etvlxyXG4gICAgICAgICAgICBpdGVtcyA9IGl0ZW1BcnJheVswXTtcclxuICAgICAgICAgICAgbGVuID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lj5blvpfmiYflvaLlr7nosaFcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+W5s+enu+WIsOaJh+W9ouS4reW/g1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShpdGVtLngsIGl0ZW0ueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orqHnrpfmloflrZfnu5jliLbkvY3nva5cclxuICAgICAgICAgICAgICAgIHIxID0gaXRlbS5pbnNpZGVSYWRpdXMgKyBpdGVtLnNlY3RvclJhZGl1cyAvIDI7XHJcbiAgICAgICAgICAgICAgICB4MSA9IHIxICogTWF0aC5jb3MoaXRlbS5iaXNlY3RpbmdSYWRpYW4pO1xyXG4gICAgICAgICAgICAgICAgeTEgPSByMSAqIE1hdGguc2luKGl0ZW0uYmlzZWN0aW5nUmFkaWFuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoaXRlbS5uYW1lLCB4MSwgeTEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8v5b6q546v57uY5Yi25qCH562+5Lul5Y+K5byV5a+857q/XHJcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbUFycmF5WzBdO1xyXG4gICAgICAgICAgICBsZW4gPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WPluW+l+aJh+W9ouWvueixoVxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6+572u5o+P6L655ZKM5aGr5YWF6aKc6ImyXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBpdGVtLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBpdGVtLmJhY2tncm91bmRDb2xvcjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy/orqHnrpflvJXlr7znur/liY3kuKTkuKrngrnlnZDmoIdcclxuICAgICAgICAgICAgICAgIHIxID0gaXRlbS5pbnNpZGVSYWRpdXMgKyBpdGVtLnNlY3RvclJhZGl1cztcclxuICAgICAgICAgICAgICAgIHIyID0gcjEgKyBTdHlsZXMuUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkU7XHJcblxyXG4gICAgICAgICAgICAgICAgeDEgPSByMSAqIE1hdGguY29zKGl0ZW0uYmlzZWN0aW5nUmFkaWFuKTtcclxuICAgICAgICAgICAgICAgIHkxID0gcjEgKiBNYXRoLnNpbihpdGVtLmJpc2VjdGluZ1JhZGlhbik7XHJcblxyXG4gICAgICAgICAgICAgICAgeDIgPSByMiAqIE1hdGguY29zKGl0ZW0uYmlzZWN0aW5nUmFkaWFuKTtcclxuICAgICAgICAgICAgICAgIHkyID0gcjIgKiBNYXRoLnNpbihpdGVtLmJpc2VjdGluZ1JhZGlhbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orqHnrpfnrKzkuInkuKrngrnlnZDmoIdcclxuICAgICAgICAgICAgICAgIC8v5LiL6Z2i6YC76L6R5Lit55qEMS4w5piv5LiA5Liq5YOP57Sg55qE5qaC5b+144CC5piv5LiA56eN57KX57OZ55qE5q+U6L6D77yM5L2G5piv6Laz5aSf55SoXHJcbiAgICAgICAgICAgICAgICB5MyA9IHkyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh4MiAtIHgxID4gMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDMgPSB4MiArIFN0eWxlcy5QSUVfTEFCRUxfR1VJREVfTElORTJfU0laRTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHgxIC0geDIgPiAxLjApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeDMgPSB4MiAtIFN0eWxlcy5QSUVfTEFCRUxfR1VJREVfTElORTJfU0laRTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHgzID0geDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHkxIC0geTIpIDwgMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDMgPSB4MjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+W5s+enu+WIsOaJh+W9ouS4reW/g1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShpdGVtLngsIGl0ZW0ueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nu5jliLblvJXlr7znur9cclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeDMsIHkzKTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7mOWItuagh+etvlxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uYmlzZWN0aW5nQW5nbGUgPiAtOTAgJiYgaXRlbS5iaXNlY3RpbmdBbmdsZSA8IDkwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9NSURETEU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0xFRlQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHgxID0geDMgKyBTdHlsZXMuUElFX0xBQkVMX09GRlNFVDtcclxuICAgICAgICAgICAgICAgICAgICB5MSA9IHkzO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5iaXNlY3RpbmdBbmdsZSA+IDkwICYmIGl0ZW0uYmlzZWN0aW5nQW5nbGUgPCAyNzApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX01JRERMRTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fUklHSFQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHgxID0geDMgLSBTdHlsZXMuUElFX0xBQkVMX09GRlNFVDtcclxuICAgICAgICAgICAgICAgICAgICB5MSA9IHkzO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5iaXNlY3RpbmdBbmdsZSA9PSAtOTApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX0JPVFRPTTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fQ0VOVEVSO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB4MSA9IHgzO1xyXG4gICAgICAgICAgICAgICAgICAgIHkxID0geTMgLSBTdHlsZXMuUElFX0xBQkVMX09GRlNFVDtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uYmlzZWN0aW5nQW5nbGUgPT0gOTApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fQ0VOVEVSO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB4MSA9IHgzO1xyXG4gICAgICAgICAgICAgICAgICAgIHkxID0geTMgKyBTdHlsZXMuUElFX0xBQkVMX09GRlNFVDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoaXRlbS5uYW1lLCB4MSwgeTEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50TWFza0ltYWdlICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjdHhCYWsgPSB0aGlzLl9jdHhCYWssXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY2VudGVyWCA9IGNoYXJ0SW5mb19Jbi5jZW50ZXJYLFxyXG4gICAgICAgICAgICBjZW50ZXJZID0gY2hhcnRJbmZvX0luLmNlbnRlclksXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBtYXNrUmFkaXVzID0gdGhpcy5fbWFza1JhZGl1cyxcclxuICAgICAgICAgICAgbWFza1JhZGlhbiA9IHRoaXMuX21hc2tSYWRpYW47XHJcblxyXG4gICAgICAgIC8v5oGi5aSN57uY5Zu+6KGo6Z2i77yM5bCG5Zyo5q2k5LmL5LiK57uY5Yi25ZyG546vXHJcbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLl9jYW52YXNTdXJmYWNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/mnoTlu7rliarliIfot6/lvoRcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCBtYXNrUmFkaXVzLCAtTWF0aC5QSSAvIDIsICgtTWF0aC5QSSAvIDIgKyBtYXNrUmFkaWFuKSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIC8v5Ymq5YiHXHJcbiAgICAgICAgY3R4LmNsaXAoKTtcclxuXHJcbiAgICAgICAgLy/lsIZfY3R4QmFr55qE5YaF5a6557uY5Yi25Yiw5Ymq5YiH5Yy65Z+fXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShjdHhCYWsuY2FudmFzLCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRTZWxlY3RvciAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXgsXHJcbiAgICAgICAgICAgIGxlZ2VuZFRvcCA9IHRoaXMuX2NoYXJ0SW5mb19Jbi5sZWdlbmRUb3AsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yUG9zaXRpb25YID0gdGhpcy5fc2VsZWN0b3JQb3NpdGlvblgsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yUG9zaXRpb25PZmZzZXRZID0gdGhpcy5fc2VsZWN0b3JQb3NpdGlvbk9mZnNldFksXHJcbiAgICAgICAgICAgIHNlbGVjdG9yUmVjdFdpZHRoID0gdGhpcy5fc2VsZWN0b3JSZWN0V2lkdGgsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yUmVjdEhlaWdodCA9IHRoaXMuX3NlbGVjdG9yUmVjdEhlaWdodCxcclxuICAgICAgICAgICAgc2VsZWN0b3JSb3dIZWlnaHQgPSB0aGlzLl9zZWxlY3RvclJvd0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IFN0eWxlcy5QSUVfU0VMRUNUT1JfTElORV9XSURUSDtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gU3R5bGVzLlBJRV9TRUxFQ1RPUl9MSU5FX0NPTE9SO1xyXG5cclxuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3Qoc2VsZWN0b3JQb3NpdGlvblgsXHJcbiAgICAgICAgICAgICAgICBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGxlZ2VuZFRvcCArIHNlbGVjdG9yUm93SGVpZ2h0ICogc2VsZWN0ZWRJbmRleCAtIHNlbGVjdG9yUG9zaXRpb25PZmZzZXRZKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yUmVjdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JSZWN0SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAg5Yip55So6Zet5YyF5ZKM56uL5Y2z5omn6KGM5Ye95pWw5Yib5bu65Y2V5L6LXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5QYWludGVyLmdldEluc3RhbmNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpbnN0YW5jZTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgUGFpbnRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG59KSgpOyIsImltcG9ydCBQYXJ0QmFzZSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0L0NoYXJ0QmFzZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVJdGVtIGV4dGVuZHMgUGFydEJhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLmluZGV4OyAgICAgICAgICAgICAgICAgICAgLy/miYflvaLlr7nosaHlr7nlupTnmoTmlbDmja7pobnlnKjmlbDmja7ns7vliJfkuK3nmoTntKLlvJUgICAgXHJcbiAgICAgICAgdGhpcy52YWx1ZTsgICAgICAgICAgICAgICAgICAgIC8v5omH5b2i5a+56LGh5a+55bqU55qE5pWw5o2u6aG55Lit55qE5YC8XHJcblxyXG4gICAgICAgIHRoaXMucGVyY2VudDsgICAgICAgICAgICAgICAgIC8vdmFsdWXljaDmiYDmnInppbzlnZfmgLvlgLznmoTnmb7liIbmr5RcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0b3JSYWRpdXM7ICAgICAgICAgLy/miYflvaLljYrlvoRcclxuICAgICAgICB0aGlzLmluc2lkZVJhZGl1czsgICAgICAgICAvL+aJh+W9ouWGheWchuWNiuW+hFxyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0QW5nbGU7ICAgICAgICAgICAgLy/miYflvaLnmoTotbflp4vop5LluqZcclxuICAgICAgICB0aGlzLnN0YXJ0UmFkaWFuOyAgICAgICAgICAvL+aJh+W9oueahOi1t+Wni+W8p+W6pu+8iOinkuW6pui9rOW8p+W6pu+8iVxyXG5cclxuICAgICAgICB0aGlzLmFuZ2xlOyAgICAgICAgICAgICAgICAgLy/miYflvaLnmoTop5LluqZcclxuICAgICAgICB0aGlzLnJhZGlhbjsgICAgICAgICAgICAgICAgLy/miYflvaLnmoTlvKfluqbvvIjop5LluqbovazlvKfluqbvvIlcclxuXHJcbiAgICAgICAgdGhpcy5iaXNlY3RpbmdBbmdsZTsgICAgICAgICAgICAgLy/miYflvaLnmoTop5LliIbnur/op5LluqZcclxuICAgICAgICB0aGlzLmJpc2VjdGluZ1JhZGlhbjsgICAgICAgICAgIC8v5omH5b2i55qE6KeS5YiG57q/5byn5bqm77yI6KeS5bqm6L2s5byn5bqm77yJXHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yOyAgICAgICAgLy/miYflvaLpopzoibJcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGlzUG9pbnRJblBhdGggKHgsIHkpIHtcclxuICAgICAgICBsZXQgcnRuID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGRpZmZYLCBkaWZmWSxcclxuICAgICAgICAgICAgcmFkaXVzLCBhbmdsZTtcclxuXHJcblxyXG4gICAgICAgIC8v6K6h566X5oyH5a6a54K55ZKM5pys5omH5b2i5Z2Q5qCH5LmL6Ze055qE5qiq5ZCR77yM57q15ZCR6Led56a7XHJcbiAgICAgICAgZGlmZlggPSB4IC0gdGhpcy54O1xyXG4gICAgICAgIGRpZmZZID0geSAtIHRoaXMueTtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmjIflrprngrnlkozmnKzmiYflvaLlnZDmoIfkuYvpl7TnmoTot53nprtcclxuICAgICAgICByYWRpdXMgPSBNYXRoLnNxcnQoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+aMh+WumueCueWSjOacrOaJh+W9ouWdkOagh+i/nue6v+S4jnjovbTnmoTlpLnop5JcclxuICAgICAgICBhbmdsZSA9IE1hdGguYXRhbjIoZGlmZlksIGRpZmZYKSAqIDE4MCAvIE1hdGguUEk7XHJcblxyXG4gICAgICAgIC8v5qCh5q2j56ys5Zub6LGh6ZmQ6KeS5bqmXHJcbiAgICAgICAgaWYgKGFuZ2xlID4gLTE4MCAmJiBhbmdsZSA8IC05MCkge1xyXG4gICAgICAgICAgICBhbmdsZSArPSAzNjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIpOaWreaMh+WumueCueS4juacrOaJh+W9oueahOWFs+ezu1xyXG4gICAgICAgIGlmIChyYWRpdXMgPj0gdGhpcy5pbnNpZGVSYWRpdXMgJiZcclxuICAgICAgICAgICAgcmFkaXVzIDw9ICh0aGlzLmluc2lkZVJhZGl1cyArIHRoaXMuc2VjdG9yUmFkaXVzKSAmJlxyXG4gICAgICAgICAgICBhbmdsZSA+PSB0aGlzLnN0YXJ0QW5nbGUgJiZcclxuICAgICAgICAgICAgYW5nbGUgPCAodGhpcy5zdGFydEFuZ2xlICsgdGhpcy5hbmdsZSkpIHtcclxuICAgICAgICAgICAgcnRuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBydG47XHJcbiAgICB9XHJcblxyXG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOWumuS5iXdpbmRvd+WKqOeUu+W+queOr+aOp+WItuWHveaVsO+8iOWIqeeUqOeri+WNs+aJp+ihjOWHveaVsO+8iVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG53aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbiAoZnVuYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmMsIDE2KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbn0pKCk7XHJcbiIsImNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIERJUlRZOiAnLScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WumuS5ieaVsOaNruaXtu+8jOeUqOadpeihqOekuuayoeacieaVsOaNru+8jOaIluiEj+aVsOaNru+8iOaXoOaViOaVsOaNru+8iVxyXG4gICAgSEFMRl9QSVhFTDogMC41LCAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y2K5Liq5YOP57SgXHJcblxyXG4gICAgQ0xPU0VfVE9fWkVSTzogMC4wMDAwMDAxLCAgICAgICAgICAgICAgIC8v5rWu54K55pWw6K6h566X5Lya5pyJ57K+5bqm6K+v5beu77yM6K+l5bi46YeP55So5LqO5Yik5pat5Lik5Liq5rWu54K55pWw5piv5ZCm55u4562J44CC5aaC5p6c5Lik5Liq5rWu54K55pWw55qE5beu5YC85bCP5LqO6K+l5pWw77yM5YiZ6K6k5Li655u4562J44CCXHJcblxyXG4gICAgVEVYVF9CQVNFX0xJTkVfTUlERExFOiAnbWlkZGxlJywgICAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+e6teWQkeaOkuWIl+WxnuaAp1xyXG4gICAgVEVYVF9CQVNFX0xJTkVfVE9QOiAndG9wJyxcclxuICAgIFRFWFRfQkFTRV9MSU5FX0JPVFRPTTogJ2JvdHRvbScsXHJcblxyXG4gICAgVEVYVF9BTElHTl9DRU5URVI6ICdjZW50ZXInLCAgICAgICAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+aoquWQkeaOkuWIl+WxnuaAp1xyXG4gICAgVEVYVF9BTElHTl9MRUZUOiAnbGVmdCcsXHJcbiAgICBURVhUX0FMSUdOX1JJR0hUOiAncmlnaHQnLFxyXG5cclxuICAgIFRFWFRfQkFTRV9MSU5FX0lERU9HUkFQSElDOiAnaWRlb2dyYXBoaWMnLCAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+Wfuue6v+WxnuaAp1xyXG5cclxuICAgIEFERDogJ2FkZCcsXHJcbiAgICBSRU1PVkU6ICdyZW1vdmUnLFxyXG5cclxuICAgIFhfQVhJUzogJ3gtYXhpcycsICAgICAgICAgICAgICAgLy/ku6PooajmmK946L206L+Y5piveei9tFxyXG4gICAgWV9BWElTOiAneS1heGlzJyxcclxuXHJcbiAgICBSQURJQU5fVU5JVDogTWF0aC5QSSAvIDE4MCAgICAgIC8v5byn5bqm5Y2V5L2NXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHM7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFBvb2wge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsYXp6LCBwYXJhKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2NsYXNzID0gY2xheno7ICAgLy/nsbvlkI1cclxuICAgICAgICB0aGlzLl9wYXJhID0gcGFyYTsgICAgICAvL+WunuS+i+WMluWvueixoeaXtueahOWPguaVsFxyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDsgICAgICAgIC8v5a+56LGh5rGg5Lit5a+56LGh55qE5Liq5pWwXHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IFtdOyAgICAgICAgLy/lr7nosaHmsaBcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBnZXRPYmogKCkge1xyXG4gICAgICAgIGxldCBwb29sID0gdGhpcy5fcG9vbCxcclxuICAgICAgICAgICAgbGVuLFxyXG4gICAgICAgICAgICBvYmo7XHJcblxyXG4gICAgICAgIC8v5aaC5p6c5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWw5aSn5LqO5oiW562J5LqO5rGg5Lit5bey5pyJ5a+56LGh5Liq5pWw77yMXHJcbiAgICAgICAgLy/liJnmlrDnlJ/miJDkuIDkuKrlr7nosaHvvJvlkKbliJnku47msaDkuK3nm7TmjqXlj5blvpflr7nosaFcclxuICAgICAgICBpZiAodGhpcy5fY291bnQgPj0gcG9vbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgb2JqID0gbmV3IHRoaXMuX2NsYXNzKHRoaXMuX3BhcmEpO1xyXG5cclxuICAgICAgICAgICAgbGVuID0gcG9vbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHBvb2xbbGVuXSA9IG9iajtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0gcG9vbFt0aGlzLl9jb3VudF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iusOW9leW9k+WJjeW3suS9v+eUqOeahOWvueixoeS4quaVsFxyXG4gICAgICAgIHRoaXMuX2NvdW50Kys7XHJcblxyXG4gICAgICAgIC8v6L+U5Zue5a+56LGhXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAqIOW9k+WJjeW3suS9v+eUqOeahOWvueixoeS4quaVsOa4hembtlxyXG4gICAgKiDov5nmoLfvvIzlvZPlh73mlbBnZXRPYmooKeiiq+iwg+eUqOeahOaXtuWAme+8jOaxoOS4reaJgOacieWvueixoemDveWPr+S9v+eUqFxyXG4gICAgKi9cclxuICAgIHJlbGVhc2VBbGwgKCkge1xyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbn0iLCJjb25zdCBTdGF0dXMgPSB7XHJcbiAgICBcclxuICAgIFNURVAxOiAnc3RlcDEnLFxyXG4gICAgU1RFUDI6ICdzdGVwMicsXHJcbiAgICBTVEVQMzogJ3N0ZXAzJyxcclxuICAgIFNURVA0OiAnc3RlcDQnLFxyXG4gICAgU1RFUDU6ICdzdGVwNScsXHJcbiAgICBXQUlUSU5HOiAnd2FpdGluZycsXHJcbiAgICBTVE9QOiAnc3RvcCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1czsiLCJjb25zdCBTdHlsZXMgPSB7XHJcbiAgICBcclxuICAgIC8v5YWx5ZCM6YOo5YiGXHJcbiAgICBUSVRMRV9GT05UOiAnMTZweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgICAvL+agh+mimOWtl+S9kyAgICAgICAgXHJcbiAgICBMRUdFTkRfRk9OVDogJzE0cHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAgICAvL+WbvuS+i+Wtl+S9kyAgXHJcbiAgICBMQUJFTF9GT05UOiAnMTBweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgICAvL+agh+etvuWtl+S9kyAgXHJcbiAgICBBWElTX05BTUVfRk9OVDogJzE0cHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAvL+i9tOWQjeensOWtl+S9kyAgXHJcbiAgICBGT05UX0ZJTExfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAgICAgICAvL+m7mOiupOWtl+S9k+Whq+WFheminOiJslxyXG4gICAgQVhJU19MSU5FX1dJRFRIOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/ovbTnur/nmoTnur/lrr1cclxuICAgIEFYSVNfTElORV9DT0xPUjogJyMzMzMzMzMnLCAgICAgICAgICAgICAgICAgIC8v6L2057q/6aKc6ImyXHJcbiAgICBBWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOiA1LCAgICAgICAgICAgICAgICAvL+WIu+W6pue6v+eahOmVv+W6plxyXG4gICAgR1JJRF9MSU5FX1dJRFRIOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/nmoTnur/lrr1cclxuICAgIEdSSURfTElORV9DT0xPUjogJyNCQkNDREQnLCAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/6aKc6ImyXHJcbiAgICBHUklEX0xJTkVfREFTSDogWzUsIDVdLCAgICAgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+eCueeahOmXtOmalFxyXG4gICAgWEFYSVNfTEFCRUxfT0ZGU0VUOiAxNiwgICAgICAgICAgICAgICAgICAgICAgLy946L205qCH562+5paH5a2X5Lit5b+D54K55YiweOi9tOe6v+eahOi3neemu1xyXG4gICAgWEFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEU6IDE2LCAgICAgICAgICAgLy946L205qCH562+5peL6L2s5pe277yM5paH5a2X5Lit5b+D54K55YiweOi9tOe6v+eahOi3neemu1xyXG4gICAgWUFYSVNfTEFCRUxfT0ZGU0VUOiAxNiwgICAgICAgICAgICAgICAgICAgICAgLy956L205qCH562+5paH5a2X5Lit5b+D54K55Yiweei9tOe6v+eahOi3neemu1xyXG4gICAgWUFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEU6IDE2LCAgICAgICAgICAgLy956L205qCH562+5peL6L2s5pe277yM5paH5a2X5Lit5b+D54K55Yiweei9tOe6v+eahOi3neemu1xyXG4gICAgTEVHRU5EX1NIQVBFX1RFWFRfR0FQOiA1LCAgICAgICAgICAgICAgICAgICAgLy/lm77kvovkuK3vvIzoibLlnZflkozmloflrZfnmoTpl7TpmpRcclxuICAgIExFR0VORF9HQVA6IDE1LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+5L6L5qiq5ZCR5o6S5YiX5pe277yM5Zu+5L6L5LmL6Ze055qE6Ze06ZqUXHJcbiAgICBUSVBfTE9DQVRJT05fT0ZGU0VUOiAyMCwgICAgICAgICAgICAgICAgICAgICAvL+WumuS9jVRpcOS9jee9ruaXtu+8jOebuOWvuem8oOagh+S9jee9rueahOWBj+enu+mHj1xyXG5cclxuXHJcbiAgICAvL+awlOazoeWbvlxyXG4gICAgQlVCQkxFX0FMUEhBOiAwLjcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rCU5rOh55qE6YCP5piO5bqmXHJcblxyXG5cclxuICAgIC8v5p+x54q25Zu+XHJcbiAgICBDT0xVTU5fU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgLy/nlKjkuo7moYbpgInpobnnm67nmoTmlrnmoYbnmoTovrnmoYbnur/nur/lrr1cclxuICAgIENPTFVNTl9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0MyMzUzMScsICAgICAvL+eUqOS6juahhumAiemhueebrueahOaWueahhueahOi+ueahhue6v+minOiJslxyXG5cclxuXHJcbiAgICAvL+aKmOe6v+WbvlxyXG4gICAgTElORV9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAgICAgIC8v5oqY57q/55qE57q/5a69XHJcbiAgICBMSU5FX0FSRUFfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAgICAgLy/nu5jliLbpnaLnp6/lm77ml7bnmoTpgI/mmI7luqZcclxuICAgIExJTkVfTUFSS1BPSU5UX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAvL+agh+iusOeCueeahOe6v+WuvVxyXG4gICAgTElORV9NQVJLUE9JTlRfUkFESVVTOiAyLCAgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K555qE5ZyG5Y2K5b6EXHJcbiAgICBMSU5FX01BUktQT0lOVF9CQUtfQ09MT1I6ICcjRjNGM0YzJywgICAgICAgLy/moIforrDngrnnmoTog4zmma/popzoibJcclxuICAgIExJTkVfU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAvL+eUqOS6juagh+W/l+mAieaLqemhueeahOe6v+auteeahOe6v+WuvVxyXG4gICAgTElORV9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0MyMzUzMScsICAgICAgIC8v55So5LqO5qCH5b+X6YCJ5oup6aG555qE57q/5q6155qE6aKc6ImyXHJcblxyXG5cclxuICAgIC8v6aW85Zu+XHJcbiAgICBQSUVfTEFCRUxfSU5ORVJfRk9OVF9DT0xPUjogJyNGRkZGRkYnLCAgICAgLy/lvZPmoIfnrb7mloflrZflnKjppbzlhoXmmL7npLrml7bvvIzmloflrZfnmoTpopzoibJcclxuICAgIFBJRV9MQUJFTF9HVUlERV9MSU5FMV9TSVpFOiAyMCwgICAgICAgICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWkluaYvuekuuaXtu+8jOi/nuaOpemlvOWdl+WSjOagh+etvuaWh+Wtl+eahOW8leWvvOe6vzHnmoTplb/luqZcclxuICAgIFBJRV9MQUJFTF9HVUlERV9MSU5FMl9TSVpFOiAxNSwgICAgICAgICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWkluaYvuekuuaXtu+8jOi/nuaOpemlvOWdl+WSjOagh+etvuaWh+Wtl+eahOW8leWvvOe6vzLnmoTplb/luqZcclxuICAgIFBJRV9MQUJFTF9PRkZTRVQ6IDUsICAgICAgICAgICAgICAgICAgICAgICAvL+W8leWvvOe6v+WSjOagh+etvuaWh+Wtl+eahOmXtOi3nVxyXG4gICAgUElFX1NFTEVDVE9SX1RSQU5TTEFURTogMTAsICAgICAgICAgICAgICAgIC8v6KKr6YCJ5oup55qE6aW85Z2X55qE5L2N56e76YePXHJcbiAgICBQSUVfU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAgLy/moYbpgInmlbDmja7pobnnmoTmlrnmoYbnmoTovrnmoYbnur/nur/lrr1cclxuICAgIFBJRV9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0ZGMDAwMCcsICAgICAgICAvL+ahhumAieaVsOaNrumhueeahOaWueahhueahOi+ueahhuminOiJslxyXG5cclxuXHJcbiAgICAvL+mbt+i+vuWbvlxyXG4gICAgUkFEQVJfTEFCRUxfRk9OVDogJzEycHggTWljcm9zb2Z0IFlhSGVpJywgIC8v5oyH5qCH5paH5a2X55qE5a2X5L2TXHJcbiAgICBSQURBUl9MQUJFTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgICAgLy/mjIfmoIfmloflrZfnmoTpopzoibJcclxuICAgIFJBREFSX0xBQkVMX1BPU0lUSU9OX09GRlNFVDogMTAsICAgICAgICAgICAvL+aMh+agh+aWh+Wtl+WSjOWvueW6lOWkmui+ueW9oumhtueCueS5i+mXtOeahOmXtOi3nVxyXG4gICAgUkFEQVJfTElORV9XSURUSDogMy4wLCAgICAgICAgICAgICAgICAgICAgIC8v5pWw5o2u6Zu36L6+57q/55qE57q/5a69XHJcbiAgICBSQURBUl9CQUtfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLmoYbnur/lkozljYrlvoTliIblibLnur/nmoTnur/lrr1cclxuICAgIFJBREFSX0JBS19MSU5FX0NPTE9SOiAnI0M5QzlDOScsICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9ouahhue6v+WSjOWNiuW+hOWIhuWJsue6v+eahOminOiJslxyXG4gICAgUkFEQVJfQkFLX0ZJTExfQ09MT1I6ICcjRTZFNkU2JywgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i55qE6IOM5pmv6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5pWj54K55Zu+XHJcbiAgICBTQ0FUVEVSX1BPSU5UX0FMUEhBOiAwLjcsICAgICAgICAgICAgICAgICAgLy/mlaPngrnnmoTpgI/mmI7luqZcclxuICAgIFNDQVRURVJfQ1JPU1NfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAvL+eUqOS6juagh+ivhum8oOagh+S9jee9rueahOWNgeWtl+e6v+eahOe6v+WuvVxyXG4gICAgU0NBVFRFUl9DUk9TU19DT0xPUjogJyNGRjAwMDAnLCAgICAgICAgICAgIC8v55So5LqO5qCH6K+G6byg5qCH5L2N572u55qE5Y2B5a2X57q/55qE6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5pet5pel5Zu+XHJcbiAgICBTVU5CVVJTX0xBQkVMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgLy/moIfnrb7mloflrZfnmoTpopzoibJcclxuICAgIFNVTkJVUlNfQk9SREVSX0NPTE9SOiAnIzAwMDAwMCcgICAgICAgICAgICAvL+aJh+W9ouWdl+eahOi+ueahhuminOiJslxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVzOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOmdmeaAgeWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvKlxyXG4gICAgKiDorqHnrpfjgJDlgLzovbTjgJHnmoTliLvluqbljZXkvY1cclxuICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGVVbml0IChtaW4sIG1heCwgc2NhbGVNYXhDb3VudCkge1xyXG4gICAgICAgIGxldCBpLCBsZW4sXHJcbiAgICAgICAgICAgIGF2ZyxcclxuICAgICAgICAgICAgZ2FwcyA9IFsxLCAyLCAyLjUsIDUsIDEwXSxcclxuICAgICAgICAgICAgc2NhbGVVbml0LFxyXG4gICAgICAgICAgICBtYWduaXR1ZGU7XHJcblxyXG4gICAgICAgIC8v6K6h566X5Z2H5YiG5YC8XHJcbiAgICAgICAgYXZnID0gKG1heCAtIG1pbikgLyAoc2NhbGVNYXhDb3VudC0xKTtcclxuXHJcbiAgICAgICAgLy/orqHnrpflnYfliIblgLznmoTmlbDph4/nuqdcclxuICAgICAgICBtYWduaXR1ZGUgPSB0aGlzLmdldE1hZ25pdHVkZShhdmcpO1xyXG5cclxuICAgICAgICAvL+W+queOr++8jOebtOiHs+esrOS4gOS4quWkp+S6juaIluetieS6juWdh+WIhuWAvOeahOaVtOaVsOWAvOWHuueOsFxyXG4gICAgICAgIGxlbiA9IGdhcHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBzY2FsZVVuaXQgPSBnYXBzW2ldICogbWFnbml0dWRlO1xyXG4gICAgICAgICAgICBpZiAoc2NhbGVVbml0ID49IGF2Zykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHNjYWxlVW5pdDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAqIOiuoeeul+aMh+WumuaVsOWAvOeahOaVsOmHj+e6p1xyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYWduaXR1ZGUgKG51bSkge1xyXG4gICAgICAgIC8v6K6h566X5pWw5YC855qEMTDnmoTluYJcclxuICAgICAgICBsZXQgcG93ID0gTWF0aC5mbG9vcihNYXRoLmxvZyhudW0pIC8gTWF0aC5sb2coMTApKTs7XHJcblxyXG4gICAgICAgIC8v6K6h566X5pWw5YC855qE5pWw6YeP57qnXHJcbiAgICAgICAgbGV0IG1hZ25pdHVkZSA9IE1hdGgucG93KDEwLCBwb3cpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFnbml0dWRlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICogQ2FudmFz57uY5Yi25pe25a+55Z2Q5qCH6L+b6KGM5b6u6LCDXHJcbiAgICAqIOWbm+iIjeS6lOWFpeWPluaVtOWQjuWHj+WwjzAuNeWDj+e0oOOAgui/meagt++8jOWcqENhbnZhc+aXtuS9jee9ruWkhOS6juS4pOS4quWDj+e0oOS5i+mXtO+8jOmBv+WFjeWPkeiZmuOAglxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBhZGp1c3RQb3NpdGlvbiAoeE9SeSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHhPUnkpIC0gQ29uc3RhbnRzLkhBTEZfUElYRUw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgd2luZG93VG9DYW52YXMgKGJvdW5kaW5nQ2xpZW50UmVjdExlZnQsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0VG9wLFxyXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoLFxyXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCxcclxuICAgICAgICBjYW52YXNXaWR0aCxcclxuICAgICAgICBjYW52YXNIZWlnaHQsXHJcbiAgICAgICAgZ2xvYmxlWCxcclxuICAgICAgICBnbG9ibGVZLFxyXG4gICAgICAgIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgcG9zaXRpb24ueCA9IGdsb2JsZVggLSBib3VuZGluZ0NsaWVudFJlY3RMZWZ0ICogKGNhbnZhc1dpZHRoIC8gYm91bmRpbmdDbGllbnRSZWN0V2lkdGgpO1xyXG4gICAgICAgIHBvc2l0aW9uLnkgPSBnbG9ibGVZIC0gYm91bmRpbmdDbGllbnRSZWN0VG9wICogKGNhbnZhc0hlaWdodCAvIGJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGV4dFdpZHRoIChjYW52YXNDb250ZXh0LCB0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGV4dEhlaWdodCAoY2FudmFzQ29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KCdNJykud2lkdGggKiA3IC8gNjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUV0FjdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMudG90bGVUaW1lcyA9IDA7ICAgICAgICAgICAvL+e8k+WKqOasoeaVsFxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAwOyAgICAgICAgICAgICAgLy/nvJPliqjlvIDlp4vml7bvvIzku47nrKzlh6DmrKHnvJPliqjlvIDlp4sgIFxyXG4gICAgICAgIHRoaXMuZGF0YUFycmF5ID0gW107ICAgICAgICAgIC8v5pys5Yqo5L2c5pON5o6n55qEVFdEYXRh5pWw5o2u6ZuGXHJcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBudWxsOyAgICAgICAgLy/nvJPliqjnrpfms5VcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24gPSBudWxsOyAgICAgICAvL+acrOWKqOS9nOe7k+adn+WQjueahOS4i+S4gOS4quWKqOS9nFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2V0RGF0YSAoZGF0YUFycmF5LCBhbGdvcml0aG0sIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhQXJyYXkgPSBkYXRhQXJyYXk7XHJcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBhbGdvcml0aG07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMudG90bGVUaW1lcyA9IE1hdGguY2VpbChkdXJhdGlvbiAvIFRXQWN0aW9uLkZSQU1FX0RVUkFUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFpbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSAoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCxcclxuICAgICAgICAgICAgZnJvbSxcclxuICAgICAgICAgICAgdG8sXHJcbiAgICAgICAgICAgIGNhbGxCYWNrLFxyXG5cclxuICAgICAgICAgICAgYXJyLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMixcclxuXHJcbiAgICAgICAgICAgIHJ0biA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ID4gdGhpcy50b3RsZVRpbWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGxlbjEgPSB0aGlzLmRhdGFBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmRhdGFBcnJheVtpXS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gdGhpcy5kYXRhQXJyYXlbaV0uZnJvbTtcclxuICAgICAgICAgICAgICAgIHRvID0gdGhpcy5kYXRhQXJyYXlbaV0udG87XHJcbiAgICAgICAgICAgICAgICBjYWxsQmFjayA9IHRoaXMuZGF0YUFycmF5W2ldLmNhbGxCYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGVuMiA9IGZyb20ubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuYWxnb3JpdGhtKHRoaXMuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21bal0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvW2pdIC0gZnJvbVtqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RsZVRpbWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxCYWNrKHRhcmdldCwgYXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBydG47XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWxnb3JpdGhtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog6Z2Z5oCB5Y+Y6YePXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblRXQWN0aW9uLkZSQU1FX0RVUkFUSU9OID0gMTc7ICAgICAgLy/luKfpopHkuLo2MOeahOeKtuaAgeS4i++8jOS4gOW4p+eahOaSreaUvuaXtumVv+S4ujE3bXMgKCAxMDAwbXMvNjAgKVxyXG4iLCIvKlxyXG4gKiB0OiBjdXJyZW50IHRpbWXvvIjlvZPliY3ml7bpl7TvvIlcclxuICogYjogYmVnaW5uaW5nIHZhbHVl77yI5Yid5aeL5YC877yJXHJcbiAqIGM6IGNoYW5nZSBpbiB2YWx1Ze+8iOWPmOWMlumHj++8iVxyXG4gKiBkOiBkdXJhdGlvbu+8iOaMgee7reaXtumXtO+8iVxyXG4gKiBcclxuICogXHJcbiAqIOe8k+WKqOWHveaVsDpcclxuICogMS5MaW5lYXIg5YyA6YCfXHJcbiAqIDIuUXVhZCDkuozmrKHmlrnnvJPliqjmlYjmnpxcclxuICogMy5DdWJpYyDkuInmrKHmlrnnvJPliqjmlYjmnpxcclxuICogNC5RdWFydCDlm5vmrKHmlrnnvJPliqjmlYjmnpxcclxuICogNS5RdWludCDkupTmrKHmlrnnvJPliqjmlYjmnpxcclxuICogNi5TaW5lICDmraPlvKbnvJPliqjmlYjmnpxcclxuICogNy5FeHBvICDmjIfmlbDnvJPliqjmlYjmnpxcclxuICogOC5DaXJjICDlnIblvaLnvJPliqjlh73mlbBcclxuICogOS5FbGFzdGljIOaMh+aVsOihsOWHj+ato+W8puabsue6v+e8k+WKqOWHveaVsFxyXG4gKiAxMC5CYWNrICDotoXov4fojIPlm7TnmoTkuInmrKHmlrnnmoTnvJPliqjlh73mlbBcclxuICogMTEuQm91bmNlIOaMh+aVsOihsOWHj+eahOWPjeW8ueabsue6v+e8k+WKqOWHveaVsFxyXG4gKiBcclxuICogXHJcbiAqIOavj+enjee8k+WKqOWHveaVsOmDveeUseS4ieenjeaViOaenDpcclxuICogMS5lYXNlSW4gIOWKoOmAn1xyXG4gKiAyLmVhc2VPdXQg5YeP6YCfXHJcbiAqIDMuZWFzZUluT3V0ICDlhYjliqDpgJ/lkI7lh4/pgJ9cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXQWxnb3JpdGhtIHtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDpnZnmgIHlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdGF0aWMgbGluZWFyICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgcmV0dXJuIGMgKiB0IC8gZCArIGI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDpnZnmgIHlj5jph49cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuVFdBbGdvcml0aG0uUXVhZCA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKCgtLXQpICogKHQgLSAyKSAtIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkN1YmljID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICsgMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uUXVhcnQgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5RdWludCA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgKiB0ICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCAqIHQgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uU2luZSA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiBNYXRoLmNvcyh0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYyArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqIE1hdGguc2luKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5FeHBvID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodCA9PSAwKSA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0ID09IGQpID8gYiArIGMgOiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0IC8gZCkgKyAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAodCA9PSBkKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uQ2lyYyA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodCAvPSBkKSAqIHQpIC0gMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5FbGFzdGljID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICAgICAgICAgIGxldCBzO1xyXG4gICAgICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQpID09IDEpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09IFwidW5kZWZpbmVkXCIpIHAgPSBkICogLjM7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgICAgIGEgPSBjO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPT0gMSkgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHAgPT0gXCJ1bmRlZmluZWRcIikgcCA9IGQgKiAuMztcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICAgICAgICAgIGxldCBzO1xyXG4gICAgICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA9PSAyKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PSBcInVuZGVmaW5lZFwiKSBwID0gZCAqICguMyAqIDEuNSk7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBjO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodCA8IDEpIHJldHVybiAtLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIC41ICsgYyArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5CYWNrID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PSBcInVuZGVmaW5lZFwiKSBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT0gXCJ1bmRlZmluZWRcIikgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09IFwidW5kZWZpbmVkXCIpIHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdCAtIHMpKSArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB0ICsgcykgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5Cb3VuY2UgPVxyXG4gICAge1xyXG5cclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGxldCBUV0FsZ29yaXRobSA9IFQudHdlZW47XHJcbiAgICAgICAgICAgIHJldHVybiBjIC0gQm91bmNlLmVhc2VPdXQoZCAtIHQsIDAsIGMsIGQpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA8ICgxIC8gMi43NSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqIHQgKiB0KSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8ICgyIC8gMi43NSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgxLjUgLyAyLjc1KSkgKiB0ICsgLjc1KSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8ICgyLjUgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDIuMjUgLyAyLjc1KSkgKiB0ICsgLjkzNzUpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgyLjYyNSAvIDIuNzUpKSAqIHQgKyAuOTg0Mzc1KSArIGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgbGV0IFRXQWxnb3JpdGhtID0gVC50d2VlbjtcclxuICAgICAgICAgICAgaWYgKHQgPCBkIC8gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvdW5jZS5lYXNlSW4odCAqIDIsIDAsIGMsIGQpICogLjUgKyBiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvdW5jZS5lYXNlT3V0KHQgKiAyIC0gZCwgMCwgYywgZCkgKiAuNSArIGMgKiAuNSArIGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdEYXRhIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IFtdO1xyXG4gICAgICAgIHRoaXMudG8gPSBbXTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZyb20gPSBbXTtcclxuICAgICAgICB0aGlzLnRvID0gW107XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YSAodGFyZ2V0LCBmcm9tQXJyYXksIHRvQXJyYXksIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbUFycmF5O1xyXG4gICAgICAgIHRoaXMudG8gPSB0b0FycmF5O1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBjYWxsQmFjaztcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbn1cclxuIiwiaW1wb3J0IE9iamVjdFBvb2wgZnJvbSAnLi4vc3VwcG9ydC9PYmplY3RQb29sLmpzJztcclxuaW1wb3J0IFRXQWN0aW9uIGZyb20gXCIuLi90d2Vlbi9UV0FjdGlvbi5qc1wiO1xyXG5pbXBvcnQgVFdEYXRhIGZyb20gXCIuLi90d2Vlbi9UV0RhdGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0QWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50QWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aW9uUG9vbCA9IG5ldyBPYmplY3RQb29sKFRXQWN0aW9uKTtcclxuICAgICAgICB0aGlzLl9kYXRhUG9vbCA9IG5ldyBPYmplY3RQb29sKFRXRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0VFdBY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcblxyXG4gICAgICAgIG9iaiA9IHRoaXMuX2FjdGlvblBvb2wuZ2V0T2JqKCk7XHJcbiAgICAgICAgb2JqLmluaXQoKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLnB1c2gob2JqKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUV0RhdGEgKCkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcblxyXG4gICAgICAgIG9iaiA9IHRoaXMuX2RhdGFQb29sLmdldE9iaigpO1xyXG4gICAgICAgIG9iai5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZUFsbFRXRGF0YSAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2wucmVsZWFzZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2VBbGxUV0FjdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvblBvb2wucmVsZWFzZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpcnN0VFdBY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0QWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9maXJzdEFjdGlvbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmV4dEZyYW1lICgpIHtcclxuICAgICAgICBsZXQgcnRuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUGxheWluZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRGcmFtZSgpID09IGZhbHNlKSAgIC8v5b2T5YmNYWN0aW9u55qE57yT5Yqo5bey57uP57uT5p2fIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEFjdGlvbi5uZXh0QWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50QWN0aW9uID0gdGhpcy5fY3VycmVudEFjdGlvbi5uZXh0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wICgpIHtcclxuICAgICAgICBsZXQgaSwgbGVuO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50QWN0aW9uID0gdGhpcy5fZmlyc3RBY3Rpb247XHJcblxyXG4gICAgICAgIGxlbiA9IHRoaXMuX2FjdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25zW2ldLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCAnLi4vc3JjL2NoYXJ0L3BpZS9jc3MvY2hhcnQuY3NzJyA7XHJcbmltcG9ydCAnLi4vc3JjL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFydCB9ICBmcm9tICcuLi9zcmMvY2hhcnQvcGllL0NoYXJ0LmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJpZXMgfSAgZnJvbSAnLi4vc3JjL2Jhc2Uvc2VyaWVzL1Nlcmllc0Jhc2UuanMnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9