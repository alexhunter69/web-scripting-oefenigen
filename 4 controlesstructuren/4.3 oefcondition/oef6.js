let prompt = require("prompt-sync");

let cijfer = Number(prompt("geef een getal in tussen 1 en 3"));

switch (cijfer)
{
    case 1:
    console.log("een");
    break;
    case 2:
    console.log("twee");
    break;
    case 3:
    console.log("drie");
    break;

    default:
    console.log("geef een getal tussen 1 en 3 in");
    break;
}