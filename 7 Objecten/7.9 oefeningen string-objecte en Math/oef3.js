function verwijderWoord(tekst, woord) {
    let deelzinnen = tekst.split(woord);
    deelzinnen = deelzinnen.map(dz => dz.trim());
    return deelzinnen.join(" ");
}
let zin = "dit is een test.";
console.log(verwijderWoord(zin, "een"));