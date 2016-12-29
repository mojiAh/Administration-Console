'use strict';

describe('helmetList', function() {

    // Load the module that contains the `helmetList` component before each test
    beforeEach(module('helmetList'));

    // Test the controller
    describe('HelmetListController', function() {

        it('should create a `helmets` model with 3 Helmet', inject(function($componentController) {
            var ctrl = $componentController('helmetList');

            expect(ctrl.helmets.length).toBe(3);
        }));

    });

});
