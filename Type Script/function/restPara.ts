function PrintList(...list:string[]):void{
    for(var value in list){
        console.log(list[value]);
    }
}
PrintList("Delhi","Hyd","Goa");