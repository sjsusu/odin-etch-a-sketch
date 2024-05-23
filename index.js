const grid = document.querySelector(".container");

// Make Default 16x16 grid
makeGrid(16);

grid.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.className === "box") {
        target.setAttribute("style", "background-color: rgba(0,0,0,0.1);");
    }
});

const gridSize = document.querySelector(".grid-size");

gridSize.addEventListener("click", () => {
    let text = "Please enter number of boxes per row for grid."
    let answer = prompt(text);

    while (isNaN(answer) || Number(answer) > 100 || Number(answer) < 1) {
        if (answer === null){
            return;
        }

        alert("Invalid answer or too large, try again.");
        answer = prompt(text);
    }

    const size = Number(answer);
    makeGrid(size);

});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box")

    for (let box of boxes) {
        box.setAttribute("style", "background-color: white;");
    }
});

function makeGrid(size) {
    grid.replaceChildren();
    for (let i = 0; i < size; i++) {
        let line = document.createElement("div");
        line.classList.add("line");

        for (let j = 0; j < size; j++) {
            let box = document.createElement("div");
            box.classList.add("box");

            line.appendChild(box);
        }

        grid.appendChild(line);

    }
}