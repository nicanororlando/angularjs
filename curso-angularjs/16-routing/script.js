// Añadimos la dependencia "ngRoue":
const app = angular.module("routing", ["ngRoute"]);

// Ahora nuestra aplicacion tiene acceso al modulo de las rutas '$routeProvider'.
app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "main.html",
    })
    .when("/london", {
      templateUrl: "london.html",
      controller: "londonCtrl",
    })
    .when("/paris", {
      templateUrl: "paris.html",
      controller: "parisCtrl",
    });
});
app.controller("londonCtrl", function ($scope, $location) {
  $scope.msg = "I love London";
  $scope.absUrl = $location.absUrl();
  $scope.url = $location.url();
  $scope.protocol = $location.protocol();
  $scope.host = $location.host();
  $scope.port = $location.port();
  $scope.path = $location.path();
});

app.controller("parisCtrl", function ($scope, $location) {
  $scope.msg = "I love Paris";
  $scope.absUrl = $location.absUrl();
  $scope.url = $location.url();
  $scope.protocol = $location.protocol();
  $scope.host = $location.host();
  $scope.port = $location.port();
  $scope.path = $location.path();
});
