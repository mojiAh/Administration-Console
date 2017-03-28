'use strict';

angular.module('consoleApp')
    .component('navBar', {

        templateUrl: 'modules/navBar/navbar.template.html',

        controller:('navbarController' , [ '$state', 'authentication',

            function ($state, authentication) {
                this.authentication= authentication;
                this.credentials = {
                                    username : "",
                                    email : "",
                                    password : ""
                                    };  
                this.onSubmit = function () {
                  authentication
                    .login(this.credentials)
                    .then(function(){
                        $state.go('home');
                    })
                    .catch(function(err){
                      alert(err);
                    })
                };

                this.homeClicked = function () {
                    if (this.isLoggedIn){
                        $state.go('home');
                    }
                    else{
                        $state.go('welcome');
                    }

                };

                this.logout = function () {
                    authentication.logout();
                    this.isLoggedIn = authentication.isLoggedIn();
                    $state.go('welcome');
                };

                this.isLoggedIn = authentication.isLoggedIn();
                this.currentUser = authentication.currentUser();
                
            }

        ])
    });
