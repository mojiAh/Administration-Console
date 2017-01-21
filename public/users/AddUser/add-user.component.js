'use strict';

angular.module('addUser')

    .component('addUser', {

        templateUrl:'users/AddUser/add-user.template.html',

        controller: [ '$http',
        function addUserController ($http) {

            var self = this;

            this.addUser = function () {

                $http.post('/users', this.newUser)

            }
        }
    ]
});



