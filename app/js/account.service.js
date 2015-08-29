(function () {
  'use strict';
  angular
    .module('beaut')
    .service('AccountService', function($http, $q, $location) {

      var getUsers = function(userInfo){
        return $http.get('/login', userInfo);
      };

      var status = function(userInfo) {
        console.log(userInfo);
        return $http.put('/status', userInfo);
      }

      return {
        getUsers : getUsers,
        status : status
      };

    });
})();
