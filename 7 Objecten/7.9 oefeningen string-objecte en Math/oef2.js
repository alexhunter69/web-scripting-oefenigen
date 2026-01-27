function splitsInZinnen(tekst){
    let zinnen = tekst.split(".");
    zinnen = zinnen.map(z => z.trim);
}
splitsInZinnen(" dot een beetje. t  ")