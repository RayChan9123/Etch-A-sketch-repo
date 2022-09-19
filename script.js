const container = document.querySelector(".container");
const sizeBtn = document.querySelector("#sizeBtn");
const clearBtn = document.querySelector("#clearBtn");
const size = 16;//default grids num

function setupGrids(size) 
{
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++)
    {
        const smallGrid = document.createElement("div");
        smallGrid.classList.add("smallGrids");
        smallGrid.addEventListener("mouseover", () => smallGrid.classList.add("hover"));
        container.appendChild(smallGrid);
    }
}

function clearGrid() {
    container.innerHTML = '';
}

function askSize(size) {
    
    size = prompt("What is the number of squares per side? 1-100","");
    size > 100 ? size = 100:
    size < 1 ? size = 1 : size; // in case input out of limit
    clearGrid();
    setupGrids(size);
}


clearBtn.addEventListener('click',clearGrid);///clearBtn.onclick = () => clearGrid();
sizeBtn.addEventListener('click', askSize);

window.onload = () => {
    setupGrids(size);
}