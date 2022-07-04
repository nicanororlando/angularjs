"use strict";

/**
 * @ngdoc function
 * @name 18PrimerProyectoYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 18PrimerProyectoYeomanApp
 */
angular
  .module("18PrimerProyectoYeomanApp")
  .controller("MainCtrl", function ($scope) {
    $scope.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma",
      "E2E",
      "Protractor",
    ];
  });
