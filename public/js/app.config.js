'use strict';
angular.module('consoleApp')
    .config(function config($stateProvider, $urlRouterProvider) {

    // Specify your Client API domain here:

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
            name: 'profile',
            url: '/profile',
            component: 'profile'
        })
        .state({
            name: 'forgetPassword',
            url: '/forgetPassword',
            component: 'forgetPassword'
        })
        .state({
            name: 'home',
            url: '/home',
            component: 'home'
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
    .run(function ($rootScope, $state, authentication) {
        $rootScope.$on("$viewContentLoading", function(event, toState, toParams, fromState, fromParams){
            if (toState.authenticate && !authentication.isLoggedIn()){
                // User isn’t authenticated but authentication is needed
                $state.go('welcome');
                event.preventDefault();
            }

            if(authentication.isLoggedIn() && $state.current.name=== 'welcome'){
                $state.go('home');
            }
        });
    });
    


