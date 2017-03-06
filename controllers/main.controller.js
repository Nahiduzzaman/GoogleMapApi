(function (angular) {
'use strict';
	
	angular.module('starterApp')
		.controller('mainController', constructor);
		    constructor.$inject = ['$stateParams','SampleService','$scope','$window','$state','$mdSidenav'];
		    function constructor($stateParams,SampleService,$scope,$window,$state,$mdSidenav) {
		    	var vm = this;
		    	vm.name = 'Nahiduzzaman Rose';
		    	vm.toggleList   = toggleSideList;

		    	function toggleSideList() {
			     	$mdSidenav('left').toggle();
			     	console.log('hello')
			   	}
		    }

})(window.angular);