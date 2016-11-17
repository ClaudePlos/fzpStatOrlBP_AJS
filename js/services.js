
/* Services */

var services = angular.module('ksApp.services', ['ngResource']);

services.factory('UsersFactory', function ($resource) {
    return $resource(' http://localhost:port/napFzpStatOrlBP_Rest/napFZP/napuzytkownik', {port: ':40884'}, {
        query: { method: 'GET', isArray: true },
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