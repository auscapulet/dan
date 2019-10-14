function Hamburger(size, stuffing) {
    /**
  * Класс, объекты которого описывают параметры гамбургера. 
  * 
  * @constructor
  * @param size        Размер
  * @param stuffing    Начинка
  * @throws {HamburgerException}  При неправильном использовании
  */
  
  /* Размеры, виды начинок и добавок */

  Hamburger.SIZE_SMALL = "size_small";
  Hamburger.SIZE_LARGE = "size_large";
  Hamburger.STUFFING_CHEESE = "stuffing_cheese";
  Hamburger.STUFFING_SALAD = "stuffing_salad";
  Hamburger.STUFFING_POTATO = "stuffing_potato";
  Hamburger.TOPPING_MAYO = "topping_mayo";
  Hamburger.TOPPING_SPICE = "topping_spice";

  // collecting data

  var sizes = {};
  var stuffings = {};
  var toppings = {};

  sizes[Hamburger.SIZE_SMALL] = {price: 50, calories: 20};
  sizes[Hamburger.SIZE_LARGE] = {price: 100, calories: 40};

  stuffings[Hamburger.STUFFING_CHEESE] = {price: 10, calories: 20};
  stuffings[Hamburger.STUFFING_SALAD] = {price: 20, calories: 5};
  stuffings[Hamburger.STUFFING_POTATO] ={price: 15, calories: 10};

  toppings[Hamburger.TOPPING_MAYO] = {price: 20, calories: 20};
  toppings[Hamburger.TOPPING_SPICE] = {price: 15, calories: 5}

  // constructor

  this.size = size;
  this.stuffing = stuffing;
  this._toppings = [];

  // validation input data

  function inputValidation(el) {
    for(let key in Hamburger) {
      if(el === Hamburger[key]) {
        return  true;
      }
    }
    return false;
  }

  if (!size || !stuffing) {
    throw new HamburgerException (`Sorry, but you must choose both - size and stuffing for`)
  };
  if(!inputValidation(size)) {
    throw new HamburgerException(`Sorry, but there invalid "${size}". Please choose correct size`)
  };
  if(!inputValidation(stuffing)) {
    throw new HamburgerException(`Sorry, but there invalid "${stuffing}".Please choose correct size`)
  }


}