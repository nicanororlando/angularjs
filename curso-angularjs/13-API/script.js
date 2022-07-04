const app = angular.module("api", []);

app.controller("myCtrl", ($scope) => {
  $scope.x1 = "Jhon";
  $scope.isString = angular.isString($scope.x1);
  $scope.isNumber = angular.isNumber($scope.x1);
});
