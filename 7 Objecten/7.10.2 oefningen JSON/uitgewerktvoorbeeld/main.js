//zorg dat prompt werkt
const prompt =require('prompt-sync')();

//zorg dat localstorage werkt
if (typeof localStorage === "undefined" || localStorage === nul){
    let Localstorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
//bankacc json uit de localstorage halen
let bankJson = localStorage.getItem("bankAccount");
//bankacc json omzetten in object
let bankAccount = JSON.parse(bankJson)

//hoofdprogramma
console.log('Current balance: '+bankAccount.balance);
let amount;
let action=prompt("Would you like to deposit(d) or Withdraw(w)?");

if (action =="w"){
    amount = Number(prompt("How much would you like to withdraw? "));
    if (amount<= bankAccount.balance){
    bankAccount.balance -= amount;
    }
    else {
        console.log("Insuffien balance");
    }  
}else if(action=="d"){
    amount=Number(prompt("How much would you like to deposit?"));
    bankAccount.balance+=amount;

}else{
    console.log("Enter a 'd' to deposit or a 'w' to withdraw.");
}

console.log("Your new balance is: "+bankAccount.balance);

//bankacc terugh opslaan in localstorage
bankJson = JSON.stringify(bankAccount);
localStorage.setItem("bankAccount" , bankJson);