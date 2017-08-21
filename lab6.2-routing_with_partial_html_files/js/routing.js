/// <reference path="angular.min.js" />

var app = angular.module("fruitsApp", ["ngRoute"]); //telling angular that i have an dependenciy on ngRoute


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template:
                "<a href='#/bananas'>bananas</a><br/>" +
                "<a href='#/apples'>apples</a><br/>" +
                "<a href='#/pears'>pears</a><br/>" +
                "<a href='#/pineapples'>pineapples</a><br/>" +
                "<a href='#/coconuts'>coconuts</a><br/>"
        })
        .when("/bananas", { templateUrl: "html/bananas.html" })
        .when("/apples", { templateUrl: "html/apples.html" })
        .when("/pears", { templateUrl: "html/pears.html" })
        .when("/pineapples", { templateUrl: "html/pineapples.html" })
        .when("/coconuts", { templateUrl: "html/coconuts.html" })
     .otherwise({
         redirectTo: '/'
     })
})

