(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scatter"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["scatter"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/scatterEntry.js");
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

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
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

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
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

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
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

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
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

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


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

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


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

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


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

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';

// eslint-disable-next-line no-empty
var SUPPORTS_Y = !!(function () { try { return new RegExp('x', 'y'); } catch (e) {} })();

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? 0xffffffff : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/scatter/css/chart.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/scatter/css/chart.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.scatterChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n    line-height: 1.5 ;\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.scatterChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}\r\n\r\n\r\n            \r\n/* \r\n * Tip\r\n */\r\n.scatterChartTipDiv {\r\n    position: absolute;            /* 绝对定位，这样才会跟随鼠标位置 */\r\n    \r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    \r\n    background: rgba(0, 0, 0, 0.6);\r\n    \r\n    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;     /* 阴影 */\r\n    -moz-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    \r\n    font-family: Microsoft YaHei;      /* Tip字体 */\r\n    font-size: 12px;              /* Tip字体尺寸 */\r\n    color: #eeeeee;               /* Tip文字颜色 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table\r\n */\r\n.scatterChartTipDiv table{\r\n    padding: 0px;  \r\n    margin: 0px ;       \r\n    border:none;\r\n    \r\n    border-collapse: collapse;    /* 合并边框 */\r\n    border-spacing: 0;            /* 设置相邻单元格的边框间的距离 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td\r\n */\r\n.scatterChartTipDiv table td {\r\n    padding: 0px;         \r\n    padding-right: 10px;          /* 在列数据之间留余白 */\r\n    margin: 0px ;\r\n    white-space:nowrap;           /* 禁止换行 */\r\n    border: 0;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td -- span\r\n */\r\n.scatterChartTipDiv table td span {\r\n    display:inline-block;           /* 转成行内块，否则不能显示出来 */\r\n    /*border-radius: 10px;            /* 圆形 */\r\n    width: 9px;\r\n    height: 9px;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- 第三列\r\n */\r\n.scatterChartTipDiv .secondCol {\r\n    text-align: right;           /* 靠右对齐 */\r\n}\r\n", ""]);



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

/***/ "./src/base/info/AxisChartInfoBase_In.js":
/*!***********************************************!*\
  !*** ./src/base/info/AxisChartInfoBase_In.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AxisChartInfoBase_In; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChartInfoBase_In.js */ "./src/base/info/ChartInfoBase_In.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AxisChartInfoBase_In =
/*#__PURE__*/
function (_ChartInfoBase_In) {
  _inherits(AxisChartInfoBase_In, _ChartInfoBase_In);

  function AxisChartInfoBase_In() {
    var _this;

    _classCallCheck(this, AxisChartInfoBase_In);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AxisChartInfoBase_In).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.xAxisName = 'X轴'; //显示在x轴尽头，用于表示x轴含义的文字。 <br>例如：时间、月份、国别

    _this.yAxisName = 'Y轴'; //显示在y轴尽头，用于表示y轴含义的文字。 <br>例如：金额、浓度、雨量

    _this.xAxisNameBottom = 25; //x轴名称文字上边缘到div下边缘的距离

    _this.yAxisNameTop = 40; //y轴名称文字上边缘到div上边缘的距离
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }

  return AxisChartInfoBase_In;
}(_ChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



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

/***/ "./src/base/info/VAxisInfoBase_In.js":
/*!*******************************************!*\
  !*** ./src/base/info/VAxisInfoBase_In.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VAxisInfoBase_In; });
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VAxisInfoBase_In = function VAxisInfoBase_In() {
  _classCallCheck(this, VAxisInfoBase_In);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  this.min = Number.MIN_VALUE; //数值轴的最小值。保持默认值代表需要自动计算

  this.max = Number.MAX_VALUE; //数值轴的最大值。保持默认值代表需要自动计算

  this.labelMaxCount = 7; //标签显示的最大个数

  this.zeroExtend = true; //当数值范围不包括0时，是否将范围扩展到0

  this.labelRotate = 0; //标签旋转角度    
  ///////////////////////
  // 私有成员变量
  ///////////////////////
  ///////////////////////
  // 初始化
  ///////////////////////
};



/***/ }),

/***/ "./src/base/info/VAxisInfoBase_Out.js":
/*!********************************************!*\
  !*** ./src/base/info/VAxisInfoBase_Out.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VAxisInfoBase_Out; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VAxisInfoBase_Out = function VAxisInfoBase_Out() {
  _classCallCheck(this, VAxisInfoBase_Out);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  //数值轴的最小值
  //VAxisInfoBase_In.min = 默认值时 :  VAxisInfoBase_Out.min的值是内部算法计算的结果
  //VAxisInfoBase_In.min != 默认值时 :  VAxisInfoBase_Out.min = VAxisInfoBase_In.min
  this.min = 0;
  this.max = 0; //同理

  this.minScale; //最小刻度值

  this.maxScale; //最大刻度值

  this.labels = []; //保存数值轴上显示的标签文字

  this.originIndex = -1; //原点标签在labels数组中的索引，用于绘制轴线

  this.originValue; //原点的值

  this.originPosition; //原点在Canvas上的相对位置

  this.unitValueSize = -1; //数值1在轴上占用的长度

  this.scaleUnit = 0; //单位刻度值

  this.scaleUnitSize = 0; //单位刻度在轴上占用的长度

  this.decimalDigit; //数字标签小数位数
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

/***/ "./src/chart/scatter/Chart.js":
/*!************************************!*\
  !*** ./src/chart/scatter/Chart.js ***!
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
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base/chart/ChartBase.js */ "./src/base/chart/ChartBase.js");
/* harmony import */ var _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_In.js */ "./src/base/info/VAxisInfoBase_In.js");
/* harmony import */ var _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_Out.js */ "./src/base/info/VAxisInfoBase_Out.js");
/* harmony import */ var _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info/ChartInfo_In.js */ "./src/chart/scatter/info/ChartInfo_In.js");
/* harmony import */ var _parts_ScatterPoint_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/ScatterPoint.js */ "./src/chart/scatter/parts/ScatterPoint.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/scatter/painter/Painter.js");
/* harmony import */ var _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/ObjectPool.js */ "./src/support/ObjectPool.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Styles_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../support/Styles.js */ "./src/support/Styles.js");
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../support/Utility.js */ "./src/support/Utility.js");
/* harmony import */ var _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../tween/TWAlgorithm.js */ "./src/tween/TWAlgorithm.js");
/* harmony import */ var _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../tween/TWEngine.js */ "./src/tween/TWEngine.js");







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

    _this.chartInfo_In = new _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_9__["default"](); //图表信息。例：图表名称

    _this.xAxisInfo_In = new _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_7__["default"](); //x值轴信息

    _this.yAxisInfo_In = new _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_7__["default"](); //y值轴信息
    ///////////////////////
    // 私有成员变量
    ///////////////////////

    _this._xAxisInfo_Out = new _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    _this._yAxisInfo_Out = new _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    _this._itemArray = []; //存放散点对象的二维数组

    _this._itemPool = null; //散点对象池

    _this._mousePosition = {
      x: -1,
      y: -1
    };
    _this._parentDivClassName = 'scatterChartDiv'; //样式名

    _this._tipDivClassName = 'scatterChartTipDiv';
    _this._secondColClassName = 'secondCol';
    _this._twEngine = new _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_18__["default"](); //缓动动画相关
    ///////////////////////
    // 初始化
    ///////////////////////
    //设置画家

    _this._setPainter(_painter_Painter_js__WEBPACK_IMPORTED_MODULE_11__["default"]); //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换


    _this._parentDiv = document.getElementById(parentDivID);
    _this._parentDiv.className += ' ' + _this._parentDivClassName; //动态生成_canvas，并添加到DOM树。同时获取其上下文

    _this._canvas = document.createElement('canvas');

    _this._parentDiv.appendChild(_this._canvas); //动态生成tip对象，添加到DOM树，并获取之


    _this._tipDiv = _this._createTip(_this._tipDivClassName);

    _this._parentDiv.appendChild(_this._tipDiv); //初始化对象池


    _this._itemPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_12__["default"](_parts_ScatterPoint_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
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


      this._reset(); //为绘制图表，计算各种数据


      this._getItemAndComputeMinMax();

      this._computeValueAxisOtherInfo(_support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].X_AXIS, this.xAxisInfo_In, this._xAxisInfo_Out);

      this._computeValueAxisOtherInfo(_support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].Y_AXIS, this.yAxisInfo_In, this._yAxisInfo_Out);

      this._setItemPositionAndTween(); //启动帧循环，在循环内部绘制图表


      this._startPaint();
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_check",
    value: function _check() {
      var rtn = true; //检查： 数据是否为空

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
          chartInfo_In = this.chartInfo_In,
          itemArr = this._itemArray,
          i,
          len; //移除鼠标事件监听器

      this._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].REMOVE); //设置尺寸


      canvas.width = div.offsetWidth;
      canvas.height = div.offsetHeight; //初始化图例数据、散点对象数组

      itemArr.length = 0;
      len = chartInfo_In.series.length;

      for (i = 0; i < len; i++) {
        itemArr[i] = [];
      } //初始化Tip


      this._initTip(); //从对象池中释放曾经使用过的散点对象


      this._itemPool.releaseAll(); //释放缓动资源


      this._twEngine.releaseAllTWData();

      this._twEngine.releaseAllTWAction(); //取消上一次绑定的动画函数


      window.cancelAnimationFrame(this._animationFrameID);
    }
  }, {
    key: "_initTip",
    value: function _initTip() {
      var tipDiv = this._tipDiv,
          schema = this.chartInfo_In.schema,
          secondColClassName = this._secondColClassName,
          table,
          row,
          td,
          i; //隐藏tip

      tipDiv.style.display = 'none'; //删除Table对象的所有行

      table = tipDiv.childNodes[1];
      table.innerHTML = ''; //生成Table的2行

      for (i = 0; i < 2; i++) {
        //创建行
        row = table.insertRow(); //创建第一列，并插入span

        td = row.insertCell();
        td.innerHTML = schema[i]; //创建第二列，并设定样式名

        td = row.insertCell();
        td.className = secondColClassName;
      }
    }
  }, {
    key: "_getItemAndComputeMinMax",
    value: function _getItemAndComputeMinMax() {
      var xAxisInfo_In = this.xAxisInfo_In,
          xAxisInfo_Out = this._xAxisInfo_Out,
          yAxisInfo_In = this.yAxisInfo_In,
          yAxisInfo_Out = this._yAxisInfo_Out,
          series = this.chartInfo_In.series,
          itemPool = this._itemPool,
          itemArray = this._itemArray,
          data,
          d,
          item,
          num,
          i,
          j,
          len1,
          len2; //(1)遍历第一个系列的全部数据，找到第一个有效数据，为最大最小赋初值

      data = series[0].data;
      len1 = data.length;

      for (i = 0; i < len1; i++) {
        d = data[i];

        if (d[0] != _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].DIRTY && d[1] != _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].DIRTY) {
          xAxisInfo_Out.min = xAxisInfo_Out.max = d[0];
          yAxisInfo_Out.min = yAxisInfo_Out.max = d[1];
          break;
        }
      } //(2)从池中取出项目对象，同时求得最大最小值


      len1 = series.length;

      for (i = 0; i < len1; i++) {
        data = series[i].data;
        len2 = data.length; //生成项目对象

        for (j = 0; j < len2; j++) {
          //取得散点坐标
          d = data[j]; //从池中获取项目对象，加入到数组,并重新设置属性

          item = itemPool.getObj();
          itemArray[i].push(item); //设置项目

          item.seriesIndex = i;
          item.index = j;
          item.valueX = d[0];
          item.valueY = d[1];
          item.dirtyFlag = false; //比较x轴最值

          num = item.valueX;

          if (num != _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].DIRTY) {
            if (num < xAxisInfo_Out.min) {
              xAxisInfo_Out.min = num;
            } else if (num > xAxisInfo_Out.max) {
              xAxisInfo_Out.max = num;
            }
          } else {
            item.dirtyFlag = true;
          } //比较y轴最值


          num = item.valueY;

          if (num != _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].DIRTY) {
            if (num < yAxisInfo_Out.min) {
              yAxisInfo_Out.min = num;
            } else if (num > yAxisInfo_Out.max) {
              yAxisInfo_Out.max = num;
            }
          } else {
            item.dirtyFlag = true;
          }
        }
      } //(3)判断用户是否指定了最大最小值，并据此调整最值


      if (xAxisInfo_In.min != Number.MIN_VALUE && xAxisInfo_In.min < xAxisInfo_Out.min) {
        xAxisInfo_Out.min = xAxisInfo_In.min;
      }

      if (xAxisInfo_In.max != Number.MAX_VALUE && xAxisInfo_In.max > xAxisInfo_Out.max) {
        xAxisInfo_Out.max = xAxisInfo_In.max;
      }

      if (yAxisInfo_In.min != Number.MIN_VALUE && yAxisInfo_In.min < yAxisInfo_Out.min) {
        yAxisInfo_Out.min = yAxisInfo_In.min;
      }

      if (yAxisInfo_In.max != Number.MAX_VALUE && yAxisInfo_In.max > yAxisInfo_Out.max) {
        yAxisInfo_Out.max = yAxisInfo_In.max;
      } //(4)判断是否在值轴上扩展 0，并据此调整最值


      if (xAxisInfo_In.zeroExtend == true) {
        if (xAxisInfo_Out.min > 0 && xAxisInfo_Out.max > 0) //同为正数
          {
            xAxisInfo_Out.min = 0;
          } else if (xAxisInfo_Out.min < 0 && xAxisInfo_Out.max < 0) {
          //同为负数
          xAxisInfo_Out.max = 0;
        }
      }

      if (yAxisInfo_In.zeroExtend == true) {
        if (yAxisInfo_Out.min > 0 && yAxisInfo_Out.max > 0) //同为正数
          {
            yAxisInfo_Out.min = 0;
          } else if (yAxisInfo_Out.min < 0 && yAxisInfo_Out.max < 0) {
          //同为负数
          yAxisInfo_Out.max = 0;
        }
      }
    }
  }, {
    key: "_computeValueAxisOtherInfo",
    value: function _computeValueAxisOtherInfo(axisType, vAxisInfo_In, vAxisInfo_Out) {
      var canvas = this._canvas,
          chartInfo_In = this.chartInfo_In,
          chartPixelWidth,
          chartPixelHeight,
          scaleUnit,
          arr,
          i; //计算标签间隔

      vAxisInfo_Out.scaleUnit = _support_Utility_js__WEBPACK_IMPORTED_MODULE_16__["default"].getScaleUnit(vAxisInfo_Out.min, vAxisInfo_Out.max, vAxisInfo_In.labelMaxCount); //计算横轴标签小数位数

      arr = vAxisInfo_Out.scaleUnit.toString().split('.');

      if (arr.length > 1) {
        vAxisInfo_Out.decimalDigit = arr[1].length;
      } else {
        vAxisInfo_Out.decimalDigit = 0;
      } //计算最小刻度(同时为最大刻度设初值)


      vAxisInfo_Out.minScale = vAxisInfo_Out.maxScale = Math.floor(vAxisInfo_Out.min / vAxisInfo_Out.scaleUnit) * vAxisInfo_Out.scaleUnit; //计算最大刻度，同时记录原点的位置

      vAxisInfo_Out.originIndex = -1; //初值

      for (i = 0; 1; i++) {
        scaleUnit = vAxisInfo_Out.minScale + vAxisInfo_Out.scaleUnit * i; //判断是否是0刻度，如果是则记录之

        if (scaleUnit == 0) {
          vAxisInfo_Out.originIndex = i;
          vAxisInfo_Out.originValue = 0;
        } //判断是否为最大刻度，是则退出循环


        if (scaleUnit >= vAxisInfo_Out.max) {
          vAxisInfo_Out.maxScale = scaleUnit;
          break;
        }
      } //继续计算原点的位置(原点值不一定是0)
      //判断原点数组索引是否为初值
      //如果为初值，说明前一步骤并没有得出原点结果，则继续计算


      if (vAxisInfo_Out.originIndex == -1) {
        if (vAxisInfo_Out.minScale >= 0) {
          vAxisInfo_Out.originIndex = 0;
          vAxisInfo_Out.originValue = vAxisInfo_Out.minScale;
        } else if (vAxisInfo_Out.maxScale <= 0) {
          vAxisInfo_Out.originIndex = i;
          vAxisInfo_Out.originValue = vAxisInfo_Out.maxScale;
        }
      } //计算单位数值在轴上占用的物理尺寸 / 相邻标签之间的物理距离 / 原点


      chartPixelWidth = canvas.width - chartInfo_In.bodyLeft - chartInfo_In.bodyRight;
      chartPixelHeight = canvas.height - chartInfo_In.bodyTop - chartInfo_In.bodyBottom;

      if (axisType == _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].X_AXIS) {
        vAxisInfo_Out.unitValueSize = chartPixelWidth / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
        vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
        vAxisInfo_Out.originPosition = chartInfo_In.bodyLeft + vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
      } else {
        vAxisInfo_Out.unitValueSize = chartPixelHeight / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
        vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
        vAxisInfo_Out.originPosition = canvas.height - chartInfo_In.bodyBottom - vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
      }
    }
  }, {
    key: "_setItemPositionAndTween",
    value: function _setItemPositionAndTween() {
      var chartInfo_In = this.chartInfo_In,
          xAxisInfo_Out = this._xAxisInfo_Out,
          yAxisInfo_Out = this._yAxisInfo_Out,
          itemArr = this._itemArray,
          item,
          twEngine = this._twEngine,
          tweenCallBack = this._tweenCallBack,
          from,
          to,
          twData,
          twAction,
          twDataArr = [],
          arr,
          i,
          j,
          len1,
          len2; //循环系列

      len1 = itemArr.length;

      for (i = 0; i < len1; i++) {
        arr = itemArr[i];
        len2 = arr.length; //循环项目

        for (j = 0; j < len2; j++) {
          //取得项目对象
          item = arr[j];
          if (item.dirty == true) continue; //设置坐标

          item.x = xAxisInfo_Out.originPosition + xAxisInfo_Out.unitValueSize * (item.valueX - xAxisInfo_Out.originValue);
          item.y = yAxisInfo_Out.originPosition - yAxisInfo_Out.unitValueSize * (item.valueY - yAxisInfo_Out.originValue); //设置缓动数据

          from = [0];
          to = [chartInfo_In.radius];
          twData = twEngine.getTWData();
          twData.setData(item, from, to, tweenCallBack);
          twDataArr.push(twData);
        }
      }

      twAction = twEngine.getTWAction();
      twAction.setData(twDataArr, _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_17__["default"].Bounce.easeOut, 500);
      twEngine.setFirstTWAction(twAction);
    }
  }, {
    key: "_addOrRemoveEventListener",
    value: function _addOrRemoveEventListener(command) {
      var canvas = this._canvas,
          chartInfo_In = this.chartInfo_In,
          xAxisInfo_Out = this._xAxisInfo_Out,
          yAxisInfo_Out = this._yAxisInfo_Out,
          left = chartInfo_In.bodyLeft,
          //图表绘制区域的边界
      right = canvas.width - chartInfo_In.bodyRight,
          top = chartInfo_In.bodyTop,
          bottom = canvas.height - chartInfo_In.bodyBottom,
          tip = this._tipDiv,
          table,
          rect,
          //Canvas包围盒相关
      num,
          me = this;

      function doMouseMove(e) {
        //获取鼠标相对于Canvas的位置
        rect = canvas.getBoundingClientRect();
        _support_Utility_js__WEBPACK_IMPORTED_MODULE_16__["default"].windowToCanvas(rect.left, rect.top, rect.width, rect.height, canvas.width, canvas.height, e.clientX, e.clientY, me._mousePosition); //判断鼠标是否位于图表数据显示区域，如果不是则隐藏tip，然后退出

        if (me._mousePosition.x < left || me._mousePosition.x > right || me._mousePosition.y < top || me._mousePosition.y > bottom) {
          //隐藏
          tip.style.display = 'none';
          me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP5;
        } else {
          //显示
          tip.style.display = 'block'; //更新tip

          table = tip.childNodes[1];
          num = (me._mousePosition.x - xAxisInfo_Out.originPosition) / xAxisInfo_Out.unitValueSize;
          num += xAxisInfo_Out.originValue;
          table.rows[0].cells[1].innerText = num.toFixed(xAxisInfo_Out.decimalDigit);
          num = (yAxisInfo_Out.originPosition - me._mousePosition.y) / yAxisInfo_Out.unitValueSize;
          num += yAxisInfo_Out.originValue;
          table.rows[1].cells[1].innerText = num.toFixed(yAxisInfo_Out.decimalDigit); //移动tip
          //设定tip的X坐标

          num = tip.offsetWidth + _support_Styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].TIP_LOCATION_OFFSET;

          if (me._mousePosition.x + num > rect.width) {
            tip.style.left = me._mousePosition.x - num + 'px';
          } else {
            tip.style.left = me._mousePosition.x + _support_Styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].TIP_LOCATION_OFFSET + 'px';
          } //设定tip的Y坐标


          num = tip.offsetHeight + _support_Styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].TIP_LOCATION_OFFSET;

          if (me._mousePosition.y + num > rect.height) {
            tip.style.top = me._mousePosition.y - num + 'px';
          } else {
            tip.style.top = me._mousePosition.y + _support_Styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].TIP_LOCATION_OFFSET + 'px';
          }

          me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP4;
        }
      }

      function doMouseOut(e) {
        //隐藏
        tip.style.display = 'none';
        me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP6;
      } //执行


      if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].ADD && me._eventListenersAddedFlag == false) {
        me._canvas.addEventListener('mousemove', doMouseMove);

        me._canvas.addEventListener('mouseout', doMouseOut);

        me._eventListenersAddedFlag = true;
      } else if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].REMOVE && me._eventListenersAddedFlag == true) {
        me._canvas.removeEventListener('mousemove', doMouseMove);

        me._canvas.removeEventListener('mouseout', doMouseOut);

        me._eventListenersAddedFlag = false;
      }
    }
  }, {
    key: "_startPaint",
    value: function _startPaint() {
      var me = this;

      function paint() {
        switch (me._status) {
          case _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP1:
            me._paint();

            me._twEngine.start(); //启动缓动，从下一帧开始缓动


            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP2;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP2:
            //绘制缓动效果
            //      如果缓动没有结束，就绘制
            //      反之，设置状态，在下一停止绘制
            if (me._twEngine.nextFrame() == true) {
              me._paint();
            } else {
              me._twEngine.stop(); //停止缓动


              me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP3;
            }

            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP3:
            me._paint(); //缓存绘图表面
            //添加事件监听器


            me._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_13__["default"].ADD);

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].WAITING;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP4:
          case _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP5:
            me._paint();

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].WAITING;
            break;
        } //循环调用自己，进行绘画


        if (me._status != _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STOP) {
          me._animationFrameID = window.requestNextAnimationFrame(paint);
        }
      } //设置初始状态，开始绘制


      me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_15__["default"].STEP1;
      paint();
    }
    /*
     * 缓动效果
     */

  }, {
    key: "_tweenCallBack",
    value: function _tweenCallBack(target, resultArray) {
      target.radius = resultArray[0];
    }
  }]);

  return Chart;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/chart/scatter/css/chart.css":
