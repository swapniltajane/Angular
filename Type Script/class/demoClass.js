var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.Print = function () {
        console.log("Class A");
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.Print = function () {
        console.log("Class B");
    };
    return B;
}());
var a = new A();
var b = new B();
a.Print();
b.Print();
