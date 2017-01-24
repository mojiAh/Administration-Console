'use strict';

angular.module('consoleApp').
    config(function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state({
            name: 'users',
            url: '/',
            component: 'usersList'
        })
        .state({
            name: 'newUser',
            url: '/users/new',
            component: 'addUser'
        })
        .state({
            name: 'editUser',
            url: '/users/:id/edit',
            component: 'editUser'
        })
        .state({
            name: 'viewUser',
            url: '/users/:id/view',
            component: 'viewUser'
        });

});
