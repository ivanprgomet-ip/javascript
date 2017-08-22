var App = angular.module("App", []);

//Angular Factory

App.factory("schoolFactory", function () {

    var utbildningar = [
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

    var personsSearch = [];

    var factory = {};

    factory.Search = function (name) {
        personsSearch.length = 0;
        angular.forEach(persons, function (value, key) {

            if (value.name.includes(name)) {
                personsSearch.push(value);
            }
        });
    };

    factory.getSearch = function () {
        return personsSearch;
    };

    factory.getPersons = function () {
        return persons;
    };

    factory.getUtbildningar = function () {
        return utbildningar;
    };

    factory.AddPersonToArray = function (person) {
        persons.push(person);
    };

    return factory;
});

var controllers = {};

controllers.schoolController = function ($scope, schoolFactory) {
    $scope.utbildningar = schoolFactory.getUtbildningar();
    $scope.persons = schoolFactory.getPersons();
    $scope.searchResult = schoolFactory.getSearch();
    $scope.AddPerson = function () {
        schoolFactory.AddPersonToArray({ name: $scope.newPersonName, utbildning: $scope.newPersonUtbildning, status: $scope.newPersonAktiv })
    };

    $scope.SearchPerson = function () {
        schoolFactory.Search($scope.searchPersonName);
        localStorage.setItem("search", $scope.searchPersonName);
    };

    $scope.GetLocaLStorage = function () {
        var string = localStorage.getItem("search");
        $scope.searchPersonName = string;
        schoolFactory.Search(string);
    };
};

App.controller(controllers);

