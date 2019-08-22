const buttons = document.createElement("div")
document.querySelector(".images-wrapper").after(buttons)

const stopBtn = document.createElement("button")
stopBtn.innerText = "PAUSE CYCLE"
buttons.appendChild(stopBtn)

const resumeBtn = document.createElement("button")
resumeBtn.innerText = "RESUME CYCLE"
stopBtn.after(resumeBtn)

buttons.addEventListener("click", event => {
  if (event.target === stopBtn) {
    isPaused = true
  } else if (event.target === resumeBtn) {
    isPaused = false
  }
})

let images = document.querySelectorAll(".images-wrapper .image-to-show")
let i = 0
let isPaused = false
let slider = setInterval(() => {
  if (!isPaused) {
    images.forEach(el => {
      el.setAttribute("hidden", "true")
    })
    images[i].removeAttribute("hidden")
    if (i === images.length - 1) {
      i = 0
    } else {
      i++
    }
  }
}, 10000)
