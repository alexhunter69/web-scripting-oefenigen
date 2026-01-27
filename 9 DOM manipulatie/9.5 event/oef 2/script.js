let div = document.querySelector("div");
let count = 0;
div.innerHTML = count;

function countUp(){
    count++
    div.innerHTML = count;
}

function lowerCount(){
    count--
    div.innerHTML = count;
}

function reset(){
    count = 0
    div.innerHTML = count;
}
