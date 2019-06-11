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
var Model = /** @class */ (function () {
    function Model() {
        this.model = "Redmi6 Pro";
    }
    return Model;
}());
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = "15Mp";
        return _this;
    }
    return Camera;
}(Model));
var Ram = /** @class */ (function (_super) {
    __extends(Ram, _super);
    function Ram() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ram = "4gb";
        return _this;
    }
    return Ram;
}(Camera));
var Memory = /** @class */ (function (_super) {
    __extends(Memory, _super);
    function Memory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.memory = "64gb";
        return _this;
    }
    return Memory;
}(Ram));
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mobile;
}(Memory));
var obj1 = new Mobile();
console.log("Model=" + obj1.model + "\nCamera=" + obj1.camera + "\nRAM=" + obj1.ram + "\nMemory=" + obj1.memory);
