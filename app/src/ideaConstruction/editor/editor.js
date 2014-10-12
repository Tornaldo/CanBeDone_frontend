angular.module('cbdIdeaConstruction')
.directive('editor', [ function() {
  return {
    restrict: 'AE',

    scope: {
      content: '=',
    },

    template: '<summernote config="options" ng-model="content" id="ideaDescription"'+
            '></summernote><a ng-click="test()">CLick<a>',
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

      $scope.test = function() {
        console.log("TEST");
      };
    }],

    link: function(scope, elem, attrs) {
    }
  };
}]);