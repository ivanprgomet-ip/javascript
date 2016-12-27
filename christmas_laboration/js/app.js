/// <reference path="angular.min.js" />

var app = angular.module("moviesApp", []);
var homecontroller = function ($scope,moviesFactory) {
    $scope.hero = "welcome to showtime movies"
    $scope.movies = moviesFactory.movies;
}

app.factory("moviesFactory", function () {
    //factory content
    var myFactory = {};

    myFactory.users = [
        { name: "ivan prgomet", username: "ivanprgomet", password: "ivan123" },
        { name: "lea winchester", username: "leawinchester", password: "leawin" },
        { name: "jason bourne", username: "jasonbourne", password: "bourne" },
        { name: "duncan belaius", username: "duncanbelaius", password: "duncan123" },
        { name: "bella marbles", username: "bellamarbles", password: "chailatte" },
    ]
    myFactory.movies = [
        { title: "the dark knight", year: "2010" },
        { title: "the shawshank redemption", year: "1994" },
        { title: "the godfather", year: "1972" },
        { title: "schinlders list", year: "1993" },
        { title: "pulp fiction", year: "1994" },
        { title: "lord of the rings", year: "2003" },
        { title: "fight club", year: "1999" },
        { title: "forrest gump", year: "1994" },
        { title: "inception", year: "2010" },
        { title: "matrix", year: "1999" },
    ]

    return myFactory;
})

app.controller("homecontroller", homecontroller);//register controller


