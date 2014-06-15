'use strict';

/**
 * @ngdoc overview
 * @name canBeDoneApp
 * @description
 * # canBeDoneApp
 *
 * Main module of the application.
 */
angular
  .module('canBeDoneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cbdFront',
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
