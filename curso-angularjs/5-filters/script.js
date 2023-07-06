const alumnos = [
  {
    nombre: "Canor orli",
    amount: "12312312",
    curso: "3° es",
    date: "14-01-2000",
  },
  {
    nombre: "Abigail mendoza",
    amount: "151563246",
    curso: "5° en",
    date: "24-03-2023",
  },
  {
    nombre: "Marcelo nose",
    amount: "23452345",
    curso: "programmer",
    date: "16-01-2020",
  },
  {
    nombre: "Zacarias merluzo",
    amount: "62342342",
    curso: "qcy",
    date: "12-11-2300",
  },
];

const names = [
  { name: "Jani", country: "Norway" },
  { name: "Carl", country: "Sweden" },
  { name: "Margareth", country: "England" },
  { name: "Hege", country: "Norway" },
  { name: "Joe", country: "Denmark" },
  { name: "Gustav", country: "Sweden" },
  { name: "Birgit", country: "Denmark" },
  { name: "Mary", country: "England" },
  { name: "Kai", country: "Norway" },
];

const app = angular.module("filters", []);

app.controller("AlumnosCtrl", ($scope) => {
  $scope.title = "Alumnos:";
  $scope.alumnos = alumnos;
});

app.controller("namesCtrl", function () {
  this.names = names;
  this.orderBy = (x) => {
    this.myOrderBy = x;
  };
});

app.controller("filterCtrl", function ($http) {
  this.orden = false;
  this.campo = "name";
  var url =
    "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
  if (this.nombre) {
    url += "&query=" + this.nombre;
  }
  this.buscaCervezas = () => {
    $http.jsonp(url).success(function (res) {
      console.log("res: ", res);
      this.cervezas = res.beers;
    });
  };
});
