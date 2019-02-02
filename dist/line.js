(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["line"] = factory();
	else
		root["T"] = root["T"] || {}, root["T"]["line"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpackEntry/lineEntry.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/chart/line/css/chart.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/chart/line/css/chart.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* \r\n * 图表内全局设定（必须项目）\r\n * 用于清除（初始化）所有默认内外边距 \r\n */\r\n.lineChartDiv *{\r\n    padding: 0px ;            /* 清除（初始化）图表内所有元素的默认内边距 */\r\n    margin: 0px ;              /* 清除（初始化）图表内所有元素的默认外边距 */\r\n    line-height: 1.5 ;\r\n}\r\n\r\n\r\n\r\n/* \r\n * 绘制主体的Canvas\r\n */\r\n.lineChartDiv canvas {\r\n    position: absolute;            /* 绝对定位，这样2个块元素（Canvas）才会重叠在一起 */\r\n    left: 0px;\r\n    top: 0px;\r\n    border: thin solid #aaaaaa;\r\n}\r\n\r\n\r\n            \r\n/* \r\n * Tip\r\n */\r\n.lineChartTipDiv {\r\n    position: absolute;            /* 绝对定位，这样才会跟随鼠标位置 */\r\n    \r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    \r\n    background: rgba(0, 0, 0, 0.6);\r\n    \r\n    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;     /* 阴影 */\r\n    -moz-box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;\r\n    \r\n    font-family: Microsoft YaHei;      /* Tip字体 */\r\n    font-size: 12px;              /* Tip字体尺寸 */\r\n    color: #eeeeee;               /* Tip文字颜色 */\r\n}\r\n\r\n\r\n.lineChartTipDiv p {\r\n    padding: 0px;  \r\n    margin: 0px ;       \r\n}\r\n\r\n/* \r\n * Tip -- table\r\n */\r\n.lineChartTipDiv table{\r\n    padding: 0px;  \r\n    margin: 0px ;       \r\n    border:none;\r\n    \r\n    border-collapse: collapse;    /* 合并边框 */\r\n    border-spacing: 0;            /* 设置相邻单元格的边框间的距离 */\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td\r\n */\r\n.lineChartTipDiv table td {\r\n    padding: 0px;         \r\n    padding-right: 10px;          /* 在列数据之间留余白 */\r\n    margin: 0px ;\r\n    white-space:nowrap;           /* 禁止换行 */\r\n    border: 0;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- td -- span\r\n */\r\n.lineChartTipDiv table td span {\r\n    display:inline-block;           /* 转成行内块，否则不能显示出来 */\r\n    /*border-radius: 10px;            /* 圆形 */\r\n    width: 9px;\r\n    height: 9px;\r\n}\r\n\r\n\r\n\r\n/* \r\n * Tip -- table -- 第三列\r\n */\r\n.lineChartTipDiv .thirdCol {\r\n    text-align: right;           /* 靠右对齐 */\r\n}\r\n", ""]);



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

/***/ "./src/chart/line/Chart.js":
/*!*********************************!*\
  !*** ./src/chart/line/Chart.js ***!
  \*********************************/
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
/* harmony import */ var _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info/ChartInfo_In.js */ "./src/chart/line/info/ChartInfo_In.js");
/* harmony import */ var _base_info_CAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../base/info/CAxisInfoBase_In.js */ "./src/base/info/CAxisInfoBase_In.js");
/* harmony import */ var _base_info_CAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../base/info/CAxisInfoBase_Out.js */ "./src/base/info/CAxisInfoBase_Out.js");
/* harmony import */ var _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_In.js */ "./src/base/info/VAxisInfoBase_In.js");
/* harmony import */ var _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../base/info/VAxisInfoBase_Out.js */ "./src/base/info/VAxisInfoBase_Out.js");
/* harmony import */ var _parts_MarkPoint_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parts/MarkPoint.js */ "./src/chart/line/parts/MarkPoint.js");
/* harmony import */ var _painter_Painter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./painter/Painter.js */ "./src/chart/line/painter/Painter.js");
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

    _this.chartInfo_In = new _info_ChartInfo_In_js__WEBPACK_IMPORTED_MODULE_8__["default"](); //图表信息。例：图表名称

    _this.cAxisInfo_In = new _base_info_CAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_9__["default"](); //类目轴信息

    _this.vAxisInfo_In = new _base_info_VAxisInfoBase_In_js__WEBPACK_IMPORTED_MODULE_11__["default"](); //值轴信息
    ///////////////////////
    // 私有成员变量
    ///////////////////////

    _this._canvasBak = null; //不显示的Canvas，用于后台绘制

    _this._cAxisInfo_Out = new _base_info_CAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_10__["default"](); //数据结构体(存储计算结果，供内部用)

    _this._vAxisInfo_Out = new _base_info_VAxisInfoBase_Out_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
    _this._itemArray = []; //存放'标记点数据'的二维数组   

    _this._itemPool = null; //'标记点数据'对象池

    _this._chartPixelWidth; //图表有效尺寸

    _this._chartPixelHeight;
    _this._parentDivClassName = 'lineChartDiv'; //样式名

    _this._tipDivClassName = 'lineChartTipDiv';
    _this._thirdColClassName = 'thirdCol';
    _this._twEngine = new _tween_TWEngine_js__WEBPACK_IMPORTED_MODULE_21__["default"](); //缓动动画相关

    _this._tweenPositionLeft;
    _this._tweenPositionWidth;
    _this._tweenCallBackBind = _this._tweenCallBack.bind(_assertThisInitialized(_assertThisInitialized(_this))); ///////////////////////
    // 初始化
    ///////////////////////
    //设置画家

    _this._setPainter(_painter_Painter_js__WEBPACK_IMPORTED_MODULE_14__["default"]); //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换


    _this._parentDiv = document.getElementById(parentDivID);
    _this._parentDiv.className += ' ' + _this._parentDivClassName; //动态生成_canvas，并添加到DOM树。同时获取其上下文

    _this._canvas = document.createElement('canvas');
    _this._canvasBak = document.createElement('canvas');

    _this._parentDiv.appendChild(_this._canvas); //动态生成tip对象，添加到DOM树，并获取之


    _this._tipDiv = _this._createTip(_this._tipDivClassName);

    _this._parentDiv.appendChild(_this._tipDiv); //初始化对象池


    _this._itemPool = new _support_ObjectPool_js__WEBPACK_IMPORTED_MODULE_15__["default"](_parts_MarkPoint_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
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

      this._setItemPosition(); //设置标志点位置
      //设置缓动动画


      this._setTween(); //启动帧循环，在循环内部绘制图表


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
          canvasBak = this._canvasBak,
          div = this._parentDiv,
          chartInfo_In = this.chartInfo_In,
          itemArr = this._itemArray,
          i,
          len; //移除鼠标事件监听器

      this._addOrRemoveEventListener(_support_Constants_js__WEBPACK_IMPORTED_MODULE_16__["default"].REMOVE); //设置尺寸


      canvas.width = canvasBak.width = div.offsetWidth;
      canvas.height = canvasBak.height = div.offsetHeight;
      this._chartPixelWidth = canvas.width - chartInfo_In.bodyLeft - chartInfo_In.bodyRight;
      this._chartPixelHeight = canvas.height - chartInfo_In.bodyTop - chartInfo_In.bodyBottom; //设置缓动效果需要的初期数据

      this._tweenPositionLeft = chartInfo_In.bodyLeft - 2;
      this._tweenPositionWidth = this._chartPixelWidth + 4; //初始化图例数据、line对象数组

      itemArr.length = 0;
      len = chartInfo_In.series.length;

      for (i = 0; i < len; i++) {
        itemArr[i] = [];
      } //初始化Tip


      this._initTip(); //从对象池中释放曾经使用过的'标记点数据'


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
      //计算一个分类在轴上占用的长度
      this._cAxisInfo_Out.categorySize = this._chartPixelWidth / (this.cAxisInfo_In.categorys.length - 1);
    }
  }, {
    key: "_getCategoryInterval",
    value: function _getCategoryInterval() {
      var ctx = this._canvas.getContext('2d'),
          cAxisInfo_In = this.cAxisInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          categorys = cAxisInfo_In.categorys,
          w,
          i,
          len; //如果人为指定了间隔，则不需要做相关计算


      if (cAxisInfo_In.interval >= 0) {
        cAxisInfo_Out.interval = cAxisInfo_In.interval;
      } else {
        //计算标签文本尺寸，并存入数组，用于后面的标签重叠比较
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
    key: "_setItemPosition",
    value: function _setItemPosition() {
      var chartInfo_In = this.chartInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          vAxisInfo_Out = this._vAxisInfo_Out,
          itemArr = this._itemArray,
          item,
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
        item = arr[0]; //为各个项目设定大小和位置

        for (j = 0; j < len2; j++) {
          //取得项目对象
          item = arr[j];
          if (item.dirty == true) continue; //设置坐标

          item.x = chartInfo_In.bodyLeft + j * cAxisInfo_Out.categorySize;
          item.y = y - vAxisInfo_Out.unitValueSize * (item.value + item.stackValue - vAxisInfo_Out.originValue);
        }
      }
    }
  }, {
    key: "_setTween",
    value: function _setTween() {
      var twEngine = this._twEngine,
          tweenCallBackBind = this._tweenCallBackBind,
          from,
          to,
          twData,
          twAction;
      from = [1];
      to = [this._tweenPositionWidth];
      twData = twEngine.getTWData();
      twData.setData(null, from, to, tweenCallBackBind);
      twAction = twEngine.getTWAction();
      twAction.setData([twData], _tween_TWAlgorithm_js__WEBPACK_IMPORTED_MODULE_20__["default"].linear, 1000);
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


        index = Math.round((position.x - left) / categorySize); //显示tip

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
            me._paint(); //绘制图表框架（轴、标签，图例等等，不包含线）


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
      this._tweenPositionWidth = resultArray[0];
    }
  }]);

  return Chart;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./src/chart/line/css/chart.css":
/*!**************************************!*\
  !*** ./src/chart/line/css/chart.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./chart.css */ "./node_modules/css-loader/dist/cjs.js!./src/chart/line/css/chart.css");

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

/***/ "./src/chart/line/info/ChartInfo_In.js":
/*!*********************************************!*\
  !*** ./src/chart/line/info/ChartInfo_In.js ***!
  \*********************************************/
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

    _this.areaFlag = false;
    _this.smoothFlag = false;
    _this.showMarkPoint = false; ///////////////////////
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

