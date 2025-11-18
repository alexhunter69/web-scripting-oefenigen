function verdubbel(arr) {
    let verdubbel = arr.map(getal => {
        return getal * 2
    });

    return verdubbel;
}
let getallen = [1,2,3] ;
let verdubbelgetallen = verdubbel(getallen);

console.log(verdubbelgetallen);