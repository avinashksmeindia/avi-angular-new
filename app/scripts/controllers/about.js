'use strict';

/**
 * @ngdoc function
 * @name aviFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aviFrontApp
 */

var app=angular.module('aviFrontApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.currentPage = 0;
    $scope.pageSize = 9;
    $scope.data = [];
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);
    }
    for (var i=0; i<45; i++) {
        $scope.data.push("thing "+i);
    }
    $scope.awesomeThings = [
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Kathie Morse"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 25,
    "name": "Moore Melton"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 30,
    "name": "West Hampton"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Mercer Carpenter"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Reilly Dunlap"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 33,
    "name": "Doreen Sweeney"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 24,
    "name": "Rowland Carr"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 30,
    "name": "Kerri Hebert"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 34,
    "name": "Barbara Marks"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Swanson Sampson"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 35,
    "name": "Bruce Livingston"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 27,
    "name": "Mcfarland Luna"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Collier Woods"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 27,
    "name": "Tyson Irwin"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Lee Phillips"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Holden Stevens"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Wilkerson Hull"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 38,
    "name": "Buckley Wilcox"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 38,
    "name": "Robbins Wall"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 27,
    "name": "Melton Dawson"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 21,
    "name": "Clark Goodwin"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 30,
    "name": "Luella Hurley"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 34,
    "name": "Boone Harper"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 21,
    "name": "Lydia Boyle"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 26,
    "name": "Neva Burks"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Garner Cooley"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Rogers Chandler"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 28,
    "name": "Darcy Henson"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 24,
    "name": "Joanne Frederick"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 29,
    "name": "Robin Barron"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 26,
    "name": "Perkins Mckee"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Donna Herrera"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Cora Bradley"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Cheri Kinney"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 21,
    "name": "Danielle Hansen"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 20,
    "name": "Mavis Mccall"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 35,
    "name": "Stevenson Hines"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Saunders Todd"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Carolyn Rogers"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 27,
    "name": "Avery Hyde"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 27,
    "name": "Michelle Fuentes"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 26,
    "name": "Barnett Cardenas"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 24,
    "name": "Jenkins Tate"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 27,
    "name": "Casey Spencer"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 26,
    "name": "Hawkins Benjamin"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Eleanor French"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Bradford Warner"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 20,
    "name": "Jacquelyn Curry"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Bernard Best"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 20,
    "name": "Thornton Ferrell"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 24,
    "name": "Leticia Holder"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Kramer Horne"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 21,
    "name": "Nichole Price"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 31,
    "name": "Conway Wyatt"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 29,
    "name": "Fitzgerald Bauer"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 38,
    "name": "Workman Monroe"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Alvarado Witt"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Burns Raymond"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 38,
    "name": "Mcmillan Lang"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 28,
    "name": "Lesa Robinson"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 29,
    "name": "Leanne Conner"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Jordan Tyson"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 21,
    "name": "Martina Blevins"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 21,
    "name": "Harriet Stark"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Colette Hobbs"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 35,
    "name": "Josephine Deleon"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Sarah Mcclure"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 25,
    "name": "Melendez Powers"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 33,
    "name": "Francis Orr"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 27,
    "name": "Vega Mccormick"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 35,
    "name": "Tamera Yang"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 23,
    "name": "Carlson Gould"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 38,
    "name": "Marta Johns"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 33,
    "name": "Duffy Wiley"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Mcgowan Greene"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 22,
    "name": "Rene Giles"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 33,
    "name": "Harrison Hodges"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 25,
    "name": "Willa Harrington"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 37,
    "name": "Shawna Mooney"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 34,
    "name": "Lora Noble"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 21,
    "name": "Dolores Sheppard"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 26,
    "name": "Carrillo Colon"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 32,
    "name": "Carey Howe"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 30,
    "name": "Vang Roberson"
  },
  {
    "photo": "http://placehold.it/300x300",
    "age": 24,
    "name": "Nola Edwards"
  }
];
  });

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

