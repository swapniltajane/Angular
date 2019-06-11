class Demo{
    static s:number=0;
    public n:number=0;
    constructor(){
        this.n=this.n+1;
        Demo.s=Demo.s+1;
    }
    public Print():void{
        console.log("n="+this.n+" "+"s="+Demo.s);
    }
}
let obj1=new Demo();
obj1.Print();
let obj2=new Demo();
obj2.Print();
let obj3=new Demo();
obj3.Print();