(function() {
  'use strict';
  angular
    .module('beaut')
    .controller('LoginController', function($scope, $route, $routeParams, $location, LoginService){
      $scope.userInfo = {};
      $scope.userDays = [];
      $scope.userSkills = [];

      $scope.login = function(event) {
        event.preventDefault;
        var userInfo = $scope.userInfo;
        userInfo.email = userInfo.email.toLowerCase();
        LoginService.login(userInfo).success(function(data){
          if(data.email === userInfo.email) {
            $location.path('/account/'+ data._id);
          } else {
            alert('Must sign up or wrong info!');
          }
        });
      };

      $scope.signup = function(userInfo, event){
        event.preventDefault;
        var someEmpty = $('input').filter(function(){
            return $.trim(this.value).length === 0;
        }).length > 0;
        if (someEmpty || $('[name=signupType]:checked').length === 0) {
        } else {
          var userInfo = $scope.userInfo;
          LoginService.signup(userInfo)
          .success(function(data){
            var num = data.length - 1
            if (data[num].stylist === true) {
              $scope.userInfo = data[num];
              console.log($scope.userInfo);
              $location.path('/form/' + data[num]._id);
            } else {
              $scope.userInfo = data[num];
              console.log($scope.userInfo);
              $location.path('/modelform/' + data[num]._id);
            }
          })
          .error(function(error){
          });
        }
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
      }

      $scope.submitForm = function(userInfo, event){
        $location.path('/account/' + routeId);
        var routeId = $routeParams.Id;
        $scope.userInfo._id = routeId;
        LoginService.editAccount($scope.userInfo).success(function(data){
          $location.path('/account/' + routeId);
        });
      };
    })
})();
