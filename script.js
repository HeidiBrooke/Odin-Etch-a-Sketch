//Create initial grid
let gridValue = 16;
function createGrid(){
const newDiv = document.createElement("div");
newDiv.textContent = 'New Div';
newDiv.classList.add('button');
console.log("made div");
const grid = document.getElementsByClassName("gridContainer");
console.log(typeof grid);
grid[0].appendChild(newDiv);
}

// function createGrid(){
//     let dimension = prompt("Enter your desired side length:");
//     let dimensionNum = Number(dimension);
//     createPixels(dimensionNum);

// }
// function createPixels(){


// }
createGrid();