(function(){
      
  var createPageHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "goods-info"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return this.goodsImage}
      },
      "classList": [
        "goods-image"
      ],
      "style": {
        "resizeMode": "stretch"
      },
      "events": {
        "click": function (evt) {this.routeGo(this.goodsUrl,evt)}
      }
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.goodsName}
      },
      "classList": [
        "goods-name"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "goods-bottom"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '¥' + (this.goodsPrice)}
          },
          "classList": [
            "goods-price"
          ]
        },
        {
          "type": "image",
          "attr": {
            "src": "/assets/car.png"
          },
          "classList": [
            "car-image"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  ".goods-info": {
    "width": "90%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd",
    "marginBottom": "20px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".goods-image": {
    "width": "100%",
    "height": "72%"
  },
  ".goods-name": {
    "lines": 2,
    "height": "15%",
    "fontSize": "24px",
    "textOverflow": "ellipsis",
    "textAlign": "center",
    "width": "90%"
  },
  ".goods-bottom": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "width": "90%",
    "justifyContent": "space-between",
    "height": "13%"
  },
  ".goods-price": {
    "color": "#ff1234"
  },
  ".car-image": {
    "width": "50px",
    "height": "50px"
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.webview');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['goodsImage', 'goodsName', 'goodsPrice', 'goodsUrl', 'goodsCoupon', 'goodsCouponDetails'],
    routeGo: function routeGo(url) {
        _system2.default.push({
            uri: 'pinduoduo://com.xunmeng.pinduoduo/' + url
        });
    }
};}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)
var $app_template$ = __webpack_require__(29)
var $app_style$ = __webpack_require__(30)
var $app_script$ = __webpack_require__(31)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(0)
var $app_style$ = __webpack_require__(1)
var $app_script$ = __webpack_require__(2)

$app_define$('@app-component/comp-goods', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "search"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "header"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/assets/back.png"
          },
          "style": {
            "width": "50px",
            "marginLeft": "50px",
            "marginRight": "100px"
          },
          "events": {
            "click": "back"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "text",
            "placeholder": "请输入关键词",
            "enterkeytype": "search"
          },
          "events": {
            "change": function (evt) {this.search(evt)}
          }
        }
      ]
    },
    {
      "type": "list",
      "attr": {},
      "style": {
        "flexDirection": "column",
        "columns": 2
      },
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.goodsList},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "goods"
              },
              "classList": [
                "list-item"
              ],
              "children": [
                {
                  "type": "comp-goods",
                  "attr": {
                    "goodsImage": function () {return this.$item.goods_image},
                    "goodsName": function () {return this.$item.goods_title},
                    "goodsPrice": function () {return this.$item.goods_price},
                    "goodsUrl": function () {return this.$item.goods_detail_url}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
  ".search": {
    "display": "flex",
    "flexDirection": "column",
    "width": "750px",
    "height": "100%"
  },
  ".header": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "width": "100%",
    "height": "150px",
    "backgroundColor": "#f2f2f2"
  },
  ".header input": {
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "input"
        }
      ]
    }
  },
  ".list-item": {
    "display": "flex",
    "flexDirection": "column",
    "width": "50%",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "500px",
    "marginTop": "20px"
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.fetch');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    private: {
        goodsList: []
    },
    back: function back() {
        _system2.default.back();
    },
    search: function search(evt) {
        var self = this;
        var headers = { "type": "rpk", "mi": "864839032741684", "mt": "GIONEE S10C" };
        _system4.default && _system4.default.fetch({
            url: 'http://39.108.219.191:36912/shop/search',
            header: headers,
            success: function success(result) {
                var res = result.data;
                self.goodsList = JSON.parse(res).searchList;
                console.log(JSON.stringify(self.goodsList));
            },
            fail: function fail(result, code) {
                console.log('handing fail,code=' + code);
            }
        });
    }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
})) {
    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = _typeof(moduleOwn[acc]);
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
        }
    });
}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map