var product = {
    name: "ganesh",
    age: 20,
    hooby: "reading"
};
var array = new Array(); //new operator
delete product.hooby; //delete operator
var items = ["a", "b", 1];
for (var pro in product) { //in operator
    console.log(pro + ":" + product[pro]);
}
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) { //of operator
    var val = items_1[_i];
    console.log(val);
}
console.log("Product is instance of object:" + (product instanceof Object)); //instanceof operator
console.log((product.age == 20) ? "valid" : "invalid"); //ternary operator
console.log("Type of name: " + (typeof product.name) + "\nType of array: " + (typeof array)); //typeof operator
