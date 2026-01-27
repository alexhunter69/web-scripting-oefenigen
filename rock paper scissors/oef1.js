//prompt bruibaar maken
const prompt = require("prompt-sync")();
//main: gebruikersinput vragen en functies uitvoeren
const action = prompt("kies (r) (p) of (s)");

//functie 1: pickcomputerMove
random = Math.random();
random = random*3;
random = Math.floor(random);
/*retureed 'rock, "paper" of "scissors"*/
/*er moet een 1/3 kanns op rock, paper of scissors -> random!*/
if (random == 0)
{
    let npcmove = "paper";
    return npcmove;
}
else if (random == 1)
{
    npcmove = "rock";
    return npcmove;
}
else
{
    npcmove = "scissors";
    return npcmove;
}
//function 2: decideWinner
/*neelet 2 parameter: usermove een CPUmove*/
/* vergelijk biede parameters*/
/*return "win","lose" of "draw"*/
function decideWinner(action,npcmove)
{
    switch(action)
    {
        case"r":
            if(npcmove == "rock")
            {
                return "tie";
            }
            else if(npcmove == "paper")
            {
                return "lose";
            }
            else
            {
                return "win";
            }
            break;
        case"p":
             if(npcmove == "rock")
            {
                return "win";
            }
            else if(npcmove == "paper")
            {
                return "tie";
            }
            else
            {
                return "lose";
            }
            break;
        case"s":
             if(npcmove == "rock")
            {
                return "lose";
            }
            else if(npcmove == "paper")
            {
                return "win";
            }
            else
            {
                return "tie";
            }
            break;
        
    }
}
