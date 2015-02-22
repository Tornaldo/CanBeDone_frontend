angular.module('cbdFaq' )
.controller('FaqFormCtrl', ['$scope', 'ideaService', '$routeParams', 'ideaId',
function ($scope, ideaService, $routeParams, ideaId) {
    $scope.faq = [{question: "", answer: ""}];
    $scope.ideaId = ideaId;

    $scope.submitFaq = function() {
        ideaService.postFaq($scope.ideaId, $scope.faq)
        .then(function(success) {
        	console.log(success);
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
