var info = {
    Name: "Ganesh",
    Age: 21,
    DailyWork: 5,
    YearlyWork: function (dw) {
        return dw * 365;
    },
    Print: function () {
        var count = 0;
        for (var property in info) {
            if (count == 3) {
                break;
            }
            console.log(property + " : " + info[property]);
            count++;
        }
    }
};
info.Print();
console.log("Yearly Work=" + info.YearlyWork(info.DailyWork));
