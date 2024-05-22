const grid = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let line = document.createElement("div");
    line.classList.add("line");

    for(let j = 0; j<16; j++) {
        let box = document.createElement("div");
        box.classList.add("box");

        line.appendChild(box);
    }

    grid.appendChild(line);

}

grid.addEventListener("mouseover", (e)=>{
    let target = e.target;
    target.setAttribute("style", "background-color: grey;");
});