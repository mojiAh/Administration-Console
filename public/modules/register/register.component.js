'use strict';

angular.module('consoleApp')
    .component('register', {

        templateUrl: 'modules/register/register.template.html',

        controller:('registerController' ,['$state', 'authentication',

            function ($state, authentication) {

                this.credentials = {
                                name : "",
                                username: "",
                                email : "",
                                password : "",
                                confirmPassword:""
                                    };   

                this.onSubmit = function () {
                  if (this.credentials.password !== this.credentials.confirmPassword){
                        alert("password and confirmPassword are not same!");
                  } 
                  else{ 
                  authentication
                    .register(this.credentials)
                    .then(function(){
                      $state.go('users');
                    },
                    function(err){
                      alert(err);
                    })
                    }
                }
            }

        ])
    });