/*!*****************************************!*\
  !*** ./src/chart/scatter/css/chart.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/scatter/css/chart.css");

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

/***/ "./src/chart/scatter/info/ChartInfo_In.js":
/*!************************************************!*\
  !*** ./src/chart/scatter/info/ChartInfo_In.js ***!
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
/* harmony import */ var _base_info_AxisChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/info/AxisChartInfoBase_In.js */ "./src/base/info/AxisChartInfoBase_In.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ChartInfo_In =
/*#__PURE__*/
function (_AxisChartInfoBase_In) {
  _inherits(ChartInfo_In, _AxisChartInfoBase_In);

  function ChartInfo_In() {
    var _this;

    _classCallCheck(this, ChartInfo_In);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartInfo_In).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.radius = 5; //散点圆形半径

    _this.schema = []; //数据单元代表的含义。比如： ['年龄','身高','体重'] 
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }

  return ChartInfo_In;
}(_base_info_AxisChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/chart/scatter/painter/Painter.js":
/*!**********************************************!*\
  !*** ./src/chart/scatter/painter/Painter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Painter; });
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
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

    this._xAxisInfo_In;
    this._xAxisInfo_Out; //数值轴输入、输出数据

    this._yAxisInfo_In;
    this._yAxisInfo_Out;
    this._itemArray; //存储散点的数组

    this._xAxisLabelCount; //值轴数字标签个数

    this._yAxisLabelCount;
    this._mousePosition; ///////////////////////
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
      this._xAxisInfo_In = chart.xAxisInfo_In;
      this._xAxisInfo_Out = chart._xAxisInfo_Out;
      this._yAxisInfo_In = chart.yAxisInfo_In;
      this._yAxisInfo_Out = chart._yAxisInfo_Out;
      this._itemArray = chart._itemArray;
      this._mousePosition = chart._mousePosition; //计算供此后使用
      //值轴标签个数

      this._xAxisLabelCount = Math.floor((this._xAxisInfo_Out.maxScale - this._xAxisInfo_Out.minScale) / this._xAxisInfo_Out.scaleUnit) + 1;
      this._yAxisLabelCount = Math.floor((this._yAxisInfo_Out.maxScale - this._yAxisInfo_Out.minScale) / this._yAxisInfo_Out.scaleUnit) + 1;
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

          this._paintLegend();

          this._paintGrid();

          this._paintAxis();

          this._paintLabel();

          this._paintAxisName(); //缓存此时的_ctx绘图表面（全尺寸）


          this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP2:
          //绘制缓动效果
          //恢复this._ctx的绘图表面
          ctx.putImageData(this._canvasSurface, 0, 0); //绘制散点

          this._paintScatters();

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP3:
          //缓存此时的_ctx绘图表面（全尺寸）
          this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP4:
          //绘制鼠标十字线
          //恢复_ctx的绘图表面
          ctx.putImageData(this._canvasSurface, 0, 0); //绘制鼠标十字线

          this._paintCross();

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP5:
          //删除鼠标十字线
          ctx.putImageData(this._canvasSurface, 0, 0);
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
    key: "_paintLegend",
    value: function _paintLegend() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          series = chartInfo_In.series,
          colors = chartInfo_In.colors,
          w,
          h,
          x,
          i,
          len,
          str;
      ctx.save(); //设置文字样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEGEND_FONT;
      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_LEFT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_TOP; //获取文字高度

      h = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].getTextHeight(ctx); //计算最后一个图例文字的结束点

      x = this._canvas.width - chartInfo_In.legendRight; //逆序依次绘制图例文字和色块

      len = series.length;

      for (i = len - 1; i >= 0; i--) {
        //图例数据
        str = series[i].name; //根据图例文字宽度计算文字起始位置

        w = ctx.measureText(str).width;
        x -= w; //绘制文字

        ctx.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].FONT_FILL_COLOR;
        ctx.fillText(str, x, chartInfo_In.legendTop); //计算色块位置

        x -= _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEGEND_SHAPE_TEXT_GAP + h; //绘制色块

        ctx.fillStyle = colors[i];
        ctx.fillRect(x, chartInfo_In.legendTop, h, h); //间隔

        x -= _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LEGEND_GAP;
      }

      ctx.restore();
    }
  }, {
    key: "_paintGrid",
    value: function _paintGrid() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          xScaleUnitSize = this._xAxisInfo_Out.scaleUnitSize,
          yScaleUnitSize = this._yAxisInfo_Out.scaleUnitSize,
          xAxisLabelCount = this._xAxisLabelCount,
          yAxisLabelCount = this._yAxisLabelCount,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          x1,
          x2,
          y1,
          y2,
          num,
          i;
      ctx.save(); //设置样式

      ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].GRID_LINE_WIDTH;
      ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].GRID_LINE_COLOR;
      ctx.setLineDash(_support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].GRID_LINE_DASH); //绘制横向虚线

      x1 = chartInfo_In.bodyLeft;
      x2 = canvasWidth - chartInfo_In.bodyRight;
      num = canvasHeight - chartInfo_In.bodyBottom;

      for (i = 0; i < yAxisLabelCount; i++) {
        y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(num - yScaleUnitSize * i);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.stroke();
      } //绘制纵向虚线


      y1 = chartInfo_In.bodyTop;
      y2 = canvasHeight - chartInfo_In.bodyBottom;
      num = chartInfo_In.bodyLeft;

      for (i = 0; i < xAxisLabelCount; i++) {
        x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(num + xScaleUnitSize * i);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: "_paintAxis",
    value: function _paintAxis() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          xScaleUnitSize = this._xAxisInfo_Out.scaleUnitSize,
          yScaleUnitSize = this._yAxisInfo_Out.scaleUnitSize,
          xOriginPosition = this._xAxisInfo_Out.originPosition,
          yOriginPosition = this._yAxisInfo_Out.originPosition,
          xAxisLabelCount = this._xAxisLabelCount,
          yAxisLabelCount = this._yAxisLabelCount,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          x1,
          x2,
          y1,
          y2,
          offsetX,
          offsetY,
          angle,
          i;
      ctx.save(); //(1)设置样式

      ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_LINE_WIDTH;
      ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_LINE_COLOR; //(2)绘制横轴

      x1 = chartInfo_In.bodyLeft - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE; //横向起点

      x2 = canvasWidth - chartInfo_In.bodyRight + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE; //横向终点

      y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(yOriginPosition); //纵向位置

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y1);
      ctx.stroke(); //(3)绘制横轴刻度

      y2 = y1 + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE;
      offsetX = chartInfo_In.bodyLeft;

      for (i = 0; i < xAxisLabelCount; i++) {
        x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(offsetX + xScaleUnitSize * i);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.stroke();
      } //(4)绘制纵轴


      y1 = chartInfo_In.bodyTop - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE; //纵向起点

      y2 = canvasHeight - chartInfo_In.bodyBottom + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE; //纵向终点

      x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(xOriginPosition); //横向位置

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1, y2);
      ctx.stroke(); //(5)绘制纵轴刻度

      x2 = x1 - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE;
      offsetY = canvasHeight - chartInfo_In.bodyBottom;

      for (i = 0; i < yAxisLabelCount; i++) {
        y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(offsetY - yScaleUnitSize * i);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: "_paintLabel",
    value: function _paintLabel() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          xLabelRotate = this._xAxisInfo_In.labelRotate,
          yLabelRotate = this._yAxisInfo_In.labelRotate,
          xMinScale = this._xAxisInfo_Out.minScale,
          yMinScale = this._yAxisInfo_Out.minScale,
          xScaleUnit = this._xAxisInfo_Out.scaleUnit,
          yScaleUnit = this._yAxisInfo_Out.scaleUnit,
          xScaleUnitSize = this._xAxisInfo_Out.scaleUnitSize,
          yScaleUnitSize = this._yAxisInfo_Out.scaleUnitSize,
          xDecimalDigit = this._xAxisInfo_Out.decimalDigit,
          yDecimalDigit = this._yAxisInfo_Out.decimalDigit,
          xAxisLabelCount = this._xAxisLabelCount,
          yAxisLabelCount = this._yAxisLabelCount,
          canvasHeight = this._canvas.height,
          x,
          y,
          offsetX,
          offsetY,
          num,
          str,
          angle,
          i;
      ctx.save(); //(1)设置文本样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LABEL_FONT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_MIDDLE; //根据横轴标签的旋转角度进行绘制        

      offsetX = chartInfo_In.bodyLeft;
      angle = xLabelRotate % 360;

      if (angle == 0) {
        //设置文本横向对齐方式
        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_CENTER; //计算文本纵向位置

        y = canvasHeight - chartInfo_In.bodyBottom + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].XAXIS_LABEL_OFFSET; //绘制文本

        for (i = 0; i < xAxisLabelCount; i++) {
          //计算文本横向位置
          x = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(offsetX + xScaleUnitSize * i); //计算标签文字

          num = xMinScale + xScaleUnit * i;
          str = num.toFixed(xDecimalDigit); //绘制文字

          ctx.fillText(str, x, y);
        }
      } else {
        //转换为弧度
        angle = -angle * Math.PI / 180; //设置文本横向对齐方式

        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_RIGHT; //计算文本纵向位置

        y = canvasHeight - chartInfo_In.bodyBottom + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].XAXIS_LABEL_OFFSET_FOR_ROTATE; //绘制文本

        for (i = 0; i < xAxisLabelCount; i++) {
          ctx.save(); //计算文本横向位置

          x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(offsetX + xScaleUnitSize * i); //坐标平移并旋转

          ctx.translate(x, y);
          ctx.rotate(angle); //计算标签文字

          num = xMinScale + xScaleUnit * i;
          str = num.toFixed(xDecimalDigit); //绘制文字

          ctx.fillText(str, 0, 0);
          ctx.restore();
        }
      } //(3-2)设置文本横向对齐方式


      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_RIGHT; //(3-3)根据纵轴标签的旋转角度进行绘制        

      x = chartInfo_In.bodyLeft - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].YAXIS_LABEL_OFFSET;
      offsetY = canvasHeight - chartInfo_In.bodyBottom;
      angle = yLabelRotate % 360;

      if (angle == 0) {
        for (i = 0; i < yAxisLabelCount; i++) {
          //计算文本纵向位置
          y = offsetY - yScaleUnitSize * i; //计算标签文字

          num = yMinScale + yScaleUnit * i;
          str = num.toFixed(yDecimalDigit); //绘制文字

          ctx.fillText(str, x, y);
        }
      } else {
        //转换为弧度
        angle = -angle * Math.PI / 180;

        for (i = 0; i < yAxisLabelCount; i++) {
          ctx.save(); //计算文本纵向位置

          y = offsetY - yScaleUnitSize * i; //坐标平移并旋转

          ctx.translate(x, y);
          ctx.rotate(angle); //计算标签文字

          num = yMinScale + yScaleUnit * i;
          str = num.toFixed(yDecimalDigit); //绘制文字

          ctx.fillText(str, 0, 0);
          ctx.restore();
        }
      }

      ctx.restore();
    }
  }, {
    key: "_paintAxisName",
    value: function _paintAxisName() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          x,
          y;
      ctx.save(); //设置文字样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_NAME_FONT;
      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_CENTER;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_TOP; //绘制y轴单位文字

      x = chartInfo_In.bodyLeft;
      y = chartInfo_In.yAxisNameTop;
      ctx.fillText(chartInfo_In.yAxisName, x, y); //绘制X轴单位文字

      x = canvasWidth - chartInfo_In.bodyRight;
      y = canvasHeight - chartInfo_In.xAxisNameBottom;
      ctx.fillText(chartInfo_In.xAxisName, x, y);
      ctx.restore();
    }
  }, {
    key: "_paintScatters",
    value: function _paintScatters() {
      var ctx = this._ctx,
          itemArray = this._itemArray,
          colors = this._chartInfo_In.colors,
          i,
          j,
          len1,
          len2,
          arr,
          item;
      ctx.save(); //设置共同样式

      ctx.globalAlpha = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].SCATTER_POINT_ALPHA; //循环系列

      len1 = itemArray.length;

      for (i = 0; i < len1; i++) {
        ctx.fillStyle = colors[i];
        arr = itemArray[i];
        len2 = arr.length;

        for (j = 0; j < len2; j++) {
          item = arr[j];

          if (item.dirtyFlag == false) {
            ctx.beginPath();
            ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
          }
        }
      }

      ctx.restore();
    }
  }, {
    key: "_paintCross",
    value: function _paintCross() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          mousePosition = this._mousePosition,
          x1,
          x2,
          y1,
          y2;
      ctx.save(); //设置样式

      ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].SCATTER_CROSS_LINE_WIDTH;
      ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].SCATTER_CROSS_COLOR; //绘制横向

      x1 = chartInfo_In.bodyLeft;
      x2 = canvasWidth - chartInfo_In.bodyRight;
      y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(mousePosition.y);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y1);
      ctx.stroke(); //绘制纵向虚线

      y1 = chartInfo_In.bodyTop;
      y2 = canvasHeight - chartInfo_In.bodyBottom;
      x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(mousePosition.x);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1, y2);
      ctx.stroke();
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

/***/ "./src/chart/scatter/parts/ScatterPoint.js":
/*!*************************************************!*\
  !*** ./src/chart/scatter/parts/ScatterPoint.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScatterPoint; });
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



var ScatterPoint =
/*#__PURE__*/
function (_PartBase) {
  _inherits(ScatterPoint, _PartBase);

  function ScatterPoint() {
    var _this;

    _classCallCheck(this, ScatterPoint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScatterPoint).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.seriesIndex = -1;
    _this.index = -1;
    _this.valueX;
    _this.valueY; ///////////////////////
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


  _createClass(ScatterPoint, [{
    key: "isPointInScatter",
    value: function isPointInScatter(x, y) {
      if (Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) < this.radius) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return ScatterPoint;
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

/***/ "./webpackEntry/scatterEntry.js":
/*!**************************************!*\
  !*** ./webpackEntry/scatterEntry.js ***!
  \**************************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_scatter_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/scatter/css/chart.css */ "./src/chart/scatter/css/chart.css");
/* harmony import */ var _src_chart_scatter_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_scatter_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_scatter_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/scatter/Chart.js */ "./src/chart/scatter/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_scatter_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/base/series/SeriesBase.js */ "./src/base/series/SeriesBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3NjYXR0ZXIvY3NzL2NoYXJ0LmNzcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9BeGlzQ2hhcnRJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vQ2hhcnRJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9PdXQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9zZXJpZXMvU2VyaWVzQmFzZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9zY2F0dGVyL0NoYXJ0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3NjYXR0ZXIvY3NzL2NoYXJ0LmNzcz9mMThhIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L3NjYXR0ZXIvaW5mby9DaGFydEluZm9fSW4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvc2NhdHRlci9wYWludGVyL1BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvc2NhdHRlci9wYXJ0cy9TY2F0dGVyUG9pbnQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L09iamVjdFBvb2wuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9VdGlsaXR5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXQWN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXQWxnb3JpdGhtLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXRGF0YS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3dlYnBhY2tFbnRyeS9zY2F0dGVyRW50cnkuanMiXSwibmFtZXMiOlsiQ2hhcnRCYXNlIiwiX3BhcmVudERpdiIsIl9jYW52YXMiLCJfdGlwRGl2IiwiX3BhaW50ZXIiLCJfc3RhdHVzIiwiX2V2ZW50TGlzdGVuZXJzQWRkZWRGbGFnIiwiX3N1cmZhY2VJbWFnZURhdGEiLCJfYW5pbWF0aW9uRnJhbWVJRCIsIlN0YXR1cyIsIlNUT1AiLCJwYWludGVyIiwiZ2V0SW5zdGFuY2UiLCJzZXRDaGFydCIsInBhaW50IiwiY2xhc3NOYW1lIiwidGlwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJBeGlzQ2hhcnRJbmZvQmFzZV9JbiIsInhBeGlzTmFtZSIsInlBeGlzTmFtZSIsInhBeGlzTmFtZUJvdHRvbSIsInlBeGlzTmFtZVRvcCIsIkNoYXJ0SW5mb0Jhc2VfSW4iLCJ0aXRsZSIsInRpdGxlVG9wIiwidGl0bGVMZWZ0IiwibGVnZW5kVG9wIiwibGVnZW5kTGVmdCIsImxlZ2VuZFJpZ2h0IiwiYm9keVRvcCIsImJvZHlCb3R0b20iLCJib2R5TGVmdCIsImJvZHlSaWdodCIsImNvbG9ycyIsInNlcmllcyIsInNlbGVjdGVkSW5kZXgiLCJWQXhpc0luZm9CYXNlX0luIiwibWluIiwiTnVtYmVyIiwiTUlOX1ZBTFVFIiwibWF4IiwiTUFYX1ZBTFVFIiwibGFiZWxNYXhDb3VudCIsInplcm9FeHRlbmQiLCJsYWJlbFJvdGF0ZSIsIlZBeGlzSW5mb0Jhc2VfT3V0IiwibWluU2NhbGUiLCJtYXhTY2FsZSIsImxhYmVscyIsIm9yaWdpbkluZGV4Iiwib3JpZ2luVmFsdWUiLCJvcmlnaW5Qb3NpdGlvbiIsInVuaXRWYWx1ZVNpemUiLCJzY2FsZVVuaXQiLCJzY2FsZVVuaXRTaXplIiwiZGVjaW1hbERpZ2l0IiwiU2VyaWVzQmFzZSIsIm5hbWUiLCJkYXRhIiwic2VsZWN0ZWQiLCJDaGFydCIsInBhcmVudERpdklEIiwiY2hhcnRJbmZvX0luIiwiQ2hhcnRJbmZvX0luIiwieEF4aXNJbmZvX0luIiwieUF4aXNJbmZvX0luIiwiX3hBeGlzSW5mb19PdXQiLCJfeUF4aXNJbmZvX091dCIsIl9pdGVtQXJyYXkiLCJfaXRlbVBvb2wiLCJfbW91c2VQb3NpdGlvbiIsIngiLCJ5IiwiX3BhcmVudERpdkNsYXNzTmFtZSIsIl90aXBEaXZDbGFzc05hbWUiLCJfc2Vjb25kQ29sQ2xhc3NOYW1lIiwiX3R3RW5naW5lIiwiVFdFbmdpbmUiLCJfc2V0UGFpbnRlciIsIlBhaW50ZXIiLCJnZXRFbGVtZW50QnlJZCIsIl9jcmVhdGVUaXAiLCJPYmplY3RQb29sIiwiU2NhdHRlclBvaW50IiwiX2NoZWNrIiwiY29uc29sZSIsImxvZyIsIl9yZXNldCIsIl9nZXRJdGVtQW5kQ29tcHV0ZU1pbk1heCIsIl9jb21wdXRlVmFsdWVBeGlzT3RoZXJJbmZvIiwiQ29uc3RhbnRzIiwiWF9BWElTIiwiWV9BWElTIiwiX3NldEl0ZW1Qb3NpdGlvbkFuZFR3ZWVuIiwiX3N0YXJ0UGFpbnQiLCJydG4iLCJsZW5ndGgiLCJjYW52YXMiLCJkaXYiLCJpdGVtQXJyIiwiaSIsImxlbiIsIl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSRU1PVkUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiX2luaXRUaXAiLCJyZWxlYXNlQWxsIiwicmVsZWFzZUFsbFRXRGF0YSIsInJlbGVhc2VBbGxUV0FjdGlvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGlwRGl2Iiwic2NoZW1hIiwic2Vjb25kQ29sQ2xhc3NOYW1lIiwidGFibGUiLCJyb3ciLCJ0ZCIsInN0eWxlIiwiZGlzcGxheSIsImNoaWxkTm9kZXMiLCJpbm5lckhUTUwiLCJpbnNlcnRSb3ciLCJpbnNlcnRDZWxsIiwieEF4aXNJbmZvX091dCIsInlBeGlzSW5mb19PdXQiLCJpdGVtUG9vbCIsIml0ZW1BcnJheSIsImQiLCJpdGVtIiwibnVtIiwiaiIsImxlbjEiLCJsZW4yIiwiRElSVFkiLCJnZXRPYmoiLCJwdXNoIiwic2VyaWVzSW5kZXgiLCJpbmRleCIsInZhbHVlWCIsInZhbHVlWSIsImRpcnR5RmxhZyIsImF4aXNUeXBlIiwidkF4aXNJbmZvX0luIiwidkF4aXNJbmZvX091dCIsImNoYXJ0UGl4ZWxXaWR0aCIsImNoYXJ0UGl4ZWxIZWlnaHQiLCJhcnIiLCJVdGlsaXR5IiwiZ2V0U2NhbGVVbml0IiwidG9TdHJpbmciLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsInR3RW5naW5lIiwidHdlZW5DYWxsQmFjayIsIl90d2VlbkNhbGxCYWNrIiwiZnJvbSIsInRvIiwidHdEYXRhIiwidHdBY3Rpb24iLCJ0d0RhdGFBcnIiLCJkaXJ0eSIsInJhZGl1cyIsImdldFRXRGF0YSIsInNldERhdGEiLCJnZXRUV0FjdGlvbiIsIlRXQWxnb3JpdGhtIiwiQm91bmNlIiwiZWFzZU91dCIsInNldEZpcnN0VFdBY3Rpb24iLCJjb21tYW5kIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwicmVjdCIsIm1lIiwiZG9Nb3VzZU1vdmUiLCJlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93VG9DYW52YXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIlNURVA1Iiwicm93cyIsImNlbGxzIiwiaW5uZXJUZXh0IiwidG9GaXhlZCIsIlN0eWxlcyIsIlRJUF9MT0NBVElPTl9PRkZTRVQiLCJTVEVQNCIsImRvTW91c2VPdXQiLCJTVEVQNiIsIkFERCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU1RFUDEiLCJfcGFpbnQiLCJzdGFydCIsIlNURVAyIiwibmV4dEZyYW1lIiwic3RvcCIsIlNURVAzIiwiV0FJVElORyIsInJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJyZXN1bHRBcnJheSIsIl9jaGFydCIsIl9jdHgiLCJfY2FudmFzU3VyZmFjZSIsIl9jaGFydEluZm9fSW4iLCJfeEF4aXNJbmZvX0luIiwiX3lBeGlzSW5mb19JbiIsIl94QXhpc0xhYmVsQ291bnQiLCJfeUF4aXNMYWJlbENvdW50IiwiY2hhcnQiLCJnZXRDb250ZXh0IiwiY3R4IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGVhclJlY3QiLCJfcGFpbnRUaXRsZSIsIl9wYWludExlZ2VuZCIsIl9wYWludEdyaWQiLCJfcGFpbnRBeGlzIiwiX3BhaW50TGFiZWwiLCJfcGFpbnRBeGlzTmFtZSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsIl9wYWludFNjYXR0ZXJzIiwiX3BhaW50Q3Jvc3MiLCJzYXZlIiwiZm9udCIsIlRJVExFX0ZPTlQiLCJ0ZXh0QWxpZ24iLCJURVhUX0FMSUdOX0xFRlQiLCJ0ZXh0QmFzZWxpbmUiLCJURVhUX0JBU0VfTElORV9UT1AiLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJ3IiwiaCIsInN0ciIsIkxFR0VORF9GT05UIiwiZ2V0VGV4dEhlaWdodCIsIm1lYXN1cmVUZXh0IiwiZmlsbFN0eWxlIiwiRk9OVF9GSUxMX0NPTE9SIiwiTEVHRU5EX1NIQVBFX1RFWFRfR0FQIiwiZmlsbFJlY3QiLCJMRUdFTkRfR0FQIiwieFNjYWxlVW5pdFNpemUiLCJ5U2NhbGVVbml0U2l6ZSIsInhBeGlzTGFiZWxDb3VudCIsInlBeGlzTGFiZWxDb3VudCIsIngxIiwieDIiLCJ5MSIsInkyIiwibGluZVdpZHRoIiwiR1JJRF9MSU5FX1dJRFRIIiwic3Ryb2tlU3R5bGUiLCJHUklEX0xJTkVfQ09MT1IiLCJzZXRMaW5lRGFzaCIsIkdSSURfTElORV9EQVNIIiwiYWRqdXN0UG9zaXRpb24iLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJ4T3JpZ2luUG9zaXRpb24iLCJ5T3JpZ2luUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImFuZ2xlIiwiQVhJU19MSU5FX1dJRFRIIiwiQVhJU19MSU5FX0NPTE9SIiwiQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRSIsInhMYWJlbFJvdGF0ZSIsInlMYWJlbFJvdGF0ZSIsInhNaW5TY2FsZSIsInlNaW5TY2FsZSIsInhTY2FsZVVuaXQiLCJ5U2NhbGVVbml0IiwieERlY2ltYWxEaWdpdCIsInlEZWNpbWFsRGlnaXQiLCJMQUJFTF9GT05UIiwiVEVYVF9CQVNFX0xJTkVfTUlERExFIiwiVEVYVF9BTElHTl9DRU5URVIiLCJYQVhJU19MQUJFTF9PRkZTRVQiLCJQSSIsIlRFWFRfQUxJR05fUklHSFQiLCJYQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIllBWElTX0xBQkVMX09GRlNFVCIsIkFYSVNfTkFNRV9GT05UIiwiZ2xvYmFsQWxwaGEiLCJTQ0FUVEVSX1BPSU5UX0FMUEhBIiwiYXJjIiwiZmlsbCIsImNsb3NlUGF0aCIsIm1vdXNlUG9zaXRpb24iLCJTQ0FUVEVSX0NST1NTX0xJTkVfV0lEVEgiLCJTQ0FUVEVSX0NST1NTX0NPTE9SIiwiaW5zdGFuY2UiLCJzcXJ0IiwiUGFydEJhc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZ1bmMiLCJzZXRUaW1lb3V0IiwiSEFMRl9QSVhFTCIsIkNMT1NFX1RPX1pFUk8iLCJURVhUX0JBU0VfTElORV9CT1RUT00iLCJURVhUX0JBU0VfTElORV9JREVPR1JBUEhJQyIsIlJBRElBTl9VTklUIiwiY2xhenoiLCJwYXJhIiwiX2NsYXNzIiwiX3BhcmEiLCJfY291bnQiLCJfcG9vbCIsInBvb2wiLCJvYmoiLCJZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURSIsIkJVQkJMRV9BTFBIQSIsIkNPTFVNTl9TRUxFQ1RPUl9MSU5FX1dJRFRIIiwiQ09MVU1OX1NFTEVDVE9SX0xJTkVfQ09MT1IiLCJMSU5FX0xJTkVfV0lEVEgiLCJMSU5FX0FSRUFfQUxQSEEiLCJMSU5FX01BUktQT0lOVF9XSURUSCIsIkxJTkVfTUFSS1BPSU5UX1JBRElVUyIsIkxJTkVfTUFSS1BPSU5UX0JBS19DT0xPUiIsIkxJTkVfU0VMRUNUT1JfTElORV9XSURUSCIsIkxJTkVfU0VMRUNUT1JfTElORV9DT0xPUiIsIlBJRV9MQUJFTF9JTk5FUl9GT05UX0NPTE9SIiwiUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkUiLCJQSUVfTEFCRUxfR1VJREVfTElORTJfU0laRSIsIlBJRV9MQUJFTF9PRkZTRVQiLCJQSUVfU0VMRUNUT1JfVFJBTlNMQVRFIiwiUElFX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJQSUVfU0VMRUNUT1JfTElORV9DT0xPUiIsIlJBREFSX0xBQkVMX0ZPTlQiLCJSQURBUl9MQUJFTF9DT0xPUiIsIlJBREFSX0xBQkVMX1BPU0lUSU9OX09GRlNFVCIsIlJBREFSX0xJTkVfV0lEVEgiLCJSQURBUl9CQUtfTElORV9XSURUSCIsIlJBREFSX0JBS19MSU5FX0NPTE9SIiwiUkFEQVJfQkFLX0ZJTExfQ09MT1IiLCJTVU5CVVJTX0xBQkVMX0NPTE9SIiwiU1VOQlVSU19CT1JERVJfQ09MT1IiLCJzY2FsZU1heENvdW50IiwiYXZnIiwiZ2FwcyIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsInBvdyIsInhPUnkiLCJyb3VuZCIsImJvdW5kaW5nQ2xpZW50UmVjdExlZnQiLCJib3VuZGluZ0NsaWVudFJlY3RUb3AiLCJib3VuZGluZ0NsaWVudFJlY3RXaWR0aCIsImJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCIsImdsb2JsZVgiLCJnbG9ibGVZIiwicG9zaXRpb24iLCJjYW52YXNDb250ZXh0IiwidGV4dCIsIlRXQWN0aW9uIiwidG90bGVUaW1lcyIsImRhdGFBcnJheSIsImFsZ29yaXRobSIsIm5leHRBY3Rpb24iLCJkdXJhdGlvbiIsImNlaWwiLCJGUkFNRV9EVVJBVElPTiIsImFjdGlvbiIsImNhbGxCYWNrIiwidmFsdWUiLCJ0IiwiYiIsImMiLCJRdWFkIiwiZWFzZUluIiwiZWFzZUluT3V0IiwiQ3ViaWMiLCJRdWFydCIsIlF1aW50IiwiU2luZSIsImNvcyIsInNpbiIsIkV4cG8iLCJDaXJjIiwiRWxhc3RpYyIsImEiLCJwIiwicyIsImFicyIsImFzaW4iLCJCYWNrIiwiVCIsInR3ZWVuIiwiVFdEYXRhIiwiZnJvbUFycmF5IiwidG9BcnJheSIsIl9hY3Rpb25zIiwiX2ZpcnN0QWN0aW9uIiwiX2N1cnJlbnRBY3Rpb24iLCJfYWN0aW9uUG9vbCIsIl9kYXRhUG9vbCIsIl9pc1BsYXlpbmciLCJpbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFD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O0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0hBLFdBQUcsR0FBRyxLQUFOO0FBQ0g7O0FBRUQsYUFBT0EsR0FBUDtBQUNIOzs7NEJBRVE7QUFDTCxXQUFLaVUsVUFBTCxHQUFrQixJQUFsQjtBQUNIOzs7MkJBRU87QUFDSixVQUFJNVQsQ0FBSixFQUFPQyxHQUFQO0FBRUEsV0FBSzJULFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxXQUFLSCxjQUFMLEdBQXNCLEtBQUtELFlBQTNCO0FBRUF2VCxTQUFHLEdBQUcsS0FBS3NULFFBQUwsQ0FBYzNULE1BQXBCOztBQUNBLFdBQUtJLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0MsR0FBaEIsRUFBcUJELENBQUMsRUFBdEIsRUFBMEI7QUFDdEIsYUFBS3VULFFBQUwsQ0FBY3ZULENBQWQsRUFBaUI2VCxJQUFqQjtBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBIiwiZmlsZSI6InNjYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzY2F0dGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRcIl0gPSByb290W1wiVFwiXSB8fCB7fSwgcm9vdFtcIlRcIl1bXCJzY2F0dGVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWJwYWNrRW50cnkvc2NhdHRlckVudHJ5LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4gLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qICwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICB2YXIgZW5kID0gYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlIChlbmRQb3MgPiBpbmRleCkgT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBidWlsdGluRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcblxuIC8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cbiAgcmV0dXJuIGJ1aWx0aW5FeGVjLmNhbGwoUiwgUyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS8sXG4gICAgICByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMVtMQVNUX0lOREVYXSAhPT0gMCB8fCByZTJbTEFTVF9JTkRFWF0gIT09IDA7XG59KSgpO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIHJlZ2V4cEZsYWdzLmNhbGwocmUpKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmVbTEFTVF9JTkRFWF07XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChyZSwgc3RyKTtcblxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlW0xBU1RfSU5ERVhdID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc3BhY2VzID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJyk7XG52YXIgc3BhY2UgPSAnWycgKyBzcGFjZXMgKyAnXSc7XG52YXIgbm9uID0gJ1xcdTIwMGJcXHUwMDg1JztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEFMSUFTKSB7XG4gIHZhciBleHAgPSB7fTtcbiAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pO1xuICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuICBpZiAoQUxJQVMpIGV4cFtBTElBU10gPSBmbjtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbiAoc3RyaW5nLCBUWVBFKSB7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5JywgeyBmaWxsOiByZXF1aXJlKCcuL19hcnJheS1maWxsJykgfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmaWxsJyk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4vX3N0cmluZy10cmltJykudHJpbTtcbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciAkTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgQmFzZSA9ICROdW1iZXI7XG52YXIgcHJvdG8gPSAkTnVtYmVyLnByb3RvdHlwZTtcbi8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xudmFyIEJST0tFTl9DT0YgPSBjb2YocmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpKHByb3RvKSkgPT0gTlVNQkVSO1xudmFyIFRSSU0gPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSBUUklNID8gaXQudHJpbSgpIDogJHRyaW0oaXQsIDMpO1xuICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgdmFyIHRoaXJkLCByYWRpeCwgbWF4Q29kZTtcbiAgICBpZiAoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSkge1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYgKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKSByZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gNDgpIHtcbiAgICAgIHN3aXRjaCAoaXQuY2hhckNvZGVBdCgxKSkge1xuICAgICAgICBjYXNlIDY2OiBjYXNlIDk4OiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzk6IGNhc2UgMTExOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgZGlnaXRzID0gaXQuc2xpY2UoMiksIGkgPSAwLCBsID0gZGlnaXRzLmxlbmd0aCwgY29kZTsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKSByZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG5pZiAoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKSB7XG4gICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBwcm90by52YWx1ZU9mLmNhbGwodGhhdCk7IH0pIDogY29mKHRoYXQpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSh0b051bWJlcihpdCkpLCB0aGF0LCAkTnVtYmVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BOKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoQmFzZSwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcygkTnVtYmVyLCBrZXkpKSB7XG4gICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9XG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xucmVxdWlyZSgnLi9fZXhwb3J0Jykoe1xuICB0YXJnZXQ6ICdSZWdFeHAnLFxuICBwcm90bzogdHJ1ZSxcbiAgZm9yY2VkOiByZWdleHBFeGVjICE9PSAvLi8uZXhlY1xufSwge1xuICBleGVjOiByZWdleHBFeGVjXG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xudmFyICRtaW4gPSBNYXRoLm1pbjtcbnZhciAkcHVzaCA9IFtdLnB1c2g7XG52YXIgJFNQTElUID0gJ3NwbGl0JztcbnZhciBMRU5HVEggPSAnbGVuZ3RoJztcbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxudmFyIFNVUFBPUlRTX1kgPSAhIShmdW5jdGlvbiAoKSB7IHRyeSB7IHJldHVybiBuZXcgUmVnRXhwKCd4JywgJ3knKTsgfSBjYXRjaCAoZSkge30gfSkoKTtcblxuLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDB4ZmZmZmZmZmYgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9ICRtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogXFxyXFxuICog5Zu+6KGo5YaF5YWo5bGA6K6+5a6a77yI5b+F6aG76aG555uu77yJXFxyXFxuICog55So5LqO5riF6Zmk77yI5Yid5aeL5YyW77yJ5omA5pyJ6buY6K6k5YaF5aSW6L656LedIFxcclxcbiAqL1xcclxcbi5zY2F0dGVyQ2hhcnREaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDsgICAgICAgICAgICAvKiDmuIXpmaTvvIjliJ3lp4vljJbvvInlm77ooajlhoXmiYDmnInlhYPntKDnmoTpu5jorqTlhoXovrnot50gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggOyAgICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5aSW6L656LedICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjUgO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiDnu5jliLbkuLvkvZPnmoRDYW52YXNcXHJcXG4gKi9cXHJcXG4uc2NhdHRlckNoYXJ0RGl2IGNhbnZhcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAvKiDnu53lr7nlrprkvY3vvIzov5nmoLcy5Liq5Z2X5YWD57Sg77yIQ2FudmFz77yJ5omN5Lya6YeN5Y+g5Zyo5LiA6LW3ICovXFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjYWFhYWFhO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICBcXHJcXG4vKiBcXHJcXG4gKiBUaXBcXHJcXG4gKi9cXHJcXG4uc2NhdHRlckNoYXJ0VGlwRGl2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgIC8qIOe7neWvueWumuS9je+8jOi/meagt+aJjeS8mui3n+maj+m8oOagh+S9jee9riAqL1xcclxcbiAgICBcXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgXFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDVweCA1cHggMjBweDsgICAgIC8qIOmYtOW9sSAqL1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSA1cHggNXB4IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSA1cHggNXB4IDIwcHg7XFxyXFxuICAgIFxcclxcbiAgICBmb250LWZhbWlseTogTWljcm9zb2Z0IFlhSGVpOyAgICAgIC8qIFRpcOWtl+S9kyAqL1xcclxcbiAgICBmb250LXNpemU6IDEycHg7ICAgICAgICAgICAgICAvKiBUaXDlrZfkvZPlsLrlr7ggKi9cXHJcXG4gICAgY29sb3I6ICNlZWVlZWU7ICAgICAgICAgICAgICAgLyogVGlw5paH5a2X6aKc6ImyICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFxcclxcbiAqIFRpcCAtLSB0YWJsZVxcclxcbiAqL1xcclxcbi5zY2F0dGVyQ2hhcnRUaXBEaXYgdGFibGV7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgIFxcclxcbiAgICBtYXJnaW46IDBweCA7ICAgICAgIFxcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICAgIC8qIOWQiOW5tui+ueahhiAqL1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDsgICAgICAgICAgICAvKiDorr7nva7nm7jpgrvljZXlhYPmoLznmoTovrnmoYbpl7TnmoTot53nprsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuICogVGlwIC0tIHRhYmxlIC0tIHRkXFxyXFxuICovXFxyXFxuLnNjYXR0ZXJDaGFydFRpcERpdiB0YWJsZSB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgICAgICAgICBcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgICAgICAgICAgLyog5Zyo5YiX5pWw5o2u5LmL6Ze055WZ5L2Z55m9ICovXFxyXFxuICAgIG1hcmdpbjogMHB4IDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwOyAgICAgICAgICAgLyog56aB5q2i5o2i6KGMICovXFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuICogVGlwIC0tIHRhYmxlIC0tIHRkIC0tIHNwYW5cXHJcXG4gKi9cXHJcXG4uc2NhdHRlckNoYXJ0VGlwRGl2IHRhYmxlIHRkIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgICAgICAgICAgIC8qIOi9rOaIkOihjOWGheWdl++8jOWQpuWImeS4jeiDveaYvuekuuWHuuadpSAqL1xcclxcbiAgICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7ICAgICAgICAgICAgLyog5ZyG5b2iICovXFxyXFxuICAgIHdpZHRoOiA5cHg7XFxyXFxuICAgIGhlaWdodDogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBUaXAgLS0gdGFibGUgLS0g56ys5LiJ5YiXXFxyXFxuICovXFxyXFxuLnNjYXR0ZXJDaGFydFRpcERpdiAuc2Vjb25kQ29sIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7ICAgICAgICAgICAvKiDpnaDlj7Plr7npvZAgKi9cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYgPSBudWxsOyAgICAgICAgICAgICAgICAgLy/lrZDnu4Tku7Y6IOWbvuihqOWQhOS4quWtkOe7hOS7tueahOeItuWuueWZqFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdGlwRGl2ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFpbnRlciA9IG51bGw7ICAgICAgICAgICAgICAgICAgIC8v55S75a625byV55SoXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICcnOyAgICAgICAgICAgICAgICAgICAgICAvL+eKtuaAgVxyXG5cclxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IGZhbHNlOyAgLy/nlLHkuo5qc+aXoOazleWIpOaWreS6i+S7tuebkeWQrOWHveaVsOaYr+WQpuW3sue7j+WtmOWcqO+8jOWboOatpOiHquWumuS5ieagh+W/l+S9jeadpeWIpOaWrVxyXG4gICAgICAgIHRoaXMuX3N1cmZhY2VJbWFnZURhdGEgPSBudWxsOyAgICAgICAgICAvL0NhbnZhc+e7mOWbvuihqOmdou+8jOeUqOS6juS/neWtmENhbnZhc+WbvueJh1xyXG5cclxuICAgICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc3RvcCAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gU3RhdHVzLlNUT1A7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIF9zZXRQYWludGVyIChwYWludGVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlciA9IHBhaW50ZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnQgKCkge1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIuc2V0Q2hhcnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlci5wYWludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIOWKqOaAgeeUn+aIkHRpcOWvueixoVxyXG4gICAgKiDlnKjmnKzlm77ooajns7vliJfkuK3vvIx0aXDmmK/nlLHmrrXokL1w5a+56LGh5ZKMdGFibGXlr7nosaHmnoTmiJDvvIzlhbblpJbop4LnlLHlpJbpg6jmjIflrprnmoRDU1PmjqfliLZcclxuICAgICovXHJcbiAgICBfY3JlYXRlVGlwIChjbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgdGlwO1xyXG5cclxuICAgICAgICAvL+eUn+aIkHRpcOeahGRpduWvueixoSzlubblop7liqBjbGFzc+agt+W8j+OAguazqOaEj++8muaYr+WinuWKoOiAjOS4jeaYr+abv+aNolxyXG4gICAgICAgIHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpcC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOauteiQveWvueixoe+8jOeUqOS6juaYvuekuuexu+ebruWQjeensFxyXG4gICAgICAgIHRpcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOihqOagvOWvueixoe+8jOeUqOS6juezu+WIl+WQjeensOWSjOaVsOaNrlxyXG4gICAgICAgIHRpcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpKTtcclxuXHJcbiAgICAgICAgLy/ov5Tlm55cclxuICAgICAgICByZXR1cm4gdGlwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENoYXJ0SW5mb0Jhc2VfSW4gZnJvbSAnLi9DaGFydEluZm9CYXNlX0luLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXNDaGFydEluZm9CYXNlX0luIGV4dGVuZHMgQ2hhcnRJbmZvQmFzZV9JbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMueEF4aXNOYW1lID0gJ1jovbQnOyAgICAgICAgICAgICAgLy/mmL7npLrlnKh46L205bC95aS077yM55So5LqO6KGo56S6eOi9tOWQq+S5ieeahOaWh+Wtl+OAgiA8YnI+5L6L5aaC77ya5pe26Ze044CB5pyI5Lu944CB5Zu95YirXHJcbiAgICAgICAgdGhpcy55QXhpc05hbWUgPSAnWei9tCc7ICAgICAgICAgICAgICAvL+aYvuekuuWcqHnovbTlsL3lpLTvvIznlKjkuo7ooajnpLp56L205ZCr5LmJ55qE5paH5a2X44CCIDxicj7kvovlpoLvvJrph5Hpop3jgIHmtZPluqbjgIHpm6jph49cclxuXHJcbiAgICAgICAgdGhpcy54QXhpc05hbWVCb3R0b20gPSAyNTsgICAgICAgIC8veOi9tOWQjeensOaWh+Wtl+S4iui+uee8mOWIsGRpduS4i+i+uee8mOeahOi3neemu1xyXG4gICAgICAgIHRoaXMueUF4aXNOYW1lVG9wID0gNDA7ICAgICAgICAgICAvL3novbTlkI3np7DmloflrZfkuIrovrnnvJjliLBkaXbkuIrovrnnvJjnmoTot53nprtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRJbmZvQmFzZV9JbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnVENoYXJ0cyc7ICAgICAgIC8v5Zu+6KGo5qCH6aKYXHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVUb3AgPSAxMDsgICAgICAgICAvL+agh+mimOS9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMudGl0bGVMZWZ0ID0gMTA7XHJcblxyXG4gICAgICAgIHRoaXMubGVnZW5kVG9wID0gMTA7ICAgICAgICAvL+WbvuS+i+S9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMubGVnZW5kTGVmdCA9IDIwO1xyXG4gICAgICAgIHRoaXMubGVnZW5kUmlnaHQgPSAyMDtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5VG9wID0gNzA7ICAgICAgIC8v5Zu+6KGo5Li75L2T5Yy65Z+f77yIeHnkuKTovbTlm7TmiJDnmoTnn6nlvaLljLrln5/vvInvvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLmJvZHlCb3R0b20gPSA1MDtcclxuICAgICAgICB0aGlzLmJvZHlMZWZ0ID0gNTA7XHJcbiAgICAgICAgdGhpcy5ib2R5UmlnaHQgPSA1MDtcclxuXHJcbiAgICAgICAgLy/lm77ooajkvb/nlKjnmoTpopzoibLmlbDnu4RcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFsnI0MyMzUzMScsICcjMkY0NTU0JywgJyM2MUEwQTgnLCAnI0Q0ODI2NScsICcjOTFDN0FFJywgJyNDQTg2MjInLCAnI0JEQTI5QScsICcjNkU3MDc0J107XHJcbiAgICAgICAgdGhpcy5zZXJpZXMgPSBbXTsgICAgICAgICAgICAgICAgIC8v5pWw5o2u57O75YiXXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7ICAgICAgICAgLy/pgInmi6npobnnmoTntKLlvJUgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWQXhpc0luZm9CYXNlX0luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFOyAgICAgICAvL+aVsOWAvOi9tOeahOacgOWwj+WAvOOAguS/neaMgem7mOiupOWAvOS7o+ihqOmcgOimgeiHquWKqOiuoeeul1xyXG4gICAgICAgIHRoaXMubWF4ID0gTnVtYmVyLk1BWF9WQUxVRTsgICAgIC8v5pWw5YC86L2055qE5pyA5aSn5YC844CC5L+d5oyB6buY6K6k5YC85Luj6KGo6ZyA6KaB6Ieq5Yqo6K6h566XXHJcbiAgICAgICAgdGhpcy5sYWJlbE1heENvdW50ID0gNzsgICAgICAgICAgICAgICAgICAgLy/moIfnrb7mmL7npLrnmoTmnIDlpKfkuKrmlbBcclxuICAgICAgICB0aGlzLnplcm9FeHRlbmQgPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy/lvZPmlbDlgLzojIPlm7TkuI3ljIXmi6ww5pe277yM5piv5ZCm5bCG6IyD5Zu05omp5bGV5YiwMFxyXG4gICAgICAgIHRoaXMubGFiZWxSb3RhdGUgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgIC8v5qCH562+5peL6L2s6KeS5bqmICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZBeGlzSW5mb0Jhc2VfT3V0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy/mlbDlgLzovbTnmoTmnIDlsI/lgLxcclxuICAgICAgICAvL1ZBeGlzSW5mb0Jhc2VfSW4ubWluID0g6buY6K6k5YC85pe2IDogIFZBeGlzSW5mb0Jhc2VfT3V0Lm1pbueahOWAvOaYr+WGhemDqOeul+azleiuoeeul+eahOe7k+aenFxyXG4gICAgICAgIC8vVkF4aXNJbmZvQmFzZV9Jbi5taW4gIT0g6buY6K6k5YC85pe2IDogIFZBeGlzSW5mb0Jhc2VfT3V0Lm1pbiA9IFZBeGlzSW5mb0Jhc2VfSW4ubWluXHJcbiAgICAgICAgdGhpcy5taW4gPSAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gMDsgICAgICAgICAgICAgICAgICAgICAvL+WQjOeQhlxyXG5cclxuICAgICAgICB0aGlzLm1pblNjYWxlOyAgICAgICAgICAgICAgICAgICAvL+acgOWwj+WIu+W6puWAvFxyXG4gICAgICAgIHRoaXMubWF4U2NhbGU7ICAgICAgICAgICAgICAgICAgLy/mnIDlpKfliLvluqblgLxcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBbXTsgICAgICAgICAgICAgICAgIC8v5L+d5a2Y5pWw5YC86L205LiK5pi+56S655qE5qCH562+5paH5a2XXHJcbiAgICAgICAgdGhpcy5vcmlnaW5JbmRleCA9IC0xOyAgICAgICAgLy/ljp/ngrnmoIfnrb7lnKhsYWJlbHPmlbDnu4TkuK3nmoTntKLlvJXvvIznlKjkuo7nu5jliLbovbTnur9cclxuICAgICAgICB0aGlzLm9yaWdpblZhbHVlOyAgICAgICAgICAgICAgIC8v5Y6f54K555qE5YC8XHJcbiAgICAgICAgdGhpcy5vcmlnaW5Qb3NpdGlvbjsgICAgICAgICAgIC8v5Y6f54K55ZyoQ2FudmFz5LiK55qE55u45a+55L2N572uXHJcbiAgICAgICAgdGhpcy51bml0VmFsdWVTaXplID0gLTE7ICAgICAgLy/mlbDlgLwx5Zyo6L205LiK5Y2g55So55qE6ZW/5bqmXHJcbiAgICAgICAgdGhpcy5zY2FsZVVuaXQgPSAwOyAgICAgICAgICAgICAgLy/ljZXkvY3liLvluqblgLxcclxuICAgICAgICB0aGlzLnNjYWxlVW5pdFNpemUgPSAwOyAgICAgICAgLy/ljZXkvY3liLvluqblnKjovbTkuIrljaDnlKjnmoTplb/luqZcclxuXHJcbiAgICAgICAgdGhpcy5kZWNpbWFsRGlnaXQ7ICAgICAgICAgICAgICAvL+aVsOWtl+agh+etvuWwj+aVsOS9jeaVsFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXNCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBDaGFydEJhc2UgZnJvbSAnLi4vLi4vYmFzZS9jaGFydC9DaGFydEJhc2UuanMnO1xyXG5pbXBvcnQgVkF4aXNJbmZvQmFzZV9JbiBmcm9tICcuLi8uLi9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9Jbi5qcyc7XHJcbmltcG9ydCBWQXhpc0luZm9CYXNlX091dCBmcm9tICcuLi8uLi9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9PdXQuanMnO1xyXG5cclxuaW1wb3J0IENoYXJ0SW5mb19JbiBmcm9tICcuL2luZm8vQ2hhcnRJbmZvX0luLmpzJztcclxuaW1wb3J0IFNjYXR0ZXJQb2ludCBmcm9tICcuL3BhcnRzL1NjYXR0ZXJQb2ludC5qcyc7XHJcbmltcG9ydCBQYWludGVyIGZyb20gJy4vcGFpbnRlci9QYWludGVyLmpzJztcclxuXHJcbmltcG9ydCBPYmplY3RQb29sIGZyb20gJy4uLy4uL3N1cHBvcnQvT2JqZWN0UG9vbC5qcyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vc3VwcG9ydC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uL3N1cHBvcnQvU3R5bGVzLmpzJztcclxuaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uL3N1cHBvcnQvVXRpbGl0eS5qcyc7XHJcblxyXG5pbXBvcnQgVFdBbGdvcml0aG0gZnJvbSAnLi4vLi4vdHdlZW4vVFdBbGdvcml0aG0uanMnO1xyXG5pbXBvcnQgVFdFbmdpbmUgZnJvbSAnLi4vLi4vdHdlZW4vVFdFbmdpbmUuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ2hhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnREaXZJRCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy/nlKjmiLfovpPlhaXvvIjlm77ooajlv4XlpIfkv6Hmga/vvIlcclxuICAgICAgICB0aGlzLmNoYXJ0SW5mb19JbiA9IG5ldyBDaGFydEluZm9fSW4oKTsgICAgICAgICAgICAgICAvL+WbvuihqOS/oeaBr+OAguS+i++8muWbvuihqOWQjeensFxyXG4gICAgICAgIHRoaXMueEF4aXNJbmZvX0luID0gbmV3IFZBeGlzSW5mb0Jhc2VfSW4oKTsgICAgICAgICAgIC8veOWAvOi9tOS/oeaBr1xyXG4gICAgICAgIHRoaXMueUF4aXNJbmZvX0luID0gbmV3IFZBeGlzSW5mb0Jhc2VfSW4oKTsgICAgICAgICAgIC8veeWAvOi9tOS/oeaBr1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5feEF4aXNJbmZvX091dCA9IG5ldyBWQXhpc0luZm9CYXNlX091dCgpO1xyXG4gICAgICAgIHRoaXMuX3lBeGlzSW5mb19PdXQgPSBuZXcgVkF4aXNJbmZvQmFzZV9PdXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gW107ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lrZjmlL7mlaPngrnlr7nosaHnmoTkuoznu7TmlbDnu4RcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG51bGw7ICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aVo+eCueWvueixoeaxoFxyXG5cclxuICAgICAgICB0aGlzLl9tb3VzZVBvc2l0aW9uID0geyB4OiAtMSwgeTogLTEgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lID0gJ3NjYXR0ZXJDaGFydERpdic7ICAgIC8v5qC35byP5ZCNXHJcbiAgICAgICAgdGhpcy5fdGlwRGl2Q2xhc3NOYW1lID0gJ3NjYXR0ZXJDaGFydFRpcERpdic7XHJcbiAgICAgICAgdGhpcy5fc2Vjb25kQ29sQ2xhc3NOYW1lID0gJ3NlY29uZENvbCc7XHJcblxyXG4gICAgICAgIHRoaXMuX3R3RW5naW5lID0gbmV3IFRXRW5naW5lKCk7ICAgICAvL+e8k+WKqOWKqOeUu+ebuOWFs1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvL+iuvue9rueUu+WutlxyXG4gICAgICAgIHRoaXMuX3NldFBhaW50ZXIoUGFpbnRlcik7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5L2c5Li65Zu+6KGo5a655Zmo55qEZGl25a+56LGh77yM5bm25aKe5Yqg54m55a6a5qC35byP44CC5rOo5oSP77ya5piv5aKe5Yqg6ICM5LiN5piv5pu/5o2iXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RGl2SUQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+WKqOaAgeeUn+aIkF9jYW52YXPvvIzlubbmt7vliqDliLBET03moJHjgILlkIzml7bojrflj5blhbbkuIrkuIvmlodcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy/liqjmgIHnlJ/miJB0aXDlr7nosaHvvIzmt7vliqDliLBET03moJHvvIzlubbojrflj5bkuYtcclxuICAgICAgICB0aGlzLl90aXBEaXYgPSB0aGlzLl9jcmVhdGVUaXAodGhpcy5fdGlwRGl2Q2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fdGlwRGl2KTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblr7nosaHmsaBcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG5ldyBPYmplY3RQb29sKFNjYXR0ZXJQb2ludCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/pqozor4HmlbDmja7lkIjms5XmgKdcclxuICAgICAgICBpZiAodGhpcy5fY2hlY2soKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RDaGFydHNdIEluY29ycmVjdCBjaGFydCBkYXRhICEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ph43orr7lkITnp43nirbmgIHvvIzmlbDmja5cclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG5cclxuICAgICAgICAvL+S4uue7mOWItuWbvuihqO+8jOiuoeeul+WQhOenjeaVsOaNrlxyXG4gICAgICAgIHRoaXMuX2dldEl0ZW1BbmRDb21wdXRlTWluTWF4KCk7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyhDb25zdGFudHMuWF9BWElTLCB0aGlzLnhBeGlzSW5mb19JbiwgdGhpcy5feEF4aXNJbmZvX091dCk7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyhDb25zdGFudHMuWV9BWElTLCB0aGlzLnlBeGlzSW5mb19JbiwgdGhpcy5feUF4aXNJbmZvX091dCk7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbVBvc2l0aW9uQW5kVHdlZW4oKTtcclxuXHJcbiAgICAgICAgLy/lkK/liqjluKflvqrnjq/vvIzlnKjlvqrnjq/lhoXpg6jnu5jliLblm77ooahcclxuICAgICAgICB0aGlzLl9zdGFydFBhaW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfY2hlY2sgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICAvL+ajgOafpe+8miDmlbDmja7mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAodGhpcy5jaGFydEluZm9fSW4uc2VyaWVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3Jlc2V0ICgpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5fY2FudmFzLFxyXG4gICAgICAgICAgICBkaXYgPSB0aGlzLl9wYXJlbnREaXYsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBpdGVtQXJyID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIC8v56e76Zmk6byg5qCH5LqL5Lu255uR5ZCs5ZmoXHJcbiAgICAgICAgdGhpcy5fYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKENvbnN0YW50cy5SRU1PVkUpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruWwuuWvuFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpdi5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblm77kvovmlbDmja7jgIHmlaPngrnlr7nosaHmlbDnu4RcclxuICAgICAgICBpdGVtQXJyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGVuID0gY2hhcnRJbmZvX0luLnNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1BcnJbaV0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyWVGlwXHJcbiAgICAgICAgdGhpcy5faW5pdFRpcCgpO1xyXG5cclxuICAgICAgICAvL+S7juWvueixoeaxoOS4remHiuaUvuabvue7j+S9v+eUqOi/h+eahOaVo+eCueWvueixoVxyXG4gICAgICAgIHRoaXMuX2l0ZW1Qb29sLnJlbGVhc2VBbGwoKTtcclxuXHJcbiAgICAgICAgLy/ph4rmlL7nvJPliqjotYTmupBcclxuICAgICAgICB0aGlzLl90d0VuZ2luZS5yZWxlYXNlQWxsVFdEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5fdHdFbmdpbmUucmVsZWFzZUFsbFRXQWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8v5Y+W5raI5LiK5LiA5qyh57uR5a6a55qE5Yqo55S75Ye95pWwXHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfaW5pdFRpcCAoKSB7XHJcbiAgICAgICAgbGV0IHRpcERpdiA9IHRoaXMuX3RpcERpdixcclxuICAgICAgICAgICAgc2NoZW1hID0gdGhpcy5jaGFydEluZm9fSW4uc2NoZW1hLFxyXG4gICAgICAgICAgICBzZWNvbmRDb2xDbGFzc05hbWUgPSB0aGlzLl9zZWNvbmRDb2xDbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHRhYmxlLCByb3csIHRkLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICAvL+makOiXj3RpcFxyXG4gICAgICAgIHRpcERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAvL+WIoOmZpFRhYmxl5a+56LGh55qE5omA5pyJ6KGMXHJcbiAgICAgICAgdGFibGUgPSB0aXBEaXYuY2hpbGROb2Rlc1sxXTtcclxuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgLy/nlJ/miJBUYWJsZeeahDLooYxcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu66KGMXHJcbiAgICAgICAgICAgIHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xyXG5cclxuICAgICAgICAgICAgLy/liJvlu7rnrKzkuIDliJfvvIzlubbmj5LlhaVzcGFuXHJcbiAgICAgICAgICAgIHRkID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gc2NoZW1hW2ldO1xyXG5cclxuICAgICAgICAgICAgLy/liJvlu7rnrKzkuozliJfvvIzlubborr7lrprmoLflvI/lkI1cclxuICAgICAgICAgICAgdGQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICB0ZC5jbGFzc05hbWUgPSBzZWNvbmRDb2xDbGFzc05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfZ2V0SXRlbUFuZENvbXB1dGVNaW5NYXggKCkge1xyXG5cclxuICAgICAgICBsZXQgeEF4aXNJbmZvX0luID0gdGhpcy54QXhpc0luZm9fSW4sXHJcbiAgICAgICAgICAgIHhBeGlzSW5mb19PdXQgPSB0aGlzLl94QXhpc0luZm9fT3V0LFxyXG5cclxuICAgICAgICAgICAgeUF4aXNJbmZvX0luID0gdGhpcy55QXhpc0luZm9fSW4sXHJcbiAgICAgICAgICAgIHlBeGlzSW5mb19PdXQgPSB0aGlzLl95QXhpc0luZm9fT3V0LFxyXG5cclxuICAgICAgICAgICAgc2VyaWVzID0gdGhpcy5jaGFydEluZm9fSW4uc2VyaWVzLFxyXG4gICAgICAgICAgICBpdGVtUG9vbCA9IHRoaXMuX2l0ZW1Qb29sLFxyXG4gICAgICAgICAgICBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcblxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBkLFxyXG5cclxuICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgbnVtLFxyXG5cclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMjtcclxuXHJcbiAgICAgICAgLy8oMSnpgY3ljobnrKzkuIDkuKrns7vliJfnmoTlhajpg6jmlbDmja7vvIzmib7liLDnrKzkuIDkuKrmnInmlYjmlbDmja7vvIzkuLrmnIDlpKfmnIDlsI/otYvliJ3lgLxcclxuICAgICAgICBkYXRhID0gc2VyaWVzWzBdLmRhdGE7XHJcbiAgICAgICAgbGVuMSA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgZCA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgIGlmIChkWzBdICE9IENvbnN0YW50cy5ESVJUWSAmJlxyXG4gICAgICAgICAgICAgICAgZFsxXSAhPSBDb25zdGFudHMuRElSVFkpIHtcclxuICAgICAgICAgICAgICAgIHhBeGlzSW5mb19PdXQubWluID0geEF4aXNJbmZvX091dC5tYXggPSBkWzBdO1xyXG4gICAgICAgICAgICAgICAgeUF4aXNJbmZvX091dC5taW4gPSB5QXhpc0luZm9fT3V0Lm1heCA9IGRbMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vKDIp5LuO5rGg5Lit5Y+W5Ye66aG555uu5a+56LGh77yM5ZCM5pe25rGC5b6X5pyA5aSn5pyA5bCP5YC8XHJcbiAgICAgICAgbGVuMSA9IHNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjE7IGkrKykge1xyXG4gICAgICAgICAgICBkYXRhID0gc2VyaWVzW2ldLmRhdGE7XHJcbiAgICAgICAgICAgIGxlbjIgPSBkYXRhLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8v55Sf5oiQ6aG555uu5a+56LGhXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+W5b6X5pWj54K55Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBkID0gZGF0YVtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+S7juaxoOS4reiOt+WPlumhueebruWvueixoe+8jOWKoOWFpeWIsOaVsOe7hCzlubbph43mlrDorr7nva7lsZ7mgKdcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtUG9vbC5nZXRPYmooKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1BcnJheVtpXS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6+572u6aG555uuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnNlcmllc0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaW5kZXggPSBqO1xyXG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZVggPSBkWzBdO1xyXG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZVkgPSBkWzFdO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kaXJ0eUZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+avlOi+g3jovbTmnIDlgLxcclxuICAgICAgICAgICAgICAgIG51bSA9IGl0ZW0udmFsdWVYO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSAhPSBDb25zdGFudHMuRElSVFkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtIDwgeEF4aXNJbmZvX091dC5taW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeEF4aXNJbmZvX091dC5taW4gPSBudW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPiB4QXhpc0luZm9fT3V0Lm1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhpc0luZm9fT3V0Lm1heCA9IG51bTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlydHlGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+avlOi+g3novbTmnIDlgLxcclxuICAgICAgICAgICAgICAgIG51bSA9IGl0ZW0udmFsdWVZO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSAhPSBDb25zdGFudHMuRElSVFkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtIDwgeUF4aXNJbmZvX091dC5taW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeUF4aXNJbmZvX091dC5taW4gPSBudW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPiB5QXhpc0luZm9fT3V0Lm1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5QXhpc0luZm9fT3V0Lm1heCA9IG51bTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlydHlGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8oMynliKTmlq3nlKjmiLfmmK/lkKbmjIflrprkuobmnIDlpKfmnIDlsI/lgLzvvIzlubbmja7mraTosIPmlbTmnIDlgLxcclxuICAgICAgICBpZiAoeEF4aXNJbmZvX0luLm1pbiAhPSBOdW1iZXIuTUlOX1ZBTFVFICYmIHhBeGlzSW5mb19Jbi5taW4gPCB4QXhpc0luZm9fT3V0Lm1pbikge1xyXG4gICAgICAgICAgICB4QXhpc0luZm9fT3V0Lm1pbiA9IHhBeGlzSW5mb19Jbi5taW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4QXhpc0luZm9fSW4ubWF4ICE9IE51bWJlci5NQVhfVkFMVUUgJiYgeEF4aXNJbmZvX0luLm1heCA+IHhBeGlzSW5mb19PdXQubWF4KSB7XHJcbiAgICAgICAgICAgIHhBeGlzSW5mb19PdXQubWF4ID0geEF4aXNJbmZvX0luLm1heDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5QXhpc0luZm9fSW4ubWluICE9IE51bWJlci5NSU5fVkFMVUUgJiYgeUF4aXNJbmZvX0luLm1pbiA8IHlBeGlzSW5mb19PdXQubWluKSB7XHJcbiAgICAgICAgICAgIHlBeGlzSW5mb19PdXQubWluID0geUF4aXNJbmZvX0luLm1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHlBeGlzSW5mb19Jbi5tYXggIT0gTnVtYmVyLk1BWF9WQUxVRSAmJiB5QXhpc0luZm9fSW4ubWF4ID4geUF4aXNJbmZvX091dC5tYXgpIHtcclxuICAgICAgICAgICAgeUF4aXNJbmZvX091dC5tYXggPSB5QXhpc0luZm9fSW4ubWF4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8oNCnliKTmlq3mmK/lkKblnKjlgLzovbTkuIrmianlsZUgMO+8jOW5tuaNruatpOiwg+aVtOacgOWAvFxyXG4gICAgICAgIGlmICh4QXhpc0luZm9fSW4uemVyb0V4dGVuZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh4QXhpc0luZm9fT3V0Lm1pbiA+IDAgJiYgeEF4aXNJbmZvX091dC5tYXggPiAwKSAgICAgICAgICAgLy/lkIzkuLrmraPmlbBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeEF4aXNJbmZvX091dC5taW4gPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhBeGlzSW5mb19PdXQubWluIDwgMCAmJiB4QXhpc0luZm9fT3V0Lm1heCA8IDApIHsgICAgIC8v5ZCM5Li66LSf5pWwXHJcbiAgICAgICAgICAgICAgICB4QXhpc0luZm9fT3V0Lm1heCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5QXhpc0luZm9fSW4uemVyb0V4dGVuZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh5QXhpc0luZm9fT3V0Lm1pbiA+IDAgJiYgeUF4aXNJbmZvX091dC5tYXggPiAwKSAgICAgICAgICAgLy/lkIzkuLrmraPmlbBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeUF4aXNJbmZvX091dC5taW4gPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHlBeGlzSW5mb19PdXQubWluIDwgMCAmJiB5QXhpc0luZm9fT3V0Lm1heCA8IDApIHsgICAgIC8v5ZCM5Li66LSf5pWwXHJcbiAgICAgICAgICAgICAgICB5QXhpc0luZm9fT3V0Lm1heCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyAoYXhpc1R5cGUsIHZBeGlzSW5mb19JbiwgdkF4aXNJbmZvX091dCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBjaGFydFBpeGVsV2lkdGgsIGNoYXJ0UGl4ZWxIZWlnaHQsXHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCxcclxuICAgICAgICAgICAgYXJyLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+agh+etvumXtOmalFxyXG4gICAgICAgIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0ID0gVXRpbGl0eS5nZXRTY2FsZVVuaXQodkF4aXNJbmZvX091dC5taW4sIHZBeGlzSW5mb19PdXQubWF4LCB2QXhpc0luZm9fSW4ubGFiZWxNYXhDb3VudCk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5qiq6L205qCH562+5bCP5pWw5L2N5pWwXHJcbiAgICAgICAgYXJyID0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXQudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCA9IGFyclsxXS5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5kZWNpbWFsRGlnaXQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v6K6h566X5pyA5bCP5Yi75bqmKOWQjOaXtuS4uuacgOWkp+WIu+W6puiuvuWIneWAvClcclxuICAgICAgICB2QXhpc0luZm9fT3V0Lm1pblNjYWxlID0gdkF4aXNJbmZvX091dC5tYXhTY2FsZSA9IE1hdGguZmxvb3IodkF4aXNJbmZvX091dC5taW4gLyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCkgKiB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdDtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmnIDlpKfliLvluqbvvIzlkIzml7borrDlvZXljp/ngrnnmoTkvY3nva5cclxuICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID0gLTE7ICAgICAgICAvL+WIneWAvFxyXG4gICAgICAgIGZvciAoaSA9IDA7IDE7IGkrKykge1xyXG4gICAgICAgICAgICBzY2FsZVVuaXQgPSB2QXhpc0luZm9fT3V0Lm1pblNjYWxlICsgdkF4aXNJbmZvX091dC5zY2FsZVVuaXQgKiBpO1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuaYrzDliLvluqbvvIzlpoLmnpzmmK/liJnorrDlvZXkuYtcclxuICAgICAgICAgICAgaWYgKHNjYWxlVW5pdCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuacgOWkp+WIu+W6pu+8jOaYr+WImemAgOWHuuW+queOr1xyXG4gICAgICAgICAgICBpZiAoc2NhbGVVbml0ID49IHZBeGlzSW5mb19PdXQubWF4KSB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm1heFNjYWxlID0gc2NhbGVVbml0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+e7p+e7reiuoeeul+WOn+eCueeahOS9jee9rijljp/ngrnlgLzkuI3kuIDlrprmmK8wKVxyXG4gICAgICAgIC8v5Yik5pat5Y6f54K55pWw57uE57Si5byV5piv5ZCm5Li65Yid5YC8XHJcbiAgICAgICAgLy/lpoLmnpzkuLrliJ3lgLzvvIzor7TmmI7liY3kuIDmraXpqqTlubbmsqHmnInlvpflh7rljp/ngrnnu5PmnpzvvIzliJnnu6fnu63orqHnrpdcclxuICAgICAgICBpZiAodkF4aXNJbmZvX091dC5vcmlnaW5JbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICBpZiAodkF4aXNJbmZvX091dC5taW5TY2FsZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luVmFsdWUgPSB2QXhpc0luZm9fT3V0Lm1pblNjYWxlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZBeGlzSW5mb19PdXQubWF4U2NhbGUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5JbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlID0gdkF4aXNJbmZvX091dC5tYXhTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/orqHnrpfljZXkvY3mlbDlgLzlnKjovbTkuIrljaDnlKjnmoTniannkIblsLrlr7ggLyDnm7jpgrvmoIfnrb7kuYvpl7TnmoTniannkIbot53nprsgLyDljp/ngrlcclxuICAgICAgICBjaGFydFBpeGVsV2lkdGggPSBjYW52YXMud2lkdGggLSBjaGFydEluZm9fSW4uYm9keUxlZnQgLSBjaGFydEluZm9fSW4uYm9keVJpZ2h0O1xyXG4gICAgICAgIGNoYXJ0UGl4ZWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlUb3AgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuXHJcbiAgICAgICAgaWYgKGF4aXNUeXBlID09IENvbnN0YW50cy5YX0FYSVMpIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplID0gY2hhcnRQaXhlbFdpZHRoIC8gKHZBeGlzSW5mb19PdXQubWF4U2NhbGUgLSB2QXhpc0luZm9fT3V0Lm1pblNjYWxlKTtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplID0gdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplICogdkF4aXNJbmZvX091dC5zY2FsZVVuaXQ7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24gPSBjaGFydEluZm9fSW4uYm9keUxlZnQgKyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUgKiB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSA9IGNoYXJ0UGl4ZWxIZWlnaHQgLyAodkF4aXNJbmZvX091dC5tYXhTY2FsZSAtIHZBeGlzSW5mb19PdXQubWluU2NhbGUpO1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUgPSB2QXhpc0luZm9fT3V0LnVuaXRWYWx1ZVNpemUgKiB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdDtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbiA9IGNhbnZhcy5oZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbSAtIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSAqIHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3NldEl0ZW1Qb3NpdGlvbkFuZFR3ZWVuICgpIHtcclxuICAgICAgICBsZXQgY2hhcnRJbmZvX0luID0gdGhpcy5jaGFydEluZm9fSW4sXHJcblxyXG4gICAgICAgICAgICB4QXhpc0luZm9fT3V0ID0gdGhpcy5feEF4aXNJbmZvX091dCxcclxuICAgICAgICAgICAgeUF4aXNJbmZvX091dCA9IHRoaXMuX3lBeGlzSW5mb19PdXQsXHJcblxyXG4gICAgICAgICAgICBpdGVtQXJyID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG5cclxuICAgICAgICAgICAgdHdFbmdpbmUgPSB0aGlzLl90d0VuZ2luZSxcclxuICAgICAgICAgICAgdHdlZW5DYWxsQmFjayA9IHRoaXMuX3R3ZWVuQ2FsbEJhY2ssXHJcbiAgICAgICAgICAgIGZyb20sIHRvLCB0d0RhdGEsIHR3QWN0aW9uLFxyXG4gICAgICAgICAgICB0d0RhdGFBcnIgPSBbXSxcclxuXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMjtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/ns7vliJdcclxuICAgICAgICBsZW4xID0gaXRlbUFyci5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjE7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIgPSBpdGVtQXJyW2ldO1xyXG4gICAgICAgICAgICBsZW4yID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8v5b6q546v6aG555uuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+W5b6X6aG555uu5a+56LGhXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHkgPT0gdHJ1ZSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orr7nva7lnZDmoIdcclxuICAgICAgICAgICAgICAgIGl0ZW0ueCA9IHhBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24gKyB4QXhpc0luZm9fT3V0LnVuaXRWYWx1ZVNpemUgKiAoaXRlbS52YWx1ZVggLSB4QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ueSA9IHlBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24gLSB5QXhpc0luZm9fT3V0LnVuaXRWYWx1ZVNpemUgKiAoaXRlbS52YWx1ZVkgLSB5QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuvue9rue8k+WKqOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgZnJvbSA9IFswXTtcclxuICAgICAgICAgICAgICAgIHRvID0gW2NoYXJ0SW5mb19Jbi5yYWRpdXNdO1xyXG5cclxuICAgICAgICAgICAgICAgIHR3RGF0YSA9IHR3RW5naW5lLmdldFRXRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdHdEYXRhLnNldERhdGEoaXRlbSwgZnJvbSwgdG8sIHR3ZWVuQ2FsbEJhY2spO1xyXG4gICAgICAgICAgICAgICAgdHdEYXRhQXJyLnB1c2godHdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHdBY3Rpb24gPSB0d0VuZ2luZS5nZXRUV0FjdGlvbigpO1xyXG4gICAgICAgIHR3QWN0aW9uLnNldERhdGEodHdEYXRhQXJyLCBUV0FsZ29yaXRobS5Cb3VuY2UuZWFzZU91dCwgNTAwKTtcclxuXHJcbiAgICAgICAgdHdFbmdpbmUuc2V0Rmlyc3RUV0FjdGlvbih0d0FjdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyIChjb21tYW5kKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NhbnZhcyxcclxuXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG5cclxuICAgICAgICAgICAgeEF4aXNJbmZvX091dCA9IHRoaXMuX3hBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIHlBeGlzSW5mb19PdXQgPSB0aGlzLl95QXhpc0luZm9fT3V0LFxyXG5cclxuICAgICAgICAgICAgbGVmdCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCzjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIAvL+WbvuihqOe7mOWItuWMuuWfn+eahOi+ueeVjFxyXG4gICAgICAgICAgICByaWdodCA9IGNhbnZhcy53aWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQsXHJcbiAgICAgICAgICAgIHRvcCA9IGNoYXJ0SW5mb19Jbi5ib2R5VG9wLFxyXG4gICAgICAgICAgICBib3R0b20gPSBjYW52YXMuaGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b20sXHJcblxyXG4gICAgICAgICAgICB0aXAgPSB0aGlzLl90aXBEaXYsXHJcbiAgICAgICAgICAgIHRhYmxlLFxyXG5cclxuICAgICAgICAgICAgcmVjdCwgICAgICAgLy9DYW52YXPljIXlm7Tnm5Lnm7jlhbNcclxuICAgICAgICAgICAgbnVtLFxyXG5cclxuICAgICAgICAgICAgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb01vdXNlTW92ZSAoZSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlum8oOagh+ebuOWvueS6jkNhbnZhc+eahOS9jee9rlxyXG4gICAgICAgICAgICByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBVdGlsaXR5LndpbmRvd1RvQ2FudmFzKHJlY3QubGVmdCxcclxuICAgICAgICAgICAgICAgIHJlY3QudG9wLFxyXG4gICAgICAgICAgICAgICAgcmVjdC53aWR0aCxcclxuICAgICAgICAgICAgICAgIHJlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGUuY2xpZW50WSxcclxuICAgICAgICAgICAgICAgIG1lLl9tb3VzZVBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yik5pat6byg5qCH5piv5ZCm5L2N5LqO5Zu+6KGo5pWw5o2u5pi+56S65Yy65Z+f77yM5aaC5p6c5LiN5piv5YiZ6ZqQ6JePdGlw77yM54S25ZCO6YCA5Ye6XHJcbiAgICAgICAgICAgIGlmIChtZS5fbW91c2VQb3NpdGlvbi54IDwgbGVmdCB8fFxyXG4gICAgICAgICAgICAgICAgbWUuX21vdXNlUG9zaXRpb24ueCA+IHJpZ2h0IHx8XHJcbiAgICAgICAgICAgICAgICBtZS5fbW91c2VQb3NpdGlvbi55IDwgdG9wIHx8XHJcbiAgICAgICAgICAgICAgICBtZS5fbW91c2VQb3NpdGlvbi55ID4gYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAvL+makOiXj1xyXG4gICAgICAgICAgICAgICAgdGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQNTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mmL7npLpcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICAvL+abtOaWsHRpcFxyXG4gICAgICAgICAgICAgICAgdGFibGUgPSB0aXAuY2hpbGROb2Rlc1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBudW0gPSAobWUuX21vdXNlUG9zaXRpb24ueCAtIHhBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24pIC8geEF4aXNJbmZvX091dC51bml0VmFsdWVTaXplO1xyXG4gICAgICAgICAgICAgICAgbnVtICs9IHhBeGlzSW5mb19PdXQub3JpZ2luVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5yb3dzWzBdLmNlbGxzWzFdLmlubmVyVGV4dCA9IG51bS50b0ZpeGVkKHhBeGlzSW5mb19PdXQuZGVjaW1hbERpZ2l0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBudW0gPSAoeUF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbiAtIG1lLl9tb3VzZVBvc2l0aW9uLnkpIC8geUF4aXNJbmZvX091dC51bml0VmFsdWVTaXplO1xyXG4gICAgICAgICAgICAgICAgbnVtICs9IHlBeGlzSW5mb19PdXQub3JpZ2luVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5yb3dzWzFdLmNlbGxzWzFdLmlubmVyVGV4dCA9IG51bS50b0ZpeGVkKHlBeGlzSW5mb19PdXQuZGVjaW1hbERpZ2l0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+enu+WKqHRpcFxyXG4gICAgICAgICAgICAgICAgLy/orr7lrpp0aXDnmoRY5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBudW0gPSB0aXAub2Zmc2V0V2lkdGggKyBTdHlsZXMuVElQX0xPQ0FUSU9OX09GRlNFVDtcclxuICAgICAgICAgICAgICAgIGlmIChtZS5fbW91c2VQb3NpdGlvbi54ICsgbnVtID4gcmVjdC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5zdHlsZS5sZWZ0ID0gKG1lLl9tb3VzZVBvc2l0aW9uLnggLSBudW0pICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLnN0eWxlLmxlZnQgPSAobWUuX21vdXNlUG9zaXRpb24ueCArIFN0eWxlcy5USVBfTE9DQVRJT05fT0ZGU0VUKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orr7lrpp0aXDnmoRZ5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBudW0gPSB0aXAub2Zmc2V0SGVpZ2h0ICsgU3R5bGVzLlRJUF9MT0NBVElPTl9PRkZTRVQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobWUuX21vdXNlUG9zaXRpb24ueSArIG51bSA+IHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLnN0eWxlLnRvcCA9IChtZS5fbW91c2VQb3NpdGlvbi55IC0gbnVtKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5zdHlsZS50b3AgPSAobWUuX21vdXNlUG9zaXRpb24ueSArIFN0eWxlcy5USVBfTE9DQVRJT05fT0ZGU0VUKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQNDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvTW91c2VPdXQgKGUpIHtcclxuICAgICAgICAgICAgLy/pmpDol49cclxuICAgICAgICAgICAgdGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLlNURVA2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/miafooYxcclxuICAgICAgICBpZiAoY29tbWFuZCA9PSBDb25zdGFudHMuQUREICYmIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtZS5fY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRvTW91c2VNb3ZlKTtcclxuICAgICAgICAgICAgbWUuX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGRvTW91c2VPdXQpO1xyXG4gICAgICAgICAgICBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBDb25zdGFudHMuUkVNT1ZFICYmIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG1lLl9jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZG9Nb3VzZU1vdmUpO1xyXG4gICAgICAgICAgICBtZS5fY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZG9Nb3VzZU91dCk7XHJcbiAgICAgICAgICAgIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc3RhcnRQYWludCAoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFpbnQgKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1lLl9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAxOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fcGFpbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5fdHdFbmdpbmUuc3RhcnQoKTsgICAgICAgICAgICAgICAgICAgICAgICAvL+WQr+WKqOe8k+WKqO+8jOS7juS4i+S4gOW4p+W8gOWni+e8k+WKqFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLlNURVAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAyOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+e7mOWItue8k+WKqOaViOaenFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAg5aaC5p6c57yT5Yqo5rKh5pyJ57uT5p2f77yM5bCx57uY5Yi2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICDlj43kuYvvvIzorr7nva7nirbmgIHvvIzlnKjkuIvkuIDlgZzmraLnu5jliLZcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuX3R3RW5naW5lLm5leHRGcmFtZSgpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl90d0VuZ2luZS5zdG9wKCk7ICAgICAgLy/lgZzmraLnvJPliqhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7ICAgICAvL+e8k+WtmOe7mOWbvuihqOmdolxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOS6i+S7tuebkeWQrOWZqFxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLkFERCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuV0FJVElORztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQNDpcclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVA1OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fcGFpbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5XQUlUSU5HO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W+queOr+iwg+eUqOiHquW3se+8jOi/m+ihjOe7mOeUu1xyXG4gICAgICAgICAgICBpZiAobWUuX3N0YXR1cyAhPSBTdGF0dXMuU1RPUCkge1xyXG4gICAgICAgICAgICAgICAgbWUuX2FuaW1hdGlvbkZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZShwYWludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6+572u5Yid5aeL54q25oCB77yM5byA5aeL57uY5Yi2XHJcbiAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMTtcclxuICAgICAgICBwYWludCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICog57yT5Yqo5pWI5p6cXHJcbiAgICAgKi9cclxuICAgIF90d2VlbkNhbGxCYWNrICh0YXJnZXQsIHJlc3VsdEFycmF5KSB7XHJcbiAgICAgICAgdGFyZ2V0LnJhZGl1cyA9IHJlc3VsdEFycmF5WzBdO1xyXG4gICAgfVxyXG5cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFydC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBBeGlzQ2hhcnRJbmZvQmFzZV9JbiBmcm9tICcuLi8uLi8uLi9iYXNlL2luZm8vQXhpc0NoYXJ0SW5mb0Jhc2VfSW4uanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0SW5mb19JbiBleHRlbmRzIEF4aXNDaGFydEluZm9CYXNlX0luIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnJhZGl1cyA9IDU7ICAgICAgICAgLy/mlaPngrnlnIblvaLljYrlvoRcclxuICAgICAgICB0aGlzLnNjaGVtYSA9IFtdOyAgICAgIC8v5pWw5o2u5Y2V5YWD5Luj6KGo55qE5ZCr5LmJ44CC5q+U5aaC77yaIFsn5bm06b6EJywn6Lqr6auYJywn5L2T6YeNJ10gXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvU3R5bGVzLmpzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvVXRpbGl0eS5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy9QYWludGVy5Lit5peg5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2hhcnQ7ICAgICAgICAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eDsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2U7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luOyAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuICAgICAgICB0aGlzLl94QXhpc0luZm9fSW47XHJcbiAgICAgICAgdGhpcy5feEF4aXNJbmZvX091dDsgICAgICAgICAgICAvL+aVsOWAvOi9tOi+k+WFpeOAgei+k+WHuuaVsOaNrlxyXG4gICAgICAgIHRoaXMuX3lBeGlzSW5mb19JbjtcclxuICAgICAgICB0aGlzLl95QXhpc0luZm9fT3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtQXJyYXk7ICAgICAgICAgICAgICAgIC8v5a2Y5YKo5pWj54K555qE5pWw57uEXHJcblxyXG4gICAgICAgIHRoaXMuX3hBeGlzTGFiZWxDb3VudDsgICAgICAgICAgLy/lgLzovbTmlbDlrZfmoIfnrb7kuKrmlbBcclxuICAgICAgICB0aGlzLl95QXhpc0xhYmVsQ291bnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb247XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXRDaGFydCAoY2hhcnQpIHtcclxuICAgICAgICB0aGlzLl9jaGFydCA9IGNoYXJ0O1xyXG5cclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjaGFydC5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGFydEluZm9fSW4gPSBjaGFydC5jaGFydEluZm9fSW47XHJcbiAgICAgICAgdGhpcy5feEF4aXNJbmZvX0luID0gY2hhcnQueEF4aXNJbmZvX0luO1xyXG4gICAgICAgIHRoaXMuX3hBeGlzSW5mb19PdXQgPSBjaGFydC5feEF4aXNJbmZvX091dDtcclxuICAgICAgICB0aGlzLl95QXhpc0luZm9fSW4gPSBjaGFydC55QXhpc0luZm9fSW47XHJcbiAgICAgICAgdGhpcy5feUF4aXNJbmZvX091dCA9IGNoYXJ0Ll95QXhpc0luZm9fT3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtQXJyYXkgPSBjaGFydC5faXRlbUFycmF5O1xyXG5cclxuICAgICAgICB0aGlzLl9tb3VzZVBvc2l0aW9uID0gY2hhcnQuX21vdXNlUG9zaXRpb247XHJcblxyXG4gICAgICAgIC8v6K6h566X5L6b5q2k5ZCO5L2/55SoXHJcbiAgICAgICAgLy/lgLzovbTmoIfnrb7kuKrmlbBcclxuICAgICAgICB0aGlzLl94QXhpc0xhYmVsQ291bnQgPSBNYXRoLmZsb29yKCh0aGlzLl94QXhpc0luZm9fT3V0Lm1heFNjYWxlIC0gdGhpcy5feEF4aXNJbmZvX091dC5taW5TY2FsZSkgLyB0aGlzLl94QXhpc0luZm9fT3V0LnNjYWxlVW5pdCkgKyAxO1xyXG4gICAgICAgIHRoaXMuX3lBeGlzTGFiZWxDb3VudCA9IE1hdGguZmxvb3IoKHRoaXMuX3lBeGlzSW5mb19PdXQubWF4U2NhbGUgLSB0aGlzLl95QXhpc0luZm9fT3V0Lm1pblNjYWxlKSAvIHRoaXMuX3lBeGlzSW5mb19PdXQuc2NhbGVVbml0KSArIDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhaW50ICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jaGFydC5fc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAxOiAgICAgICAgIC8v57uY5Yi25Zu+6KGo5bm257yT5a2YQ2FudmFz57uY5Zu+6KGo6Z2iXHJcblxyXG4gICAgICAgICAgICAgICAgLy/muIXnqbrnlLvluINcclxuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lnKhfY3R45LiK57uY5Yi25Zu+6KGo5Zu65a6a55qE5YaF5a65XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFRpdGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExlZ2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludEF4aXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGFiZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50QXhpc05hbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e8k+WtmOatpOaXtueahF9jdHjnu5jlm77ooajpnaLvvIjlhajlsLrlr7jvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2UgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMjogICAgICAgICAvL+e7mOWItue8k+WKqOaViOaenFxyXG5cclxuICAgICAgICAgICAgICAgIC8v5oGi5aSNdGhpcy5fY3R455qE57uY5Zu+6KGo6Z2iXHJcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuX2NhbnZhc1N1cmZhY2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi25pWj54K5XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFNjYXR0ZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMzpcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e8k+WtmOatpOaXtueahF9jdHjnu5jlm77ooajpnaLvvIjlhajlsLrlr7jvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2UgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDQ6ICAgICAgICAgLy/nu5jliLbpvKDmoIfljYHlrZfnur9cclxuXHJcbiAgICAgICAgICAgICAgICAvL+aBouWkjV9jdHjnmoTnu5jlm77ooajpnaJcclxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5fY2FudmFzU3VyZmFjZSwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nu5jliLbpvKDmoIfljYHlrZfnur9cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50Q3Jvc3MoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVA1OiAgICAgICAgIC8v5Yig6Zmk6byg5qCH5Y2B5a2X57q/XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLl9jYW52YXNTdXJmYWNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfcGFpbnRUaXRsZSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5USVRMRV9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9MRUZUO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfVE9QO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChjaGFydEluZm9fSW4udGl0bGUsIGNoYXJ0SW5mb19Jbi50aXRsZUxlZnQsIGNoYXJ0SW5mb19Jbi50aXRsZVRvcCk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50TGVnZW5kICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIHNlcmllcyA9IGNoYXJ0SW5mb19Jbi5zZXJpZXMsXHJcbiAgICAgICAgICAgIGNvbG9ycyA9IGNoYXJ0SW5mb19Jbi5jb2xvcnMsXHJcbiAgICAgICAgICAgIHcsIGgsXHJcbiAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgIGksIGxlbixcclxuICAgICAgICAgICAgc3RyO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruaWh+Wtl+agt+W8j1xyXG4gICAgICAgIGN0eC5mb250ID0gU3R5bGVzLkxFR0VORF9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9MRUZUO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfVE9QO1xyXG5cclxuICAgICAgICAvL+iOt+WPluaWh+Wtl+mrmOW6plxyXG4gICAgICAgIGggPSBVdGlsaXR5LmdldFRleHRIZWlnaHQoY3R4KTtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmnIDlkI7kuIDkuKrlm77kvovmloflrZfnmoTnu5PmnZ/ngrlcclxuICAgICAgICB4ID0gdGhpcy5fY2FudmFzLndpZHRoIC0gY2hhcnRJbmZvX0luLmxlZ2VuZFJpZ2h0O1xyXG5cclxuICAgICAgICAvL+mAhuW6j+S+neasoee7mOWItuWbvuS+i+aWh+Wtl+WSjOiJsuWdl1xyXG4gICAgICAgIGxlbiA9IHNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgLy/lm77kvovmlbDmja5cclxuICAgICAgICAgICAgc3RyID0gc2VyaWVzW2ldLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAvL+agueaNruWbvuS+i+aWh+Wtl+WuveW6puiuoeeul+aWh+Wtl+i1t+Wni+S9jee9rlxyXG4gICAgICAgICAgICB3ID0gY3R4Lm1lYXN1cmVUZXh0KHN0cikud2lkdGg7XHJcbiAgICAgICAgICAgIHggLT0gdztcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi25paH5a2XXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBTdHlsZXMuRk9OVF9GSUxMX0NPTE9SO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCB4LCBjaGFydEluZm9fSW4ubGVnZW5kVG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8v6K6h566X6Imy5Z2X5L2N572uXHJcbiAgICAgICAgICAgIHggLT0gU3R5bGVzLkxFR0VORF9TSEFQRV9URVhUX0dBUCArIGg7XHJcblxyXG4gICAgICAgICAgICAvL+e7mOWItuiJsuWdl1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoeCwgY2hhcnRJbmZvX0luLmxlZ2VuZFRvcCwgaCwgaCk7XHJcblxyXG4gICAgICAgICAgICAvL+mXtOmalFxyXG4gICAgICAgICAgICB4IC09IFN0eWxlcy5MRUdFTkRfR0FQO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRHcmlkICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIHhTY2FsZVVuaXRTaXplID0gdGhpcy5feEF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplLFxyXG4gICAgICAgICAgICB5U2NhbGVVbml0U2l6ZSA9IHRoaXMuX3lBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSxcclxuICAgICAgICAgICAgeEF4aXNMYWJlbENvdW50ID0gdGhpcy5feEF4aXNMYWJlbENvdW50LFxyXG4gICAgICAgICAgICB5QXhpc0xhYmVsQ291bnQgPSB0aGlzLl95QXhpc0xhYmVsQ291bnQsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB4MSwgeDIsIHkxLCB5MixcclxuICAgICAgICAgICAgbnVtLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruagt+W8j1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBTdHlsZXMuR1JJRF9MSU5FX1dJRFRIO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFN0eWxlcy5HUklEX0xJTkVfQ09MT1I7XHJcbiAgICAgICAgY3R4LnNldExpbmVEYXNoKFN0eWxlcy5HUklEX0xJTkVfREFTSCk7XHJcblxyXG4gICAgICAgIC8v57uY5Yi25qiq5ZCR6Jma57q/XHJcbiAgICAgICAgeDEgPSBjaGFydEluZm9fSW4uYm9keUxlZnQ7XHJcbiAgICAgICAgeDIgPSBjYW52YXNXaWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQ7XHJcbiAgICAgICAgbnVtID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b207XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB5QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB5MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24obnVtIC0geVNjYWxlVW5pdFNpemUgKiBpKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHgyLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v57uY5Yi257q15ZCR6Jma57q/XHJcbiAgICAgICAgeTEgPSBjaGFydEluZm9fSW4uYm9keVRvcDtcclxuICAgICAgICB5MiA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tO1xyXG4gICAgICAgIG51bSA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdDtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHhBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHgxID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbihudW0gKyB4U2NhbGVVbml0U2l6ZSAqIGkpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRBeGlzICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcblxyXG4gICAgICAgICAgICB4U2NhbGVVbml0U2l6ZSA9IHRoaXMuX3hBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSxcclxuICAgICAgICAgICAgeVNjYWxlVW5pdFNpemUgPSB0aGlzLl95QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUsXHJcblxyXG4gICAgICAgICAgICB4T3JpZ2luUG9zaXRpb24gPSB0aGlzLl94QXhpc0luZm9fT3V0Lm9yaWdpblBvc2l0aW9uLFxyXG4gICAgICAgICAgICB5T3JpZ2luUG9zaXRpb24gPSB0aGlzLl95QXhpc0luZm9fT3V0Lm9yaWdpblBvc2l0aW9uLFxyXG5cclxuICAgICAgICAgICAgeEF4aXNMYWJlbENvdW50ID0gdGhpcy5feEF4aXNMYWJlbENvdW50LFxyXG4gICAgICAgICAgICB5QXhpc0xhYmVsQ291bnQgPSB0aGlzLl95QXhpc0xhYmVsQ291bnQsXHJcblxyXG4gICAgICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgeDEsIHgyLCB5MSwgeTIsXHJcbiAgICAgICAgICAgIG9mZnNldFgsIG9mZnNldFksXHJcbiAgICAgICAgICAgIGFuZ2xlLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvLygxKeiuvue9ruagt+W8j1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBTdHlsZXMuQVhJU19MSU5FX1dJRFRIO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFN0eWxlcy5BWElTX0xJTkVfQ09MT1I7XHJcblxyXG4gICAgICAgIC8vKDIp57uY5Yi25qiq6L20XHJcbiAgICAgICAgeDEgPSBjaGFydEluZm9fSW4uYm9keUxlZnQgLSBTdHlsZXMuQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRTsgICAgICAgICAgICAgICAgICAgIC8v5qiq5ZCR6LW354K5XHJcbiAgICAgICAgeDIgPSBjYW52YXNXaWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQgKyBTdHlsZXMuQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRTsgICAgLy/mqKrlkJHnu4jngrlcclxuICAgICAgICB5MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24oeU9yaWdpblBvc2l0aW9uKTsgICAgICAgICAgICAgICAgICAgLy/nurXlkJHkvY3nva5cclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICBjdHgubGluZVRvKHgyLCB5MSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLygzKee7mOWItuaoqui9tOWIu+W6plxyXG4gICAgICAgIHkyID0geTEgKyBTdHlsZXMuQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRTtcclxuICAgICAgICBvZmZzZXRYID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0O1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeEF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgeDEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG9mZnNldFggKyB4U2NhbGVVbml0U2l6ZSAqIGkpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8oNCnnu5jliLbnurXovbRcclxuICAgICAgICB5MSA9IGNoYXJ0SW5mb19Jbi5ib2R5VG9wIC0gU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7ICAgICAgICAgICAgICAgICAgICAgIC8v57q15ZCR6LW354K5XHJcbiAgICAgICAgeTIgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbSArIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOyAgIC8v57q15ZCR57uI54K5XHJcbiAgICAgICAgeDEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKHhPcmlnaW5Qb3NpdGlvbik7ICAgICAgICAgICAgICAgICAgICAvL+aoquWQkeS9jee9rlxyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vKDUp57uY5Yi257q16L205Yi75bqmXHJcbiAgICAgICAgeDIgPSB4MSAtIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFO1xyXG4gICAgICAgIG9mZnNldFkgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHlBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHkxID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbihvZmZzZXRZIC0geVNjYWxlVW5pdFNpemUgKiBpKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHgyLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50TGFiZWwgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuXHJcbiAgICAgICAgICAgIHhMYWJlbFJvdGF0ZSA9IHRoaXMuX3hBeGlzSW5mb19Jbi5sYWJlbFJvdGF0ZSxcclxuICAgICAgICAgICAgeUxhYmVsUm90YXRlID0gdGhpcy5feUF4aXNJbmZvX0luLmxhYmVsUm90YXRlLFxyXG5cclxuICAgICAgICAgICAgeE1pblNjYWxlID0gdGhpcy5feEF4aXNJbmZvX091dC5taW5TY2FsZSxcclxuICAgICAgICAgICAgeU1pblNjYWxlID0gdGhpcy5feUF4aXNJbmZvX091dC5taW5TY2FsZSxcclxuXHJcbiAgICAgICAgICAgIHhTY2FsZVVuaXQgPSB0aGlzLl94QXhpc0luZm9fT3V0LnNjYWxlVW5pdCxcclxuICAgICAgICAgICAgeVNjYWxlVW5pdCA9IHRoaXMuX3lBeGlzSW5mb19PdXQuc2NhbGVVbml0LFxyXG5cclxuICAgICAgICAgICAgeFNjYWxlVW5pdFNpemUgPSB0aGlzLl94QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUsXHJcbiAgICAgICAgICAgIHlTY2FsZVVuaXRTaXplID0gdGhpcy5feUF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplLFxyXG5cclxuICAgICAgICAgICAgeERlY2ltYWxEaWdpdCA9IHRoaXMuX3hBeGlzSW5mb19PdXQuZGVjaW1hbERpZ2l0LFxyXG4gICAgICAgICAgICB5RGVjaW1hbERpZ2l0ID0gdGhpcy5feUF4aXNJbmZvX091dC5kZWNpbWFsRGlnaXQsXHJcblxyXG4gICAgICAgICAgICB4QXhpc0xhYmVsQ291bnQgPSB0aGlzLl94QXhpc0xhYmVsQ291bnQsXHJcbiAgICAgICAgICAgIHlBeGlzTGFiZWxDb3VudCA9IHRoaXMuX3lBeGlzTGFiZWxDb3VudCxcclxuXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHgsIHksXHJcbiAgICAgICAgICAgIG9mZnNldFgsIG9mZnNldFksXHJcbiAgICAgICAgICAgIG51bSwgc3RyLFxyXG4gICAgICAgICAgICBhbmdsZSxcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy8oMSnorr7nva7mlofmnKzmoLflvI9cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5MQUJFTF9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfTUlERExFO1xyXG5cclxuICAgICAgICAvL+agueaNruaoqui9tOagh+etvueahOaXi+i9rOinkuW6pui/m+ihjOe7mOWItiAgICAgICAgXHJcbiAgICAgICAgb2Zmc2V0WCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdDtcclxuICAgICAgICBhbmdsZSA9IHhMYWJlbFJvdGF0ZSAlIDM2MDtcclxuXHJcbiAgICAgICAgaWYgKGFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgLy/orr7nva7mlofmnKzmqKrlkJHlr7npvZDmlrnlvI9cclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0NFTlRFUjtcclxuXHJcbiAgICAgICAgICAgIC8v6K6h566X5paH5pys57q15ZCR5L2N572uXHJcbiAgICAgICAgICAgIHkgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbSArIFN0eWxlcy5YQVhJU19MQUJFTF9PRkZTRVQ7XHJcblxyXG4gICAgICAgICAgICAvL+e7mOWItuaWh+acrFxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeEF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8v6K6h566X5paH5pys5qiq5ZCR5L2N572uXHJcbiAgICAgICAgICAgICAgICB4ID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbihvZmZzZXRYICsgeFNjYWxlVW5pdFNpemUgKiBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuoeeul+agh+etvuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgbnVtID0geE1pblNjYWxlICsgeFNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh4RGVjaW1hbERpZ2l0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7mOWItuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgeCwgeSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/ovazmjaLkuLrlvKfluqZcclxuICAgICAgICAgICAgYW5nbGUgPSAtYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG5cclxuICAgICAgICAgICAgLy/orr7nva7mlofmnKzmqKrlkJHlr7npvZDmlrnlvI9cclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX1JJR0hUO1xyXG5cclxuICAgICAgICAgICAgLy/orqHnrpfmlofmnKznurXlkJHkvY3nva5cclxuICAgICAgICAgICAgeSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tICsgU3R5bGVzLlhBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbmlofmnKxcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHhBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6h566X5paH5pys5qiq5ZCR5L2N572uXHJcbiAgICAgICAgICAgICAgICB4MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24ob2Zmc2V0WCArIHhTY2FsZVVuaXRTaXplICogaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lnZDmoIflubPnp7vlubbml4vovaxcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuoeeul+agh+etvuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgbnVtID0geE1pblNjYWxlICsgeFNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh4RGVjaW1hbERpZ2l0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7mOWItuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDMtMinorr7nva7mlofmnKzmqKrlkJHlr7npvZDmlrnlvI9cclxuICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fUklHSFQ7XHJcblxyXG4gICAgICAgIC8vKDMtMynmoLnmja7nurXovbTmoIfnrb7nmoTml4vovazop5Lluqbov5vooYznu5jliLYgICAgICAgIFxyXG4gICAgICAgIHggPSBjaGFydEluZm9fSW4uYm9keUxlZnQgLSBTdHlsZXMuWUFYSVNfTEFCRUxfT0ZGU0VUO1xyXG4gICAgICAgIG9mZnNldFkgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuICAgICAgICBhbmdsZSA9IHlMYWJlbFJvdGF0ZSAlIDM2MDtcclxuXHJcbiAgICAgICAgaWYgKGFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHlBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvL+iuoeeul+aWh+acrOe6teWQkeS9jee9rlxyXG4gICAgICAgICAgICAgICAgeSA9IG9mZnNldFkgLSB5U2NhbGVVbml0U2l6ZSAqIGk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orqHnrpfmoIfnrb7mloflrZdcclxuICAgICAgICAgICAgICAgIG51bSA9IHlNaW5TY2FsZSArIHlTY2FsZVVuaXQgKiBpO1xyXG4gICAgICAgICAgICAgICAgc3RyID0gbnVtLnRvRml4ZWQoeURlY2ltYWxEaWdpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nu5jliLbmloflrZdcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzdHIsIHgsIHkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6L2s5o2i5Li65byn5bqmXHJcbiAgICAgICAgICAgIGFuZ2xlID0gLWFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB5QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuoeeul+aWh+acrOe6teWQkeS9jee9rlxyXG4gICAgICAgICAgICAgICAgeSA9IG9mZnNldFkgLSB5U2NhbGVVbml0U2l6ZSAqIGk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lnZDmoIflubPnp7vlubbml4vovaxcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuoeeul+agh+etvuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgbnVtID0geU1pblNjYWxlICsgeVNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh5RGVjaW1hbERpZ2l0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7mOWItuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50QXhpc05hbWUgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHgsIHk7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5paH5a2X5qC35byPXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuQVhJU19OQU1FX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0NFTlRFUjtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuXHJcbiAgICAgICAgLy/nu5jliLZ56L205Y2V5L2N5paH5a2XXHJcbiAgICAgICAgeCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdDtcclxuICAgICAgICB5ID0gY2hhcnRJbmZvX0luLnlBeGlzTmFtZVRvcDtcclxuICAgICAgICBjdHguZmlsbFRleHQoY2hhcnRJbmZvX0luLnlBeGlzTmFtZSwgeCwgeSk7XHJcblxyXG4gICAgICAgIC8v57uY5Yi2WOi9tOWNleS9jeaWh+Wtl1xyXG4gICAgICAgIHggPSBjYW52YXNXaWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQ7XHJcbiAgICAgICAgeSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi54QXhpc05hbWVCb3R0b207XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGNoYXJ0SW5mb19Jbi54QXhpc05hbWUsIHgsIHkpO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludFNjYXR0ZXJzICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGNvbG9ycyA9IHRoaXMuX2NoYXJ0SW5mb19Jbi5jb2xvcnMsXHJcbiAgICAgICAgICAgIGksIGosIGxlbjEsIGxlbjIsXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgaXRlbTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7lhbHlkIzmoLflvI9cclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBTdHlsZXMuU0NBVFRFUl9QT0lOVF9BTFBIQTtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/ns7vliJdcclxuICAgICAgICBsZW4xID0gaXRlbUFycmF5Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XHJcblxyXG4gICAgICAgICAgICBhcnIgPSBpdGVtQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGxlbjIgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlGbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoaXRlbS54LCBpdGVtLnksIGl0ZW0ucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50Q3Jvc3MgKCkge1xyXG5cclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBtb3VzZVBvc2l0aW9uID0gdGhpcy5fbW91c2VQb3NpdGlvbixcclxuICAgICAgICAgICAgeDEsIHgyLCB5MSwgeTI7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5qC35byPXHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IFN0eWxlcy5TQ0FUVEVSX0NST1NTX0xJTkVfV0lEVEg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gU3R5bGVzLlNDQVRURVJfQ1JPU1NfQ09MT1I7XHJcblxyXG4gICAgICAgIC8v57uY5Yi25qiq5ZCRXHJcbiAgICAgICAgeDEgPSBjaGFydEluZm9fSW4uYm9keUxlZnQ7XHJcbiAgICAgICAgeDIgPSBjYW52YXNXaWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQ7XHJcbiAgICAgICAgeTEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy/nu5jliLbnurXlkJHomZrnur9cclxuICAgICAgICB5MSA9IGNoYXJ0SW5mb19Jbi5ib2R5VG9wO1xyXG4gICAgICAgIHkyID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b207XHJcbiAgICAgICAgeDEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG1vdXNlUG9zaXRpb24ueCk7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gIOWIqeeUqOmXreWMheWSjOeri+WNs+aJp+ihjOWHveaVsOWIm+W7uuWNleS+i1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuUGFpbnRlci5nZXRJbnN0YW5jZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5zdGFuY2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IFBhaW50ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxufSkoKTsiLCJpbXBvcnQgUGFydEJhc2UgZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC9DaGFydEJhc2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlclBvaW50IGV4dGVuZHMgUGFydEJhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnNlcmllc0luZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMudmFsdWVYO1xyXG4gICAgICAgIHRoaXMudmFsdWVZO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaXNQb2ludEluU2NhdHRlciAoeCwgeSkge1xyXG4gICAgICAgIGlmIChNYXRoLnNxcnQoKHggLSB0aGlzLngpICogKHggLSB0aGlzLngpICsgKHkgLSB0aGlzLnkpICogKHkgLSB0aGlzLnkpKSA8IHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog5a6a5LmJd2luZG935Yqo55S75b6q546v5o6n5Yi25Ye95pWw77yI5Yip55So56uL5Y2z5omn6KGM5Ye95pWw77yJXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbndpbmRvdy5yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuYywgMTYpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxufSkoKTtcclxuIiwiY29uc3QgQ29uc3RhbnRzID0ge1xyXG4gICAgRElSVFk6ICctJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5a6a5LmJ5pWw5o2u5pe277yM55So5p2l6KGo56S65rKh5pyJ5pWw5o2u77yM5oiW6ISP5pWw5o2u77yI5peg5pWI5pWw5o2u77yJXHJcbiAgICBIQUxGX1BJWEVMOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/ljYrkuKrlg4/ntKBcclxuXHJcbiAgICBDTE9TRV9UT19aRVJPOiAwLjAwMDAwMDEsICAgICAgICAgICAgICAgLy/mta7ngrnmlbDorqHnrpfkvJrmnInnsr7luqbor6/lt67vvIzor6XluLjph4/nlKjkuo7liKTmlq3kuKTkuKrmta7ngrnmlbDmmK/lkKbnm7jnrYnjgILlpoLmnpzkuKTkuKrmta7ngrnmlbDnmoTlt67lgLzlsI/kuo7or6XmlbDvvIzliJnorqTkuLrnm7jnrYnjgIJcclxuXHJcbiAgICBURVhUX0JBU0VfTElORV9NSURETEU6ICdtaWRkbGUnLCAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X57q15ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0JBU0VfTElORV9UT1A6ICd0b3AnLFxyXG4gICAgVEVYVF9CQVNFX0xJTkVfQk9UVE9NOiAnYm90dG9tJyxcclxuXHJcbiAgICBURVhUX0FMSUdOX0NFTlRFUjogJ2NlbnRlcicsICAgICAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5qiq5ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0FMSUdOX0xFRlQ6ICdsZWZ0JyxcclxuICAgIFRFWFRfQUxJR05fUklHSFQ6ICdyaWdodCcsXHJcblxyXG4gICAgVEVYVF9CQVNFX0xJTkVfSURFT0dSQVBISUM6ICdpZGVvZ3JhcGhpYycsICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5Z+657q/5bGe5oCnXHJcblxyXG4gICAgQUREOiAnYWRkJyxcclxuICAgIFJFTU9WRTogJ3JlbW92ZScsXHJcblxyXG4gICAgWF9BWElTOiAneC1heGlzJywgICAgICAgICAgICAgICAvL+S7o+ihqOaYr3jovbTov5jmmK956L20XHJcbiAgICBZX0FYSVM6ICd5LWF4aXMnLFxyXG5cclxuICAgIFJBRElBTl9VTklUOiBNYXRoLlBJIC8gMTgwICAgICAgLy/lvKfluqbljZXkvY1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50cztcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UG9vbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xhenosIHBhcmEpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2xhc3MgPSBjbGF6ejsgICAvL+exu+WQjVxyXG4gICAgICAgIHRoaXMuX3BhcmEgPSBwYXJhOyAgICAgIC8v5a6e5L6L5YyW5a+56LGh5pe255qE5Y+C5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwOyAgICAgICAgLy/lr7nosaHmsaDkuK3lr7nosaHnmoTkuKrmlbBcclxuICAgICAgICB0aGlzLl9wb29sID0gW107ICAgICAgICAvL+WvueixoeaxoFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGdldE9iaiAoKSB7XHJcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sLFxyXG4gICAgICAgICAgICBsZW4sXHJcbiAgICAgICAgICAgIG9iajtcclxuXHJcbiAgICAgICAgLy/lpoLmnpzlvZPliY3lt7Lkvb/nlKjnmoTlr7nosaHkuKrmlbDlpKfkuo7miJbnrYnkuo7msaDkuK3lt7LmnInlr7nosaHkuKrmlbDvvIxcclxuICAgICAgICAvL+WImeaWsOeUn+aIkOS4gOS4quWvueixoe+8m+WQpuWImeS7juaxoOS4reebtOaOpeWPluW+l+WvueixoVxyXG4gICAgICAgIGlmICh0aGlzLl9jb3VudCA+PSBwb29sLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvYmogPSBuZXcgdGhpcy5fY2xhc3ModGhpcy5fcGFyYSk7XHJcblxyXG4gICAgICAgICAgICBsZW4gPSBwb29sLmxlbmd0aDtcclxuICAgICAgICAgICAgcG9vbFtsZW5dID0gb2JqO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSBwb29sW3RoaXMuX2NvdW50XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6w5b2V5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQrKztcclxuXHJcbiAgICAgICAgLy/ov5Tlm57lr7nosaFcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWw5riF6Zu2XHJcbiAgICAqIOi/meagt++8jOW9k+WHveaVsGdldE9iaigp6KKr6LCD55So55qE5pe25YCZ77yM5rGg5Lit5omA5pyJ5a+56LGh6YO95Y+v5L2/55SoXHJcbiAgICAqL1xyXG4gICAgcmVsZWFzZUFsbCAoKSB7XHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufSIsImNvbnN0IFN0YXR1cyA9IHtcclxuICAgIFxyXG4gICAgU1RFUDE6ICdzdGVwMScsXHJcbiAgICBTVEVQMjogJ3N0ZXAyJyxcclxuICAgIFNURVAzOiAnc3RlcDMnLFxyXG4gICAgU1RFUDQ6ICdzdGVwNCcsXHJcbiAgICBTVEVQNTogJ3N0ZXA1JyxcclxuICAgIFdBSVRJTkc6ICd3YWl0aW5nJyxcclxuICAgIFNUT1A6ICdzdG9wJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzOyIsImNvbnN0IFN0eWxlcyA9IHtcclxuICAgIFxyXG4gICAgLy/lhbHlkIzpg6jliIZcclxuICAgIFRJVExFX0ZPTlQ6ICcxNnB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH6aKY5a2X5L2TICAgICAgICBcclxuICAgIExFR0VORF9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgIC8v5Zu+5L6L5a2X5L2TICBcclxuICAgIExBQkVMX0ZPTlQ6ICcxMHB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH562+5a2X5L2TICBcclxuICAgIEFYSVNfTkFNRV9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgIC8v6L205ZCN56ew5a2X5L2TICBcclxuICAgIEZPTlRfRklMTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgICAgICAgIC8v6buY6K6k5a2X5L2T5aGr5YWF6aKc6ImyXHJcbiAgICBBWElTX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+i9tOe6v+eahOe6v+WuvVxyXG4gICAgQVhJU19MSU5FX0NPTE9SOiAnIzMzMzMzMycsICAgICAgICAgICAgICAgICAgLy/ovbTnur/popzoibJcclxuICAgIEFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU6IDUsICAgICAgICAgICAgICAgIC8v5Yi75bqm57q/55qE6ZW/5bqmXHJcbiAgICBHUklEX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+eahOe6v+WuvVxyXG4gICAgR1JJRF9MSU5FX0NPTE9SOiAnI0JCQ0NERCcsICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/popzoibJcclxuICAgIEdSSURfTElORV9EQVNIOiBbNSwgNV0sICAgICAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/54K555qE6Ze06ZqUXHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3jovbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3jovbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3novbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3novbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBMRUdFTkRfU0hBUEVfVEVYVF9HQVA6IDUsICAgICAgICAgICAgICAgICAgICAvL+WbvuS+i+S4re+8jOiJsuWdl+WSjOaWh+Wtl+eahOmXtOmalFxyXG4gICAgTEVHRU5EX0dBUDogMTUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77kvovmqKrlkJHmjpLliJfml7bvvIzlm77kvovkuYvpl7TnmoTpl7TpmpRcclxuICAgIFRJUF9MT0NBVElPTl9PRkZTRVQ6IDIwLCAgICAgICAgICAgICAgICAgICAgIC8v5a6a5L2NVGlw5L2N572u5pe277yM55u45a+56byg5qCH5L2N572u55qE5YGP56e76YePXHJcblxyXG5cclxuICAgIC8v5rCU5rOh5Zu+XHJcbiAgICBCVUJCTEVfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAgICAgICAgLy/msJTms6HnmoTpgI/mmI7luqZcclxuXHJcblxyXG4gICAgLy/mn7Hnirblm75cclxuICAgIENPTFVNTl9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAvL+eUqOS6juahhumAiemhueebrueahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgQ09MVU1OX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgIC8v55So5LqO5qGG6YCJ6aG555uu55qE5pa55qGG55qE6L655qGG57q/6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5oqY57q/5Zu+XHJcbiAgICBMSU5FX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgICAgICAgLy/mipjnur/nmoTnur/lrr1cclxuICAgIExJTkVfQVJFQV9BTFBIQTogMC43LCAgICAgICAgICAgICAgICAgICAgICAvL+e7mOWItumdouenr+WbvuaXtueahOmAj+aYjuW6plxyXG4gICAgTElORV9NQVJLUE9JTlRfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K555qE57q/5a69XHJcbiAgICBMSU5FX01BUktQT0lOVF9SQURJVVM6IDIsICAgICAgICAgICAgICAgICAgLy/moIforrDngrnnmoTlnIbljYrlvoRcclxuICAgIExJTkVfTUFSS1BPSU5UX0JBS19DT0xPUjogJyNGM0YzRjMnLCAgICAgICAvL+agh+iusOeCueeahOiDjOaZr+minOiJslxyXG4gICAgTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH5b+X6YCJ5oup6aG555qE57q/5q6155qE57q/5a69XHJcbiAgICBMSU5FX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgICAgLy/nlKjkuo7moIflv5fpgInmi6npobnnmoTnur/mrrXnmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ppbzlm75cclxuICAgIFBJRV9MQUJFTF9JTk5FUl9GT05UX0NPTE9SOiAnI0ZGRkZGRicsICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWGheaYvuekuuaXtu+8jOaWh+Wtl+eahOminOiJslxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkU6IDIwLCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MeeahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUyX1NJWkU6IDE1LCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MueahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX09GRlNFVDogNSwgICAgICAgICAgICAgICAgICAgICAgIC8v5byV5a+857q/5ZKM5qCH562+5paH5a2X55qE6Ze06LedXHJcbiAgICBQSUVfU0VMRUNUT1JfVFJBTlNMQVRFOiAxMCwgICAgICAgICAgICAgICAgLy/ooqvpgInmi6nnmoTppbzlnZfnmoTkvY3np7vph49cclxuICAgIFBJRV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAvL+ahhumAieaVsOaNrumhueeahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgUElFX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjRkYwMDAwJywgICAgICAgIC8v5qGG6YCJ5pWw5o2u6aG555qE5pa55qGG55qE6L655qGG6aKc6ImyXHJcblxyXG5cclxuICAgIC8v6Zu36L6+5Zu+XHJcbiAgICBSQURBUl9MQUJFTF9GT05UOiAnMTJweCBNaWNyb3NvZnQgWWFIZWknLCAgLy/mjIfmoIfmloflrZfnmoTlrZfkvZNcclxuICAgIFJBREFSX0xBQkVMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgICAvL+aMh+agh+aWh+Wtl+eahOminOiJslxyXG4gICAgUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUOiAxMCwgICAgICAgICAgIC8v5oyH5qCH5paH5a2X5ZKM5a+55bqU5aSa6L655b2i6aG254K55LmL6Ze055qE6Ze06LedXHJcbiAgICBSQURBUl9MSU5FX1dJRFRIOiAzLjAsICAgICAgICAgICAgICAgICAgICAgLy/mlbDmja7pm7fovr7nur/nmoTnur/lrr1cclxuICAgIFJBREFSX0JBS19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9ouahhue6v+WSjOWNiuW+hOWIhuWJsue6v+eahOe6v+WuvVxyXG4gICAgUkFEQVJfQkFLX0xJTkVfQ09MT1I6ICcjQzlDOUM5JywgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i5qGG57q/5ZKM5Y2K5b6E5YiG5Ymy57q/55qE6aKc6ImyXHJcbiAgICBSQURBUl9CQUtfRklMTF9DT0xPUjogJyNFNkU2RTYnLCAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLnmoTog4zmma/popzoibJcclxuXHJcblxyXG4gICAgLy/mlaPngrnlm75cclxuICAgIFNDQVRURVJfUE9JTlRfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAvL+aVo+eCueeahOmAj+aYjuW6plxyXG4gICAgU0NBVFRFUl9DUk9TU19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH6K+G6byg5qCH5L2N572u55qE5Y2B5a2X57q/55qE57q/5a69XHJcbiAgICBTQ0FUVEVSX0NST1NTX0NPTE9SOiAnI0ZGMDAwMCcsICAgICAgICAgICAgLy/nlKjkuo7moIfor4bpvKDmoIfkvY3nva7nmoTljYHlrZfnur/nmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ml63ml6Xlm75cclxuICAgIFNVTkJVUlNfTEFCRUxfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAvL+agh+etvuaWh+Wtl+eahOminOiJslxyXG4gICAgU1VOQlVSU19CT1JERVJfQ09MT1I6ICcjMDAwMDAwJyAgICAgICAgICAgIC8v5omH5b2i5Z2X55qE6L655qGG6aKc6ImyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZXM7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog6Z2Z5oCB5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8qXHJcbiAgICAqIOiuoeeul+OAkOWAvOi9tOOAkeeahOWIu+W6puWNleS9jVxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRTY2FsZVVuaXQgKG1pbiwgbWF4LCBzY2FsZU1heENvdW50KSB7XHJcbiAgICAgICAgbGV0IGksIGxlbixcclxuICAgICAgICAgICAgYXZnLFxyXG4gICAgICAgICAgICBnYXBzID0gWzEsIDIsIDIuNSwgNSwgMTBdLFxyXG4gICAgICAgICAgICBzY2FsZVVuaXQsXHJcbiAgICAgICAgICAgIG1hZ25pdHVkZTtcclxuXHJcbiAgICAgICAgLy/orqHnrpflnYfliIblgLxcclxuICAgICAgICBhdmcgPSAobWF4IC0gbWluKSAvIChzY2FsZU1heENvdW50LTEpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+Wdh+WIhuWAvOeahOaVsOmHj+e6p1xyXG4gICAgICAgIG1hZ25pdHVkZSA9IHRoaXMuZ2V0TWFnbml0dWRlKGF2Zyk7XHJcblxyXG4gICAgICAgIC8v5b6q546v77yM55u06Iez56ys5LiA5Liq5aSn5LqO5oiW562J5LqO5Z2H5YiG5YC855qE5pW05pWw5YC85Ye6546wXHJcbiAgICAgICAgbGVuID0gZ2Fwcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCA9IGdhcHNbaV0gKiBtYWduaXR1ZGU7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZVVuaXQgPj0gYXZnKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ov5Tlm55cclxuICAgICAgICByZXR1cm4gc2NhbGVVbml0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog6K6h566X5oyH5a6a5pWw5YC855qE5pWw6YeP57qnXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGdldE1hZ25pdHVkZSAobnVtKSB7XHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoQxMOeahOW5glxyXG4gICAgICAgIGxldCBwb3cgPSBNYXRoLmZsb29yKE1hdGgubG9nKG51bSkgLyBNYXRoLmxvZygxMCkpOztcclxuXHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoTmlbDph4/nuqdcclxuICAgICAgICBsZXQgbWFnbml0dWRlID0gTWF0aC5wb3coMTAsIHBvdyk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYWduaXR1ZGU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgKiBDYW52YXPnu5jliLbml7blr7nlnZDmoIfov5vooYzlvq7osINcclxuICAgICog5Zub6IiN5LqU5YWl5Y+W5pW05ZCO5YeP5bCPMC415YOP57Sg44CC6L+Z5qC377yM5ZyoQ2FudmFz5pe25L2N572u5aSE5LqO5Lik5Liq5YOP57Sg5LmL6Ze077yM6YG/5YWN5Y+R6Jma44CCXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGFkanVzdFBvc2l0aW9uICh4T1J5KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoeE9SeSkgLSBDb25zdGFudHMuSEFMRl9QSVhFTDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyB3aW5kb3dUb0NhbnZhcyAoYm91bmRpbmdDbGllbnRSZWN0TGVmdCxcclxuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3RUb3AsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0V2lkdGgsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0LFxyXG4gICAgICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodCxcclxuICAgICAgICBnbG9ibGVYLFxyXG4gICAgICAgIGdsb2JsZVksXHJcbiAgICAgICAgcG9zaXRpb24pIHtcclxuICAgICAgICBwb3NpdGlvbi54ID0gZ2xvYmxlWCAtIGJvdW5kaW5nQ2xpZW50UmVjdExlZnQgKiAoY2FudmFzV2lkdGggLyBib3VuZGluZ0NsaWVudFJlY3RXaWR0aCk7XHJcbiAgICAgICAgcG9zaXRpb24ueSA9IGdsb2JsZVkgLSBib3VuZGluZ0NsaWVudFJlY3RUb3AgKiAoY2FudmFzSGVpZ2h0IC8gYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0V2lkdGggKGNhbnZhc0NvbnRleHQsIHRleHQpIHtcclxuICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0SGVpZ2h0IChjYW52YXNDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoJ00nKS53aWR0aCAqIDcgLyA2O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXQWN0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gMDsgICAgICAgICAgIC8v57yT5Yqo5qyh5pWwXHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7ICAgICAgICAgICAgICAvL+e8k+WKqOW8gOWni+aXtu+8jOS7juesrOWHoOasoee8k+WKqOW8gOWniyAgXHJcbiAgICAgICAgdGhpcy5kYXRhQXJyYXkgPSBbXTsgICAgICAgICAgLy/mnKzliqjkvZzmk43mjqfnmoRUV0RhdGHmlbDmja7pm4ZcclxuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IG51bGw7ICAgICAgICAvL+e8k+WKqOeul+azlVxyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbiA9IG51bGw7ICAgICAgIC8v5pys5Yqo5L2c57uT5p2f5ZCO55qE5LiL5LiA5Liq5Yqo5L2cXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXREYXRhIChkYXRhQXJyYXksIGFsZ29yaXRobSwgZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IGFsZ29yaXRobTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gTWF0aC5jZWlsKGR1cmF0aW9uIC8gVFdBY3Rpb24uRlJBTUVfRFVSQVRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYWluIChhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24gPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lICgpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0LFxyXG4gICAgICAgICAgICBmcm9tLFxyXG4gICAgICAgICAgICB0byxcclxuICAgICAgICAgICAgY2FsbEJhY2ssXHJcblxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yLFxyXG5cclxuICAgICAgICAgICAgcnRuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnQgPiB0aGlzLnRvdGxlVGltZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgbGVuMSA9IHRoaXMuZGF0YUFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuZGF0YUFycmF5W2ldLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGZyb20gPSB0aGlzLmRhdGFBcnJheVtpXS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgdG8gPSB0aGlzLmRhdGFBcnJheVtpXS50bztcclxuICAgICAgICAgICAgICAgIGNhbGxCYWNrID0gdGhpcy5kYXRhQXJyYXlbaV0uY2FsbEJhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBsZW4yID0gZnJvbS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5hbGdvcml0aG0odGhpcy5zdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVtqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9bal0gLSBmcm9tW2pdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGxlVGltZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbEJhY2sodGFyZ2V0LCBhcnIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGFydCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB0aGlzLnRvdGxlVGltZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDpnZnmgIHlj5jph49cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuVFdBY3Rpb24uRlJBTUVfRFVSQVRJT04gPSAxNzsgICAgICAvL+W4p+mikeS4ujYw55qE54q25oCB5LiL77yM5LiA5bin55qE5pKt5pS+5pe26ZW/5Li6MTdtcyAoIDEwMDBtcy82MCApXHJcbiIsIi8qXHJcbiAqIHQ6IGN1cnJlbnQgdGltZe+8iOW9k+WJjeaXtumXtO+8iVxyXG4gKiBiOiBiZWdpbm5pbmcgdmFsdWXvvIjliJ3lp4vlgLzvvIlcclxuICogYzogY2hhbmdlIGluIHZhbHVl77yI5Y+Y5YyW6YeP77yJXHJcbiAqIGQ6IGR1cmF0aW9u77yI5oyB57ut5pe26Ze077yJXHJcbiAqIFxyXG4gKiBcclxuICog57yT5Yqo5Ye95pWwOlxyXG4gKiAxLkxpbmVhciDljIDpgJ9cclxuICogMi5RdWFkIOS6jOasoeaWuee8k+WKqOaViOaenFxyXG4gKiAzLkN1YmljIOS4ieasoeaWuee8k+WKqOaViOaenFxyXG4gKiA0LlF1YXJ0IOWbm+asoeaWuee8k+WKqOaViOaenFxyXG4gKiA1LlF1aW50IOS6lOasoeaWuee8k+WKqOaViOaenFxyXG4gKiA2LlNpbmUgIOato+W8pue8k+WKqOaViOaenFxyXG4gKiA3LkV4cG8gIOaMh+aVsOe8k+WKqOaViOaenFxyXG4gKiA4LkNpcmMgIOWchuW9oue8k+WKqOWHveaVsFxyXG4gKiA5LkVsYXN0aWMg5oyH5pWw6KGw5YeP5q2j5bym5puy57q/57yT5Yqo5Ye95pWwXHJcbiAqIDEwLkJhY2sgIOi2hei/h+iMg+WbtOeahOS4ieasoeaWueeahOe8k+WKqOWHveaVsFxyXG4gKiAxMS5Cb3VuY2Ug5oyH5pWw6KGw5YeP55qE5Y+N5by55puy57q/57yT5Yqo5Ye95pWwXHJcbiAqIFxyXG4gKiBcclxuICog5q+P56eN57yT5Yqo5Ye95pWw6YO955Sx5LiJ56eN5pWI5p6cOlxyXG4gKiAxLmVhc2VJbiAg5Yqg6YCfXHJcbiAqIDIuZWFzZU91dCDlh4/pgJ9cclxuICogMy5lYXNlSW5PdXQgIOWFiOWKoOmAn+WQjuWHj+mAn1xyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdBbGdvcml0aG0ge1xyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOmdmeaAgeWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0YXRpYyBsaW5lYXIgKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICByZXR1cm4gYyAqIHQgLyBkICsgYjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOmdmeaAgeWPmOmHj1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5UV0FsZ29yaXRobS5RdWFkID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoKC0tdCkgKiAodCAtIDIpIC0gMSkgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uQ3ViaWMgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5RdWFydCA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLlF1aW50ID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5TaW5lID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqIE1hdGguY29zKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBjICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogTWF0aC5zaW4odCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQgLyBkKSAtIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkV4cG8gPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0ID09IDApID8gYiA6IGMgKiBNYXRoLnBvdygyLCAxMCAqICh0IC8gZCAtIDEpKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHQgPT0gZCkgPyBiICsgYyA6IGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQgLyBkKSArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICh0ID09IGQpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5DaXJjID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0IC89IGQpICogdCkgLSAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gKHQgPSB0IC8gZCAtIDEpICogdCkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIC1jIC8gMiAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkVsYXN0aWMgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPT0gMSkgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHAgPT0gXCJ1bmRlZmluZWRcIikgcCA9IGQgKiAuMztcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgICAgICAgICBsZXQgcztcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PSBcInVuZGVmaW5lZFwiKSBwID0gZCAqIC4zO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gYztcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIGMgKyBiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpID09IDIpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09IFwidW5kZWZpbmVkXCIpIHAgPSBkICogKC4zICogMS41KTtcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIC0uNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogLjUgKyBjICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkJhY2sgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09IFwidW5kZWZpbmVkXCIpIHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PSBcInVuZGVmaW5lZFwiKSBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqICgocyArIDEpICogdCArIHMpICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT0gXCJ1bmRlZmluZWRcIikgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiAodCAqIHQgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB0IC0gcykpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkJvdW5jZSA9XHJcbiAgICB7XHJcblxyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgbGV0IFRXQWxnb3JpdGhtID0gVC50d2VlbjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLSBCb3VuY2UuZWFzZU91dChkIC0gdCwgMCwgYywgZCkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQpIDwgKDEgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDEuNSAvIDIuNzUpKSAqIHQgKyAuNzUpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMi4yNSAvIDIuNzUpKSAqIHQgKyAuOTM3NSkgKyBiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDIuNjI1IC8gMi43NSkpICogdCArIC45ODQzNzUpICsgYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBsZXQgVFdBbGdvcml0aG0gPSBULnR3ZWVuO1xyXG4gICAgICAgICAgICBpZiAodCA8IGQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQm91bmNlLmVhc2VJbih0ICogMiwgMCwgYywgZCkgKiAuNSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQm91bmNlLmVhc2VPdXQodCAqIDIgLSBkLCAwLCBjLCBkKSAqIC41ICsgYyAqIC41ICsgYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUV0RhdGEge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gW107XHJcbiAgICAgICAgdGhpcy50byA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IFtdO1xyXG4gICAgICAgIHRoaXMudG8gPSBbXTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhICh0YXJnZXQsIGZyb21BcnJheSwgdG9BcnJheSwgY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tQXJyYXk7XHJcbiAgICAgICAgdGhpcy50byA9IHRvQXJyYXk7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxCYWNrO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufVxyXG4iLCJpbXBvcnQgT2JqZWN0UG9vbCBmcm9tICcuLi9zdXBwb3J0L09iamVjdFBvb2wuanMnO1xyXG5pbXBvcnQgVFdBY3Rpb24gZnJvbSBcIi4uL3R3ZWVuL1RXQWN0aW9uLmpzXCI7XHJcbmltcG9ydCBUV0RhdGEgZnJvbSBcIi4uL3R3ZWVuL1RXRGF0YS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdFbmdpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9hY3Rpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fZmlyc3RBY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9hY3Rpb25Qb29sID0gbmV3IE9iamVjdFBvb2woVFdBY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sID0gbmV3IE9iamVjdFBvb2woVFdEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRUV0FjdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgb2JqID0gdGhpcy5fYWN0aW9uUG9vbC5nZXRPYmooKTtcclxuICAgICAgICBvYmouaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMucHVzaChvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRXRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgb2JqID0gdGhpcy5fZGF0YVBvb2wuZ2V0T2JqKCk7XHJcbiAgICAgICAgb2JqLmluaXQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlQWxsVFdEYXRhICgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhUG9vbC5yZWxlYXNlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZUFsbFRXQWN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uUG9vbC5yZWxlYXNlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rmlyc3RUV0FjdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZmlyc3RBY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGlvbiA9IHRoaXMuX2ZpcnN0QWN0aW9uO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZXh0RnJhbWUgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNQbGF5aW5nID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRBY3Rpb24ubmV4dEZyYW1lKCkgPT0gZmFsc2UpICAgLy/lvZPliY1hY3Rpb27nmoTnvJPliqjlt7Lnu4/nu5PmnZ8gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRBY3Rpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgKCkge1xyXG4gICAgICAgIGxldCBpLCBsZW47XHJcblxyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9maXJzdEFjdGlvbjtcclxuXHJcbiAgICAgICAgbGVuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbnNbaV0uaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICcuLi9zcmMvY2hhcnQvc2NhdHRlci9jc3MvY2hhcnQuY3NzJyA7XHJcbmltcG9ydCAnLi4vc3JjL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFydCB9ICBmcm9tICcuLi9zcmMvY2hhcnQvc2NhdHRlci9DaGFydC5qcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VyaWVzIH0gIGZyb20gJy4uL3NyYy9iYXNlL3Nlcmllcy9TZXJpZXNCYXNlLmpzJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==