const wrapper = document.getElementById("wrapper")

const req = new XMLHttpRequest()
req.open("get", "https://swapi.co/api/films/?format=json")
req.responseType = "json"
req.send()

req.onload = function() {
  if (req.status !== 200) {
    console.log(`Error ${req.status}: ${req.statusText}`)
  } else {
    const result = req.response.results
    for (let i = 0; i < result.length; i++) {
      const episode_title = result[i].title
      const episode_number = result[i].episode_id
      const episode_opening = result[i].opening_crawl
      const episode_characters = result[i].characters
      console.log(episode_characters)
      const ep_wrapper = document.createElement("div")
      ep_wrapper.classList.add("ep_wrapper")
      wrapper.append(ep_wrapper)

      const title = document.createElement("h4")
      title.classList.add("title")
      title.innerText = episode_title
      ep_wrapper.append(title)

      const number = document.createElement("h5")
      number.classList.add("number")
      number.innerText = `Episode #${episode_number}`
      ep_wrapper.append(number)

      const crawl = document.createElement("p")
      crawl.classList.add("opening")
      crawl.innerText = episode_opening
      ep_wrapper.append(crawl)

      const charBtnReq = document.createElement("button")
      charBtnReq.classList.add("char-loader")
      charBtnReq.innerText = "Load characters"
      ep_wrapper.append(charBtnReq)

      charBtnReq.addEventListener("click", e => {
        const episode_characters_list = Promise.all(
          episode_characters.forEach(item => {
            console.log(item)
            const req = new XMLHttpRequest()
            req.open("GET", item)
            req.responseType = "json"
            req.send()

            req.onload = function() {
              if (req.status !== 200) {
                return `${request.statusText}${request.status}`
              } else {
                const resp = req.response
                const charsList = document.getElementById("chars-container")
                const itemContainer = document.createElement("li")
                itemContainer.innerText = resp.name
                charsList.append(itemContainer)
              }
            }
          })
        )
      })

      // function getRequest(url) {
      //   const request = new XMLHttpRequest()
      //   request.open("GET", url)
      //   request.setRequestHeader(
      //     "Content-type",
      //     "application/x-www-form-urlencoded"
      //   )
      //   request.responseType = "json"
      //   request.send()
      //   request.onload = function() {
      //     if (request.status !== 200) {
      //       return `${request.statusText}${request.status}`
      //     } else {
      //       const resp = request.response
      //       console.log(resp)
      //     }
      //   }
      // }
    }
  }
}

req.onerror = function() {
  alert("Failed request")
}
