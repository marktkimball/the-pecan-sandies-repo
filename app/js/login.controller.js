(function() {
  'use strict';
  angular
    .module('beaut')
    .controller('LoginController', function($scope, $route, LoginService){
      $scope.userInfo = {};

      $scope.login = function(event) {
        event.preventDefault;
        var userInfo = $scope.userInfo;
        console.log("Login user: ", userInfo);
        LoginService.login(userInfo);
      };

      $scope.signup = function(event){
        event.preventDefault;
        var userInfo = $scope.userInfo;
        console.log("UserInfo: ", userInfo);
        LoginService.signup(userInfo);
      }

    })
})();
