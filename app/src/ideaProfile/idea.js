'use strict';

angular.module('cbdIdea', ['cbdCommon'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/idea/:ideaId', {
        templateUrl: 'src/ideaProfile/idea.tpl.html',
        controller: 'IdeaCtrl',
        resolve: {
          idea: ['ideaService','$route', function(ideaService, $route) {
            var ideaParam = $route.current.params.ideaId;

            if(angular.isDefined(ideaParam)) {
                return ideaService.getIdea(ideaParam).then(function (response) {
                    return response;
                });
            }
            else {
                //redirect to 404?
            }
          }]
        }
      })
  }])


.controller('IdeaCtrl', ['$scope', 'idea', function ($scope, idea) {

    $scope.idea = idea.idea[0];


}])

.controller('IdeaThumbCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.redirectToIdea = function(ideaId) {
        console.log("hei");
        console.log(ideaId);
        $location.path('/idea/' + ideaId);
    };


}]);