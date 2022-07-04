var app = angular.module("validation", []);

/* En el html nos dirijimos a la directiva como "my-directive" y aca para referirnos
a esa misma directiva lo hacemos utilizando "myDirective". */
app.directive("myDirective", () => {
  return {
    require: "ngModel",

    // El 4to argumento es el ngModelController.
    link: (scope, element, attr, mCtrl) => {
      // Value es el valur del elemento input.
      function myValidation(value) {
        if (value.indexOf("e") > -1) {
          console.log(mCtrl);
          mCtrl.$setValidity("charE", true);
        } else {
          mCtrl.$setValidity("charE", false);
        }
        return value;
      }

      /* Aca agregamos el validador a un array con mas funciones, que se va a 
      ejecutar cada vez que el input cambie. */
      mCtrl.$parsers.push(myValidation);
    },
  };
});

app.controller("validateCtrl", ($scope) => {
  $scope.user = "John Doe";
  $scope.email = "john.doe@gmail.com";
});
