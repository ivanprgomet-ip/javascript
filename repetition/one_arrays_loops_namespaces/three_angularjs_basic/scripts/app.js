/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="angular.min.js" />

var app = angular.module("MyApp", ["ngRoute"])
    .controller("HomeController", function ($scope, educationsFactory) {
        $scope.GetAllPersons = function () {
            $scope.persons = educationsFactory.GetPersons();
            window.location.href = "#/allpersons";
        }

        $scope.GetAll2017 = function () {
            var persons = educationsFactory.GetPersons();
            var temp = [];
            for(var person of persons) {
                if (person.startyear == 2017)
                    temp.push(person);
            }
            $scope.starting2017 = temp;
            window.location.href = "#/starting2017";
        }
        $scope.GetAllEducations = function () {
            $scope.educations = educationsFactory.GetEducations()
            window.location.href = "#/alleducations"
        };
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/default.html"
            })
            .when("/allpersons", {
                templateUrl: "pages/persons.html"
            })
            .when("/alleducations", {
                templateUrl: "pages/educations.html"
            })
        .when("/starting2017", {
            templateUrl:"pages/starting2017.html"
        })
    }).factory("educationsFactory", function () {
        var myFactory = {};

        myFactory.persons = [
            { name: "ivan prgomet", education: "webdeveloper within .net", startyear: "2016" },
            { name: "lea winchester", education: "webdeveloper within .net", startyear: "2017" },
            { name: "sid bocelli", education: "webdeveloper within .net", startyear: "2017" }];
        myFactory.educations = [
            "webdeveloper within .net", "web security", "frontend development"];

        myFactory.GetPersons = function () {
            return this.persons;
        }
        myFactory.GetEducations = function () {
            return this.educations;
        }

        return myFactory;
    })