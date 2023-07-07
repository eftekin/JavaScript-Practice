const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck){
        if (typeof mealToCheck === 'string'){
            this._meal = mealToCheck;
        }
    },

    set price(priceToCheck){
        if (typeof priceToCheck === "number"){
            this._price = priceToCheck;
        }
    },

    get todaysSpecial(){
        if (this._meal && this._price) {
            return `Today's Offer!! ${this._meal} for ₺${this._price}`
        } else {
            console.log("Something wrong with price or meal")
        }
    }
}

menu.meal = "Mercikmek Soup"
menu.price = 30

console.log(menu.todaysSpecial)
