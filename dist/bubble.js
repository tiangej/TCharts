(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bubble"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["bubble"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/bubbleEntry.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/bubble/css/chart.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/bubble/css/chart.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.bubbleChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n    line-height: 1.5 ;\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.bubbleChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}\r\n\r\n\r\n            \r\n/* \r\n * Tip\r\n */\r\n.bubbleChartTipDiv {\r\n    position: absolute;            /* 绝对定位，这样才会跟随鼠标位置 */\r\n    \r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    \r\n    background: rgba(0, 0, 0, 0.6);\r\n    \r\n    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;     /* 阴影 */\r\n    -moz-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    \r\n    font-family: Microsoft YaHei;      /* Tip字体 */\r\n    font-size: 12px;              /* Tip字体尺寸 */\r\n    color: #eeeeee;               /* Tip文字颜色 */\r\n}\r\n\r\n\r\n.bubbleChartTipDiv p {\r\n    padding: 0px;  \r\n    margin: 0px ;       \r\n}\r\n\r\n/* \r\n * Tip -- table\r\n */\r\n.bubbleChartTipDiv table{\r\n    padding: 0px;  \r\n    margin: 0px ;       \r\n    border:none;\r\n    \r\n    border-collapse: collapse;    /* 合并边框 */\r\n    border-spacing: 0;            /* 设置相邻单元格的边框间的距离 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td\r\n */\r\n.bubbleChartTipDiv table td {\r\n    padding: 0px;         \r\n    padding-right: 10px;          /* 在列数据之间留余白 */\r\n    margin: 0px ;\r\n    white-space:nowrap;           /* 禁止换行 */\r\n    border: 0;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td -- span\r\n */\r\n.bubbleChartTipDiv table td span {\r\n    display:inline-block;           /* 转成行内块，否则不能显示出来 */\r\n    /*border-radius: 10px;            /* 圆形 */\r\n    width: 9px;\r\n    height: 9px;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- 第三列\r\n */\r\n.bubbleChartTipDiv .secondCol {\r\n    text-align: right;           /* 靠右对齐 */\r\n}\r\n", ""]);



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

/***/ "./src/chart/bubble/Chart.js":
/*!***********************************!*\
  !*** ./src/chart/bubble/Chart.js ***!
  \***********************************/
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
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../base/chart/ChartBase.js */ "./src/base/chart/ChartBase.js");
/* harmony import */ var _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_In.js */ "./src/base/info/VAxisInfoBase_In.js");
/* harmony import */ var _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_Out.js */ "./src/base/info/VAxisInfoBase_Out.js");
/* harmony import */ var _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info/ChartInfo_In.js */ "./src/chart/bubble/info/ChartInfo_In.js");
/* harmony import */ var _info_ChartInfo_Out_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/ChartInfo_Out.js */ "./src/chart/bubble/info/ChartInfo_Out.js");
/* harmony import */ var _parts_Bubble_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parts/Bubble.js */ "./src/chart/bubble/parts/Bubble.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/bubble/painter/Painter.js");
/* harmony import */ var _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../support/ObjectPool.js */ "./src/support/ObjectPool.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../support/Utility.js */ "./src/support/Utility.js");
/* harmony import */ var _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../tween/TWAlgorithm.js */ "./src/tween/TWAlgorithm.js");
/* harmony import */ var _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../tween/TWEngine.js */ "./src/tween/TWEngine.js");








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

    _this.chartInfo_In = new _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_10__["default"](); //图表信息。例：图表名称

    _this.xAxisInfo_In = new _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_8__["default"](); //x值轴信息

    _this.yAxisInfo_In = new _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_8__["default"](); //y值轴信息
    ///////////////////////
    // 私有成员变量
    ///////////////////////

    _this._chartInfo_Out = new _info_ChartInfo_Out_js__WEBPACK_IMPORTED_MODULE_11__["default"](); //数据结构体(存储计算结果，供内部用)    

    _this._xAxisInfo_Out = new _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this._yAxisInfo_Out = new _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this._itemArray = []; //存放散点对象的二维数组

    _this._itemPool = null; //散点对象池

    _this._parentDivClassName = 'bubbleChartDiv'; //样式名

    _this._tipDivClassName = 'bubbleChartTipDiv';
    _this._secondColClassName = 'secondCol';
    _this._twEngine = new _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_19__["default"](); //缓动动画相关
    ///////////////////////
    // 初始化
    ///////////////////////
    //设置画家

    _this._setPainter(_painter_Painter_js__WEBPACK_IMPORTED_MODULE_13__["default"]); //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换


    _this._parentDiv = document.getElementById(parentDivID);
    _this._parentDiv.className += ' ' + _this._parentDivClassName; //动态生成_canvas，并添加到DOM树。同时获取其上下文

    _this._canvas = document.createElement('canvas');

    _this._parentDiv.appendChild(_this._canvas); //动态生成tip对象，添加到DOM树，并获取之


    _this._tipDiv = _this._createTip(_this._tipDivClassName);

    _this._parentDiv.appendChild(_this._tipDiv); //初始化对象池


    _this._itemPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_14__["default"](_parts_Bubble_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
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

      this._computeValueAxisOtherInfo(_support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].X_AXIS, this.xAxisInfo_In, this._xAxisInfo_Out);

      this._computeValueAxisOtherInfo(_support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].Y_AXIS, this.yAxisInfo_In, this._yAxisInfo_Out);

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

      this._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].REMOVE); //设置尺寸


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
          secondColClassName = this._secondColClassName,
          schema = this.chartInfo_In.schema,
          table,
          row,
          td,
          i,
          len; //隐藏tip

      tipDiv.style.display = 'none'; //删除Table对象的所有行

      table = tipDiv.childNodes[1];
      table.innerHTML = ''; //根据数据系列循环生成Table对象

      len = schema.length;

      for (i = 0; i < len; i++) {
        //创建行
        row = table.insertRow(); //创建第一列，并插入标签

        td = row.insertCell();
        td.innerHTML = schema[i]; //创建第二列，并设定样式名

        td = row.insertCell();
        td.className = secondColClassName;
      }
    }
  }, {
    key: "_getItemAndComputeMinMax",
    value: function _getItemAndComputeMinMax() {
      var chartInfo_In = this.chartInfo_In,
          chartInfo_Out = this._chartInfo_Out,
          xAxisInfo_In = this.xAxisInfo_In,
          xAxisInfo_Out = this._xAxisInfo_Out,
          yAxisInfo_In = this.yAxisInfo_In,
          yAxisInfo_Out = this._yAxisInfo_Out,
          itemArray = this._itemArray,
          itemPool = this._itemPool,
          series = chartInfo_In.series,
          item,
          data,
          d,
          num,
          i,
          j,
          len1,
          len2; //(1)遍历所有系列，找到第一个有效数据，为最大最小赋初值

      len1 = series.length;

      over: for (i = 0; i < len1; i++) {
        data = series[i].data;
        len2 = data.length;

        for (j = 0; j < len2; j++) {
          //取得散点坐标
          d = data[j];

          if (d[0] != _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].DIRTY && d[1] != _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].DIRTY && d[2] != _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].DIRTY) {
            xAxisInfo_Out.min = xAxisInfo_Out.max = d[0];
            yAxisInfo_Out.min = yAxisInfo_Out.max = d[1];
            chartInfo_Out.min = chartInfo_Out.max = d[2];
            break over;
          }
        }
      } //(2)从池中取出项目对象，同时求得最大最小值


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
          item.valueRadius = d[2];
          item.dirtyFlag = false; //比较x轴最值

          num = item.valueX;

          if (num != _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].DIRTY) {
            if (num < xAxisInfo_Out.min) {
              xAxisInfo_Out.min = num;
            } else if (num > xAxisInfo_Out.max) {
              xAxisInfo_Out.max = num;
            }
          } else {
            item.dirtyFlag = true;
          } //比较y轴最值


          num = item.valueY;

          if (num != _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].DIRTY) {
            if (num < yAxisInfo_Out.min) {
              yAxisInfo_Out.min = num;
            } else if (num > yAxisInfo_Out.max) {
              yAxisInfo_Out.max = num;
            }
          } else {
            item.dirtyFlag = true;
          } //比较圆半径的最值


          num = item.valueRadius;

          if (num != _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].DIRTY) {
            if (num < chartInfo_Out.min) {
              chartInfo_Out.min = num;
            } else if (num > chartInfo_Out.max) {
              chartInfo_Out.max = num;
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
      } //(5)计算单位数值的长度，供此后用


      chartInfo_Out.unitValueSize = (chartInfo_In.maxRadius - chartInfo_In.minRadius) / (chartInfo_Out.max - chartInfo_Out.min);
    }
  }, {
    key: "_computeValueAxisOtherInfo",
    value: function _computeValueAxisOtherInfo(axisType, vAxisInfo_In, vAxisInfo_Out) {
      var canvas = this._canvas,
          chartInfo_In = this.chartInfo_In,
          scaleUnit,
          arr,
          w,
          h,
          i; //计算标签间隔

      vAxisInfo_Out.scaleUnit = _support_Utility_js__WEBPACK_IMPORTED_MODULE_17__["default"].getScaleUnit(vAxisInfo_Out.min, vAxisInfo_Out.max, vAxisInfo_In.labelMaxCount); //计算横轴标签小数位数

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


      w = canvas.width - chartInfo_In.bodyLeft - chartInfo_In.bodyRight;
      h = canvas.height - chartInfo_In.bodyTop - chartInfo_In.bodyBottom;

      if (axisType == _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].X_AXIS) {
        vAxisInfo_Out.unitValueSize = w / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
        vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
        vAxisInfo_Out.originPosition = chartInfo_In.bodyLeft + vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
      } else {
        vAxisInfo_Out.unitValueSize = h / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
        vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
        vAxisInfo_Out.originPosition = canvas.height - chartInfo_In.bodyBottom - vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
      }
    }
  }, {
    key: "_setItemPositionAndTween",
    value: function _setItemPositionAndTween() {
      var chartInfo_In = this.chartInfo_In,
          chartInfo_Out = this._chartInfo_Out,
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
          originPositionX = xAxisInfo_Out.originPosition,
          originPositionY = yAxisInfo_Out.originPosition,
          originValueX = xAxisInfo_Out.originValue,
          originValueY = yAxisInfo_Out.originValue,
          unitValueSizeX = xAxisInfo_Out.unitValueSize,
          unitValueSizeY = yAxisInfo_Out.unitValueSize,
          minRadius = chartInfo_In.minRadius,
          unitValueSizeRadius = chartInfo_Out.unitValueSize,
          minValueRadius = chartInfo_Out.min,
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

          item.x = originPositionX + unitValueSizeX * (item.valueX - originValueX);
          item.y = originPositionY - unitValueSizeY * (item.valueY - originValueY); //设置缓动数据

          from = [0];
          to = [minRadius + unitValueSizeRadius * (item.valueRadius - minValueRadius)];
          twData = twEngine.getTWData();
          twData.setData(item, from, to, tweenCallBack);
          twDataArr.push(twData);
        }
      }

      twAction = twEngine.getTWAction();
      twAction.setData(twDataArr, _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_18__["default"].Bounce.easeOut, 1000);
      twEngine.setFirstTWAction(twAction);
    }
  }, {
    key: "_addOrRemoveEventListener",
    value: function _addOrRemoveEventListener(command) {
      var canvas = this._canvas,
          tip = this._tipDiv,
          table,
          row,
          p,
          series = this.chartInfo_In.series,
          ser,
          itemArray = this._itemArray,
          item,
          position = {
        x: -1,
        y: -1
      },
          data,
          rect,
          //Canvas包围盒相关
      foundFlg = false,
          arr,
          i,
          j,
          len1,
          len2,
          num,
          me = this;

      function doMouseClick(e) {
        //获取鼠标相对于Canvas的位置
        rect = canvas.getBoundingClientRect();
        _support_Utility_js__WEBPACK_IMPORTED_MODULE_17__["default"].windowToCanvas(rect.left, rect.top, rect.width, rect.height, canvas.width, canvas.height, e.clientX, e.clientY, position); //按照散点显示的逆序,找到鼠标位于哪个对象之上

        foundFlg = false;
        len1 = itemArray.length;

        outFor: for (i = len1 - 1; i >= 0; i--) {
          arr = itemArray[i];
          len2 = arr.length;

          for (j = len2 - 1; j >= 0; j--) {
            item = arr[j]; //判断鼠标位于哪个对象之上

            if (item.isPointInBubble(position.x, position.y) == true) {
              foundFlg = true;
              break outFor;
            }
          }
        } //判断鼠标位于某个对象之上，如果不是则隐藏tip，然后退出


        if (foundFlg == false) {
          tip.style.display = 'none';
          return;
        } //显示tip


        tip.style.display = 'block'; //更新系列名称        

        ser = series[item.seriesIndex];
        p = tip.childNodes[0];
        p.innerText = ser.name; //更新数据系列

        table = tip.childNodes[1];
        data = ser.data[item.index];

        for (i = 0; i < 3; i++) {
          table.rows[i].cells[1].innerText = data[i];
        } //移动tip
        //设定tip的X坐标


        num = tip.offsetWidth;

        if (position.x + num > rect.width) {
          tip.style.left = position.x - num + 'px';
        } else {
          tip.style.left = position.x + 'px';
        } //设定tip的Y坐标


        num = tip.offsetHeight;

        if (position.y + num > rect.height) {
          tip.style.top = position.y - num + 'px';
        } else {
          tip.style.top = position.y + 'px';
        }
      } //执行


      if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].ADD && me._eventListenersAddedFlag == false) {
        canvas.addEventListener('click', doMouseClick);
        me.eventListenersAddedFlag = true;
      } else if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].REMOVE && me._eventListenersAddedFlag == true) {
        canvas.removeEventListener('click', doMouseClick);
        me.eventListenersAddedFlag = false;
      }
    }
  }, {
    key: "_startPaint",
    value: function _startPaint() {
      var me = this;

      function paint() {
        switch (me._status) {
          case _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STEP1:
            me._paint(); //绘制图表并保存绘图表面


            me._twEngine.start(); //启动缓动，从下一帧开始缓动


            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STEP2;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STEP2:
            //绘制缓动效果
            //      如果缓动没有结束，就绘制
            //      反之，设置状态，在下一停止绘制
            if (me._twEngine.nextFrame() == true) {
              me._paint();
            } else {
              me._twEngine.stop(); //停止缓动


              me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STEP3;
            }

            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STEP3:
            //添加事件监听器
            me._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].ADD); //设置状态


            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STOP;
            break;
        } //循环调用自己，进行绘画


        if (me._status != _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STOP) {
          me._animationFrameID = window.requestNextAnimationFrame(paint);
        }
      } //设置初始状态，开始绘制


      me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_16__["default"].STEP1;
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
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./src/chart/bubble/css/chart.css":
/*!****************************************!*\
  !*** ./src/chart/bubble/css/chart.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/bubble/css/chart.css");

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

/***/ "./src/chart/bubble/info/ChartInfo_In.js":
/*!***********************************************!*\
  !*** ./src/chart/bubble/info/ChartInfo_In.js ***!
  \***********************************************/
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

    _this.minRadius = 5; //气泡最小半径

    _this.maxRadius = 10; //气泡最大半径

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

/***/ "./src/chart/bubble/info/ChartInfo_Out.js":
/*!************************************************!*\
  !*** ./src/chart/bubble/info/ChartInfo_Out.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartInfo_Out; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartInfo_Out = function ChartInfo_Out() {
  _classCallCheck(this, ChartInfo_Out);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  this.min = 0; //数据系列中用于计算气泡半径的最小数值

  this.max = 0; //数据系列中用于计算气泡半径的最大数值

  this.unitValueSize = 0; //数值增加1换算成气泡半径增加的长度
  ///////////////////////
  // 私有成员变量
  ///////////////////////
  ///////////////////////
  // 初始化
  ///////////////////////
};



/***/ }),

