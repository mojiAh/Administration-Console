'use strict';

angular.module('consoleApp')
    .component('register', {

        templateUrl: 'modules/register/register.template.html',

        controller:('registerController' ,[ '$http', '$state',

            function ($http, $state) {
                var newUser;
                var req = {
                    method: 'POST',
                    url: 'api/users/register',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: { username: newUser.username ,
                            email: newUser.eamil ,
                            name: newUser.name ,
                            password : newUser.password }
                };
                    this.addUser = function () {
                    console.log(req);
                    $http(req).then(function(){
                        $state.go('users');
                    }, function(){

                    });


                }
            }
        ])
    });
