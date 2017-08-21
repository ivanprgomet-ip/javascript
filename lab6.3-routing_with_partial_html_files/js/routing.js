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

    var seminar = {}
    var users = []

    myFactory.setSeminar = function (name, date) {
        seminar = { seminarName: name, seminarDate: date };
    }
    myFactory.getSeminar = function () {
        return seminar;
    }

    myFactory.addUser = function (name, mobile) {
        users.push({ userName: name, userMobile: mobile })
    }

    myFactory.getUsers = function () {
        return users;
    }


    return myFactory;
})

var controllers = {}
controllers.RegistrationController = function ($scope, seminarFactory) {

    //$scope.seminarName = "seminarName";
    //$scope.seminarDate = Date();

    $scope.setSeminar = function () {
        seminarFactory.setSeminar($scope.seminarName, $scope.seminarDate);
        location.href = "#/partial3";
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

    //THESE ALLWAYS RUN FOR THE CONTROLLER
    $scope.seminarName = seminarFactory.getSeminar().seminarName;
    $scope.seminarDate = seminarFactory.getSeminar().seminarDate;

    $scope.retrievedUsers = seminarFactory.getUsers();
    console.log($scope.retrievedUsers)
}

app.controller(controllers)