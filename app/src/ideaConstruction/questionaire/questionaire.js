
angular.module('cbdIdeaConstruction')
.controller('questionaireCtrl', ['$scope',
function ($scope) {
    $scope.idea.purpose = {};
    $scope.purposeQuestionaire = [
        {
          question: "Why are you posting this idea?", 
          name: "whyPost",
          alternatives: [{name: "implement", value: "To find people who can help me implement it"},
           {name:"feedback", value: "To get feedback so that I can see if I should go forward with this or not"},
           {name :"share", value: "To share it with the world in the hope that someone else makes something out of it"}]},
        {
          question: "Would you be ok with somebody else implementing this idea independently?", 
          name: "otherImplementers",
          alternatives: [{name:"accept", value: "Yes"},
            {name:"decline",value: "No."},
            {name: "permisson", value: "They would need my permission."}]
        },{
          question: "Would you like to enable people to express interest in helping you implement this by creating a team-page?", 
          name: "otherImplementers",
          alternatives: [{name: "accept",value: "Yes."},
             {name: "decline", value: "No."}]
        }
    ];
  
}])
/**
 * @ngdoc directive
 * @name cbdIdeaConstruction.directive:question
 * @param  {object} answer Where the user selection is stored
 * @param  {object} text the question text
 * @param  {object} alternatives all possible alternatives for a question. Should be put in a list where all
 * alternatives has a name and value attribute. name will be used when posting the answer to the backend and 
 * the value containt text that are human readable.
 * @description
 * Directive contain logic and gui representation of 1 question and its alternatives.
 * Two modes of operations are supported: multiple and single selection. These are represented
 * by using either checkboxes or radioboxes.
 */
.directive('question', [ function() {
  return {
    restrict: 'AE',

    scope: {
      answer: '=',
      text: '@',
      alternatives: '='
      mode: '@'
    },
    //Mode is whether one or several of the alternatives can be selected.
    template: '<p>{{text}}</p><p ng-repeat="alt in alternatives"><input type="checkbox">{{alt.value}}</p>',
    controller: ['$scope', function($scope) {
        
      $scope.option_clicked = function(option) {
        console.log("TEST");
      };
    }],

    link: function(scope, elem, attrs) {
    }
  };
}]);