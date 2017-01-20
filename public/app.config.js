'use strict';

angular.module('consoleApp').
    config(function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    // helmet views
        .state({
            name: 'home',
            url: '/',
            component: 'usersList'

        });

});
