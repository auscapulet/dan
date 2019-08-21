let $tabs = $(".tabs-title")
let $tabsContentList = $(".tabs-content li")

let showActive = () => {
  $tabs.each(function() {
    if ($(this).hasClass("active")) {
      $($tabsContentList[$tabs.index(this)]).removeClass("hidden")
    } else {
      $($tabsContentList[$tabs.index(this)]).addClass("hidden")
    }
  })
}

showActive()

$tabs.on("click", function() {
  $tabs.removeClass("active")
  $(this).addClass("active")
  showActive()
})
