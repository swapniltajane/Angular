let product:any={
    name: "ganesh",
    age: 20,
    hooby:"reading"
};
let array:string[]=new Array(); //new operator
delete product.hooby;   //delete operator
let items:any[]=["a","b",1]
for(var pro in product){    //in operator
    console.log(pro+":"+product[pro]);
}
for(var val of items){  //of operator
    console.log(val);
}
console.log("Product is instance of object:"+(product instanceof Object));  //instanceof operator
console.log((product.age==20)?"valid":"invalid");   //ternary operator
console.log("Type of name: "+(typeof product.name)+"\nType of array: "+(typeof array)); //typeof operator