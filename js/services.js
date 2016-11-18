
/* Services http://localhost:port  port: ':40884'
*
*
* */

var services = angular.module('ksApp.services', ['ngResource']);

services.factory('dataService', function($http) {
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

services.factory('UsersFactory', function ($resource) {
    console.log("UsersFactory start")
    return $resource(' /napFzpStatOrlBP_Rest/napFZP/napuzytkownik', {}, {
        query: { method: 'GET', interceptor : {responseError : resourceErrorHandler}, isArray: true },
        create: { method: 'POST' }
    }, {
        stripTrailingSlashes: false
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