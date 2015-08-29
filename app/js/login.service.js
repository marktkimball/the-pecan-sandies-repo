(function () {
  'use strict';
  angular
    .module('beaut')
    .service('LoginService', function($http, $q) {

      var login = function(userInfo){
        $http.post('/login', userInfo)
          .success(function(){
            // console.log("Login: ", userInfo);
          })
          .error(function(error){
            console.log("Login error: ", error);
          })
      };

      var signup = function(userInfo){
        $http.post('/signup', userInfo)
          .success(function(){
            // console.log("SignUp: ", userInfo);
          })
          .error(function(error){
            console.log("Signup error: ", error);
          })
      };

      return {
        signup : signup,
        login : login
      };

    });
})();
