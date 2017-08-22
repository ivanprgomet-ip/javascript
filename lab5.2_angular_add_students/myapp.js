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

    var factory = {};

    factory.CheckStudent = function (name) {
        var dfd = angular.element.Deferred();
        var bool = true;

        angular.element.each(persons, function (key, value) {
            if (value.name == name) {
                bool = false;
            }
        });

        if (bool) {
            dfd.resolve();
        } else {
            dfd.reject();
        }

        return dfd.promise();
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
    $scope.AddPerson = function () {
        schoolFactory.CheckStudent($scope.newPersonName).then(
            function () {
                schoolFactory.AddPersonToArray({ name: $scope.newPersonName, utbildning: $scope.newPersonUtbildning, status: $scope.newPersonAktiv })
                angular.element('#error').html("Studenten inlagd").css('color', 'green');
            },
            function () {
                angular.element('#error').html("Studenten finns redan").css('color', 'red');
            }
        )
    };
};

App.controller(controllers);