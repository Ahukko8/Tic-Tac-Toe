// Animation
gsap.fromTo(".heading",  {y: -400}, { y: 40},{delay: 1},{ease: "in"});
gsap.fromTo(".start-btn",  {y: -200}, { y: 50},{delay: 1}, {ease: "in"});





let startButton = document.getElementById("startButton");
let gameBoard = document.getElementById("container");
let homePage = document.getElementById("homePage");
let restartButton = document.getElementById("restartButton")


startButton.onclick = function () {
    container.style.display = "block";
    homePage.style.display = "none";
  }

  
  window.onclick = function (event) {
    if (event.target == gameBoard) {
      container.style.display = "none";
    }
  }
  