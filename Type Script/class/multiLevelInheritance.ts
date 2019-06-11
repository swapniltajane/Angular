class Model{
    public model:string="Redmi6 Pro";
}
class Camera extends Model{
    public camera:string="15Mp";
}
class Ram extends Camera{
    public ram:string="4gb";
}
class Memory extends Ram{
    public memory:string="64gb";
}
class Mobile extends Memory{
}
let obj1=new Mobile();
console.log("Model="+obj1.model+"\nCamera="+obj1.camera+"\nRAM="+obj1.ram+"\nMemory="+obj1.memory);