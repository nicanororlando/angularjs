"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("view").component("view", {
  templateUrl: "./components/view1/view1.template.html",
  controller: [
    "Phone",
    function ViewController(Phone) {
      this.phones = Phone.query();
      this.welcome = "Welcomeee!";
    },
  ],
});
