//Body of Calculator
var body = document.createElement("div")
body.className = "container"

//Display
var display = document.createElement("div")
display.className = "row-display"
display.style.fontSize="40px"
display.style.textAlign = "right"

//content
function input_creation(tagname, clVal, type, typeVal, id, valTxt) {
    var a = document.createElement(tagname);
    a.className = clVal
    a.setAttribute(type, typeVal)
    a.id = id
    a.innerHTML = valTxt
    return a
}
//content-top
var content_top = document.createElement("div")
content_top.className = "row-top"
var b1 = input_creation("button", "btn btn-primary btn-lg", "type", "number", "clear", "C");
b1.addEventListener("click", clear)
var b2 = input_creation("button", "btn btn-primary btn-lg", "type", "number", "dot", ".");
b2.addEventListener("click", point)
var b3 = input_creation("button", "btn btn-primary btn-lg", "type", "number", "multiply", "x");
b3.addEventListener("click", multiply)

//Numberfunction
function num(id) {
    var x = document.getElementById(id).innerHTML
    display.append(x)
}

//Clearfunction
function clear() {
    display.innerHTML = ""
}

//Pointfunction
function point() {
    var y = `.`
    display.append(y)
}
//Divide
function divide() {
    var d = `/`
    display.append(d)
}

//Addition
function add() {
    var add1 = `+`
    display.append(add1)
}

//Subtraction
function sub() {
    var sub1 = `-`
    display.append(sub1)
}

//Multiplication
function multiply() {
    var mul = `*`
    display.append(mul)
}
//Result
function calc() {
    var final = eval(display.innerHTML);
    display.innerHTML = ""
    display.append(final)
}

//row1
var content1 = document.createElement("div")
content1.className = "row1"
var no1 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num7", "7");
no1.addEventListener("click", function () { num("num7") });
var no2 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num8", "8");
no2.addEventListener("click", function () { num("num8") });
var no3 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num9", "9");
no3.addEventListener("click", function () { num("num9") });
var no4 = input_creation("button", "btn btn-primary btn-lg", "type", "number", "divide", "/");
no4.addEventListener("click", divide);

//row2
var content2 = document.createElement("div")
content2.className = "row2"
var no5 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num4", "4");
no5.addEventListener("click", function () { num("num4") });
var no6 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num5", "5");
no6.addEventListener("click", function () { num("num5") });
var no7 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num6", "6");
no7.addEventListener("click", function () { num("num6") });
var no8 = input_creation("button", "btn btn-primary btn-lg", "type", "number", "sub", "-");
no8.addEventListener("click", sub)

//row3
var content3 = document.createElement("div")
content3.className = "row3"
var no9 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num1", "1");
no9.addEventListener("click", function () { num("num1") });
var no10 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num2", "2");
no10.addEventListener("click", function () { num("num2") });
var no11 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num3", "3");
no11.addEventListener("click", function () { num("num3") });
var no12 = input_creation("button", "btn btn-primary btn-lg", "type", "number", "add", "+");
no12.addEventListener("click", add)

//content-bottom
var content_bottom = document.createElement("div")
content_bottom.className = "row-bottom"
var t1 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num0", "0");
t1.addEventListener("click", function () { num("num0") });
var t2 = input_creation("button", "btn btn-secondary btn-lg", "type", "number", "num00", "00");
t2.addEventListener("click", function () { num("num00") });
var result = input_creation("button", "btn btn-primary btn-lg", "type", "number", "result", "=");
result.addEventListener("click", calc);

content_bottom.append(t1, t2, result)
content3.append(no9, no10, no11, no12)
content2.append(no5, no6, no7, no8)
content1.append(no1, no2, no3, no4)
content_top.append(b1, b2, b3)
body.append(display, content_top, content1, content2, content3, content_bottom)
document.body.append(body)
