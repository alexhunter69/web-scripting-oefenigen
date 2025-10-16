let prompt = reqire ("prompt-sync")

let score1 = prompt("geef score 1 in:");
let score2 = prompt("geef score 2 in:");

if(score1 > 50 && score2 > 50)
{
    console.log("biede scores zijn goed")
}
else if(score1 > 50 || score > 50)
{
    console.log("een score is goed")
}
else
{
    console.log("biede scores zijn slecht")
}