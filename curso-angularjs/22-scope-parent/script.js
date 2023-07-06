const app = angular.module("scope", []);

app.controller("manualCtrl", function ($scope) {
  $scope.nombre = "Canor";
});
app.controller("articuloCtrl", function ($scope) {
  $scope.nombre = "Nabucodonosor";
});
app.controller("comentariosCtrl", function ($scope) {
  $scope.nombre = "Alberto";
});
