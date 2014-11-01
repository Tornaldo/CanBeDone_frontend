/**
 * @ngdoc directive
 * @name cbdIdeaConstruction.directive:editor
 * @param  {object} content The editors multimedia content.
 * @description
 * Directive that wraps the summernote directive. it contains different customizations
 * of summernote.
 */
angular.module('cbdIdeaConstruction')
.directive('editor', [ function() {
  return {
    restrict: 'AE',

    scope: {
      content: '=',
    },

    template: '<summernote config="options" ng-model="content" id="ideaDescription"'+
            '></summernote>',
    controller: ['$scope', function($scope) {
        //TODO: Automatically delete font styling
      
      $scope.options = {
        height: 700,
        minHeight: null,
        maxHeight: null,
        toolbar: [
          ['misc', ['undo', 'redo']],
          ['style', ['bold', 'italic', 'underline']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['picture', 'link', 'video']],
          ['fullscreen', ['fullscreen']]
        ]
      };

    }],

    link: function(scope, elem, attrs) {
    }
  };
}]);