let persoon = {
    voornaam: "john",
    naam: "pork",
    leeftijd: 30,
    beroep:  "vee",
    adres: {
        straat: "kerkstraat 12",
        stad: "Maasmechelen",
        postcode: "3630",
    }
};

persoon.naam = "johnson";
console.log(persoon.naam);