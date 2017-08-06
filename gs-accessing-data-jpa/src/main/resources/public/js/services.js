'use strict';

/* Services */

var deviceServices = angular.module('deviceServices', ['ngResource']);

deviceServices.factory('chargePointIdService', ['$resource',
    function($resource) {
		
        return $resource("http://5.10.70.180:88/chargepoint/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

 
deviceServices.factory('chargePointService', ['$resource',
  function($resource) {
	 
	  return $resource("http://5.10.70.180:88/chargepoint", {}, {
		  get: {method: 'GET', cache: false, isArray: true} ,
		  save: {method: 'POST', cache: false, isArray: false},
		  update: {method: 'PUT', cache: false, isArray: false}
					 
	  });
  }]);
 