const sketch_container = document.querySelector('div.sketch-container');
const new_grid_button = document.getElementById("new-grid");
new_grid_button.addEventListener('click',new_grid);
build_sketch(16);
function new_grid(){
    let grid_size = prompt("Please enter your grid length (betwwen 1-100)");
    if(grid_size==null){return;}else 
    if(grid_size>100||grid_size<1||(grid_size/grid_size)!=1){
       new_grid(); 
    }else{
        build_sketch(grid_size);
    }
}

function build_sketch(size){
    sketch_container.innerHTML = "";
    for (let index = 1; index <= size*size; index++) {
        const pixel = document.createElement('div');
        pixel.classList.add('sketch-pixel');
        sketch_container.appendChild(pixel);
        const basis = (1/size)*100;
        pixel.style.flexBasis=`${basis}%`;  
        
    }
    start_listener();
}
function start_listener(){
    const pixels = document.querySelectorAll('div.sketch-pixel');
    pixels.forEach(pixel=>pixel.addEventListener('mouseover',color_in));
}
function color_in(){
    this.style.backgroundColor = "black";
}