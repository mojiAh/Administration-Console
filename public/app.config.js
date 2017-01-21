'use strict';

angular.module('consoleApp').
    config(function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    // helmet views
        .state({
            name: 'users',
            url: '/',
            component: 'usersList'

        })
        .state({
            name: 'newUser',
            url: '/users/new',
            component: 'addUser'
        });

});
