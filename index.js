const grid = document.querySelector(".container");
let size = 16;
let rainbow = false;
let fade = false;

// Make Default 16x16 grid
makeGrid(size);

grid.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.className === "box") {
        if (Number(target.style.opacity) !== 0 && fade === true) {
            target.style.opacity = Number(target.style.opacity) - 0.1;
        } else if (fade === false) {
            target.setAttribute("style", "background-color: rgba(0,0,0,0.1);");
        }

        if (rainbow === true) {
            let rgbR = randomInt(0, 255);
            let rgbB = randomInt(0, 255);
            let rgbG = randomInt(0, 255);
            target.style.backgroundColor = "rgb( " + rgbR + ", " + rgbB + ", " + rgbG + ")";
        }

    }
});

const gridSize = document.querySelector(".grid-size");

gridSize.addEventListener("click", () => {
    let text = "Please enter number of boxes per row for grid."
    let answer = prompt(text);

    while (isNaN(answer) || Number(answer) > 100 || Number(answer) < 1) {
        if (answer === null) {
            return;
        }
        alert("Invalid answer or too large, try again.");
        answer = prompt(text);
    }

    size = Number(answer);
    makeGrid(size);

});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");

    for (let box of boxes) {
        box.setAttribute("style", "background-color: white; opacity: 1;");
    }
});

const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", (e) => {
    if (rainbow === true) {
        rainbow = false;
        e.target.style.backgroundColor = "rgb(240, 248, 255)";
        makeGrid(size);
    } else {
        rainbow = true;
        e.target.style.backgroundColor = "rgb(254, 178, 218)";
        makeGrid(size)
    }

});

const fadeButton = document.querySelector(".fade");
fadeButton.addEventListener("click", (e) => {
    if (fade === true) {
        fade = false;
        e.target.style.backgroundColor = "rgb(240, 248, 255)";
        makeGrid(size);
    } else {
        fade = true;
        e.target.style.backgroundColor = "rgb(155, 185, 210)";
        makeGrid(size)
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
            box.style.opacity = 1;

            line.appendChild(box);
        }

        grid.appendChild(line);

    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}