var app = angular.module("includes", []);

app.controller("customersCtrl", ($scope, $http) => {
  $http
    .get("https://www.w3schools.com/angular/customers.php")
    .then((response) => {
      $scope.names = response.data.records;
    });
});
