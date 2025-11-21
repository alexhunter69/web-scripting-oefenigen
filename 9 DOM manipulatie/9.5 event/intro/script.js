function changeText(){
    let button = document.querySelector("button");
    button.innerHTML = "stop clickking me!";
    button.style.backgroundColor = "pink";
}

//inhoud input toeveoegn aan een div, die toevoegen aan de body
function addToBody(){
    let input = document.querySelector("input");
    let div = document.createElement("div");

    div.innerHTML = input.value;

    document.body.appendChild(div);
}
function removeDiv(){
    let divs = document.querySelectorAll("div");

    //divs.forEach();

    for(let d of divs){
        d.parentNode.removeChild(d);
    }
}