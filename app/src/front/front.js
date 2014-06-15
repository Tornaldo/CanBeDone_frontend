'use strict';

angular.module('cbdFront', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/front/front.tpl.html',
        controller: 'FrontCtrl'
      })
  })


  .controller('FrontCtrl', function ($scope,$routeParams, $location) {

    $scope.redirectToAddIdea = function() {
        $location.path('/addIdea');
    };

    $scope.redirectToBrowse = function(query) {
        $log.info('/browse?search=' + query);
        $location.path('/browse').search({'search': query});
    };

    $scope.getPopularIdeas = function(category) {
       ideaService.getPopularIdeas(category)
           .success(function (ideas) {
               $scope.popularIdeas = ideas;
           })
           .error(function (error) {
            $scope.status = 'unable to load ideas data' + error.message;
        });
    };


    init();
    function init() {
        $scope.getPopularIdeas("all");

    };
});