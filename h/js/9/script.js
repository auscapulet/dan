const tabs = document.querySelectorAll(".tabs li")

tabs.forEach(function (tab, id) {
  tab.addEventListener("click", function () {
    let currentTab = document.querySelector(
      '.tab-content[data-tab="' + this.dataset.tabTrigger + '"]'
    )

    document.querySelector(".tabs-content li.is-open").classList.remove("is-open")
    document.querySelector(".tabs li.active").classList.remove("active")
    currentTab.classList.add("is-open")
    this.classList.add("active")
  })
})
