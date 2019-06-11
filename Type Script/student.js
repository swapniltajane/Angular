var student = {
    RollNo: 1,
    Name: "swapnil",
    SirName: "Tajane",
    Marks: [40, 50, 70],
    Percentage: function (marks) {
        return (student.Marks[0] + student.Marks[1] + student.Marks[2]) / 3;
    }
};
var count = 0;
for (var property in student) {
    if (count == 3) {
        break;
    }
    console.log(property + " : " + student[property]);
    count++;
}
console.log("Percentage= " + student.Percentage(student.Marks));
