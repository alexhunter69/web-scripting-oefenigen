function consinusregel(a,b,c){
    let b2 = Math.pow(b,2);
    let c2 = Math.pow(c,2);
    let uitkosts = b2 + c2 -2*b*c*Math.cos(a);
    uitkosts = Math.sqrt(uitkosts);
    
}

console.log(consinusregel(2,5,8));