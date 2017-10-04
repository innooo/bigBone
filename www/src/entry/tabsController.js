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