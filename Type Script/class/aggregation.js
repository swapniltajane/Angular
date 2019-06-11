var Base2 = /** @class */ (function () {
    function Base2() {
    }
    Base2.prototype.Print = function () {
        console.log("Print Method in Base class");
    };
    return Base2;
}());
var Derived2 = /** @class */ (function () {
    function Derived2() {
    }
    Derived2.prototype.Print = function () {
        var obj = new Base2();
        obj.Print();
        console.log("Print Method in Derived class");
    };
    return Derived2;
}());
var der = new Derived2();
der.Print();
