let prompt=require("prompt-sync")();

let tekst=prompt("geef een tekst in:");

if(tekst.includes("kanker")|| tekst.includes("neger") || tekst.includes("hoerezoon"))
{
    console.log("dit is ongepast en niet professioneel");
}
else{
    console.log("dit is gepast");
}