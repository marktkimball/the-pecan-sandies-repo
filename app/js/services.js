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

      var sendNotification = function(data) {
        return $http.put('/notification', data);
      }

      return {
        getStylists : getStylists,
        updateProfile : updateProfile,
        sendNotification : sendNotification
      };

    });
})();
