'use strict';

angular.module('helmetList').component('helemtList', {
    templateUrl: 'HelmetList/helmet-list.template.html',
    controller: function HelmetListController() {
        this.helmets = [
            {id: '1', name: 'mojtaba', location: 'Tampere', lastUpdate: '12:00'},
            {id: '2', name: 'mikko', location: 'Tampere', lastUpdate: '12:21'},
            {id: '3', name: 'mirja', location: 'Tampere', lastUpdate: '12:34'}
        ];
    }
});
