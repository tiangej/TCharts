(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["column"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["column"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/columnEntry.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/column/css/chart.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/column/css/chart.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.columnChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n    line-height: 1.5 ;\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.columnChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}\r\n\r\n\r\n            \r\n/* \r\n * Tip\r\n */\r\n.columnChartTipDiv {\r\n    position: absolute;            /* 绝对定位，这样才会跟随鼠标位置 */\r\n    \r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    \r\n    background: rgba(0, 0, 0, 0.6);\r\n    \r\n    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;     /* 阴影 */\r\n    -moz-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    \r\n    font-family: Microsoft YaHei;      /* Tip字体 */\r\n    font-size: 12px;              /* Tip字体尺寸 */\r\n    color: #eeeeee;               /* Tip文字颜色 */\r\n}\r\n\r\n\r\n.columnChartTipDiv p {\r\n    padding: 0px;  \r\n    margin: 0px ;       \r\n}\r\n\r\n/* \r\n * Tip -- table\r\n */\r\n.columnChartTipDiv table{\r\n    padding: 0px;  \r\n    margin: 0px ;       \r\n    border:none;\r\n    \r\n    border-collapse: collapse;    /* 合并边框 */\r\n    border-spacing: 0;            /* 设置相邻单元格的边框间的距离 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td\r\n */\r\n.columnChartTipDiv table td {\r\n    padding: 0px;         \r\n    padding-right: 10px;          /* 在列数据之间留余白 */\r\n    margin: 0px ;\r\n    white-space:nowrap;           /* 禁止换行 */\r\n    border: 0;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td -- span\r\n */\r\n.columnChartTipDiv table td span {\r\n    display:inline-block;           /* 转成行内块，否则不能显示出来 */\r\n    /*border-radius: 10px;            /* 圆形 */\r\n    width: 9px;\r\n    height: 9px;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- 第三列\r\n */\r\n.columnChartTipDiv .thirdCol {\r\n    text-align: right;           /* 靠右对齐 */\r\n}\r\n", ""]);



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

/***/ "./src/base/info/CAxisInfoBase_In.js":
/*!*******************************************!*\
  !*** ./src/base/info/CAxisInfoBase_In.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CAxisInfoBase_In; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CAxisInfoBase_In = function CAxisInfoBase_In() {
  _classCallCheck(this, CAxisInfoBase_In);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  this.categorys = []; //类目名称数组

  this.interval = -1; //标签间隔数。当类目非常多的时候，类目轴标签会重叠。因此必须按照相等的间隔不连续显示标签。保持默认值代表自动计算间隔

  this.labelRotate = 0; //标签旋转角度        

  this.labelGap = 20; //相邻标签的间距
  ///////////////////////
  // 私有成员变量
  ///////////////////////
  ///////////////////////
  // 初始化
  ///////////////////////
};



/***/ }),

/***/ "./src/base/info/CAxisInfoBase_Out.js":
/*!********************************************!*\
  !*** ./src/base/info/CAxisInfoBase_Out.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CAxisInfoBase_Out; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CAxisInfoBase_Out = function CAxisInfoBase_Out() {
  _classCallCheck(this, CAxisInfoBase_Out);

  ///////////////////////
  // 公有成员变量
  ///////////////////////
  this.labels = []; //保存类目轴上显示的标签文字

  this.labelSizes = []; //保存所有类目标签文字的长度
  //标签间隔个数
  //CAxisInfoBase_In.interval >= 0时 :  CAxisInfoBase_Out.interval = CAxisInfoBase_In.interval
  //CAxisInfoBase_In.interval < 0时   :  CAxisInfoBase_Out.interval的值是内部算法计算的结果

  this.interval = 0;
  this.intervalSize = 0; //根据interval和categorySize计算出的长度

  this.categorySize = 0; //一个类目在轴上占用的长度
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

/***/ "./src/chart/column/Chart.js":
/*!***********************************!*\
  !*** ./src/chart/column/Chart.js ***!
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
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../base/chart/ChartBase.js */ "./src/base/chart/ChartBase.js");
/* harmony import */ var _base_info_AxisChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base/info/AxisChartInfoBase_In.js */ "./src/base/info/AxisChartInfoBase_In.js");
/* harmony import */ var _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_In.js */ "./src/base/info/VAxisInfoBase_In.js");
/* harmony import */ var _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_Out.js */ "./src/base/info/VAxisInfoBase_Out.js");
/* harmony import */ var _info_CAxisInfo_In_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/CAxisInfo_In.js */ "./src/chart/column/info/CAxisInfo_In.js");
/* harmony import */ var _info_CAxisInfo_Out_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info/CAxisInfo_Out.js */ "./src/chart/column/info/CAxisInfo_Out.js");
/* harmony import */ var _parts_Column_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parts/Column.js */ "./src/chart/column/parts/Column.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/column/painter/Painter.js");
/* harmony import */ var _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../support/ObjectPool.js */ "./src/support/ObjectPool.js");
/* harmony import */ var _support_Constants_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../support/Constants.js */ "./src/support/Constants.js");
/* harmony import */ var _support_Status_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../support/Status.js */ "./src/support/Status.js");
/* harmony import */ var _support_Utility_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../support/Utility.js */ "./src/support/Utility.js");
/* harmony import */ var _support_Styles_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../support/Styles.js */ "./src/support/Styles.js");
/* harmony import */ var _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../tween/TWAlgorithm.js */ "./src/tween/TWAlgorithm.js");
/* harmony import */ var _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../tween/TWEngine.js */ "./src/tween/TWEngine.js");








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

    _this.chartInfo_In = new _base_info_AxisChartInfoBase_In_js__WEBPACK_IMPORTED_MODULE_8__["default"](); //图表信息。例：图表名称

    _this.cAxisInfo_In = new _info_CAxisInfo_In_js__WEBPACK_IMPORTED_MODULE_11__["default"](); //类目轴信息

    _this.vAxisInfo_In = new _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_9__["default"](); //值轴信息
    ///////////////////////
    // 私有成员变量
    ///////////////////////

    _this._cAxisInfo_Out = new _info_CAxisInfo_Out_js__WEBPACK_IMPORTED_MODULE_12__["default"](); //数据结构体(存储计算结果，供内部用)

    _this._vAxisInfo_Out = new _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this._itemArray = []; //存放柱状体的二维数组

    _this._itemPool = null; //柱状体对象池

    _this._chartPixelWidth; //图表有效尺寸

    _this._chartPixelHeight;
    _this._parentDivClassName = 'columnChartDiv'; //样式名

    _this._tipDivClassName = 'columnChartTipDiv';
    _this._thirdColClassName = 'thirdCol';
    _this._twEngine = new _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_21__["default"](); //缓动动画相关
    ///////////////////////
    // 初始化
    ///////////////////////
    //设置画家

    _this._setPainter(_painter_Painter_js__WEBPACK_IMPORTED_MODULE_14__["default"]); //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换


    _this._parentDiv = document.getElementById(parentDivID);
    _this._parentDiv.className += ' ' + _this._parentDivClassName; //动态生成_canvas，并添加到DOM树。同时获取其上下文

    _this._canvas = document.createElement('canvas');

    _this._parentDiv.appendChild(_this._canvas); //动态生成tip对象，添加到DOM树，并获取之


    _this._tipDiv = _this._createTip(_this._tipDivClassName);

    _this._parentDiv.appendChild(_this._tipDiv); //初始化对象池


    _this._itemPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_15__["default"](_parts_Column_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
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


      this._computeCategoryInfo();

      this._getCategoryInterval();

      this._getItemAndComputeMinMax(); //获取项目对象，计算值轴的最大/最小值


      this._computeValueAxisOtherInfo(_support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].Y_AXIS, this.vAxisInfo_In, this._vAxisInfo_Out);

      this._setItemSizeAndPositionAndTween(); //启动帧循环，在循环内部绘制图表


      this._startPaint();
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_check",
    value: function _check() {
      var series,
          ser,
          i,
          len1,
          len2,
          rtn = true;
      series = this.chartInfo_In.series;
      len1 = this.cAxisInfo_In.categorys.length;
      len2 = series.length; //检查1： 数据是否为空

      if (len1 == 0 || len2 == 0) {
        rtn = false;
      } else {
        //检查2： 数据系列是否与类目数据长度一致
        for (i = 0; i < len2; i++) {
          ser = series[i];

          if (ser.data.length != len1) {
            rtn = false;
          }
        }
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

      this._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].REMOVE); //设置尺寸


      canvas.width = div.offsetWidth;
      canvas.height = div.offsetHeight;
      this._chartPixelWidth = canvas.width - chartInfo_In.bodyLeft - chartInfo_In.bodyRight;
      this._chartPixelHeight = canvas.height - chartInfo_In.bodyTop - chartInfo_In.bodyBottom; //初始化图例数据、Column对象数组

      itemArr.length = 0;
      len = chartInfo_In.series.length;

      for (i = 0; i < len; i++) {
        itemArr[i] = [];
      } //初始化Tip


      this._initTip(); //从对象池中释放曾经使用过的柱状体


      this._itemPool.releaseAll(); //释放缓动资源


      this._twEngine.releaseAllTWData();

      this._twEngine.releaseAllTWAction(); //取消上一次绑定的动画函数


      window.cancelAnimationFrame(this._animationFrameID);
    }
  }, {
    key: "_initTip",
    value: function _initTip() {
      var tipDiv = this._tipDiv,
          colors = this.chartInfo_In.colors,
          series = this.chartInfo_In.series,
          table,
          row,
          td,
          span,
          i,
          len; //隐藏tip

      tipDiv.style.display = 'none'; //删除Table对象的所有行

      table = tipDiv.childNodes[1];
      table.innerHTML = ''; //根据数据系列循环生成Table对象

      len = series.length;

      for (i = 0; i < len; i++) {
        //创建行
        row = table.insertRow(); //创建第一列，并插入span

        td = row.insertCell();
        span = document.createElement('span');
        span.style.backgroundColor = colors[i];
        td.appendChild(span); //创建第二列，并插入系列名称

        td = row.insertCell();
        td.innerHTML = series[i].name; //创建第三列，并设定样式名

        td = row.insertCell();
        td.className = this._thirdColClassName;
      }
    }
  }, {
    key: "_computeCategoryInfo",
    value: function _computeCategoryInfo() {
      var cAxisInfo_In = this.cAxisInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          series = this.chartInfo_In.series,
          ser,
          stackName = '',
          count = 0,
          num,
          i,
          len; //(1)计算在一个分类中并排有几个柱状项目(累积的项目不算)

      len = series.length;

      for (i = 0; i < len; i++) {
        ser = series[i];

        if (ser.stackName == '' || ser.stackName != stackName) {
          count++;
          stackName = ser.stackName;
        }
      } //(2)计算一个分类在轴上占用的长度


      cAxisInfo_Out.categorySize = this._chartPixelWidth / cAxisInfo_In.categorys.length; //(3)计算一个柱状项目在轴上占用的宽度
      //       某分类中第一个柱状项目在轴上距离左侧最近刻度的距离

      if (count > 0) {
        num = cAxisInfo_Out.categorySize * cAxisInfo_In.sizeRate;
        cAxisInfo_Out.itemSize = num / count;
        cAxisInfo_Out.offsetSize = (cAxisInfo_Out.categorySize - num) / 2;
      }
    }
  }, {
    key: "_getCategoryInterval",
    value: function _getCategoryInterval() {
      var cAxisInfo_In = this.cAxisInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          categorys = cAxisInfo_In.categorys,
          ctx,
          w,
          i,
          len; //如果人为指定了间隔，则不需要做相关计算

      if (cAxisInfo_In.interval >= 0) {
        cAxisInfo_Out.interval = cAxisInfo_In.interval;
      } else {
        //计算标签文本尺寸，并存入数组，用于后面的标签重叠比较
        ctx = this._canvas.getContext('2d');
        ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_19__["default"].LABEL_FONT; //设置字体，这是度量文字宽度的必备条件

        len = categorys.length;

        for (i = 0; i < len; i++) {
          w = ctx.measureText(categorys[i]).width;
          cAxisInfo_Out.labelSizes[i] = {
            size: w,
            withGapSize: w + cAxisInfo_In.labelGap
          };
        } //计算间隔


        this._computeCategoryInterval();
      }

      cAxisInfo_Out.intervalSize = cAxisInfo_Out.categorySize * (cAxisInfo_Out.interval + 1);
    }
  }, {
    key: "_computeCategoryInterval",
    value: function _computeCategoryInterval() {
      //定义
      var cAxisInfo_Out = this._cAxisInfo_Out,
          categorySize = cAxisInfo_Out.categorySize,
          labelSizes = cAxisInfo_Out.labelSizes,
          distance,
          i = 0,
          j = 0,
          len = this.cAxisInfo_In.categorys.length;

      function compute(interval) {
        i = 0;
        j = interval + 1; //循环遍历数组

        while (i < len && j < len) {
          //比较相邻标签是否重叠
          distance = categorySize * (j - i) - (labelSizes[j].withGapSize + labelSizes[i].withGapSize) / 2;

          if (distance < 0) {
            //如果重叠，间隔加一，然后递归
            compute(interval + 1); //结束本循环

            return;
          } else {
            //如果不重叠，为下次循环确定数组索引
            i = j;
            j = i + interval + 1;
          }
        } //如果遍历结束，设置


        cAxisInfo_Out.interval = interval;
      } //执行


      compute(0);
    }
  }, {
    key: "_getItemAndComputeMinMax",
    value: function _getItemAndComputeMinMax() {
      var vAxisInfo_In = this.vAxisInfo_In,
          vAxisInfo_Out = this._vAxisInfo_Out,
          series = this.chartInfo_In.series,
          ser,
          itemPool = this._itemPool,
          itemArray = this._itemArray,
          item,
          plusArr = [],
          minusArr = [],
          stackName,
          i,
          j,
          len1,
          len2; //(1)遍历第一个系列的全部数据，找到第一个有效数据，为最大最小赋初值

      ser = series[0];
      len1 = ser.data.length;

      for (i = 0; i < len1; i++) {
        if (ser.data[i] != _support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].DIRTY) {
          vAxisInfo_Out.min = vAxisInfo_Out.max = ser.data[i];
          break;
        }
      } //(2)从池中取出项目对象，同时求得最大最小值


      len2 = series.length;

      for (i = 0; i < len1; i++) {
        //(2-1)初始化
        stackName = '';
        plusArr.length = minusArr.length = 0; //(2-2)生成项目对象

        for (j = 0; j < len2; j++) {
          //(2-2-1)取得系列
          ser = series[j]; //(2-2-2)比较求得最值
          //比较该系列和上一系列是否具有相同的(累积名称)
          //如果(累积名称)不相同或为null(不需要累积)，则把此前积累的数据传给比较函数，然后初始化相关变量，为新的累积做准备

          if (ser.stackName == '' || ser.stackName != stackName) {
            //比较
            this._compare(plusArr, minusArr); //为新的累积做准备


            stackName = ser.stackName; //更新(累积名称)，用于此后的比较

            plusArr.length = minusArr.length = 0; //清空数组
          } //(2-2-3)从池中获取项目对象，并重新设置属性


          item = itemPool.getObj(); //判断是否为脏数据(无效数据)

          if (ser.data[i] == _support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].DIRTY) {
            item.dirtyFlag = true;
            item.value = Number.NaN;
            item.stackValue = Number.NaN;
          } else {
            item.dirtyFlag = false;
            item.value = ser.data[i];
            item.stackValue = 0;
          }

          item.stackName = ser.stackName; //(2-2-4)加入到数组

          itemArray[j].push(item); //(2-2-5)积累相同(累积名称)的项目，用于(2-2-2)的比较

          if (item.dirtyFlag == false) {
            if (item.value >= 0) {
              plusArr.push(item);
            } else if (item.value < 0) {
              minusArr.push(item);
            }
          }
        } //(2-3)最后一次比较


        this._compare(plusArr, minusArr);
      } //(3)判断用户是否指定了最大最小值


      if (vAxisInfo_In.min != Number.MIN_VALUE && vAxisInfo_In.min < vAxisInfo_Out.min) {
        vAxisInfo_Out.min = vAxisInfo_In.min;
      }

      if (vAxisInfo_In.max != Number.MAX_VALUE && vAxisInfo_In.max > vAxisInfo_Out.max) {
        vAxisInfo_Out.max = vAxisInfo_In.max;
      } //(4)判断是否在值轴上扩展 0，并据此调整最值


      if (vAxisInfo_In.zeroExtend == true) {
        if (vAxisInfo_Out.min > 0 && vAxisInfo_Out.max > 0) //同为正数
          {
            vAxisInfo_Out.min = 0;
          } else if (vAxisInfo_Out.min < 0 && vAxisInfo_Out.max < 0) {
          //同为负数
          vAxisInfo_Out.max = 0;
        }
      }
    }
  }, {
    key: "_compare",
    value: function _compare(plusArr, minusArr) {
      //累计正值，并比较最值
      var item, num, i, len;
      num = 0;
      len = plusArr.length;

      if (len > 0) {
        for (i = 0; i < len; i++) {
          item = plusArr[i];
          item.stackValue = num;
          num += item.value;
        }

        this._setMinMax(num);
      } //累计负值，并比较最值


      num = 0;
      len = minusArr.length;

      if (len > 0) {
        for (i = 0; i < len; i++) {
          item = minusArr[i];
          item.stackValue = num;
          num += item.value;
        }

        this._setMinMax(num);
      }
    }
  }, {
    key: "_setMinMax",
    value: function _setMinMax(num) {
      var vAxisInfo_Out = this._vAxisInfo_Out;

      if (num < vAxisInfo_Out.min) {
        vAxisInfo_Out.min = num;
      } else if (num > vAxisInfo_Out.max) {
        vAxisInfo_Out.max = num;
      }
    }
  }, {
    key: "_computeValueAxisOtherInfo",
    value: function _computeValueAxisOtherInfo(axisType, vAxisInfo_In, vAxisInfo_Out) {
      var canvas = this._canvas,
          chartInfo_In = this.chartInfo_In,
          scaleUnit,
          arr,
          i; //计算标签间隔

      vAxisInfo_Out.scaleUnit = _support_Utility_js__WEBPACK_IMPORTED_MODULE_18__["default"].getScaleUnit(vAxisInfo_Out.min, vAxisInfo_Out.max, vAxisInfo_In.labelMaxCount); //计算横轴标签小数位数

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


      if (axisType == _support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].X_AXIS) {
        vAxisInfo_Out.unitValueSize = this._chartPixelWidth / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
        vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
        vAxisInfo_Out.originPosition = chartInfo_In.bodyLeft + vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
      } else {
        vAxisInfo_Out.unitValueSize = this._chartPixelHeight / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
        vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
        vAxisInfo_Out.originPosition = canvas.height - chartInfo_In.bodyBottom - vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
      }
    }
  }, {
    key: "_setItemSizeAndPositionAndTween",
    value: function _setItemSizeAndPositionAndTween() {
      var chartInfo_In = this.chartInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          vAxisInfo_Out = this._vAxisInfo_Out,
          itemArr = this._itemArray,
          item,
          stackName = '',
          offset,
          twEngine = this._twEngine,
          tweenCallBack = this._tweenCallBack,
          from,
          to,
          twData,
          twAction,
          twDataArr = [],
          num,
          arr,
          i,
          j,
          len1,
          len2,
          y; //预先算出一些中间结果，用于此后的循环

      y = vAxisInfo_Out.originPosition; //循环项目对象进行设定

      len1 = itemArr.length;
      len2 = itemArr[0].length;

      for (i = 0; i < len1; i++) {
        //获取指定系列对应的项目数组
        arr = itemArr[i];
        item = arr[0]; //计算偏移量

        if (i == 0) {
          offset = chartInfo_In.bodyLeft + cAxisInfo_Out.offsetSize;
        } else {
          if (item.stackName == '' || item.stackName != stackName) {
            offset += cAxisInfo_Out.itemSize;
          }
        }

        stackName = item.stackName; //为各个项目设定大小和位置

        for (j = 0; j < len2; j++) {
          //取得项目对象
          item = arr[j];
          if (item.dirty == true) continue; //设置坐标

          item.x = _support_Utility_js__WEBPACK_IMPORTED_MODULE_18__["default"].adjustPosition(offset + j * cAxisInfo_Out.categorySize);

          if (item.value >= 0) {
            item.y = y - vAxisInfo_Out.unitValueSize * (item.value + item.stackValue - vAxisInfo_Out.originValue);
          } else {
            item.y = y - vAxisInfo_Out.unitValueSize * (item.stackValue - vAxisInfo_Out.originValue);
          }

          item.y = _support_Utility_js__WEBPACK_IMPORTED_MODULE_18__["default"].adjustPosition(item.y); //设置项目尺寸（将值转换为尺寸（需根据是否<累积>来计算值））

          if (item.stackValue != 0) {
            num = Math.abs(item.value);
          } else {
            num = Math.abs(item.value - vAxisInfo_Out.originValue);
          }

          item.width = cAxisInfo_Out.itemSize;
          item.height = vAxisInfo_Out.unitValueSize * num; //设置缓动数据

          from = [0];
          to = [item.height];
          twData = twEngine.getTWData();
          twData.setData(item, from, to, tweenCallBack);
          twDataArr.push(twData);
        }
      }

      twAction = twEngine.getTWAction();
      twAction.setData(twDataArr, _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_20__["default"].Bounce.easeOut, 1000);
      twEngine.setFirstTWAction(twAction);
    }
  }, {
    key: "_addOrRemoveEventListener",
    value: function _addOrRemoveEventListener(command) {
      var canvas = this._canvas,
          chartInfo_In = this.chartInfo_In,
          series = chartInfo_In.series,
          ser,
          left = chartInfo_In.bodyLeft,
          //图表绘制区域的边界
      right = canvas.width - chartInfo_In.bodyRight,
          top = chartInfo_In.bodyTop,
          bottom = canvas.height - chartInfo_In.bodyBottom,
          categorys = this.cAxisInfo_In.categorys,
          categorySize = this._cAxisInfo_Out.categorySize,
          tip = this._tipDiv,
          table,
          p,
          rect,
          //Canvas包围盒相关
      num,
          index,
          position = {
        x: -1,
        y: -1
      },
          i,
          len,
          me = this;

      function doMouseMove(e) {
        //获取鼠标相对于Canvas的位置
        rect = canvas.getBoundingClientRect();
        _support_Utility_js__WEBPACK_IMPORTED_MODULE_18__["default"].windowToCanvas(rect.left, rect.top, rect.width, rect.height, canvas.width, canvas.height, e.clientX, e.clientY, position); //判断鼠标是否位于图表数据显示区域，如果不是则隐藏tip，然后退出

        if (position.x < left || position.x > right || position.y < top || position.y > bottom) {
          tip.style.display = 'none';
          return;
        } //根据位置计算其代表的类目索引


        index = Math.floor((position.x - left) / categorySize); //显示tip

        tip.style.display = 'block'; //更新tip

        p = tip.childNodes[0];

        if (p.innerText == '' || p.innerText != categorys[index]) {
          //更新类目名称
          p.innerText = categorys[index]; //更新数据系列

          table = tip.childNodes[1];
          len = series.length;

          for (i = 0; i < len; i++) {
            ser = series[i];
            table.rows[i].cells[2].innerText = ser.data[index];
          }
        } //移动tip
        //设定tip的X坐标


        num = tip.offsetWidth + _support_Styles_js__WEBPACK_IMPORTED_MODULE_19__["default"].TIP_LOCATION_OFFSET;

        if (position.x + num > rect.width) {
          tip.style.left = position.x - num + 'px';
        } else {
          tip.style.left = position.x + _support_Styles_js__WEBPACK_IMPORTED_MODULE_19__["default"].TIP_LOCATION_OFFSET + 'px';
        } //设定tip的Y坐标


        num = tip.offsetHeight + _support_Styles_js__WEBPACK_IMPORTED_MODULE_19__["default"].TIP_LOCATION_OFFSET;

        if (position.y + num > rect.height) {
          tip.style.top = position.y - num + 'px';
        } else {
          tip.style.top = position.y + _support_Styles_js__WEBPACK_IMPORTED_MODULE_19__["default"].TIP_LOCATION_OFFSET + 'px';
        } //更新选择项，并重绘


        if (index != chartInfo_In.selectedIndex) {
          chartInfo_In.selectedIndex = index;
          me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP4;
        }
      }

      function doMouseOut(e) {
        //隐藏tip
        tip.style.display = 'none';
      } //执行


      if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].ADD && me._eventListenersAddedFlag == false) {
        canvas.addEventListener('mousemove', doMouseMove);
        canvas.addEventListener('mouseout', doMouseOut);
        me.eventListenersAddedFlag = true;
      } else if (command == _support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].REMOVE && me._eventListenersAddedFlag == true) {
        canvas.removeEventListener('mousemove', doMouseMove);
        canvas.removeEventListener('mouseout', doMouseOut);
        me.eventListenersAddedFlag = false;
      }
    }
  }, {
    key: "_startPaint",
    value: function _startPaint() {
      var me = this;

      function paint() {
        switch (me._status) {
          case _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP1:
            me._paint(); //绘制图表并保存绘图表面


            me._twEngine.start(); //启动缓动，从下一帧开始缓动


            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP2;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP2:
            //绘制缓动效果
            //      如果缓动没有结束，就绘制
            //      反之，设置状态，在下一停止绘制
            if (me._twEngine.nextFrame() == true) {
              me._paint();
            } else {
              me._twEngine.stop(); //停止缓动


              me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP3;
            }

            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP3:
            me._paint(); //缓存Canvas绘图表面，绘制选项


            me._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].ADD);

            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].WAITING;
            break;

          case _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP4:
            me._paint(); //恢复Canvas绘图表面，绘制选项


            me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].WAITING;
            break;
        } //循环调用自己，进行绘画


        if (me._status != _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STOP) {
          me._animationFrameID = window.requestNextAnimationFrame(paint);
        }
      } //设置初始状态，开始绘制


      me._status = _support_Status_js__WEBPACK_IMPORTED_MODULE_17__["default"].STEP1;
      paint();
    }
    /*
     * 缓动效果
     */

  }, {
    key: "_tweenCallBack",
    value: function _tweenCallBack(target, resultArray) {
      target.height = resultArray[0];
    }
  }]);

  return Chart;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./src/chart/column/css/chart.css":
