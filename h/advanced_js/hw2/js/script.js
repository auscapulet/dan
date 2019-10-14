

// data

const sizes = [{ val: "small", price: 50, calories: 20 }]
const stuffings = [
  { val: "cheese", price: 10, calories: 20 },
  { val: "salad", price: 20, calories: 5 },
  { val: "potato", price: 15, calories: 10 }
]

// Hamburger Class

class Hamburger {

  static SIZE_SMALL = 'small';
  static SIZE_LARGE = 'large';
  static STUFFING_CHEESE = 'cheese';
  static STUFFING_SALAD = 'salad';
  static STUFFING_POTATO = 'potato';
  static TOPPING_MAYO = 'mayonese';
  static TOPPING_SPICE = 'spices';


  constructor (size, stuffing) {
    this.size = size
    this.stuffing = stuffing
    this._toppings = []
  }
  

  // data validation

  validateInput(el) {
    for(let key in Hamburger) {
      if(el == Hamburger[key]) {
        return true
      }
    }
    return false
  }

  // Mthods

  // find size

  get size() {
    return this._size
  }

  set size(val) {
    if (!val) {
      throw new HamburgerExeption ("Sorry, but you must choose size of your hamburger")
    } else if (!this.validateInput(val)) {
      throw new HamburgerExeption(`Sorry, but there invalid "${val}". Please choose correct size`)
    } else {
      this._size = val
    }
  }
  
  // find stuffings 

  get stuffing() {
    return this._stuffing
  }
  set stuffing(val) {
    if(!val) {
      throw new HamburgerExeption("Sorry, but you must enter stuffing of your humburger")
    } else if (!this.validateInput(val)) {
      throw new HamburgerExeption(`Sorry, but there invalid "${val}". Please choose correct stuffings`)
    } else {
      this._stuffing = value
    }
  }

  // get list of toppings

  get toppings() {
    return this._toppings
  }

  // add topping to humburger

  addTopping(item) {
    if(this.toppings.some(el => el ==  item)) {
      throw new HamburgerExeption(`You are trying to add ${item}, but you already did it`)
    } else if (!thisValidateInput(item)) {
      throw new HamburgerExeption(`Sorry, but ${item} not found.`)
    } else {
      this.toppings.push(item)
    }
  }

  // remove topping 

  removeTopping(item) {
    if (this._toppings.some(el => el == item)) {
      this._toppings = this.toppings.filter(el=>el!==item)
    } else {
      throw new HamburgerExeption(`Sorry, but ${item} not found.`)
    }
  }

  //get price

  calculatePrice() {
    let price = sizes.find(el => el.value == this._size).price + stuffings.find(el => el.value == this._stuffing).price
    if (this._toppings[0]) {
      this._toppings.forEach( function(item) {
        price += toppings.find(el => el.value == item).price
      })
    }
    return price
  }

  // get callories

  calculateCalories() {
    let calories = sizes.find(el => el.value == this._size).calories + stuffings.find(el => el.value == this._stuffing).calories
    if (this._toppings[0]) {
      this._toppings.forEach( function(item) {
        calories += toppings.find(el => el.value == item).calories
      })
    }
    return calories
  }

  // erros Constructor

  class HamburgerExeption {
    constructor(message) {
      this.name = "FFS!"
      this.message = message
    }

    get message() {
      return this._message
    }

    set message(val) {
      this._message = val
    }
  }

  // testing

  try {
       
    } catch (e) {
        console.error(e.name, e.message);
    };




}

