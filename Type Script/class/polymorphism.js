var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "ankit";
        this.sirName = "Tambe";
    }
    Employee.prototype.Print = function () {
        console.log(this.name + " " + this.sirName);
    };
    return Employee;
}());
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Harshal";
        _this.sirName = "Sali";
        return _this;
    }
    PartTimeEmployee.prototype.Print = function () {
        console.log(this.name + " " + this.sirName + " -Part Time");
    };
    return PartTimeEmployee;
}(Employee));
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Ganesh";
        _this.sirName = "Raut";
        return _this;
    }
    FullTimeEmployee.prototype.Print = function () {
        console.log(this.name + " " + this.sirName + " -Full Time");
    };
    return FullTimeEmployee;
}(Employee));
var employee = new Array();
employee[0] = new Employee();
employee[1] = new PartTimeEmployee();
employee[2] = new FullTimeEmployee();
for (var i = 0; i < employee.length; i++) {
    employee[i].Print();
}
