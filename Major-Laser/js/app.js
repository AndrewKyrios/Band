'use strict';
var BASE_URL = 'https://api.soundcloud.com'; //website we fetch information from
var CLIENT_ID = '6264914141bfe065e89766a38d704dfd' //application ID for requests

angular.module('MajorLazerApp', ['ngSanitize', 'ui.router'])

.config(function($stateProvider){
	$stateProvider
		.state('home', {
			url: '/', 
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl'
		})
		 .state('tour', {
		 	url: '/tour',
			templateUrl:'partials/tour.html',
			controller: 'ConcertsCtrl'
		})	
		.state('gallery', {
		 	url: '/gallery',
		 	templateUrl: 'partials/gallery.html',
		 	controller: 'galleryCtrl'
		})		
})
.controller('homeCtrl', ['$scope', '$http', function($scope, $http) {

	 // + '&q=' + "Major Lazer"; //build the RESTful request
 //      $scope.getTracks = function() {
 //      $http.get(request).then(function (response) {
 //          $scope.tracks = response.data; //save results to available model
 //        });

 //    };

  //   $scope.play= function(){
  //   	var tracks = {};
  //   	var request = BASE_URL + '/playlists' + '?' +'client_id='+ CLIENT_ID;
  //   	$http.get(request).then(function (response) {
  //   	  var index = 0;
  //         tracks = response.data; //save results to available model
  //         console.log(tracks);

  //       });

  //   	SC.initialize({
  // 		client_id: CLIENT_ID
  		
		// });
		// or add a json with songs' ids!
   //  	for(var i = 0; i < tracks.length; i++){
   //  		var track = tracks[i];
   //  		SC.stream('/tracks/' +  track.id).then(function(player){
  	// 			player.play();
			// });	
   //  	}
    	(function(){
                    var DEFAULT = 50;
                    var widgetIframe = document.getElementById('sc-widget'),
                     widget = SC.Widget(widgetIframe);

                    widget.bind(SC.Widget.Events.READY, function() {
                    widget.bind(SC.Widget.Events.PLAY, function() {
        // get information about currently playing sound
                    widget.getCurrentSound(function(currentSound) {
                    console.log('sound ' + currentSound.get('') + 'began to play');
                    });
                });
            // get current level of volume
                widget.getVolume(function(volume) {
                console.log('current volume value is ' + volume);
            });
             widget.setVolume(50);
      // set new volume level
      // get the value of the current position
            });

        }());
		
	//};

}])
.controller('ConcertsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.sortBy = 'date';

   $http.get('data/concert.json').then(function(response){
        console.log(response.data)
        $scope.concerts = response.data;
   });

}])
.controller('galleryCtrl', ['$scope', '$http', function($scope, $http) {

}])


