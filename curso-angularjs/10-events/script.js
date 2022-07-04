const app = angular.module("events", []);

app.controller("myCtrl1", ($scope) => {
  $scope.count = 0;
  $scope.adition = () => $scope.count++;
});

app.controller("myCtrl2", ($scope) => {
  $scope.show = false;
  $scope.change = () => ($scope.show = !$scope.show);
});

app.controller("myCtrl3", ($scope) => {
  $scope.coordinates = (mouseEvent) => {
    $scope.x = mouseEvent.clientX;
    $scope.y = mouseEvent.clientY;
  };
});
