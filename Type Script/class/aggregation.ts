class Base2{
    public Print():void{
        console.log("Print Method in Base class");
    }
}
class Derived2{
    public Print():void{
        let obj=new Base2();
        obj.Print();
        console.log("Print Method in Derived class");
    }
}
let der=new Derived2();
der.Print();