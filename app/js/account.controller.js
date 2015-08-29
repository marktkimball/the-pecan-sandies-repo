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
            console.log(foundUser[0]);
            $scope.user = foundUser[0];
            $scope.email = foundUser[0].email;
            $scope.name = foundUser[0].name;
            $scope.location = foundUser[0].location;
            $scope.prices = foundUser[0].prices;
            $scope.about = foundUser[0].about;
            $scope.rating = foundUser[0].rating;
            $scope.picture = foundUser[0].picture;
            $scope.skills = foundUser[0].skills;
            $scope.availability = foundUser[0].availability;
            $scope.notifications = foundUser[0].notifications;
            $scope.stylist = foundUser[0].stylist;
            $scope.active = foundUser[0].active;
            $scope.cardInfo = foundUser[0].cardInfo;

            $scope.stylistCheck = function() {
              if ($scope.stylist === true) {
                return true;
              } else {
                return false;
              }
            }

            function averageRating(){
              var totalRating = 0;
              _.each($scope.rating, function(el){
                totalRating += Number(el);
              });
              $scope.finalRating = Math.floor(totalRating / $scope.rating.length);
            };
            averageRating();

            function skillsCheck(){
              if($scope.skills.length === 3){
                $('.skillBlock').children('.circles').addClass('skillActive');
              }
              if($scope.skills[0] === 'hair' || $scope.skills[1] === 'hair'){
                $('.hair').addClass('skillActive');
              }
              if($scope.skills[0] === 'nails' || $scope.skills[1] === 'nails'){
                $('.nails').addClass('skillActive');
              }
              if($scope.skills[0] === 'makeup' || $scope.skills[1] === 'makeup'){
                $('.makeup').addClass('skillActive');
              }
            };
            skillsCheck();

            function daysCheck(){
              if($scope.availability[0] === 'sunday' || $scope.availability[1] === 'sunday' || $scope.availability[2] === 'sunday' || $scope.availability[3] === 'sunday' || $scope.availability[4] === 'sunday' || $scope.availability[5] === 'sunday' || $scope.availability[6] === 'sunday'){
                $('.sunday').addClass('dateActive');
              }
              if($scope.availability[0] === 'monday' || $scope.availability[1] === 'monday' || $scope.availability[2] === 'monday' || $scope.availability[3] === 'monday' || $scope.availability[4] === 'monday' || $scope.availability[5] === 'monday' || $scope.availability[6] === 'monday'){
                $('.monday').addClass('dateActive');
              }
              if($scope.availability[0] === 'tuesday' || $scope.availability[1] === 'tuesday' || $scope.availability[2] === 'tuesday' || $scope.availability[3] === 'tuesday' || $scope.availability[4] === 'tuesday' || $scope.availability[5] === 'tuesday' || $scope.availability[6] === 'tuesday'){
                $('.tuesday').addClass('dateActive');
              }
              if($scope.availability[0] === 'wednesday' || $scope.availability[1] === 'wednesday' || $scope.availability[2] === 'wednesday' || $scope.availability[3] === 'wednesday' || $scope.availability[4] === 'wednesday' || $scope.availability[5] === 'wednesday' || $scope.availability[6] === 'wednesday'){
                $('.wednesday').addClass('dateActive');
              }
              if($scope.availability[0] === 'thursday' || $scope.availability[1] === 'thursday' || $scope.availability[2] === 'thursday' || $scope.availability[3] === 'thursday' || $scope.availability[4] === 'thursday' || $scope.availability[5] === 'thursday' || $scope.availability[6] === 'thursday'){
                $('.thursday').addClass('dateActive');
              }
              if($scope.availability[0] === 'friday' || $scope.availability[1] === 'friday' || $scope.availability[2] === 'friday' || $scope.availability[3] === 'friday' || $scope.availability[4] === 'friday' || $scope.availability[5] === 'friday' || $scope.availability[6] === 'friday'){
                $('.friday').addClass('dateActive');
              }
              if($scope.availability[0] === 'saturday' || $scope.availability[1] === 'saturday' || $scope.availability[2] === 'saturday' || $scope.availability[3] === 'saturday' || $scope.availability[4] === 'saturday' || $scope.availability[5] === 'saturday' || $scope.availability[6] === 'saturday'){
                $('.saturday').addClass('dateActive');
              }
            };
            daysCheck();
          });

        $scope.toggleStylin = function(){
          if($scope.active === true){
            $scope.active = false;
          }else{
            $scope.active = true;
            navigator.geolocation.getCurrentPosition(GetLocation);
            function GetLocation(location) {
              console.log("LOCAL: ", location);
            }
          }
        }

        $scope.modalToggle = function(){
          $('.modalBackground').addClass('behind');
        };

    })
})();
