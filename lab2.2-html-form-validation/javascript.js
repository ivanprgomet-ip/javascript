var ErrorElem = document.getElementById("error-message");

var ageFieldValue = document.getElementById("age");

var hiddenTextElem = document.getElementById("text-hidden");

function Validate() {
    //check if the age field contains other thatn numbers
    if (isNaN(ageFieldValue.value)) //if ageFieldValue input 'is Not a Number'
    {
        ErrorElem.innerHTML = "value entered into age field is not a number!";
        ErrorElem.style.backgroundColor = "lightcoral";

        //old green message hidden again if new value is not legit
        hiddenTextElem.style.display = "none";
    }
    else {//else if input is legit

        //old message removed if new value is legit
        ErrorElem.innerHTML = "";

        //hidden text input is populated with the information from the form
        var form = document.getElementById("myForm");//get form
        var inputs = form.getElementsByTagName("input");//get inputs in the form
        var inputsConsolidated = "";//will store all input values in one string
        for (var i = 0; i < inputs.length; i++) {
            inputsConsolidated += inputs[i].value + " ";
        }
        var oldAge = form["age"].value;
        oldAge = oldAge - 10;
        inputsConsolidated += " 10 years ago, you were " + oldAge + " years old!"


        hiddenTextElem.style.display = "block";
        hiddenTextElem.style.backgroundColor = "lightgreen";
        hiddenTextElem.style.width = "100%";
        hiddenTextElem.value = inputsConsolidated;

        form.style.display = "none";
    }
}
