// javascript to render errors in a website

// create an error variable and log into console

let errorPara = document.getElementById("error")
console.log(errorPara);

function purchase(params) {
    console.log("Purchased");
    errorPara.textContent = "Something went wrong with the purchase"
}