/*!****************************************!*\
  !*** ./src/chart/column/css/chart.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/column/css/chart.css");

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

/***/ "./src/chart/column/info/CAxisInfo_In.js":
/*!***********************************************!*\
  !*** ./src/chart/column/info/CAxisInfo_In.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CAxisInfo_In; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_info_CAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/info/CAxisInfoBase_In.js */ "./src/base/info/CAxisInfoBase_In.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CAxisInfo_In =
/*#__PURE__*/
function (_CAxisInfoBase_In) {
  _inherits(CAxisInfo_In, _CAxisInfoBase_In);

  function CAxisInfo_In() {
    var _this;

    _classCallCheck(this, CAxisInfo_In);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CAxisInfo_In).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.sizeRate = 0.6; //柱状体宽度和单位类目长度的比率，是不大于1的正数
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }

  return CAxisInfo_In;
}(_base_info_CAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/chart/column/info/CAxisInfo_Out.js":
/*!************************************************!*\
  !*** ./src/chart/column/info/CAxisInfo_Out.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CAxisInfo_Out; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_info_CAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/info/CAxisInfoBase_Out.js */ "./src/base/info/CAxisInfoBase_Out.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CAxisInfo_Out =
/*#__PURE__*/
function (_CAxisInfoBase_Out) {
  _inherits(CAxisInfo_Out, _CAxisInfoBase_Out);

  function CAxisInfo_Out() {
    var _this;

    _classCallCheck(this, CAxisInfo_Out);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CAxisInfo_Out).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.itemSize = 0; //一个项目在轴上占用的长度

    _this.offsetSize = 0; //某分类中第一个数据系列项目在轴上距离左侧最近刻度的长度
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }

  return CAxisInfo_Out;
}(_base_info_CAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/chart/column/painter/Painter.js":
/*!*********************************************!*\
  !*** ./src/chart/column/painter/Painter.js ***!
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

    this._cAxisInfo_In;
    this._cAxisInfo_Out; //数值轴输入、输出数据

    this._vAxisInfo_In;
    this._vAxisInfo_Out;
    this._itemArray; //存储散点的数组

    this._vAxisLabelCount; //值轴数字标签个数

    this._selectedIndex; ///////////////////////
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
      this._cAxisInfo_In = chart.cAxisInfo_In;
      this._cAxisInfo_Out = chart._cAxisInfo_Out;
      this._vAxisInfo_In = chart.vAxisInfo_In;
      this._vAxisInfo_Out = chart._vAxisInfo_Out;
      this._itemArray = chart._itemArray;
      this._selectedIndex = this._chartInfo_In.selectedIndex; //计算值轴标签个数，供此后使用

      this._vAxisLabelCount = Math.floor((this._vAxisInfo_Out.maxScale - this._vAxisInfo_Out.minScale) / this._vAxisInfo_Out.scaleUnit) + 1;
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
          ctx.putImageData(this._canvasSurface, 0, 0); //绘制柱状体

          this._paintColumns();

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP3:
          //缓存Canvas绘图表面（完整的图表）
          //缓存此时的_ctx绘图表面（全尺寸）
          this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight); //绘制选择项

          this._paintSelector();

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP4:
          //绘制选择项
          //恢复_ctx的绘图表面
          ctx.putImageData(this._canvasSurface, 0, 0); //绘制选择项

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
          scaleUnitSize = this._vAxisInfo_Out.scaleUnitSize,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          vAxisLabelCount = this._vAxisLabelCount,
          x1,
          x2,
          y1,
          num,
          i;
      ctx.save(); //设置样式

      ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].GRID_LINE_WIDTH;
      ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].GRID_LINE_COLOR;
      ctx.setLineDash(_support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].GRID_LINE_DASH); //绘制横向虚线

      x1 = chartInfo_In.bodyLeft;
      x2 = canvasWidth - chartInfo_In.bodyRight;
      num = canvasHeight - chartInfo_In.bodyBottom;

      for (i = 0; i < vAxisLabelCount; i++) {
        y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(num - scaleUnitSize * i);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: "_paintAxis",
    value: function _paintAxis() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          vAxisInfo_Out = this._vAxisInfo_Out,
          originPosition = this._vAxisInfo_Out.originPosition,
          vAxisLabelCount = this._vAxisLabelCount,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          categorys = this._cAxisInfo_In.categorys,
          integer,
          num,
          x1,
          x2,
          y1,
          y2,
          i,
          len;
      ctx.save(); //(1)设置样式

      ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_LINE_WIDTH;
      ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_LINE_COLOR; //(2)绘制横轴

      x1 = chartInfo_In.bodyLeft - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE; //横向起点

      x2 = canvasWidth - chartInfo_In.bodyRight + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE; //横向终点
      //计算值轴原点Y坐标

      y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(originPosition);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y1);
      ctx.stroke(); //(3)绘制横轴刻度

      y2 = y1 + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE;
      integer = cAxisInfo_Out.interval + 1;
      len = categorys.length;

      for (i = 0; i < len; i += integer) {
        x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * i);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.stroke();
      } //(4)绘制纵轴


      x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(chartInfo_In.bodyLeft);
      y1 = chartInfo_In.bodyTop - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE;
      y2 = canvasHeight - chartInfo_In.bodyBottom + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1, y2);
      ctx.stroke(); //(5)绘制纵轴刻度

      x1 = chartInfo_In.bodyLeft - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].AXIS_SCALE_UNIT_LINE_SIZE;
      x2 = chartInfo_In.bodyLeft;
      num = canvasHeight - chartInfo_In.bodyBottom;

      for (i = 0; i < vAxisLabelCount; i++) {
        y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(num - vAxisInfo_Out.scaleUnitSize * i);
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
          cAxisInfo_In = this._cAxisInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          vAxisInfo_In = this._vAxisInfo_In,
          vAxisInfo_Out = this._vAxisInfo_Out,
          categorys = cAxisInfo_In.categorys,
          vAxisLabelCount = this._vAxisLabelCount,
          canvasHeight = this._canvas.height,
          x1,
          y1,
          y2,
          integer,
          num,
          str,
          angle,
          i,
          len;
      ctx.save(); //(1)设置文本样式

      ctx.font = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LABEL_FONT;
      ctx.textBaseline = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_BASE_LINE_MIDDLE; //(2)绘制横轴标签

      angle = cAxisInfo_In.labelRotate % 360;
      len = categorys.length;
      integer = cAxisInfo_Out.interval + 1;

      if (angle == 0) {
        //设置文本横向对齐方式
        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_CENTER; //绘制文本

        y1 = canvasHeight - chartInfo_In.bodyBottom + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].XAXIS_LABEL_OFFSET;

        for (i = 0; i < len; i += integer) {
          x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * (i + 0.5);
          ctx.fillText(categorys[i], x1, y1);
        }
      } else {
        //转换为弧度
        angle = -angle * Math.PI / 180; //设置文本横向对齐方式

        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_RIGHT; //绘制文本

        y1 = canvasHeight - chartInfo_In.bodyBottom + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].XAXIS_LABEL_OFFSET_FOR_ROTATE;

        for (i = 0; i < len; i += integer) {
          ctx.save();
          x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * (i + 0.5);
          ctx.translate(x1, y1);
          ctx.rotate(angle);
          ctx.fillText(categorys[i], 0, 0);
          ctx.restore();
        }
      } //获取旋转角度


      angle = vAxisInfo_In.labelRotate % 360; //设置文本横向对齐方式

      ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_RIGHT; //绘制文本

      x1 = chartInfo_In.bodyLeft - _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].YAXIS_LABEL_OFFSET;
      y1 = canvasHeight - chartInfo_In.bodyBottom;

      if (angle == 0) {
        for (i = 0; i < vAxisLabelCount; i++) {
          y2 = y1 - vAxisInfo_Out.scaleUnitSize * i;
          num = vAxisInfo_Out.minScale + vAxisInfo_Out.scaleUnit * i;
          str = num.toFixed(vAxisInfo_Out.decimalDigit);
          ctx.fillText(str, x1, y2);
        }
      } else {
        //转换为弧度
        angle = -angle * Math.PI / 180; //绘制文本

        for (i = 0; i < vAxisLabelCount; i++) {
          ctx.save();
          y2 = y1 - vAxisInfo_Out.scaleUnitSize * i;
          ctx.translate(x1, y2);
          ctx.rotate(angle);
          num = vAxisInfo_Out.minScale + vAxisInfo_Out.scaleUnit * i;
          str = num.toFixed(vAxisInfo_Out.decimalDigit);
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
    key: "_paintColumns",
    value: function _paintColumns() {
      var ctx = this._ctx,
          colors = this._chartInfo_In.colors,
          itemArray = this._itemArray,
          item,
          arr,
          i,
          j,
          len1,
          len2;
      ctx.save(); //循环系列

      len1 = itemArray.length;
      len2 = itemArray[0].length;

      for (i = 0; i < len1; i++) {
        arr = itemArray[i];

        for (j = 0; j < len2; j++) {
          item = arr[j];

          if (item.dirtyFlag == false) {
            ctx.fillStyle = colors[i];
            ctx.fillRect(item.x, item.y, item.width, item.height);
            ctx.fill();
          }
        }
      }

      ctx.restore();
    }
  }, {
    key: "_paintSelector",
    value: function _paintSelector() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          selectedIndex = this._selectedIndex,
          canvasHeight = this._canvas.height,
          x,
          y,
          w,
          h;

      if (selectedIndex >= 0) {
        ctx.save();
        x = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * selectedIndex);
        y = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(chartInfo_In.bodyTop);
        w = Math.floor(cAxisInfo_Out.categorySize);
        h = canvasHeight - chartInfo_In.bodyTop - chartInfo_In.bodyBottom;
        ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].COLUMN_SELECTOR_LINE_WIDTH;
        ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].COLUMN_SELECTOR_LINE_COLOR;
        ctx.strokeRect(x, y, w, h);
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

/***/ "./src/chart/column/parts/Column.js":
/*!******************************************!*\
  !*** ./src/chart/column/parts/Column.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/chart/ChartBase.js */ "./src/base/chart/ChartBase.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Column =
/*#__PURE__*/
function (_PartBase) {
  _inherits(Column, _PartBase);

  function Column() {
    var _this;

    _classCallCheck(this, Column);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Column).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.value;
    _this.stackName = '';
    _this.stackValue; ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }

  return Column;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/chart/column/series/Series.js":
/*!*******************************************!*\
  !*** ./src/chart/column/series/Series.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Series; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/series/SeriesBase.js */ "./src/base/series/SeriesBase.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Series =
/*#__PURE__*/
function (_SeriesBase) {
  _inherits(Series, _SeriesBase);

  function Series() {
    var _this;

    _classCallCheck(this, Series);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Series).call(this)); ///////////////////////
    // 公有成员变量
    ///////////////////////

    _this.stackName = ''; ///////////////////////
    // 私有成员变量
    ///////////////////////
    ///////////////////////
    // 初始化
    ///////////////////////

    return _this;
  }

  return Series;
}(_base_series_SeriesBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



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

/***/ "./webpackEntry/columnEntry.js":
/*!*************************************!*\
  !*** ./webpackEntry/columnEntry.js ***!
  \*************************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_column_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/column/css/chart.css */ "./src/chart/column/css/chart.css");
