var button = {
    width: 100,
    height: 50,
    value: "default",
    close: function () {
        return "closes the window";
    },
    open: function () {
        return "opens the window";
    }
};
var button1 = {
    open: function () {
        return "opens the window+";
    }
};
console.log("button width= " + button.width + "button height= " + button.height);
button.value = "close";
console.log("button value=" + button.value + "\n" + "close method= " + button.close());
button.value = "open";
console.log("button value=" + button.value + "\n" + "open method= " + button.open());
console.log("function outside the object block" + button1.open());
