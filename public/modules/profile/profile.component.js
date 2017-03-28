'use strict';

angular.module('consoleApp')
    .component('profile', {

        templateUrl: 'modules/profile/profile.template.html',

        controller:('profileController', ['authentication',
                function (authentication) {
                    this.currentUser = authentication.currentUser();
                    console.log(this.currentUser);
                }
        ])
    });
