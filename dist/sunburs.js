(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sunburs"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["sunburs"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/sunbursEntry.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/sunburs/css/chart.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/sunburs/css/chart.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.sunbursChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.sunbursChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}", ""]);



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

/***/ "./src/chart/sunburs/Chart.js":
/*!************************************!*\
  !*** ./src/chart/sunburs/Chart.js ***!
  \************************************/
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
/* harmony import */ var _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/ChartInfo_In.js */ "./src/chart/sunburs/info/ChartInfo_In.js");
/* harmony import */ var _parts_Sector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/Sector.js */ "./src/chart/sunburs/parts/Sector.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/sunburs/painter/Painter.js");
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

    _this._selectedItemArray = [];
    _this._supportItemArray = [];
    _this._parentDivClassName = 'sunbursChartDiv'; //样式名
    ///////////////////////
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
      } //重设各种状态，数据


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

      this._itemArray.length = 0; //从对象池中释放曾经使用过的扇形

      this._itemPool.releaseAll(); //取消上一次绑定的动画函数


      window.cancelAnimationFrame(this._animationFrameID);
    }
  }, {
    key: "_getItemAndComputeSunbursInfo",
    value: function _getItemAndComputeSunbursInfo() {
      var chartInfo_In = this.chartInfo_In,
          itemArray = this._itemArray,
          item,
          radianUnit,
          unitAngle,
          numSegments,
          i,
          len; //生成全部扇形对象

      numSegments = this._createItems(); //计算单位角度

      unitAngle = 360 / numSegments; //为所有扇形项目设置属性

      radianUnit = _support_Constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].RADIAN_UNIT;
      len = itemArray.length;

      for (i = 0; i < len; i++) {
        item = itemArray[i];
        item.x = chartInfo_In.centerX;
        item.y = chartInfo_In.centerY;
        item.sectorRadius = chartInfo_In.sectorRadius;
        item.insideRadius = chartInfo_In.insideRadius + chartInfo_In.sectorRadius * item.deep;
        item.startAngle = -90 + unitAngle * item.no;
        item.startRadian = item.startAngle * radianUnit;
        item.angle = item.span * unitAngle;
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
          pool = this._itemPool,
          obj,
          arr,
          numSegments; //定义

      function create(dataArr, no, deep, backgroundColor, backgroundColorAlpha) {
        var i,
            len,
            item,
            totalSpan = 0;
        len = dataArr.length;

        for (i = 0; i < len; i++) {
          obj = dataArr[i];
          item = pool.getObj();
          item.name = obj.name;
          item.deep = deep;
          item.no = no;

          if (item.deep == 0) {
            item.backgroundColor = colors[i % len];
            item.backgroundColorAlpha = 1.0;
          } else {
            item.backgroundColor = backgroundColor;
            item.backgroundColorAlpha = backgroundColorAlpha * 0.8;
          }

          itemArr.push(item);
          arr = obj.children;

          if (arr != null) {
            item.span = create(arr, no, deep + 1, item.backgroundColor, item.backgroundColorAlpha);
          } else {
            item.span = 1;
          }

          no += item.span;
          totalSpan += item.span;
        }

        return totalSpan;
      } //执行


      numSegments = create(series[0].data, 0, 0, null, 0); //返回

      return numSegments;
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

/***/ "./src/chart/sunburs/css/chart.css":
/*!*****************************************!*\
  !*** ./src/chart/sunburs/css/chart.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/sunburs/css/chart.css");

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

/***/ "./src/chart/sunburs/info/ChartInfo_In.js":
/*!************************************************!*\
  !*** ./src/chart/sunburs/info/ChartInfo_In.js ***!
  \************************************************/
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

    _this.centerX = 350; //旭日图中心位置：相对于div左上角

    _this.centerY = 250;
    _this.insideRadius = 30; //最里层扇形的内半径

    _this.sectorRadius = 40; //扇形半径
    ///////////////////////
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

/***/ "./src/chart/sunburs/painter/Painter.js":
/*!**********************************************!*\
  !*** ./src/chart/sunburs/painter/Painter.js ***!
  \**********************************************/
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
      var ctx = this._ctx,
          selectedItemArray = this._selectedItemArray,
          supportItemArray = this._supportItemArray,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height;

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

/***/ "./src/chart/sunburs/parts/Sector.js":
/*!*******************************************!*\
  !*** ./src/chart/sunburs/parts/Sector.js ***!
  \*******************************************/
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

    _this.no;
    _this.span; ///////////////////////
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

/***/ "./webpackEntry/sunbursEntry.js":
/*!**************************************!*\
  !*** ./webpackEntry/sunbursEntry.js ***!
  \**************************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_sunburs_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/sunburs/css/chart.css */ "./src/chart/sunburs/css/chart.css");
/* harmony import */ var _src_chart_sunburs_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_sunburs_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_sunburs_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/sunburs/Chart.js */ "./src/chart/sunburs/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_sunburs_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/base/series/SeriesBase.js */ "./src/base/series/SeriesBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9zdW5idXJzL2Nzcy9jaGFydC5jc3MiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2NoYXJ0L0NoYXJ0QmFzZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vQ2hhcnRJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL3Nlcmllcy9TZXJpZXNCYXNlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3N1bmJ1cnMvQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvc3VuYnVycy9jc3MvY2hhcnQuY3NzP2Y4ZWIiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvc3VuYnVycy9pbmZvL0NoYXJ0SW5mb19Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9zdW5idXJzL3BhaW50ZXIvUGFpbnRlci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9zdW5idXJzL3BhcnRzL1NlY3Rvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvT2JqZWN0UG9vbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1N0YXR1cy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi93ZWJwYWNrRW50cnkvc3VuYnVyc0VudHJ5LmpzIl0sIm5hbWVzIjpbIkNoYXJ0QmFzZSIsIl9wYXJlbnREaXYiLCJfY2FudmFzIiwiX3RpcERpdiIsIl9wYWludGVyIiwiX3N0YXR1cyIsIl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyIsIl9zdXJmYWNlSW1hZ2VEYXRhIiwiX2FuaW1hdGlvbkZyYW1lSUQiLCJTdGF0dXMiLCJTVE9QIiwicGFpbnRlciIsImdldEluc3RhbmNlIiwic2V0Q2hhcnQiLCJwYWludCIsImNsYXNzTmFtZSIsInRpcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiQ2hhcnRJbmZvQmFzZV9JbiIsInRpdGxlIiwidGl0bGVUb3AiLCJ0aXRsZUxlZnQiLCJsZWdlbmRUb3AiLCJsZWdlbmRMZWZ0IiwibGVnZW5kUmlnaHQiLCJib2R5VG9wIiwiYm9keUJvdHRvbSIsImJvZHlMZWZ0IiwiYm9keVJpZ2h0IiwiY29sb3JzIiwic2VyaWVzIiwic2VsZWN0ZWRJbmRleCIsIlNlcmllc0Jhc2UiLCJuYW1lIiwiZGF0YSIsInNlbGVjdGVkIiwiQ2hhcnQiLCJwYXJlbnREaXZJRCIsImNoYXJ0SW5mb19JbiIsIkNoYXJ0SW5mb19JbiIsIl9pdGVtQXJyYXkiLCJfaXRlbVBvb2wiLCJfc2VsZWN0ZWRJdGVtQXJyYXkiLCJfc3VwcG9ydEl0ZW1BcnJheSIsIl9wYXJlbnREaXZDbGFzc05hbWUiLCJfc2V0UGFpbnRlciIsIlBhaW50ZXIiLCJnZXRFbGVtZW50QnlJZCIsIk9iamVjdFBvb2wiLCJTZWN0b3IiLCJfY2hlY2siLCJjb25zb2xlIiwibG9nIiwiX3Jlc2V0IiwiX2dldEl0ZW1BbmRDb21wdXRlU3VuYnVyc0luZm8iLCJfc3RhcnRQYWludCIsInJ0biIsImxlbmd0aCIsImNhbnZhcyIsImRpdiIsIl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb25zdGFudHMiLCJSRU1PVkUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicmVsZWFzZUFsbCIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaXRlbUFycmF5IiwiaXRlbSIsInJhZGlhblVuaXQiLCJ1bml0QW5nbGUiLCJudW1TZWdtZW50cyIsImkiLCJsZW4iLCJfY3JlYXRlSXRlbXMiLCJSQURJQU5fVU5JVCIsIngiLCJjZW50ZXJYIiwieSIsImNlbnRlclkiLCJzZWN0b3JSYWRpdXMiLCJpbnNpZGVSYWRpdXMiLCJkZWVwIiwic3RhcnRBbmdsZSIsIm5vIiwic3RhcnRSYWRpYW4iLCJhbmdsZSIsInNwYW4iLCJyYWRpYW4iLCJiaXNlY3RpbmdBbmdsZSIsImJpc2VjdGluZ1JhZGlhbiIsIl9zZWxlY3QiLCJpdGVtQXJyIiwicG9vbCIsIm9iaiIsImFyciIsImNyZWF0ZSIsImRhdGFBcnIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3JBbHBoYSIsInRvdGFsU3BhbiIsImdldE9iaiIsInB1c2giLCJjaGlsZHJlbiIsImluZGV4Iiwic2VsZWN0ZWRJdGVtQXJyYXkiLCJzdXBwb3J0SXRlbUFycmF5IiwiemVybyIsIkNMT1NFX1RPX1pFUk8iLCJlbmRBbmdsZSIsInNlbGVjdGVkSXRlbSIsImNvbW1hbmQiLCJyZWN0IiwicG9zaXRpb24iLCJtZSIsImRvTW91c2VDbGljayIsImUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJVdGlsaXR5Iiwid2luZG93VG9DYW52YXMiLCJsZWZ0IiwidG9wIiwiY2xpZW50WCIsImNsaWVudFkiLCJpc1BvaW50SW5QYXRoIiwiU1RFUDMiLCJBREQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlNURVAxIiwiX3BhaW50IiwiU1RFUDIiLCJXQUlUSU5HIiwicmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSIsIl9jaGFydCIsIl9jdHgiLCJfY2FudmFzU3VyZmFjZSIsIl9jaGFydEluZm9fSW4iLCJfc2VsZWN0ZWRJbmRleCIsImNoYXJ0IiwiZ2V0Q29udGV4dCIsImN0eCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2xlYXJSZWN0IiwiX3BhaW50VGl0bGUiLCJnZXRJbWFnZURhdGEiLCJfcGFpbnRTdW5idXJzIiwiX3BhaW50TGFiZWwiLCJwdXRJbWFnZURhdGEiLCJzYXZlIiwiZm9udCIsIlN0eWxlcyIsIlRJVExFX0ZPTlQiLCJ0ZXh0QWxpZ24iLCJURVhUX0FMSUdOX0xFRlQiLCJ0ZXh0QmFzZWxpbmUiLCJURVhUX0JBU0VfTElORV9UT1AiLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJzZWxlY3RlZEZsYWciLCJyYWRpdXMiLCJzdHJva2VTdHlsZSIsIlNVTkJVUlNfQk9SREVSX0NPTE9SIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJiZWdpblBhdGgiLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwic3Ryb2tlIiwiciIsIkxBQkVMX0ZPTlQiLCJURVhUX0JBU0VfTElORV9NSURETEUiLCJURVhUX0FMSUdOX0NFTlRFUiIsIlNVTkJVUlNfTEFCRUxfQ09MT1IiLCJNYXRoIiwiY29zIiwic2luIiwiaW5zdGFuY2UiLCJkaWZmWCIsImRpZmZZIiwic3FydCIsImF0YW4yIiwiUEkiLCJQYXJ0QmFzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnVuYyIsInNldFRpbWVvdXQiLCJESVJUWSIsIkhBTEZfUElYRUwiLCJURVhUX0JBU0VfTElORV9CT1RUT00iLCJURVhUX0FMSUdOX1JJR0hUIiwiVEVYVF9CQVNFX0xJTkVfSURFT0dSQVBISUMiLCJYX0FYSVMiLCJZX0FYSVMiLCJjbGF6eiIsInBhcmEiLCJfY2xhc3MiLCJfcGFyYSIsIl9jb3VudCIsIl9wb29sIiwiU1RFUDQiLCJTVEVQNSIsIkxFR0VORF9GT05UIiwiQVhJU19OQU1FX0ZPTlQiLCJGT05UX0ZJTExfQ09MT1IiLCJBWElTX0xJTkVfV0lEVEgiLCJBWElTX0xJTkVfQ09MT1IiLCJBWElTX1NDQUxFX1VOSVRfTElORV9TSVpFIiwiR1JJRF9MSU5FX1dJRFRIIiwiR1JJRF9MSU5FX0NPTE9SIiwiR1JJRF9MSU5FX0RBU0giLCJYQVhJU19MQUJFTF9PRkZTRVQiLCJYQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURSIsIllBWElTX0xBQkVMX09GRlNFVCIsIllBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFIiwiTEVHRU5EX1NIQVBFX1RFWFRfR0FQIiwiTEVHRU5EX0dBUCIsIlRJUF9MT0NBVElPTl9PRkZTRVQiLCJCVUJCTEVfQUxQSEEiLCJDT0xVTU5fU0VMRUNUT1JfTElORV9XSURUSCIsIkNPTFVNTl9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiTElORV9MSU5FX1dJRFRIIiwiTElORV9BUkVBX0FMUEhBIiwiTElORV9NQVJLUE9JTlRfV0lEVEgiLCJMSU5FX01BUktQT0lOVF9SQURJVVMiLCJMSU5FX01BUktQT0lOVF9CQUtfQ09MT1IiLCJMSU5FX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJMSU5FX1NFTEVDVE9SX0xJTkVfQ09MT1IiLCJQSUVfTEFCRUxfSU5ORVJfRk9OVF9DT0xPUiIsIlBJRV9MQUJFTF9HVUlERV9MSU5FMV9TSVpFIiwiUElFX0xBQkVMX0dVSURFX0xJTkUyX1NJWkUiLCJQSUVfTEFCRUxfT0ZGU0VUIiwiUElFX1NFTEVDVE9SX1RSQU5TTEFURSIsIlBJRV9TRUxFQ1RPUl9MSU5FX1dJRFRIIiwiUElFX1NFTEVDVE9SX0xJTkVfQ09MT1IiLCJSQURBUl9MQUJFTF9GT05UIiwiUkFEQVJfTEFCRUxfQ09MT1IiLCJSQURBUl9MQUJFTF9QT1NJVElPTl9PRkZTRVQiLCJSQURBUl9MSU5FX1dJRFRIIiwiUkFEQVJfQkFLX0xJTkVfV0lEVEgiLCJSQURBUl9CQUtfTElORV9DT0xPUiIsIlJBREFSX0JBS19GSUxMX0NPTE9SIiwiU0NBVFRFUl9QT0lOVF9BTFBIQSIsIlNDQVRURVJfQ1JPU1NfTElORV9XSURUSCIsIlNDQVRURVJfQ1JPU1NfQ09MT1IiLCJtaW4iLCJtYXgiLCJzY2FsZU1heENvdW50IiwiYXZnIiwiZ2FwcyIsInNjYWxlVW5pdCIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsIm51bSIsInBvdyIsImZsb29yIiwieE9SeSIsInJvdW5kIiwiYm91bmRpbmdDbGllbnRSZWN0TGVmdCIsImJvdW5kaW5nQ2xpZW50UmVjdFRvcCIsImJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoIiwiYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0IiwiZ2xvYmxlWCIsImdsb2JsZVkiLCJjYW52YXNDb250ZXh0IiwidGV4dCIsIm1lYXN1cmVUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FB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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QixHQUF1QyxDQUF2QyxHQUEyQyxDQUFsRDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdW5idXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VuYnVyc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUXCJdID0gcm9vdFtcIlRcIl0gfHwge30sIHJvb3RbXCJUXCJdW1wic3VuYnVyc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2VicGFja0VudHJ5L3N1bmJ1cnNFbnRyeS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogXFxyXFxuICog5Zu+6KGo5YaF5YWo5bGA6K6+5a6a77yI5b+F6aG76aG555uu77yJXFxyXFxuICog55So5LqO5riF6Zmk77yI5Yid5aeL5YyW77yJ5omA5pyJ6buY6K6k5YaF5aSW6L656LedIFxcclxcbiAqL1xcclxcbi5zdW5idXJzQ2hhcnREaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDsgICAgICAgICAgICAvKiDmuIXpmaTvvIjliJ3lp4vljJbvvInlm77ooajlhoXmiYDmnInlhYPntKDnmoTpu5jorqTlhoXovrnot50gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggOyAgICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5aSW6L656LedICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFxcclxcbiAqIOe7mOWItuS4u+S9k+eahENhbnZhc1xcclxcbiAqL1xcclxcbi5zdW5idXJzQ2hhcnREaXYgY2FudmFzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgIC8qIOe7neWvueWumuS9je+8jOi/meagtzLkuKrlnZflhYPntKDvvIhDYW52YXPvvInmiY3kvJrph43lj6DlnKjkuIDotbcgKi9cXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxyXFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uL3N1cHBvcnQvU3RhdHVzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gbnVsbDsgICAgICAgICAgICAgICAgIC8v5a2Q57uE5Lu2OiDlm77ooajlkITkuKrlrZDnu4Tku7bnmoTniLblrrnlmahcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3RpcERpdiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIgPSBudWxsOyAgICAgICAgICAgICAgICAgICAvL+eUu+WutuW8leeUqFxyXG5cclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnJzsgICAgICAgICAgICAgICAgICAgICAgLy/nirbmgIFcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSBmYWxzZTsgIC8v55Sx5LqOanPml6Dms5XliKTmlq3kuovku7bnm5HlkKzlh73mlbDmmK/lkKblt7Lnu4/lrZjlnKjvvIzlm6DmraToh6rlrprkuYnmoIflv5fkvY3mnaXliKTmlq1cclxuICAgICAgICB0aGlzLl9zdXJmYWNlSW1hZ2VEYXRhID0gbnVsbDsgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaLvvIznlKjkuo7kv53lrZhDYW52YXPlm77niYdcclxuXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRDtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0b3AgKCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IFN0YXR1cy5TVE9QO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfc2V0UGFpbnRlciAocGFpbnRlcikge1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIgPSBwYWludGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50ICgpIHtcclxuICAgICAgICB0aGlzLl9wYWludGVyLnNldENoYXJ0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIucGFpbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiDliqjmgIHnlJ/miJB0aXDlr7nosaFcclxuICAgICog5Zyo5pys5Zu+6KGo57O75YiX5Lit77yMdGlw5piv55Sx5q616JC9cOWvueixoeWSjHRhYmxl5a+56LGh5p6E5oiQ77yM5YW25aSW6KeC55Sx5aSW6YOo5oyH5a6a55qEQ1NT5o6n5Yi2XHJcbiAgICAqL1xyXG4gICAgX2NyZWF0ZVRpcCAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IHRpcDtcclxuXHJcbiAgICAgICAgLy/nlJ/miJB0aXDnmoRkaXblr7nosaEs5bm25aKe5YqgY2xhc3PmoLflvI/jgILms6jmhI/vvJrmmK/lop7liqDogIzkuI3mmK/mm7/mjaJcclxuICAgICAgICB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXAuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDmrrXokL3lr7nosaHvvIznlKjkuo7mmL7npLrnsbvnm67lkI3np7BcclxuICAgICAgICB0aXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDooajmoLzlr7nosaHvvIznlKjkuo7ns7vliJflkI3np7DlkozmlbDmja5cclxuICAgICAgICB0aXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKSk7XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHRpcDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0SW5mb0Jhc2VfSW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnRpdGxlID0gJ1RDaGFydHMnOyAgICAgICAvL+WbvuihqOagh+mimFxyXG5cclxuICAgICAgICB0aGlzLnRpdGxlVG9wID0gMTA7ICAgICAgICAgLy/moIfpopjkvY3nva7vvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLnRpdGxlTGVmdCA9IDEwO1xyXG5cclxuICAgICAgICB0aGlzLmxlZ2VuZFRvcCA9IDEwOyAgICAgICAgLy/lm77kvovkvY3nva7vvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLmxlZ2VuZExlZnQgPSAyMDtcclxuICAgICAgICB0aGlzLmxlZ2VuZFJpZ2h0ID0gMjA7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keVRvcCA9IDcwOyAgICAgICAvL+WbvuihqOS4u+S9k+WMuuWfn++8iHh55Lik6L205Zu05oiQ55qE55+p5b2i5Yy65Z+f77yJ77ya55u45a+55LqOZGl26L6557yYXHJcbiAgICAgICAgdGhpcy5ib2R5Qm90dG9tID0gNTA7XHJcbiAgICAgICAgdGhpcy5ib2R5TGVmdCA9IDUwO1xyXG4gICAgICAgIHRoaXMuYm9keVJpZ2h0ID0gNTA7XHJcblxyXG4gICAgICAgIC8v5Zu+6KGo5L2/55So55qE6aKc6Imy5pWw57uEXHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbJyNDMjM1MzEnLCAnIzJGNDU1NCcsICcjNjFBMEE4JywgJyNENDgyNjUnLCAnIzkxQzdBRScsICcjQ0E4NjIyJywgJyNCREEyOUEnLCAnIzZFNzA3NCddO1xyXG4gICAgICAgIHRoaXMuc2VyaWVzID0gW107ICAgICAgICAgICAgICAgICAvL+aVsOaNruezu+WIl1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xOyAgICAgICAgIC8v6YCJ5oup6aG555qE57Si5byVIFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VyaWVzQmFzZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ2hhcnRCYXNlIGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzJztcclxuXHJcbmltcG9ydCBDaGFydEluZm9fSW4gZnJvbSAnLi9pbmZvL0NoYXJ0SW5mb19Jbi5qcyc7XHJcblxyXG5pbXBvcnQgU2VjdG9yIGZyb20gJy4vcGFydHMvU2VjdG9yLmpzJztcclxuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi9wYWludGVyL1BhaW50ZXIuanMnO1xyXG5cclxuaW1wb3J0IE9iamVjdFBvb2wgZnJvbSAnLi4vLi4vc3VwcG9ydC9PYmplY3RQb29sLmpzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9zdXBwb3J0L0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tICcuLi8uLi9zdXBwb3J0L1V0aWxpdHkuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ2hhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnREaXZJRCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy/nlKjmiLfovpPlhaXvvIjlm77ooajlv4XlpIfkv6Hmga/vvIlcclxuICAgICAgICB0aGlzLmNoYXJ0SW5mb19JbiA9IG5ldyBDaGFydEluZm9fSW4oKTsgICAgICAgICAgICAgICAgICAgICAvL+WbvuihqOS/oeaBr+OAguS+i++8muWbvuihqOWQjeensFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2l0ZW1BcnJheSA9IFtdOyAgICAgICAgIC8v5a2Y5pS+5omH5b2i55qE5LiA57u05pWw57uEXHJcbiAgICAgICAgdGhpcy5faXRlbVBvb2wgPSBudWxsOyAgICAgICAgLy/miYflvaLlr7nosaHmsaBcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdXBwb3J0SXRlbUFycmF5ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdkNsYXNzTmFtZSA9ICdzdW5idXJzQ2hhcnREaXYnOyAgICAvL+agt+W8j+WQjVxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvL+iuvue9rueUu+WutlxyXG4gICAgICAgIHRoaXMuX3NldFBhaW50ZXIoUGFpbnRlcik7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5L2c5Li65Zu+6KGo5a655Zmo55qEZGl25a+56LGh77yM5bm25aKe5Yqg54m55a6a5qC35byP44CC5rOo5oSP77ya5piv5aKe5Yqg6ICM5LiN5piv5pu/5o2iXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RGl2SUQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+WKqOaAgeeUn+aIkF9jYW52YXPvvIzlubbmt7vliqDliLBET03moJHjgILlkIzml7bojrflj5blhbbkuIrkuIvmlodcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblr7nosaHmsaBcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG5ldyBPYmplY3RQb29sKFNlY3Rvcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+mqjOivgeaVsOaNruWQiOazleaAp1xyXG4gICAgICAgIGlmICh0aGlzLl9jaGVjaygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVENoYXJ0c10gSW5jb3JyZWN0IGNoYXJ0IGRhdGEgIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+mHjeiuvuWQhOenjeeKtuaAge+8jOaVsOaNrlxyXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5omH5b2i5L+h5oGvXHJcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUFuZENvbXB1dGVTdW5idXJzSW5mbygpO1xyXG5cclxuXHJcbiAgICAgICAgLy/lkK/liqjluKflvqrnjq/vvIzlnKjlvqrnjq/lhoXpg6jnu5jliLblm77ooahcclxuICAgICAgICB0aGlzLl9zdGFydFBhaW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfY2hlY2sgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5jaGFydEluZm9fSW4uc2VyaWVzWzBdLmRhdGE7XHJcblxyXG4gICAgICAgIC8v5qOA5p+lMe+8miDmlbDmja7mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfcmVzZXQgKCkge1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5fY2FudmFzLFxyXG4gICAgICAgICAgICBkaXYgPSB0aGlzLl9wYXJlbnREaXY7XHJcblxyXG4gICAgICAgIC8v56e76Zmk6byg5qCH5LqL5Lu255uR5ZCs5ZmoXHJcbiAgICAgICAgdGhpcy5fYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKENvbnN0YW50cy5SRU1PVkUpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruWwuuWvuFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpdi5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblm77kvovmlbDmja7jgIFsaW5l5a+56LGh5pWw57uEXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5Lmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIC8v5LuO5a+56LGh5rGg5Lit6YeK5pS+5pu+57uP5L2/55So6L+H55qE5omH5b2iXHJcbiAgICAgICAgdGhpcy5faXRlbVBvb2wucmVsZWFzZUFsbCgpO1xyXG5cclxuICAgICAgICAvL+WPlua2iOS4iuS4gOasoee7keWumueahOWKqOeUu+WHveaVsFxyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRpb25GcmFtZUlEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldEl0ZW1BbmRDb21wdXRlU3VuYnVyc0luZm8gKCkge1xyXG4gICAgICAgIGxldCBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICByYWRpYW5Vbml0LFxyXG4gICAgICAgICAgICB1bml0QW5nbGUsXHJcbiAgICAgICAgICAgIG51bVNlZ21lbnRzLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ5YWo6YOo5omH5b2i5a+56LGhXHJcbiAgICAgICAgbnVtU2VnbWVudHMgPSB0aGlzLl9jcmVhdGVJdGVtcygpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+WNleS9jeinkuW6plxyXG4gICAgICAgIHVuaXRBbmdsZSA9IDM2MCAvIG51bVNlZ21lbnRzO1xyXG5cclxuICAgICAgICAvL+S4uuaJgOacieaJh+W9oumhueebruiuvue9ruWxnuaAp1xyXG4gICAgICAgIHJhZGlhblVuaXQgPSBDb25zdGFudHMuUkFESUFOX1VOSVQ7XHJcbiAgICAgICAgbGVuID0gaXRlbUFycmF5Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1BcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ueCA9IGNoYXJ0SW5mb19Jbi5jZW50ZXJYO1xyXG4gICAgICAgICAgICBpdGVtLnkgPSBjaGFydEluZm9fSW4uY2VudGVyWTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc2VjdG9yUmFkaXVzID0gY2hhcnRJbmZvX0luLnNlY3RvclJhZGl1cztcclxuICAgICAgICAgICAgaXRlbS5pbnNpZGVSYWRpdXMgPSBjaGFydEluZm9fSW4uaW5zaWRlUmFkaXVzICsgY2hhcnRJbmZvX0luLnNlY3RvclJhZGl1cyAqIGl0ZW0uZGVlcDtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc3RhcnRBbmdsZSA9IC05MCArIHVuaXRBbmdsZSAqIGl0ZW0ubm87XHJcbiAgICAgICAgICAgIGl0ZW0uc3RhcnRSYWRpYW4gPSBpdGVtLnN0YXJ0QW5nbGUgKiByYWRpYW5Vbml0O1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbmdsZSA9IGl0ZW0uc3BhbiAqIHVuaXRBbmdsZTtcclxuICAgICAgICAgICAgaXRlbS5yYWRpYW4gPSBpdGVtLmFuZ2xlICogcmFkaWFuVW5pdDtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYmlzZWN0aW5nQW5nbGUgPSBpdGVtLnN0YXJ0QW5nbGUgKyBpdGVtLmFuZ2xlIC8gMjtcclxuICAgICAgICAgICAgaXRlbS5iaXNlY3RpbmdSYWRpYW4gPSBpdGVtLmJpc2VjdGluZ0FuZ2xlICogcmFkaWFuVW5pdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5bCG6YCJ5oup55qE6aG555uu5ZKM5pyq6YCJ5oup55qE6aG555uu5YiG57uEXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0KGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2NyZWF0ZUl0ZW1zICgpIHtcclxuICAgICAgICBsZXQgY2hhcnRJbmZvX0luID0gdGhpcy5jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGNvbG9ycyA9IGNoYXJ0SW5mb19Jbi5jb2xvcnMsXHJcbiAgICAgICAgICAgIHNlcmllcyA9IGNoYXJ0SW5mb19Jbi5zZXJpZXMsXHJcbiAgICAgICAgICAgIGl0ZW1BcnIgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIHBvb2wgPSB0aGlzLl9pdGVtUG9vbCxcclxuICAgICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIG51bVNlZ21lbnRzO1xyXG5cclxuICAgICAgICAvL+WumuS5iVxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZSAoZGF0YUFyciwgbm8sIGRlZXAsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9yQWxwaGEpIHtcclxuICAgICAgICAgICAgbGV0IGksIGxlbixcclxuICAgICAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbFNwYW4gPSAwO1xyXG5cclxuICAgICAgICAgICAgbGVuID0gZGF0YUFyci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gZGF0YUFycltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gcG9vbC5nZXRPYmooKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBvYmoubmFtZTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGVlcCA9IGRlZXA7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5vID0gbm87XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGVlcCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbaSAlIGxlbl07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5iYWNrZ3JvdW5kQ29sb3JBbHBoYSA9IDEuMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5iYWNrZ3JvdW5kQ29sb3JBbHBoYSA9IGJhY2tncm91bmRDb2xvckFscGhhICogMC44O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW1BcnIucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcnIgPSBvYmouY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwYW4gPSBjcmVhdGUoYXJyLCBubywgZGVlcCArIDEsIGl0ZW0uYmFja2dyb3VuZENvbG9yLCBpdGVtLmJhY2tncm91bmRDb2xvckFscGhhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zcGFuID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBubyArPSBpdGVtLnNwYW47XHJcbiAgICAgICAgICAgICAgICB0b3RhbFNwYW4gKz0gaXRlbS5zcGFuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxTcGFuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/miafooYxcclxuICAgICAgICBudW1TZWdtZW50cyA9IGNyZWF0ZShzZXJpZXNbMF0uZGF0YSwgMCwgMCwgbnVsbCwgMCk7XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIG51bVNlZ21lbnRzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc2VsZWN0IChpbmRleCkge1xyXG4gICAgICAgIGxldCBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbUFycmF5ID0gdGhpcy5fc2VsZWN0ZWRJdGVtQXJyYXksXHJcbiAgICAgICAgICAgIHN1cHBvcnRJdGVtQXJyYXkgPSB0aGlzLl9zdXBwb3J0SXRlbUFycmF5LFxyXG4gICAgICAgICAgICB6ZXJvID0gQ29uc3RhbnRzLkNMT1NFX1RPX1pFUk8sXHJcbiAgICAgICAgICAgIGRlZXAsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLFxyXG4gICAgICAgICAgICBpdGVtLCBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgLy/muIXnqbrmlbDnu4RcclxuICAgICAgICBzZWxlY3RlZEl0ZW1BcnJheS5sZW5ndGggPSAwO1xyXG4gICAgICAgIHN1cHBvcnRJdGVtQXJyYXkubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgLy/ojrflj5bpobnnm67mgLvmlbBcclxuICAgICAgICBsZW4gPSBpdGVtQXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvL+ayoeaciemhueebruiiq+mAieaLqeeahOaXtuWAmVxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1BcnJheVtpXSA9IGl0ZW1BcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mnInpobnnm67ooqvpgInmi6nnmoTml7blgJlcclxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgIGRlZXAgPSBzZWxlY3RlZEl0ZW0uZGVlcDtcclxuICAgICAgICBzdGFydEFuZ2xlID0gc2VsZWN0ZWRJdGVtLnN0YXJ0QW5nbGU7XHJcbiAgICAgICAgZW5kQW5nbGUgPSBzdGFydEFuZ2xlICsgc2VsZWN0ZWRJdGVtLmFuZ2xlO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1BcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yik5pat6byg5qCH5L2N5LqO5ZOq5Liq5a+56LGh5LmL5LiK77yI6L+Z6YeM5pyJ5rWu54K55pWw57K+5bqm6Zeu6aKY77yJXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRlZXAgPj0gZGVlcCAmJlxyXG4gICAgICAgICAgICAgICAgaXRlbS5zdGFydEFuZ2xlID49IHN0YXJ0QW5nbGUgJiZcclxuICAgICAgICAgICAgICAgIGVuZEFuZ2xlIC0gaXRlbS5zdGFydEFuZ2xlID4gemVybykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRJdGVtQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lciAoY29tbWFuZCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcblxyXG4gICAgICAgICAgICByZWN0LFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHsgeDogLTEsIHk6IC0xIH0sXHJcblxyXG4gICAgICAgICAgICBpLCBsZW4sXHJcblxyXG4gICAgICAgICAgICBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvTW91c2VDbGljayAoZSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlum8oOagh+ebuOWvueS6jkNhbnZhc+eahOS9jee9rlxyXG4gICAgICAgICAgICByZWN0ID0gbWUuX2NhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgVXRpbGl0eS53aW5kb3dUb0NhbnZhcyhyZWN0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICByZWN0LnRvcCxcclxuICAgICAgICAgICAgICAgIHJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgICAgICByZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL+agueaNrum8oOagh+S9jee9ru+8jOaJvuWIsOm8oOagh+S9jeS6juWTquS4quWvueixoeS5i+S4ilxyXG4gICAgICAgICAgICBsZW4gPSBpdGVtQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtQXJyYXlbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3pvKDmoIfkvY3kuo7lk6rkuKrlr7nosaHkuYvkuIpcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzUG9pbnRJblBhdGgocG9zaXRpb24ueCwgcG9zaXRpb24ueSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zZWxlY3QoY2hhcnRJbmZvX0luLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aJp+ihjFxyXG4gICAgICAgIGlmIChjb21tYW5kID09IENvbnN0YW50cy5BREQgJiYgbWUuX2V2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1lLl9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb01vdXNlQ2xpY2spO1xyXG4gICAgICAgICAgICBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBDb25zdGFudHMuUkVNT1ZFICYmIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG1lLl9jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb01vdXNlQ2xpY2spO1xyXG4gICAgICAgICAgICBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3N0YXJ0UGFpbnQgKCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhaW50ICgpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChtZS5fc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMTpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7ICAgICAgICAvL+e7mOWItuWbvuihqOahhuaetu+8iOagh+mimOOAgeWbvuS+i+etie+8ie+8jOS4uue8k+WKqOaViOaenOWBmuWHhuWkhyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLlNURVAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAyOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKENvbnN0YW50cy5BREQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLldBSVRJTkc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDM6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuV0FJVElORztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lvqrnjq/osIPnlKjoh6rlt7HvvIzov5vooYznu5jnlLtcclxuICAgICAgICAgICAgaWYgKG1lLl9zdGF0dXMgIT0gU3RhdHVzLlNUT1ApIHtcclxuICAgICAgICAgICAgICAgIG1lLl9hbmltYXRpb25GcmFtZUlEID0gd2luZG93LnJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUocGFpbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iuvue9ruWIneWni+eKtuaAge+8jOW8gOWni+e7mOWItlxyXG4gICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDE7XHJcbiAgICAgICAgcGFpbnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhcnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhcnQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IENoYXJ0SW5mb0Jhc2VfSW4gZnJvbSAnLi4vLi4vLi4vYmFzZS9pbmZvL0NoYXJ0SW5mb0Jhc2VfSW4uanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0SW5mb19JbiBleHRlbmRzIENoYXJ0SW5mb0Jhc2VfSW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuY2VudGVyWCA9IDM1MDsgICAgICAgICAgLy/ml63ml6Xlm77kuK3lv4PkvY3nva7vvJrnm7jlr7nkuo5kaXblt6bkuIrop5JcclxuICAgICAgICB0aGlzLmNlbnRlclkgPSAyNTA7XHJcblxyXG4gICAgICAgIHRoaXMuaW5zaWRlUmFkaXVzID0gMzA7ICAgICAgIC8v5pyA6YeM5bGC5omH5b2i55qE5YaF5Y2K5b6EXHJcbiAgICAgICAgdGhpcy5zZWN0b3JSYWRpdXMgPSA0MDsgICAgICAgLy/miYflvaLljYrlvoRcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9TdHlsZXMuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9VdGlsaXR5LmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vUGFpbnRlcuS4reaXoOWFrOacieaIkOWRmOWPmOmHj1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0OyAgICAgICAgICAgICAgICAgICAgLy/lm77ooajlkITnsbvmlbDmja4gXHJcblxyXG4gICAgICAgIHRoaXMuX2NhbnZhcztcclxuICAgICAgICB0aGlzLl9jdHg7ICAgICAgICAgICAgICAgICAgICAgLy9DYW52YXPkuIrkuIvmlodcclxuICAgICAgICB0aGlzLl9jYW52YXNTdXJmYWNlOyAgICAgICAgICAgIC8vQ2FudmFz57uY5Zu+6KGo6Z2iXHJcblxyXG4gICAgICAgIHRoaXMuX2NoYXJ0SW5mb19JbjsgICAgICAgICAgICAgLy/lm77ooajlkITnsbvmlbDmja4gXHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1BcnJheTsgICAgICAgICAgICAgICAgIC8v5a2Y5YKo5omH5b2i54K555qE5pWw57uEXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtQXJyYXk7XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydEl0ZW1BcnJheTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleDsgICAgIC8v6KKr6YCJ5oup55qE5omH5b2iXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2V0Q2hhcnQgKGNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5fY2hhcnQgPSBjaGFydDtcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjaGFydC5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGFydEluZm9fSW4gPSBjaGFydC5jaGFydEluZm9fSW47XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1BcnJheSA9IGNoYXJ0Ll9pdGVtQXJyYXk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtQXJyYXkgPSBjaGFydC5fc2VsZWN0ZWRJdGVtQXJyYXk7XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydEl0ZW1BcnJheSA9IGNoYXJ0Ll9zdXBwb3J0SXRlbUFycmF5O1xyXG5cclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gY2hhcnQuY2hhcnRJbmZvX0luLnNlbGVjdGVkSW5kZXg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBhaW50ICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1BcnJheSA9IHRoaXMuX3NlbGVjdGVkSXRlbUFycmF5LFxyXG4gICAgICAgICAgICBzdXBwb3J0SXRlbUFycmF5ID0gdGhpcy5fc3VwcG9ydEl0ZW1BcnJheSxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY2hhcnQuX3N0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMTogICAgICAgICAvL+e7mOWItuWbvuihqOW5tue8k+WtmENhbnZhc+e7mOWbvuihqOmdolxyXG5cclxuICAgICAgICAgICAgICAgIC8v5riF56m655S75biDXHJcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5ZyoX2N0eOS4iue7mOWItuWbvuihqOWbuuWumueahOWGheWuuVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRUaXRsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57yT5a2Y5q2k5pe255qEX2N0eOe7mOWbvuihqOmdou+8iOWFqOWwuuWvuO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzU3VyZmFjZSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nu5jliLbmiYflvaLlkozmoIfnrb5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50U3VuYnVycyhzZWxlY3RlZEl0ZW1BcnJheSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFN1bmJ1cnMoc3VwcG9ydEl0ZW1BcnJheSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRMYWJlbChzZWxlY3RlZEl0ZW1BcnJheSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExhYmVsKHN1cHBvcnRJdGVtQXJyYXksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAzOiAgICAgICAgIC8v57uY5Yi26YCJ5oup6aG5XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mgaLlpI3nu5jlm77ooajpnaLvvIzlsIblnKjmraTkuYvkuIrnu5jliLblnIbnjq9cclxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5fY2FudmFzU3VyZmFjZSwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nu5jliLbmiYflvaLlkozmoIfnrb5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50U3VuYnVycyhzZWxlY3RlZEl0ZW1BcnJheSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFN1bmJ1cnMoc3VwcG9ydEl0ZW1BcnJheSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRMYWJlbChzZWxlY3RlZEl0ZW1BcnJheSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExhYmVsKHN1cHBvcnRJdGVtQXJyYXksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfcGFpbnRUaXRsZSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5USVRMRV9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9MRUZUO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfVE9QO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChjaGFydEluZm9fSW4udGl0bGUsIGNoYXJ0SW5mb19Jbi50aXRsZUxlZnQsIGNoYXJ0SW5mb19Jbi50aXRsZVRvcCk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50U3VuYnVycyAoaXRlbUFyciwgc2VsZWN0ZWRGbGFnKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFN0eWxlcy5TVU5CVVJTX0JPUkRFUl9DT0xPUjtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/nu5jliLblnIbnjq9cclxuICAgICAgICBsZW4gPSBpdGVtQXJyLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8v5Y+W5b6X5omH5b2i5a+56LGhXHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtQXJyW2ldO1xyXG5cclxuICAgICAgICAgICAgLy/orr7nva7loavlhYXpopzoibJcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gaXRlbS5iYWNrZ3JvdW5kQ29sb3JBbHBoYTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhICo9IDAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gaXRlbS5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAvL+W5s+enu+WIsOaJh+W9ouS4reW/g1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKGl0ZW0ueCwgaXRlbS55KTtcclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u5YGP56e76KeS5bqm6L+b6KGM5peL6L2sXHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoaXRlbS5zdGFydFJhZGlhbik7XHJcblxyXG4gICAgICAgICAgICAvL+aehOW7uui3r+W+hFxyXG4gICAgICAgICAgICByYWRpdXMgPSBpdGVtLmluc2lkZVJhZGl1cyArIGl0ZW0uc2VjdG9yUmFkaXVzO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmMoMCwgMCwgcmFkaXVzLCAwLCBpdGVtLnJhZGlhbik7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmluc2lkZVJhZGl1cyA9PSAwKSAgICAgICAgLy/moLnmja7lhoXljYrlvoTmmK/lkKbkuLow5YiG5Yir5aSE55CGXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKGl0ZW0ucmFkaWFuKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oaXRlbS5pbnNpZGVSYWRpdXMsIDApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSgtaXRlbS5yYWRpYW4pO1xyXG4gICAgICAgICAgICAgICAgY3R4LmFyYygwLCAwLCBpdGVtLmluc2lkZVJhZGl1cywgaXRlbS5yYWRpYW4sIDAsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgIC8v5aGr5YWF77yM5o+P6L65XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludExhYmVsIChpdGVtQXJyLCBzZWxlY3RlZEZsYWcpIHtcclxuXHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgcmFkaWFuVW5pdCA9IENvbnN0YW50cy5SQURJQU5fVU5JVCxcclxuICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgcixcclxuICAgICAgICAgICAgeCwgeSxcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruWFseWQjOagt+W8j1xyXG4gICAgICAgIGN0eC5mb250ID0gU3R5bGVzLkxBQkVMX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9NSURETEU7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0NFTlRFUjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gU3R5bGVzLlNVTkJVUlNfTEFCRUxfQ09MT1I7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkRmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgKj0gMC4xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lvqrnjq/nu5jliLbmoIfnrb5cclxuICAgICAgICBsZW4gPSBpdGVtQXJyLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8v5Y+W5b6X5omH5b2i5a+56LGhXHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtQXJyW2ldO1xyXG5cclxuICAgICAgICAgICAgLy/orqHnrpfmloflrZfnu5jliLbkvY3nva5cclxuICAgICAgICAgICAgciA9IGl0ZW0uaW5zaWRlUmFkaXVzICsgaXRlbS5zZWN0b3JSYWRpdXMgLyAyO1xyXG4gICAgICAgICAgICB4ID0gaXRlbS54ICsgciAqIE1hdGguY29zKGl0ZW0uYmlzZWN0aW5nUmFkaWFuKTtcclxuICAgICAgICAgICAgeSA9IGl0ZW0ueSArIHIgKiBNYXRoLnNpbihpdGVtLmJpc2VjdGluZ1JhZGlhbik7XHJcblxyXG4gICAgICAgICAgICAvL+W5s+enu+WIsOaJh+W9ouS4reW/g1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgLy/moLnmja7op5LliIbnur/op5Lluqbov5vooYzml4vovaxcclxuICAgICAgICAgICAgaWYgKGl0ZW0uYmlzZWN0aW5nQW5nbGUgPj0gLTkwICYmIGl0ZW0uYmlzZWN0aW5nQW5nbGUgPCA5MCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZShpdGVtLmJpc2VjdGluZ1JhZGlhbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKChpdGVtLmJpc2VjdGluZ0FuZ2xlIC0gMTgwKSAqIHJhZGlhblVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGl0ZW0ubmFtZSwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gIOWIqeeUqOmXreWMheWSjOeri+WNs+aJp+ihjOWHveaVsOWIm+W7uuWNleS+i1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuUGFpbnRlci5nZXRJbnN0YW5jZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5zdGFuY2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IFBhaW50ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxufSkoKTsiLCJpbXBvcnQgUGFydEJhc2UgZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC9DaGFydEJhc2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdG9yIGV4dGVuZHMgUGFydEJhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnNlY3RvclJhZGl1czsgICAgICAgICAvL+aJh+W9ouWNiuW+hFxyXG4gICAgICAgIHRoaXMuaW5zaWRlUmFkaXVzOyAgICAgICAgIC8v5omH5b2i5YaF5ZyG5Y2K5b6EXHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZTsgICAgICAgICAgIC8v5omH5b2i55qE6LW35aeL6KeS5bqmXHJcbiAgICAgICAgdGhpcy5zdGFydFJhZGlhbjsgICAgICAgICAgLy/miYflvaLnmoTotbflp4vlvKfluqbvvIjop5LluqbovazlvKfluqbvvIlcclxuXHJcbiAgICAgICAgdGhpcy5hbmdsZTsgICAgICAgICAgICAgICAvL+aJh+W9oueahOinkuW6plxyXG4gICAgICAgIHRoaXMucmFkaWFuOyAgICAgICAgICAgICAgLy/miYflvaLnmoTlvKfluqbvvIjop5LluqbovazlvKfluqbvvIlcclxuXHJcbiAgICAgICAgdGhpcy5iaXNlY3RpbmdBbmdsZTsgICAgICAvL+aJh+W9oueahOinkuWIhue6v+inkuW6plxyXG4gICAgICAgIHRoaXMuYmlzZWN0aW5nUmFkaWFuOyAgICAgLy/miYflvaLnmoTop5LliIbnur/lvKfluqbvvIjop5LluqbovazlvKfluqbvvIlcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3I7ICAgICAgLy/miYflvaLpopzoibJcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvckFscGhhOyAgLy/miYflvaLpopzoibLpgI/mmI7luqZcclxuXHJcbiAgICAgICAgdGhpcy5kZWVwOyAgICAgICAgICAgICAgICAvL+aJh+W9ouWcqOW+hOWQkeaJgOWcqOeahOWxgue6p++8jOacgOmHjOWxguS4ujDvvIzlkJHlpJbpgJDlsYLlop7liqAxXHJcbiAgICAgICAgdGhpcy5ubztcclxuICAgICAgICB0aGlzLnNwYW47XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBpc1BvaW50SW5QYXRoICh4LCB5KSB7XHJcbiAgICAgICAgbGV0IHJ0biA9IGZhbHNlLFxyXG4gICAgICAgICAgICBkaWZmWCwgZGlmZlksXHJcbiAgICAgICAgICAgIHJhZGl1cyxcclxuICAgICAgICAgICAgYW5nbGU7XHJcblxyXG4gICAgICAgIC8v6K6h566X5oyH5a6a54K55ZKM5pys5omH5b2i5Z2Q5qCH5LmL6Ze055qE5qiq5ZCR77yM57q15ZCR6Led56a7XHJcbiAgICAgICAgZGlmZlggPSB4IC0gdGhpcy54O1xyXG4gICAgICAgIGRpZmZZID0geSAtIHRoaXMueTtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmjIflrprngrnlkozmnKzmiYflvaLlnZDmoIfkuYvpl7TnmoTot53nprtcclxuICAgICAgICByYWRpdXMgPSBNYXRoLnNxcnQoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+aMh+WumueCueWSjOacrOaJh+W9ouWdkOagh+i/nue6v+S4jnjovbTnmoTlpLnop5JcclxuICAgICAgICBhbmdsZSA9IE1hdGguYXRhbjIoZGlmZlksIGRpZmZYKSAqIDE4MCAvIE1hdGguUEk7XHJcblxyXG4gICAgICAgIC8v5qCh5q2j56ys5Zub6LGh6ZmQ6KeS5bqmXHJcbiAgICAgICAgaWYgKGFuZ2xlID4gLTE4MCAmJiBhbmdsZSA8IC05MCkge1xyXG4gICAgICAgICAgICBhbmdsZSArPSAzNjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIpOaWreaMh+WumueCueS4juacrOaJh+W9oueahOWFs+ezu1xyXG4gICAgICAgIGlmIChyYWRpdXMgPj0gdGhpcy5pbnNpZGVSYWRpdXMgJiZcclxuICAgICAgICAgICAgcmFkaXVzIDw9ICh0aGlzLmluc2lkZVJhZGl1cyArIHRoaXMuc2VjdG9yUmFkaXVzKSAmJlxyXG4gICAgICAgICAgICBhbmdsZSA+PSB0aGlzLnN0YXJ0QW5nbGUgJiZcclxuICAgICAgICAgICAgYW5nbGUgPCAodGhpcy5zdGFydEFuZ2xlICsgdGhpcy5hbmdsZSkpIHtcclxuICAgICAgICAgICAgcnRuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBydG47XHJcbiAgICB9XHJcbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog5a6a5LmJd2luZG935Yqo55S75b6q546v5o6n5Yi25Ye95pWw77yI5Yip55So56uL5Y2z5omn6KGM5Ye95pWw77yJXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbndpbmRvdy5yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuYywgMTYpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxufSkoKTtcclxuIiwiY29uc3QgQ29uc3RhbnRzID0ge1xyXG4gICAgRElSVFk6ICctJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5a6a5LmJ5pWw5o2u5pe277yM55So5p2l6KGo56S65rKh5pyJ5pWw5o2u77yM5oiW6ISP5pWw5o2u77yI5peg5pWI5pWw5o2u77yJXHJcbiAgICBIQUxGX1BJWEVMOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/ljYrkuKrlg4/ntKBcclxuXHJcbiAgICBDTE9TRV9UT19aRVJPOiAwLjAwMDAwMDEsICAgICAgICAgICAgICAgLy/mta7ngrnmlbDorqHnrpfkvJrmnInnsr7luqbor6/lt67vvIzor6XluLjph4/nlKjkuo7liKTmlq3kuKTkuKrmta7ngrnmlbDmmK/lkKbnm7jnrYnjgILlpoLmnpzkuKTkuKrmta7ngrnmlbDnmoTlt67lgLzlsI/kuo7or6XmlbDvvIzliJnorqTkuLrnm7jnrYnjgIJcclxuXHJcbiAgICBURVhUX0JBU0VfTElORV9NSURETEU6ICdtaWRkbGUnLCAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X57q15ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0JBU0VfTElORV9UT1A6ICd0b3AnLFxyXG4gICAgVEVYVF9CQVNFX0xJTkVfQk9UVE9NOiAnYm90dG9tJyxcclxuXHJcbiAgICBURVhUX0FMSUdOX0NFTlRFUjogJ2NlbnRlcicsICAgICAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5qiq5ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0FMSUdOX0xFRlQ6ICdsZWZ0JyxcclxuICAgIFRFWFRfQUxJR05fUklHSFQ6ICdyaWdodCcsXHJcblxyXG4gICAgVEVYVF9CQVNFX0xJTkVfSURFT0dSQVBISUM6ICdpZGVvZ3JhcGhpYycsICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5Z+657q/5bGe5oCnXHJcblxyXG4gICAgQUREOiAnYWRkJyxcclxuICAgIFJFTU9WRTogJ3JlbW92ZScsXHJcblxyXG4gICAgWF9BWElTOiAneC1heGlzJywgICAgICAgICAgICAgICAvL+S7o+ihqOaYr3jovbTov5jmmK956L20XHJcbiAgICBZX0FYSVM6ICd5LWF4aXMnLFxyXG5cclxuICAgIFJBRElBTl9VTklUOiBNYXRoLlBJIC8gMTgwICAgICAgLy/lvKfluqbljZXkvY1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50cztcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UG9vbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xhenosIHBhcmEpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2xhc3MgPSBjbGF6ejsgICAvL+exu+WQjVxyXG4gICAgICAgIHRoaXMuX3BhcmEgPSBwYXJhOyAgICAgIC8v5a6e5L6L5YyW5a+56LGh5pe255qE5Y+C5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwOyAgICAgICAgLy/lr7nosaHmsaDkuK3lr7nosaHnmoTkuKrmlbBcclxuICAgICAgICB0aGlzLl9wb29sID0gW107ICAgICAgICAvL+WvueixoeaxoFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGdldE9iaiAoKSB7XHJcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sLFxyXG4gICAgICAgICAgICBsZW4sXHJcbiAgICAgICAgICAgIG9iajtcclxuXHJcbiAgICAgICAgLy/lpoLmnpzlvZPliY3lt7Lkvb/nlKjnmoTlr7nosaHkuKrmlbDlpKfkuo7miJbnrYnkuo7msaDkuK3lt7LmnInlr7nosaHkuKrmlbDvvIxcclxuICAgICAgICAvL+WImeaWsOeUn+aIkOS4gOS4quWvueixoe+8m+WQpuWImeS7juaxoOS4reebtOaOpeWPluW+l+WvueixoVxyXG4gICAgICAgIGlmICh0aGlzLl9jb3VudCA+PSBwb29sLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvYmogPSBuZXcgdGhpcy5fY2xhc3ModGhpcy5fcGFyYSk7XHJcblxyXG4gICAgICAgICAgICBsZW4gPSBwb29sLmxlbmd0aDtcclxuICAgICAgICAgICAgcG9vbFtsZW5dID0gb2JqO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSBwb29sW3RoaXMuX2NvdW50XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6w5b2V5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQrKztcclxuXHJcbiAgICAgICAgLy/ov5Tlm57lr7nosaFcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWw5riF6Zu2XHJcbiAgICAqIOi/meagt++8jOW9k+WHveaVsGdldE9iaigp6KKr6LCD55So55qE5pe25YCZ77yM5rGg5Lit5omA5pyJ5a+56LGh6YO95Y+v5L2/55SoXHJcbiAgICAqL1xyXG4gICAgcmVsZWFzZUFsbCAoKSB7XHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufSIsImNvbnN0IFN0YXR1cyA9IHtcclxuICAgIFxyXG4gICAgU1RFUDE6ICdzdGVwMScsXHJcbiAgICBTVEVQMjogJ3N0ZXAyJyxcclxuICAgIFNURVAzOiAnc3RlcDMnLFxyXG4gICAgU1RFUDQ6ICdzdGVwNCcsXHJcbiAgICBTVEVQNTogJ3N0ZXA1JyxcclxuICAgIFdBSVRJTkc6ICd3YWl0aW5nJyxcclxuICAgIFNUT1A6ICdzdG9wJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzOyIsImNvbnN0IFN0eWxlcyA9IHtcclxuICAgIFxyXG4gICAgLy/lhbHlkIzpg6jliIZcclxuICAgIFRJVExFX0ZPTlQ6ICcxNnB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH6aKY5a2X5L2TICAgICAgICBcclxuICAgIExFR0VORF9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgIC8v5Zu+5L6L5a2X5L2TICBcclxuICAgIExBQkVMX0ZPTlQ6ICcxMHB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH562+5a2X5L2TICBcclxuICAgIEFYSVNfTkFNRV9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgIC8v6L205ZCN56ew5a2X5L2TICBcclxuICAgIEZPTlRfRklMTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgICAgICAgIC8v6buY6K6k5a2X5L2T5aGr5YWF6aKc6ImyXHJcbiAgICBBWElTX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+i9tOe6v+eahOe6v+WuvVxyXG4gICAgQVhJU19MSU5FX0NPTE9SOiAnIzMzMzMzMycsICAgICAgICAgICAgICAgICAgLy/ovbTnur/popzoibJcclxuICAgIEFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU6IDUsICAgICAgICAgICAgICAgIC8v5Yi75bqm57q/55qE6ZW/5bqmXHJcbiAgICBHUklEX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+eahOe6v+WuvVxyXG4gICAgR1JJRF9MSU5FX0NPTE9SOiAnI0JCQ0NERCcsICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/popzoibJcclxuICAgIEdSSURfTElORV9EQVNIOiBbNSwgNV0sICAgICAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/54K555qE6Ze06ZqUXHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3jovbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3jovbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3novbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3novbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBMRUdFTkRfU0hBUEVfVEVYVF9HQVA6IDUsICAgICAgICAgICAgICAgICAgICAvL+WbvuS+i+S4re+8jOiJsuWdl+WSjOaWh+Wtl+eahOmXtOmalFxyXG4gICAgTEVHRU5EX0dBUDogMTUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77kvovmqKrlkJHmjpLliJfml7bvvIzlm77kvovkuYvpl7TnmoTpl7TpmpRcclxuICAgIFRJUF9MT0NBVElPTl9PRkZTRVQ6IDIwLCAgICAgICAgICAgICAgICAgICAgIC8v5a6a5L2NVGlw5L2N572u5pe277yM55u45a+56byg5qCH5L2N572u55qE5YGP56e76YePXHJcblxyXG5cclxuICAgIC8v5rCU5rOh5Zu+XHJcbiAgICBCVUJCTEVfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAgICAgICAgLy/msJTms6HnmoTpgI/mmI7luqZcclxuXHJcblxyXG4gICAgLy/mn7Hnirblm75cclxuICAgIENPTFVNTl9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAvL+eUqOS6juahhumAiemhueebrueahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgQ09MVU1OX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgIC8v55So5LqO5qGG6YCJ6aG555uu55qE5pa55qGG55qE6L655qGG57q/6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5oqY57q/5Zu+XHJcbiAgICBMSU5FX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgICAgICAgLy/mipjnur/nmoTnur/lrr1cclxuICAgIExJTkVfQVJFQV9BTFBIQTogMC43LCAgICAgICAgICAgICAgICAgICAgICAvL+e7mOWItumdouenr+WbvuaXtueahOmAj+aYjuW6plxyXG4gICAgTElORV9NQVJLUE9JTlRfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K555qE57q/5a69XHJcbiAgICBMSU5FX01BUktQT0lOVF9SQURJVVM6IDIsICAgICAgICAgICAgICAgICAgLy/moIforrDngrnnmoTlnIbljYrlvoRcclxuICAgIExJTkVfTUFSS1BPSU5UX0JBS19DT0xPUjogJyNGM0YzRjMnLCAgICAgICAvL+agh+iusOeCueeahOiDjOaZr+minOiJslxyXG4gICAgTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH5b+X6YCJ5oup6aG555qE57q/5q6155qE57q/5a69XHJcbiAgICBMSU5FX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgICAgLy/nlKjkuo7moIflv5fpgInmi6npobnnmoTnur/mrrXnmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ppbzlm75cclxuICAgIFBJRV9MQUJFTF9JTk5FUl9GT05UX0NPTE9SOiAnI0ZGRkZGRicsICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWGheaYvuekuuaXtu+8jOaWh+Wtl+eahOminOiJslxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkU6IDIwLCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MeeahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUyX1NJWkU6IDE1LCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MueahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX09GRlNFVDogNSwgICAgICAgICAgICAgICAgICAgICAgIC8v5byV5a+857q/5ZKM5qCH562+5paH5a2X55qE6Ze06LedXHJcbiAgICBQSUVfU0VMRUNUT1JfVFJBTlNMQVRFOiAxMCwgICAgICAgICAgICAgICAgLy/ooqvpgInmi6nnmoTppbzlnZfnmoTkvY3np7vph49cclxuICAgIFBJRV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAvL+ahhumAieaVsOaNrumhueeahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgUElFX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjRkYwMDAwJywgICAgICAgIC8v5qGG6YCJ5pWw5o2u6aG555qE5pa55qGG55qE6L655qGG6aKc6ImyXHJcblxyXG5cclxuICAgIC8v6Zu36L6+5Zu+XHJcbiAgICBSQURBUl9MQUJFTF9GT05UOiAnMTJweCBNaWNyb3NvZnQgWWFIZWknLCAgLy/mjIfmoIfmloflrZfnmoTlrZfkvZNcclxuICAgIFJBREFSX0xBQkVMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgICAvL+aMh+agh+aWh+Wtl+eahOminOiJslxyXG4gICAgUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUOiAxMCwgICAgICAgICAgIC8v5oyH5qCH5paH5a2X5ZKM5a+55bqU5aSa6L655b2i6aG254K55LmL6Ze055qE6Ze06LedXHJcbiAgICBSQURBUl9MSU5FX1dJRFRIOiAzLjAsICAgICAgICAgICAgICAgICAgICAgLy/mlbDmja7pm7fovr7nur/nmoTnur/lrr1cclxuICAgIFJBREFSX0JBS19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9ouahhue6v+WSjOWNiuW+hOWIhuWJsue6v+eahOe6v+WuvVxyXG4gICAgUkFEQVJfQkFLX0xJTkVfQ09MT1I6ICcjQzlDOUM5JywgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i5qGG57q/5ZKM5Y2K5b6E5YiG5Ymy57q/55qE6aKc6ImyXHJcbiAgICBSQURBUl9CQUtfRklMTF9DT0xPUjogJyNFNkU2RTYnLCAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLnmoTog4zmma/popzoibJcclxuXHJcblxyXG4gICAgLy/mlaPngrnlm75cclxuICAgIFNDQVRURVJfUE9JTlRfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAvL+aVo+eCueeahOmAj+aYjuW6plxyXG4gICAgU0NBVFRFUl9DUk9TU19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH6K+G6byg5qCH5L2N572u55qE5Y2B5a2X57q/55qE57q/5a69XHJcbiAgICBTQ0FUVEVSX0NST1NTX0NPTE9SOiAnI0ZGMDAwMCcsICAgICAgICAgICAgLy/nlKjkuo7moIfor4bpvKDmoIfkvY3nva7nmoTljYHlrZfnur/nmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ml63ml6Xlm75cclxuICAgIFNVTkJVUlNfTEFCRUxfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAvL+agh+etvuaWh+Wtl+eahOminOiJslxyXG4gICAgU1VOQlVSU19CT1JERVJfQ09MT1I6ICcjMDAwMDAwJyAgICAgICAgICAgIC8v5omH5b2i5Z2X55qE6L655qGG6aKc6ImyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZXM7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog6Z2Z5oCB5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8qXHJcbiAgICAqIOiuoeeul+OAkOWAvOi9tOOAkeeahOWIu+W6puWNleS9jVxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRTY2FsZVVuaXQgKG1pbiwgbWF4LCBzY2FsZU1heENvdW50KSB7XHJcbiAgICAgICAgbGV0IGksIGxlbixcclxuICAgICAgICAgICAgYXZnLFxyXG4gICAgICAgICAgICBnYXBzID0gWzEsIDIsIDIuNSwgNSwgMTBdLFxyXG4gICAgICAgICAgICBzY2FsZVVuaXQsXHJcbiAgICAgICAgICAgIG1hZ25pdHVkZTtcclxuXHJcbiAgICAgICAgLy/orqHnrpflnYfliIblgLxcclxuICAgICAgICBhdmcgPSAobWF4IC0gbWluKSAvIChzY2FsZU1heENvdW50LTEpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+Wdh+WIhuWAvOeahOaVsOmHj+e6p1xyXG4gICAgICAgIG1hZ25pdHVkZSA9IHRoaXMuZ2V0TWFnbml0dWRlKGF2Zyk7XHJcblxyXG4gICAgICAgIC8v5b6q546v77yM55u06Iez56ys5LiA5Liq5aSn5LqO5oiW562J5LqO5Z2H5YiG5YC855qE5pW05pWw5YC85Ye6546wXHJcbiAgICAgICAgbGVuID0gZ2Fwcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCA9IGdhcHNbaV0gKiBtYWduaXR1ZGU7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZVVuaXQgPj0gYXZnKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ov5Tlm55cclxuICAgICAgICByZXR1cm4gc2NhbGVVbml0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog6K6h566X5oyH5a6a5pWw5YC855qE5pWw6YeP57qnXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGdldE1hZ25pdHVkZSAobnVtKSB7XHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoQxMOeahOW5glxyXG4gICAgICAgIGxldCBwb3cgPSBNYXRoLmZsb29yKE1hdGgubG9nKG51bSkgLyBNYXRoLmxvZygxMCkpOztcclxuXHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoTmlbDph4/nuqdcclxuICAgICAgICBsZXQgbWFnbml0dWRlID0gTWF0aC5wb3coMTAsIHBvdyk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYWduaXR1ZGU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgKiBDYW52YXPnu5jliLbml7blr7nlnZDmoIfov5vooYzlvq7osINcclxuICAgICog5Zub6IiN5LqU5YWl5Y+W5pW05ZCO5YeP5bCPMC415YOP57Sg44CC6L+Z5qC377yM5ZyoQ2FudmFz5pe25L2N572u5aSE5LqO5Lik5Liq5YOP57Sg5LmL6Ze077yM6YG/5YWN5Y+R6Jma44CCXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGFkanVzdFBvc2l0aW9uICh4T1J5KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoeE9SeSkgLSBDb25zdGFudHMuSEFMRl9QSVhFTDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyB3aW5kb3dUb0NhbnZhcyAoYm91bmRpbmdDbGllbnRSZWN0TGVmdCxcclxuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3RUb3AsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0V2lkdGgsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0LFxyXG4gICAgICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodCxcclxuICAgICAgICBnbG9ibGVYLFxyXG4gICAgICAgIGdsb2JsZVksXHJcbiAgICAgICAgcG9zaXRpb24pIHtcclxuICAgICAgICBwb3NpdGlvbi54ID0gZ2xvYmxlWCAtIGJvdW5kaW5nQ2xpZW50UmVjdExlZnQgKiAoY2FudmFzV2lkdGggLyBib3VuZGluZ0NsaWVudFJlY3RXaWR0aCk7XHJcbiAgICAgICAgcG9zaXRpb24ueSA9IGdsb2JsZVkgLSBib3VuZGluZ0NsaWVudFJlY3RUb3AgKiAoY2FudmFzSGVpZ2h0IC8gYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0V2lkdGggKGNhbnZhc0NvbnRleHQsIHRleHQpIHtcclxuICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0SGVpZ2h0IChjYW52YXNDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoJ00nKS53aWR0aCAqIDcgLyA2O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi4vc3JjL2NoYXJ0L3N1bmJ1cnMvY3NzL2NoYXJ0LmNzcycgO1xyXG5pbXBvcnQgJy4uL3NyYy9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lLmpzJztcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhcnQgfSAgZnJvbSAnLi4vc3JjL2NoYXJ0L3N1bmJ1cnMvQ2hhcnQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcmllcyB9ICBmcm9tICcuLi9zcmMvYmFzZS9zZXJpZXMvU2VyaWVzQmFzZS5qcyc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=