angular.module('cbdProject')
.controller('ProjectFormPageCtrl', ['$scope', 'ideaId',
function ($scope, ideaId) {
    $scope.idea = {};
    $scope.idea.id = ideaId;
}])