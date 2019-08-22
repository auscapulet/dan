// const mailStorage = [
//   { subject: "hello" },
//   { subject: "how could you?" },
//   { subkect: "anythig" }
// ]

// const mailList = document.getElementById("mailList")

// // creation

// mailStorage.forEach((mailItem, index) => {
//   let container = document.createElement("div")
//   let subj = document.createElement("h2")
//   let from = document.createElement("span")
//   let to = document.createElement("span")
//   let text = document.createElement("p")

//   subj.innerText = mailItem.subject.text
//   from.innerText = mailItem.from
//   to.innerText = mailItem.to
//   text.innerText = mailItem.text
//   text.hidden = true

//   // putting in container

//   container.classList.add("single-mail")
//   container.append(subj, from, to, text)
// })

// container.addEventListener("click", () => {
//   const activeMail = document.querySelector(".active") || {}

//   if (activeMail) {
//     activeMail.classList.remove("active")
//     activeMail.lastChild.hidden = true
//   }

//   const

//   if (event.target.classList.contains("single-mail")) {
//     e.target.lastChild.hidden = !e.target.lastChild.hidden
//   } else if (event.target.parentElement.classList.contains("sindgle-mail")) {
//     event.target.parentElement.classList.hidden = !e.target.lastChild.hidden
//   }
// })

// // putting container to maillist

// mailList.append(container)

// function showModal(event) {
//   const modalBg = document.createElement('div')
//   const newMailForm = document.createElement('form')
//   const subject = document.createElement("input")
//   const from = document.createElement("input")
//   const to = document.createElement("input")
//   const text = document.createElement("textarea")
//   const send = document.createElement("input")

//   send.type = "submit"

//   modalBg.appendChild(newMailForm)
//   newMailForm.append(subject, from, to, text, send)
// }

// document.querySelector("script").before(modalBg)

//timerVents

// 1

// const showMsg = (msgTxt, time) => {
//   setTimeout(function() {
//     alert(msgTxt)
//   }, time)
// }

// showMsg("kokok", 2000)

// 2

// const showMsg = (msgTxt, time, counter) => {
//   let interval = setInterval(() => {
//     if (counter === 0) {
//       clearInterval(interval)
//     } else {
//       alert(msgTxt)
//       counter--
//     }
//   }, time)
// }

// showMsg("kokok", 2000, 2)
