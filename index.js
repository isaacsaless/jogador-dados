const textBox = document.getElementById("value");
const submited = document.getElementById("submitBtn");
let imgDiv = document.getElementById('imgs');
const imgs = [
    "img/1lado.svg",
    "img/2lado.svg",
    "img/3lado.svg",
    "img/4lado.svg",
    "img/5lado.svg",
    "img/6lado.svg",
];

submited.onclick = function(){;
    imgDiv.innerHTML = ''
    let textBoxValue = (textBox.value);
    for(let i = 0; i < textBoxValue; i++){
    let random = Math.floor(Math.random() * imgs.length);
    const newImg = document.createElement('img');
    newImg.src = imgs[random];
    imgDiv.appendChild(newImg);
};
}