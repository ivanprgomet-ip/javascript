/// <reference path="angular.min.js" />

var app = angular.module("myapp", []);

//create homecontroller
//passing in educationFactory by its name to access its methods and variables
var HomeController = function ($scope, educationFactory) {

    //when we call getstudents, the factory gives 
    //all the students into the scope variable, which 
    //then gets visible on the html page, where the current 
    //controller is ruling. and we iterate the $scope.students
    //using the ng-repeat
    $scope.GetStudents = function () {
        $scope.students = educationFactory.getStudents();
    };
    $scope.GetEducations = function () {
        $scope.educations = educationFactory.getEducations();
    }

    $scope.AddStudent = function () {
        educationFactory.addStudentToArray({
            studentName: $scope.studentName,
            education: $scope.studentEducation
        });
    }

    $scope.SearchForStudent = function () {
        console.log($scope.searchedStudentName);
        $scope.FoundStudent = educationFactory.searchForStudent($scope.searchedStudentName);
    };
}

//creating angular factory for the module
app.factory("educationFactory", function () {
    //placing all data inside factory that we consider relevant for it
    var students = [
        { studentName: "ivan prgomet", isActive: true, education: "webdevelopment within .NET" },
        { studentName: "lea winchester", isActive: true, education: "webdevelopment within .NET" },
        { studentName: "bob hudson", isActive: true, education: "test driven development" },
        { studentName: "ken lewis", isActive: true, education: "test driven development" },
        { studentName: "frank dupont", isActive: true, education: "test driven development" },
        { studentName: "abrahamn bond", isActive: true, education: "network security" },
        { studentName: "james bond", isActive: true, education: "network security" },
        { studentName: "cindy lauper", isActive: true, education: "network security" },
        { studentName: "sara bergerson", isActive: true, education: "webdevelopment within .NET" },
        { studentName: "frankie federossi", isActive: false, education: "webdevelopment within .NET" },
        { studentName: "benjamin franciné", isActive: true, education: "network security" },
        { studentName: "luca toni", isActive: true, education: "linux programming" },
        { studentName: "bob kelso", isActive: true, education: "linux programming" },
        { studentName: "sam smith", isActive: false, education: "test driven development" },
        { studentName: "kenny rogers", isActive: true, education: "frontend development" },
    ]
    var educations = [
        { educationName: "webdevelopment within .NET" },
        { educationName: "test driven development" },
        { educationName: "network security" },
        { educationName: "linux programming" },
        { educationName: "frontend development" },
    ]

    //creating array of factory related stuff
    var myFactory = {};

    myFactory.getStudents = function () {
        return students;
    }
    myFactory.getEducations = function () {
        return educations;
    }
    myFactory.addStudentToArray = function (student) {
        students.push(student);
    }

    myFactory.searchForStudent = function (searched) {
        console.log("inside factory searchforstudent method");
        console.log("searched parameter inside factory is: " + searched);
        for (var i = 0; i < students.length; i++) {
            if (students[i].studentName == searched) {
                console.log("student retrieved back was :"+students[i]);
                return students[i];
            }
        }
    }

    //returning the factory that contains all teh factory related stuff
    return myFactory;
});



//activate/attach homecontroller to the module
app.controller("HomeController", HomeController);
