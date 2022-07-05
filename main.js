const modal = document.querySelector(".window")
const info = document.querySelector(".rules")
const off = document.querySelector(".off")

const game = document.querySelector(".game")
const paper = document.querySelector(".papper")
const scissor = document.querySelector(".scissors")
const rock = document.querySelector(".rock")

const start = document.querySelector(".start")
const Paper = document.querySelector(".pappers")
const Scissor = document.querySelector(".scissor")
const Rock = document.querySelector(".rocks")

const papeR = document.querySelector(".pap")
const scissoR = document.querySelector(".sci")
const rocK = document.querySelector(".roc")

const Num = document.querySelector(".num")

const Again = document.querySelector(".again")
const You = document.querySelector(".try")
const Win = document.querySelector(".you")
let result = 0

const choose = document.getElementsByClassName("round")

info.addEventListener("click", () => {
    modal.classList.add("disp")
})

off.addEventListener("click", () => {
    modal.classList.remove("disp")
})



paper.addEventListener("click", () => {
    Start()
    game.classList.add("none")
    Paper.classList.add("disp")
    Scissor.classList.remove("disp")
    Rock.classList.remove("disp")
  setTimeout(() => {
    for (let i = 0; i < choose.length; i++) {
        choose[Math.round([i] * Math.random(2))].style.display ="flex"
        if (choose[2].style.display == "flex") {
            Win.innerHTML = "YOU LOSE"
        } else if (choose[1].style.display == "flex") {
            Win.innerHTML = "YOU WIN"
        } else {
            Win.innerHTML = "DRAW"
        }
    }
    
  }, 1000);

  setTimeout(() => {
      Again.classList.add("disp")
  }, 2000);


  setTimeout(() => {
    if (Win.innerHTML === "YOU WIN") {
        result += 1
        Num.innerHTML = result
    }
}, 3000);

})

scissor.addEventListener("click", () => {
    Start()
    game.classList.add("none")
    Scissor.classList.add("disp")
    Paper.classList.remove("disp")
    Rock.classList.remove("disp")
  setTimeout(() => {
    for (let i = 0; i < choose.length; i++) {
        choose[Math.round([i] * Math.random(2))].style.display ="flex"
        if (choose[2].style.display == "flex") {
            Win.innerHTML = "DRAW"
        } else if (choose[1].style.display == "flex") {
            Win.innerHTML = "YOU LOSE"
        } else {
            Win.innerHTML = "YOU WIN"
        }
    }
    
  }, 1000);

  setTimeout(() => {
      Again.classList.add("disp")
  }, 2000);

  setTimeout(() => {
    if (Win.innerHTML === "YOU WIN") {
        result += 1
        Num.innerHTML = result
    }
}, 3000);
})

rock.addEventListener("click", () => {
    Start()
    game.classList.add("none")
    Rock.classList.add("disp")
    Scissor.classList.remove("disp")
    Paper.classList.remove("disp")
  setTimeout(() => {
    for (let i = 0; i < choose.length; i++) {
        choose[Math.round([i] * Math.random(2))].style.display ="flex"
        if (choose[2].style.display == "flex") {
            Win.innerHTML = "YOU WIN"
        } else if (choose[1].style.display == "flex") {
            Win.innerHTML = "DRAW"
        } else {
            Win.innerHTML = "YOU LOSE"
        }
    }
    
  }, 1000);

  setTimeout(() => {
      Again.classList.add("disp")
  }, 2000);

setTimeout(() => {
    if (Win.innerHTML === "YOU WIN") {
        result += 1
        Num.innerHTML = result
    }
}, 3000);

})


 

function Start() {
    start.classList.add("disp")
}

You.addEventListener("click", () => {
    game.classList.remove("none")
    start.classList.remove("disp")
    scissoR.style.display = "none"
    papeR.style.display = "none"
    rocK.style.display = "none"
    Again.classList.remove("disp")
})

