angular.module("phoneDetail").component("phoneDetail", {
  templateUrl: "./components/PhoneDetail/phone-detail.template.html",
  controller: [
    "$http",
    "$routeParams",
    "Phone",
    function PhoneDetailController($http, $routeParams, Phone) {
      var self = this;
      this.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };
      self.phone = Phone.get(
        { phoneId: $routeParams.phoneId },
        function (phone) {
          self.setImage(phone.images[0]);
        }
      );
      // $http.get("phones/" + $routeParams.phoneId + ".json").then((res) => {
      //   self.phone = res.data;
      //   self.setImage(self.phone.images[0]);
      // });
    },
  ],
});
