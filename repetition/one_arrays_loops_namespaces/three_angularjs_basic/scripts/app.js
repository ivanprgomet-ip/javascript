/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="angular.min.js" />

var app = angular.module("MyApp", [])
    .controller("HomeController", function ($scope) {
        var persons = [{ name: "ivan prgomet", education: "webdeveloper within .net", startyear: "2016" },
            { name: "lea winchester", education: "webdeveloper within .net", startyear: "2017" },
            { name: "sid bocelli", education: "webdeveloper within .net", startyear: "2017" }];
        var educations = ["webdeveloper within .net", "web security", "frontend development"];

        $scope.persons = persons;
        $scope.educations = educations;
        //$scope.starting2017 = function () {
        //    var starting2017 = [];
        //    $.each(persons, function (index, value) {
        //        if (value.startyear == 2017)
        //            starting2017.push[value];
        //    })
        //    return starting2017;
        //}



    })


window.onload = function () {

    document.getElementById("show-all-educations").addEventListener("click", function (e) {

    })
}