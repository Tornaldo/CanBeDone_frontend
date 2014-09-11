angular.module('cbdIdeaConstruction')
.directive('categoryPicker', [ function() {
  return {
    restrict: 'AE',

    scope: {
      result: '=',
    },

    templateUrl: 'src/ideaConstruction/categoryPicker/category-picker.tpl.html',
    controller: ['$scope','categoryService', function($scope, categoryService) {
      $scope.main = [];
      $scope.sub = {};

      $scope.getMain = function() {
        categoryService.getMainCategories()
        .then(function(data) {
          $scope.main = data.categories;
        });

        $scope.getSubcategory = function(category, show) {
          if(show) {
            categoryService.getSubcategory(category.id)
          .then(function(data) {
            $scope.sub[category.id] = data;
            $scope.result.push(category.id);
          });
          }
          else {
            //TODO: Recursive hide when clicking subcategory.
            $scope.sub[category.id] = undefined;
            var index = $scope.result.indexOf(category.id);
            if(index > -1) {
              $scope.result.splice(index, 1);
            }
          }
          
        }
      }
    }],

    link: function(scope, elem, attrs) {
      scope.getMain();
    }
  };
}]);