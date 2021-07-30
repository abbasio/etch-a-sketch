const grid = document.querySelector('#container');
let gridSize = 256;


for (let i = 0; i < gridSize; i++){
    const addGrid = document.createElement('div');
    addGrid.addEventListener('mouseover', drawColor);
    addGrid.classList.add('cell');
    grid.appendChild(addGrid);
}


function drawColor(e){
    e.target.style.backgroundColor = ("black");
}


