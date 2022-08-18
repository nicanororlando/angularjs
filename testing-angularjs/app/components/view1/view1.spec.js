"use strict";

/* Para declarar el banco de pruebas. El primer param es el nombre del banco
de pruebas, y el secundo parametro es una funcion que contiene la implementacion. */
describe("view1", function () {
  beforeEach(module("view1"));
  // Declaramos el banco de pruebas para el controller.
  describe("View1Controller", function () {
    // Definimos nuestro ctrl aca, para poder usarlo en todo el banco de pruebas.
    var ctrl;

    // Se llama una vez, ANTES de que se ejecute la especulacion 'it'.
    beforeEach(inject(function (
      // Como es un componente, va a recibir un controller de componente.
      $componentController
    ) {
      ctrl = $componentController("view1");
    }));

    /* Definimos un test de expectativa. Un test unitario. Inject nos va a ayudar a
    inyectar los componentes de angular en nuestros test's */
    it("should initialize the title in the scope", function () {
      expect(ctrl.title).toBeDefined();
      expect(ctrl.title).toBe("Testing Angularjs Aplication");
    });

    it("should add 2 destinations to the destinations list", function () {
      expect(ctrl.destinations).toBeDefined();
      expect(ctrl.destinations.length).toBe(0);

      // Para controlar que se añadan los datos al primer elemento del array.
      ctrl.newDestination = {
        city: "London",
        country: "England",
      };
      ctrl.addDestination();
      expect(ctrl.destinations.length).toBe(1);
      expect(ctrl.destinations[0].city).toBe("London");
      expect(ctrl.destinations[0].country).toBe("England");

      // Para controlar que se añadan los datos al segundo elemento del array.
      ctrl.newDestination.city = "Frankfurt";
      ctrl.newDestination.country = "Germany";
      ctrl.addDestination();
      expect(ctrl.destinations.length).toBe(2);
      expect(ctrl.destinations[1].city).toBe("Frankfurt");
      expect(ctrl.destinations[1].country).toBe("Germany");
    });
  });
});
