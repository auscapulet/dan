const $tabs = $(".tabs-title")

$tabs.on("click", event => {
  $(".active").removeClass("active")
  $(event.target).addClass("active")
})
