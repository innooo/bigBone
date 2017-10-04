angular.module('homeRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs.home', {
                url: '/home',
                views: {
                    'home-tabs': {
                        templateUrl: 'template/home.html',
                        controller: 'home'
                    }
                }
            })
    })