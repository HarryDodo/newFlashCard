const first = document.getElementById("kaart1")
first.addEventListener(click, draaiKaart1)

const second = document.getElementById("kaart2")
second.addEventListener(click, draaiKaart2)

const third = document.getElementById("kaart3")
third.addEventListener(click, draaiKaart3)

const fourth = document.getElementById("kaart4")
fourth.addEventListener(click, draaiKaart4)

const fifth = document.getElementById("kaart5")
fifth.addEventListener(click, draaiKaart5)

const sixth = document.getElementById("kaart6")
sixth.addEventListener(click, draaiKaart6)

function draaiKaart1() {
   const heading = document.getElementById("kaart1")
   console.log(heading)
   heading.innerText = "Tomorrow"
   console.log("test!1")
}

function draaiKaart2() {
   const heading = document.getElementById("kaart2")
   console.log(heading)
   heading.innerText = "A promise"
   console.log("test!2")
}

function draaiKaart3() {
   const heading = document.getElementById("kaart3")
   console.log(heading)
   heading.innerText = "A cold"
   console.log("test!3")
}

function draaiKaart4() {
   const heading = document.getElementById("kaart4")
   console.log(heading)
   heading.innerText = "He was bald"
   console.log("test!4")
}

function draaiKaart5() {
   const heading = document.getElementById("kaart5")
   console.log(heading)
   heading.innerText = "A widow"
   console.log("test!5")
}

function draaiKaart6() {
   const heading = document.getElementById("kaart6")
   console.log(heading)
   heading.innerText = "A towel"
   console.log("test!6")
}

function dikkepopup(){
    alert("TIME FOR SOME BEER");
}