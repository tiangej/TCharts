(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sunbursByValue"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["sunbursByValue"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/sunbursByValueEntry.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/sunbursByValue/css/chart.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/sunbursByValue/css/chart.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.sunbursByValueChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.sunbursByValueChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}", ""]);



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

/***/ "./src/chart/sunbursByValue/Chart.js":
/*!*******************************************!*\
  !*** ./src/chart/sunbursByValue/Chart.js ***!
  \*******************************************/
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
/* harmony import */ var _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/ChartInfo_In.js */ "./src/chart/sunbursByValue/info/ChartInfo_In.js");
/* harmony import */ var _parts_Sector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/Sector.js */ "./src/chart/sunbursByValue/parts/Sector.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/sunbursByValue/painter/Painter.js");
/* harmony import */ var _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../support/ObjectPool.js */ "./src/support/ObjectPool.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/Utility.js */ "./src/support/Utility.js");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










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

    _this.chartInfo_In = new _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_5__["default"](); //图表信息。例：图表名称
    ///////////////////////
    // 私有成员变量
    ///////////////////////

    _this._itemArray = []; //存放扇形的一维数组

    _this._itemPool = null; //扇形对象池

    _this._firstDeepItems = [];
    _this._selectedItemArray = [];
    _this._supportItemArray = [];
    _this._parentDivClassName = 'sunbursByValueChartDiv'; //样式名

    _this._totalValue = 0; ///////////////////////
    // 初始化
    ///////////////////////
    //设置画家

    _this._setPainter(_painter_Painter_js__WEBPACK_IMPORTED_MODULE_7__["default"]); //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换


    _this._parentDiv = document.getElementById(parentDivID);
    _this._parentDiv.className += ' ' + _this._parentDivClassName; //动态生成_canvas，并添加到DOM树。同时获取其上下文

    _this._canvas = document.createElement('canvas');

    _this._parentDiv.appendChild(_this._canvas); //初始化对象池


    _this._itemPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_8__["default"](_parts_Sector_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
      } //重新设定各种状态


      this._reset(); //计算扇形信息


      this._getItemAndComputeSunbursInfo(); //启动帧循环，在循环内部绘制图表


      this._startPaint();
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_check",
    value: function _check() {
      var rtn = true,
          data = this.chartInfo_In.series[0].data; //检查1： 数据是否为空

      if (data == null || data.length == 0) {
        rtn = false;
      }

      return rtn;
    }
  }, {
    key: "_reset",
    value: function _reset() {
      var canvas = this._canvas,
          div = this._parentDiv; //移除鼠标事件监听器

      this._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].REMOVE); //设置尺寸


      canvas.width = div.offsetWidth;
      canvas.height = div.offsetHeight; //初始化图例数据、line对象数组

      this._itemArray.length = 0;
      this._firstDeepItems.length = 0;
      this._totalValue = 0; //从对象池中释放曾经使用过的扇形

      this._itemPool.releaseAll(); //取消上一次绑定的动画函数


      window.cancelAnimationFrame(this._animationFrameID);
    }
  }, {
    key: "_getItemAndComputeSunbursInfo",
    value: function _getItemAndComputeSunbursInfo() {
      var chartInfo_In = this.chartInfo_In,
          itemArray = this._itemArray,
          firstDeepItems = this._firstDeepItems,
          item,
          radianUnit,
          angle = -90,
          i,
          len; //生成全部扇形对象

      this._createItems(); //为Deep为0的各项目设置角度


      len = firstDeepItems.length;

      for (i = 0; i < len; i++) {
        item = firstDeepItems[i];
        item.startAngle = angle;
        item.angle = item.value / this._totalValue * 360;
        angle += item.angle;
      } //为所有扇形项目设置属性


      radianUnit = _support_Constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].RADIAN_UNIT;
      len = itemArray.length;

      for (i = 0; i < len; i++) {
        item = itemArray[i];
        item.x = chartInfo_In.centerX;
        item.y = chartInfo_In.centerY;
        item.sectorRadius = chartInfo_In.sectorRadius;
        item.insideRadius = chartInfo_In.insideRadius + chartInfo_In.sectorRadius * item.deep;

        if (item.deep > 0) {
          if (item.brsupportItem == null) {
            item.startAngle = item.parentItem.startAngle;
          } else {
            item.startAngle = item.brsupportItem.startAngle + item.brsupportItem.angle;
          }

          item.angle = item.value / item.parentItem.value * item.parentItem.angle;
        }

        item.startRadian = item.startAngle * radianUnit;
        item.radian = item.angle * radianUnit;
        item.bisectingAngle = item.startAngle + item.angle / 2;
        item.bisectingRadian = item.bisectingAngle * radianUnit;
      } //将选择的项目和未选择的项目分组


      this._select(chartInfo_In.selectedIndex);
    }
  }, {
    key: "_createItems",
    value: function _createItems() {
      var chartInfo_In = this.chartInfo_In,
          colors = chartInfo_In.colors,
          series = chartInfo_In.series,
          itemArr = this._itemArray,
          firstDeepItems = this._firstDeepItems,
          pool = this._itemPool,
          obj,
          arr,
          me = this; //定义

      function create(dataArr, deep, parentItem) {
        var item,
            brsupportItem = null,
            i,
            len = dataArr.length;

        for (i = 0; i < len; i++) {
          obj = dataArr[i];
          item = pool.getObj();
          item.name = obj.name;
          item.deep = deep;
          item.value = parseFloat(obj.value);
          item.parentItem = parentItem;
          item.brsupportItem = brsupportItem;

          if (item.deep == 0) {
            item.backgroundColor = colors[i % len];
            item.backgroundColorAlpha = 1.0;
            firstDeepItems.push(item);
            me._totalValue += item.value;
          } else {
            item.backgroundColor = parentItem.backgroundColor;
            item.backgroundColorAlpha = parentItem.backgroundColorAlpha * 0.8;
          }

          itemArr.push(item);
          arr = obj.children;

          if (arr != null) {
            create(arr, deep + 1, item);
          }

          brsupportItem = item;
        }
      } //执行


      create(series[0].data, 0, null);
    }
  }, {
    key: "_select",
    value: function _select(index) {
      var itemArray = this._itemArray,
          selectedItemArray = this._selectedItemArray,
          supportItemArray = this._supportItemArray,
          zero = _support_Constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].CLOSE_TO_ZERO,
          deep,
          startAngle,
          endAngle,
          item,
          selectedItem,
          i,
          len; //清空数组

      selectedItemArray.length = 0;
      supportItemArray.length = 0; //获取项目总数

      len = itemArray.length; //没有项目被选择的时候

      if (index < 0) {
        for (i = 0; i < len; i++) {
          selectedItemArray[i] = itemArray[i];
        }

        return;
      } //有项目被选择的时候


      selectedItem = itemArray[index];
      deep = selectedItem.deep;
      startAngle = selectedItem.startAngle;
      endAngle = startAngle + selectedItem.angle;

      for (i = 0; i < len; i++) {
        item = itemArray[i]; //判断鼠标位于哪个对象之上（这里有浮点数精度问题）

        if (item.deep >= deep && item.startAngle >= startAngle && endAngle - item.startAngle > zero) {
          selectedItemArray.push(item);
        } else {
          supportItemArray.push(item);
        }
      }
    }
  }, {
    key: "_addOrRemoveEventListener",
    value: function _addOrRemoveEventListener(command) {
      var canvas = this._canvas,
          chartInfo_In = this.chartInfo_In,
          itemArray = this._itemArray,
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
        _support_Utility_js__WEBPACK_IMPORTED_MODULE_11__["default"].windowToCanvas(rect.left, rect.top, rect.width, rect.height, canvas.width, canvas.height, e.clientX, e.clientY, position); //根据鼠标位置，找到鼠标位于哪个对象之上

        len = itemArray.length;

        for (i = 0; i < len; i++) {
          item = itemArray[i]; //判断鼠标位于哪个对象之上

          if (item.isPointInPath(position.x, position.y) == true) {
            if (chartInfo_In.selectedIndex == i) {
              chartInfo_In.selectedIndex = -1;
            } else {
              chartInfo_In.selectedIndex = i;
            }

            me._select(chartInfo_In.selectedIndex);

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].STEP3;
            break;
          }
        }
      } //执行


      if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].ADD && me._eventListenersAddedFlag == false) {
        me._canvas.addEventListener('click', doMouseClick);

        me._eventListenersAddedFlag = true;
      } else if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].REMOVE && me._eventListenersAddedFlag == true) {
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
          case _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].STEP1:
            me._paint(); //绘制图表框架（标题、图例等），为缓动效果做准备                   


            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].STEP2;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].STEP2:
            me._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].ADD);

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].WAITING;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].STEP3:
            me._paint();

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].WAITING;
            break;
        } //循环调用自己，进行绘画


        if (me._status != _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].STOP) {
          me._animationFrameID = window.requestNextAnimationFrame(paint);
        }
      } //设置初始状态，开始绘制


      me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_10__["default"].STEP1;
      paint();
    }
  }]);

  return Chart;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/chart/sunbursByValue/css/chart.css":
