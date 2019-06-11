var SetVal = /** @class */ (function () {
    function SetVal() {
    }
    SetVal.prototype.setId = function () {
        this.id = 1;
    };
    return SetVal;
}());
var Access = /** @class */ (function () {
    function Access() {
    }
    Access.prototype.getId = function () {
        var obj = new SetVal();
        console.log("Id=" + obj.id);
    };
    return Access;
}());
