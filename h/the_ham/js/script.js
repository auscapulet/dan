// Our Services helper methods

const ourServices = document.querySelector(".buttons-bar")

addDataAtrToButtons = (tabList, dataAtr) => {
  tabList.forEach(elem =>
    elem.setAttribute(dataAtr, `${elem.innerText.toLowerCase()}`)
  )
}

const hideButton = (
  activeButton,
  tabsContentList,
  activeButtonClass,
  dataAtr,
  event
) => {
  if (activeButton && activeButton !== event.target)
    activeButton.classList.remove(activeButtonClass)

  tabsContentList.forEach(elem => {
    if (
      event.target.getAttribute(dataAtr) !== elem.getAttribute(dataAtr) &&
      elem.style.display !== "none"
    ) {
      elem.style.display = "none"
    }
  })
}

const makeButtonActive = (activeButtonClass, event) => {
  event.target.classList.add(activeButtonClass)
  return event.target
}

// Services Buttons listener

addDataAtrToButtons(document.querySelectorAll(".service"), "data-content")

let activeButton = document.querySelector(".service")
activeButton.classList.add("active-service")

const buttonsItemsContent = document.querySelectorAll(".service-item")
buttonsItemsContent[0].style.display = "flex"

ourServices.onclick = event => {
  hideButton(
    activeButton,
    buttonsItemsContent,
    "active-service",
    "data-content",
    event
  )

  activeButton = makeButtonActive("active-service", event)

  buttonsItemsContent.forEach(elem => {
    if (
      activeButton.getAttribute("data-content") ===
      elem.getAttribute("data-content")
    ) {
      elem.style.display = "flex"
    }
  })
}

// Our Amazing Work  buttons listener

addDataAtrToButtons(document.querySelectorAll(".work-item"), "data-img")

const amazingWorksButtonsContainer = document.querySelector(
  ".work-btns-container"
)

let activeWorkButton = document.querySelector(".work-item[data-img='all']")
activeWorkButton.classList.add(".active-work-button")

amazingWorksButtonsContainer.onclick = event => {
  const workGalleryItems = document.querySelectorAll(".work-item-image")

  hideButton(
    activeWorkButton,
    workGalleryItems,
    "active-work-button",
    "data-img",
    event
  )

  activeWorkButton = makeButtonActive("active-wrok-button", event)

  workGalleryItems.forEach(item => {
    if (
      activeWorkButton.getAttribute("data-img") ===
        item.getAttribute("data-img") &&
      item.style.display !== "block"
    ) {
      item.style.display = "block"
    } else if (activeWorkButton.getAttribute("data-img") === "all") {
      item.style.display = "block"
    }
  })
}

// Our Amazing Work images loader

const loadImgButton = document.querySelector(".load-more")
const imagesContainer = document.querySelector(".work-images-container")

loadImgButton.addEventListener("click", event => {
  const extraImages = [
    { src: "img/work-extra-01.jpg", "data-img": "web design" },
    { src: "img/work-extra-02.jpeg", "data-img": "web design" },
    { src: "img/work-extra-03.jpeg", "data-img": "web design" },
    { src: "img/work-extra-04.jpg", "data-img": "wordpress" },
    { src: "img/work-extra-05.jpg", "data-img": "wordpress" },
    { src: "img/work-extra-06.png", "data-img": "wordpress" },
    { src: "img/work-extra-07.jpg", "data-img": "landing pages" },
    { src: "img/work-extra-08.jpeg", "data-img": "landing pages" },
    { src: "img/work-extra-09.jpg", "data-img": "landing pages" },
    { src: "img/work-extra-10.jpeg", "data-img": "graphic design" },
    { src: "img/work-extra-11.png", "data-img": "graphic design" },
    { src: "img/work-extra-12.jpg", "data-img": "graphic design" }
  ]
  extraImages.forEach(item => {
    let img = document.createElement("img")

    img.setAttribute("alt", "Image not found")
    img.classList.add("work-item-image")
    img.style.width = "285px"
    img.style.height = "208px"

    for (let key in item) {
      img.setAttribute(key, item[key])
    }

    if (
      activeWorkButton.getAttribute("data-img") === "all" ||
      activeWorkButton.getAttribute("data-img") === img.getAttribute("data-img")
    ) {
      img.style.display = "block"
    } else {
      img.style.display = "none"
    }

    imagesContainer.appendChild(img)
  })

  loadImgButton.remove()

  // loadImgButton.style.display = "none"
})

