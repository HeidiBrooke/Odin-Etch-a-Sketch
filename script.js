//Create initial grid
let gridValue = 16;

function createGrid(){
    let dimension = prompt("Enter your desired side length:");
    let dimensionNum = Number(dimension);
    createPixels(dimensionNum);

}
function createPixels(num){
    for (i = 0; i < num; i++){
        createPixel();
    }
}

function createPixel(){
    const div = document.createElement('div');
    div.textContent = "New Div";
    div.classList.add('button');
    const grid = document.getElementsByClassName("gridContainer");
    grid[0].appendChild(div);
}

createGrid();