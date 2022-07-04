const cuentaClicks = angular.module("cuentaClicks", []);

cuentaClicks.component("cuentaClicks", {
  templateUrl: "./components/CuentaClicks/index.html",
  controller: "CuentaClicksController",
});

cuentaClicks.controller("CuentaClicksController", function () {
  this.numClicks = 0;
  this.incrementaClick = function () {
    this.numClicks++;
  };
});
