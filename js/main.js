/**
 *  Web Application
 */
var app = angular.module('kskowronskiWebApp', [
  'ngRoute'
]);

//my01
app.controller('ApplicationCtrl', function ($scope) {
   $scope.name = '...';
    
    $scope.sayHelloWorld = function () {
        $scope.name = 'World';
    };
});