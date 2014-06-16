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


}])

.directive("controlGroup", function () {
    return {
        template:
        '<div class="control-group" ng-class="{ error: isError }">\
            <label class="control-label" for="{{for}}">{{label}}</label>\
            <div class="controls" ng-transclude></div>\
        </div>',

        replace: true,
        transclude: true,
        require: "^form",

        scope: {
            label: "@" // Gets the string contents of the `label` attribute
        },

        link: function (scope, element, attrs, formController) {
            // The <label> should have a `for` attribute that links it to the input.
            // Get the `id` attribute from the input element
            // and add it to the scope so our template can access it.
            var id = element.find(":input").attr("id");
            scope.for = id;

            // Get the `name` attribute of the input
            var inputName = element.find(":input").attr("name");
            // Build the scope expression that contains the validation status.
            // e.g. "form.example.$invalid"
            var errorExpression = [formController.$name, inputName, "$invalid"].join(".");
            // Watch the parent scope, because current scope is isolated.
            scope.$parent.$watch(errorExpression, function (isError) {
                scope.isError = isError;
            });
        }

    };
});