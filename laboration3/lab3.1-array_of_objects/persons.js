var outputdiv = document.getElementById("text-output");

//add event listener to button, so when button is clicked, all persons are printed into div element
document.getElementById("btn-show-text").addEventListener("click", PrintAllPersons);

//function for printing all persons into div element
function PrintAllPersons() {
    for (var i = 0; i < persons.length; i++) {
        outputdiv.innerHTML +=
            persons[i].Fullname() + " (" +
            persons[i].Age + ")<br/>";
    }
}

//create prototype (similiar to classes in c#) for Person
function Person(firstname, lastname, age) {
    this.Firstname = firstname,
        this.Lastname = lastname,
        this.Age = age,
        this.Fullname = function () {
            return this.Firstname + " " + this.Lastname;
        }
}


//create array of persons (prototypes)
var persons = [
    new Person("ivan", "prgomet", 24),
    new Person("Jason", "Bourne", 37),
    new Person("Lea", "Winchester", 47),
    new Person("Duncan", "Welders", 27),
    new Person("Scott", "Allen", 43),
];


//create person object
// var person1 = {
//     Firstname: "ivan",

//     Lastname: "prgomet",

//     Age: 24,

//     Fullname: function () {
//         return this.Firstname + " " + this.Lastname;
//     }

// };