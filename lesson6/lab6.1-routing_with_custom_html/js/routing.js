/// <reference path="angular.min.js" />

var app = angular.module("fruitsApp", ["ngRoute"]); //telling angular that i have an dependenciy on ngRoute


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template:
                "<a href='#/bananas'>bananas</a><br/>"+
                "<a href='#/apples'>apples</a><br/>" +
                "<a href='#/pears'>pears</a><br/>" +
                "<a href='#/pineapples'>pineapples</a><br/>" +
                "<a href='#/coconuts'>coconuts</a><br/>"
        })
        .when("/bananas", { template: "bananas are for monkeys and dietists" })
        .when("/apples", { template: "one apple a day keeps the doctor away" })
        .when("/pears", { template: "pears are the cousins of apples" })
        .when("/pineapples", { template: "pineapples are the exact same as apples, but with a pine in the name" })
        .when("/coconuts", { template: "coconuts are nuts inlove with the coco" })

        .otherwise({redirectTo:"/"})
})

