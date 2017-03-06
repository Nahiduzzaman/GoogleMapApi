(function (angular) {
'use strict';

	angular.module('starterApp')
	    .controller('aboutController', constructor);
	    	constructor.$inject = ['SampleService','$scope','$timeout','$document'];
	    	function constructor(SampleService,$scope,$timeout,$document) {
	    		var vm = this;

	    		var geoPosition = {lat: 37.09, lng: -95.71};
	    		
                var gmap = SampleService.createMap('map',geoPosition);                
                SampleService.createMarker(geoPosition,gmap);	 
	        	
	    	}

})(window.angular);