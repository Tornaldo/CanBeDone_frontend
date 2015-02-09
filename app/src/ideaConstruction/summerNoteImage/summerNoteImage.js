angular.module('cbdSummerNoteTest', ['ngCkeditor'])
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
          $scope.editorOptions = {
                language: 'ru'
               // uiColor: '#000000'
            };
          /*$scope.ideaDescriptionImage;
          $scope.clickidea = function(){
            console.log('$scope.title :' + $scope.idea.title);
            console.log('$scope.shortDescriptionWhat :' + $scope.idea.shortDescriptionWhat);
            console.log('$scope.shortDescriptionWhy :' + $scope.idea.shortDescriptionWhy);
            console.log('$scope.description :' + $scope.idea.description);
            console.log('$scope.ideaDescriptionImage :' + $scope.ideaDescriptionImage);      
          
CKEDITOR.on( 'pluginsLoaded', function() {
  editor.widgets.on( 'instanceCreated', function( evt ) {
    var widget = evt.data;

    if ( widget.name != 'image' )
      return;

    widget.on( 'data', function() {
      var alt = !!this.data.alt,
        captionEditable = this.editables.caption;

      // If alt is set and caption editable is already defined and its value equals
      // the placeholder's value (the default one) then set the alt as the value.
      if ( alt && captionEditable && ( captionEditable.getData() == editor.lang.image2.captionPlaceholder ) ) {
        this.editables.caption.setData( alt );
      }
    } );
  } );
} );
CKEDITOR.on( 'dialogDefinition', function( ev ) {
    // Take the dialog name and its definition from the event data
    var dialogName = ev.data.name,
        dialogDefinition = ev.data.definition;

    if ( dialogName == 'image') {
        var onOk = dialogDefinition.onOk;
        dialogDefinition.onOk = function( e ) {
          var input = this.getContentElement( 'info', 'txtUrl' ),
            imageSrcUrl = input.getValue();
            $scope.idea.description = imageSrcUrl;
            console.log(' idea:' + $scope.idea);      
            console.log(' imageSrcUrl:' + imageSrcUrl);      
            //! Manipulate imageSrcUrl and set it 
            input.setValue( imageSrcUrl );
            onOk && onOk.apply( this, e );  
        };
    }

    if (dialogName == 'image2') {        
            var infoTab = dialogDefinition.getContents('info');

            infoTab.add({
                type: 'text',
                width: '50px',
                label : 'Border Thickness',
                id : 'borderField',
                'default' : '0',
                validate : function()
                {
                    if ( /[^\d]/.test( this.getValue() ) )
                        return borderErrorMessage;
                }
            });

            var dialog = dialogDefinition.dialog;
            dialog.on('show', function () {
                var image = this.widget.parts.image;

                var borderField = this.getContentElement('info', 'borderField');

                //Using jQuery, I can get the border of the image.
                //You can use any other methods you prefer
                var borderWidth = $(image.$).css("border-left-width").replace(/[^\d]+/g, '');
                borderWidth = borderWidth ? borderWidth : 0;

                borderField.setValue(borderWidth);
            });
            dialog.on('ok', function () {
               var input = this.getContentElement( 'info', 'src' ),
                imageSrcUrl = input.getValue();

                var test = this.getContentElement( 'info', 'hasCaption' ),
                caption = test.getValue();
             //   var captionEditable = this.editables.caption;                
              //  console.log("somehting here caption: " + captionEditable);
              $scope.somefunt();
                console.log("somehting here imgsrc: " + imageSrcUrl);
                var image = this.widget.parts.image;
                console.log("image : " + image);
                var borderField = this.getContentElement('info', 'borderField');

                var newBorderWidth = borderField.getValue() + 'px';

                image.setStyle('border-style', 'solid');
                image.setStyle('border-width', newBorderWidth);
            });
        }  
});}*/




    }])




