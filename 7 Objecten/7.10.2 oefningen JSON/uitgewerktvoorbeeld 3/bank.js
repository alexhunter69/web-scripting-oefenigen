//prompt-sync bruikbaar maken via var
const prompt = require("prompt-sync")();

//localstrage bruikbaaar maken via var
if(typeof localStorage === "undefined" || localStorage == null){
    let LocalStorage = require('node-localstorage').LocalStorage;
    localStorage= new LocalStorage ('./scratch')
}

//bankacc aanmaken
let bankAccount = {
    balance:0
}

//controleren of er al een bankacc in de localstorge zit
let savebankacc = localStorage.getItem("bankaccount");
if (savebankacc) { //controleren of er iets in savebankacc zit
    bankAccount = JSON.parse(savebankacc);
}

//gruikbers input vragen en bankaccount
console.log("your current balance is :€ " + bankAccount.balance)
const action = prompt("do you want to deposted (d) or withdraw (w)")

if(action=="d")
{
    bankAccount.balance += 100;
}
else if (action=="w")
{
    bankAccount.balance -= 100;
}
else {
    console.log("enter a 'd' to depostie or a 'w' to witdraw");
}
console.log("your new balance is €:" + bankAccount.balance);

//bankaccount omzetten naar JSON
let bankJson = JSON.stringify(bankAccount);
//bankJSON opslaan in localstage
localStorage.setItem("bankaccount",bankJson);