angular.module('cbdIdeaConstruction', ['cbdCommon', 'angularFileUpload', 'summernote'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/post-idea', {
        templateUrl: 'src/ideaConstruction/postIdea.tpl.html',
        controller: 'postIdeaCtrl'
      })
  }])

.controller('postIdeaCtrl', ['$scope','ideaService', 'notification', 'FileUploader',
function ($scope,ideaService, notification, FileUploader) {

    $scope.submitted = false;
    $scope.idea = {};
    $scope.idea.categoryIds = [];
    $scope.idea.purpose = {};

    $scope.submit = function() {
        ideaService.postIdea($scope.idea)
            .then(function(data) {
                notification.success("Idea posted");
            }, function(error) {
                notification.error("Could not post your idea." + error);
            });
            

    };


}])

 /** @ngdoc directive
 * @name cbdIdeaConstruction.directive:controlGroup
 * @param  {String} label Where the user selection is stored
 * @description
 * Directive contain logic and gui representation of 1 question and its alternatives.
 * Two modes of operations are supported: multiple and single selection. These are represented
 * by using either checkboxes or radioboxes.
 */
.directive("controlGroup", function () {
    return {
        template:
        '<div class="control-group" ng-class="{ \'has-error\': isError && submitted}">\
            <label class="control-label" for="{{for}}">{{label}}</label>\
            <div class="controls" ng-transclude></div>\
        </div>',

        replace: true,
        transclude: true,
        require: "^form",

        scope: {
            label: "@", // Gets the string contents of the `label` attribute
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
            }); var submittedExpression = [formController.$name, "$submitted"].join(".");
            scope.$parent.$watch(submittedExpression, function (isSubmitted) {
                scope.submitted = isSubmitted;
            });
        }

    };
});

