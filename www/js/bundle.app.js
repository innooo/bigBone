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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//引入样式
__webpack_require__(1);

__webpack_require__(4);
__webpack_require__(7);
angular.module('starter', ['ionic', 'route', 'controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(6);



angular.module('route', ['tabsRouter', 'firstRouter']);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

angular.module('tabsRouter', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('tabs', {
            url: '/tabs',
            templateUrl: 'template/tabs.html'
        }).state('tabs.home', {
            url: '/home',
            views: {
                'home-tabs': {
                    templateUrl: 'template/home.html',
                    controller: 'home'
                }
            }
        }).state('tabs.forum', {
            url: '/forum',
            views: {
                'forum-tabs': {
                    templateUrl: 'template/forum.html',
                    controller: 'forum'
                }
            }
        }).state('tabs.center', {
            url: '/center',
            views: {
                'center-tabs': {
                    templateUrl: 'template/center.html',
                    controller: 'center'
                }
            }
        }).state('tabs.mall', {
            url: '/mall',
            views: {
                'mall-tabs': {
                    templateUrl: 'template/mall.html',
                    controller: 'mall'
                }
            }
        }).state('tabs.self', {
            url: '/self',
            views: {
                'self-tabs': {
                    templateUrl: 'template/self.html',
                    controller: 'self'
                }
            }
        })
        $urlRouterProvider.otherwise('tabs/home');
    }])

/***/ }),
/* 6 */
/***/ (function(module, exports) {

angular.module('firstRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs.first', {
                url: '/first',
                views: {
                    'home-tabs': {
                        templateUrl: 'template/first.html',
                        controller: 'first'
                    }
                }
            })
    })

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var tabsControllers = __webpack_require__(8);
var firstCtrl = __webpack_require__(9);


angular.module('controllers', [])
    .controller('home', tabsControllers.home)
    .controller('forum', tabsControllers.forum)
    .controller('center', tabsControllers.center)
    .controller('mall', tabsControllers.mall)
    .controller('self', tabsControllers.self)
    .controller('first', firstCtrl)

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var tabsControllers = {
    home: function($scope) {
        $scope.str = 'home';
    },
    forum: function($scope) {
        $scope.str = 'forum';
    },
    center: function($scope, $ionicSlideBoxDelegate) {


        $scope.str = 'center';
        $scope.tabNames = ['java', 'html5', 'android'];
        $scope.slectIndex = 0;
        $scope.activeSlide = function(index) { //点击时候触发
            $scope.slectIndex = index;
            $ionicSlideBoxDelegate.slide(index);
        };
        $scope.slideChanged = function(index) { //滑动时候触发
            $scope.slectIndex = index;
        };
        $scope.pages = ["template/tab01.html", "template/tab02.html", "template/tab03.html"];

    },
    mall: function($scope) {
        $scope.str = 'mall';
    },
    self: function($scope) {
        $scope.str = 'self';
    },
}
module.exports = tabsControllers;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// angular.module('aboutCtrl', [])
//     .controller('about', ['$scope', function($s) {
// $s.str = '这是关于页面';
//     }]);

module.exports = function($scope, $http) {




    $scope.str = 'firstPage';
    $scope.str2 = 'second';
    $http({
        url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
        params: { callback: '' }
    }).success(function(data) {
        console.log(eval(data));
    });

}

/***/ })
/******/ ]);