/***/ "./src/chart/bubble/painter/Painter.js":
/*!*********************************************!*\
  !*** ./src/chart/bubble/painter/Painter.js ***!
  \*********************************************/
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

    this._yAxisLabelCount; ///////////////////////
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
      ;
      this._chartInfo_In = chart.chartInfo_In;
      this._xAxisInfo_In = chart.xAxisInfo_In;
      this._xAxisInfo_Out = chart._xAxisInfo_Out;
      this._yAxisInfo_In = chart.yAxisInfo_In;
      this._yAxisInfo_Out = chart._yAxisInfo_Out;
      this._itemArray = chart._itemArray; //计算供此后使用
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

          this._paintBubbles();

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
          canvasWidth = this._canvas.width,
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

      x = canvasWidth - chartInfo_In.legendRight; //逆序依次绘制图例文字和色块

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
      //      this._ctx.textBaseline = Constants.TEXT_BASE_LINE_BOTTOM ;

      x = canvasWidth - chartInfo_In.bodyRight;
      y = canvasHeight - chartInfo_In.xAxisNameBottom;
      ctx.fillText(chartInfo_In.xAxisName, x, y);
      ctx.restore();
    }
  }, {
    key: "_paintBubbles",
    value: function _paintBubbles() {
      var ctx = this._ctx,
          colors = this._chartInfo_In.colors,
          itemArray = this._itemArray,
          i,
          j,
          len1,
          len2,
          arr,
          item;
      ctx.save(); //设置共同样式

      ctx.globalAlpha = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].BUBBLE_ALPHA; //循环系列

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

/***/ "./src/chart/bubble/parts/Bubble.js":
/*!******************************************!*\
  !*** ./src/chart/bubble/parts/Bubble.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bubble; });
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



var Bubble =
/*#__PURE__*/
function (_PartBase) {
  _inherits(Bubble, _PartBase);

  function Bubble() {
    var _this;

    _classCallCheck(this, Bubble);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bubble).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.seriesIndex = -1;
    _this.index = -1;
    _this.valueX;
    _this.valueY;
    _this.valueRadius;
    _this.radius = 10; ///////////////////////
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


  _createClass(Bubble, [{
    key: "isPointInBubble",
    value: function isPointInBubble(x, y) {
      if (Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) < this.radius) {
        return true;
      } else {
        return false;
      }
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }]);

  return Bubble;
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

/***/ "./webpackEntry/bubbleEntry.js":
/*!*************************************!*\
  !*** ./webpackEntry/bubbleEntry.js ***!
  \*************************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_bubble_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/bubble/css/chart.css */ "./src/chart/bubble/css/chart.css");
/* harmony import */ var _src_chart_bubble_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_bubble_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_bubble_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/bubble/Chart.js */ "./src/chart/bubble/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_bubble_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/base/series/SeriesBase.js */ "./src/base/series/SeriesBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2J1YmJsZS9jc3MvY2hhcnQuY3NzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9jaGFydC9DaGFydEJhc2UuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9pbmZvL0F4aXNDaGFydEluZm9CYXNlX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9DaGFydEluZm9CYXNlX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9WQXhpc0luZm9CYXNlX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9WQXhpc0luZm9CYXNlX091dC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL3Nlcmllcy9TZXJpZXNCYXNlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2J1YmJsZS9DaGFydC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9idWJibGUvY3NzL2NoYXJ0LmNzcz9jNThmIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2J1YmJsZS9pbmZvL0NoYXJ0SW5mb19Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9idWJibGUvaW5mby9DaGFydEluZm9fT3V0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2J1YmJsZS9wYWludGVyL1BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvYnViYmxlL3BhcnRzL0J1YmJsZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvT2JqZWN0UG9vbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1N0YXR1cy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L1V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvdHdlZW4vVFdBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvdHdlZW4vVFdBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvdHdlZW4vVFdEYXRhLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXRW5naW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vd2VicGFja0VudHJ5L2J1YmJsZUVudHJ5LmpzIl0sIm5hbWVzIjpbIkNoYXJ0QmFzZSIsIl9wYXJlbnREaXYiLCJfY2FudmFzIiwiX3RpcERpdiIsIl9wYWludGVyIiwiX3N0YXR1cyIsIl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyIsIl9zdXJmYWNlSW1hZ2VEYXRhIiwiX2FuaW1hdGlvbkZyYW1lSUQiLCJTdGF0dXMiLCJTVE9QIiwicGFpbnRlciIsImdldEluc3RhbmNlIiwic2V0Q2hhcnQiLCJwYWludCIsImNsYXNzTmFtZSIsInRpcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiQXhpc0NoYXJ0SW5mb0Jhc2VfSW4iLCJ4QXhpc05hbWUiLCJ5QXhpc05hbWUiLCJ4QXhpc05hbWVCb3R0b20iLCJ5QXhpc05hbWVUb3AiLCJDaGFydEluZm9CYXNlX0luIiwidGl0bGUiLCJ0aXRsZVRvcCIsInRpdGxlTGVmdCIsImxlZ2VuZFRvcCIsImxlZ2VuZExlZnQiLCJsZWdlbmRSaWdodCIsImJvZHlUb3AiLCJib2R5Qm90dG9tIiwiYm9keUxlZnQiLCJib2R5UmlnaHQiLCJjb2xvcnMiLCJzZXJpZXMiLCJzZWxlY3RlZEluZGV4IiwiVkF4aXNJbmZvQmFzZV9JbiIsIm1pbiIsIk51bWJlciIsIk1JTl9WQUxVRSIsIm1heCIsIk1BWF9WQUxVRSIsImxhYmVsTWF4Q291bnQiLCJ6ZXJvRXh0ZW5kIiwibGFiZWxSb3RhdGUiLCJWQXhpc0luZm9CYXNlX091dCIsIm1pblNjYWxlIiwibWF4U2NhbGUiLCJsYWJlbHMiLCJvcmlnaW5JbmRleCIsIm9yaWdpblZhbHVlIiwib3JpZ2luUG9zaXRpb24iLCJ1bml0VmFsdWVTaXplIiwic2NhbGVVbml0Iiwic2NhbGVVbml0U2l6ZSIsImRlY2ltYWxEaWdpdCIsIlNlcmllc0Jhc2UiLCJuYW1lIiwiZGF0YSIsInNlbGVjdGVkIiwiQ2hhcnQiLCJwYXJlbnREaXZJRCIsImNoYXJ0SW5mb19JbiIsIkNoYXJ0SW5mb19JbiIsInhBeGlzSW5mb19JbiIsInlBeGlzSW5mb19JbiIsIl9jaGFydEluZm9fT3V0IiwiQ2hhcnRJbmZvX091dCIsIl94QXhpc0luZm9fT3V0IiwiX3lBeGlzSW5mb19PdXQiLCJfaXRlbUFycmF5IiwiX2l0ZW1Qb29sIiwiX3BhcmVudERpdkNsYXNzTmFtZSIsIl90aXBEaXZDbGFzc05hbWUiLCJfc2Vjb25kQ29sQ2xhc3NOYW1lIiwiX3R3RW5naW5lIiwiVFdFbmdpbmUiLCJfc2V0UGFpbnRlciIsIlBhaW50ZXIiLCJnZXRFbGVtZW50QnlJZCIsIl9jcmVhdGVUaXAiLCJPYmplY3RQb29sIiwiQnViYmxlIiwiX2NoZWNrIiwiY29uc29sZSIsImxvZyIsIl9yZXNldCIsIl9nZXRJdGVtQW5kQ29tcHV0ZU1pbk1heCIsIl9jb21wdXRlVmFsdWVBeGlzT3RoZXJJbmZvIiwiQ29uc3RhbnRzIiwiWF9BWElTIiwiWV9BWElTIiwiX3NldEl0ZW1Qb3NpdGlvbkFuZFR3ZWVuIiwiX3N0YXJ0UGFpbnQiLCJydG4iLCJsZW5ndGgiLCJjYW52YXMiLCJkaXYiLCJpdGVtQXJyIiwiaSIsImxlbiIsIl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSRU1PVkUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiX2luaXRUaXAiLCJyZWxlYXNlQWxsIiwicmVsZWFzZUFsbFRXRGF0YSIsInJlbGVhc2VBbGxUV0FjdGlvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGlwRGl2Iiwic2Vjb25kQ29sQ2xhc3NOYW1lIiwic2NoZW1hIiwidGFibGUiLCJyb3ciLCJ0ZCIsInN0eWxlIiwiZGlzcGxheSIsImNoaWxkTm9kZXMiLCJpbm5lckhUTUwiLCJpbnNlcnRSb3ciLCJpbnNlcnRDZWxsIiwiY2hhcnRJbmZvX091dCIsInhBeGlzSW5mb19PdXQiLCJ5QXhpc0luZm9fT3V0IiwiaXRlbUFycmF5IiwiaXRlbVBvb2wiLCJpdGVtIiwiZCIsIm51bSIsImoiLCJsZW4xIiwibGVuMiIsIm92ZXIiLCJESVJUWSIsImdldE9iaiIsInB1c2giLCJzZXJpZXNJbmRleCIsImluZGV4IiwidmFsdWVYIiwidmFsdWVZIiwidmFsdWVSYWRpdXMiLCJkaXJ0eUZsYWciLCJtYXhSYWRpdXMiLCJtaW5SYWRpdXMiLCJheGlzVHlwZSIsInZBeGlzSW5mb19JbiIsInZBeGlzSW5mb19PdXQiLCJhcnIiLCJ3IiwiaCIsIlV0aWxpdHkiLCJnZXRTY2FsZVVuaXQiLCJ0b1N0cmluZyIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwidHdFbmdpbmUiLCJ0d2VlbkNhbGxCYWNrIiwiX3R3ZWVuQ2FsbEJhY2siLCJmcm9tIiwidG8iLCJ0d0RhdGEiLCJ0d0FjdGlvbiIsInR3RGF0YUFyciIsIm9yaWdpblBvc2l0aW9uWCIsIm9yaWdpblBvc2l0aW9uWSIsIm9yaWdpblZhbHVlWCIsIm9yaWdpblZhbHVlWSIsInVuaXRWYWx1ZVNpemVYIiwidW5pdFZhbHVlU2l6ZVkiLCJ1bml0VmFsdWVTaXplUmFkaXVzIiwibWluVmFsdWVSYWRpdXMiLCJkaXJ0eSIsIngiLCJ5IiwiZ2V0VFdEYXRhIiwic2V0RGF0YSIsImdldFRXQWN0aW9uIiwiVFdBbGdvcml0aG0iLCJCb3VuY2UiLCJlYXNlT3V0Iiwic2V0Rmlyc3RUV0FjdGlvbiIsImNvbW1hbmQiLCJwIiwic2VyIiwicG9zaXRpb24iLCJyZWN0IiwiZm91bmRGbGciLCJtZSIsImRvTW91c2VDbGljayIsImUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3dUb0NhbnZhcyIsImxlZnQiLCJ0b3AiLCJjbGllbnRYIiwiY2xpZW50WSIsIm91dEZvciIsImlzUG9pbnRJbkJ1YmJsZSIsImlubmVyVGV4dCIsInJvd3MiLCJjZWxscyIsIkFERCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVyc0FkZGVkRmxhZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTVEVQMSIsIl9wYWludCIsInN0YXJ0IiwiU1RFUDIiLCJuZXh0RnJhbWUiLCJzdG9wIiwiU1RFUDMiLCJyZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lIiwidGFyZ2V0IiwicmVzdWx0QXJyYXkiLCJyYWRpdXMiLCJfY2hhcnQiLCJfY3R4IiwiX2NhbnZhc1N1cmZhY2UiLCJfY2hhcnRJbmZvX0luIiwiX3hBeGlzSW5mb19JbiIsIl95QXhpc0luZm9fSW4iLCJfeEF4aXNMYWJlbENvdW50IiwiX3lBeGlzTGFiZWxDb3VudCIsImNoYXJ0IiwiZ2V0Q29udGV4dCIsImN0eCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2xlYXJSZWN0IiwiX3BhaW50VGl0bGUiLCJfcGFpbnRMZWdlbmQiLCJfcGFpbnRHcmlkIiwiX3BhaW50QXhpcyIsIl9wYWludExhYmVsIiwiX3BhaW50QXhpc05hbWUiLCJnZXRJbWFnZURhdGEiLCJwdXRJbWFnZURhdGEiLCJfcGFpbnRCdWJibGVzIiwic2F2ZSIsImZvbnQiLCJTdHlsZXMiLCJUSVRMRV9GT05UIiwidGV4dEFsaWduIiwiVEVYVF9BTElHTl9MRUZUIiwidGV4dEJhc2VsaW5lIiwiVEVYVF9CQVNFX0xJTkVfVE9QIiwiZmlsbFRleHQiLCJyZXN0b3JlIiwic3RyIiwiTEVHRU5EX0ZPTlQiLCJnZXRUZXh0SGVpZ2h0IiwibWVhc3VyZVRleHQiLCJmaWxsU3R5bGUiLCJGT05UX0ZJTExfQ09MT1IiLCJMRUdFTkRfU0hBUEVfVEVYVF9HQVAiLCJmaWxsUmVjdCIsIkxFR0VORF9HQVAiLCJ4U2NhbGVVbml0U2l6ZSIsInlTY2FsZVVuaXRTaXplIiwieEF4aXNMYWJlbENvdW50IiwieUF4aXNMYWJlbENvdW50IiwieDEiLCJ4MiIsInkxIiwieTIiLCJsaW5lV2lkdGgiLCJHUklEX0xJTkVfV0lEVEgiLCJzdHJva2VTdHlsZSIsIkdSSURfTElORV9DT0xPUiIsInNldExpbmVEYXNoIiwiR1JJRF9MSU5FX0RBU0giLCJhZGp1c3RQb3NpdGlvbiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInhPcmlnaW5Qb3NpdGlvbiIsInlPcmlnaW5Qb3NpdGlvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYW5nbGUiLCJBWElTX0xJTkVfV0lEVEgiLCJBWElTX0xJTkVfQ09MT1IiLCJBWElTX1NDQUxFX1VOSVRfTElORV9TSVpFIiwieExhYmVsUm90YXRlIiwieUxhYmVsUm90YXRlIiwieE1pblNjYWxlIiwieU1pblNjYWxlIiwieFNjYWxlVW5pdCIsInlTY2FsZVVuaXQiLCJ4RGVjaW1hbERpZ2l0IiwieURlY2ltYWxEaWdpdCIsIkxBQkVMX0ZPTlQiLCJURVhUX0JBU0VfTElORV9NSURETEUiLCJURVhUX0FMSUdOX0NFTlRFUiIsIlhBWElTX0xBQkVMX09GRlNFVCIsInRvRml4ZWQiLCJQSSIsIlRFWFRfQUxJR05fUklHSFQiLCJYQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIllBWElTX0xBQkVMX09GRlNFVCIsIkFYSVNfTkFNRV9GT05UIiwiZ2xvYmFsQWxwaGEiLCJCVUJCTEVfQUxQSEEiLCJhcmMiLCJmaWxsIiwiY2xvc2VQYXRoIiwiaW5zdGFuY2UiLCJzcXJ0IiwiUGFydEJhc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZ1bmMiLCJzZXRUaW1lb3V0IiwiSEFMRl9QSVhFTCIsIkNMT1NFX1RPX1pFUk8iLCJURVhUX0JBU0VfTElORV9CT1RUT00iLCJURVhUX0JBU0VfTElORV9JREVPR1JBUEhJQyIsIlJBRElBTl9VTklUIiwiY2xhenoiLCJwYXJhIiwiX2NsYXNzIiwiX3BhcmEiLCJfY291bnQiLCJfcG9vbCIsInBvb2wiLCJvYmoiLCJTVEVQNCIsIlNURVA1IiwiV0FJVElORyIsIllBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFIiwiVElQX0xPQ0FUSU9OX09GRlNFVCIsIkNPTFVNTl9TRUxFQ1RPUl9MSU5FX1dJRFRIIiwiQ09MVU1OX1NFTEVDVE9SX0xJTkVfQ09MT1IiLCJMSU5FX0xJTkVfV0lEVEgiLCJMSU5FX0FSRUFfQUxQSEEiLCJMSU5FX01BUktQT0lOVF9XSURUSCIsIkxJTkVfTUFSS1BPSU5UX1JBRElVUyIsIkxJTkVfTUFSS1BPSU5UX0JBS19DT0xPUiIsIkxJTkVfU0VMRUNUT1JfTElORV9XSURUSCIsIkxJTkVfU0VMRUNUT1JfTElORV9DT0xPUiIsIlBJRV9MQUJFTF9JTk5FUl9GT05UX0NPTE9SIiwiUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkUiLCJQSUVfTEFCRUxfR1VJREVfTElORTJfU0laRSIsIlBJRV9MQUJFTF9PRkZTRVQiLCJQSUVfU0VMRUNUT1JfVFJBTlNMQVRFIiwiUElFX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJQSUVfU0VMRUNUT1JfTElORV9DT0xPUiIsIlJBREFSX0xBQkVMX0ZPTlQiLCJSQURBUl9MQUJFTF9DT0xPUiIsIlJBREFSX0xBQkVMX1BPU0lUSU9OX09GRlNFVCIsIlJBREFSX0xJTkVfV0lEVEgiLCJSQURBUl9CQUtfTElORV9XSURUSCIsIlJBREFSX0JBS19MSU5FX0NPTE9SIiwiUkFEQVJfQkFLX0ZJTExfQ09MT1IiLCJTQ0FUVEVSX1BPSU5UX0FMUEhBIiwiU0NBVFRFUl9DUk9TU19MSU5FX1dJRFRIIiwiU0NBVFRFUl9DUk9TU19DT0xPUiIsIlNVTkJVUlNfTEFCRUxfQ09MT1IiLCJTVU5CVVJTX0JPUkRFUl9DT0xPUiIsInNjYWxlTWF4Q291bnQiLCJhdmciLCJnYXBzIiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwicG93IiwieE9SeSIsInJvdW5kIiwiYm91bmRpbmdDbGllbnRSZWN0TGVmdCIsImJvdW5kaW5nQ2xpZW50UmVjdFRvcCIsImJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoIiwiYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0IiwiZ2xvYmxlWCIsImdsb2JsZVkiLCJjYW52YXNDb250ZXh0IiwidGV4dCIsIlRXQWN0aW9uIiwidG90bGVUaW1lcyIsImRhdGFBcnJheSIsImFsZ29yaXRobSIsIm5leHRBY3Rpb24iLCJkdXJhdGlvbiIsImNlaWwiLCJGUkFNRV9EVVJBVElPTiIsImFjdGlvbiIsImNhbGxCYWNrIiwidmFsdWUiLCJ0IiwiYiIsImMiLCJRdWFkIiwiZWFzZUluIiwiZWFzZUluT3V0IiwiQ3ViaWMiLCJRdWFydCIsIlF1aW50IiwiU2luZSIsImNvcyIsInNpbiIsIkV4cG8iLCJDaXJjIiwiRWxhc3RpYyIsImEiLCJzIiwiYWJzIiwiYXNpbiIsIkJhY2siLCJUIiwidHdlZW4iLCJUV0RhdGEiLCJmcm9tQXJyYXkiLCJ0b0FycmF5IiwiX2FjdGlvbnMiLCJfZmlyc3RBY3Rpb24iLCJfY3VycmVudEFjdGlvbiIsIl9hY3Rpb25Qb29sIiwiX2RhdGFQb29sIiwiX2lzUGxheWluZyIsImluaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FD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LElBQWxCO0FBQ0g7OzsyQkFFTztBQUNKLFVBQUl4VSxDQUFKLEVBQU9DLEdBQVA7QUFFQSxXQUFLdVUsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUtILGNBQUwsR0FBc0IsS0FBS0QsWUFBM0I7QUFFQW5VLFNBQUcsR0FBRyxLQUFLa1UsUUFBTCxDQUFjdlUsTUFBcEI7O0FBQ0EsV0FBS0ksQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHQyxHQUFoQixFQUFxQkQsQ0FBQyxFQUF0QixFQUEwQjtBQUN0QixhQUFLbVUsUUFBTCxDQUFjblUsQ0FBZCxFQUFpQnlVLElBQWpCO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEiLCJmaWxlIjoiYnViYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYnViYmxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRcIl0gPSByb290W1wiVFwiXSB8fCB7fSwgcm9vdFtcIlRcIl1bXCJidWJibGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnBhY2tFbnRyeS9idWJibGVFbnRyeS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNwYWNlcyA9IHJlcXVpcmUoJy4vX3N0cmluZy13cycpO1xudmFyIHNwYWNlID0gJ1snICsgc3BhY2VzICsgJ10nO1xudmFyIG5vbiA9ICdcXHUyMDBiXFx1MDA4NSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBBTElBUykge1xuICB2YXIgZXhwID0ge307XG4gIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KTtcbiAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcbiAgaWYgKEFMSUFTKSBleHBbQUxJQVNdID0gZm47XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24gKHN0cmluZywgVFlQRSkge1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgJE51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIEJhc2UgPSAkTnVtYmVyO1xudmFyIHByb3RvID0gJE51bWJlci5wcm90b3R5cGU7XG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ09GID0gY29mKHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKShwcm90bykpID09IE5VTUJFUjtcbnZhciBUUklNID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcbiAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYgKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSkge1xuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QTihCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSkge1xuICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfVxuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciAkbWluID0gTWF0aC5taW47XG52YXIgJHB1c2ggPSBbXS5wdXNoO1xudmFyICRTUExJVCA9ICdzcGxpdCc7XG52YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbnZhciBTVVBQT1JUU19ZID0gISEoZnVuY3Rpb24gKCkgeyB0cnkgeyByZXR1cm4gbmV3IFJlZ0V4cCgneCcsICd5Jyk7IH0gY2F0Y2ggKGUpIHt9IH0pKCk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyAweGZmZmZmZmZmIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSAkbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcclxcbiAqIOWbvuihqOWGheWFqOWxgOiuvuWumu+8iOW/hemhu+mhueebru+8iVxcclxcbiAqIOeUqOS6jua4hemZpO+8iOWIneWni+WMlu+8ieaJgOaciem7mOiupOWGheWklui+uei3nSBcXHJcXG4gKi9cXHJcXG4uYnViYmxlQ2hhcnREaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDsgICAgICAgICAgICAvKiDmuIXpmaTvvIjliJ3lp4vljJbvvInlm77ooajlhoXmiYDmnInlhYPntKDnmoTpu5jorqTlhoXovrnot50gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggOyAgICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5aSW6L656LedICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjUgO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiDnu5jliLbkuLvkvZPnmoRDYW52YXNcXHJcXG4gKi9cXHJcXG4uYnViYmxlQ2hhcnREaXYgY2FudmFzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgIC8qIOe7neWvueWumuS9je+8jOi/meagtzLkuKrlnZflhYPntKDvvIhDYW52YXPvvInmiY3kvJrph43lj6DlnKjkuIDotbcgKi9cXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgIFxcclxcbi8qIFxcclxcbiAqIFRpcFxcclxcbiAqL1xcclxcbi5idWJibGVDaGFydFRpcERpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAvKiDnu53lr7nlrprkvY3vvIzov5nmoLfmiY3kvJrot5/pmo/pvKDmoIfkvY3nva4gKi9cXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIFxcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSA1cHggNXB4IDIwcHg7ICAgICAvKiDpmLTlvbEgKi9cXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgNXB4IDVweCAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgNXB4IDVweCAyMHB4O1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdCBZYUhlaTsgICAgICAvKiBUaXDlrZfkvZMgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMnB4OyAgICAgICAgICAgICAgLyogVGlw5a2X5L2T5bC65a+4ICovXFxyXFxuICAgIGNvbG9yOiAjZWVlZWVlOyAgICAgICAgICAgICAgIC8qIFRpcOaWh+Wtl+minOiJsiAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnViYmxlQ2hhcnRUaXBEaXYgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgIFxcclxcbiAgICBtYXJnaW46IDBweCA7ICAgICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBUaXAgLS0gdGFibGVcXHJcXG4gKi9cXHJcXG4uYnViYmxlQ2hhcnRUaXBEaXYgdGFibGV7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgIFxcclxcbiAgICBtYXJnaW46IDBweCA7ICAgICAgIFxcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICAgIC8qIOWQiOW5tui+ueahhiAqL1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDsgICAgICAgICAgICAvKiDorr7nva7nm7jpgrvljZXlhYPmoLznmoTovrnmoYbpl7TnmoTot53nprsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuICogVGlwIC0tIHRhYmxlIC0tIHRkXFxyXFxuICovXFxyXFxuLmJ1YmJsZUNoYXJ0VGlwRGl2IHRhYmxlIHRkIHtcXHJcXG4gICAgcGFkZGluZzogMHB4OyAgICAgICAgIFxcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyAgICAgICAgICAvKiDlnKjliJfmlbDmja7kuYvpl7TnlZnkvZnnmb0gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggO1xcclxcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7ICAgICAgICAgICAvKiDnpoHmraLmjaLooYwgKi9cXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBUaXAgLS0gdGFibGUgLS0gdGQgLS0gc3BhblxcclxcbiAqL1xcclxcbi5idWJibGVDaGFydFRpcERpdiB0YWJsZSB0ZCBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7ICAgICAgICAgICAvKiDovazmiJDooYzlhoXlnZfvvIzlkKbliJnkuI3og73mmL7npLrlh7rmnaUgKi9cXHJcXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyAgICAgICAgICAgIC8qIOWchuW9oiAqL1xcclxcbiAgICB3aWR0aDogOXB4O1xcclxcbiAgICBoZWlnaHQ6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuICogVGlwIC0tIHRhYmxlIC0tIOesrOS4ieWIl1xcclxcbiAqL1xcclxcbi5idWJibGVDaGFydFRpcERpdiAuc2Vjb25kQ29sIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7ICAgICAgICAgICAvKiDpnaDlj7Plr7npvZAgKi9cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYgPSBudWxsOyAgICAgICAgICAgICAgICAgLy/lrZDnu4Tku7Y6IOWbvuihqOWQhOS4quWtkOe7hOS7tueahOeItuWuueWZqFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdGlwRGl2ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFpbnRlciA9IG51bGw7ICAgICAgICAgICAgICAgICAgIC8v55S75a625byV55SoXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICcnOyAgICAgICAgICAgICAgICAgICAgICAvL+eKtuaAgVxyXG5cclxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IGZhbHNlOyAgLy/nlLHkuo5qc+aXoOazleWIpOaWreS6i+S7tuebkeWQrOWHveaVsOaYr+WQpuW3sue7j+WtmOWcqO+8jOWboOatpOiHquWumuS5ieagh+W/l+S9jeadpeWIpOaWrVxyXG4gICAgICAgIHRoaXMuX3N1cmZhY2VJbWFnZURhdGEgPSBudWxsOyAgICAgICAgICAvL0NhbnZhc+e7mOWbvuihqOmdou+8jOeUqOS6juS/neWtmENhbnZhc+WbvueJh1xyXG5cclxuICAgICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc3RvcCAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gU3RhdHVzLlNUT1A7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIF9zZXRQYWludGVyIChwYWludGVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlciA9IHBhaW50ZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnQgKCkge1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIuc2V0Q2hhcnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlci5wYWludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIOWKqOaAgeeUn+aIkHRpcOWvueixoVxyXG4gICAgKiDlnKjmnKzlm77ooajns7vliJfkuK3vvIx0aXDmmK/nlLHmrrXokL1w5a+56LGh5ZKMdGFibGXlr7nosaHmnoTmiJDvvIzlhbblpJbop4LnlLHlpJbpg6jmjIflrprnmoRDU1PmjqfliLZcclxuICAgICovXHJcbiAgICBfY3JlYXRlVGlwIChjbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgdGlwO1xyXG5cclxuICAgICAgICAvL+eUn+aIkHRpcOeahGRpduWvueixoSzlubblop7liqBjbGFzc+agt+W8j+OAguazqOaEj++8muaYr+WinuWKoOiAjOS4jeaYr+abv+aNolxyXG4gICAgICAgIHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpcC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOauteiQveWvueixoe+8jOeUqOS6juaYvuekuuexu+ebruWQjeensFxyXG4gICAgICAgIHRpcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOihqOagvOWvueixoe+8jOeUqOS6juezu+WIl+WQjeensOWSjOaVsOaNrlxyXG4gICAgICAgIHRpcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpKTtcclxuXHJcbiAgICAgICAgLy/ov5Tlm55cclxuICAgICAgICByZXR1cm4gdGlwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENoYXJ0SW5mb0Jhc2VfSW4gZnJvbSAnLi9DaGFydEluZm9CYXNlX0luLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXNDaGFydEluZm9CYXNlX0luIGV4dGVuZHMgQ2hhcnRJbmZvQmFzZV9JbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMueEF4aXNOYW1lID0gJ1jovbQnOyAgICAgICAgICAgICAgLy/mmL7npLrlnKh46L205bC95aS077yM55So5LqO6KGo56S6eOi9tOWQq+S5ieeahOaWh+Wtl+OAgiA8YnI+5L6L5aaC77ya5pe26Ze044CB5pyI5Lu944CB5Zu95YirXHJcbiAgICAgICAgdGhpcy55QXhpc05hbWUgPSAnWei9tCc7ICAgICAgICAgICAgICAvL+aYvuekuuWcqHnovbTlsL3lpLTvvIznlKjkuo7ooajnpLp56L205ZCr5LmJ55qE5paH5a2X44CCIDxicj7kvovlpoLvvJrph5Hpop3jgIHmtZPluqbjgIHpm6jph49cclxuXHJcbiAgICAgICAgdGhpcy54QXhpc05hbWVCb3R0b20gPSAyNTsgICAgICAgIC8veOi9tOWQjeensOaWh+Wtl+S4iui+uee8mOWIsGRpduS4i+i+uee8mOeahOi3neemu1xyXG4gICAgICAgIHRoaXMueUF4aXNOYW1lVG9wID0gNDA7ICAgICAgICAgICAvL3novbTlkI3np7DmloflrZfkuIrovrnnvJjliLBkaXbkuIrovrnnvJjnmoTot53nprtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRJbmZvQmFzZV9JbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnVENoYXJ0cyc7ICAgICAgIC8v5Zu+6KGo5qCH6aKYXHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVUb3AgPSAxMDsgICAgICAgICAvL+agh+mimOS9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMudGl0bGVMZWZ0ID0gMTA7XHJcblxyXG4gICAgICAgIHRoaXMubGVnZW5kVG9wID0gMTA7ICAgICAgICAvL+WbvuS+i+S9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMubGVnZW5kTGVmdCA9IDIwO1xyXG4gICAgICAgIHRoaXMubGVnZW5kUmlnaHQgPSAyMDtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5VG9wID0gNzA7ICAgICAgIC8v5Zu+6KGo5Li75L2T5Yy65Z+f77yIeHnkuKTovbTlm7TmiJDnmoTnn6nlvaLljLrln5/vvInvvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLmJvZHlCb3R0b20gPSA1MDtcclxuICAgICAgICB0aGlzLmJvZHlMZWZ0ID0gNTA7XHJcbiAgICAgICAgdGhpcy5ib2R5UmlnaHQgPSA1MDtcclxuXHJcbiAgICAgICAgLy/lm77ooajkvb/nlKjnmoTpopzoibLmlbDnu4RcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFsnI0MyMzUzMScsICcjMkY0NTU0JywgJyM2MUEwQTgnLCAnI0Q0ODI2NScsICcjOTFDN0FFJywgJyNDQTg2MjInLCAnI0JEQTI5QScsICcjNkU3MDc0J107XHJcbiAgICAgICAgdGhpcy5zZXJpZXMgPSBbXTsgICAgICAgICAgICAgICAgIC8v5pWw5o2u57O75YiXXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7ICAgICAgICAgLy/pgInmi6npobnnmoTntKLlvJUgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWQXhpc0luZm9CYXNlX0luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFOyAgICAgICAvL+aVsOWAvOi9tOeahOacgOWwj+WAvOOAguS/neaMgem7mOiupOWAvOS7o+ihqOmcgOimgeiHquWKqOiuoeeul1xyXG4gICAgICAgIHRoaXMubWF4ID0gTnVtYmVyLk1BWF9WQUxVRTsgICAgIC8v5pWw5YC86L2055qE5pyA5aSn5YC844CC5L+d5oyB6buY6K6k5YC85Luj6KGo6ZyA6KaB6Ieq5Yqo6K6h566XXHJcbiAgICAgICAgdGhpcy5sYWJlbE1heENvdW50ID0gNzsgICAgICAgICAgICAgICAgICAgLy/moIfnrb7mmL7npLrnmoTmnIDlpKfkuKrmlbBcclxuICAgICAgICB0aGlzLnplcm9FeHRlbmQgPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy/lvZPmlbDlgLzojIPlm7TkuI3ljIXmi6ww5pe277yM5piv5ZCm5bCG6IyD5Zu05omp5bGV5YiwMFxyXG4gICAgICAgIHRoaXMubGFiZWxSb3RhdGUgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgIC8v5qCH562+5peL6L2s6KeS5bqmICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZBeGlzSW5mb0Jhc2VfT3V0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy/mlbDlgLzovbTnmoTmnIDlsI/lgLxcclxuICAgICAgICAvL1ZBeGlzSW5mb0Jhc2VfSW4ubWluID0g6buY6K6k5YC85pe2IDogIFZBeGlzSW5mb0Jhc2VfT3V0Lm1pbueahOWAvOaYr+WGhemDqOeul+azleiuoeeul+eahOe7k+aenFxyXG4gICAgICAgIC8vVkF4aXNJbmZvQmFzZV9Jbi5taW4gIT0g6buY6K6k5YC85pe2IDogIFZBeGlzSW5mb0Jhc2VfT3V0Lm1pbiA9IFZBeGlzSW5mb0Jhc2VfSW4ubWluXHJcbiAgICAgICAgdGhpcy5taW4gPSAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gMDsgICAgICAgICAgICAgICAgICAgICAvL+WQjOeQhlxyXG5cclxuICAgICAgICB0aGlzLm1pblNjYWxlOyAgICAgICAgICAgICAgICAgICAvL+acgOWwj+WIu+W6puWAvFxyXG4gICAgICAgIHRoaXMubWF4U2NhbGU7ICAgICAgICAgICAgICAgICAgLy/mnIDlpKfliLvluqblgLxcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBbXTsgICAgICAgICAgICAgICAgIC8v5L+d5a2Y5pWw5YC86L205LiK5pi+56S655qE5qCH562+5paH5a2XXHJcbiAgICAgICAgdGhpcy5vcmlnaW5JbmRleCA9IC0xOyAgICAgICAgLy/ljp/ngrnmoIfnrb7lnKhsYWJlbHPmlbDnu4TkuK3nmoTntKLlvJXvvIznlKjkuo7nu5jliLbovbTnur9cclxuICAgICAgICB0aGlzLm9yaWdpblZhbHVlOyAgICAgICAgICAgICAgIC8v5Y6f54K555qE5YC8XHJcbiAgICAgICAgdGhpcy5vcmlnaW5Qb3NpdGlvbjsgICAgICAgICAgIC8v5Y6f54K55ZyoQ2FudmFz5LiK55qE55u45a+55L2N572uXHJcbiAgICAgICAgdGhpcy51bml0VmFsdWVTaXplID0gLTE7ICAgICAgLy/mlbDlgLwx5Zyo6L205LiK5Y2g55So55qE6ZW/5bqmXHJcbiAgICAgICAgdGhpcy5zY2FsZVVuaXQgPSAwOyAgICAgICAgICAgICAgLy/ljZXkvY3liLvluqblgLxcclxuICAgICAgICB0aGlzLnNjYWxlVW5pdFNpemUgPSAwOyAgICAgICAgLy/ljZXkvY3liLvluqblnKjovbTkuIrljaDnlKjnmoTplb/luqZcclxuXHJcbiAgICAgICAgdGhpcy5kZWNpbWFsRGlnaXQ7ICAgICAgICAgICAgICAvL+aVsOWtl+agh+etvuWwj+aVsOS9jeaVsFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXNCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBDaGFydEJhc2UgZnJvbSAnLi4vLi4vYmFzZS9jaGFydC9DaGFydEJhc2UuanMnO1xyXG5pbXBvcnQgVkF4aXNJbmZvQmFzZV9JbiBmcm9tICcuLi8uLi9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9Jbi5qcyc7XHJcbmltcG9ydCBWQXhpc0luZm9CYXNlX091dCBmcm9tICcuLi8uLi9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9PdXQuanMnO1xyXG5cclxuaW1wb3J0IENoYXJ0SW5mb19JbiBmcm9tICcuL2luZm8vQ2hhcnRJbmZvX0luLmpzJztcclxuaW1wb3J0IENoYXJ0SW5mb19PdXQgZnJvbSAnLi9pbmZvL0NoYXJ0SW5mb19PdXQuanMnO1xyXG5pbXBvcnQgQnViYmxlIGZyb20gJy4vcGFydHMvQnViYmxlLmpzJztcclxuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi9wYWludGVyL1BhaW50ZXIuanMnO1xyXG5cclxuaW1wb3J0IE9iamVjdFBvb2wgZnJvbSAnLi4vLi4vc3VwcG9ydC9PYmplY3RQb29sLmpzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9zdXBwb3J0L0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tICcuLi8uLi9zdXBwb3J0L1V0aWxpdHkuanMnO1xyXG5cclxuaW1wb3J0IFRXQWxnb3JpdGhtIGZyb20gJy4uLy4uL3R3ZWVuL1RXQWxnb3JpdGhtLmpzJztcclxuaW1wb3J0IFRXRW5naW5lIGZyb20gJy4uLy4uL3R3ZWVuL1RXRW5naW5lLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIENoYXJ0QmFzZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50RGl2SUQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8v55So5oi36L6T5YWl77yI5Zu+6KGo5b+F5aSH5L+h5oGv77yJXHJcbiAgICAgICAgdGhpcy5jaGFydEluZm9fSW4gPSBuZXcgQ2hhcnRJbmZvX0luKCk7ICAgICAgICAgICAgICAgLy/lm77ooajkv6Hmga/jgILkvovvvJrlm77ooajlkI3np7BcclxuICAgICAgICB0aGlzLnhBeGlzSW5mb19JbiA9IG5ldyBWQXhpc0luZm9CYXNlX0luKCk7ICAgICAgICAgICAvL3jlgLzovbTkv6Hmga9cclxuICAgICAgICB0aGlzLnlBeGlzSW5mb19JbiA9IG5ldyBWQXhpc0luZm9CYXNlX0luKCk7ICAgICAgICAgICAvL3nlgLzovbTkv6Hmga9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9jaGFydEluZm9fT3V0ID0gbmV3IENoYXJ0SW5mb19PdXQoKTsgICAgICAvL+aVsOaNrue7k+aehOS9kyjlrZjlgqjorqHnrpfnu5PmnpzvvIzkvpvlhoXpg6jnlKgpICAgIFxyXG4gICAgICAgIHRoaXMuX3hBeGlzSW5mb19PdXQgPSBuZXcgVkF4aXNJbmZvQmFzZV9PdXQoKTtcclxuICAgICAgICB0aGlzLl95QXhpc0luZm9fT3V0ID0gbmV3IFZBeGlzSW5mb0Jhc2VfT3V0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1BcnJheSA9IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5a2Y5pS+5pWj54K55a+56LGh55qE5LqM57u05pWw57uEXHJcbiAgICAgICAgdGhpcy5faXRlbVBvb2wgPSBudWxsOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mlaPngrnlr7nosaHmsaBcclxuXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lID0gJ2J1YmJsZUNoYXJ0RGl2JzsgICAgLy/moLflvI/lkI1cclxuICAgICAgICB0aGlzLl90aXBEaXZDbGFzc05hbWUgPSAnYnViYmxlQ2hhcnRUaXBEaXYnO1xyXG4gICAgICAgIHRoaXMuX3NlY29uZENvbENsYXNzTmFtZSA9ICdzZWNvbmRDb2wnO1xyXG5cclxuICAgICAgICB0aGlzLl90d0VuZ2luZSA9IG5ldyBUV0VuZ2luZSgpOyAgICAgICAgICAgICAgICAvL+e8k+WKqOWKqOeUu+ebuOWFs1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvL+iuvue9rueUu+WutlxyXG4gICAgICAgIHRoaXMuX3NldFBhaW50ZXIoUGFpbnRlcik7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5L2c5Li65Zu+6KGo5a655Zmo55qEZGl25a+56LGh77yM5bm25aKe5Yqg54m55a6a5qC35byP44CC5rOo5oSP77ya5piv5aKe5Yqg6ICM5LiN5piv5pu/5o2iXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RGl2SUQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+WKqOaAgeeUn+aIkF9jYW52YXPvvIzlubbmt7vliqDliLBET03moJHjgILlkIzml7bojrflj5blhbbkuIrkuIvmlodcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy/liqjmgIHnlJ/miJB0aXDlr7nosaHvvIzmt7vliqDliLBET03moJHvvIzlubbojrflj5bkuYtcclxuICAgICAgICB0aGlzLl90aXBEaXYgPSB0aGlzLl9jcmVhdGVUaXAodGhpcy5fdGlwRGl2Q2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fdGlwRGl2KTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblr7nosaHmsaBcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG5ldyBPYmplY3RQb29sKEJ1YmJsZSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/pqozor4HmlbDmja7lkIjms5XmgKdcclxuICAgICAgICBpZiAodGhpcy5fY2hlY2soKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RDaGFydHNdIEluY29ycmVjdCBjaGFydCBkYXRhICEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ph43orr7lkITnp43nirbmgIHvvIzmlbDmja5cclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG5cclxuICAgICAgICAvL+S4uue7mOWItuWbvuihqO+8jOiuoeeul+WQhOenjeaVsOaNrlxyXG4gICAgICAgIHRoaXMuX2dldEl0ZW1BbmRDb21wdXRlTWluTWF4KCk7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyhDb25zdGFudHMuWF9BWElTLCB0aGlzLnhBeGlzSW5mb19JbiwgdGhpcy5feEF4aXNJbmZvX091dCk7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyhDb25zdGFudHMuWV9BWElTLCB0aGlzLnlBeGlzSW5mb19JbiwgdGhpcy5feUF4aXNJbmZvX091dCk7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbVBvc2l0aW9uQW5kVHdlZW4oKTtcclxuXHJcbiAgICAgICAgLy/lkK/liqjluKflvqrnjq/vvIzlnKjlvqrnjq/lhoXpg6jnu5jliLblm77ooahcclxuICAgICAgICB0aGlzLl9zdGFydFBhaW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfY2hlY2sgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICAvL+ajgOafpe+8miDmlbDmja7mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAodGhpcy5jaGFydEluZm9fSW4uc2VyaWVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3Jlc2V0ICgpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5fY2FudmFzLFxyXG4gICAgICAgICAgICBkaXYgPSB0aGlzLl9wYXJlbnREaXYsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBpdGVtQXJyID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIC8v56e76Zmk6byg5qCH5LqL5Lu255uR5ZCs5ZmoXHJcbiAgICAgICAgdGhpcy5fYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKENvbnN0YW50cy5SRU1PVkUpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruWwuuWvuFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpdi5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblm77kvovmlbDmja7jgIHmlaPngrnlr7nosaHmlbDnu4RcclxuICAgICAgICBpdGVtQXJyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGVuID0gY2hhcnRJbmZvX0luLnNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1BcnJbaV0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyWVGlwXHJcbiAgICAgICAgdGhpcy5faW5pdFRpcCgpO1xyXG5cclxuICAgICAgICAvL+S7juWvueixoeaxoOS4remHiuaUvuabvue7j+S9v+eUqOi/h+eahOaVo+eCueWvueixoVxyXG4gICAgICAgIHRoaXMuX2l0ZW1Qb29sLnJlbGVhc2VBbGwoKTtcclxuXHJcbiAgICAgICAgLy/ph4rmlL7nvJPliqjotYTmupBcclxuICAgICAgICB0aGlzLl90d0VuZ2luZS5yZWxlYXNlQWxsVFdEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5fdHdFbmdpbmUucmVsZWFzZUFsbFRXQWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8v5Y+W5raI5LiK5LiA5qyh57uR5a6a55qE5Yqo55S75Ye95pWwXHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfaW5pdFRpcCAoKSB7XHJcbiAgICAgICAgbGV0IHRpcERpdiA9IHRoaXMuX3RpcERpdixcclxuICAgICAgICAgICAgc2Vjb25kQ29sQ2xhc3NOYW1lID0gdGhpcy5fc2Vjb25kQ29sQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBzY2hlbWEgPSB0aGlzLmNoYXJ0SW5mb19Jbi5zY2hlbWEsXHJcbiAgICAgICAgICAgIHRhYmxlLCByb3csIHRkLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIC8v6ZqQ6JePdGlwXHJcbiAgICAgICAgdGlwRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIC8v5Yig6ZmkVGFibGXlr7nosaHnmoTmiYDmnInooYxcclxuICAgICAgICB0YWJsZSA9IHRpcERpdi5jaGlsZE5vZGVzWzFdO1xyXG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAvL+agueaNruaVsOaNruezu+WIl+W+queOr+eUn+aIkFRhYmxl5a+56LGhXHJcbiAgICAgICAgbGVuID0gc2NoZW1hLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgLy/liJvlu7rooYxcclxuICAgICAgICAgICAgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcblxyXG4gICAgICAgICAgICAvL+WIm+W7uuesrOS4gOWIl++8jOW5tuaPkuWFpeagh+etvlxyXG4gICAgICAgICAgICB0ZCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IHNjaGVtYVtpXTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yib5bu656ys5LqM5YiX77yM5bm26K6+5a6a5qC35byP5ZCNXHJcbiAgICAgICAgICAgIHRkID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgdGQuY2xhc3NOYW1lID0gc2Vjb25kQ29sQ2xhc3NOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldEl0ZW1BbmRDb21wdXRlTWluTWF4ICgpIHtcclxuICAgICAgICBsZXQgY2hhcnRJbmZvX0luID0gdGhpcy5jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19PdXQgPSB0aGlzLl9jaGFydEluZm9fT3V0LFxyXG5cclxuICAgICAgICAgICAgeEF4aXNJbmZvX0luID0gdGhpcy54QXhpc0luZm9fSW4sXHJcbiAgICAgICAgICAgIHhBeGlzSW5mb19PdXQgPSB0aGlzLl94QXhpc0luZm9fT3V0LFxyXG5cclxuICAgICAgICAgICAgeUF4aXNJbmZvX0luID0gdGhpcy55QXhpc0luZm9fSW4sXHJcbiAgICAgICAgICAgIHlBeGlzSW5mb19PdXQgPSB0aGlzLl95QXhpc0luZm9fT3V0LFxyXG5cclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtUG9vbCA9IHRoaXMuX2l0ZW1Qb29sLFxyXG4gICAgICAgICAgICBzZXJpZXMgPSBjaGFydEluZm9fSW4uc2VyaWVzLFxyXG5cclxuICAgICAgICAgICAgaXRlbSwgZGF0YSwgZCxcclxuICAgICAgICAgICAgbnVtLFxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yO1xyXG5cclxuICAgICAgICAvLygxKemBjeWOhuaJgOacieezu+WIl++8jOaJvuWIsOesrOS4gOS4quacieaViOaVsOaNru+8jOS4uuacgOWkp+acgOWwj+i1i+WIneWAvFxyXG4gICAgICAgIGxlbjEgPSBzZXJpZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBvdmVyOlxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgZGF0YSA9IHNlcmllc1tpXS5kYXRhO1xyXG4gICAgICAgICAgICBsZW4yID0gZGF0YS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lj5blvpfmlaPngrnlnZDmoIdcclxuICAgICAgICAgICAgICAgIGQgPSBkYXRhW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRbMF0gIT0gQ29uc3RhbnRzLkRJUlRZICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZFsxXSAhPSBDb25zdGFudHMuRElSVFkgJiZcclxuICAgICAgICAgICAgICAgICAgICBkWzJdICE9IENvbnN0YW50cy5ESVJUWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzSW5mb19PdXQubWluID0geEF4aXNJbmZvX091dC5tYXggPSBkWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzSW5mb19PdXQubWluID0geUF4aXNJbmZvX091dC5tYXggPSBkWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5mb19PdXQubWluID0gY2hhcnRJbmZvX091dC5tYXggPSBkWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrICBvdmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8oMinku47msaDkuK3lj5blh7rpobnnm67lr7nosaHvvIzlkIzml7bmsYLlvpfmnIDlpKfmnIDlsI/lgLxcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZXJpZXNbaV0uZGF0YTtcclxuICAgICAgICAgICAgbGVuMiA9IGRhdGEubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgLy/nlJ/miJDpobnnm67lr7nosaFcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgLy/lj5blvpfmlaPngrnlnZDmoIdcclxuICAgICAgICAgICAgICAgIGQgPSBkYXRhW2pdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5LuO5rGg5Lit6I635Y+W6aG555uu5a+56LGh77yM5Yqg5YWl5Yiw5pWw57uELOW5tumHjeaWsOiuvue9ruWxnuaAp1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1Qb29sLmdldE9iaigpO1xyXG4gICAgICAgICAgICAgICAgaXRlbUFycmF5W2ldLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orr7nva7pobnnm65cclxuICAgICAgICAgICAgICAgIGl0ZW0uc2VyaWVzSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pbmRleCA9IGo7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlWCA9IGRbMF07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlWSA9IGRbMV07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlUmFkaXVzID0gZFsyXTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGlydHlGbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mr5TovoN46L205pyA5YC8XHJcbiAgICAgICAgICAgICAgICBudW0gPSBpdGVtLnZhbHVlWDtcclxuICAgICAgICAgICAgICAgIGlmIChudW0gIT0gQ29uc3RhbnRzLkRJUlRZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA8IHhBeGlzSW5mb19PdXQubWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGlzSW5mb19PdXQubWluID0gbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtID4geEF4aXNJbmZvX091dC5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeEF4aXNJbmZvX091dC5tYXggPSBudW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRpcnR5RmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mr5TovoN56L205pyA5YC8XHJcbiAgICAgICAgICAgICAgICBudW0gPSBpdGVtLnZhbHVlWTtcclxuICAgICAgICAgICAgICAgIGlmIChudW0gIT0gQ29uc3RhbnRzLkRJUlRZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA8IHlBeGlzSW5mb19PdXQubWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGlzSW5mb19PdXQubWluID0gbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtID4geUF4aXNJbmZvX091dC5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeUF4aXNJbmZvX091dC5tYXggPSBudW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRpcnR5RmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mr5TovoPlnIbljYrlvoTnmoTmnIDlgLxcclxuICAgICAgICAgICAgICAgIG51bSA9IGl0ZW0udmFsdWVSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtICE9IENvbnN0YW50cy5ESVJUWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPCBjaGFydEluZm9fT3V0Lm1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydEluZm9fT3V0Lm1pbiA9IG51bTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bSA+IGNoYXJ0SW5mb19PdXQubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5mb19PdXQubWF4ID0gbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXJ0eUZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8oMynliKTmlq3nlKjmiLfmmK/lkKbmjIflrprkuobmnIDlpKfmnIDlsI/lgLzvvIzlubbmja7mraTosIPmlbTmnIDlgLxcclxuICAgICAgICBpZiAoeEF4aXNJbmZvX0luLm1pbiAhPSBOdW1iZXIuTUlOX1ZBTFVFICYmIHhBeGlzSW5mb19Jbi5taW4gPCB4QXhpc0luZm9fT3V0Lm1pbikge1xyXG4gICAgICAgICAgICB4QXhpc0luZm9fT3V0Lm1pbiA9IHhBeGlzSW5mb19Jbi5taW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4QXhpc0luZm9fSW4ubWF4ICE9IE51bWJlci5NQVhfVkFMVUUgJiYgeEF4aXNJbmZvX0luLm1heCA+IHhBeGlzSW5mb19PdXQubWF4KSB7XHJcbiAgICAgICAgICAgIHhBeGlzSW5mb19PdXQubWF4ID0geEF4aXNJbmZvX0luLm1heDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5QXhpc0luZm9fSW4ubWluICE9IE51bWJlci5NSU5fVkFMVUUgJiYgeUF4aXNJbmZvX0luLm1pbiA8IHlBeGlzSW5mb19PdXQubWluKSB7XHJcbiAgICAgICAgICAgIHlBeGlzSW5mb19PdXQubWluID0geUF4aXNJbmZvX0luLm1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHlBeGlzSW5mb19Jbi5tYXggIT0gTnVtYmVyLk1BWF9WQUxVRSAmJiB5QXhpc0luZm9fSW4ubWF4ID4geUF4aXNJbmZvX091dC5tYXgpIHtcclxuICAgICAgICAgICAgeUF4aXNJbmZvX091dC5tYXggPSB5QXhpc0luZm9fSW4ubWF4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8oNCnliKTmlq3mmK/lkKblnKjlgLzovbTkuIrmianlsZUgMO+8jOW5tuaNruatpOiwg+aVtOacgOWAvFxyXG4gICAgICAgIGlmICh4QXhpc0luZm9fSW4uemVyb0V4dGVuZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh4QXhpc0luZm9fT3V0Lm1pbiA+IDAgJiYgeEF4aXNJbmZvX091dC5tYXggPiAwKSAgICAgICAgICAgLy/lkIzkuLrmraPmlbBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeEF4aXNJbmZvX091dC5taW4gPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhBeGlzSW5mb19PdXQubWluIDwgMCAmJiB4QXhpc0luZm9fT3V0Lm1heCA8IDApIHsgICAgIC8v5ZCM5Li66LSf5pWwXHJcbiAgICAgICAgICAgICAgICB4QXhpc0luZm9fT3V0Lm1heCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5QXhpc0luZm9fSW4uemVyb0V4dGVuZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh5QXhpc0luZm9fT3V0Lm1pbiA+IDAgJiYgeUF4aXNJbmZvX091dC5tYXggPiAwKSAgICAgICAgICAgLy/lkIzkuLrmraPmlbBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeUF4aXNJbmZvX091dC5taW4gPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHlBeGlzSW5mb19PdXQubWluIDwgMCAmJiB5QXhpc0luZm9fT3V0Lm1heCA8IDApIHsgICAgIC8v5ZCM5Li66LSf5pWwXHJcbiAgICAgICAgICAgICAgICB5QXhpc0luZm9fT3V0Lm1heCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDUp6K6h566X5Y2V5L2N5pWw5YC855qE6ZW/5bqm77yM5L6b5q2k5ZCO55SoXHJcbiAgICAgICAgY2hhcnRJbmZvX091dC51bml0VmFsdWVTaXplID0gKGNoYXJ0SW5mb19Jbi5tYXhSYWRpdXMgLSBjaGFydEluZm9fSW4ubWluUmFkaXVzKSAvIChjaGFydEluZm9fT3V0Lm1heCAtIGNoYXJ0SW5mb19PdXQubWluKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9jb21wdXRlVmFsdWVBeGlzT3RoZXJJbmZvIChheGlzVHlwZSwgdkF4aXNJbmZvX0luLCB2QXhpc0luZm9fT3V0KSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NhbnZhcyxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCxcclxuICAgICAgICAgICAgYXJyLFxyXG4gICAgICAgICAgICB3LCBoLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+agh+etvumXtOmalFxyXG4gICAgICAgIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0ID0gVXRpbGl0eS5nZXRTY2FsZVVuaXQodkF4aXNJbmZvX091dC5taW4sIHZBeGlzSW5mb19PdXQubWF4LCB2QXhpc0luZm9fSW4ubGFiZWxNYXhDb3VudCk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5qiq6L205qCH562+5bCP5pWw5L2N5pWwXHJcbiAgICAgICAgYXJyID0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXQudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCA9IGFyclsxXS5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5kZWNpbWFsRGlnaXQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v6K6h566X5pyA5bCP5Yi75bqmKOWQjOaXtuS4uuacgOWkp+WIu+W6puiuvuWIneWAvClcclxuICAgICAgICB2QXhpc0luZm9fT3V0Lm1pblNjYWxlID0gdkF4aXNJbmZvX091dC5tYXhTY2FsZSA9IE1hdGguZmxvb3IodkF4aXNJbmZvX091dC5taW4gLyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCkgKiB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdDtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmnIDlpKfliLvluqbvvIzlkIzml7borrDlvZXljp/ngrnnmoTkvY3nva5cclxuICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID0gLTE7ICAgICAgICAvL+WIneWAvFxyXG4gICAgICAgIGZvciAoaSA9IDA7IDE7IGkrKykge1xyXG4gICAgICAgICAgICBzY2FsZVVuaXQgPSB2QXhpc0luZm9fT3V0Lm1pblNjYWxlICsgdkF4aXNJbmZvX091dC5zY2FsZVVuaXQgKiBpO1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuaYrzDliLvluqbvvIzlpoLmnpzmmK/liJnorrDlvZXkuYtcclxuICAgICAgICAgICAgaWYgKHNjYWxlVW5pdCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuacgOWkp+WIu+W6pu+8jOaYr+WImemAgOWHuuW+queOr1xyXG4gICAgICAgICAgICBpZiAoc2NhbGVVbml0ID49IHZBeGlzSW5mb19PdXQubWF4KSB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm1heFNjYWxlID0gc2NhbGVVbml0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+e7p+e7reiuoeeul+WOn+eCueeahOS9jee9rijljp/ngrnlgLzkuI3kuIDlrprmmK8wKVxyXG4gICAgICAgIC8v5Yik5pat5Y6f54K55pWw57uE57Si5byV5piv5ZCm5Li65Yid5YC8XHJcbiAgICAgICAgLy/lpoLmnpzkuLrliJ3lgLzvvIzor7TmmI7liY3kuIDmraXpqqTlubbmsqHmnInlvpflh7rljp/ngrnnu5PmnpzvvIzliJnnu6fnu63orqHnrpdcclxuICAgICAgICBpZiAodkF4aXNJbmZvX091dC5vcmlnaW5JbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICBpZiAodkF4aXNJbmZvX091dC5taW5TY2FsZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luVmFsdWUgPSB2QXhpc0luZm9fT3V0Lm1pblNjYWxlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZBeGlzSW5mb19PdXQubWF4U2NhbGUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5JbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlID0gdkF4aXNJbmZvX091dC5tYXhTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/orqHnrpfljZXkvY3mlbDlgLzlnKjovbTkuIrljaDnlKjnmoTniannkIblsLrlr7ggLyDnm7jpgrvmoIfnrb7kuYvpl7TnmoTniannkIbot53nprsgLyDljp/ngrlcclxuICAgICAgICB3ID0gY2FudmFzLndpZHRoIC0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0IC0gY2hhcnRJbmZvX0luLmJvZHlSaWdodDtcclxuICAgICAgICBoID0gY2FudmFzLmhlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5VG9wIC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b207XHJcblxyXG4gICAgICAgIGlmIChheGlzVHlwZSA9PSBDb25zdGFudHMuWF9BWElTKSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSA9IHcgLyAodkF4aXNJbmZvX091dC5tYXhTY2FsZSAtIHZBeGlzSW5mb19PdXQubWluU2NhbGUpO1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUgPSB2QXhpc0luZm9fT3V0LnVuaXRWYWx1ZVNpemUgKiB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdDtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbiA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCArIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSAqIHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplID0gaCAvICh2QXhpc0luZm9fT3V0Lm1heFNjYWxlIC0gdkF4aXNJbmZvX091dC5taW5TY2FsZSk7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSA9IHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSAqIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0O1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpblBvc2l0aW9uID0gY2FudmFzLmhlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tIC0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplICogdkF4aXNJbmZvX091dC5vcmlnaW5JbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc2V0SXRlbVBvc2l0aW9uQW5kVHdlZW4gKCkge1xyXG4gICAgICAgIGxldCBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY2hhcnRJbmZvX091dCA9IHRoaXMuX2NoYXJ0SW5mb19PdXQsXHJcblxyXG4gICAgICAgICAgICB4QXhpc0luZm9fT3V0ID0gdGhpcy5feEF4aXNJbmZvX091dCxcclxuICAgICAgICAgICAgeUF4aXNJbmZvX091dCA9IHRoaXMuX3lBeGlzSW5mb19PdXQsXHJcblxyXG4gICAgICAgICAgICBpdGVtQXJyID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG5cclxuICAgICAgICAgICAgdHdFbmdpbmUgPSB0aGlzLl90d0VuZ2luZSxcclxuICAgICAgICAgICAgdHdlZW5DYWxsQmFjayA9IHRoaXMuX3R3ZWVuQ2FsbEJhY2ssXHJcbiAgICAgICAgICAgIGZyb20sIHRvLCB0d0RhdGEsIHR3QWN0aW9uLFxyXG4gICAgICAgICAgICB0d0RhdGFBcnIgPSBbXSxcclxuXHJcbiAgICAgICAgICAgIG9yaWdpblBvc2l0aW9uWCA9IHhBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24sXHJcbiAgICAgICAgICAgIG9yaWdpblBvc2l0aW9uWSA9IHlBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24sXHJcblxyXG4gICAgICAgICAgICBvcmlnaW5WYWx1ZVggPSB4QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlLFxyXG4gICAgICAgICAgICBvcmlnaW5WYWx1ZVkgPSB5QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlLFxyXG5cclxuICAgICAgICAgICAgdW5pdFZhbHVlU2l6ZVggPSB4QXhpc0luZm9fT3V0LnVuaXRWYWx1ZVNpemUsXHJcbiAgICAgICAgICAgIHVuaXRWYWx1ZVNpemVZID0geUF4aXNJbmZvX091dC51bml0VmFsdWVTaXplLFxyXG5cclxuICAgICAgICAgICAgbWluUmFkaXVzID0gY2hhcnRJbmZvX0luLm1pblJhZGl1cyxcclxuICAgICAgICAgICAgdW5pdFZhbHVlU2l6ZVJhZGl1cyA9IGNoYXJ0SW5mb19PdXQudW5pdFZhbHVlU2l6ZSxcclxuICAgICAgICAgICAgbWluVmFsdWVSYWRpdXMgPSBjaGFydEluZm9fT3V0Lm1pbixcclxuXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMjtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/ns7vliJdcclxuICAgICAgICBsZW4xID0gaXRlbUFyci5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjE7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIgPSBpdGVtQXJyW2ldO1xyXG4gICAgICAgICAgICBsZW4yID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8v5b6q546v6aG555uuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+W5b6X6aG555uu5a+56LGhXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHkgPT0gdHJ1ZSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orr7nva7lnZDmoIdcclxuICAgICAgICAgICAgICAgIGl0ZW0ueCA9IG9yaWdpblBvc2l0aW9uWCArIHVuaXRWYWx1ZVNpemVYICogKGl0ZW0udmFsdWVYIC0gb3JpZ2luVmFsdWVYKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ueSA9IG9yaWdpblBvc2l0aW9uWSAtIHVuaXRWYWx1ZVNpemVZICogKGl0ZW0udmFsdWVZIC0gb3JpZ2luVmFsdWVZKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuvue9rue8k+WKqOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgZnJvbSA9IFswXTtcclxuICAgICAgICAgICAgICAgIHRvID0gW21pblJhZGl1cyArIHVuaXRWYWx1ZVNpemVSYWRpdXMgKiAoaXRlbS52YWx1ZVJhZGl1cyAtIG1pblZhbHVlUmFkaXVzKV07XHJcblxyXG4gICAgICAgICAgICAgICAgdHdEYXRhID0gdHdFbmdpbmUuZ2V0VFdEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0d0RhdGEuc2V0RGF0YShpdGVtLCBmcm9tLCB0bywgdHdlZW5DYWxsQmFjayk7XHJcbiAgICAgICAgICAgICAgICB0d0RhdGFBcnIucHVzaCh0d0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0d0FjdGlvbiA9IHR3RW5naW5lLmdldFRXQWN0aW9uKCk7XHJcbiAgICAgICAgdHdBY3Rpb24uc2V0RGF0YSh0d0RhdGFBcnIsIFRXQWxnb3JpdGhtLkJvdW5jZS5lYXNlT3V0LCAxMDAwKTtcclxuXHJcbiAgICAgICAgdHdFbmdpbmUuc2V0Rmlyc3RUV0FjdGlvbih0d0FjdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyIChjb21tYW5kKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NhbnZhcyxcclxuXHJcbiAgICAgICAgICAgIHRpcCA9IHRoaXMuX3RpcERpdixcclxuICAgICAgICAgICAgdGFibGUsIHJvdywgcCxcclxuXHJcbiAgICAgICAgICAgIHNlcmllcyA9IHRoaXMuY2hhcnRJbmZvX0luLnNlcmllcyxcclxuICAgICAgICAgICAgc2VyLFxyXG5cclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG5cclxuICAgICAgICAgICAgcG9zaXRpb24gPSB7IHg6IC0xLCB5OiAtMSB9LFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICByZWN0LCAgICAgICAvL0NhbnZhc+WMheWbtOebkuebuOWFs1xyXG5cclxuICAgICAgICAgICAgZm91bmRGbGcgPSBmYWxzZSxcclxuICAgICAgICAgICAgYXJyLFxyXG5cclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMixcclxuICAgICAgICAgICAgbnVtLFxyXG5cclxuICAgICAgICAgICAgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb01vdXNlQ2xpY2sgKGUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bpvKDmoIfnm7jlr7nkuo5DYW52YXPnmoTkvY3nva5cclxuICAgICAgICAgICAgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgVXRpbGl0eS53aW5kb3dUb0NhbnZhcyhyZWN0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICByZWN0LnRvcCxcclxuICAgICAgICAgICAgICAgIHJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgICAgICByZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL+aMieeFp+aVo+eCueaYvuekuueahOmAhuW6jyzmib7liLDpvKDmoIfkvY3kuo7lk6rkuKrlr7nosaHkuYvkuIpcclxuICAgICAgICAgICAgZm91bmRGbGcgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGVuMSA9IGl0ZW1BcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBvdXRGb3I6XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGxlbjEgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgYXJyID0gaXRlbUFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgbGVuMiA9IGFyci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqID0gbGVuMiAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGFycltqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKTmlq3pvKDmoIfkvY3kuo7lk6rkuKrlr7nosaHkuYvkuIpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc1BvaW50SW5CdWJibGUocG9zaXRpb24ueCwgcG9zaXRpb24ueSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEZsZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIG91dEZvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5Yik5pat6byg5qCH5L2N5LqO5p+Q5Liq5a+56LGh5LmL5LiK77yM5aaC5p6c5LiN5piv5YiZ6ZqQ6JePdGlw77yM54S25ZCO6YCA5Ye6XHJcbiAgICAgICAgICAgIGlmIChmb3VuZEZsZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5pi+56S6dGlwXHJcbiAgICAgICAgICAgIHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgIC8v5pu05paw57O75YiX5ZCN56ewICAgICAgICBcclxuICAgICAgICAgICAgc2VyID0gc2VyaWVzW2l0ZW0uc2VyaWVzSW5kZXhdO1xyXG4gICAgICAgICAgICBwID0gdGlwLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0gc2VyLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAvL+abtOaWsOaVsOaNruezu+WIl1xyXG4gICAgICAgICAgICB0YWJsZSA9IHRpcC5jaGlsZE5vZGVzWzFdO1xyXG5cclxuICAgICAgICAgICAgZGF0YSA9IHNlci5kYXRhW2l0ZW0uaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUucm93c1tpXS5jZWxsc1sxXS5pbm5lclRleHQgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+enu+WKqHRpcFxyXG4gICAgICAgICAgICAvL+iuvuWumnRpcOeahFjlnZDmoIdcclxuICAgICAgICAgICAgbnVtID0gdGlwLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCArIG51bSA+IHJlY3Qud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS5sZWZ0ID0gKHBvc2l0aW9uLnggLSBudW0pICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ueCArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v6K6+5a6adGlw55qEWeWdkOagh1xyXG4gICAgICAgICAgICBudW0gPSB0aXAub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueSArIG51bSA+IHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aXAuc3R5bGUudG9wID0gKHBvc2l0aW9uLnkgLSBudW0pICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS50b3AgPSBwb3NpdGlvbi55ICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5omn6KGMXHJcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gQ29uc3RhbnRzLkFERCAmJiBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9Nb3VzZUNsaWNrKTtcclxuICAgICAgICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBDb25zdGFudHMuUkVNT1ZFICYmIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvTW91c2VDbGljayk7XHJcbiAgICAgICAgICAgIG1lLmV2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9zdGFydFBhaW50ICgpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYWludCAoKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWUuX3N0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDE6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e7mOWItuWbvuihqOW5tuS/neWtmOe7mOWbvuihqOmdolxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl90d0VuZ2luZS5zdGFydCgpOyAgICAgICAgICAgICAgICAgICAgICAgIC8v5ZCv5Yqo57yT5Yqo77yM5LuO5LiL5LiA5bin5byA5aeL57yT5YqoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDI6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v57uY5Yi257yT5Yqo5pWI5p6cXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICDlpoLmnpznvJPliqjmsqHmnInnu5PmnZ/vvIzlsLHnu5jliLZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIOWPjeS5i++8jOiuvue9rueKtuaAge+8jOWcqOS4i+S4gOWBnOatoue7mOWItlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5fdHdFbmdpbmUubmV4dEZyYW1lKCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fcGFpbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3R3RW5naW5lLnN0b3AoKTsgICAgICAvL+WBnOatoue8k+WKqFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAzOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+a3u+WKoOS6i+S7tuebkeWQrOWZqFxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLkFERCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v6K6+572u54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVE9QO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W+queOr+iwg+eUqOiHquW3se+8jOi/m+ihjOe7mOeUu1xyXG4gICAgICAgICAgICBpZiAobWUuX3N0YXR1cyAhPSBTdGF0dXMuU1RPUCkge1xyXG4gICAgICAgICAgICAgICAgbWUuX2FuaW1hdGlvbkZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZShwYWludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6+572u5Yid5aeL54q25oCB77yM5byA5aeL57uY5Yi2XHJcbiAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMTtcclxuICAgICAgICBwYWludCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICog57yT5Yqo5pWI5p6cXHJcbiAgICAgKi9cclxuICAgIF90d2VlbkNhbGxCYWNrICh0YXJnZXQsIHJlc3VsdEFycmF5KSB7XHJcbiAgICAgICAgdGFyZ2V0LnJhZGl1cyA9IHJlc3VsdEFycmF5WzBdO1xyXG4gICAgfVxyXG5cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFydC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBBeGlzQ2hhcnRJbmZvQmFzZV9JbiBmcm9tICcuLi8uLi8uLi9iYXNlL2luZm8vQXhpc0NoYXJ0SW5mb0Jhc2VfSW4uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRJbmZvX0luIGV4dGVuZHMgQXhpc0NoYXJ0SW5mb0Jhc2VfSW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLm1pblJhZGl1cyA9IDU7ICAgICAgICAgIC8v5rCU5rOh5pyA5bCP5Y2K5b6EXHJcbiAgICAgICAgdGhpcy5tYXhSYWRpdXMgPSAxMDsgICAgICAgLy/msJTms6HmnIDlpKfljYrlvoRcclxuICAgICAgICB0aGlzLnNjaGVtYSA9IFtdOyAgICAgICAgICAgICAgLy/mlbDmja7ljZXlhYPku6PooajnmoTlkKvkuYnjgILmr5TlpoLvvJogWyflubTpvoQnLCfouqvpq5gnLCfkvZPph40nXSBcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRJbmZvX091dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5taW4gPSAwOyAgICAgLy/mlbDmja7ns7vliJfkuK3nlKjkuo7orqHnrpfmsJTms6HljYrlvoTnmoTmnIDlsI/mlbDlgLxcclxuICAgICAgICB0aGlzLm1heCA9IDA7ICAgICAvL+aVsOaNruezu+WIl+S4reeUqOS6juiuoeeul+awlOazoeWNiuW+hOeahOacgOWkp+aVsOWAvFxyXG4gICAgICAgIHRoaXMudW5pdFZhbHVlU2l6ZSA9IDA7ICAgIC8v5pWw5YC85aKe5YqgMeaNoueul+aIkOawlOazoeWNiuW+hOWinuWKoOeahOmVv+W6plxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvU3RhdHVzLmpzJztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L1N0eWxlcy5qcyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L1V0aWxpdHkuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vUGFpbnRlcuS4reaXoOWFrOacieaIkOWRmOWPmOmHj1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0OyAgICAgICAgICAgICAgICAgICAgLy/lm77ooajlkITnsbvmlbDmja4gXHJcbiAgICAgICAgdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eDsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2U7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luOyAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuICAgICAgICB0aGlzLl94QXhpc0luZm9fSW47XHJcbiAgICAgICAgdGhpcy5feEF4aXNJbmZvX091dDsgICAgICAgICAgICAvL+aVsOWAvOi9tOi+k+WFpeOAgei+k+WHuuaVsOaNrlxyXG4gICAgICAgIHRoaXMuX3lBeGlzSW5mb19JbjtcclxuICAgICAgICB0aGlzLl95QXhpc0luZm9fT3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtQXJyYXk7ICAgICAgICAgICAgICAgIC8v5a2Y5YKo5pWj54K555qE5pWw57uEXHJcblxyXG4gICAgICAgIHRoaXMuX3hBeGlzTGFiZWxDb3VudDsgICAgICAgICAgLy/lgLzovbTmlbDlrZfmoIfnrb7kuKrmlbBcclxuICAgICAgICB0aGlzLl95QXhpc0xhYmVsQ291bnQ7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXRDaGFydCAoY2hhcnQpIHtcclxuICAgICAgICB0aGlzLl9jaGFydCA9IGNoYXJ0O1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNoYXJ0Ll9jYW52YXM7XHJcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7O1xyXG5cclxuICAgICAgICB0aGlzLl9jaGFydEluZm9fSW4gPSBjaGFydC5jaGFydEluZm9fSW47XHJcbiAgICAgICAgdGhpcy5feEF4aXNJbmZvX0luID0gY2hhcnQueEF4aXNJbmZvX0luO1xyXG4gICAgICAgIHRoaXMuX3hBeGlzSW5mb19PdXQgPSBjaGFydC5feEF4aXNJbmZvX091dDtcclxuICAgICAgICB0aGlzLl95QXhpc0luZm9fSW4gPSBjaGFydC55QXhpc0luZm9fSW47XHJcbiAgICAgICAgdGhpcy5feUF4aXNJbmZvX091dCA9IGNoYXJ0Ll95QXhpc0luZm9fT3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtQXJyYXkgPSBjaGFydC5faXRlbUFycmF5O1xyXG5cclxuICAgICAgICAvL+iuoeeul+S+m+atpOWQjuS9v+eUqFxyXG4gICAgICAgIC8v5YC86L205qCH562+5Liq5pWwXHJcbiAgICAgICAgdGhpcy5feEF4aXNMYWJlbENvdW50ID0gTWF0aC5mbG9vcigodGhpcy5feEF4aXNJbmZvX091dC5tYXhTY2FsZSAtIHRoaXMuX3hBeGlzSW5mb19PdXQubWluU2NhbGUpIC8gdGhpcy5feEF4aXNJbmZvX091dC5zY2FsZVVuaXQpICsgMTtcclxuICAgICAgICB0aGlzLl95QXhpc0xhYmVsQ291bnQgPSBNYXRoLmZsb29yKCh0aGlzLl95QXhpc0luZm9fT3V0Lm1heFNjYWxlIC0gdGhpcy5feUF4aXNJbmZvX091dC5taW5TY2FsZSkgLyB0aGlzLl95QXhpc0luZm9fT3V0LnNjYWxlVW5pdCkgKyAxO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwYWludCAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY2hhcnQuX3N0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMTogICAgICAgICAvL+e7mOWItuWbvuihqOW5tue8k+WtmENhbnZhc+e7mOWbvuihqOmdolxyXG5cclxuICAgICAgICAgICAgICAgIC8v5riF56m655S75biDXHJcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5ZyoX2N0eOS4iue7mOWItuWbvuihqOWbuuWumueahOWGheWuuVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRUaXRsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRMZWdlbmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50R3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRBeGlzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludEF4aXNOYW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nvJPlrZjmraTml7bnmoRfY3R457uY5Zu+6KGo6Z2i77yI5YWo5bC65a+477yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNTdXJmYWNlID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDI6ICAgICAgICAgLy/nu5jliLbnvJPliqjmlYjmnpxcclxuXHJcbiAgICAgICAgICAgICAgICAvL+aBouWkjXRoaXMuX2N0eOeahOe7mOWbvuihqOmdolxyXG4gICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLl9jYW52YXNTdXJmYWNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7mOWItuaVo+eCuVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRCdWJibGVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIF9wYWludFRpdGxlICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIGN0eC5mb250ID0gU3R5bGVzLlRJVExFX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0xFRlQ7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9UT1A7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGNoYXJ0SW5mb19Jbi50aXRsZSwgY2hhcnRJbmZvX0luLnRpdGxlTGVmdCwgY2hhcnRJbmZvX0luLnRpdGxlVG9wKTtcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRMZWdlbmQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgc2VyaWVzID0gY2hhcnRJbmZvX0luLnNlcmllcyxcclxuICAgICAgICAgICAgY29sb3JzID0gY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIHcsIGgsXHJcbiAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgIGksIGxlbixcclxuICAgICAgICAgICAgc3RyO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruaWh+Wtl+agt+W8j1xyXG4gICAgICAgIGN0eC5mb250ID0gU3R5bGVzLkxFR0VORF9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9MRUZUO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfVE9QO1xyXG5cclxuICAgICAgICAvL+iOt+WPluaWh+Wtl+mrmOW6plxyXG4gICAgICAgIGggPSBVdGlsaXR5LmdldFRleHRIZWlnaHQoY3R4KTtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmnIDlkI7kuIDkuKrlm77kvovmloflrZfnmoTnu5PmnZ/ngrlcclxuICAgICAgICB4ID0gY2FudmFzV2lkdGggLSBjaGFydEluZm9fSW4ubGVnZW5kUmlnaHQ7XHJcblxyXG4gICAgICAgIC8v6YCG5bqP5L6d5qyh57uY5Yi25Zu+5L6L5paH5a2X5ZKM6Imy5Z2XXHJcbiAgICAgICAgbGVuID0gc2VyaWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAvL+WbvuS+i+aVsOaNrlxyXG4gICAgICAgICAgICBzdHIgPSBzZXJpZXNbaV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u5Zu+5L6L5paH5a2X5a695bqm6K6h566X5paH5a2X6LW35aeL5L2N572uXHJcbiAgICAgICAgICAgIHcgPSBjdHgubWVhc3VyZVRleHQoc3RyKS53aWR0aDtcclxuICAgICAgICAgICAgeCAtPSB3O1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbmloflrZdcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFN0eWxlcy5GT05UX0ZJTExfQ09MT1I7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChzdHIsIHgsIGNoYXJ0SW5mb19Jbi5sZWdlbmRUb3ApO1xyXG5cclxuICAgICAgICAgICAgLy/orqHnrpfoibLlnZfkvY3nva5cclxuICAgICAgICAgICAgeCAtPSBTdHlsZXMuTEVHRU5EX1NIQVBFX1RFWFRfR0FQICsgaDtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi26Imy5Z2XXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh4LCBjaGFydEluZm9fSW4ubGVnZW5kVG9wLCBoLCBoKTtcclxuXHJcbiAgICAgICAgICAgIC8v6Ze06ZqUXHJcbiAgICAgICAgICAgIHggLT0gU3R5bGVzLkxFR0VORF9HQVA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludEdyaWQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgeFNjYWxlVW5pdFNpemUgPSB0aGlzLl94QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUsXHJcbiAgICAgICAgICAgIHlTY2FsZVVuaXRTaXplID0gdGhpcy5feUF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplLFxyXG4gICAgICAgICAgICB4QXhpc0xhYmVsQ291bnQgPSB0aGlzLl94QXhpc0xhYmVsQ291bnQsXHJcbiAgICAgICAgICAgIHlBeGlzTGFiZWxDb3VudCA9IHRoaXMuX3lBeGlzTGFiZWxDb3VudCxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHgxLCB4MiwgeTEsIHkyLFxyXG4gICAgICAgICAgICBudW0sXHJcbiAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5qC35byPXHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IFN0eWxlcy5HUklEX0xJTkVfV0lEVEg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gU3R5bGVzLkdSSURfTElORV9DT0xPUjtcclxuICAgICAgICBjdHguc2V0TGluZURhc2goU3R5bGVzLkdSSURfTElORV9EQVNIKTtcclxuXHJcbiAgICAgICAgLy/nu5jliLbmqKrlkJHomZrnur9cclxuICAgICAgICB4MSA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdDtcclxuICAgICAgICB4MiA9IGNhbnZhc1dpZHRoIC0gY2hhcnRJbmZvX0luLmJvZHlSaWdodDtcclxuICAgICAgICBudW0gPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHlBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHkxID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbihudW0gLSB5U2NhbGVVbml0U2l6ZSAqIGkpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/nu5jliLbnurXlkJHomZrnur9cclxuICAgICAgICB5MSA9IGNoYXJ0SW5mb19Jbi5ib2R5VG9wO1xyXG4gICAgICAgIHkyID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b207XHJcbiAgICAgICAgbnVtID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0O1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeEF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgeDEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG51bSArIHhTY2FsZVVuaXRTaXplICogaSk7XHJcblxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludEF4aXMgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuXHJcbiAgICAgICAgICAgIHhTY2FsZVVuaXRTaXplID0gdGhpcy5feEF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplLFxyXG4gICAgICAgICAgICB5U2NhbGVVbml0U2l6ZSA9IHRoaXMuX3lBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSxcclxuXHJcbiAgICAgICAgICAgIHhPcmlnaW5Qb3NpdGlvbiA9IHRoaXMuX3hBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHlPcmlnaW5Qb3NpdGlvbiA9IHRoaXMuX3lBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24sXHJcblxyXG4gICAgICAgICAgICB4QXhpc0xhYmVsQ291bnQgPSB0aGlzLl94QXhpc0xhYmVsQ291bnQsXHJcbiAgICAgICAgICAgIHlBeGlzTGFiZWxDb3VudCA9IHRoaXMuX3lBeGlzTGFiZWxDb3VudCxcclxuXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB4MSwgeDIsIHkxLCB5MixcclxuICAgICAgICAgICAgb2Zmc2V0WCwgb2Zmc2V0WSxcclxuICAgICAgICAgICAgYW5nbGUsXHJcbiAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8vKDEp6K6+572u5qC35byPXHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IFN0eWxlcy5BWElTX0xJTkVfV0lEVEg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gU3R5bGVzLkFYSVNfTElORV9DT0xPUjtcclxuXHJcbiAgICAgICAgLy8oMinnu5jliLbmqKrovbRcclxuICAgICAgICB4MSA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCAtIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOyAgICAgICAgICAgICAgICAgICAgLy/mqKrlkJHotbfngrlcclxuICAgICAgICB4MiA9IGNhbnZhc1dpZHRoIC0gY2hhcnRJbmZvX0luLmJvZHlSaWdodCArIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOyAgICAvL+aoquWQkee7iOeCuVxyXG4gICAgICAgIHkxID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbih5T3JpZ2luUG9zaXRpb24pOyAgICAgICAgICAgICAgICAgICAvL+e6teWQkeS9jee9rlxyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vKDMp57uY5Yi25qiq6L205Yi75bqmXHJcbiAgICAgICAgeTIgPSB5MSArIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFO1xyXG4gICAgICAgIG9mZnNldFggPSBjaGFydEluZm9fSW4uYm9keUxlZnQ7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB4QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB4MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24ob2Zmc2V0WCArIHhTY2FsZVVuaXRTaXplICogaSk7XHJcblxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyg0Kee7mOWItue6tei9tFxyXG4gICAgICAgIHkxID0gY2hhcnRJbmZvX0luLmJvZHlUb3AgLSBTdHlsZXMuQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRTsgICAgICAgICAgICAgICAgICAgICAgLy/nurXlkJHotbfngrlcclxuICAgICAgICB5MiA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tICsgU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7ICAgLy/nurXlkJHnu4jngrlcclxuICAgICAgICB4MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24oeE9yaWdpblBvc2l0aW9uKTsgICAgICAgICAgICAgICAgICAgIC8v5qiq5ZCR5L2N572uXHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8oNSnnu5jliLbnurXovbTliLvluqZcclxuICAgICAgICB4MiA9IHgxIC0gU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7XHJcbiAgICAgICAgb2Zmc2V0WSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeUF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgeTEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG9mZnNldFkgLSB5U2NhbGVVbml0U2l6ZSAqIGkpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRMYWJlbCAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luLFxyXG5cclxuICAgICAgICAgICAgeExhYmVsUm90YXRlID0gdGhpcy5feEF4aXNJbmZvX0luLmxhYmVsUm90YXRlLFxyXG4gICAgICAgICAgICB5TGFiZWxSb3RhdGUgPSB0aGlzLl95QXhpc0luZm9fSW4ubGFiZWxSb3RhdGUsXHJcblxyXG4gICAgICAgICAgICB4TWluU2NhbGUgPSB0aGlzLl94QXhpc0luZm9fT3V0Lm1pblNjYWxlLFxyXG4gICAgICAgICAgICB5TWluU2NhbGUgPSB0aGlzLl95QXhpc0luZm9fT3V0Lm1pblNjYWxlLFxyXG5cclxuICAgICAgICAgICAgeFNjYWxlVW5pdCA9IHRoaXMuX3hBeGlzSW5mb19PdXQuc2NhbGVVbml0LFxyXG4gICAgICAgICAgICB5U2NhbGVVbml0ID0gdGhpcy5feUF4aXNJbmZvX091dC5zY2FsZVVuaXQsXHJcblxyXG4gICAgICAgICAgICB4U2NhbGVVbml0U2l6ZSA9IHRoaXMuX3hBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSxcclxuICAgICAgICAgICAgeVNjYWxlVW5pdFNpemUgPSB0aGlzLl95QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUsXHJcblxyXG4gICAgICAgICAgICB4RGVjaW1hbERpZ2l0ID0gdGhpcy5feEF4aXNJbmZvX091dC5kZWNpbWFsRGlnaXQsXHJcbiAgICAgICAgICAgIHlEZWNpbWFsRGlnaXQgPSB0aGlzLl95QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCxcclxuXHJcbiAgICAgICAgICAgIHhBeGlzTGFiZWxDb3VudCA9IHRoaXMuX3hBeGlzTGFiZWxDb3VudCxcclxuICAgICAgICAgICAgeUF4aXNMYWJlbENvdW50ID0gdGhpcy5feUF4aXNMYWJlbENvdW50LFxyXG5cclxuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgeCwgeSxcclxuICAgICAgICAgICAgb2Zmc2V0WCwgb2Zmc2V0WSxcclxuICAgICAgICAgICAgbnVtLCBzdHIsXHJcbiAgICAgICAgICAgIGFuZ2xlLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvLygxKeiuvue9ruaWh+acrOagt+W8j1xyXG4gICAgICAgIGN0eC5mb250ID0gU3R5bGVzLkxBQkVMX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9NSURETEU7XHJcblxyXG4gICAgICAgIC8v5qC55o2u5qiq6L205qCH562+55qE5peL6L2s6KeS5bqm6L+b6KGM57uY5Yi2ICAgICAgICBcclxuICAgICAgICBvZmZzZXRYID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0O1xyXG4gICAgICAgIGFuZ2xlID0geExhYmVsUm90YXRlICUgMzYwO1xyXG5cclxuICAgICAgICBpZiAoYW5nbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAvL+iuvue9ruaWh+acrOaoquWQkeWvuem9kOaWueW8j1xyXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fQ0VOVEVSO1xyXG5cclxuICAgICAgICAgICAgLy/orqHnrpfmlofmnKznurXlkJHkvY3nva5cclxuICAgICAgICAgICAgeSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tICsgU3R5bGVzLlhBWElTX0xBQkVMX09GRlNFVDtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi25paH5pysXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB4QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy/orqHnrpfmlofmnKzmqKrlkJHkvY3nva5cclxuICAgICAgICAgICAgICAgIHggPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG9mZnNldFggKyB4U2NhbGVVbml0U2l6ZSAqIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6h566X5qCH562+5paH5a2XXHJcbiAgICAgICAgICAgICAgICBudW0gPSB4TWluU2NhbGUgKyB4U2NhbGVVbml0ICogaTtcclxuICAgICAgICAgICAgICAgIHN0ciA9IG51bS50b0ZpeGVkKHhEZWNpbWFsRGlnaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi25paH5a2XXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCB4LCB5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+i9rOaNouS4uuW8p+W6plxyXG4gICAgICAgICAgICBhbmdsZSA9IC1hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcblxyXG4gICAgICAgICAgICAvL+iuvue9ruaWh+acrOaoquWQkeWvuem9kOaWueW8j1xyXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fUklHSFQ7XHJcblxyXG4gICAgICAgICAgICAvL+iuoeeul+aWh+acrOe6teWQkeS9jee9rlxyXG4gICAgICAgICAgICB5ID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b20gKyBTdHlsZXMuWEFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEU7XHJcblxyXG4gICAgICAgICAgICAvL+e7mOWItuaWh+acrFxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeEF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orqHnrpfmlofmnKzmqKrlkJHkvY3nva5cclxuICAgICAgICAgICAgICAgIHgxID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbihvZmZzZXRYICsgeFNjYWxlVW5pdFNpemUgKiBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WdkOagh+W5s+enu+W5tuaXi+i9rFxyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6h566X5qCH562+5paH5a2XXHJcbiAgICAgICAgICAgICAgICBudW0gPSB4TWluU2NhbGUgKyB4U2NhbGVVbml0ICogaTtcclxuICAgICAgICAgICAgICAgIHN0ciA9IG51bS50b0ZpeGVkKHhEZWNpbWFsRGlnaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi25paH5a2XXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8oMy0yKeiuvue9ruaWh+acrOaoquWQkeWvuem9kOaWueW8j1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9SSUdIVDtcclxuXHJcbiAgICAgICAgLy8oMy0zKeagueaNrue6tei9tOagh+etvueahOaXi+i9rOinkuW6pui/m+ihjOe7mOWItiAgICAgICAgXHJcbiAgICAgICAgeCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCAtIFN0eWxlcy5ZQVhJU19MQUJFTF9PRkZTRVQ7XHJcbiAgICAgICAgb2Zmc2V0WSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tO1xyXG4gICAgICAgIGFuZ2xlID0geUxhYmVsUm90YXRlICUgMzYwO1xyXG5cclxuICAgICAgICBpZiAoYW5nbGUgPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeUF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8v6K6h566X5paH5pys57q15ZCR5L2N572uXHJcbiAgICAgICAgICAgICAgICB5ID0gb2Zmc2V0WSAtIHlTY2FsZVVuaXRTaXplICogaTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuoeeul+agh+etvuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgbnVtID0geU1pblNjYWxlICsgeVNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh5RGVjaW1hbERpZ2l0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7mOWItuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgeCwgeSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/ovazmjaLkuLrlvKfluqZcclxuICAgICAgICAgICAgYW5nbGUgPSAtYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHlBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6h566X5paH5pys57q15ZCR5L2N572uXHJcbiAgICAgICAgICAgICAgICB5ID0gb2Zmc2V0WSAtIHlTY2FsZVVuaXRTaXplICogaTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WdkOagh+W5s+enu+W5tuaXi+i9rFxyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6h566X5qCH562+5paH5a2XXHJcbiAgICAgICAgICAgICAgICBudW0gPSB5TWluU2NhbGUgKyB5U2NhbGVVbml0ICogaTtcclxuICAgICAgICAgICAgICAgIHN0ciA9IG51bS50b0ZpeGVkKHlEZWNpbWFsRGlnaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi25paH5a2XXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRBeGlzTmFtZSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgeCwgeTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7mloflrZfmoLflvI9cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5BWElTX05BTUVfRk9OVDtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fQ0VOVEVSO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfVE9QO1xyXG5cclxuICAgICAgICAvL+e7mOWItnnovbTljZXkvY3mloflrZdcclxuICAgICAgICB4ID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0O1xyXG4gICAgICAgIHkgPSBjaGFydEluZm9fSW4ueUF4aXNOYW1lVG9wO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChjaGFydEluZm9fSW4ueUF4aXNOYW1lLCB4LCB5KTtcclxuXHJcbiAgICAgICAgLy/nu5jliLZY6L205Y2V5L2N5paH5a2XXHJcbiAgICAgICAgLy8gICAgICB0aGlzLl9jdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX0JPVFRPTSA7XHJcbiAgICAgICAgeCA9IGNhbnZhc1dpZHRoIC0gY2hhcnRJbmZvX0luLmJvZHlSaWdodDtcclxuICAgICAgICB5ID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLnhBeGlzTmFtZUJvdHRvbTtcclxuICAgICAgICBjdHguZmlsbFRleHQoY2hhcnRJbmZvX0luLnhBeGlzTmFtZSwgeCwgeSk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50QnViYmxlcyAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY29sb3JzID0gdGhpcy5fY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yLFxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIGl0ZW07XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5YWx5ZCM5qC35byPXHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gU3R5bGVzLkJVQkJMRV9BTFBIQTtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/ns7vliJdcclxuICAgICAgICBsZW4xID0gaXRlbUFycmF5Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XHJcblxyXG4gICAgICAgICAgICBhcnIgPSBpdGVtQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGxlbjIgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlGbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoaXRlbS54LCBpdGVtLnksIGl0ZW0ucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vICDliKnnlKjpl63ljIXlkoznq4vljbPmiafooYzlh73mlbDliJvlu7rljZXkvotcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblBhaW50ZXIuZ2V0SW5zdGFuY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGluc3RhbmNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBQYWludGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0pKCk7IiwiaW1wb3J0IFBhcnRCYXNlIGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsZSBleHRlbmRzIFBhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5zZXJpZXNJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLnZhbHVlWDtcclxuICAgICAgICB0aGlzLnZhbHVlWTtcclxuICAgICAgICB0aGlzLnZhbHVlUmFkaXVzO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gMTA7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBpc1BvaW50SW5CdWJibGUgKHgsIHkpIHtcclxuICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gdGhpcy54KSAqICh4IC0gdGhpcy54KSArICh5IC0gdGhpcy55KSAqICh5IC0gdGhpcy55KSkgPCB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog5a6a5LmJd2luZG935Yqo55S75b6q546v5o6n5Yi25Ye95pWw77yI5Yip55So56uL5Y2z5omn6KGM5Ye95pWw77yJXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbndpbmRvdy5yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuYywgMTYpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxufSkoKTtcclxuIiwiY29uc3QgQ29uc3RhbnRzID0ge1xyXG4gICAgRElSVFk6ICctJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5a6a5LmJ5pWw5o2u5pe277yM55So5p2l6KGo56S65rKh5pyJ5pWw5o2u77yM5oiW6ISP5pWw5o2u77yI5peg5pWI5pWw5o2u77yJXHJcbiAgICBIQUxGX1BJWEVMOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/ljYrkuKrlg4/ntKBcclxuXHJcbiAgICBDTE9TRV9UT19aRVJPOiAwLjAwMDAwMDEsICAgICAgICAgICAgICAgLy/mta7ngrnmlbDorqHnrpfkvJrmnInnsr7luqbor6/lt67vvIzor6XluLjph4/nlKjkuo7liKTmlq3kuKTkuKrmta7ngrnmlbDmmK/lkKbnm7jnrYnjgILlpoLmnpzkuKTkuKrmta7ngrnmlbDnmoTlt67lgLzlsI/kuo7or6XmlbDvvIzliJnorqTkuLrnm7jnrYnjgIJcclxuXHJcbiAgICBURVhUX0JBU0VfTElORV9NSURETEU6ICdtaWRkbGUnLCAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X57q15ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0JBU0VfTElORV9UT1A6ICd0b3AnLFxyXG4gICAgVEVYVF9CQVNFX0xJTkVfQk9UVE9NOiAnYm90dG9tJyxcclxuXHJcbiAgICBURVhUX0FMSUdOX0NFTlRFUjogJ2NlbnRlcicsICAgICAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5qiq5ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0FMSUdOX0xFRlQ6ICdsZWZ0JyxcclxuICAgIFRFWFRfQUxJR05fUklHSFQ6ICdyaWdodCcsXHJcblxyXG4gICAgVEVYVF9CQVNFX0xJTkVfSURFT0dSQVBISUM6ICdpZGVvZ3JhcGhpYycsICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5Z+657q/5bGe5oCnXHJcblxyXG4gICAgQUREOiAnYWRkJyxcclxuICAgIFJFTU9WRTogJ3JlbW92ZScsXHJcblxyXG4gICAgWF9BWElTOiAneC1heGlzJywgICAgICAgICAgICAgICAvL+S7o+ihqOaYr3jovbTov5jmmK956L20XHJcbiAgICBZX0FYSVM6ICd5LWF4aXMnLFxyXG5cclxuICAgIFJBRElBTl9VTklUOiBNYXRoLlBJIC8gMTgwICAgICAgLy/lvKfluqbljZXkvY1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50cztcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UG9vbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xhenosIHBhcmEpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2xhc3MgPSBjbGF6ejsgICAvL+exu+WQjVxyXG4gICAgICAgIHRoaXMuX3BhcmEgPSBwYXJhOyAgICAgIC8v5a6e5L6L5YyW5a+56LGh5pe255qE5Y+C5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwOyAgICAgICAgLy/lr7nosaHmsaDkuK3lr7nosaHnmoTkuKrmlbBcclxuICAgICAgICB0aGlzLl9wb29sID0gW107ICAgICAgICAvL+WvueixoeaxoFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGdldE9iaiAoKSB7XHJcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sLFxyXG4gICAgICAgICAgICBsZW4sXHJcbiAgICAgICAgICAgIG9iajtcclxuXHJcbiAgICAgICAgLy/lpoLmnpzlvZPliY3lt7Lkvb/nlKjnmoTlr7nosaHkuKrmlbDlpKfkuo7miJbnrYnkuo7msaDkuK3lt7LmnInlr7nosaHkuKrmlbDvvIxcclxuICAgICAgICAvL+WImeaWsOeUn+aIkOS4gOS4quWvueixoe+8m+WQpuWImeS7juaxoOS4reebtOaOpeWPluW+l+WvueixoVxyXG4gICAgICAgIGlmICh0aGlzLl9jb3VudCA+PSBwb29sLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvYmogPSBuZXcgdGhpcy5fY2xhc3ModGhpcy5fcGFyYSk7XHJcblxyXG4gICAgICAgICAgICBsZW4gPSBwb29sLmxlbmd0aDtcclxuICAgICAgICAgICAgcG9vbFtsZW5dID0gb2JqO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSBwb29sW3RoaXMuX2NvdW50XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6w5b2V5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQrKztcclxuXHJcbiAgICAgICAgLy/ov5Tlm57lr7nosaFcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWw5riF6Zu2XHJcbiAgICAqIOi/meagt++8jOW9k+WHveaVsGdldE9iaigp6KKr6LCD55So55qE5pe25YCZ77yM5rGg5Lit5omA5pyJ5a+56LGh6YO95Y+v5L2/55SoXHJcbiAgICAqL1xyXG4gICAgcmVsZWFzZUFsbCAoKSB7XHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufSIsImNvbnN0IFN0YXR1cyA9IHtcclxuICAgIFxyXG4gICAgU1RFUDE6ICdzdGVwMScsXHJcbiAgICBTVEVQMjogJ3N0ZXAyJyxcclxuICAgIFNURVAzOiAnc3RlcDMnLFxyXG4gICAgU1RFUDQ6ICdzdGVwNCcsXHJcbiAgICBTVEVQNTogJ3N0ZXA1JyxcclxuICAgIFdBSVRJTkc6ICd3YWl0aW5nJyxcclxuICAgIFNUT1A6ICdzdG9wJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzOyIsImNvbnN0IFN0eWxlcyA9IHtcclxuICAgIFxyXG4gICAgLy/lhbHlkIzpg6jliIZcclxuICAgIFRJVExFX0ZPTlQ6ICcxNnB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH6aKY5a2X5L2TICAgICAgICBcclxuICAgIExFR0VORF9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgIC8v5Zu+5L6L5a2X5L2TICBcclxuICAgIExBQkVMX0ZPTlQ6ICcxMHB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH562+5a2X5L2TICBcclxuICAgIEFYSVNfTkFNRV9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgIC8v6L205ZCN56ew5a2X5L2TICBcclxuICAgIEZPTlRfRklMTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgICAgICAgIC8v6buY6K6k5a2X5L2T5aGr5YWF6aKc6ImyXHJcbiAgICBBWElTX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+i9tOe6v+eahOe6v+WuvVxyXG4gICAgQVhJU19MSU5FX0NPTE9SOiAnIzMzMzMzMycsICAgICAgICAgICAgICAgICAgLy/ovbTnur/popzoibJcclxuICAgIEFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU6IDUsICAgICAgICAgICAgICAgIC8v5Yi75bqm57q/55qE6ZW/5bqmXHJcbiAgICBHUklEX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+eahOe6v+WuvVxyXG4gICAgR1JJRF9MSU5FX0NPTE9SOiAnI0JCQ0NERCcsICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/popzoibJcclxuICAgIEdSSURfTElORV9EQVNIOiBbNSwgNV0sICAgICAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/54K555qE6Ze06ZqUXHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3jovbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3jovbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3novbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3novbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBMRUdFTkRfU0hBUEVfVEVYVF9HQVA6IDUsICAgICAgICAgICAgICAgICAgICAvL+WbvuS+i+S4re+8jOiJsuWdl+WSjOaWh+Wtl+eahOmXtOmalFxyXG4gICAgTEVHRU5EX0dBUDogMTUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77kvovmqKrlkJHmjpLliJfml7bvvIzlm77kvovkuYvpl7TnmoTpl7TpmpRcclxuICAgIFRJUF9MT0NBVElPTl9PRkZTRVQ6IDIwLCAgICAgICAgICAgICAgICAgICAgIC8v5a6a5L2NVGlw5L2N572u5pe277yM55u45a+56byg5qCH5L2N572u55qE5YGP56e76YePXHJcblxyXG5cclxuICAgIC8v5rCU5rOh5Zu+XHJcbiAgICBCVUJCTEVfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAgICAgICAgLy/msJTms6HnmoTpgI/mmI7luqZcclxuXHJcblxyXG4gICAgLy/mn7Hnirblm75cclxuICAgIENPTFVNTl9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAvL+eUqOS6juahhumAiemhueebrueahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgQ09MVU1OX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgIC8v55So5LqO5qGG6YCJ6aG555uu55qE5pa55qGG55qE6L655qGG57q/6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5oqY57q/5Zu+XHJcbiAgICBMSU5FX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgICAgICAgLy/mipjnur/nmoTnur/lrr1cclxuICAgIExJTkVfQVJFQV9BTFBIQTogMC43LCAgICAgICAgICAgICAgICAgICAgICAvL+e7mOWItumdouenr+WbvuaXtueahOmAj+aYjuW6plxyXG4gICAgTElORV9NQVJLUE9JTlRfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K555qE57q/5a69XHJcbiAgICBMSU5FX01BUktQT0lOVF9SQURJVVM6IDIsICAgICAgICAgICAgICAgICAgLy/moIforrDngrnnmoTlnIbljYrlvoRcclxuICAgIExJTkVfTUFSS1BPSU5UX0JBS19DT0xPUjogJyNGM0YzRjMnLCAgICAgICAvL+agh+iusOeCueeahOiDjOaZr+minOiJslxyXG4gICAgTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH5b+X6YCJ5oup6aG555qE57q/5q6155qE57q/5a69XHJcbiAgICBMSU5FX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgICAgLy/nlKjkuo7moIflv5fpgInmi6npobnnmoTnur/mrrXnmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ppbzlm75cclxuICAgIFBJRV9MQUJFTF9JTk5FUl9GT05UX0NPTE9SOiAnI0ZGRkZGRicsICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWGheaYvuekuuaXtu+8jOaWh+Wtl+eahOminOiJslxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkU6IDIwLCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MeeahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUyX1NJWkU6IDE1LCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MueahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX09GRlNFVDogNSwgICAgICAgICAgICAgICAgICAgICAgIC8v5byV5a+857q/5ZKM5qCH562+5paH5a2X55qE6Ze06LedXHJcbiAgICBQSUVfU0VMRUNUT1JfVFJBTlNMQVRFOiAxMCwgICAgICAgICAgICAgICAgLy/ooqvpgInmi6nnmoTppbzlnZfnmoTkvY3np7vph49cclxuICAgIFBJRV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAvL+ahhumAieaVsOaNrumhueeahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgUElFX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjRkYwMDAwJywgICAgICAgIC8v5qGG6YCJ5pWw5o2u6aG555qE5pa55qGG55qE6L655qGG6aKc6ImyXHJcblxyXG5cclxuICAgIC8v6Zu36L6+5Zu+XHJcbiAgICBSQURBUl9MQUJFTF9GT05UOiAnMTJweCBNaWNyb3NvZnQgWWFIZWknLCAgLy/mjIfmoIfmloflrZfnmoTlrZfkvZNcclxuICAgIFJBREFSX0xBQkVMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgICAvL+aMh+agh+aWh+Wtl+eahOminOiJslxyXG4gICAgUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUOiAxMCwgICAgICAgICAgIC8v5oyH5qCH5paH5a2X5ZKM5a+55bqU5aSa6L655b2i6aG254K55LmL6Ze055qE6Ze06LedXHJcbiAgICBSQURBUl9MSU5FX1dJRFRIOiAzLjAsICAgICAgICAgICAgICAgICAgICAgLy/mlbDmja7pm7fovr7nur/nmoTnur/lrr1cclxuICAgIFJBREFSX0JBS19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9ouahhue6v+WSjOWNiuW+hOWIhuWJsue6v+eahOe6v+WuvVxyXG4gICAgUkFEQVJfQkFLX0xJTkVfQ09MT1I6ICcjQzlDOUM5JywgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i5qGG57q/5ZKM5Y2K5b6E5YiG5Ymy57q/55qE6aKc6ImyXHJcbiAgICBSQURBUl9CQUtfRklMTF9DT0xPUjogJyNFNkU2RTYnLCAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLnmoTog4zmma/popzoibJcclxuXHJcblxyXG4gICAgLy/mlaPngrnlm75cclxuICAgIFNDQVRURVJfUE9JTlRfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAvL+aVo+eCueeahOmAj+aYjuW6plxyXG4gICAgU0NBVFRFUl9DUk9TU19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH6K+G6byg5qCH5L2N572u55qE5Y2B5a2X57q/55qE57q/5a69XHJcbiAgICBTQ0FUVEVSX0NST1NTX0NPTE9SOiAnI0ZGMDAwMCcsICAgICAgICAgICAgLy/nlKjkuo7moIfor4bpvKDmoIfkvY3nva7nmoTljYHlrZfnur/nmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ml63ml6Xlm75cclxuICAgIFNVTkJVUlNfTEFCRUxfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAvL+agh+etvuaWh+Wtl+eahOminOiJslxyXG4gICAgU1VOQlVSU19CT1JERVJfQ09MT1I6ICcjMDAwMDAwJyAgICAgICAgICAgIC8v5omH5b2i5Z2X55qE6L655qGG6aKc6ImyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZXM7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog6Z2Z5oCB5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8qXHJcbiAgICAqIOiuoeeul+OAkOWAvOi9tOOAkeeahOWIu+W6puWNleS9jVxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRTY2FsZVVuaXQgKG1pbiwgbWF4LCBzY2FsZU1heENvdW50KSB7XHJcbiAgICAgICAgbGV0IGksIGxlbixcclxuICAgICAgICAgICAgYXZnLFxyXG4gICAgICAgICAgICBnYXBzID0gWzEsIDIsIDIuNSwgNSwgMTBdLFxyXG4gICAgICAgICAgICBzY2FsZVVuaXQsXHJcbiAgICAgICAgICAgIG1hZ25pdHVkZTtcclxuXHJcbiAgICAgICAgLy/orqHnrpflnYfliIblgLxcclxuICAgICAgICBhdmcgPSAobWF4IC0gbWluKSAvIChzY2FsZU1heENvdW50LTEpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+Wdh+WIhuWAvOeahOaVsOmHj+e6p1xyXG4gICAgICAgIG1hZ25pdHVkZSA9IHRoaXMuZ2V0TWFnbml0dWRlKGF2Zyk7XHJcblxyXG4gICAgICAgIC8v5b6q546v77yM55u06Iez56ys5LiA5Liq5aSn5LqO5oiW562J5LqO5Z2H5YiG5YC855qE5pW05pWw5YC85Ye6546wXHJcbiAgICAgICAgbGVuID0gZ2Fwcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCA9IGdhcHNbaV0gKiBtYWduaXR1ZGU7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZVVuaXQgPj0gYXZnKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ov5Tlm55cclxuICAgICAgICByZXR1cm4gc2NhbGVVbml0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog6K6h566X5oyH5a6a5pWw5YC855qE5pWw6YeP57qnXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGdldE1hZ25pdHVkZSAobnVtKSB7XHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoQxMOeahOW5glxyXG4gICAgICAgIGxldCBwb3cgPSBNYXRoLmZsb29yKE1hdGgubG9nKG51bSkgLyBNYXRoLmxvZygxMCkpOztcclxuXHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoTmlbDph4/nuqdcclxuICAgICAgICBsZXQgbWFnbml0dWRlID0gTWF0aC5wb3coMTAsIHBvdyk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYWduaXR1ZGU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgKiBDYW52YXPnu5jliLbml7blr7nlnZDmoIfov5vooYzlvq7osINcclxuICAgICog5Zub6IiN5LqU5YWl5Y+W5pW05ZCO5YeP5bCPMC415YOP57Sg44CC6L+Z5qC377yM5ZyoQ2FudmFz5pe25L2N572u5aSE5LqO5Lik5Liq5YOP57Sg5LmL6Ze077yM6YG/5YWN5Y+R6Jma44CCXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGFkanVzdFBvc2l0aW9uICh4T1J5KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoeE9SeSkgLSBDb25zdGFudHMuSEFMRl9QSVhFTDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyB3aW5kb3dUb0NhbnZhcyAoYm91bmRpbmdDbGllbnRSZWN0TGVmdCxcclxuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3RUb3AsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0V2lkdGgsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0LFxyXG4gICAgICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodCxcclxuICAgICAgICBnbG9ibGVYLFxyXG4gICAgICAgIGdsb2JsZVksXHJcbiAgICAgICAgcG9zaXRpb24pIHtcclxuICAgICAgICBwb3NpdGlvbi54ID0gZ2xvYmxlWCAtIGJvdW5kaW5nQ2xpZW50UmVjdExlZnQgKiAoY2FudmFzV2lkdGggLyBib3VuZGluZ0NsaWVudFJlY3RXaWR0aCk7XHJcbiAgICAgICAgcG9zaXRpb24ueSA9IGdsb2JsZVkgLSBib3VuZGluZ0NsaWVudFJlY3RUb3AgKiAoY2FudmFzSGVpZ2h0IC8gYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0V2lkdGggKGNhbnZhc0NvbnRleHQsIHRleHQpIHtcclxuICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0SGVpZ2h0IChjYW52YXNDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoJ00nKS53aWR0aCAqIDcgLyA2O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXQWN0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gMDsgICAgICAgICAgIC8v57yT5Yqo5qyh5pWwXHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7ICAgICAgICAgICAgICAvL+e8k+WKqOW8gOWni+aXtu+8jOS7juesrOWHoOasoee8k+WKqOW8gOWniyAgXHJcbiAgICAgICAgdGhpcy5kYXRhQXJyYXkgPSBbXTsgICAgICAgICAgLy/mnKzliqjkvZzmk43mjqfnmoRUV0RhdGHmlbDmja7pm4ZcclxuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IG51bGw7ICAgICAgICAvL+e8k+WKqOeul+azlVxyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbiA9IG51bGw7ICAgICAgIC8v5pys5Yqo5L2c57uT5p2f5ZCO55qE5LiL5LiA5Liq5Yqo5L2cXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXREYXRhIChkYXRhQXJyYXksIGFsZ29yaXRobSwgZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IGFsZ29yaXRobTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gTWF0aC5jZWlsKGR1cmF0aW9uIC8gVFdBY3Rpb24uRlJBTUVfRFVSQVRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYWluIChhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24gPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lICgpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0LFxyXG4gICAgICAgICAgICBmcm9tLFxyXG4gICAgICAgICAgICB0byxcclxuICAgICAgICAgICAgY2FsbEJhY2ssXHJcblxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yLFxyXG5cclxuICAgICAgICAgICAgcnRuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnQgPiB0aGlzLnRvdGxlVGltZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgbGVuMSA9IHRoaXMuZGF0YUFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuZGF0YUFycmF5W2ldLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGZyb20gPSB0aGlzLmRhdGFBcnJheVtpXS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgdG8gPSB0aGlzLmRhdGFBcnJheVtpXS50bztcclxuICAgICAgICAgICAgICAgIGNhbGxCYWNrID0gdGhpcy5kYXRhQXJyYXlbaV0uY2FsbEJhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBsZW4yID0gZnJvbS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5hbGdvcml0aG0odGhpcy5zdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVtqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9bal0gLSBmcm9tW2pdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGxlVGltZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbEJhY2sodGFyZ2V0LCBhcnIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGFydCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB0aGlzLnRvdGxlVGltZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDpnZnmgIHlj5jph49cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuVFdBY3Rpb24uRlJBTUVfRFVSQVRJT04gPSAxNzsgICAgICAvL+W4p+mikeS4ujYw55qE54q25oCB5LiL77yM5LiA5bin55qE5pKt5pS+5pe26ZW/5Li6MTdtcyAoIDEwMDBtcy82MCApXHJcbiIsIi8qXHJcbiAqIHQ6IGN1cnJlbnQgdGltZe+8iOW9k+WJjeaXtumXtO+8iVxyXG4gKiBiOiBiZWdpbm5pbmcgdmFsdWXvvIjliJ3lp4vlgLzvvIlcclxuICogYzogY2hhbmdlIGluIHZhbHVl77yI5Y+Y5YyW6YeP77yJXHJcbiAqIGQ6IGR1cmF0aW9u77yI5oyB57ut5pe26Ze077yJXHJcbiAqIFxyXG4gKiBcclxuICog57yT5Yqo5Ye95pWwOlxyXG4gKiAxLkxpbmVhciDljIDpgJ9cclxuICogMi5RdWFkIOS6jOasoeaWuee8k+WKqOaViOaenFxyXG4gKiAzLkN1YmljIOS4ieasoeaWuee8k+WKqOaViOaenFxyXG4gKiA0LlF1YXJ0IOWbm+asoeaWuee8k+WKqOaViOaenFxyXG4gKiA1LlF1aW50IOS6lOasoeaWuee8k+WKqOaViOaenFxyXG4gKiA2LlNpbmUgIOato+W8pue8k+WKqOaViOaenFxyXG4gKiA3LkV4cG8gIOaMh+aVsOe8k+WKqOaViOaenFxyXG4gKiA4LkNpcmMgIOWchuW9oue8k+WKqOWHveaVsFxyXG4gKiA5LkVsYXN0aWMg5oyH5pWw6KGw5YeP5q2j5bym5puy57q/57yT5Yqo5Ye95pWwXHJcbiAqIDEwLkJhY2sgIOi2hei/h+iMg+WbtOeahOS4ieasoeaWueeahOe8k+WKqOWHveaVsFxyXG4gKiAxMS5Cb3VuY2Ug5oyH5pWw6KGw5YeP55qE5Y+N5by55puy57q/57yT5Yqo5Ye95pWwXHJcbiAqIFxyXG4gKiBcclxuICog5q+P56eN57yT5Yqo5Ye95pWw6YO955Sx5LiJ56eN5pWI5p6cOlxyXG4gKiAxLmVhc2VJbiAg5Yqg6YCfXHJcbiAqIDIuZWFzZU91dCDlh4/pgJ9cclxuICogMy5lYXNlSW5PdXQgIOWFiOWKoOmAn+WQjuWHj+mAn1xyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdBbGdvcml0aG0ge1xyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOmdmeaAgeWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0YXRpYyBsaW5lYXIgKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICByZXR1cm4gYyAqIHQgLyBkICsgYjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOmdmeaAgeWPmOmHj1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5UV0FsZ29yaXRobS5RdWFkID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoKC0tdCkgKiAodCAtIDIpIC0gMSkgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uQ3ViaWMgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5RdWFydCA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLlF1aW50ID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5TaW5lID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqIE1hdGguY29zKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBjICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogTWF0aC5zaW4odCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQgLyBkKSAtIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkV4cG8gPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0ID09IDApID8gYiA6IGMgKiBNYXRoLnBvdygyLCAxMCAqICh0IC8gZCAtIDEpKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHQgPT0gZCkgPyBiICsgYyA6IGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQgLyBkKSArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICh0ID09IGQpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5DaXJjID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0IC89IGQpICogdCkgLSAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gKHQgPSB0IC8gZCAtIDEpICogdCkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIC1jIC8gMiAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkVsYXN0aWMgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPT0gMSkgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHAgPT0gXCJ1bmRlZmluZWRcIikgcCA9IGQgKiAuMztcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgICAgICAgICBsZXQgcztcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PSBcInVuZGVmaW5lZFwiKSBwID0gZCAqIC4zO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gYztcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIGMgKyBiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpID09IDIpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09IFwidW5kZWZpbmVkXCIpIHAgPSBkICogKC4zICogMS41KTtcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIC0uNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogLjUgKyBjICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkJhY2sgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09IFwidW5kZWZpbmVkXCIpIHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PSBcInVuZGVmaW5lZFwiKSBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqICgocyArIDEpICogdCArIHMpICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT0gXCJ1bmRlZmluZWRcIikgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiAodCAqIHQgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB0IC0gcykpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkJvdW5jZSA9XHJcbiAgICB7XHJcblxyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgbGV0IFRXQWxnb3JpdGhtID0gVC50d2VlbjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLSBCb3VuY2UuZWFzZU91dChkIC0gdCwgMCwgYywgZCkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQpIDwgKDEgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDEuNSAvIDIuNzUpKSAqIHQgKyAuNzUpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMi4yNSAvIDIuNzUpKSAqIHQgKyAuOTM3NSkgKyBiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDIuNjI1IC8gMi43NSkpICogdCArIC45ODQzNzUpICsgYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBsZXQgVFdBbGdvcml0aG0gPSBULnR3ZWVuO1xyXG4gICAgICAgICAgICBpZiAodCA8IGQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQm91bmNlLmVhc2VJbih0ICogMiwgMCwgYywgZCkgKiAuNSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQm91bmNlLmVhc2VPdXQodCAqIDIgLSBkLCAwLCBjLCBkKSAqIC41ICsgYyAqIC41ICsgYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUV0RhdGEge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gW107XHJcbiAgICAgICAgdGhpcy50byA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IFtdO1xyXG4gICAgICAgIHRoaXMudG8gPSBbXTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhICh0YXJnZXQsIGZyb21BcnJheSwgdG9BcnJheSwgY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tQXJyYXk7XHJcbiAgICAgICAgdGhpcy50byA9IHRvQXJyYXk7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxCYWNrO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufVxyXG4iLCJpbXBvcnQgT2JqZWN0UG9vbCBmcm9tICcuLi9zdXBwb3J0L09iamVjdFBvb2wuanMnO1xyXG5pbXBvcnQgVFdBY3Rpb24gZnJvbSBcIi4uL3R3ZWVuL1RXQWN0aW9uLmpzXCI7XHJcbmltcG9ydCBUV0RhdGEgZnJvbSBcIi4uL3R3ZWVuL1RXRGF0YS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdFbmdpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9hY3Rpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fZmlyc3RBY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9hY3Rpb25Qb29sID0gbmV3IE9iamVjdFBvb2woVFdBY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sID0gbmV3IE9iamVjdFBvb2woVFdEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRUV0FjdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgb2JqID0gdGhpcy5fYWN0aW9uUG9vbC5nZXRPYmooKTtcclxuICAgICAgICBvYmouaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMucHVzaChvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRXRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgb2JqID0gdGhpcy5fZGF0YVBvb2wuZ2V0T2JqKCk7XHJcbiAgICAgICAgb2JqLmluaXQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlQWxsVFdEYXRhICgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhUG9vbC5yZWxlYXNlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZUFsbFRXQWN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uUG9vbC5yZWxlYXNlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rmlyc3RUV0FjdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZmlyc3RBY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGlvbiA9IHRoaXMuX2ZpcnN0QWN0aW9uO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZXh0RnJhbWUgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNQbGF5aW5nID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRBY3Rpb24ubmV4dEZyYW1lKCkgPT0gZmFsc2UpICAgLy/lvZPliY1hY3Rpb27nmoTnvJPliqjlt7Lnu4/nu5PmnZ8gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRBY3Rpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgKCkge1xyXG4gICAgICAgIGxldCBpLCBsZW47XHJcblxyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9maXJzdEFjdGlvbjtcclxuXHJcbiAgICAgICAgbGVuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbnNbaV0uaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICcuLi9zcmMvY2hhcnQvYnViYmxlL2Nzcy9jaGFydC5jc3MnIDtcclxuaW1wb3J0ICcuLi9zcmMvcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZS5qcyc7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYXJ0IH0gIGZyb20gJy4uL3NyYy9jaGFydC9idWJibGUvQ2hhcnQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcmllcyB9ICBmcm9tICcuLi9zcmMvYmFzZS9zZXJpZXMvU2VyaWVzQmFzZS5qcyc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=