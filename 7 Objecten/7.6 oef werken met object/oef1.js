let auto = {
    merk: "mercedes",
    model: "S-klasse",
    bouwjaar: "2018",
    kilometerstand: 2000
    
}

kilometerstandupdate(auto,500);
toonautoInfo(auto);


function kilometerstandupdate (obj , extra){
        obj.kilometerstand += extra;
    }
function toonautoInfo(obj){
    console.log(obj.merk);
    console.log(obj.model);
    console.log(obj.bouwjaar);
    console.log(obj.kilometerstand);
}