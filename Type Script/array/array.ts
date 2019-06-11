let value:string[]=["a","b","c","d"];
console.log("\nReading the values from an array:\n=============================")
console.log(value.toString());
console.log(value.join(" "));
console.log(value.slice(1,3));

console.log("\nAdding the values into an array:\n=============================")
value.push("e");
console.log(value.toString());
value.unshift("start");
console.log(value.toString());
value.splice(1,0,"from");
console.log(value.toString());

console.log("\nRemoving values from an array:\n=============================")
var remove:string=value.pop();
console.log("Removed element is "+remove);
var remove:string=value.shift();
console.log("Removed element is "+remove);
var removed:string[]=value.splice(1,2);
console.log("Removed element is "+removed);


let found:number=value.indexOf("c");
if(found==-1){
    console.log("product not found");
}else{
    console.log("product found at index "+found);
}

function getString(string){
    return string>"c";
}
let letters:string[]=value.filter(getString);
console.log("filtered elements "+letters);