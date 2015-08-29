(function () {
  'use strict';
  angular
    .module('beaut')
    .service('MainService', function($http, $q) {

      var getModels = function(){
        var data = $http.get('/users');
        _.map(data, function(el){
          if(!el.stylist){
            return el;
          }
        });
      };

      var getStylists = function(){
        var data = $http.get('/users');
        _.map(data, function(el){
          if(el.stylist){
            return el;
          }
        });
      };

      var updateProfile = function(data){
        return $http.put('/users', data);
      };

      return {
        getModels : getModels,
        getStylists : getStylists,
        updateProfile : updateProfile
      };

    });
})();
