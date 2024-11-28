/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --background-color: #272932;
    --text-color: #FAE8EB;
    --accent-one: #00A7E1;
    --accent-two: #FF9B42;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", system-ui;
}

body {
    width: 100%;
    height: 100vh;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

header {
    width: 60%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--accent-two);
    
}

h1 {
    color: var(--accent-two);
}

.content {
    position: relative;
    width: 60%;
    height: 85%;
}

.selected {
    position: absolute;
    top: 128px;
    left: 24px;
    height: 128px;
    width: 128px;
}


.selection-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 24px;
    width: 100%;
    height: 100%;
    /* display: none;  */
}

.selection-grid-title {
    width: 100%;
    display: flex;
    justify-content: start;
}

.selection-grid-title h2 {
    color: var(--accent-two);
    flex: 1
}

.selection-grid .search {
    flex: 2;
    max-width: 60%;
    padding: 6px;
}

.champion-grid {
    box-shadow: inset 0px 0px 50px 0px black;
    width: 100%;
    height: 100%;
    padding: 24px;
    gap: 12px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: auto;
}

.champion {
    width: 128px;
    height: 128px;
    /* border: 1px solid var(--accent-two); */
    /* box-shadow: inset 0px 0px 25px 0px var(--text-color) */
}

.champion:hover {
    cursor: pointer;
    opacity: 0.75;
}


.stat-container {
    display: flex;
    flex-direction: column;
}

.stat-container h2 {
    font-size: 2rem;
    text-decoration: underline;
    color: var(--accent-two);
    text-align: center;
}

/* Table Styling */
.stat h3 {
    font-size: 1.2rem;
    color: var(--accent-two);
}

.stat-table {
    /* border: 1px solid white; */
    border-collapse: collapse;
    min-width: 100%;
    font-size: 1rem;
    color: white;
    box-shadow: inset 0px 0px 25px 0px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    border-radius: 6px 6px 0 0;
}

.stat-table thead tr {
    background-color: var(--accent-two);
    color: black;
    text-align: center;
    font-weight: bold;
}

.stat-table th,
.stat-table td {
    font-size: 0.9rem;
    padding: 8px 12px;
}

.stat-table tbody tr {
    border-bottom: 1px solid var(--accent-two);
}

.stat-table tbody td {
    text-align: center;
    border-right: 1px solid var(--accent-two);
}

.stat-table .icon {
    padding: 0px 0px;
    display: flex;
    justify-content: center;
}

.stat-table tbody img {
    width: 42px;
    height: 42px;
}

.stat-container .stat-table {
    margin-bottom: 24px;
}

