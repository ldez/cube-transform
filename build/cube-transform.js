window["cube-trasform"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlgorithmTransformer = function () {
  function AlgorithmTransformer(moveTransformer, sequenceParser) {
    _classCallCheck(this, AlgorithmTransformer);

    this.moveTransformer = moveTransformer;
    this.sequenceParser = sequenceParser;
  }

  _createClass(AlgorithmTransformer, [{
    key: 'oppositeAlgorithm',
    value: function oppositeAlgorithm(algorithm) {
      var _this = this;

      return this.sequenceParser.toSubSeqences(algorithm).reverse().map(function (subSequence) {
        subSequence.inverse = _this.sequenceParser.toMoves(subSequence.moves).reverse().map(_this.moveTransformer.opposite).join(' ');

        return subSequence;
      }).map(function (subSequence) {
        return '' + subSequence.start + subSequence.inverse + subSequence.end;
      }).join(' ');
    }
  }, {
    key: 'rotateAlgorithm',
    value: function rotateAlgorithm(algorithm, axe) {
      var _this2 = this;

      return this.sequenceParser.toSubSeqences(algorithm).map(function (subSequence) {
        subSequence.rotate = _this2.sequenceParser.toMoves(subSequence.moves).map(function (move) {
          return _this2.moveTransformer.rotate(move, axe);
        }).join(' ');

        return subSequence;
      }).map(function (subSequence) {
        return '' + subSequence.start + subSequence.rotate + subSequence.end;
      }).join(' ');
    }
  }]);

  return AlgorithmTransformer;
}();

exports.default = AlgorithmTransformer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var allRotations = {
  axeX: {
    U: "B",
    D: "F",
    R: "R",
    L: "L",
    F: "U",
    B: "D",
    u: "b",
    d: "f",
    r: "r",
    l: "l",
    f: "u",
    b: "d",
    x: "x",
    y: "z'",
    z: "y'"
  },
  axeXPrime: {
    U: "F",
    D: "B",
    R: "R",
    L: "L",
    F: "D",
    B: "F",
    u: "f",
    d: "b",
    r: "r",
    l: "l",
    f: "d",
    b: "f",
    x: "x",
    y: "z",
    z: "y"
  },

  axeY: {
    U: "U",
    D: "D",
    R: "F",
    L: "B",
    F: "L",
    B: "R",
    u: "u",
    d: "d",
    r: "f",
    l: "b",
    f: "l",
    b: "r",
    x: "z'",
    y: "y",
    z: "x'"
  },
  axeYPrime: {
    U: "U",
    D: "D",
    R: "B",
    L: "F",
    F: "R",
    B: "L",
    u: "u",
    d: "d",
    r: "b",
    l: "f",
    f: "r",
    b: "l",
    x: "z",
    y: "y",
    z: "x"
  },

  axeZ: {
    U: "R",
    D: "L",
    R: "D",
    L: "U",
    F: "F",
    B: "B",
    u: "r",
    d: "l",
    r: "d",
    l: "u",
    f: "f",
    b: "b",
    x: "y'",
    y: "x",
    z: "z"
  },
  axeZPrime: {
    U: "L",
    D: "R",
    R: "U",
    L: "D",
    F: "F",
    B: "B",
    u: "l",
    d: "r",
    r: "u",
    l: "d",
    f: "f",
    b: "b",
    x: "y",
    y: "x'",
    z: "z"
  }
};

var MoveAnalyzer = function () {
  function MoveAnalyzer() {
    _classCallCheck(this, MoveAnalyzer);
  }

  _createClass(MoveAnalyzer, [{
    key: "opposite",
    value: function opposite(move) {
      if (move.indexOf("'") === -1) {
        return move + "'";
      }
      return move.replace("\'", '');
    }
  }, {
    key: "_rotate",
    value: function _rotate(move, axeRotations) {
      var _destructure = this.destructure(move),
          unit = _destructure.unit,
          extra = _destructure.extra;

      return this.normalize(axeRotations[unit] + extra);
    }
  }, {
    key: "rotate",
    value: function rotate(move, axe) {
      var result = void 0;
      if (axe === 'x') {
        result = this._rotate(move, allRotations.axeX);
      } else if (axe === "x'") {
        result = this._rotate(move, allRotations.axeXPrime);
      } else if (axe === "y") {
        result = this._rotate(move, allRotations.axeY);
      } else if (axe === "y'") {
        result = this._rotate(move, allRotations.axeYPrime);
      } else if (axe === "z") {
        result = this._rotate(move, allRotations.axeZ);
      } else if (axe === "z'") {
        result = this._rotate(move, allRotations.axeZPrime);
      } else {
        result = "fuck !";
      }
      return result;
    }
  }, {
    key: "destructure",
    value: function destructure(move) {
      var moveRegex = /([A-Za-z])(['|\d]{0,2})/g;

      var moves = {};
      var temp = void 0;
      while ((temp = moveRegex.exec(move)) !== null) {
        moves.unit = temp[1];
        moves.extra = temp[2];
      }
      return moves;
    }
  }, {
    key: "normalize",
    value: function normalize(move) {
      return move.replace("''", "");
    }
  }]);

  return MoveAnalyzer;
}();

exports.default = MoveAnalyzer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequenceParser = function () {
  function SequenceParser() {
    _classCallCheck(this, SequenceParser);
  }

  _createClass(SequenceParser, [{
    key: "toMoves",
    value: function toMoves(sequence) {
      var moveRegex = /([A-Za-z]['|\d]{0,2})/g;

      var moves = [];
      var temp = void 0;
      while ((temp = moveRegex.exec(sequence)) !== null) {
        moves.push(temp[0]);
      }
      return moves;
    }
  }, {
    key: "toSubSeqences",
    value: function toSubSeqences(rawSequence) {
      var subSequenceRegex = /([\(]?)([^\(^\)]+)((\)\d?)?)/g;

      var subSequences = [];

      var temp = void 0;
      while ((temp = subSequenceRegex.exec(rawSequence)) !== null) {
        var expr = {
          start: temp[1],
          moves: temp[2],
          end: temp[3]
        };
        subSequences.push(expr);
      }
      return subSequences;
    }
  }]);

  return SequenceParser;
}();

exports.default = SequenceParser;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.algorithmTransformer = undefined;

var _moveTransformer = __webpack_require__(1);

var _moveTransformer2 = _interopRequireDefault(_moveTransformer);

var _sequenceParser = __webpack_require__(2);

var _sequenceParser2 = _interopRequireDefault(_sequenceParser);

var _algorithmTransformer = __webpack_require__(0);

var _algorithmTransformer2 = _interopRequireDefault(_algorithmTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ma = new _moveTransformer2.default();
var sa = new _sequenceParser2.default();

var algorithmTransformer = new _algorithmTransformer2.default(ma, sa);

exports.algorithmTransformer = algorithmTransformer;

/***/ })
/******/ ]);
//# sourceMappingURL=cube-transform.js.map