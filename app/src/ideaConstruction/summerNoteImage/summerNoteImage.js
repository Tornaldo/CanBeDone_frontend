angular.module('cbdSummerNoteTest', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/summerNoteImage', {
        templateUrl: 'src/ideaConstruction/summerNoteImage/summerNoteImage.tpl.html',
        controller: 'summernotetestCtrl'
      })
  }])

.controller('summernotetestCtrl', ['$scope','ideaService', 'notification', 'FileUploader', 'config', '$http',
function ($scope,ideaService, notification, FileUploader, config, $http) {
    $scope.idea = {};
    $scope.modelName;
          /*$scope.ideaDescriptionImage;
          $scope.clickidea = function(){
            console.log('$scope.title :' + $scope.idea.title);
            console.log('$scope.shortDescriptionWhat :' + $scope.idea.shortDescriptionWhat);
            console.log('$scope.shortDescriptionWhy :' + $scope.idea.shortDescriptionWhy);
            console.log('$scope.description :' + $scope.idea.description);
            console.log('$scope.ideaDescriptionImage :' + $scope.ideaDescriptionImage);      
          }*/

         CKEDITOR.on('dialogDefinition', function(ev) {
                // Take the dialog name and its definition from the event data
                var dialogName = ev.data.name;
                var dialogDefinition = ev.data.definition;

                if (dialogName == 'image') {
                   dialogDefinition.onOk = function(e) {
                    console.log("ok");
                      var imageSrcUrl = e.sender.originalElement.$.src;
                     // var imgHtml = CKEDITOR.dom.element.createFromHtml("<img src=" imageSrcUrl "/>");
                      //CKEDITOR.instances.body.insertElement(imageSrcUrl);
                                console.log('image upload:', imageSrcUrl);
                  $scope.files = imageSrcUrl;  
                  
                 // console.log('idea : ' +$scope.ideamodel.description);
                   };
                }
          });

         $scope.add = function(){
            var url = config.apiBaseUrl + 'files';

            var fd = new FormData()
            angular.forEach($scope.files, function(file){
                fd.append('file', file)
            })

            $http.post(url, fd, 
            {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).success(function(data){
                //Passing data to deferred's resolve function on successful completion
                console.log(data)
                console.log ('url: ' + url);
                $scope.ideamodel.description = $scope.content + "+" + data.url;
                   ideaService.postIdea($scope.ideamodel)
                    .then(function(data) {
                        notification.success("Idea posted");
                    }, function(error) {
                        notification.error("Could not post your idea." + error);                    
                    });                 
            }).error(function(error){
                console.log(error)
                //Sending a friendly error message in case of failure
            });
        }

    
        CKEDITOR.replace( 'editor2', {
            extraPlugins: 'image2',
            height: 450

        } );
  
    }])

.directive('summerEditor', [ function() {
  return {
    restrict: 'AE',
    scope: {
      content: '=',
      ideamodel: '=',
    },

    template: '<summernote config="options"  ng-model="content" id="ideaDescription"  on-image-upload="imageUpload(files, editor);" editable="editable"  '+
            '></summernote>'+
                 '<br>'+
            '<button ng-click="add()">Add</button>'+
            '<br>'+
            '<li ng-repeat="file in files">{{file.name}}</li>',
    controller: ['$scope','config', '$http', 'ideaService', 'notification', function($scope, config, $http, ideaService, notification) {
        //TODO: Automatically delete font styling
      
    $scope.ideamodel.categoryIds = [];
      $scope.options = {
        height: 200,
        width: 600,
        minHeight: null,
        maxHeight: null,
        toolbar: [
          ['misc', ['undo', 'redo']],
          ['style', ['bold', 'italic', 'underline']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['picture', 'link', 'video']],
          ['fullscreen', ['fullscreen']],
          ['view', ['fullscreen', 'codeview']]
        ]
      };

        $scope.imageUpload = function(files, editor) {
          console.log('image upload:', files);
          $scope.files = files;  
          
          console.log('idea : ' +$scope.ideamodel.description);
        }

        $scope.add = function(){
            var url = config.apiBaseUrl + 'files';

            var fd = new FormData()
            angular.forEach($scope.files, function(file){
                fd.append('file', file)
            })

            $http.post(url, fd, 
            {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).success(function(data){
                //Passing data to deferred's resolve function on successful completion
                console.log(data)
                console.log ('url: ' + url);
                $scope.ideamodel.description = $scope.content + "+" + data.url;
                   ideaService.postIdea($scope.ideamodel)
                    .then(function(data) {
                        notification.success("Idea posted");
                    }, function(error) {
                        notification.error("Could not post your idea." + error);                    
                    });                 
            }).error(function(error){
                console.log(error)
                //Sending a friendly error message in case of failure
            });
        }

    }],

    link: function(scope, elem, attrs) {
    }
  };
}])



/*.directive('fileInput', ['$parse', function($parse){
    return {
        restrict: 'A', 
        link: function(scope,elm,attrs) {
            elm.bind('change', function(){
               $parse(attrs.fileInput) 
               .assign(scope, elm[0].files)
                scope.$apply()
            })
        }
    }
}])*/