.hidden {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,yCAAyC;IACzC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0CAA0C;;AAE9C;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,aAAa;IACb,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;IACxB;AACJ;;AAEA;IACI,OAAO;IACP,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,wCAAwC;IACxC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,SAAS;IACT,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yCAAyC;IACzC,yDAAyD;AAC7D;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA,kBAAkB;AAClB;IACI,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,6BAA6B;IAC7B,yBAAyB;IACzB,eAAe;IACf,eAAe;IACf,YAAY;IACZ,qDAAqD;IACrD,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\r\n    --background-color: #272932;\r\n    --text-color: #FAE8EB;\r\n    --accent-one: #00A7E1;\r\n    --accent-two: #FF9B42;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Poppins\", system-ui;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: var(--background-color);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 24px;\r\n}\r\n\r\nheader {\r\n    width: 60%;\r\n    height: 120px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-bottom: 2px solid var(--accent-two);\r\n    \r\n}\r\n\r\nh1 {\r\n    color: var(--accent-two);\r\n}\r\n\r\n.content {\r\n    position: relative;\r\n    width: 60%;\r\n    height: 85%;\r\n}\r\n\r\n.selected {\r\n    position: absolute;\r\n    top: 128px;\r\n    left: 24px;\r\n    height: 128px;\r\n    width: 128px;\r\n}\r\n\r\n\r\n.selection-grid {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 24px;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* display: none;  */\r\n}\r\n\r\n.selection-grid-title {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: start;\r\n}\r\n\r\n.selection-grid-title h2 {\r\n    color: var(--accent-two);\r\n    flex: 1\r\n}\r\n\r\n.selection-grid .search {\r\n    flex: 2;\r\n    max-width: 60%;\r\n    padding: 6px;\r\n}\r\n\r\n.champion-grid {\r\n    box-shadow: inset 0px 0px 50px 0px black;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 24px;\r\n    gap: 12px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    overflow: auto;\r\n}\r\n\r\n.champion {\r\n    width: 128px;\r\n    height: 128px;\r\n    /* border: 1px solid var(--accent-two); */\r\n    /* box-shadow: inset 0px 0px 25px 0px var(--text-color) */\r\n}\r\n\r\n.champion:hover {\r\n    cursor: pointer;\r\n    opacity: 0.75;\r\n}\r\n\r\n\r\n.stat-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.stat-container h2 {\r\n    font-size: 2rem;\r\n    text-decoration: underline;\r\n    color: var(--accent-two);\r\n    text-align: center;\r\n}\r\n\r\n/* Table Styling */\r\n.stat h3 {\r\n    font-size: 1.2rem;\r\n    color: var(--accent-two);\r\n}\r\n\r\n.stat-table {\r\n    /* border: 1px solid white; */\r\n    border-collapse: collapse;\r\n    min-width: 100%;\r\n    font-size: 1rem;\r\n    color: white;\r\n    box-shadow: inset 0px 0px 25px 0px rgba(0, 0, 0, 0.5);\r\n    overflow: hidden;\r\n    border-radius: 6px 6px 0 0;\r\n}\r\n\r\n.stat-table thead tr {\r\n    background-color: var(--accent-two);\r\n    color: black;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.stat-table th,\r\n.stat-table td {\r\n    font-size: 0.9rem;\r\n    padding: 8px 12px;\r\n}\r\n\r\n.stat-table tbody tr {\r\n    border-bottom: 1px solid var(--accent-two);\r\n}\r\n\r\n.stat-table tbody td {\r\n    text-align: center;\r\n    border-right: 1px solid var(--accent-two);\r\n}\r\n\r\n.stat-table .icon {\r\n    padding: 0px 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.stat-table tbody img {\r\n    width: 42px;\r\n    height: 42px;\r\n}\r\n\r\n.stat-container .stat-table {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instantiateGrid: () => (/* binding */ instantiateGrid)
/* harmony export */ });
const selectionGrid = document.querySelector(".selection-grid");
const championGrid = document.querySelector(".champion-grid");
const selected = document.querySelector(".selected");
const header = document.querySelector(".selection-header");
const championIconOne = document.querySelectorAll(".champion-icon-one");
const championIconTwo = document.querySelectorAll(".champion-icon-two");
const statContainer = document.querySelector(".stat-container");
let c1;
let c2;


const c1Attack = document.querySelector(".c1-atk");
const c2Attack = document.querySelector(".c2-atk");


