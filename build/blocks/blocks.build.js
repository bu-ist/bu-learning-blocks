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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks.scss */ "./src/blocks.scss");
/* harmony import */ var _blocks_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_bulb_cn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/bulb-cn/index.js */ "./src/blocks/bulb-cn/index.js");
/* harmony import */ var _blocks_bulb_ma_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/bulb-ma/index.js */ "./src/blocks/bulb-ma/index.js");
/* harmony import */ var _blocks_bulb_mc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/bulb-mc/index.js */ "./src/blocks/bulb-mc/index.js");
/* harmony import */ var _blocks_bulb_tf_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/bulb-tf/index.js */ "./src/blocks/bulb-tf/index.js");
/* harmony import */ var _blocks_bulb_fitb_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/bulb-fitb/index.js */ "./src/blocks/bulb-fitb/index.js");
/* harmony import */ var _blocks_bulb_mat_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/bulb-mat/index.js */ "./src/blocks/bulb-mat/index.js");
/* harmony import */ var _blocks_bulb_video_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/bulb-video/index.js */ "./src/blocks/bulb-video/index.js");
/**
 * BULB Blocks
 *
 * Register blocks in Gutenberg..

 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */









/***/ }),

/***/ "./src/blocks.scss":
/*!*************************!*\
  !*** ./src/blocks.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/bulb-cn/CalculatedNumericAnswer.js":
/*!*******************************************************!*\
  !*** ./src/blocks/bulb-cn/CalculatedNumericAnswer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FloatInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/FloatInput */ "./src/components/FloatInput.js");

var Fragment = wp.element.Fragment;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var answer = _ref.answer,
      answerRange = _ref.answerRange,
      decimalPlaces = _ref.decimalPlaces,
      onChangeAnswer = _ref.onChangeAnswer,
      onChangeAnswerRange = _ref.onChangeAnswerRange,
      onChangeDecimalPlaces = _ref.onChangeDecimalPlaces;

  var renderPossibleAnswers = function renderPossibleAnswers() {
    var answerFloat = parseFloat(answer);
    var answerRangeFloat = parseFloat(answerRange);
    var min = (answerFloat - answerRangeFloat).toFixed(decimalPlaces);
    var max = (answerFloat + answerRangeFloat).toFixed(decimalPlaces);
    var interval = 1 / Math.pow(10, decimalPlaces);
    var nearestLess = answerFloat - interval;
    var nearestGreater = answerFloat + interval;
    var nearestAnswers = [nearestLess, answerFloat, nearestGreater].map(function (val) {
      return parseFloat(val).toFixed(decimalPlaces);
    });
    var nearestAnswersItems = nearestAnswers.map(function (possibleAnswer, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: index
      }, possibleAnswer);
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Examples of the nearest acceptable answers:"), nearestAnswersItems.length ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("ul", {
      className: "possible-answers-list"
    }, nearestAnswersItems), /*#__PURE__*/React.createElement("div", null, " Minimum: ", min, ", Maximum: ", max)) : 'No possible answers found');
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Answer:"), /*#__PURE__*/React.createElement(_components_FloatInput__WEBPACK_IMPORTED_MODULE_0__["default"], {
    value: answer,
    onChange: onChangeAnswer
  }), /*#__PURE__*/React.createElement("h5", null, "Accepted Range:"), /*#__PURE__*/React.createElement(_components_FloatInput__WEBPACK_IMPORTED_MODULE_0__["default"], {
    value: answerRange,
    onChange: onChangeAnswerRange
  }), /*#__PURE__*/React.createElement("h5", null, "Decimal Places:"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "1",
    min: "0",
    max: "100",
    value: decimalPlaces,
    onChange: function onChange(event) {
      return onChangeDecimalPlaces(event.target.value);
    }
  }), answerRange !== '0' && renderPossibleAnswers());
});

/***/ }),

/***/ "./src/blocks/bulb-cn/index.js":
/*!*************************************!*\
  !*** ./src/blocks/bulb-cn/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Question */ "./src/components/Question.js");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Controls */ "./src/components/Controls.js");
