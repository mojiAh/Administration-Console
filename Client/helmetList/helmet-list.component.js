'use strict';

angular.module('helmetList').component('helemtList', {
    templateUrl: 'helmetList/helmet-list.template.html',
    controller: ['$http',
        function HelmetListController($http) {
            var self = this;
            self.orderProp = 'id';
            $http.get('/helmetList').then(function (response) {
                self.helmets = response.data;
            });
        }

    ]
});
