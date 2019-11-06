const btn = document.getElementById("get-data")
btn.addEventListener("click", async function getData(e) {
  const data = await fetch("https://api.ipify.org/?format=json")
    .then(res => res.json())
    .then(res => res.ip)
    .catch(e => {
      console.log(e)
    })

    .then(res => {
      const userIp = res

      const container = document.getElementById("wrapper")
      const usersIpTexted = document.createElement("p")
      usersIpTexted.innerText = `Your IP address ${userIp}`
      container.append(usersIpTexted)
      const userInfo = fetch(
        `http://ip-api.com/json/${userIp}?fields=continent,country,regionName,city,district&lang=ru`
      )
        .then(res => res.json())
        .then(res => {
          const usersContinent = document.createElement("p")
          usersContinent.innerText = `Your continent:  ${res.continent}`
          container.append(usersContinent)
          const usersCountry = document.createElement("p")
          usersCountry.innerText = `Your countrt:  ${res.country}`
          container.append(usersCountry)
          const usersRegion = document.createElement("p")
          usersRegion.innerText = `Your region:  ${res.regionName}`
          container.append(usersRegion)
          const usersCity = document.createElement("p")
          usersCity.innerText = `Your city:  ${res.city}`
          container.append(usersCity)
          const usersDistrict = document.createElement("p")
          usersDistrict.innerText = `Your city:  ${res.district}`
          container.append(usersDistrict)
        })
        .catch(e => console.log(e))
    })
})
