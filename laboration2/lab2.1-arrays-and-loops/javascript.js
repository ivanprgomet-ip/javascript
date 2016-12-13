// up here we run the actual function,
// this is js so we can run function before it gets declared 
// LoopArrayContents();







//here we have only declared the function, but we are 
//not actually running it yet
function LoopArrayContents() {

    var error_msg_elem = document.getElementById("error-messages");

    var main_content = document.getElementById("main-content");
    

    var strings = ["Tom", "Ivan", "34", "Jason", "99", 190, "Lea", "Abrahamn", "James"];

    for (var i = 0; i < strings.length; i++) {

        if (!isNaN(strings[i])){// if it is a number, do this:
            error_msg_elem.style.color = "darkorange";
            error_msg_elem.innerHTML = "found number(s) in the array, these have not been printed! <br>";
        }
        else
        {
            main_content.innerHTML += strings[i] + "</br>";
        }
    }
}


