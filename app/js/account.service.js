(function () {
  'use strict';
  angular
    .module('beaut')
    .service('AccountService', function($http, $q, $location) {

      var getUsers = function(userInfo){
        return $http.get('/login', userInfo);
      };

      return {
        getUsers : getUsers
      };

    });
})();
