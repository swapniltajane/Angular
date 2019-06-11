interface Pinfo{
    Name:string;
    Age:number;
    DailyWork:number;
    YearlyWork?(dw:number):number;
    Print?():void;
}
let info:Pinfo={
    Name:"Ganesh",
    Age:21,
    DailyWork:5,
    YearlyWork:function(dw){
        return dw*365;
    },
    Print:function(){
        let count:number=0;
        for(var property in info){
            if(count==3){
                break;
            }
            console.log(property+" : "+info[property]);
            count++;
        }
    }
};
info.Print();
console.log("Yearly Work="+info.YearlyWork(info.DailyWork));