/* harmony import */ var _CalculatedNumericAnswer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalculatedNumericAnswer */ "./src/blocks/bulb-cn/CalculatedNumericAnswer.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/bulb-cn/styles/editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Block dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;



 // Register the block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('bulb/question-cn', {
  title: __('BULB - Calculated Numeric', 'bu-learning-blocks'),
  description: __('Add a Calculated Numeric question to your learning module.'),
  icon: 'welcome-learn-more',
  category: 'bu-learning-blocks',
  keywords: [__('bu-learning-block', 'bu-learning-blocks'), __('BULB', 'bu-learning-blocks'), __('Calculated Numeric Question', 'bu-learning-blocks')],
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        id = _props$attributes.id,
        type = _props$attributes.type,
        header = _props$attributes.header,
        body = _props$attributes.body,
        answer = _props$attributes.answer,
        answerRange = _props$attributes.answerRange,
        decimalPlaces = _props$attributes.decimalPlaces,
        feedback = _props$attributes.feedback,
        fontSize = _props$attributes.fontSize,
        textAlignment = _props$attributes.textAlignment,
        textColorControl = _props$attributes.textColorControl,
        backgroundColorControl = _props$attributes.backgroundColorControl,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    if (!id) {
      setAttributes({
        id: 'bulb_question_' + clientId.replace(/-/g, '')
      });
    }

    var onSimpleAttributeChange = function onSimpleAttributeChange(attribute) {
      return function (value) {
        setAttributes(_defineProperty({}, attribute, value));
      };
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "bulb-question-cn"
    }, /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_1__["default"], props), /*#__PURE__*/React.createElement(_components_Question__WEBPACK_IMPORTED_MODULE_0__["default"], {
      classes: ["bulb-question-".concat(type)],
      header: header,
      onChangeHeader: onSimpleAttributeChange('header'),
      body: body,
      onChangeBody: onSimpleAttributeChange('body'),
      singleFeedback: true,
      feedback: feedback,
      onChangeFeedback: onSimpleAttributeChange('feedback'),
      textAlignment: textAlignment,
      textColorControl: textColorControl,
      backgroundColorControl: backgroundColorControl,
      fontSize: fontSize
    }, /*#__PURE__*/React.createElement(_CalculatedNumericAnswer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      answer: answer,
      answerRange: answerRange,
      decimalPlaces: decimalPlaces,
      onChangeAnswer: onSimpleAttributeChange('answer'),
      onChangeAnswerRange: onSimpleAttributeChange('answerRange'),
      onChangeDecimalPlaces: onSimpleAttributeChange('decimalPlaces')
    }))));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "./src/blocks/bulb-cn/styles/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/bulb-cn/styles/editor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/bulb-fitb/FillInTheBlankAnswer.js":
/*!******************************************************!*\
  !*** ./src/blocks/bulb-fitb/FillInTheBlankAnswer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var answer = _ref.answer,
      onChangeAnswer = _ref.onChangeAnswer;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Answer:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    size: "50",
    value: answer,
    onChange: function onChange(event) {
      return onChangeAnswer(event.target.value);
    }
  }));
});

/***/ }),

/***/ "./src/blocks/bulb-fitb/index.js":
/*!***************************************!*\
  !*** ./src/blocks/bulb-fitb/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Question */ "./src/components/Question.js");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Controls */ "./src/components/Controls.js");
/* harmony import */ var _FillInTheBlankAnswer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FillInTheBlankAnswer */ "./src/blocks/bulb-fitb/FillInTheBlankAnswer.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Block dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    FormToggle = _wp$components.FormToggle;


 // Register the block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('bulb/question-fitb', {
  title: __('BULB - Fill in the Blank', 'bu-learning-blocks'),
  description: __('Add a Fill in the Blank question to your learning module.'),
  icon: 'welcome-learn-more',
  category: 'bu-learning-blocks',
  keywords: [__('bu-learning-block', 'bu-learning-blocks'), __('BULB', 'bu-learning-blocks'), __('Fill in the Blank Question', 'bu-learning-blocks')],
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        id = _props$attributes.id,
        type = _props$attributes.type,
        header = _props$attributes.header,
        body = _props$attributes.body,
        answer = _props$attributes.answer,
        feedback = _props$attributes.feedback,
        caseSensitive = _props$attributes.caseSensitive,
        fontSize = _props$attributes.fontSize,
        textAlignment = _props$attributes.textAlignment,
        textColorControl = _props$attributes.textColorControl,
        backgroundColorControl = _props$attributes.backgroundColorControl,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    if (!id) {
      setAttributes({
        id: 'bulb_question_' + clientId.replace(/-/g, '')
      });
    }

    var onSimpleAttributeChange = function onSimpleAttributeChange(attribute) {
      return function (value) {
        setAttributes(_defineProperty({}, attribute, value));
      };
    };

    var toggleCaseSensitivity = function toggleCaseSensitivity(event) {
      return setAttributes({
        caseSensitive: !!event.target.checked
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "bulb-question-fitb"
    }, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "bulb-fitb-case-sensitivity"
    }, __('Case sensitivity', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(FormToggle, {
      id: "bulb-fitb-case-sensitivity",
      label: __('Case sensitivity', 'bu-learning-blocks'),
      checked: caseSensitive,
      onChange: toggleCaseSensitivity
    })))), /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_1__["default"], props), /*#__PURE__*/React.createElement(_components_Question__WEBPACK_IMPORTED_MODULE_0__["default"], {
      classes: ["bulb-question-".concat(type)],
      header: header,
      onChangeHeader: onSimpleAttributeChange('header'),
      body: body,
      onChangeBody: onSimpleAttributeChange('body'),
      feedback: feedback,
      onChangeFeedback: onSimpleAttributeChange('feedback'),
      textAlignment: textAlignment,
      textColorControl: textColorControl,
      backgroundColorControl: backgroundColorControl,
      fontSize: fontSize
    }, /*#__PURE__*/React.createElement(_FillInTheBlankAnswer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      answer: answer,
      onChangeAnswer: onSimpleAttributeChange('answer')
    }))));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "./src/blocks/bulb-ma/index.js":
