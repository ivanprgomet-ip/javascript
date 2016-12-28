/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="angular.min.js" />

$(document).ready(function () {

    CheckRememberMe()
        .then(onRememberMeChecked, onRememberMeUnchecked)
        .always(function () { console.log("this runs everytime"); });

});

function CheckRememberMe() {
    var dfd = $.Deferred();

    console.log(localStorage.getItem("userWantsToBeRemembered"))

    if (localStorage.getItem("userWantsToBeRemembered")) {
        console.log("user choose to be remembered. resolve");
        dfd.resolve();
    } else {
        console.log("user doesnt want to be remembered. reject");
        dfd.reject();
    }
    return dfd.promise();
}


function onRememberMeChecked() {
    var inputs = document.getElementsByTagName("input");
    console.log("populate inputs boxes in this scenario and also keep the checkbox checked");
    inputs[0].value = localStorage.getItem("username");
    inputs[1].value = localStorage.getItem("password");
    inputs[2].checked = true;
}
function onRememberMeUnchecked() {
    var inputs = document.getElementsByTagName("input");
    inputs[2].checked = false;
}