.directive('summerEditor', [ function() {
  return {
    restrict: 'AE',
    scope: {
      content: '=',
      ideamodel: '=',
    },

    template: '<summernote config="options" on-change="change(contents)" ng-model="content" id="ideaDescription" on-image-upload="imageUpload(files, editor)"  '+
            '></summernote>'+
                 '<br>'+
            '<button ng-click="add()">Add</button>'+
            '<br>'+
            '<li ng-repeat="file in files">{{file.name}}</li>',
    controller: ['$scope','config', '$http', 'ideaService', 'notification', function($scope, config, $http, ideaService, notification) {
        //TODO: Automatically delete font styling
      
    $scope.ideamodel.categoryIds = [];
      $scope.options = {
        height: 600,
        width: 800,
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
       $scope.imageUrls = [];
       $scope.imageUrlscounter = 0;
       $scope.imagCaption = [];
       $scope.imageCaptionCounter = 0;
       $scope.summerNoteContent = ''
        $scope.imageUpload = function(files, editor) {
          console.log('image upload:', files);
          $scope.files = files;  

          console.log("$scope.imagCaption: " + $scope.imagCaption);

         /* var file = files[0];
          var reader = new FileReader();
          reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            var bina= btoa(binaryString);
            $( ".note-editable" ).append("<table class='table' style='text-align: center; width:30%;'><tbody><tr><td><figure><img src=data:"+files[0].type+";base64,"+bina+ " class="+Math.random()+" /></td></tr><tr><td><figcaption><input value="+"caption"+" style='text-align: center;' type="+"text"+" class="+"par"+" ng-model="+"captiondf"+"></figcaption></td><figure></tr></tbody></table>");

              var bla= $('.caption-input').val();
              $( "input.par" )
                .keyup(function() {
                  var value = $( this ).val();
                  $scope.imagCaption = $( this ).val();
                  $( "p.disp" ).text( value );
                })
                .keyup();
          };
          reader.readAsBinaryString(file);*/
          $scope.getImageUrl();
        }

        $scope.change = function(contents) {
          $scope.summerNoteContent = contents;
          //console.log("contents : " + contents);
          //console.log("$scope.imagCaption : " + $scope.imagCaption);
        };

        $scope.getImageUrl = function(){
            var url = config.apiBaseUrl + 'files';
            $scope.imagCaption[$scope.imageCaptionCounter] = "caption";
            var fd = new FormData()
            angular.forEach($scope.files, function(file){
                fd.append('file', file)
            })
            console.log('url');
            $http.post(url, fd, 
            {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }).success(function(data){
                notification.success("Image posted");              
                $scope.imageUrls[$scope.imageUrlscounter] = data.url;
                $( ".note-editable" ).append("<table class='table' style='text-align: center; width:30%;'><tbody><tr><td><img src="+$scope.imageUrls[$scope.imageUrlscounter]+ " class="+Math.random()+" /></td></tr><tr><td><figcaption><span>Caption</span></figcaption></td></tr></tbody></table>");

                $scope.imageUrlscounter += 1;
                $scope.imageCaptionCounter +=1;
                console.log("$scope.imageUrls: " + $scope.imageUrls); 
                
                console.log("$scope.imagCaption: " + $scope.imagCaption); 

                            
            }).error(function(error){
              console.log(error)
              //Sending a friendly error message in case of failure
            });
        }

        $scope.add = function(){
          $scope.ideamodel.description = $scope.summerNoteContent;
          ideaService.postIdea($scope.ideamodel)
            .then(function(data) {
              notification.success("Idea posted");
           }, function(error) {
              notification.error("Could not post your idea." + error);                    
          });   
           /* var url = config.apiBaseUrl + 'files';

            var fd = new FormData()
            angular.forEach($scope.files, function(file){
                fd.append('file', file)
            })
            console.log('url');
            $http.post(url, fd, 
            {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }).success(function(data){
              //Passing data to deferred's resolve function on successful completion
              console.log(data)
              console.log ('url: ' + url);
              $scope.ideamodel.description =  data.url+ "+" + $scope.imagCaption;
              ideaService.postIdea($scope.ideamodel)
              .then(function(data) {
                notification.success("Idea posted");
              }, function(error) {
                notification.error("Could not post your idea." + error);                    
              });                 
            }).error(function(error){
              console.log(error)
              //Sending a friendly error message in case of failure
            });*/
        }

    }],

    link: function(scope, elem, attrs) {
    }
  };
}])



.directive('fileInput', ['$parse', function($parse){
    return {
        restrict: 'AE', 
        link: function(scope,elm,attrs) {
            elm.bind('change', function(){
               $parse(attrs.fileInput) 
               .assign(scope, elm[0].files)
                scope.$apply()
            })
        }
    }
}])