/*!*************************************!*\
  !*** ./src/blocks/bulb-ma/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Question */ "./src/components/Question.js");
/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Answers */ "./src/components/Answers.js");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Controls */ "./src/components/Controls.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Block dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;


 // Register the block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('bulb/question-ma', {
  title: __('BULB - Multiple Answer', 'bu-learning-blocks'),
  description: __('Add a Multiple Answer question to your learning module.'),
  icon: 'welcome-learn-more',
  category: 'bu-learning-blocks',
  keywords: [__('bu-learning-block', 'bu-learning-blocks'), __('BULB', 'bu-learning-blocks'), __('Multiple Answer Question', 'bu-learning-blocks')],
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        id = _props$attributes.id,
        type = _props$attributes.type,
        header = _props$attributes.header,
        body = _props$attributes.body,
        answers = _props$attributes.answers,
        feedback = _props$attributes.feedback,
        fontSize = _props$attributes.fontSize,
        textAlignment = _props$attributes.textAlignment,
        textColorControl = _props$attributes.textColorControl,
        backgroundColorControl = _props$attributes.backgroundColorControl,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    if (!id) {
      setAttributes({
        id: 'bulb_question_' + clientId.replace(/-/g, '')
      });
    }

    var onSimpleAttributeChange = function onSimpleAttributeChange(attribute) {
      return function (value) {
        setAttributes(_defineProperty({}, attribute, value));
      };
    };

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), /*#__PURE__*/React.createElement(_components_Question__WEBPACK_IMPORTED_MODULE_0__["default"], {
      classes: ["bulb-question-".concat(type)],
      header: header,
      onChangeHeader: onSimpleAttributeChange('header'),
      body: body,
      onChangeBody: onSimpleAttributeChange('body'),
      feedback: feedback,
      onChangeFeedback: onSimpleAttributeChange('feedback'),
      textAlignment: textAlignment,
      textColorControl: textColorControl,
      backgroundColorControl: backgroundColorControl,
      fontSize: fontSize
    }, /*#__PURE__*/React.createElement(_components_Answers__WEBPACK_IMPORTED_MODULE_1__["default"], {
      answers: answers,
      onChangeAnswers: onSimpleAttributeChange('answers'),
      multipleCorrectAllowed: true,
      minAnswers: 2,
      maxAnswers: 6
    })));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "./src/blocks/bulb-mat/MatchingAnswer.js":
/*!***********************************************!*\
  !*** ./src/blocks/bulb-mat/MatchingAnswer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __ = wp.i18n.__;
var RichText = wp.editor.RichText;
var Fragment = wp.element.Fragment;
var SelectControl = wp.components.SelectControl;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var index = _ref.index,
      _ref$answer = _ref.answer,
      answer = _ref$answer === void 0 ? '' : _ref$answer,
      _ref$feedback = _ref.feedback,
      feedback = _ref$feedback === void 0 ? '' : _ref$feedback,
      _ref$correct = _ref.correct,
      correct = _ref$correct === void 0 ? '' : _ref$correct,
      answerCount = _ref.answerCount,
      feedbackPerAnswer = _ref.feedbackPerAnswer,
      onChangeAnswerValue = _ref.onChangeAnswerValue,
      onChangeFeedback = _ref.onChangeFeedback,
      onChangeCorrect = _ref.onChangeCorrect,
      onRemoveAnswer = _ref.onRemoveAnswer;
  return /*#__PURE__*/React.createElement("div", {
    className: "bulb-editor-answer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bulb-answer-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bulb-editor-answer-label"
  }, __('Prompt', 'bu-learning-blocks'), " ", index + 1), /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    placeholder: __('Prompt', 'bu-learning-blocks'),
    keepPlaceholderOnFocus: true,
    className: "answer-text",
    onChange: function onChange(newAnswerValue) {
      onChangeAnswerValue(newAnswerValue, index);
    },
    value: answer
  }), feedbackPerAnswer && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bulb-editor-answer-label-feedback"
  }, __('Answer', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    placeholder: __('Answer', 'bu-learning-blocks'),
    keepPlaceholderOnFocus: true,
    className: "answer-feedback",
    onChange: function onChange(newFeedback) {
      onChangeFeedback(newFeedback, index);
    },
    value: feedback
  })), /*#__PURE__*/React.createElement(SelectControl, {
    label: __('Sequence'),
    value: correct,
    onChange: function onChange(newCorrect) {
      return onChangeCorrect(newCorrect, index);
    } // Make A, B, C, D options for as many answers that currently exist.
    ,
    options: Array.from(Array(answerCount), function (x, i) {
      return {
        value: String.fromCharCode(65 + i),
        label: String.fromCharCode(65 + i)
      };
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "bulb-answer-controls"
  }, onRemoveAnswer && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onRemoveAnswer(index);
    }
  }, "X"))));
});

/***/ }),

