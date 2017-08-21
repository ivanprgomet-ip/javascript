var MyApp = MyApp || {};

MyApp.emps = [
    {
        name: "emp1"
    },
    {
        name: "emp2"
    },
    {
        name: "emp3"
    },
    {
        name: "emp4"
    },
    {
        name: "emp5"
    },
    {
        name: "emp6"
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

$("#empButton").on('click', function () {
    MyApp.div.html("");
    $.each(MyApp.emps, function (key, value) {
        MyApp.div.append('<p>' + value.name + '</p>');
    });
});

$("#carsButton").on('click', function () {
    MyApp.div.html("");
    $.each(MyApp.cars, function (key, value) {
        MyApp.div.append('<p>' + value.name + '</p>');
    });
});