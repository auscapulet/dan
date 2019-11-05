for (let i = 1; i <= 61; i++) {
  let planetLink = fetch(`https://swapi.co/api/planets/${i}`)
  planetLink
    .then(res => res.json())
    .then(res => {
      const board = document.querySelector(".board")
      const itemContainer = document.createElement("div")
      itemContainer.classList.add("item-container")
      board.append(itemContainer)

      const planetName = document.createElement("h4")
      planetName.innerText = `Planet: ${res.name}`
      itemContainer.append(planetName)

      const terrain = document.createElement("p")
      terrain.innerText = `Terrain: ${res.terrain}`
      itemContainer.append(terrain)

      const climate = document.createElement("p")
      climate.innerText = `Climate: ${res.climate}`
      itemContainer.append(climate)

      let req = res.residents.forEach(item => {
        const req = fetch(item)
        req
          .then(res => res.json())
          .then(res => {
            const board = document.querySelector(".board")
            const charName = document.createElement("p")
            charName.innerText = `Resident Name: ${res.name}`
            board.append(charName)
          })
      })
    })
}
