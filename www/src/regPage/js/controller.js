module.exports = function homeCtrl($scope, $http) {
    $http({
        url: '',
        params: { username: $scope.user }
    }).success(function(data) {

    });
}