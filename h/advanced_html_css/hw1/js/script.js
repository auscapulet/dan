const sidebar = document.getElementById("navigation__menu");
const sidebarButton = document.getElementById("navigation__button--cta")
const icon = document.getElementById("navigation__small-icon")
const largeIcon = document.getElementById("navigation__large-icon")
console.log(sidebarButton)
console.log(sidebar)

sidebarButton.addEventListener('click', () => {
  if(sidebar.classList.contains('navigation__items-hidden')) {
    sidebar.classList.remove('navigation__items-hidden')
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-times')
    largeIcon.classList.remove("fa-bars")
    largeIcon.classList.add("fa-times")
  } else {
    sidebar.classList.add('navigation__items-hidden')
    icon.classList.remove('fa-times')
    icon.classList.add("fa-bars")
    largeIcon.classList.remove('fa-times')
    largeIcon.classList.add("fa-bars")
  }
})