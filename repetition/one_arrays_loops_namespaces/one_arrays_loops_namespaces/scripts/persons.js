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
firstApp.showAllBtn = $("#show-all");
firstApp.showSearchBtn = $("#show-search");
firstApp.showSaveFieldBtn = $("#show-save");

firstApp.showAllBtn.click(function () {
    $("#current-output").html("");//reset
    $.each(firstApp.persons, function (index, value) {
        $("#current-output").append(index + ": " + value.firstname + " " + value.lastname + " (" + value.age + ") " + value.city + " <br/>");
    });
})
