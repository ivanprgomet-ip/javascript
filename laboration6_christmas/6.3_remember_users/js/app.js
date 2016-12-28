/// <reference path="angular.min.js" />

var app = angular.module("moviesApp", []);

var controllers = {};
controllers.homecontroller = function ($scope, movieFactory) {
    $scope.movies = movieFactory.movies;

    $scope.Login = function () {
        movieFactory.validateCredentials($scope.loginUsername, $scope.loginPassword)
            .then(function (resolveResponse) {
                //THIS HAPPENS WHEN THE PROMISE SUCCEEDS
                localStorage.removeItem("username");//remove
                localStorage.setItem("username", resolveResponse)//add

                //user will be stored in localstorage if 'remember me' option has been checked
                if ($scope.loginRememberMe) {
                    localStorage.setItem("userToBeRemembered", localStorage.getItem("username"));
                } else {
                    localStorage.removeItem("userToBeRemembered");
                }

                window.location.href = "index.html";
            }, function (rejectResponse) {
                //THIS HAPPENS WHEN THE PROMISE DOESNT SUCCEED
                $scope.loginStatus = rejectResponse;
            })
    }

    $scope.getCurrentUser = function () {
        var username = localStorage.getItem("username");
        console.log(username)
        return username;
    }

    $scope.CheckForRememberedUser = function () {
        movieFactory.getRememberedUser()
            .then(function (resolveResponse) {
                //populating inputs immediately by accessing the $scope bindings
                $scope.loginUsername = resolveResponse.username;
                $scope.loginPassword = resolveResponse.password;
                $scope.loginRememberMe = true;
            }, function (rejectResponse) {
                console.log(rejectResponse);
            });
    };

    //recomended over ng-init, this runs every time the controller gets instantiated 
    $scope.CheckForRememberedUser();
}

app.factory("movieFactory", function ($q) {
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

    myFactory.validateCredentials = function (username, password) {
        var q = $q.defer();
        var userToBeLoggedIn = {};
        angular.forEach(myFactory.users, function (currentUser, key) {
            if (currentUser.username == username && currentUser.password == password) {
                userToBeLoggedIn = currentUser;
            };
        });

        if (angular.equals(userToBeLoggedIn, {})) {
            q.reject('The combination of user and password did not match. Please try again!');//rejectResponse
        } else {
            q.resolve(userToBeLoggedIn.name);//resolveResponse
        }

        return q.promise;
    };

    myFactory.getRememberedUser = function () {
        var q = $q.defer();

        var userToBeRetrieved = {};

        angular.forEach(myFactory.users, function (currentUser, key) {
            //user getting stored in localstorage for userToBeRemembered is the user.name
            if (currentUser.name == localStorage.getItem("userToBeRemembered")) {
                userToBeRetrieved = currentUser;
            }
        });

        if (angular.equals(userToBeRetrieved, {})) {
            q.reject("no user to be remembered");//rejectResponse
        } else {
            q.resolve(userToBeRetrieved);//resolveResponse
        };

        return q.promise;
    }

    return myFactory;
})

app.controller(controllers);//register controller(s)