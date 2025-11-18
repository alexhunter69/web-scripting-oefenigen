function combineerenManipuleer(a, b){
    let nieuwe = a.concat(b);
    nieuwe.push(7);
    nieuwe.sort((a,b) => {return b-a});
    return nieuwe;
}
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let nieuw = combineerenManipuleer(arr1, arr2);
console.log(nieuw);