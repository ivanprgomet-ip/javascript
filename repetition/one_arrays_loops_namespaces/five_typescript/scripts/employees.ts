module EmployeeManagementSystem {

    enum Department { Administration = 1, Tech, IT, Marketing, HR }

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

    let fulltimers: EmployeeManagementSystem.Employee[] = [
            new EmployeeManagementSystem.FullTimeEmployee("ivan", "prgomet", "it", true, "passionate"),
            new EmployeeManagementSystem.FullTimeEmployee("lea", "winchester", "marketing", false, "very talkative"),
            new EmployeeManagementSystem.FullTimeEmployee("rocco", "farcello", "hr", true, "funny"),
            new EmployeeManagementSystem.PartTimeEmployee("sid", "morcini", "marketing", true, true),
    ];
    let parttimers: EmployeeManagementSystem.Employee[] = [
        new EmployeeManagementSystem.PartTimeEmployee("sid", "morcini", "marketing", true, true),
    ];

    let GetAllEmployees = function (): EmployeeManagementSystem.Employee[] {
        let all: EmployeeManagementSystem.Employee[] = [];

        for (var fulltimer of fulltimers) {
            all.push(fulltimer);
        }
        for (var parttimer of parttimers) {
            all.push(parttimer);
        }

        return all;
    };

    let all = GetAllEmployees();
    console.log(all);
}