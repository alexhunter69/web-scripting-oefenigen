let autoJson = '{"model":"auris","merk":"Toyota","bouwjaar":"2016"}';

let auto = JSON.parse(autoJson);

console.log('Simon rijdt met een dikke ' + auto.merk , auto.model);