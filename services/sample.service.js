(function(angular) {
'use strict';
	
	angular.module('starterApp')
		.service('SampleService', constructor);
		    function constructor() {
		    	/*var teamList = ['South Africa',	'Australia', 'New Zealand', 'India', 'England',	'Sri Lanka',
		    					'Bangladesh', 'Pakistan', 'West Indies', 'Afghanistan' , 'Zimbabwe', 'Ireland']
				function getTeams(){
			        return teamList
			    };*/

			    function createMap(htmlReferenceId,center) {
		            var mapOptions = {
		                zoom: 4,
		                center: center,
		                zoomControl: false,
		                scaleControl: false,
		                mapTypeControl: false,
		                streetViewControl: false,
		                styles: null
		            }

		            var map = new google.maps.Map(document.getElementById(htmlReferenceId), mapOptions);
		            return map;
		        }

		        function createMarker(geoCoordinate,type){
		        	var marker = new google.maps.Marker({
			          position: geoCoordinate,
			          map: type
			        });
			        return marker;
		        }

		        function createAutoCompletePlaceSearchBox(htmlRefId, onAutoCompletePlaceSearchBox) {
		            var autoCompletePlaceSearchBox = new google.maps.places.Autocomplete(document.getElementById(htmlRefId), {
		                componentRestrictions: null
		            });
		            onAutoCompletePlaceSearchBox(autoCompletePlaceSearchBox);
		        }

			    //this.getTeams = getTeams;
			    this.createMap = createMap;
			    this.createMarker = createMarker;
			    this.createAutoCompletePlaceSearchBox = createAutoCompletePlaceSearchBox; 
		    }//End of constructor

})(window.angular);