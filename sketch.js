//---------INITIAL GRID

const grid = document.querySelector('#container');
const slider = document.querySelector("#slider");
const output = document.querySelector("#dim");
const colorPick = document.querySelector('#color-picker');
colorPick.value = "#000000";
slider.value = 16;
output.textContent = `${slider.value} x ${slider.value}`;

makeGrid();


//---------UPDATE GRID

slider.oninput = function () {
    output.textContent = `${slider.value} x ${slider.value}`;
    resetGrid();
}


//---------MAKE GRID

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

function resetGrid() {
    grid.innerHTML = "";
    makeGrid();
}

//---------DRAW ON GRID

function drawColor(e){
    let color = colorPick.value;
    e.target.style.backgroundColor = (color);
}




