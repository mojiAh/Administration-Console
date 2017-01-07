'use strict';

angular.module('addHelmet').component('addHelmet', {
    templateUrl:'add-helmet/add-helmet.template.html',
    controller: [ '$http',
        function addHelmetController ($http) {
            console.log('Im here');
            var self = this;

            this.addHelmet = function () {
                console.log(this.newHelmet);
                $http.post('/helmets', this.newHelmet)


            }
        }
    ]
});