/***/ "./src/blocks/bulb-mat/MatchingAnswers.js":
/*!************************************************!*\
  !*** ./src/blocks/bulb-mat/MatchingAnswers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MatchingAnswer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatchingAnswer */ "./src/blocks/bulb-mat/MatchingAnswer.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$answers = _ref.answers,
      answers = _ref$answers === void 0 ? [] : _ref$answers,
      onChangeAnswers = _ref.onChangeAnswers,
      _ref$minAnswers = _ref.minAnswers,
      minAnswers = _ref$minAnswers === void 0 ? 1 : _ref$minAnswers,
      _ref$maxAnswers = _ref.maxAnswers,
      maxAnswers = _ref$maxAnswers === void 0 ? 12 : _ref$maxAnswers,
      _ref$feedbackPerAnswe = _ref.feedbackPerAnswer,
      feedbackPerAnswer = _ref$feedbackPerAnswe === void 0 ? true : _ref$feedbackPerAnswe;

  var onChangeAnswerValue = function onChangeAnswerValue(newAnswerValue, index) {
    var newAnswers = _toConsumableArray(answers);

    newAnswers[index] = _objectSpread(_objectSpread({}, answers[index]), {}, {
      answer: newAnswerValue
    });
    onChangeAnswers(newAnswers);
  };

  var onChangeFeedback = function onChangeFeedback(newFeedback, index) {
    var newAnswers = _toConsumableArray(answers);

    newAnswers[index] = _objectSpread(_objectSpread({}, answers[index]), {}, {
      feedback: newFeedback
    });
    onChangeAnswers(newAnswers);
  };

  var onChangeCorrect = function onChangeCorrect(newCorrect, index) {
    var oldCorrect = answers[index].correct;
    var newAnswers = answers.map(function (answer) {
      // Correct propery must be unique, so swap for the old correct on a conflicting answer.
      if (answer.correct === newCorrect) {
        answer.correct = oldCorrect;
      }

      return answer;
    });
    newAnswers[index] = _objectSpread(_objectSpread({}, answers[index]), {}, {
      correct: newCorrect
    });
    onChangeAnswers(newAnswers);
  };

  var onAddAnswer = function onAddAnswer() {
    if (answers.length < maxAnswers) {
      // Add next letter as the default correct on new answers.
      var newAnswers = [].concat(_toConsumableArray(answers), [{
        answer: '',
        feedback: '',
        correct: String.fromCharCode(65 + answers.length)
      }]);
      onChangeAnswers(newAnswers);
    }
  };

  var onRemoveAnswer = function onRemoveAnswer(index) {
    if (answers.length > minAnswers) {
      var newAnswers = answers.filter(function (answer, i) {
        return index !== i;
      });
      onChangeAnswers(newAnswers);
    }
  };

  var renderAnswers = function renderAnswers() {
    var answerList = answers.map(function (answer, index) {
      return /*#__PURE__*/React.createElement(_MatchingAnswer__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
        key: index,
        index: index
      }, answer, {
        answerCount: answers.length,
        feedbackPerAnswer: feedbackPerAnswer,
        onChangeAnswerValue: onChangeAnswerValue,
        onChangeFeedback: onChangeFeedback,
        onChangeCorrect: onChangeCorrect,
        onRemoveAnswer: answers.length > minAnswers ? onRemoveAnswer : null
      }));
    });
    return answerList;
  };

  var renderAddAnswer = function renderAddAnswer() {
    if (answers.length < maxAnswers) {
      return /*#__PURE__*/React.createElement("button", {
        onClick: onAddAnswer
      }, "Add Pair");
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "bulb-editor-section-label"
  }, "Pairs"), renderAnswers(), renderAddAnswer());
});

/***/ }),

/***/ "./src/blocks/bulb-mat/index.js":
/*!**************************************!*\
  !*** ./src/blocks/bulb-mat/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Question */ "./src/components/Question.js");
/* harmony import */ var _MatchingAnswers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatchingAnswers */ "./src/blocks/bulb-mat/MatchingAnswers.js");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Controls */ "./src/components/Controls.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Block dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;


 // Register the block.

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('bulb/question-mat', {
  title: __('BULB - Matching', 'bu-learning-blocks'),
  description: __('Add a Matching question.'),
  icon: 'welcome-learn-more',
  category: 'bu-learning-blocks',
  keywords: [__('bu-learning-block', 'bu-learning-blocks'), __('BULB', 'bu-learning-blocks'), __('Matching Question', 'bu-learning-blocks')],
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        id = _props$attributes.id,
        type = _props$attributes.type,
        header = _props$attributes.header,
        body = _props$attributes.body,
        answers = _props$attributes.answers,
        feedback = _props$attributes.feedback,
        fontSize = _props$attributes.fontSize,
        textAlignment = _props$attributes.textAlignment,
        textColorControl = _props$attributes.textColorControl,
        backgroundColorControl = _props$attributes.backgroundColorControl,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    if (!id) {
      setAttributes({
        id: "bulb_question_".concat(clientId.replace(/-/g, ''))
      });
    }

    var onSimpleAttributeChange = function onSimpleAttributeChange(attribute) {
      return function (value) {
        setAttributes(_defineProperty({}, attribute, value));
      };
    };

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), /*#__PURE__*/React.createElement(_components_Question__WEBPACK_IMPORTED_MODULE_0__["default"], {
      classes: ["bulb-question-".concat(type)],
      header: header,
      onChangeHeader: onSimpleAttributeChange('header'),
      body: body,
      onChangeBody: onSimpleAttributeChange('body'),
      feedback: feedback,
      onChangeFeedback: onSimpleAttributeChange('feedback'),
      textAlignment: textAlignment,
      textColorControl: textColorControl,
      backgroundColorControl: backgroundColorControl,
      fontSize: fontSize
    }, /*#__PURE__*/React.createElement(_MatchingAnswers__WEBPACK_IMPORTED_MODULE_1__["default"], {
      answers: answers,
      onChangeAnswers: onSimpleAttributeChange('answers'),
      minAnswers: 2,
      maxAnswers: 12
    })));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "./src/blocks/bulb-mc/index.js":
