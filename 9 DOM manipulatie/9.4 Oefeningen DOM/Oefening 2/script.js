let todo1 = "get groceries ";
let todo2 = "was car ";
let todo3 = "make supper ";

let div1 = document.createElement("div"); 
let div2 = document.createElement("div");
let div3 = document.createElement("div");

div1.innerHTML = todo1;
div2.innerHTML = todo2;
div3.innerHTML = todo3;

document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);