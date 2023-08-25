let firstName = "Bunda"
let lastName = "Jokozi"
let name = "Linda"
let greeting = "Hello there, "
let myPoints = 3

let fullName = firstName + " " + lastName

console.log(fullName);

function greets(params) {
    console.log(greeting + name + "!");
}

function add3points(params) {
    myPoints += 3
}

function remove1point(params) {
    myPoints -= 1
}

greets()

add3points()
add3points()
add3points()
remove1point()
remove1point()
console.log(myPoints);
