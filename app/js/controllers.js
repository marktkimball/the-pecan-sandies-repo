(function () {
  'use strict';
  angular
    .module('beaut')
    .controller('MainController', function($scope, $route, $http, $q, $location, $window, MainService) {

      var getStylists = function(){
        MainService.getStylists()
          .success(function(data){
            var stylists = _.filter(data, function(el){
              if(el.stylist){
                console.log(el);
                return el;
              }
            });
            console.log("STYLIST: ", stylists);
          })
          .error(function(error){
            console.log("Error: ", error);
          })
        };

      getStylists();

    })
})();
