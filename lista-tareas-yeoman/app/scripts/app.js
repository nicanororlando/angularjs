"use strict";

/**
 * @ngdoc overview
 * @name listaTareasYeomanApp
 * @description
 * # listaTareasYeomanApp
 *
 * Main module of the application.
 */
angular
  .module("listaTareasYeomanApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "ui.sortable",
    "LocalStorageModule",
  ])
  .config([
    "localStorageServiceProvider",
    function (localStorageServideProvider) {
      localStorageServideProvider.setPrefix("ls");
    },
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main",
      })
      .otherwise({
        redirectTo: "/",
      });
  });
