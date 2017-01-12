module EmployeeManagementSystem {
    enum Department { Administration = 1, Tech, IT, Marketing, HR }

    //arrays of different employee types
    export let fulltimers: FullTimeEmployee[] = [];
    export let parttimers: PartTimeEmployee[] = [];
    export let all: Employee[] = [];

    export module Functions {
        export let GetAllEmployees = function (): EmployeeManagementSystem.Employee[] {
            let all: EmployeeManagementSystem.Employee[] = [];

            for (var fulltimer of fulltimers) {
                all.push(fulltimer);
            }
            for (var parttimer of parttimers) {
                all.push(parttimer);
            }

            return all;
        };
        export function AppInit() {
            EmployeeManagementSystem.fulltimers.push(
                new EmployeeManagementSystem.FullTimeEmployee("ivan", "prgomet", "it", true, "passionate"),
                new EmployeeManagementSystem.FullTimeEmployee("lea", "winchester", "marketing", false, "very talkative"),
                new EmployeeManagementSystem.FullTimeEmployee("rocco", "farcello", "hr", true, "funny")
            );

            EmployeeManagementSystem.parttimers.push(
                new EmployeeManagementSystem.PartTimeEmployee("sid", "morcini", "marketing", true, true)
            );

            EmployeeManagementSystem.all = EmployeeManagementSystem.Functions.GetAllEmployees();
        }
        export function ResetAllDivs() {
            document.getElementById("all-employees").innerHTML = "";
            document.getElementById("all-fulltime").innerHTML = "";
            document.getElementById("all-parttime").innerHTML = "";
        }
    }
    
    //employee classes
    export class Employee {
        Firstname: string;
        Lastname: string;
        Department: string;

        constructor(firstname: string, lastname: string, department: string) {
            this.Firstname = firstname;
            this.Lastname = lastname;
            this.Department = department;
        }
    }
    export class FullTimeEmployee extends Employee {
        HasCar: boolean;
        OtherInfo: string;

        constructor(_firstname: string, _lastname: string, _department: string, hascar: boolean, otherinfo: string) {
            super(_firstname, _lastname, _department);

            this.HasCar = hascar;
            this.OtherInfo = otherinfo;
        }
    }
    export class PartTimeEmployee extends Employee {
        HasServiceCar: boolean;
        HasCompanyUniform: boolean;

        constructor(_firstname: string, _lastname: string, _department: string, hasservicecar: boolean, hascompanyuniform: boolean) {
            super(_firstname, _lastname, _department);

            this.HasServiceCar = hasservicecar;
            this.HasCompanyUniform = hascompanyuniform;
        }
    }
}


window.onload = function () {
    EmployeeManagementSystem.Functions.AppInit();

    var divAll = document.getElementById("all-employees");
    var divFulltime = document.getElementById("all-fulltime");
    var divParttime = document.getElementById("all-parttime");

    document.getElementById("btnEmployees").addEventListener("click", function (e) {
        EmployeeManagementSystem.Functions.ResetAllDivs();
        for (var emp of EmployeeManagementSystem.all) {
            divAll.innerHTML += emp.Firstname + " " + emp.Lastname + " (" + emp.Department + ")<br/>";
        }
    })
    document.getElementById("btnFulltimeEmployees").addEventListener("click", function (e) {
        EmployeeManagementSystem.Functions.ResetAllDivs();

        for (var emp of EmployeeManagementSystem.fulltimers) {
            divFulltime.innerHTML += emp.Firstname + " " + emp.Lastname + " (" + emp.Department + ")<br/>has car: "
                + emp.HasCar + "<br/>other info:" + emp.OtherInfo + "<br/><br/>";
        }
    })
    document.getElementById("btnPartTimeEmployees").addEventListener("click", function (e) {
        EmployeeManagementSystem.Functions.ResetAllDivs();
        for (var emp of EmployeeManagementSystem.parttimers) {
            divParttime.innerHTML += emp.Firstname + " " + emp.Lastname + "<br/>" + emp.Department + "<br/>has service car: "
                + emp.HasServiceCar + "<br/>has company uniform: " + emp.HasCompanyUniform + "<br/><br/>";
        }
    })

}