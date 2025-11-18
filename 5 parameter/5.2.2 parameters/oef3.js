function berekenKorting(prijs, kortingsgroep , aantal)
{
    let korting;
    switch (kortingsgroep)
    {
        case "a":
            korting =0.10;
        break;
        case "b":
            korting=0.20;
        break
        default:
            console.log("geef een korting in");
        break 
    }
    console.log("de totaalprijs na " + korting*100 +"% korting is" +((prijs*aantal) -(prijs*aantal*korting))+ "euro");
}
berekenKorting(10 , "b",1);