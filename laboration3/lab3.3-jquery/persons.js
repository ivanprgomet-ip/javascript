//create prototype (similiar to classes in c#) for Person
function Person(firstname, lastname, age) {
    this.Firstname = firstname,
        this.Lastname = lastname,
        this.Age = age,
        this.Fullname = function () {
            return this.Firstname + " " + this.Lastname;
        }
}

var personsList01 = [
    new Person("ivan", "prgomet", 24),
    new Person("Jason", "Bourne", 37),
    new Person("Lea", "Winchester", 47),
    new Person("Duncan", "Welders", 27),
    new Person("Scott", "Allen", 43),
];

var personsList02 = [
    new Person("ivano", "prgometo", 24),
    new Person("Jasono", "Bourneo", 37),
    new Person("Leao", "Winchestero", 47),
    new Person("Duncano", "Welderso", 27),
    new Person("Scotto", "Alleno", 43),
];


/*
    retrieving document, adding jqyery event "Ready" which will run whatever is in 
    it when the document has finnished rendering, in this case its and anonymous function 
    running multiple defined multiple defined functions
*/
$(document).ready(function () {
    /*
        foreach person in personlist01, run the function
        KEY is the current index, VALUE is the current person from the array
        access all the currents persons properties using the VALUE.property or function 
    */
    $.each(personsList01, function (key, value) {
         if(key%2==0)
            $("#person-list-one").append("<li>" + key + " " + value.Fullname() + "</li>")
        else
            $("#person-list-one").append("<li style='background-color:highlight;'>" + key + " " + value.Fullname() + "</li>")       
    })

    //print second array of persons to another UL elemnt
    $.each(personsList02, function (key, value) {
        if(key%2==0)
            $("#person-list-two").append("<li>" + key + " " + value.Fullname() + "</li>")
        else
            $("#person-list-two").append("<li style='background-color:highlight;'>" + key + " " + value.Fullname() + "</li>")            
})
})