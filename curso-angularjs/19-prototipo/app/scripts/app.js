"use strict";

angular.module("prototipoApp", ["ngRoute"]).config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "views/main.html",
      controller: "MainCtrl",
      controllerAs: "main",
    })
    .when("/galeria", {
      templateUrl: "views/acumulador.html",
      controller: "AcumuladorCtrl",
      controllerAs: "acumulador",
    })
    .otherwise({
      redirectTo: "/",
    });
});
