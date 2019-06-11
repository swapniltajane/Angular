class Employee{
    public name:string="ankit";
    public sirName:string="Tambe";
    public Print():void{
        console.log(this.name+" "+this.sirName);
    }
}
class PartTimeEmployee extends Employee{
    public name:string="Harshal";
    public sirName:string="Sali";
    public Print():void{
        console.log(this.name+" "+this.sirName+" -Part Time");
    }
}
class FullTimeEmployee extends Employee{
    public name:string="Ganesh";
    public sirName:string="Raut";
    public Print():void{
        console.log(this.name+" "+this.sirName+" -Full Time");
    }
}

let employee:Employee[]=new Array();
employee[0]=new Employee();
employee[1]=new PartTimeEmployee();
employee[2]=new FullTimeEmployee();

for(var i=0;i<employee.length;i++){
    employee[i].Print();
}