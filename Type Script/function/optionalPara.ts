function Print(Id:number,Name?:string):void{
    if(Name===undefined){
        console.log("ID="+Id);
    }else{
        console.log("ID="+Id+" Name="+Name);
    }
}
Print(1,"swapnil");
Print(2);