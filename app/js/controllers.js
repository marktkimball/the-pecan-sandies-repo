(function () {
  'use strict';
  angular
    .module('beaut')
    .controller('MainController', function($scope, $route, $http, $q, $location, $window, MainService) {

      var getStylists = function(){
        MainService.getStylists()
          .success(function(data){
            $scope.stylists = _.filter(data, function(el){
              if(el.stylist){
                return el;
              }
            });
          })
          .error(function(error){
            console.log("Error: ", error);
          })
        };

      getStylists();

      $scope.feedOptionsToggle = function() {
        $('.dropdownCog').addClass('dropdownToggled');
        $('.feedOptionsContentWrapper').slideToggle('fast');
        setTimeout(function(){
          $('.dropdownCog').removeClass('dropdownToggled');
        }, 200)
      }
    })
})();
