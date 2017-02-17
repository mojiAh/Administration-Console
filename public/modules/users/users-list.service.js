'use strict';

angular.module('users')

    .factory('usersService', ['$resource',
        function($resource){
        return $resource('api/systemUsers/:id', null, {
            'update': { method:'PUT' , params: {id: '@_id'} }
        });
    }]);
