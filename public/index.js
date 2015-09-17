'use strict';

var App = angular.module('App', []);

App.controller('TableCtrl', function($scope, $http) {
	$http.get('table.json')
		.then(function(res){
			$scope.table = res.data;
			$scope.tableColumnNames = res.data['columns'];
			$scope.tableRecords = res.data['records'];

			$scope.currentPage = res.currentPage;
			$scope.pageSize = res.recordsPerPage;

			$scope.order = res.orderBy;

			$scope.numberOfPages=function(){
					return Math.ceil($scope.tableRecords.length/$scope.pageSize);
			}
		});
});

App.filter('startFrom', function() {
		return function(input, start) {
				start = +start; //parse to int
				return input.slice(start);
		}
});
