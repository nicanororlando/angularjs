`$scope`: Es un objeto que se refiere al modelo de la aplicacion y proporciona un contexto de ejecucion para las expresiones de la vista. En el scope esta relacionado el MVC. Cada aplicacion tiene su scope raiz.

Es una union entre la vista del HTML y el controller de JavaScript.

If we consider an AngularJS application to consist of:

-View, which is the HTML.
-Model, which is the data available for the current view.
-Controller, which is the JavaScript function that makes/changes/removes/controls the data.
Then the scope is the Model.

`$rootScope`
Este scope es el global de la aplicacion, no hace falta que utilicemos el ng-controller, solo acceder a sus valores. En el HTML hay un ejemplo.
