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
    $scope.ideaComment = idea.comment_section;
   
    $scope.titleEditorOn = false;
    $scope.whatEditorOn = false;
    $scope.whyEditorOn = false;    
    $scope.descriptionEditorOn = false;
    $scope.teamEditorOn = false;
    
    var ide = "Lorem ipsum dolor sit amet consectetur adipiscing eletra electrify denim vel ports";
    $scope.ideaabt = [{'idabt': ide}];

    $scope.ideaabt0 = $scope.ideaabt[0].idabt;
 
    $scope.enableIdeaEditor = function(edittype) {
      if(edittype == 'title'){
        $scope.titleEditorOn = true;
        $scope.editIdeaTitle = $scope.idea.title;}
      else if(edittype == 'what'){
        $scope.whatEditorOn = true;
        $scope.editIdeaWhat = $scope.idea.shortDescriptionWhat;}
      else if(edittype == 'why'){
        $scope.whyEditorOn = true;
        $scope.editIdeaWhy = $scope.idea.shortDescriptionWhy;}
      else if(edittype == 'description'){
        $scope.descriptionEditorOn = true;
        $scope.editIdeadescription = $scope.idea.description;}
      else if(edittype == 'about'){
        $scope.teamEditorOn = true;
        $scope.editIdeateam = $scope.ideaabt0;}
    }; 

    $scope.disableIdeaEditor = function(edittype) {
      if(edittype == 'title')
        $scope.titleEditorOn = false; 
      else if(edittype == 'what')
        $scope.whatEditorOn = false; 
      else if(edittype == 'why')
        $scope.whyEditorOn = false; 
      else if(edittype == 'description')
        $scope.descriptionEditorOn = false; 
      else if(edittype == 'about')
        $scope.teamEditorOn = false; 
    }; 

    $scope.save = function(edittype) {
      if(edittype == 'title'){
        $scope.idea.title = $scope.editIdeaTitle;
        $scope.disableIdeaEditor('title');}
      else if(edittype == 'what'){
        $scope.idea.shortDescriptionWhat = $scope.editIdeaWhat;
        $scope.disableIdeaEditor('what');}
      else if(edittype == 'why'){
        $scope.idea.shortDescriptionWhy = $scope.editIdeaWhy;
        $scope.disableIdeaEditor('why');}
      else if(edittype == 'description'){
        $scope.idea.description = $scope.editIdeadescription;
        $scope.disableIdeaEditor('description');}
      else if(edittype == 'about'){
        $scope.ideaabt0 = $scope.editIdeateam;
        $scope.disableIdeaEditor('about');}        

<<<<<<< HEAD
      console.log('$scope.idea: ' + $scope.idea);
      ideaService.editIdea($scope.idea)
        .then(function(data) {
          console.log('edited:idea: '+  data);
          notification.success("Idea edited");
        }, function(error) {
          notification.error("Could not Edit your idea." + error);
        });
      
    }; 

    //Comment sorting 
    $scope.commentSortOptions = ['Likes', 'Dislikes', 'Replies', 'id', 'Date'];
    $scope.sortCommentBy = "id";  
    $scope.sortAttribute = "id";    
