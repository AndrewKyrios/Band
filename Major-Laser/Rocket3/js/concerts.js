'use strict';

angular.module('ConcertsApp', [])
.controller('ConcertsCtrl', ['$scope', '$http', function($scope, $http) {

   //controller initialization goes here

   $scope.sortBy = 'date';

   $http.get('data/concert.json').then(function(response){
        console.log(response.data)
        $scope.concerts = response.data;
   });
}]);