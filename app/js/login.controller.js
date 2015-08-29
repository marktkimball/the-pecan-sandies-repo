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
        console.log("Login user: ", userInfo);
        userInfo.email = userInfo.email.toLowerCase();
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

      $scope.signup = function(userInfo, event){
        event.preventDefault;
        console.log(event.target);
        var someEmpty = $('input').filter(function(){
            return $.trim(this.value).length === 0;
        }).length > 0;
        console.log(userInfo);
        console.log($scope.userInfo);
        if (someEmpty || $('[name=signupType]:checked').length === 0) {

        } else {
          var userInfo = $scope.userInfo;
          LoginService.signup(userInfo)
          .success(function(data){
            // console.log("SignUp: ", userInfo);
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
            // console.log("Signup error: ", error);
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

      $scope.submitForm = function(userinfo, event){
        var someEmpty = $('input[type=text]').filter(function(){
            return $.trim(this.value).length === 0;
        }).length > 0;

        if (someEmpty || $scope.userDays.length === 0 || $scope.userSkills.length === 0) {} else {
          var noTimes = [];

          var checkTimes = function() {
            _.each($scope.userDays, function(el, idx, list) {
              var startDate = $('.' + $scope.userDays[idx]).siblings('div').children('input:first-of-type');
              var endDate = $('.' + $scope.userDays[idx]).siblings('div').children('input:first-of-type');
              if (startDate[0].value === '' || endDate[0].value === '') {
                console.log('No time!');
                noTimes.push($scope.userDays[idx]);
              } else {
                noTimes = _.without(noTimes, $scope.userDays[idx]);
              }
            })
          }
          checkTimes();

          if (noTimes.length > 0) {} else {
            var routeId = $routeParams.Id;
            $scope.userInfo._id = routeId;
            $scope.userInfo.skills = $scope.userSkills;
            $scope.userInfo.availability = $scope.userDays;
            console.log($scope.userInfo);
            LoginService.editAccount($scope.userInfo).success(function(data){
               $location.path('/account/' + data._id);
            });
          }
        }
      }

    })
})();
