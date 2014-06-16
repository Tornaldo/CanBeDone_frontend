angular.module('cbdCommon')
.directive('searchResult', [ function() {
  return {
    restrict: 'AE',

    scope: {'resultModel': '=',
    'searchFuction': '&',
    'maxRow': '@',
    'maxColumn': '@',
    'errorModel': '='
  },

  template:

  '<div ng-show="error"><p>{{error}}</p></div>'+
  '<div ng-hide="error">'+
  '<div class="row table-responsive">'+
  '<table class="table">'+
  '<tr ng-repeat="row in matrix">'+
  '<td class="col-centered" ng-repeat="idea in row track by $index"><ng-include src="ideaThumbTemplate"></ng-include></td>'+
  '</tr>'+
  '</table>'+
  '</div>'+
  '</div>',
  controller: ['$scope', function($scope) {
    $scope.ideaThumbTemplate = '/common/partials/ideaThumb.tpl.html';
    $scope.matrix = [];
    $scope.totalItems;
    $scope.error = '';
    $scope.isPagination = false;
    //defaultvalues
    $scope.itemPerPage = 16;
    $scope.internalMaxCols = 4;


    $scope.setPage = function (pageNo) {
      $scope.page = pageNo;
      $scope.searchForIdeas(pageNo);
    };

    $scope.constructGridLayout = function(data) {
      var resultSet = angular.copy(data);
      if(angular.isDefined(resultSet)) {
        $scope.matrix = [];
        var currentRow = [];
        for( var i =0 ; i < resultSet.length;i++){
          currentRow.push(resultSet[i]);
          if(currentRow.length >= $scope.internalMaxCols) {
            $scope.matrix.push(currentRow);
            currentRow = [];
          }
        }
        if(currentRow.length>0) {
          $scope.matrix.push(currentRow);
        }
      }
    };
  }],

  link: function(scope, elem, attrs) {

    if(scope.maxColumn && scope.maxRow) {
      scope.itemPerPage = scope.maxColumn*scope.maxRow;
    }
    else {
      if(scope.maxColumn) {
        scope.internalMaxCols = scope.maxColumn;
      }
      else if(scope.maxRow) {
        scope.itemPerPage = Math.floor(scope.maxRow*scope.internalMaxCols);
      }
    }

    scope.$watch('resultModel', function(newValue, oldValue) {
      if (newValue) {
        scope.isPagination = true;
        scope.totalItems = newValue.totalItems;
        scope.error = '';
        scope.constructGridLayout(newValue.ideas);
      }
    });

    scope.$watch('errorModel', function(newValue, oldValue) {
      if (newValue!== null) {
        scope.matrix = [];
        scope.error = newValue;
      }
    });
  }
  };
}]);



angular.module('cbdCommon')
.directive('ideaViewer', [ function() {
  return {
    restrict: 'AE',

    scope: {'size': '=size',
    'ideas': '=ideaModel'
  },

  template:
  '<carousel interval="myInterval" >' +
  '<slide ng-repeat="slide in slides" active="slide.active" >' +
  '<div class="carousel-inner carouselin-thumb">' +
  '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 clearfix" ng-repeat="idea in slide" >' +
  '<ng-include src="template" ></ng-include>' +
  '</div>'+
  '</div>' +
  '</slide>'+
  '</carousel>',

  controller: ['$scope',function($scope) {
    $scope.template = '/common/partials/ideaThumb.tpl.html';
    $scope.ideas;
    $scope.slides;


    //front end parser. Parse ideas json string into slides for carousel of size defined by $scope.size
    $scope.parseIdeasToSlides = function(ideas) {
      var slides = [];

      var slideLength = Math.ceil(ideas.length/$scope.size)
      for(var i = 0; i<slideLength; i++) {

        var slide = [];
        for(var j = i*$scope.size; j< ((i*$scope.size) + $scope.size) && j<ideas.length; j++) {
          slide.push(ideas[j]);
        }
        slides.push(slide);
      }
      $scope.slides = slides;
    };

  }],

  link: function(scope, elem, attrs) {
    scope.$watch('ideas', function(newValue, oldValue) {
      if (newValue) {
        scope.parseIdeasToSlides(newValue);
      }
    });
  }
};
}]);


