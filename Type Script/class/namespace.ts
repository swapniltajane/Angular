namespace Project{
    export namespace ProjectA{
        export class Class1{
            public Print():void{
                console.log("ProjectA Class1");
            }
        }
    }
    export namespace ProjectB{
        export class Class1{
            public Print():void{
                console.log("ProjectB Class1");
            }
        }
    }
}

//Aliasing namespace
let AClass=Project.ProjectA;
let BClass=Project.ProjectB;

let pr1=new AClass.Class1();
let pr2=new BClass.Class1();

pr1.Print();
pr2.Print();
