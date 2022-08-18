"use strict";

describe("phoneList", function () {
  // Load the module that contains the `phoneList` component before each test
  beforeEach(module("phoneList"));

  // Test the controller
  describe("PhoneListController", function () {
    var $httpBackend, ctrl;

    /* Usamos el inject para injectar las instancias del component controller y 
    httpBackend services en la funcion beforeEach de Jasmine. */
    beforeEach(inject(function ($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET("phones/phones.json")
        .respond([{ name: "Nexus S" }, { name: "Motorola DROID" }]);

      ctrl = $componentController("phoneList");
    }));

    it("should create a `phones` property with 2 phones fetched with `$http`", function () {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phones).toEqual([]);

      /* Vaciamos la cola de solicitudes en el navegador, llamando a 'flush'. Esto
      hace que la promesa retornada por el servicio http se resuelva con la respuesta
      entrenada, osea que descarte explicitamente las solicitudes pendientes. Esto 
      conserva la API asincrona del backend, al mismo tiempo que permite que el test
      se ejecute de forma sincrona. */
      $httpBackend.flush();
      expect(ctrl.phones).toEqual([
        { name: "Nexus S" },
        { name: "Motorola DROID" },
      ]);
    });

    it("should set a default value for the `orderProp` property", function () {
      expect(ctrl.orderProp).toBe("age");
    });
  });
});
