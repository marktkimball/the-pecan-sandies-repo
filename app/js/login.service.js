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
            $location.path('/form');
          })
          .error(function(error){
            // console.log("Signup error: ", error);
          })
      };

      var editAccount = function(userInfo){
        $http.put('/editaccount', userInfo);
      }

      return {
        signup : signup,
        login : login,
        editAccount : editAccount
      };

    });
})();
