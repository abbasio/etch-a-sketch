//---------INITIAL GRID

const grid = document.querySelector('#container');
const slider = document.querySelector("#slider");
const output = document.querySelector("#dim");
slider.value = 16;
output.textContent = `${slider.value} x ${slider.value}`;

makeGrid();


//---------UPDATE GRID

slider.oninput = function () {
    output.textContent = `${slider.value} x ${slider.value}`;
    grid.innerHTML="";
    makeGrid();
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

//---------DRAW ON GRID

function drawColor(e){
    e.target.style.backgroundColor = ("black");
}




