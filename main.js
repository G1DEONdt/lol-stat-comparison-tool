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
        const response = await fetch(url);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCO0FBQ2hEO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBO0FBQ0EsTUFBTTtBQUNOLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM5T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7O0FDQXlDO0FBQ3BCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0JBQWdCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMyNzI5MzI7XHJcbiAgICAtLXRleHQtY29sb3I6ICNGQUU4RUI7XHJcbiAgICAtLWFjY2VudC1vbmU6ICMwMEE3RTE7XHJcbiAgICAtLWFjY2VudC10d286ICNGRjlCNDI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHN5c3RlbS11aTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjRweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtdHdvKTtcclxuICAgIFxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXR3byk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTI4cHg7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICAgIHdpZHRoOiAxMjhweDtcclxufVxyXG5cclxuXHJcbi5zZWxlY3Rpb24tZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBkaXNwbGF5OiBub25lOyAgKi9cclxufVxyXG5cclxuLnNlbGVjdGlvbi1ncmlkLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tZ3JpZC10aXRsZSBoMiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXR3byk7XHJcbiAgICBmbGV4OiAxXHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tZ3JpZCAuc2VhcmNoIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLmNoYW1waW9uLWdyaWQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1MHB4IDBweCBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2hhbXBpb24ge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC10d28pOyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyNXB4IDBweCB2YXIoLS10ZXh0LWNvbG9yKSAqL1xyXG59XHJcblxyXG4uY2hhbXBpb246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxufVxyXG5cclxuXHJcbi5zdGF0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXQtY29udGFpbmVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUYWJsZSBTdHlsaW5nICovXHJcbi5zdGF0IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xyXG59XHJcblxyXG4uc3RhdC10YWJsZSB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcclxufVxyXG5cclxuLnN0YXQtdGFibGUgdGhlYWQgdHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXR3byk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN0YXQtdGFibGUgdGgsXHJcbi5zdGF0LXRhYmxlIHRkIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuXHJcbi5zdGF0LXRhYmxlIHRib2R5IHRyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtdHdvKTtcclxufVxyXG5cclxuLnN0YXQtdGFibGUgdGJvZHkgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYWNjZW50LXR3byk7XHJcbn1cclxuXHJcbi5zdGF0LXRhYmxlIC5pY29uIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0LXRhYmxlIHRib2R5IGltZyB7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxufVxyXG5cclxuLnN0YXQtY29udGFpbmVyIC5zdGF0LXRhYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMENBQTBDOztBQUU5Qzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyx5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFEQUFxRDtJQUNyRCxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMyNzI5MzI7XFxyXFxuICAgIC0tdGV4dC1jb2xvcjogI0ZBRThFQjtcXHJcXG4gICAgLS1hY2NlbnQtb25lOiAjMDBBN0UxO1xcclxcbiAgICAtLWFjY2VudC10d286ICNGRjlCNDI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHN5c3RlbS11aTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC10d28pO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXR3byk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBoZWlnaHQ6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEyOHB4O1xcclxcbiAgICBsZWZ0OiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDEyOHB4O1xcclxcbiAgICB3aWR0aDogMTI4cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWxlY3Rpb24tZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMjRweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgICovXFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb24tZ3JpZC10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0aW9uLWdyaWQtdGl0bGUgaDIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXR3byk7XFxyXFxuICAgIGZsZXg6IDFcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGlvbi1ncmlkIC5zZWFyY2gge1xcclxcbiAgICBmbGV4OiAyO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwJTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbXBpb24tZ3JpZCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNTBweCAwcHggYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jaGFtcGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMjhweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjhweDtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LXR3byk7ICovXFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjVweCAwcHggdmFyKC0tdGV4dC1jb2xvcikgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNoYW1waW9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvcGFjaXR5OiAwLjc1O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3RhdC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1jb250YWluZXIgaDIge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXR3byk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFibGUgU3R5bGluZyAqL1xcclxcbi5zdGF0IGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdHdvKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtdGFibGUge1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC10YWJsZSB0aGVhZCB0ciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10d28pO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zdGF0LXRhYmxlIHRoLFxcclxcbi5zdGF0LXRhYmxlIHRkIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC10YWJsZSB0Ym9keSB0ciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtdHdvKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtdGFibGUgdGJvZHkgdGQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC10d28pO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC10YWJsZSAuaWNvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC10YWJsZSB0Ym9keSBpbWcge1xcclxcbiAgICB3aWR0aDogNDJweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1jb250YWluZXIgLnN0YXQtdGFibGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzZWxlY3Rpb25HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Rpb24tZ3JpZFwiKTtcclxuY29uc3QgY2hhbXBpb25HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFtcGlvbi1ncmlkXCIpO1xyXG5jb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0aW9uLWhlYWRlclwiKTtcclxuY29uc3QgY2hhbXBpb25JY29uT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGFtcGlvbi1pY29uLW9uZVwiKTtcclxuY29uc3QgY2hhbXBpb25JY29uVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGFtcGlvbi1pY29uLXR3b1wiKTtcclxuY29uc3Qgc3RhdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdC1jb250YWluZXJcIik7XHJcbmxldCBjMTtcclxubGV0IGMyO1xyXG5cclxuXHJcbmNvbnN0IGMxQXR0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMS1hdGtcIik7XHJcbmNvbnN0IGMyQXR0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMi1hdGtcIik7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlR3JpZChkYXRhKSB7XHJcbiAgICBmb3IgKGxldCBjaGFtcGlvbiBpbiBkYXRhLmRhdGEpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hhbXBpb25cIik7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzcmMgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzE0LjIzLjEvaW1nL2NoYW1waW9uLyR7ZGF0YS5kYXRhW2NoYW1waW9uXS5pbWFnZS5mdWxsfWA7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQuY2hpbGRFbGVtZW50Q291bnQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZChkYXRhLmRhdGFbY2hhbXBpb25dKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUhlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgYzEgPSBkYXRhLmRhdGFbY2hhbXBpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLmNoaWxkRWxlbWVudENvdW50IDwgMikge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWQoZGF0YS5kYXRhW2NoYW1waW9uXSk7XHJcbiAgICAgICAgICAgICAgICBjMiA9IGRhdGEuZGF0YVtjaGFtcGlvbl07XHJcbiAgICAgICAgICAgICAgICBsb2FkSWNvbnMoYzEsIGMyKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclN0YXRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjaGFtcGlvbkdyaWQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTZWxlY3RlZChjaGFtcGlvbil7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICBpbWcuc3JjID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xNC4yMy4xL2ltZy9jaGFtcGlvbi8ke2NoYW1waW9uLmltYWdlLmZ1bGx9YDtcclxuICAgIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBzZWxlY3RlZC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNlY29uZCBDaGFtcGlvblwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSWNvbnMoYzEsIGMyKXtcclxuICAgIGNvbnNvbGUubG9nKGMxLCBjMik7XHJcbiAgICBzZWxlY3Rpb25HcmlkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBjb25zdCBpY29uT25lID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xNC4yMy4xL2ltZy9jaGFtcGlvbi8ke2MxLmltYWdlLmZ1bGx9YDtcclxuICAgIGNvbnN0IGljb25Ud28gPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzE0LjIzLjEvaW1nL2NoYW1waW9uLyR7YzIuaW1hZ2UuZnVsbH1gO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbXBpb25JY29uT25lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2hhbXBpb25JY29uT25lW2ldLnNyYyA9IGljb25PbmU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW1waW9uSWNvblR3by5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNoYW1waW9uSWNvblR3b1tpXS5zcmMgPSBpY29uVHdvO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTdGF0cygpIHtcclxuICAgIHN0YXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIC8vIFNUQVQgQVJSQVlTXHJcbiAgICAvLyBPZmZlbnNpdmUgU3RhdHNcclxuICAgIGxldCBjMUF0dGFja0FycmF5ID0gY2FsY3VsYXRlU3RhdChjMS5zdGF0cy5hdHRhY2tkYW1hZ2UsIGMxLnN0YXRzLmF0dGFja2RhbWFnZXBlcmxldmVsKTtcclxuICAgIGxldCBjMkF0dGFja0FycmF5ID0gY2FsY3VsYXRlU3RhdChjMi5zdGF0cy5hdHRhY2tkYW1hZ2UsIGMyLnN0YXRzLmF0dGFja2RhbWFnZXBlcmxldmVsKTtcclxuICAgIGxldCBjMUF0dGFja1NwZWVkQXJyYXkgPSBjYWxjdWxhdGVBdHRhY2tTcGVlZChjMS5zdGF0cy5hdHRhY2tzcGVlZCwgYzEuc3RhdHMuYXR0YWNrc3BlZWRwZXJsZXZlbCk7XHJcbiAgICBsZXQgYzJBdHRhY2tTcGVlZEFycmF5ID0gY2FsY3VsYXRlQXR0YWNrU3BlZWQoYzIuc3RhdHMuYXR0YWNrc3BlZWQsIGMyLnN0YXRzLmF0dGFja3NwZWVkcGVybGV2ZWwpO1xyXG4gICAgbGV0IGMxQXR0YWNrUmFuZ2VBcnJheSA9IGNhbGN1bGF0ZUF0dGFja1JhbmdlKCBjMSwgYzEuc3RhdHMuYXR0YWNrcmFuZ2UpO1xyXG4gICAgbGV0IGMyQXR0YWNrUmFuZ2VBcnJheSA9IGNhbGN1bGF0ZUF0dGFja1JhbmdlKCBjMiwgYzIuc3RhdHMuYXR0YWNrcmFuZ2UpO1xyXG4gICAgXHJcbiAgICAvLyBEZWZlbnNpdmUgU3RhdHNcclxuICAgIGxldCBjMUhlYWx0aEFycmF5ID0gY2FsY3VsYXRlU3RhdChjMS5zdGF0cy5ocCwgYzEuc3RhdHMuaHBwZXJsZXZlbCk7XHJcbiAgICBsZXQgYzJIZWFsdGhBcnJheSA9IGNhbGN1bGF0ZVN0YXQoYzIuc3RhdHMuaHAsIGMyLnN0YXRzLmhwcGVybGV2ZWwpO1xyXG4gICAgbGV0IGMxSGVhbHRoUmVnZW5BcnJheSA9IGNhbGN1bGF0ZVN0YXQoYzEuc3RhdHMuaHByZWdlbiwgYzEuc3RhdHMuaHByZWdlbnBlcmxldmVsKTtcclxuICAgIGxldCBjMkhlYWx0aFJlZ2VuQXJyYXkgPSBjYWxjdWxhdGVTdGF0KGMyLnN0YXRzLmhwcmVnZW4sIGMyLnN0YXRzLmhwcmVnZW5wZXJsZXZlbCk7XHJcbiAgICBsZXQgYzFBcm1vdXJBcnJheSA9IGNhbGN1bGF0ZVN0YXQoYzEuc3RhdHMuYXJtb3IsIGMxLnN0YXRzLmFybW9ycGVybGV2ZWwpO1xyXG4gICAgbGV0IGMyQXJtb3VyQXJyYXkgPSBjYWxjdWxhdGVTdGF0KGMyLnN0YXRzLmFybW9yLCBjMi5zdGF0cy5hcm1vcnBlcmxldmVsKTtcclxuICAgIGxldCBjMU1hZ2ljUmVzaXN0QXJyYXkgPSBjYWxjdWxhdGVTdGF0KGMxLnN0YXRzLnNwZWxsYmxvY2ssIGMxLnN0YXRzLnNwZWxsYmxvY2twZXJsZXZlbCk7XHJcbiAgICBsZXQgYzJNYWdpY1Jlc2lzdEFycmF5ID0gY2FsY3VsYXRlU3RhdChjMi5zdGF0cy5zcGVsbGJsb2NrLCBjMi5zdGF0cy5zcGVsbGJsb2NrcGVybGV2ZWwpO1xyXG5cclxuICAgIC8vIERPTSBSRU5ERVJJTkdcclxuXHJcbiAgICBjb25zdCBjMUF0dGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzEtYXRrXCIpO1xyXG4gICAgY29uc3QgYzJBdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMyLWF0a1wiKTtcclxuICAgIGNvbnN0IGMxQXR0YWNrU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMxLWF0a3NwZFwiKTtcclxuICAgIGNvbnN0IGMyQXR0YWNrU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMyLWF0a3NwZFwiKTtcclxuICAgIGNvbnN0IGMxQXR0YWNrUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMxLWF0a3JhbmdlXCIpO1xyXG4gICAgY29uc3QgYzJBdHRhY2tSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzItYXRrcmFuZ2VcIik7XHJcbiAgICBjb25zdCBjMUhlYWx0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzEtaHBcIik7XHJcbiAgICBjb25zdCBjMkhlYWx0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzItaHBcIik7XHJcbiAgICBjb25zdCBjMUhlYWx0aFJlZ2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMS1ocHJlZ2VuXCIpO1xyXG4gICAgY29uc3QgYzJIZWFsdGhSZWdlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzItaHByZWdlblwiKTtcclxuICAgIGNvbnN0IGMxQXJtb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMS1hcm1vdXJcIik7XHJcbiAgICBjb25zdCBjMkFybW91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzItYXJtb3VyXCIpO1xyXG4gICAgY29uc3QgYzFNYWdpY1Jlc2lzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzEtbXJcIik7XHJcbiAgICBjb25zdCBjMk1hZ2ljUmVzaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jMi1tclwiKTtcclxuXHJcbiAgICBjMUF0dGFja0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBNYXRoLmZsb29yKGVsZW1lbnQpO1xyXG4gICAgICAgIGMxQXR0YWNrLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMyQXR0YWNrQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoZWxlbWVudCk7XHJcbiAgICAgICAgYzJBdHRhY2suYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzFBdHRhY2tTcGVlZEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBOdW1iZXIoKGVsZW1lbnQpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIGMxQXR0YWNrU3BlZWQuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzJBdHRhY2tTcGVlZEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBOdW1iZXIoKGVsZW1lbnQpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIGMyQXR0YWNrU3BlZWQuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzFBdHRhY2tSYW5nZUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBlbGVtZW50O1xyXG4gICAgICAgIGMxQXR0YWNrUmFuZ2UuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzJBdHRhY2tSYW5nZUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBlbGVtZW50O1xyXG4gICAgICAgIGMyQXR0YWNrUmFuZ2UuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzFIZWFsdGhBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihlbGVtZW50KTtcclxuICAgICAgICBjMUhlYWx0aC5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjMkhlYWx0aEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5pbm5lclRleHQgPSBNYXRoLmZsb29yKGVsZW1lbnQpO1xyXG4gICAgICAgIGMySGVhbHRoLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMxSGVhbHRoUmVnZW5BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTnVtYmVyKChlbGVtZW50KS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjMUhlYWx0aFJlZ2VuLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMySGVhbHRoUmVnZW5BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTnVtYmVyKChlbGVtZW50KS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjMkhlYWx0aFJlZ2VuLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGMxQXJtb3VyQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoZWxlbWVudCk7XHJcbiAgICAgICAgYzFBcm1vdXIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYzJBcm1vdXJBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihlbGVtZW50KTtcclxuICAgICAgICBjMkFybW91ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjMU1hZ2ljUmVzaXN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoZWxlbWVudCk7XHJcbiAgICAgICAgYzFNYWdpY1Jlc2lzdC5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjMk1hZ2ljUmVzaXN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoZWxlbWVudCk7XHJcbiAgICAgICAgYzJNYWdpY1Jlc2lzdC5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlU3RhdChiYXNlU3RhdCwgZ3Jvd3RoRmFjdG9yKSB7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBjdXJyZW50TGV2ZWwgPSAxOyBjdXJyZW50TGV2ZWwgPD0gMTg7IGN1cnJlbnRMZXZlbCsrKXtcclxuICAgICAgICBpZiAoY3VycmVudExldmVsID09IDEpe1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGJhc2VTdGF0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGJhc2VTdGF0ICsgZ3Jvd3RoRmFjdG9yICogKGN1cnJlbnRMZXZlbCAtIDEpICogKCgwLjcwMjUgKyAwLjAxNzUgKiAoY3VycmVudExldmVsIC0gMSkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUF0dGFja1NwZWVkKGJhc2VTdGF0LCBncm93dGhGYWN0b3Ipe1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgY3VycmVudExldmVsID0gMTsgY3VycmVudExldmVsIDw9IDE4OyBjdXJyZW50TGV2ZWwrKyl7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goYmFzZVN0YXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goYmFzZVN0YXQgKiAoMSArICgoZ3Jvd3RoRmFjdG9yICogKGN1cnJlbnRMZXZlbCAtIDEpICogKCgwLjcwMjUgKyAwLjAxNzUgKihjdXJyZW50TGV2ZWwgLSAxKSkpKSAvIDEwMCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVBdHRhY2tSYW5nZShjaGFtcGlvbiwgYmFzZVN0YXQpIHtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG5cclxuICAgIGlmIChjaGFtcGlvbi5pZCA9PSBcIlRyaXN0YW5hXCIpe1xyXG4gICAgICAgIGZvciAobGV0IGN1cnJlbnRMZXZlbCA9IDE7IGN1cnJlbnRMZXZlbCA8PSAxODsgY3VycmVudExldmVsKyspe1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGJhc2VTdGF0ICsoMCArIDE1MCAvIDE3ICogKGN1cnJlbnRMZXZlbCAtIDEpKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgY3VycmVudExldmVsID0gMTsgY3VycmVudExldmVsIDw9IDE4OyBjdXJyZW50TGV2ZWwrKyl7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goYmFzZVN0YXQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5zdGFudGlhdGVHcmlkIH0gZnJvbSAnLi9ncmlkJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTQuMjMuMS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb25cIjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuKGRhdGEpO1xyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbmdldERhdGEoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpbnN0YW50aWF0ZUdyaWQoZGF0YSk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9