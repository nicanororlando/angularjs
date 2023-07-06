angular.module("phoneList", []).component("phoneList", {
  templateUrl: "./components/PhoneList/phone-list.template.html",
  controller: [
    "Phone",
    function PhoneListController(Phone) {
      this.phones = Phone.query();
      this.orderProp = "age";
    },
    // function PhoneListController($http) {
    //   var self = this;

    //   $http.get("phones/phones.json").then(function (response) {
    //     self.phones = response.data;
    //   });
    //   this.orderProp = "age";
    // },
  ],
});
