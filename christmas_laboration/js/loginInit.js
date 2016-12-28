/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="angular.min.js" />

$(document).ready(function () {
    CheckRememberMe().then(function () {
        console.log("populate inputs boxes in this scenario");
    }, function () {
        console.log("dont populate input boxes");
    }).always(function () {
        console.log("this runs everytime");
    });

});

function CheckRememberMe() {
    var dfd = $.Deferred();

    if (localStorage.getItem("rememberMeOption") == true) {
        console.log("ok, user choose to be remembered. resolve");
        dfd.resolve();
    } else {
        console.log("user doesnt want to be remembered. reject");
        dfd.reject();
    }
    return dfd.promise();
}