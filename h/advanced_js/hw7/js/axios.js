for (let i = 1; i <= 61; i++) {
  let planetLink = axios.get(`https://swapi.co/api/planets/${i}`)
  planetLink.then(res => {
    const board = document.querySelector(".board")
    const itemContainer = document.createElement("div")
    itemContainer.classList.add("item-container")
    board.append(itemContainer)

    const planetName = document.createElement("h4")
    planetName.innerText = `Planet: ${res.data.name}`
    itemContainer.append(planetName)

    const terrain = document.createElement("p")
    terrain.innerText = `Terrain: ${res.data.terrain}`
    itemContainer.append(terrain)

    const climate = document.createElement("p")
    climate.innerText = `Climate: ${res.data.climate}`
    itemContainer.append(climate)

    let req = res.data.residents.forEach(item => {
      const req = axios.get(item)
      req.then(res => {
        const board = document.querySelector(".board")
        const charName = document.createElement("p")
        charName.innerText = `Resident Name: ${res.data.name}`
        board.append(charName)
      })
    })
  })
}
