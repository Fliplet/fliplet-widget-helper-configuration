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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Application_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);

 // Sample data

if (Fliplet.Env.get('development')) {
  window.__widgetData = {
    'com.fliplet.helper-configuration': {
      assetsUrl: 'https://d2fx5g1ro9ok5z.cloudfront.net/widgets/com.fliplet.helper-configuration/1.0.0/',
      data: {
        name: 'welcome',
        configuration: {
          dependencies: ['tinymce'],
          fields: [{
            name: 'name',
            type: 'text',
            label: 'Your name'
          }, {
            name: 'opts',
            type: 'radio',
            label: 'Your name',
            options: ['Sausage', {
              label: 'Pineapple',
              value: 'baz'
            }]
          }, {
            name: 'dsprovider',
            label: 'Provider',
            type: 'provider',
            "package": 'com.fliplet.data-source-provider'
          }]
        },
        fields: {
          name: 'Doe',
          type: 'welcome'
        },
        event: 'helper-instance-configure',
        id: 'com.fliplet.helper-configuration',
        "package": 'com.fliplet.helper-configuration',
        version: '1.0.0'
      }
    }
  };
}

(function () {
  var data = Fliplet.Widget.getData();

  var fields = _.get(data, 'configuration.fields', []);

  if (!fields.length) {
    Fliplet.Modal.alert({
      message: 'This helper has not defined a list of fields for the interface.'
    });
    return Fliplet.Widget.complete();
  }

  if (data.configuration && data.configuration.beforeReady) {
    var beforeReady = new Function(data.configuration.beforeReady)();

    if (beforeReady) {
      try {
        beforeReady.call(this, data.fields, data.configuration);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('The beforeReady function is invalid', e, data.configuration.beforeReady);
      }
    }
  }

  fields.forEach(function (field) {
    field.value = _.get(data.fields, field.name, field["default"]); // Normalize options

    if (Array.isArray(field.options)) {
      field.options = field.options.map(function (opt) {
        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(opt) === 'object') {
          return opt;
        }

        return {
          value: opt
        };
      });

      if (field.type === 'checkbox' && !Array.isArray(field.value)) {
        field.value = [];
      }
    }
  });
  new Vue({
    el: '#helper-configuration',
    render: function render(createElement) {
      return createElement(_Application_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "interface" }, [
    _c("h3", [_vm._v(_vm._s(_vm.configuration.title))]),
    _vm._v(" "),
    _c(
      "form",
      {
        ref: "form",
        staticClass: "fields",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          }
        }
      },
      [
        _vm._l(_vm.configuration.fields, function(field) {
          return [
            _c("field", _vm._b({ key: field.name }, "field", field, false))
          ]
        }),
        _vm._v(" "),
        _c("input", {
          ref: "submitButton",
          staticStyle: { display: "none" },
          attrs: { type: "submit" }
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('Field', _components_Field__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return Fliplet.Widget.getData();
  },
  methods: {
    onSubmit: function onSubmit() {
      var vm = this;
      var beforeSave;

      if (this.configuration.beforeSave) {
        var beforeSaveFunction = new Function(this.configuration.beforeSave)();

        if (beforeSaveFunction) {
          try {
            beforeSave = beforeSaveFunction.call(this, this.fields, this.configuration);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn('The beforeSave function has thrown an error', e, this.configuration.beforeSave);
            Fliplet.Modal.alert({
              message: Fliplet.parseError(e)
            });
          }
        }
      }

      if (!(beforeSave instanceof Promise)) {
        beforeSave = Promise.resolve();
      }

      beforeSave.then(function () {
        Fliplet.Studio.emit('page-preview-send-event', {
          type: 'helper-configuration-updated',
          // remove reactivity so objects are properly converted
          // into data that can be transmitted
          data: JSON.parse(JSON.stringify(vm.fields))
        });
        Fliplet.Studio.emit('widget-save-complete');
      })["catch"](function (err) {
        // eslint-disable-next-line no-console
        console.warn('Cannot save helper configuration', err);
        Fliplet.Modal.alert({
          title: 'Error saving configurations',
          message: Fliplet.parseError(err)
        });
      });
    }
  },
  mounted: function mounted() {
    var vm = this;
    Fliplet.Widget.onSaveRequest(function () {
      $(vm.$refs.submitButton).click();
    });

    if (this.configuration.ready) {
      var ready = new Function(this.configuration.ready)();

      if (ready) {
        try {
          ready.call(this, this.fields, this.configuration);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('The ready function is invalid', e, this.configuration.ready);
        }
      }
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-group" }, [
      _vm.label ? _c("label", [_vm._v(_vm._s(_vm.label))]) : _vm._e(),
      _vm._v(" "),
      _vm.description ? _c("p", [_vm._v(_vm._s(_vm.description))]) : _vm._e(),
      _vm._v(" "),
      _vm.type === "text"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: _vm.placeholder,
              required: _vm.required
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.type === "email"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              placeholder: _vm.placeholder,
              required: _vm.required
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.type === "textarea"
        ? _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            staticClass: "form-control",
            attrs: {
              placeholder: _vm.placeholder,
              required: _vm.required,
              rows: _vm.rows || 4
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.options && ["radio", "checkbox"].indexOf(_vm.type) !== -1
        ? _c(
            "div",
            { staticClass: "options" },
            _vm._l(_vm.options, function(option) {
              return _c("label", { key: option.value }, [
                _vm.type === "checkbox"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value"
                        }
                      ],
                      attrs: { name: _vm.name, type: "checkbox" },
                      domProps: {
                        value: option.value,
                        checked: Array.isArray(_vm.value)
                          ? _vm._i(_vm.value, option.value) > -1
                          : _vm.value
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.value,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = option.value,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.value = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.value = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.value = $$c
                          }
                        }
                      }
                    })
                  : _vm.type === "radio"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value"
                        }
                      ],
                      attrs: { name: _vm.name, type: "radio" },
                      domProps: {
                        value: option.value,
                        checked: _vm._q(_vm.value, option.value)
                      },
                      on: {
                        change: function($event) {
                          _vm.value = option.value
                        }
                      }
                    })
                  : _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value"
                        }
                      ],
                      attrs: { name: _vm.name, type: _vm.type },
                      domProps: { value: option.value, value: _vm.value },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.value = $event.target.value
                        }
                      }
                    }),
                _vm._v(" " + _vm._s(option.label || option.value) + "\n      ")
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.html
        ? _c("div", { domProps: { innerHTML: _vm._s(_vm.html) } })
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.type === "provider" ? _c("div", { staticClass: "provider" }) : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      guid: Fliplet.guid()
    };
  },
  props: ['type', 'name', 'label', 'html', 'value', 'init', 'placeholder', 'default', 'description', 'required', 'rows', 'options', 'package'],
  watch: {
    value: function value(newValue) {
      this.$parent.fields[this.name] = newValue;
    }
  },
  methods: {
    val: function val(newValue) {
      if (typeof newValue !== 'undefined') {
        this.value = newValue;
        return;
      }

      return this.value;
    }
  },
  mounted: function mounted() {
    if (this.type === 'provider') {
      if (!this["package"]) {
        throw new Error('Package is required');
      }

      this.provider = Fliplet.Widget.open(this["package"], {
        selector: $(this.$el).find('.provider')[0],
        data: this.value || {}
      });
    }

    if (this.ready) {
      var ready = new Function(this.ready)();
      ready.call(this, this.$el);
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);