angular.module('cbdFaq' )
.controller('FaqFormCtrl', ['$scope', 'ideaService', '$routeParams',
function ($scope, ideaService, $routeParams) {
    $scope.faq = [{question: "", answer: ""}];
    $scope.submitFaq = function() {
        var ideaId = $routeParams.ideaId;
        ideaService.postFaq(ideaId, $scope.faq)
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
