'use strict';

angular.module('users')
    .component('usersList', {
        templateUrl: 'users/users-list.template.html',

    controller: ['users', '$window',

        function usersListController(users , $window) {

            var self = this;
            self.orderProp = 'name';

            self.users= users.query();

            self.removeUser = function(user){
                if (confirm('Do you want to delete this user?')) {

                    users.delete({id: user._id});
                    self.users = users.query();
                }
            }
        }
    ]
});