/* harmony import */ var _src_chart_column_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_column_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_column_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/column/Chart.js */ "./src/chart/column/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_column_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_chart_column_series_Series_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/chart/column/series/Series.js */ "./src/chart/column/series/Series.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_chart_column_series_Series_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2NvbHVtbi9jc3MvY2hhcnQuY3NzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9jaGFydC9DaGFydEJhc2UuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9pbmZvL0F4aXNDaGFydEluZm9CYXNlX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9DQXhpc0luZm9CYXNlX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9DQXhpc0luZm9CYXNlX091dC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vQ2hhcnRJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9PdXQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9zZXJpZXMvU2VyaWVzQmFzZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9jb2x1bW4vQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvY29sdW1uL2Nzcy9jaGFydC5jc3M/YjA0MSIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9jb2x1bW4vaW5mby9DQXhpc0luZm9fSW4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvY29sdW1uL2luZm8vQ0F4aXNJbmZvX091dC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9jb2x1bW4vcGFpbnRlci9QYWludGVyLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2NvbHVtbi9wYXJ0cy9Db2x1bW4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvY29sdW1uL3Nlcmllcy9TZXJpZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9zdXBwb3J0L09iamVjdFBvb2wuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9VdGlsaXR5LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXQWN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXQWxnb3JpdGhtLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3R3ZWVuL1RXRGF0YS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3dlYnBhY2tFbnRyeS9jb2x1bW5FbnRyeS5qcyJdLCJuYW1lcyI6WyJDaGFydEJhc2UiLCJfcGFyZW50RGl2IiwiX2NhbnZhcyIsIl90aXBEaXYiLCJfcGFpbnRlciIsIl9zdGF0dXMiLCJfZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWciLCJfc3VyZmFjZUltYWdlRGF0YSIsIl9hbmltYXRpb25GcmFtZUlEIiwiU3RhdHVzIiwiU1RPUCIsInBhaW50ZXIiLCJnZXRJbnN0YW5jZSIsInNldENoYXJ0IiwicGFpbnQiLCJjbGFzc05hbWUiLCJ0aXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIkF4aXNDaGFydEluZm9CYXNlX0luIiwieEF4aXNOYW1lIiwieUF4aXNOYW1lIiwieEF4aXNOYW1lQm90dG9tIiwieUF4aXNOYW1lVG9wIiwiQ2hhcnRJbmZvQmFzZV9JbiIsIkNBeGlzSW5mb0Jhc2VfSW4iLCJjYXRlZ29yeXMiLCJpbnRlcnZhbCIsImxhYmVsUm90YXRlIiwibGFiZWxHYXAiLCJDQXhpc0luZm9CYXNlX091dCIsImxhYmVscyIsImxhYmVsU2l6ZXMiLCJpbnRlcnZhbFNpemUiLCJjYXRlZ29yeVNpemUiLCJ0aXRsZSIsInRpdGxlVG9wIiwidGl0bGVMZWZ0IiwibGVnZW5kVG9wIiwibGVnZW5kTGVmdCIsImxlZ2VuZFJpZ2h0IiwiYm9keVRvcCIsImJvZHlCb3R0b20iLCJib2R5TGVmdCIsImJvZHlSaWdodCIsImNvbG9ycyIsInNlcmllcyIsInNlbGVjdGVkSW5kZXgiLCJWQXhpc0luZm9CYXNlX0luIiwibWluIiwiTnVtYmVyIiwiTUlOX1ZBTFVFIiwibWF4IiwiTUFYX1ZBTFVFIiwibGFiZWxNYXhDb3VudCIsInplcm9FeHRlbmQiLCJWQXhpc0luZm9CYXNlX091dCIsIm1pblNjYWxlIiwibWF4U2NhbGUiLCJvcmlnaW5JbmRleCIsIm9yaWdpblZhbHVlIiwib3JpZ2luUG9zaXRpb24iLCJ1bml0VmFsdWVTaXplIiwic2NhbGVVbml0Iiwic2NhbGVVbml0U2l6ZSIsImRlY2ltYWxEaWdpdCIsIlNlcmllc0Jhc2UiLCJuYW1lIiwiZGF0YSIsInNlbGVjdGVkIiwiQ2hhcnQiLCJwYXJlbnREaXZJRCIsImNoYXJ0SW5mb19JbiIsImNBeGlzSW5mb19JbiIsIkNBeGlzSW5mb19JbiIsInZBeGlzSW5mb19JbiIsIl9jQXhpc0luZm9fT3V0IiwiQ0F4aXNJbmZvX091dCIsIl92QXhpc0luZm9fT3V0IiwiX2l0ZW1BcnJheSIsIl9pdGVtUG9vbCIsIl9jaGFydFBpeGVsV2lkdGgiLCJfY2hhcnRQaXhlbEhlaWdodCIsIl9wYXJlbnREaXZDbGFzc05hbWUiLCJfdGlwRGl2Q2xhc3NOYW1lIiwiX3RoaXJkQ29sQ2xhc3NOYW1lIiwiX3R3RW5naW5lIiwiVFdFbmdpbmUiLCJfc2V0UGFpbnRlciIsIlBhaW50ZXIiLCJnZXRFbGVtZW50QnlJZCIsIl9jcmVhdGVUaXAiLCJPYmplY3RQb29sIiwiQ29sdW1uIiwiX2NoZWNrIiwiY29uc29sZSIsImxvZyIsIl9yZXNldCIsIl9jb21wdXRlQ2F0ZWdvcnlJbmZvIiwiX2dldENhdGVnb3J5SW50ZXJ2YWwiLCJfZ2V0SXRlbUFuZENvbXB1dGVNaW5NYXgiLCJfY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyIsIkNvbnN0YW50cyIsIllfQVhJUyIsIl9zZXRJdGVtU2l6ZUFuZFBvc2l0aW9uQW5kVHdlZW4iLCJfc3RhcnRQYWludCIsInNlciIsImkiLCJsZW4xIiwibGVuMiIsInJ0biIsImxlbmd0aCIsImNhbnZhcyIsImRpdiIsIml0ZW1BcnIiLCJsZW4iLCJfYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyIiwiUkVNT1ZFIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIl9pbml0VGlwIiwicmVsZWFzZUFsbCIsInJlbGVhc2VBbGxUV0RhdGEiLCJyZWxlYXNlQWxsVFdBY3Rpb24iLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInRpcERpdiIsInRhYmxlIiwicm93IiwidGQiLCJzcGFuIiwic3R5bGUiLCJkaXNwbGF5IiwiY2hpbGROb2RlcyIsImlubmVySFRNTCIsImluc2VydFJvdyIsImluc2VydENlbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjQXhpc0luZm9fT3V0Iiwic3RhY2tOYW1lIiwiY291bnQiLCJudW0iLCJzaXplUmF0ZSIsIml0ZW1TaXplIiwib2Zmc2V0U2l6ZSIsImN0eCIsInciLCJnZXRDb250ZXh0IiwiZm9udCIsIlN0eWxlcyIsIkxBQkVMX0ZPTlQiLCJtZWFzdXJlVGV4dCIsInNpemUiLCJ3aXRoR2FwU2l6ZSIsIl9jb21wdXRlQ2F0ZWdvcnlJbnRlcnZhbCIsImRpc3RhbmNlIiwiaiIsImNvbXB1dGUiLCJ2QXhpc0luZm9fT3V0IiwiaXRlbVBvb2wiLCJpdGVtQXJyYXkiLCJpdGVtIiwicGx1c0FyciIsIm1pbnVzQXJyIiwiRElSVFkiLCJfY29tcGFyZSIsImdldE9iaiIsImRpcnR5RmxhZyIsInZhbHVlIiwiTmFOIiwic3RhY2tWYWx1ZSIsInB1c2giLCJfc2V0TWluTWF4IiwiYXhpc1R5cGUiLCJhcnIiLCJVdGlsaXR5IiwiZ2V0U2NhbGVVbml0IiwidG9TdHJpbmciLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsIlhfQVhJUyIsIm9mZnNldCIsInR3RW5naW5lIiwidHdlZW5DYWxsQmFjayIsIl90d2VlbkNhbGxCYWNrIiwiZnJvbSIsInRvIiwidHdEYXRhIiwidHdBY3Rpb24iLCJ0d0RhdGFBcnIiLCJ5IiwiZGlydHkiLCJ4IiwiYWRqdXN0UG9zaXRpb24iLCJhYnMiLCJnZXRUV0RhdGEiLCJzZXREYXRhIiwiZ2V0VFdBY3Rpb24iLCJUV0FsZ29yaXRobSIsIkJvdW5jZSIsImVhc2VPdXQiLCJzZXRGaXJzdFRXQWN0aW9uIiwiY29tbWFuZCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInAiLCJyZWN0IiwiaW5kZXgiLCJwb3NpdGlvbiIsIm1lIiwiZG9Nb3VzZU1vdmUiLCJlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93VG9DYW52YXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImlubmVyVGV4dCIsInJvd3MiLCJjZWxscyIsIlRJUF9MT0NBVElPTl9PRkZTRVQiLCJTVEVQNCIsImRvTW91c2VPdXQiLCJBREQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU1RFUDEiLCJfcGFpbnQiLCJzdGFydCIsIlNURVAyIiwibmV4dEZyYW1lIiwic3RvcCIsIlNURVAzIiwiV0FJVElORyIsInJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJyZXN1bHRBcnJheSIsIl9jaGFydCIsIl9jdHgiLCJfY2FudmFzU3VyZmFjZSIsIl9jaGFydEluZm9fSW4iLCJfY0F4aXNJbmZvX0luIiwiX3ZBeGlzSW5mb19JbiIsIl92QXhpc0xhYmVsQ291bnQiLCJfc2VsZWN0ZWRJbmRleCIsImNoYXJ0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGVhclJlY3QiLCJfcGFpbnRUaXRsZSIsIl9wYWludExlZ2VuZCIsIl9wYWludEdyaWQiLCJfcGFpbnRBeGlzIiwiX3BhaW50TGFiZWwiLCJfcGFpbnRBeGlzTmFtZSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsIl9wYWludENvbHVtbnMiLCJfcGFpbnRTZWxlY3RvciIsInNhdmUiLCJUSVRMRV9GT05UIiwidGV4dEFsaWduIiwiVEVYVF9BTElHTl9MRUZUIiwidGV4dEJhc2VsaW5lIiwiVEVYVF9CQVNFX0xJTkVfVE9QIiwiZmlsbFRleHQiLCJyZXN0b3JlIiwiaCIsInN0ciIsIkxFR0VORF9GT05UIiwiZ2V0VGV4dEhlaWdodCIsImZpbGxTdHlsZSIsIkZPTlRfRklMTF9DT0xPUiIsIkxFR0VORF9TSEFQRV9URVhUX0dBUCIsImZpbGxSZWN0IiwiTEVHRU5EX0dBUCIsInZBeGlzTGFiZWxDb3VudCIsIngxIiwieDIiLCJ5MSIsImxpbmVXaWR0aCIsIkdSSURfTElORV9XSURUSCIsInN0cm9rZVN0eWxlIiwiR1JJRF9MSU5FX0NPTE9SIiwic2V0TGluZURhc2giLCJHUklEX0xJTkVfREFTSCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImludGVnZXIiLCJ5MiIsIkFYSVNfTElORV9XSURUSCIsIkFYSVNfTElORV9DT0xPUiIsIkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkUiLCJhbmdsZSIsIlRFWFRfQkFTRV9MSU5FX01JRERMRSIsIlRFWFRfQUxJR05fQ0VOVEVSIiwiWEFYSVNfTEFCRUxfT0ZGU0VUIiwiUEkiLCJURVhUX0FMSUdOX1JJR0hUIiwiWEFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJZQVhJU19MQUJFTF9PRkZTRVQiLCJ0b0ZpeGVkIiwiQVhJU19OQU1FX0ZPTlQiLCJmaWxsIiwiQ09MVU1OX1NFTEVDVE9SX0xJTkVfV0lEVEgiLCJDT0xVTU5fU0VMRUNUT1JfTElORV9DT0xPUiIsInN0cm9rZVJlY3QiLCJpbnN0YW5jZSIsIlBhcnRCYXNlIiwiU2VyaWVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmdW5jIiwic2V0VGltZW91dCIsIkhBTEZfUElYRUwiLCJDTE9TRV9UT19aRVJPIiwiVEVYVF9CQVNFX0xJTkVfQk9UVE9NIiwiVEVYVF9CQVNFX0xJTkVfSURFT0dSQVBISUMiLCJSQURJQU5fVU5JVCIsImNsYXp6IiwicGFyYSIsIl9jbGFzcyIsIl9wYXJhIiwiX2NvdW50IiwiX3Bvb2wiLCJwb29sIiwib2JqIiwiU1RFUDUiLCJZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURSIsIkJVQkJMRV9BTFBIQSIsIkxJTkVfTElORV9XSURUSCIsIkxJTkVfQVJFQV9BTFBIQSIsIkxJTkVfTUFSS1BPSU5UX1dJRFRIIiwiTElORV9NQVJLUE9JTlRfUkFESVVTIiwiTElORV9NQVJLUE9JTlRfQkFLX0NPTE9SIiwiTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIIiwiTElORV9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiUElFX0xBQkVMX0lOTkVSX0ZPTlRfQ09MT1IiLCJQSUVfTEFCRUxfR1VJREVfTElORTFfU0laRSIsIlBJRV9MQUJFTF9HVUlERV9MSU5FMl9TSVpFIiwiUElFX0xBQkVMX09GRlNFVCIsIlBJRV9TRUxFQ1RPUl9UUkFOU0xBVEUiLCJQSUVfU0VMRUNUT1JfTElORV9XSURUSCIsIlBJRV9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiUkFEQVJfTEFCRUxfRk9OVCIsIlJBREFSX0xBQkVMX0NPTE9SIiwiUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUIiwiUkFEQVJfTElORV9XSURUSCIsIlJBREFSX0JBS19MSU5FX1dJRFRIIiwiUkFEQVJfQkFLX0xJTkVfQ09MT1IiLCJSQURBUl9CQUtfRklMTF9DT0xPUiIsIlNDQVRURVJfUE9JTlRfQUxQSEEiLCJTQ0FUVEVSX0NST1NTX0xJTkVfV0lEVEgiLCJTQ0FUVEVSX0NST1NTX0NPTE9SIiwiU1VOQlVSU19MQUJFTF9DT0xPUiIsIlNVTkJVUlNfQk9SREVSX0NPTE9SIiwic2NhbGVNYXhDb3VudCIsImF2ZyIsImdhcHMiLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJwb3ciLCJ4T1J5Iiwicm91bmQiLCJib3VuZGluZ0NsaWVudFJlY3RMZWZ0IiwiYm91bmRpbmdDbGllbnRSZWN0VG9wIiwiYm91bmRpbmdDbGllbnRSZWN0V2lkdGgiLCJib3VuZGluZ0NsaWVudFJlY3RIZWlnaHQiLCJnbG9ibGVYIiwiZ2xvYmxlWSIsImNhbnZhc0NvbnRleHQiLCJ0ZXh0IiwiVFdBY3Rpb24iLCJ0b3RsZVRpbWVzIiwiZGF0YUFycmF5IiwiYWxnb3JpdGhtIiwibmV4dEFjdGlvbiIsImR1cmF0aW9uIiwiY2VpbCIsIkZSQU1FX0RVUkFUSU9OIiwiYWN0aW9uIiwiY2FsbEJhY2siLCJ0IiwiYiIsImMiLCJkIiwiUXVhZCIsImVhc2VJbiIsImVhc2VJbk91dCIsIkN1YmljIiwiUXVhcnQiLCJRdWludCIsIlNpbmUiLCJjb3MiLCJzaW4iLCJFeHBvIiwiQ2lyYyIsInNxcnQiLCJFbGFzdGljIiwiYSIsInMiLCJhc2luIiwiQmFjayIsIlQiLCJ0d2VlbiIsIlRXRGF0YSIsImZyb21BcnJheSIsInRvQXJyYXkiLCJfYWN0aW9ucyIsIl9maXJzdEFjdGlvbiIsIl9jdXJyZW50QWN0aW9uIiwiX2FjdGlvblBvb2wiLCJfZGF0YVBvb2wiLCJfaXNQbGF5aW5nIiwiaW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURB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QyxHQUFHUSxHQUFoQixFQUFxQlIsQ0FBQyxFQUF0QixFQUEwQjtBQUN0QixhQUFLd1QsUUFBTCxDQUFjeFQsQ0FBZCxFQUFpQjhULElBQWpCO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEiLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29sdW1uXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRcIl0gPSByb290W1wiVFwiXSB8fCB7fSwgcm9vdFtcIlRcIl1bXCJjb2x1bW5cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnBhY2tFbnRyeS9jb2x1bW5FbnRyeS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNwYWNlcyA9IHJlcXVpcmUoJy4vX3N0cmluZy13cycpO1xudmFyIHNwYWNlID0gJ1snICsgc3BhY2VzICsgJ10nO1xudmFyIG5vbiA9ICdcXHUyMDBiXFx1MDA4NSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBBTElBUykge1xuICB2YXIgZXhwID0ge307XG4gIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KTtcbiAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcbiAgaWYgKEFMSUFTKSBleHBbQUxJQVNdID0gZm47XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24gKHN0cmluZywgVFlQRSkge1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgJE51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIEJhc2UgPSAkTnVtYmVyO1xudmFyIHByb3RvID0gJE51bWJlci5wcm90b3R5cGU7XG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ09GID0gY29mKHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKShwcm90bykpID09IE5VTUJFUjtcbnZhciBUUklNID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcbiAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYgKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSkge1xuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QTihCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSkge1xuICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfVxuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciAkbWluID0gTWF0aC5taW47XG52YXIgJHB1c2ggPSBbXS5wdXNoO1xudmFyICRTUExJVCA9ICdzcGxpdCc7XG52YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbnZhciBTVVBQT1JUU19ZID0gISEoZnVuY3Rpb24gKCkgeyB0cnkgeyByZXR1cm4gbmV3IFJlZ0V4cCgneCcsICd5Jyk7IH0gY2F0Y2ggKGUpIHt9IH0pKCk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyAweGZmZmZmZmZmIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSAkbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcclxcbiAqIOWbvuihqOWGheWFqOWxgOiuvuWumu+8iOW/hemhu+mhueebru+8iVxcclxcbiAqIOeUqOS6jua4hemZpO+8iOWIneWni+WMlu+8ieaJgOaciem7mOiupOWGheWklui+uei3nSBcXHJcXG4gKi9cXHJcXG4uY29sdW1uQ2hhcnREaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDsgICAgICAgICAgICAvKiDmuIXpmaTvvIjliJ3lp4vljJbvvInlm77ooajlhoXmiYDmnInlhYPntKDnmoTpu5jorqTlhoXovrnot50gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggOyAgICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5aSW6L656LedICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjUgO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiDnu5jliLbkuLvkvZPnmoRDYW52YXNcXHJcXG4gKi9cXHJcXG4uY29sdW1uQ2hhcnREaXYgY2FudmFzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgIC8qIOe7neWvueWumuS9je+8jOi/meagtzLkuKrlnZflhYPntKDvvIhDYW52YXPvvInmiY3kvJrph43lj6DlnKjkuIDotbcgKi9cXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgIFxcclxcbi8qIFxcclxcbiAqIFRpcFxcclxcbiAqL1xcclxcbi5jb2x1bW5DaGFydFRpcERpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAvKiDnu53lr7nlrprkvY3vvIzov5nmoLfmiY3kvJrot5/pmo/pvKDmoIfkvY3nva4gKi9cXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIFxcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSA1cHggNXB4IDIwcHg7ICAgICAvKiDpmLTlvbEgKi9cXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgNXB4IDVweCAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgNXB4IDVweCAyMHB4O1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdCBZYUhlaTsgICAgICAvKiBUaXDlrZfkvZMgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMnB4OyAgICAgICAgICAgICAgLyogVGlw5a2X5L2T5bC65a+4ICovXFxyXFxuICAgIGNvbG9yOiAjZWVlZWVlOyAgICAgICAgICAgICAgIC8qIFRpcOaWh+Wtl+minOiJsiAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29sdW1uQ2hhcnRUaXBEaXYgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgIFxcclxcbiAgICBtYXJnaW46IDBweCA7ICAgICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBUaXAgLS0gdGFibGVcXHJcXG4gKi9cXHJcXG4uY29sdW1uQ2hhcnRUaXBEaXYgdGFibGV7XFxyXFxuICAgIHBhZGRpbmc6IDBweDsgIFxcclxcbiAgICBtYXJnaW46IDBweCA7ICAgICAgIFxcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICAgIC8qIOWQiOW5tui+ueahhiAqL1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDsgICAgICAgICAgICAvKiDorr7nva7nm7jpgrvljZXlhYPmoLznmoTovrnmoYbpl7TnmoTot53nprsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuICogVGlwIC0tIHRhYmxlIC0tIHRkXFxyXFxuICovXFxyXFxuLmNvbHVtbkNoYXJ0VGlwRGl2IHRhYmxlIHRkIHtcXHJcXG4gICAgcGFkZGluZzogMHB4OyAgICAgICAgIFxcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyAgICAgICAgICAvKiDlnKjliJfmlbDmja7kuYvpl7TnlZnkvZnnmb0gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggO1xcclxcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7ICAgICAgICAgICAvKiDnpoHmraLmjaLooYwgKi9cXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBUaXAgLS0gdGFibGUgLS0gdGQgLS0gc3BhblxcclxcbiAqL1xcclxcbi5jb2x1bW5DaGFydFRpcERpdiB0YWJsZSB0ZCBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7ICAgICAgICAgICAvKiDovazmiJDooYzlhoXlnZfvvIzlkKbliJnkuI3og73mmL7npLrlh7rmnaUgKi9cXHJcXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyAgICAgICAgICAgIC8qIOWchuW9oiAqL1xcclxcbiAgICB3aWR0aDogOXB4O1xcclxcbiAgICBoZWlnaHQ6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuICogVGlwIC0tIHRhYmxlIC0tIOesrOS4ieWIl1xcclxcbiAqL1xcclxcbi5jb2x1bW5DaGFydFRpcERpdiAudGhpcmRDb2wge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgICAgICAgICAgIC8qIOmdoOWPs+Wvuem9kCAqL1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdiA9IG51bGw7ICAgICAgICAgICAgICAgICAvL+WtkOe7hOS7tjog5Zu+6KGo5ZCE5Liq5a2Q57uE5Lu255qE54i25a655ZmoXHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl90aXBEaXYgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9wYWludGVyID0gbnVsbDsgICAgICAgICAgICAgICAgICAgLy/nlLvlrrblvJXnlKhcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJyc7ICAgICAgICAgICAgICAgICAgICAgIC8v54q25oCBXHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID0gZmFsc2U7ICAvL+eUseS6jmpz5peg5rOV5Yik5pat5LqL5Lu255uR5ZCs5Ye95pWw5piv5ZCm5bey57uP5a2Y5Zyo77yM5Zug5q2k6Ieq5a6a5LmJ5qCH5b+X5L2N5p2l5Yik5patXHJcbiAgICAgICAgdGhpcy5fc3VyZmFjZUltYWdlRGF0YSA9IG51bGw7ICAgICAgICAgIC8vQ2FudmFz57uY5Zu+6KGo6Z2i77yM55So5LqO5L+d5a2YQ2FudmFz5Zu+54mHXHJcblxyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQ7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdG9wICgpIHtcclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSBTdGF0dXMuU1RPUDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgX3NldFBhaW50ZXIgKHBhaW50ZXIpIHtcclxuICAgICAgICB0aGlzLl9wYWludGVyID0gcGFpbnRlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludCAoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFpbnRlci5zZXRDaGFydCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9wYWludGVyLnBhaW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICog5Yqo5oCB55Sf5oiQdGlw5a+56LGhXHJcbiAgICAqIOWcqOacrOWbvuihqOezu+WIl+S4re+8jHRpcOaYr+eUseauteiQvXDlr7nosaHlkox0YWJsZeWvueixoeaehOaIkO+8jOWFtuWkluingueUseWklumDqOaMh+WumueahENTU+aOp+WItlxyXG4gICAgKi9cclxuICAgIF9jcmVhdGVUaXAgKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCB0aXA7XHJcblxyXG4gICAgICAgIC8v55Sf5oiQdGlw55qEZGl25a+56LGhLOW5tuWinuWKoGNsYXNz5qC35byP44CC5rOo5oSP77ya5piv5aKe5Yqg6ICM5LiN5piv5pu/5o2iXHJcbiAgICAgICAgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGlwLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ5q616JC95a+56LGh77yM55So5LqO5pi+56S657G755uu5ZCN56ewXHJcbiAgICAgICAgdGlwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ6KGo5qC85a+56LGh77yM55So5LqO57O75YiX5ZCN56ew5ZKM5pWw5o2uXHJcbiAgICAgICAgdGlwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJykpO1xyXG5cclxuICAgICAgICAvL+i/lOWbnlxyXG4gICAgICAgIHJldHVybiB0aXA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ2hhcnRJbmZvQmFzZV9JbiBmcm9tICcuL0NoYXJ0SW5mb0Jhc2VfSW4uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpc0NoYXJ0SW5mb0Jhc2VfSW4gZXh0ZW5kcyBDaGFydEluZm9CYXNlX0luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy54QXhpc05hbWUgPSAnWOi9tCc7ICAgICAgICAgICAgICAvL+aYvuekuuWcqHjovbTlsL3lpLTvvIznlKjkuo7ooajnpLp46L205ZCr5LmJ55qE5paH5a2X44CCIDxicj7kvovlpoLvvJrml7bpl7TjgIHmnIjku73jgIHlm73liKtcclxuICAgICAgICB0aGlzLnlBeGlzTmFtZSA9ICdZ6L20JzsgICAgICAgICAgICAgIC8v5pi+56S65Zyoeei9tOWwveWktO+8jOeUqOS6juihqOekunnovbTlkKvkuYnnmoTmloflrZfjgIIgPGJyPuS+i+Wmgu+8mumHkemineOAgea1k+W6puOAgembqOmHj1xyXG5cclxuICAgICAgICB0aGlzLnhBeGlzTmFtZUJvdHRvbSA9IDI1OyAgICAgICAgLy946L205ZCN56ew5paH5a2X5LiK6L6557yY5YiwZGl25LiL6L6557yY55qE6Led56a7XHJcbiAgICAgICAgdGhpcy55QXhpc05hbWVUb3AgPSA0MDsgICAgICAgICAgIC8veei9tOWQjeensOaWh+Wtl+S4iui+uee8mOWIsGRpduS4iui+uee8mOeahOi3neemu1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDQXhpc0luZm9CYXNlX0luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeXMgPSBbXTsgICAgICAgICAgICAgICAvL+exu+ebruWQjeensOaVsOe7hFxyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAtMTsgICAgICAgICAgICAgICAgLy/moIfnrb7pl7TpmpTmlbDjgILlvZPnsbvnm67pnZ7luLjlpJrnmoTml7blgJnvvIznsbvnm67ovbTmoIfnrb7kvJrph43lj6DjgILlm6DmraTlv4XpobvmjInnhafnm7jnrYnnmoTpl7TpmpTkuI3ov57nu63mmL7npLrmoIfnrb7jgILkv53mjIHpu5jorqTlgLzku6Pooajoh6rliqjorqHnrpfpl7TpmpRcclxuICAgICAgICB0aGlzLmxhYmVsUm90YXRlID0gMDsgICAgICAgICAgICAgIC8v5qCH562+5peL6L2s6KeS5bqmICAgICAgICBcclxuICAgICAgICB0aGlzLmxhYmVsR2FwID0gMjA7ICAgICAgICAgICAgICAgIC8v55u46YK75qCH562+55qE6Ze06LedXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENBeGlzSW5mb0Jhc2VfT3V0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBbXTsgICAgICAgICAgICAgICAvL+S/neWtmOexu+ebrui9tOS4iuaYvuekuueahOagh+etvuaWh+Wtl1xyXG4gICAgICAgIHRoaXMubGFiZWxTaXplcyA9IFtdOyAgICAgICAgICAgIC8v5L+d5a2Y5omA5pyJ57G755uu5qCH562+5paH5a2X55qE6ZW/5bqmXHJcblxyXG4gICAgICAgIC8v5qCH562+6Ze06ZqU5Liq5pWwXHJcbiAgICAgICAgLy9DQXhpc0luZm9CYXNlX0luLmludGVydmFsID49IDDml7YgOiAgQ0F4aXNJbmZvQmFzZV9PdXQuaW50ZXJ2YWwgPSBDQXhpc0luZm9CYXNlX0luLmludGVydmFsXHJcbiAgICAgICAgLy9DQXhpc0luZm9CYXNlX0luLmludGVydmFsIDwgMOaXtiAgIDogIENBeGlzSW5mb0Jhc2VfT3V0LmludGVydmFs55qE5YC85piv5YaF6YOo566X5rOV6K6h566X55qE57uT5p6cXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbFNpemUgPSAwOyAgICAgICAgICAgLy/moLnmja5pbnRlcnZhbOWSjGNhdGVnb3J5U2l6Zeiuoeeul+WHuueahOmVv+W6plxyXG5cclxuICAgICAgICB0aGlzLmNhdGVnb3J5U2l6ZSA9IDA7ICAgICAgICAgIC8v5LiA5Liq57G755uu5Zyo6L205LiK5Y2g55So55qE6ZW/5bqmXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0SW5mb0Jhc2VfSW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnRpdGxlID0gJ1RDaGFydHMnOyAgICAgICAvL+WbvuihqOagh+mimFxyXG5cclxuICAgICAgICB0aGlzLnRpdGxlVG9wID0gMTA7ICAgICAgICAgLy/moIfpopjkvY3nva7vvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLnRpdGxlTGVmdCA9IDEwO1xyXG5cclxuICAgICAgICB0aGlzLmxlZ2VuZFRvcCA9IDEwOyAgICAgICAgLy/lm77kvovkvY3nva7vvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLmxlZ2VuZExlZnQgPSAyMDtcclxuICAgICAgICB0aGlzLmxlZ2VuZFJpZ2h0ID0gMjA7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keVRvcCA9IDcwOyAgICAgICAvL+WbvuihqOS4u+S9k+WMuuWfn++8iHh55Lik6L205Zu05oiQ55qE55+p5b2i5Yy65Z+f77yJ77ya55u45a+55LqOZGl26L6557yYXHJcbiAgICAgICAgdGhpcy5ib2R5Qm90dG9tID0gNTA7XHJcbiAgICAgICAgdGhpcy5ib2R5TGVmdCA9IDUwO1xyXG4gICAgICAgIHRoaXMuYm9keVJpZ2h0ID0gNTA7XHJcblxyXG4gICAgICAgIC8v5Zu+6KGo5L2/55So55qE6aKc6Imy5pWw57uEXHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbJyNDMjM1MzEnLCAnIzJGNDU1NCcsICcjNjFBMEE4JywgJyNENDgyNjUnLCAnIzkxQzdBRScsICcjQ0E4NjIyJywgJyNCREEyOUEnLCAnIzZFNzA3NCddO1xyXG4gICAgICAgIHRoaXMuc2VyaWVzID0gW107ICAgICAgICAgICAgICAgICAvL+aVsOaNruezu+WIl1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xOyAgICAgICAgIC8v6YCJ5oup6aG555qE57Si5byVIFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVkF4aXNJbmZvQmFzZV9JbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMubWluID0gTnVtYmVyLk1JTl9WQUxVRTsgICAgICAgLy/mlbDlgLzovbTnmoTmnIDlsI/lgLzjgILkv53mjIHpu5jorqTlgLzku6PooajpnIDopoHoh6rliqjorqHnrpdcclxuICAgICAgICB0aGlzLm1heCA9IE51bWJlci5NQVhfVkFMVUU7ICAgICAvL+aVsOWAvOi9tOeahOacgOWkp+WAvOOAguS/neaMgem7mOiupOWAvOS7o+ihqOmcgOimgeiHquWKqOiuoeeul1xyXG4gICAgICAgIHRoaXMubGFiZWxNYXhDb3VudCA9IDc7ICAgICAgICAgICAgICAgICAgIC8v5qCH562+5pi+56S655qE5pyA5aSn5Liq5pWwXHJcbiAgICAgICAgdGhpcy56ZXJvRXh0ZW5kID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8v5b2T5pWw5YC86IyD5Zu05LiN5YyF5ousMOaXtu+8jOaYr+WQpuWwhuiMg+WbtOaJqeWxleWIsDBcclxuICAgICAgICB0aGlzLmxhYmVsUm90YXRlID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAvL+agh+etvuaXi+i9rOinkuW6piAgICBcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWQXhpc0luZm9CYXNlX091dCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8v5pWw5YC86L2055qE5pyA5bCP5YC8XHJcbiAgICAgICAgLy9WQXhpc0luZm9CYXNlX0luLm1pbiA9IOm7mOiupOWAvOaXtiA6ICBWQXhpc0luZm9CYXNlX091dC5taW7nmoTlgLzmmK/lhoXpg6jnrpfms5XorqHnrpfnmoTnu5PmnpxcclxuICAgICAgICAvL1ZBeGlzSW5mb0Jhc2VfSW4ubWluICE9IOm7mOiupOWAvOaXtiA6ICBWQXhpc0luZm9CYXNlX091dC5taW4gPSBWQXhpc0luZm9CYXNlX0luLm1pblxyXG4gICAgICAgIHRoaXMubWluID0gMDtcclxuICAgICAgICB0aGlzLm1heCA9IDA7ICAgICAgICAgICAgICAgICAgICAgLy/lkIznkIZcclxuXHJcbiAgICAgICAgdGhpcy5taW5TY2FsZTsgICAgICAgICAgICAgICAgICAgLy/mnIDlsI/liLvluqblgLxcclxuICAgICAgICB0aGlzLm1heFNjYWxlOyAgICAgICAgICAgICAgICAgIC8v5pyA5aSn5Yi75bqm5YC8XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxzID0gW107ICAgICAgICAgICAgICAgICAvL+S/neWtmOaVsOWAvOi9tOS4iuaYvuekuueahOagh+etvuaWh+Wtl1xyXG4gICAgICAgIHRoaXMub3JpZ2luSW5kZXggPSAtMTsgICAgICAgIC8v5Y6f54K55qCH562+5ZyobGFiZWxz5pWw57uE5Lit55qE57Si5byV77yM55So5LqO57uY5Yi26L2057q/XHJcbiAgICAgICAgdGhpcy5vcmlnaW5WYWx1ZTsgICAgICAgICAgICAgICAvL+WOn+eCueeahOWAvFxyXG4gICAgICAgIHRoaXMub3JpZ2luUG9zaXRpb247ICAgICAgICAgICAvL+WOn+eCueWcqENhbnZhc+S4iueahOebuOWvueS9jee9rlxyXG4gICAgICAgIHRoaXMudW5pdFZhbHVlU2l6ZSA9IC0xOyAgICAgIC8v5pWw5YC8MeWcqOi9tOS4iuWNoOeUqOeahOmVv+W6plxyXG4gICAgICAgIHRoaXMuc2NhbGVVbml0ID0gMDsgICAgICAgICAgICAgIC8v5Y2V5L2N5Yi75bqm5YC8XHJcbiAgICAgICAgdGhpcy5zY2FsZVVuaXRTaXplID0gMDsgICAgICAgIC8v5Y2V5L2N5Yi75bqm5Zyo6L205LiK5Y2g55So55qE6ZW/5bqmXHJcblxyXG4gICAgICAgIHRoaXMuZGVjaW1hbERpZ2l0OyAgICAgICAgICAgICAgLy/mlbDlrZfmoIfnrb7lsI/mlbDkvY3mlbBcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VyaWVzQmFzZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ2hhcnRCYXNlIGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzJztcclxuaW1wb3J0IEF4aXNDaGFydEluZm9CYXNlX0luIGZyb20gJy4uLy4uL2Jhc2UvaW5mby9BeGlzQ2hhcnRJbmZvQmFzZV9Jbi5qcyc7XHJcbmltcG9ydCBWQXhpc0luZm9CYXNlX0luIGZyb20gJy4uLy4uL2Jhc2UvaW5mby9WQXhpc0luZm9CYXNlX0luLmpzJztcclxuaW1wb3J0IFZBeGlzSW5mb0Jhc2VfT3V0IGZyb20gJy4uLy4uL2Jhc2UvaW5mby9WQXhpc0luZm9CYXNlX091dC5qcyc7XHJcblxyXG5pbXBvcnQgQ0F4aXNJbmZvX0luIGZyb20gJy4vaW5mby9DQXhpc0luZm9fSW4uanMnO1xyXG5pbXBvcnQgQ0F4aXNJbmZvX091dCBmcm9tICcuL2luZm8vQ0F4aXNJbmZvX091dC5qcyc7XHJcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9wYXJ0cy9Db2x1bW4uanMnO1xyXG5pbXBvcnQgUGFpbnRlciBmcm9tICcuL3BhaW50ZXIvUGFpbnRlci5qcyc7XHJcblxyXG5pbXBvcnQgT2JqZWN0UG9vbCBmcm9tICcuLi8uLi9zdXBwb3J0L09iamVjdFBvb2wuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3N1cHBvcnQvQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9zdXBwb3J0L1N0YXR1cy5qcyc7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uL3N1cHBvcnQvVXRpbGl0eS5qcyc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vc3VwcG9ydC9TdHlsZXMuanMnO1xyXG5cclxuaW1wb3J0IFRXQWxnb3JpdGhtIGZyb20gJy4uLy4uL3R3ZWVuL1RXQWxnb3JpdGhtLmpzJztcclxuaW1wb3J0IFRXRW5naW5lIGZyb20gJy4uLy4uL3R3ZWVuL1RXRW5naW5lLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIENoYXJ0QmFzZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50RGl2SUQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy/nlKjmiLfovpPlhaXvvIjlm77ooajlv4XlpIfkv6Hmga/vvIlcclxuICAgICAgICB0aGlzLmNoYXJ0SW5mb19JbiA9IG5ldyBBeGlzQ2hhcnRJbmZvQmFzZV9JbigpOyAgICAgICAgICAgICAgICAvL+WbvuihqOS/oeaBr+OAguS+i++8muWbvuihqOWQjeensFxyXG4gICAgICAgIHRoaXMuY0F4aXNJbmZvX0luID0gbmV3IENBeGlzSW5mb19JbigpOyAgICAgICAgICAgICAgICAgIC8v57G755uu6L205L+h5oGvXHJcbiAgICAgICAgdGhpcy52QXhpc0luZm9fSW4gPSBuZXcgVkF4aXNJbmZvQmFzZV9JbigpOyAgICAgICAgICAgLy/lgLzovbTkv6Hmga9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9jQXhpc0luZm9fT3V0ID0gbmV3IENBeGlzSW5mb19PdXQoKTsgICAgLy/mlbDmja7nu5PmnoTkvZMo5a2Y5YKo6K6h566X57uT5p6c77yM5L6b5YaF6YOo55SoKVxyXG4gICAgICAgIHRoaXMuX3ZBeGlzSW5mb19PdXQgPSBuZXcgVkF4aXNJbmZvQmFzZV9PdXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gW107ICAgICAgICAgLy/lrZjmlL7mn7HnirbkvZPnmoTkuoznu7TmlbDnu4RcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG51bGw7ICAgICAgICAvL+afseeKtuS9k+WvueixoeaxoFxyXG5cclxuICAgICAgICB0aGlzLl9jaGFydFBpeGVsV2lkdGg7ICAgICAgICAvL+WbvuihqOacieaViOWwuuWvuFxyXG4gICAgICAgIHRoaXMuX2NoYXJ0UGl4ZWxIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdkNsYXNzTmFtZSA9ICdjb2x1bW5DaGFydERpdic7ICAgIC8v5qC35byP5ZCNXHJcbiAgICAgICAgdGhpcy5fdGlwRGl2Q2xhc3NOYW1lID0gJ2NvbHVtbkNoYXJ0VGlwRGl2JztcclxuICAgICAgICB0aGlzLl90aGlyZENvbENsYXNzTmFtZSA9ICd0aGlyZENvbCc7XHJcblxyXG4gICAgICAgIHRoaXMuX3R3RW5naW5lID0gbmV3IFRXRW5naW5lKCk7ICAgICAgICAgICAgICAgIC8v57yT5Yqo5Yqo55S755u45YWzXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8v6K6+572u55S75a62XHJcbiAgICAgICAgdGhpcy5fc2V0UGFpbnRlcihQYWludGVyKTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bkvZzkuLrlm77ooajlrrnlmajnmoRkaXblr7nosaHvvIzlubblop7liqDnibnlrprmoLflvI/jgILms6jmhI/vvJrmmK/lop7liqDogIzkuI3mmK/mm7/mjaJcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnREaXZJRCk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2LmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLl9wYXJlbnREaXZDbGFzc05hbWU7XHJcblxyXG4gICAgICAgIC8v5Yqo5oCB55Sf5oiQX2NhbnZhc++8jOW5tua3u+WKoOWIsERPTeagkeOAguWQjOaXtuiOt+WPluWFtuS4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICAvL+WKqOaAgeeUn+aIkHRpcOWvueixoe+8jOa3u+WKoOWIsERPTeagke+8jOW5tuiOt+WPluS5i1xyXG4gICAgICAgIHRoaXMuX3RpcERpdiA9IHRoaXMuX2NyZWF0ZVRpcCh0aGlzLl90aXBEaXZDbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5hcHBlbmRDaGlsZCh0aGlzLl90aXBEaXYpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluWvueixoeaxoFxyXG4gICAgICAgIHRoaXMuX2l0ZW1Qb29sID0gbmV3IE9iamVjdFBvb2woQ29sdW1uKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+mqjOivgeaVsOaNruWQiOazleaAp1xyXG4gICAgICAgIGlmICh0aGlzLl9jaGVjaygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVENoYXJ0c10gSW5jb3JyZWN0IGNoYXJ0IGRhdGEgIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+mHjeiuvuWQhOenjeeKtuaAge+8jOaVsOaNrlxyXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XHJcblxyXG4gICAgICAgIC8v5Li657uY5Yi25Zu+6KGo77yM6K6h566X5ZCE56eN5pWw5o2uXHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZUNhdGVnb3J5SW5mbygpO1xyXG4gICAgICAgIHRoaXMuX2dldENhdGVnb3J5SW50ZXJ2YWwoKTtcclxuICAgICAgICB0aGlzLl9nZXRJdGVtQW5kQ29tcHV0ZU1pbk1heCgpOyAgIC8v6I635Y+W6aG555uu5a+56LGh77yM6K6h566X5YC86L2055qE5pyA5aSnL+acgOWwj+WAvFxyXG4gICAgICAgIHRoaXMuX2NvbXB1dGVWYWx1ZUF4aXNPdGhlckluZm8oQ29uc3RhbnRzLllfQVhJUywgdGhpcy52QXhpc0luZm9fSW4sIHRoaXMuX3ZBeGlzSW5mb19PdXQpO1xyXG4gICAgICAgIHRoaXMuX3NldEl0ZW1TaXplQW5kUG9zaXRpb25BbmRUd2VlbigpO1xyXG5cclxuICAgICAgICAvL+WQr+WKqOW4p+W+queOr++8jOWcqOW+queOr+WGhemDqOe7mOWItuWbvuihqFxyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGFpbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIF9jaGVjayAoKSB7XHJcbiAgICAgICAgbGV0IHNlcmllcyxcclxuICAgICAgICAgICAgc2VyLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBsZW4xLCBsZW4yLFxyXG4gICAgICAgICAgICBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICBzZXJpZXMgPSB0aGlzLmNoYXJ0SW5mb19Jbi5zZXJpZXM7XHJcbiAgICAgICAgbGVuMSA9IHRoaXMuY0F4aXNJbmZvX0luLmNhdGVnb3J5cy5sZW5ndGg7XHJcbiAgICAgICAgbGVuMiA9IHNlcmllcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8v5qOA5p+lMe+8miDmlbDmja7mmK/lkKbkuLrnqbpcclxuICAgICAgICBpZiAoKGxlbjEgPT0gMCkgfHwgKGxlbjIgPT0gMCkpIHtcclxuICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8v5qOA5p+lMu+8miDmlbDmja7ns7vliJfmmK/lkKbkuI7nsbvnm67mlbDmja7plb/luqbkuIDoh7RcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VyID0gc2VyaWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlci5kYXRhLmxlbmd0aCAhPSBsZW4xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBydG47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9yZXNldCAoKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NhbnZhcyxcclxuICAgICAgICAgICAgZGl2ID0gdGhpcy5fcGFyZW50RGl2LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgaXRlbUFyciA9IHRoaXMuX2l0ZW1BcnJheSxcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICAvL+enu+mZpOm8oOagh+S6i+S7tuebkeWQrOWZqFxyXG4gICAgICAgIHRoaXMuX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lcihDb25zdGFudHMuUkVNT1ZFKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7lsLrlr7hcclxuICAgICAgICBjYW52YXMud2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGRpdi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fY2hhcnRQaXhlbFdpZHRoID0gY2FudmFzLndpZHRoIC0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0IC0gY2hhcnRJbmZvX0luLmJvZHlSaWdodDtcclxuICAgICAgICB0aGlzLl9jaGFydFBpeGVsSGVpZ2h0ID0gY2FudmFzLmhlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5VG9wIC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b207XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5Zu+5L6L5pWw5o2u44CBQ29sdW1u5a+56LGh5pWw57uEXHJcbiAgICAgICAgaXRlbUFyci5sZW5ndGggPSAwO1xyXG4gICAgICAgIGxlbiA9IGNoYXJ0SW5mb19Jbi5zZXJpZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtQXJyW2ldID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIneWni+WMllRpcFxyXG4gICAgICAgIHRoaXMuX2luaXRUaXAoKTtcclxuXHJcbiAgICAgICAgLy/ku47lr7nosaHmsaDkuK3ph4rmlL7mm77nu4/kvb/nlKjov4fnmoTmn7HnirbkvZNcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbC5yZWxlYXNlQWxsKCk7XHJcblxyXG4gICAgICAgIC8v6YeK5pS+57yT5Yqo6LWE5rqQXHJcbiAgICAgICAgdGhpcy5fdHdFbmdpbmUucmVsZWFzZUFsbFRXRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuX3R3RW5naW5lLnJlbGVhc2VBbGxUV0FjdGlvbigpO1xyXG5cclxuICAgICAgICAvL+WPlua2iOS4iuS4gOasoee7keWumueahOWKqOeUu+WHveaVsFxyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRpb25GcmFtZUlEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2luaXRUaXAgKCkge1xyXG4gICAgICAgIGxldCB0aXBEaXYgPSB0aGlzLl90aXBEaXYsXHJcbiAgICAgICAgICAgIGNvbG9ycyA9IHRoaXMuY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgc2VyaWVzID0gdGhpcy5jaGFydEluZm9fSW4uc2VyaWVzLFxyXG4gICAgICAgICAgICB0YWJsZSwgcm93LCB0ZCwgc3BhbixcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICAvL+makOiXj3RpcFxyXG4gICAgICAgIHRpcERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAvL+WIoOmZpFRhYmxl5a+56LGh55qE5omA5pyJ6KGMXHJcbiAgICAgICAgdGFibGUgPSB0aXBEaXYuY2hpbGROb2Rlc1sxXTtcclxuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgLy/moLnmja7mlbDmja7ns7vliJflvqrnjq/nlJ/miJBUYWJsZeWvueixoVxyXG4gICAgICAgIGxlbiA9IHNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu66KGMXHJcbiAgICAgICAgICAgIHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xyXG5cclxuICAgICAgICAgICAgLy/liJvlu7rnrKzkuIDliJfvvIzlubbmj5LlhaVzcGFuXHJcbiAgICAgICAgICAgIHRkID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgLy/liJvlu7rnrKzkuozliJfvvIzlubbmj5LlhaXns7vliJflkI3np7BcclxuICAgICAgICAgICAgdGQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBzZXJpZXNbaV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yib5bu656ys5LiJ5YiX77yM5bm26K6+5a6a5qC35byP5ZCNXHJcbiAgICAgICAgICAgIHRkID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgdGQuY2xhc3NOYW1lID0gdGhpcy5fdGhpcmRDb2xDbGFzc05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfY29tcHV0ZUNhdGVnb3J5SW5mbyAoKSB7XHJcbiAgICAgICAgbGV0IGNBeGlzSW5mb19JbiA9IHRoaXMuY0F4aXNJbmZvX0luLFxyXG4gICAgICAgICAgICBjQXhpc0luZm9fT3V0ID0gdGhpcy5fY0F4aXNJbmZvX091dCxcclxuICAgICAgICAgICAgc2VyaWVzID0gdGhpcy5jaGFydEluZm9fSW4uc2VyaWVzLFxyXG4gICAgICAgICAgICBzZXIsXHJcbiAgICAgICAgICAgIHN0YWNrTmFtZSA9ICcnLFxyXG4gICAgICAgICAgICBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG51bSxcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICAvLygxKeiuoeeul+WcqOS4gOS4quWIhuexu+S4reW5tuaOkuacieWHoOS4quafseeKtumhueebrijntK/np6/nmoTpobnnm67kuI3nrpcpXHJcbiAgICAgICAgbGVuID0gc2VyaWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgc2VyID0gc2VyaWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoc2VyLnN0YWNrTmFtZSA9PSAnJyB8fCBzZXIuc3RhY2tOYW1lICE9IHN0YWNrTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIHN0YWNrTmFtZSA9IHNlci5zdGFja05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDIp6K6h566X5LiA5Liq5YiG57G75Zyo6L205LiK5Y2g55So55qE6ZW/5bqmXHJcbiAgICAgICAgY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUgPSB0aGlzLl9jaGFydFBpeGVsV2lkdGggLyBjQXhpc0luZm9fSW4uY2F0ZWdvcnlzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8oMynorqHnrpfkuIDkuKrmn7Hnirbpobnnm67lnKjovbTkuIrljaDnlKjnmoTlrr3luqZcclxuICAgICAgICAvLyAgICAgICDmn5DliIbnsbvkuK3nrKzkuIDkuKrmn7Hnirbpobnnm67lnKjovbTkuIrot53nprvlt6bkvqfmnIDov5HliLvluqbnmoTot53nprtcclxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIG51bSA9IGNBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplICogY0F4aXNJbmZvX0luLnNpemVSYXRlO1xyXG4gICAgICAgICAgICBjQXhpc0luZm9fT3V0Lml0ZW1TaXplID0gbnVtIC8gY291bnQ7XHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQub2Zmc2V0U2l6ZSA9IChjQXhpc0luZm9fT3V0LmNhdGVnb3J5U2l6ZSAtIG51bSkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRDYXRlZ29yeUludGVydmFsICgpIHtcclxuICAgICAgICBsZXQgY0F4aXNJbmZvX0luID0gdGhpcy5jQXhpc0luZm9fSW4sXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQgPSB0aGlzLl9jQXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICBjYXRlZ29yeXMgPSBjQXhpc0luZm9fSW4uY2F0ZWdvcnlzLFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIHcsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcblxyXG4gICAgICAgIC8v5aaC5p6c5Lq65Li65oyH5a6a5LqG6Ze06ZqU77yM5YiZ5LiN6ZyA6KaB5YGa55u45YWz6K6h566XXHJcbiAgICAgICAgaWYgKGNBeGlzSW5mb19Jbi5pbnRlcnZhbCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQuaW50ZXJ2YWwgPSBjQXhpc0luZm9fSW4uaW50ZXJ2YWw7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6K6h566X5qCH562+5paH5pys5bC65a+477yM5bm25a2Y5YWl5pWw57uE77yM55So5LqO5ZCO6Z2i55qE5qCH562+6YeN5Y+g5q+U6L6DXHJcbiAgICAgICAgICAgIGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5MQUJFTF9GT05UOyAgICAvL+iuvue9ruWtl+S9k++8jOi/meaYr+W6pumHj+aWh+Wtl+WuveW6pueahOW/heWkh+adoeS7tlxyXG5cclxuICAgICAgICAgICAgbGVuID0gY2F0ZWdvcnlzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB3ID0gY3R4Lm1lYXN1cmVUZXh0KGNhdGVnb3J5c1tpXSkud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjQXhpc0luZm9fT3V0LmxhYmVsU2l6ZXNbaV0gPSB7IHNpemU6IHcsIHdpdGhHYXBTaXplOiB3ICsgY0F4aXNJbmZvX0luLmxhYmVsR2FwIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v6K6h566X6Ze06ZqUXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVDYXRlZ29yeUludGVydmFsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjQXhpc0luZm9fT3V0LmludGVydmFsU2l6ZSA9IGNBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplICogKGNBeGlzSW5mb19PdXQuaW50ZXJ2YWwgKyAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2NvbXB1dGVDYXRlZ29yeUludGVydmFsICgpIHtcclxuICAgICAgICAvL+WumuS5iVxyXG4gICAgICAgIGxldCBjQXhpc0luZm9fT3V0ID0gdGhpcy5fY0F4aXNJbmZvX091dCxcclxuICAgICAgICAgICAgY2F0ZWdvcnlTaXplID0gY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUsXHJcbiAgICAgICAgICAgIGxhYmVsU2l6ZXMgPSBjQXhpc0luZm9fT3V0LmxhYmVsU2l6ZXMsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlLFxyXG4gICAgICAgICAgICBpID0gMCwgaiA9IDAsXHJcbiAgICAgICAgICAgIGxlbiA9IHRoaXMuY0F4aXNJbmZvX0luLmNhdGVnb3J5cy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNvbXB1dGUgKGludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICBqID0gaW50ZXJ2YWwgKyAxO1xyXG5cclxuICAgICAgICAgICAgLy/lvqrnjq/pgY3ljobmlbDnu4RcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsZW4gJiYgaiA8IGxlbikge1xyXG4gICAgICAgICAgICAgICAgLy/mr5TovoPnm7jpgrvmoIfnrb7mmK/lkKbph43lj6BcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY2F0ZWdvcnlTaXplICogKGogLSBpKSAtIChsYWJlbFNpemVzW2pdLndpdGhHYXBTaXplICsgbGFiZWxTaXplc1tpXS53aXRoR2FwU2l6ZSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c6YeN5Y+g77yM6Ze06ZqU5Yqg5LiA77yM54S25ZCO6YCS5b2SXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZShpbnRlcnZhbCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v57uT5p2f5pys5b6q546vXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOS4jemHjeWPoO+8jOS4uuS4i+asoeW+queOr+ehruWumuaVsOe7hOe0ouW8lVxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGogPSBpICsgaW50ZXJ2YWwgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WmguaenOmBjeWOhue7k+adn++8jOiuvue9rlxyXG4gICAgICAgICAgICBjQXhpc0luZm9fT3V0LmludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aJp+ihjFxyXG4gICAgICAgIGNvbXB1dGUoMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRJdGVtQW5kQ29tcHV0ZU1pbk1heCAoKSB7XHJcblxyXG4gICAgICAgIGxldCB2QXhpc0luZm9fSW4gPSB0aGlzLnZBeGlzSW5mb19JbixcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dCA9IHRoaXMuX3ZBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIHNlcmllcyA9IHRoaXMuY2hhcnRJbmZvX0luLnNlcmllcyxcclxuICAgICAgICAgICAgc2VyLFxyXG5cclxuICAgICAgICAgICAgaXRlbVBvb2wgPSB0aGlzLl9pdGVtUG9vbCxcclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG5cclxuICAgICAgICAgICAgcGx1c0FyciA9IFtdLFxyXG4gICAgICAgICAgICBtaW51c0FyciA9IFtdLFxyXG4gICAgICAgICAgICBzdGFja05hbWUsXHJcblxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yO1xyXG5cclxuICAgICAgICAvLygxKemBjeWOhuesrOS4gOS4quezu+WIl+eahOWFqOmDqOaVsOaNru+8jOaJvuWIsOesrOS4gOS4quacieaViOaVsOaNru+8jOS4uuacgOWkp+acgOWwj+i1i+WIneWAvFxyXG4gICAgICAgIHNlciA9IHNlcmllc1swXTtcclxuICAgICAgICBsZW4xID0gc2VyLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNlci5kYXRhW2ldICE9IENvbnN0YW50cy5ESVJUWSkge1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5taW4gPSB2QXhpc0luZm9fT3V0Lm1heCA9IHNlci5kYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDIp5LuO5rGg5Lit5Y+W5Ye66aG555uu5a+56LGh77yM5ZCM5pe25rGC5b6X5pyA5aSn5pyA5bCP5YC8XHJcbiAgICAgICAgbGVuMiA9IHNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjE7IGkrKykge1xyXG4gICAgICAgICAgICAvLygyLTEp5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIHN0YWNrTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICBwbHVzQXJyLmxlbmd0aCA9IG1pbnVzQXJyLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLygyLTIp55Sf5oiQ6aG555uu5a+56LGhXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIC8vKDItMi0xKeWPluW+l+ezu+WIl1xyXG4gICAgICAgICAgICAgICAgc2VyID0gc2VyaWVzW2pdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vKDItMi0yKeavlOi+g+axguW+l+acgOWAvFxyXG4gICAgICAgICAgICAgICAgLy/mr5TovoPor6Xns7vliJflkozkuIrkuIDns7vliJfmmK/lkKblhbfmnInnm7jlkIznmoQo57Sv56ev5ZCN56ewKVxyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpwo57Sv56ev5ZCN56ewKeS4jeebuOWQjOaIluS4um51bGwo5LiN6ZyA6KaB57Sv56evKe+8jOWImeaKiuatpOWJjeenr+e0r+eahOaVsOaNruS8oOe7meavlOi+g+WHveaVsO+8jOeEtuWQjuWIneWni+WMluebuOWFs+WPmOmHj++8jOS4uuaWsOeahOe0r+enr+WBmuWHhuWkh1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlci5zdGFja05hbWUgPT0gJycgfHwgc2VyLnN0YWNrTmFtZSAhPSBzdGFja05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+avlOi+g1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbXBhcmUocGx1c0FyciwgbWludXNBcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Li65paw55qE57Sv56ev5YGa5YeG5aSHXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lID0gc2VyLnN0YWNrTmFtZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05pawKOe0r+enr+WQjeensCnvvIznlKjkuo7mraTlkI7nmoTmr5TovoNcclxuICAgICAgICAgICAgICAgICAgICBwbHVzQXJyLmxlbmd0aCA9IG1pbnVzQXJyLmxlbmd0aCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgLy/muIXnqbrmlbDnu4RcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLygyLTItMynku47msaDkuK3ojrflj5bpobnnm67lr7nosaHvvIzlubbph43mlrDorr7nva7lsZ7mgKdcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtUG9vbC5nZXRPYmooKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuiEj+aVsOaNrijml6DmlYjmlbDmja4pXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyLmRhdGFbaV0gPT0gQ29uc3RhbnRzLkRJUlRZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXJ0eUZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBOdW1iZXIuTmFOO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhY2tWYWx1ZSA9IE51bWJlci5OYU47XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRpcnR5RmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBzZXIuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YWNrVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uc3RhY2tOYW1lID0gc2VyLnN0YWNrTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLygyLTItNCnliqDlhaXliLDmlbDnu4RcclxuICAgICAgICAgICAgICAgIGl0ZW1BcnJheVtqXS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vKDItMi01Keenr+e0r+ebuOWQjCjntK/np6/lkI3np7Ap55qE6aG555uu77yM55So5LqOKDItMi0yKeeahOavlOi+g1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlGbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVzQXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51c0Fyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8oMi0zKeacgOWQjuS4gOasoeavlOi+g1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wYXJlKHBsdXNBcnIsIG1pbnVzQXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDMp5Yik5pat55So5oi35piv5ZCm5oyH5a6a5LqG5pyA5aSn5pyA5bCP5YC8XHJcbiAgICAgICAgaWYgKHZBeGlzSW5mb19Jbi5taW4gIT0gTnVtYmVyLk1JTl9WQUxVRSAmJiB2QXhpc0luZm9fSW4ubWluIDwgdkF4aXNJbmZvX091dC5taW4pIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5taW4gPSB2QXhpc0luZm9fSW4ubWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodkF4aXNJbmZvX0luLm1heCAhPSBOdW1iZXIuTUFYX1ZBTFVFICYmIHZBeGlzSW5mb19Jbi5tYXggPiB2QXhpc0luZm9fT3V0Lm1heCkge1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm1heCA9IHZBeGlzSW5mb19Jbi5tYXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyg0KeWIpOaWreaYr+WQpuWcqOWAvOi9tOS4iuaJqeWxlSAw77yM5bm25o2u5q2k6LCD5pW05pyA5YC8XHJcbiAgICAgICAgaWYgKHZBeGlzSW5mb19Jbi56ZXJvRXh0ZW5kID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHZBeGlzSW5mb19PdXQubWluID4gMCAmJiB2QXhpc0luZm9fT3V0Lm1heCA+IDApICAgICAvL+WQjOS4uuato+aVsFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm1pbiA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodkF4aXNJbmZvX091dC5taW4gPCAwICYmIHZBeGlzSW5mb19PdXQubWF4IDwgMCkgeyAgICAgLy/lkIzkuLrotJ/mlbBcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQubWF4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2NvbXBhcmUgKHBsdXNBcnIsIG1pbnVzQXJyKSB7XHJcbiAgICAgICAgLy/ntK/orqHmraPlgLzvvIzlubbmr5TovoPmnIDlgLxcclxuICAgICAgICBsZXQgaXRlbSxcclxuICAgICAgICAgICAgbnVtLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIG51bSA9IDA7XHJcbiAgICAgICAgbGVuID0gcGx1c0Fyci5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gcGx1c0FycltpXTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3RhY2tWYWx1ZSA9IG51bTtcclxuICAgICAgICAgICAgICAgIG51bSArPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE1pbk1heChudW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ntK/orqHotJ/lgLzvvIzlubbmr5TovoPmnIDlgLxcclxuICAgICAgICBudW0gPSAwO1xyXG4gICAgICAgIGxlbiA9IG1pbnVzQXJyLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBtaW51c0FycltpXTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3RhY2tWYWx1ZSA9IG51bTtcclxuICAgICAgICAgICAgICAgIG51bSArPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE1pbk1heChudW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9zZXRNaW5NYXggKG51bSkge1xyXG4gICAgICAgIGxldCB2QXhpc0luZm9fT3V0ID0gdGhpcy5fdkF4aXNJbmZvX091dDtcclxuXHJcbiAgICAgICAgaWYgKG51bSA8IHZBeGlzSW5mb19PdXQubWluKSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQubWluID0gbnVtO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtID4gdkF4aXNJbmZvX091dC5tYXgpIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5tYXggPSBudW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyAoYXhpc1R5cGUsIHZBeGlzSW5mb19JbiwgdkF4aXNJbmZvX091dCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBzY2FsZVVuaXQsXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmoIfnrb7pl7TpmpRcclxuICAgICAgICB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCA9IFV0aWxpdHkuZ2V0U2NhbGVVbml0KHZBeGlzSW5mb19PdXQubWluLCB2QXhpc0luZm9fT3V0Lm1heCwgdkF4aXNJbmZvX0luLmxhYmVsTWF4Q291bnQpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+aoqui9tOagh+etvuWwj+aVsOS9jeaVsFxyXG4gICAgICAgIGFyciA9IHZBeGlzSW5mb19PdXQuc2NhbGVVbml0LnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5kZWNpbWFsRGlnaXQgPSBhcnJbMV0ubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQuZGVjaW1hbERpZ2l0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+iuoeeul+acgOWwj+WIu+W6pijlkIzml7bkuLrmnIDlpKfliLvluqborr7liJ3lgLwpXHJcbiAgICAgICAgdkF4aXNJbmZvX091dC5taW5TY2FsZSA9IHZBeGlzSW5mb19PdXQubWF4U2NhbGUgPSBNYXRoLmZsb29yKHZBeGlzSW5mb19PdXQubWluIC8gdkF4aXNJbmZvX091dC5zY2FsZVVuaXQpICogdkF4aXNJbmZvX091dC5zY2FsZVVuaXQ7XHJcblxyXG4gICAgICAgIC8v6K6h566X5pyA5aSn5Yi75bqm77yM5ZCM5pe26K6w5b2V5Y6f54K555qE5L2N572uXHJcbiAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5JbmRleCA9IC0xOyAgICAgICAgLy/liJ3lgLxcclxuICAgICAgICBmb3IgKGkgPSAwOyAxOyBpKyspIHtcclxuICAgICAgICAgICAgc2NhbGVVbml0ID0gdkF4aXNJbmZvX091dC5taW5TY2FsZSArIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0ICogaTtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmmK8w5Yi75bqm77yM5aaC5p6c5piv5YiZ6K6w5b2V5LmLXHJcbiAgICAgICAgICAgIGlmIChzY2FsZVVuaXQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5JbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbkuLrmnIDlpKfliLvluqbvvIzmmK/liJnpgIDlh7rlvqrnjq9cclxuICAgICAgICAgICAgaWYgKHNjYWxlVW5pdCA+PSB2QXhpc0luZm9fT3V0Lm1heCkge1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5tYXhTY2FsZSA9IHNjYWxlVW5pdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nu6fnu63orqHnrpfljp/ngrnnmoTkvY3nva4o5Y6f54K55YC85LiN5LiA5a6a5pivMClcclxuICAgICAgICAvL+WIpOaWreWOn+eCueaVsOe7hOe0ouW8leaYr+WQpuS4uuWIneWAvFxyXG4gICAgICAgIC8v5aaC5p6c5Li65Yid5YC877yM6K+05piO5YmN5LiA5q2l6aqk5bm25rKh5pyJ5b6X5Ye65Y6f54K557uT5p6c77yM5YiZ57un57ut6K6h566XXHJcbiAgICAgICAgaWYgKHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgaWYgKHZBeGlzSW5mb19PdXQubWluU2NhbGUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5JbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlID0gdkF4aXNJbmZvX091dC5taW5TY2FsZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2QXhpc0luZm9fT3V0Lm1heFNjYWxlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5WYWx1ZSA9IHZBeGlzSW5mb19PdXQubWF4U2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6h566X5Y2V5L2N5pWw5YC85Zyo6L205LiK5Y2g55So55qE54mp55CG5bC65a+4IC8g55u46YK75qCH562+5LmL6Ze055qE54mp55CG6Led56a7IC8g5Y6f54K5XHJcbiAgICAgICAgaWYgKGF4aXNUeXBlID09IENvbnN0YW50cy5YX0FYSVMpIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplID0gdGhpcy5fY2hhcnRQaXhlbFdpZHRoIC8gKHZBeGlzSW5mb19PdXQubWF4U2NhbGUgLSB2QXhpc0luZm9fT3V0Lm1pblNjYWxlKTtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplID0gdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplICogdkF4aXNJbmZvX091dC5zY2FsZVVuaXQ7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24gPSBjaGFydEluZm9fSW4uYm9keUxlZnQgKyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUgKiB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSA9IHRoaXMuX2NoYXJ0UGl4ZWxIZWlnaHQgLyAodkF4aXNJbmZvX091dC5tYXhTY2FsZSAtIHZBeGlzSW5mb19PdXQubWluU2NhbGUpO1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUgPSB2QXhpc0luZm9fT3V0LnVuaXRWYWx1ZVNpemUgKiB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdDtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbiA9IGNhbnZhcy5oZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbSAtIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSAqIHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3NldEl0ZW1TaXplQW5kUG9zaXRpb25BbmRUd2VlbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY0F4aXNJbmZvX091dCA9IHRoaXMuX2NBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQgPSB0aGlzLl92QXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICBpdGVtQXJyID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBzdGFja05hbWUgPSAnJyxcclxuICAgICAgICAgICAgb2Zmc2V0LFxyXG5cclxuICAgICAgICAgICAgdHdFbmdpbmUgPSB0aGlzLl90d0VuZ2luZSxcclxuICAgICAgICAgICAgdHdlZW5DYWxsQmFjayA9IHRoaXMuX3R3ZWVuQ2FsbEJhY2ssXHJcbiAgICAgICAgICAgIGZyb20sIHRvLCB0d0RhdGEsIHR3QWN0aW9uLFxyXG4gICAgICAgICAgICB0d0RhdGFBcnIgPSBbXSxcclxuXHJcbiAgICAgICAgICAgIG51bSwgYXJyLFxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yLFxyXG4gICAgICAgICAgICB5O1xyXG5cclxuICAgICAgICAvL+mihOWFiOeul+WHuuS4gOS6m+S4remXtOe7k+aenO+8jOeUqOS6juatpOWQjueahOW+queOr1xyXG4gICAgICAgIHkgPSB2QXhpc0luZm9fT3V0Lm9yaWdpblBvc2l0aW9uO1xyXG5cclxuICAgICAgICAvL+W+queOr+mhueebruWvueixoei/m+ihjOiuvuWumlxyXG4gICAgICAgIGxlbjEgPSBpdGVtQXJyLmxlbmd0aDtcclxuICAgICAgICBsZW4yID0gaXRlbUFyclswXS5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjE7IGkrKykge1xyXG4gICAgICAgICAgICAvL+iOt+WPluaMh+Wumuezu+WIl+WvueW6lOeahOmhueebruaVsOe7hFxyXG4gICAgICAgICAgICBhcnIgPSBpdGVtQXJyW2ldO1xyXG4gICAgICAgICAgICBpdGVtID0gYXJyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy/orqHnrpflgY/np7vph49cclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0ICsgY0F4aXNJbmZvX091dC5vZmZzZXRTaXplO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3RhY2tOYW1lID09ICcnIHx8IGl0ZW0uc3RhY2tOYW1lICE9IHN0YWNrTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBjQXhpc0luZm9fT3V0Lml0ZW1TaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGFja05hbWUgPSBpdGVtLnN0YWNrTmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8v5Li65ZCE5Liq6aG555uu6K6+5a6a5aSn5bCP5ZKM5L2N572uXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+W5b6X6aG555uu5a+56LGhXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHkgPT0gdHJ1ZSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/orr7nva7lnZDmoIdcclxuICAgICAgICAgICAgICAgIGl0ZW0ueCA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24ob2Zmc2V0ICsgaiAqIGNBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSB5IC0gdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplICogKGl0ZW0udmFsdWUgKyBpdGVtLnN0YWNrVmFsdWUgLSB2QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0geSAtIHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSAqIChpdGVtLnN0YWNrVmFsdWUgLSB2QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnkgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGl0ZW0ueSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6+572u6aG555uu5bC65a+477yI5bCG5YC86L2s5o2i5Li65bC65a+477yI6ZyA5qC55o2u5piv5ZCmPOe0r+enrz7mnaXorqHnrpflgLzvvInvvIlcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN0YWNrVmFsdWUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IE1hdGguYWJzKGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0gPSBNYXRoLmFicyhpdGVtLnZhbHVlIC0gdkF4aXNJbmZvX091dC5vcmlnaW5WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS53aWR0aCA9IGNBeGlzSW5mb19PdXQuaXRlbVNpemU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmhlaWdodCA9IHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSAqIG51bTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuvue9rue8k+WKqOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgZnJvbSA9IFswXTtcclxuICAgICAgICAgICAgICAgIHRvID0gW2l0ZW0uaGVpZ2h0XTtcclxuXHJcbiAgICAgICAgICAgICAgICB0d0RhdGEgPSB0d0VuZ2luZS5nZXRUV0RhdGEoKTtcclxuICAgICAgICAgICAgICAgIHR3RGF0YS5zZXREYXRhKGl0ZW0sIGZyb20sIHRvLCB0d2VlbkNhbGxCYWNrKTtcclxuICAgICAgICAgICAgICAgIHR3RGF0YUFyci5wdXNoKHR3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR3QWN0aW9uID0gdHdFbmdpbmUuZ2V0VFdBY3Rpb24oKTtcclxuICAgICAgICB0d0FjdGlvbi5zZXREYXRhKHR3RGF0YUFyciwgVFdBbGdvcml0aG0uQm91bmNlLmVhc2VPdXQsIDEwMDApO1xyXG5cclxuICAgICAgICB0d0VuZ2luZS5zZXRGaXJzdFRXQWN0aW9uKHR3QWN0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIgKGNvbW1hbmQpIHtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuX2NhbnZhcyxcclxuXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBzZXJpZXMgPSBjaGFydEluZm9fSW4uc2VyaWVzLFxyXG4gICAgICAgICAgICBzZXIsXHJcblxyXG4gICAgICAgICAgICBsZWZ0ID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0LOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgOOAgC8v5Zu+6KGo57uY5Yi25Yy65Z+f55qE6L6555WMXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gY2FudmFzLndpZHRoIC0gY2hhcnRJbmZvX0luLmJvZHlSaWdodCxcclxuICAgICAgICAgICAgdG9wID0gY2hhcnRJbmZvX0luLmJvZHlUb3AsXHJcbiAgICAgICAgICAgIGJvdHRvbSA9IGNhbnZhcy5oZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbSxcclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3J5cyA9IHRoaXMuY0F4aXNJbmZvX0luLmNhdGVnb3J5cyxcclxuICAgICAgICAgICAgY2F0ZWdvcnlTaXplID0gdGhpcy5fY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUsXHJcblxyXG4gICAgICAgICAgICB0aXAgPSB0aGlzLl90aXBEaXYsXHJcbiAgICAgICAgICAgIHRhYmxlLCBwLFxyXG5cclxuICAgICAgICAgICAgcmVjdCwgICAgICAgLy9DYW52YXPljIXlm7Tnm5Lnm7jlhbNcclxuXHJcbiAgICAgICAgICAgIG51bSxcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0geyB4OiAtMSwgeTogLTEgfSxcclxuXHJcbiAgICAgICAgICAgIGksIGxlbixcclxuICAgICAgICAgICAgbWUgPSB0aGlzO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9Nb3VzZU1vdmUgKGUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bpvKDmoIfnm7jlr7nkuo5DYW52YXPnmoTkvY3nva5cclxuICAgICAgICAgICAgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgVXRpbGl0eS53aW5kb3dUb0NhbnZhcyhyZWN0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICByZWN0LnRvcCxcclxuICAgICAgICAgICAgICAgIHJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgICAgICByZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBlLmNsaWVudFksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL+WIpOaWrem8oOagh+aYr+WQpuS9jeS6juWbvuihqOaVsOaNruaYvuekuuWMuuWfn++8jOWmguaenOS4jeaYr+WImemakOiXj3RpcO+8jOeEtuWQjumAgOWHulxyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA8IGxlZnQgfHxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnggPiByaWdodCB8fFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueSA8IHRvcCB8fFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueSA+IGJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgdGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u5L2N572u6K6h566X5YW25Luj6KGo55qE57G755uu57Si5byVXHJcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcigocG9zaXRpb24ueCAtIGxlZnQpIC8gY2F0ZWdvcnlTaXplKTtcclxuXHJcbiAgICAgICAgICAgIC8v5pi+56S6dGlwXHJcbiAgICAgICAgICAgIHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgIC8v5pu05pawdGlwXHJcbiAgICAgICAgICAgIHAgPSB0aXAuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgaWYgKHAuaW5uZXJUZXh0ID09ICcnIHx8IHAuaW5uZXJUZXh0ICE9IGNhdGVnb3J5c1tpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIC8v5pu05paw57G755uu5ZCN56ewXHJcbiAgICAgICAgICAgICAgICBwLmlubmVyVGV4dCA9IGNhdGVnb3J5c1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mm7TmlrDmlbDmja7ns7vliJdcclxuICAgICAgICAgICAgICAgIHRhYmxlID0gdGlwLmNoaWxkTm9kZXNbMV07XHJcbiAgICAgICAgICAgICAgICBsZW4gPSBzZXJpZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyID0gc2VyaWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnJvd3NbaV0uY2VsbHNbMl0uaW5uZXJUZXh0ID0gc2VyLmRhdGFbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+enu+WKqHRpcFxyXG4gICAgICAgICAgICAvL+iuvuWumnRpcOeahFjlnZDmoIdcclxuICAgICAgICAgICAgbnVtID0gdGlwLm9mZnNldFdpZHRoICsgU3R5bGVzLlRJUF9MT0NBVElPTl9PRkZTRVQ7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54ICsgbnVtID4gcmVjdC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGlwLnN0eWxlLmxlZnQgPSAocG9zaXRpb24ueCAtIG51bSkgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGlwLnN0eWxlLmxlZnQgPSAocG9zaXRpb24ueCArIFN0eWxlcy5USVBfTE9DQVRJT05fT0ZGU0VUKSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v6K6+5a6adGlw55qEWeWdkOagh1xyXG4gICAgICAgICAgICBudW0gPSB0aXAub2Zmc2V0SGVpZ2h0ICsgU3R5bGVzLlRJUF9MT0NBVElPTl9PRkZTRVQ7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi55ICsgbnVtID4gcmVjdC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS50b3AgPSAocG9zaXRpb24ueSAtIG51bSkgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGlwLnN0eWxlLnRvcCA9IChwb3NpdGlvbi55ICsgU3R5bGVzLlRJUF9MT0NBVElPTl9PRkZTRVQpICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/mm7TmlrDpgInmi6npobnvvIzlubbph43nu5hcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IGNoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQNDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvTW91c2VPdXQgKGUpIHtcclxuICAgICAgICAgICAgLy/pmpDol490aXBcclxuICAgICAgICAgICAgdGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/miafooYxcclxuICAgICAgICBpZiAoY29tbWFuZCA9PSBDb25zdGFudHMuQUREICYmIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZG9Nb3VzZU1vdmUpO1xyXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBkb01vdXNlT3V0KTtcclxuICAgICAgICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBDb25zdGFudHMuUkVNT1ZFICYmIG1lLl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkb01vdXNlTW92ZSk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGRvTW91c2VPdXQpO1xyXG4gICAgICAgICAgICBtZS5ldmVudExpc3RlbmVyc0FkZGVkRmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc3RhcnRQYWludCAoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFpbnQgKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1lLl9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uY5Yi25Zu+6KGo5bm25L+d5a2Y57uY5Zu+6KGo6Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3R3RW5naW5lLnN0YXJ0KCk7ICAgICAgICAgICAgICAgICAgLy/lkK/liqjnvJPliqjvvIzku47kuIvkuIDluKflvIDlp4vnvJPliqhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMjpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/nu5jliLbnvJPliqjmlYjmnpxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIOWmguaenOe8k+WKqOayoeaciee7k+adn++8jOWwsee7mOWItlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAg5Y+N5LmL77yM6K6+572u54q25oCB77yM5Zyo5LiL5LiA5YGc5q2i57uY5Yi2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLl90d0VuZ2luZS5uZXh0RnJhbWUoKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fdHdFbmdpbmUuc3RvcCgpOyAgICAgIC8v5YGc5q2i57yT5YqoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLlNURVAzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDM6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpOyAgICAgICAgICAgICAgICAgICAgIC8v57yT5a2YQ2FudmFz57uY5Zu+6KGo6Z2i77yM57uY5Yi26YCJ6aG5XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lcihDb25zdGFudHMuQUREKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5XQUlUSU5HO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVA0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fcGFpbnQoKTsgICAgICAgICAgICAgICAgICAgICAgIC8v5oGi5aSNQ2FudmFz57uY5Zu+6KGo6Z2i77yM57uY5Yi26YCJ6aG5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuV0FJVElORztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lvqrnjq/osIPnlKjoh6rlt7HvvIzov5vooYznu5jnlLtcclxuICAgICAgICAgICAgaWYgKG1lLl9zdGF0dXMgIT0gU3RhdHVzLlNUT1ApIHtcclxuICAgICAgICAgICAgICAgIG1lLl9hbmltYXRpb25GcmFtZUlEID0gd2luZG93LnJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUocGFpbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iuvue9ruWIneWni+eKtuaAge+8jOW8gOWni+e7mOWItlxyXG4gICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDE7XHJcbiAgICAgICAgcGFpbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAqIOe8k+WKqOaViOaenFxyXG4gICAgICovXHJcbiAgICBfdHdlZW5DYWxsQmFjayAodGFyZ2V0LCByZXN1bHRBcnJheSkge1xyXG4gICAgICAgIHRhcmdldC5oZWlnaHQgPSByZXN1bHRBcnJheVswXTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhcnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhcnQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IENBeGlzSW5mb0Jhc2VfSW4gZnJvbSAnLi4vLi4vLi4vYmFzZS9pbmZvL0NBeGlzSW5mb0Jhc2VfSW4uanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENBeGlzSW5mb19JbiBleHRlbmRzIENBeGlzSW5mb0Jhc2VfSW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnNpemVSYXRlID0gMC42OyAgICAgICAgICAgICAgLy/mn7HnirbkvZPlrr3luqblkozljZXkvY3nsbvnm67plb/luqbnmoTmr5TnjofvvIzmmK/kuI3lpKfkuo4x55qE5q2j5pWwXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENBeGlzSW5mb0Jhc2VfT3V0IGZyb20gJy4uLy4uLy4uL2Jhc2UvaW5mby9DQXhpc0luZm9CYXNlX091dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDQXhpc0luZm9fT3V0IGV4dGVuZHMgQ0F4aXNJbmZvQmFzZV9PdXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuaXRlbVNpemUgPSAwOyAgICAgICAgICAgICAgLy/kuIDkuKrpobnnm67lnKjovbTkuIrljaDnlKjnmoTplb/luqZcclxuICAgICAgICB0aGlzLm9mZnNldFNpemUgPSAwOyAgICAgICAgICAgICAgICAvL+afkOWIhuexu+S4reesrOS4gOS4quaVsOaNruezu+WIl+mhueebruWcqOi9tOS4iui3neemu+W3puS+p+acgOi/keWIu+W6pueahOmVv+W6plxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvU3RhdHVzLmpzJztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L1N0eWxlcy5qcyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L1V0aWxpdHkuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvL1BhaW50ZXLkuK3ml6DlhazmnInmiJDlkZjlj5jph49cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9jaGFydDsgICAgICAgICAgICAgICAgICAgIC8v5Zu+6KGo5ZCE57G75pWw5o2uIFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcztcclxuICAgICAgICB0aGlzLl9jdHg7ICAgICAgICAgICAgICAgICAgICAgLy9DYW52YXPkuIrkuIvmlodcclxuICAgICAgICB0aGlzLl9jYW52YXNTdXJmYWNlOyAgICAgICAgICAgIC8vQ2FudmFz57uY5Zu+6KGo6Z2iXHJcblxyXG4gICAgICAgIHRoaXMuX2NoYXJ0SW5mb19JbjsgICAgICAgICAgICAgLy/lm77ooajlkITnsbvmlbDmja4gXHJcbiAgICAgICAgdGhpcy5fY0F4aXNJbmZvX0luO1xyXG4gICAgICAgIHRoaXMuX2NBeGlzSW5mb19PdXQ7ICAgICAgICAgICAgLy/mlbDlgLzovbTovpPlhaXjgIHovpPlh7rmlbDmja5cclxuICAgICAgICB0aGlzLl92QXhpc0luZm9fSW47XHJcbiAgICAgICAgdGhpcy5fdkF4aXNJbmZvX091dDtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5OyAgICAgICAgICAgICAgICAvL+WtmOWCqOaVo+eCueeahOaVsOe7hFxyXG4gICAgICAgIHRoaXMuX3ZBeGlzTGFiZWxDb3VudDsgICAgICAgICAgLy/lgLzovbTmlbDlrZfmoIfnrb7kuKrmlbBcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHNldENoYXJ0IChjaGFydCkge1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0ID0gY2hhcnQ7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2hhcnQuX2NhbnZhcztcclxuICAgICAgICB0aGlzLl9jdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luID0gY2hhcnQuY2hhcnRJbmZvX0luO1xyXG5cclxuICAgICAgICB0aGlzLl9jQXhpc0luZm9fSW4gPSBjaGFydC5jQXhpc0luZm9fSW47XHJcbiAgICAgICAgdGhpcy5fY0F4aXNJbmZvX091dCA9IGNoYXJ0Ll9jQXhpc0luZm9fT3V0O1xyXG4gICAgICAgIHRoaXMuX3ZBeGlzSW5mb19JbiA9IGNoYXJ0LnZBeGlzSW5mb19JbjtcclxuICAgICAgICB0aGlzLl92QXhpc0luZm9fT3V0ID0gY2hhcnQuX3ZBeGlzSW5mb19PdXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1BcnJheSA9IGNoYXJ0Ll9pdGVtQXJyYXk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2NoYXJ0SW5mb19Jbi5zZWxlY3RlZEluZGV4O1xyXG5cclxuICAgICAgICAvL+iuoeeul+WAvOi9tOagh+etvuS4quaVsO+8jOS+m+atpOWQjuS9v+eUqFxyXG4gICAgICAgIHRoaXMuX3ZBeGlzTGFiZWxDb3VudCA9IE1hdGguZmxvb3IoKHRoaXMuX3ZBeGlzSW5mb19PdXQubWF4U2NhbGUgLSB0aGlzLl92QXhpc0luZm9fT3V0Lm1pblNjYWxlKSAvIHRoaXMuX3ZBeGlzSW5mb19PdXQuc2NhbGVVbml0KSArIDE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBhaW50ICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jaGFydC5fc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAxOiAgICAgICAgIC8v57uY5Yi25Zu+6KGo5bm257yT5a2YQ2FudmFz57uY5Zu+6KGo6Z2iXHJcblxyXG4gICAgICAgICAgICAgICAgLy/muIXnqbrnlLvluINcclxuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lnKhfY3R45LiK57uY5Yi25Zu+6KGo5Zu65a6a55qE5YaF5a65XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFRpdGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExlZ2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludEF4aXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGFiZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50QXhpc05hbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e8k+WtmOatpOaXtueahF9jdHjnu5jlm77ooajpnaLvvIjlhajlsLrlr7jvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2UgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMjogICAgICAgICAvL+e7mOWItue8k+WKqOaViOaenFxyXG5cclxuICAgICAgICAgICAgICAgIC8v5oGi5aSNdGhpcy5fY3R455qE57uY5Zu+6KGo6Z2iXHJcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuX2NhbnZhc1N1cmZhY2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi25p+x54q25L2TXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAzOiAgICAgICAgIC8v57yT5a2YQ2FudmFz57uY5Zu+6KGo6Z2i77yI5a6M5pW055qE5Zu+6KGo77yJXHJcblxyXG4gICAgICAgICAgICAgICAgLy/nvJPlrZjmraTml7bnmoRfY3R457uY5Zu+6KGo6Z2i77yI5YWo5bC65a+477yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNTdXJmYWNlID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7mOWItumAieaLqemhuVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRTZWxlY3RvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDQ6ICAgICAgICAgLy/nu5jliLbpgInmi6npoblcclxuXHJcbiAgICAgICAgICAgICAgICAvL+aBouWkjV9jdHjnmoTnu5jlm77ooajpnaJcclxuICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5fY2FudmFzU3VyZmFjZSwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nu5jliLbpgInmi6npoblcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50U2VsZWN0b3IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfcGFpbnRUaXRsZSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5USVRMRV9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9MRUZUO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfVE9QO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChjaGFydEluZm9fSW4udGl0bGUsIGNoYXJ0SW5mb19Jbi50aXRsZUxlZnQsIGNoYXJ0SW5mb19Jbi50aXRsZVRvcCk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9wYWludExlZ2VuZCAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luLFxyXG4gICAgICAgICAgICBzZXJpZXMgPSBjaGFydEluZm9fSW4uc2VyaWVzLFxyXG4gICAgICAgICAgICBjb2xvcnMgPSBjaGFydEluZm9fSW4uY29sb3JzLFxyXG4gICAgICAgICAgICB3LCBoLFxyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICBpLCBsZW4sXHJcbiAgICAgICAgICAgIHN0cjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7mloflrZfmoLflvI9cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5MRUdFTkRfRk9OVDtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fTEVGVDtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuXHJcbiAgICAgICAgLy/ojrflj5bmloflrZfpq5jluqZcclxuICAgICAgICBoID0gVXRpbGl0eS5nZXRUZXh0SGVpZ2h0KGN0eCk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5pyA5ZCO5LiA5Liq5Zu+5L6L5paH5a2X55qE57uT5p2f54K5XHJcbiAgICAgICAgeCA9IHRoaXMuX2NhbnZhcy53aWR0aCAtIGNoYXJ0SW5mb19Jbi5sZWdlbmRSaWdodDtcclxuXHJcbiAgICAgICAgLy/pgIbluo/kvp3mrKHnu5jliLblm77kvovmloflrZflkozoibLlnZdcclxuICAgICAgICBsZW4gPSBzZXJpZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIC8v5Zu+5L6L5pWw5o2uXHJcbiAgICAgICAgICAgIHN0ciA9IHNlcmllc1tpXS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgLy/moLnmja7lm77kvovmloflrZflrr3luqborqHnrpfmloflrZfotbflp4vkvY3nva5cclxuICAgICAgICAgICAgdyA9IGN0eC5tZWFzdXJlVGV4dChzdHIpLndpZHRoO1xyXG4gICAgICAgICAgICB4IC09IHc7XHJcblxyXG4gICAgICAgICAgICAvL+e7mOWItuaWh+Wtl1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gU3R5bGVzLkZPTlRfRklMTF9DT0xPUjtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgeCwgY2hhcnRJbmZvX0luLmxlZ2VuZFRvcCk7XHJcblxyXG4gICAgICAgICAgICAvL+iuoeeul+iJsuWdl+S9jee9rlxyXG4gICAgICAgICAgICB4IC09IFN0eWxlcy5MRUdFTkRfU0hBUEVfVEVYVF9HQVAgKyBoO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLboibLlnZdcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tpXTtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHgsIGNoYXJ0SW5mb19Jbi5sZWdlbmRUb3AsIGgsIGgpO1xyXG5cclxuICAgICAgICAgICAgLy/pl7TpmpRcclxuICAgICAgICAgICAgeCAtPSBTdHlsZXMuTEVHRU5EX0dBUDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9wYWludEdyaWQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgc2NhbGVVbml0U2l6ZSA9IHRoaXMuX3ZBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHZBeGlzTGFiZWxDb3VudCA9IHRoaXMuX3ZBeGlzTGFiZWxDb3VudCxcclxuICAgICAgICAgICAgeDEsIHgyLCB5MSxcclxuICAgICAgICAgICAgbnVtLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAvL+iuvue9ruagt+W8j1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBTdHlsZXMuR1JJRF9MSU5FX1dJRFRIO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFN0eWxlcy5HUklEX0xJTkVfQ09MT1I7XHJcbiAgICAgICAgY3R4LnNldExpbmVEYXNoKFN0eWxlcy5HUklEX0xJTkVfREFTSCk7XHJcblxyXG4gICAgICAgIC8v57uY5Yi25qiq5ZCR6Jma57q/XHJcbiAgICAgICAgeDEgPSBjaGFydEluZm9fSW4uYm9keUxlZnQ7XHJcbiAgICAgICAgeDIgPSBjYW52YXNXaWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQ7XHJcbiAgICAgICAgbnVtID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b207XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB5MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24obnVtIC0gc2NhbGVVbml0U2l6ZSAqIGkpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3BhaW50QXhpcyAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQgPSB0aGlzLl9jQXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0ID0gdGhpcy5fdkF4aXNJbmZvX091dCxcclxuXHJcbiAgICAgICAgICAgIG9yaWdpblBvc2l0aW9uID0gdGhpcy5fdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbixcclxuICAgICAgICAgICAgdkF4aXNMYWJlbENvdW50ID0gdGhpcy5fdkF4aXNMYWJlbENvdW50LFxyXG5cclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeXMgPSB0aGlzLl9jQXhpc0luZm9fSW4uY2F0ZWdvcnlzLFxyXG5cclxuICAgICAgICAgICAgaW50ZWdlcixcclxuICAgICAgICAgICAgbnVtLFxyXG5cclxuICAgICAgICAgICAgeDEsIHgyLCB5MSwgeTIsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy8oMSnorr7nva7moLflvI9cclxuICAgICAgICBjdHgubGluZVdpZHRoID0gU3R5bGVzLkFYSVNfTElORV9XSURUSDtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBTdHlsZXMuQVhJU19MSU5FX0NPTE9SO1xyXG5cclxuICAgICAgICAvLygyKee7mOWItuaoqui9tFxyXG4gICAgICAgIHgxID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0IC0gU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7ICAgICAgICAgICAgICAgICAgICAvL+aoquWQkei1t+eCuVxyXG4gICAgICAgIHgyID0gY2FudmFzV2lkdGggLSBjaGFydEluZm9fSW4uYm9keVJpZ2h0ICsgU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7ICAgIC8v5qiq5ZCR57uI54K5XHJcblxyXG4gICAgICAgIC8v6K6h566X5YC86L205Y6f54K5WeWdkOagh1xyXG4gICAgICAgIHkxID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbihvcmlnaW5Qb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8oMynnu5jliLbmqKrovbTliLvluqZcclxuICAgICAgICB5MiA9IHkxICsgU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7XHJcbiAgICAgICAgaW50ZWdlciA9IGNBeGlzSW5mb19PdXQuaW50ZXJ2YWwgKyAxO1xyXG5cclxuICAgICAgICBsZW4gPSBjYXRlZ29yeXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gaW50ZWdlcikge1xyXG4gICAgICAgICAgICB4MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24oY2hhcnRJbmZvX0luLmJvZHlMZWZ0ICsgY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUgKiBpKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHgxLCB5Mik7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDQp57uY5Yi257q16L20XHJcbiAgICAgICAgeDEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCk7XHJcbiAgICAgICAgeTEgPSBjaGFydEluZm9fSW4uYm9keVRvcCAtIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFO1xyXG4gICAgICAgIHkyID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b20gKyBTdHlsZXMuQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICBjdHgubGluZVRvKHgxLCB5Mik7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyg1Kee7mOWItue6tei9tOWIu+W6plxyXG4gICAgICAgIHgxID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0IC0gU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7XHJcbiAgICAgICAgeDIgPSBjaGFydEluZm9fSW4uYm9keUxlZnQ7XHJcbiAgICAgICAgbnVtID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b207XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB5MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24obnVtIC0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplICogaSk7XHJcblxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfcGFpbnRMYWJlbCAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2N0eCxcclxuXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19JbiA9IHRoaXMuX2NBeGlzSW5mb19JbixcclxuICAgICAgICAgICAgY0F4aXNJbmZvX091dCA9IHRoaXMuX2NBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19JbiA9IHRoaXMuX3ZBeGlzSW5mb19JbixcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dCA9IHRoaXMuX3ZBeGlzSW5mb19PdXQsXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeXMgPSBjQXhpc0luZm9fSW4uY2F0ZWdvcnlzLFxyXG4gICAgICAgICAgICB2QXhpc0xhYmVsQ291bnQgPSB0aGlzLl92QXhpc0xhYmVsQ291bnQsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcblxyXG4gICAgICAgICAgICB4MSwgeTEsIHkyLFxyXG4gICAgICAgICAgICBpbnRlZ2VyLCBudW0sIHN0cixcclxuICAgICAgICAgICAgYW5nbGUsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy8oMSnorr7nva7mlofmnKzmoLflvI9cclxuICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5MQUJFTF9GT05UO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBDb25zdGFudHMuVEVYVF9CQVNFX0xJTkVfTUlERExFO1xyXG5cclxuICAgICAgICAvLygyKee7mOWItuaoqui9tOagh+etvlxyXG4gICAgICAgIGFuZ2xlID0gY0F4aXNJbmZvX0luLmxhYmVsUm90YXRlICUgMzYwO1xyXG4gICAgICAgIGxlbiA9IGNhdGVnb3J5cy5sZW5ndGg7XHJcbiAgICAgICAgaW50ZWdlciA9IGNBeGlzSW5mb19PdXQuaW50ZXJ2YWwgKyAxO1xyXG5cclxuICAgICAgICBpZiAoYW5nbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAvL+iuvue9ruaWh+acrOaoquWQkeWvuem9kOaWueW8j1xyXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fQ0VOVEVSO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbmlofmnKxcclxuICAgICAgICAgICAgeTEgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbSArIFN0eWxlcy5YQVhJU19MQUJFTF9PRkZTRVQ7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gaW50ZWdlcikge1xyXG4gICAgICAgICAgICAgICAgeDEgPSBjaGFydEluZm9fSW4uYm9keUxlZnQgKyBjQXhpc0luZm9fT3V0LmNhdGVnb3J5U2l6ZSAqIChpICsgMC41KTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjYXRlZ29yeXNbaV0sIHgxLCB5MSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/ovazmjaLkuLrlvKfluqZcclxuICAgICAgICAgICAgYW5nbGUgPSAtYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG5cclxuICAgICAgICAgICAgLy/orr7nva7mlofmnKzmqKrlkJHlr7npvZDmlrnlvI9cclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX1JJR0hUO1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbmlofmnKxcclxuICAgICAgICAgICAgeTEgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbSArIFN0eWxlcy5YQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSBpbnRlZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHgxID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0ICsgY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUgKiAoaSArIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHgxLCB5MSk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjYXRlZ29yeXNbaV0sIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iOt+WPluaXi+i9rOinkuW6plxyXG4gICAgICAgIGFuZ2xlID0gdkF4aXNJbmZvX0luLmxhYmVsUm90YXRlICUgMzYwO1xyXG5cclxuICAgICAgICAvL+iuvue9ruaWh+acrOaoquWQkeWvuem9kOaWueW8j1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9SSUdIVDtcclxuXHJcbiAgICAgICAgLy/nu5jliLbmlofmnKxcclxuICAgICAgICB4MSA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCAtIFN0eWxlcy5ZQVhJU19MQUJFTF9PRkZTRVQ7XHJcbiAgICAgICAgeTEgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuICAgICAgICBpZiAoYW5nbGUgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB5MiA9IHkxIC0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplICogaTtcclxuICAgICAgICAgICAgICAgIG51bSA9IHZBeGlzSW5mb19PdXQubWluU2NhbGUgKyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh2QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCB4MSwgeTIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6L2s5o2i5Li65byn5bqmXHJcbiAgICAgICAgICAgIGFuZ2xlID0gLWFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi25paH5pysXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB5MiA9IHkxIC0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplICogaTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoeDEsIHkyKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIG51bSA9IHZBeGlzSW5mb19PdXQubWluU2NhbGUgKyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh2QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3BhaW50QXhpc05hbWUgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHgsIHk7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5paH5a2X5qC35byPXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuQVhJU19OQU1FX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0NFTlRFUjtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuXHJcbiAgICAgICAgLy/nu5jliLZ56L205Y2V5L2N5paH5a2XXHJcbiAgICAgICAgeCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdDtcclxuICAgICAgICB5ID0gY2hhcnRJbmZvX0luLnlBeGlzTmFtZVRvcDtcclxuICAgICAgICBjdHguZmlsbFRleHQoY2hhcnRJbmZvX0luLnlBeGlzTmFtZSwgeCwgeSk7XHJcblxyXG4gICAgICAgIC8v57uY5Yi2WOi9tOWNleS9jeaWh+Wtl1xyXG4gICAgICAgIHggPSBjYW52YXNXaWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQ7XHJcbiAgICAgICAgeSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi54QXhpc05hbWVCb3R0b207XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGNoYXJ0SW5mb19Jbi54QXhpc05hbWUsIHgsIHkpO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfcGFpbnRDb2x1bW5zICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjb2xvcnMgPSB0aGlzLl9jaGFydEluZm9fSW4uY29sb3JzLFxyXG4gICAgICAgICAgICBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/ns7vliJdcclxuICAgICAgICBsZW4xID0gaXRlbUFycmF5Lmxlbmd0aDtcclxuICAgICAgICBsZW4yID0gaXRlbUFycmF5WzBdLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyciA9IGl0ZW1BcnJheVtpXTtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGFycltqXTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpcnR5RmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGl0ZW0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3BhaW50U2VsZWN0b3IgKCkge1xyXG5cclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQgPSB0aGlzLl9jQXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCxcclxuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FudmFzLmhlaWdodCxcclxuXHJcbiAgICAgICAgICAgIHgsIHksIHcsIGg7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHggPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCArIGNBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplICogc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIHkgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGNoYXJ0SW5mb19Jbi5ib2R5VG9wKTtcclxuICAgICAgICAgICAgdyA9IE1hdGguZmxvb3IoY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUpO1xyXG4gICAgICAgICAgICBoID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlUb3AgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBTdHlsZXMuQ09MVU1OX1NFTEVDVE9SX0xJTkVfV0lEVEg7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFN0eWxlcy5DT0xVTU5fU0VMRUNUT1JfTElORV9DT0xPUjtcclxuXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xyXG5cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vICDliKnnlKjpl63ljIXlkoznq4vljbPmiafooYzlh73mlbDliJvlu7rljZXkvotcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblBhaW50ZXIuZ2V0SW5zdGFuY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGluc3RhbmNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBQYWludGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0pKCk7IiwiaW1wb3J0IFBhcnRCYXNlIGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbiBleHRlbmRzIFBhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnN0YWNrTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhY2tWYWx1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2VyaWVzQmFzZSBmcm9tICcuLi8uLi8uLi9iYXNlL3Nlcmllcy9TZXJpZXNCYXNlLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXMgZXh0ZW5kcyBTZXJpZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnN0YWNrTmFtZSA9ICcnO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog5a6a5LmJd2luZG935Yqo55S75b6q546v5o6n5Yi25Ye95pWw77yI5Yip55So56uL5Y2z5omn6KGM5Ye95pWw77yJXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbndpbmRvdy5yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuYywgMTYpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxufSkoKTtcclxuIiwiY29uc3QgQ29uc3RhbnRzID0ge1xyXG4gICAgRElSVFk6ICctJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5a6a5LmJ5pWw5o2u5pe277yM55So5p2l6KGo56S65rKh5pyJ5pWw5o2u77yM5oiW6ISP5pWw5o2u77yI5peg5pWI5pWw5o2u77yJXHJcbiAgICBIQUxGX1BJWEVMOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/ljYrkuKrlg4/ntKBcclxuXHJcbiAgICBDTE9TRV9UT19aRVJPOiAwLjAwMDAwMDEsICAgICAgICAgICAgICAgLy/mta7ngrnmlbDorqHnrpfkvJrmnInnsr7luqbor6/lt67vvIzor6XluLjph4/nlKjkuo7liKTmlq3kuKTkuKrmta7ngrnmlbDmmK/lkKbnm7jnrYnjgILlpoLmnpzkuKTkuKrmta7ngrnmlbDnmoTlt67lgLzlsI/kuo7or6XmlbDvvIzliJnorqTkuLrnm7jnrYnjgIJcclxuXHJcbiAgICBURVhUX0JBU0VfTElORV9NSURETEU6ICdtaWRkbGUnLCAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X57q15ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0JBU0VfTElORV9UT1A6ICd0b3AnLFxyXG4gICAgVEVYVF9CQVNFX0xJTkVfQk9UVE9NOiAnYm90dG9tJyxcclxuXHJcbiAgICBURVhUX0FMSUdOX0NFTlRFUjogJ2NlbnRlcicsICAgICAgICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5qiq5ZCR5o6S5YiX5bGe5oCnXHJcbiAgICBURVhUX0FMSUdOX0xFRlQ6ICdsZWZ0JyxcclxuICAgIFRFWFRfQUxJR05fUklHSFQ6ICdyaWdodCcsXHJcblxyXG4gICAgVEVYVF9CQVNFX0xJTkVfSURFT0dSQVBISUM6ICdpZGVvZ3JhcGhpYycsICAgICAgLy/lnKhDYW52YXPkuIrnu5jliLbmloflrZfml7bvvIzorr7nva5Db250ZXh05LiK5LiL5paH55qE5paH5a2X5Z+657q/5bGe5oCnXHJcblxyXG4gICAgQUREOiAnYWRkJyxcclxuICAgIFJFTU9WRTogJ3JlbW92ZScsXHJcblxyXG4gICAgWF9BWElTOiAneC1heGlzJywgICAgICAgICAgICAgICAvL+S7o+ihqOaYr3jovbTov5jmmK956L20XHJcbiAgICBZX0FYSVM6ICd5LWF4aXMnLFxyXG5cclxuICAgIFJBRElBTl9VTklUOiBNYXRoLlBJIC8gMTgwICAgICAgLy/lvKfluqbljZXkvY1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50cztcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UG9vbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xhenosIHBhcmEpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2xhc3MgPSBjbGF6ejsgICAvL+exu+WQjVxyXG4gICAgICAgIHRoaXMuX3BhcmEgPSBwYXJhOyAgICAgIC8v5a6e5L6L5YyW5a+56LGh5pe255qE5Y+C5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwOyAgICAgICAgLy/lr7nosaHmsaDkuK3lr7nosaHnmoTkuKrmlbBcclxuICAgICAgICB0aGlzLl9wb29sID0gW107ICAgICAgICAvL+WvueixoeaxoFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGdldE9iaiAoKSB7XHJcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sLFxyXG4gICAgICAgICAgICBsZW4sXHJcbiAgICAgICAgICAgIG9iajtcclxuXHJcbiAgICAgICAgLy/lpoLmnpzlvZPliY3lt7Lkvb/nlKjnmoTlr7nosaHkuKrmlbDlpKfkuo7miJbnrYnkuo7msaDkuK3lt7LmnInlr7nosaHkuKrmlbDvvIxcclxuICAgICAgICAvL+WImeaWsOeUn+aIkOS4gOS4quWvueixoe+8m+WQpuWImeS7juaxoOS4reebtOaOpeWPluW+l+WvueixoVxyXG4gICAgICAgIGlmICh0aGlzLl9jb3VudCA+PSBwb29sLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvYmogPSBuZXcgdGhpcy5fY2xhc3ModGhpcy5fcGFyYSk7XHJcblxyXG4gICAgICAgICAgICBsZW4gPSBwb29sLmxlbmd0aDtcclxuICAgICAgICAgICAgcG9vbFtsZW5dID0gb2JqO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSBwb29sW3RoaXMuX2NvdW50XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6w5b2V5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWwXHJcbiAgICAgICAgdGhpcy5fY291bnQrKztcclxuXHJcbiAgICAgICAgLy/ov5Tlm57lr7nosaFcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWw5riF6Zu2XHJcbiAgICAqIOi/meagt++8jOW9k+WHveaVsGdldE9iaigp6KKr6LCD55So55qE5pe25YCZ77yM5rGg5Lit5omA5pyJ5a+56LGh6YO95Y+v5L2/55SoXHJcbiAgICAqL1xyXG4gICAgcmVsZWFzZUFsbCAoKSB7XHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufSIsImNvbnN0IFN0YXR1cyA9IHtcclxuICAgIFxyXG4gICAgU1RFUDE6ICdzdGVwMScsXHJcbiAgICBTVEVQMjogJ3N0ZXAyJyxcclxuICAgIFNURVAzOiAnc3RlcDMnLFxyXG4gICAgU1RFUDQ6ICdzdGVwNCcsXHJcbiAgICBTVEVQNTogJ3N0ZXA1JyxcclxuICAgIFdBSVRJTkc6ICd3YWl0aW5nJyxcclxuICAgIFNUT1A6ICdzdG9wJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzOyIsImNvbnN0IFN0eWxlcyA9IHtcclxuICAgIFxyXG4gICAgLy/lhbHlkIzpg6jliIZcclxuICAgIFRJVExFX0ZPTlQ6ICcxNnB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH6aKY5a2X5L2TICAgICAgICBcclxuICAgIExFR0VORF9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgIC8v5Zu+5L6L5a2X5L2TICBcclxuICAgIExBQkVMX0ZPTlQ6ICcxMHB4IE1pY3Jvc29mdCBZYUhlaScsICAgICAgICAgIC8v5qCH562+5a2X5L2TICBcclxuICAgIEFYSVNfTkFNRV9GT05UOiAnMTRweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgIC8v6L205ZCN56ew5a2X5L2TICBcclxuICAgIEZPTlRfRklMTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgICAgICAgIC8v6buY6K6k5a2X5L2T5aGr5YWF6aKc6ImyXHJcbiAgICBBWElTX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+i9tOe6v+eahOe6v+WuvVxyXG4gICAgQVhJU19MSU5FX0NPTE9SOiAnIzMzMzMzMycsICAgICAgICAgICAgICAgICAgLy/ovbTnur/popzoibJcclxuICAgIEFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU6IDUsICAgICAgICAgICAgICAgIC8v5Yi75bqm57q/55qE6ZW/5bqmXHJcbiAgICBHUklEX0xJTkVfV0lEVEg6IDAuNSwgICAgICAgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+eahOe6v+WuvVxyXG4gICAgR1JJRF9MSU5FX0NPTE9SOiAnI0JCQ0NERCcsICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/popzoibJcclxuICAgIEdSSURfTElORV9EQVNIOiBbNSwgNV0sICAgICAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/54K555qE6Ze06ZqUXHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3jovbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBYQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3jovbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB46L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVQ6IDE2LCAgICAgICAgICAgICAgICAgICAgICAvL3novbTmoIfnrb7mloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBZQVhJU19MQUJFTF9PRkZTRVRfRk9SX1JPVEFURTogMTYsICAgICAgICAgICAvL3novbTmoIfnrb7ml4vovazml7bvvIzmloflrZfkuK3lv4PngrnliLB56L2057q/55qE6Led56a7XHJcbiAgICBMRUdFTkRfU0hBUEVfVEVYVF9HQVA6IDUsICAgICAgICAgICAgICAgICAgICAvL+WbvuS+i+S4re+8jOiJsuWdl+WSjOaWh+Wtl+eahOmXtOmalFxyXG4gICAgTEVHRU5EX0dBUDogMTUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77kvovmqKrlkJHmjpLliJfml7bvvIzlm77kvovkuYvpl7TnmoTpl7TpmpRcclxuICAgIFRJUF9MT0NBVElPTl9PRkZTRVQ6IDIwLCAgICAgICAgICAgICAgICAgICAgIC8v5a6a5L2NVGlw5L2N572u5pe277yM55u45a+56byg5qCH5L2N572u55qE5YGP56e76YePXHJcblxyXG5cclxuICAgIC8v5rCU5rOh5Zu+XHJcbiAgICBCVUJCTEVfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAgICAgICAgLy/msJTms6HnmoTpgI/mmI7luqZcclxuXHJcblxyXG4gICAgLy/mn7Hnirblm75cclxuICAgIENPTFVNTl9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAvL+eUqOS6juahhumAiemhueebrueahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgQ09MVU1OX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgIC8v55So5LqO5qGG6YCJ6aG555uu55qE5pa55qGG55qE6L655qGG57q/6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5oqY57q/5Zu+XHJcbiAgICBMSU5FX0xJTkVfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgICAgICAgLy/mipjnur/nmoTnur/lrr1cclxuICAgIExJTkVfQVJFQV9BTFBIQTogMC43LCAgICAgICAgICAgICAgICAgICAgICAvL+e7mOWItumdouenr+WbvuaXtueahOmAj+aYjuW6plxyXG4gICAgTElORV9NQVJLUE9JTlRfV0lEVEg6IDEuMCwgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K555qE57q/5a69XHJcbiAgICBMSU5FX01BUktQT0lOVF9SQURJVVM6IDIsICAgICAgICAgICAgICAgICAgLy/moIforrDngrnnmoTlnIbljYrlvoRcclxuICAgIExJTkVfTUFSS1BPSU5UX0JBS19DT0xPUjogJyNGM0YzRjMnLCAgICAgICAvL+agh+iusOeCueeahOiDjOaZr+minOiJslxyXG4gICAgTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH5b+X6YCJ5oup6aG555qE57q/5q6155qE57q/5a69XHJcbiAgICBMSU5FX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjQzIzNTMxJywgICAgICAgLy/nlKjkuo7moIflv5fpgInmi6npobnnmoTnur/mrrXnmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ppbzlm75cclxuICAgIFBJRV9MQUJFTF9JTk5FUl9GT05UX0NPTE9SOiAnI0ZGRkZGRicsICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWGheaYvuekuuaXtu+8jOaWh+Wtl+eahOminOiJslxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUxX1NJWkU6IDIwLCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MeeahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX0dVSURFX0xJTkUyX1NJWkU6IDE1LCAgICAgICAgICAgIC8v5b2T5qCH562+5paH5a2X5Zyo6aW85aSW5pi+56S65pe277yM6L+e5o6l6aW85Z2X5ZKM5qCH562+5paH5a2X55qE5byV5a+857q/MueahOmVv+W6plxyXG4gICAgUElFX0xBQkVMX09GRlNFVDogNSwgICAgICAgICAgICAgICAgICAgICAgIC8v5byV5a+857q/5ZKM5qCH562+5paH5a2X55qE6Ze06LedXHJcbiAgICBQSUVfU0VMRUNUT1JfVFJBTlNMQVRFOiAxMCwgICAgICAgICAgICAgICAgLy/ooqvpgInmi6nnmoTppbzlnZfnmoTkvY3np7vph49cclxuICAgIFBJRV9TRUxFQ1RPUl9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAvL+ahhumAieaVsOaNrumhueeahOaWueahhueahOi+ueahhue6v+e6v+WuvVxyXG4gICAgUElFX1NFTEVDVE9SX0xJTkVfQ09MT1I6ICcjRkYwMDAwJywgICAgICAgIC8v5qGG6YCJ5pWw5o2u6aG555qE5pa55qGG55qE6L655qGG6aKc6ImyXHJcblxyXG5cclxuICAgIC8v6Zu36L6+5Zu+XHJcbiAgICBSQURBUl9MQUJFTF9GT05UOiAnMTJweCBNaWNyb3NvZnQgWWFIZWknLCAgLy/mjIfmoIfmloflrZfnmoTlrZfkvZNcclxuICAgIFJBREFSX0xBQkVMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgICAvL+aMh+agh+aWh+Wtl+eahOminOiJslxyXG4gICAgUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUOiAxMCwgICAgICAgICAgIC8v5oyH5qCH5paH5a2X5ZKM5a+55bqU5aSa6L655b2i6aG254K55LmL6Ze055qE6Ze06LedXHJcbiAgICBSQURBUl9MSU5FX1dJRFRIOiAzLjAsICAgICAgICAgICAgICAgICAgICAgLy/mlbDmja7pm7fovr7nur/nmoTnur/lrr1cclxuICAgIFJBREFSX0JBS19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9ouahhue6v+WSjOWNiuW+hOWIhuWJsue6v+eahOe6v+WuvVxyXG4gICAgUkFEQVJfQkFLX0xJTkVfQ09MT1I6ICcjQzlDOUM5JywgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i5qGG57q/5ZKM5Y2K5b6E5YiG5Ymy57q/55qE6aKc6ImyXHJcbiAgICBSQURBUl9CQUtfRklMTF9DT0xPUjogJyNFNkU2RTYnLCAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLnmoTog4zmma/popzoibJcclxuXHJcblxyXG4gICAgLy/mlaPngrnlm75cclxuICAgIFNDQVRURVJfUE9JTlRfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAvL+aVo+eCueeahOmAj+aYjuW6plxyXG4gICAgU0NBVFRFUl9DUk9TU19MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgIC8v55So5LqO5qCH6K+G6byg5qCH5L2N572u55qE5Y2B5a2X57q/55qE57q/5a69XHJcbiAgICBTQ0FUVEVSX0NST1NTX0NPTE9SOiAnI0ZGMDAwMCcsICAgICAgICAgICAgLy/nlKjkuo7moIfor4bpvKDmoIfkvY3nva7nmoTljYHlrZfnur/nmoTpopzoibJcclxuXHJcblxyXG4gICAgLy/ml63ml6Xlm75cclxuICAgIFNVTkJVUlNfTEFCRUxfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAvL+agh+etvuaWh+Wtl+eahOminOiJslxyXG4gICAgU1VOQlVSU19CT1JERVJfQ09MT1I6ICcjMDAwMDAwJyAgICAgICAgICAgIC8v5omH5b2i5Z2X55qE6L655qGG6aKc6ImyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZXM7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog6Z2Z5oCB5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8qXHJcbiAgICAqIOiuoeeul+OAkOWAvOi9tOOAkeeahOWIu+W6puWNleS9jVxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRTY2FsZVVuaXQgKG1pbiwgbWF4LCBzY2FsZU1heENvdW50KSB7XHJcbiAgICAgICAgbGV0IGksIGxlbixcclxuICAgICAgICAgICAgYXZnLFxyXG4gICAgICAgICAgICBnYXBzID0gWzEsIDIsIDIuNSwgNSwgMTBdLFxyXG4gICAgICAgICAgICBzY2FsZVVuaXQsXHJcbiAgICAgICAgICAgIG1hZ25pdHVkZTtcclxuXHJcbiAgICAgICAgLy/orqHnrpflnYfliIblgLxcclxuICAgICAgICBhdmcgPSAobWF4IC0gbWluKSAvIChzY2FsZU1heENvdW50LTEpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+Wdh+WIhuWAvOeahOaVsOmHj+e6p1xyXG4gICAgICAgIG1hZ25pdHVkZSA9IHRoaXMuZ2V0TWFnbml0dWRlKGF2Zyk7XHJcblxyXG4gICAgICAgIC8v5b6q546v77yM55u06Iez56ys5LiA5Liq5aSn5LqO5oiW562J5LqO5Z2H5YiG5YC855qE5pW05pWw5YC85Ye6546wXHJcbiAgICAgICAgbGVuID0gZ2Fwcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCA9IGdhcHNbaV0gKiBtYWduaXR1ZGU7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZVVuaXQgPj0gYXZnKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ov5Tlm55cclxuICAgICAgICByZXR1cm4gc2NhbGVVbml0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICog6K6h566X5oyH5a6a5pWw5YC855qE5pWw6YeP57qnXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGdldE1hZ25pdHVkZSAobnVtKSB7XHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoQxMOeahOW5glxyXG4gICAgICAgIGxldCBwb3cgPSBNYXRoLmZsb29yKE1hdGgubG9nKG51bSkgLyBNYXRoLmxvZygxMCkpOztcclxuXHJcbiAgICAgICAgLy/orqHnrpfmlbDlgLznmoTmlbDph4/nuqdcclxuICAgICAgICBsZXQgbWFnbml0dWRlID0gTWF0aC5wb3coMTAsIHBvdyk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYWduaXR1ZGU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgKiBDYW52YXPnu5jliLbml7blr7nlnZDmoIfov5vooYzlvq7osINcclxuICAgICog5Zub6IiN5LqU5YWl5Y+W5pW05ZCO5YeP5bCPMC415YOP57Sg44CC6L+Z5qC377yM5ZyoQ2FudmFz5pe25L2N572u5aSE5LqO5Lik5Liq5YOP57Sg5LmL6Ze077yM6YG/5YWN5Y+R6Jma44CCXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGFkanVzdFBvc2l0aW9uICh4T1J5KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoeE9SeSkgLSBDb25zdGFudHMuSEFMRl9QSVhFTDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyB3aW5kb3dUb0NhbnZhcyAoYm91bmRpbmdDbGllbnRSZWN0TGVmdCxcclxuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3RUb3AsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0V2lkdGgsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0LFxyXG4gICAgICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodCxcclxuICAgICAgICBnbG9ibGVYLFxyXG4gICAgICAgIGdsb2JsZVksXHJcbiAgICAgICAgcG9zaXRpb24pIHtcclxuICAgICAgICBwb3NpdGlvbi54ID0gZ2xvYmxlWCAtIGJvdW5kaW5nQ2xpZW50UmVjdExlZnQgKiAoY2FudmFzV2lkdGggLyBib3VuZGluZ0NsaWVudFJlY3RXaWR0aCk7XHJcbiAgICAgICAgcG9zaXRpb24ueSA9IGdsb2JsZVkgLSBib3VuZGluZ0NsaWVudFJlY3RUb3AgKiAoY2FudmFzSGVpZ2h0IC8gYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0V2lkdGggKGNhbnZhc0NvbnRleHQsIHRleHQpIHtcclxuICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0SGVpZ2h0IChjYW52YXNDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoJ00nKS53aWR0aCAqIDcgLyA2O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXQWN0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gMDsgICAgICAgICAgIC8v57yT5Yqo5qyh5pWwXHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7ICAgICAgICAgICAgICAvL+e8k+WKqOW8gOWni+aXtu+8jOS7juesrOWHoOasoee8k+WKqOW8gOWniyAgXHJcbiAgICAgICAgdGhpcy5kYXRhQXJyYXkgPSBbXTsgICAgICAgICAgLy/mnKzliqjkvZzmk43mjqfnmoRUV0RhdGHmlbDmja7pm4ZcclxuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IG51bGw7ICAgICAgICAvL+e8k+WKqOeul+azlVxyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbiA9IG51bGw7ICAgICAgIC8v5pys5Yqo5L2c57uT5p2f5ZCO55qE5LiL5LiA5Liq5Yqo5L2cXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXREYXRhIChkYXRhQXJyYXksIGFsZ29yaXRobSwgZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IGFsZ29yaXRobTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gTWF0aC5jZWlsKGR1cmF0aW9uIC8gVFdBY3Rpb24uRlJBTUVfRFVSQVRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYWluIChhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24gPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lICgpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0LFxyXG4gICAgICAgICAgICBmcm9tLFxyXG4gICAgICAgICAgICB0byxcclxuICAgICAgICAgICAgY2FsbEJhY2ssXHJcblxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yLFxyXG5cclxuICAgICAgICAgICAgcnRuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnQgPiB0aGlzLnRvdGxlVGltZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgbGVuMSA9IHRoaXMuZGF0YUFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuZGF0YUFycmF5W2ldLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGZyb20gPSB0aGlzLmRhdGFBcnJheVtpXS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgdG8gPSB0aGlzLmRhdGFBcnJheVtpXS50bztcclxuICAgICAgICAgICAgICAgIGNhbGxCYWNrID0gdGhpcy5kYXRhQXJyYXlbaV0uY2FsbEJhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBsZW4yID0gZnJvbS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5hbGdvcml0aG0odGhpcy5zdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVtqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9bal0gLSBmcm9tW2pdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGxlVGltZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbEJhY2sodGFyZ2V0LCBhcnIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGFydCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB0aGlzLnRvdGxlVGltZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDpnZnmgIHlj5jph49cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuVFdBY3Rpb24uRlJBTUVfRFVSQVRJT04gPSAxNzsgICAgICAvL+W4p+mikeS4ujYw55qE54q25oCB5LiL77yM5LiA5bin55qE5pKt5pS+5pe26ZW/5Li6MTdtcyAoIDEwMDBtcy82MCApXHJcbiIsIi8qXHJcbiAqIHQ6IGN1cnJlbnQgdGltZe+8iOW9k+WJjeaXtumXtO+8iVxyXG4gKiBiOiBiZWdpbm5pbmcgdmFsdWXvvIjliJ3lp4vlgLzvvIlcclxuICogYzogY2hhbmdlIGluIHZhbHVl77yI5Y+Y5YyW6YeP77yJXHJcbiAqIGQ6IGR1cmF0aW9u77yI5oyB57ut5pe26Ze077yJXHJcbiAqIFxyXG4gKiBcclxuICog57yT5Yqo5Ye95pWwOlxyXG4gKiAxLkxpbmVhciDljIDpgJ9cclxuICogMi5RdWFkIOS6jOasoeaWuee8k+WKqOaViOaenFxyXG4gKiAzLkN1YmljIOS4ieasoeaWuee8k+WKqOaViOaenFxyXG4gKiA0LlF1YXJ0IOWbm+asoeaWuee8k+WKqOaViOaenFxyXG4gKiA1LlF1aW50IOS6lOasoeaWuee8k+WKqOaViOaenFxyXG4gKiA2LlNpbmUgIOato+W8pue8k+WKqOaViOaenFxyXG4gKiA3LkV4cG8gIOaMh+aVsOe8k+WKqOaViOaenFxyXG4gKiA4LkNpcmMgIOWchuW9oue8k+WKqOWHveaVsFxyXG4gKiA5LkVsYXN0aWMg5oyH5pWw6KGw5YeP5q2j5bym5puy57q/57yT5Yqo5Ye95pWwXHJcbiAqIDEwLkJhY2sgIOi2hei/h+iMg+WbtOeahOS4ieasoeaWueeahOe8k+WKqOWHveaVsFxyXG4gKiAxMS5Cb3VuY2Ug5oyH5pWw6KGw5YeP55qE5Y+N5by55puy57q/57yT5Yqo5Ye95pWwXHJcbiAqIFxyXG4gKiBcclxuICog5q+P56eN57yT5Yqo5Ye95pWw6YO955Sx5LiJ56eN5pWI5p6cOlxyXG4gKiAxLmVhc2VJbiAg5Yqg6YCfXHJcbiAqIDIuZWFzZU91dCDlh4/pgJ9cclxuICogMy5lYXNlSW5PdXQgIOWFiOWKoOmAn+WQjuWHj+mAn1xyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdBbGdvcml0aG0ge1xyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOmdmeaAgeWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0YXRpYyBsaW5lYXIgKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICByZXR1cm4gYyAqIHQgLyBkICsgYjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOmdmeaAgeWPmOmHj1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5UV0FsZ29yaXRobS5RdWFkID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoKC0tdCkgKiAodCAtIDIpIC0gMSkgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uQ3ViaWMgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5RdWFydCA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLlF1aW50ID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5TaW5lID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqIE1hdGguY29zKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBjICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogTWF0aC5zaW4odCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQgLyBkKSAtIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkV4cG8gPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0ID09IDApID8gYiA6IGMgKiBNYXRoLnBvdygyLCAxMCAqICh0IC8gZCAtIDEpKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHQgPT0gZCkgPyBiICsgYyA6IGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQgLyBkKSArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICh0ID09IGQpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5DaXJjID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0IC89IGQpICogdCkgLSAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gKHQgPSB0IC8gZCAtIDEpICogdCkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIC1jIC8gMiAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkVsYXN0aWMgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPT0gMSkgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHAgPT0gXCJ1bmRlZmluZWRcIikgcCA9IGQgKiAuMztcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgICAgICAgICBsZXQgcztcclxuICAgICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PSBcInVuZGVmaW5lZFwiKSBwID0gZCAqIC4zO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gYztcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIGMgKyBiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpID09IDIpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09IFwidW5kZWZpbmVkXCIpIHAgPSBkICogKC4zICogMS41KTtcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIC0uNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogLjUgKyBjICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkJhY2sgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09IFwidW5kZWZpbmVkXCIpIHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PSBcInVuZGVmaW5lZFwiKSBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqICgocyArIDEpICogdCArIHMpICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT0gXCJ1bmRlZmluZWRcIikgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiAodCAqIHQgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB0IC0gcykpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkJvdW5jZSA9XHJcbiAgICB7XHJcblxyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgbGV0IFRXQWxnb3JpdGhtID0gVC50d2VlbjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLSBCb3VuY2UuZWFzZU91dChkIC0gdCwgMCwgYywgZCkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQpIDwgKDEgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDEuNSAvIDIuNzUpKSAqIHQgKyAuNzUpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMi4yNSAvIDIuNzUpKSAqIHQgKyAuOTM3NSkgKyBiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDIuNjI1IC8gMi43NSkpICogdCArIC45ODQzNzUpICsgYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBsZXQgVFdBbGdvcml0aG0gPSBULnR3ZWVuO1xyXG4gICAgICAgICAgICBpZiAodCA8IGQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQm91bmNlLmVhc2VJbih0ICogMiwgMCwgYywgZCkgKiAuNSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQm91bmNlLmVhc2VPdXQodCAqIDIgLSBkLCAwLCBjLCBkKSAqIC41ICsgYyAqIC41ICsgYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUV0RhdGEge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gW107XHJcbiAgICAgICAgdGhpcy50byA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IFtdO1xyXG4gICAgICAgIHRoaXMudG8gPSBbXTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhICh0YXJnZXQsIGZyb21BcnJheSwgdG9BcnJheSwgY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tQXJyYXk7XHJcbiAgICAgICAgdGhpcy50byA9IHRvQXJyYXk7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxCYWNrO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxufVxyXG4iLCJpbXBvcnQgT2JqZWN0UG9vbCBmcm9tICcuLi9zdXBwb3J0L09iamVjdFBvb2wuanMnO1xyXG5pbXBvcnQgVFdBY3Rpb24gZnJvbSBcIi4uL3R3ZWVuL1RXQWN0aW9uLmpzXCI7XHJcbmltcG9ydCBUV0RhdGEgZnJvbSBcIi4uL3R3ZWVuL1RXRGF0YS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdFbmdpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLl9hY3Rpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fZmlyc3RBY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9hY3Rpb25Qb29sID0gbmV3IE9iamVjdFBvb2woVFdBY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sID0gbmV3IE9iamVjdFBvb2woVFdEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRUV0FjdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgb2JqID0gdGhpcy5fYWN0aW9uUG9vbC5nZXRPYmooKTtcclxuICAgICAgICBvYmouaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMucHVzaChvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRXRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgb2JqID0gdGhpcy5fZGF0YVBvb2wuZ2V0T2JqKCk7XHJcbiAgICAgICAgb2JqLmluaXQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlQWxsVFdEYXRhICgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhUG9vbC5yZWxlYXNlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZUFsbFRXQWN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uUG9vbC5yZWxlYXNlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rmlyc3RUV0FjdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZmlyc3RBY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGlvbiA9IHRoaXMuX2ZpcnN0QWN0aW9uO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZXh0RnJhbWUgKCkge1xyXG4gICAgICAgIGxldCBydG4gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNQbGF5aW5nID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRBY3Rpb24ubmV4dEZyYW1lKCkgPT0gZmFsc2UpICAgLy/lvZPliY1hY3Rpb27nmoTnvJPliqjlt7Lnu4/nu5PmnZ8gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRBY3Rpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcnRuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgKCkge1xyXG4gICAgICAgIGxldCBpLCBsZW47XHJcblxyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9maXJzdEFjdGlvbjtcclxuXHJcbiAgICAgICAgbGVuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbnNbaV0uaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICcuLi9zcmMvY2hhcnQvY29sdW1uL2Nzcy9jaGFydC5jc3MnIDtcclxuaW1wb3J0ICcuLi9zcmMvcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZS5qcyc7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYXJ0IH0gIGZyb20gJy4uL3NyYy9jaGFydC9jb2x1bW4vQ2hhcnQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcmllcyB9ICBmcm9tICcuLi9zcmMvY2hhcnQvY29sdW1uL3Nlcmllcy9TZXJpZXMuanMnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9