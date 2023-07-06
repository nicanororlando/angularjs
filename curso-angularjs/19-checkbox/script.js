const app = angular.module("checkbox", []);

app.controller("checkCtrl", function () {
  this.activo = false;
  this.avisar = () => console.log("cambie");
});
