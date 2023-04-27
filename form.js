const container = document.querySelector("#userFormContainer");
const userForm = document.createElement("form");
let titleForm = document.createElement("label");
const userName = document.createElement("input");
const buttonGame = document.createElement("input");

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
buttonGame.setAttribute("onclick", "console.log(userName.value)");
buttonGame.setAttribute("class", "btn-user");

//Error Message


// Player
let player = {
    playerName:"",
    score:0
};

userName.addEventListener("input", () => {
    player.name = userName.value;

});

const { playerName, score } = player;

buttonGame.addEventListener('click', () => {
    if(playerName == "" ) {
        userName.setAttribute("class", "required-input");
        userName.setAttribute("placeholder", "Username is required");
        return
    } else {
        playerName = userName.value;
        score = 0;
        console.log({player})
    }
   
});

titleForm.innerHTML = "Welcome to the Memory Game";
userForm.appendChild(titleForm);
userForm.appendChild(userName);
userForm.appendChild(buttonGame);

container.appendChild(userForm);

