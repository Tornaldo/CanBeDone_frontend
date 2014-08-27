angular.module('cbdIdeaConstruction')
.directive('categoryPicker', [ function() {
  return {
    restrict: 'AE',

    scope: {
      result: '=',
    },

    templateUrl: 'src/ideaConstruction/categoryPicker/category-picker.tpl.html',
    controller: ['$scope', function($scope) {
      
    }],

    link: function(scope, elem, attrs) {
    }
  };
}]);