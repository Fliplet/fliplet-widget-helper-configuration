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
        displayName: 'Welcome',
        supportUrl: 'https://developers.fliplet.com',
        configuration: {
          dependencies: ['tinymce'],
          fields: [{
            name: 'name',
            type: 'text',
            label: 'Your name',
            description: 'This is your name',
            required: true
          }, {
            name: 'email',
            type: 'email',
            label: 'Your email',
            description: 'This is your email',
            required: true
          }, {
            name: 'secret',
            type: 'hidden',
            label: 'Your secret',
            required: true
          }, {
            name: 'bio',
            type: 'textarea',
            label: 'Bio',
            description: 'This is your bio',
            rows: 5,
            required: true
          }, {
            type: 'toggle',
            name: 'darkMode',
            label: 'Turn on Dark Mode',
            description: 'Enable Dark Mode',
            toggleLabel: 'Enable',
            "default": false,
            required: true
          }, {
            name: 'stocks',
            type: 'checkbox',
            label: 'Stocks',
            description: 'Stocks that you own',
            options: [{
              value: 'AAPL',
              label: 'Apple'
            }, {
              value: 'FB',
              label: 'Facebook'
            }, {
              value: 'GOOGL',
              label: 'Google'
            }],
            required: true
          }, {
            name: 'city',
            type: 'radio',
            label: 'City',
            description: 'Where do you live?',
            options: ['London', 'New York', 'Paris'],
            required: true
          }, {
            name: 'country',
            type: 'dropdown',
            label: 'Country',
            description: 'Which country is that?',
            options: ['France', 'United Kingdom', {
              value: 'United States',
              label: 'United States of America'
            }],
            required: true
          }, {
            type: 'provider',
            name: 'files',
            label: 'Open file picker',
            "package": 'com.fliplet.file-picker',
            mode: 'full-screen',
            html: '<button class="btn btn-default" data-open-provider>Open</button> You selected {{ value.length }} files'
          }, {
            name: 'buttons',
            label: 'Buttons',
            type: 'list',
            addLabel: 'Add button',
            headingFieldName: 'title',
            emptyListPlaceholderHtml: '<p>Hello world</p>',
            fields: [{
              name: 'title',
              type: 'text',
              label: 'Button title',
              placeholder: 'Sample button',
              required: true
            }, {
              name: 'showOnLoad',
              type: 'toggle',
              label: 'Show on load',
              toggleLabel: 'Yes'
            }, {
              type: 'provider',
              name: 'action',
              label: 'Choose an action to do when the button is pressed',
              "package": 'com.fliplet.link'
            }],
            required: true
          }]
        },
        event: 'helper-instance-configure',
        id: 'com.fliplet.helper-configuration',
        "package": 'com.fliplet.helper-configuration',
        version: '1.0.0'
      }
    }
  };
}
var data = Fliplet.Widget.getData();
data.fields = data.fields || {};
function initializeInterface() {
  var fields = _.get(data, 'configuration.fields', []);
  if (!fields.length) {
    Fliplet.Modal.alert({
      message: 'This helper has not defined a list of fields for the interface.'
    });
    return Fliplet.Widget.complete();
  }
  if (data.configuration && data.configuration.beforeReady) {
    var beforeReady = typeof data.configuration.beforeReady === 'function' ? data.configuration.beforeReady : new Function(data.configuration.beforeReady)();
    if (beforeReady) {
      try {
        beforeReady.call(this, data.fields, data.configuration);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('The beforeReady function is invalid', e, data.configuration.beforeReady);
      }
    }
  }
  var fieldData = typeof data.instanceId === 'string' ? data.fields : data;
  fields.forEach(function (field) {
    field.value = _.get(fieldData, field.name, field["default"]);
    if (field.type === 'list') {
      field.value = (field.value || []).map(function (item) {
        var list = field.fields;
        list.forEach(function (listItem) {
          listItem.value = _.get(item, listItem.name, listItem["default"]);
        });
        return list;
      });
    }

    // Normalize options
    if (Array.isArray(field.options)) {
      field.options = field.options.map(function (opt) {
        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(opt) === 'object') {
          return opt;
        }
        return {
          value: opt
        };
      });
    }
    if (['checkbox', 'list'].indexOf(field.type) !== -1 && !Array.isArray(field.value)) {
      field.value = [];
    }
  });
  Vue.filter('panelHeading', function (fields, name) {
    var field = _.find(fields, {
      name: name
    }) || _.first(fields);
    return field && (field.value || field.placeholder) || 'New field';
  });
  Vue.directive('sortable', {
    inserted: function inserted(el, binding) {
      if (Sortable) {
        new Sortable(el, binding.value || {});
      }
    }
  });
  return new Vue({
    el: '#helper-configuration',
    render: function render(createElement) {
      return createElement(_Application_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
}

/**
 * Manually initializes the interface.
 * This can be called by a widget interface.js file
 * @param {Object} configuration - The configuration object
 * @returns {Vue} The vue instance of the interface
 */
Fliplet.Helper.generateConfigurationInterface = function (configuration) {
  data.configuration = configuration;
  return initializeInterface();
};
(function () {
  // Do not initialize the UI when it's called from a widget instance
  if (data.uuid) {
    return;
  }
  return initializeInterface();
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "interface" },
    [
      _c("validation-observer", {
        ref: "observer",
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var validate = ref.validate
              return [
                _c(
                  "form",
                  {
                    ref: "form",
                    staticClass: "form-horizontal",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        validate().then(_vm.onSubmit)
                      },
                    },
                  },
                  [
                    _c("header", [
                      _c("p", [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.widgetName || _vm.displayName || _vm.name
                            ) +
                            "\n          "
                        ),
                        _vm.supportUrl
                          ? _c(
                              "a",
                              {
                                staticClass: "help-icon",
                                attrs: {
                                  href: _vm.supportUrl,
                                  target: "_blank",
                                },
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-question-circle-o",
                                }),
                              ]
                            )
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.configuration.fields, function (field) {
                      return [
                        _c(
                          "field",
                          _vm._b(
                            {
                              key: field.name,
                              ref: "fieldInstances",
                              refInFor: true,
                            },
                            "field",
                            field,
                            false
                          )
                        ),
                      ]
                    }),
                    _vm._v(" "),
                    _vm.showSubmit
                      ? _c("div", { staticClass: "form-group" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-8 col-sm-offset-4" },
                            [
                              _c("input", {
                                ref: "submitButton",
                                staticClass: "btn btn-primary",
                                attrs: { type: "submit" },
                              }),
                            ]
                          ),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _components_Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _libs_lookups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);


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
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    field: _components_Field__WEBPACK_IMPORTED_MODULE_3__["default"],
    validationObserver: VeeValidate.ValidationObserver
  },
  data: function data() {
    return _.assign({
      fields: {},
      showSubmit: window.parent === window && Fliplet.Env.get('development')
    }, Fliplet.Widget.getData(), {
      widgetName: window.__widgetData[Fliplet.Widget.getData().id].name
    });
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: _libs_lookups__WEBPACK_IMPORTED_MODULE_4__["findAll"],
    findOne: _libs_lookups__WEBPACK_IMPORTED_MODULE_4__["findOne"],
    children: _libs_lookups__WEBPACK_IMPORTED_MODULE_4__["findChildren"],
    onUpdateValue: function onUpdateValue(name, value) {
      var field = _.find(this.configuration.fields, {
        name: name
      });
      if (!field) {
        return;
      }
      this.fields[name] = value;
      field.value = value;
    },
    onSubmit: function onSubmit(valid) {
      var _this = this;
      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var $errors, beforeSave, beforeSaveFunction;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (valid) {
                _context.next = 4;
                break;
              }
              $errors = $('.has-error:visible');
              if ($errors.length) {
                // Scroll user to first visible field with error
                $('html, body').stop().animate({
                  scrollTop: $errors.eq(0).offset().top
                }, {
                  duration: 200
                });
              }
              return _context.abrupt("return");
            case 4:
              _context.next = 6;
              return Promise.all(_this.$refs.fieldInstances.map(function (field) {
                // Don't submit hidden fields
                if (field.show === false) {
                  _this.fields[field.name] = null;
                  return;
                }
                return field.onSubmit();
              }));
            case 6:
              if (_this.configuration.beforeSave) {
                beforeSaveFunction = typeof _this.configuration.beforeSave === 'function' ? _this.configuration.beforeSave : new Function(_this.configuration.beforeSave)();
                if (beforeSaveFunction) {
                  try {
                    beforeSave = beforeSaveFunction.call(_this, _this.fields, _this.configuration);
                  } catch (e) {
                    // eslint-disable-next-line no-console
                    console.warn('The beforeSave function has thrown an error', e, _this.configuration.beforeSave);
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
                // Remove reactivity so objects are properly converted
                // into data that can be transmitted
                var data;
                try {
                  data = JSON.parse(JSON.stringify(_this.fields));
                } catch (e) {
                  // Silent error
                }
                data = _.omit(data, ['id', 'package', 'uuid', 'version']);
                if (_this.uuid) {
                  // Save to widget instance settings data
                  return Fliplet.Widget.save(data).then(function () {
                    return Fliplet.Widget.complete();
                  });
                }
                Fliplet.Studio.emit('page-preview-send-event', {
                  type: 'helper-configuration-updated',
                  data: data
                });
                if (!Fliplet.Env.get('development')) {
                  Fliplet.Studio.emit('widget-save-complete');
                } else {
                  // eslint-disable-next-line no-console
                  console.debug(data);
                }
              })["catch"](function (err) {
                // eslint-disable-next-line no-console
                console.warn('Cannot save helper configuration', err);
                Fliplet.Modal.alert({
                  title: 'Error saving configurations',
                  message: Fliplet.parseError(err)
                });
              });
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    Fliplet.Widget.onSaveRequest(function () {
      if (window.currentProvider) {
        window.currentProvider.forwardSaveRequest();
        return;
      }
      return _this2.$refs.observer.validate().then(function (valid) {
        return _this2.onSubmit(valid);
      });
    });
    if (this.configuration.ready) {
      var ready = typeof this.configuration.ready === 'function' ? this.configuration.ready : new Function(this.configuration.ready)();
      if (ready) {
        try {
          ready.call(this, this.fields, this.configuration);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('The ready function is invalid', e, this.configuration.ready);
        }
      }
    }
  },
  created: function created() {
    Object(_libs_lookups__WEBPACK_IMPORTED_MODULE_4__["registerFields"])(this.configuration && this.configuration.fields);
    _libs_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('updateValue', this.onUpdateValue);
  },
  destroyed: function destroyed() {
    _libs_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('updateValue', this.onUpdateValue);
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(9)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1)["default"];
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This bus can be used like a VueComponent
// and it simulates the Node EventEmitter
// bus.$emit bus.$on bus.$off
var bus = new Vue();
bus.callbacks = {};
/* harmony default export */ __webpack_exports__["default"] = (bus);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_3a2f7ffa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_3a2f7ffa__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_3a2f7ffa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("validation-provider", {
    ref: "provider",
    attrs: { rules: _vm.validationRules, vid: _vm.name },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function (ref) {
          var errors = ref.errors
          return [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: typeof _vm.show === "undefined" || _vm.show,
                    expression: "(typeof show === 'undefined' || show)",
                  },
                ],
                class: [
                  "form-group clearfix",
                  {
                    "has-error": errors.length,
                  },
                ],
                attrs: { "data-field": _vm.name, "data-type": _vm.type },
              },
              [
                _vm.type === "hidden"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value",
                        },
                      ],
                      attrs: { type: "hidden" },
                      domProps: { value: _vm.value },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.value = $event.target.value
                        },
                      },
                    })
                  : [
                      _c("div", { staticClass: "col-sm-4 control-label" }, [
                        _vm.label
                          ? _c("label", [_vm._v(_vm._s(_vm.label))])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.description
                          ? _c("p", {
                              staticClass: "help-block",
                              domProps: { innerHTML: _vm._s(_vm.description) },
                            })
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-8" },
                        [
                          _vm.type === "list" && _vm.panelIsVisible
                            ? _c("div", { staticClass: "list-field" }, [
                                _c(
                                  "div",
                                  { staticClass: "panel-group ui-sortable" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "sortable",
                                            rawName: "v-sortable",
                                            value: _vm.sortableOptions,
                                            expression: "sortableOptions",
                                          },
                                        ],
                                      },
                                      _vm._l(
                                        _vm.value,
                                        function (fieldList, index) {
                                          return _c(
                                            "div",
                                            {
                                              key: index,
                                              staticClass:
                                                "panel panel-default",
                                            },
                                            [
                                              _c("validation-observer", {
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var failed = ref.failed
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              class: [
                                                                "panel-wrapper",
                                                                {
                                                                  "has-error":
                                                                    failed,
                                                                },
                                                              ],
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "panel-heading ui-sortable-handle",
                                                                },
                                                                [
                                                                  _c(
                                                                    "h4",
                                                                    {
                                                                      staticClass:
                                                                        "panel-title",
                                                                      attrs: {
                                                                        "data-toggle":
                                                                          "collapse",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "screen-reorder-handle",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fa fa-ellipsis-v",
                                                                            }
                                                                          ),
                                                                          _c(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fa fa-ellipsis-v",
                                                                            }
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "fa fa-chevron-right chevron",
                                                                          on: {
                                                                            click:
                                                                              function (
                                                                                $event
                                                                              ) {
                                                                                $event.preventDefault()
                                                                                return _vm.onToggleAccordion.apply(
                                                                                  null,
                                                                                  arguments
                                                                                )
                                                                              },
                                                                          },
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "panel-title-text",
                                                                          on: {
                                                                            click:
                                                                              function (
                                                                                $event
                                                                              ) {
                                                                                $event.preventDefault()
                                                                                return _vm.onToggleAccordion.apply(
                                                                                  null,
                                                                                  arguments
                                                                                )
                                                                              },
                                                                          },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "panelHeading"
                                                                              )(
                                                                                fieldList,
                                                                                _vm.headingFieldName
                                                                              )
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "a",
                                                                    {
                                                                      attrs: {
                                                                        href: "#",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            $event.preventDefault()
                                                                            return _vm.onDeleteItem(
                                                                              index
                                                                            )
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "icon-delete fa fa-trash",
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "panel-collapse collapse",
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "panel-body",
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "form",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "div",
                                                                            [
                                                                              _vm._l(
                                                                                fieldList,
                                                                                function (
                                                                                  field
                                                                                ) {
                                                                                  return [
                                                                                    _c(
                                                                                      "field",
                                                                                      _vm._b(
                                                                                        {
                                                                                          key: field.name,
                                                                                          ref: "fieldInstances",
                                                                                          refInFor: true,
                                                                                          attrs:
                                                                                            {
                                                                                              "list-name":
                                                                                                _vm.name,
                                                                                              index:
                                                                                                index,
                                                                                            },
                                                                                        },
                                                                                        "field",
                                                                                        field,
                                                                                        false
                                                                                      )
                                                                                    ),
                                                                                  ]
                                                                                }
                                                                              ),
                                                                            ],
                                                                            2
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      },
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                              }),
                                            ],
                                            1
                                          )
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                !_vm.value || !_vm.value.length
                                  ? _c("div", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.emptyListPlaceholderHtml
                                        ),
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("p", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-default",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.addItem.apply(
                                            null,
                                            arguments
                                          )
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.addLabel || "Add"))]
                                  ),
                                  _vm._v(" "),
                                  _vm.value && _vm.value.length
                                    ? _c(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-link expand-items",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function ($event) {
                                              $event.preventDefault()
                                              return _vm.onToggleAccordions.apply(
                                                null,
                                                arguments
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("Expand/Collapse All")]
                                      )
                                    : _vm._e(),
                                ]),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.type === "text"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.value,
                                    expression: "value",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: _vm.placeholder,
                                },
                                domProps: { value: _vm.value },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.value = $event.target.value
                                  },
                                },
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
                                    expression: "value",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: _vm.placeholder,
                                },
                                domProps: { value: _vm.value },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.value = $event.target.value
                                  },
                                },
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
                                    expression: "value",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder: _vm.placeholder,
                                  rows: _vm.rows || 4,
                                },
                                domProps: { value: _vm.value },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.value = $event.target.value
                                  },
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.options && _vm.type === "radio"
                            ? _vm._l(
                                _vm.options,
                                function (option, optionIndex) {
                                  return _c(
                                    "div",
                                    {
                                      key: optionIndex,
                                      staticClass: "radio radio-icon",
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.value,
                                            expression: "value",
                                          },
                                        ],
                                        attrs: {
                                          name: _vm.fieldName,
                                          id: _vm.fieldName + "_" + optionIndex,
                                          type: "radio",
                                        },
                                        domProps: {
                                          value: option.value,
                                          checked: _vm._q(
                                            _vm.value,
                                            option.value
                                          ),
                                        },
                                        on: {
                                          change: function ($event) {
                                            _vm.value = option.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for:
                                              _vm.fieldName + "_" + optionIndex,
                                          },
                                        },
                                        [
                                          _c("span", { staticClass: "check" }, [
                                            _c("i", {
                                              staticClass: "fa fa-circle",
                                            }),
                                          ]),
                                          _vm._v(" "),
                                          option.label
                                            ? _c("span", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    option.label
                                                  ),
                                                },
                                              })
                                            : [_vm._v(_vm._s(option.value))],
                                        ],
                                        2
                                      ),
                                    ]
                                  )
                                }
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.options && _vm.type === "checkbox"
                            ? _vm._l(
                                _vm.options,
                                function (option, optionIndex) {
                                  return _c(
                                    "div",
                                    {
                                      key: optionIndex,
                                      staticClass: "checkbox checkbox-icon",
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.value,
                                            expression: "value",
                                          },
                                        ],
                                        attrs: {
                                          name: _vm.fieldName,
                                          id: _vm.fieldName + "_" + optionIndex,
                                          type: "checkbox",
                                        },
                                        domProps: {
                                          value: option.value,
                                          checked: Array.isArray(_vm.value)
                                            ? _vm._i(_vm.value, option.value) >
                                              -1
                                            : _vm.value,
                                        },
                                        on: {
                                          change: function ($event) {
                                            var $$a = _vm.value,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = option.value,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  (_vm.value = $$a.concat([
                                                    $$v,
                                                  ]))
                                              } else {
                                                $$i > -1 &&
                                                  (_vm.value = $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1)))
                                              }
                                            } else {
                                              _vm.value = $$c
                                            }
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for:
                                              _vm.fieldName + "_" + optionIndex,
                                          },
                                        },
                                        [
                                          _c("span", { staticClass: "check" }, [
                                            _c("i", {
                                              staticClass: "fa fa-check",
                                            }),
                                          ]),
                                          _vm._v(" "),
                                          option.label
                                            ? _c("span", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    option.label
                                                  ),
                                                },
                                              })
                                            : [_vm._v(_vm._s(option.value))],
                                        ],
                                        2
                                      ),
                                    ]
                                  )
                                }
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.options && _vm.type === "dropdown"
                            ? [
                                _c(
                                  "label",
                                  {
                                    staticClass: "select-proxy-display",
                                    attrs: { for: _vm.fieldName },
                                  },
                                  [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.value,
                                            expression: "value",
                                          },
                                        ],
                                        staticClass:
                                          "hidden-select form-control",
                                        attrs: { id: _vm.fieldName },
                                        on: {
                                          change: function ($event) {
                                            var $$selectedVal =
                                              Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function (o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function (o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                            _vm.value = $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          },
                                        },
                                      },
                                      [
                                        typeof _vm.placeholder === "string"
                                          ? _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "",
                                                  disabled:
                                                    _vm.required &&
                                                    typeof _vm.placeholder ===
                                                      "string",
                                                },
                                              },
                                              [_vm._v(_vm._s(_vm.placeholder))]
                                            )
                                          : _vm.placeholder !== false
                                          ? _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [_vm._v("-- Select an option")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm._l(_vm.options, function (option) {
                                          return _c(
                                            "option",
                                            {
                                              key: option.value,
                                              domProps: { value: option.value },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  option.label || option.value
                                                )
                                              ),
                                            ]
                                          )
                                        }),
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass: "icon fa fa-chevron-down",
                                    }),
                                  ]
                                ),
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.type === "toggle"
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "checkbox checkbox-icon" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.value,
                                          expression: "value",
                                        },
                                      ],
                                      attrs: {
                                        name: _vm.fieldName,
                                        id: _vm.fieldName,
                                        type: "checkbox",
                                        value: "true",
                                      },
                                      domProps: {
                                        checked: Array.isArray(_vm.value)
                                          ? _vm._i(_vm.value, "true") > -1
                                          : _vm.value,
                                      },
                                      on: {
                                        change: function ($event) {
                                          var $$a = _vm.value,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = "true",
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.value = $$a.concat([$$v]))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.value = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.value = $$c
                                          }
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: _vm.fieldName } },
                                      [
                                        _c("span", { staticClass: "check" }, [
                                          _c("i", {
                                            staticClass: "fa fa-check",
                                          }),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", {
                                          domProps: {
                                            innerHTML: _vm._s(_vm.toggleLabel),
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.isFullScreenProvider
                            ? [
                                _vm.html
                                  ? _c("div", {
                                      domProps: { innerHTML: _vm._s(_vm.html) },
                                    })
                                  : _vm._e(),
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.type === "provider"
                            ? _c(
                                "div",
                                { staticClass: "provider" },
                                [
                                  _vm.isFullScreenProvider
                                    ? [
                                        _c("div", {
                                          domProps: {
                                            innerHTML: _vm._s(_vm.providerHtml),
                                          },
                                        }),
                                      ]
                                    : _vm._e(),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.warning
                            ? _c("div", { staticClass: "help-block" }, [
                                _c("div", {
                                  staticClass: "alert alert-warning",
                                  domProps: { innerHTML: _vm._s(_vm.warning) },
                                }),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          errors && errors.length
                            ? _c("div", { staticClass: "help-block" }, [
                                _c(
                                  "div",
                                  { staticClass: "alert alert-danger" },
                                  [_vm._v(_vm._s(errors[0]))]
                                ),
                              ])
                            : _vm._e(),
                        ],
                        2
                      ),
                    ],
              ],
              2
            ),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _libs_lookups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);



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
//
//
//
//



VeeValidate.extend('required', {
  validate: function validate(value) {
    var valid;
    if (typeof value === 'undefined' || value === null) {
      valid = false;
    } else if (typeof value === 'number') {
      valid = !isNaN(value);
    } else if (typeof value === 'boolean') {
      valid = !!value;
    } else if (Array.isArray(value) || typeof value === 'string') {
      valid = value.length;
    } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) === 'object') {
      valid = !_.isEmpty(value);
    } else {
      valid = !!value;
    }
    return {
      required: true,
      valid: valid
    };
  },
  computesRequired: true,
  message: 'This field is required'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'field',
  components: {
    validationProvider: VeeValidate.ValidationProvider,
    validationObserver: VeeValidate.ValidationObserver
  },
  data: function data() {
    return {
      eventsBound: false,
      provider: undefined,
      providerPromise: undefined,
      panelIsVisible: true,
      isFullScreenProvider: this.type === 'provider' && this.mode === 'full-screen',
      sortableOptions: {
        group: {
          name: 'fields',
          pull: false
        },
        onStart: this.onStart,
        onEnd: this.onEnd,
        onUpdate: this.onSort,
        handle: '.screen-reorder-handle'
      }
    };
  },
  props: ['type', 'name', 'listName', 'label', 'html', 'value', 'ready', 'change', 'warning', 'placeholder', 'default', 'description', 'required', 'rows', 'options', 'toggleLabel', 'package', 'onEvent', 'fields', 'addLabel', 'index', 'mode', 'show', 'headingFieldName', 'emptyListPlaceholderHtml', 'rules', 'validate', 'data', 'beforeSave'],
  computed: {
    providerHtml: function providerHtml() {
      return Handlebars.compile(this.html)(this);
    },
    fieldName: function fieldName() {
      return this.listName ? "".concat(this.listName, "_").concat(this.index, "_").concat(this.name) : this.name;
    },
    validationRules: function validationRules() {
      // Hidden fields don't need validation
      if (typeof this.show !== 'undefined' && !this.show || this.type === 'hidden') {
        return {};
      }
      var rules = {};

      // Set "required" rule
      if (this.required) {
        rules.required = true;
      }

      // Parse rules property to support all the rules supported by vee-validate using object expression
      // https://vee-validate.logaretm.com/v3/advanced/rules-object-expression.html#defining-rules
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this.rules) === 'object' && !_.isEmpty(this.rules)) {
        _.assign(rules, this.rules);
      }

      // Use custom validate function as custom validation rule
      // https://vee-validate.logaretm.com/v3/guide/basics.html#rule-arguments
      if (this.validate) {
        var name = "validate-".concat(this.fieldName);
        var validate = new Function(this.validate)();
        VeeValidate.extend(name, validate);
        rules[name] = true;
      }
      return rules;
    },
    $parentList: function $parentList() {
      if (this.listName) {
        return this.$parent.$parent.$parent;
      }
    }
  },
  watch: {
    value: function value(newValue, oldValue) {
      // This field is used in a list
      if (this.listName) {
        _.find(this.$parentList.value[this.index], {
          name: this.name
        }).value = newValue;
        this.$parentList.onListValueChanged(this.name);
        this.onValueChange(newValue, oldValue);
        return;
      }
      this.updateParentValue(newValue);

      // Ensure model-less values are manually validated after change
      if (this.type === 'list') {
        this.$refs.provider.validate(newValue);
      }
      this.onValueChange(newValue, oldValue);
    }
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: _libs_lookups__WEBPACK_IMPORTED_MODULE_4__["findAll"],
    findOne: _libs_lookups__WEBPACK_IMPORTED_MODULE_4__["findOne"],
    children: _libs_lookups__WEBPACK_IMPORTED_MODULE_4__["findChildren"],
    setFieldProperty: _libs_lookups__WEBPACK_IMPORTED_MODULE_4__["setFieldProperty"],
    val: function val(newValue) {
      if (typeof newValue !== 'undefined') {
        this.$set(this, 'value', newValue);
        return;
      }
      return this.value;
    },
    updateParentValue: function updateParentValue(value) {
      _libs_bus__WEBPACK_IMPORTED_MODULE_3__["default"].$emit('updateValue', this.name, value);
    },
    onListValueChanged: function onListValueChanged(name) {
      if (name === this.headingFieldName) {
        this.$forceUpdate();
      }
    },
    onValueChange: function onValueChange(newValue, oldValue) {
      if (!this.change) {
        return;
      }
      var change = typeof this.change === 'function' ? this.change : new Function(this.change)();
      change.call(this, newValue, oldValue);
    },
    onSubmit: function onSubmit() {
      var _this = this;
      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var newValue;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.type === 'list' && _this.$refs.fieldInstances)) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return Promise.all(_this.$refs.fieldInstances.map(function (field) {
                return field.onSubmit().then(function (result) {
                  _.find(_this.value[field.index], {
                    name: field.name
                  }).value = result;
                });
              }));
            case 3:
              newValue = _this.value.map(function (fields) {
                var obj = {};
                fields.forEach(function (field) {
                  if (field.show === false) {
                    return;
                  }
                  obj[field.name] = typeof field.value !== 'undefined' ? field.value : field["default"];
                });
                return obj;
              });
              _this.$parent.$parent.fields[_this.name] = newValue;
            case 5:
              if (_this.providerPromise) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", Promise.resolve(_this.show !== false ? _this.value : null));
            case 7:
              _this.provider.forwardSaveRequest();
              return _context.abrupt("return", _this.providerPromise);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    collapseAccordions: function collapseAccordions($context) {
      $context.find(':not(.panel-group) .panel-collapse').collapse('hide');
      $context.find(':not(.panel-group) .panel-heading .fa-chevron-down').addClass('fa-chevron-right').removeClass('fa-chevron-down');
    },
    expandAccordions: function expandAccordions($context) {
      $context.find(':not(.panel-group) .panel-collapse').collapse('show');
      $context.find(':not(.panel-group) .panel-heading .fa-chevron-right').addClass('fa-chevron-down').removeClass('fa-chevron-right');
    },
    allAccordionsCollapsed: function allAccordionsCollapsed($context) {
      return !$context.find(':not(.panel-group) .panel-heading .fa-chevron-down').length;
    },
    toggleAccordionByIndex: function toggleAccordionByIndex(index) {
      var _this$$el$querySelect;
      this.toggleAccordion((_this$$el$querySelect = this.$el.querySelectorAll('.panel-heading')[index]) === null || _this$$el$querySelect === void 0 ? void 0 : _this$$el$querySelect.querySelector('.panel-title-text'));
    },
    scrollToAccordionByIndex: function scrollToAccordionByIndex(index) {
      var $accordion = $(this.$el.querySelectorAll('.panel-heading')[index]);
      if (!$accordion.length) {
        return;
      }
      $('html, body').stop().animate({
        scrollTop: $accordion.offset().top
      }, {
        duration: 200
      });
    },
    toggleAccordion: function toggleAccordion(target) {
      var $target = $(target).parent().find('.chevron');
      var isExpanded = $target.hasClass('fa-chevron-down');
      var $field = $(target).closest('.list-field');

      // Close other items
      this.collapseAccordions($field);
      if (!isExpanded) {
        // Expand this item
        $target.closest('.panel').find('.panel-collapse').collapse('show');
        $target.addClass('fa-chevron-down').removeClass('fa-chevron-right');
        this.scrollToAccordionByIndex($field.find('.panel-heading').index($target.closest('.panel-heading')));
      }
    },
    onToggleAccordion: function onToggleAccordion(event) {
      this.toggleAccordion(event.target);
    },
    onToggleAccordions: function onToggleAccordions(event) {
      var $field = $(event.target).closest('.list-field');
      if (this.allAccordionsCollapsed($field)) {
        this.expandAccordions($field);
      } else {
        this.collapseAccordions($field);
      }
    },
    onDeleteItem: function onDeleteItem(index) {
      this.value.splice(index, 1);
    },
    addItem: function addItem() {
      var _this2 = this;
      if (!Array.isArray(this.value)) {
        this.$set(this, 'value', []);
      }
      var item = _.cloneDeep(this.fields);
      this.value.push(item);
      this.$nextTick(function () {
        _this2.toggleAccordionByIndex(_this2.value.length - 1);
        _this2.scrollToAccordionByIndex(_this2.value.length - 1);
      });
    },
    onStart: function onStart(event) {
      this.collapseAccordions($(event.target));
      this.onSubmit();
    },
    onEnd: function onEnd() {
      Promise.all(this.$refs.fieldInstances.map(function (field) {
        field.initProvider();
      }));
    },
    onSort: function onSort(event) {
      var _this3 = this;
      // Briefly hide the sortable panel to fix this issue
      // https://github.com/sagalbot/vue-sortable/issues/27#issuecomment-350014812
      this.panelIsVisible = false;
      this.value.splice(event.newIndex, 0, this.value.splice(event.oldIndex, 1)[0]);
      this.$nextTick(function () {
        _this3.panelIsVisible = true;
      });
    },
    initProvider: function initProvider() {
      var _this4 = this;
      if (this.type !== 'provider') {
        return;
      }
      if (!this["package"]) {
        throw new Error('Package is required');
      }
      var $provider = $(this.$el).find('.provider');
      if (this.isFullScreenProvider) {
        if (this.eventsBound) {
          return;
        }
        $provider.find('[data-open-provider]').click(function (event) {
          event.preventDefault();
          _this4.openProvider();
          Fliplet.Widget.setSaveButtonLabel('Save');
          window.currentProvider = _this4.provider;
        });
        this.eventsBound = true;
        return;
      }
      this.openProvider($provider);
    },
    openProvider: function openProvider(target) {
      var _this5 = this;
      var value = this.value || {};
      var data = typeof this.data === 'function' ? this.data.bind(this).call(this, value) : this.data;

      // File picker wants a slightly different input from the original output
      if (this["package"] === 'com.fliplet.file-picker' && Array.isArray(value)) {
        value = {
          selectFiles: value
        };
      } else if (this["package"] === 'com.fliplet.data-source-provider') {
        // Apply default values to ensure data sources and security rules are correctly managed
        value = _.assignIn({
          appId: Fliplet.Env.get('appId')
        }, this["default"], value);

        // Data source provider wants a slightly different input from the original output
        if (value.id) {
          value.dataSourceId = value.id;
        }
      }
      var onEvent;
      if (this.onEvent) {
        onEvent = typeof this.onEvent === 'function' ? this.onEvent : new Function(this.onEvent)();
      }
      if (!('data' in this)) {
        data = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) === 'object'
        // Normalize Vue objects into plain JSON objects
        ? JSON.parse(JSON.stringify(value)) : value;
      }
      this.provider = Fliplet.Widget.open(this["package"], {
        selector: target === null || target === void 0 ? void 0 : target[0],
        data: data,
        onEvent: onEvent
      });

      // Set provider property against the field
      this.setFieldProperty(this.name, 'provider', this.provider);
      this.providerPromise = new Promise(function (resolve) {
        _this5.provider.then(function (result) {
          var value;
          if (_.isObject(result.data) && !Array.isArray(result.data)) {
            value = _.omit(result.data, ['package', 'version']);
          } else {
            value = result.data;
          }
          var beforeSave;
          if (typeof _this5.beforeSave === 'function') {
            beforeSave = _this5.beforeSave.bind(_this5).call(_this5, value);
          } else {
            beforeSave = Promise.resolve(value);
          }
          Promise.resolve(beforeSave).then(function (result) {
            _this5.$set(_this5, 'value', result);
            if (_this5.isFullScreenProvider) {
              delete window.currentProvider;
              delete _this5.provider;
              _this5.setFieldProperty(_this5.name, 'provider', null);
              _this5.providerPromise = undefined;
              Fliplet.Widget.resetSaveButtonLabel();
              _this5.initProvider();
            }
            resolve(_this5.show !== false ? _this5.value : undefined);
          });
        });
      });
    },
    normalizeOptions: function normalizeOptions() {
      var _this6 = this;
      if (['radio', 'checkbox', 'dropdown'].indexOf(this.type) > -1) {
        _.forEach(this.options, function (option, i) {
          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(option) !== 'object') {
            _this6.options[i] = {
              value: option
            };
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this7 = this;
    this.initProvider();
    this.normalizeOptions();
    var waitForAccordion = new Promise(function (resolve) {
      if (!_this7.listName) {
        return resolve();
      }

      // Wait for accordion to be initialized
      setTimeout(function () {
        resolve();
      }, 100);
    });

    // Ensure model-less values are synced with the validation provider
    if (this.type === 'list') {
      this.$refs.provider.syncValue(this.value);
    } else if (['dropdown', 'radio'].includes(this.type) && typeof this.value === 'undefined') {
      return waitForAccordion.then(function () {
        _this7.$set(_this7, 'value', _this7["default"] || '');
      });
    } else if (this.type === 'checkbox' && !Array.isArray(this.value)) {
      return waitForAccordion.then(function () {
        _this7.$set(_this7, 'value', _.compact([_this7.value]));
      });
    }
    if (this.ready) {
      var ready = typeof this.ready === 'function' ? this.ready : new Function(this.ready)();
      ready.call(this, this.$el, this.value, this.provider);
    }

    // This field is used in a list
    if (!this.listName) {
      this.updateParentValue(this.value);
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOne", function() { return findOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildren", function() { return findChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFields", function() { return registerFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFieldProperty", function() { return setFieldProperty; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

var data = Fliplet.Widget.getData();
var instances = _.get(data, 'helperInstances') || _.get(data, 'widgetInstances') || [];
var instanceId = _.get(data, 'instanceId', '');
var fieldInstances = [];

/**
 * Returns a boolean indicating whether a nested helper instance matches a filter
 * @param {Helper} instance The helper instance
 * @param {Function} predicate The function invoked per iteration
 * @returns {Boolean} Whether the element matches
 */
function helperMatches(instance, predicate) {
  return instance.id !== instanceId && instance.isChildren && (predicate ? _.find([instance], predicate) : true);
}

/**
 * Prepares a predicate filter before it's sent to the various
 * find functions for helpers. This allows a given predicate shorthand
 * to be converted into the suitable filter.
 * @param {Function|String|Object} predicate A filter
 * @return {Function|Object} The prepared predicate
 */
function prepareFilter(predicate) {
  if (typeof predicate === 'string') {
    return {
      name: predicate
    };
  }
  return predicate;
}

/**
 * Finds all matching child helpers (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */
function findAll(predicate) {
  predicate = prepareFilter(predicate);
  return _.filter(instances, function (instance) {
    return helperMatches(instance, predicate);
  });
}

/**
 * Finds a matching child helper (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */
function findOne(predicate) {
  predicate = prepareFilter(predicate);
  return _.find(instances, function (instance) {
    return helperMatches(instance, predicate);
  });
}

/**
 * Finds matching direct children helpers
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */
function findChildren(predicate) {
  predicate = prepareFilter(predicate);
  return _.filter(instances, function (instance) {
    return instance.id !== instanceId && instance.parentId && instance.parentId === instanceId && (predicate ? _.find([instance], predicate) : true);
  });
}
function registerFields(fields) {
  if (!fields) {
    return;
  }
  fieldInstances = fields;
}
function setFieldProperty(fieldName, prop, value) {
  var field = _.find(fieldInstances, {
    name: fieldName
  });
  if (!field) {
    return;
  }
  field[prop] = value;
}

/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */
Fliplet.Helper.find = function (predicate) {
  // Allow async find for widget instances
  if (typeof data.id === 'number') {
    return Fliplet.API.request({
      url: 'v1/apps/' + Fliplet.Env.get('appId') + '/pages/' + Fliplet.Env.get('pageId') + '/helper-instances'
    }).then(function (response) {
      return _.filter(response.helpers, predicate);
    });
  }
  return _.filter(instances, prepareFilter(predicate));
};

/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helpers
 */
Fliplet.Helper.findOne = function (predicate) {
  // Allow async find for widget instances
  if (typeof data.id === 'number') {
    return Fliplet.Helper.find(predicate).then(function (results) {
      return _.first(results);
    });
  }
  return _.find(instances, prepareFilter(predicate));
};
Fliplet.Helper.field = function (name) {
  var field = _.find(fieldInstances, {
    name: name
  });
  return new _class_field__WEBPACK_IMPORTED_MODULE_0__["Field"](field);
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fieldList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);


function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

var _field = /*#__PURE__*/new WeakMap();
var _Field_brand = /*#__PURE__*/new WeakSet();
var Field = /*#__PURE__*/function () {
  function Field(_field2) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Field);
    _classPrivateMethodInitSpec(this, _Field_brand);
    _classPrivateFieldInitSpec(this, _field, null);
    _assertClassBrand(_Field_brand, this, _setField).call(this, _field2);
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Field, [{
    key: "isShown",
    value: function isShown() {
      return _classPrivateFieldGet(_field, this).show !== false;
    }
  }, {
    key: "toggle",
    value: function toggle(show) {
      if (!_classPrivateFieldGet(_field, this)) {
        return;
      }
      if (typeof _classPrivateFieldGet(_field, this).show === 'undefined') {
        Vue.set(_classPrivateFieldGet(_field, this), 'show', true);
      }
      if (typeof show === 'undefined') {
        _classPrivateFieldGet(_field, this).show = !_classPrivateFieldGet(_field, this).show;
        return;
      }
      _classPrivateFieldGet(_field, this).show = !!show;
    }
  }, {
    key: "get",
    value: function get(index) {
      if (!_classPrivateFieldGet(_field, this)) {
        return;
      }
      if (_classPrivateFieldGet(_field, this).type === 'list' && typeof index !== 'undefined') {
        return new _fieldList__WEBPACK_IMPORTED_MODULE_2__["FieldList"](_classPrivateFieldGet(_field, this).value[index]);
      }
      return _classPrivateFieldGet(_field, this).value;
    }
  }, {
    key: "set",
    value: function set(value) {
      if (!_classPrivateFieldGet(_field, this)) {
        return;
      }
      _classPrivateFieldGet(_field, this).value = value;
      if (_classPrivateFieldGet(_field, this).provider) {
        _classPrivateFieldGet(_field, this).provider.emit('set-data', value);
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (!_classPrivateFieldGet(_field, this)) {
        return;
      }
      if (!['dropdown', 'radio', 'checkbox'].includes(_classPrivateFieldGet(_field, this).type)) {
        throw new Error('Field type must be dropdown, radio or checkbox');
      }
      Vue.set(_classPrivateFieldGet(_field, this), 'options', options);
    }
  }]);
}();
function _setField(field) {
  _classPrivateFieldSet(_field, this, field);
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(20);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1)["default"];
var toPrimitive = __webpack_require__(21);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldList", function() { return FieldList; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);


function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

var _fieldList = /*#__PURE__*/new WeakMap();
var _FieldList_brand = /*#__PURE__*/new WeakSet();
var FieldList = /*#__PURE__*/function () {
  function FieldList(_fieldList2) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FieldList);
    _classPrivateMethodInitSpec(this, _FieldList_brand);
    _classPrivateFieldInitSpec(this, _fieldList, null);
    _assertClassBrand(_FieldList_brand, this, _setFieldList).call(this, _fieldList2);
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FieldList, [{
    key: "field",
    value: function field(name) {
      var field = _.find(_classPrivateFieldGet(_fieldList, this), {
        name: name
      });
      return new _field__WEBPACK_IMPORTED_MODULE_2__["Field"](field);
    }
  }]);
}();
function _setFieldList(fieldList) {
  _classPrivateFieldSet(_fieldList, this, fieldList);
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);