function PrintList() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    for (var value in list) {
        console.log(list[value]);
    }
}
PrintList("Delhi", "Hyd", "Goa");
