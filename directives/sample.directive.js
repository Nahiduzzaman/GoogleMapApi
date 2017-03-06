(function(angular) {
'use strict';
	
	angular.module('starterApp')
		.directive('sampleDirective', factory);
		    function factory() {
		    	return {
				    templateUrl: 'views/templates/sample.template.html'
				}
		    }

})(window.angular);