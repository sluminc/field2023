console.log("Working!");

let num1 = 5
let num2 = 8
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let s = document.getElementById("sum")

function add(params) {
    let  result = num1 + num2
    s.textContent = "Sum: " + result
}
function sub(params) {
    let  result = num1 - num2
    s.textContent = "Sum: " + result
}
function mul(params) {
    let  result = num1 * num2
    s.textContent = "Sum: " + result
}
function div(params) {
    let  result = num1 / num2
    s.textContent = "Sum: " + result
}