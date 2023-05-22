"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("view1").component("view1", {
  templateUrl: "./components/view1/view1.template.html",
  controller: [
    function View1Controller() {
      var self = this;
      this.title = "Testing Angularjs Aplication";
      this.destinations = [];
      this.newDestination = {
        city: undefined,
        country: undefined,
      };
      this.addDestination = function () {
        this.destinations.push({
          city: this.newDestination.city,
          country: this.newDestination.country,
        });
      };
    },
  ],
});
