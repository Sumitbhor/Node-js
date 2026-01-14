console.log("🎉 Happy New Year 2026 🎉");
var number = 239;

function display() {
    console.log("😊 Same to you!");
}

function display2() {
    console.log("❓ How is your Node.js learning going?");
}

function display3() {
    console.log("💪 I am learning Node.js!");
}
//multitasking
setInterval(display, 3000);  
setInterval(display2, 1000);
setInterval(display3, 500);  
