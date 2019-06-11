function pascal(n:number):void{
    var str:string="";
    for(var i=0;i<n;i++){
        for(var space=1;space<=n-i;space++){
            str=str+" ";
        }
        for(var j=0;j<=i;j++){
            if(i==0 || j==0){
                var cal=1;
            }else{
                cal=cal*(i-j+1)/j;
            }
            str=str+cal;
            str=str+" ";
        }
        str=str+("\n");
    }
    console.log(str);
}
pascal(8);