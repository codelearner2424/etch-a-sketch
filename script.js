const container = document.querySelector(".container");
const gridLength = document.querySelector("#grid-length");
const gridDisplay = document.querySelector("#grid-display");


function createGrid(n) {
    gridDisplay.textContent = `${gridLength.value} by ${gridLength.value}`;

    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div");
            cell.style.width = `${36/n}rem`;
            cell.style.height = `${36/n}rem`;
            cell.style.border = "none";
            cell.classList.add("grid-cell");
            row.appendChild(cell);

        }
        container.appendChild(row);
    }
}

function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(`${gridLength.value}`)


}
createGrid(8);
container.addEventListener("mouseover", function(e) {
    if (e.target.matches(".grid-cell")) {
        e.target.classList.add('active');
    }
})

gridLength.addEventListener('input', () => {
    reset();
    console.log(`${gridLength.value}`)
})