'use strict';

//angular.module('ksApp', ['ngRoute']);
// Declare app level module which depends on filters, and services
var app = angular.module('ksApp', ['ngRoute','ksApp.services', 'ksApp.controllers']).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/FZPimport', {templateUrl: 'partials/FZPimport.html'});
    $routeProvider.when('/user-list', {templateUrl: 'partials/user-list.html', controller: 'UserListCtrl'});
    $routeProvider.when('/user-detail/:id', {templateUrl: 'partials/user-detail.html', controller: 'UserDetailCtrl'});
    $routeProvider.when('/user-creation', {templateUrl: 'partials/user-creation.html', controller: 'UserCreationCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);




