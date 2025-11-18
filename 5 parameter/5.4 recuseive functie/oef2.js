function fiebnatio(n){

    if(n === 0)
    {
        return 0;
    }
    else if(n === 1)
    {
        return 1;
    }
    else
    {
        return fiebnatio(n-1) + fiebnatio(n-2)
    }
}
console.log(fiebnatio(0))
console.log(fiebnatio(1))
console.log(fiebnatio(2))
console.log(fiebnatio(3))
console.log(fiebnatio(4))
console.log(fiebnatio(5))
