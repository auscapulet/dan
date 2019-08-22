// task 0

// const tagEl = document.getElementsByTagName("li")
// const classEl = document.getElementsByClassName(".nav-list-item")
// const idEl = document.getElementById("#seconditem")
// const nameEl = document.getElementsByName("four")
// const queryEl = document.querySelector(".nav-list-item")

// const $tagEl1 = $("li")
// const $classEl1 = $("nav-list-item")
// const $idEl1 = $("#seconditem")
// const $selectorEl1 = $("ul .nav-list-item")
// const $nameel1 = $('.nav-list-item["four"]')

// task 1

// const liEl = document.querySelector("li")
// liEl.addEventListener("click", () => {
//   liEl.style.backgroundColor = "red"
// })

// const $liEl = $("li:first")

// $liEl.on("click", () => {
//   $liEl.css({ color: "red" })
// })

// const mouseOver = document.querySelector(".nav-list-item")

// mouseOver.addEventListener("mouseover", () => {
//   mouseOver.style.backgroundColor = "leaf"
// })

// const $mouseOver = $(".nav-list-item:nth-child(2)")
// console.log($mouseOver)
// $mouseOver.on("mouseover", () => {
//   $mouseOver.css({ color: "red" })
// })

// const focus = document.getElementById('seconditem')
// focus.addEventListener('focus', () => {
//   focus.style.background = "yellow"
// })

// task 2

// const $button = $("<button>Create circle</button>")
// $button.one("click", () => {
//   const $circle = $("<div></div>")
//   $circle.css({
//     height: "150px",
//     width: "150px",
//     borderRaidus: "50%",
//     backgroundColor: "red"
//   })

//   $button.after($circle)
// })

// $(document.body).append($button)

// taks 3 === hw14 || THe_Ham

//task 4

// const $changeColorBtn = $("<button>Change color</button>")
// $("script:first").before($changeColorBtn)

// for (let i = 0; i < 5; i++) {
//   $changeColorBtn.before($("<p class='textElement'>Lorem </p>"))
// }

// $changeColorBtn.on("click", () => {
//   $(".text-element:not(:first)").css({ color: "leaf" })
// })

// broken

// task 5

// const $button = $("<button>change color</button>")
// $("script:first").before($button)
// $button.on("click", () => {
//   $button.toggleClass("changedColor")
// })

//6

// const $input = $("<input><input>")
// $("script:first").before($input)

// $input.on("keyup", () => {
//   if ($input.val().length > 5) {
//     $input.after
//     const $sendBtn = $("<button id='sendBtn'>Send message</button>")
//   } else {
//     $("#sendBtn").fadeOut()
//   }
// })

//1

// const $input = $('<input id="input"></input>')

// $("script:first").before($input)

// $input.on("keyup", () => {
//   if ($input.val().length > 5) {
//     const $btn = $("#sendBtn")
//     $input.after(
//       $btn.length ? $btn : $('<button id="sendButton">Send</button>')
//     )
//   } else {
//     $("#sendBtn").remove()
//   }

// })

// Broken

//2
// $(".nav-menu-btn").on("click", event => {
//   $(event.currentTarget).toggleClass("toggle")
//   $("nav-menu").slideToggle()
// })

//3

$(document).scroll("scroll", () => {
  const $height = $(window).innerHeight()
  const $screenTop = $(window).srollTop()

  //find current height of screen

  if ($screenTop > $height) {
    if (!$(".scrol-top-btn").length) {
      const $scrollTopBtn = $(
        "<button class='srollTopButton'>Scroll TOP button</button>"
      )
      $("script:first").before($scrollTopBtn)
    }

    $screenTop.click(() => {
      $("body", "html").animate(
        {
          scrollTop: 0
        },
        1000
      )
    })
  } else {
    $(".scrol-top-btn").remove()
  }
})

// const $height = $(document).innerHeight()
// console.log($height)

//user screen height
