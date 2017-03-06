(function (angular) {
'use strict';
	
	angular.module('starterApp')
		.controller('homeController', constructor);
		    constructor.$inject = ['$stateParams','SampleService','$scope','$window','$state'];
		    function constructor($stateParams,SampleService,$scope,$window,$state) {
		    	var vm = this;
		    	$scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			    $scope.series = ['Series A', 'Series B'];
			    $scope.data = [
			    	[0, 59, 20, 81, 56, 55, 40, 28, 48, 40, 19, 86],
			    	[28, 48, 40, 19, 86, 27, 90, 65, 59, 20, 81, 56]
			  	];
			  	$scope.onClick = function(points, evt) {
			    	console.log(points, evt);
			  	};
			  	$scope.datasetOverride = [
			  		{
			    		yAxisID: 'y-axis-1',
			    		label: "Pink Stuff",
					    fill: false,
					    lineTension: 0.0,
					    borderColor: "rgba(255,105,180,0.4)",
					    backgroundColor: "rgba(255,105,180,0.3)",
					    pointBorderColor: "rgba(255,228,225,1)",
					    pointBackgroundColor: "rgba(255,105,180,1)",
			  		}, 
			  		{
				    	yAxisID: 'y-axis-2',
				    	fill: false,
					    lineTension: 0.0,
					    borderColor: "rgba(0,255,0,1.0)",
					    backgroundColor: "rgba(255,105,180,0.3)",
					    pointBorderColor: "rgba(255,228,225,1)",
					    pointBackgroundColor: "rgba(0,255,0,1.0)",
					}
				];

				$scope.options = {
				    scales: {
				      yAxes: [{
				        id: 'y-axis-1',
				        type: 'linear',
				        display: true,
				        position: 'left',
				        gridLines: {
	                        display:false
	                    }
				      }, {
				        id: 'y-axis-2',
				        type: 'linear',
				        display: false,
				        position: 'right',
				        gridLines: {
	                        display:false
	                    }
				      }],
				      xAxes : [ {
			            gridLines : {
			                display : false
			            }
				      }] 
				    }

            	}
			
			}

})(window.angular);