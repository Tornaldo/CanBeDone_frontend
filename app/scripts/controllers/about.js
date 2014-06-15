'use strict';

/**
 * @ngdoc function
 * @name canBeDoneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the canBeDoneApp
 */
angular.module('canBeDoneApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
