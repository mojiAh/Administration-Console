'use strict';

angular.module('consoleApp')
    .component('navBar', {

        templateUrl: 'modules/navBar/navbar.template.html',

        controller:('navbarController' , ['$state',

            function($stateParams, $state, LoginService) {
                //this.state= $state.current.name;

                this.login = function () {
                    if (LoginService.login(this.username, this.password)) {
                        this.error = '';
                        this.username = '';
                        this.password = '';
                        this.transitionTo('home');
                    } else {
                        this.error = "Incorrect username/password !";
                    }
                    ;
                };
            }
        ])
    });
