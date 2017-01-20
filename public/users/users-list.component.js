'use strict';

angular.module('users')
    .component('usersList', {
        templateUrl: 'users/users-list.template.html',

    controller: ['usersService',

        function usersListController(usersService) {
            var self = this;
            self.orderProp = 'name';
            self.users= usersService.query();
            self.remove = function(index){
                var users = self.users[index];
                usersService.remove({id: helmet._id}, function(){
                    self.users.splice(index, 1);
                });
            }
        }
    ]
});

