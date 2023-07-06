/* La variable descargasFactory que recibimos como parámetro contiene todos los datos 
y funciones que hemos definido en la interfaz pública de nuestra factoría. */
angular
  .module("factory")
  .controller("factoryCtrl", function ($scope, descargasFactory) {
    console.log(descargasFactory);
    $scope.nombre = descargasFactory.nombre;
    $scope.descargas = descargasFactory.getDescargas();
    $scope.funciones = {
      guardarNombre: function () {
        descargasFactory.nombre = $scope.nombre;
      },
      agregarDescarga: function () {
        descargasFactory.nuevaDescarga($scope.nombreNuevaDescarga);
        $scope.mensaje = "Descarga agregada";
      },
      borrarMensaje: function () {
        $scope.mensaje = "";
      },
    };
  });
