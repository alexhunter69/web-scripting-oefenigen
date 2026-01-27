let persoon = {
    naam: "alex",
    leeftijd: "17",
    adres: {
        straat: "rijksweg",
        stad: "Dilsen-Stokkem",
        postcode: "3650"
    }
}
toonPersoonDetails(persoon);

function toonPersoonDetails(obj){
    console.log(obj.naam);
    console.log(obj.leeftijd);
    console.log(obj.adres.stad);
}