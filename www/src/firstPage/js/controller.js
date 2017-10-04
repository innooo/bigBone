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