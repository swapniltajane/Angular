class Product{
    public Id:number;
    private Name:string;
    protected price:number;
}
class Tv extends Product{
    public getProperties(obj:Tv){
        obj.Id;
        //obj.Name; this is not accesible because of dclared as a private
        obj.price;
    }
}