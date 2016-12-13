var user1 = {
    username: "ivanprgomet",
    firstname: "ivan",
    lastname: "prgoemt",
    phone: "923847",
    city: "lund",
    age: 24,
};
var user2 = {
    username: "leawinchester",
    firstname: "lea",
    lastname: "winchester",
    phone: "92845398",
    city: "sydney",
    age: 29,
};
var user3 = {
    username: "jasonbourne",
    firstname: "jason",
    lastname: "bourne",
    phone: "29345495",
    city: "new york",
    age: 39,
};

var users = [user1, user2, user3];

function GetUser(username) {
    for (i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            //populate form with all user attributes
            document.getElementById("firstname").value = users[i].firstname;
            document.getElementById("lastname").value = users[i].lastname;
            document.getElementById("phone").value = users[i].phone;
            document.getElementById("city").value = users[i].city;
            document.getElementById("age").value = users[i].age;
            document.getElementById("result-msg").innerHTML = "";
            break;
        }
        else
            document.getElementById("result-msg").innerHTML = "user not found!";

    };
}
