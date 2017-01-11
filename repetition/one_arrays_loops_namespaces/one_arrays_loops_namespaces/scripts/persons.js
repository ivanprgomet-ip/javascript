/// <reference path="jquery-3.1.1.js" />

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

function InitElements() {
    firstApp.showAll = $("#show-all");
    firstApp.showSearch = $("#show-search");
    firstApp.showSave = $("#show-save");

    firstApp.search = $("#search");
    firstApp.recentSearch = $("#recent-search");

    firstApp.save = $("#save");
}
function InitEventHandlers() {
    firstApp.showAll.click(function (e) {

        //TODO: refresh the persons to show so that we also get the newly added persons on the all-list

        $("#search-panel").hide();
        $("#save-panel").hide();
        $("#persons-output").toggle();
    })

    firstApp.showSave.click(function (e) {
        $("#search-panel").hide();
        $("#persons-output").hide();
        $("#save-panel").toggle();
    })
    firstApp.save.on("click", function (e) {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var age = $("#age").val();
        var city = $("#city").val();

        var userAlreadyExists = false;

        //check if user already exists so that we dont add duplicates
        $.each(firstApp.persons, function (index, value) {
            if(firstname == value.firstname && lastname == value.lastname &&
                age == value.age && city == value.city)
            {
                $("#saveResults").html("this person already exists in database!");
                userAlreadyExists = true;
            }
        })

        if (userAlreadyExists == false) {
            firstApp.persons.push({firstname:firstname,lastname:lastname,age:age,city:city})
            $("#saveResults").html("person successfully saved!");
            console.log(firstApp.persons);

            //add new person to the existing hidden list of all persons, shows when we press show-all
            $("#persons-output").append(firstname + " " + lastname + " (" + age + ") " + city + " <br/>");
        }
    })

    firstApp.showSearch.click(function (e) {
        $("#persons-output").hide();
        $("#save-panel").hide();
        $("#search-panel").toggle();
    })

    firstApp.search.on("click", function (e) {
        /*difference between jquery.html (= innerHTML) and jquery.append (+= innerHTML*/

        $("#searchResults").html("")
        $("#searchResultsCount").removeClass("NothingFoundRed");
        var resultCount = 0;

        var searchvalue = $("#searchvalue").val();

        $.each(firstApp.persons, function (index, value) {
            console.log("inside search loop" + value.firstname)
            if (searchvalue.includes(value.firstname) ||
                searchvalue.includes(value.lastname) ||
                searchvalue.includes(value.firstname + " " + value.lastname)) {
                resultCount += 1;
                $("#searchResults").append(value.firstname + " " + value.lastname + " (" + value.age + ") " + value.city + "<br/>");
            }
        })
        if (resultCount > 0)
            $("#searchResultsCount").html(resultCount + " person(s) found");
        else {
            $("#searchResultsCount").addClass("NothingFoundRed");
            $("#searchResultsCount").html("No results found");
        }

        localStorage.setItem("MostRecentSearch", searchvalue);
    })

    firstApp.recentSearch.on("click", function (e) {
        $(e.target).addClass("ClickedMostRecent");
        var mostRecentSearch = localStorage.getItem("MostRecentSearch");
        $("#searchvalue").val(mostRecentSearch);
    })

}
function OtherInits() {
    $("#persons-output").hide();
    $("#save-panel").hide();
    $("#search-panel").hide();

    $.each(firstApp.persons, function (index, value) {
        $("#persons-output").append(value.firstname + " " + value.lastname + " (" + value.age + ") " + value.city + " <br/>");
    });
}

$(document).ready(function () {

    OtherInits();

    InitElements();

    InitEventHandlers();

})