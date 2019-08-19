//1 Почему для работы с input не рекомендуется использовать события клавиатуры?

// Есть разные стандартные значения клавиш, скорее значения клавиш по умолчанию, у которых выше приоритет в ОС. В свою очередь, выполнение этих действий может быть ожидаемысми человеком.

document.addEventListener("keypress", event => {
  buttons = document.querySelectorAll(".btn")
  console.log(buttons)
  buttons.forEach(element => {
    if (element.innerText.toLowerCase() === event.key.toLowerCase()) {
      element.style.background = "blue"
    } else {
      element.style.background = "black"
    }
  })
})
