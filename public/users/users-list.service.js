'use strict';

angular.module('users')

    .factory('usersService', ['$resource',
        function($resource){
        return $resource('/systemUsers/:id', null, {
            'update': { method:'PUT' , params: {id: '@_id'} }
        });
    }]);
