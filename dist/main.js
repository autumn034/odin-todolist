/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./slkscr.ttf */ \"./src/slkscr.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*  */\r\n\r\n@font-face {\r\n    font-family: \"Silkscreen\";\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\r\n}\r\n\r\n\r\nhtml, body {\r\n    margin: unset;\r\n    padding: unset;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\nh1, h2, h3 {\r\n    font-weight: unset;\r\n}\r\n\r\n.h1, .h2, .h3 {\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n.h1 {\r\n    font-size: 4rem;\r\n}\r\n\r\n.h2 {\r\n    font-size: 3rem;\r\n}\r\n\r\n.h3 {\r\n    font-size: 2rem;\r\n}\r\n\r\n.app {\r\n    display: flex;\r\n    width: 100vw;\r\n    max-width: 1200px;\r\n    height: 100vh;\r\n    margin: auto;\r\n    padding: 32px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.margin_bottom-s {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.margin_bottom-m {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.margin_bottom-l {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.flex_horizontal {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 8px;\r\n    align-items: center;\r\n}\r\n\r\n\r\n/* Projects */\r\n.sidebar {\r\n    background-color: #ffffff;\r\n    width: 25vw;\r\n    min-width: 250px;\r\n    max-width: 350px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.projects__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n}\r\n\r\n.projects__new-project-form {\r\n    display: none;\r\n}\r\n\r\n.projects__text-input {\r\n    all: unset;\r\n    background-color: #f0f0f0;\r\n    padding: 4px;\r\n    border-radius: 2px;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.projects__button {\r\n    all: unset;\r\n    padding: 4px;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    user-select: none; /* disable text selection */\r\n    width: 100%;\r\n\r\n    /* vertical align center text */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.projects__button:hover {\r\n    background-color: #1072FA;\r\n    color: #ffffff;\r\n}\r\n\r\n.projects__button--bw {\r\n    background-color: #f0f0f0;\r\n    color: #000000;\r\n}\r\n\r\n.projects__button--bw:hover {\r\n    background-color: #d6d6d6;\r\n    color: #000000;\r\n}\r\n\r\n.projects__button--disable {\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n}\r\n\r\n.projects__button--disable:hover {\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n    cursor: default;\r\n}\r\n\r\n\r\n/* Tasks */\r\n.main {\r\n    flex: 1;\r\n    max-width: 1000px;\r\n    box-sizing: border-box;\r\n    padding: 64px;\r\n}\r\n\r\n.tasks {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.tasks__header-button {\r\n    all: unset;\r\n    width: 2.5rem;\r\n    height: auto;\r\n}\r\n\r\n.tasks__header-button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.tasks__header-button > img {    \r\n    width: 2.5rem;\r\n    height: auto;\r\n}\r\n\r\n.tasks__item {\r\n    padding: 12px 8px;\r\n    border-radius: 4px;\r\n    border: 1px solid #e7e7e7;\r\n    box-sizing: border-box;\r\n    font-size: 1rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.tasks__check {\r\n    font-size: 2rem;\r\n    font-family: \"Silkscreen\";\r\n}\r\n\r\n.tasks__check:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.tasks__item-section {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.tasks__icon {\r\n    height: 25px;\r\n    box-sizing: border-box;\r\n    padding: 4px;\r\n    transition: background-color 0.3s;\r\n    border-radius: 50%;\r\n}\r\n\r\n.tasks__icon:hover {\r\n    background-color: #e7e7e7;\r\n    padding: 4px;\r\n}\r\n\r\n.show-task-form-button {\r\n    all: unset;\r\n    padding: 8px 16px;\r\n    border-radius: 4px;\r\n    border: 1px solid #e7e7e7;\r\n}\r\n\r\n.show-task-form-button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.tasks__text-input {\r\n    font-size: inherit;\r\n    width: 20vw;\r\n    max-width: 300px;\r\n    border: none;\r\n    border-bottom: 1px solid #e7e7e7;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.tasks__text-input:focus {\r\n    outline: none;\r\n    border-bottom: 1px solid #969696;    \r\n}\r\n\r\n.task__button {\r\n    all: unset;\r\n    padding: 4px 8px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    user-select: none; /* disable text selection */\r\n\r\n    /* vertical align center text */\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: unset;\r\n    border: 1px solid #e7e7e7;\r\n}\r\n\r\n.task__button:hover {\r\n    background-color: #1072FA;\r\n    color: white;\r\n    border: 1px solid #1072FA;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nclass Task \r\n{\r\n    constructor (id, name, due)\r\n    {\r\n        this.id = id\r\n        this.name = name;\r\n        this.due = due;\r\n        this.doneStatus = false;\r\n    }\r\n}\r\n\r\nconst projectsTemplate = \r\n[\r\n    {id: 1, name: \"Work\", tasks: [new Task(1, \"Test1\", \"12/11/2023\"), new Task(2, \"Test2\", \"12/11/2023\")] }, \r\n    {id: 2, name: \"School\", tasks: [new Task(1, \"Test2\", \"12/11/2023\")]}, \r\n    {id: 3, name: \"Personal\", tasks: [new Task(1, \"Test3\", \"12/11/2023\")]}\r\n];\r\n\r\nconst LOCAL_STORAGE_PROJECTS_KEY = \"odintodo.projects\";\r\nconst LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY = \"odintodo.focus-project\";\r\nconst projectsContainerDiv = document.querySelector(\"#projectContainer\");\r\nconst createProjectButton = document.querySelector(\"#createProjectButton\");\r\nconst createProjectForm = document.querySelector(\"#createProjectForm\");\r\nconst createProjectSubmitButton = document.querySelector(\"#createProjectSubmitButton\");\r\nconst createProjectCancelButton = document.querySelector(\"#createProjectCancelButton\");\r\nconst createProjectTextInput = document.querySelector(\"#createProjectTextInput\");\r\nconst taskContainer = document.querySelector(\"#taskContainer\");\r\nconst activeProjectHeader = document.querySelector(\"#activeProjectHeader\");\r\nconst deleteProjectButton = document.querySelector(\"#deleteProjectButton\");\r\nconst mainContainer = document.querySelector(\"#main\");\r\nconst taskTemplate = document.querySelector(\"#task-template\");\r\nconst addTaskTextInput = document.querySelector(\"#addTaskTextInput\");\r\nconst confirmAddTaskButton = document.querySelector(\"#confirmAddTaskButton\");\r\nconst cancelAddTaskButton = document.querySelector(\"#cancelAddTaskButton\");\r\nconst addTaskDate = document.querySelector(\"#addTaskDate\");\r\n\r\n\r\nlet projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || projectsTemplate;\r\nlet activeProjectId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY)) || null;\r\n\r\n\r\nconfirmAddTaskButton.addEventListener(\"click\", e => \r\n{\r\n    e.preventDefault();\r\n    if (addTaskDate.value == \"\" || addTaskDate.value == null) \r\n    {\r\n        alert(\"Please enter the task date.\");\r\n        return;\r\n    }\r\n\r\n    if (addTaskTextInput.value == \"\" || addTaskDate.value == null)\r\n    {\r\n        alert(\"Please input the task name.\")\r\n        return;\r\n    }\r\n\r\n    if (activeProjectId == \"\" || activeProjectId == null)\r\n    {\r\n        alert(\"No active project\");\r\n        return;\r\n    }\r\n\r\n    let taskObject = createTask(addTaskTextInput.value, addTaskDate.value);\r\n    let projectObject = projects.find(project => project.id == activeProjectId);\r\n\r\n    projectObject.tasks.push(taskObject);\r\n    saveAndRender();\r\n\r\n});\r\n\r\ncancelAddTaskButton.addEventListener(\"click\", e => \r\n{\r\n    e.preventDefault();\r\n    addTaskTextInput.value = \"\";\r\n    addTaskDate.value = null;\r\n\r\n});\r\n\r\nprojectsContainerDiv.addEventListener(\"click\", e => \r\n{\r\n    // prevents tasks from disappearing when clicking on whitespaces within the project container\r\n    if (!(e.target.classList.contains(\"projects__button\")))\r\n    {\r\n        return;\r\n    }\r\n\r\n    activeProjectId = e.target.dataset.projectId;\r\n    saveAndRender();\r\n});\r\n\r\ncreateProjectButton.addEventListener(\"click\", (e) => \r\n{\r\n    createProjectButton.style.display = \"none\";\r\n    createProjectForm.style.display = \"block\"; \r\n});\r\n\r\ncreateProjectCancelButton.addEventListener(\"click\", (e) => \r\n{\r\n    createProjectButton.style.display = \"block\";\r\n    createProjectForm.style.display = \"none\";\r\n});\r\n\r\ncreateProjectSubmitButton.addEventListener(\"click\", (e) => \r\n{\r\n    createProjectButton.style.display = \"block\";\r\n    createProjectForm.style.display = \"none\";\r\n    let createProjectTextInputValue = createProjectTextInput.value;\r\n\r\n    if (createProjectTextInputValue == null || createProjectTextInputValue == \"\") \r\n    {\r\n        alert(\"Blank value cannot be used for project name.\");\r\n        return\r\n    }\r\n\r\n    let newProject = createProject(createProjectTextInputValue);\r\n    projects.push(newProject);\r\n    createProjectTextInput.value = \"\";\r\n    \r\n    saveAndRender();\r\n});\r\n\r\ndeleteProjectButton.addEventListener(\"click\", () => \r\n{\r\n    projects = projects.filter((project) => project.id != activeProjectId);\r\n    activeProjectId = null;\r\n    saveAndRender();\r\n});\r\n\r\nfunction saveAndRender() \r\n{\r\n    save();\r\n    render();\r\n}\r\n\r\nfunction save() \r\n{\r\n    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));\r\n    localStorage.setItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY, JSON.stringify(activeProjectId));\r\n}\r\n\r\nfunction createProject(name) \r\n{\r\n    return {id: Date.now().toString(), name: name, tasks: []};\r\n}\r\n\r\nfunction createTask(name, date) \r\n{\r\n    return new Task(Date.now().toString(), name, date);\r\n}\r\n\r\n\r\nfunction render() \r\n{\r\n    clearElement(projectsContainerDiv);\r\n\r\n    if (activeProjectId == null) \r\n    {\r\n        mainContainer.style.display = \"none\";\r\n    }\r\n    else\r\n    {\r\n        mainContainer.style.display = \"\";\r\n    }\r\n\r\n    projects.forEach(project => {\r\n        let projectButton = document.createElement(\"button\");\r\n        projectButton.classList.add(\"projects__button\");\r\n      \r\n        if (activeProjectId == project.id) \r\n        {            \r\n            activeProjectHeader.textContent = project.name;\r\n            projectButton.classList.add(\"projects__button--disable\");\r\n            renderTasks(project);\r\n        }\r\n\r\n        projectButton.dataset.projectId = project.id;\r\n        projectButton.appendChild(document.createTextNode(project.name));\r\n\r\n        projectsContainerDiv.appendChild(projectButton);\r\n    });\r\n}\r\n\r\nfunction renderTasks(project) {\r\n    clearElement(taskContainer);\r\n    project.tasks.forEach(task => \r\n    {\r\n        let taskElement = document.importNode(taskTemplate.content, true);\r\n\r\n        let taskNameElement = taskElement.querySelector(\".tasks__name\");\r\n        taskNameElement.innerText = task.name;\r\n\r\n        let taskDueDateElement = taskElement.querySelector(\".tasks__due-date\");\r\n        taskDueDateElement.innerText = task.due;\r\n\r\n        let taskCheckElement = taskElement.querySelector(\".tasks__check\");\r\n        taskCheckElement.id = task.id;\r\n\r\n        taskContainer.appendChild(taskElement);\r\n    });\r\n}\r\n\r\nfunction clearElement(element) {\r\n    if (element == null) {\r\n        return false;\r\n    }\r\n\r\n    while (element.firstChild) {\r\n        element.firstChild.remove();\r\n    }\r\n    \r\n    return true;\r\n}\r\n\r\n\r\nrender();\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

/***/ }),

/***/ "./src/slkscr.ttf":
/*!************************!*\
  !*** ./src/slkscr.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f28a155fd8444a957f2.ttf\";\n\n//# sourceURL=webpack://odin-todolist/./src/slkscr.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;