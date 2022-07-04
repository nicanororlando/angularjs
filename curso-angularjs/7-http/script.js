const app = angular.module("http", []);

app.controller("myCtrl1", ($scope, $http) => {
  $http({
    method: "GET",
    url: "info.txt",
  }).then(
    function mySuccess(response) {
      $scope.myWelcome = response.data;
    },
    function myError(response) {
      $scope.myWelcome = response.statusText;
    }
  );
});

app.controller("myCtrl2", ($scope, $http) => {
  $http.get("info.txt").then((response) => {
    $scope.content = response.data;
    $scope.statuscode = response.status;
    $scope.statustext = response.statusText;
  });
});

app.controller("customersCtrl", ($scope, $http) => {
  $http.get("https://www.w3schools.com/angular/customers.php").then(
    (res) => {
      $scope.names = res.data.records;
    },
    (res) => {
      $scope.names = [{ name: "Error!" + res.status }];
    }
  );
});

app.controller("PaisesCtrl", function ($http) {
  this.paises = [];
  $http.get("https://restcountries.eu/rest/v1/all").then(
    (res) => {
      this.paises = res.data;
    },
    (res) => {
      this.paises = [{ name: "Error!" + res.status }];
    }
  );
});
