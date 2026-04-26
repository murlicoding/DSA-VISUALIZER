let arr = [];

function generateArray() {
    arr = [];
    let container = document.getElementById("array");
    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        let val = Math.floor(Math.random() * 100);
        arr.push(val);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = val + "px";

        container.appendChild(bar);
    }
}

async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {

            bars[j].style.background = "red";
            bars[j+1].style.background = "red";

            await sleep(100);

            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

                bars[j].style.height = arr[j] + "px";
                bars[j+1].style.height = arr[j+1] + "px";
            }

            bars[j].style.background = "blue";
            bars[j+1].style.background = "blue";
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let grid = [];
let visited = [];

function createGrid() {
    let container = document.getElementById("grid");
    container.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        grid[i] = [];
        visited[i] = [];

        for (let j = 0; j < 10; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            container.appendChild(cell);

            grid[i][j] = cell;
            visited[i][j] = false;
        }
    }
}

async function dfs(i, j) {
    if (i < 0 || j < 0 || i >= 10 || j >= 10 || visited[i][j]) return;

    visited[i][j] = true;
    grid[i][j].style.background = "green";

    await sleep(100);

    await dfs(i+1, j);
    await dfs(i-1, j);
    await dfs(i, j+1);
    await dfs(i, j-1);
}

function startDFS() {
    createGrid();
    dfs(0, 0);
}