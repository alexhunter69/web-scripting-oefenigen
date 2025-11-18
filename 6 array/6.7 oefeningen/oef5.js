function eerstenLaaste(arr) {
    let laatste = arr.pop();
    let eerste = arr.shift();
    let newarr = [eerste, laatste];
    //newarr.push(laaste , eerste);
    return newarr;
}

getal = [2,3,5];
let getaleerstelaaste = eerstenLaaste(getal);
console.log(getaleerstelaaste);