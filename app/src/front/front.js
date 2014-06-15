'use strict';

angular.module('cbdFront', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/front/front.tpl.html',
        controller: 'FrontCtrl'
      })
  }])


  .controller('FrontCtrl', 
    ['$scope', '$routeParams', '$location', 'ideaService', 
    function ($scope,$routeParams, $location, ideaService) {

    $scope.redirectToAddIdea = function() {
        $location.path('/addIdea');
    };

    $scope.redirectToBrowse = function(query) {
        $log.info('/browse?search=' + query);
        $location.path('/browse').search({'search': query});
    };

    $scope.getPopularIdeas = function(category) {
       ideaService.getPopularIdeas(category)
           .then(function (ideas) {
               $scope.popularIdeas = ideas;
           }, function(error) {
              $scope.status = 'unable to load ideas data' + error.message;
           });
            
    };


    init();
    function init() {
        $scope.getPopularIdeas("all");

    };
}]);