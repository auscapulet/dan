const planetsURLS = [
  "https://swapi.co/api/planets/",
  "https://swapi.co/api/planets/2",
  "https://swapi.co/api/planets/3",
  "https://swapi.co/api/planets/4",
  "https://swapi.co/api/planets/5",
  "https://swapi.co/api/planets/6",
  "https://swapi.co/api/planets/7"
]

Promise.all(planetsURLS.map(item => fetch(item)))
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(texts => {
    console.log(texts)

    for (let i = 0; i < texts.length; i++) {
      console.log(i.name)
    }

    // let obj = texts.find(i => i.name === "name")
    // console.log(obj)
    // let filter = texts.filter(i => i.name === name)
    // console.log(filter)

    // let some = texts.filter(i => i.name === name)
    // console.log(some)
  })
