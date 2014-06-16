angular.module('cbdIdeaConstruction', ['cbdCommon'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/post-idea', {
        templateUrl: 'src/ideaConstruction/postIdea.tpl.html',
        controller: 'postIdeaCtrl'
      })
  }])


.controller('postIdeaCtrl', ['$scope','ideaService',
function ($scope,ideaService) {

    $scope.isRestrictedSelected = false;
    $scope.submitted = false;
    $scope.languages = [{name: 'English'}, {name: 'Norwegian'}];
    $scope.language = $scope.languages[0];
    $scope.idea = {};
    $scope.idea.accessOptions = {};

    $scope.showOptionsForRestricted = function(show) {

       $scope.isRestrictedSelected = show;
        if(show == false) {
            $scope.idea.accessOptions = {};

        }
    };

    $scope.submit = function() {

        ideaService.postIdea($scope.idea)
            .then(function(data) {
                console.log("funket");
            }, function(error) {
                console.log("funket ikke");
            });
            

    };


}]);