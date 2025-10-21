const prompt = require("prompt-sync")();
let aantal = Number(prompt("geef aantal lijnen"));

for (let i = 1; i <= aantal ; i++)
{
    let spatie = " ";

    for (let j = 1; j <= aantal-i; j++)
    {
        spatie += " ";
    }
    for (let k= 1;k <= i;  k++)
    {
        spatie += "#";
    }
    console.log(spatie);
}