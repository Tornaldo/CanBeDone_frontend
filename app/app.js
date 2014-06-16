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
    'ui.bootstrap',
    'cbdFront',
    'cbdCommon',
    'cbdBrowse',
  ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }])


  .constant('config', {
    apiBaseUrl: 'http://localhost:8080/A/web/app_dev.php/api/',
  });
