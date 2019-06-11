var Project;
(function (Project) {
    var ProjectA;
    (function (ProjectA) {
        var Class1 = /** @class */ (function () {
            function Class1() {
            }
            Class1.prototype.Print = function () {
                console.log("ProjectA Class1");
            };
            return Class1;
        }());
        ProjectA.Class1 = Class1;
    })(ProjectA = Project.ProjectA || (Project.ProjectA = {}));
    var ProjectB;
    (function (ProjectB) {
        var Class1 = /** @class */ (function () {
            function Class1() {
            }
            Class1.prototype.Print = function () {
                console.log("ProjectB Class1");
            };
            return Class1;
        }());
        ProjectB.Class1 = Class1;
    })(ProjectB = Project.ProjectB || (Project.ProjectB = {}));
})(Project || (Project = {}));
//Aliasing namespace
var AClass = Project.ProjectA;
var BClass = Project.ProjectB;
var pr1 = new AClass.Class1();
var pr2 = new BClass.Class1();
pr1.Print();
pr2.Print();
