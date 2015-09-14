(function () {
  'use strict';
  angular
    .module('beaut')
    .controller('MainController', function($scope, $rootScope, $route, $routeParams, $http, $q, $location, $window, MainService, AccountService) {

      var getStylists = function(){
        MainService.getStylists()
          .success(function(data){
            var totalStylists = _.filter(data, function(el){
              if(el.stylist && el.active){
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
            $('.feedCardPicture').each(function(){
              console.log($(this));
              $(this).error(function() {
                $(this).attr('src', 'http://www.placehold.it/250x250');
              });
            })
            console.log($scope.stylists);
          })
          .error(function(error){
            console.log("Error: ", error);
          })
        };

      var getUser = function(){
        AccountService.getUsers().success(function(data){
            var routeId = $routeParams.Id;
            $scope.userId = routeId;
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
            $scope.cardInfo = foundUser[0].cardId;

            function averageRating(){
              var totalRating = 0;
              _.each($scope.rating, function(el){
                totalRating += Number(el);
              });
              $scope.finalRating = Math.floor(totalRating / $scope.rating.length);
            };
            averageRating();
          });
      }

      getStylists();
      getUser();

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
        $rootScope.averageRating = stylistInfo.averageRating;
        $rootScope.id = stylistInfo._id;
        console.log("MODAL CLICK: ", stylistInfo);
      };

      $scope.modalToggle = function(response){
        $('.modalBackground').toggleClass('behind');
        if(response){
          var stylistId = $('.accept').attr('val');
          var userInfo = {}
          userInfo.styleid = stylistId
          userInfo.modelid = $routeParams.Id;
          MainService.sendNotification(userInfo);
        }
      };

    })
})();