// Carousel

//Helper Methods creation

const carouselSelectedPhoto = document.querySelector(".testimonials-carousel")
const testimonialsItem = document.querySelectorAll(".testimonial-container")

const carouselLeftButton = document.querySelector(".tetimonials-carousel-prev")
const carouselRightButton = document.querySelector(".tetimonials-carousel-next")

carouselLeftButton.style.display = "none"

let carouselActivePhoto = document.querySelector(".carousel-photo")

let carouselActiveComment = testimonialsItem[0]

carouselActivePhoto.classList.add("carousel-active-photo")
carouselActiveComment.style.display = "block"
carouselActiveComment.style.opacity = "1"

const hideCarouselComment = () => {
  carouselActiveComment.style.display = "none"
  carouselActiveComment.style.opacity = "0"
}

const showCarouselComment = () => {
  testimonialsItem.forEach(elem => {
    if (
      elem.getAttribute("data-author") ===
      carouselActivePhoto.getAttribute("data-author")
    ) {
      carouselActiveComment = elem
    }
  })

  carouselActiveComment.style.display = "block"
  let opacity = 0
  let timerId = setInterval(() => {
    opacity += 0.1
    if (opacity > 0.9) {
      Math.round(opacity)
      clearInterval(timerId)
    }
    carouselActiveComment.style.opacity = `${opacity}`
  }, 50)
}

const clickOnCarouselButtons = button => {
  button.style.backgroundColor = "#18cfab"
  button.style.borderColor = "#18cfab"
  setTimeout(() => {
    ;(button.style.backgroundColor = ""), (button.style.borderColor = "")
  }, 200)
}

//excution

carouselSelectedPhoto.onclick = event => {
  if (
    event.target.classList.contains("tetimonials-carousel-prev") &&
    !carouselActivePhoto.previusElementSibling.classList.contains(
      "tetimonials-carousel-prev"
    )
  ) {
    carouselActivePhoto.classList.remove("carousel-active-photo")
    hideCarouselComment()

    carouselActivePhoto.previousElementSibling.classList.add(
      "carousel-active-photo"
    )
    carouselActivePhoto = carouselActivePhoto.previousElementSibling
    showCarouselComment()
  }
  clickOnCarouselButtons(event.target)

  if (event.target.classList.contains("tetimonials-carousel-next")) {
    if (
      carouselActivePhoto.nextElementSibling &&
      !carouselActivePhoto.nextElementSibling.classList.contains(
        "tetimonials-carousel-next"
      )
    ) {
      carouselActivePhoto.classList.remove("carousel-active-photo")
      hideCarouselComment()

      carouselActivePhoto.nextElementSibling.classList.add(
        "carousel-active-photo"
      )
      carouselActivePhoto = carouselActivePhoto.nextElementSibling
      showCarouselComment()
    }
    clickOnCarouselButtons(event.target)
  }

  if (event.target.classList.contains("carousel-photo")) {
    carouselActivePhoto.classList.remove("carousel-active-photo")
    hideCarouselComment()

    event.target.classList.add("carousel-active-photo")
    carouselActivePhoto = event.target
    showCarouselComment()
  }

  if (
    carouselActivePhoto.classList.contains("author-1") &&
    carouselLeftButton.style.display !== "none"
  ) {
    carouselLeftButton.style.display = "none"
  } else {
    carouselLeftButton.style.display = " block"
  }

  if (
    carouselActivePhoto.classList.contains("author-4") &&
    carouselRightButton.style.display !== "none"
  ) {
    carouselRightButton.style.display = "none"
  } else {
    carouselRightButton.style.display = "block"
  }
}
