'use strict';

angular.module('consoleApp')

    .factory('registerService', ['$resource',
        function(){
            return $resource('api/users/register', null, {
                'update': { method:'PUT' , params: {id: '@_id'} }
            });
        }]);
