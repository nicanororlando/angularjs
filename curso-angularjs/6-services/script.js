var app = angular.module("services", []);

// Location Service
app.controller("location", ($scope, $location) => {
  $scope.myUrl = $location.absUrl();
});

// HTTP Service
app.controller("http", ($scope, $http) => {
  $http.get("info.txt").then((response) => {
    $scope.myWelcome = response.data;
  });
});

// Timeout service
app.controller("timeout", ($scope, $timeout) => {
  $scope.myHeader = "Hello World!";
  $timeout(() => {
    $scope.myHeader = "ASDASDAS";
  }, 4000);
});

// Interval service
app.controller("interval", ($scope, $interval) => {
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(() => {
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});

// My Own service:
app.service("hexafy", function () {
  this.myFunc = (x) => {
    return x.toString(16);
  };
});
app.controller("ownController", ($scope, hexafy) => {
  $scope.hex = hexafy.myFunc(255);
});
app.filter("myFormat", [
  "hexafy",
  function (hexafy) {
    return function (x) {
      return hexafy.myFunc(x);
    };
  },
]);