function instantiateGrid(data) {
    for (let champion in data.data) {
        const container = document.createElement("div");
        container.classList.add("champion");
        const img = document.createElement("img");
        
        const src = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${data.data[champion].image.full}`;
    
    
        img.src = src;
        container.appendChild(img);

        container.addEventListener("click", () => {
            if (selected.childElementCount < 1) {
                updateSelected(data.data[champion]);
                updateHeader();
                c1 = data.data[champion];
            } else if (selected.childElementCount < 2) {
                updateSelected(data.data[champion]);
                c2 = data.data[champion];
                loadIcons(c1, c2);
                renderStats();
            }
        })

        championGrid.appendChild(container);
    }
    
}

function updateSelected(champion){
    const container = document.createElement("div");
    const img = document.createElement("img");

    img.src = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${champion.image.full}`;
    
    container.appendChild(img);
    selected.appendChild(container);
}

function updateHeader() {
    header.textContent = "Second Champion";
}

function loadIcons(c1, c2){
    console.log(c1, c2);
    selectionGrid.classList.add("hidden");
    const iconOne = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${c1.image.full}`;
    const iconTwo = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${c2.image.full}`;

    for (let i = 0; i < championIconOne.length; i++) {
        championIconOne[i].src = iconOne;
    }
    for (let i = 0; i < championIconTwo.length; i++) {
        championIconTwo[i].src = iconTwo;
    }
}

function renderStats() {
    statContainer.classList.remove("hidden");
    // STAT ARRAYS
    // Offensive Stats
    let c1AttackArray = calculateStat(c1.stats.attackdamage, c1.stats.attackdamageperlevel);
    let c2AttackArray = calculateStat(c2.stats.attackdamage, c2.stats.attackdamageperlevel);
    let c1AttackSpeedArray = calculateAttackSpeed(c1.stats.attackspeed, c1.stats.attackspeedperlevel);
    let c2AttackSpeedArray = calculateAttackSpeed(c2.stats.attackspeed, c2.stats.attackspeedperlevel);
    let c1AttackRangeArray = calculateAttackRange( c1, c1.stats.attackrange);
    let c2AttackRangeArray = calculateAttackRange( c2, c2.stats.attackrange);
    
    // Defensive Stats
    let c1HealthArray = calculateStat(c1.stats.hp, c1.stats.hpperlevel);
    let c2HealthArray = calculateStat(c2.stats.hp, c2.stats.hpperlevel);
    let c1HealthRegenArray = calculateStat(c1.stats.hpregen, c1.stats.hpregenperlevel);
    let c2HealthRegenArray = calculateStat(c2.stats.hpregen, c2.stats.hpregenperlevel);
    let c1ArmourArray = calculateStat(c1.stats.armor, c1.stats.armorperlevel);
    let c2ArmourArray = calculateStat(c2.stats.armor, c2.stats.armorperlevel);
    let c1MagicResistArray = calculateStat(c1.stats.spellblock, c1.stats.spellblockperlevel);
    let c2MagicResistArray = calculateStat(c2.stats.spellblock, c2.stats.spellblockperlevel);

    // DOM RENDERING

    const c1Attack = document.querySelector(".c1-atk");
    const c2Attack = document.querySelector(".c2-atk");
    const c1AttackSpeed = document.querySelector(".c1-atkspd");
    const c2AttackSpeed = document.querySelector(".c2-atkspd");
    const c1AttackRange = document.querySelector(".c1-atkrange");
    const c2AttackRange = document.querySelector(".c2-atkrange");
    const c1Health = document.querySelector(".c1-hp");
    const c2Health = document.querySelector(".c2-hp");
    const c1HealthRegen = document.querySelector(".c1-hpregen");
    const c2HealthRegen = document.querySelector(".c2-hpregen");
    const c1Armour = document.querySelector(".c1-armour");
    const c2Armour = document.querySelector(".c2-armour");
    const c1MagicResist = document.querySelector(".c1-mr");
    const c2MagicResist = document.querySelector(".c2-mr");

    c1AttackArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1Attack.appendChild(td);
    });

    c2AttackArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2Attack.appendChild(td);
    });

    c1AttackSpeedArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c1AttackSpeed.appendChild(td);
    });

    c2AttackSpeedArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c2AttackSpeed.appendChild(td);
    });

    c1AttackRangeArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = element;
        c1AttackRange.appendChild(td);
    });

    c2AttackRangeArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = element;
        c2AttackRange.appendChild(td);
    });

    c1HealthArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1Health.appendChild(td);
    });

    c2HealthArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2Health.appendChild(td);
    });

    c1HealthRegenArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c1HealthRegen.appendChild(td);
    });

    c2HealthRegenArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c2HealthRegen.appendChild(td);
    });

    c1ArmourArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1Armour.appendChild(td);
    });

    c2ArmourArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2Armour.appendChild(td);
    });

    c1MagicResistArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1MagicResist.appendChild(td);
    });

    c2MagicResistArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2MagicResist.appendChild(td);
    });
}

