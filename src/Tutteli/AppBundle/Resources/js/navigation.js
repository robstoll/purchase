/* 
 * This file is part of the project tutteli-purchase published under the Apache License 2.0
 * For the full copyright and license information, please have a look at LICENSE in the
 * root folder or visit https://github.com/robstoll/purchase
 */
(function(){
'use strict';

angular.module('tutteli.navigation', [])
    .controller('tutteli.NavigationController', NavigationController);

NavigationController.$inject = ['tutteli.auth.AuthService', 'tutteli.auth.USER_ROLES', 'tutteli.auth.Session'];
function NavigationController(AuthService, ROLES, Session) {
    this.isAuthenticated = AuthService.isAuthenticated;
    this.isAdmin = function() {
        return AuthService.isAuthorised(ROLES.admin);
    };
    
    this.username = function() {
        if (Session.user) {
            return Session.user.username;
        }
        return 'anon';
    };
    
    this.closeNavi = function() {
        angular.element(document.getElementById('navbar')).removeClass('in');
    };
}

})();