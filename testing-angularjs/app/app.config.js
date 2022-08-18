"use strict";

angular.module("app").config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    $routeProvider
      .when("/", {
        template: "<view1></view1>",
      })
      .when("/view2", {
        template: "<view2></view2>",
      })
      .otherwise("/");
  },
]);
