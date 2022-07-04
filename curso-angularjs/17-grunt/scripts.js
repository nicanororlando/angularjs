const alumnos = [
  {
    nombre: "Canor orli",
    telefono: "12312312",
    curso: "3° es",
  },
  {
    nombre: "Abigail mendoza",
    telefono: "151563246",
    curso: "5° en",
  },
  {
    nombre: "Marcelo nose",
    telefono: "23452345",
    curso: "programmer",
  },
  {
    nombre: "Zacarias merluzo",
    telefono: "62342342",
    curso: "qcy",
  },
];

const AlumnosController = ($scope) => {
  // En esta propiedad, alumno almacena sus datos como una tabla hash.
  $scope.alumnos = alumnos;
  $scope.Save = () => {
    $scope.alumnos.push({
      nombre: $scope.nuevoAlumno.nombre,
      telefono: $scope.nuevoAlumno.telefono,
      cusro: $scope.nuevoAlumno.curso,
    });
    $scope.formVisibility = false;
    console.log($scope.formVisibility);
  };
  $scope.formVisibility = false;
  $scope.ShowForm = () => {
    $scope.formVisibility = true;
    console.log($scope.formVisibility);
  };
};

// Creacion de modulo:
// Aca podemos agregar controladores, filtros y mas, para nuestra app de angular.
angular.module("mvc", []).controller("AlumnoController", AlumnosController);
