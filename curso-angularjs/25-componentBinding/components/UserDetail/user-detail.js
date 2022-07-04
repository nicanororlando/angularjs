angular.module("userDetail", []).component("userDetail", {
  templateUrl: "./components/UserDetail/user-detail.html",
  controller: function () {
    this.cambiarEmail = function () {
      this.usuario.email = "miguel@desarrolloweb.com";
    };
  },
  bindings: {
    usuario: "=",
    numero: "@",
  },
});
