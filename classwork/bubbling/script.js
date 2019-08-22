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
//    counter--
//     if (counter === 0) {
//       clearInterval(interval)
//     } else {
//       alert(msgTxt)
//
//     }
//   }, time)
// }

// showMsg("kokok", 2000, 2)

//3

if (localStorage.getItem("userName")) {
  const localStorageCaller = localStorage.getItem("username")
  alert(`hello ${localStorageCaller}`)
} else {
  let name = prompt("Tell me your name", "kk")
  localStorage.setItem("userName", name)
  alert(`hey, ${name}`)
}
