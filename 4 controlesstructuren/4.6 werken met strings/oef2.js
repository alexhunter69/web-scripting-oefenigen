let prompt = require("prompt-sync")();

let tekst = prompt("geef een tekst in:");

if(tekst.substring(tekst.length-1,1) != ".")
{
    console.log(tekst.toUpperCase() + ".");
}
else{
    console.log(tekst);
}