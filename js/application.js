'use strict';
var app = angular.module('app', ['ngRoute','controllersUsers']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){


$routeProvider.when('/',{

	controller: 'users',
	templateUrl: 'partials/users.html'
})

}]);