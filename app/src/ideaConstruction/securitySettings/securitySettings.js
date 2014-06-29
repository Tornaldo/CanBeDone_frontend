
angular.module('cbdIdeaConstruction').directive('securityPanel', [ function() {
    return {
        restrict: 'AE',
        scope: 
        	'securityModel'
        ,
        templateUrl: 'src/ideaConstruction/securitySettings/accessControlForm.tpl.html',
        link: function(scope, element, attrs) {
            scope.isRestrictedSelected = false;

            scope.showOptionsForRestricted = function(show) {

	      		scope.isRestrictedSelected = show;
		        if(show == false) {
		            scope.securityModel = {};

		        }
		    };
        }
    };
}
]);