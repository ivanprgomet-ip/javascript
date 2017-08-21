var users = [
    {
        username: "ivanprgomet",
        firstname: "Ivan",
        lastname: "Prgomet",
        telnummer: "0737485932",
        city: "Lund",
        age: 25
    },
    {
        username: "jamesbond",
        firstname: "Pierce",
        lastname: "Brosnan",
        telnummer: "0737482042",
        city: "Bahamas",
        age: 49
    },
    {
        username: "peakyblinder",
        firstname: "Thomas",
        lastname: "Shelby",
        telnummer: "0738493021",
        city: "Birmingham",
        age: 48
    }
    ]


var errorDiv = $('#error');
var submit = $('#submit');
var age = $('#age');
var result = $('#hiddenText');
var form = $('#form');
var username = $('#username');
var firstname = $('#firstname');
var lastname = $('#lastname');
var telnummer = $('#phone');
var city = $('#city');
var fetch = $('#getUser');
var fetchError = $('#fetchError');

submit.on("click", function(e){

        errorDiv.html("");
        errorDiv.css('background-color', "");
        result.css('visibility', 'hidden');
        fetchError.text("");

    if(age.val() < 1 || age.val() > 110 ){
        errorDiv.html(age.val() + " Är ingen giltig ålder.");
        errorDiv.css('background-color', "#FFA5A5");
    } else {
        var newAge = age.val() - 10;
        form.css('display', 'none');
        result.css('visibility', '');
        result.css('background-color', '#BEF2A4');
        result.val(
            username.val() + "\n" + 
            firstname.val() + "\n" + 
            lastname.val() + "\n" + 
            telnummer.val() + "\n" + 
            city.val() + "\n" + 
            age.val() + "\n" +
            "Ten years ago you were " + newAge + " years old!"
        );
        
    };
});

fetch.on("click", function(e){
    fetchError.text("");

    var user = {
        username: "",
        firstname: "",
        lastname: "",
        telnummer: "",
        city: "",
        age: ""
    };

    $.each(users, function(key, value){
        if(username.val() == value.username) {
            user = value;
        } 
    });

    if (user.username != ""){
        username.val(user.username);
        firstname.val(user.firstname);
        lastname.val(user.lastname);
        telnummer.val(user.telnummer);
        city.val(user.city);
        age.val(user.age);
    } else {
        fetchError.text("The user doesnt exist...");
        fetchError.css('color', 'red');
    };
    
});