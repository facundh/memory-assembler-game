const container = document.querySelector("#userFormContainer");
const userForm = document.createElement("form");
let titleForm = document.createElement("label");
const userName = document.createElement("input");
const buttonGame = document.createElement("input");
gameContainer.classList.remove("gallery");


// Atributes Elements
userForm.setAttribute("method", "post");
userForm.setAttribute("action", "");
userForm.setAttribute("class", "form-style")
titleForm.setAttribute("class", "title-form")
userName.setAttribute("type", "text");
userName.setAttribute("placeholder", "Choose your Username");
userName.setAttribute("class", "user-input");
userName.setAttribute("id", "userInput");
buttonGame.setAttribute("type", "button");
buttonGame.setAttribute("value", "Continue");
buttonGame.setAttribute("class", "btn-user");


// Player
userName.addEventListener("input", function(){
    let playerName = userName.value;
    if(playerName.length == 0 || playerName.length < 4 || playerName.currentplayer == ""){
        userName.classList.add("required-input");
    } else {
        userName.classList.remove("required-input");
        userName.classList.add("user-input");
    }
});

function saveLS(){
    let currentUser = {player : userName.value, score: 0};
    if(localStorage.getItem("players") === null){
        localStorage.setItem("players", `[${JSON.stringify(currentUser)}]`);
    } else {
        let playersArr = Array.from(JSON.parse(localStorage.getItem("players")));
        playersArr.push(currentUser);
        localStorage.setItem("players", JSON.stringify(playersArr));
    }
}

buttonGame.addEventListener("click", function(){
    saveLS();
    container.classList.add("no-show");
    startGameContainer.classList.remove("no-show");
    startGameContainer.classList.add("show");
    userName.value = "";
});

titleForm.textContent = "Welcome to the Memory Game";
userForm.appendChild(titleForm);
userForm.appendChild(userName);
userForm.appendChild(buttonGame);
container.appendChild(userForm);

