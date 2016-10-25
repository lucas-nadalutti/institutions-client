angular
    .module('Main', [])
    .controller('MainController', function($scope) {
        $scope.institutions = [
            {name: 'Instituição 1', address: 'Rua 1'},
            {name: 'Instituição 2', address: 'Rua 2'},
            {name: 'Instituição 3', address: 'Rua 3'},
            {name: 'Instituição 4', address: 'Rua 4'},
            {name: 'Instituição 5', address: 'Rua 5'}
        ]
    })