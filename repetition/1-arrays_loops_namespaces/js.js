var persons = [
        { firstname: "ivan", lastname: "prgomet", age: 24, city: "lund", fullname: function () { return this.firstname + " " + this.lastname } },
        { firstname: "leo", lastname: "capello", age: 34, city: "napoli", fullname: function () { return this.firstname + " " + this.lastname } },
        { firstname: "abrahamn", lastname: "morcini", age: 25, city: "napoli", fullname: function () { return this.firstname + " " + this.lastname } },
        { firstname: "sid", lastname: "versace", age: 62, city: "milan", fullname: function () { return this.firstname + " " + this.lastname } },
        { firstname: "ronnie", lastname: "bagliatello", age: 55, city: "cannes", fullname: function () { return this.firstname + " " + this.lastname } }, ]

//localStorage.setItem("persons", JSON.stringify(persons));//save array into localstorage


window.onload = function () {
    //hide some stuff onload
    document.getElementById("search-panel").style.display = "none";
    document.getElementById("add-person-panel").style.display = "none";

    //attach event listeners to main buttons
    document.getElementById("btn-show").addEventListener("click", function (e) {
        e.target.style.backgroundColor = "highlight";

        allResultDiv = document.getElementById("all-result");
        allResultDiv.innerHTML = ""; //reset!

        //var retrievedPersons = JSON.parse(localStorage.getItem("persons"));
        //for (var i = 0; i < retrievedPersons.length; i++) {
        //    allResultDiv.innerHTML += "firstname: " + retrievedPersons[i].firstname + "<br/>";
        //    allResultDiv.innerHTML += "lastname: " + retrievedPersons[i].lastname + "<br/>";
        //    allResultDiv.innerHTML += "age: " + retrievedPersons[i].age + "<br/>";
        //    allResultDiv.innerHTML += "city: " + retrievedPersons[i].city + "<br/>";
        //    allResultDiv.innerHTML += "<br/>";
        //}

        for(var person of persons)
        {
            allResultDiv.innerHTML += "firstname: " + person.firstname + "<br/>";
            allResultDiv.innerHTML += "lastname: " + person.lastname + "<br/>";
            allResultDiv.innerHTML += "age: " + person.age + "<br/>";
            allResultDiv.innerHTML += "city: " + person.city + "<br/>";
            allResultDiv.innerHTML += "fullname: " + person.fullname() + "<br/>";
            allResultDiv.innerHTML += "<br/>";
        }
    })

    document.getElementById("btn-search").addEventListener("click", function (e) {
        document.getElementById("search-panel").style.display = "block";
        document.getElementById("btn-make-search").addEventListener("click", function (e) {

            //search for people
            var searchResultDiv = document.getElementById("search-result");
            var searched = document.getElementById("searchterm").value;
            var found = [];

            //store the latest search in localstorage
            localStorage.setItem("MostRecentSearch", searched);


            for(var person of persons)
            {
                if (person.firstname.includes(searched) || person.lastname.includes(searched) ||
                    searched.includes(person.firstname) || searched.includes(person.lastname)) {
                    found.push(person);
                }
            }
            searchResultDiv.innerHTML = "";//reset!
            for(var person of found) {
                searchResultDiv.innerHTML += "firstname: " + person.firstname + "<br/>";
                searchResultDiv.innerHTML += "lastname: " + person.lastname + "<br/>";
                searchResultDiv.innerHTML += "age: " + person.age + "<br/>";
                searchResultDiv.innerHTML += "city: " + person.city + "<br/>";
                searchResultDiv.innerHTML += "fullname: " + person.fullname() + "<br/>";

                searchResultDiv.innerHTML += "<br/>";
            }

        })
        document.getElementById("btn-get-last-search").addEventListener("click", function (e) {
            //populate the input search field with latest search
            document.getElementById("searchterm").value = localStorage.getItem("MostRecentSearch");
            document.getElementById("searchterm").focus();
        })
    })

    document.getElementById("btn-add").addEventListener("click", function (e) {
        //show add person section when button is clicked
        document.getElementById("add-person-panel").style.display = "block";

        document.getElementById("btn-make-save").addEventListener("click", function (e) {
            //get all input values and save person into array
            var inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
            persons.push({ firstname: inputs[0].value, lastname: inputs[1].value, age: inputs[2].value, city: inputs[3].value })
            alert(inputs[0].value + " " + inputs[1].value + " saved!")

        })
    })




    console.log(persons);
}