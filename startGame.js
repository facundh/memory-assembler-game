const startGameContainer = document.querySelector("#startBoxContainer");
const boxStartGame = document.createElement("form");
const titleFormStart = document.createElement("label");
const btnStartGame = document.createElement("input");

boxStartGame.setAttribute("class", "start-form-style");
titleFormStart.setAttribute("class", "start-title-form");
btnStartGame.setAttribute("class", "btn-user");
btnStartGame.setAttribute("value", "Start Game");

titleFormStart.innerHTML = "Are you ready?"
boxStartGame.appendChild(titleFormStart);
boxStartGame.appendChild(btnStartGame);
startGameContainer.appendChild(boxStartGame);