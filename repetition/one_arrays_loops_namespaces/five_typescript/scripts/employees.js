var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmployeeManagementSystem;
(function (EmployeeManagementSystem) {
    var Department;
    (function (Department) {
        Department[Department["Administration"] = 1] = "Administration";
        Department[Department["Tech"] = 2] = "Tech";
        Department[Department["IT"] = 3] = "IT";
        Department[Department["Marketing"] = 4] = "Marketing";
        Department[Department["HR"] = 5] = "HR";
    })(Department || (Department = {}));
    //arrays of different employee types
    EmployeeManagementSystem.fulltimers = [];
    EmployeeManagementSystem.parttimers = [];
    EmployeeManagementSystem.all = [];
    var Functions;
    (function (Functions) {
        Functions.GetAllEmployees = function () {
            var all = [];
            for (var _i = 0; _i < EmployeeManagementSystem.fulltimers.length; _i++) {
                var fulltimer = EmployeeManagementSystem.fulltimers[_i];
                all.push(fulltimer);
            }
            for (var _a = 0; _a < EmployeeManagementSystem.parttimers.length; _a++) {
                var parttimer = EmployeeManagementSystem.parttimers[_a];
                all.push(parttimer);
            }
            return all;
        };
        function AppInit() {
            EmployeeManagementSystem.fulltimers.push(new EmployeeManagementSystem.FullTimeEmployee("ivan", "prgomet", "it", true, "passionate"), new EmployeeManagementSystem.FullTimeEmployee("lea", "winchester", "marketing", false, "very talkative"), new EmployeeManagementSystem.FullTimeEmployee("rocco", "farcello", "hr", true, "funny"));
            EmployeeManagementSystem.parttimers.push(new EmployeeManagementSystem.PartTimeEmployee("sid", "morcini", "marketing", true, true));
            EmployeeManagementSystem.all = EmployeeManagementSystem.Functions.GetAllEmployees();
        }
        Functions.AppInit = AppInit;
        function ResetAllDivs() {
            document.getElementById("all-employees").innerHTML = "";
            document.getElementById("all-fulltime").innerHTML = "";
            document.getElementById("all-parttime").innerHTML = "";
        }
        Functions.ResetAllDivs = ResetAllDivs;
    })(Functions = EmployeeManagementSystem.Functions || (EmployeeManagementSystem.Functions = {}));
    //employee classes
    var Employee = (function () {
        function Employee(firstname, lastname, department) {
            this.Firstname = firstname;
            this.Lastname = lastname;
            this.Department = department;
        }
        return Employee;
    })();
    EmployeeManagementSystem.Employee = Employee;
    var FullTimeEmployee = (function (_super) {
        __extends(FullTimeEmployee, _super);
        function FullTimeEmployee(_firstname, _lastname, _department, hascar, otherinfo) {
            _super.call(this, _firstname, _lastname, _department);
            this.HasCar = hascar;
            this.OtherInfo = otherinfo;
        }
        return FullTimeEmployee;
    })(Employee);
    EmployeeManagementSystem.FullTimeEmployee = FullTimeEmployee;
    var PartTimeEmployee = (function (_super) {
        __extends(PartTimeEmployee, _super);
        function PartTimeEmployee(_firstname, _lastname, _department, hasservicecar, hascompanyuniform) {
            _super.call(this, _firstname, _lastname, _department);
            this.HasServiceCar = hasservicecar;
            this.HasCompanyUniform = hascompanyuniform;
        }
        return PartTimeEmployee;
    })(Employee);
    EmployeeManagementSystem.PartTimeEmployee = PartTimeEmployee;
})(EmployeeManagementSystem || (EmployeeManagementSystem = {}));
window.onload = function () {
    EmployeeManagementSystem.Functions.AppInit();
    var divAll = document.getElementById("all-employees");
    var divFulltime = document.getElementById("all-fulltime");
    var divParttime = document.getElementById("all-parttime");
    document.getElementById("btnEmployees").addEventListener("click", function (e) {
        EmployeeManagementSystem.Functions.ResetAllDivs();
        for (var _i = 0, _a = EmployeeManagementSystem.all; _i < _a.length; _i++) {
            var emp = _a[_i];
            divAll.innerHTML += emp.Firstname + " " + emp.Lastname + " (" + emp.Department + ")<br/>";
        }
    });
    document.getElementById("btnFulltimeEmployees").addEventListener("click", function (e) {
        EmployeeManagementSystem.Functions.ResetAllDivs();
        for (var _i = 0, _a = EmployeeManagementSystem.fulltimers; _i < _a.length; _i++) {
            var emp = _a[_i];
            divFulltime.innerHTML += emp.Firstname + " " + emp.Lastname + " (" + emp.Department + ")<br/>has car: "
                + emp.HasCar + "<br/>other info:" + emp.OtherInfo + "<br/><br/>";
        }
    });
    document.getElementById("btnPartTimeEmployees").addEventListener("click", function (e) {
        EmployeeManagementSystem.Functions.ResetAllDivs();
        for (var _i = 0, _a = EmployeeManagementSystem.parttimers; _i < _a.length; _i++) {
            var emp = _a[_i];
            divParttime.innerHTML += emp.Firstname + " " + emp.Lastname + "<br/>" + emp.Department + "<br/>has service car: "
                + emp.HasServiceCar + "<br/>has company uniform: " + emp.HasCompanyUniform + "<br/><br/>";
        }
    });
};
