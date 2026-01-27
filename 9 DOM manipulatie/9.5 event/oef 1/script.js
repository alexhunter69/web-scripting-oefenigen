/*let button = document.querySelector("button");
button.innerHTML("subscribed");

if(button.innerHTML("subscribed"))
{
    button = document.querySelector("button");
    button.innerHTML("subscribe")
}*/

function changeText(){
    let button = document.querySelector('#subscribe-button');

    if(button.innerHTML == 'Subscribed'){
        button.innerHTML = 'Subscribe';
        button.style.backgroundColor = "grijs"
    }
    else{
        button.innerHTML = 'Subscribed';
    }
}