/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/components/biu.ts":
/*!***********************************!*\
  !*** ./app/src/components/biu.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar UUID = __webpack_require__(/*! uuid-js */ \"./node_modules/uuid-js/lib/uuid.js\");\nvar Biu = /** @class */function () {\n    function Biu(container, options) {\n        this.iTimer = null;\n        this.key = UUID.create();\n        this.size = options.size;\n        this.basePostion = options.basePostion;\n        this.speed = options.speed;\n        this.container = container;\n        this.init();\n    }\n    Biu.prototype.init = function () {\n        var oDiv = document.createElement('div');\n        oDiv.className = \"biu biu-\" + this.size;\n        oDiv.style.left = this.basePostion.x + 'px';\n        oDiv.style.bottom = this.basePostion.y + 'px';\n        this.container.appendChild(oDiv);\n        this.el = oDiv;\n        this.move();\n        return this;\n    };\n    Biu.prototype.move = function () {\n        var _this = this;\n        this.iTimer = requestAnimationFrame(function () {\n            var top = _this.el.offsetTop;\n            var elStyle = window.getComputedStyle(_this.el, null);\n            if (top > parseInt(elStyle.getPropertyValue('height'))) {\n                // console.log(this.el.style.top);\n                _this.el.style.bottom = parseInt(elStyle.getPropertyValue('bottom')) + _this.speed + 'px';\n                _this.move();\n            } else {\n                cancelAnimationFrame(_this.iTimer);\n                _this.destroyed();\n                _this.iTimer = null;\n            }\n        });\n    };\n    Biu.prototype.destroyed = function () {\n        this.container.removeChild(this.el);\n    };\n    return Biu;\n}();\nexports.default = Biu;\n\n//# sourceURL=webpack:///./app/src/components/biu.ts?");

/***/ }),

/***/ "./app/src/components/emy.ts":
/*!***********************************!*\
  !*** ./app/src/components/emy.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar UUID = __webpack_require__(/*! uuid-js */ \"./node_modules/uuid-js/lib/uuid.js\");\nvar constant_1 = __webpack_require__(/*! ../constant */ \"./app/src/constant/index.ts\");\nvar Emy = /** @class */function () {\n    function Emy(container, options) {\n        this.iTimer = null;\n        this.key = UUID.create();\n        this.size = options.size;\n        this.basePostion = options.basePostion;\n        this.speed = options.speed;\n        this.container = container;\n        this.init();\n    }\n    Emy.prototype.init = function () {\n        var oDiv = document.createElement('div');\n        oDiv.className = \"emy emy-\" + this.size;\n        oDiv.style.left = this.basePostion.x + 'px';\n        oDiv.style.top = this.basePostion.y + 'px';\n        this.container.appendChild(oDiv);\n        this.el = oDiv;\n        this.move();\n        return this;\n    };\n    Emy.prototype.move = function () {\n        var _this = this;\n        this.iTimer = requestAnimationFrame(function () {\n            var top = _this.el.offsetTop;\n            var elStyle = window.getComputedStyle(_this.el, null);\n            // console.log(top,windowHeight - parseInt(elStyle.getPropertyValue('height')));\n            if (top < constant_1.windowHeight - parseInt(elStyle.getPropertyValue('height'))) {\n                // console.log(this.el.style.top);\n                _this.el.style.top = parseInt(elStyle.getPropertyValue('top')) + _this.speed + 'px';\n                _this.move();\n            } else {\n                cancelAnimationFrame(_this.iTimer);\n                _this.destroyed();\n                _this.iTimer = null;\n            }\n        });\n    };\n    Emy.prototype.destroyed = function () {\n        this.container.removeChild(this.el);\n    };\n    return Emy;\n}();\nexports.default = Emy;\n\n//# sourceURL=webpack:///./app/src/components/emy.ts?");

/***/ }),

/***/ "./app/src/components/emyBus.ts":
/*!**************************************!*\
  !*** ./app/src/components/emyBus.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar emy_1 = __webpack_require__(/*! ./emy */ \"./app/src/components/emy.ts\");\nvar index_1 = __webpack_require__(/*! ../constant/index */ \"./app/src/constant/index.ts\");\nvar EmyBus = /** @class */function () {\n    function EmyBus(container) {\n        this.iTimer = null;\n        this.container = container;\n        this.rush();\n    }\n    EmyBus.prototype.build = function () {\n        var width = 200;\n        var height = 30;\n        var x = Math.random() * (index_1.windowWith - width);\n        new emy_1.default(this.container, {\n            size: 'big',\n            speed: 5,\n            basePostion: {\n                x: x,\n                y: height\n            }\n        });\n    };\n    EmyBus.prototype.rush = function () {\n        var _this = this;\n        console.log(111);\n        // let time = this.level === 'hard' ? 1200 : 800;\n        // time = this.level === 'easy' ? 400 : 800;\n        var time = 400;\n        this.iTimer = setInterval(function () {\n            return _this.build();\n        }, time);\n        return this;\n    };\n    return EmyBus;\n}();\nexports.default = EmyBus;\n\n//# sourceURL=webpack:///./app/src/components/emyBus.ts?");

