'use strict';


var myApp = angular.module('myApp','myApp.directive', [])
.controller('MyCtrl', ['$scope', '$http','$setValidity', function($scope, $http, $setValidity) { 
    $scope.userInfo = {};
    $scope.userInfo.birthdate = Date.parse(userSignUp.birthdate); 
    $scope.success = false;
    $scope.reset = function(userSignUp){
    if(userSignUp.$setPristine){
        userSignUp.$setPristine();
    } else {
        userSignUp.$pristine = true;
        userSignUp.$dirty = false;
        angular.forEach(userSignUp, function (input, key) {
    if (input.$pristine)
        input.$pristine = true;
    if (input.$dirty) {
        input.$dirty = false;
            }
        });
    }
};
    $scope.signUp = function(userSignUp){
    $scope.success = true;
    alert('success');
};
.directive('pwCheck', [function () {
                    return {
                    require: 'ngModel',
                    link: function (scope, elem, attrs, ctrl) {
                    var firstPassword = '#' + attrs.pwCheck;
                    elem.add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
}])
//Initial app.js





//Initial app.js
