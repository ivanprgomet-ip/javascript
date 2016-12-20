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
    var employeeListElement = document.getElementById("list1");


    function FetchPromise(currentValue) {
        var dfd = $.Deferred();
        if (currentValue.HasDriversLicense) {
            dfd.resolve();
        }
        else {
            dfd.reject();
        }

        return dfd.promise();//----------PROMISE
    }

    $.each(employees, function (currentIndex, currentValue) {
        FetchPromise(currentValue).then(function () {
            //this runs if the fetched promise object was resolved
            $("#list1").append(currentValue.Name+" has a license to drive <br/>");
        }, function () {
            //this runs if the fetched promise object was rejected
            $("#list1").append("found person that doesnt have a license to drive <br/>");
        }).always(function () {
            //this will allways run, whether fetched promise was resolved or rejected
            $("#list1").append("_____________________________________________<br/>");
        });
    });

})

