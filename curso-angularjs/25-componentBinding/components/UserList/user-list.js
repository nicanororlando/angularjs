angular.module("userList", []).component("userList", {
  templateUrl: "./components/UserList/user-list.html",
  controller: function ($http) {
    var thisIn = this;

    $http
      .get("http://jsonplaceholder.typicode.com/users")
      .then(function (respuesta) {
        thisIn.usuarios = respuesta.data;
      });
  },
});
