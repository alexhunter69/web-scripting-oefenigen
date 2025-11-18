function maakteller() {
    let count = 0;
    return function() {
        count++
        return count;
    };
}
let mijnteller = maakteller();
console.log(mijnteller()); //output//