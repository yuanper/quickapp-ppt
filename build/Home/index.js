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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15)
__webpack_require__(16)
__webpack_require__(20)
var $app_template$ = __webpack_require__(24)
var $app_style$ = __webpack_require__(25)
var $app_script$ = __webpack_require__(26)

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(0)
var $app_style$ = __webpack_require__(1)
var $app_script$ = __webpack_require__(2)

$app_define$('@app-component/comp-goods-info', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(17)
var $app_style$ = __webpack_require__(18)
var $app_script$ = __webpack_require__(19)

$app_define$('@app-component/comp-swiper', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "swiper",
      "attr": {
        "autoplay": function () {return this.isAutoPlay},
        "interval": function () {return this.interval},
        "indicator": function () {return this.indicator}
      },
      "classList": [
        "swiper"
      ],
      "style": {
        "indicatorColor": function () {return this.indicatorColor},
        "indicatorSelectedColor": function () {return this.indicatorSelectedColor}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-img"
          ],
          "repeat": function () {return this.swiperImageList},
          "events": {
            "click": function (evt) {this.routerGo(this.$item.goods_detail_url,evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.goods_image}
              },
              "classList": [
                "img"
              ],
              "style": {
                "resizeMode": "cover",
                "width": "100%",
                "height": "100%"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  ".wrapper": {
    "width": "750px",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".swiper": {
    "width": "100%",
    "height": "400px"
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.webview');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['swiperImageList', 'isAutoPlay', 'interval', 'indicator', 'indicatorColor', 'indicatorSelectedColor'],
    routerGo: function routerGo(url) {
        _system2.default.loadUrl({
            url: url
        });
    }
};}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(21)
var $app_style$ = __webpack_require__(22)
var $app_script$ = __webpack_require__(23)

$app_define$('@app-component/comp-title', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "header"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "search"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.title}
          },
          "classList": [
            "title"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "text",
            "placeholder": "请输入关键词"
          },
          "events": {
            "focus": function (evt) {this.routerGo(this.searchUrl,evt)}
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/assets/search_0.png"
          },
          "classList": [
            "search-icon"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  ".header": {
    "display": "flex",
    "flexDirection": "column",
    "width": "100%",
    "height": "100px",
    "justifyContent": "center",
    "backgroundColor": "#f58e08"
  },
  ".search": {
    "width": "100%",
    "height": "100px",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#f58e08"
  },
  ".title": {
    "fontSize": "36px",
    "color": "#ffffff",
    "marginRight": "20px"
  },
  ".search-icon": {
    "width": "50px",
    "height": "50px",
    "marginLeft": "20px"
  },
  ".search input": {
    "width": "500px",
    "height": "60px",
    "alignContent": "center",
    "justifyContent": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#666666",
    "borderRightColor": "#666666",
    "borderBottomColor": "#666666",
    "borderLeftColor": "#666666",
    "borderRadius": "60px",
    "paddingLeft": "20px",
    "paddingRight": "20px",
    "fontSize": "24px",
    "backgroundColor": "#f2f2f2",
    "color": "#666666",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
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
  }
}

/***/ }),
/* 23 */
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
    props: ["title", "searchUrl"],
    routerGo: function routerGo(url) {
        _system4.default.loadUrl({
            url: url
        });
    }
};}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "home"
  ],
  "children": [
    {
      "type": "comp-title",
      "attr": {
        "title": function () {return this.headerTitle},
        "searchUrl": function () {return this.searchUrl}
      }
    },
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.refreshing}
      },
      "events": {
        "refresh": "refresh"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "goods-wrapper"
          ],
          "children": [
            {
              "type": "list",
              "attr": {},
              "classList": [
                "goods-list"
              ],
              "events": {
                "scrollbottom": "renderMoreListItem"
              },
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "banner"
                  },
                  "classList": [
                    "banner"
                  ],
                  "children": [
                    {
                      "type": "comp-swiper",
                      "attr": {
                        "swiperImageList": function () {return this.bannerList},
                        "isAutoPlay": function () {return this.isAutoPlay},
                        "interval": function () {return this.time},
                        "indicator": function () {return this.isIndicator},
                        "indicatorColor": function () {return this.indicatorColor},
                        "indicatorSelectedColor": function () {return this.indicatorSelectedColor}
                      }
                    }
                  ]
                },
                {
                  "type": "list-item",
                  "attr": {
                    "type": "title"
                  },
                  "classList": [
                    "title"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.title}
                      }
                    }
                  ]
                },
                {
                  "type": "list-item",
                  "attr": {
                    "type": "goods",
                    "show": function () {return this.isHasGoods}
                  },
                  "repeat": function () {return this.goodsList},
                  "classList": [
                    "goods"
                  ],
                  "children": [
                    {
                      "type": "comp-goods-info",
                      "attr": {
                        "goodsImage": function () {return this.$item.goods_image},
                        "goodsName": function () {return this.$item.goods_title},
                        "goodsPrice": function () {return this.$item.goods_price},
                        "goodsUrl": function () {return this.$item.goods_detail_url},
                        "goodsCoupon": function () {return this.$item.goods_coupon},
                        "goodsCouponDetails": function () {return this.$item.goods_coupon_details}
                      }
                    }
                  ]
                },
                {
                  "type": "list-item",
                  "attr": {
                    "type": "loadStatus"
                  },
                  "classList": [
                    "load-status"
                  ],
                  "children": [
                    {
                      "type": "progress",
                      "attr": {
                        "type": "circular",
                        "show": function () {return this.hasMoreData}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "show": function () {return this.hasMoreData},
                        "value": "加载更多"
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "show": function () {return !this.hasMoreData},
                        "value": "没有更多了"
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
  ]
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  ".home": {
    "display": "flex",
    "flexDirection": "column",
    "height": "100%"
  },
  ".goods-wrapper": {
    "display": "flex",
    "flexDirection": "column",
    "height": "100%"
  },
  ".goods-list": {
    "flexDirection": "column",
    "columns": 2,
    "height": "100%"
  },
  ".title": {
    "display": "flex",
    "flexDirection": "column",
    "height": "80px",
    "columnSpan": 2,
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".goods": {
    "display": "flex",
    "width": "50%",
    "height": "500px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "20px"
  },
  ".banner": {
    "display": "flex",
    "flexDirection": "column",
    "columnSpan": 2
  },
  ".hot-goods": {
    "display": "flex",
    "flexDirection": "column",
    "columnSpan": 2
  },
  ".load-status": {
    "display": "flex",
    "height": "100px",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "columnSpan": 2
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.router');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.device');

var _system6 = _interopRequireDefault(_system5);

var _system7 = $app_require$('@app-module/system.prompt');

var _system8 = _interopRequireDefault(_system7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memList = [];
exports.default = {
    data: {
        refreshing: false,
        headerTitle: '首页',
        searchUrl: '',
        goodsList: [],
        bannerList: [],
        isAutoPlay: true,
        time: 3000,
        isIndicator: true,
        indicatorColor: 'rgba(0, 0, 0, 0.5)',
        indicatorSelectedColor: '#33b4ff',
        hasMoreData: true,
        size: 10,
        lastIndex: 0,
        isLoadingData: false,
        mi: '',
        mt: '',
        isHasGoods: false,
        title: ''
    },
    onInit: function onInit() {
        this.getDeviceInfo();
        this.getBannerList();
        this.loadAndRender();
        this.getSearchUrl();
    },
    refresh: function refresh(evt) {
        this.lastIndex = 0;
        this.refreshing = true;
        this.isHasGoods = false;
        memList = [];
        this.getBannerList();
        this.loadAndRender();
        this.goodsList = [];
    },
    loadAndRender: function loadAndRender() {
        var doRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        this.isLoadingData = true;
        this.getData(function (resList) {
            this.isLoadingData = false;
            this.refreshing = false;
            if (!resList) {
                console.error('\u6570\u636E\u8BF7\u6C42\u9519\u8BEF');
            } else if (!resList.goodlist) {
                this.hasMoreData = false;
            } else {
                this.lastIndex = resList.lastindex;
                this.title = resList.title;
                memList = memList.concat(resList.goodlist);
                if (doRender) {
                    this._renderList();
                }
            }
        }.bind(this));
    },
    _renderList: function _renderList() {
        if (memList.length > 0) {
            var list = memList.splice(0, this.size);
            this.goodsList = this.goodsList.concat(list);
            if (this.goodsList.length > 0) {
                this.isHasGoods = true;
            }
        }
        if (memList.length <= this.size) {
            this.loadAndRender(false);
        }
    },
    renderMoreListItem: function renderMoreListItem() {
        if (!this.isLoadingData) {
            this._renderList();
        }
    },
    getBannerList: function getBannerList() {
        var self = this;
        var headers = { "type": "rpk", "mi": this.mi, "mt": this.mt };
        _system2.default && _system2.default.fetch({
            url: 'http://120.79.61.208:48126/shop/pdd/getbannerlist',
            header: headers,
            success: function success(result) {
                var res = JSON.parse(result.data);
                self.bannerList = res.bannerlist;
            },
            fail: function fail(result, code) {
                console.log('handing fail,code=' + code);
            }
        });
    },
    getSearchUrl: function getSearchUrl() {
        var _this = this;
        var headers = { "type": "rpk", "mi": this.mi, "mt": this.mt };
        _system2.default && _system2.default.fetch({
            url: 'http://120.79.61.208:48126/shop/pdd/search',
            header: headers,
            success: function success(result) {
                var res = JSON.parse(result.data);
                _this.searchUrl = res.url;
            }
        });
    },
    getData: function getData(cb) {
        var headers = { "type": "rpk", "mi": this.mi, "mt": this.mt, "goodtype": 0, "index": this.lastIndex };
        _system2.default && _system2.default.fetch({
            url: 'http://120.79.61.208:48126/shop/pdd/getgoodslist',
            header: headers,
            success: function success(result) {
                var res = JSON.parse(result.data);
                cb(res);
            },
            fail: function fail(result, code) {
                console.log('handing fail,code=' + code);
                cb([]);
            }
        });
    },
    formatGoodsCoupon: function formatGoodsCoupon(list) {
        list.map(function (item, index) {
            var str = item.goods_coupon_details;
            var i = str.indexOf('满');
            if (i > -1) {
                var arr = str.split('减');
                item.goods_coupon_details = arr[1];
            } else {
                var _arr = str.split('元');
                item.goods_coupon_details = _arr[0] + '元';
            }
        });
    },
    getDeviceInfo: function getDeviceInfo() {
        var self = this;
        _system6.default.getInfo({
            success: function success(res) {
                self.mt = res.brand + ' ' + res.model;
                console.log(self.mt);
            }
        });
        _system6.default.getId({
            type: ['device'],
            success: function success(res) {
                console.log(JSON.stringify(res));
                self.mi = res.device;
            },
            fail: function fail(data, code) {
                console.log('handling fail, code = ' + code);
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
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map