/// <reference path="jquery-3.1.1.js" />
//only use javascript and jquery

var firstApp = {};

firstApp.persons = [
        {
            firstname: "ivan", lastname: "prgomet", age: 24, city: "lund",
            fullname: function () { return this.firstname + " " + this.lastname }
        },
        {
            firstname: "leo", lastname: "capello", age: 34, city: "napoli",
            fullname: function () { return this.firstname + " " + this.lastname }
        },
        {
            firstname: "abrahamn", lastname: "morcini", age: 25, city: "napoli",
            fullname: function () { return this.firstname + " " + this.lastname }
        },
        {
            firstname: "sid", lastname: "versace", age: 62, city: "milan",
            fullname: function () { return this.firstname + " " + this.lastname }
        },
        {
            firstname: "ronnie", lastname: "bagliatello", age: 55, city: "cannes",
            fullname: function () { return this.firstname + " " + this.lastname }
        }, ]
firstApp.showAll = $("#show-all");
firstApp.showSearch = $("#show-search");
firstApp.showSave = $("#show-save");

firstApp.showAll.click(function () {
    $("#search-panel").hide();
    $("#save-panel").hide();
    $("#persons-output").toggle();
})

firstApp.showSave.click(function (e) {
    $("#search-panel").hide();
    $("#persons-output").hide();
    $("#save-panel").toggle();
})

firstApp.showSearch.click(function (e) {
    $("#persons-output").hide();
    $("#save-panel").hide();
    $("#search-panel").toggle();
})


window.onload = function () {
    $("#persons-output").hide();
    $("#save-panel").hide();
    $("#search-panel").hide();

    $.each(firstApp.persons, function (index, value) {
        $("#persons-output").append(index + ": " + value.firstname + " " + value.lastname + " (" + value.age + ") " + value.city + " <br/>");
    });
}