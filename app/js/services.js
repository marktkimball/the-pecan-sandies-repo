(function () {
  'use strict';
  angular
    .module('beaut')
    .service('MainService', function($http, $q) {

      var getStylists = function(){
        return $http.get('/login')
      };

      var updateProfile = function(data){
        return $http.put('/users', data);
      };

      return {
        getStylists : getStylists,
        updateProfile : updateProfile
      };

    });
})();
