var app = angular.module("ZoeApp", []);


app.controller("ItemCtrl", ($scope) => {
	$scope.showListView =false;
		$scope.items = [
        {
          favFood: false,
          food: "Tacos"
          // image: "http://i.amz.mshcdn.com/Q0DWc2Odlo3P-ZrsNoJ37sIvaCk=/1200x627/2015%2F05%2F26%2F95%2FPizzaHutmea.d0b39.jpg"
        },
        {
          favFood: false,
          food: "Pizza"
        },
        {
          favFood: true,
          food: "Donuts"
        },
        {
          favFood: true,
          food: "Cookies"
        },
        {
          favFood: true,
          food: "Pie"
        },
        {
          favFood: true,
          food: "Cherry Pie"
        },
        {
          favFood: true,
          food: "Apple Pie"
        },
        {
          favFood: true,
          food: "Did we mention Pie"
        },
      ];

$scope.newItem = () => {
		$scope.showListView = false;
	};	


$scope.zoeFood = () => {
		$scope.showListView = !$scope.showListView;
	};

});
