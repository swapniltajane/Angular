var date = new Date();
var h = date.getHours();
console.log("hour=" + h);
if (h < 12 && h >= 7) {
    console.log("Good Morning...!");
}
if (h < 17 && h >= 12) {
    console.log("Good Afternoon...!");
}
if (h < 20 && h >= 17) {
    console.log("Good Evening...!");
}
if (h < 24 && h >= 20) {
    console.log("Good Night...!");
}
