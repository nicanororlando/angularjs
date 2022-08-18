"use strict";

// Register `phoneDetail` component, along with its associated controller and template
angular.module("view2").component("view2", {
  templateUrl: "./components/view2/view2.template.html",
  controller: function View2Controller() {
    this.welcome = "Welcome!";
  },
});
