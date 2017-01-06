//1 euro = 9.56332175 sek
//1 sek = 0.104566178 eur

function EuroToSek(): void {
    //get input value from input element
    let eurInput: number = parseInt((<HTMLInputElement>document.getElementById("eur-currency")).value);

    //conversion
    let sek: number = eurInput * 9.5633;
    let sekString: string = eurInput + " euro(s) = " + sek + " sek";

    document.getElementById("result").innerHTML = sekString;
}

function SekToEuro(): void {
    //get input value from input element
    let sekInput: number = parseInt((<HTMLInputElement>document.getElementById("swe-currency")).value);

    //conversion
    let euros: number = sekInput * 0.1045;
    let eurosString: string = sekInput + " sek = " + euros + " euro(s)";

    document.getElementById("result").innerHTML = eurosString;
}

(function () {
    console.log("this runs when everything has loaded");
} ());