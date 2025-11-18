let letter = ["a" ,"a" ,"b" ,"c"];
let verwijderdubble =[];
letter.forEach(function(letter){
    if (verwijderdubble.indexOf(letter)==-1){
        verwijderdubble.push(letter);
    }
});
console.log(verwijderdubble)