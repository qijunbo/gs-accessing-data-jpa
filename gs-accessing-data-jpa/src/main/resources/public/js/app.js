'use strict';

/* App Module */

var deviceApp = angular.module('deviceApp', [
    'ngRoute',     
    'deviceControllers' ,
    'deviceServices'
]);

deviceApp.directive("w3TestDirective", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});

deviceApp.config(['$routeProvider', '$locationProvider',   
    function($routeProvider, $locationProvider) {

        $routeProvider.
                when('/ionic', {
                    templateUrl:'partials/ionic.html',
                    controller: 'getChargePointController'
                }).when('/', {
                    templateUrl: 'partials/devices.html',
                    controller: 'listChargePointController'
                }).when('/save/:id', {
                    templateUrl: 'partials/notify.html',
                    controller: 'saveChargePointController'
                });

        $locationProvider.html5Mode(false).hashPrefix('!');
    } ]);

 
