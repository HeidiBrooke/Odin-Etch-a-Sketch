//Create initial grid
let gridValue;

function createGrid(){
    gridValue = prompt("Enter your desired side length:");
    gridValue = Number(gridValue);
    createPixels(gridValue);

}
function createPixels(num){
    resetGrid();
    let total = num * num;
    for (i = 0; i < total; i++){
        createPixel(num);
    }
}

function createPixel(num){
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.addEventListener('mouseover', colorBlack);
    let pixelWidth = Math.floor((400-num)/num);
    let styleWidth = pixelWidth.toString();
    let widthInPixels = styleWidth + "px";
    div.style.width = widthInPixels;
    div.style.width = widthInPixels;
    const grid = document.getElementsByClassName("gridContainer");
    grid[0].appendChild(div);
}

function resetGrid(){
    let divs = document.querySelectorAll('.pixel');
    divs.forEach(div => {
        div.remove();
    });
}

function createGridNoPromt(num){
    createPixels(num);
}

function colorBlack(e){
    e.target.style.backgroundColor = 'black';
}

function clearColor(){
    console.log("clearing");
    let divs = document.querySelectorAll('.pixel');
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
    });
}

createGridNoPromt(16);