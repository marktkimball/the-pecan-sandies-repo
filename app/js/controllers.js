(function () {
  'use strict';
  angular
    .module('beaut')
    .controller('MainController', function($scope, $rootScope, $route, $http, $q, $location, $window, MainService) {

      $scope.testArray = [1,2,3,4,5,6,7,8,9,10];

      var getStylists = function(){
        MainService.getStylists()
          .success(function(data){
            var totalStylists = _.filter(data, function(el){
              if(el.stylist){
                return el;
              }
            });
            $scope.stylists = _.each(totalStylists, function(el){
              if(el.rating.length > 1){
                var totalRating = el.rating.reduce();
                $scope.averageRating = totalRating / el.rating.length;
              }else{
                el.averageRating = 0;
              }
            })
            console.log($scope.stylists);
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

      $scope.createModal = function(stylistInfo){
        $('.modalBackground').toggleClass('behind');
        $rootScope.modalName = stylistInfo.name;
        console.log("MODAL NAME: ", $rootScope.modalName);
        console.log("MODAL CLICK: ", stylistInfo);
      };

      $scope.modalToggle = function(response){
        $('.modalBackground').toggleClass('behind');
      };

    })
})();
