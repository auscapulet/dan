// creation

const tabs = document.querySelector(".tabs")

addDataAtrToButtons = (tabList, dataAtr) => {
  tabList.forEach(element =>
    element.setAttribute(dataAtr, `${element.innerText.toLowerCase()}`)
  )
}

const hideTab = (
  activeTab,
  tabsContentList,
  activeTabClass,
  dataAtr,
  event
) => {
  if (activeTab && activeTab !== event.target)
    activeTab.classList.remove(activeTabClass)

  tabsContentList.forEach(element => {
    if (
      event.target.getAttribute(dataAtr) !== element.getAttribute(dataAtr) &&
      element.style.display !== "none"
    ) {
      element.style.display = "none"
    }
  })
}

const makeTabActive = (activeTabClass, event) => {
  event.target.classList.add(activeTabClass)
  return event.target
}

// execution

addDataAtrToButtons(document.querySelectorAll(".tabs-title"), "data-tab")

let activeTab = document.querySelector(".tabs-title")
activeTab.classList.add("active")

const tabsItemContent = document.querySelectorAll(".tab-content")

tabsItemContent[0].style.display = "flex"

tabs.onclick = event => {
  hideTab(activeTab, tabsItemContent, "active", "data-tab", event)

  activeTab = makeTabActive("active", event)

  tabsItemContent.forEach(element => {
    if (
      activeTab.getAttribute("data-tab") === element.getAttribute("data-tab")
    ) {
      element.style.display = "flex"
    }
  })
}
