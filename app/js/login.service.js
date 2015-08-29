(function () {
  'use strict';
  angular
    .module('beaut')
    .service('LoginService', function($http, $q) {

      var signup = function(userInfo){
        $http.post('/signup', userInfo)
          .success(function(data){
            console.log("SignUp: ", data);
          })
          .error(function(error){
            console.log("Signup error: ", error);
          })
      };

      return {
        signup : signup
      };

    });
})();
