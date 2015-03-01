angular.module('cbdFaq' )
.controller('FaqFormCtrl', ['$scope', 'ideaService', '$routeParams', 'ideaId', 'notification',
function ($scope, ideaService, $routeParams, ideaId, notification) {
    $scope.faq = [{question: "", answer: ""}];
    $scope.ideaId = ideaId;
    
    $scope.submitFaq = function() {
        ideaService.postFaq($scope.ideaId, $scope.faq)
        .then(function(success) {
        	notification.success("FAQ posted");
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
