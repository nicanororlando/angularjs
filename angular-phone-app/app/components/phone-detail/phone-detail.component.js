"use strict";

angular.module("phoneDetail").component("phoneDetail", {
  templateUrl: "./components/phone-detail/phone-detail.template.html",
  controller: [
    "$routeParams",
    "Phone",
    function PhoneDetailController($routeParams, Phone) {
      var self = this;
      self.phone = Phone.get(
        { phoneId: $routeParams.phoneId },
        function (phone) {
          self.setImage(phone.images[0]);
        }
      );

      this.setImage = function setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
      };

      // $http.get("phones/" + $routeParams.phoneId + ".json").then((res) => {
      //   self.phone = res.data;
      //   self.setImage(self.phone.images[0]);
      // });
    },
  ],
});
