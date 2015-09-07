(function() {
  'use strict';
  angular
    .module('beaut')
    .controller('AccountController', function($scope, $route, $routeParams, $rootScope, $location, AccountService, moment){

      AccountService.getSelf().success(function(data){
        console.log("Get Self: ", data);
        $scope.user = data;
        $scope.email = data.email;
        $scope.name = data.name;
        $scope.location = data.location;
        $scope.hairPrice = data.hairPrice;
        $scope.nailsPrice = data.nailsPrice;
        $scope.makeupPrice = data.makeupPrice;
        $scope.about = data.about;
        $scope.rating = data.rating;
        $scope.picture = data.picture;
        $scope.skills = data.skills;
        $scope.sundayTimes = data.sundayTimes;
        $scope.sundayTimes = data.sundayTimes;
        $scope.mondayTimes = data.mondayTimes;
        $scope.mondayTimes = data.mondayTimes;
        $scope.tuesdayTimes = data.tuesdayTimes;
        $scope.wednesdayTimes = data.wednesdayTimes;
        $scope.thursdayTimes = data.thursdayTimes;
        $scope.fridayTimes = data.fridayTimes;
        $scope.saturdayTimes = data.saturdayTimes;
        $scope.notifications = data.notifications;
        $scope.stylist = data.stylist;
        $scope.active = data.active;
        $scope.cardInfo = data.cardInfo;
        $scope.userId = data._id;

        $scope.activeCheck = function() {
          if ($scope.active === true && $scope.stylist === true) {
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
          if($scope.hairPrice > 0){
            $('.hair').addClass('skillActive');
          }
          if($scope.nailsPrice > 0){
            $('.nails').addClass('skillActive');
          }
          if($scope.makeupPrice > 0){
            $('.makeup').addClass('skillActive');
          }
        };
        skillsCheck();

        function daysCheck(){
          if($scope.sundayTimes){
            $('.sunday').addClass('dateActive');
          }
          if($scope.mondayTimes){
            $('.monday').addClass('dateActive');
          }
          if($scope.tuesdayTimes){
            $('.tuesday').addClass('dateActive');
          }
          if($scope.wednesdayTimes){
            $('.wednesday').addClass('dateActive');
          }
          if($scope.thursdayTimes){
            $('.thursday').addClass('dateActive');
          }
          if($scope.fridayTimes){
            $('.friday').addClass('dateActive');
          }
          if($scope.saturdayTimes){
            $('.saturday').addClass('dateActive');
          }
        };
        daysCheck();

      })


      $('#userProfileImage').error(function() {
        $('#userProfileImage').attr('src', 'http://www.placehold.it/250x250');
      });

      $('.profilePicture img').error(function() {
        $('.profilePicture img').attr('src', 'http://www.placehold.it/250x250');
      });

        $scope.toggleStylin = function(){
          event.preventDefault;
          if($scope.active === true){
            navigator.geolocation.getCurrentPosition(GetLocation);
            function GetLocation(location) {
              $scope.active = false;
              var userInfo = {};
              userInfo.userLocation = {};
              userInfo.userLocation.latitude = location.coords.latitude;
              userInfo.userLocation.longitude = location.coords.longitude;
              userInfo._id = $routeParams.Id;
              AccountService.status(userInfo);
            }
          } else {
            $scope.active = true;
            navigator.geolocation.getCurrentPosition(GetLocation);
            function GetLocation(location) {
              var userInfo = {};
              userInfo.userLocation = {};
              userInfo.userLocation.latitude = location.coords.latitude;
              userInfo.userLocation.longitude = location.coords.longitude;
              userInfo._id = $routeParams.Id;
              console.log("LOCAL: ", userInfo);
              AccountService.status(userInfo);
            }
          }
        }

        $scope.modalToggle = function(){
          $('.modalBackground').addClass('behind');
        };

    })
})();
