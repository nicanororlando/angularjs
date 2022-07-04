const app = angular.module("controllers", []);

app.controller("myCtrl", ($scope) => {
  $scope.firstname = "John";
  $scope.changeName = () => {
    $scope.firstname = "Nelly";
  };
});

app.controller("myCtr2", ($scope) => {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.fullName = () => {
    return $scope.firstName + " " + $scope.lastName;
  };
});

app.run(($rootScope) => {
  $rootScope.firstName = "Nabucodonosor";
  $rootScope.lastName = "Kirchner";
  $rootScope.fullName = () => {
    return $rootScope.firstName + " " + $rootScope.lastName;
  };
});