=======
    $scope.idea = idea.idea;
    console.log('idea:' +  $scope.idea.title)
    $scope.titleEditorOn = false;
    $scope.whatEditorOn = false;
    $scope.whyEditorOn = false;    
    $scope.descriptionEditorOn = false;
    $scope.teamEditorOn = false;
    
    var ide = "Lorem ipsum dolor sit amet consectetur adipiscing eletra electrify denim vel ports";
    $scope.ideaabt = [{'idabt': ide}];

    $scope.ideaabt0 = $scope.ideaabt[0].idabt;
  /*  $scope.enableIdeaTitleEditor = function() {
      $scope.titleEditorOn = true;
      $scope.editIdeaTitle = $scope.idea.title;
    };
    $scope.enableIdeaWhatEditor = function() {
      $scope.whatEditorOn = true;
      $scope.editIdeaWhat = $scope.idea.shortDescriptionWhat;
    };
    $scope.enableIdeaWhyEditor = function() {
      $scope.whyEditorOn = true;
      $scope.editIdeaWhy = $scope.idea.shortDescriptionWhy;
    };   
    $scope.enableIdeadescriptionEditor = function() {
      $scope.descriptionEditorOn = true;
      $scope.editIdeadescription = $scope.idea.description;
    };     
    $scope.enableIdeaTeamEditor = function() {
      $scope.teamEditorOn = true;
      $scope.editIdeateam = $scope.ideaabt0;
    };  


    $scope.disableTitleEditor = function() {
      $scope.titleEditorOn = false; 
    };
    $scope.disableWhatEditor = function() {
      $scope.whatEditorOn = false; 
    };  
    $scope.disableWhyEditor = function() {
      $scope.whyEditorOn = false; 
    };        
    $scope.disabledescriptionEditor = function() {
      $scope.descriptionEditorOn = false; 
    };
    $scope.disableTeamEditor = function() {
      $scope.teamEditorOn = false; 
    };    

    $scope.saveTitle = function() {
      $scope.idea.title = $scope.editIdeaTitle;
      $scope.disableTitleEditor();
    };
    $scope.saveWhat = function() {
      $scope.idea.shortDescriptionWhat = $scope.editIdeaWhat;
      $scope.disableWhatEditor();
    };
    $scope.saveWhy = function() {
      $scope.idea.shortDescriptionWhy = $scope.editIdeaWhy;
      $scope.disableWhyEditor();
    };   
    $scope.savedescription = function() {
      $scope.idea.description = $scope.editIdeadescription;
      $scope.disabledescriptionEditor();
    };   
    $scope.saveTeam = function() {
      $scope.ideaabt0 = $scope.editIdeateam;
      $scope.disableTeamEditor();
    }; */

    $scope.enableIdeaEditor = function(edittype) {
      if(edittype == 'title'){
        $scope.titleEditorOn = true;
        $scope.editIdeaTitle = $scope.idea.title;}
      else if(edittype == 'what'){
        $scope.whatEditorOn = true;
        $scope.editIdeaWhat = $scope.idea.shortDescriptionWhat;}
      else if(edittype == 'why'){
        $scope.whyEditorOn = true;
        $scope.editIdeaWhy = $scope.idea.shortDescriptionWhy;}
      else if(edittype == 'description'){
        $scope.descriptionEditorOn = true;
        $scope.editIdeadescription = $scope.idea.description;}
      else if(edittype == 'about'){
        $scope.teamEditorOn = true;
        $scope.editIdeateam = $scope.ideaabt0;}
    }; 

    $scope.disableIdeaEditor = function(edittype) {
      if(edittype == 'title')
        $scope.titleEditorOn = false; 
      else if(edittype == 'what')
        $scope.whatEditorOn = false; 
      else if(edittype == 'why')
        $scope.whyEditorOn = false; 
      else if(edittype == 'description')
        $scope.descriptionEditorOn = false; 
      else if(edittype == 'about')
        $scope.teamEditorOn = false; 
    }; 

    $scope.save = function(edittype) {
      if(edittype == 'title'){
        $scope.idea.title = $scope.editIdeaTitle;
        $scope.disableIdeaEditor('title');}
      else if(edittype == 'what'){
        $scope.idea.shortDescriptionWhat = $scope.editIdeaWhat;
        $scope.disableIdeaEditor('what');}
      else if(edittype == 'why'){
        $scope.idea.shortDescriptionWhy = $scope.editIdeaWhy;
        $scope.disableIdeaEditor('why');}
      else if(edittype == 'description'){
        $scope.idea.description = $scope.editIdeadescription;
        $scope.disableIdeaEditor('description');}
      else if(edittype == 'about'){
        $scope.ideaabt0 = $scope.editIdeateam;
        $scope.disableIdeaEditor('about');}        
    }; 
>>>>>>> 6f9afff51a406e6af93ff1e89e680a1eee9e7782

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
        console.log("hei");
        console.log(ideaId);
        $location.path('/idea/' + ideaId);
    };


}]);