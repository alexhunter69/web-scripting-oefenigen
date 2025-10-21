let prompt = reqire("prompt-sync")();

let jaar = prompt("geef een jaar in: ");
let maand = prompt("geeef een maand in: ")

if (maand = 2)
{
    if(jaar %4 == 0 && (jaar %100 == !0 || jaar %400 == 0)){
        console.log("februari is een schrikkeljaar");    
    } else{
        console.log("februari is geen schrikkeljaar");
    }
} else{
    console.log("geen februari");
}

