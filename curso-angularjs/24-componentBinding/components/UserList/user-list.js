angular.module("userList", []).component("userList", {
  templateUrl: "./components/UserList/user-list.html",
  controller: function ($http) {
    // Importante ya que si usamos el this en la llamada a la api no va a funcionar.
    var self = this;

    $http
      .get("http://jsonplaceholder.typicode.com/users")
      .then(function (respuesta) {
        self.usuarios = respuesta.data;
      });
  },
});
