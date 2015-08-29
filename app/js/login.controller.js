(function() {
  'use strict';
  angular
    .module('beaut')
    .controller('LoginController', function($scope, $route, $location, LoginService){
      $scope.userInfo = {};

      $scope.login = function(event) {
        event.preventDefault;
        var userInfo = $scope.userInfo;
        console.log("Login user: ", userInfo);
        LoginService.login(userInfo).success(function(data){
          if(data.email === userInfo.email) {
            if (data.stylist === true) {
              $location.path('/account');
            } else {
              $location.path('/feed');
            }
        });
      };

      $scope.signup = function(event){
        event.preventDefault;
        var userInfo = $scope.userInfo;
        console.log("UserInfo: ", userInfo);
        LoginService.signup(userInfo);
      }

    })
})();
