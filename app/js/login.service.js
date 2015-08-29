(function () {
  'use strict';
  angular
    .module('beaut')
    .service('LoginService', function($http, $q, $location) {

      var login = function(userInfo){
        return $http.post('/login', userInfo);
      };

      var signup = function(userInfo){
        $http.post('/signup', userInfo)
          .success(function(){
            // console.log("SignUp: ", userInfo);
            $location.path('/login');
          })
          .error(function(error){
            // console.log("Signup error: ", error);
          })
      };

      return {
        signup : signup,
        login : login
      };

    });
})();
