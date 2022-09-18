const container = document.querySelector(".container");

let numOfgrid = 16 * 16;

for (let i = 0; i < numOfgrid; i++)
{
    const smallGrid = document.createElement("div");
    smallGrid.classList.add("smallGrids");
    container.appendChild(smallGrid);
}
