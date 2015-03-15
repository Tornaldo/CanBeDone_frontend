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
                    '<a  class="btn-idea-editor" ng-click="onEdit()"><i class="fa fa-floppy-o"></i></a> <span class="btn-idea-editor"> or</span>' +
                    '<a  class="btn-idea-editor" ng-click="editorOn=false"><i class="fa fa-times"></i></a>' +
                '</h1>'
            ,
    controller: ['$scope', function($scope) {
      $scope.editorOn = false;
    }],

    link: function(scope, elem, attrs) {
    }
  };
}])

.directive('editField', [ function() {
  return {
    restrict: 'AE',

    scope: {
      content: '=',
      onEdit: '&',
      label: '@'
    },

    template: 
                '<div ng-show="!editorOn">' +
                    '<p class="idea-profile-what-why-heading">{{label}}:</p>'+ 
                    '<p><i><b>{{content}}</b></i>'+
                   '<a class="btn-idea-editor" ng-click="editorOn=true"><i class="fa fa-pencil-square-o"></i></a></p>'+

                '</div>'+
                '<div ng-show="editorOn">'+
                    '<p class="idea-profile-what-why-heading">{{label}}:</p> '+
                    '<p>'+
                        '<textarea ng-model="content" type="text" class="form-control form-control-edit" id="{{label}}" name="{{label}}" > </textarea>'+  
                        '<p>'+
                            '<a  ng-click="onEdit()"><i class="fa fa-floppy-o"></i></a> or'+
                            '<a  ng-click="editorOn=false"><i class="fa fa-times"></i></a>'+
                        '</p>'+
                    '</p>'+
                '</div>'
            ,
    controller: ['$scope', function($scope) {
      $scope.editorOn = false;
    }],

    link: function(scope, elem, attrs) {
    }
  };
}])

.directive('editText', [ function() {
  return {
    restrict: 'AE',

    scope: {
      content: '=',
      onEdit: '&',
    },

    template: 
                '<div ng-show="!editorOn" class="idea-profile-description">'+
                '<div id="description" ng-bind-html="content"></div> <a class="btn-idea-editor" ng-click="editorOn=true"> <i class="fa fa-pencil-square-o"></i> </a>'+
            '</div>'+
            '<div ng-show="editorOn" class="idea-profile-description">'+
                '<p>'+
                    '<textarea ng-model="content" type="text" class="form-control form-control-edit" id="what" name="what" > </textarea>'+  
                    '<p>'+
                        '<a  ng-click="save()"><i class="fa fa-floppy-o"></i></a> or'+
                        '<a  ng-click="editorOn = false"><i class="fa fa-times"></i></a>'+
                    '</p>'+
                '</p>'+
            '</div>'
            ,
    controller: ['$scope', function($scope) {
      $scope.editorOn = false;
    }],

    link: function(scope, elem, attrs) {
    }
  };
}]);