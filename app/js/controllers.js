(function () {
  'use strict';
  angular
    .module('beaut')
    .controller('MainController', function($scope, $route, $http, $q, $location, $window, MainService) {
      //
      // var getUsers = function(){
      //   MainService.getModels()
      //     .success(function(data){
      //       console.log("Models from Service: ", data);
      //     })
      //     .error(function(error){
      //       console.log("Error: ", error);
      //     })
      //     MainService.getStylists()
      //       .success(function(data){
      //         console.log("Stylists from Service: ", data);
      //       })
      //       .error(function(error){
      //         console.log("Error: ", error);
      //       })
      // };
      //
      // getUsers();

      $scope.feedOptionsToggle = function() {
        $('.dropdownCog').addClass('dropdownToggled');
        $('.feedOptionsContentWrapper').slideToggle('fast');
        setTimeout(function(){
          $('.dropdownCog').removeClass('dropdownToggled');
        }, 200)
      }

      $scope.testArray = [1,2,3,4,5,6,7,8,9,10];

    })
})();
