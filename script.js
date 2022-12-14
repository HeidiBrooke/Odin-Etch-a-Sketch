//Create initial grid
let gridValue;
let colorMode = "black";
let percentColored = 0;

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
    div.addEventListener('mouseover', color);
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



function color(e){
    if (colorMode === 'color'){
        console.log("coloring!")
        let randomColorHolder = randomColor();
        console.log(typeof randomColorHolder);
        e.target.style.backgroundColor = randomColorHolder;
    }
    else if (colorMode === 'sketch'){
        e.target.style.opacity = opacityControl(e);
        e.target.style.backgroundColor = 'black';
    }
    else {
        e.target.style.backgroundColor = 'black';
    }
}

function clearColor(){
    console.log("clearing");
    let divs = document.querySelectorAll('.pixel');
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
        div.style.opacity = '1';
    });
}

function sketchMode(){
    console.log("sketch mode activated!")
    colorMode = "sketch";
}

function opacityControl(e){
    let div = e.target;
    let color = getComputedStyle(div).getPropertyValue("background-color");
    let opacityHolder = getComputedStyle(div).getPropertyValue("opacity");
    let opacityNum = Number(opacityHolder);
    console.log(opacityHolder);
    if ((opacityHolder === "1") && (color === "rgb(255, 255, 255)")){
        console.log("in the if")
        opacityHolder = .1;
    }
    else {
        opacityNum = opacityNum + .1;
        console.log(typeof opacityHolder);
        opacityHolder = opacityNum.toString();
        console.log(opacityHolder);
    }
    
    return opacityHolder; 
}

function colorRandom(){
    console.log('color mode activated!');
    colorMode = 'color';
}

function randomColor(){
    let rgb = [];
    for (i = 0; i < 3; i++){
    rgb[i] = Math.floor(Math.random() * 256);
    }
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];
    let randomColorHolder = "rgb(" + r + ", " + g + ", " + b+ ")";
    return randomColorHolder;
}

createGridNoPromt(16);