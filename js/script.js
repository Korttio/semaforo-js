const image = document.getElementById('img');
const btn = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null;


const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2){
    colorIndex++
}else {
    colorIndex = 0;
    }
}

const changecolor = () => {
    const cores = ['red', 'yellow', 'green'];
    const color = cores[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalID);
}

const turnOn = {
    'red': () => img.src = '../img/vermelho.png',
    'yellow': () => img.src = '../img/amarelo.png',
    'green': () => img.src = '../img/verde.png',
    'automatic': () => intervalID = setInterval(changecolor, 1000)
}


btn.addEventListener('click', trafficLight);


