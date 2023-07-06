const app = angular.module("component", ["myHeader", "cuentaClicks"]);

app.component("probandoComponent", {
  template: [
    '<div class="miclase">',
    "<span>Esto es algo de HTML en el componente</span> ",
    "<b>Angular Rules!</b>",
    "</div>",
  ].join(""),
});
