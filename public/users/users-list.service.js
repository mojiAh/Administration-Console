'use strict';

angular.module('users')

    .factory('users', ['$resource',
        function($resource){
        return $resource('/systemUsers/:id', null, {
            'update': { method:'PUT' },
            'delete': { method: 'DELETE', params: {id: '@_id'} }
        });
    }]);
