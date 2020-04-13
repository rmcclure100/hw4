/**
 * Your answers to HW#4 goes here. 
 */
//var button = document.createElement("button");
function start(){

    var pizza = new PizzaOrderItem();
    var orderb = document.getElementById('order');
    orderb.onclick=function(){
    var price = 0;

            pizza._name = document.getElementById('pizzaName').value; 

            opts = document.getElementsByClassName("custom-select custom-select-sm")[0].options;
    };
        var cart = //creates variable for cart
        { 
            items: [] //empty array
        }; 
        $('.order').click(function(){
            var newCartItem = {
                type: this.getAttribute('data-type'), //gets the pizzaria menu items
                name: this.getAttribute('data-name'),
                toppings: this.getAttribute('data-toppings'),
                description: this.getAttribute('data-description')
            };
            cart.items.push(newCartItem);
            
            renderCart(cart, $('.cart-items-container'));
}
var resetb = document.getElementById('reset');

resetb.onclick = function setBack(){
    pizza.name ="";

            pizza._type ="";

            pizza._src ="";

            pizza._toppings ="";

            pizza._size ="";
};
    cart = {
        items: [] //empty array
    }
    renderCart(cart, $('.cart-items-container'));
}};
