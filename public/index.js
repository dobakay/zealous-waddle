(function () {
	'use strict';

var App = angular.module('App', []);

App.controller('TableCtrl', function($scope, $http) {
	$http.get('table.json')
		.then(function(res){
			$scope.tableColumnNames = res.data['columns'];
			$scope.tableRecords = res.data['records'];

			$scope.currentPage = res.data['currentPage'];
			$scope.pageSize = res.data['recordsPerPage'];

			$scope.order = res.data['orderBy'];

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

})();
