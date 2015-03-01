angular.module('cbdFaq' )
.controller('FaqFormCtrl', ['$scope', 'ideaService', '$routeParams', 'ideaId', 'notification', '$location',
function ($scope, ideaService, $routeParams, ideaId, notification, $location) {
    $scope.faq = [{question: "", answer: ""}];
    $scope.ideaId = ideaId;
    
    $scope.submitFaq = function() {
        ideaService.postFaq($scope.ideaId, $scope.faq)
        .then(function(success) {
        	notification.success("FAQ posted");
            $location.path('/idea/' + $scope.ideaId  + '/');
        }, function(error) {
        	console.log(error);
        });
    };

    $scope.addQuestionAnswer = function() {
        $scope.faq.push({question: "", answer: ""});
    }

    $scope.removeQuestionAnswer = function(idx) {
    	$scope.faq.splice(idx, 1);
    }
}])
