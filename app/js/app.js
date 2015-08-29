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
          templateUrl: 'views/home.html',
          controller: 'MainController',
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
