//create prototype (similiar to classes in c#) for Person
function Person(firstname, lastname, age) {
    this.Firstname = firstname,
        this.Lastname = lastname,
        this.Age = age,
        this.Fullname = function () {
            return this.Firstname + " " + this.Lastname;
        }
}

//array of prototypes
var personsList01 = [
    new Person("ivan", "prgomet", 24),
    new Person("Jason", "Bourne", 37),
    new Person("Lea", "Winchester", 47),
    new Person("Duncan", "Welders", 27),
    new Person("Scott", "Allen", 43),
];

//array of objects
var personsList02 = [
    {firstname:"ivano",lastname:"prgometo",age:24},
    {firstname:"jasono",lastname:"bourneo",age:33},
    {firstname:"duncano",lastname:"welderso",age:55},
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
            $("#person-list-two").append("<li>" + key + " " + value.firstname +" "+value.lastname+ "</li>")
        else
            $("#person-list-two").append("<li style='background-color:highlight;'>" + key + " " + value.firstname +" "+value.lastname+ "</li>")            
})
})