const container = document.querySelector("#gameSection");

const arrFunct = [];

// Images
function createArrImg(_element, _src,_name, _className, arr){
    let img = document.createElement(_element);
    img.className = _className;
    img.name = _name;
    img.src = _src;
    arr.push(img);
}
function createImg(_element, _src, _name,  _className){
    let img = document.createElement(_element);
    img.className = _className;
    img.name = _name;
    img.src = _src;
}


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
        let randomIndex = Math.floor(Math.random() * ( i + 1));
        let notPermanent = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = notPermanent;
    }
}

mixArr(arrFunct);


arrFunct.forEach(img => {
        container.appendChild(img)
});



//Dar vuelta las imagenes
setTimeout(() => {
   
    arrFunct.forEach(img => {
        img.addClass("pictureSecret");
        
    })
},500)


let prevImg; 
let selectedImg = [];


arrFunct.forEach(img => {
        img.addEventListener("click", () => {
            img.removeClass()
        })
      

});

console.log(arrFunct);