/*!*************************************!*\
  !*** ./src/blocks/bulb-mc/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Question */ "./src/components/Question.js");
/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Answers */ "./src/components/Answers.js");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Controls */ "./src/components/Controls.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Block dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;


 // Register the block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('bulb/question-mc', {
  title: __('BULB - Multiple Choice', 'bu-learning-blocks'),
  description: __('Add a Multiple Choice question to your learning module.'),
  icon: 'welcome-learn-more',
  category: 'bu-learning-blocks',
  keywords: [__('bu-learning-block', 'bu-learning-blocks'), __('BULB', 'bu-learning-blocks'), __('Multiple Choice Question', 'bu-learning-blocks')],
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        id = _props$attributes.id,
        type = _props$attributes.type,
        header = _props$attributes.header,
        body = _props$attributes.body,
        answers = _props$attributes.answers,
        feedback = _props$attributes.feedback,
        fontSize = _props$attributes.fontSize,
        textAlignment = _props$attributes.textAlignment,
        textColorControl = _props$attributes.textColorControl,
        backgroundColorControl = _props$attributes.backgroundColorControl,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    if (!id) {
      setAttributes({
        id: 'bulb_question_' + clientId.replace(/-/g, '')
      });
    }

    var onSimpleAttributeChange = function onSimpleAttributeChange(attribute) {
      return function (value) {
        setAttributes(_defineProperty({}, attribute, value));
      };
    };

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), /*#__PURE__*/React.createElement(_components_Question__WEBPACK_IMPORTED_MODULE_0__["default"], {
      classes: ["bulb-question-".concat(type)],
      header: header,
      onChangeHeader: onSimpleAttributeChange('header'),
      body: body,
      onChangeBody: onSimpleAttributeChange('body'),
      feedback: feedback,
      onChangeFeedback: onSimpleAttributeChange('feedback'),
      textAlignment: textAlignment,
      textColorControl: textColorControl,
      backgroundColorControl: backgroundColorControl,
      fontSize: fontSize
    }, /*#__PURE__*/React.createElement(_components_Answers__WEBPACK_IMPORTED_MODULE_1__["default"], {
      answers: answers,
      onChangeAnswers: onSimpleAttributeChange('answers'),
      multipleCorrectAllowed: false,
      minAnswers: 2,
      maxAnswers: 6
    })));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "./src/blocks/bulb-tf/index.js":
/*!*************************************!*\
  !*** ./src/blocks/bulb-tf/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Question */ "./src/components/Question.js");
/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Answers */ "./src/components/Answers.js");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Controls */ "./src/components/Controls.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Block dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;


 // Register the block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('bulb/question-tf', {
  title: __('BULB - True/False', 'bu-learning-blocks'),
  description: __('Add a TRUE/FALSE question to your learning module.'),
  icon: 'welcome-learn-more',
  category: 'bu-learning-blocks',
  keywords: [__('bu-learning-block', 'bu-learning-blocks'), __('BULB', 'bu-learning-blocks'), __('True False Question', 'bu-learning-blocks')],
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        id = _props$attributes.id,
        type = _props$attributes.type,
        header = _props$attributes.header,
        body = _props$attributes.body,
        answers = _props$attributes.answers,
        feedback = _props$attributes.feedback,
        fontSize = _props$attributes.fontSize,
        textAlignment = _props$attributes.textAlignment,
        textColorControl = _props$attributes.textColorControl,
        backgroundColorControl = _props$attributes.backgroundColorControl,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    if (!id) {
      setAttributes({
        id: 'bulb_question_' + clientId.replace(/-/g, '')
      });
    }

    var onSimpleAttributeChange = function onSimpleAttributeChange(attribute) {
      return function (value) {
        setAttributes(_defineProperty({}, attribute, value));
      };
    };

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), /*#__PURE__*/React.createElement(_components_Question__WEBPACK_IMPORTED_MODULE_0__["default"], {
      classes: ["bulb-question-".concat(type)],
      header: header,
      onChangeHeader: onSimpleAttributeChange('header'),
      body: body,
      onChangeBody: onSimpleAttributeChange('body'),
      feedback: feedback,
      onChangeFeedback: onSimpleAttributeChange('feedback'),
      textAlignment: textAlignment,
      textColorControl: textColorControl,
      backgroundColorControl: backgroundColorControl,
      fontSize: fontSize
    }, /*#__PURE__*/React.createElement(_components_Answers__WEBPACK_IMPORTED_MODULE_1__["default"], {
      answers: answers,
      onChangeAnswers: onSimpleAttributeChange('answers'),
      multipleCorrectAllowed: false,
      feedbackPerAnswer: false,
      minAnswers: 2,
      maxAnswers: 2
    })));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "./src/blocks/bulb-video/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/bulb-video/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('YouTube ID', 'bu-learning-blocks'),
    value: attributes.youtubeID,
    onChange: function onChange(val) {
      return setAttributes({
        youtubeID: val
      });
    }
  }));
}

