//---------INITIAL GRID SETUP

const grid = document.querySelector('#container');
const slider = document.querySelector("#slider");
const output = document.querySelector("#dim");
const colorPick = document.querySelector('#color-picker');
const drawButton = document.querySelector('#draw');
const rainbowButton = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser');

let drawMode = true;
let rainbowMode = false;
let eraserMode = false;


colorPick.value = "#000000";
slider.value = 16;
output.textContent = `${slider.value} x ${slider.value}`;

makeGrid();

//---------CREATE GRID

function makeGrid() {

    gridSize = slider.value;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

    for (let i = 0; i < (gridSize * gridSize); i++){
        const addGrid = document.createElement('div');
        addGrid.addEventListener('mouseover', drawColor);
        addGrid.classList.add('cell');
        grid.appendChild(addGrid);
    }

}

//---------UPDATE GRID SIZE

slider.oninput = function () {
    output.textContent = `${slider.value} x ${slider.value}`;
    resetGrid();
}

function resetGrid() {
    grid.innerHTML = "";
    makeGrid();
}

//---------BUTTONS


function draw() {
    drawMode = true;
    rainbowMode = false;
    eraserMode = false;
}

function rainbow() {
    drawMode = false;
    rainbowMode = true;
    eraserMode = false;
}

function eraser(){
    drawMode = false;
    rainbowMode = false;
    eraserMode = true;
}

drawButton.addEventListener ("click", draw);
rainbowButton.addEventListener("click", rainbow);
eraserButton.addEventListener("click", eraser);


//---------RANDOM COLOR SELECTOR

let random1 = Math.floor(Math.random() * 256);
let random2 = Math.floor(Math.random() * 256);
let random3 = Math.floor(Math.random() * 256);


//---------DRAW

function drawColor(e){
    let color = colorPick.value;

    if (drawMode) {
        e.target.style.backgroundColor = (color);
    }
    else if (rainbowMode) {
        e.target.style.backgroundColor = (`rgb(${random1}, ${random2}, ${random3})`)
    }
    else if (eraserMode) {
        e.target.style.backgroundColor = "#FFFFFF";
    }

}





