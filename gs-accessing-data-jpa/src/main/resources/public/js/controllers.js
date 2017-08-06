'use strict';

/* Controllers */

var deviceControllers = angular.module('deviceControllers', []);

deviceControllers.controller('deviceInitController', [ '$scope',   
		function deviceInitController($scope) {
			// when user click the new button, try to input the charge point
			// information
			$scope.onNewButtonClick = function() {
				$scope.chargepoint = {
					"version" : "OCPP15",
					"centralURL" : "http://willow:7080/ocppservice/",
					"connectors" : [ {
						"id" : 0,
						"status" : "Available"
					} ]
				};
			};

			// when user click the edit button, going to edit, but not yet save.
			$scope.onEditClick = function(item) {
				$scope.chargepoint = item;
			};
			 
		} ]);

deviceControllers.controller('listChargePointController', [ '$scope', 'chargePointService', 
		function listChargePointController($scope, chargePointService) {
			$scope.cps = [];
			chargePointService.get({}, function success(response) {
				
				console.log("listChargePoint Success:" + JSON.stringify(response));
				$scope.cps = response;

			}, function error(errorResponse) {
				alert("error");
				console.log("Error:" + JSON.stringify(errorResponse));
			});

		} ]);

deviceControllers.controller('saveChargePointController', [ '$scope', 'chargePointService', 
		function saveChargePointController($scope, chargePointService) {
			var chargepoint = {
					"version" : "OCPP15",
					"serial": "test",
					"centralURL" : "http://willow:7080/ocppservice/",
					"connectors" : [ {
						"id" : 0,
						"status" : "Available"
					} ]
			};
			chargePointService.save({}, chargepoint, function success(response) {
				
				console.log("saveChargePoint Success:" + JSON.stringify(response));
				$scope.cps = response;

			}, function error(errorResponse) {
				alert("error");
				console.log("Error:" + JSON.stringify(errorResponse));
			});

		} ]);

deviceControllers.controller('getChargePointController', [ '$scope', '$routeParams', 'chargePointIdService',
		function getChargePointController($scope, $routeParams, chargePointIdService) {
			var deviceId = $routeParams.id;
			$scope.chargepoint = {};
			alert("getChargePoint");
			chargePointIdService.get({
				id : deviceId
			}, function success(response) {

				console.log("getChargePoint Success:" + JSON.stringify(response));
				$scope.chargepoint = response;

			}, function error(errorResponse) {
				console.log("Error:" + JSON.stringify(errorResponse));
			});

		} ]);

 

deviceControllers.controller('timeController', [ '$scope',  '$timeout',
		function timeController($scope, $timeout) {
			var updateClock = function() {
				$scope.clock = new Date();
				$timeout(function() {
					updateClock();
				}, 2000);
			};
			updateClock();

		} ]);