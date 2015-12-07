'use strict';

angular.module('example366', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {
 
    // Set of Photos
    $scope.photos = [
        {src: 'angularimg/cover1.jpg', desc: 'Image 01'},
        {src: 'angularimg/allmylove.jpg', desc: 'Image 02'},
        {src: 'angularimg/grouppic.jpg', desc: 'Image 03'},
        {src: 'angularimg/head.jpg', desc: 'Image 04'},
        {src: 'angularimg/leanon.jpg', desc: 'Image 05'},
        {src: 'angularimg/ml1.jpg', desc: 'Image 06'},
        {src: 'angularimg/ml2.jpg', desc: 'Image 07'},
        {src: 'angularimg/louder.jpg', desc: 'Image 08'}
    ];
 
    // initial image index
    $scope._Index = 0;
 
    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
 
    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
 
    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };
 
    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});