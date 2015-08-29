(function () {
  'use strict';
  angular
    .module('beaut')
    .service('LoginService', function($http, $q, $location) {

      var login = function(userInfo){
        return $http.post('/login', userInfo);
      };

      var signup = function(userInfo){
        return $http.post('/signup', userInfo);
      };

      var editAccount = function(userInfo){
        return $http.put('/editaccount', userInfo);
      }

      return {
        signup : signup,
        login : login,
        editAccount : editAccount
      };

    });
})();
