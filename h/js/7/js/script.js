const array = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]

const createList = array => {
  const list = document.createElement("ul")
  const newArr = array.map(item => {
    const li = document.createElement("li")
    li.textContent = item
    list.appendChild(li)
  })
  document.querySelector("script").before(list)
}

createList(array)
