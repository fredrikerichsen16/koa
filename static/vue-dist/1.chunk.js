(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue/widgets/Stocks/Stocks.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./vue/widgets/Stocks/Stocks.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Stocks',\n  mounted: function mounted() {\n    var data = null;\n    var xhr = new XMLHttpRequest();\n    xhr.withCredentials = true;\n    xhr.addEventListener(\"readystatechange\", function () {\n      if (this.readyState === this.DONE) {\n        var stock = JSON.parse(this.responseText);\n        console.log(stock);\n      }\n    });\n    xhr.open(\"GET\", \"https://alpha-vantage.p.rapidapi.com/query?symbol=TSLA&function=GLOBAL_QUOTE\");\n    xhr.setRequestHeader(\"x-rapidapi-host\", \"alpha-vantage.p.rapidapi.com\");\n    xhr.setRequestHeader(\"x-rapidapi-key\", \"301b5eb2fcmshebd8323fc79a828p1d45adjsn3a594e967584\");\n    xhr.send(data);\n  }\n});\n\n//# sourceURL=webpack:///./vue/widgets/Stocks/Stocks.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue/widgets/Stocks/Stocks.vue?vue&type=template&id=064bcaf0&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vue/widgets/Stocks/Stocks.vue?vue&type=template&id=064bcaf0& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"h1\", [_vm._v(\"Stocks\")]),\n      _vm._v(\" \"),\n      _c(\"p\", [_vm._v(\"Buy BitCOIN!\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./vue/widgets/Stocks/Stocks.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./vue/widgets/Stocks/Stocks.vue":
/*!***************************************!*\
  !*** ./vue/widgets/Stocks/Stocks.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Stocks_vue_vue_type_template_id_064bcaf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stocks.vue?vue&type=template&id=064bcaf0& */ \"./vue/widgets/Stocks/Stocks.vue?vue&type=template&id=064bcaf0&\");\n/* harmony import */ var _Stocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stocks.vue?vue&type=script&lang=js& */ \"./vue/widgets/Stocks/Stocks.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Stocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Stocks_vue_vue_type_template_id_064bcaf0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Stocks_vue_vue_type_template_id_064bcaf0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"vue/widgets/Stocks/Stocks.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./vue/widgets/Stocks/Stocks.vue?");

/***/ }),

/***/ "./vue/widgets/Stocks/Stocks.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./vue/widgets/Stocks/Stocks.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./Stocks.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue/widgets/Stocks/Stocks.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./vue/widgets/Stocks/Stocks.vue?");

/***/ }),

/***/ "./vue/widgets/Stocks/Stocks.vue?vue&type=template&id=064bcaf0&":
/*!**********************************************************************!*\
  !*** ./vue/widgets/Stocks/Stocks.vue?vue&type=template&id=064bcaf0& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stocks_vue_vue_type_template_id_064bcaf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Stocks.vue?vue&type=template&id=064bcaf0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue/widgets/Stocks/Stocks.vue?vue&type=template&id=064bcaf0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stocks_vue_vue_type_template_id_064bcaf0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stocks_vue_vue_type_template_id_064bcaf0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./vue/widgets/Stocks/Stocks.vue?");

/***/ })

}]);