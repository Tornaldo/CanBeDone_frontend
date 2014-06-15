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

          controller: function($scope, $log) {
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

          },

          link: function(scope, elem, attrs) {
              scope.$watch('ideas', function(newValue, oldValue) {
                  if (newValue) {
                      scope.parseIdeasToSlides(newValue);
                  }
              });
          }
      };
  }]);


angular.module('cbdCommon')
    .directive('searchResult', ['ideaService', function(ideaService) {
        return {
            restrict: 'AE',

            scope: {'searchModel': '=',
                    'control': '=',
                    'maxRow': '@',
                    'maxColumn': '@'
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
                        '<div class="row" ng-show="isPagination">'+
                            '<pagination total-items="totalItems" page="page" on-select-page="setPage(page)"></pagination>'+
                        '</div>'+
                    '</div>',
            controller: function($scope, $log, $location) {
                $scope.ideaThumbTemplate = '../bundles/idesidejsandcss/app/partials/ideaThumb.html';
                $scope.matrix = [];
                $scope.totalItems;
                $scope.error = '';
                $scope.isPagination = false;
                //defaultvalues
                $scope.itemPerPage = 20;
                $scope.internalMaxCols = 4;


                $scope.setPage = function (pageNo) {
                    $scope.page = pageNo;
                    $scope.searchForIdeas(pageNo);
                };

                $scope.searchForIdeas = function (page) {
                    page = typeof page !== 'undefined' ? page : 1;
                    var query = $scope.searchModel;

                    if (query) {
                        $location.search('search', query.trim());

                        ideaService.getIdeaResultSet(query, page - 1, $scope.itemPerPage)
                            .success(function (data) {

                                $scope.isPagination = true;
                                $scope.totalItems = data.totalItems;
                                $scope.error = '';
                                $scope.constructGridLayout(data.ideas);
                            })
                            .error(function (error) {
                                $scope.error = 'Found no ideas matching your search criterias';
                                $scope.isPagination = false;
                            });
                    }
                    else {
                        $scope.matrix = [];
                        $scope.error = 'You forgot enter search field!';
                    }
                };

                $scope.constructGridLayout = function(data) {
                    $scope.matrix = [];
                    var currentRow = [];

                    for( var i =0 ; i < data.length;i++){
                        currentRow.push(data[i]);
                        if(currentRow.length >= $scope.internalMaxCols) {
                            $scope.matrix.push(currentRow);
                            currentRow = [];
                        }
                    }
                };
            },

            link: function(scope, elem, attrs) {
                //maxcolumn, maxRow are optional
                scope.internalControl = scope.control || {};
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
                scope.internalControl.getIdeas = function() {
                    scope.searchForIdeas();
                }
            }
        };
    }]);

