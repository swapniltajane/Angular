class SetVal{
    public id:number;
    public setId():void{
        this.id=1;
    }
}
class Access{
    public getId():void{
        let obj=new SetVal();
        obj.id;
    }
}
