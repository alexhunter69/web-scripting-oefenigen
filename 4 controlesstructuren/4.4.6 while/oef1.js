let prompt = require("prompt-sync");

let getal = Number(prompt("geef een getal in :"));
let som =0;

while(getal > 0)
{
    getal = Number (prompt("geef een getal in:"));
    som = som+getal;
}
console.log(som);