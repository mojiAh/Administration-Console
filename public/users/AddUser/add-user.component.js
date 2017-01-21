'use strict';

angular.module('addUser')

    .component('addUser', {

        templateUrl:'users/AddUser/add-user.template.html',

        controller: [ '$http', '$window',
        function addUserController ($http, $window) {

            var self = this;

            this.addUser = function () {
                $http.post('/systemUsers', this.newUser)
                $window.location.href = ''; //redirect to home
            }
        }
    ]
});



