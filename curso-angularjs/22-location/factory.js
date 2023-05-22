const app = angular.module("factory", ["ngRoute"]);

// El nombre lo vamos a usar para inyectar esta dependencia en otros controladores.
app.factory("descargasFactory", function () {
  /* Como esta variable esta fuera del objeto de retorno, se considera "privada", 
  ya que no podemos acceder a ella desde otro lado. */
  const descargasRealizadas = [
    "Manual de Javascript",
    "Manual de jQuery",
    "Manual de AngularJS",
  ];
  // Creamos el objeto por el cual se podra acceder a los metodos y atributos.
  const interfaz = {
    nombre: "Manolo",
    getDescargas: function () {
      return descargasRealizadas;
    },
    nuevaDescarga: function (descarga) {
      descargasRealizadas.push(descarga);
    },
  };
  // Si o si se retorna algo, en este caso el objeto con los atribuitos y metodos.
  return interfaz;
});
