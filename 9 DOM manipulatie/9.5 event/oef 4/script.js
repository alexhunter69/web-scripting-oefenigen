let cart = document.querySelector("#cart");
function addToCart(product){
    let div = document.createElement("div");
    div.innerHTML = product;

    cart.appendChild(div);
}
function clearCart() {
    cart.innerHTML = "";
}