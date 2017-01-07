'use strict';

angular.module('helmetDetail').
    component('helmetDetail', {
        templateUrl:'helmet-detail/helmet-detail.template.html',
        controller: [ '$routeParams' ,
            function helmetDetailController ($http, $routeParams) {
            this.helmetId= $routeParams.helmetId;
            }
        ]
    });