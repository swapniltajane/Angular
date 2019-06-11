class Base{
    private constructor(){}
    public Print():void {
        console.log("Print Method");       
    }
}
//class Derived extends Base{} //invalid to extend the base class
//let b1=new Base();
let b2:Base;