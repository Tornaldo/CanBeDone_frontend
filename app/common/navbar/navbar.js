<<<<<<< HEAD
angular.module('cbdCommon')
	.controller('headerCtrl', function($scope, $location) {
=======
angular.module('cbdCommon', ['ui.bootstrap'])
	.controller('headerCtrl', function($scope, $location, cbdShared) {
>>>>>>> origin/zak
	    $scope.sidebar = false;

	    $scope.toggeSidebar = function() {
	        $scope.sidebar = !$scope.sidebar;
	    }
	    $scope.isActive = function (viewLocation) {
	        return viewLocation === $location.path();
	    };

<<<<<<< HEAD
	    $scope.searchForIdeasNav = function(searchnav) { 
			 $location.path('/browse').search({search: searchnav});
	    };


	});
=======
		$scope.searchForIdeasNav = function(searchnav) {
	        cbdShared.broadcastinput(searchnav);
	    };

	});



>>>>>>> origin/zak
