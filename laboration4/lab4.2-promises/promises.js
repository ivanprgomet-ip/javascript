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
    function PrintEmployees() {
        var dfd = $.Deferred();//----------PROMISE
        $.each(employees, function (currentIndex, currentValue) {//iterate every employees

            if (currentValue.HasDriversLicense) {
                //only resolve employees that have a drivers license
                console.log(currentValue.Name + " has a drivers license");
                dfd.resolve();//----------PROMISE
            }
            else {
                //reject employees that dont have a drivers license
                console.log(currentValue.Name + " doesnt have a drivers license");
                dfd.reject();//----------PROMISE
            }

            return dfd.promise();//----------PROMISE
        });
    }

    PrintEmployees().then(function () {
        alert("Awesome.. inside success method");
    }, function () {
        alert("Totally unawesome ... Inside Fail method");
    }).always(function () {
        alert("Work is done now wheter good or bad");
    });

})

