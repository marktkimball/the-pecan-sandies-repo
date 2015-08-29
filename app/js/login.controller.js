(function() {
  'use strict';
  angular
    .module('beaut')
    .controller('LoginController', function($scope, $route, LoginService){
      $scope.userInfo = {};

      $scope.login = function(event) {
        event.preventDefault;
        var email = $scope.userInfo.email;
        var password = $scope.userInfo.password;
        console.log("UserInfo: ", email, password);
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
