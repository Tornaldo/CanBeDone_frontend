'use strict';

angular.module('cbdIdea', ['cbdCommon'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/idea/:ideaId/', {
        templateUrl: 'src/ideaProfile/idea.tpl.html',
        controller: 'IdeaCtrl',
        resolve: {
          idea: ['ideaService','$route', function(ideaService, $route) {
            var ideaParam = $route.current.params.ideaId;
            console.log('ideaParam: ' + ideaParam);
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


.controller('IdeaCtrl', ['$scope','ideaService','idea', 'notification', function ($scope,  ideaService, idea, notification) {

    $scope.idea = idea.idea;
    $scope.project = idea.projects;
    $scope.faq = idea.FAQs;
    $scope.ideaComment = idea.comment_section;
    console.log("idea id: " + $scope.idea);
    $scope.teamEditorOn = false;
    
    var ide = "Lorem ipsum dolor sit amet consectetur adipiscing eletra electrify denim vel ports";
    $scope.ideaabt = [{'idabt': ide}];

    $scope.ideaabt0 = $scope.ideaabt[0].idabt;
 
    $scope.saveEdit = function() {
      //Saves by sending the whole idea as is to the backend.
      ideaService.editIdea($scope.idea)
        .then(function(data) {
          console.log('edited:idea: '+  data);
          notification.success("Idea edited");
        }, function(error) {
          notification.error("Could not Edit your idea." + error);
        });
    }

    //Comment sorting 
    $scope.commentSortOptions = ['Likes', 'Dislikes', 'Replies', 'id', 'Date'];
    $scope.sortCommentBy = "id";  
    $scope.sortAttribute = "id";    


    $scope.sortCommentView = true;
    $scope.noCommentView = true;

    $scope.$watch('ideaComment', function() {
      if($scope.ideaComment.length>1){
        $scope.sortCommentView = false;      
      } else if ($scope.ideaComment.length==1){
        $scope.noCommentView = true;
        $scope.sortCommentView = true;
      } else if ($scope.ideaComment.length==0){
        $scope.sortCommentView = true; 
        $scope.noCommentView = false;
      }
    });

    /*for (var i = 0; i < $scope.ideaComment.length; i++) {
        $scope.NoofReplies[i] = $scope.ideaComment[i].replies.length
    };*/  
    
    $scope.$watch('sortCommentBy', function() {
        if ($scope.sortCommentBy== 'Replies') {
          $scope.sortAttribute = "numberOfAnswers";
        }
        if ($scope.sortCommentBy== 'id') {
          $scope.sortAttribute = "id";
        }
      });    
   
}])

.controller('IdeaThumbCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.redirectToIdea = function(ideaId) {
        $location.path('/idea/' + ideaId);
    };


}]);