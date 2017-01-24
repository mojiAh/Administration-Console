'use strict';

angular.module('users')

    .component('addUser', {

        templateUrl:'users/AddUser/add-user.template.html',

        controller:('addUserController' , [ 'usersService', '$state',

            function (usersService, $state) {

            this.newUser= new usersService();
            this.addUser = function () {
                this.newUser.$save(function () {
                    $state.go('users');
                });
            }
        }
    ])
});



