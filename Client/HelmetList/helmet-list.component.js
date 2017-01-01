'use strict';

angular.module('helmetList').component('helemtList', {
    templateUrl: 'HelmetList/helmet-list.template.html',
    controller: ['$http',
        function HelmetListController($http) {
            var self = this;
            self.orderProp = 'id';

            $http.get('HelmetList/helmets.json').then(function (response) {
                self.helmets = response.data;
            });
        }

    ]
});
