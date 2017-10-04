angular.module('regRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs.reg', {
                url: '/reg',
                views: {
                    'home-tabs': {
                        templateUrl: 'template/reg.html',
                        controller: 'reg'
                    }
                }
            })
    })