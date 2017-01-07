'use strict';

angular.module('shhApp').
    config(['$locationProvider' ,'$routeProvider',

        function config($locationProvider, $routeProvider) {

        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/helmets', {
            template: '<helemt-list></helemt-list>'
        }).
        when('/addHelmet', {
            template: '<add-helmet></add-helmet>'
        }).
        when('/helmets/:helmetId', {
            template: '<helmet-detail></helmet-detail>'
        }).otherwise('/helmets');
    }
]);
