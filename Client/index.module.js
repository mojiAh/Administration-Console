angular.module('myApp',[])
    .controller ('helemtController', function HelmetController ($scope) {
        $scope.helmets= [
        {id: '1' , name : 'mojtaba' , location: 'Tampere' , lastUpdate:'12:00'},
        {id: '2' , name : 'mikko' , location: 'Tampere' , lastUpdate: '12:21'},
        {id: '3' , name : 'mirja' , location: 'Tampere' , lastUpdate: '12:34'}
        ];
});
