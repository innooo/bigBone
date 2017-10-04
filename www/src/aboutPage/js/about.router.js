angular.module('aboutRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs.about', {
                url: '/about',
                views: {
                    'about-tabs': {
                        templateUrl: 'template/about.html',
                        controller: 'about'
                    }
                }
            })
    })