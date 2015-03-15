'use strict';
//TODO: Access element inside using transclude, for maximum reusablitiy
angular.module('cbdIdea')
.directive('editTitle', [ function() {
  return {
    restrict: 'AE',

    scope: {
      content: '=',
      onEdit: '&',
    },

    template: 
                
                '<h1 ng-show="!editorOn" class="idea-profile-title">'+
                    '<b>{{content}}</b> <a class="btn-idea-editor" ng-click="editorOn=true"> <i class="fa fa-pencil-square-o"></i> </a>'+
                '</h1>'+
                '<h1 ng-show="editorOn" class="idea-profile-title">' +
                    '<input ng-model="content" class="form-control form-control-edit">' +
                    '<a  class="btn-idea-editor" ng-click="save()"><i class="fa fa-floppy-o"></i></a> <span class="btn-idea-editor"> or</span>' +
                    '<a  class="btn-idea-editor" ng-click="editorOn=false"><i class="fa fa-times"></i></a>' +
                '</h1>'
            ,
    controller: ['$scope', function($scope) {
      $scope.editorOn = false;

      $scope.save = function() {
        $scope.onEdit();
      };

    }],

    link: function(scope, elem, attrs) {
    }
  };
}]);