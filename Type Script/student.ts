interface Student{
    RollNo:number;
    Name:string;
    SirName:string;
    Marks:number[];
    Percentage(marks:number[]):number;
}

    let student:Student={
        RollNo:1,
        Name:"swapnil",
        SirName:"Tajane",
        Marks:[40,50,70],
        Percentage:function(marks:number[]){
            return (student.Marks[0]+student.Marks[1]+student.Marks[2])/3;
        }
    }
    let count:number=0;
    for(var property in student){
        if(count==3){
            break;
        }
        console.log(property+" : "+student[property]);
        count++;
    }
    console.log("Percentage= "+student.Percentage(student.Marks));

