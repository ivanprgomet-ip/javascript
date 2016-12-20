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
    function FetchPromise() {
        var dfd = $.Deferred();
        $.each(employees, function (currentIndex, currentValue) {//iterate every employees

            if (currentValue.HasDriversLicense) {
                console.log(currentValue.Name + " has a drivers license");
                dfd.resolve();
            }
            else {
                console.log(currentValue.Name + " doesnt have a drivers license");
                dfd.reject();
            }

            return dfd.promise();//----------PROMISE
        });
    }

    FetchPromise().then(function () {
        console.log("Awesome.. inside success method");
    }, function () {
        console.log("Totally unawesome ... Inside Fail method");
    }).always(function () {
        console.log("Work is done now wheter good or bad");
    });

})

