'use strict';

angular.module('users')
    .component('usersList', {

        templateUrl: 'modules/users/users-list.template.html',

        controller:('usersListController' , ['usersService',

            function (usersService) {

                var self = this;
                self.orderProp = 'name';

                self.users= usersService.query();

                self.removeUser = function(userID){
                    if (confirm('Do you want to delete this user?')) {

                        usersService.remove({id: userID});
                        self.users = usersService.query();
                    }
                }
            }
        ])
    });