/*!************************************************!*\
  !*** ./src/chart/sunbursByValue/css/chart.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/sunbursByValue/css/chart.css");

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

/***/ "./src/chart/sunbursByValue/info/ChartInfo_In.js":
/*!*******************************************************!*\
  !*** ./src/chart/sunbursByValue/info/ChartInfo_In.js ***!
  \*******************************************************/
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

    _this.sectorRadius = 40; //扇形半径

    _this.insideRadius = 30; //内半径

    _this.centerX = 350; //圆环中心位置

    _this.centerY = 250; ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }

  return ChartInfo_In;
}(_base_info_ChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/chart/sunbursByValue/painter/Painter.js":
/*!*****************************************************!*\
  !*** ./src/chart/sunbursByValue/painter/Painter.js ***!
  \*****************************************************/
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

    this._canvasSurface; //Canvas绘图表面

    this._chartInfo_In; //图表各类数据 

    this._itemArray; //存储扇形点的数组

    this._selectedItemArray;
    this._supportItemArray;
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
      this._itemArray = chart._itemArray;
      this._selectedItemArray = chart._selectedItemArray;
      this._supportItemArray = chart._supportItemArray;
      this._selectedIndex = chart.chartInfo_In.selectedIndex;
    }
  }, {
    key: "paint",
    value: function paint() {
      var canvas = this._canvas,
          ctx = this._ctx,
          selectedItemArray = this._selectedItemArray,
          supportItemArray = this._supportItemArray,
          canvasWidth = canvas.width,
          canvasHeight = canvas.height;

      switch (this._chart._status) {
        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP1:
          //绘制图表并缓存Canvas绘图表面
          //清空画布
          ctx.clearRect(0, 0, canvasWidth, canvasHeight); //在_ctx上绘制图表固定的内容

          this._paintTitle(); //缓存此时的_ctx绘图表面（全尺寸）


          this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight); //绘制扇形和标签

          this._paintSunburs(selectedItemArray, true);

          this._paintSunburs(supportItemArray, false);

          this._paintLabel(selectedItemArray, true);

          this._paintLabel(supportItemArray, false);

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP3:
          //绘制选择项
          //恢复绘图表面，将在此之上绘制圆环
          ctx.putImageData(this._canvasSurface, 0, 0); //绘制扇形和标签

          this._paintSunburs(selectedItemArray, true);

          this._paintSunburs(supportItemArray, false);

          this._paintLabel(selectedItemArray, true);

          this._paintLabel(supportItemArray, false);

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
    key: "_paintSunburs",
    value: function _paintSunburs(itemArr, selectedFlag) {
      var ctx = this._ctx,
          item,
          radius,
          i,
          len;
      ctx.save();
      ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].SUNBURS_BORDER_COLOR; //循环绘制圆环

      len = itemArr.length;

      for (i = 0; i < len; i++) {
        ctx.save(); //取得扇形对象

        item = itemArr[i]; //设置填充颜色

        ctx.globalAlpha = item.backgroundColorAlpha;

        if (selectedFlag == false) {
          ctx.globalAlpha *= 0.1;
        }

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

        ctx.closePath(); //填充，描边

        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();
    }
  }, {
    key: "_paintLabel",
    value: function _paintLabel(itemArr, selectedFlag) {
      var ctx = this._ctx,
          radianUnit = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].RADIAN_UNIT,
          item,
          r,
          x,
          y,
          i,
          len;
      ctx.save(); //设置共同样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LABEL_FONT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_MIDDLE;
      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_CENTER;
      ctx.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].SUNBURS_LABEL_COLOR;

      if (selectedFlag == false) {
        ctx.globalAlpha *= 0.1;
      } //循环绘制标签


      len = itemArr.length;

      for (i = 0; i < len; i++) {
        ctx.save(); //取得扇形对象

        item = itemArr[i]; //计算文字绘制位置

        r = item.insideRadius + item.sectorRadius / 2;
        x = item.x + r * Math.cos(item.bisectingRadian);
        y = item.y + r * Math.sin(item.bisectingRadian); //平移到扇形中心

        ctx.translate(x, y); //根据角分线角度进行旋转

        if (item.bisectingAngle >= -90 && item.bisectingAngle < 90) {
          ctx.rotate(item.bisectingRadian);
        } else {
          ctx.rotate((item.bisectingAngle - 180) * radianUnit);
        }

        ctx.fillText(item.name, 0, 0);
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

/***/ "./src/chart/sunbursByValue/parts/Sector.js":
/*!**************************************************!*\
  !*** ./src/chart/sunbursByValue/parts/Sector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sector; });
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



var Sector =
/*#__PURE__*/
function (_PartBase) {
  _inherits(Sector, _PartBase);

  function Sector() {
    var _this;

    _classCallCheck(this, Sector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sector).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.sectorRadius; //扇形半径

    _this.insideRadius; //扇形内圆半径

    _this.startAngle; //扇形的起始角度

    _this.startRadian; //扇形的起始弧度（角度转弧度）

    _this.angle; //扇形的角度

    _this.radian; //扇形的弧度（角度转弧度）

    _this.bisectingAngle; //扇形的角分线角度

    _this.bisectingRadian; //扇形的角分线弧度（角度转弧度）

    _this.backgroundColor; //扇形颜色

    _this.backgroundColorAlpha; //扇形颜色透明度

    _this.deep; //扇形在径向所在的层级，最里层为0，向外逐层增加1
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(Sector, [{
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

  return Sector;
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

/***/ "./webpackEntry/sunbursByValueEntry.js":
/*!*********************************************!*\
  !*** ./webpackEntry/sunbursByValueEntry.js ***!
  \*********************************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_sunbursByValue_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/sunbursByValue/css/chart.css */ "./src/chart/sunbursByValue/css/chart.css");
/* harmony import */ var _src_chart_sunbursByValue_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_sunbursByValue_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_sunbursByValue_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/sunbursByValue/Chart.js */ "./src/chart/sunbursByValue/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_sunbursByValue_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/base/series/SeriesBase.js */ "./src/base/series/SeriesBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9zdW5idXJzQnlWYWx1ZS9jc3MvY2hhcnQuY3NzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9jaGFydC9DaGFydEJhc2UuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9pbmZvL0NoYXJ0SW5mb0Jhc2VfSW4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9zZXJpZXMvU2VyaWVzQmFzZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9zdW5idXJzQnlWYWx1ZS9DaGFydC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9zdW5idXJzQnlWYWx1ZS9jc3MvY2hhcnQuY3NzPzJiY2UiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvc3VuYnVyc0J5VmFsdWUvaW5mby9DaGFydEluZm9fSW4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvc3VuYnVyc0J5VmFsdWUvcGFpbnRlci9QYWludGVyLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3N1bmJ1cnNCeVZhbHVlL3BhcnRzL1NlY3Rvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvT2JqZWN0UG9vbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1N0YXR1cy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi93ZWJwYWNrRW50cnkvc3VuYnVyc0J5VmFsdWVFbnRyeS5qcyJdLCJuYW1lcyI6WyJDaGFydEJhc2UiLCJfcGFyZW50RGl2IiwiX2NhbnZhcyIsIl90aXBEaXYiLCJfcGFpbnRlciIsIl9zdGF0dXMiLCJfZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWciLCJfc3VyZmFjZUltYWdlRGF0YSIsIl9hbmltYXRpb25GcmFtZUlEIiwiU3RhdHVzIiwiU1RPUCIsInBhaW50ZXIiLCJnZXRJbnN0YW5jZSIsInNldENoYXJ0IiwicGFpbnQiLCJjbGFzc05hbWUiLCJ0aXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIkNoYXJ0SW5mb0Jhc2VfSW4iLCJ0aXRsZSIsInRpdGxlVG9wIiwidGl0bGVMZWZ0IiwibGVnZW5kVG9wIiwibGVnZW5kTGVmdCIsImxlZ2VuZFJpZ2h0IiwiYm9keVRvcCIsImJvZHlCb3R0b20iLCJib2R5TGVmdCIsImJvZHlSaWdodCIsImNvbG9ycyIsInNlcmllcyIsInNlbGVjdGVkSW5kZXgiLCJTZXJpZXNCYXNlIiwibmFtZSIsImRhdGEiLCJzZWxlY3RlZCIsIkNoYXJ0IiwicGFyZW50RGl2SUQiLCJjaGFydEluZm9fSW4iLCJDaGFydEluZm9fSW4iLCJfaXRlbUFycmF5IiwiX2l0ZW1Qb29sIiwiX2ZpcnN0RGVlcEl0ZW1zIiwiX3NlbGVjdGVkSXRlbUFycmF5IiwiX3N1cHBvcnRJdGVtQXJyYXkiLCJfcGFyZW50RGl2Q2xhc3NOYW1lIiwiX3RvdGFsVmFsdWUiLCJfc2V0UGFpbnRlciIsIlBhaW50ZXIiLCJnZXRFbGVtZW50QnlJZCIsIk9iamVjdFBvb2wiLCJTZWN0b3IiLCJfY2hlY2siLCJjb25zb2xlIiwibG9nIiwiX3Jlc2V0IiwiX2dldEl0ZW1BbmRDb21wdXRlU3VuYnVyc0luZm8iLCJfc3RhcnRQYWludCIsInJ0biIsImxlbmd0aCIsImNhbnZhcyIsImRpdiIsIl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb25zdGFudHMiLCJSRU1PVkUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicmVsZWFzZUFsbCIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaXRlbUFycmF5IiwiZmlyc3REZWVwSXRlbXMiLCJpdGVtIiwicmFkaWFuVW5pdCIsImFuZ2xlIiwiaSIsImxlbiIsIl9jcmVhdGVJdGVtcyIsInN0YXJ0QW5nbGUiLCJ2YWx1ZSIsIlJBRElBTl9VTklUIiwieCIsImNlbnRlclgiLCJ5IiwiY2VudGVyWSIsInNlY3RvclJhZGl1cyIsImluc2lkZVJhZGl1cyIsImRlZXAiLCJicnN1cHBvcnRJdGVtIiwicGFyZW50SXRlbSIsInN0YXJ0UmFkaWFuIiwicmFkaWFuIiwiYmlzZWN0aW5nQW5nbGUiLCJiaXNlY3RpbmdSYWRpYW4iLCJfc2VsZWN0IiwiaXRlbUFyciIsInBvb2wiLCJvYmoiLCJhcnIiLCJtZSIsImNyZWF0ZSIsImRhdGFBcnIiLCJnZXRPYmoiLCJwYXJzZUZsb2F0IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yQWxwaGEiLCJwdXNoIiwiY2hpbGRyZW4iLCJpbmRleCIsInNlbGVjdGVkSXRlbUFycmF5Iiwic3VwcG9ydEl0ZW1BcnJheSIsInplcm8iLCJDTE9TRV9UT19aRVJPIiwiZW5kQW5nbGUiLCJzZWxlY3RlZEl0ZW0iLCJjb21tYW5kIiwicmVjdCIsInBvc2l0aW9uIiwiZG9Nb3VzZUNsaWNrIiwiZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIlV0aWxpdHkiLCJ3aW5kb3dUb0NhbnZhcyIsImxlZnQiLCJ0b3AiLCJjbGllbnRYIiwiY2xpZW50WSIsImlzUG9pbnRJblBhdGgiLCJTVEVQMyIsIkFERCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU1RFUDEiLCJfcGFpbnQiLCJTVEVQMiIsIldBSVRJTkciLCJyZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lIiwiX2NoYXJ0IiwiX2N0eCIsIl9jYW52YXNTdXJmYWNlIiwiX2NoYXJ0SW5mb19JbiIsIl9zZWxlY3RlZEluZGV4IiwiY2hhcnQiLCJnZXRDb250ZXh0IiwiY3R4IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGVhclJlY3QiLCJfcGFpbnRUaXRsZSIsImdldEltYWdlRGF0YSIsIl9wYWludFN1bmJ1cnMiLCJfcGFpbnRMYWJlbCIsInB1dEltYWdlRGF0YSIsInNhdmUiLCJmb250IiwiU3R5bGVzIiwiVElUTEVfRk9OVCIsInRleHRBbGlnbiIsIlRFWFRfQUxJR05fTEVGVCIsInRleHRCYXNlbGluZSIsIlRFWFRfQkFTRV9MSU5FX1RPUCIsImZpbGxUZXh0IiwicmVzdG9yZSIsInNlbGVjdGVkRmxhZyIsInJhZGl1cyIsInN0cm9rZVN0eWxlIiwiU1VOQlVSU19CT1JERVJfQ09MT1IiLCJnbG9iYWxBbHBoYSIsImZpbGxTdHlsZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImJlZ2luUGF0aCIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJzdHJva2UiLCJyIiwiTEFCRUxfRk9OVCIsIlRFWFRfQkFTRV9MSU5FX01JRERMRSIsIlRFWFRfQUxJR05fQ0VOVEVSIiwiU1VOQlVSU19MQUJFTF9DT0xPUiIsIk1hdGgiLCJjb3MiLCJzaW4iLCJpbnN0YW5jZSIsImRpZmZYIiwiZGlmZlkiLCJzcXJ0IiwiYXRhbjIiLCJQSSIsIlBhcnRCYXNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmdW5jIiwic2V0VGltZW91dCIsIkRJUlRZIiwiSEFMRl9QSVhFTCIsIlRFWFRfQkFTRV9MSU5FX0JPVFRPTSIsIlRFWFRfQUxJR05fUklHSFQiLCJURVhUX0JBU0VfTElORV9JREVPR1JBUEhJQyIsIlhfQVhJUyIsIllfQVhJUyIsImNsYXp6IiwicGFyYSIsIl9jbGFzcyIsIl9wYXJhIiwiX2NvdW50IiwiX3Bvb2wiLCJTVEVQNCIsIlNURVA1IiwiTEVHRU5EX0ZPTlQiLCJBWElTX05BTUVfRk9OVCIsIkZPTlRfRklMTF9DT0xPUiIsIkFYSVNfTElORV9XSURUSCIsIkFYSVNfTElORV9DT0xPUiIsIkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkUiLCJHUklEX0xJTkVfV0lEVEgiLCJHUklEX0xJTkVfQ09MT1IiLCJHUklEX0xJTkVfREFTSCIsIlhBWElTX0xBQkVMX09GRlNFVCIsIlhBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFIiwiWUFYSVNfTEFCRUxfT0ZGU0VUIiwiWUFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEUiLCJMRUdFTkRfU0hBUEVfVEVYVF9HQVAiLCJMRUdFTkRfR0FQIiwiVElQX0xPQ0FUSU9OX09GRlNFVCIsIkJVQkJMRV9BTFBIQSIsIkNPTFVNTl9TRUxFQ1RPUl9MSU5FX1dJRFRIIiwiQ09MVU1OX1NFTEVDVE9SX0xJTkVfQ09MT1IiLCJMSU5FX0xJTkVfV0lEVEgiLCJMSU5FX0FSRUFfQUxQSEEiLCJMSU5FX01BUktQT0lOVF9XSURUSCIsIkxJTkVfTUFSS1BPSU5UX1JBRElVUyIsIkxJTkVfTUFSS1BPSU5UX0JBS19DT0xPUiIsIkxJTkVfU0VMRUNUT1JfTElORV9XSURUSCIsIkxJTkVfU0VMRUNUT1JfTElORV9DT0xPUiIsIlBJRV9MQUJFTF9JTk5FUl9GT05UX0NPTE9SIiwiUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkUiLCJQSUVfTEFCRUxfR1VJREVfTElORTJfU0laRSIsIlBJRV9MQUJFTF9PRkZTRVQiLCJQSUVfU0VMRUNUT1JfVFJBTlNMQVRFIiwiUElFX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJQSUVfU0VMRUNUT1JfTElORV9DT0xPUiIsIlJBREFSX0xBQkVMX0ZPTlQiLCJSQURBUl9MQUJFTF9DT0xPUiIsIlJBREFSX0xBQkVMX1BPU0lUSU9OX09GRlNFVCIsIlJBREFSX0xJTkVfV0lEVEgiLCJSQURBUl9CQUtfTElORV9XSURUSCIsIlJBREFSX0JBS19MSU5FX0NPTE9SIiwiUkFEQVJfQkFLX0ZJTExfQ09MT1IiLCJTQ0FUVEVSX1BPSU5UX0FMUEhBIiwiU0NBVFRFUl9DUk9TU19MSU5FX1dJRFRIIiwiU0NBVFRFUl9DUk9TU19DT0xPUiIsIm1pbiIsIm1heCIsInNjYWxlTWF4Q291bnQiLCJhdmciLCJnYXBzIiwic2NhbGVVbml0IiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwibnVtIiwicG93IiwiZmxvb3IiLCJ4T1J5Iiwicm91bmQiLCJib3VuZGluZ0NsaWVudFJlY3RMZWZ0IiwiYm91bmRpbmdDbGllbnRSZWN0VG9wIiwiYm91bmRpbmdDbGllbnRSZWN0V2lkdGgiLCJib3VuZGluZ0NsaWVudFJlY3RIZWlnaHQiLCJnbG9ibGVYIiwiZ2xvYmxlWSIsImNhbnZhc0NvbnRleHQiLCJ0ZXh0IiwibWVhc3VyZVRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7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bnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VuYnVyc0J5VmFsdWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVFwiXSA9IHJvb3RbXCJUXCJdIHx8IHt9LCByb290W1wiVFwiXVtcInN1bmJ1cnNCeVZhbHVlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWJwYWNrRW50cnkvc3VuYnVyc0J5VmFsdWVFbnRyeS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogXFxyXFxuICog5Zu+6KGo5YaF5YWo5bGA6K6+5a6a77yI5b+F6aG76aG555uu77yJXFxyXFxuICog55So5LqO5riF6Zmk77yI5Yid5aeL5YyW77yJ5omA5pyJ6buY6K6k5YaF5aSW6L656LedIFxcclxcbiAqL1xcclxcbi5zdW5idXJzQnlWYWx1ZUNoYXJ0RGl2ICp7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA7ICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5YaF6L656LedICovXFxyXFxuICAgIG1hcmdpbjogMHB4IDsgICAgICAgICAgICAgIC8qIOa4hemZpO+8iOWIneWni+WMlu+8ieWbvuihqOWGheaJgOacieWFg+e0oOeahOm7mOiupOWklui+uei3nSAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiDnu5jliLbkuLvkvZPnmoRDYW52YXNcXHJcXG4gKi9cXHJcXG4uc3VuYnVyc0J5VmFsdWVDaGFydERpdiBjYW52YXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgLyog57ud5a+55a6a5L2N77yM6L+Z5qC3MuS4quWdl+WFg+e0oO+8iENhbnZhc++8ieaJjeS8mumHjeWPoOWcqOS4gOi1tyAqL1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYgPSBudWxsOyAgICAgICAgICAgICAgICAgLy/lrZDnu4Tku7Y6IOWbvuihqOWQhOS4quWtkOe7hOS7tueahOeItuWuueWZqFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdGlwRGl2ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFpbnRlciA9IG51bGw7ICAgICAgICAgICAgICAgICAgIC8v55S75a625byV55SoXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICcnOyAgICAgICAgICAgICAgICAgICAgICAvL+eKtuaAgVxyXG5cclxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IGZhbHNlOyAgLy/nlLHkuo5qc+aXoOazleWIpOaWreS6i+S7tuebkeWQrOWHveaVsOaYr+WQpuW3sue7j+WtmOWcqO+8jOWboOatpOiHquWumuS5ieagh+W/l+S9jeadpeWIpOaWrVxyXG4gICAgICAgIHRoaXMuX3N1cmZhY2VJbWFnZURhdGEgPSBudWxsOyAgICAgICAgICAvL0NhbnZhc+e7mOWbvuihqOmdou+8jOeUqOS6juS/neWtmENhbnZhc+WbvueJh1xyXG5cclxuICAgICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc3RvcCAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gU3RhdHVzLlNUT1A7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIF9zZXRQYWludGVyIChwYWludGVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlciA9IHBhaW50ZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnQgKCkge1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIuc2V0Q2hhcnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlci5wYWludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIOWKqOaAgeeUn+aIkHRpcOWvueixoVxyXG4gICAgKiDlnKjmnKzlm77ooajns7vliJfkuK3vvIx0aXDmmK/nlLHmrrXokL1w5a+56LGh5ZKMdGFibGXlr7nosaHmnoTmiJDvvIzlhbblpJbop4LnlLHlpJbpg6jmjIflrprnmoRDU1PmjqfliLZcclxuICAgICovXHJcbiAgICBfY3JlYXRlVGlwIChjbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgdGlwO1xyXG5cclxuICAgICAgICAvL+eUn+aIkHRpcOeahGRpduWvueixoSzlubblop7liqBjbGFzc+agt+W8j+OAguazqOaEj++8muaYr+WinuWKoOiAjOS4jeaYr+abv+aNolxyXG4gICAgICAgIHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpcC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOauteiQveWvueixoe+8jOeUqOS6juaYvuekuuexu+ebruWQjeensFxyXG4gICAgICAgIHRpcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOihqOagvOWvueixoe+8jOeUqOS6juezu+WIl+WQjeensOWSjOaVsOaNrlxyXG4gICAgICAgIHRpcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpKTtcclxuXHJcbiAgICAgICAgLy/ov5Tlm55cclxuICAgICAgICByZXR1cm4gdGlwO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRJbmZvQmFzZV9JbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnVENoYXJ0cyc7ICAgICAgIC8v5Zu+6KGo5qCH6aKYXHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVUb3AgPSAxMDsgICAgICAgICAvL+agh+mimOS9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMudGl0bGVMZWZ0ID0gMTA7XHJcblxyXG4gICAgICAgIHRoaXMubGVnZW5kVG9wID0gMTA7ICAgICAgICAvL+WbvuS+i+S9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMubGVnZW5kTGVmdCA9IDIwO1xyXG4gICAgICAgIHRoaXMubGVnZW5kUmlnaHQgPSAyMDtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5VG9wID0gNzA7ICAgICAgIC8v5Zu+6KGo5Li75L2T5Yy65Z+f77yIeHnkuKTovbTlm7TmiJDnmoTnn6nlvaLljLrln5/vvInvvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLmJvZHlCb3R0b20gPSA1MDtcclxuICAgICAgICB0aGlzLmJvZHlMZWZ0ID0gNTA7XHJcbiAgICAgICAgdGhpcy5ib2R5UmlnaHQgPSA1MDtcclxuXHJcbiAgICAgICAgLy/lm77ooajkvb/nlKjnmoTpopzoibLmlbDnu4RcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFsnI0MyMzUzMScsICcjMkY0NTU0JywgJyM2MUEwQTgnLCAnI0Q0ODI2NScsICcjOTFDN0FFJywgJyNDQTg2MjInLCAnI0JEQTI5QScsICcjNkU3MDc0J107XHJcbiAgICAgICAgdGhpcy5zZXJpZXMgPSBbXTsgICAgICAgICAgICAgICAgIC8v5pWw5o2u57O75YiXXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7ICAgICAgICAgLy/pgInmi6npobnnmoTntKLlvJUgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXNCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBDaGFydEJhc2UgZnJvbSAnLi4vLi4vYmFzZS9jaGFydC9DaGFydEJhc2UuanMnO1xyXG5cclxuaW1wb3J0IENoYXJ0SW5mb19JbiBmcm9tICcuL2luZm8vQ2hhcnRJbmZvX0luLmpzJztcclxuXHJcbmltcG9ydCBTZWN0b3IgZnJvbSAnLi9wYXJ0cy9TZWN0b3IuanMnO1xyXG5pbXBvcnQgUGFpbnRlciBmcm9tICcuL3BhaW50ZXIvUGFpbnRlci5qcyc7XHJcblxyXG5pbXBvcnQgT2JqZWN0UG9vbCBmcm9tICcuLi8uLi9zdXBwb3J0L09iamVjdFBvb2wuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3N1cHBvcnQvQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uL3N1cHBvcnQvVXRpbGl0eS5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBDaGFydEJhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudERpdklEKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvL+eUqOaIt+i+k+WFpe+8iOWbvuihqOW/heWkh+S/oeaBr++8iVxyXG4gICAgICAgIHRoaXMuY2hhcnRJbmZvX0luID0gbmV3IENoYXJ0SW5mb19JbigpOyAgICAgICAgICAgICAgICAgICAgIC8v5Zu+6KGo5L+h5oGv44CC5L6L77ya5Zu+6KGo5ZCN56ewXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gW107ICAgICAgICAgLy/lrZjmlL7miYflvaLnmoTkuIDnu7TmlbDnu4RcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG51bGw7ICAgICAgICAvL+aJh+W9ouWvueixoeaxoFxyXG4gICAgICAgIHRoaXMuX2ZpcnN0RGVlcEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydEl0ZW1BcnJheSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXJlbnREaXZDbGFzc05hbWUgPSAnc3VuYnVyc0J5VmFsdWVDaGFydERpdic7ICAgIC8v5qC35byP5ZCNXHJcblxyXG4gICAgICAgIHRoaXMuX3RvdGFsVmFsdWUgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvL+iuvue9rueUu+WutlxyXG4gICAgICAgIHRoaXMuX3NldFBhaW50ZXIoUGFpbnRlcik7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5L2c5Li65Zu+6KGo5a655Zmo55qEZGl25a+56LGh77yM5bm25aKe5Yqg54m55a6a5qC35byP44CC5rOo5oSP77ya5piv5aKe5Yqg6ICM5LiN5piv5pu/5o2iXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RGl2SUQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+WKqOaAgeeUn+aIkF9jYW52YXPvvIzlubbmt7vliqDliLBET03moJHjgILlkIzml7bojrflj5blhbbkuIrkuIvmlodcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblr7nosaHmsaBcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG5ldyBPYmplY3RQb29sKFNlY3Rvcik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/pqozor4HmlbDmja7lkIjms5XmgKdcclxuICAgICAgICBpZiAodGhpcy5fY2hlY2soKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RDaGFydHNdIEluY29ycmVjdCBjaGFydCBkYXRhICEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ph43mlrDorr7lrprlkITnp43nirbmgIFcclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+aJh+W9ouS/oeaBr1xyXG4gICAgICAgIHRoaXMuX2dldEl0ZW1BbmRDb21wdXRlU3VuYnVyc0luZm8oKTtcclxuXHJcbiAgICAgICAgLy/lkK/liqjluKflvqrnjq/vvIzlnKjlvqrnjq/lhoXpg6jnu5jliLblm77ooahcclxuICAgICAgICB0aGlzLl9zdGFydFBhaW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfY2hlY2sgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5jaGFydEluZm9fSW4uc2VyaWVzWzBdLmRhdGE7XHJcblxyXG4gICAgICAgIC8v5qOA5p+lMe+8miDmlbDmja7mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfcmVzZXQgKCkge1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5fY2FudmFzLFxyXG4gICAgICAgICAgICBkaXYgPSB0aGlzLl9wYXJlbnREaXY7XHJcblxyXG4gICAgICAgIC8v56e76Zmk6byg5qCH5LqL5Lu255uR5ZCs5ZmoXHJcbiAgICAgICAgdGhpcy5fYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKENvbnN0YW50cy5SRU1PVkUpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruWwuuWvuFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpdi5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblm77kvovmlbDmja7jgIFsaW5l5a+56LGh5pWw57uEXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZmlyc3REZWVwSXRlbXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fdG90YWxWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAgIC8v5LuO5a+56LGh5rGg5Lit6YeK5pS+5pu+57uP5L2/55So6L+H55qE5omH5b2iXHJcbiAgICAgICAgdGhpcy5faXRlbVBvb2wucmVsZWFzZUFsbCgpO1xyXG5cclxuICAgICAgICAvL+WPlua2iOS4iuS4gOasoee7keWumueahOWKqOeUu+WHveaVsFxyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRpb25GcmFtZUlEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldEl0ZW1BbmRDb21wdXRlU3VuYnVyc0luZm8gKCkge1xyXG4gICAgICAgIGxldCBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBmaXJzdERlZXBJdGVtcyA9IHRoaXMuX2ZpcnN0RGVlcEl0ZW1zLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICByYWRpYW5Vbml0LFxyXG4gICAgICAgICAgICBhbmdsZSA9IC05MCxcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuXHJcbiAgICAgICAgLy/nlJ/miJDlhajpg6jmiYflvaLlr7nosaFcclxuICAgICAgICB0aGlzLl9jcmVhdGVJdGVtcygpO1xyXG5cclxuICAgICAgICAvL+S4ukRlZXDkuLow55qE5ZCE6aG555uu6K6+572u6KeS5bqmXHJcbiAgICAgICAgbGVuID0gZmlyc3REZWVwSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtID0gZmlyc3REZWVwSXRlbXNbaV07XHJcbiAgICAgICAgICAgIGl0ZW0uc3RhcnRBbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICBpdGVtLmFuZ2xlID0gaXRlbS52YWx1ZSAvIHRoaXMuX3RvdGFsVmFsdWUgKiAzNjA7XHJcbiAgICAgICAgICAgIGFuZ2xlICs9IGl0ZW0uYW5nbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+S4uuaJgOacieaJh+W9oumhueebruiuvue9ruWxnuaAp1xyXG4gICAgICAgIHJhZGlhblVuaXQgPSBDb25zdGFudHMuUkFESUFOX1VOSVQ7XHJcbiAgICAgICAgbGVuID0gaXRlbUFycmF5Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1BcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ueCA9IGNoYXJ0SW5mb19Jbi5jZW50ZXJYO1xyXG4gICAgICAgICAgICBpdGVtLnkgPSBjaGFydEluZm9fSW4uY2VudGVyWTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc2VjdG9yUmFkaXVzID0gY2hhcnRJbmZvX0luLnNlY3RvclJhZGl1cztcclxuICAgICAgICAgICAgaXRlbS5pbnNpZGVSYWRpdXMgPSBjaGFydEluZm9fSW4uaW5zaWRlUmFkaXVzICsgY2hhcnRJbmZvX0luLnNlY3RvclJhZGl1cyAqIGl0ZW0uZGVlcDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRlZXAgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5icnN1cHBvcnRJdGVtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0QW5nbGUgPSBpdGVtLnBhcmVudEl0ZW0uc3RhcnRBbmdsZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydEFuZ2xlID0gaXRlbS5icnN1cHBvcnRJdGVtLnN0YXJ0QW5nbGUgKyBpdGVtLmJyc3VwcG9ydEl0ZW0uYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS5hbmdsZSA9IGl0ZW0udmFsdWUgLyBpdGVtLnBhcmVudEl0ZW0udmFsdWUgKiBpdGVtLnBhcmVudEl0ZW0uYW5nbGU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpdGVtLnN0YXJ0UmFkaWFuID0gaXRlbS5zdGFydEFuZ2xlICogcmFkaWFuVW5pdDtcclxuICAgICAgICAgICAgaXRlbS5yYWRpYW4gPSBpdGVtLmFuZ2xlICogcmFkaWFuVW5pdDtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYmlzZWN0aW5nQW5nbGUgPSBpdGVtLnN0YXJ0QW5nbGUgKyBpdGVtLmFuZ2xlIC8gMjtcclxuICAgICAgICAgICAgaXRlbS5iaXNlY3RpbmdSYWRpYW4gPSBpdGVtLmJpc2VjdGluZ0FuZ2xlICogcmFkaWFuVW5pdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5bCG6YCJ5oup55qE6aG555uu5ZKM5pyq6YCJ5oup55qE6aG555uu5YiG57uEXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0KGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2NyZWF0ZUl0ZW1zICgpIHtcclxuICAgICAgICBsZXQgY2hhcnRJbmZvX0luID0gdGhpcy5jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGNvbG9ycyA9IGNoYXJ0SW5mb19Jbi5jb2xvcnMsXHJcbiAgICAgICAgICAgIHNlcmllcyA9IGNoYXJ0SW5mb19Jbi5zZXJpZXMsXHJcbiAgICAgICAgICAgIGl0ZW1BcnIgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGZpcnN0RGVlcEl0ZW1zID0gdGhpcy5fZmlyc3REZWVwSXRlbXMsXHJcbiAgICAgICAgICAgIHBvb2wgPSB0aGlzLl9pdGVtUG9vbCxcclxuICAgICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgICBhcnIsXHJcblxyXG4gICAgICAgICAgICBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8v5a6a5LmJXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlIChkYXRhQXJyLCBkZWVwLCBwYXJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtLFxyXG4gICAgICAgICAgICAgICAgYnJzdXBwb3J0SXRlbSA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpLCBsZW4gPSBkYXRhQXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gZGF0YUFycltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gcG9vbC5nZXRPYmooKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBvYmoubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLmRlZXAgPSBkZWVwO1xyXG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHBhcnNlRmxvYXQob2JqLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEl0ZW0gPSBwYXJlbnRJdGVtO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5icnN1cHBvcnRJdGVtID0gYnJzdXBwb3J0SXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kZWVwID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tpICUgbGVuXTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmJhY2tncm91bmRDb2xvckFscGhhID0gMS4wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdERlZXBJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLl90b3RhbFZhbHVlICs9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYmFja2dyb3VuZENvbG9yID0gcGFyZW50SXRlbS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5iYWNrZ3JvdW5kQ29sb3JBbHBoYSA9IHBhcmVudEl0ZW0uYmFja2dyb3VuZENvbG9yQWxwaGEgKiAwLjg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbUFyci5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyciA9IG9iai5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIGlmIChhcnIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShhcnIsIGRlZXAgKyAxLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicnN1cHBvcnRJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/miafooYxcclxuICAgICAgICBjcmVhdGUoc2VyaWVzWzBdLmRhdGEsIDAsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc2VsZWN0IChpbmRleCkge1xyXG4gICAgICAgIGxldCBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbUFycmF5ID0gdGhpcy5fc2VsZWN0ZWRJdGVtQXJyYXksXHJcbiAgICAgICAgICAgIHN1cHBvcnRJdGVtQXJyYXkgPSB0aGlzLl9zdXBwb3J0SXRlbUFycmF5LFxyXG4gICAgICAgICAgICB6ZXJvID0gQ29uc3RhbnRzLkNMT1NFX1RPX1pFUk8sXHJcbiAgICAgICAgICAgIGRlZXAsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLFxyXG4gICAgICAgICAgICBpdGVtLCBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgLy/muIXnqbrmlbDnu4RcclxuICAgICAgICBzZWxlY3RlZEl0ZW1BcnJheS5sZW5ndGggPSAwO1xyXG4gICAgICAgIHN1cHBvcnRJdGVtQXJyYXkubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgLy/ojrflj5bpobnnm67mgLvmlbBcclxuICAgICAgICBsZW4gPSBpdGVtQXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvL+ayoeaciemhueebruiiq+mAieaLqeeahOaXtuWAmVxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1BcnJheVtpXSA9IGl0ZW1BcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mnInpobnnm67ooqvpgInmi6nnmoTml7blgJlcclxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgIGRlZXAgPSBzZWxlY3RlZEl0ZW0uZGVlcDtcclxuICAgICAgICBzdGFydEFuZ2xlID0gc2VsZWN0ZWRJdGVtLnN0YXJ0QW5nbGU7XHJcbiAgICAgICAgZW5kQW5nbGUgPSBzdGFydEFuZ2xlICsgc2VsZWN0ZWRJdGVtLmFuZ2xlO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1BcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yik5pat6byg5qCH5L2N5LqO5ZOq5Liq5a+56LGh5LmL5LiK77yI6L+Z6YeM5pyJ5rWu54K55pWw57K+5bqm6Zeu6aKY77yJXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRlZXAgPj0gZGVlcCAmJlxyXG4gICAgICAgICAgICAgICAgaXRlbS5zdGFydEFuZ2xlID49IHN0YXJ0QW5nbGUgJiZcclxuICAgICAgICAgICAgICAgIGVuZEFuZ2xlIC0gaXRlbS5zdGFydEFuZ2xlID4gemVybykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRJdGVtQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lciAoY29tbWFuZCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcblxyXG4gICAgICAgICAgICByZWN0LFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHsgeDogLTEsIHk6IC0xIH0sXHJcblxyXG4gICAgICAgICAgICBpLCBsZW4sXHJcblxyXG4gICAgICAgICAgICBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvTW91c2VDbGljayAoZSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlum8oOagh+ebuOWvueS6jkNhbnZhc+eahOS9jee9rlxyXG4gICAgICAgICAgICByZWN0ID0gbWUuX2NhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgVXRpbGl0eS53aW5kb3dUb0NhbnZhcyhyZWN0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICByZWN0LnRvcCxcclxuICAgICAgICAgICAgICAgIHJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgICAgICByZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL+agueaNrum8oOagh+S9jee9ru+8jOaJvuWIsOm8oOagh+S9jeS6juWTquS4quWvueixoeS5i+S4ilxyXG4gICAgICAgICAgICBsZW4gPSBpdGVtQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtQXJyYXlbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3pvKDmoIfkvY3kuo7lk6rkuKrlr7nosaHkuYvkuIpcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzUG9pbnRJblBhdGgocG9zaXRpb24ueCwgcG9zaXRpb24ueSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zZWxlY3QoY2hhcnRJbmZvX0luLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aJp+ihjFxyXG4gICAgICAgIGlmIChjb21tYW5kID09IENvbnN0YW50cy5BREQgJiYgbWUuX2V2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1lLl9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb01vdXNlQ2xpY2spO1xyXG4gICAgICAgICAgICBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBDb25zdGFudHMuUkVNT1ZFICYmIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG1lLl9jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb01vdXNlQ2xpY2spO1xyXG4gICAgICAgICAgICBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc3RhcnRQYWludCAoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFpbnQgKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1lLl9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAxOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fcGFpbnQoKTsgICAgICAgIC8v57uY5Yi25Zu+6KGo5qGG5p6277yI5qCH6aKY44CB5Zu+5L6L562J77yJ77yM5Li657yT5Yqo5pWI5p6c5YGa5YeG5aSHICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDI6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLkFERCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuV0FJVElORztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5XQUlUSU5HO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W+queOr+iwg+eUqOiHquW3se+8jOi/m+ihjOe7mOeUu1xyXG4gICAgICAgICAgICBpZiAobWUuX3N0YXR1cyAhPSBTdGF0dXMuU1RPUCkge1xyXG4gICAgICAgICAgICAgICAgbWUuX2FuaW1hdGlvbkZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZShwYWludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6+572u5Yid5aeL54q25oCB77yM5byA5aeL57uY5Yi2XHJcbiAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMTtcclxuICAgICAgICBwYWludCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFydC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhcnQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFydC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgQ2hhcnRJbmZvQmFzZV9JbiBmcm9tICcuLi8uLi8uLi9iYXNlL2luZm8vQ2hhcnRJbmZvQmFzZV9Jbi5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRJbmZvX0luIGV4dGVuZHMgQ2hhcnRJbmZvQmFzZV9JbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5zZWN0b3JSYWRpdXMgPSA0MDsgICAgICAgICAgIC8v5omH5b2i5Y2K5b6EXHJcbiAgICAgICAgdGhpcy5pbnNpZGVSYWRpdXMgPSAzMDsgICAgICAgLy/lhoXljYrlvoRcclxuXHJcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gMzUwOyAgICAgICAgICAvL+WchueOr+S4reW/g+S9jee9rlxyXG4gICAgICAgIHRoaXMuY2VudGVyWSA9IDI1MDtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9TdHlsZXMuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9VdGlsaXR5LmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vUGFpbnRlcuS4reaXoOWFrOacieaIkOWRmOWPmOmHj1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0OyAgICAgICAgICAgICAgICAgICAgLy/lm77ooajlkITnsbvmlbDmja4gXHJcbiAgICAgICAgdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eDsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2U7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luOyAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5OyAgICAgICAgICAgICAgICAgLy/lrZjlgqjmiYflvaLngrnnmoTmlbDnu4RcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1BcnJheTtcclxuICAgICAgICB0aGlzLl9zdXBwb3J0SXRlbUFycmF5O1xyXG5cclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4OyAgICAgLy/ooqvpgInmi6nnmoTmiYflvaJcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXRDaGFydCAoY2hhcnQpIHtcclxuICAgICAgICB0aGlzLl9jaGFydCA9IGNoYXJ0O1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNoYXJ0Ll9jYW52YXM7XHJcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NoYXJ0SW5mb19JbiA9IGNoYXJ0LmNoYXJ0SW5mb19JbjtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gY2hhcnQuX2l0ZW1BcnJheTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1BcnJheSA9IGNoYXJ0Ll9zZWxlY3RlZEl0ZW1BcnJheTtcclxuICAgICAgICB0aGlzLl9zdXBwb3J0SXRlbUFycmF5ID0gY2hhcnQuX3N1cHBvcnRJdGVtQXJyYXk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBjaGFydC5jaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGFpbnQgKCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcbiAgICAgICAgICAgIGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQXJyYXkgPSB0aGlzLl9zZWxlY3RlZEl0ZW1BcnJheSxcclxuICAgICAgICAgICAgc3VwcG9ydEl0ZW1BcnJheSA9IHRoaXMuX3N1cHBvcnRJdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2NoYXJ0Ll9zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDE6ICAgICAgICAgLy/nu5jliLblm77ooajlubbnvJPlrZhDYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgICAgICAgICAvL+a4heepuueUu+W4g1xyXG4gICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WcqF9jdHjkuIrnu5jliLblm77ooajlm7rlrprnmoTlhoXlrrlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e8k+WtmOatpOaXtueahF9jdHjnu5jlm77ooajpnaLvvIjlhajlsLrlr7jvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2UgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi25omH5b2i5ZKM5qCH562+XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFN1bmJ1cnMoc2VsZWN0ZWRJdGVtQXJyYXksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRTdW5idXJzKHN1cHBvcnRJdGVtQXJyYXksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGFiZWwoc2VsZWN0ZWRJdGVtQXJyYXksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRMYWJlbChzdXBwb3J0SXRlbUFycmF5LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMzogICAgICAgICAvL+e7mOWItumAieaLqemhuVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5oGi5aSN57uY5Zu+6KGo6Z2i77yM5bCG5Zyo5q2k5LmL5LiK57uY5Yi25ZyG546vXHJcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuX2NhbnZhc1N1cmZhY2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi25omH5b2i5ZKM5qCH562+XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFN1bmJ1cnMoc2VsZWN0ZWRJdGVtQXJyYXksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRTdW5idXJzKHN1cHBvcnRJdGVtQXJyYXksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGFiZWwoc2VsZWN0ZWRJdGVtQXJyYXksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRMYWJlbChzdXBwb3J0SXRlbUFycmF5LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgX3BhaW50VGl0bGUgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuVElUTEVfRk9OVDtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fTEVGVDtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuICAgICAgICBjdHguZmlsbFRleHQoY2hhcnRJbmZvX0luLnRpdGxlLCBjaGFydEluZm9fSW4udGl0bGVMZWZ0LCBjaGFydEluZm9fSW4udGl0bGVUb3ApO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludFN1bmJ1cnMgKGl0ZW1BcnIsIHNlbGVjdGVkRmxhZykge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIHJhZGl1cyxcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBTdHlsZXMuU1VOQlVSU19CT1JERVJfQ09MT1I7XHJcblxyXG4gICAgICAgIC8v5b6q546v57uY5Yi25ZyG546vXHJcbiAgICAgICAgbGVuID0gaXRlbUFyci5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL+WPluW+l+aJh+W9ouWvueixoVxyXG4gICAgICAgICAgICBpdGVtID0gaXRlbUFycltpXTtcclxuXHJcbiAgICAgICAgICAgIC8v6K6+572u5aGr5YWF6aKc6ImyXHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGl0ZW0uYmFja2dyb3VuZENvbG9yQWxwaGE7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSAqPSAwLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGl0ZW0uYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICAgICAgLy/lubPnp7vliLDmiYflvaLkuK3lv4NcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShpdGVtLngsIGl0ZW0ueSk7XHJcblxyXG4gICAgICAgICAgICAvL+agueaNruWBj+enu+inkuW6pui/m+ihjOaXi+i9rFxyXG4gICAgICAgICAgICBjdHgucm90YXRlKGl0ZW0uc3RhcnRSYWRpYW4pO1xyXG5cclxuICAgICAgICAgICAgLy/mnoTlu7rot6/lvoRcclxuICAgICAgICAgICAgcmFkaXVzID0gaXRlbS5pbnNpZGVSYWRpdXMgKyBpdGVtLnNlY3RvclJhZGl1cztcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguYXJjKDAsIDAsIHJhZGl1cywgMCwgaXRlbS5yYWRpYW4pO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pbnNpZGVSYWRpdXMgPT0gMCkgICAgICAgIC8v5qC55o2u5YaF5Y2K5b6E5piv5ZCm5Li6MOWIhuWIq+WkhOeQhlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZShpdGVtLnJhZGlhbik7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGl0ZW0uaW5zaWRlUmFkaXVzLCAwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoLWl0ZW0ucmFkaWFuKTtcclxuICAgICAgICAgICAgICAgIGN0eC5hcmMoMCwgMCwgaXRlbS5pbnNpZGVSYWRpdXMsIGl0ZW0ucmFkaWFuLCAwLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAvL+Whq+WFhe+8jOaPj+i+uVxyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRMYWJlbCAoaXRlbUFyciwgc2VsZWN0ZWRGbGFnKSB7XHJcblxyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIHJhZGlhblVuaXQgPSBDb25zdGFudHMuUkFESUFOX1VOSVQsXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIHIsXHJcbiAgICAgICAgICAgIHgsIHksXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7lhbHlkIzmoLflvI9cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5MQUJFTF9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfTUlERExFO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9DRU5URVI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFN0eWxlcy5TVU5CVVJTX0xBQkVMX0NPTE9SO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhICo9IDAuMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5b6q546v57uY5Yi25qCH562+XHJcbiAgICAgICAgbGVuID0gaXRlbUFyci5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL+WPluW+l+aJh+W9ouWvueixoVxyXG4gICAgICAgICAgICBpdGVtID0gaXRlbUFycltpXTtcclxuXHJcbiAgICAgICAgICAgIC8v6K6h566X5paH5a2X57uY5Yi25L2N572uXHJcbiAgICAgICAgICAgIHIgPSBpdGVtLmluc2lkZVJhZGl1cyArIGl0ZW0uc2VjdG9yUmFkaXVzIC8gMjtcclxuICAgICAgICAgICAgeCA9IGl0ZW0ueCArIHIgKiBNYXRoLmNvcyhpdGVtLmJpc2VjdGluZ1JhZGlhbik7XHJcbiAgICAgICAgICAgIHkgPSBpdGVtLnkgKyByICogTWF0aC5zaW4oaXRlbS5iaXNlY3RpbmdSYWRpYW4pO1xyXG5cclxuICAgICAgICAgICAgLy/lubPnp7vliLDmiYflvaLkuK3lv4NcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u6KeS5YiG57q/6KeS5bqm6L+b6KGM5peL6L2sXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmJpc2VjdGluZ0FuZ2xlID49IC05MCAmJiBpdGVtLmJpc2VjdGluZ0FuZ2xlIDwgOTApIHtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoaXRlbS5iaXNlY3RpbmdSYWRpYW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSgoaXRlbS5iaXNlY3RpbmdBbmdsZSAtIDE4MCkgKiByYWRpYW5Vbml0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChpdGVtLm5hbWUsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vICDliKnnlKjpl63ljIXlkoznq4vljbPmiafooYzlh73mlbDliJvlu7rljZXkvotcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblBhaW50ZXIuZ2V0SW5zdGFuY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGluc3RhbmNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBQYWludGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0pKCk7IiwiaW1wb3J0IFBhcnRCYXNlIGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3RvciBleHRlbmRzIFBhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5zZWN0b3JSYWRpdXM7ICAgICAgICAgLy/miYflvaLljYrlvoRcclxuICAgICAgICB0aGlzLmluc2lkZVJhZGl1czsgICAgICAgICAvL+aJh+W9ouWGheWchuWNiuW+hFxyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0QW5nbGU7ICAgICAgICAgICAvL+aJh+W9oueahOi1t+Wni+inkuW6plxyXG4gICAgICAgIHRoaXMuc3RhcnRSYWRpYW47ICAgICAgICAgIC8v5omH5b2i55qE6LW35aeL5byn5bqm77yI6KeS5bqm6L2s5byn5bqm77yJXHJcblxyXG4gICAgICAgIHRoaXMuYW5nbGU7ICAgICAgICAgICAgICAgLy/miYflvaLnmoTop5LluqZcclxuICAgICAgICB0aGlzLnJhZGlhbjsgICAgICAgICAgICAgIC8v5omH5b2i55qE5byn5bqm77yI6KeS5bqm6L2s5byn5bqm77yJXHJcblxyXG4gICAgICAgIHRoaXMuYmlzZWN0aW5nQW5nbGU7ICAgICAgLy/miYflvaLnmoTop5LliIbnur/op5LluqZcclxuICAgICAgICB0aGlzLmJpc2VjdGluZ1JhZGlhbjsgICAgIC8v5omH5b2i55qE6KeS5YiG57q/5byn5bqm77yI6KeS5bqm6L2s5byn5bqm77yJXHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yOyAgICAgIC8v5omH5b2i6aKc6ImyXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JBbHBoYTsgIC8v5omH5b2i6aKc6Imy6YCP5piO5bqmXHJcblxyXG4gICAgICAgIHRoaXMuZGVlcDsgICAgICAgICAgICAgICAgLy/miYflvaLlnKjlvoTlkJHmiYDlnKjnmoTlsYLnuqfvvIzmnIDph4zlsYLkuLow77yM5ZCR5aSW6YCQ5bGC5aKe5YqgMVxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaXNQb2ludEluUGF0aCAoeCwgeSkge1xyXG4gICAgICAgIGxldCBydG4gPSBmYWxzZSxcclxuICAgICAgICAgICAgZGlmZlgsIGRpZmZZLFxyXG4gICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgICAgIGFuZ2xlO1xyXG5cclxuICAgICAgICAvL+iuoeeul+aMh+WumueCueWSjOacrOaJh+W9ouWdkOagh+S5i+mXtOeahOaoquWQke+8jOe6teWQkei3neemu1xyXG4gICAgICAgIGRpZmZYID0geCAtIHRoaXMueDtcclxuICAgICAgICBkaWZmWSA9IHkgLSB0aGlzLnk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5oyH5a6a54K55ZKM5pys5omH5b2i5Z2Q5qCH5LmL6Ze055qE6Led56a7XHJcbiAgICAgICAgcmFkaXVzID0gTWF0aC5zcXJ0KGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZKTtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmjIflrprngrnlkozmnKzmiYflvaLlnZDmoIfov57nur/kuI546L2055qE5aS56KeSXHJcbiAgICAgICAgYW5nbGUgPSBNYXRoLmF0YW4yKGRpZmZZLCBkaWZmWCkgKiAxODAgLyBNYXRoLlBJO1xyXG5cclxuICAgICAgICAvL+agoeato+esrOWbm+ixoemZkOinkuW6plxyXG4gICAgICAgIGlmIChhbmdsZSA+IC0xODAgJiYgYW5nbGUgPCAtOTApIHtcclxuICAgICAgICAgICAgYW5nbGUgKz0gMzYwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/liKTmlq3mjIflrprngrnkuI7mnKzmiYflvaLnmoTlhbPns7tcclxuICAgICAgICBpZiAocmFkaXVzID49IHRoaXMuaW5zaWRlUmFkaXVzICYmXHJcbiAgICAgICAgICAgIHJhZGl1cyA8PSAodGhpcy5pbnNpZGVSYWRpdXMgKyB0aGlzLnNlY3RvclJhZGl1cykgJiZcclxuICAgICAgICAgICAgYW5nbGUgPj0gdGhpcy5zdGFydEFuZ2xlICYmXHJcbiAgICAgICAgICAgIGFuZ2xlIDwgKHRoaXMuc3RhcnRBbmdsZSArIHRoaXMuYW5nbGUpKSB7XHJcbiAgICAgICAgICAgIHJ0biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG4gICAgfVxyXG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOWumuS5iXdpbmRvd+WKqOeUu+W+queOr+aOp+WItuWHveaVsO+8iOWIqeeUqOeri+WNs+aJp+ihjOWHveaVsO+8iVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG53aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbiAoZnVuYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmMsIDE2KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbn0pKCk7XHJcbiIsImNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIERJUlRZOiAnLScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WumuS5ieaVsOaNruaXtu+8jOeUqOadpeihqOekuuayoeacieaVsOaNru+8jOaIluiEj+aVsOaNru+8iOaXoOaViOaVsOaNru+8iVxyXG4gICAgSEFMRl9QSVhFTDogMC41LCAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y2K5Liq5YOP57SgXHJcblxyXG4gICAgQ0xPU0VfVE9fWkVSTzogMC4wMDAwMDAxLCAgICAgICAgICAgICAgIC8v5rWu54K55pWw6K6h566X5Lya5pyJ57K+5bqm6K+v5beu77yM6K+l5bi46YeP55So5LqO5Yik5pat5Lik5Liq5rWu54K55pWw5piv5ZCm55u4562J44CC5aaC5p6c5Lik5Liq5rWu54K55pWw55qE5beu5YC85bCP5LqO6K+l5pWw77yM5YiZ6K6k5Li655u4562J44CCXHJcblxyXG4gICAgVEVYVF9CQVNFX0xJTkVfTUlERExFOiAnbWlkZGxlJywgICAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+e6teWQkeaOkuWIl+WxnuaAp1xyXG4gICAgVEVYVF9CQVNFX0xJTkVfVE9QOiAndG9wJyxcclxuICAgIFRFWFRfQkFTRV9MSU5FX0JPVFRPTTogJ2JvdHRvbScsXHJcblxyXG4gICAgVEVYVF9BTElHTl9DRU5URVI6ICdjZW50ZXInLCAgICAgICAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+aoquWQkeaOkuWIl+WxnuaAp1xyXG4gICAgVEVYVF9BTElHTl9MRUZUOiAnbGVmdCcsXHJcbiAgICBURVhUX0FMSUdOX1JJR0hUOiAncmlnaHQnLFxyXG5cclxuICAgIFRFWFRfQkFTRV9MSU5FX0lERU9HUkFQSElDOiAnaWRlb2dyYXBoaWMnLCAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+Wfuue6v+WxnuaAp1xyXG5cclxuICAgIEFERDogJ2FkZCcsXHJcbiAgICBSRU1PVkU6ICdyZW1vdmUnLFxyXG5cclxuICAgIFhfQVhJUzogJ3gtYXhpcycsICAgICAgICAgICAgICAgLy/ku6PooajmmK946L206L+Y5piveei9tFxyXG4gICAgWV9BWElTOiAneS1heGlzJyxcclxuXHJcbiAgICBSQURJQU5fVU5JVDogTWF0aC5QSSAvIDE4MCAgICAgIC8v5byn5bqm5Y2V5L2NXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHM7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFBvb2wge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsYXp6LCBwYXJhKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2NsYXNzID0gY2xheno7ICAgLy/nsbvlkI1cclxuICAgICAgICB0aGlzLl9wYXJhID0gcGFyYTsgICAgICAvL+WunuS+i+WMluWvueixoeaXtueahOWPguaVsFxyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDsgICAgICAgIC8v5a+56LGh5rGg5Lit5a+56LGh55qE5Liq5pWwXHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IFtdOyAgICAgICAgLy/lr7nosaHmsaBcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBnZXRPYmogKCkge1xyXG4gICAgICAgIGxldCBwb29sID0gdGhpcy5fcG9vbCxcclxuICAgICAgICAgICAgbGVuLFxyXG4gICAgICAgICAgICBvYmo7XHJcblxyXG4gICAgICAgIC8v5aaC5p6c5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWw5aSn5LqO5oiW562J5LqO5rGg5Lit5bey5pyJ5a+56LGh5Liq5pWw77yMXHJcbiAgICAgICAgLy/liJnmlrDnlJ/miJDkuIDkuKrlr7nosaHvvJvlkKbliJnku47msaDkuK3nm7TmjqXlj5blvpflr7nosaFcclxuICAgICAgICBpZiAodGhpcy5fY291bnQgPj0gcG9vbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgb2JqID0gbmV3IHRoaXMuX2NsYXNzKHRoaXMuX3BhcmEpO1xyXG5cclxuICAgICAgICAgICAgbGVuID0gcG9vbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHBvb2xbbGVuXSA9IG9iajtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0gcG9vbFt0aGlzLl9jb3VudF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iusOW9leW9k+WJjeW3suS9v+eUqOeahOWvueixoeS4quaVsFxyXG4gICAgICAgIHRoaXMuX2NvdW50Kys7XHJcblxyXG4gICAgICAgIC8v6L+U5Zue5a+56LGhXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAqIOW9k+WJjeW3suS9v+eUqOeahOWvueixoeS4quaVsOa4hembtlxyXG4gICAgKiDov5nmoLfvvIzlvZPlh73mlbBnZXRPYmooKeiiq+iwg+eUqOeahOaXtuWAme+8jOaxoOS4reaJgOacieWvueixoemDveWPr+S9v+eUqFxyXG4gICAgKi9cclxuICAgIHJlbGVhc2VBbGwgKCkge1xyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbn0iLCJjb25zdCBTdGF0dXMgPSB7XHJcbiAgICBcclxuICAgIFNURVAxOiAnc3RlcDEnLFxyXG4gICAgU1RFUDI6ICdzdGVwMicsXHJcbiAgICBTVEVQMzogJ3N0ZXAzJyxcclxuICAgIFNURVA0OiAnc3RlcDQnLFxyXG4gICAgU1RFUDU6ICdzdGVwNScsXHJcbiAgICBXQUlUSU5HOiAnd2FpdGluZycsXHJcbiAgICBTVE9QOiAnc3RvcCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1czsiLCJjb25zdCBTdHlsZXMgPSB7XHJcbiAgICBcclxuICAgIC8v5YWx5ZCM6YOo5YiGXHJcbiAgICBUSVRMRV9GT05UOiAnMTZweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgICAvL+agh+mimOWtl+S9kyAgICAgICAgXHJcbiAgICBMRUdFTkRfRk9OVDogJzE0cHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAgICAvL+WbvuS+i+Wtl+S9kyAgXHJcbiAgICBMQUJFTF9GT05UOiAnMTBweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgICAvL+agh+etvuWtl+S9kyAgXHJcbiAgICBBWElTX05BTUVfRk9OVDogJzE0cHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAvL+i9tOWQjeensOWtl+S9kyAgXHJcbiAgICBGT05UX0ZJTExfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAgICAgICAvL+m7mOiupOWtl+S9k+Whq+WFheminOiJslxyXG4gICAgQVhJU19MSU5FX1dJRFRIOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/ovbTnur/nmoTnur/lrr1cclxuICAgIEFYSVNfTElORV9DT0xPUjogJyMzMzMzMzMnLCAgICAgICAgICAgICAgICAgIC8v6L2057q/6aKc6ImyXHJcbiAgICBBWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOiA1LCAgICAgICAgICAgICAgICAvL+WIu+W6pue6v+eahOmVv+W6plxyXG4gICAgR1JJRF9MSU5FX1dJRFRIOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/nmoTnur/lrr1cclxuICAgIEdSSURfTElORV9DT0xPUjogJyNCQkNDREQnLCAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/6aKc6ImyXHJcbiAgICBHUklEX0xJTkVfREFTSDogWzUsIDVdLCAgICAgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+eCueeahOmXtOmalFxyXG4gICAgWEFYSVNfTEFCRUxfT0ZGU0VUOiAxNiwgICAgICAgICAgICAgICAgICAgICAgLy946L205qCH562+5paH5a2X5Lit5b+D54K55YiweOi9tOe6v+eahOi3neemu1xyXG4gICAgWEFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEU6IDE2LCAgICAgICAgICAgLy946L205qCH562+5peL6L2s5pe277yM5paH5a2X5Lit5b+D54K55YiweOi9tOe6v+eahOi3neemu1xyXG4gICAgWUFYSVNfTEFCRUxfT0ZGU0VUOiAxNiwgICAgICAgICAgICAgICAgICAgICAgLy956L205qCH562+5paH5a2X5Lit5b+D54K55Yiweei9tOe6v+eahOi3neemu1xyXG4gICAgWUFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEU6IDE2LCAgICAgICAgICAgLy956L205qCH562+5peL6L2s5pe277yM5paH5a2X5Lit5b+D54K55Yiweei9tOe6v+eahOi3neemu1xyXG4gICAgTEVHRU5EX1NIQVBFX1RFWFRfR0FQOiA1LCAgICAgICAgICAgICAgICAgICAgLy/lm77kvovkuK3vvIzoibLlnZflkozmloflrZfnmoTpl7TpmpRcclxuICAgIExFR0VORF9HQVA6IDE1LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+5L6L5qiq5ZCR5o6S5YiX5pe277yM5Zu+5L6L5LmL6Ze055qE6Ze06ZqUXHJcbiAgICBUSVBfTE9DQVRJT05fT0ZGU0VUOiAyMCwgICAgICAgICAgICAgICAgICAgICAvL+WumuS9jVRpcOS9jee9ruaXtu+8jOebuOWvuem8oOagh+S9jee9rueahOWBj+enu+mHj1xyXG5cclxuXHJcbiAgICAvL+awlOazoeWbvlxyXG4gICAgQlVCQkxFX0FMUEhBOiAwLjcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rCU5rOh55qE6YCP5piO5bqmXHJcblxyXG5cclxuICAgIC8v5p+x54q25Zu+XHJcbiAgICBDT0xVTU5fU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgLy/nlKjkuo7moYbpgInpobnnm67nmoTmlrnmoYbnmoTovrnmoYbnur/nur/lrr1cclxuICAgIENPTFVNTl9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0MyMzUzMScsICAgICAvL+eUqOS6juahhumAiemhueebrueahOaWueahhueahOi+ueahhue6v+minOiJslxyXG5cclxuXHJcbiAgICAvL+aKmOe6v+WbvlxyXG4gICAgTElORV9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAgICAgIC8v5oqY57q/55qE57q/5a69XHJcbiAgICBMSU5FX0FSRUFfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAgICAgLy/nu5jliLbpnaLnp6/lm77ml7bnmoTpgI/mmI7luqZcclxuICAgIExJTkVfTUFSS1BPSU5UX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAvL+agh+iusOeCueeahOe6v+WuvVxyXG4gICAgTElORV9NQVJLUE9JTlRfUkFESVVTOiAyLCAgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K555qE5ZyG5Y2K5b6EXHJcbiAgICBMSU5FX01BUktQT0lOVF9CQUtfQ09MT1I6ICcjRjNGM0YzJywgICAgICAgLy/moIforrDngrnnmoTog4zmma/popzoibJcclxuICAgIExJTkVfU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAvL+eUqOS6juagh+W/l+mAieaLqemhueeahOe6v+auteeahOe6v+WuvVxyXG4gICAgTElORV9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0MyMzUzMScsICAgICAgIC8v55So5LqO5qCH5b+X6YCJ5oup6aG555qE57q/5q6155qE6aKc6ImyXHJcblxyXG5cclxuICAgIC8v6aW85Zu+XHJcbiAgICBQSUVfTEFCRUxfSU5ORVJfRk9OVF9DT0xPUjogJyNGRkZGRkYnLCAgICAgLy/lvZPmoIfnrb7mloflrZflnKjppbzlhoXmmL7npLrml7bvvIzmloflrZfnmoTpopzoibJcclxuICAgIFBJRV9MQUJFTF9HVUlERV9MSU5FMV9TSVpFOiAyMCwgICAgICAgICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWkluaYvuekuuaXtu+8jOi/nuaOpemlvOWdl+WSjOagh+etvuaWh+Wtl+eahOW8leWvvOe6vzHnmoTplb/luqZcclxuICAgIFBJRV9MQUJFTF9HVUlERV9MSU5FMl9TSVpFOiAxNSwgICAgICAgICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWkluaYvuekuuaXtu+8jOi/nuaOpemlvOWdl+WSjOagh+etvuaWh+Wtl+eahOW8leWvvOe6vzLnmoTplb/luqZcclxuICAgIFBJRV9MQUJFTF9PRkZTRVQ6IDUsICAgICAgICAgICAgICAgICAgICAgICAvL+W8leWvvOe6v+WSjOagh+etvuaWh+Wtl+eahOmXtOi3nVxyXG4gICAgUElFX1NFTEVDVE9SX1RSQU5TTEFURTogMTAsICAgICAgICAgICAgICAgIC8v6KKr6YCJ5oup55qE6aW85Z2X55qE5L2N56e76YePXHJcbiAgICBQSUVfU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAgLy/moYbpgInmlbDmja7pobnnmoTmlrnmoYbnmoTovrnmoYbnur/nur/lrr1cclxuICAgIFBJRV9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0ZGMDAwMCcsICAgICAgICAvL+ahhumAieaVsOaNrumhueeahOaWueahhueahOi+ueahhuminOiJslxyXG5cclxuXHJcbiAgICAvL+mbt+i+vuWbvlxyXG4gICAgUkFEQVJfTEFCRUxfRk9OVDogJzEycHggTWljcm9zb2Z0IFlhSGVpJywgIC8v5oyH5qCH5paH5a2X55qE5a2X5L2TXHJcbiAgICBSQURBUl9MQUJFTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgICAgLy/mjIfmoIfmloflrZfnmoTpopzoibJcclxuICAgIFJBREFSX0xBQkVMX1BPU0lUSU9OX09GRlNFVDogMTAsICAgICAgICAgICAvL+aMh+agh+aWh+Wtl+WSjOWvueW6lOWkmui+ueW9oumhtueCueS5i+mXtOeahOmXtOi3nVxyXG4gICAgUkFEQVJfTElORV9XSURUSDogMy4wLCAgICAgICAgICAgICAgICAgICAgIC8v5pWw5o2u6Zu36L6+57q/55qE57q/5a69XHJcbiAgICBSQURBUl9CQUtfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLmoYbnur/lkozljYrlvoTliIblibLnur/nmoTnur/lrr1cclxuICAgIFJBREFSX0JBS19MSU5FX0NPTE9SOiAnI0M5QzlDOScsICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9ouahhue6v+WSjOWNiuW+hOWIhuWJsue6v+eahOminOiJslxyXG4gICAgUkFEQVJfQkFLX0ZJTExfQ09MT1I6ICcjRTZFNkU2JywgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i55qE6IOM5pmv6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5pWj54K55Zu+XHJcbiAgICBTQ0FUVEVSX1BPSU5UX0FMUEhBOiAwLjcsICAgICAgICAgICAgICAgICAgLy/mlaPngrnnmoTpgI/mmI7luqZcclxuICAgIFNDQVRURVJfQ1JPU1NfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAvL+eUqOS6juagh+ivhum8oOagh+S9jee9rueahOWNgeWtl+e6v+eahOe6v+WuvVxyXG4gICAgU0NBVFRFUl9DUk9TU19DT0xPUjogJyNGRjAwMDAnLCAgICAgICAgICAgIC8v55So5LqO5qCH6K+G6byg5qCH5L2N572u55qE5Y2B5a2X57q/55qE6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5pet5pel5Zu+XHJcbiAgICBTVU5CVVJTX0xBQkVMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgLy/moIfnrb7mloflrZfnmoTpopzoibJcclxuICAgIFNVTkJVUlNfQk9SREVSX0NPTE9SOiAnIzAwMDAwMCcgICAgICAgICAgICAvL+aJh+W9ouWdl+eahOi+ueahhuminOiJslxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVzOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOmdmeaAgeWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvKlxyXG4gICAgKiDorqHnrpfjgJDlgLzovbTjgJHnmoTliLvluqbljZXkvY1cclxuICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGVVbml0IChtaW4sIG1heCwgc2NhbGVNYXhDb3VudCkge1xyXG4gICAgICAgIGxldCBpLCBsZW4sXHJcbiAgICAgICAgICAgIGF2ZyxcclxuICAgICAgICAgICAgZ2FwcyA9IFsxLCAyLCAyLjUsIDUsIDEwXSxcclxuICAgICAgICAgICAgc2NhbGVVbml0LFxyXG4gICAgICAgICAgICBtYWduaXR1ZGU7XHJcblxyXG4gICAgICAgIC8v6K6h566X5Z2H5YiG5YC8XHJcbiAgICAgICAgYXZnID0gKG1heCAtIG1pbikgLyAoc2NhbGVNYXhDb3VudC0xKTtcclxuXHJcbiAgICAgICAgLy/orqHnrpflnYfliIblgLznmoTmlbDph4/nuqdcclxuICAgICAgICBtYWduaXR1ZGUgPSB0aGlzLmdldE1hZ25pdHVkZShhdmcpO1xyXG5cclxuICAgICAgICAvL+W+queOr++8jOebtOiHs+esrOS4gOS4quWkp+S6juaIluetieS6juWdh+WIhuWAvOeahOaVtOaVsOWAvOWHuueOsFxyXG4gICAgICAgIGxlbiA9IGdhcHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBzY2FsZVVuaXQgPSBnYXBzW2ldICogbWFnbml0dWRlO1xyXG4gICAgICAgICAgICBpZiAoc2NhbGVVbml0ID49IGF2Zykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHNjYWxlVW5pdDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAqIOiuoeeul+aMh+WumuaVsOWAvOeahOaVsOmHj+e6p1xyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYWduaXR1ZGUgKG51bSkge1xyXG4gICAgICAgIC8v6K6h566X5pWw5YC855qEMTDnmoTluYJcclxuICAgICAgICBsZXQgcG93ID0gTWF0aC5mbG9vcihNYXRoLmxvZyhudW0pIC8gTWF0aC5sb2coMTApKTs7XHJcblxyXG4gICAgICAgIC8v6K6h566X5pWw5YC855qE5pWw6YeP57qnXHJcbiAgICAgICAgbGV0IG1hZ25pdHVkZSA9IE1hdGgucG93KDEwLCBwb3cpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFnbml0dWRlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICogQ2FudmFz57uY5Yi25pe25a+55Z2Q5qCH6L+b6KGM5b6u6LCDXHJcbiAgICAqIOWbm+iIjeS6lOWFpeWPluaVtOWQjuWHj+WwjzAuNeWDj+e0oOOAgui/meagt++8jOWcqENhbnZhc+aXtuS9jee9ruWkhOS6juS4pOS4quWDj+e0oOS5i+mXtO+8jOmBv+WFjeWPkeiZmuOAglxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBhZGp1c3RQb3NpdGlvbiAoeE9SeSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHhPUnkpIC0gQ29uc3RhbnRzLkhBTEZfUElYRUw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgd2luZG93VG9DYW52YXMgKGJvdW5kaW5nQ2xpZW50UmVjdExlZnQsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0VG9wLFxyXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoLFxyXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCxcclxuICAgICAgICBjYW52YXNXaWR0aCxcclxuICAgICAgICBjYW52YXNIZWlnaHQsXHJcbiAgICAgICAgZ2xvYmxlWCxcclxuICAgICAgICBnbG9ibGVZLFxyXG4gICAgICAgIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgcG9zaXRpb24ueCA9IGdsb2JsZVggLSBib3VuZGluZ0NsaWVudFJlY3RMZWZ0ICogKGNhbnZhc1dpZHRoIC8gYm91bmRpbmdDbGllbnRSZWN0V2lkdGgpO1xyXG4gICAgICAgIHBvc2l0aW9uLnkgPSBnbG9ibGVZIC0gYm91bmRpbmdDbGllbnRSZWN0VG9wICogKGNhbnZhc0hlaWdodCAvIGJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGV4dFdpZHRoIChjYW52YXNDb250ZXh0LCB0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGV4dEhlaWdodCAoY2FudmFzQ29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KCdNJykud2lkdGggKiA3IC8gNjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJy4uL3NyYy9jaGFydC9zdW5idXJzQnlWYWx1ZS9jc3MvY2hhcnQuY3NzJyA7XHJcbmltcG9ydCAnLi4vc3JjL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFydCB9ICBmcm9tICcuLi9zcmMvY2hhcnQvc3VuYnVyc0J5VmFsdWUvQ2hhcnQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcmllcyB9ICBmcm9tICcuLi9zcmMvYmFzZS9zZXJpZXMvU2VyaWVzQmFzZS5qcyc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=