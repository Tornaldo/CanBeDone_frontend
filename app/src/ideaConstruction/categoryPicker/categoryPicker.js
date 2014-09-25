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
            var subCategory = {'parent': category.id, 'data': data};
            $scope.sub[category.id] = subCategory;
            $scope.result.push(category.id);
          });
          }
          else {
            var queue = [];
            queue.push(category);
            while(queue.length > 0) {
              var cat = queue.shift();
              var sub = $scope.sub[cat.id];
              var subCatList = sub.data.category.subCategories;
              
              //For each sub category A of category check to see if 
              //There exist another sub category of A. If it exist
              //add to queue. This will ensure that removing a category will
              //propagate to all sub categories
              for(var i = 0; i < subCatList.length; i++) {
                if($scope.sub[subCatList[i].id]) {
                  queue.push(subCatList[i]);

                }
              }
              $scope.sub[cat.id] = undefined;
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