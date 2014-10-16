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
    //'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngTagsInput',
    'summernote',
    'cbdConfig',
    'cbdFront',
    'cbdCommon',
    'cbdBrowse',
    'cbdIdea',
    'cbdIdeaConstruction',
  ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }]);

/*
var app = angular.module('app', [
    'directives.skrollr'
  ]);

  */