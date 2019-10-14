
(function () {
    

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

      

      function Hamburger(size, stuffing) {

      // validation input data

      function inputValidation(el) {
        for(let key in Hamburger) {
          if(el == Hamburger[key]) {
            return  true;
          }
        }
        return false;
      }

      if (!size || !stuffing) {
        throw new HamburgerException (`Sorry, but you must choose both - size and stuffing`)
      };
      if(!inputValidation(size)) {
        throw new HamburgerException(`Sorry, but there invalid "${size}". Please choose correct size`)
      };
      if(!inputValidation(stuffing)) {
        throw new HamburgerException(`Sorry, but there invalid "${stuffing}". Please choose correct size`)
      }

      // constructor

      this.size = size;
      this.stuffing = stuffing;
      this._toppings = [];
    }

    /**
     * Добавить добавку к гамбургеру. Можно добавить несколько добавок,
     * при условии, что они разные.
     *
     * @param topping     Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */

    Hamburger.prototype.addTopping = function (topping) {
      if (this._toppings.some(function(el) { 
        return el == topping})) {
        throw new HamburgerException(`You are trying to add ${topping}, but you already did it`)
    } else {
      this._toppings.push(topping)
    }}

    /**
    * Убрать добавку, при условии, что она ранее была 
    * добавлена.
    * 
    * @param topping   Тип добавки
    * @throws {HamburgerException}  При неправильном использовании
    */

    Hamburger.prototype.removeTopping = function (topping) {
      if (this._toppings.some(function(el) {
        return el == topping
      })) {
        this._toppings = this._toppings.filter(function(el) {
          return el!==topping
        })
      } else  {
        throw new HamburgerException(`Sorry, but ${topping} not found.`)
      }
    }

    /**
    * Получить список добавок.
    *
    * @return {Array} Массив добавленных добавок, содержит константы
    *                 Hamburger.TOPPING_*
    */

    Hamburger.prototype.getToppings = function () {
      return this._toppings
    }

    /**
    * Узнать размер гамбургера
    */
    Hamburger.prototype.getSize = function () {
      return this.size
    }

    /**
    * Узнать начинку гамбургера
    */
    Hamburger.prototype.getStuffing = function () {
      return this.stuffing
    }

    /**
    * Узнать цену гамбургера
    * @return {Number} Цена в тугриках
    */
    Hamburger.prototype.calculatePrice = function () {
      let price = sizes[this.size].price + stuffings[this.stuffing].price
      if(this._toppings[0]){
        this._toppings.forEach(function(el) {
          price += toppings[el].price
        })
      } 
      return price
    }

    /**
    * Узнать калорийность
    * @return {Number} Калорийность в калориях
    */
    Hamburger.prototype.calculateCalories = function () {
      let calories = sizes[this.size].calories + stuffings[this.stuffing].calories
      if(this._toppings[0]){
        this._toppings.forEach(function(el) {
          calories += toppings[el].calories
        })
      } 
      return calories
    }

    /**
    * Представляет информацию об ошибке в ходе работы с гамбургером. 
    * Подробности хранятся в свойстве message.
    * @constructor 
    */

    function HamburgerException (message) {
      this.name = " FAILED TO CREATE!";
      this.message = message
    }


    // testing
    
    try {
    // маленький гамбургер с начинкой из сыра
    var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
    // добавка из майонеза
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    // спросим сколько там калорий
    console.log("Calories: %f", hamburger.calculateCalories());
    // сколько стоит
    console.log("Price: %f", hamburger.calculatePrice());
    // я тут передумал и решил добавить еще приправу
    hamburger.addTopping(Hamburger.TOPPING_SPICE);
    // А сколько теперь стоит? 
    console.log("Price with sauce: %f", hamburger.calculatePrice());
    // Проверить, большой ли гамбургер? 
    console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
    // Убрать добавку
    hamburger.removeTopping(Hamburger.TOPPING_SPICE);
    console.log("Have %d toppings", hamburger.getToppings().length); // 1

    // не передали обязательные параметры
    var h2 = new Hamburger(); 
  
    // добавляем много добавок
    var h3 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    hamburger.addTopping(Hamburger.TOPPING_MAYO); 
    

    } catch(e) {
      console.error(e.name, e.message)
  }
}) ()