/***/ }),

/***/ "./src/blocks/bulb-video/index.js":
/*!****************************************!*\
  !*** ./src/blocks/bulb-video/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/bulb-video/edit.js");
/* harmony import */ var _styles_frontend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/_frontend.scss */ "./src/blocks/bulb-video/styles/_frontend.scss");
/* harmony import */ var _styles_frontend_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_frontend_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Block dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

 // Register the block.

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('bulb/video', {
  title: __('BULB - Video', 'bu-learning-blocks'),
  description: __('Add a video with transcript.'),
  icon: 'welcome-learn-more',
  category: 'bu-learning-blocks',
  keywords: [__('bu-learning-block', 'bu-learning-blocks'), __('BULB', 'bu-learning-blocks'), __('Video', 'bu-learning-blocks')],
  supports: {
    align: ['full']
  },
  attributes: {
    align: {
      type: 'string',
      "default": 'full'
    },
    youtubeID: {
      type: 'string',
      "default": 'bNTSO3D5bc8'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return /*#__PURE__*/React.createElement("div", {
      className: "bulb-video"
    }, /*#__PURE__*/React.createElement("div", {
      "data-youtubeID": attributes.youtubeID,
      className: "bulb-video-player"
    }));
  }
}));

/***/ }),

/***/ "./src/blocks/bulb-video/styles/_frontend.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/bulb-video/styles/_frontend.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Answer.js":
/*!**********************************!*\
  !*** ./src/components/Answer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Answer; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
 // Helper library to add classnames to a component

var __ = wp.i18n.__;
var RichText = wp.editor.RichText;
var Fragment = wp.element.Fragment;
function Answer(_ref) {
  var index = _ref.index,
      _ref$answer = _ref.answer,
      answer = _ref$answer === void 0 ? '' : _ref$answer,
      _ref$feedback = _ref.feedback,
      feedback = _ref$feedback === void 0 ? '' : _ref$feedback,
      _ref$correct = _ref.correct,
      correct = _ref$correct === void 0 ? false : _ref$correct,
      feedbackPerAnswer = _ref.feedbackPerAnswer,
      onChangeAnswerValue = _ref.onChangeAnswerValue,
      onChangeFeedback = _ref.onChangeFeedback,
      onChangeCorrect = _ref.onChangeCorrect,
      onRemoveAnswer = _ref.onRemoveAnswer,
      multipleCorrectAllowed = _ref.multipleCorrectAllowed;
  var inputType = multipleCorrectAllowed ? 'checkbox' : 'radio';
  return /*#__PURE__*/React.createElement("div", {
    className: "bulb-editor-answer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bulb-answer-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bulb-editor-answer-label"
  }, __('Answer', 'bu-learning-blocks'), " ", index + 1), /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    placeholder: __('Answer', 'bu-learning-blocks'),
    keepPlaceholderOnFocus: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('answer-text'),
    onChange: function onChange(newAnswerValue) {
      onChangeAnswerValue(newAnswerValue, index);
    },
    value: answer
  }), feedbackPerAnswer && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bulb-editor-answer-label-feedback"
  }, __('Feedback', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    placeholder: __('Feedback', 'bu-learning-blocks'),
    keepPlaceholderOnFocus: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('answer-feedback'),
    onChange: function onChange(newFeedback) {
      onChangeFeedback(newFeedback, index);
    },
    value: feedback
  })), /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("input", {
    type: inputType,
    value: "1",
    onChange: function onChange() {
      onChangeCorrect(index);
    },
    checked: correct
  }), ' ', __('Correct Answer', 'bu-learning-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "bulb-answer-controls"
  }, onRemoveAnswer && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onRemoveAnswer(index);
    }
  }, "X")));
}

/***/ }),

