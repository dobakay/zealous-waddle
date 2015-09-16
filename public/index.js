var App = angular.module('App', []);

App.controller('TableCtrl', function($scope, $http) {
	$http.get('table.json')
		.then(function(res){
			$scope.table = res.data;
			$scope.tableColumnNames = res.data['columns'];
			$scope.tableRecords = res.data['records'];
		});
});
