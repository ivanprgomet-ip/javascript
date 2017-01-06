//1 euro = 9.56332175 sek
//1 sek = 0.104566178 eur
function EuroToSek() {
    //get input value from input element
    var eurInput = parseInt(document.getElementById("eur-currency").value);
    //conversion
    var sek = eurInput * 9.5633;
    var sekString = eurInput + " euro(s) = " + sek + " sek";
    document.getElementById("result").innerHTML = sekString;
}
function SekToEuro() {
    //get input value from input element
    var sekInput = parseInt(document.getElementById("swe-currency").value);
    //conversion
    var euros = sekInput * 0.1045;
    var eurosString = sekInput + " sek = " + euros + " euro(s)";
    document.getElementById("result").innerHTML = eurosString;
}
(function () {
    console.log("this runs when everything has loaded");
}());
//# sourceMappingURL=converter.js.map