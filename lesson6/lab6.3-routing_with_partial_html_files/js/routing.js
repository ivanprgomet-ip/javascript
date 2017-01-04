/// <reference path="angular.min.js" />

var app = angular.module("seminarApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: "pages/partial1.html" })
        .when('/partial2', { templateUrl: "pages/partial2.html" })
        .when('/partial3', { templateUrl: "pages/partial3.html" })
        .when('/partial4', { templateUrl: "pages/partial4.html" })

})

app.factory("seminarFactory", function () {
    var myFactory = {}

    var seminars = []
    var users = []

    myFactory.addSeminar = function (name, date) {
        seminars.push({ seminarName: name, seminarDate: date })
    }
    myFactory.addUser = function (name, mobile) {
        seminars.push({ userName: name, userMobile: mobile })
    }

    myFactory.getUsers = function () {
        return users;
    }
    myFactory.getSeminars = function () {
        return seminars;
    }


    return myFactory;
})

var controllers = {}
controllers.HomeController = function ($scope) {
    //CONTENT FOR HOMECONTROLLER
}
controllers.RegistrationController = function ($scope, seminarFactory) {

    //add a seminar to factory
    $scope.addSeminar = function () {
        if ($scope.seminarName == undefined && $scope.seminarDate == undefined) {
            $scope.validationMsg = "you havent filled in all required info";
        }
        else {
            seminarFactory.addSeminar($scope.seminarName, $scope.seminarDate);
            window.location.href = "#/partial3"
        }
    }
    //add a user to factory
    $scope.addUser = function () {
        if ($scope.userName == undefined && $scope.userMobile == undefined) {
            $scope.validationMsg = "you havent filled in all required info";
        }
        else {
            seminarFactory.addUser($scope.userName, $scope.userMobile);
        }
    }

    $scope.retrievedUsers = function () {
        return seminarFactory.getUsers()
    }
    $scope.retrievedSeminars = function () {
        return seminarFactory.getSeminars()
    }
}

app.controller(controllers)