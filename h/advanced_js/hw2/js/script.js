class Hamburger {
  constructor(size, stuffing) {
    try {
      if (!size || !stuffing) {
        throw new HamburgerException("You need to add size or stuffing")
      } else if (typeof size !== "object" || typeof stuffing !== "object") {
        throw new HamburgerException("invalid data type")
      }

      this.size = size.size
      this.stuffing = stuffing.name

      const hamSize = ["small", "large"]
      if (!hamSize.includes(size.size)) {
        throw new HamburgerException("Invalid size")
      }
      const hamStuffings = ["cheese", "salad", "potato"]
      if (!hamStuffings.includes(stuffing.name)) {
        throw new HamburgerException("Invalid stuffing")
      }
      this.price = size.price + stuffing.price
      this.calories = size.calories + stuffing.calories
      this.topping = []
    } catch {
      return HamburgerException.message
    }
  }

  setTopping(topping) {
    try {
      const hamToppings = ["mayo", "spice"]
      if (!hamToppings.includes(topping.name)) {
        throw new HamburgerException("Invalid topping")
      } else if (this.topping.find(item => item === topping)) {
        throw new HamburgerException("You alredy added " + topping.name)
      } else {
        this.topping.push(topping)
        this.price += topping.price
        this.calories += topping.calories
      }
    } catch (e) {
      return HamburgerException.message
    }
  }

  removeTopping(topping) {
    try {
      if (this.topping.length > 0) {
        let toppingIndex = this.topping.find(
          ingredient => ingredient === topping
        )
        let i = this.topping.indexOf(toppingIndex)
        this.topping.splice(i, 1)
        this.price -= topping.price
        this.calories -= topping.calories
      } else {
        throw new HamburgerException("no toppings")
      }
    } catch (e) {
      return HamburgerException.message
    }
  }

  getToppings() {
    return this.topping
  }

  getSize() {
    return this.size
  }

  getStuffing() {
    return this.stuffing
  }

  calculatePrice() {
    return this.price
  }
  calculateCalories() {
    return this.calories
  }
}

class HamburgerException extends Error {
  constructor(message) {
    super()
    this.name = "HamburgerException"
    this.message = message
    console.log(this.message)
  }
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = { size: "small", price: 50, calories: 20 }
Hamburger.SIZE_LARGE = { size: "large", price: 100, calories: 40 }
Hamburger.STUFFING_CHEESE = { name: "cheese", price: 10, calories: 20 }
Hamburger.STUFFING_SALAD = { name: "salad", price: 20, calories: 5 }
Hamburger.STUFFING_POTATO = { name: "potato", price: 15, calories: 10 }
Hamburger.TOPPING_MAYO = { name: "mayo", price: 20, calories: 5 }
Hamburger.TOPPING_SPICE = { name: "spice", price: 15, calories: 0 }

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
// добавка из майонеза
hamburger.setTopping(Hamburger.TOPPING_MAYO)
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories())
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice())
// я тут передумал и решил добавить еще приправу
hamburger.setTopping(Hamburger.TOPPING_SPICE)
// А сколько теперь стоит?
console.log("Price with spice: %f", hamburger.calculatePrice())
// Проверить, большой ли гамбургер?
console.log(
  "Is hamburger large: %s",
  hamburger.getSize() === Hamburger.SIZE_LARGE
) // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE)
console.log("Have %d toppings", hamburger.getToppings().length) // 1

const h1 = new Hamburger()

const h2 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE)

const h3 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.TOPPING_SPICE)

const h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
h4.setTopping(Hamburger.TOPPING_MAYO)
h4.setTopping(Hamburger.TOPPING_SPICE)
h4.setTopping(Hamburger.TOPPING_MAYO)

console.log("Hamburger h4 is", h4.getSize())
console.log("Hamburger h4 has stuffing -", h4.getStuffing())
console.log(
  "Hamburger h4 has toppings -",
  h4.getToppings()[0].name,
  "and",
  h4.getToppings()[1].name
)
