'use strict';

/**
 * @ngdoc function
 * @name canBeDoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the canBeDoneApp
 */
angular.module('canBeDoneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
