interface IProduct{
    ProductId:number;
    Name:string;
    Print():void;
}
interface ICategoery{
    Categoery:string;
}
class Product implements IProduct,ICategoery{
    public ProductId:number=1;
    public Name:string="TV";
    public Categoery:string="Electronics";
    public Print():void{
        console.log(this.ProductId+" "+this.Name+" "+this.Categoery);
    }
}
let product=new Product();
product.Print();