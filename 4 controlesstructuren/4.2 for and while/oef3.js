const prompt = require("prompt-sync")();

let start = Number(prompt("geef een start"));
let eind = Number(prompt("geef een eind getal"));

for (i = start;  i <= eind; i++)
{
    if(i %2 ==0){
        console.log(i);
    }
}
