//---------GRID SETUP

const slider = document.querySelector("#slider");
const output = document.querySelector("#dim");
output.textContent = `${slider.value} x ${slider.value}`;

const grid = document.querySelector('#container');
let gridSize = slider.value;
grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;


slider.oninput = function () {
    output.textContent = `${slider.value} x ${slider.value}`;
}


//---------GRID SIZE
for (let i = 0; i < (gridSize * gridSize); i++){
    const addGrid = document.createElement('div');
    addGrid.addEventListener('mouseover', drawColor);
    addGrid.classList.add('cell');
    grid.appendChild(addGrid);
}

//---------GRID DRAW

function drawColor(e){
    e.target.style.backgroundColor = ("black");
}




