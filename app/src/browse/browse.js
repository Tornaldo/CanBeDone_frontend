'use strict';

angular.module('cbdBrowse', ['cbdCommon'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/browse', {
        templateUrl: 'src/browse/browse.tpl.html',
        controller: 'BrowseCtrl',
        resolve: {
          searchResult: ['$route','ideaService', function($route, ideaService) {
            var searchParam = $route.current.params.search;
            console.log("TESTER");
            if(angular.isDefined(searchParam)) {
              return ideaService.getSearchResult(searchParam, 0, 20).then(function (response) {
                return response;
              });
            }
            else {
              return null;
            }
            
          }]
        }
      })
  }])


  .controller('BrowseCtrl', 
  ['$scope', '$routeParams', '$location', '$routeParams','ideaService' ,'searchResult', 
  function ($scope,$routeParams, $location, routeParams, ideaService, searchResult) {
    $scope.results = searchResult;
    $scope.error = null;
    $scope.search = $routeParams.search;

    $scope.searchForIdeas = function (search, page) {
      page = typeof page !== 'undefined' ? page : 1;
      var query = search;
      if (query) {
          $location.search('search', query.trim());

          ideaService.getSearchResult(query, page - 1, $scope.itemPerPage)
              .then(function (data) {
                console.log(data);
                $scope.results = data;
              }, function(error) {
                $scope.error = 'Found no ideas matching your search criterias';
              });
      }
      else {
          $scope.error = 'You forgot enter query into the search field!';
      }
  };
}]);

