const app = angular.module("forms", []);

app.controller("formCtrl", ($scope) => {
  $scope.master = { firstName: "canor", lastName: "orli" };
  $scope.reset = () => {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();
});
