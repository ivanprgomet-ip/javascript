var App = angular.module("App", []);

//Angular Factory
App.factory("schoolFactory", function () {

    var educations = [
        {
            name: "Webdeveloper within .NET"
        },
        {
            name: "Linux Shell Programming"
        },
        {
            name: "Frontend Development"
        },
        {
            name: "C#"
        },
        {
            name: "Javascript and Angular JS"
        },

    ];

    var persons = [
        {
            name: "Thomas",
            status: false,
            utbildning: "Webdeveloper within .NET"
        },
        {
            name: "Polly",
            status: true,
            utbildning: "Webdeveloper within .NET"
        },
        {
            name: "Ada",
            status: true,
            utbildning: "Webdeveloper within .NET"
        },
        {
            name: "Frank",
            status: false,
            utbildning: "Linux Shell Programming"
        },
        {
            name: "Grace",
            status: true,
            utbildning: "Linux Shell Programming"
        },
        {
            name: "Finn",
            status: true,
            utbildning: "Linux Shell Programming"
        },
        {
            name: "Bobby",
            status: false,
            utbildning: "Frontend Development"
        },
        {
            name: "Billy",
            status: true,
            utbildning: "Frontend Development"
        },
        {
            name: "Tommy",
            status: true,
            utbildning: "Frontend Development"
        },
        {
            name: "Johnny",
            status: false,
            utbildning: "C#"
        },
        {
            name: "Karl",
            status: true,
            utbildning: "C#"
        },
        {
            name: "Ivan",
            status: true,
            utbildning: "Javascript and Angular JS"
        },
        {
            name: "Serena",
            status: false,
            utbildning: "Javascript and Angular JS"
        },
        {
            name: "Selena",
            status: true,
            utbildning: "Javascript and Angular JS"
        },
        {
            name: "Mike",
            status: true,
            utbildning: "Javascript and Angular JS"
        },



    ]

    var factory = {};

    factory.getPersons = function () {
        return persons;
    };

    factory.getEducations = function () {
        return educations;
    };

    return factory;
});

var controllers = {};

controllers.schoolController = function ($scope, schoolFactory) {
    $scope.educations = schoolFactory.getEducations();
    $scope.persons = schoolFactory.getPersons();
};

App.controller(controllers);