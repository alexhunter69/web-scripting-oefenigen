let persoon = {
    naam: "alex",
    leeftijd: "17",
    adres: {
        straat: "rijksweg",
        stad: "Dilsen-Stokkem",
        postcode: "3650"
    },
    introduceer: function(){
        return console.log("hello mijn maan is " + this.naam + "en ik ben " +this.leeftijd + " jaar oud en ik woon in " + this.stad)
    }
}
