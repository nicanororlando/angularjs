const app = angular.module("post", []);

app.controller("postCtrl", function ($http) {
  this.fdatos = {};
  this.enviar = function () {
    $http
      .post("recibe-formulario.php", this.fdatos)
      .then((res) => console.log(res));
  };
});
