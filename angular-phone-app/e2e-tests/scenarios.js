"use strict";

const { element } = require("angular");

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe("Aplication", function () {
  describe("View: PhoneList", function () {
    beforeEach(function () {
      browser.get("index.html#!/phones");
    });

    it("should redirect 'index.html' to 'index.html#!/phones'", function () {
      browser.get("index.html");

      expect(browser.getCurrentUrl()).toContain("index.html#!/phones");
    });

    it("should filter the phone list as a user types into the search box", function () {
      var phoneList = element.all(by.repeater("phone in $ctrl.phones"));
      var query = element(by.model("$ctrl.query"));

      expect(phoneList.count()).toBe(20);

      /*  is a method in Selenium that allows QAs to type content automatically into 
      an editable field while executing any tests for forms. */
      query.sendKeys("nexus");
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys("motorola");
      expect(phoneList.count()).toBe(0);
    });

    it("should be possible to control phone order via the drop-down menu", function () {
      var queryField = element(by.model("$ctrl.query"));
      var orderSelect = element(by.model("$ctrl.orderProp"));
      var nameOption = orderSelect.element(by.css("option[value='name']"));
      var phoneNameColumn = element.all(
        by.repeater("phone in $ctrl.phones").column("phone.name")
      );
      function getNames() {
        return phoneNameColumn.map(function (elem) {
          return elem.getText();
        });
      }
      queryField.sendKeys("tablet");

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122",
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi",
      ]);
    });

    it("should render phone specific links", function () {
      var query = element(by.model("$ctrl.query"));
      query.sendKeys("nexus");

      element.all(by.css(".phones li a")).first().click();

      expect(browser.getCurrentUrl()).toContain("index.html#!/phones/nexus's");
    });
  });

  describe("View: Phone details", function () {
    beforeEach(function () {
      browser.get("index.html#!/phones/nexus's");
    });

    it("should display placeholder page with 'phondeId'", function () {
      expect(element(by.binding("$ctrl.phoneId")).getText().toBe("nexus's"));
    });

    it("should display the first phone image as the main phone image", function () {
      var mainImage = element(by.css("img.phone.selected"));

      expect(mainImage.getAttribute("src")).toContain(
        "img/phones/nexus-s.0.jpg"
      );
    });

    it("should swap the main image screen when clicking on a thumbait image", function () {
      var mainImage = element(by.css("img.phone.selected"));
      var thumbaits = element.all(by.css(".phone-thumbs img"));

      thumbaits.get(2).click();
      expect(mainImage.getAttribute("src")).toContain(
        "img/phones/nexus-s.2.jpg"
      );

      thumbaits.get(0).click();
      expect(mainImage.getAttribute("src")).toContain(
        "img/phones/nexus-s.0.jpg"
      );
    });
  });
});
