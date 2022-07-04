"use strict";

const app = angular.module("listaTareasYeomanApp");

app.controller("MainCtrl", function ($scope, localStorageService) {
  var tareasEnAlmacen = localStorageService.get("tareas");
  $scope.tareas = (tareasEnAlmacen && tareasEnAlmacen.split("\n")) || [];
  $scope.$watch(
    "tareas",
    function () {
      localStorageService.add("tareas", $scope.tareas.join("\n"));
    },
    true
  );
  $scope.addTarea = function () {
    $scope.tareas.push($scope.tarea); // Añadimos la tarea del ng-input
    $scope.tarea = "";
  };
  $scope.eliminarTarea = function (index) {
    $scope.tareas.splice(index, 1);
  };
});
