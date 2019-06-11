class SuperClass{
    public Print():void{
        console.log("Base class print method");
    }
}
class Derived extends SuperClass{
    public Print():void{
        super.Print();
        console.log("Derived class print method");
    }
}
let obj=new Derived();
obj.Print();