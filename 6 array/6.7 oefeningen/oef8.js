function teldeElemente(getallen){
    let som = 0;
    for (let i of getallen){
        som+= i;
    }
    return som;
}
let som = [1,5,8];
console.log(teldeElemente(som));