const packman = document.querySelector(".packman")

let y = 0
let x = 0

window.addEventListener(
  "keydown",
  function(event) {
    if (event.defaultPrevented) {
      return
    }
    switch (event.code) {
      case "Down":
      case "ArrowDown":
        packman.style.transform = "rotate( 90deg)"
        break
      case "Up":
      case "ArrowUp":
        packman.style.transform = "rotate(180deg)"
        break
      case "Left":
      case "ArrowLeft":
        packman.style.transform = "rotate( 270deg)"
        break
      case "right":
      case "ArrowRight":
        packman.style.transform = "rotate( 360deg)"
        break
      default:
        return
    }

    event.preventDefault()
  },
  true
)

window.addEventListener(
  "keyup",
  function(event) {
    if (event.defaultPrevented) {
      return
    }
    switch (event.code) {
      case "Down":
      case "ArrowDown":
        console.log("moveRateTriggered")
        packman.style.top += +50 + "px"
        console.log(packman.style.top)
        break
      case "Up":
      case "ArrowUp":
        console.log("packman moves up")
        packman.style.top -= 50 + "px"
        break
      case "Left":
      case "ArrowLeft":
        console.log("packman moves left")
        packman.style.left += +50 + "px"
        break
      case "right":
      case "ArrowRight":
        console.log("packman moves right")
        packman.style.left += -50 + "px"
        break
      default:
        return
    }
    event.preventDefault()
  },
  true
)
