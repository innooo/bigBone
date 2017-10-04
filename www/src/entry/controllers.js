var tabsControllers = require('./tabsController.js');
var firstCtrl = require('./../firstPage/js/controller.js');


angular.module('controllers', [])
    .controller('home', tabsControllers.home)
    .controller('forum', tabsControllers.forum)
    .controller('center', tabsControllers.center)
    .controller('mall', tabsControllers.mall)
    .controller('self', tabsControllers.self)
    .controller('first', firstCtrl)