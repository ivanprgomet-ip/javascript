/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="angular.min.js" />

var app = angular.module("moviesApp", []);
var homecontroller = function ($scope, moviesFactory) {
    $scope.hero = "welcome to showtime movies"
    $scope.movies = moviesFactory.movies;

    $scope.SearchMovies = function SearchMovies() {
        var foundMovies = [];
        for (var i = 0; i < moviesFactory.movies.length; i++) {
            if (moviesFactory.movies[i].title == $scope.searchTerm) {
                foundMovies.push(moviesFactory.movies[i]);
            }
        }
        $scope.filteredMovies = foundMovies;
    }

    $scope.username = localStorage.getItem("username");//used in index.html
}

var logincontroller = function ($scope, moviesFactory) {
    $scope.authenticate = function Authenticate() {
        $scope.authenticationResult = "";//reset
        $scope.moviesUrl = "";//reset

        var userFound = false;
        var username = $scope.loginUsername;
        var password = $scope.loginPassword;
        var rememberMe = $scope.loginRememberMe;


        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username && users[i].password == password) {
                userFound = true;
                localStorage.setItem("username", users[i].username)
                console.log("username saved to localstorage")

                //if user still wants to be remembered
                if (document.getElementById("remember-me").checked)
                {
                    console.log("userWantsToBeRemembered set to true")
                    localStorage.setItem("userWantsToBeRemembered", true);
                    localStorage.setItem("username", users[i].username);
                    localStorage.setItem("password", users[i].password);
                }
                else {
                    localStorage.setItem("userWantsToBeRemembered", false);
                    console.log("userWantsToBeRemembered set to false")
                }
                break;
            }
        }

        if (userFound) {
            $scope.authenticationResult =
                "Successfull Login";
            $scope.moviesUrl =
                "http://localhost:5006/christmas_laboration/index.html";
        }
        else {
            $scope.authenticationResult =
                "The combination of user and password did not match. Please try again!";
        }
    }
    
    var users = moviesFactory.users;

    function PopulateInputs() {
        var inputs = document.getElementsByTagName("input");
        $scope.loginUsername = localStorage.getItem("username");
        $scope.loginPassword = localStorage.getItem("password");
        $scope.loginRememberMe= true;
    }
}

//factory
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

//register controllers
app.controller("homecontroller", homecontroller);
app.controller("logincontroller", logincontroller);