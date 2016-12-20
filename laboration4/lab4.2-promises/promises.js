//INITIALIZING PROTOTYPES AND ARRAYS 
var Employee = function (name, hasDriversLicense) {
    this.Name = name;
    this.HasDriversLicense = hasDriversLicense;
    return this.Name;
}

var Car = function (name) {
    this.Name = name;
    return this.Name;
}

var employees = [
    new Employee("ivan", true),
    new Employee("lea", true),
    new Employee("jason", false),
]

var cars = [
    new Car("fiat"),
    new Car("peugeot"),
    new Car("audi"),
]

$(document).ready(function () {
    var driversLicenseMsg = "";

    function populateList1() {
        $.each(employees, function (key, value) {
            if (value.HasDriversLicense)
                $("#list1").append("<li>" + value.Name + " has a drivers license </li>")
            else
                $("#list1").append("<li>" + value.Name + " has no drivers license </li>")
        })
    };
    function populateList2() {
        $.each(cars, function (key, value) {
            $("#list2").append("<li>" + value.Name + "</li>")
        })
    };

    $("#btn-show-employees").click(populateList1);
    $("#btn-show-cars").click(populateList2);

});

