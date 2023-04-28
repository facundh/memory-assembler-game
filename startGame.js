
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

function checkeLS (){
    if(localStorage.length === 0){
        let arrVacio = [];
        return arrVacio;
    } else {
        let playerSaved = JSON.parse(localStorage.getItem("players"));
        titleFormStart.innerHTML = `Are you ready ${playerSaved[0].player}?`
    }
}

boxStartGame.appendChild(titleFormStart);
boxStartGame.appendChild(btnStartGame);
startGameContainer.appendChild(boxStartGame);


btnStartGame.addEventListener("click", () => {
    startGameContainer.classList.add("no-show");
    startGameContainer.classList.remove("show");
    gameContainer.classList.remove("no-show");
    gameContainer.classList.add("show");
});

