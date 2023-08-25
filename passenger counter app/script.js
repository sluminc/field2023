let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

// function increment() {
//     console.log(count + " people entered");
//     count=count+1;
// }

function increment() {
    count += 1;
    countEl.innerText = count;    
}

// function resetpeople() {
//     count=1;
//     document.getElementById("countEl").innerText = 0;    
// }

function save() {
     let entries = count + "-"

     saveEl.innerText += entries
}