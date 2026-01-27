function rondvierkandwortelAf(getal){
    let resultaat= Math.sqrt(getal);
    resultaat = Math.round(resultaat *100);
    resultaat /=100;
    return resultaat;
}

console.log(rondvierkandwortelAf(8));