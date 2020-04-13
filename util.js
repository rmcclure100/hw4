
// this class is used for creating Pizzeria menu items
class Pizza{

    constructor(name, type,toppings, description, src){
        this._name = name;
        this._type = type;//crust
        this._toppings = toppings;//list of toppings {}
        this._src= src;//image src
        this._description =  description; //description of the pizza
        this._id = create_UUID();
    }

    get name(){ return this._name;}
    set name(name){this._size = name;}
    get type(){ return this._type;}
    set type(type){this._type = type;}
    
    get toppings(){ return this._toppings;}
    set toppings(toppings){this._toppings = toppings;}
    
    get imgSrc(){return this._src;}
    set imgSrc(src){this._src = src;}

    get description(){return this._description;}
    set description(description){this._description = description;}

    get id(){return this._src;}

}

// this class is used for orders;
class PizzaOrderItem extends Pizza{

    constructor(name, type, size, toppings, description, src){
        super(name, type, toppings, description, src);
        this._size = size;
        this._price =0;
    }

    get size(){ return this._size;}
    set size(size){this._size = size;}

    get price(){
        this._price = Pizzeria.calculatePrice(this); 
        return this._price;
    }

}


const PIZZA_SIZES={
    SMALL:1,
    MEDIUM:2,
    LARGE:3
}
Object.freeze(PIZZA_SIZES);

const PIZZA_TYPES={
    NY:100,
    Chicago:200,
    Thin:300
}



//a class to manage a Pizzeria and provide some useful functionality
class Pizzeria{

    /*
        each topping $1
        Sizes: L $20 M $16  S $12
        crust: NY $3 Ch $5  Th 0
    */
   constructor(element){
       //an object to keep track of menu items
        this._menuItems = {};

       //an html element that the menu will be placed at and used by buildMenu function
       this._menuElement = element;
   }

   get menuItems(){return this._menuItems;}

   get menuElement(){return this._menuElement;}
   set menuElement(e){this._menuElement = e;}

   addMenuItem(pizza){
       this._menuItems[pizza.uuid] = pizza;
   }

   removeMenuItem(pizza){
       delete this._menuItems[pizza.id];
   }

   static get PIZZA_TOPPINGS(){
    var PIZZA_TOPPINGS=[
        "Pepperoni",
        "Mushrooms",
        "Onions",
        "Sausage",
        "Bacon",
        "Extra cheese",
        "Black olives",
        "Green peppers",
        "Pineapple",
        "Spinach"
        ];
        return PIZZA_TOPPINGS;
   }
   update_PIZZA_TOPPINGS(toppings){ this._PIZZA_TOPPINGS = toppings;}
   
   static calculatePrice(pizza){

        let totalPrice=0;

        //size price
        switch(pizza.size){
            case 1:
                totalPrice +=12;
                break;
            case 2:
                totalPrice +=16;
                break;
            case 3:
                totalPrice +=20;
                break;
        }

        //crust price
        switch(pizza.type){
            case 100:
                totalPrice +=3;
                break;
            case 200:
                totalPrice +=5;
                break;
            case 300:
                totalPrice +=0;
                break;
        }

        //toppings
        totalPrice += pizza.toppings.length;
        return totalPrice;
    }
    
    static getImage(pizzaType){
        

        switch(pizzaType){
            case 100:
                //NY
                return "./img/ny.jpg";
                break;
            case 200:
                //deep dish
                return "./img/ddish.jpg";
                break;
            case 300:
                //thin crust
                return "./img/thincrust.jpg";
                break;
        }
    }

    static generateTopingList(e){

        let content="";
        let toppings = Pizzeria.PIZZA_TOPPINGS;
        for (let i = 0; i < toppings.length; i++) {
            let t = toppings[i];
            content += '<div class="custom-control custom-checkbox">'+
                            '<input type="checkbox" class="custom-control-input toppings" id="t'+i+'" value='+t+'>'+
                                '<label class="custom-control-label" for="t'+i+'">'+t+'</label>'+
                            '</div>';
        }

        $(e).html(content);
    }
    buildMenu(){

        //build the crust selection
        $.each(this._menuItems, (k,v)=>{
            console.log("K:"+k+", V: "+v);
            pizza=v;
            let imgSrc = Pizzeria.getImage(pizza.type);
            if(!this._menuElement){
                return;
            }
            $(this._menuElement).append(
                    '<div class="card">'+
                        '<img class="card-img-top" src="'+imgSrc+'" alt="'+pizza.type+'">'+
                        '<div class="card-body">'+
                        '<h5 class="card-title">'+pizza.name+'</h5>'+
                        '<p class="card-text">'+piazza.description+'</p>'+
                        '</div>'+
                        '<div class="card-footer">'+
                        '<small class="text-muted">'+'<input type="radio" name="crust" value="'+piazza.type+'"/>   '+$.trim(piazza.type) +'</small>'+
                        '</div>'+
                    '</div>'
            )
        })
        
    }
}

//generates A universally unique identifier (UUID)
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}




$(document).ready(()=>{
   Pizzeria.generateTopingList($('#toppingList')) 
});
