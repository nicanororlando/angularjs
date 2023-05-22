const app = angular.module("select", []);

app.controller("myCtrl", ($scope) => {
  $scope.names = ["Emil", "Tobias", "Linus"];
});

app.controller("myCtrl2", ($scope) => {
  $scope.cars = [
    { model: "Ford Mustang", color: "red" },
    { model: "Fiat 500", color: "white" },
    { model: "Volvo XC90", color: "black" },
  ];
});

app.controller("myCtrl3", ($scope) => {
  $scope.cars = {
    car01: { brand: "Ford", model: "Mustang", color: "red" },
    car02: { brand: "Fiat", model: "500", color: "white" },
    car03: { brand: "Volvo", model: "XC90", color: "black" },
  };
});
