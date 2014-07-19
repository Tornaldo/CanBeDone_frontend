'use strict';

angular.module('cbdBrowse', ['cbdCommon'])
  .config(['$routeProvider', function ($routeProvider, cbdShared) {
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
  function ($scope,$routeParams, $location, routeParams, ideaService, searchResult, cbdShared) {
    $scope.results = searchResult;
    console.log('searresult: ' +  searchResult);
    $scope.error = null;
    $scope.search = $routeParams.search;


    $scope.searchForIdeas = function (search, page) {
      console.log('page:' +  page + 'search' + search);
      page = typeof page !== 'undefined' ? page : 1;
      var query = search;
      if (query) {
          $location.search('search', query.trim());

          ideaService.getSearchResult(query, page - 1, $scope.itemPerPage)
              .then(function (data) {
                console.log('data'+ data);
                $scope.results = data;
              }, function(error) {
                $scope.error = 'Found no ideas matching your search criterias';
              });
      }
      else {
          $scope.error = 'You forgot enter query into the search field!';
      }
      console.log('page2:' +  page + 'search2' + search);

    };
    $scope.count = 0;
    $scope.$on('searchNav', function (event, data) {
      
      console.log('data: ' + data.searchText); // 'Data to send'
      
      $scope.searchForIdeas(data.searchText);
    });    

   

}]);      