/***/ "./src/components/Answers.js":
/*!***********************************!*\
  !*** ./src/components/Answers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Answers; });
/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer */ "./src/components/Answer.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function Answers(_ref) {
  var _ref$answers = _ref.answers,
      answers = _ref$answers === void 0 ? [] : _ref$answers,
      onChangeAnswers = _ref.onChangeAnswers,
      _ref$multipleCorrectA = _ref.multipleCorrectAllowed,
      multipleCorrectAllowed = _ref$multipleCorrectA === void 0 ? false : _ref$multipleCorrectA,
      _ref$minAnswers = _ref.minAnswers,
      minAnswers = _ref$minAnswers === void 0 ? 1 : _ref$minAnswers,
      _ref$maxAnswers = _ref.maxAnswers,
      maxAnswers = _ref$maxAnswers === void 0 ? 1 : _ref$maxAnswers,
      _ref$defaultAnswer = _ref.defaultAnswer,
      defaultAnswer = _ref$defaultAnswer === void 0 ? {
    answer: '',
    feedback: '',
    correct: false
  } : _ref$defaultAnswer,
      _ref$feedbackPerAnswe = _ref.feedbackPerAnswer,
      feedbackPerAnswer = _ref$feedbackPerAnswe === void 0 ? true : _ref$feedbackPerAnswe;

  var onChangeAnswerValue = function onChangeAnswerValue(newAnswerValue, index) {
    var newAnswers = _toConsumableArray(answers);

    newAnswers[index] = _objectSpread(_objectSpread({}, answers[index]), {}, {
      answer: newAnswerValue
    });
    onChangeAnswers(newAnswers);
  };

  var onChangeFeedback = function onChangeFeedback(newFeedback, index) {
    var newAnswers = _toConsumableArray(answers);

    newAnswers[index] = _objectSpread(_objectSpread({}, answers[index]), {}, {
      feedback: newFeedback
    });
    onChangeAnswers(newAnswers);
  };

  var onChangeSingleCorrect = function onChangeSingleCorrect(index) {
    // Make answers[index] the only correct answer in the answers array.
    var newAnswers = answers.map(function (answer, i) {
      var isCorrect = index === i;
      return _objectSpread(_objectSpread({}, answer), {}, {
        correct: isCorrect
      });
    });
    onChangeAnswers(newAnswers);
  };

  var onChangeMultipleCorrect = function onChangeMultipleCorrect(index) {
    // Toggle the 'correct' property for answers[index].
    var newAnswers = answers.map(function (answer, i) {
      if (index === i) {
        return _objectSpread(_objectSpread({}, answer), {}, {
          correct: !answer.correct
        });
      }

      return answer;
    }); // Make sure that at least one answer is selected as the correct answer before updating state.

    var numCorrectAnswers = newAnswers.reduce(function (accumulator, answer) {
      return accumulator + answer.correct;
    }, 0);

    if (numCorrectAnswers > 0) {
      onChangeAnswers(newAnswers);
    }
  };

  var onAddAnswer = function onAddAnswer() {
    if (answers.length < maxAnswers) {
      var newAnswers = [].concat(_toConsumableArray(answers), [defaultAnswer]);
      onChangeAnswers(newAnswers);
    }
  };

  var onRemoveAnswer = function onRemoveAnswer(index) {
    if (answers.length > minAnswers) {
      var newAnswers = answers.filter(function (answer, i) {
        return index !== i;
      });
      onChangeAnswers(newAnswers);
    }
  };

  var renderAnswers = function renderAnswers() {
    var answerList = answers.map(function (answer, index) {
      return /*#__PURE__*/React.createElement(_Answer__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
        key: index,
        index: index
      }, answer, {
        feedbackPerAnswer: feedbackPerAnswer,
        onChangeAnswerValue: onChangeAnswerValue,
        onChangeFeedback: onChangeFeedback,
        onChangeCorrect: multipleCorrectAllowed ? onChangeMultipleCorrect : onChangeSingleCorrect,
        onRemoveAnswer: answers.length > minAnswers ? onRemoveAnswer : null,
        multipleCorrectAllowed: multipleCorrectAllowed
      }));
    });
    return answerList;
  };

  var renderAddAnswer = function renderAddAnswer() {
    if (answers.length < maxAnswers) {
      return /*#__PURE__*/React.createElement("button", {
        onClick: onAddAnswer
      }, "Add Answer");
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "bulb-editor-section-label"
  }, "Answers"), renderAnswers(), renderAddAnswer());
}

/***/ }),

/***/ "./src/components/Controls.js":
/*!************************************!*\
  !*** ./src/components/Controls.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;
/**
 * Create a Block Controls wrapper Component
 */

var Controls = /*#__PURE__*/function (_Component) {
  _inherits(Controls, _Component);

  var _super = _createSuper(Controls);

  function Controls() {
    _classCallCheck(this, Controls);

    return _super.apply(this, arguments);
  }

  _createClass(Controls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          textAlignment = _this$props.attributes.textAlignment,
          setAttributes = _this$props.setAttributes; // Change Handlers

      var onChangeTextAlignment = function onChangeTextAlignment(newAlignment) {
        return setAttributes({
          textAlignment: newAlignment
        });
      };

      return /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {
        value: textAlignment,
        onChange: onChangeTextAlignment
      }));
    }
  }]);

  return Controls;
}(Component);



/***/ }),

/***/ "./src/components/EnhancedRichText.js":
/*!********************************************!*\
  !*** ./src/components/EnhancedRichText.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RichText = wp.editor.RichText;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/React.createElement(RichText, _extends({
    keepPlaceholderOnFocus: true,
    style: {
      textAlign: props.textAlignment,
      color: props.textColorControl,
      backgroundColor: props.backgroundColorControl,
      fontSize: props.fontSize ? props.fontSize + 'px' : undefined
    }
  }, props));
});

/***/ }),

