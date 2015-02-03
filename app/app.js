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
    'ngCkeditor',
    'summernote',
    'cbdConfig',
    'cbdFront',
    'cbdCommon',
    'cbdBrowse',
    'cbdIdea',
    'cbdIdeaConstruction',
    'cbdLogin',
    'cbdUserProfile',    
    'cbdSummerNoteTest'

  ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }]);


