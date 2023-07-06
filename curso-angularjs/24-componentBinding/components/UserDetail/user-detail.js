angular.module("userDetail", []).component("userDetail", {
  templateUrl: "./components/UserDetail/user-detail.html",
  controller: function () {
    this.cambiarEmail = function () {
      this.usuario.email = "miguel@desarrolloweb.com";
    };
  },
  // Declaramos los dos bindeos que espera recibir.
  bindings: {
    // Entrega una referencia al objeto. Se produce un 'two way binding'.
    usuario: "=",
    // Lo recibe como valor. Por mucho que se cambie en el componente no se transfiere nada al padre.
    numero: "@",
  },
});
