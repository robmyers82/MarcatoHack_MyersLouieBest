angular.module('starter.DashCtrl', [])

.controller('DashCtrl', function($scope, $cordovaGeolocation, Auth, Event) {
	var options = {timeout: 10000, enableHighAccuracy: true};

	$cordovaGeolocation.getCurrentPosition(options).then(function(position){

		var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

		var mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

		google.maps.event.addListenerOnce($scope.map, 'idle', function(){

			var marker = new google.maps.Marker({
				map: $scope.map,
				animation: google.maps.Animation.DROP,
				position: latLng
			});

		});

	}, function(error){
		console.log("Could not get location");
	});
  $scope.joinEvent = function(){
    console.log('will join the event here');
    //create an event
    //Event.attendEvent()
  }

  $scope.addEvent = function(){
    console.log('adding Event');
  }
})
