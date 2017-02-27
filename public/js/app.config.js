'use strict';

angular.module('consoleApp').
    config(function config($stateProvider, $urlRouterProvider) {

    // Specify your Client API domain here:

    //STORMPATH_CONFIG.ENDPOINT_PREFIX = 'https://localhost.apps.stormpath.io';

    $urlRouterProvider.otherwise('/welcome');

    $stateProvider
        .state({
            name: 'welcome',
            url: '/welcome',
            component: 'welcome'
        })
        .state({
            name: 'register',
            url: '/register',
            component: 'register'
        })
        .state({
            name: 'forgetPassword',
            url: '/forgetPassword',
            component: 'forgetPassword'
        })
        .state({
            name: 'users',
            url: '/',
            component: 'usersList'
        })
        .state({
            name: 'addUser',
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

    })
    /*
    .run(function($stormpath) {
        $stormpath.uiRouter({
            loginState: 'welcome',
            defaultPostLoginState: 'users'
        });
    })*/
    ;


