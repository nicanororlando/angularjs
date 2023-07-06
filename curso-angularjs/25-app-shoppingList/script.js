const app = angular.module("myShoppingList", []);

app.controller("shopCtrl", ($scope) => {
  $scope.products = ["Milk", "Sugar", "Cheese"];
  $scope.addItem = () => {
    $scope.errortext = "";
    if (!$scope.addMe) {
      return;
    }
    if ($scope.products.indexOf($scope.addMe) == -1) {
      // Agrego a los productos el ng-model del input.
      $scope.products.push($scope.addMe);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }
  };
  $scope.removeItem = (pos) => {
    $scope.errortext = "";
    $scope.products.splice(pos, 1);
  };
});
