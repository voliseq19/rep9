'use strict';
var controllersUsers = angular.module('controllersUsers',[]);


controllersUsers.controller( 'users' , [ '$scope' , '$http' , function( $scope , $http ){
	$http.get( 'data/users.json' ).
	success( function( data ){
		$scope.users = data;
	}).error( function(){
		console.log( 'Błąd pobrania pliku json' );
	});

		$scope.delete = function ( user , $index ) {

		if ( !confirm( 'Want to delete ' + user.name + ' ' + user.surname + '?') )
			return false;

		$scope.users.splice( $index , 1 );
	}

}]);