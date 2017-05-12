var app = angular.module("ZoeApp", []);


app.controller("ItemCtrl", ($scope) => {
	$scope.food = "Yummy!";
	$scope.showListView = true;
	$scope.items = [
        {
          id: 0,
          food: "donuts"
        },
        {
          id: 1,
          food: "pizza"
        },
        {
          id: 2,
          food: "skittles"
        }
      ];

$scope.newItem = () => {
		$scope.showListView = false;
	};	


$scope.allItems = () => {
		$scope.showListView = true;
	};

});
