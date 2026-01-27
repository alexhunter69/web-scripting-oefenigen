function genereerWillekeurigGetal(min, max){
    let interval = max - min;
    let willekeurig = Math.random();
    let getal = interval * willekeurig + min;
    return Math.round(getal);
}

console.log(genereerWillekeurigGetal(5,10));