/***/ }),

/***/ "./app/src/components/self.ts":
/*!************************************!*\
  !*** ./app/src/components/self.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ../constant/index */ \"./app/src/constant/index.ts\");\nvar index_2 = __webpack_require__(/*! ../utils/index */ \"./app/src/utils/index.ts\");\nvar biu_1 = __webpack_require__(/*! ./biu */ \"./app/src/components/biu.ts\");\nvar UUID = __webpack_require__(/*! uuid-js */ \"./node_modules/uuid-js/lib/uuid.js\");\nvar Self = /** @class */function () {\n    function Self(container, options) {\n        var _this = this;\n        this.iTimer = null;\n        this.level = 'normal';\n        //  暴露出去\n        this.init = function () {\n            if (!!_this.el) {\n                console.warn('单个实例只能生成一个tank');\n                return _this;\n            }\n            var oDiv = document.createElement('div');\n            oDiv.className = 'self';\n            oDiv.style.width = _this.width + 'px';\n            oDiv.style.height = _this.height + 'px';\n            oDiv.style.bottom = '0px';\n            var nLeft = index_1.windowWith * index_2.getArrayRandom(index_1.rangeNumList);\n            oDiv.style.left = _this.getPositionX(nLeft) + 'px';\n            _this.container.appendChild(oDiv);\n            _this.el = oDiv;\n            _this.move();\n            return _this;\n        };\n        this.width = options.width;\n        this.height = options.height;\n        this.level = options.level;\n        this.container = container;\n        this.key = UUID.create();\n    }\n    Self.prototype.getPositionX = function (num) {\n        if (index_1.windowWith - num < this.width) {\n            return index_1.windowWith - this.width;\n        } else if (num < 0) {\n            return 0;\n        } else {\n            return num;\n        }\n    };\n    Self.prototype.move = function () {\n        var _this = this;\n        this.el.onmousedown = function (e) {\n            // console.log(this);\n            _this.mouseDownX = e.pageX;\n            document.onmouseup = function () {\n                document.onmousemove = null;\n                document.onmouseup = null;\n            };\n            document.onmousemove = function (e) {\n                var pageX = e.pageX;\n                var dx = Number(pageX) - Number(_this.mouseDownX);\n                var elX = _this.el.offsetLeft;\n                var newX = Number(elX) + dx;\n                _this.el.style.left = _this.getPositionX(newX) + 'px';\n                _this.mouseDownX = pageX;\n            };\n        };\n    };\n    Self.prototype.biu = function () {\n        var _this = this;\n        var time = this.level === 'hard' ? 1200 : 800;\n        time = this.level === 'easy' ? 400 : 800;\n        this.iTimer = setInterval(function () {\n            return _this.initBiu();\n        }, time);\n        return this;\n    };\n    Self.prototype.initBiu = function () {\n        var elX = this.el.offsetLeft;\n        new biu_1.default(this.container, {\n            size: 'big',\n            speed: 5,\n            basePostion: {\n                x: Number(elX) + this.width / 2,\n                y: this.height + 10\n            }\n        });\n    };\n    Self.prototype.stop = function () {\n        return this;\n    };\n    return Self;\n}();\n;\nexports.default = Self;\n\n//# sourceURL=webpack:///./app/src/components/self.ts?");

/***/ }),

/***/ "./app/src/constant/index.ts":
/*!***********************************!*\
  !*** ./app/src/constant/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.windowWith = window.innerWidth;\nexports.windowHeight = window.innerHeight;\nexports.rangeNumList = [0, 0, 1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];\n\n//# sourceURL=webpack:///./app/src/constant/index.ts?");

/***/ }),

/***/ "./app/src/index.ts":
/*!**************************!*\
  !*** ./app/src/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar self_1 = __webpack_require__(/*! ./components/self */ \"./app/src/components/self.ts\");\nvar emyBus_1 = __webpack_require__(/*! ./components/emyBus */ \"./app/src/components/emyBus.ts\");\nvar root = document.getElementById('root');\nvar self = new self_1.default(root, {\n    width: 100,\n    height: 120,\n    level: 'easy'\n});\nnew emyBus_1.default(root);\n// const self2 = new Self(root,{\n//     width: 100,\n//     height: 120\n// });\nself.init().biu();\n// self2.init();\n// console.log(111);\n\n//# sourceURL=webpack:///./app/src/index.ts?");

/***/ }),

