var MyApp = MyApp || {};

MyApp.emps = [
    {
        name: "emp1",
        car: false
    },
    {
        name: "emp2",
        car: true
    },
    {
        name: "emp3",
        car: true
    },
    {
        name: "emp4",
        car: false
    },
    {
        name: "emp5",
        car: false
    },
    {
        name: "emp6",
        car: false
    },
];

MyApp.cars = [
    {
        name: "car1"
    },
    {
        name: "car2"
    },
    {
        name: "car3"
    },
    {
        name: "car4"
    },
    {
        name: "car5"
    },
    {
        name: "car6"
    },
];

MyApp.div = $('#content');

MyApp.CheckIfCar = function (emps) {
    var dfd = $.Deferred();
    var bool = false;

    $.each(emps, function (key, value) {
        if (value.car) {
            MyApp.div.append('<p>' + value.name + '</p>');
            bool = true;
        }
    });

    if (bool) {
        dfd.resolve();
    } else {
        dfd.reject();
    }

    return dfd.promise();
};

$("#empButton").on('click', function () {
    MyApp.div.html("");
    MyApp.CheckIfCar(MyApp.emps).then(
        function () { },
        function () {
            MyApp.div.html("There are no employees that are allowed to drive the car");
        }
    ).always(function () {
        MyApp.div.append('<p>Done!</p>');
    }
        );
});

$("#carsButton").on('click', function () {
    MyApp.div.html("");
    $.each(MyApp.cars, function (key, value) {
        MyApp.div.append('<p>' + value.name + '</p>');
    });
});

