class Products{
    public id:number;
    public name:string;
    public isInStock?:boolean;
}
let product:Products={
    id:1,
    name:"shoe",
    isInStock:true
};
console.log("Id="+product.id+"name="+product.name);