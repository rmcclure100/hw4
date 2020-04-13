/**
 * Your answers to HW#4 goes here. 
 */
//var button = document.createElement("button");
class Pizzeria{
    constructor(element){
        this._menuItems = {};
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
$('.reset').click(function() {
    cart = {
        items: [] //empty array
    }
    renderCart(cart, $('.cart-items-container'));
});
