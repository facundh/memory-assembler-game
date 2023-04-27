const gameContainer = document.querySelector("#gameContainer");
const board = document.createElement("div");
board.className = "img-board";
const arrFunct = [];
gameContainer.classList.toggle("gallery");
const btnClear = document.createElement("btn");
// gameContainer.addEventListener("DOMContentLoaded", getDataLS())


// Data from LS
// function getDataLS(){
//     return JSON.parse(localStorage.getItem("player"));
// }
// let answer = getDataLS()
// console.log(answer)

// Images
function createArrImg(_element, _src,_name, _className, arr){
    let img = document.createElement(_element);
    img.className = _className;
    img.name = _name;
    img.src = _src;
    arr.push(img);
};

function createImg(_element, _src, _name,  _className){
    let img = document.createElement(_element);
    img.className = _className;
    img.name = _name;
    img.src = _src;
    return img
};


createArrImg("img", "./img/one.jpg","h1", "picture", arrFunct);
createArrImg("img", "./img/two.jpg", "h2","picture", arrFunct);
createArrImg("img", "./img/three.jpg","h3", "picture", arrFunct);
createArrImg("img", "./img/four.jpg","h4", "picture", arrFunct);
createArrImg("img", "./img/five.jpg","h5", "picture", arrFunct);
createArrImg("img", "./img/six.jpg", "h6","picture", arrFunct);
createArrImg("img", "./img/seven.jpg","h7", "picture", arrFunct);
createArrImg("img", "./img/eight.jpg","h8", "picture", arrFunct);
createArrImg("img", "./img/one.jpg", "h1", "picture", arrFunct);
createArrImg("img", "./img/two.jpg", "h2", "picture", arrFunct);
createArrImg("img", "./img/three.jpg", "h3", "picture", arrFunct);
createArrImg("img", "./img/four.jpg","h4", "picture", arrFunct);
createArrImg("img", "./img/five.jpg","h5", "picture", arrFunct);
createArrImg("img", "./img/six.jpg","h6", "picture", arrFunct);
createArrImg("img", "./img/seven.jpg", "h7", "picture", arrFunct);
createArrImg("img", "./img/eight.jpg", "h8", "picture", arrFunct);


// Mix Array;
const mixArr = arr => {
    for(let i = arr.length - 1; i > 0 ; i--){
        // Esto me da un indice randon entre
        let randomIndex = Math.floor(Math.random() * ( i + 1));
        let notPermanent = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = notPermanent;
    }
}

mixArr(arrFunct);


arrFunct.forEach(img => {
    gameContainer.appendChild(img)
});

btnClear.textContent = "eliminar"
btnClear.setAttribute("class", "btn-clear")

gameContainer.appendChild(btnClear);

btnClear.addEventListener("click", () => {
    localStorage.clear();
    gameContainer.classList.add("no-show");
    container.classList.remove("no-show");
    container.classList.add("show");
});



// Dar vuelta las imagenes
// setTimeout(() => {
    //     arrFunct.forEach(img => {
        //         img.src = "img/acertijo.jpg";
        //     })
        // },10000)
        


        
        // const cards = document.querySelectorAll("img");


