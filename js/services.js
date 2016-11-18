
/* Services
*services.factory('dataService', function($http) {
 console.log("dataService start")
 delete $http.defaults.headers.common['X-Requested-With'];

 this.getData = function() {
 $http({
 method: 'GET',
 url: 'http://localhost:40884/napFzpStatOrlBP_Rest/napFZP/napuzytkownik'
 }).success(function(data){
 console.log(data);
 // return data;
 }).error(function(){
 alert("error");
 });
 }
 });
*
* */

var services = angular.module('ksApp.services', ['ngResource']);

var url = 'http://localhost:40884';

services.factory('UsersFactory', function ($resource) {
    console.log("UsersFactory start")
    return $resource( url + '/napFzpStatOrlBP_Rest/napFZP/napuzytkownik', {port: ':40884'}, {
        query: { method: 'GET', interceptor : {responseError : resourceErrorHandler}, isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('UserFactory', function ($resource) {
    return $resource('/napFzpStatOrlBP_Rest/napFZP/napuzytkownik/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

function resourceErrorHandler(response) {
    console.log(response)
};