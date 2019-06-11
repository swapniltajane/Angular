console.log("Welcome to TypeScript");
var a = 10;
function f1() {
    var b = 12;
    var c = 15;
    console.log("a=" + a);
    if (b == 12) {
        console.log("b=" + b);
        console.log("c" + c);
    }
}
function f2() {
    console.log("a=", +a);
}
f1();
f2();
