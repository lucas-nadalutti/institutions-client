angular
    .module('Main')    
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/auth/templates/login.html'
            })

        $urlRouterProvider.otherwise('/');
    })
