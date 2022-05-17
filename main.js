let display = document.getElementById("display");

function clear1() {
    display.value = "";
}
function calc() {
    display.value = eval(display.value);
}
function press(x) {
    display.value += x;
}