const startGameContainer = document.querySelector("#startBoxContainer");
const boxStartGame = document.createElement("form");
const titleFormStart = document.createElement("label");
const btnStartGame = document.createElement("input");

boxStartGame.setAttribute("class", "show");
titleFormStart.setAttribute("class", "start-title-form");
btnStartGame.setAttribute("class", "btn-user");
btnStartGame.setAttribute("value", "Start Game");
btnStartGame.setAttribute("type", "button");



// Take data from LS
// let profile = JSON.parse(localStorage.getItem("player"));
// console.log(profile)
titleFormStart.innerHTML = `Are you ready ?`
boxStartGame.appendChild(titleFormStart);
boxStartGame.appendChild(btnStartGame);
startGameContainer.appendChild(boxStartGame);


btnStartGame.addEventListener("click", () => {
    startGameContainer.classList.add("no-show");
    startGameContainer.classList.remove("show");
    gameContainer.classList.remove("no-show")
});