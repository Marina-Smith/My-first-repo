//Pizza Parent
class Pizza {
    constructor(nationality){
        this.nationality = nationality;
    }
    getName(){
        return "I am a " + this.nationality + " Pizza.";
    }
}

//Pizza Child1
class ItalianPizza extends Pizza{
    constructor(){
        super("Italian")
    }
}

//Pizza Child2
class AmericanPizza extends Pizza{
    constructor(){
        super("American")
    }
}


/*----------------------------------------------------------------*/

//Pasta Parent
class Pasta {
    constructor(nationality){
        this.nationality = nationality;
    }
    getName(){
        return "I am a " + this.nationality + " Pasta.";
    }
}

//Pasta Child1
class ItalianPasta extends Pasta{
    constructor(){
        super("Italian")
    }
}

//Pasta Child2
class ChinesePasta extends Pasta{
    constructor(){
        super("Chinese")
    }
}

/*----------------------------------------------------------------*/

//Chicken Parent
class Chicken {
    constructor(nationality){
        this.nationality = nationality;
    }
    getName(){
        return "I am a " + this.nationality + " Chicken.";
    }
}

//Chicken Child1
class AmericanChicken extends Chicken{
    constructor(){
        super("American")
    }
}

//Chicken Child2
class ChineseChicken extends Chicken{
    constructor(){
        super("Chinese")
    }
}

/*----------------------------------------------------------------*/

//Factories


class AmericanRestaurant{
    chicken = new AmericanChicken();
    pizza = new AmericanPizza();
    serveDish(type){
        switch(type){
            case 'Pizza':
                return this.pizza;
            case 'Chicken':
                return this.chicken;
            case 'Pasta':
                console.log("Pasta is not served here")
                return;
        }
    }
}

/*----------------------------------------------------------------*/

class ItalianRestaurant{
    pasta = new ItalianPasta();
    pizza = new ItalianPizza();
    serveDish(type){
        switch(type){
            case 'Pizza':
                return this.pizza;
            case 'Pasta':
                return this.pasta;
            case 'Chicken':
                console.log("Chicken is not served here");
                return;
            
        }
    }
}


/*----------------------------------------------------------------*/

class ChineseRestaurant{
    chicken = new ChineseChicken();
    pasta = new ChinesePasta();
    serveDish(type){
        switch(type){
            case 'Chicken':
                return this.chicken;
            case 'Pasta':
                return this.pasta;
            case 'Pizza':
                console.log("Pizza is not served here");
                return;
            
        }
    }
}


/*----------------------------------------------------------------*/

//Create our restaurants:

const italianRestaurant = new ItalianRestaurant();
const americanRestaurant = new AmericanRestaurant();
const chineseRestaurant = new ChineseRestaurant();


//Ordering a specific dish from a specific restaurant:
const dishPortal = (nationality, dish) => {
    switch(nationality){
        case "American":
            return americanRestaurant.serveDish(dish);
        case "Chinese":
            return chineseRestaurant.serveDish(dish);
            case "Italian":
        return italianRestaurant.serveDish(dish);
    }
}

//Implementation:
const dish = dishPortal("Italian", "Pasta");
console.log(dish.getName());

const adish = dishPortal("American", "Pizza");
console.log(adish.getName());

const idish = dishPortal("Italian", "Chicken");
console.log(idish.getName());