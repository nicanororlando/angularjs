app.controller(
  "CustomersController",
  function CustomersController($scope, customersService, appSettings) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    (async function init() {
      $scope.customers = await customersService.getCustomers();
    })();

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

    $scope.deleteCustomer = async function (customerId) {
      $scope.customers = await customersService.deleteCustomer(customerId);
    };

    // function init() {
    //   customersFactory.getCustomers().then(
    //     function (response) {
    //       $scope.customers = response.data;
    //     },
    //     function (data, status, headers, config) {
    //       $log.log(data.error + " " + status);
    //     }
    //   );
    // }
    // init();
  }
);
