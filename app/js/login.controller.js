(function() {
  'use strict';
  angular
    .module('beaut')
    .controller('LoginController', function($scope, $route, $location, LoginService){
      $scope.userInfo = {};
      $scope.userDays = [];
      $scope.userSkills = [];

      $scope.login = function(event) {
        event.preventDefault;
        var userInfo = $scope.userInfo;
        console.log("Login user: ", userInfo);
        LoginService.login(userInfo).success(function(data){
          if(data.email === userInfo.email) {
            if (data.stylist === true) {
              $location.path('/account/'+ data._id);
            } else {
              $location.path('/feed');
            }
          } else {
            alert('Must sign up or wrong info!');
          }
        });
      };

      $scope.signup = function(event){
        event.preventDefault;
        var userInfo = $scope.userInfo;
        console.log("UserInfo: ", userInfo);
        LoginService.signup(userInfo);
      }

      $scope.selectDay = function(day, event) {
        var clicked = event.target;
        $(clicked).siblings('div').slideToggle();
        if ($(clicked).hasClass('activeDay')) {
          $scope.userDays = _.without($scope.userDays, day);
          $(clicked).removeClass('activeDay');
        } else {
          $scope.userDays.push(day);
          $(clicked).addClass('activeDay');
        }
        console.log($scope.userDays);
      }

      $scope.selectSkills = function(skill, event) {
        var clicked = event.currentTarget;
        if ($(clicked).hasClass('activeSkill')) {
          $(clicked).siblings('div').children('input').attr('disabled', true);
          $(clicked).siblings('div').children('input').attr('placeholder', '');
          $scope.userSkills = _.without($scope.userSkills, skill);
          $(clicked).removeClass('activeSkill');
        } else {
          $(clicked).siblings('div').children('input').attr('disabled', false);
          $(clicked).siblings('div').children('input').attr('placeholder', 'Price');
          $scope.userSkills.push(skill);
          $(clicked).addClass('activeSkill');
        }
        console.log($scope.userSkills);
      }

    })
})();
