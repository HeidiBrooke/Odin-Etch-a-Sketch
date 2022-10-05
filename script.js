//Create initial grid
let gridValue = 16;

function createGrid(){
    let dimension = prompt("Enter your desired side length:");
    let dimensionNum = Number(dimension);
    createPixels(dimensionNum);

}
function createPixels(num){
    let total = num * num;
    for (i = 0; i < total; i++){
        createPixel(num);
    }
}

function createPixel(num){
    const div = document.createElement('div');
    //div.textContent = "New Div";
    div.classList.add('pixel');
    let pixelWidth = Math.floor(396/num);
    let styleWidth = pixelWidth.toString();
    let widthInPixels = styleWidth + "px";
    div.style.width = widthInPixels;
    div.style.width = widthInPixels;
    // console.log(widthInPixels);
    
    // div.setAttribute('min-width', '100%');
    // div.setAttribute('min-height', '100%');
    const grid = document.getElementsByClassName("gridContainer");
    grid[0].appendChild(div);
}

createGrid();