/***/ "./src/chart/line/painter/Painter.js":
/*!*******************************************!*\
  !*** ./src/chart/line/painter/Painter.js ***!
  \*******************************************/
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
/* harmony import */ var _support_Line_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../support/Line.js */ "./src/chart/line/support/Line.js");
/* harmony import */ var _support_Bezier_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/Bezier.js */ "./src/chart/line/support/Bezier.js");



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

    this._cAxisInfo_In;
    this._cAxisInfo_Out; //数值轴输入、输出数据

    this._vAxisInfo_In;
    this._vAxisInfo_Out;
    this._itemArray; //存储散点的数组

    this._filteredItemArray = []; //存储折线点的数组

    this._tweenPositionLeft; //缓动效果相关

    this._tweenPositionWidth;
    this._line = new _support_Line_js__WEBPACK_IMPORTED_MODULE_6__["default"](); //计算直线和贝塞尔曲线点的工具类

    this._bezier = new _support_Bezier_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._points = []; //计算后的线上的各个点

    this._chartPixelWidth;
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
      this._canvasBak = chart._canvasBak;
      this._ctxBak = this._canvasBak.getContext('2d');
      this._chartInfo_In = chart.chartInfo_In;
      this._cAxisInfo_In = chart.cAxisInfo_In;
      this._cAxisInfo_Out = chart._cAxisInfo_Out;
      this._vAxisInfo_In = chart.vAxisInfo_In;
      this._vAxisInfo_Out = chart._vAxisInfo_Out;
      this._itemArray = chart._itemArray;
      this._chartPixelWidth = chart._chartPixelWidth; //缓动效果相关

      this._tweenPositionLeft = chart._tweenPositionLeft;
      this._tweenPositionWidth = chart._tweenPositionWidth;
      this._selectedIndex = this._chartInfo_In.selectedIndex; //计算值轴标签个数，供此后使用

      this._vAxisLabelCount = Math.floor((this._vAxisInfo_Out.maxScale - this._vAxisInfo_Out.minScale) / this._vAxisInfo_Out.scaleUnit) + 1;
    }
  }, {
    key: "paint",
    value: function paint() {
      var ctx = this._ctx,
          ctxBak = this._ctxBak,
          canvasWidth = this._canvas.width,
          canvasHeight = this._canvas.height,
          tweenPositionLeft = this._tweenPositionLeft,
          tweenPositionWidth = this._tweenPositionWidth,
          chartInfo_In = this._chartInfo_In;

      switch (this._chart._status) {
        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP1:
          //绘制图表并缓存Canvas绘图表面
          //清空画布
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctxBak.clearRect(0, 0, canvasWidth, canvasHeight); //在_ctx上绘制图表固定的内容

          this._paintTitle();

          this._paintLegend();

          this._paintGrid();

          this._paintAxis();

          this._paintLabel();

          this._paintAxisName(); //缓存此时的_ctx绘图表面（全尺寸）


          this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight); //将缓存的绘图表面绘制到_ctxBak上

          ctxBak.putImageData(this._canvasSurface, 0, 0); //在_ctxBak上绘制折线

          this._paintLineOrBezier(); //在_ctxBak上绘制标记点


          if (chartInfo_In.showMarkPoint == true) {
            this._paintMarkPoints();
          }

          break;

        case _support_Status_js__WEBPACK_IMPORTED_MODULE_2__["default"].STEP2:
          //绘制缓动效果
          //恢复this._ctx的绘图表面
          ctx.putImageData(this._canvasSurface, 0, 0); //从_ctxBak上取得指定区域的绘图表面

          this._canvasSurfaceBak = ctxBak.getImageData(tweenPositionLeft, 0, tweenPositionWidth, canvasHeight); //将取得的绘图表面绘制在_ctx上

          ctx.putImageData(this._canvasSurfaceBak, tweenPositionLeft, 0);
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
          vAxisLabelCount = this._vAxisLabelCount,
          categorys = cAxisInfo_In.categorys,
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
          x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * i;
          ctx.fillText(categorys[i], x1, y1);
        }
      } else {
        //转换为弧度
        angle = -angle * Math.PI / 180; //设置文本横向对齐方式

        ctx.textAlign = _support_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_ALIGN_RIGHT; //绘制文本

        y1 = canvasHeight - chartInfo_In.bodyBottom + _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].XAXIS_LABEL_OFFSET_FOR_ROTATE;

        for (i = 0; i < len; i += integer) {
          ctx.save();
          x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * i;
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
    key: "_paintLineOrBezier",
    value: function _paintLineOrBezier() {
      var chartInfo_In = this._chartInfo_In,
          filteredItemArray = this._filteredItemArray,
          chartPixelWidth = this._chartPixelWidth; //过滤数据（将过多的数据按照像素为单位进行过滤）

      this._filterItems(); //根据过滤后的数据绘制折线


      if (chartInfo_In.areaFlag == true) {
        if (chartInfo_In.smoothFlag == true && filteredItemArray[0].length < chartPixelWidth) {
          this._paintSmoothArea();
        } else {
          this._paintArea();
        }
      } else {
        if (chartInfo_In.smoothFlag == true && filteredItemArray[0].length < chartPixelWidth) {
          this._paintSmoothLine();
        } else {
          this._paintLine();
        }
      }
    }
  }, {
    key: "_paintLine",
    value: function _paintLine() {
      var ctxBak = this._ctxBak,
          filteredItemArray = this._filteredItemArray,
          line = this._line,
          colors = this._chartInfo_In.colors,
          points = this._points,
          item,
          arr,
          i,
          j,
          k,
          len1,
          len2,
          len3; //设置共同样式

      ctxBak.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_LINE_WIDTH; //循环系列

      len1 = filteredItemArray.length;

      for (i = 0; i < len1; i++) {
        //设置该系列折现颜色
        ctxBak.strokeStyle = colors[i]; //将原始折线点根据'脏数据标记'进行分组

        points = line.segment(filteredItemArray[i]); //循环该系列所有片段

        len2 = points.length;

        for (j = 0; j < len2; j++) {
          arr = points[j];
          len3 = arr.length;

          if (len3 > 1) {
            ctxBak.beginPath(); //移动到第一个点

            item = arr[0];
            ctxBak.moveTo(item.x, item.y); //连接折线

            for (k = 1; k < len3; k++) {
              item = arr[k];
              ctxBak.lineTo(item.x, item.y);
            }

            ctxBak.stroke();
          } else if (len3 == 1) {
            ctxBak.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_BAK_COLOR;
            ctxBak.beginPath();
            item = arr[0];
            ctxBak.arc(item.x, item.y, _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_RADIUS, 0, 2 * Math.PI);
            ctxBak.closePath();
            ctxBak.fill();
            ctxBak.stroke();
          }
        }
      }

      ctxBak.restore();
    }
  }, {
    key: "_paintSmoothLine",
    value: function _paintSmoothLine() {
      var ctxBak = this._ctxBak,
          filteredItemArray = this._filteredItemArray,
          bezier = this._bezier,
          colors = this._chartInfo_In.colors,
          points = this._points,
          item,
          arr,
          i,
          j,
          k,
          len1,
          len2,
          len3;
      ctxBak.save(); //设置共同样式

      ctxBak.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_LINE_WIDTH; //循环系列

      len1 = filteredItemArray.length;

      for (i = 0; i < len1; i++) {
        //设置该系列折现颜色
        ctxBak.strokeStyle = colors[i]; //将原始折线点根据'脏数据标记'进行分组

        points = bezier.segment(filteredItemArray[i]); //循环该系列所有片段

        len2 = points.length;

        for (j = 0; j < len2; j++) {
          arr = points[j];
          len3 = arr.length;

          if (len3 >= 4) {
            ctxBak.beginPath();
            ctxBak.moveTo(arr[0].x, arr[0].y);

            for (k = 1; k < len3; k += 3) {
              ctxBak.bezierCurveTo(arr[k].x, arr[k].y, arr[k + 1].x, arr[k + 1].y, arr[k + 2].x, arr[k + 2].y);
            }

            ctxBak.stroke();
          } else if (len3 == 2) {
            item = arr[0];
            ctxBak.moveTo(item.x, item.y);
            item = arr[1];
            ctxBak.lineTo(item.x, item.y);
            ctxBak.stroke();
          } else if (len3 == 1) {
            ctxBak.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_BAK_COLOR;
            ctxBak.beginPath();
            item = arr[0];
            ctxBak.arc(item.x, item.y, _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_RADIUS, 0, 2 * Math.PI);
            ctxBak.closePath();
            ctxBak.fill();
            ctxBak.stroke();
          }
        }
      }

      ctxBak.restore();
    }
  }, {
    key: "_paintArea",
    value: function _paintArea() {
      var ctxBak = this._ctxBak,
          vAxisInfo_Out = this._vAxisInfo_Out,
          filteredItemArray = this._filteredItemArray,
          line = this._line,
          colors = this._chartInfo_In.colors,
          points = this._points,
          item,
          arr,
          i,
          j,
          k,
          len1,
          len2,
          len3;
      ctxBak.save(); //设置共同样式

      ctxBak.globalAlpha = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_AREA_ALPHA; //逆序循环系列

      len1 = filteredItemArray.length;

      for (i = len1 - 1; i >= 0; i--) {
        //设置该系列折线颜色
        ctxBak.fillStyle = colors[i];
        ctxBak.strokeStyle = colors[i]; //将原始折线点根据'脏数据标记'进行分组

        points = line.segment(filteredItemArray[i]); //循环该系列所有片段

        len2 = points.length;

        for (j = 0; j < len2; j++) {
          arr = points[j];
          len3 = arr.length;

          if (len3 > 1) {
            ctxBak.beginPath(); //移动到第一个点

            item = arr[0];
            ctxBak.moveTo(item.x, item.y); //连接折线

            for (k = 1; k < len3; k++) {
              item = arr[k];
              ctxBak.lineTo(item.x, item.y);
            } //连接折线两个端点在轴上的映射点


            ctxBak.lineTo(arr[len3 - 1].x, vAxisInfo_Out.originPosition);
            ctxBak.lineTo(arr[0].x, vAxisInfo_Out.originPosition);
            ctxBak.closePath();
            ctxBak.fill();
          } else if (len3 == 1) {
            ctxBak.save();
            ctxBak.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_BAK_COLOR;
            ctxBak.beginPath();
            item = arr[0];
            ctxBak.arc(item.x, item.y, _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_RADIUS, 0, 2 * Math.PI);
            ctxBak.closePath();
            ctxBak.fill();
            ctxBak.stroke();
            ctxBak.restore();
          }
        }
      }

      ctxBak.restore();
    }
  }, {
    key: "_paintSmoothArea",
    value: function _paintSmoothArea() {
      var ctxBak = this._ctxBak,
          vAxisInfo_Out = this._vAxisInfo_Out,
          filteredItemArray = this._filteredItemArray,
          bezier = this._bezier,
          colors = this._chartInfo_In.colors,
          points = this._points,
          item,
          arr,
          i,
          j,
          k,
          len1,
          len2,
          len3;
      ctxBak.save(); //设置共同样式

      ctxBak.globalAlpha = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_AREA_ALPHA; //逆序循环系列

      len1 = filteredItemArray.length;

      for (i = len1 - 1; i >= 0; i--) {
        //设置该系列折线颜色
        ctxBak.fillStyle = colors[i];
        ctxBak.strokeStyle = colors[i]; //将原始折线点根据'脏数据标记'进行分组

        points = bezier.segment(filteredItemArray[i]); //循环该系列所有片段

        len2 = points.length;

        for (j = 0; j < len2; j++) {
          arr = points[j];
          len3 = arr.length;

          if (len3 >= 4) {
            ctxBak.beginPath(); //移动到第一个点

            ctxBak.moveTo(arr[0].x, arr[0].y); //连接曲线

            for (k = 1; k < len3; k += 3) {
              ctxBak.bezierCurveTo(arr[k].x, arr[k].y, arr[k + 1].x, arr[k + 1].y, arr[k + 2].x, arr[k + 2].y);
            } //连接曲线两个端点在轴上的映射点


            ctxBak.lineTo(arr[len3 - 1].x, vAxisInfo_Out.originPosition);
            ctxBak.lineTo(arr[0].x, vAxisInfo_Out.originPosition);
            ctxBak.closePath();
            ctxBak.fill();
          } else if (len3 == 2) {
            ctxBak.beginPath(); //连接直线的两个点

            item = arr[0];
            ctxBak.moveTo(item.x, item.y);
            item = arr[1];
            ctxBak.lineTo(item.x, item.y); //连接直线两个端点在轴上的映射点

            ctxBak.lineTo(item.x, vAxisInfo_Out.originPosition);
            item = arr[0];
            ctxBak.lineTo(item.x, vAxisInfo_Out.originPosition);
            ctxBak.closePath();
            ctxBak.fill();
          } else if (len3 == 1) {
            ctxBak.save();
            ctxBak.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_BAK_COLOR;
            ctxBak.beginPath();
            item = arr[0];
            ctxBak.arc(item.x, item.y, _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_RADIUS, 0, 2 * Math.PI);
            ctxBak.closePath();
            ctxBak.fill();
            ctxBak.stroke();
            ctxBak.restore();
          }
        }
      }

      ctxBak.restore();
    }
  }, {
    key: "_paintMarkPoints",
    value: function _paintMarkPoints() {
      var ctxBak = this._ctxBak,
          filteredItemArray = this._filteredItemArray,
          colors = this._chartInfo_In.colors,
          item,
          arr,
          i,
          j,
          len1,
          len2;
      ctxBak.save(); //设置共同样式

      ctxBak.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_WIDTH;
      ctxBak.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_BAK_COLOR; //画圆点

      len1 = filteredItemArray.length;

      for (i = 0; i < len1; i++) {
        ctxBak.strokeStyle = colors[i];
        arr = filteredItemArray[i];
        len2 = arr.length;

        for (j = 0; j < len2; j++) {
          item = arr[j];

          if (item.dirtyFlag == false) {
            ctxBak.beginPath();
            ctxBak.arc(item.x, item.y, _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_RADIUS, 0, 2 * Math.PI);
            ctxBak.closePath();
            ctxBak.fill();
            ctxBak.stroke();
          }
        }
      }

      ctxBak.restore();
    }
  }, {
    key: "_paintSelector",
    value: function _paintSelector() {
      var ctx = this._ctx,
          chartInfo_In = this._chartInfo_In,
          cAxisInfo_Out = this._cAxisInfo_Out,
          itemArray = this._itemArray,
          colors = chartInfo_In.colors,
          selectedIndex = this._selectedIndex,
          canvasHeight = this._canvas.height,
          item,
          i,
          len1,
          x1,
          y1,
          y2;

      if (selectedIndex >= 0) {
        ctx.save(); //画圆点

        ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_WIDTH;
        ctx.fillStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_BAK_COLOR;
        len1 = itemArray.length;

        for (i = 0; i < len1; i++) {
          item = itemArray[i][selectedIndex];

          if (item.dirtyFlag == false) {
            ctx.strokeStyle = colors[i];
            ctx.beginPath();
            ctx.arc(item.x, item.y, _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_MARKPOINT_RADIUS * 2, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
        } //画线


        x1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * selectedIndex);
        y1 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(chartInfo_In.bodyTop);
        y2 = _support_Utility_js__WEBPACK_IMPORTED_MODULE_5__["default"].adjustPosition(canvasHeight - chartInfo_In.bodyBottom);
        ctx.lineWidth = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_SELECTOR_LINE_WIDTH;
        ctx.strokeStyle = _support_Styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].LINE_SELECTOR_LINE_COLOR;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    }
  }, {
    key: "_filterItems",
    value: function _filterItems() {
      var filteredItemArray = this._filteredItemArray,
          itemArray = this._itemArray,
          chartPixelWidth = this._chartPixelWidth,
          onePixelPointCount,
          i,
          len; //初始化数组

      filteredItemArray.length = 0;
      len = itemArray.length;

      for (i = 0; i < len; i++) {
        filteredItemArray[i] = [];
      } //计算一个像素内要绘制几个点


      onePixelPointCount = itemArray[0].length / chartPixelWidth; //如果一个像素内需要绘制的点数多于1个，则过滤

      if (onePixelPointCount > 1) {
        for (i = 0; i < len; i++) {
          this._filter(itemArray[i], filteredItemArray[i], onePixelPointCount);
        }
      } else {
        for (i = 0; i < len; i++) {
          filteredItemArray[i] = itemArray[i];
        }
      }
    }
  }, {
    key: "_filter",
    value: function _filter(items, filteredItems, onePixelPointCount) {
      var chartPixelWidth = this._chartPixelWidth,
          index = 0,
          pixelIndex = 1,
          count = items.length,
          plusArr = [],
          minusArr = [],
          dirtyArr = [],
          indexEnd,
          item; //循环过滤数据

      while (pixelIndex < chartPixelWidth) {
        //每次循环都要初始化相关数组
        plusArr.length = 0;
        minusArr.length = 0;
        dirtyArr.length = 0; //计算循环上限值并校正

        indexEnd = Math.floor(onePixelPointCount * pixelIndex);

        if (indexEnd > count) {
          indexEnd = count;
        } //将1个像素内的点分类为正值、负值、无效值


        for (; index < indexEnd; index++) {
          item = items[index];

          if (item.dirtyFlag == true) {
            dirtyArr.push(item);
          } else if (item.value >= 0) {
            plusArr.push(item);
          } else {
            minusArr.push(item);
          }
        } //将这一像素内的最大正值点，最小负值点 或无效值点存入数组中


        this._setFilteredItemArray(plusArr, minusArr, dirtyArr, filteredItems); //像素点索引加一，进行下次循环


        pixelIndex++;
      }
    }
  }, {
    key: "_setFilteredItemArray",
    value: function _setFilteredItemArray(plusArr, minusArr, dirtyArr, filteredItems) {
      var plusMax = 0,
          minusMin = 0,
          plusIndex = -1,
          minusIndex = -1,
          i,
          len,
          num; //计算正值的最大值

      len = plusArr.length;

      for (i = 0; i < len; i++) {
        num = plusArr[i].value;

        if (num >= plusMax) {
          plusIndex = i;
        }
      } //计算负值的最小值


      len = minusArr.length;

      for (i = 0; i < len; i++) {
        num = minusArr[i].value;

        if (num <= minusMin) {
          minusIndex = i;
        }
      } //将整数最大值和负数最小值存入数组


      if (plusIndex != -1 && minusIndex != -1) {
        //比较最大正值和最小负值对应的X坐标
        if (plusArr[plusIndex].x <= minusArr[minusIndex].x) {
          filteredItems.push(plusArr[plusIndex]);
          filteredItems.push(minusArr[minusIndex]);
        } else {
          filteredItems.push(minusArr[minusIndex]);
          filteredItems.push(plusArr[plusIndex]);
        }
      } else if (plusIndex != -1) {
        filteredItems.push(plusArr[plusIndex]);
      } else if (minusIndex != -1) {
        filteredItems.push(minusArr[minusIndex]);
      } else {
        if (dirtyArr.length > 0) {
          filteredItems.push(dirtyArr[0]);
        }
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

/***/ "./src/chart/line/parts/MarkPoint.js":
/*!*******************************************!*\
  !*** ./src/chart/line/parts/MarkPoint.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarkPoint; });
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



var MarkPoint =
/*#__PURE__*/
function (_PartBase) {
  _inherits(MarkPoint, _PartBase);

  function MarkPoint() {
    var _this;

    _classCallCheck(this, MarkPoint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkPoint).call(this)); ///////////////////////
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

  return MarkPoint;
}(_base_chart_ChartBase_js__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/chart/line/series/Series.js":
/*!*****************************************!*\
  !*** ./src/chart/line/series/Series.js ***!
  \*****************************************/
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

/***/ "./src/chart/line/support/Bezier.js":
/*!******************************************!*\
  !*** ./src/chart/line/support/Bezier.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bezier; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bezier =
/*#__PURE__*/
function () {
  function Bezier() {
    _classCallCheck(this, Bezier);

    ///////////////////////
    // 公有成员变量
    ///////////////////////
    ///////////////////////
    // 私有成员变量
    ///////////////////////
    this._coefficient = 0.5; //系数    
    ///////////////////////
    // 初始化
    ///////////////////////
  }
  /***************************************************************
   * 公有成员函数
   ***************************************************************/


  _createClass(Bezier, [{
    key: "segment",
    value: function segment(originalPoints) {
      var i,
          len,
          point,
          arr = [],
          points = [],
          segmentArr = []; //循环设置各个点坐标

      len = originalPoints.length;

      for (i = 0; i < len; i++) {
        point = originalPoints[i];

        if (point.dirtyFlag == true) {
          if (arr.length > 0) {
            segmentArr.push(arr);
            arr = [];
          }
        } else {
          arr.push({
            x: point.x,
            y: point.y
          });
        }
      } //最后一次


      if (arr.length > 0) {
        segmentArr.push(arr);
      } //转换为Bezier点


      points = this._segmentToBezier(segmentArr); //返回

      return points;
    }
    /***************************************************************
     * 私有成员函数
     ***************************************************************/

  }, {
    key: "_segmentToBezier",
    value: function _segmentToBezier(segmentArray) {
      var i,
          j,
          len1,
          len2,
          arr = [],
          points = [],
          segment,
          controlPoints; //循环设置各个点坐标

      len1 = segmentArray.length;

      for (i = 0; i < len1; i++) {
        arr = [];
        segment = segmentArray[i];
        len2 = segment.length;

        if (len2 < 3) {
          points.push(segment);
        } else if (len2 >= 3) {
          arr[0] = segment[0]; //A点

          arr[1] = segment[0]; //AB的第一个控制点

          for (j = 0; j < len2 - 2; j++) {
            controlPoints = this._computeContrlPoints(segment[j], segment[j + 1], segment[j + 2]);
            arr.push(controlPoints[0]); //AB的第二个控制点

            arr.push(segment[j + 1]); //B点

            arr.push(controlPoints[1]); //BC的第一个控制点
          } //最后的控制点与最后点重合


          arr.push(segment[len2 - 1]);
          arr.push(segment[len2 - 1]);
          points.push(arr);
        }
      }

      return points;
    }
    /**
     * pointA.x ： A点的x坐标
     * pointA.y ： A点的y坐标
     * pointB.x ： B点的x坐标
     * pointB.y ： B点的y坐标
     * pointC.x ： C点的x坐标
     * pointC.y ： C点的y坐标
     * 
     * 【功能】
     *  根据A,B,C三点坐标计算位于B点两侧的两个控制点的坐标。这两个点的连线穿过B点。
     * B点左侧的点是以AB为端点的贝塞尔曲线的一个控制点，
     * B点右侧的点是以BC为端点的塞尔曲线的一个控制点，
     *
     * 该函数被循环调用，如果在内部定义变量，则反复调用的结果会产生大量的需要被回收的垃圾（被释放的变量资源），
     * 因此变量定义都在函数外部定义（那些名如【tXX】的变量）
     */

  }, {
    key: "_computeContrlPoints",
    value: function _computeContrlPoints(pointA, pointB, pointC) {
      var controlPoints = [],
          num1,
          num2,
          AB,
          BC,
          rate1,
          rate2,
          x1,
          y1,
          x2,
          y2; //【1】初始化数组变量

      controlPoints.length = 0; //【2】计算ABC三点构成的三角形的边长

      num1 = pointB.x - pointA.x;
      num2 = pointB.y - pointA.y;
      AB = Math.sqrt(num1 * num1 + num2 * num2);
      num1 = pointC.x - pointB.x;
      num2 = pointC.y - pointB.y;
      BC = Math.sqrt(num1 * num1 + num2 * num2); //【3】计算AB和BC边长的比率

      rate1 = AB / (AB + BC);
      rate2 = 1 - rate1; //【4】计算AB和BC中点连成的线段沿着B角分线平移至B点后，线段两端的坐标

      num1 = (pointC.x - pointA.x) * this._coefficient;
      num2 = (pointC.y - pointA.y) * this._coefficient;
      x1 = pointB.x - rate1 * num1;
      y1 = pointB.y - rate1 * num2;
      x2 = pointB.x + rate2 * num1;
      y2 = pointB.y + rate2 * num2;
      controlPoints[0] = {
        x: x1,
        y: y1
      };
      controlPoints[1] = {
        x: x2,
        y: y2
      };
      return controlPoints;
    }
  }]);

  return Bezier;
}();



/***/ }),

/***/ "./src/chart/line/support/Line.js":
/*!****************************************!*\
  !*** ./src/chart/line/support/Line.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Line =
/*#__PURE__*/
function () {
  function Line() {
    _classCallCheck(this, Line);
  }

  _createClass(Line, [{
    key: "segment",

    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    value: function segment(originalPoints) {
      var i,
          len,
          point,
          arr = [],
          points = []; //循环设置各个点坐标

      len = originalPoints.length;

      for (i = 0; i < len; i++) {
        point = originalPoints[i];

        if (point.dirtyFlag == true) {
          if (arr.length > 0) {
            points.push(arr);
            arr = [];
          }
        } else {
          arr.push({
            x: point.x,
            y: point.y
          });
        }
      } //最后一次


      points.push(arr); //返回

      return points;
    }
  }]);

  return Line;
}();



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

/***/ "./webpackEntry/lineEntry.js":
/*!***********************************!*\
  !*** ./webpackEntry/lineEntry.js ***!
  \***********************************/
/*! exports provided: Chart, Series */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chart_line_css_chart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chart/line/css/chart.css */ "./src/chart/line/css/chart.css");
/* harmony import */ var _src_chart_line_css_chart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_chart_line_css_chart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/requestNextAnimationFrame.js */ "./src/requestNextAnimationFrame.js");
/* harmony import */ var _src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_requestNextAnimationFrame_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_chart_line_Chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chart/line/Chart.js */ "./src/chart/line/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _src_chart_line_Chart_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_chart_line_series_Series_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/chart/line/series/Series.js */ "./src/chart/line/series/Series.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return _src_chart_line_series_Series_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ULltuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2xpbmUvY3NzL2NoYXJ0LmNzcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvY2hhcnQvQ2hhcnRCYXNlLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2UvaW5mby9BeGlzQ2hhcnRJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vQ0F4aXNJbmZvQmFzZV9Jbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9iYXNlL2luZm8vQ0F4aXNJbmZvQmFzZV9PdXQuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9pbmZvL0NoYXJ0SW5mb0Jhc2VfSW4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9pbmZvL1ZBeGlzSW5mb0Jhc2VfSW4uanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvYmFzZS9pbmZvL1ZBeGlzSW5mb0Jhc2VfT3V0LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2Jhc2Uvc2VyaWVzL1Nlcmllc0Jhc2UuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvY2hhcnQvbGluZS9DaGFydC5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9saW5lL2Nzcy9jaGFydC5jc3M/NzI4NyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9saW5lL2luZm8vQ2hhcnRJbmZvX0luLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2xpbmUvcGFpbnRlci9QYWludGVyLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2xpbmUvcGFydHMvTWFya1BvaW50LmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2xpbmUvc2VyaWVzL1Nlcmllcy5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy9jaGFydC9saW5lL3N1cHBvcnQvQmV6aWVyLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL2NoYXJ0L2xpbmUvc3VwcG9ydC9MaW5lLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvc3VwcG9ydC9PYmplY3RQb29sLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvU3RhdHVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvU3R5bGVzLmpzIiwid2VicGFjazovL1QuW25hbWVdLy4vc3JjL3N1cHBvcnQvVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly9ULltuYW1lXS8uL3NyYy90d2Vlbi9UV0RhdGEuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi9zcmMvdHdlZW4vVFdFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vVC5bbmFtZV0vLi93ZWJwYWNrRW50cnkvbGluZUVudHJ5LmpzIl0sIm5hbWVzIjpbIkNoYXJ0QmFzZSIsIl9wYXJlbnREaXYiLCJfY2FudmFzIiwiX3RpcERpdiIsIl9wYWludGVyIiwiX3N0YXR1cyIsIl9ldmVudExpc3RlbmVyc0FkZGVkRmxhZyIsIl9zdXJmYWNlSW1hZ2VEYXRhIiwiX2FuaW1hdGlvbkZyYW1lSUQiLCJTdGF0dXMiLCJTVE9QIiwicGFpbnRlciIsImdldEluc3RhbmNlIiwic2V0Q2hhcnQiLCJwYWludCIsImNsYXNzTmFtZSIsInRpcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiQXhpc0NoYXJ0SW5mb0Jhc2VfSW4iLCJ4QXhpc05hbWUiLCJ5QXhpc05hbWUiLCJ4QXhpc05hbWVCb3R0b20iLCJ5QXhpc05hbWVUb3AiLCJDaGFydEluZm9CYXNlX0luIiwiQ0F4aXNJbmZvQmFzZV9JbiIsImNhdGVnb3J5cyIsImludGVydmFsIiwibGFiZWxSb3RhdGUiLCJsYWJlbEdhcCIsIkNBeGlzSW5mb0Jhc2VfT3V0IiwibGFiZWxzIiwibGFiZWxTaXplcyIsImludGVydmFsU2l6ZSIsImNhdGVnb3J5U2l6ZSIsInRpdGxlIiwidGl0bGVUb3AiLCJ0aXRsZUxlZnQiLCJsZWdlbmRUb3AiLCJsZWdlbmRMZWZ0IiwibGVnZW5kUmlnaHQiLCJib2R5VG9wIiwiYm9keUJvdHRvbSIsImJvZHlMZWZ0IiwiYm9keVJpZ2h0IiwiY29sb3JzIiwic2VyaWVzIiwic2VsZWN0ZWRJbmRleCIsIlZBeGlzSW5mb0Jhc2VfSW4iLCJtaW4iLCJOdW1iZXIiLCJNSU5fVkFMVUUiLCJtYXgiLCJNQVhfVkFMVUUiLCJsYWJlbE1heENvdW50IiwiemVyb0V4dGVuZCIsIlZBeGlzSW5mb0Jhc2VfT3V0IiwibWluU2NhbGUiLCJtYXhTY2FsZSIsIm9yaWdpbkluZGV4Iiwib3JpZ2luVmFsdWUiLCJvcmlnaW5Qb3NpdGlvbiIsInVuaXRWYWx1ZVNpemUiLCJzY2FsZVVuaXQiLCJzY2FsZVVuaXRTaXplIiwiZGVjaW1hbERpZ2l0IiwiU2VyaWVzQmFzZSIsIm5hbWUiLCJkYXRhIiwic2VsZWN0ZWQiLCJDaGFydCIsInBhcmVudERpdklEIiwiY2hhcnRJbmZvX0luIiwiQ2hhcnRJbmZvX0luIiwiY0F4aXNJbmZvX0luIiwidkF4aXNJbmZvX0luIiwiX2NhbnZhc0JhayIsIl9jQXhpc0luZm9fT3V0IiwiX3ZBeGlzSW5mb19PdXQiLCJfaXRlbUFycmF5IiwiX2l0ZW1Qb29sIiwiX2NoYXJ0UGl4ZWxXaWR0aCIsIl9jaGFydFBpeGVsSGVpZ2h0IiwiX3BhcmVudERpdkNsYXNzTmFtZSIsIl90aXBEaXZDbGFzc05hbWUiLCJfdGhpcmRDb2xDbGFzc05hbWUiLCJfdHdFbmdpbmUiLCJUV0VuZ2luZSIsIl90d2VlblBvc2l0aW9uTGVmdCIsIl90d2VlblBvc2l0aW9uV2lkdGgiLCJfdHdlZW5DYWxsQmFja0JpbmQiLCJfdHdlZW5DYWxsQmFjayIsImJpbmQiLCJfc2V0UGFpbnRlciIsIlBhaW50ZXIiLCJnZXRFbGVtZW50QnlJZCIsIl9jcmVhdGVUaXAiLCJPYmplY3RQb29sIiwiTWFya1BvaW50IiwiX2NoZWNrIiwiY29uc29sZSIsImxvZyIsIl9yZXNldCIsIl9jb21wdXRlQ2F0ZWdvcnlJbmZvIiwiX2dldENhdGVnb3J5SW50ZXJ2YWwiLCJfZ2V0SXRlbUFuZENvbXB1dGVNaW5NYXgiLCJfY29tcHV0ZVZhbHVlQXhpc090aGVySW5mbyIsIkNvbnN0YW50cyIsIllfQVhJUyIsIl9zZXRJdGVtUG9zaXRpb24iLCJfc2V0VHdlZW4iLCJfc3RhcnRQYWludCIsInNlciIsImkiLCJsZW4xIiwibGVuMiIsInJ0biIsImxlbmd0aCIsImNhbnZhcyIsImNhbnZhc0JhayIsImRpdiIsIml0ZW1BcnIiLCJsZW4iLCJfYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyIiwiUkVNT1ZFIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIl9pbml0VGlwIiwicmVsZWFzZUFsbCIsInJlbGVhc2VBbGxUV0RhdGEiLCJyZWxlYXNlQWxsVFdBY3Rpb24iLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInRpcERpdiIsInRhYmxlIiwicm93IiwidGQiLCJzcGFuIiwic3R5bGUiLCJkaXNwbGF5IiwiY2hpbGROb2RlcyIsImlubmVySFRNTCIsImluc2VydFJvdyIsImluc2VydENlbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiY0F4aXNJbmZvX091dCIsInciLCJmb250IiwiU3R5bGVzIiwiTEFCRUxfRk9OVCIsIm1lYXN1cmVUZXh0Iiwic2l6ZSIsIndpdGhHYXBTaXplIiwiX2NvbXB1dGVDYXRlZ29yeUludGVydmFsIiwiZGlzdGFuY2UiLCJqIiwiY29tcHV0ZSIsInZBeGlzSW5mb19PdXQiLCJpdGVtUG9vbCIsIml0ZW1BcnJheSIsIml0ZW0iLCJwbHVzQXJyIiwibWludXNBcnIiLCJzdGFja05hbWUiLCJESVJUWSIsIl9jb21wYXJlIiwiZ2V0T2JqIiwiZGlydHlGbGFnIiwidmFsdWUiLCJOYU4iLCJzdGFja1ZhbHVlIiwicHVzaCIsIm51bSIsIl9zZXRNaW5NYXgiLCJheGlzVHlwZSIsImFyciIsIlV0aWxpdHkiLCJnZXRTY2FsZVVuaXQiLCJ0b1N0cmluZyIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwiWF9BWElTIiwieSIsImRpcnR5IiwieCIsInR3RW5naW5lIiwidHdlZW5DYWxsQmFja0JpbmQiLCJmcm9tIiwidG8iLCJ0d0RhdGEiLCJ0d0FjdGlvbiIsImdldFRXRGF0YSIsInNldERhdGEiLCJnZXRUV0FjdGlvbiIsIlRXQWxnb3JpdGhtIiwibGluZWFyIiwic2V0Rmlyc3RUV0FjdGlvbiIsImNvbW1hbmQiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJwIiwicmVjdCIsImluZGV4IiwicG9zaXRpb24iLCJtZSIsImRvTW91c2VNb3ZlIiwiZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1RvQ2FudmFzIiwiY2xpZW50WCIsImNsaWVudFkiLCJyb3VuZCIsImlubmVyVGV4dCIsInJvd3MiLCJjZWxscyIsIlRJUF9MT0NBVElPTl9PRkZTRVQiLCJTVEVQNCIsImRvTW91c2VPdXQiLCJBREQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU1RFUDEiLCJfcGFpbnQiLCJzdGFydCIsIlNURVAyIiwibmV4dEZyYW1lIiwic3RvcCIsIlNURVAzIiwiV0FJVElORyIsInJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJyZXN1bHRBcnJheSIsImFyZWFGbGFnIiwic21vb3RoRmxhZyIsInNob3dNYXJrUG9pbnQiLCJfY2hhcnQiLCJfY3R4IiwiX2NhbnZhc1N1cmZhY2UiLCJfY3R4QmFrIiwiX2NhbnZhc1N1cmZhY2VCYWsiLCJfY2hhcnRJbmZvX0luIiwiX2NBeGlzSW5mb19JbiIsIl92QXhpc0luZm9fSW4iLCJfZmlsdGVyZWRJdGVtQXJyYXkiLCJfbGluZSIsIkxpbmUiLCJfYmV6aWVyIiwiQmV6aWVyIiwiX3BvaW50cyIsIl92QXhpc0xhYmVsQ291bnQiLCJfc2VsZWN0ZWRJbmRleCIsImNoYXJ0IiwiY3R4QmFrIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJ0d2VlblBvc2l0aW9uTGVmdCIsInR3ZWVuUG9zaXRpb25XaWR0aCIsImNsZWFyUmVjdCIsIl9wYWludFRpdGxlIiwiX3BhaW50TGVnZW5kIiwiX3BhaW50R3JpZCIsIl9wYWludEF4aXMiLCJfcGFpbnRMYWJlbCIsIl9wYWludEF4aXNOYW1lIiwiZ2V0SW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwiX3BhaW50TGluZU9yQmV6aWVyIiwiX3BhaW50TWFya1BvaW50cyIsIl9wYWludFNlbGVjdG9yIiwic2F2ZSIsIlRJVExFX0ZPTlQiLCJ0ZXh0QWxpZ24iLCJURVhUX0FMSUdOX0xFRlQiLCJ0ZXh0QmFzZWxpbmUiLCJURVhUX0JBU0VfTElORV9UT1AiLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJoIiwic3RyIiwiTEVHRU5EX0ZPTlQiLCJnZXRUZXh0SGVpZ2h0IiwiZmlsbFN0eWxlIiwiRk9OVF9GSUxMX0NPTE9SIiwiTEVHRU5EX1NIQVBFX1RFWFRfR0FQIiwiZmlsbFJlY3QiLCJMRUdFTkRfR0FQIiwidkF4aXNMYWJlbENvdW50IiwieDEiLCJ4MiIsInkxIiwibGluZVdpZHRoIiwiR1JJRF9MSU5FX1dJRFRIIiwic3Ryb2tlU3R5bGUiLCJHUklEX0xJTkVfQ09MT1IiLCJzZXRMaW5lRGFzaCIsIkdSSURfTElORV9EQVNIIiwiYWRqdXN0UG9zaXRpb24iLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJpbnRlZ2VyIiwieTIiLCJBWElTX0xJTkVfV0lEVEgiLCJBWElTX0xJTkVfQ09MT1IiLCJBWElTX1NDQUxFX1VOSVRfTElORV9TSVpFIiwiYW5nbGUiLCJURVhUX0JBU0VfTElORV9NSURETEUiLCJURVhUX0FMSUdOX0NFTlRFUiIsIlhBWElTX0xBQkVMX09GRlNFVCIsIlBJIiwiVEVYVF9BTElHTl9SSUdIVCIsIlhBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFIiwidHJhbnNsYXRlIiwicm90YXRlIiwiWUFYSVNfTEFCRUxfT0ZGU0VUIiwidG9GaXhlZCIsIkFYSVNfTkFNRV9GT05UIiwiZmlsdGVyZWRJdGVtQXJyYXkiLCJjaGFydFBpeGVsV2lkdGgiLCJfZmlsdGVySXRlbXMiLCJfcGFpbnRTbW9vdGhBcmVhIiwiX3BhaW50QXJlYSIsIl9wYWludFNtb290aExpbmUiLCJfcGFpbnRMaW5lIiwibGluZSIsInBvaW50cyIsImsiLCJsZW4zIiwiTElORV9MSU5FX1dJRFRIIiwic2VnbWVudCIsIkxJTkVfTUFSS1BPSU5UX0JBS19DT0xPUiIsImFyYyIsIkxJTkVfTUFSS1BPSU5UX1JBRElVUyIsImNsb3NlUGF0aCIsImZpbGwiLCJiZXppZXIiLCJiZXppZXJDdXJ2ZVRvIiwiZ2xvYmFsQWxwaGEiLCJMSU5FX0FSRUFfQUxQSEEiLCJMSU5FX01BUktQT0lOVF9XSURUSCIsIkxJTkVfU0VMRUNUT1JfTElORV9XSURUSCIsIkxJTkVfU0VMRUNUT1JfTElORV9DT0xPUiIsIm9uZVBpeGVsUG9pbnRDb3VudCIsIl9maWx0ZXIiLCJpdGVtcyIsImZpbHRlcmVkSXRlbXMiLCJwaXhlbEluZGV4IiwiY291bnQiLCJkaXJ0eUFyciIsImluZGV4RW5kIiwiX3NldEZpbHRlcmVkSXRlbUFycmF5IiwicGx1c01heCIsIm1pbnVzTWluIiwicGx1c0luZGV4IiwibWludXNJbmRleCIsImluc3RhbmNlIiwiUGFydEJhc2UiLCJTZXJpZXMiLCJfY29lZmZpY2llbnQiLCJvcmlnaW5hbFBvaW50cyIsInBvaW50Iiwic2VnbWVudEFyciIsIl9zZWdtZW50VG9CZXppZXIiLCJzZWdtZW50QXJyYXkiLCJjb250cm9sUG9pbnRzIiwiX2NvbXB1dGVDb250cmxQb2ludHMiLCJwb2ludEEiLCJwb2ludEIiLCJwb2ludEMiLCJudW0xIiwibnVtMiIsIkFCIiwiQkMiLCJyYXRlMSIsInJhdGUyIiwic3FydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnVuYyIsInNldFRpbWVvdXQiLCJIQUxGX1BJWEVMIiwiQ0xPU0VfVE9fWkVSTyIsIlRFWFRfQkFTRV9MSU5FX0JPVFRPTSIsIlRFWFRfQkFTRV9MSU5FX0lERU9HUkFQSElDIiwiUkFESUFOX1VOSVQiLCJjbGF6eiIsInBhcmEiLCJfY2xhc3MiLCJfcGFyYSIsIl9jb3VudCIsIl9wb29sIiwicG9vbCIsIm9iaiIsIlNURVA1IiwiWUFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEUiLCJCVUJCTEVfQUxQSEEiLCJDT0xVTU5fU0VMRUNUT1JfTElORV9XSURUSCIsIkNPTFVNTl9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiUElFX0xBQkVMX0lOTkVSX0ZPTlRfQ09MT1IiLCJQSUVfTEFCRUxfR1VJREVfTElORTFfU0laRSIsIlBJRV9MQUJFTF9HVUlERV9MSU5FMl9TSVpFIiwiUElFX0xBQkVMX09GRlNFVCIsIlBJRV9TRUxFQ1RPUl9UUkFOU0xBVEUiLCJQSUVfU0VMRUNUT1JfTElORV9XSURUSCIsIlBJRV9TRUxFQ1RPUl9MSU5FX0NPTE9SIiwiUkFEQVJfTEFCRUxfRk9OVCIsIlJBREFSX0xBQkVMX0NPTE9SIiwiUkFEQVJfTEFCRUxfUE9TSVRJT05fT0ZGU0VUIiwiUkFEQVJfTElORV9XSURUSCIsIlJBREFSX0JBS19MSU5FX1dJRFRIIiwiUkFEQVJfQkFLX0xJTkVfQ09MT1IiLCJSQURBUl9CQUtfRklMTF9DT0xPUiIsIlNDQVRURVJfUE9JTlRfQUxQSEEiLCJTQ0FUVEVSX0NST1NTX0xJTkVfV0lEVEgiLCJTQ0FUVEVSX0NST1NTX0NPTE9SIiwiU1VOQlVSU19MQUJFTF9DT0xPUiIsIlNVTkJVUlNfQk9SREVSX0NPTE9SIiwic2NhbGVNYXhDb3VudCIsImF2ZyIsImdhcHMiLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJwb3ciLCJ4T1J5IiwiYm91bmRpbmdDbGllbnRSZWN0TGVmdCIsImJvdW5kaW5nQ2xpZW50UmVjdFRvcCIsImJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoIiwiYm91bmRpbmdDbGllbnRSZWN0SGVpZ2h0IiwiZ2xvYmxlWCIsImdsb2JsZVkiLCJjYW52YXNDb250ZXh0IiwidGV4dCIsIlRXQWN0aW9uIiwidG90bGVUaW1lcyIsImRhdGFBcnJheSIsImFsZ29yaXRobSIsIm5leHRBY3Rpb24iLCJkdXJhdGlvbiIsImNlaWwiLCJGUkFNRV9EVVJBVElPTiIsImFjdGlvbiIsImNhbGxCYWNrIiwidCIsImIiLCJjIiwiZCIsIlF1YWQiLCJlYXNlSW4iLCJlYXNlT3V0IiwiZWFzZUluT3V0IiwiQ3ViaWMiLCJRdWFydCIsIlF1aW50IiwiU2luZSIsImNvcyIsInNpbiIsIkV4cG8iLCJDaXJjIiwiRWxhc3RpYyIsImEiLCJzIiwiYWJzIiwiYXNpbiIsIkJhY2siLCJCb3VuY2UiLCJUIiwidHdlZW4iLCJUV0RhdGEiLCJmcm9tQXJyYXkiLCJ0b0FycmF5IiwiX2FjdGlvbnMiLCJfZmlyc3RBY3Rpb24iLCJfY3VycmVudEFjdGlvbiIsIl9hY3Rpb25Qb29sIiwiX2RhdGFQb29sIiwiX2lzUGxheWluZyIsImluaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FD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L0IsTUFBcEI7QUFDQSxXQUFLZ0MsY0FBTCxHQUFzQixLQUFLRCxZQUEzQjtBQUNIOzs7Z0NBR1k7QUFDVCxVQUFJOVcsR0FBRyxHQUFHLElBQVY7O0FBRUEsVUFBSSxLQUFLa1gsVUFBTCxJQUFtQixJQUF2QixFQUE2QjtBQUN6QixZQUFJLEtBQUtILGNBQUwsQ0FBb0IxUCxTQUFwQixNQUFtQyxLQUF2QyxFQUFnRDtBQUNoRDtBQUNJLGdCQUFJLEtBQUswUCxjQUFMLENBQW9CcEMsVUFBcEIsSUFBa0MsSUFBdEMsRUFBNEM7QUFDeEMsbUJBQUtvQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JwQyxVQUExQztBQUNILGFBRkQsTUFFTztBQUNIM1UsaUJBQUcsR0FBRyxLQUFOO0FBQ0g7QUFDSjtBQUNKLE9BVEQsTUFTTztBQUNIQSxXQUFHLEdBQUcsS0FBTjtBQUNIOztBQUVELGFBQU9BLEdBQVA7QUFDSDs7OzRCQUVRO0FBQ0wsV0FBS2tYLFVBQUwsR0FBa0IsSUFBbEI7QUFDSDs7OzJCQUVPO0FBQ0osVUFBSXJYLENBQUosRUFBT1MsR0FBUDtBQUVBLFdBQUs0VyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsV0FBS0gsY0FBTCxHQUFzQixLQUFLRCxZQUEzQjtBQUVBeFcsU0FBRyxHQUFHLEtBQUt1VyxRQUFMLENBQWM1VyxNQUFwQjs7QUFDQSxXQUFLSixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdTLEdBQWhCLEVBQXFCVCxDQUFDLEVBQXRCLEVBQTBCO0FBQ3RCLGFBQUtnWCxRQUFMLENBQWNoWCxDQUFkLEVBQWlCc1gsSUFBakI7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGluZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUXCJdID0gcm9vdFtcIlRcIl0gfHwge30sIHJvb3RbXCJUXCJdW1wibGluZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2VicGFja0VudHJ5L2xpbmVFbnRyeS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNwYWNlcyA9IHJlcXVpcmUoJy4vX3N0cmluZy13cycpO1xudmFyIHNwYWNlID0gJ1snICsgc3BhY2VzICsgJ10nO1xudmFyIG5vbiA9ICdcXHUyMDBiXFx1MDA4NSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBBTElBUykge1xuICB2YXIgZXhwID0ge307XG4gIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KTtcbiAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcbiAgaWYgKEFMSUFTKSBleHBbQUxJQVNdID0gZm47XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24gKHN0cmluZywgVFlQRSkge1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgJE51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIEJhc2UgPSAkTnVtYmVyO1xudmFyIHByb3RvID0gJE51bWJlci5wcm90b3R5cGU7XG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ09GID0gY29mKHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKShwcm90bykpID09IE5VTUJFUjtcbnZhciBUUklNID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcbiAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYgKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSkge1xuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QTihCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSkge1xuICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfVxuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciAkbWluID0gTWF0aC5taW47XG52YXIgJHB1c2ggPSBbXS5wdXNoO1xudmFyICRTUExJVCA9ICdzcGxpdCc7XG52YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbnZhciBTVVBQT1JUU19ZID0gISEoZnVuY3Rpb24gKCkgeyB0cnkgeyByZXR1cm4gbmV3IFJlZ0V4cCgneCcsICd5Jyk7IH0gY2F0Y2ggKGUpIHt9IH0pKCk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyAweGZmZmZmZmZmIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSAkbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcclxcbiAqIOWbvuihqOWGheWFqOWxgOiuvuWumu+8iOW/hemhu+mhueebru+8iVxcclxcbiAqIOeUqOS6jua4hemZpO+8iOWIneWni+WMlu+8ieaJgOaciem7mOiupOWGheWklui+uei3nSBcXHJcXG4gKi9cXHJcXG4ubGluZUNoYXJ0RGl2ICp7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA7ICAgICAgICAgICAgLyog5riF6Zmk77yI5Yid5aeL5YyW77yJ5Zu+6KGo5YaF5omA5pyJ5YWD57Sg55qE6buY6K6k5YaF6L656LedICovXFxyXFxuICAgIG1hcmdpbjogMHB4IDsgICAgICAgICAgICAgIC8qIOa4hemZpO+8iOWIneWni+WMlu+8ieWbvuihqOWGheaJgOacieWFg+e0oOeahOm7mOiupOWklui+uei3nSAqL1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41IDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuICog57uY5Yi25Li75L2T55qEQ2FudmFzXFxyXFxuICovXFxyXFxuLmxpbmVDaGFydERpdiBjYW52YXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgLyog57ud5a+55a6a5L2N77yM6L+Z5qC3MuS4quWdl+WFg+e0oO+8iENhbnZhc++8ieaJjeS8mumHjeWPoOWcqOS4gOi1tyAqL1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgXFxyXFxuLyogXFxyXFxuICogVGlwXFxyXFxuICovXFxyXFxuLmxpbmVDaGFydFRpcERpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAvKiDnu53lr7nlrprkvY3vvIzov5nmoLfmiY3kvJrot5/pmo/pvKDmoIfkvY3nva4gKi9cXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIFxcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSA1cHggNXB4IDIwcHg7ICAgICAvKiDpmLTlvbEgKi9cXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgNXB4IDVweCAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgNXB4IDVweCAyMHB4O1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdCBZYUhlaTsgICAgICAvKiBUaXDlrZfkvZMgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMnB4OyAgICAgICAgICAgICAgLyogVGlw5a2X5L2T5bC65a+4ICovXFxyXFxuICAgIGNvbG9yOiAjZWVlZWVlOyAgICAgICAgICAgICAgIC8qIFRpcOaWh+Wtl+minOiJsiAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubGluZUNoYXJ0VGlwRGl2IHAge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7ICBcXHJcXG4gICAgbWFyZ2luOiAwcHggOyAgICAgICBcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuICogVGlwIC0tIHRhYmxlXFxyXFxuICovXFxyXFxuLmxpbmVDaGFydFRpcERpdiB0YWJsZXtcXHJcXG4gICAgcGFkZGluZzogMHB4OyAgXFxyXFxuICAgIG1hcmdpbjogMHB4IDsgICAgICAgXFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgICAgLyog5ZCI5bm26L655qGGICovXFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwOyAgICAgICAgICAgIC8qIOiuvue9ruebuOmCu+WNleWFg+agvOeahOi+ueahhumXtOeahOi3neemuyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBUaXAgLS0gdGFibGUgLS0gdGRcXHJcXG4gKi9cXHJcXG4ubGluZUNoYXJ0VGlwRGl2IHRhYmxlIHRkIHtcXHJcXG4gICAgcGFkZGluZzogMHB4OyAgICAgICAgIFxcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyAgICAgICAgICAvKiDlnKjliJfmlbDmja7kuYvpl7TnlZnkvZnnmb0gKi9cXHJcXG4gICAgbWFyZ2luOiAwcHggO1xcclxcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7ICAgICAgICAgICAvKiDnpoHmraLmjaLooYwgKi9cXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBUaXAgLS0gdGFibGUgLS0gdGQgLS0gc3BhblxcclxcbiAqL1xcclxcbi5saW5lQ2hhcnRUaXBEaXYgdGFibGUgdGQgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOyAgICAgICAgICAgLyog6L2s5oiQ6KGM5YaF5Z2X77yM5ZCm5YiZ5LiN6IO95pi+56S65Ye65p2lICovXFxyXFxuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsgICAgICAgICAgICAvKiDlnIblvaIgKi9cXHJcXG4gICAgd2lkdGg6IDlweDtcXHJcXG4gICAgaGVpZ2h0OiA5cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFxcclxcbiAqIFRpcCAtLSB0YWJsZSAtLSDnrKzkuInliJdcXHJcXG4gKi9cXHJcXG4ubGluZUNoYXJ0VGlwRGl2IC50aGlyZENvbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyAgICAgICAgICAgLyog6Z2g5Y+z5a+56b2QICovXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uL3N1cHBvcnQvU3RhdHVzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gbnVsbDsgICAgICAgICAgICAgICAgIC8v5a2Q57uE5Lu2OiDlm77ooajlkITkuKrlrZDnu4Tku7bnmoTniLblrrnlmahcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3RpcERpdiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIgPSBudWxsOyAgICAgICAgICAgICAgICAgICAvL+eUu+WutuW8leeUqFxyXG5cclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnJzsgICAgICAgICAgICAgICAgICAgICAgLy/nirbmgIFcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSBmYWxzZTsgIC8v55Sx5LqOanPml6Dms5XliKTmlq3kuovku7bnm5HlkKzlh73mlbDmmK/lkKblt7Lnu4/lrZjlnKjvvIzlm6DmraToh6rlrprkuYnmoIflv5fkvY3mnaXliKTmlq1cclxuICAgICAgICB0aGlzLl9zdXJmYWNlSW1hZ2VEYXRhID0gbnVsbDsgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaLvvIznlKjkuo7kv53lrZhDYW52YXPlm77niYdcclxuXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRDtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHN0b3AgKCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IFN0YXR1cy5TVE9QO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDnp4HmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBfc2V0UGFpbnRlciAocGFpbnRlcikge1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIgPSBwYWludGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50ICgpIHtcclxuICAgICAgICB0aGlzLl9wYWludGVyLnNldENoYXJ0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3BhaW50ZXIucGFpbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiDliqjmgIHnlJ/miJB0aXDlr7nosaFcclxuICAgICog5Zyo5pys5Zu+6KGo57O75YiX5Lit77yMdGlw5piv55Sx5q616JC9cOWvueixoeWSjHRhYmxl5a+56LGh5p6E5oiQ77yM5YW25aSW6KeC55Sx5aSW6YOo5oyH5a6a55qEQ1NT5o6n5Yi2XHJcbiAgICAqL1xyXG4gICAgX2NyZWF0ZVRpcCAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IHRpcDtcclxuXHJcbiAgICAgICAgLy/nlJ/miJB0aXDnmoRkaXblr7nosaEs5bm25aKe5YqgY2xhc3PmoLflvI/jgILms6jmhI/vvJrmmK/lop7liqDogIzkuI3mmK/mm7/mjaJcclxuICAgICAgICB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXAuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDmrrXokL3lr7nosaHvvIznlKjkuo7mmL7npLrnsbvnm67lkI3np7BcclxuICAgICAgICB0aXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDooajmoLzlr7nosaHvvIznlKjkuo7ns7vliJflkI3np7DlkozmlbDmja5cclxuICAgICAgICB0aXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKSk7XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHRpcDtcclxuICAgIH1cclxufSIsImltcG9ydCBDaGFydEluZm9CYXNlX0luIGZyb20gJy4vQ2hhcnRJbmZvQmFzZV9Jbi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzQ2hhcnRJbmZvQmFzZV9JbiBleHRlbmRzIENoYXJ0SW5mb0Jhc2VfSW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnhBeGlzTmFtZSA9ICdY6L20JzsgICAgICAgICAgICAgIC8v5pi+56S65ZyoeOi9tOWwveWktO+8jOeUqOS6juihqOekunjovbTlkKvkuYnnmoTmloflrZfjgIIgPGJyPuS+i+Wmgu+8muaXtumXtOOAgeaciOS7veOAgeWbveWIq1xyXG4gICAgICAgIHRoaXMueUF4aXNOYW1lID0gJ1novbQnOyAgICAgICAgICAgICAgLy/mmL7npLrlnKh56L205bC95aS077yM55So5LqO6KGo56S6eei9tOWQq+S5ieeahOaWh+Wtl+OAgiA8YnI+5L6L5aaC77ya6YeR6aKd44CB5rWT5bqm44CB6Zuo6YePXHJcblxyXG4gICAgICAgIHRoaXMueEF4aXNOYW1lQm90dG9tID0gMjU7ICAgICAgICAvL3jovbTlkI3np7DmloflrZfkuIrovrnnvJjliLBkaXbkuIvovrnnvJjnmoTot53nprtcclxuICAgICAgICB0aGlzLnlBeGlzTmFtZVRvcCA9IDQwOyAgICAgICAgICAgLy956L205ZCN56ew5paH5a2X5LiK6L6557yY5YiwZGl25LiK6L6557yY55qE6Led56a7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENBeGlzSW5mb0Jhc2VfSW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLmNhdGVnb3J5cyA9IFtdOyAgICAgICAgICAgICAgIC8v57G755uu5ZCN56ew5pWw57uEXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IC0xOyAgICAgICAgICAgICAgICAvL+agh+etvumXtOmalOaVsOOAguW9k+exu+ebrumdnuW4uOWkmueahOaXtuWAme+8jOexu+ebrui9tOagh+etvuS8mumHjeWPoOOAguWboOatpOW/hemhu+aMieeFp+ebuOetieeahOmXtOmalOS4jei/nue7reaYvuekuuagh+etvuOAguS/neaMgem7mOiupOWAvOS7o+ihqOiHquWKqOiuoeeul+mXtOmalFxyXG4gICAgICAgIHRoaXMubGFiZWxSb3RhdGUgPSAwOyAgICAgICAgICAgICAgLy/moIfnrb7ml4vovazop5LluqYgICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWxHYXAgPSAyMDsgICAgICAgICAgICAgICAgLy/nm7jpgrvmoIfnrb7nmoTpl7Tot51cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ0F4aXNJbmZvQmFzZV9PdXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLmxhYmVscyA9IFtdOyAgICAgICAgICAgICAgIC8v5L+d5a2Y57G755uu6L205LiK5pi+56S655qE5qCH562+5paH5a2XXHJcbiAgICAgICAgdGhpcy5sYWJlbFNpemVzID0gW107ICAgICAgICAgICAgLy/kv53lrZjmiYDmnInnsbvnm67moIfnrb7mloflrZfnmoTplb/luqZcclxuXHJcbiAgICAgICAgLy/moIfnrb7pl7TpmpTkuKrmlbBcclxuICAgICAgICAvL0NBeGlzSW5mb0Jhc2VfSW4uaW50ZXJ2YWwgPj0gMOaXtiA6ICBDQXhpc0luZm9CYXNlX091dC5pbnRlcnZhbCA9IENBeGlzSW5mb0Jhc2VfSW4uaW50ZXJ2YWxcclxuICAgICAgICAvL0NBeGlzSW5mb0Jhc2VfSW4uaW50ZXJ2YWwgPCAw5pe2ICAgOiAgQ0F4aXNJbmZvQmFzZV9PdXQuaW50ZXJ2YWznmoTlgLzmmK/lhoXpg6jnrpfms5XorqHnrpfnmoTnu5PmnpxcclxuICAgICAgICB0aGlzLmludGVydmFsID0gMDtcclxuICAgICAgICB0aGlzLmludGVydmFsU2l6ZSA9IDA7ICAgICAgICAgICAvL+agueaNrmludGVydmFs5ZKMY2F0ZWdvcnlTaXpl6K6h566X5Ye655qE6ZW/5bqmXHJcblxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlTaXplID0gMDsgICAgICAgICAgLy/kuIDkuKrnsbvnm67lnKjovbTkuIrljaDnlKjnmoTplb/luqZcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRJbmZvQmFzZV9JbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnVENoYXJ0cyc7ICAgICAgIC8v5Zu+6KGo5qCH6aKYXHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVUb3AgPSAxMDsgICAgICAgICAvL+agh+mimOS9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMudGl0bGVMZWZ0ID0gMTA7XHJcblxyXG4gICAgICAgIHRoaXMubGVnZW5kVG9wID0gMTA7ICAgICAgICAvL+WbvuS+i+S9jee9ru+8muebuOWvueS6jmRpdui+uee8mFxyXG4gICAgICAgIHRoaXMubGVnZW5kTGVmdCA9IDIwO1xyXG4gICAgICAgIHRoaXMubGVnZW5kUmlnaHQgPSAyMDtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5VG9wID0gNzA7ICAgICAgIC8v5Zu+6KGo5Li75L2T5Yy65Z+f77yIeHnkuKTovbTlm7TmiJDnmoTnn6nlvaLljLrln5/vvInvvJrnm7jlr7nkuo5kaXbovrnnvJhcclxuICAgICAgICB0aGlzLmJvZHlCb3R0b20gPSA1MDtcclxuICAgICAgICB0aGlzLmJvZHlMZWZ0ID0gNTA7XHJcbiAgICAgICAgdGhpcy5ib2R5UmlnaHQgPSA1MDtcclxuXHJcbiAgICAgICAgLy/lm77ooajkvb/nlKjnmoTpopzoibLmlbDnu4RcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFsnI0MyMzUzMScsICcjMkY0NTU0JywgJyM2MUEwQTgnLCAnI0Q0ODI2NScsICcjOTFDN0FFJywgJyNDQTg2MjInLCAnI0JEQTI5QScsICcjNkU3MDc0J107XHJcbiAgICAgICAgdGhpcy5zZXJpZXMgPSBbXTsgICAgICAgICAgICAgICAgIC8v5pWw5o2u57O75YiXXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7ICAgICAgICAgLy/pgInmi6npobnnmoTntKLlvJUgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWQXhpc0luZm9CYXNlX0luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFOyAgICAgICAvL+aVsOWAvOi9tOeahOacgOWwj+WAvOOAguS/neaMgem7mOiupOWAvOS7o+ihqOmcgOimgeiHquWKqOiuoeeul1xyXG4gICAgICAgIHRoaXMubWF4ID0gTnVtYmVyLk1BWF9WQUxVRTsgICAgIC8v5pWw5YC86L2055qE5pyA5aSn5YC844CC5L+d5oyB6buY6K6k5YC85Luj6KGo6ZyA6KaB6Ieq5Yqo6K6h566XXHJcbiAgICAgICAgdGhpcy5sYWJlbE1heENvdW50ID0gNzsgICAgICAgICAgICAgICAgICAgLy/moIfnrb7mmL7npLrnmoTmnIDlpKfkuKrmlbBcclxuICAgICAgICB0aGlzLnplcm9FeHRlbmQgPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy/lvZPmlbDlgLzojIPlm7TkuI3ljIXmi6ww5pe277yM5piv5ZCm5bCG6IyD5Zu05omp5bGV5YiwMFxyXG4gICAgICAgIHRoaXMubGFiZWxSb3RhdGUgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgIC8v5qCH562+5peL6L2s6KeS5bqmICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZBeGlzSW5mb0Jhc2VfT3V0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy/mlbDlgLzovbTnmoTmnIDlsI/lgLxcclxuICAgICAgICAvL1ZBeGlzSW5mb0Jhc2VfSW4ubWluID0g6buY6K6k5YC85pe2IDogIFZBeGlzSW5mb0Jhc2VfT3V0Lm1pbueahOWAvOaYr+WGhemDqOeul+azleiuoeeul+eahOe7k+aenFxyXG4gICAgICAgIC8vVkF4aXNJbmZvQmFzZV9Jbi5taW4gIT0g6buY6K6k5YC85pe2IDogIFZBeGlzSW5mb0Jhc2VfT3V0Lm1pbiA9IFZBeGlzSW5mb0Jhc2VfSW4ubWluXHJcbiAgICAgICAgdGhpcy5taW4gPSAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gMDsgICAgICAgICAgICAgICAgICAgICAvL+WQjOeQhlxyXG5cclxuICAgICAgICB0aGlzLm1pblNjYWxlOyAgICAgICAgICAgICAgICAgICAvL+acgOWwj+WIu+W6puWAvFxyXG4gICAgICAgIHRoaXMubWF4U2NhbGU7ICAgICAgICAgICAgICAgICAgLy/mnIDlpKfliLvluqblgLxcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBbXTsgICAgICAgICAgICAgICAgIC8v5L+d5a2Y5pWw5YC86L205LiK5pi+56S655qE5qCH562+5paH5a2XXHJcbiAgICAgICAgdGhpcy5vcmlnaW5JbmRleCA9IC0xOyAgICAgICAgLy/ljp/ngrnmoIfnrb7lnKhsYWJlbHPmlbDnu4TkuK3nmoTntKLlvJXvvIznlKjkuo7nu5jliLbovbTnur9cclxuICAgICAgICB0aGlzLm9yaWdpblZhbHVlOyAgICAgICAgICAgICAgIC8v5Y6f54K555qE5YC8XHJcbiAgICAgICAgdGhpcy5vcmlnaW5Qb3NpdGlvbjsgICAgICAgICAgIC8v5Y6f54K55ZyoQ2FudmFz5LiK55qE55u45a+55L2N572uXHJcbiAgICAgICAgdGhpcy51bml0VmFsdWVTaXplID0gLTE7ICAgICAgLy/mlbDlgLwx5Zyo6L205LiK5Y2g55So55qE6ZW/5bqmXHJcbiAgICAgICAgdGhpcy5zY2FsZVVuaXQgPSAwOyAgICAgICAgICAgICAgLy/ljZXkvY3liLvluqblgLxcclxuICAgICAgICB0aGlzLnNjYWxlVW5pdFNpemUgPSAwOyAgICAgICAgLy/ljZXkvY3liLvluqblnKjovbTkuIrljaDnlKjnmoTplb/luqZcclxuXHJcbiAgICAgICAgdGhpcy5kZWNpbWFsRGlnaXQ7ICAgICAgICAgICAgICAvL+aVsOWtl+agh+etvuWwj+aVsOS9jeaVsFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXNCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBDaGFydEJhc2UgZnJvbSAnLi4vLi4vYmFzZS9jaGFydC9DaGFydEJhc2UuanMnO1xyXG5cclxuaW1wb3J0IENoYXJ0SW5mb19JbiBmcm9tICcuL2luZm8vQ2hhcnRJbmZvX0luLmpzJztcclxuXHJcbmltcG9ydCBDQXhpc0luZm9CYXNlX0luIGZyb20gJy4uLy4uL2Jhc2UvaW5mby9DQXhpc0luZm9CYXNlX0luLmpzJztcclxuaW1wb3J0IENBeGlzSW5mb0Jhc2VfT3V0IGZyb20gJy4uLy4uL2Jhc2UvaW5mby9DQXhpc0luZm9CYXNlX091dC5qcyc7XHJcblxyXG5pbXBvcnQgVkF4aXNJbmZvQmFzZV9JbiBmcm9tICcuLi8uLi9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9Jbi5qcyc7XHJcbmltcG9ydCBWQXhpc0luZm9CYXNlX091dCBmcm9tICcuLi8uLi9iYXNlL2luZm8vVkF4aXNJbmZvQmFzZV9PdXQuanMnO1xyXG5cclxuaW1wb3J0IE1hcmtQb2ludCBmcm9tICcuL3BhcnRzL01hcmtQb2ludC5qcyc7XHJcbmltcG9ydCBQYWludGVyIGZyb20gJy4vcGFpbnRlci9QYWludGVyLmpzJztcclxuXHJcbmltcG9ydCBPYmplY3RQb29sIGZyb20gJy4uLy4uL3N1cHBvcnQvT2JqZWN0UG9vbC5qcyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vc3VwcG9ydC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uL3N1cHBvcnQvU3RhdHVzLmpzJztcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSAnLi4vLi4vc3VwcG9ydC9VdGlsaXR5LmpzJztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi9zdXBwb3J0L1N0eWxlcy5qcyc7XHJcblxyXG5pbXBvcnQgVFdBbGdvcml0aG0gZnJvbSAnLi4vLi4vdHdlZW4vVFdBbGdvcml0aG0uanMnO1xyXG5pbXBvcnQgVFdFbmdpbmUgZnJvbSAnLi4vLi4vdHdlZW4vVFdFbmdpbmUuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ2hhcnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnREaXZJRCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy/nlKjmiLfovpPlhaXvvIjlm77ooajlv4XlpIfkv6Hmga/vvIlcclxuICAgICAgICB0aGlzLmNoYXJ0SW5mb19JbiA9IG5ldyBDaGFydEluZm9fSW4oKTsgICAgICAgICAgICAgICAvL+WbvuihqOS/oeaBr+OAguS+i++8muWbvuihqOWQjeensFxyXG4gICAgICAgIHRoaXMuY0F4aXNJbmZvX0luID0gbmV3IENBeGlzSW5mb0Jhc2VfSW4oKTsgICAgICAgICAgIC8v57G755uu6L205L+h5oGvXHJcbiAgICAgICAgdGhpcy52QXhpc0luZm9fSW4gPSBuZXcgVkF4aXNJbmZvQmFzZV9JbigpOyAgICAgICAgICAgLy/lgLzovbTkv6Hmga9cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc0JhayA9IG51bGw7ICAgICAgIC8v5LiN5pi+56S655qEQ2FudmFz77yM55So5LqO5ZCO5Y+w57uY5Yi2XHJcblxyXG4gICAgICAgIHRoaXMuX2NBeGlzSW5mb19PdXQgPSBuZXcgQ0F4aXNJbmZvQmFzZV9PdXQoKTsgICAgLy/mlbDmja7nu5PmnoTkvZMo5a2Y5YKo6K6h566X57uT5p6c77yM5L6b5YaF6YOo55SoKVxyXG4gICAgICAgIHRoaXMuX3ZBeGlzSW5mb19PdXQgPSBuZXcgVkF4aXNJbmZvQmFzZV9PdXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gW107ICAgICAgICAgLy/lrZjmlL4n5qCH6K6w54K55pWw5o2uJ+eahOS6jOe7tOaVsOe7hCAgIFxyXG4gICAgICAgIHRoaXMuX2l0ZW1Qb29sID0gbnVsbDsgICAgICAgIC8vJ+agh+iusOeCueaVsOaNriflr7nosaHmsaBcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRQaXhlbFdpZHRoOyAgICAgICAgLy/lm77ooajmnInmlYjlsLrlr7hcclxuICAgICAgICB0aGlzLl9jaGFydFBpeGVsSGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLl9wYXJlbnREaXZDbGFzc05hbWUgPSAnbGluZUNoYXJ0RGl2JzsgICAgLy/moLflvI/lkI1cclxuICAgICAgICB0aGlzLl90aXBEaXZDbGFzc05hbWUgPSAnbGluZUNoYXJ0VGlwRGl2JztcclxuICAgICAgICB0aGlzLl90aGlyZENvbENsYXNzTmFtZSA9ICd0aGlyZENvbCc7XHJcblxyXG4gICAgICAgIHRoaXMuX3R3RW5naW5lID0gbmV3IFRXRW5naW5lKCk7ICAgICAgICAgICAgICAgIC8v57yT5Yqo5Yqo55S755u45YWzXHJcbiAgICAgICAgdGhpcy5fdHdlZW5Qb3NpdGlvbkxlZnQ7XHJcbiAgICAgICAgdGhpcy5fdHdlZW5Qb3NpdGlvbldpZHRoO1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuQ2FsbEJhY2tCaW5kID0gdGhpcy5fdHdlZW5DYWxsQmFjay5iaW5kKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvL+iuvue9rueUu+WutlxyXG4gICAgICAgIHRoaXMuX3NldFBhaW50ZXIoUGFpbnRlcik7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5L2c5Li65Zu+6KGo5a655Zmo55qEZGl25a+56LGh77yM5bm25aKe5Yqg54m55a6a5qC35byP44CC5rOo5oSP77ya5piv5aKe5Yqg6ICM5LiN5piv5pu/5o2iXHJcbiAgICAgICAgdGhpcy5fcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RGl2SUQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudERpdi5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5fcGFyZW50RGl2Q2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAvL+WKqOaAgeeUn+aIkF9jYW52YXPvvIzlubbmt7vliqDliLBET03moJHjgILlkIzml7bojrflj5blhbbkuIrkuIvmlodcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLl9jYW52YXNCYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy/liqjmgIHnlJ/miJB0aXDlr7nosaHvvIzmt7vliqDliLBET03moJHvvIzlubbojrflj5bkuYtcclxuICAgICAgICB0aGlzLl90aXBEaXYgPSB0aGlzLl9jcmVhdGVUaXAodGhpcy5fdGlwRGl2Q2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5fdGlwRGl2KTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblr7nosaHmsaBcclxuICAgICAgICB0aGlzLl9pdGVtUG9vbCA9IG5ldyBPYmplY3RQb29sKE1hcmtQb2ludCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/pqozor4HmlbDmja7lkIjms5XmgKdcclxuICAgICAgICBpZiAodGhpcy5fY2hlY2soKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1RDaGFydHNdIEluY29ycmVjdCBjaGFydCBkYXRhICEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ph43orr7lkITnp43nirbmgIHvvIzmlbDmja5cclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG5cclxuICAgICAgICAvL+S4uue7mOWItuWbvuihqO+8jOiuoeeul+WQhOenjeaVsOaNrlxyXG4gICAgICAgIHRoaXMuX2NvbXB1dGVDYXRlZ29yeUluZm8oKTtcclxuICAgICAgICB0aGlzLl9nZXRDYXRlZ29yeUludGVydmFsKCk7XHJcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUFuZENvbXB1dGVNaW5NYXgoKTsgICAvL+iOt+WPlumhueebruWvueixoe+8jOiuoeeul+WAvOi9tOeahOacgOWkpy/mnIDlsI/lgLxcclxuICAgICAgICB0aGlzLl9jb21wdXRlVmFsdWVBeGlzT3RoZXJJbmZvKENvbnN0YW50cy5ZX0FYSVMsIHRoaXMudkF4aXNJbmZvX0luLCB0aGlzLl92QXhpc0luZm9fT3V0KTtcclxuICAgICAgICB0aGlzLl9zZXRJdGVtUG9zaXRpb24oKTsgICAgICAgICAvL+iuvue9ruagh+W/l+eCueS9jee9rlxyXG5cclxuICAgICAgICAvL+iuvue9rue8k+WKqOWKqOeUu1xyXG4gICAgICAgIHRoaXMuX3NldFR3ZWVuKCk7XHJcblxyXG4gICAgICAgIC8v5ZCv5Yqo5bin5b6q546v77yM5Zyo5b6q546v5YaF6YOo57uY5Yi25Zu+6KGoXHJcbiAgICAgICAgdGhpcy5fc3RhcnRQYWludCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgX2NoZWNrICgpIHtcclxuICAgICAgICBsZXQgc2VyaWVzLFxyXG4gICAgICAgICAgICBzZXIsXHJcbiAgICAgICAgICAgIGksIGxlbjEsIGxlbjIsXHJcbiAgICAgICAgICAgIHJ0biA9IHRydWU7XHJcblxyXG4gICAgICAgIHNlcmllcyA9IHRoaXMuY2hhcnRJbmZvX0luLnNlcmllcztcclxuICAgICAgICBsZW4xID0gdGhpcy5jQXhpc0luZm9fSW4uY2F0ZWdvcnlzLmxlbmd0aDtcclxuICAgICAgICBsZW4yID0gc2VyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy/mo4Dmn6Ux77yaIOaVsOaNruaYr+WQpuS4uuepulxyXG4gICAgICAgIGlmICgobGVuMSA9PSAwKSB8fCAobGVuMiA9PSAwKSkge1xyXG4gICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy/mo4Dmn6Uy77yaIOaVsOaNruezu+WIl+aYr+WQpuS4juexu+ebruaVsOaNrumVv+W6puS4gOiHtFxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZXIgPSBzZXJpZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyLmRhdGEubGVuZ3RoICE9IGxlbjEpIHtcclxuICAgICAgICAgICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3Jlc2V0ICgpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5fY2FudmFzLFxyXG4gICAgICAgICAgICBjYW52YXNCYWsgPSB0aGlzLl9jYW52YXNCYWssXHJcbiAgICAgICAgICAgIGRpdiA9IHRoaXMuX3BhcmVudERpdixcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGl0ZW1BcnIgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgLy/np7vpmaTpvKDmoIfkuovku7bnm5HlkKzlmahcclxuICAgICAgICB0aGlzLl9hZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLlJFTU9WRSk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5bC65a+4XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzQmFrLndpZHRoID0gZGl2Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNCYWsuaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuICAgICAgICB0aGlzLl9jaGFydFBpeGVsV2lkdGggPSBjYW52YXMud2lkdGggLSBjaGFydEluZm9fSW4uYm9keUxlZnQgLSBjaGFydEluZm9fSW4uYm9keVJpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0UGl4ZWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlUb3AgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuXHJcbiAgICAgICAgLy/orr7nva7nvJPliqjmlYjmnpzpnIDopoHnmoTliJ3mnJ/mlbDmja5cclxuICAgICAgICB0aGlzLl90d2VlblBvc2l0aW9uTGVmdCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCAtIDI7XHJcbiAgICAgICAgdGhpcy5fdHdlZW5Qb3NpdGlvbldpZHRoID0gdGhpcy5fY2hhcnRQaXhlbFdpZHRoICsgNDtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblm77kvovmlbDmja7jgIFsaW5l5a+56LGh5pWw57uEXHJcbiAgICAgICAgaXRlbUFyci5sZW5ndGggPSAwO1xyXG4gICAgICAgIGxlbiA9IGNoYXJ0SW5mb19Jbi5zZXJpZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtQXJyW2ldID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIneWni+WMllRpcFxyXG4gICAgICAgIHRoaXMuX2luaXRUaXAoKTtcclxuXHJcbiAgICAgICAgLy/ku47lr7nosaHmsaDkuK3ph4rmlL7mm77nu4/kvb/nlKjov4fnmoQn5qCH6K6w54K55pWw5o2uJ1xyXG4gICAgICAgIHRoaXMuX2l0ZW1Qb29sLnJlbGVhc2VBbGwoKTtcclxuXHJcbiAgICAgICAgLy/ph4rmlL7nvJPliqjotYTmupBcclxuICAgICAgICB0aGlzLl90d0VuZ2luZS5yZWxlYXNlQWxsVFdEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5fdHdFbmdpbmUucmVsZWFzZUFsbFRXQWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8v5Y+W5raI5LiK5LiA5qyh57uR5a6a55qE5Yqo55S75Ye95pWwXHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfaW5pdFRpcCAoKSB7XHJcbiAgICAgICAgbGV0IHRpcERpdiA9IHRoaXMuX3RpcERpdixcclxuICAgICAgICAgICAgY29sb3JzID0gdGhpcy5jaGFydEluZm9fSW4uY29sb3JzLFxyXG4gICAgICAgICAgICBzZXJpZXMgPSB0aGlzLmNoYXJ0SW5mb19Jbi5zZXJpZXMsXHJcbiAgICAgICAgICAgIHRhYmxlLCByb3csIHRkLCBzcGFuLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIC8v6ZqQ6JePdGlwXHJcbiAgICAgICAgdGlwRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIC8v5Yig6ZmkVGFibGXlr7nosaHnmoTmiYDmnInooYxcclxuICAgICAgICB0YWJsZSA9IHRpcERpdi5jaGlsZE5vZGVzWzFdO1xyXG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAvL+agueaNruaVsOaNruezu+WIl+W+queOr+eUn+aIkFRhYmxl5a+56LGhXHJcbiAgICAgICAgbGVuID0gc2VyaWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgLy/liJvlu7rooYxcclxuICAgICAgICAgICAgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcblxyXG4gICAgICAgICAgICAvL+WIm+W7uuesrOS4gOWIl++8jOW5tuaPkuWFpXNwYW5cclxuICAgICAgICAgICAgdGQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tpXTtcclxuICAgICAgICAgICAgdGQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgICAgICAgICAvL+WIm+W7uuesrOS6jOWIl++8jOW5tuaPkuWFpeezu+WIl+WQjeensFxyXG4gICAgICAgICAgICB0ZCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IHNlcmllc1tpXS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgLy/liJvlu7rnrKzkuInliJfvvIzlubborr7lrprmoLflvI/lkI1cclxuICAgICAgICAgICAgdGQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICB0ZC5jbGFzc05hbWUgPSB0aGlzLl90aGlyZENvbENsYXNzTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9jb21wdXRlQ2F0ZWdvcnlJbmZvICgpIHtcclxuICAgICAgICAvL+iuoeeul+S4gOS4quWIhuexu+WcqOi9tOS4iuWNoOeUqOeahOmVv+W6plxyXG4gICAgICAgIHRoaXMuX2NBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplID0gdGhpcy5fY2hhcnRQaXhlbFdpZHRoIC8gKHRoaXMuY0F4aXNJbmZvX0luLmNhdGVnb3J5cy5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldENhdGVnb3J5SW50ZXJ2YWwgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcclxuICAgICAgICAgICAgY0F4aXNJbmZvX0luID0gdGhpcy5jQXhpc0luZm9fSW4sXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQgPSB0aGlzLl9jQXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICBjYXRlZ29yeXMgPSBjQXhpc0luZm9fSW4uY2F0ZWdvcnlzLFxyXG4gICAgICAgICAgICB3LFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG5cclxuICAgICAgICAvL+WmguaenOS6uuS4uuaMh+WumuS6humXtOmalO+8jOWImeS4jemcgOimgeWBmuebuOWFs+iuoeeul1xyXG4gICAgICAgIGlmIChjQXhpc0luZm9fSW4uaW50ZXJ2YWwgPj0gMCkge1xyXG4gICAgICAgICAgICBjQXhpc0luZm9fT3V0LmludGVydmFsID0gY0F4aXNJbmZvX0luLmludGVydmFsO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iuoeeul+agh+etvuaWh+acrOWwuuWvuO+8jOW5tuWtmOWFpeaVsOe7hO+8jOeUqOS6juWQjumdoueahOagh+etvumHjeWPoOavlOi+g1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IFN0eWxlcy5MQUJFTF9GT05UOyAgICAvL+iuvue9ruWtl+S9k++8jOi/meaYr+W6pumHj+aWh+Wtl+WuveW6pueahOW/heWkh+adoeS7tlxyXG5cclxuICAgICAgICAgICAgbGVuID0gY2F0ZWdvcnlzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB3ID0gY3R4Lm1lYXN1cmVUZXh0KGNhdGVnb3J5c1tpXSkud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjQXhpc0luZm9fT3V0LmxhYmVsU2l6ZXNbaV0gPSB7IHNpemU6IHcsIHdpdGhHYXBTaXplOiB3ICsgY0F4aXNJbmZvX0luLmxhYmVsR2FwIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v6K6h566X6Ze06ZqUXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVDYXRlZ29yeUludGVydmFsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjQXhpc0luZm9fT3V0LmludGVydmFsU2l6ZSA9IGNBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplICogKGNBeGlzSW5mb19PdXQuaW50ZXJ2YWwgKyAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2NvbXB1dGVDYXRlZ29yeUludGVydmFsICgpIHtcclxuICAgICAgICAvL+WumuS5iVxyXG4gICAgICAgIGxldCBjQXhpc0luZm9fT3V0ID0gdGhpcy5fY0F4aXNJbmZvX091dCxcclxuICAgICAgICAgICAgY2F0ZWdvcnlTaXplID0gY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUsXHJcbiAgICAgICAgICAgIGxhYmVsU2l6ZXMgPSBjQXhpc0luZm9fT3V0LmxhYmVsU2l6ZXMsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlLFxyXG4gICAgICAgICAgICBpID0gMCwgaiA9IDAsXHJcbiAgICAgICAgICAgIGxlbiA9IHRoaXMuY0F4aXNJbmZvX0luLmNhdGVnb3J5cy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNvbXB1dGUgKGludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICBqID0gaW50ZXJ2YWwgKyAxO1xyXG5cclxuICAgICAgICAgICAgLy/lvqrnjq/pgY3ljobmlbDnu4RcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsZW4gJiYgaiA8IGxlbikge1xyXG4gICAgICAgICAgICAgICAgLy/mr5TovoPnm7jpgrvmoIfnrb7mmK/lkKbph43lj6BcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY2F0ZWdvcnlTaXplICogKGogLSBpKSAtIChsYWJlbFNpemVzW2pdLndpdGhHYXBTaXplICsgbGFiZWxTaXplc1tpXS53aXRoR2FwU2l6ZSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c6YeN5Y+g77yM6Ze06ZqU5Yqg5LiA77yM54S25ZCO6YCS5b2SXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZShpbnRlcnZhbCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v57uT5p2f5pys5b6q546vXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOS4jemHjeWPoO+8jOS4uuS4i+asoeW+queOr+ehruWumuaVsOe7hOe0ouW8lVxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGogPSBpICsgaW50ZXJ2YWwgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WmguaenOmBjeWOhue7k+adn++8jOiuvue9rlxyXG4gICAgICAgICAgICBjQXhpc0luZm9fT3V0LmludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aJp+ihjFxyXG4gICAgICAgIGNvbXB1dGUoMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRJdGVtQW5kQ29tcHV0ZU1pbk1heCAoKSB7XHJcblxyXG4gICAgICAgIGxldCB2QXhpc0luZm9fSW4gPSB0aGlzLnZBeGlzSW5mb19JbixcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dCA9IHRoaXMuX3ZBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIHNlcmllcyA9IHRoaXMuY2hhcnRJbmZvX0luLnNlcmllcyxcclxuICAgICAgICAgICAgc2VyLFxyXG5cclxuICAgICAgICAgICAgaXRlbVBvb2wgPSB0aGlzLl9pdGVtUG9vbCxcclxuICAgICAgICAgICAgaXRlbUFycmF5ID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG5cclxuICAgICAgICAgICAgcGx1c0FyciA9IFtdLFxyXG4gICAgICAgICAgICBtaW51c0FyciA9IFtdLFxyXG4gICAgICAgICAgICBzdGFja05hbWUsXHJcblxyXG4gICAgICAgICAgICBpLCBqLCBsZW4xLCBsZW4yO1xyXG5cclxuICAgICAgICAvLygxKemBjeWOhuesrOS4gOS4quezu+WIl+eahOWFqOmDqOaVsOaNru+8jOaJvuWIsOesrOS4gOS4quacieaViOaVsOaNru+8jOS4uuacgOWkp+acgOWwj+i1i+WIneWAvFxyXG4gICAgICAgIHNlciA9IHNlcmllc1swXTtcclxuICAgICAgICBsZW4xID0gc2VyLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNlci5kYXRhW2ldICE9IENvbnN0YW50cy5ESVJUWSkge1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5taW4gPSB2QXhpc0luZm9fT3V0Lm1heCA9IHNlci5kYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDIp5LuO5rGg5Lit5Y+W5Ye66aG555uu5a+56LGh77yM5ZCM5pe25rGC5b6X5pyA5aSn5pyA5bCP5YC8XHJcbiAgICAgICAgbGVuMiA9IHNlcmllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjE7IGkrKykge1xyXG4gICAgICAgICAgICAvLygyLTEp5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIHN0YWNrTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICBwbHVzQXJyLmxlbmd0aCA9IG1pbnVzQXJyLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLygyLTIp55Sf5oiQ6aG555uu5a+56LGhXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIC8vKDItMi0xKeWPluW+l+ezu+WIl1xyXG4gICAgICAgICAgICAgICAgc2VyID0gc2VyaWVzW2pdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vKDItMi0yKeavlOi+g+axguW+l+acgOWAvFxyXG4gICAgICAgICAgICAgICAgLy/mr5TovoPor6Xns7vliJflkozkuIrkuIDns7vliJfmmK/lkKblhbfmnInnm7jlkIznmoQo57Sv56ev5ZCN56ewKVxyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpwo57Sv56ev5ZCN56ewKeS4jeebuOWQjOaIluS4um51bGwo5LiN6ZyA6KaB57Sv56evKe+8jOWImeaKiuatpOWJjeenr+e0r+eahOaVsOaNruS8oOe7meavlOi+g+WHveaVsO+8jOeEtuWQjuWIneWni+WMluebuOWFs+WPmOmHj++8jOS4uuaWsOeahOe0r+enr+WBmuWHhuWkh1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlci5zdGFja05hbWUgPT0gJycgfHwgc2VyLnN0YWNrTmFtZSAhPSBzdGFja05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+avlOi+g1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbXBhcmUocGx1c0FyciwgbWludXNBcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Li65paw55qE57Sv56ev5YGa5YeG5aSHXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lID0gc2VyLnN0YWNrTmFtZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05pawKOe0r+enr+WQjeensCnvvIznlKjkuo7mraTlkI7nmoTmr5TovoNcclxuICAgICAgICAgICAgICAgICAgICBwbHVzQXJyLmxlbmd0aCA9IG1pbnVzQXJyLmxlbmd0aCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgLy/muIXnqbrmlbDnu4RcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLygyLTItMynku47msaDkuK3ojrflj5bpobnnm67lr7nosaHvvIzlubbph43mlrDorr7nva7lsZ7mgKdcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtUG9vbC5nZXRPYmooKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+WQpuS4uuiEj+aVsOaNrijml6DmlYjmlbDmja4pXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyLmRhdGFbaV0gPT0gQ29uc3RhbnRzLkRJUlRZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXJ0eUZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBOdW1iZXIuTmFOO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhY2tWYWx1ZSA9IE51bWJlci5OYU47XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRpcnR5RmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBzZXIuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YWNrVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uc3RhY2tOYW1lID0gc2VyLnN0YWNrTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLygyLTItNCnliqDlhaXliLDmlbDnu4RcclxuICAgICAgICAgICAgICAgIGl0ZW1BcnJheVtqXS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vKDItMi01Keenr+e0r+ebuOWQjCjntK/np6/lkI3np7Ap55qE6aG555uu77yM55So5LqOKDItMi0yKeeahOavlOi+g1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlGbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVzQXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51c0Fyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8oMi0zKeacgOWQjuS4gOasoeavlOi+g1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wYXJlKHBsdXNBcnIsIG1pbnVzQXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKDMp5Yik5pat55So5oi35piv5ZCm5oyH5a6a5LqG5pyA5aSn5pyA5bCP5YC8XHJcbiAgICAgICAgaWYgKHZBeGlzSW5mb19Jbi5taW4gIT0gTnVtYmVyLk1JTl9WQUxVRSAmJiB2QXhpc0luZm9fSW4ubWluIDwgdkF4aXNJbmZvX091dC5taW4pIHtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5taW4gPSB2QXhpc0luZm9fSW4ubWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodkF4aXNJbmZvX0luLm1heCAhPSBOdW1iZXIuTUFYX1ZBTFVFICYmIHZBeGlzSW5mb19Jbi5tYXggPiB2QXhpc0luZm9fT3V0Lm1heCkge1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm1heCA9IHZBeGlzSW5mb19Jbi5tYXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyg0KeWIpOaWreaYr+WQpuWcqOWAvOi9tOS4iuaJqeWxlSAw77yM5bm25o2u5q2k6LCD5pW05pyA5YC8XHJcbiAgICAgICAgaWYgKHZBeGlzSW5mb19Jbi56ZXJvRXh0ZW5kID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHZBeGlzSW5mb19PdXQubWluID4gMCAmJiB2QXhpc0luZm9fT3V0Lm1heCA+IDApICAgICAvL+WQjOS4uuato+aVsFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm1pbiA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodkF4aXNJbmZvX091dC5taW4gPCAwICYmIHZBeGlzSW5mb19PdXQubWF4IDwgMCkgeyAgICAgLy/lkIzkuLrotJ/mlbBcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQubWF4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9jb21wYXJlIChwbHVzQXJyLCBtaW51c0Fycikge1xyXG4gICAgICAgIC8v57Sv6K6h5q2j5YC877yM5bm25q+U6L6D5pyA5YC8XHJcbiAgICAgICAgbGV0IGl0ZW0sXHJcbiAgICAgICAgICAgIG51bSxcclxuICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICBudW0gPSAwO1xyXG4gICAgICAgIGxlbiA9IHBsdXNBcnIubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHBsdXNBcnJbaV07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0YWNrVmFsdWUgPSBudW07XHJcbiAgICAgICAgICAgICAgICBudW0gKz0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZXRNaW5NYXgobnVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v57Sv6K6h6LSf5YC877yM5bm25q+U6L6D5pyA5YC8XHJcbiAgICAgICAgbnVtID0gMDtcclxuICAgICAgICBsZW4gPSBtaW51c0Fyci5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gbWludXNBcnJbaV07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0YWNrVmFsdWUgPSBudW07XHJcbiAgICAgICAgICAgICAgICBudW0gKz0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZXRNaW5NYXgobnVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc2V0TWluTWF4IChudW0pIHtcclxuICAgICAgICBsZXQgdkF4aXNJbmZvX091dCA9IHRoaXMuX3ZBeGlzSW5mb19PdXQ7XHJcblxyXG4gICAgICAgIGlmIChudW0gPCB2QXhpc0luZm9fT3V0Lm1pbikge1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm1pbiA9IG51bTtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA+IHZBeGlzSW5mb19PdXQubWF4KSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQubWF4ID0gbnVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgX2NvbXB1dGVWYWx1ZUF4aXNPdGhlckluZm8gKGF4aXNUeXBlLCB2QXhpc0luZm9fSW4sIHZBeGlzSW5mb19PdXQpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5fY2FudmFzLFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgc2NhbGVVbml0LFxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgIC8v6K6h566X5qCH562+6Ze06ZqUXHJcbiAgICAgICAgdkF4aXNJbmZvX091dC5zY2FsZVVuaXQgPSBVdGlsaXR5LmdldFNjYWxlVW5pdCh2QXhpc0luZm9fT3V0Lm1pbiwgdkF4aXNJbmZvX091dC5tYXgsIHZBeGlzSW5mb19Jbi5sYWJlbE1heENvdW50KTtcclxuXHJcbiAgICAgICAgLy/orqHnrpfmqKrovbTmoIfnrb7lsI/mlbDkvY3mlbBcclxuICAgICAgICBhcnIgPSB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdC50b1N0cmluZygpLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQuZGVjaW1hbERpZ2l0ID0gYXJyWzFdLmxlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/orqHnrpfmnIDlsI/liLvluqYo5ZCM5pe25Li65pyA5aSn5Yi75bqm6K6+5Yid5YC8KVxyXG4gICAgICAgIHZBeGlzSW5mb19PdXQubWluU2NhbGUgPSB2QXhpc0luZm9fT3V0Lm1heFNjYWxlID0gTWF0aC5mbG9vcih2QXhpc0luZm9fT3V0Lm1pbiAvIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0KSAqIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0O1xyXG5cclxuICAgICAgICAvL+iuoeeul+acgOWkp+WIu+W6pu+8jOWQjOaXtuiusOW9leWOn+eCueeahOS9jee9rlxyXG4gICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXggPSAtMTsgICAgICAgIC8v5Yid5YC8XHJcbiAgICAgICAgZm9yIChpID0gMDsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjYWxlVW5pdCA9IHZBeGlzSW5mb19PdXQubWluU2NhbGUgKyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5pivMOWIu+W6pu+8jOWmguaenOaYr+WImeiusOW9leS5i1xyXG4gICAgICAgICAgICBpZiAoc2NhbGVVbml0ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5WYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5Li65pyA5aSn5Yi75bqm77yM5piv5YiZ6YCA5Ye65b6q546vXHJcbiAgICAgICAgICAgIGlmIChzY2FsZVVuaXQgPj0gdkF4aXNJbmZvX091dC5tYXgpIHtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQubWF4U2NhbGUgPSBzY2FsZVVuaXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v57un57ut6K6h566X5Y6f54K555qE5L2N572uKOWOn+eCueWAvOS4jeS4gOWumuaYrzApXHJcbiAgICAgICAgLy/liKTmlq3ljp/ngrnmlbDnu4TntKLlvJXmmK/lkKbkuLrliJ3lgLxcclxuICAgICAgICAvL+WmguaenOS4uuWIneWAvO+8jOivtOaYjuWJjeS4gOatpemqpOW5tuayoeacieW+l+WHuuWOn+eCuee7k+aenO+8jOWImee7p+e7reiuoeeul1xyXG4gICAgICAgIGlmICh2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIGlmICh2QXhpc0luZm9fT3V0Lm1pblNjYWxlID49IDApIHtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgdkF4aXNJbmZvX091dC5vcmlnaW5WYWx1ZSA9IHZBeGlzSW5mb19PdXQubWluU2NhbGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodkF4aXNJbmZvX091dC5tYXhTY2FsZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luVmFsdWUgPSB2QXhpc0luZm9fT3V0Lm1heFNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iuoeeul+WNleS9jeaVsOWAvOWcqOi9tOS4iuWNoOeUqOeahOeJqeeQhuWwuuWvuCAvIOebuOmCu+agh+etvuS5i+mXtOeahOeJqeeQhui3neemuyAvIOWOn+eCuVxyXG4gICAgICAgIGlmIChheGlzVHlwZSA9PSBDb25zdGFudHMuWF9BWElTKSB7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSA9IHRoaXMuX2NoYXJ0UGl4ZWxXaWR0aCAvICh2QXhpc0luZm9fT3V0Lm1heFNjYWxlIC0gdkF4aXNJbmZvX091dC5taW5TY2FsZSk7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSA9IHZBeGlzSW5mb19PdXQudW5pdFZhbHVlU2l6ZSAqIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0O1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0Lm9yaWdpblBvc2l0aW9uID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0ICsgdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplICogdkF4aXNJbmZvX091dC5vcmlnaW5JbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0LnVuaXRWYWx1ZVNpemUgPSB0aGlzLl9jaGFydFBpeGVsSGVpZ2h0IC8gKHZBeGlzSW5mb19PdXQubWF4U2NhbGUgLSB2QXhpc0luZm9fT3V0Lm1pblNjYWxlKTtcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplID0gdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplICogdkF4aXNJbmZvX091dC5zY2FsZVVuaXQ7XHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24gPSBjYW52YXMuaGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b20gLSB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUgKiB2QXhpc0luZm9fT3V0Lm9yaWdpbkluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9zZXRJdGVtUG9zaXRpb24gKCkge1xyXG4gICAgICAgIGxldCBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY0F4aXNJbmZvX091dCA9IHRoaXMuX2NBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIHZBeGlzSW5mb19PdXQgPSB0aGlzLl92QXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICBpdGVtQXJyID0gdGhpcy5faXRlbUFycmF5LFxyXG4gICAgICAgICAgICBpdGVtLCBhcnIsXHJcbiAgICAgICAgICAgIGksIGosIGxlbjEsIGxlbjIsXHJcbiAgICAgICAgICAgIHk7XHJcblxyXG4gICAgICAgIC8v6aKE5YWI566X5Ye65LiA5Lqb5Lit6Ze057uT5p6c77yM55So5LqO5q2k5ZCO55qE5b6q546vXHJcbiAgICAgICAgeSA9IHZBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb247XHJcblxyXG4gICAgICAgIC8v5b6q546v6aG555uu5a+56LGh6L+b6KGM6K6+5a6aXHJcbiAgICAgICAgbGVuMSA9IGl0ZW1BcnIubGVuZ3RoO1xyXG4gICAgICAgIGxlbjIgPSBpdGVtQXJyWzBdLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5oyH5a6a57O75YiX5a+55bqU55qE6aG555uu5pWw57uEXHJcbiAgICAgICAgICAgIGFyciA9IGl0ZW1BcnJbaV07XHJcbiAgICAgICAgICAgIGl0ZW0gPSBhcnJbMF07XHJcblxyXG4gICAgICAgICAgICAvL+S4uuWQhOS4qumhueebruiuvuWumuWkp+Wwj+WSjOS9jee9rlxyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WPluW+l+mhueebruWvueixoVxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGFycltqXTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpcnR5ID09IHRydWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v6K6+572u5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBpdGVtLnggPSBjaGFydEluZm9fSW4uYm9keUxlZnQgKyBqICogY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnkgPSB5IC0gdkF4aXNJbmZvX091dC51bml0VmFsdWVTaXplICogKGl0ZW0udmFsdWUgKyBpdGVtLnN0YWNrVmFsdWUgLSB2QXhpc0luZm9fT3V0Lm9yaWdpblZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3NldFR3ZWVuICgpIHtcclxuICAgICAgICBsZXQgdHdFbmdpbmUgPSB0aGlzLl90d0VuZ2luZSxcclxuICAgICAgICAgICAgdHdlZW5DYWxsQmFja0JpbmQgPSB0aGlzLl90d2VlbkNhbGxCYWNrQmluZCxcclxuICAgICAgICAgICAgZnJvbSwgdG8sIHR3RGF0YSwgdHdBY3Rpb247XHJcblxyXG4gICAgICAgIGZyb20gPSBbMV07XHJcbiAgICAgICAgdG8gPSBbdGhpcy5fdHdlZW5Qb3NpdGlvbldpZHRoXTtcclxuXHJcbiAgICAgICAgdHdEYXRhID0gdHdFbmdpbmUuZ2V0VFdEYXRhKCk7XHJcbiAgICAgICAgdHdEYXRhLnNldERhdGEobnVsbCwgZnJvbSwgdG8sIHR3ZWVuQ2FsbEJhY2tCaW5kKTtcclxuXHJcbiAgICAgICAgdHdBY3Rpb24gPSB0d0VuZ2luZS5nZXRUV0FjdGlvbigpO1xyXG4gICAgICAgIHR3QWN0aW9uLnNldERhdGEoW3R3RGF0YV0sIFRXQWxnb3JpdGhtLmxpbmVhciwgMTAwMCk7XHJcblxyXG4gICAgICAgIHR3RW5naW5lLnNldEZpcnN0VFdBY3Rpb24odHdBY3Rpb24pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX2FkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lciAoY29tbWFuZCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLl9jYW52YXMsXHJcblxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLmNoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgc2VyaWVzID0gY2hhcnRJbmZvX0luLnNlcmllcyxcclxuICAgICAgICAgICAgc2VyLFxyXG5cclxuICAgICAgICAgICAgbGVmdCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCzjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIAvL+WbvuihqOe7mOWItuWMuuWfn+eahOi+ueeVjFxyXG4gICAgICAgICAgICByaWdodCA9IGNhbnZhcy53aWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQsXHJcbiAgICAgICAgICAgIHRvcCA9IGNoYXJ0SW5mb19Jbi5ib2R5VG9wLFxyXG4gICAgICAgICAgICBib3R0b20gPSBjYW52YXMuaGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b20sXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeXMgPSB0aGlzLmNBeGlzSW5mb19Jbi5jYXRlZ29yeXMsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5U2l6ZSA9IHRoaXMuX2NBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplLFxyXG5cclxuICAgICAgICAgICAgdGlwID0gdGhpcy5fdGlwRGl2LFxyXG4gICAgICAgICAgICB0YWJsZSwgcCxcclxuXHJcbiAgICAgICAgICAgIHJlY3QsICAgICAgIC8vQ2FudmFz5YyF5Zu055uS55u45YWzXHJcblxyXG4gICAgICAgICAgICBudW0sXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHsgeDogLTEsIHk6IC0xIH0sXHJcblxyXG4gICAgICAgICAgICBpLCBsZW4sXHJcbiAgICAgICAgICAgIG1lID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvTW91c2VNb3ZlIChlKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W6byg5qCH55u45a+55LqOQ2FudmFz55qE5L2N572uXHJcbiAgICAgICAgICAgIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIFV0aWxpdHkud2luZG93VG9DYW52YXMocmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmVjdC50b3AsXHJcbiAgICAgICAgICAgICAgICByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgcmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZS5jbGllbnRZLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgLy/liKTmlq3pvKDmoIfmmK/lkKbkvY3kuo7lm77ooajmlbDmja7mmL7npLrljLrln5/vvIzlpoLmnpzkuI3mmK/liJnpmpDol490aXDvvIznhLblkI7pgIDlh7pcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPCBsZWZ0IHx8XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi54ID4gcmlnaHQgfHxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPCB0b3AgfHxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPiBib3R0b20pIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+agueaNruS9jee9ruiuoeeul+WFtuS7o+ihqOeahOexu+ebrue0ouW8lVxyXG4gICAgICAgICAgICBpbmRleCA9IE1hdGgucm91bmQoKHBvc2l0aW9uLnggLSBsZWZ0KSAvIGNhdGVnb3J5U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAvL+aYvuekunRpcFxyXG4gICAgICAgICAgICB0aXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgICAgICAvL+abtOaWsHRpcFxyXG4gICAgICAgICAgICBwID0gdGlwLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIGlmIChwLmlubmVyVGV4dCA9PSAnJyB8fCBwLmlubmVyVGV4dCAhPSBjYXRlZ29yeXNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAvL+abtOaWsOexu+ebruWQjeensFxyXG4gICAgICAgICAgICAgICAgcC5pbm5lclRleHQgPSBjYXRlZ29yeXNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5pu05paw5pWw5o2u57O75YiXXHJcbiAgICAgICAgICAgICAgICB0YWJsZSA9IHRpcC5jaGlsZE5vZGVzWzFdO1xyXG4gICAgICAgICAgICAgICAgbGVuID0gc2VyaWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlciA9IHNlcmllc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5yb3dzW2ldLmNlbGxzWzJdLmlubmVyVGV4dCA9IHNlci5kYXRhW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/np7vliqh0aXBcclxuICAgICAgICAgICAgLy/orr7lrpp0aXDnmoRY5Z2Q5qCHXHJcbiAgICAgICAgICAgIG51bSA9IHRpcC5vZmZzZXRXaWR0aCArIFN0eWxlcy5USVBfTE9DQVRJT05fT0ZGU0VUO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCArIG51bSA+IHJlY3Qud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS5sZWZ0ID0gKHBvc2l0aW9uLnggLSBudW0pICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS5sZWZ0ID0gKHBvc2l0aW9uLnggKyBTdHlsZXMuVElQX0xPQ0FUSU9OX09GRlNFVCkgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+iuvuWumnRpcOeahFnlnZDmoIdcclxuICAgICAgICAgICAgbnVtID0gdGlwLm9mZnNldEhlaWdodCArIFN0eWxlcy5USVBfTE9DQVRJT05fT0ZGU0VUO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueSArIG51bSA+IHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aXAuc3R5bGUudG9wID0gKHBvc2l0aW9uLnkgLSBudW0pICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zdHlsZS50b3AgPSAocG9zaXRpb24ueSArIFN0eWxlcy5USVBfTE9DQVRJT05fT0ZGU0VUKSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5pu05paw6YCJ5oup6aG577yM5bm26YeN57uYXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSBjaGFydEluZm9fSW4uc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRJbmZvX0luLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb01vdXNlT3V0IChlKSB7XHJcbiAgICAgICAgICAgIC8v6ZqQ6JePdGlwXHJcbiAgICAgICAgICAgIHRpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v5omn6KGMXHJcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gQ29uc3RhbnRzLkFERCAmJiBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRvTW91c2VNb3ZlKTtcclxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZG9Nb3VzZU91dCk7XHJcbiAgICAgICAgICAgIG1lLmV2ZW50TGlzdGVuZXJzQWRkZWRGbGFnID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gQ29uc3RhbnRzLlJFTU9WRSAmJiBtZS5fZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZG9Nb3VzZU1vdmUpO1xyXG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBkb01vdXNlT3V0KTtcclxuICAgICAgICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNBZGRlZEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3N0YXJ0UGFpbnQgKCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhaW50ICgpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChtZS5fc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMTpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu5jliLblm77ooajmoYbmnrbvvIjovbTjgIHmoIfnrb7vvIzlm77kvovnrYnnrYnvvIzkuI3ljIXlkKvnur/vvIlcclxuICAgICAgICAgICAgICAgICAgICBtZS5fdHdFbmdpbmUuc3RhcnQoKTsgICAgICAgICAgICAgICAgICAvL+WQr+WKqOe8k+WKqO+8jOS7juS4i+S4gOW4p+W8gOWni+e8k+WKqFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLlNURVAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVAyOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+e7mOWItue8k+WKqOaViOaenFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAg5aaC5p6c57yT5Yqo5rKh5pyJ57uT5p2f77yM5bCx57uY5Yi2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICDlj43kuYvvvIzorr7nva7nirbmgIHvvIzlnKjkuIvkuIDlgZzmraLnu5jliLZcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuX3R3RW5naW5lLm5leHRGcmFtZSgpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl90d0VuZ2luZS5zdG9wKCk7ICAgICAgLy/lgZzmraLnvJPliqhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9zdGF0dXMgPSBTdGF0dXMuU1RFUDM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3BhaW50KCk7ICAgICAgICAgICAgICAgICAgICAgLy/nvJPlrZhDYW52YXPnu5jlm77ooajpnaLvvIznu5jliLbpgInpoblcclxuICAgICAgICAgICAgICAgICAgICBtZS5fYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKENvbnN0YW50cy5BREQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZS5fc3RhdHVzID0gU3RhdHVzLldBSVRJTkc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9wYWludCgpOyAgICAgICAgICAgICAgICAgICAgICAgLy/mgaLlpI1DYW52YXPnu5jlm77ooajpnaLvvIznu5jliLbpgInpoblcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5XQUlUSU5HO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W+queOr+iwg+eUqOiHquW3se+8jOi/m+ihjOe7mOeUu1xyXG4gICAgICAgICAgICBpZiAobWUuX3N0YXR1cyAhPSBTdGF0dXMuU1RPUCkge1xyXG4gICAgICAgICAgICAgICAgbWUuX2FuaW1hdGlvbkZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZShwYWludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6+572u5Yid5aeL54q25oCB77yM5byA5aeL57uY5Yi2XHJcbiAgICAgICAgbWUuX3N0YXR1cyA9IFN0YXR1cy5TVEVQMTtcclxuICAgICAgICBwYWludCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICog57yT5Yqo5pWI5p6cXHJcbiAgICAgKi9cclxuICAgIF90d2VlbkNhbGxCYWNrICh0YXJnZXQsIHJlc3VsdEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5fdHdlZW5Qb3NpdGlvbldpZHRoID0gcmVzdWx0QXJyYXlbMF07XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFydC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYXJ0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBBeGlzQ2hhcnRJbmZvQmFzZV9JbiBmcm9tICcuLi8uLi8uLi9iYXNlL2luZm8vQXhpc0NoYXJ0SW5mb0Jhc2VfSW4uanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0SW5mb19JbiBleHRlbmRzIEF4aXNDaGFydEluZm9CYXNlX0luIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLmFyZWFGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zbW9vdGhGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93TWFya1BvaW50ID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vLi4vc3VwcG9ydC9TdGF0dXMuanMnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvU3R5bGVzLmpzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9zdXBwb3J0L0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvVXRpbGl0eS5qcyc7XHJcblxyXG5pbXBvcnQgTGluZSBmcm9tICcuLi9zdXBwb3J0L0xpbmUuanMnO1xyXG5pbXBvcnQgQmV6aWVyIGZyb20gJy4uL3N1cHBvcnQvQmV6aWVyLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy9QYWludGVy5Lit5peg5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY2hhcnQ7ICAgICAgICAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eDsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2U7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQmFrO1xyXG4gICAgICAgIHRoaXMuX2N0eEJhazsgICAgICAgICAgICAgICAgICAgICAvL0NhbnZhc+S4iuS4i+aWh1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2VCYWs7ICAgICAgICAgICAgLy9DYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luOyAgICAgICAgICAgICAvL+WbvuihqOWQhOexu+aVsOaNriBcclxuICAgICAgICB0aGlzLl9jQXhpc0luZm9fSW47XHJcbiAgICAgICAgdGhpcy5fY0F4aXNJbmZvX091dDsgICAgICAgICAgICAvL+aVsOWAvOi9tOi+k+WFpeOAgei+k+WHuuaVsOaNrlxyXG4gICAgICAgIHRoaXMuX3ZBeGlzSW5mb19JbjtcclxuICAgICAgICB0aGlzLl92QXhpc0luZm9fT3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtQXJyYXk7ICAgICAgICAgICAgICAgIC8v5a2Y5YKo5pWj54K555qE5pWw57uEXHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtQXJyYXkgPSBbXTsgICAgLy/lrZjlgqjmipjnur/ngrnnmoTmlbDnu4RcclxuXHJcbiAgICAgICAgdGhpcy5fdHdlZW5Qb3NpdGlvbkxlZnQ7ICAgICAgICAgLy/nvJPliqjmlYjmnpznm7jlhbNcclxuICAgICAgICB0aGlzLl90d2VlblBvc2l0aW9uV2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuX2xpbmUgPSBuZXcgTGluZSgpOyAgICAgICAgIC8v6K6h566X55u057q/5ZKM6LSd5aGe5bCU5puy57q/54K555qE5bel5YW357G7XHJcbiAgICAgICAgdGhpcy5fYmV6aWVyID0gbmV3IEJlemllcigpO1xyXG4gICAgICAgIHRoaXMuX3BvaW50cyA9IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K6h566X5ZCO55qE57q/5LiK55qE5ZCE5Liq54K5XHJcblxyXG4gICAgICAgIHRoaXMuX2NoYXJ0UGl4ZWxXaWR0aDtcclxuICAgICAgICB0aGlzLl92QXhpc0xhYmVsQ291bnQ7ICAgICAgICAgIC8v5YC86L205pWw5a2X5qCH562+5Liq5pWwXHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2V0Q2hhcnQgKGNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5fY2hhcnQgPSBjaGFydDtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2hhcnQuX2NhbnZhcztcclxuICAgICAgICB0aGlzLl9jdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQmFrID0gY2hhcnQuX2NhbnZhc0JhaztcclxuICAgICAgICB0aGlzLl9jdHhCYWsgPSB0aGlzLl9jYW52YXNCYWsuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRJbmZvX0luID0gY2hhcnQuY2hhcnRJbmZvX0luO1xyXG4gICAgICAgIHRoaXMuX2NBeGlzSW5mb19JbiA9IGNoYXJ0LmNBeGlzSW5mb19JbjtcclxuICAgICAgICB0aGlzLl9jQXhpc0luZm9fT3V0ID0gY2hhcnQuX2NBeGlzSW5mb19PdXQ7XHJcbiAgICAgICAgdGhpcy5fdkF4aXNJbmZvX0luID0gY2hhcnQudkF4aXNJbmZvX0luO1xyXG4gICAgICAgIHRoaXMuX3ZBeGlzSW5mb19PdXQgPSBjaGFydC5fdkF4aXNJbmZvX091dDtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbUFycmF5ID0gY2hhcnQuX2l0ZW1BcnJheTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2hhcnRQaXhlbFdpZHRoID0gY2hhcnQuX2NoYXJ0UGl4ZWxXaWR0aDtcclxuXHJcbiAgICAgICAgLy/nvJPliqjmlYjmnpznm7jlhbNcclxuICAgICAgICB0aGlzLl90d2VlblBvc2l0aW9uTGVmdCA9IGNoYXJ0Ll90d2VlblBvc2l0aW9uTGVmdDtcclxuICAgICAgICB0aGlzLl90d2VlblBvc2l0aW9uV2lkdGggPSBjaGFydC5fdHdlZW5Qb3NpdGlvbldpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fY2hhcnRJbmZvX0luLnNlbGVjdGVkSW5kZXg7XHJcblxyXG4gICAgICAgIC8v6K6h566X5YC86L205qCH562+5Liq5pWw77yM5L6b5q2k5ZCO5L2/55SoXHJcbiAgICAgICAgdGhpcy5fdkF4aXNMYWJlbENvdW50ID0gTWF0aC5mbG9vcigodGhpcy5fdkF4aXNJbmZvX091dC5tYXhTY2FsZSAtIHRoaXMuX3ZBeGlzSW5mb19PdXQubWluU2NhbGUpIC8gdGhpcy5fdkF4aXNJbmZvX091dC5zY2FsZVVuaXQpICsgMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGFpbnQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGN0eEJhayA9IHRoaXMuX2N0eEJhayxcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHR3ZWVuUG9zaXRpb25MZWZ0ID0gdGhpcy5fdHdlZW5Qb3NpdGlvbkxlZnQsXHJcbiAgICAgICAgICAgIHR3ZWVuUG9zaXRpb25XaWR0aCA9IHRoaXMuX3R3ZWVuUG9zaXRpb25XaWR0aCxcclxuICAgICAgICAgICAgY2hhcnRJbmZvX0luID0gdGhpcy5fY2hhcnRJbmZvX0luO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2NoYXJ0Ll9zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDE6ICAgICAgICAgLy/nu5jliLblm77ooajlubbnvJPlrZhDYW52YXPnu5jlm77ooajpnaJcclxuXHJcbiAgICAgICAgICAgICAgICAvL+a4heepuueUu+W4g1xyXG4gICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGN0eEJhay5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lnKhfY3R45LiK57uY5Yi25Zu+6KGo5Zu65a6a55qE5YaF5a65XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFRpdGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExlZ2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludEF4aXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGFiZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50QXhpc05hbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e8k+WtmOatpOaXtueahF9jdHjnu5jlm77ooajpnaLvvIjlhajlsLrlr7jvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc1N1cmZhY2UgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5bCG57yT5a2Y55qE57uY5Zu+6KGo6Z2i57uY5Yi25YiwX2N0eEJha+S4ilxyXG4gICAgICAgICAgICAgICAgY3R4QmFrLnB1dEltYWdlRGF0YSh0aGlzLl9jYW52YXNTdXJmYWNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WcqF9jdHhCYWvkuIrnu5jliLbmipjnur9cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TGluZU9yQmV6aWVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lnKhfY3R4QmFr5LiK57uY5Yi25qCH6K6w54K5XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhcnRJbmZvX0luLnNob3dNYXJrUG9pbnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50TWFya1BvaW50cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuU1RFUDI6ICAgICAgICAgLy/nu5jliLbnvJPliqjmlYjmnpxcclxuXHJcbiAgICAgICAgICAgICAgICAvL+aBouWkjXRoaXMuX2N0eOeahOe7mOWbvuihqOmdolxyXG4gICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLl9jYW52YXNTdXJmYWNlLCAwLCAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy/ku45fY3R4QmFr5LiK5Y+W5b6X5oyH5a6a5Yy65Z+f55qE57uY5Zu+6KGo6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNTdXJmYWNlQmFrID0gY3R4QmFrLmdldEltYWdlRGF0YSh0d2VlblBvc2l0aW9uTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuUG9zaXRpb25XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5bCG5Y+W5b6X55qE57uY5Zu+6KGo6Z2i57uY5Yi25ZyoX2N0eOS4ilxyXG4gICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLl9jYW52YXNTdXJmYWNlQmFrLCB0d2VlblBvc2l0aW9uTGVmdCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFN0YXR1cy5TVEVQMzogICAgICAgICAvL+e8k+WtmENhbnZhc+e7mOWbvuihqOmdou+8iOWujOaVtOeahOWbvuihqO+8iVxyXG5cclxuICAgICAgICAgICAgICAgIC8v57yT5a2Y5q2k5pe255qEX2N0eOe7mOWbvuihqOmdou+8iOWFqOWwuuWvuO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzU3VyZmFjZSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/nu5jliLbpgInmi6npoblcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhaW50U2VsZWN0b3IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlNURVA0OiAgICAgICAgIC8v57uY5Yi26YCJ5oup6aG5XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mgaLlpI1fY3R455qE57uY5Zu+6KGo6Z2iXHJcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuX2NhbnZhc1N1cmZhY2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v57uY5Yi26YCJ5oup6aG5XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludFNlbGVjdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgX3BhaW50VGl0bGUgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbjtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuVElUTEVfRk9OVDtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fTEVGVDtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuICAgICAgICBjdHguZmlsbFRleHQoY2hhcnRJbmZvX0luLnRpdGxlLCBjaGFydEluZm9fSW4udGl0bGVMZWZ0LCBjaGFydEluZm9fSW4udGl0bGVUb3ApO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfcGFpbnRMZWdlbmQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgc2VyaWVzID0gY2hhcnRJbmZvX0luLnNlcmllcyxcclxuICAgICAgICAgICAgY29sb3JzID0gY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgdywgaCxcclxuICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgaSwgbGVuLFxyXG4gICAgICAgICAgICBzdHI7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5paH5a2X5qC35byPXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuTEVHRU5EX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0xFRlQ7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IENvbnN0YW50cy5URVhUX0JBU0VfTElORV9UT1A7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5paH5a2X6auY5bqmXHJcbiAgICAgICAgaCA9IFV0aWxpdHkuZ2V0VGV4dEhlaWdodChjdHgpO1xyXG5cclxuICAgICAgICAvL+iuoeeul+acgOWQjuS4gOS4quWbvuS+i+aWh+Wtl+eahOe7k+adn+eCuVxyXG4gICAgICAgIHggPSB0aGlzLl9jYW52YXMud2lkdGggLSBjaGFydEluZm9fSW4ubGVnZW5kUmlnaHQ7XHJcblxyXG4gICAgICAgIC8v6YCG5bqP5L6d5qyh57uY5Yi25Zu+5L6L5paH5a2X5ZKM6Imy5Z2XXHJcbiAgICAgICAgbGVuID0gc2VyaWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAvL+WbvuS+i+aVsOaNrlxyXG4gICAgICAgICAgICBzdHIgPSBzZXJpZXNbaV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8v5qC55o2u5Zu+5L6L5paH5a2X5a695bqm6K6h566X5paH5a2X6LW35aeL5L2N572uXHJcbiAgICAgICAgICAgIHcgPSBjdHgubWVhc3VyZVRleHQoc3RyKS53aWR0aDtcclxuICAgICAgICAgICAgeCAtPSB3O1xyXG5cclxuICAgICAgICAgICAgLy/nu5jliLbmloflrZdcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFN0eWxlcy5GT05UX0ZJTExfQ09MT1I7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChzdHIsIHgsIGNoYXJ0SW5mb19Jbi5sZWdlbmRUb3ApO1xyXG5cclxuICAgICAgICAgICAgLy/orqHnrpfoibLlnZfkvY3nva5cclxuICAgICAgICAgICAgeCAtPSBTdHlsZXMuTEVHRU5EX1NIQVBFX1RFWFRfR0FQICsgaDtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi26Imy5Z2XXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh4LCBjaGFydEluZm9fSW4ubGVnZW5kVG9wLCBoLCBoKTtcclxuXHJcbiAgICAgICAgICAgIC8v6Ze06ZqUXHJcbiAgICAgICAgICAgIHggLT0gU3R5bGVzLkxFR0VORF9HQVA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfcGFpbnRHcmlkICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIHNjYWxlVW5pdFNpemUgPSB0aGlzLl92QXhpc0luZm9fT3V0LnNjYWxlVW5pdFNpemUsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB2QXhpc0xhYmVsQ291bnQgPSB0aGlzLl92QXhpc0xhYmVsQ291bnQsXHJcbiAgICAgICAgICAgIHgxLCB4MiwgeTEsXHJcbiAgICAgICAgICAgIG51bSxcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7moLflvI9cclxuICAgICAgICBjdHgubGluZVdpZHRoID0gU3R5bGVzLkdSSURfTElORV9XSURUSDtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBTdHlsZXMuR1JJRF9MSU5FX0NPTE9SO1xyXG4gICAgICAgIGN0eC5zZXRMaW5lRGFzaChTdHlsZXMuR1JJRF9MSU5FX0RBU0gpO1xyXG5cclxuICAgICAgICAvL+e7mOWItuaoquWQkeiZmue6v1xyXG4gICAgICAgIHgxID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0O1xyXG4gICAgICAgIHgyID0gY2FudmFzV2lkdGggLSBjaGFydEluZm9fSW4uYm9keVJpZ2h0O1xyXG4gICAgICAgIG51bSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdkF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgeTEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG51bSAtIHNjYWxlVW5pdFNpemUgKiBpKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHgyLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9wYWludEF4aXMgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQgPSB0aGlzLl9jQXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0ID0gdGhpcy5fdkF4aXNJbmZvX091dCxcclxuXHJcbiAgICAgICAgICAgIG9yaWdpblBvc2l0aW9uID0gdGhpcy5fdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbixcclxuXHJcbiAgICAgICAgICAgIHZBeGlzTGFiZWxDb3VudCA9IHRoaXMuX3ZBeGlzTGFiZWxDb3VudCxcclxuXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcnlzID0gdGhpcy5fY0F4aXNJbmZvX0luLmNhdGVnb3J5cyxcclxuXHJcbiAgICAgICAgICAgIGludGVnZXIsXHJcbiAgICAgICAgICAgIG51bSxcclxuXHJcbiAgICAgICAgICAgIHgxLCB4MiwgeTEsIHkyLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8vKDEp6K6+572u5qC35byPXHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IFN0eWxlcy5BWElTX0xJTkVfV0lEVEg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gU3R5bGVzLkFYSVNfTElORV9DT0xPUjtcclxuXHJcbiAgICAgICAgLy8oMinnu5jliLbmqKrovbRcclxuICAgICAgICB4MSA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCAtIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOyAgICAgICAgICAgICAgICAgICAgLy/mqKrlkJHotbfngrlcclxuICAgICAgICB4MiA9IGNhbnZhc1dpZHRoIC0gY2hhcnRJbmZvX0luLmJvZHlSaWdodCArIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOyAgICAvL+aoquWQkee7iOeCuVxyXG5cclxuICAgICAgICAvL+iuoeeul+WAvOi9tOWOn+eCuVnlnZDmoIdcclxuICAgICAgICB5MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24ob3JpZ2luUG9zaXRpb24pO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vKDMp57uY5Yi25qiq6L205Yi75bqmXHJcbiAgICAgICAgeTIgPSB5MSArIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFO1xyXG4gICAgICAgIGludGVnZXIgPSBjQXhpc0luZm9fT3V0LmludGVydmFsICsgMTtcclxuXHJcbiAgICAgICAgbGVuID0gY2F0ZWdvcnlzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IGludGVnZXIpIHtcclxuICAgICAgICAgICAgeDEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCArIGNBeGlzSW5mb19PdXQuY2F0ZWdvcnlTaXplICogaSk7XHJcblxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyg0Kee7mOWItue6tei9tFxyXG4gICAgICAgIHgxID0gVXRpbGl0eS5hZGp1c3RQb3NpdGlvbihjaGFydEluZm9fSW4uYm9keUxlZnQpO1xyXG4gICAgICAgIHkxID0gY2hhcnRJbmZvX0luLmJvZHlUb3AgLSBTdHlsZXMuQVhJU19TQ0FMRV9VTklUX0xJTkVfU0laRTtcclxuICAgICAgICB5MiA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tICsgU3R5bGVzLkFYSVNfU0NBTEVfVU5JVF9MSU5FX1NJWkU7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8oNSnnu5jliLbnurXovbTliLvluqZcclxuICAgICAgICB4MSA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCAtIFN0eWxlcy5BWElTX1NDQUxFX1VOSVRfTElORV9TSVpFO1xyXG4gICAgICAgIHgyID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0O1xyXG4gICAgICAgIG51bSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdkF4aXNMYWJlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgeTEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKG51bSAtIHZBeGlzSW5mb19PdXQuc2NhbGVVbml0U2l6ZSAqIGkpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3BhaW50TGFiZWwgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcblxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcblxyXG4gICAgICAgICAgICBjQXhpc0luZm9fSW4gPSB0aGlzLl9jQXhpc0luZm9fSW4sXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQgPSB0aGlzLl9jQXhpc0luZm9fT3V0LFxyXG5cclxuICAgICAgICAgICAgdkF4aXNJbmZvX0luID0gdGhpcy5fdkF4aXNJbmZvX0luLFxyXG4gICAgICAgICAgICB2QXhpc0luZm9fT3V0ID0gdGhpcy5fdkF4aXNJbmZvX091dCxcclxuXHJcbiAgICAgICAgICAgIHZBeGlzTGFiZWxDb3VudCA9IHRoaXMuX3ZBeGlzTGFiZWxDb3VudCxcclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3J5cyA9IGNBeGlzSW5mb19Jbi5jYXRlZ29yeXMsXHJcblxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG5cclxuICAgICAgICAgICAgeDEsIHkxLCB5MixcclxuICAgICAgICAgICAgaW50ZWdlciwgbnVtLCBzdHIsXHJcbiAgICAgICAgICAgIGFuZ2xlLFxyXG4gICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8vKDEp6K6+572u5paH5pys5qC35byPXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuTEFCRUxfRk9OVDtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX01JRERMRTtcclxuXHJcbiAgICAgICAgLy8oMinnu5jliLbmqKrovbTmoIfnrb5cclxuICAgICAgICBhbmdsZSA9IGNBeGlzSW5mb19Jbi5sYWJlbFJvdGF0ZSAlIDM2MDtcclxuICAgICAgICBsZW4gPSBjYXRlZ29yeXMubGVuZ3RoO1xyXG4gICAgICAgIGludGVnZXIgPSBjQXhpc0luZm9fT3V0LmludGVydmFsICsgMTtcclxuXHJcbiAgICAgICAgaWYgKGFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgLy/orr7nva7mlofmnKzmqKrlkJHlr7npvZDmlrnlvI9cclxuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0NFTlRFUjtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi25paH5pysXHJcbiAgICAgICAgICAgIHkxID0gY2FudmFzSGVpZ2h0IC0gY2hhcnRJbmZvX0luLmJvZHlCb3R0b20gKyBTdHlsZXMuWEFYSVNfTEFCRUxfT0ZGU0VUO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IGludGVnZXIpIHtcclxuICAgICAgICAgICAgICAgIHgxID0gY2hhcnRJbmZvX0luLmJvZHlMZWZ0ICsgY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUgKiBpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGNhdGVnb3J5c1tpXSwgeDEsIHkxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+i9rOaNouS4uuW8p+W6plxyXG4gICAgICAgICAgICBhbmdsZSA9IC1hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcblxyXG4gICAgICAgICAgICAvL+iuvue9ruaWh+acrOaoquWQkeWvuem9kOaWueW8j1xyXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gQ29uc3RhbnRzLlRFWFRfQUxJR05fUklHSFQ7XHJcblxyXG4gICAgICAgICAgICAvL+e7mOWItuaWh+acrFxyXG4gICAgICAgICAgICB5MSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tICsgU3R5bGVzLlhBWElTX0xBQkVMX09GRlNFVF9GT1JfUk9UQVRFO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IGludGVnZXIpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgeDEgPSBjaGFydEluZm9fSW4uYm9keUxlZnQgKyBjQXhpc0luZm9fT3V0LmNhdGVnb3J5U2l6ZSAqIGk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHgxLCB5MSk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjYXRlZ29yeXNbaV0sIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iOt+WPluaXi+i9rOinkuW6plxyXG4gICAgICAgIGFuZ2xlID0gdkF4aXNJbmZvX0luLmxhYmVsUm90YXRlICUgMzYwO1xyXG5cclxuICAgICAgICAvL+iuvue9ruaWh+acrOaoquWQkeWvuem9kOaWueW8j1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBDb25zdGFudHMuVEVYVF9BTElHTl9SSUdIVDtcclxuXHJcbiAgICAgICAgLy/nu5jliLbmlofmnKxcclxuICAgICAgICB4MSA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdCAtIFN0eWxlcy5ZQVhJU19MQUJFTF9PRkZTRVQ7XHJcbiAgICAgICAgeTEgPSBjYW52YXNIZWlnaHQgLSBjaGFydEluZm9fSW4uYm9keUJvdHRvbTtcclxuICAgICAgICBpZiAoYW5nbGUgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZBeGlzTGFiZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB5MiA9IHkxIC0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplICogaTtcclxuICAgICAgICAgICAgICAgIG51bSA9IHZBeGlzSW5mb19PdXQubWluU2NhbGUgKyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh2QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCB4MSwgeTIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v6L2s5o2i5Li65byn5bqmXHJcbiAgICAgICAgICAgIGFuZ2xlID0gLWFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuXHJcbiAgICAgICAgICAgIC8v57uY5Yi25paH5pysXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2QXhpc0xhYmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB5MiA9IHkxIC0gdkF4aXNJbmZvX091dC5zY2FsZVVuaXRTaXplICogaTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoeDEsIHkyKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIG51bSA9IHZBeGlzSW5mb19PdXQubWluU2NhbGUgKyB2QXhpc0luZm9fT3V0LnNjYWxlVW5pdCAqIGk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBudW0udG9GaXhlZCh2QXhpc0luZm9fT3V0LmRlY2ltYWxEaWdpdCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc3RyLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3BhaW50QXhpc05hbWUgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9jdHgsXHJcbiAgICAgICAgICAgIGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHgsIHk7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5paH5a2X5qC35byPXHJcbiAgICAgICAgY3R4LmZvbnQgPSBTdHlsZXMuQVhJU19OQU1FX0ZPTlQ7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IENvbnN0YW50cy5URVhUX0FMSUdOX0NFTlRFUjtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gQ29uc3RhbnRzLlRFWFRfQkFTRV9MSU5FX1RPUDtcclxuXHJcbiAgICAgICAgLy/nu5jliLZ56L205Y2V5L2N5paH5a2XXHJcbiAgICAgICAgeCA9IGNoYXJ0SW5mb19Jbi5ib2R5TGVmdDtcclxuICAgICAgICB5ID0gY2hhcnRJbmZvX0luLnlBeGlzTmFtZVRvcDtcclxuICAgICAgICBjdHguZmlsbFRleHQoY2hhcnRJbmZvX0luLnlBeGlzTmFtZSwgeCwgeSk7XHJcblxyXG4gICAgICAgIC8v57uY5Yi2WOi9tOWNleS9jeaWh+Wtl1xyXG4gICAgICAgIHggPSBjYW52YXNXaWR0aCAtIGNoYXJ0SW5mb19Jbi5ib2R5UmlnaHQ7XHJcbiAgICAgICAgeSA9IGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi54QXhpc05hbWVCb3R0b207XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGNoYXJ0SW5mb19Jbi54QXhpc05hbWUsIHgsIHkpO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludExpbmVPckJlemllciAoKSB7XHJcbiAgICAgICAgbGV0IGNoYXJ0SW5mb19JbiA9IHRoaXMuX2NoYXJ0SW5mb19JbixcclxuICAgICAgICAgICAgZmlsdGVyZWRJdGVtQXJyYXkgPSB0aGlzLl9maWx0ZXJlZEl0ZW1BcnJheSxcclxuICAgICAgICAgICAgY2hhcnRQaXhlbFdpZHRoID0gdGhpcy5fY2hhcnRQaXhlbFdpZHRoO1xyXG5cclxuICAgICAgICAvL+i/h+a7pOaVsOaNru+8iOWwhui/h+WkmueahOaVsOaNruaMieeFp+WDj+e0oOS4uuWNleS9jei/m+ihjOi/h+a7pO+8iVxyXG4gICAgICAgIHRoaXMuX2ZpbHRlckl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8v5qC55o2u6L+H5ruk5ZCO55qE5pWw5o2u57uY5Yi25oqY57q/XHJcbiAgICAgICAgaWYgKGNoYXJ0SW5mb19Jbi5hcmVhRmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFydEluZm9fSW4uc21vb3RoRmxhZyA9PSB0cnVlICYmIGZpbHRlcmVkSXRlbUFycmF5WzBdLmxlbmd0aCA8IGNoYXJ0UGl4ZWxXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRTbW9vdGhBcmVhKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludEFyZWEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFydEluZm9fSW4uc21vb3RoRmxhZyA9PSB0cnVlICYmIGZpbHRlcmVkSXRlbUFycmF5WzBdLmxlbmd0aCA8IGNoYXJ0UGl4ZWxXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFpbnRTbW9vdGhMaW5lKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWludExpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRMaW5lICgpIHtcclxuICAgICAgICBsZXQgY3R4QmFrID0gdGhpcy5fY3R4QmFrLFxyXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1BcnJheSA9IHRoaXMuX2ZpbHRlcmVkSXRlbUFycmF5LFxyXG4gICAgICAgICAgICBsaW5lID0gdGhpcy5fbGluZSxcclxuICAgICAgICAgICAgY29sb3JzID0gdGhpcy5fY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgcG9pbnRzID0gdGhpcy5fcG9pbnRzLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIGksIGosIGssIGxlbjEsIGxlbjIsIGxlbjM7XHJcblxyXG4gICAgICAgIC8v6K6+572u5YWx5ZCM5qC35byPXHJcbiAgICAgICAgY3R4QmFrLmxpbmVXaWR0aCA9IFN0eWxlcy5MSU5FX0xJTkVfV0lEVEg7XHJcblxyXG4gICAgICAgIC8v5b6q546v57O75YiXXHJcbiAgICAgICAgbGVuMSA9IGZpbHRlcmVkSXRlbUFycmF5Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u6K+l57O75YiX5oqY546w6aKc6ImyXHJcbiAgICAgICAgICAgIGN0eEJhay5zdHJva2VTdHlsZSA9IGNvbG9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8v5bCG5Y6f5aeL5oqY57q/54K55qC55o2uJ+iEj+aVsOaNruagh+iusCfov5vooYzliIbnu4RcclxuICAgICAgICAgICAgcG9pbnRzID0gbGluZS5zZWdtZW50KGZpbHRlcmVkSXRlbUFycmF5W2ldKTtcclxuXHJcbiAgICAgICAgICAgIC8v5b6q546v6K+l57O75YiX5omA5pyJ54mH5q61XHJcbiAgICAgICAgICAgIGxlbjIgPSBwb2ludHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIgPSBwb2ludHNbal07XHJcbiAgICAgICAgICAgICAgICBsZW4zID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGVuMyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v56e75Yqo5Yiw56ys5LiA5Liq54K5XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGFyclswXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsubW92ZVRvKGl0ZW0ueCwgaXRlbS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov57mjqXmipjnur9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwgbGVuMzsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBhcnJba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eEJhay5saW5lVG8oaXRlbS54LCBpdGVtLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuMyA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5maWxsU3R5bGUgPSBTdHlsZXMuTElORV9NQVJLUE9JTlRfQkFLX0NPTE9SO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBhcnJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmFyYyhpdGVtLngsIGl0ZW0ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3R5bGVzLkxJTkVfTUFSS1BPSU5UX1JBRElVUyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eEJhay5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50U21vb3RoTGluZSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eEJhayA9IHRoaXMuX2N0eEJhayxcclxuICAgICAgICAgICAgZmlsdGVyZWRJdGVtQXJyYXkgPSB0aGlzLl9maWx0ZXJlZEl0ZW1BcnJheSxcclxuICAgICAgICAgICAgYmV6aWVyID0gdGhpcy5fYmV6aWVyLFxyXG4gICAgICAgICAgICBjb2xvcnMgPSB0aGlzLl9jaGFydEluZm9fSW4uY29sb3JzLFxyXG4gICAgICAgICAgICBwb2ludHMgPSB0aGlzLl9wb2ludHMsXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgaSwgaiwgaywgbGVuMSwgbGVuMiwgbGVuMztcclxuXHJcbiAgICAgICAgY3R4QmFrLnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7lhbHlkIzmoLflvI9cclxuICAgICAgICBjdHhCYWsubGluZVdpZHRoID0gU3R5bGVzLkxJTkVfTElORV9XSURUSDtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/ns7vliJdcclxuICAgICAgICBsZW4xID0gZmlsdGVyZWRJdGVtQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgLy/orr7nva7or6Xns7vliJfmipjnjrDpopzoibJcclxuICAgICAgICAgICAgY3R4QmFrLnN0cm9rZVN0eWxlID0gY29sb3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy/lsIbljp/lp4vmipjnur/ngrnmoLnmja4n6ISP5pWw5o2u5qCH6K6wJ+i/m+ihjOWIhue7hFxyXG4gICAgICAgICAgICBwb2ludHMgPSBiZXppZXIuc2VnbWVudChmaWx0ZXJlZEl0ZW1BcnJheVtpXSk7XHJcblxyXG4gICAgICAgICAgICAvL+W+queOr+ivpeezu+WIl+aJgOacieeJh+autVxyXG4gICAgICAgICAgICBsZW4yID0gcG9pbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYXJyID0gcG9pbnRzW2pdO1xyXG4gICAgICAgICAgICAgICAgbGVuMyA9IGFyci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxlbjMgPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLm1vdmVUbyhhcnJbMF0ueCwgYXJyWzBdLnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwgbGVuMzsgayArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eEJhay5iZXppZXJDdXJ2ZVRvKGFycltrXS54LCBhcnJba10ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycltrICsgMV0ueCwgYXJyW2sgKyAxXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2sgKyAyXS54LCBhcnJbayArIDJdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZW4zID09IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGFyclswXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsubW92ZVRvKGl0ZW0ueCwgaXRlbS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGFyclsxXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsubGluZVRvKGl0ZW0ueCwgaXRlbS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuMyA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5maWxsU3R5bGUgPSBTdHlsZXMuTElORV9NQVJLUE9JTlRfQkFLX0NPTE9SO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGFyclswXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuYXJjKGl0ZW0ueCwgaXRlbS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdHlsZXMuTElORV9NQVJLUE9JTlRfUkFESVVTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eEJhay5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50QXJlYSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eEJhayA9IHRoaXMuX2N0eEJhayxcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dCA9IHRoaXMuX3ZBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbUFycmF5ID0gdGhpcy5fZmlsdGVyZWRJdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGxpbmUgPSB0aGlzLl9saW5lLFxyXG4gICAgICAgICAgICBjb2xvcnMgPSB0aGlzLl9jaGFydEluZm9fSW4uY29sb3JzLFxyXG4gICAgICAgICAgICBwb2ludHMgPSB0aGlzLl9wb2ludHMsXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgaSwgaiwgaywgbGVuMSwgbGVuMiwgbGVuMztcclxuXHJcbiAgICAgICAgY3R4QmFrLnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7lhbHlkIzmoLflvI9cclxuICAgICAgICBjdHhCYWsuZ2xvYmFsQWxwaGEgPSBTdHlsZXMuTElORV9BUkVBX0FMUEhBO1xyXG5cclxuICAgICAgICAvL+mAhuW6j+W+queOr+ezu+WIl1xyXG4gICAgICAgIGxlbjEgPSBmaWx0ZXJlZEl0ZW1BcnJheS5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gbGVuMSAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIC8v6K6+572u6K+l57O75YiX5oqY57q/6aKc6ImyXHJcbiAgICAgICAgICAgIGN0eEJhay5maWxsU3R5bGUgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGN0eEJhay5zdHJva2VTdHlsZSA9IGNvbG9yc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8v5bCG5Y6f5aeL5oqY57q/54K55qC55o2uJ+iEj+aVsOaNruagh+iusCfov5vooYzliIbnu4RcclxuICAgICAgICAgICAgcG9pbnRzID0gbGluZS5zZWdtZW50KGZpbHRlcmVkSXRlbUFycmF5W2ldKTtcclxuXHJcbiAgICAgICAgICAgIC8v5b6q546v6K+l57O75YiX5omA5pyJ54mH5q61XHJcbiAgICAgICAgICAgIGxlbjIgPSBwb2ludHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIgPSBwb2ludHNbal07XHJcbiAgICAgICAgICAgICAgICBsZW4zID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGVuMyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v56e75Yqo5Yiw56ys5LiA5Liq54K5XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGFyclswXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsubW92ZVRvKGl0ZW0ueCwgaXRlbS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov57mjqXmipjnur9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwgbGVuMzsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBhcnJba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eEJhay5saW5lVG8oaXRlbS54LCBpdGVtLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov57mjqXmipjnur/kuKTkuKrnq6/ngrnlnKjovbTkuIrnmoTmmKDlsITngrlcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsubGluZVRvKGFycltsZW4zIC0gMV0ueCwgdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmxpbmVUbyhhcnJbMF0ueCwgdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuMyA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5maWxsU3R5bGUgPSBTdHlsZXMuTElORV9NQVJLUE9JTlRfQkFLX0NPTE9SO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGFyclswXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuYXJjKGl0ZW0ueCwgaXRlbS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdHlsZXMuTElORV9NQVJLUE9JTlRfUkFESVVTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eEJhay5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3BhaW50U21vb3RoQXJlYSAoKSB7XHJcbiAgICAgICAgbGV0IGN0eEJhayA9IHRoaXMuX2N0eEJhayxcclxuICAgICAgICAgICAgdkF4aXNJbmZvX091dCA9IHRoaXMuX3ZBeGlzSW5mb19PdXQsXHJcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbUFycmF5ID0gdGhpcy5fZmlsdGVyZWRJdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGJlemllciA9IHRoaXMuX2JlemllcixcclxuICAgICAgICAgICAgY29sb3JzID0gdGhpcy5fY2hhcnRJbmZvX0luLmNvbG9ycyxcclxuICAgICAgICAgICAgcG9pbnRzID0gdGhpcy5fcG9pbnRzLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIGksIGosIGssIGxlbjEsIGxlbjIsIGxlbjM7XHJcblxyXG4gICAgICAgIGN0eEJhay5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5YWx5ZCM5qC35byPXHJcbiAgICAgICAgY3R4QmFrLmdsb2JhbEFscGhhID0gU3R5bGVzLkxJTkVfQVJFQV9BTFBIQTtcclxuXHJcbiAgICAgICAgLy/pgIbluo/lvqrnjq/ns7vliJdcclxuICAgICAgICBsZW4xID0gZmlsdGVyZWRJdGVtQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IGxlbjEgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAvL+iuvue9ruivpeezu+WIl+aKmOe6v+minOiJslxyXG4gICAgICAgICAgICBjdHhCYWsuZmlsbFN0eWxlID0gY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBjdHhCYWsuc3Ryb2tlU3R5bGUgPSBjb2xvcnNbaV07XHJcblxyXG4gICAgICAgICAgICAvL+WwhuWOn+Wni+aKmOe6v+eCueagueaNrifohI/mlbDmja7moIforrAn6L+b6KGM5YiG57uEXHJcbiAgICAgICAgICAgIHBvaW50cyA9IGJlemllci5zZWdtZW50KGZpbHRlcmVkSXRlbUFycmF5W2ldKTtcclxuXHJcbiAgICAgICAgICAgIC8v5b6q546v6K+l57O75YiX5omA5pyJ54mH5q61XHJcbiAgICAgICAgICAgIGxlbjIgPSBwb2ludHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIgPSBwb2ludHNbal07XHJcbiAgICAgICAgICAgICAgICBsZW4zID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGVuMyA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+enu+WKqOWIsOesrOS4gOS4queCuVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5tb3ZlVG8oYXJyWzBdLngsIGFyclswXS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov57mjqXmm7Lnur9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwgbGVuMzsgayArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eEJhay5iZXppZXJDdXJ2ZVRvKGFycltrXS54LCBhcnJba10ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycltrICsgMV0ueCwgYXJyW2sgKyAxXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2sgKyAyXS54LCBhcnJbayArIDJdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov57mjqXmm7Lnur/kuKTkuKrnq6/ngrnlnKjovbTkuIrnmoTmmKDlsITngrlcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsubGluZVRvKGFycltsZW4zIC0gMV0ueCwgdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmxpbmVUbyhhcnJbMF0ueCwgdkF4aXNJbmZvX091dC5vcmlnaW5Qb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuMyA9PSAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov57mjqXnm7Tnur/nmoTkuKTkuKrngrlcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gYXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5tb3ZlVG8oaXRlbS54LCBpdGVtLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBhcnJbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmxpbmVUbyhpdGVtLngsIGl0ZW0ueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v6L+e5o6l55u057q/5Lik5Liq56uv54K55Zyo6L205LiK55qE5pig5bCE54K5XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmxpbmVUbyhpdGVtLngsIHZBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBhcnJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmxpbmVUbyhpdGVtLngsIHZBeGlzSW5mb19PdXQub3JpZ2luUG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZW4zID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmZpbGxTdHlsZSA9IFN0eWxlcy5MSU5FX01BUktQT0lOVF9CQUtfQ09MT1I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gYXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5hcmMoaXRlbS54LCBpdGVtLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0eWxlcy5MSU5FX01BUktQT0lOVF9SQURJVVMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4QmFrLnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFpbnRNYXJrUG9pbnRzICgpIHtcclxuICAgICAgICBsZXQgY3R4QmFrID0gdGhpcy5fY3R4QmFrLFxyXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1BcnJheSA9IHRoaXMuX2ZpbHRlcmVkSXRlbUFycmF5LFxyXG4gICAgICAgICAgICBjb2xvcnMgPSB0aGlzLl9jaGFydEluZm9fSW4uY29sb3JzLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBhcnIsXHJcbiAgICAgICAgICAgIGksIGosIGxlbjEsIGxlbjI7XHJcblxyXG4gICAgICAgIGN0eEJhay5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5YWx5ZCM5qC35byPXHJcbiAgICAgICAgY3R4QmFrLmxpbmVXaWR0aCA9IFN0eWxlcy5MSU5FX01BUktQT0lOVF9XSURUSDtcclxuICAgICAgICBjdHhCYWsuZmlsbFN0eWxlID0gU3R5bGVzLkxJTkVfTUFSS1BPSU5UX0JBS19DT0xPUjtcclxuXHJcbiAgICAgICAgLy/nlLvlnIbngrlcclxuICAgICAgICBsZW4xID0gZmlsdGVyZWRJdGVtQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgY3R4QmFrLnN0cm9rZVN0eWxlID0gY29sb3JzW2ldO1xyXG5cclxuICAgICAgICAgICAgYXJyID0gZmlsdGVyZWRJdGVtQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGxlbjIgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlGbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5hcmMoaXRlbS54LCBpdGVtLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0eWxlcy5MSU5FX01BUktQT0lOVF9SQURJVVMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHhCYWsuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eEJhay5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4QmFrLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHhCYWsucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYWludFNlbGVjdG9yICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY3R4LFxyXG4gICAgICAgICAgICBjaGFydEluZm9fSW4gPSB0aGlzLl9jaGFydEluZm9fSW4sXHJcbiAgICAgICAgICAgIGNBeGlzSW5mb19PdXQgPSB0aGlzLl9jQXhpc0luZm9fT3V0LFxyXG4gICAgICAgICAgICBpdGVtQXJyYXkgPSB0aGlzLl9pdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGNvbG9ycyA9IGNoYXJ0SW5mb19Jbi5jb2xvcnMsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4LFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBpLCBsZW4xLFxyXG4gICAgICAgICAgICB4MSwgeTEsIHkyO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL+eUu+WchueCuVxyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gU3R5bGVzLkxJTkVfTUFSS1BPSU5UX1dJRFRIO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gU3R5bGVzLkxJTkVfTUFSS1BPSU5UX0JBS19DT0xPUjtcclxuICAgICAgICAgICAgbGVuMSA9IGl0ZW1BcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtQXJyYXlbaV1bc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXJ0eUZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKGl0ZW0ueCwgaXRlbS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdHlsZXMuTElORV9NQVJLUE9JTlRfUkFESVVTICogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+eUu+e6v1xyXG4gICAgICAgICAgICB4MSA9IFV0aWxpdHkuYWRqdXN0UG9zaXRpb24oY2hhcnRJbmZvX0luLmJvZHlMZWZ0ICsgY0F4aXNJbmZvX091dC5jYXRlZ29yeVNpemUgKiBzZWxlY3RlZEluZGV4KTtcclxuICAgICAgICAgICAgeTEgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGNoYXJ0SW5mb19Jbi5ib2R5VG9wKTtcclxuICAgICAgICAgICAgeTIgPSBVdGlsaXR5LmFkanVzdFBvc2l0aW9uKGNhbnZhc0hlaWdodCAtIGNoYXJ0SW5mb19Jbi5ib2R5Qm90dG9tKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBTdHlsZXMuTElORV9TRUxFQ1RPUl9MSU5FX1dJRFRIO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBTdHlsZXMuTElORV9TRUxFQ1RPUl9MSU5FX0NPTE9SO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJJdGVtcyAoKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkSXRlbUFycmF5ID0gdGhpcy5fZmlsdGVyZWRJdGVtQXJyYXksXHJcbiAgICAgICAgICAgIGl0ZW1BcnJheSA9IHRoaXMuX2l0ZW1BcnJheSxcclxuICAgICAgICAgICAgY2hhcnRQaXhlbFdpZHRoID0gdGhpcy5fY2hhcnRQaXhlbFdpZHRoLFxyXG4gICAgICAgICAgICBvbmVQaXhlbFBvaW50Q291bnQsXHJcbiAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJbmlbDnu4RcclxuICAgICAgICBmaWx0ZXJlZEl0ZW1BcnJheS5sZW5ndGggPSAwO1xyXG4gICAgICAgIGxlbiA9IGl0ZW1BcnJheS5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbUFycmF5W2ldID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iuoeeul+S4gOS4quWDj+e0oOWGheimgee7mOWItuWHoOS4queCuVxyXG4gICAgICAgIG9uZVBpeGVsUG9pbnRDb3VudCA9IGl0ZW1BcnJheVswXS5sZW5ndGggLyBjaGFydFBpeGVsV2lkdGg7XHJcblxyXG4gICAgICAgIC8v5aaC5p6c5LiA5Liq5YOP57Sg5YaF6ZyA6KaB57uY5Yi255qE54K55pWw5aSa5LqOMeS4qu+8jOWImei/h+a7pFxyXG4gICAgICAgIGlmIChvbmVQaXhlbFBvaW50Q291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcihpdGVtQXJyYXlbaV0sIGZpbHRlcmVkSXRlbUFycmF5W2ldLCBvbmVQaXhlbFBvaW50Q291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1BcnJheVtpXSA9IGl0ZW1BcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2ZpbHRlciAoaXRlbXMsIGZpbHRlcmVkSXRlbXMsIG9uZVBpeGVsUG9pbnRDb3VudCkge1xyXG4gICAgICAgIGxldCBjaGFydFBpeGVsV2lkdGggPSB0aGlzLl9jaGFydFBpeGVsV2lkdGgsXHJcbiAgICAgICAgICAgIGluZGV4ID0gMCxcclxuICAgICAgICAgICAgcGl4ZWxJbmRleCA9IDEsXHJcbiAgICAgICAgICAgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBwbHVzQXJyID0gW10sIG1pbnVzQXJyID0gW10sIGRpcnR5QXJyID0gW10sXHJcbiAgICAgICAgICAgIGluZGV4RW5kLFxyXG4gICAgICAgICAgICBpdGVtO1xyXG5cclxuICAgICAgICAvL+W+queOr+i/h+a7pOaVsOaNrlxyXG4gICAgICAgIHdoaWxlIChwaXhlbEluZGV4IDwgY2hhcnRQaXhlbFdpZHRoKSB7XHJcblxyXG4gICAgICAgICAgICAvL+avj+asoeW+queOr+mDveimgeWIneWni+WMluebuOWFs+aVsOe7hFxyXG4gICAgICAgICAgICBwbHVzQXJyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIG1pbnVzQXJyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIGRpcnR5QXJyLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL+iuoeeul+W+queOr+S4iumZkOWAvOW5tuagoeato1xyXG4gICAgICAgICAgICBpbmRleEVuZCA9IE1hdGguZmxvb3Iob25lUGl4ZWxQb2ludENvdW50ICogcGl4ZWxJbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleEVuZCA+IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleEVuZCA9IGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WwhjHkuKrlg4/ntKDlhoXnmoTngrnliIbnsbvkuLrmraPlgLzjgIHotJ/lgLzjgIHml6DmlYjlgLxcclxuICAgICAgICAgICAgZm9yICg7IGluZGV4IDwgaW5kZXhFbmQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlGbGFnID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXJ0eUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwbHVzQXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnVzQXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5bCG6L+Z5LiA5YOP57Sg5YaF55qE5pyA5aSn5q2j5YC854K577yM5pyA5bCP6LSf5YC854K5IOaIluaXoOaViOWAvOeCueWtmOWFpeaVsOe7hOS4rVxyXG4gICAgICAgICAgICB0aGlzLl9zZXRGaWx0ZXJlZEl0ZW1BcnJheShwbHVzQXJyLCBtaW51c0FyciwgZGlydHlBcnIsIGZpbHRlcmVkSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgLy/lg4/ntKDngrnntKLlvJXliqDkuIDvvIzov5vooYzkuIvmrKHlvqrnjq9cclxuICAgICAgICAgICAgcGl4ZWxJbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX3NldEZpbHRlcmVkSXRlbUFycmF5IChwbHVzQXJyLCBtaW51c0FyciwgZGlydHlBcnIsIGZpbHRlcmVkSXRlbXMpIHtcclxuICAgICAgICBsZXQgcGx1c01heCA9IDAsXHJcbiAgICAgICAgICAgIG1pbnVzTWluID0gMCxcclxuICAgICAgICAgICAgcGx1c0luZGV4ID0gLTEsXHJcbiAgICAgICAgICAgIG1pbnVzSW5kZXggPSAtMSxcclxuICAgICAgICAgICAgaSwgbGVuLFxyXG4gICAgICAgICAgICBudW07XHJcblxyXG4gICAgICAgIC8v6K6h566X5q2j5YC855qE5pyA5aSn5YC8XHJcbiAgICAgICAgbGVuID0gcGx1c0Fyci5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bSA9IHBsdXNBcnJbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChudW0gPj0gcGx1c01heCkge1xyXG4gICAgICAgICAgICAgICAgcGx1c0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/orqHnrpfotJ/lgLznmoTmnIDlsI/lgLxcclxuICAgICAgICBsZW4gPSBtaW51c0Fyci5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bSA9IG1pbnVzQXJyW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAobnVtIDw9IG1pbnVzTWluKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lsIbmlbTmlbDmnIDlpKflgLzlkozotJ/mlbDmnIDlsI/lgLzlrZjlhaXmlbDnu4RcclxuICAgICAgICBpZiAocGx1c0luZGV4ICE9IC0xICYmIG1pbnVzSW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgLy/mr5TovoPmnIDlpKfmraPlgLzlkozmnIDlsI/otJ/lgLzlr7nlupTnmoRY5Z2Q5qCHXHJcbiAgICAgICAgICAgIGlmIChwbHVzQXJyW3BsdXNJbmRleF0ueCA8PSBtaW51c0FyclttaW51c0luZGV4XS54KSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2gocGx1c0FycltwbHVzSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChtaW51c0FyclttaW51c0luZGV4XSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2gobWludXNBcnJbbWludXNJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKHBsdXNBcnJbcGx1c0luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChwbHVzSW5kZXggIT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChwbHVzQXJyW3BsdXNJbmRleF0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKG1pbnVzSW5kZXggIT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChtaW51c0FyclttaW51c0luZGV4XSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlydHlBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGRpcnR5QXJyWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gIOWIqeeUqOmXreWMheWSjOeri+WNs+aJp+ihjOWHveaVsOWIm+W7uuWNleS+i1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuUGFpbnRlci5nZXRJbnN0YW5jZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5zdGFuY2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IFBhaW50ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxufSkoKTsiLCJpbXBvcnQgUGFydEJhc2UgZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC9DaGFydEJhc2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya1BvaW50IGV4dGVuZHMgUGFydEJhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3RhY2tOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdGFja1ZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU2VyaWVzQmFzZSBmcm9tICcuLi8uLi8uLi9iYXNlL3Nlcmllcy9TZXJpZXNCYXNlLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXMgZXh0ZW5kcyBTZXJpZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5YWs5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLnN0YWNrTmFtZSA9ICcnO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCZXppZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fY29lZmZpY2llbnQgPSAwLjU7ICAgLy/ns7vmlbAgICAgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZWdtZW50IChvcmlnaW5hbFBvaW50cykge1xyXG4gICAgICAgIGxldCBpLCBsZW4sXHJcbiAgICAgICAgICAgIHBvaW50LFxyXG4gICAgICAgICAgICBhcnIgPSBbXSxcclxuICAgICAgICAgICAgcG9pbnRzID0gW10sXHJcbiAgICAgICAgICAgIHNlZ21lbnRBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgLy/lvqrnjq/orr7nva7lkITkuKrngrnlnZDmoIdcclxuICAgICAgICBsZW4gPSBvcmlnaW5hbFBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvaW50ID0gb3JpZ2luYWxQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGlmIChwb2ludC5kaXJ0eUZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudEFyci5wdXNoKGFycik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7IHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5pyA5ZCO5LiA5qyhXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlZ21lbnRBcnIucHVzaChhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ovazmjaLkuLpCZXppZXLngrlcclxuICAgICAgICBwb2ludHMgPSB0aGlzLl9zZWdtZW50VG9CZXppZXIoc2VnbWVudEFycik7XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHBvaW50cztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog56eB5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgX3NlZ21lbnRUb0JlemllciAoc2VnbWVudEFycmF5KSB7XHJcbiAgICAgICAgbGV0IGksIGosIGxlbjEsIGxlbjIsXHJcbiAgICAgICAgICAgIGFyciA9IFtdLFxyXG4gICAgICAgICAgICBwb2ludHMgPSBbXSxcclxuICAgICAgICAgICAgc2VnbWVudCxcclxuICAgICAgICAgICAgY29udHJvbFBvaW50cztcclxuXHJcbiAgICAgICAgLy/lvqrnjq/orr7nva7lkITkuKrngrnlnZDmoIdcclxuICAgICAgICBsZW4xID0gc2VnbWVudEFycmF5Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyciA9IFtdO1xyXG4gICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudEFycmF5W2ldO1xyXG5cclxuICAgICAgICAgICAgbGVuMiA9IHNlZ21lbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobGVuMiA8IDMpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHNlZ21lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbjIgPj0gMykge1xyXG5cclxuICAgICAgICAgICAgICAgIGFyclswXSA9IHNlZ21lbnRbMF07ICAvL0HngrlcclxuICAgICAgICAgICAgICAgIGFyclsxXSA9IHNlZ21lbnRbMF07ICAvL0FC55qE56ys5LiA5Liq5o6n5Yi254K5XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjIgLSAyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRzID0gdGhpcy5fY29tcHV0ZUNvbnRybFBvaW50cyhzZWdtZW50W2pdLCBzZWdtZW50W2ogKyAxXSwgc2VnbWVudFtqICsgMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGNvbnRyb2xQb2ludHNbMF0pOyAgLy9BQueahOesrOS6jOS4quaOp+WItueCuVxyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHNlZ21lbnRbaiArIDFdKTsgICAgICAvL0LngrlcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChjb250cm9sUG9pbnRzWzFdKTsgIC8vQkPnmoTnrKzkuIDkuKrmjqfliLbngrlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+acgOWQjueahOaOp+WItueCueS4juacgOWQjueCuemHjeWQiFxyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc2VnbWVudFtsZW4yIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc2VnbWVudFtsZW4yIC0gMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKGFycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcG9pbnRzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBvaW50QS54IO+8miBB54K555qEeOWdkOagh1xyXG4gICAgICogcG9pbnRBLnkg77yaIEHngrnnmoR55Z2Q5qCHXHJcbiAgICAgKiBwb2ludEIueCDvvJogQueCueeahHjlnZDmoIdcclxuICAgICAqIHBvaW50Qi55IO+8miBC54K555qEeeWdkOagh1xyXG4gICAgICogcG9pbnRDLngg77yaIEPngrnnmoR45Z2Q5qCHXHJcbiAgICAgKiBwb2ludEMueSDvvJogQ+eCueeahHnlnZDmoIdcclxuICAgICAqIFxyXG4gICAgICog44CQ5Yqf6IO944CRXHJcbiAgICAgKiAg5qC55o2uQSxCLEPkuInngrnlnZDmoIforqHnrpfkvY3kuo5C54K55Lik5L6n55qE5Lik5Liq5o6n5Yi254K555qE5Z2Q5qCH44CC6L+Z5Lik5Liq54K555qE6L+e57q/56m/6L+HQueCueOAglxyXG4gICAgICogQueCueW3puS+p+eahOeCueaYr+S7pUFC5Li656uv54K555qE6LSd5aGe5bCU5puy57q/55qE5LiA5Liq5o6n5Yi254K577yMXHJcbiAgICAgKiBC54K55Y+z5L6n55qE54K55piv5LulQkPkuLrnq6/ngrnnmoTloZ7lsJTmm7Lnur/nmoTkuIDkuKrmjqfliLbngrnvvIxcclxuICAgICAqXHJcbiAgICAgKiDor6Xlh73mlbDooqvlvqrnjq/osIPnlKjvvIzlpoLmnpzlnKjlhoXpg6jlrprkuYnlj5jph4/vvIzliJnlj43lpI3osIPnlKjnmoTnu5PmnpzkvJrkuqfnlJ/lpKfph4/nmoTpnIDopoHooqvlm57mlLbnmoTlnoPlnL7vvIjooqvph4rmlL7nmoTlj5jph4/otYTmupDvvInvvIxcclxuICAgICAqIOWboOatpOWPmOmHj+WumuS5iemDveWcqOWHveaVsOWklumDqOWumuS5ie+8iOmCo+S6m+WQjeWmguOAkHRYWOOAkeeahOWPmOmHj++8iVxyXG4gICAgICovXHJcbiAgICBfY29tcHV0ZUNvbnRybFBvaW50cyAocG9pbnRBLCBwb2ludEIsIHBvaW50Qykge1xyXG4gICAgICAgIGxldCBjb250cm9sUG9pbnRzID0gW10sXHJcbiAgICAgICAgICAgIG51bTEsIG51bTIsXHJcbiAgICAgICAgICAgIEFCLCBCQyxcclxuICAgICAgICAgICAgcmF0ZTEsIHJhdGUyLFxyXG4gICAgICAgICAgICB4MSwgeTEsIHgyLCB5MjtcclxuXHJcbiAgICAgICAgLy/jgJAx44CR5Yid5aeL5YyW5pWw57uE5Y+Y6YePXHJcbiAgICAgICAgY29udHJvbFBvaW50cy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAvL+OAkDLjgJHorqHnrpdBQkPkuInngrnmnoTmiJDnmoTkuInop5LlvaLnmoTovrnplb9cclxuICAgICAgICBudW0xID0gcG9pbnRCLnggLSBwb2ludEEueDtcclxuICAgICAgICBudW0yID0gcG9pbnRCLnkgLSBwb2ludEEueTtcclxuICAgICAgICBBQiA9IE1hdGguc3FydChudW0xICogbnVtMSArIG51bTIgKiBudW0yKTtcclxuXHJcbiAgICAgICAgbnVtMSA9IHBvaW50Qy54IC0gcG9pbnRCLng7XHJcbiAgICAgICAgbnVtMiA9IHBvaW50Qy55IC0gcG9pbnRCLnk7XHJcbiAgICAgICAgQkMgPSBNYXRoLnNxcnQobnVtMSAqIG51bTEgKyBudW0yICogbnVtMik7XHJcblxyXG4gICAgICAgIC8v44CQM+OAkeiuoeeul0FC5ZKMQkPovrnplb/nmoTmr5TnjodcclxuICAgICAgICByYXRlMSA9IEFCIC8gKEFCICsgQkMpO1xyXG4gICAgICAgIHJhdGUyID0gMSAtIHJhdGUxO1xyXG5cclxuICAgICAgICAvL+OAkDTjgJHorqHnrpdBQuWSjEJD5Lit54K56L+e5oiQ55qE57q/5q615rK/552AQuinkuWIhue6v+W5s+enu+iHs0LngrnlkI7vvIznur/mrrXkuKTnq6/nmoTlnZDmoIdcclxuICAgICAgICBudW0xID0gKHBvaW50Qy54IC0gcG9pbnRBLngpICogdGhpcy5fY29lZmZpY2llbnQ7XHJcbiAgICAgICAgbnVtMiA9IChwb2ludEMueSAtIHBvaW50QS55KSAqIHRoaXMuX2NvZWZmaWNpZW50O1xyXG4gICAgICAgIHgxID0gcG9pbnRCLnggLSByYXRlMSAqIG51bTE7XHJcbiAgICAgICAgeTEgPSBwb2ludEIueSAtIHJhdGUxICogbnVtMjtcclxuICAgICAgICB4MiA9IHBvaW50Qi54ICsgcmF0ZTIgKiBudW0xO1xyXG4gICAgICAgIHkyID0gcG9pbnRCLnkgKyByYXRlMiAqIG51bTI7XHJcblxyXG4gICAgICAgIGNvbnRyb2xQb2ludHNbMF0gPSB7IHg6IHgxLCB5OiB5MSB9O1xyXG4gICAgICAgIGNvbnRyb2xQb2ludHNbMV0gPSB7IHg6IHgyLCB5OiB5MiB9O1xyXG5cclxuICAgICAgICByZXR1cm4gY29udHJvbFBvaW50cztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2VnbWVudCAob3JpZ2luYWxQb2ludHMpIHtcclxuICAgICAgICBsZXQgaSwgbGVuLFxyXG4gICAgICAgICAgICBwb2ludCxcclxuICAgICAgICAgICAgYXJyID0gW10sXHJcbiAgICAgICAgICAgIHBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgICAvL+W+queOr+iuvue9ruWQhOS4queCueWdkOagh1xyXG4gICAgICAgIGxlbiA9IG9yaWdpbmFsUG9pbnRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgcG9pbnQgPSBvcmlnaW5hbFBvaW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKHBvaW50LmRpcnR5RmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHMucHVzaChhcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goeyB4OiBwb2ludC54LCB5OiBwb2ludC55IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+acgOWQjuS4gOasoVxyXG4gICAgICAgIHBvaW50cy5wdXNoKGFycik7XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHBvaW50cztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOWumuS5iXdpbmRvd+WKqOeUu+W+queOr+aOp+WItuWHveaVsO+8iOWIqeeUqOeri+WNs+aJp+ihjOWHveaVsO+8iVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG53aW5kb3cucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbiAoZnVuYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmMsIDE2KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbn0pKCk7XHJcbiIsImNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIERJUlRZOiAnLScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WumuS5ieaVsOaNruaXtu+8jOeUqOadpeihqOekuuayoeacieaVsOaNru+8jOaIluiEj+aVsOaNru+8iOaXoOaViOaVsOaNru+8iVxyXG4gICAgSEFMRl9QSVhFTDogMC41LCAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y2K5Liq5YOP57SgXHJcblxyXG4gICAgQ0xPU0VfVE9fWkVSTzogMC4wMDAwMDAxLCAgICAgICAgICAgICAgIC8v5rWu54K55pWw6K6h566X5Lya5pyJ57K+5bqm6K+v5beu77yM6K+l5bi46YeP55So5LqO5Yik5pat5Lik5Liq5rWu54K55pWw5piv5ZCm55u4562J44CC5aaC5p6c5Lik5Liq5rWu54K55pWw55qE5beu5YC85bCP5LqO6K+l5pWw77yM5YiZ6K6k5Li655u4562J44CCXHJcblxyXG4gICAgVEVYVF9CQVNFX0xJTkVfTUlERExFOiAnbWlkZGxlJywgICAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+e6teWQkeaOkuWIl+WxnuaAp1xyXG4gICAgVEVYVF9CQVNFX0xJTkVfVE9QOiAndG9wJyxcclxuICAgIFRFWFRfQkFTRV9MSU5FX0JPVFRPTTogJ2JvdHRvbScsXHJcblxyXG4gICAgVEVYVF9BTElHTl9DRU5URVI6ICdjZW50ZXInLCAgICAgICAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+aoquWQkeaOkuWIl+WxnuaAp1xyXG4gICAgVEVYVF9BTElHTl9MRUZUOiAnbGVmdCcsXHJcbiAgICBURVhUX0FMSUdOX1JJR0hUOiAncmlnaHQnLFxyXG5cclxuICAgIFRFWFRfQkFTRV9MSU5FX0lERU9HUkFQSElDOiAnaWRlb2dyYXBoaWMnLCAgICAgIC8v5ZyoQ2FudmFz5LiK57uY5Yi25paH5a2X5pe277yM6K6+572uQ29udGV4dOS4iuS4i+aWh+eahOaWh+Wtl+Wfuue6v+WxnuaAp1xyXG5cclxuICAgIEFERDogJ2FkZCcsXHJcbiAgICBSRU1PVkU6ICdyZW1vdmUnLFxyXG5cclxuICAgIFhfQVhJUzogJ3gtYXhpcycsICAgICAgICAgICAgICAgLy/ku6PooajmmK946L206L+Y5piveei9tFxyXG4gICAgWV9BWElTOiAneS1heGlzJyxcclxuXHJcbiAgICBSQURJQU5fVU5JVDogTWF0aC5QSSAvIDE4MCAgICAgIC8v5byn5bqm5Y2V5L2NXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHM7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFBvb2wge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsYXp6LCBwYXJhKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMuX2NsYXNzID0gY2xheno7ICAgLy/nsbvlkI1cclxuICAgICAgICB0aGlzLl9wYXJhID0gcGFyYTsgICAgICAvL+WunuS+i+WMluWvueixoeaXtueahOWPguaVsFxyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDsgICAgICAgIC8v5a+56LGh5rGg5Lit5a+56LGh55qE5Liq5pWwXHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IFtdOyAgICAgICAgLy/lr7nosaHmsaBcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDlhazmnInmiJDlkZjlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBnZXRPYmogKCkge1xyXG4gICAgICAgIGxldCBwb29sID0gdGhpcy5fcG9vbCxcclxuICAgICAgICAgICAgbGVuLFxyXG4gICAgICAgICAgICBvYmo7XHJcblxyXG4gICAgICAgIC8v5aaC5p6c5b2T5YmN5bey5L2/55So55qE5a+56LGh5Liq5pWw5aSn5LqO5oiW562J5LqO5rGg5Lit5bey5pyJ5a+56LGh5Liq5pWw77yMXHJcbiAgICAgICAgLy/liJnmlrDnlJ/miJDkuIDkuKrlr7nosaHvvJvlkKbliJnku47msaDkuK3nm7TmjqXlj5blvpflr7nosaFcclxuICAgICAgICBpZiAodGhpcy5fY291bnQgPj0gcG9vbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgb2JqID0gbmV3IHRoaXMuX2NsYXNzKHRoaXMuX3BhcmEpO1xyXG5cclxuICAgICAgICAgICAgbGVuID0gcG9vbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHBvb2xbbGVuXSA9IG9iajtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0gcG9vbFt0aGlzLl9jb3VudF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iusOW9leW9k+WJjeW3suS9v+eUqOeahOWvueixoeS4quaVsFxyXG4gICAgICAgIHRoaXMuX2NvdW50Kys7XHJcblxyXG4gICAgICAgIC8v6L+U5Zue5a+56LGhXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAqIOW9k+WJjeW3suS9v+eUqOeahOWvueixoeS4quaVsOa4hembtlxyXG4gICAgKiDov5nmoLfvvIzlvZPlh73mlbBnZXRPYmooKeiiq+iwg+eUqOeahOaXtuWAme+8jOaxoOS4reaJgOacieWvueixoemDveWPr+S9v+eUqFxyXG4gICAgKi9cclxuICAgIHJlbGVhc2VBbGwgKCkge1xyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbn0iLCJjb25zdCBTdGF0dXMgPSB7XHJcbiAgICBcclxuICAgIFNURVAxOiAnc3RlcDEnLFxyXG4gICAgU1RFUDI6ICdzdGVwMicsXHJcbiAgICBTVEVQMzogJ3N0ZXAzJyxcclxuICAgIFNURVA0OiAnc3RlcDQnLFxyXG4gICAgU1RFUDU6ICdzdGVwNScsXHJcbiAgICBXQUlUSU5HOiAnd2FpdGluZycsXHJcbiAgICBTVE9QOiAnc3RvcCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1czsiLCJjb25zdCBTdHlsZXMgPSB7XHJcbiAgICBcclxuICAgIC8v5YWx5ZCM6YOo5YiGXHJcbiAgICBUSVRMRV9GT05UOiAnMTZweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgICAvL+agh+mimOWtl+S9kyAgICAgICAgXHJcbiAgICBMRUdFTkRfRk9OVDogJzE0cHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAgICAvL+WbvuS+i+Wtl+S9kyAgXHJcbiAgICBMQUJFTF9GT05UOiAnMTBweCBNaWNyb3NvZnQgWWFIZWknLCAgICAgICAgICAvL+agh+etvuWtl+S9kyAgXHJcbiAgICBBWElTX05BTUVfRk9OVDogJzE0cHggTWljcm9zb2Z0IFlhSGVpJywgICAgICAvL+i9tOWQjeensOWtl+S9kyAgXHJcbiAgICBGT05UX0ZJTExfQ09MT1I6ICcjMDAwMDAwJywgICAgICAgICAgICAgICAgICAvL+m7mOiupOWtl+S9k+Whq+WFheminOiJslxyXG4gICAgQVhJU19MSU5FX1dJRFRIOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/ovbTnur/nmoTnur/lrr1cclxuICAgIEFYSVNfTElORV9DT0xPUjogJyMzMzMzMzMnLCAgICAgICAgICAgICAgICAgIC8v6L2057q/6aKc6ImyXHJcbiAgICBBWElTX1NDQUxFX1VOSVRfTElORV9TSVpFOiA1LCAgICAgICAgICAgICAgICAvL+WIu+W6pue6v+eahOmVv+W6plxyXG4gICAgR1JJRF9MSU5FX1dJRFRIOiAwLjUsICAgICAgICAgICAgICAgICAgICAgICAgLy/nvZHmoLzomZrnur/nmoTnur/lrr1cclxuICAgIEdSSURfTElORV9DT0xPUjogJyNCQkNDREQnLCAgICAgICAgICAgICAgICAgIC8v572R5qC86Jma57q/6aKc6ImyXHJcbiAgICBHUklEX0xJTkVfREFTSDogWzUsIDVdLCAgICAgICAgICAgICAgICAgICAgICAvL+e9keagvOiZmue6v+eCueeahOmXtOmalFxyXG4gICAgWEFYSVNfTEFCRUxfT0ZGU0VUOiAxNiwgICAgICAgICAgICAgICAgICAgICAgLy946L205qCH562+5paH5a2X5Lit5b+D54K55YiweOi9tOe6v+eahOi3neemu1xyXG4gICAgWEFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEU6IDE2LCAgICAgICAgICAgLy946L205qCH562+5peL6L2s5pe277yM5paH5a2X5Lit5b+D54K55YiweOi9tOe6v+eahOi3neemu1xyXG4gICAgWUFYSVNfTEFCRUxfT0ZGU0VUOiAxNiwgICAgICAgICAgICAgICAgICAgICAgLy956L205qCH562+5paH5a2X5Lit5b+D54K55Yiweei9tOe6v+eahOi3neemu1xyXG4gICAgWUFYSVNfTEFCRUxfT0ZGU0VUX0ZPUl9ST1RBVEU6IDE2LCAgICAgICAgICAgLy956L205qCH562+5peL6L2s5pe277yM5paH5a2X5Lit5b+D54K55Yiweei9tOe6v+eahOi3neemu1xyXG4gICAgTEVHRU5EX1NIQVBFX1RFWFRfR0FQOiA1LCAgICAgICAgICAgICAgICAgICAgLy/lm77kvovkuK3vvIzoibLlnZflkozmloflrZfnmoTpl7TpmpRcclxuICAgIExFR0VORF9HQVA6IDE1LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+5L6L5qiq5ZCR5o6S5YiX5pe277yM5Zu+5L6L5LmL6Ze055qE6Ze06ZqUXHJcbiAgICBUSVBfTE9DQVRJT05fT0ZGU0VUOiAyMCwgICAgICAgICAgICAgICAgICAgICAvL+WumuS9jVRpcOS9jee9ruaXtu+8jOebuOWvuem8oOagh+S9jee9rueahOWBj+enu+mHj1xyXG5cclxuXHJcbiAgICAvL+awlOazoeWbvlxyXG4gICAgQlVCQkxFX0FMUEhBOiAwLjcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rCU5rOh55qE6YCP5piO5bqmXHJcblxyXG5cclxuICAgIC8v5p+x54q25Zu+XHJcbiAgICBDT0xVTU5fU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgLy/nlKjkuo7moYbpgInpobnnm67nmoTmlrnmoYbnmoTovrnmoYbnur/nur/lrr1cclxuICAgIENPTFVNTl9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0MyMzUzMScsICAgICAvL+eUqOS6juahhumAiemhueebrueahOaWueahhueahOi+ueahhue6v+minOiJslxyXG5cclxuXHJcbiAgICAvL+aKmOe6v+WbvlxyXG4gICAgTElORV9MSU5FX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAgICAgIC8v5oqY57q/55qE57q/5a69XHJcbiAgICBMSU5FX0FSRUFfQUxQSEE6IDAuNywgICAgICAgICAgICAgICAgICAgICAgLy/nu5jliLbpnaLnp6/lm77ml7bnmoTpgI/mmI7luqZcclxuICAgIExJTkVfTUFSS1BPSU5UX1dJRFRIOiAxLjAsICAgICAgICAgICAgICAgICAvL+agh+iusOeCueeahOe6v+WuvVxyXG4gICAgTElORV9NQVJLUE9JTlRfUkFESVVTOiAyLCAgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K555qE5ZyG5Y2K5b6EXHJcbiAgICBMSU5FX01BUktQT0lOVF9CQUtfQ09MT1I6ICcjRjNGM0YzJywgICAgICAgLy/moIforrDngrnnmoTog4zmma/popzoibJcclxuICAgIExJTkVfU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAvL+eUqOS6juagh+W/l+mAieaLqemhueeahOe6v+auteeahOe6v+WuvVxyXG4gICAgTElORV9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0MyMzUzMScsICAgICAgIC8v55So5LqO5qCH5b+X6YCJ5oup6aG555qE57q/5q6155qE6aKc6ImyXHJcblxyXG5cclxuICAgIC8v6aW85Zu+XHJcbiAgICBQSUVfTEFCRUxfSU5ORVJfRk9OVF9DT0xPUjogJyNGRkZGRkYnLCAgICAgLy/lvZPmoIfnrb7mloflrZflnKjppbzlhoXmmL7npLrml7bvvIzmloflrZfnmoTpopzoibJcclxuICAgIFBJRV9MQUJFTF9HVUlERV9MSU5FMV9TSVpFOiAyMCwgICAgICAgICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWkluaYvuekuuaXtu+8jOi/nuaOpemlvOWdl+WSjOagh+etvuaWh+Wtl+eahOW8leWvvOe6vzHnmoTplb/luqZcclxuICAgIFBJRV9MQUJFTF9HVUlERV9MSU5FMl9TSVpFOiAxNSwgICAgICAgICAgICAvL+W9k+agh+etvuaWh+Wtl+WcqOmlvOWkluaYvuekuuaXtu+8jOi/nuaOpemlvOWdl+WSjOagh+etvuaWh+Wtl+eahOW8leWvvOe6vzLnmoTplb/luqZcclxuICAgIFBJRV9MQUJFTF9PRkZTRVQ6IDUsICAgICAgICAgICAgICAgICAgICAgICAvL+W8leWvvOe6v+WSjOagh+etvuaWh+Wtl+eahOmXtOi3nVxyXG4gICAgUElFX1NFTEVDVE9SX1RSQU5TTEFURTogMTAsICAgICAgICAgICAgICAgIC8v6KKr6YCJ5oup55qE6aW85Z2X55qE5L2N56e76YePXHJcbiAgICBQSUVfU0VMRUNUT1JfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAgLy/moYbpgInmlbDmja7pobnnmoTmlrnmoYbnmoTovrnmoYbnur/nur/lrr1cclxuICAgIFBJRV9TRUxFQ1RPUl9MSU5FX0NPTE9SOiAnI0ZGMDAwMCcsICAgICAgICAvL+ahhumAieaVsOaNrumhueeahOaWueahhueahOi+ueahhuminOiJslxyXG5cclxuXHJcbiAgICAvL+mbt+i+vuWbvlxyXG4gICAgUkFEQVJfTEFCRUxfRk9OVDogJzEycHggTWljcm9zb2Z0IFlhSGVpJywgIC8v5oyH5qCH5paH5a2X55qE5a2X5L2TXHJcbiAgICBSQURBUl9MQUJFTF9DT0xPUjogJyMwMDAwMDAnLCAgICAgICAgICAgICAgLy/mjIfmoIfmloflrZfnmoTpopzoibJcclxuICAgIFJBREFSX0xBQkVMX1BPU0lUSU9OX09GRlNFVDogMTAsICAgICAgICAgICAvL+aMh+agh+aWh+Wtl+WSjOWvueW6lOWkmui+ueW9oumhtueCueS5i+mXtOeahOmXtOi3nVxyXG4gICAgUkFEQVJfTElORV9XSURUSDogMy4wLCAgICAgICAgICAgICAgICAgICAgIC8v5pWw5o2u6Zu36L6+57q/55qE57q/5a69XHJcbiAgICBSQURBUl9CQUtfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAgICAgLy/mjIfmoIflpJrovrnlvaLmoYbnur/lkozljYrlvoTliIblibLnur/nmoTnur/lrr1cclxuICAgIFJBREFSX0JBS19MSU5FX0NPTE9SOiAnI0M5QzlDOScsICAgICAgICAgICAvL+aMh+agh+Wkmui+ueW9ouahhue6v+WSjOWNiuW+hOWIhuWJsue6v+eahOminOiJslxyXG4gICAgUkFEQVJfQkFLX0ZJTExfQ09MT1I6ICcjRTZFNkU2JywgICAgICAgICAgIC8v5oyH5qCH5aSa6L655b2i55qE6IOM5pmv6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5pWj54K55Zu+XHJcbiAgICBTQ0FUVEVSX1BPSU5UX0FMUEhBOiAwLjcsICAgICAgICAgICAgICAgICAgLy/mlaPngrnnmoTpgI/mmI7luqZcclxuICAgIFNDQVRURVJfQ1JPU1NfTElORV9XSURUSDogMS4wLCAgICAgICAgICAgICAvL+eUqOS6juagh+ivhum8oOagh+S9jee9rueahOWNgeWtl+e6v+eahOe6v+WuvVxyXG4gICAgU0NBVFRFUl9DUk9TU19DT0xPUjogJyNGRjAwMDAnLCAgICAgICAgICAgIC8v55So5LqO5qCH6K+G6byg5qCH5L2N572u55qE5Y2B5a2X57q/55qE6aKc6ImyXHJcblxyXG5cclxuICAgIC8v5pet5pel5Zu+XHJcbiAgICBTVU5CVVJTX0xBQkVMX0NPTE9SOiAnIzAwMDAwMCcsICAgICAgICAgICAgLy/moIfnrb7mloflrZfnmoTpopzoibJcclxuICAgIFNVTkJVUlNfQk9SREVSX0NPTE9SOiAnIzAwMDAwMCcgICAgICAgICAgICAvL+aJh+W9ouWdl+eahOi+ueahhuminOiJslxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVzOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOmdmeaAgeWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvKlxyXG4gICAgKiDorqHnrpfjgJDlgLzovbTjgJHnmoTliLvluqbljZXkvY1cclxuICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGVVbml0IChtaW4sIG1heCwgc2NhbGVNYXhDb3VudCkge1xyXG4gICAgICAgIGxldCBpLCBsZW4sXHJcbiAgICAgICAgICAgIGF2ZyxcclxuICAgICAgICAgICAgZ2FwcyA9IFsxLCAyLCAyLjUsIDUsIDEwXSxcclxuICAgICAgICAgICAgc2NhbGVVbml0LFxyXG4gICAgICAgICAgICBtYWduaXR1ZGU7XHJcblxyXG4gICAgICAgIC8v6K6h566X5Z2H5YiG5YC8XHJcbiAgICAgICAgYXZnID0gKG1heCAtIG1pbikgLyAoc2NhbGVNYXhDb3VudC0xKTtcclxuXHJcbiAgICAgICAgLy/orqHnrpflnYfliIblgLznmoTmlbDph4/nuqdcclxuICAgICAgICBtYWduaXR1ZGUgPSB0aGlzLmdldE1hZ25pdHVkZShhdmcpO1xyXG5cclxuICAgICAgICAvL+W+queOr++8jOebtOiHs+esrOS4gOS4quWkp+S6juaIluetieS6juWdh+WIhuWAvOeahOaVtOaVsOWAvOWHuueOsFxyXG4gICAgICAgIGxlbiA9IGdhcHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBzY2FsZVVuaXQgPSBnYXBzW2ldICogbWFnbml0dWRlO1xyXG4gICAgICAgICAgICBpZiAoc2NhbGVVbml0ID49IGF2Zykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6L+U5ZueXHJcbiAgICAgICAgcmV0dXJuIHNjYWxlVW5pdDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAqIOiuoeeul+aMh+WumuaVsOWAvOeahOaVsOmHj+e6p1xyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYWduaXR1ZGUgKG51bSkge1xyXG4gICAgICAgIC8v6K6h566X5pWw5YC855qEMTDnmoTluYJcclxuICAgICAgICBsZXQgcG93ID0gTWF0aC5mbG9vcihNYXRoLmxvZyhudW0pIC8gTWF0aC5sb2coMTApKTs7XHJcblxyXG4gICAgICAgIC8v6K6h566X5pWw5YC855qE5pWw6YeP57qnXHJcbiAgICAgICAgbGV0IG1hZ25pdHVkZSA9IE1hdGgucG93KDEwLCBwb3cpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFnbml0dWRlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLypcclxuICAgICogQ2FudmFz57uY5Yi25pe25a+55Z2Q5qCH6L+b6KGM5b6u6LCDXHJcbiAgICAqIOWbm+iIjeS6lOWFpeWPluaVtOWQjuWHj+WwjzAuNeWDj+e0oOOAgui/meagt++8jOWcqENhbnZhc+aXtuS9jee9ruWkhOS6juS4pOS4quWDj+e0oOS5i+mXtO+8jOmBv+WFjeWPkeiZmuOAglxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBhZGp1c3RQb3NpdGlvbiAoeE9SeSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHhPUnkpIC0gQ29uc3RhbnRzLkhBTEZfUElYRUw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgd2luZG93VG9DYW52YXMgKGJvdW5kaW5nQ2xpZW50UmVjdExlZnQsXHJcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0VG9wLFxyXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdFdpZHRoLFxyXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCxcclxuICAgICAgICBjYW52YXNXaWR0aCxcclxuICAgICAgICBjYW52YXNIZWlnaHQsXHJcbiAgICAgICAgZ2xvYmxlWCxcclxuICAgICAgICBnbG9ibGVZLFxyXG4gICAgICAgIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgcG9zaXRpb24ueCA9IGdsb2JsZVggLSBib3VuZGluZ0NsaWVudFJlY3RMZWZ0ICogKGNhbnZhc1dpZHRoIC8gYm91bmRpbmdDbGllbnRSZWN0V2lkdGgpO1xyXG4gICAgICAgIHBvc2l0aW9uLnkgPSBnbG9ibGVZIC0gYm91bmRpbmdDbGllbnRSZWN0VG9wICogKGNhbnZhc0hlaWdodCAvIGJvdW5kaW5nQ2xpZW50UmVjdEhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGV4dFdpZHRoIChjYW52YXNDb250ZXh0LCB0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGV4dEhlaWdodCAoY2FudmFzQ29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KCdNJykud2lkdGggKiA3IC8gNjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUV0FjdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDlhazmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIHRoaXMudG90bGVUaW1lcyA9IDA7ICAgICAgICAgICAvL+e8k+WKqOasoeaVsFxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAwOyAgICAgICAgICAgICAgLy/nvJPliqjlvIDlp4vml7bvvIzku47nrKzlh6DmrKHnvJPliqjlvIDlp4sgIFxyXG4gICAgICAgIHRoaXMuZGF0YUFycmF5ID0gW107ICAgICAgICAgIC8v5pys5Yqo5L2c5pON5o6n55qEVFdEYXRh5pWw5o2u6ZuGXHJcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBudWxsOyAgICAgICAgLy/nvJPliqjnrpfms5VcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24gPSBudWxsOyAgICAgICAvL+acrOWKqOS9nOe7k+adn+WQjueahOS4i+S4gOS4quWKqOS9nFxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDnp4HmnInmiJDlkZjlj5jph49cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICog5YWs5pyJ5oiQ5ZGY5Ye95pWwXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2V0RGF0YSAoZGF0YUFycmF5LCBhbGdvcml0aG0sIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhQXJyYXkgPSBkYXRhQXJyYXk7XHJcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBhbGdvcml0aG07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMudG90bGVUaW1lcyA9IE1hdGguY2VpbChkdXJhdGlvbiAvIFRXQWN0aW9uLkZSQU1FX0RVUkFUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFpbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSAoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCxcclxuICAgICAgICAgICAgZnJvbSxcclxuICAgICAgICAgICAgdG8sXHJcbiAgICAgICAgICAgIGNhbGxCYWNrLFxyXG5cclxuICAgICAgICAgICAgYXJyLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgaSwgaiwgbGVuMSwgbGVuMixcclxuXHJcbiAgICAgICAgICAgIHJ0biA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ID4gdGhpcy50b3RsZVRpbWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGxlbjEgPSB0aGlzLmRhdGFBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmRhdGFBcnJheVtpXS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gdGhpcy5kYXRhQXJyYXlbaV0uZnJvbTtcclxuICAgICAgICAgICAgICAgIHRvID0gdGhpcy5kYXRhQXJyYXlbaV0udG87XHJcbiAgICAgICAgICAgICAgICBjYWxsQmFjayA9IHRoaXMuZGF0YUFycmF5W2ldLmNhbGxCYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGVuMiA9IGZyb20ubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuYWxnb3JpdGhtKHRoaXMuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21bal0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvW2pdIC0gZnJvbVtqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RsZVRpbWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxCYWNrKHRhcmdldCwgYXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBydG47XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy50b3RsZVRpbWVzID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWxnb3JpdGhtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog6Z2Z5oCB5Y+Y6YePXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblRXQWN0aW9uLkZSQU1FX0RVUkFUSU9OID0gMTc7ICAgICAgLy/luKfpopHkuLo2MOeahOeKtuaAgeS4i++8jOS4gOW4p+eahOaSreaUvuaXtumVv+S4ujE3bXMgKCAxMDAwbXMvNjAgKVxyXG4iLCIvKlxyXG4gKiB0OiBjdXJyZW50IHRpbWXvvIjlvZPliY3ml7bpl7TvvIlcclxuICogYjogYmVnaW5uaW5nIHZhbHVl77yI5Yid5aeL5YC877yJXHJcbiAqIGM6IGNoYW5nZSBpbiB2YWx1Ze+8iOWPmOWMlumHj++8iVxyXG4gKiBkOiBkdXJhdGlvbu+8iOaMgee7reaXtumXtO+8iVxyXG4gKiBcclxuICogXHJcbiAqIOe8k+WKqOWHveaVsDpcclxuICogMS5MaW5lYXIg5YyA6YCfXHJcbiAqIDIuUXVhZCDkuozmrKHmlrnnvJPliqjmlYjmnpxcclxuICogMy5DdWJpYyDkuInmrKHmlrnnvJPliqjmlYjmnpxcclxuICogNC5RdWFydCDlm5vmrKHmlrnnvJPliqjmlYjmnpxcclxuICogNS5RdWludCDkupTmrKHmlrnnvJPliqjmlYjmnpxcclxuICogNi5TaW5lICDmraPlvKbnvJPliqjmlYjmnpxcclxuICogNy5FeHBvICDmjIfmlbDnvJPliqjmlYjmnpxcclxuICogOC5DaXJjICDlnIblvaLnvJPliqjlh73mlbBcclxuICogOS5FbGFzdGljIOaMh+aVsOihsOWHj+ato+W8puabsue6v+e8k+WKqOWHveaVsFxyXG4gKiAxMC5CYWNrICDotoXov4fojIPlm7TnmoTkuInmrKHmlrnnmoTnvJPliqjlh73mlbBcclxuICogMTEuQm91bmNlIOaMh+aVsOihsOWHj+eahOWPjeW8ueabsue6v+e8k+WKqOWHveaVsFxyXG4gKiBcclxuICogXHJcbiAqIOavj+enjee8k+WKqOWHveaVsOmDveeUseS4ieenjeaViOaenDpcclxuICogMS5lYXNlSW4gIOWKoOmAn1xyXG4gKiAyLmVhc2VPdXQg5YeP6YCfXHJcbiAqIDMuZWFzZUluT3V0ICDlhYjliqDpgJ/lkI7lh4/pgJ9cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXQWxnb3JpdGhtIHtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiDpnZnmgIHlh73mlbBcclxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzdGF0aWMgbGluZWFyICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgcmV0dXJuIGMgKiB0IC8gZCArIGI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDpnZnmgIHlj5jph49cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuVFdBbGdvcml0aG0uUXVhZCA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKCgtLXQpICogKHQgLSAyKSAtIDEpICsgYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblRXQWxnb3JpdGhtLkN1YmljID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICsgMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uUXVhcnQgPVxyXG4gICAge1xyXG4gICAgICAgIGVhc2VJbjogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5RdWludCA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgKiB0ICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCAqIHQgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uU2luZSA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiBNYXRoLmNvcyh0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYyArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAqIE1hdGguc2luKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5FeHBvID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodCA9PSAwKSA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0ID09IGQpID8gYiArIGMgOiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0IC8gZCkgKyAxKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAodCA9PSBkKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuVFdBbGdvcml0aG0uQ2lyYyA9XHJcbiAgICB7XHJcbiAgICAgICAgZWFzZUluOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodCAvPSBkKSAqIHQpIC0gMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5FbGFzdGljID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICAgICAgICAgIGxldCBzO1xyXG4gICAgICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQpID09IDEpIHJldHVybiBiICsgYztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09IFwidW5kZWZpbmVkXCIpIHAgPSBkICogLjM7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgICAgIGEgPSBjO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPT0gMSkgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHAgPT0gXCJ1bmRlZmluZWRcIikgcCA9IGQgKiAuMztcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IGM7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5PdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICAgICAgICAgIGxldCBzO1xyXG4gICAgICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtcclxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA9PSAyKSByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PSBcInVuZGVmaW5lZFwiKSBwID0gZCAqICguMyAqIDEuNSk7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBjO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodCA8IDEpIHJldHVybiAtLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcclxuICAgICAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIC41ICsgYyArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5CYWNrID1cclxuICAgIHtcclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PSBcInVuZGVmaW5lZFwiKSBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCwgcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT0gXCJ1bmRlZmluZWRcIikgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09IFwidW5kZWZpbmVkXCIpIHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdCAtIHMpKSArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB0ICsgcykgKyAyKSArIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5UV0FsZ29yaXRobS5Cb3VuY2UgPVxyXG4gICAge1xyXG5cclxuICAgICAgICBlYXNlSW46IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGxldCBUV0FsZ29yaXRobSA9IFQudHdlZW47XHJcbiAgICAgICAgICAgIHJldHVybiBjIC0gQm91bmNlLmVhc2VPdXQoZCAtIHQsIDAsIGMsIGQpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA8ICgxIC8gMi43NSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqIHQgKiB0KSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8ICgyIC8gMi43NSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgxLjUgLyAyLjc1KSkgKiB0ICsgLjc1KSArIGI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8ICgyLjUgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDIuMjUgLyAyLjc1KSkgKiB0ICsgLjkzNzUpICsgYjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgyLjYyNSAvIDIuNzUpKSAqIHQgKyAuOTg0Mzc1KSArIGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbk91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgbGV0IFRXQWxnb3JpdGhtID0gVC50d2VlbjtcclxuICAgICAgICAgICAgaWYgKHQgPCBkIC8gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvdW5jZS5lYXNlSW4odCAqIDIsIDAsIGMsIGQpICogLjUgKyBiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvdW5jZS5lYXNlT3V0KHQgKiAyIC0gZCwgMCwgYywgZCkgKiAuNSArIGMgKiAuNSArIGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFdEYXRhIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IFtdO1xyXG4gICAgICAgIHRoaXMudG8gPSBbXTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g56eB5pyJ5oiQ5ZGY5Y+Y6YePXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOWFrOacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZyb20gPSBbXTtcclxuICAgICAgICB0aGlzLnRvID0gW107XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YSAodGFyZ2V0LCBmcm9tQXJyYXksIHRvQXJyYXksIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbUFycmF5O1xyXG4gICAgICAgIHRoaXMudG8gPSB0b0FycmF5O1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBjYWxsQmFjaztcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIOengeacieaIkOWRmOWHveaVsFxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbn1cclxuIiwiaW1wb3J0IE9iamVjdFBvb2wgZnJvbSAnLi4vc3VwcG9ydC9PYmplY3RQb29sLmpzJztcclxuaW1wb3J0IFRXQWN0aW9uIGZyb20gXCIuLi90d2Vlbi9UV0FjdGlvbi5qc1wiO1xyXG5pbXBvcnQgVFdEYXRhIGZyb20gXCIuLi90d2Vlbi9UV0RhdGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRXRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOWFrOacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOengeacieaIkOWRmOWPmOmHj1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0QWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50QWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aW9uUG9vbCA9IG5ldyBPYmplY3RQb29sKFRXQWN0aW9uKTtcclxuICAgICAgICB0aGlzLl9kYXRhUG9vbCA9IG5ldyBPYmplY3RQb29sKFRXRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0VFdBY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcblxyXG4gICAgICAgIG9iaiA9IHRoaXMuX2FjdGlvblBvb2wuZ2V0T2JqKCk7XHJcbiAgICAgICAgb2JqLmluaXQoKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLnB1c2gob2JqKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUV0RhdGEgKCkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcblxyXG4gICAgICAgIG9iaiA9IHRoaXMuX2RhdGFQb29sLmdldE9iaigpO1xyXG4gICAgICAgIG9iai5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZUFsbFRXRGF0YSAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2wucmVsZWFzZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2VBbGxUV0FjdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvblBvb2wucmVsZWFzZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpcnN0VFdBY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0QWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3Rpb24gPSB0aGlzLl9maXJzdEFjdGlvbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmV4dEZyYW1lICgpIHtcclxuICAgICAgICBsZXQgcnRuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUGxheWluZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aW9uLm5leHRGcmFtZSgpID09IGZhbHNlKSAgIC8v5b2T5YmNYWN0aW9u55qE57yT5Yqo5bey57uP57uT5p2fIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEFjdGlvbi5uZXh0QWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50QWN0aW9uID0gdGhpcy5fY3VycmVudEFjdGlvbi5uZXh0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBydG4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJ0biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wICgpIHtcclxuICAgICAgICBsZXQgaSwgbGVuO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50QWN0aW9uID0gdGhpcy5fZmlyc3RBY3Rpb247XHJcblxyXG4gICAgICAgIGxlbiA9IHRoaXMuX2FjdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25zW2ldLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCAnLi4vc3JjL2NoYXJ0L2xpbmUvY3NzL2NoYXJ0LmNzcycgO1xyXG5pbXBvcnQgJy4uL3NyYy9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lLmpzJztcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhcnQgfSAgZnJvbSAnLi4vc3JjL2NoYXJ0L2xpbmUvQ2hhcnQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcmllcyB9ICBmcm9tICcuLi9zcmMvY2hhcnQvbGluZS9zZXJpZXMvU2VyaWVzLmpzJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==