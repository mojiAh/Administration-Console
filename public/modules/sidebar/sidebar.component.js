'use strict';

angular.module('consoleApp')
    .component('sideBar', {

        templateUrl: 'modules/sidebar/sidebar.template.html',

        controller:('sidebarController', [ '$state','authentication',

            function($state, authentication) {
            		this.$state = $state;
            		this.visible = function(){
            			//return $state.current.name === ('register') || $state.current.name === ('welcome');
                        return authentication.isLoggedIn();
            		}
            		
            		this.usersClicked = function () {
                        $state.go('users');
                    }
            		
            }
        ])
    });