/***/ "./src/components/FloatInput.js":
/*!**************************************!*\
  !*** ./src/components/FloatInput.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var FloatInput = /*#__PURE__*/function (_React$Component) {
  _inherits(FloatInput, _React$Component);

  var _super = _createSuper(FloatInput);

  function FloatInput(props) {
    var _this;

    _classCallCheck(this, FloatInput);

    _this = _super.call(this, props);
    _this.state = {
      error: ''
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FloatInput, [{
    key: "onChange",
    value: function onChange(event) {
      var value = event.target.value;
      var error = isNaN(parseFloat(value)) ? 'Invalid number' : '';
      this.props.onChange(value);
      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        step: "any",
        value: this.props.value,
        onChange: this.onChange.bind(this)
      }), this.state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.error));
    }
  }]);

  return FloatInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FloatInput);

/***/ }),

/***/ "./src/components/Question.js":
/*!************************************!*\
  !*** ./src/components/Question.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionHeader */ "./src/components/QuestionHeader.js");
/* harmony import */ var _QuestionBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionBody */ "./src/components/QuestionBody.js");
/* harmony import */ var _QuestionFeedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionFeedback */ "./src/components/QuestionFeedback.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var classes = _ref.classes,
      header = _ref.header,
      onChangeHeader = _ref.onChangeHeader,
      body = _ref.body,
      onChangeBody = _ref.onChangeBody,
      singleFeedback = _ref.singleFeedback,
      feedback = _ref.feedback,
      onChangeFeedback = _ref.onChangeFeedback,
      textAlignment = _ref.textAlignment,
      textColorControl = _ref.textColorControl,
      backgroundColorControl = _ref.backgroundColorControl,
      fontSize = _ref.fontSize,
      children = _ref.children;
  var styles = {
    textAlignment: textAlignment,
    textColorControl: textColorControl,
    backgroundColorControl: backgroundColorControl,
    fontSize: fontSize
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('bulb-question', classes)
  }, /*#__PURE__*/React.createElement(_QuestionHeader__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    value: header,
    onChange: onChangeHeader
  }, styles)), /*#__PURE__*/React.createElement(_QuestionBody__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    value: body,
    onChange: onChangeBody
  }, styles)), children, /*#__PURE__*/React.createElement(_QuestionFeedback__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    singleFeedback: singleFeedback,
    feedback: feedback,
    onChangeFeedback: onChangeFeedback
  }, styles)));
});

/***/ }),

/***/ "./src/components/QuestionBody.js":
/*!****************************************!*\
  !*** ./src/components/QuestionBody.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnhancedRichText */ "./src/components/EnhancedRichText.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "bulb-editor-field-label"
  }, __('Question Body', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(_EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    className: "question-body",
    placeholder: __('Enter Question Body', 'bu-learning-blocks')
  }, props)));
});

/***/ }),

/***/ "./src/components/QuestionFeedback.js":
/*!********************************************!*\
  !*** ./src/components/QuestionFeedback.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnhancedRichText */ "./src/components/EnhancedRichText.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var onChangeFeedback = function onChangeFeedback(changedFeedback) {
    var newFeedback = _objectSpread(_objectSpread({}, props.feedback), changedFeedback);

    props.onChangeFeedback(newFeedback);
  };

  if (props.singleFeedback) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, __('Feedback:', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(_EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
      className: "question-feedback",
      placeholder: __('Enter Feedback', 'bu-learning-blocks'),
      value: props.feedback.correct,
      onChange: function onChange(newValue) {
        return onChangeFeedback({
          correct: newValue,
          incorrect: newValue
        });
      }
    }, props)));
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "bulb-editor-section-label"
  }, __('Feedback', 'bu-learning-blocks')), /*#__PURE__*/React.createElement("h5", {
    className: "bulb-editor-field-label"
  }, " ", __('Correct Feedback', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(_EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    className: "question-feedback",
    placeholder: __('Enter Correct Feedback', 'bu-learning-blocks'),
    value: props.feedback.correct,
    onChange: function onChange(newValue) {
      return onChangeFeedback({
        correct: newValue
      });
    }
  }, props)), /*#__PURE__*/React.createElement("h5", {
    className: "bulb-editor-field-label"
  }, __('Incorrect Feedback', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(_EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    className: "question-feedback",
    placeholder: __('Enter Incorrect Feedback', 'bu-learning-blocks'),
    value: props.feedback.incorrect,
    onChange: function onChange(newValue) {
      return onChangeFeedback({
        incorrect: newValue
      });
    }
  }, props)));
});

/***/ }),

/***/ "./src/components/QuestionHeader.js":
/*!******************************************!*\
  !*** ./src/components/QuestionHeader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnhancedRichText */ "./src/components/EnhancedRichText.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "bulb-editor-section-label"
  }, __('Question', 'bu-learning-blocks')), /*#__PURE__*/React.createElement("h5", {
    className: "bulb-editor-field-label"
  }, __('Question Header', 'bu-learning-blocks')), /*#__PURE__*/React.createElement(_EnhancedRichText__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    className: "question-header",
    placeholder: __('Enter Question Header', 'bu-learning-blocks')
  }, props)));
});

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=blocks.build.js.map