function add(){
    let input = document.querySelector("input");
    let item = input.value;

    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.appendChild(div);
}
function reset(){
    let divs = document.querySelectorAll("div");
    divs.forEach(d => {
        d.parentNode.removeChild(d);
    });
}