describe ('helemtController' , function() {

    beforeEach (module('myApp'));

   it ('should make a list of helmets', inject (function($controller){
       var scope = {};
       var ctrl = $controller('helemtController', {$scope: scope});

       expect(scope.helmets.length).toBe(3);

    }));

});
