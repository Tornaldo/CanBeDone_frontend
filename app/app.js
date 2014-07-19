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
    'cbdLogin'
  ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }]);

<<<<<<< HEAD
=======

  .constant('config', {
    apiBaseUrl: 'http://localhost/A/web/app_dev.php/api/',
  })


 .factory('cbdShared', function($rootScope) {
      var cbdshared = {};

      cbdshared.searchnav = '';

      cbdshared.broadcastinput = function(searchnav1) {
          this.searchnav = searchnav1;
          this.broadcastSearch();
      };
      cbdshared.broadcastSearch = function() {
          $rootScope.$broadcast('searchNav', {
              searchText: cbdshared.searchnav // send whatever you want
        });
      };

      return cbdshared;
  });

>>>>>>> origin/zak
