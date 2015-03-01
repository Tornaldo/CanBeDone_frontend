angular.module('cbdProject')
.controller('ProjectFormPageCtrl', ['$scope', 'ideaId',
function ($scope, ideaId) {
    $scope.idea = {};
    $scope.idea.id = ideaId;
}])

.controller('ProjectFormCtrl', ['$scope', 'ideaService', 'notification', '$location', 'categoryService',
function ($scope, ideaService, notification, $location, categoryService) {
    $scope.project = {};
    $scope.project.skillIds = [];
    $scope.ideaId = $scope.$parent.idea.id;
    //TODO: Make template and controller into a directive.
    
    $scope.submitProject = function() {
        /*ideaService.postFaq($scope.ideaId, $scope.faq)
        .then(function(success) {
            notification.success("FAQ posted");
            $location.path('/idea/' + $scope.ideaId  + '/');
            if($scope.$parent.faq) {
                $scope.$parent.faq.push.apply($scope.$parent.faq, $scope.faq)
            }
            $scope.faq = [{question: "", answer: ""}];
        }, function(error) {
            console.log(error);
        });*/
    };

     $scope.getMainSkills = function() {
        return categoryService.getMainSkills()
    };

    $scope.getSkillSubcategory = function(cid) {
        return categoryService.getSkillSubcategory(cid);
    };
}])