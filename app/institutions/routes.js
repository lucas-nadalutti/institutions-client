angular
    .module('Institutions')
    .config(function($stateProvider) {
        $stateProvider
            .state('institutions_index', {
                url: '/institutions/',
                templateUrl: 'app/institutions/templates/index.html',
                controller: 'InstitutionsListController'
            })
            .state('institutions_show', {
                url: '/institutions/:id/',
                templateUrl: 'app/institutions/templates/show.html',
                controller: 'InstitutionsShowController'
            })
    })