/***/ "./app/src/utils/index.ts":
/*!********************************!*\
  !*** ./app/src/utils/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getArrayRandom(arr) {\n    var rangeLen = arr && arr.length;\n    if (!rangeLen) {\n        console.error('传入数组有误');\n        return 0;\n    }\n    var index = Math.floor(Math.random() * rangeLen);\n    return arr[index];\n}\nexports.getArrayRandom = getArrayRandom;\n\n//# sourceURL=webpack:///./app/src/utils/index.ts?");

/***/ }),

/***/ "./node_modules/uuid-js/lib/uuid.js":
/*!******************************************!*\
  !*** ./node_modules/uuid-js/lib/uuid.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * UUID-js: A js library to generate and parse UUIDs, TimeUUIDs and generate\n * TimeUUID based on dates for range selections.\n * @see http://www.ietf.org/rfc/rfc4122.txt\n **/\n\nfunction UUIDjs() {\n};\n\nUUIDjs.maxFromBits = function(bits) {\n  return Math.pow(2, bits);\n};\n\nUUIDjs.limitUI04 = UUIDjs.maxFromBits(4);\nUUIDjs.limitUI06 = UUIDjs.maxFromBits(6);\nUUIDjs.limitUI08 = UUIDjs.maxFromBits(8);\nUUIDjs.limitUI12 = UUIDjs.maxFromBits(12);\nUUIDjs.limitUI14 = UUIDjs.maxFromBits(14);\nUUIDjs.limitUI16 = UUIDjs.maxFromBits(16);\nUUIDjs.limitUI32 = UUIDjs.maxFromBits(32);\nUUIDjs.limitUI40 = UUIDjs.maxFromBits(40);\nUUIDjs.limitUI48 = UUIDjs.maxFromBits(48);\n\n// Returns a random integer between min and max\n// Using Math.round() will give you a non-uniform distribution!\n// @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nUUIDjs.randomUI04 = function() {\n  return getRandomInt(0, UUIDjs.limitUI04-1);\n};\nUUIDjs.randomUI06 = function() {\n  return getRandomInt(0, UUIDjs.limitUI06-1);\n};\nUUIDjs.randomUI08 = function() {\n  return getRandomInt(0, UUIDjs.limitUI08-1);\n};\nUUIDjs.randomUI12 = function() {\n  return getRandomInt(0, UUIDjs.limitUI12-1);\n};\nUUIDjs.randomUI14 = function() {\n  return getRandomInt(0, UUIDjs.limitUI14-1);\n};\nUUIDjs.randomUI16 = function() {\n  return getRandomInt(0, UUIDjs.limitUI16-1);\n};\nUUIDjs.randomUI32 = function() {\n  return getRandomInt(0, UUIDjs.limitUI32-1);\n};\nUUIDjs.randomUI40 = function() {\n  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 40 - 30)) * (1 << 30);\n};\nUUIDjs.randomUI48 = function() {\n  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 48 - 30)) * (1 << 30);\n};\n\nUUIDjs.paddedString = function(string, length, z) {\n  string = String(string);\n  z = (!z) ? '0' : z;\n  var i = length - string.length;\n  for (; i > 0; i >>>= 1, z += z) {\n    if (i & 1) {\n      string = z + string;\n    }\n  }\n  return string;\n};\n\nUUIDjs.prototype.fromParts = function(timeLow, timeMid, timeHiAndVersion, clockSeqHiAndReserved, clockSeqLow, node) {\n  this.version = (timeHiAndVersion >> 12) & 0xF;\n  this.hex = UUIDjs.paddedString(timeLow.toString(16), 8)\n             + '-'\n             + UUIDjs.paddedString(timeMid.toString(16), 4)\n             + '-'\n             + UUIDjs.paddedString(timeHiAndVersion.toString(16), 4)\n             + '-'\n             + UUIDjs.paddedString(clockSeqHiAndReserved.toString(16), 2)\n             + UUIDjs.paddedString(clockSeqLow.toString(16), 2)\n             + '-'\n             + UUIDjs.paddedString(node.toString(16), 12);\n  return this;\n};\n\nUUIDjs.prototype.toString = function() {\n  return this.hex;\n};\nUUIDjs.prototype.toURN = function() {\n  return 'urn:uuid:' + this.hex;\n};\n\nUUIDjs.prototype.toBytes = function() {\n  var parts = this.hex.split('-');\n  var ints = [];\n  var intPos = 0;\n  for (var i = 0; i < parts.length; i++) {\n    for (var j = 0; j < parts[i].length; j+=2) {\n      ints[intPos++] = parseInt(parts[i].substr(j, 2), 16);\n    }\n  }\n  return ints;\n};\n\nUUIDjs.prototype.equals = function(uuid) {\n  if (!(uuid instanceof UUID)) {\n    return false;\n  }\n  if (this.hex !== uuid.hex) {\n    return false;\n  }\n  return true;\n};\n\nUUIDjs.getTimeFieldValues = function(time) {\n  var ts = time - Date.UTC(1582, 9, 15);\n  var hm = ((ts / 0x100000000) * 10000) & 0xFFFFFFF;\n  return { low: ((ts & 0xFFFFFFF) * 10000) % 0x100000000,\n            mid: hm & 0xFFFF, hi: hm >>> 16, timestamp: ts };\n};\n\nUUIDjs._create4 = function() {\n  return new UUIDjs().fromParts(\n    UUIDjs.randomUI32(),\n    UUIDjs.randomUI16(),\n    0x4000 | UUIDjs.randomUI12(),\n    0x80   | UUIDjs.randomUI06(),\n    UUIDjs.randomUI08(),\n    UUIDjs.randomUI48()\n  );\n};\n\nUUIDjs._create1 = function() {\n  var now = new Date().getTime();\n  var sequence = UUIDjs.randomUI14();\n  var node = (UUIDjs.randomUI08() | 1) * 0x10000000000 + UUIDjs.randomUI40();\n  var tick = UUIDjs.randomUI04();\n  var timestamp = 0;\n  var timestampRatio = 1/4;\n\n  if (now != timestamp) {\n    if (now < timestamp) {\n      sequence++;\n    }\n    timestamp = now;\n    tick = UUIDjs.randomUI04();\n  } else if (Math.random() < timestampRatio && tick < 9984) {\n    tick += 1 + UUIDjs.randomUI04();\n  } else {\n    sequence++;\n  }\n\n  var tf = UUIDjs.getTimeFieldValues(timestamp);\n  var tl = tf.low + tick;\n  var thav = (tf.hi & 0xFFF) | 0x1000;\n\n  sequence &= 0x3FFF;\n  var cshar = (sequence >>> 8) | 0x80;\n  var csl = sequence & 0xFF;\n\n  return new UUIDjs().fromParts(tl, tf.mid, thav, cshar, csl, node);\n};\n\nUUIDjs.create = function(version) {\n  version = version || 4;\n  return this['_create' + version]();\n};\n\nUUIDjs.fromTime = function(time, last) {\n  last = (!last) ? false : last;\n  var tf = UUIDjs.getTimeFieldValues(time);\n  var tl = tf.low;\n  var thav = (tf.hi & 0xFFF) | 0x1000;  // set version '0001'\n  if (last === false) {\n    return new UUIDjs().fromParts(tl, tf.mid, thav, 0, 0, 0);\n  } else {\n    return new UUIDjs().fromParts(tl, tf.mid, thav, 0x80 | UUIDjs.limitUI06, UUIDjs.limitUI08 - 1, UUIDjs.limitUI48 - 1);\n  }\n};\n\nUUIDjs.firstFromTime = function(time) {\n  return UUIDjs.fromTime(time, false);\n};\nUUIDjs.lastFromTime = function(time) {\n  return UUIDjs.fromTime(time, true);\n};\n\nUUIDjs.fromURN = function(strId) {\n  var r, p = /^(?:urn:uuid:|\\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\\})?$/i;\n  if ((r = p.exec(strId))) {\n    return new UUIDjs().fromParts(parseInt(r[1], 16), parseInt(r[2], 16),\n                            parseInt(r[3], 16), parseInt(r[4], 16),\n                            parseInt(r[5], 16), parseInt(r[6], 16));\n  }\n  return null;\n};\n\nUUIDjs.fromBytes = function(ints) {\n  if (ints.length < 5) {\n    return null;\n  }\n  var str = '';\n  var pos = 0;\n  var parts = [4, 2, 2, 2, 6];\n  for (var i = 0; i < parts.length; i++) {\n    for (var j = 0; j < parts[i]; j++) {\n      var octet = ints[pos++].toString(16);\n      if (octet.length == 1) {\n        octet = '0' + octet;\n      }\n      str += octet;\n    }\n    if (parts[i] !== 6) {\n      str += '-';\n    }\n  }\n  return UUIDjs.fromURN(str);\n};\n\nUUIDjs.fromBinary = function(binary) {\n  var ints = [];\n  for (var i = 0; i < binary.length; i++) {\n    ints[i] = binary.charCodeAt(i);\n    if (ints[i] > 255 || ints[i] < 0) {\n      throw new Error('Unexpected byte in binary data.');\n    }\n  }\n  return UUIDjs.fromBytes(ints);\n};\n\n// Aliases to support legacy code. Do not use these when writing new code as\n// they may be removed in future versions!\nUUIDjs.new = function() {\n  return this.create(4);\n};\nUUIDjs.newTS = function() {\n  return this.create(1);\n};\n\nmodule.exports = UUIDjs;\n\n\n//# sourceURL=webpack:///./node_modules/uuid-js/lib/uuid.js?");

/***/ })

/******/ });