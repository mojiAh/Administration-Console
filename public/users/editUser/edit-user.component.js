'use strict';

angular.module('users')
    .component('editUser', {

        templateUrl:'users/editUser/edit-user.template.html',

        controller:('editUserController', [ 'usersService', '$state', '$stateParams',

            function (usersService, $state,$stateParams) {

                this.updateUser=function(){
                    this.user.$update(function(){
                        $state.go('users');
                    });
                };

                this.loadUser=function(){
                    this.user= usersService.get({id: $stateParams.id });
                };

                this.loadUser();
            }
        ])
    });
