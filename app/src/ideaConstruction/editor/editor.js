angular.module('cbdIdeaConstruction')
.directive('editor', [ function() {
  return {
    restrict: 'AE',

    scope: {
      conent: '=',
    },

    template: '<summernote class="form-control" ng-model="idea.description" id="ideaDescription"'+
            'placeholder="Describe your idea" height="400"></summernote>',
    controller: ['$scope', function($scope) {
      
    }],

    link: function(scope, elem, attrs) {
    }
  };
}]);