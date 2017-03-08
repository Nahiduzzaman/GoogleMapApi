(function (angular) {
'use strict';

	angular.module('starterApp')
	    .controller('mapController', constructor);
	    	constructor.$inject = ['SampleService','$scope','$timeout','$document'];
	    	function constructor(SampleService,$scope,$timeout,$document) {
	    		var vm = this;

	    		var googleMapGeoComponentsRef = {
		            Map: null,
		            ZoomControl: null,
		            LocationTrackerControl: null,
		            AutoCompletePlaceSearchBox: null,
		            DefaultTunnelConstructionSites: [],
		            Polylines: [],
		            ConstructionSiteCircle: null,
		            GeoFenceCircle: null,
		            ZoneMarkers: [],
		            VendorMarkers: [],
		            infoWindow: {
		                'constructionSite': null,
		                'zone': null,
		                'vendor': null,
		                'geoFence': null
		            }
		        }

	    		var geoPosition = {lat: 37.09, lng: -95.71}; //usa

                googleMapGeoComponentsRef["Map"] = SampleService.createMap('map',geoPosition);                
                SampleService.createMarker(geoPosition,googleMapGeoComponentsRef["Map"]);

                vm.placeSearchWithButtonClick = placeSearchWithButtonClick;
		        function placeSearchWithButtonClick() {
		            var searchboxText = document.getElementById('location-search').value;
		            console.log(searchboxText);
		            var geocoder = new google.maps.Geocoder();
		            geocoder.geocode({ "address": searchboxText }, function (data) {
		                if (data.length > 0) {
		                    var lat = data[0].geometry.location.lat();
		                    var lng = data[0].geometry.location.lng();
		                    var origin = new google.maps.LatLng(lat, lng);
		                }
		            });
		        }

		        function addressAutoCompleteEventHandler() {
		            //smartCityGmapService.removeMarkers(googleMapGeoComponentsRef["DefaultTunnelConstructionSites"]);

		            var searchedPlace = googleMapGeoComponentsRef["AutoCompletePlaceSearchBox"].getPlace();
		            console.log(searchedPlace);
		            /*var latlng = smartCityGmapService.getGeoLocationCoordinate(searchedPlace.geometry.location);

		            if (searchedPlace.photos) {
		                vm.searchedLocationPhoto = searchedPlace.photos[0].getUrl({ 'maxWidth': 407, 'maxHeight': 260 });
		            }
		            else {
		                vm.searchedLocationPhoto = "http://maps.gstatic.com/tactile/pane/default_geocode-1x.png";
		            }*/
		            marker.setPosition(searchedPlace.geometry.location);
          			marker.setVisible(true);

		            var latlng = { lat: 47.3820158, lng: 8.566346299999964 };
		            googleMapGeoComponentsRef["Map"].setZoom(15);
		            googleMapGeoComponentsRef["Map"].setCenter(latlng);
		            

		           /* smartCityDataService.getDataForTunnelConstructionSite(latlng, function (tunnelConstructionSiteData) {
		                vm.tunnelConstructionSiteData = tunnelConstructionSiteData;
		                constructRelatedGeoShapesFromTunnelConstructionSearch(tunnelConstructionSiteData);
		                createNewPolyLines();
		            });*/


		            /*vm.sideBarViewConfig["constructionSiteInfoPanelView"] = viewElement.show;
		            vm.activateManipulatorPanel = true;
		            $scope.$apply();*/

		        }

		        function removeSearchPlaceText() {
		            document.getElementById("location-search").value = "";

		            removeMapComponents();

		            var viewOptions = {
		                basicInfoPanel: viewElement["hide"],
		                analyticsPanel: viewElement["hide"]
		            }
		            setViewElementConfig(viewOptions);

		            var analyticsPanelButtonViewOptions = {
		                hideAnalyticsPanelButton: viewElement["hide"],
		                showAnalyticsPanelButton: viewElement["hide"]
		            }
		            setAnalyticsPanelButtonViewConfig(analyticsPanelButtonViewOptions);

		            googleMapGeoComponentsRef["Map"].setCenter({ lat: 47.38823908272229, lng: 8.48196029663086 });
		            googleMapGeoComponentsRef["Map"].setZoom(13);

		            setMarkerOnMapForExistingTunnelConstructionSites();
		        }
		        vm.removeSearchPlaceText = removeSearchPlaceText;

		        SampleService.createAutoCompletePlaceSearchBox('location-search', function (autoCompletePlaceSearchBoxObj) {
	                autoCompletePlaceSearchBoxObj.bindTo('bounds', googleMapGeoComponentsRef["Map"]);
	                autoCompletePlaceSearchBoxObj.addListener('place_changed', addressAutoCompleteEventHandler);
	                googleMapGeoComponentsRef["AutoCompletePlaceSearchBox"] = autoCompletePlaceSearchBoxObj;
	            });	 
	        	
	    	}

})(window.angular);