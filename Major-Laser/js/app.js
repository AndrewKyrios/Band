'use strict';
var BASE_URL = 'https://api.soundcloud.com'; //website we fetch information from
var CLIENT_ID = '6264914141bfe065e89766a38d704dfd' //application ID for requests

angular.module('MajorLazerApp', ['ngSanitize', 'ui.router', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home', 
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
	 (function(){
      var DEFAULT = 50;
      var widgetIframe = document.getElementById('sc-widget'),
        widget = SC.Widget(widgetIframe);
        widget.bind(SC.Widget.Events.READY, function() {
        widget.bind(SC.Widget.Events.PLAY, function() {
        widget.getCurrentSound(function(currentSound) {
        console.log('sound ' + currentSound.get('') + 'began to play');
        });
      });
      widget.getVolume(function(volume) {
        console.log('current volume value is ' + volume);
      });
      widget.setVolume(50);
      });

  }());		
}])
.controller('ConcertsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.sortBy = 'date';
    $http.get('data/concert.json').then(function(response){
    $scope.concerts = response.data;
   });
}])
.controller('galleryCtrl', ['$scope', '$http', function($scope, $http) {
}])
.controller('NavbarCtrl', ['$scope', '$http', function($scope, $http) {
   $scope.navbarCollapsed = true;
}])


