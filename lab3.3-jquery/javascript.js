var usersOne = [
    {
        username: "ivanprgomet",
        firstname: "Ivan",
        lastname: "Prgomet",
        telnummer: "0737485932",
        city: "Lund",
        age: 25
    },
    {
        username: "jamesbond",
        firstname: "Pierce",
        lastname: "Brosnan",
        telnummer: "0737482042",
        city: "Bahamas",
        age: 49
    },
    {
        username: "peakyblinder",
        firstname: "Thomas",
        lastname: "Shelby",
        telnummer: "0738493021",
        city: "Birmingham",
        age: 48
    }
]

usersTwo = [
    {
        username: "adashelby",
        firstname: "Ada",
        lastname: "Shelby",
        telnummer: "0738492123",
        city: "Birmingham",
        age: 28
    },
    {
        username: "gracie",
        firstname: "Grace",
        lastname: "Anderson",
        telnummer: "0738493029",
        city: "London",
        age: 30
    },
    {
        username: "billykimber",
        firstname: "Billy",
        lastname: "Kimber",
        telnummer: "0739492021",
        city: "London",
        age: 42
    }
]

$(document).ready(function (e) {

    var listOneHTML = "";
    var listTwoHTHL = "";

    $.each(usersOne, function (key, value) {
        value.name = function () { return this.firstname + " " + this.lastname };
    });

    $.each(usersTwo, function (key, value) {
        value.name = function () { return this.firstname + " " + this.lastname };
    });

    $.each(usersOne, function (key, value) {
        listOneHTML += '<li>' + value.name() + '</li>';
    });

    $.each(usersTwo, function (key, value) {
        listTwoHTHL += '<li>' + value.name() + '</li>';
    });

    $('#listOne').html(listOneHTML);
    $('#listTwo').html(listTwoHTHL);

    $('#fadeIn').click(function (e) {
        $('#content').fadeIn();
    });

    $('#fadeOut').click(function (e) {
        $('#content').fadeOut();
    });

    $('ul li:nth-child(2)').css('color', 'red');

});