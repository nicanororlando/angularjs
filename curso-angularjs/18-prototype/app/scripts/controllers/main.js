"use strict";

angular.module("prototipoApp").controller("MainCtrl", function () {
  var baseUrl = "https://placekitten.com/200/";
  this.interval = 2000;
  this.slides = [
    {
      id: 0,
      title: "Gatos 1",
      image: baseUrl + "100/",
      text: "gatooooooo",
    },
    {
      id: 1,
      title: "Gatos 2",
      image: baseUrl + "200/",
      text: "gatososo",
    },
    {
      id: 2,
      title: "Gatos 3",
      image: baseUrl + "300/",
      text: "qcy",
    },
  ];
});

// play | pause Carousel //
var mycarousel = document.querySelector("#mycarousel");
var carouselButton = document.getElementById("carouselButton");
var carousel = new bootstrap.Carousel(mycarousel, {
  interval: 1000,
});
carouselButton.addEventListener("click", function () {
  if (carouselButton.firstElementChild.classList.contains("fa-pause")) {
    carouselButton.firstElementChild.classList.remove("fa-pause");
    carouselButton.firstElementChild.classList.add("fa-play");
    carousel.pause();
  } else if (carouselButton.firstElementChild.classList.contains("fa-play")) {
    carouselButton.firstElementChild.classList.remove("fa-play");
    carouselButton.firstElementChild.classList.add("fa-pause");
    carousel.cycle();
  }
});
