'use strict';

angular.module('users')

    .factory('usersService', ['$resource',
        function($resource){
        return $resource('/helmets/:id', null, {
            'update': { method:'PUT' }
        });
    }]);
