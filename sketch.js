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
        const gridCell = document.createElement('div');
        gridCell.addEventListener('mouseover', drawColor);
        grid.appendChild(gridCell);
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
    if (!drawButton.classList.contains("active")) {
        drawButton.classList.add("active");
    }
    if (rainbowButton.classList.contains("active") || (eraserButton.classList.contains("active"))) {
        rainbowButton.classList.remove("active");
        eraserButton.classList.remove("active");
    }
    drawMode = true;
    rainbowMode = false;
    eraserMode = false;
}

function rainbow() {
    if (!rainbowButton.classList.contains("active")) {
        rainbowButton.classList.add("active");
    }
    if (drawButton.classList.contains("active") || (eraserButton.classList.contains("active"))) {
        drawButton.classList.remove("active");
        eraserButton.classList.remove("active");
    }
    drawMode = false;
    rainbowMode = true;
    eraserMode = false;
}

function eraser(){
    if (!eraserButton.classList.contains("active")) {
        eraserButton.classList.add("active");
    }
    if (drawButton.classList.contains("active") || (rainbowButton.classList.contains("active"))) {
        drawButton.classList.remove("active");
        rainbowButton.classList.remove("active");
    }
    drawMode = false;
    rainbowMode = false;
    eraserMode = true;
}

drawButton.addEventListener ("click", draw);
rainbowButton.addEventListener("click", rainbow);
eraserButton.addEventListener("click", eraser);

//---------DRAW

function drawColor(e){
    let color = colorPick.value; 
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);

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





