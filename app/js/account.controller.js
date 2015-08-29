(function() {
  'use strict';
  angular
    .module('beaut')
    .controller('AccountController', function($scope, $route, $routeParams, $location, AccountService){

        AccountService.getUsers().success(function(data){
            var routeId = $routeParams.Id;
            console.log(routeId);
            console.log(data);
            var foundUser = _.where(data, {_id: routeId})
            $scope.user = foundUser[0];
            $scope.email = foundUser[0].email;
            $scope.name = foundUser[0].name;
            $scope.location = foundUser[0].location;
            $scope.prices = foundUser[0].prices;
            console.log('prices', $scope.prices);
            $scope.rating = foundUser[0].rating;
            $scope.picture = foundUser[0].picture;
            $scope.availabilityStart = foundUser[0].availabilityStart;
            $scope.availabilityEnd = foundUser[0].availabilityEnd;
            $scope.notifications = foundUser[0].notifications;
            $scope.stylist = foundUser[0].stylist;
            $scope.active = foundUser[0].active;
            $scope.cardInfo = foundUser[0].cardInfo;
        });

        $scope.modalToggle = function(){
          $('.modalBackground').addClass('behind');
        };

    })
})();
