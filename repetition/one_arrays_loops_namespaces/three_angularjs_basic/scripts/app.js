/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="angular.min.js" />

var app = angular.module("MyApp", [])
    .controller("HomeController", function ($scope) {
        var persons = [{ name: "ivan prgomet", education: "webdeveloper within .net", startyear: "2016" },
            { name: "lea winchester", education: "webdeveloper within .net", startyear: "2017" },
            { name: "sid bocelli", education: "webdeveloper within .net", startyear: "2017" }];
        var educations = ["webdeveloper within .net", "web security", "frontend development"];

        $scope.persons = persons;
        $scope.ShowAll2017 = function () {
            var temp = [];
            for(var person of persons) {
                if (person.startyear == 2017)
                    temp.push(person);
            }
            $scope.starting2017 = temp;
        }
        $scope.educations = educations;
    })


window.onload = function () {

    
}