var testingApp = angular.module('testingApp', []);

testingApp.controller('aviCtrl', function($rootScope, $scope){
    $scope.title = "Testing AngularJS Applications.";
});