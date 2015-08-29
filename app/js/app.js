(function () {
  'use strict';

  angular
    .module('beaut', [
      'ngRoute',
      'ngAnimate',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          redirectTo: '/login'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginController',
        })
        .when('/signup', {
          templateUrl: 'views/signup.html',
          controller: 'LoginController',
        })
        .when('/404', {
          templateUrl: 'views/404.html',
          controller: 'MainController',
        })
        .otherwise({
          redirectTo: '/404'
        });
    })
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
    });
})();