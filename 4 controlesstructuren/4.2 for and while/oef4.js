const prompt =require("prompt-sync")
let tekst = ("geef een tekst")

let antwoord = "";
for(i = tekst.length -1; i>= 0; i--)
{
    antwoord = antwoord+ tekst[i];
}
console.log(antwoord);