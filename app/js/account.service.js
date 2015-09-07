(function () {
  'use strict';
  angular
    .module('beaut')
    .service('AccountService', function($http, $q, $location) {

      var getSelf = function(){
        return $http.get('/me');
      }

      var getUsers = function(userInfo){
        return $http.get('/login', userInfo);
      };

      var status = function(userInfo) {
        console.log(userInfo);
        return $http.put('/status', userInfo);
      }

      return {
        getSelf : getSelf,
        getUsers : getUsers,
        status : status
      };

    });
})();
