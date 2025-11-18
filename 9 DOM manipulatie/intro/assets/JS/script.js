let paragraaf = document.querySelectorAll("p");
let list = document.createElement("ul");
let ListItem = document.createElement("li");
ListItem.innerHTML = "banaan";

list.appendChild(ListItem);
document.body.appendChild(list);

//element verwijder
let eersteParagraaf = document.querySelector("#eerste-paragraaf"); 
let vervangPara = document.createElement("p");
vervangPara.innerHTML = "deze p vervangt de oude!";
eersteParagraaf.parentNode.replaceChild(vervangPara, eersteParagraaf);


//stijl
let header = document.querySelector("h1");
header.style.background = "#ddd";
header.style.textDecoration = "underline";

//attribute aanpassen
let link = document.querySelector("a");
link.setAttribute("href","https://www.carrefour.be");
link.setAttribute("class" , "klasse-naam");



/*let nieuweParagraaf = document.createElement("p");
nieuweParagraaf.innerText = "nieuwe paragraaf";

document.body.appendChild(nieuweParagraaf);


//paragraaf.forEach(p =>{
//    p.innerHTML = "nieuwe inhoud"
//});

//console.log(document.querySelector('p'));*/