function calculateStat(baseStat, growthFactor) {
    let array = [];

    for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
        if (currentLevel == 1){
            array.push(baseStat);
        } else {
            array.push(baseStat + growthFactor * (currentLevel - 1) * ((0.7025 + 0.0175 * (currentLevel - 1))));
        }
    }

    return array;
};

function calculateAttackSpeed(baseStat, growthFactor){
    let array = [];

    for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
        if (currentLevel == 1) {
            array.push(baseStat);
        } else {
            array.push(baseStat * (1 + ((growthFactor * (currentLevel - 1) * ((0.7025 + 0.0175 *(currentLevel - 1)))) / 100)));
        }
    }

    return array;
}

function calculateAttackRange(champion, baseStat) {
    let array = [];

    if (champion.id == "Tristana"){
        for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
            array.push(baseStat +(0 + 150 / 17 * (currentLevel - 1)));
        };
    } else {
        for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
            array.push(baseStat);
        };
    }

    return array;
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



async function getData() {
    const url = "https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json";

    try {
        const response = await fetch(url, {mode: "cors"});

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        return(data);

      } catch (error) {
        console.error(error.message);
      }
}

getData().then((data) => {
    (0,_grid__WEBPACK_IMPORTED_MODULE_0__.instantiateGrid)(data);
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCO0FBQ2hEO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBO0FBQ0EsTUFBTTtBQUNOLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM5T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7O0FDQXlDO0FBQ3BCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYTtBQUN4RDtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWU7QUFDbkIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL3NyYy9ncmlkLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTMyO1xyXG4gICAgLS10ZXh0LWNvbG9yOiAjRkFFOEVCO1xyXG4gICAgLS1hY2NlbnQtb25lOiAjMDBBN0UxO1xyXG4gICAgLS1hY2NlbnQtdHdvOiAjRkY5QjQyO1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzeXN0ZW0tdWk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYWNjZW50LXR3byk7XHJcbiAgICBcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEyOHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0aW9uLWdyaWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogZGlzcGxheTogbm9uZTsgICovXHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tZ3JpZC10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uc2VsZWN0aW9uLWdyaWQtdGl0bGUgaDIge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xyXG4gICAgZmxleDogMVxyXG59XHJcblxyXG4uc2VsZWN0aW9uLWdyaWQgLnNlYXJjaCB7XHJcbiAgICBmbGV4OiAyO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5jaGFtcGlvbi1ncmlkIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNTBweCAwcHggYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNoYW1waW9uIHtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtdHdvKTsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjVweCAwcHggdmFyKC0tdGV4dC1jb2xvcikgKi9cclxufVxyXG5cclxuLmNoYW1waW9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbn1cclxuXHJcblxyXG4uc3RhdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdGF0LWNvbnRhaW5lciBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdHdvKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGFibGUgU3R5bGluZyAqL1xyXG4uc3RhdCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdHdvKTtcclxufVxyXG5cclxuLnN0YXQtdGFibGUge1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbn1cclxuXHJcbi5zdGF0LXRhYmxlIHRoZWFkIHRyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdGF0LXRhYmxlIHRoLFxyXG4uc3RhdC10YWJsZSB0ZCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcblxyXG4uc3RhdC10YWJsZSB0Ym9keSB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LXR3byk7XHJcbn1cclxuXHJcbi5zdGF0LXRhYmxlIHRib2R5IHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC10d28pO1xyXG59XHJcblxyXG4uc3RhdC10YWJsZSAuaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdC10YWJsZSB0Ym9keSBpbWcge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuXHJcbi5zdGF0LWNvbnRhaW5lciAuc3RhdC10YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBDQUEwQzs7QUFFOUM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTMyO1xcclxcbiAgICAtLXRleHQtY29sb3I6ICNGQUU4RUI7XFxyXFxuICAgIC0tYWNjZW50LW9uZTogIzAwQTdFMTtcXHJcXG4gICAgLS1hY2NlbnQtdHdvOiAjRkY5QjQyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzeXN0ZW0tdWk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtdHdvKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgaGVpZ2h0OiA4NSU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMjhweDtcXHJcXG4gICAgbGVmdDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjhweDtcXHJcXG4gICAgd2lkdGg6IDEyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VsZWN0aW9uLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0aW9uLWdyaWQtdGl0bGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGlvbi1ncmlkLXRpdGxlIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xcclxcbiAgICBmbGV4OiAxXFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb24tZ3JpZCAuc2VhcmNoIHtcXHJcXG4gICAgZmxleDogMjtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW1waW9uLWdyaWQge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDUwcHggMHB4IGJsYWNrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbXBpb24ge1xcclxcbiAgICB3aWR0aDogMTI4cHg7XFxyXFxuICAgIGhlaWdodDogMTI4cHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC10d28pOyAqL1xcclxcbiAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggMHB4IHZhcigtLXRleHQtY29sb3IpICovXFxyXFxufVxcclxcblxcclxcbi5jaGFtcGlvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN0YXQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtY29udGFpbmVyIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxlIFN0eWxpbmcgKi9cXHJcXG4uc3RhdCBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXR3byk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0LXRhYmxlIHtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtdGFibGUgdGhlYWQgdHIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdHdvKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC10YWJsZSB0aCxcXHJcXG4uc3RhdC10YWJsZSB0ZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtdGFibGUgdGJvZHkgdHIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LXR3byk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0LXRhYmxlIHRib2R5IHRkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtdHdvKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtdGFibGUgLmljb24ge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtdGFibGUgdGJvZHkgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQycHg7XFxyXFxuICAgIGhlaWdodDogNDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtY29udGFpbmVyIC5zdGF0LXRhYmxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc2VsZWN0aW9uR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0aW9uLWdyaWRcIik7XHJcbmNvbnN0IGNoYW1waW9uR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbXBpb24tZ3JpZFwiKTtcclxuY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGlvbi1oZWFkZXJcIik7XHJcbmNvbnN0IGNoYW1waW9uSWNvbk9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhbXBpb24taWNvbi1vbmVcIik7XHJcbmNvbnN0IGNoYW1waW9uSWNvblR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhbXBpb24taWNvbi10d29cIik7XHJcbmNvbnN0IHN0YXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXQtY29udGFpbmVyXCIpO1xyXG5sZXQgYzE7XHJcbmxldCBjMjtcclxuXHJcblxyXG5jb25zdCBjMUF0dGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzEtYXRrXCIpO1xyXG5jb25zdCBjMkF0dGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzItYXRrXCIpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZUdyaWQoZGF0YSkge1xyXG4gICAgZm9yIChsZXQgY2hhbXBpb24gaW4gZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoYW1waW9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3JjID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xNC4yMy4xL2ltZy9jaGFtcGlvbi8ke2RhdGEuZGF0YVtjaGFtcGlvbl0uaW1hZ2UuZnVsbH1gO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmNoaWxkRWxlbWVudENvdW50IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWQoZGF0YS5kYXRhW2NoYW1waW9uXSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVIZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIGMxID0gZGF0YS5kYXRhW2NoYW1waW9uXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZC5jaGlsZEVsZW1lbnRDb3VudCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkKGRhdGEuZGF0YVtjaGFtcGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgYzIgPSBkYXRhLmRhdGFbY2hhbXBpb25dO1xyXG4gICAgICAgICAgICAgICAgbG9hZEljb25zKGMxLCBjMik7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJTdGF0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2hhbXBpb25HcmlkLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWQoY2hhbXBpb24pe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgaW1nLnNyYyA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTQuMjMuMS9pbWcvY2hhbXBpb24vJHtjaGFtcGlvbi5pbWFnZS5mdWxsfWA7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgc2VsZWN0ZWQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTZWNvbmQgQ2hhbXBpb25cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEljb25zKGMxLCBjMil7XHJcbiAgICBjb25zb2xlLmxvZyhjMSwgYzIpO1xyXG4gICAgc2VsZWN0aW9uR3JpZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgY29uc3QgaWNvbk9uZSA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTQuMjMuMS9pbWcvY2hhbXBpb24vJHtjMS5pbWFnZS5mdWxsfWA7XHJcbiAgICBjb25zdCBpY29uVHdvID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xNC4yMy4xL2ltZy9jaGFtcGlvbi8ke2MyLmltYWdlLmZ1bGx9YDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW1waW9uSWNvbk9uZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNoYW1waW9uSWNvbk9uZVtpXS5zcmMgPSBpY29uT25lO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFtcGlvbkljb25Ud28ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjaGFtcGlvbkljb25Ud29baV0uc3JjID0gaWNvblR3bztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU3RhdHMoKSB7XHJcbiAgICBzdGF0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAvLyBTVEFUIEFSUkFZU1xyXG4gICAgLy8gT2ZmZW5zaXZlIFN0YXRzXHJcbiAgICBsZXQgYzFBdHRhY2tBcnJheSA9IGNhbGN1bGF0ZVN0YXQoYzEuc3RhdHMuYXR0YWNrZGFtYWdlLCBjMS5zdGF0cy5hdHRhY2tkYW1hZ2VwZXJsZXZlbCk7XHJcbiAgICBsZXQgYzJBdHRhY2tBcnJheSA9IGNhbGN1bGF0ZVN0YXQoYzIuc3RhdHMuYXR0YWNrZGFtYWdlLCBjMi5zdGF0cy5hdHRhY2tkYW1hZ2VwZXJsZXZlbCk7XHJcbiAgICBsZXQgYzFBdHRhY2tTcGVlZEFycmF5ID0gY2FsY3VsYXRlQXR0YWNrU3BlZWQoYzEuc3RhdHMuYXR0YWNrc3BlZWQsIGMxLnN0YXRzLmF0dGFja3NwZWVkcGVybGV2ZWwpO1xyXG4gICAgbGV0IGMyQXR0YWNrU3BlZWRBcnJheSA9IGNhbGN1bGF0ZUF0dGFja1NwZWVkKGMyLnN0YXRzLmF0dGFja3NwZWVkLCBjMi5zdGF0cy5hdHRhY2tzcGVlZHBlcmxldmVsKTtcclxuICAgIGxldCBjMUF0dGFja1JhbmdlQXJyYXkgPSBjYWxjdWxhdGVBdHRhY2tSYW5nZSggYzEsIGMxLnN0YXRzLmF0dGFja3JhbmdlKTtcclxuICAgIGxldCBjMkF0dGFja1JhbmdlQXJyYXkgPSBjYWxjdWxhdGVBdHRhY2tSYW5nZSggYzIsIGMyLnN0YXRzLmF0dGFja3JhbmdlKTtcclxuICAgIFxyXG4gICAgLy8gRGVmZW5zaXZlIFN0YXRzXHJcbiAgICBsZXQgYzFIZWFsdGhBcnJheSA9IGNhbGN1bGF0ZVN0YXQoYzEuc3RhdHMuaHAsIGMxLnN0YXRzLmhwcGVybGV2ZWwpO1xyXG4gICAgbGV0IGMySGVhbHRoQXJyYXkgPSBjYWxjdWxhdGVTdGF0KGMyLnN0YXRzLmhwLCBjMi5zdGF0cy5ocHBlcmxldmVsKTtcclxuICAgIGxldCBjMUhlYWx0aFJlZ2VuQXJyYXkgPSBjYWxjdWxhdGVTdGF0KGMxLnN0YXRzLmhwcmVnZW4sIGMxLnN0YXRzLmhwcmVnZW5wZXJsZXZlbCk7XHJcbiAgICBsZXQgYzJIZWFsdGhSZWdlbkFycmF5ID0gY2FsY3VsYXRlU3RhdChjMi5zdGF0cy5ocHJlZ2VuLCBjMi5zdGF0cy5ocHJlZ2VucGVybGV2ZWwpO1xyXG4gICAgbGV0IGMxQXJtb3VyQXJyYXkgPSBjYWxjdWxhdGVTdGF0KGMxLnN0YXRzLmFybW9yLCBjMS5zdGF0cy5hcm1vcnBlcmxldmVsKTtcclxuICAgIGxldCBjMkFybW91ckFycmF5ID0gY2FsY3VsYXRlU3RhdChjMi5zdGF0cy5hcm1vciwgYzIuc3RhdHMuYXJtb3JwZXJsZXZlbCk7XHJcbiAgICBsZXQgYzFNYWdpY1Jlc2lzdEFycmF5ID0gY2FsY3VsYXRlU3RhdChjMS5zdGF0cy5zcGVsbGJsb2NrLCBjMS5zdGF0cy5zcGVsbGJsb2NrcGVybGV2ZWwpO1xyXG4gICAgbGV0IGMyTWFnaWNSZXNpc3RBcnJheSA9IGNhbGN1bGF0ZVN0YXQoYzIuc3RhdHMuc3BlbGxibG9jaywgYzIuc3RhdHMuc3BlbGxibG9ja3BlcmxldmVsKTtcclxuXHJcbiAgICAvLyBET00gUkVOREVSSU5HXHJcblxyXG4gICAgY29uc3QgYzFBdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMxLWF0a1wiKTtcclxuICAgIGNvbnN0IGMyQXR0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMi1hdGtcIik7XHJcbiAgICBjb25zdCBjMUF0dGFja1NwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMS1hdGtzcGRcIik7XHJcbiAgICBjb25zdCBjMkF0dGFja1NwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMi1hdGtzcGRcIik7XHJcbiAgICBjb25zdCBjMUF0dGFja1JhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMS1hdGtyYW5nZVwiKTtcclxuICAgIGNvbnN0IGMyQXR0YWNrUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMyLWF0a3JhbmdlXCIpO1xyXG4gICAgY29uc3QgYzFIZWFsdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMxLWhwXCIpO1xyXG4gICAgY29uc3QgYzJIZWFsdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMyLWhwXCIpO1xyXG4gICAgY29uc3QgYzFIZWFsdGhSZWdlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzEtaHByZWdlblwiKTtcclxuICAgIGNvbnN0IGMySGVhbHRoUmVnZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMyLWhwcmVnZW5cIik7XHJcbiAgICBjb25zdCBjMUFybW91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzEtYXJtb3VyXCIpO1xyXG4gICAgY29uc3QgYzJBcm1vdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMyLWFybW91clwiKTtcclxuICAgIGNvbnN0IGMxTWFnaWNSZXNpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMxLW1yXCIpO1xyXG4gICAgY29uc3QgYzJNYWdpY1Jlc2lzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzItbXJcIik7XHJcblxyXG4gICAgYzFBdHRhY2tBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihlbGVtZW50KTtcclxuICAgICAgICBjMUF0dGFjay5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjMkF0dGFja0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBNYXRoLmZsb29yKGVsZW1lbnQpO1xyXG4gICAgICAgIGMyQXR0YWNrLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMxQXR0YWNrU3BlZWRBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTnVtYmVyKChlbGVtZW50KS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjMUF0dGFja1NwZWVkLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMyQXR0YWNrU3BlZWRBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTnVtYmVyKChlbGVtZW50KS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjMkF0dGFja1NwZWVkLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMxQXR0YWNrUmFuZ2VBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gZWxlbWVudDtcclxuICAgICAgICBjMUF0dGFja1JhbmdlLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMyQXR0YWNrUmFuZ2VBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gZWxlbWVudDtcclxuICAgICAgICBjMkF0dGFja1JhbmdlLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMxSGVhbHRoQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoZWxlbWVudCk7XHJcbiAgICAgICAgYzFIZWFsdGguYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzJIZWFsdGhBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihlbGVtZW50KTtcclxuICAgICAgICBjMkhlYWx0aC5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjMUhlYWx0aFJlZ2VuQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE51bWJlcigoZWxlbWVudCkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgYzFIZWFsdGhSZWdlbi5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjMkhlYWx0aFJlZ2VuQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE51bWJlcigoZWxlbWVudCkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgYzJIZWFsdGhSZWdlbi5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjMUFybW91ckFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBNYXRoLmZsb29yKGVsZW1lbnQpO1xyXG4gICAgICAgIGMxQXJtb3VyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMyQXJtb3VyQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoZWxlbWVudCk7XHJcbiAgICAgICAgYzJBcm1vdXIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzFNYWdpY1Jlc2lzdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBNYXRoLmZsb29yKGVsZW1lbnQpO1xyXG4gICAgICAgIGMxTWFnaWNSZXNpc3QuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzJNYWdpY1Jlc2lzdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBNYXRoLmZsb29yKGVsZW1lbnQpO1xyXG4gICAgICAgIGMyTWFnaWNSZXNpc3QuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVN0YXQoYmFzZVN0YXQsIGdyb3d0aEZhY3Rvcikge1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgY3VycmVudExldmVsID0gMTsgY3VycmVudExldmVsIDw9IDE4OyBjdXJyZW50TGV2ZWwrKyl7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChiYXNlU3RhdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChiYXNlU3RhdCArIGdyb3d0aEZhY3RvciAqIChjdXJyZW50TGV2ZWwgLSAxKSAqICgoMC43MDI1ICsgMC4wMTc1ICogKGN1cnJlbnRMZXZlbCAtIDEpKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVBdHRhY2tTcGVlZChiYXNlU3RhdCwgZ3Jvd3RoRmFjdG9yKXtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGN1cnJlbnRMZXZlbCA9IDE7IGN1cnJlbnRMZXZlbCA8PSAxODsgY3VycmVudExldmVsKyspe1xyXG4gICAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGJhc2VTdGF0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGJhc2VTdGF0ICogKDEgKyAoKGdyb3d0aEZhY3RvciAqIChjdXJyZW50TGV2ZWwgLSAxKSAqICgoMC43MDI1ICsgMC4wMTc1ICooY3VycmVudExldmVsIC0gMSkpKSkgLyAxMDApKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlQXR0YWNrUmFuZ2UoY2hhbXBpb24sIGJhc2VTdGF0KSB7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAoY2hhbXBpb24uaWQgPT0gXCJUcmlzdGFuYVwiKXtcclxuICAgICAgICBmb3IgKGxldCBjdXJyZW50TGV2ZWwgPSAxOyBjdXJyZW50TGV2ZWwgPD0gMTg7IGN1cnJlbnRMZXZlbCsrKXtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChiYXNlU3RhdCArKDAgKyAxNTAgLyAxNyAqIChjdXJyZW50TGV2ZWwgLSAxKSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGN1cnJlbnRMZXZlbCA9IDE7IGN1cnJlbnRMZXZlbCA8PSAxODsgY3VycmVudExldmVsKyspe1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGJhc2VTdGF0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluc3RhbnRpYXRlR3JpZCB9IGZyb20gJy4vZ3JpZCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzE0LjIzLjEvZGF0YS9lbl9VUy9jaGFtcGlvbi5qc29uXCI7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge21vZGU6IFwiY29yc1wifSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHJldHVybihkYXRhKTtcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG59XHJcblxyXG5nZXREYXRhKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaW5zdGFudGlhdGVHcmlkKGRhdGEpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==