//If a namespace called MyNamespace already exists, it will be used, else a namespace called MyNamespace will be created
var MyNamespace = MyNamespace || {}
//creating a sub-namespace using same principle as above
MyNamespace.SubNamespace = MyNamespace.SubNamespace || {}

//adding element to MyNamespace
MyNamespace.SubNamespace.outputdiv = document.getElementById("text-output");

//adding function to MyNamespace
MyNamespace.SubNamespace.PrintAllPersons = function () {
    for (var i = 0; i < MyNamespace.SubNamespace.persons.length; i++) {
        MyNamespace.SubNamespace.outputdiv.innerHTML +=
            MyNamespace.SubNamespace.persons[i].Fullname() + " (" +
            MyNamespace.SubNamespace.persons[i].Age + ")<br/>";
    }
}

//create prototype (similiar to classes in c#) for Person inside of MyNamespace
MyNamespace.SubNamespace.Person = function(firstname, lastname, age) {
    this.Firstname = firstname,
        this.Lastname = lastname,
        this.Age = age,
        this.Fullname = function () {
            return this.Firstname + " " + this.Lastname;
        }
}
            

//creating array of persons (prototypes) inside of MyNamespace
MyNamespace.SubNamespace.persons = [
    new MyNamespace.SubNamespace.Person("ivan", "prgomet", 24),
    new MyNamespace.SubNamespace.Person("Jason", "Bourne", 37),
    new MyNamespace.SubNamespace.Person("Lea", "Winchester", 47),
    new MyNamespace.SubNamespace.Person("Duncan", "Welders", 27),
    new MyNamespace.SubNamespace.Person("Scott", "Allen", 43),
];
