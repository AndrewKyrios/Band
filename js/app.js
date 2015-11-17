'use strict';
var myApp = angular.module('myApp', [])
  .controller('MyCtrl', ['$scope', '$http', function($scope, $http) { 
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

}])