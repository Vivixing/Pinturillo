const canvas = document.getElementById('gameCanvas');
var color = ""

window.addEventListener('load', () => {
    document.addEventListener('mousedown',startDrawing);
    document.addEventListener('mousemove',draw);
    document.addEventListener('mouseup',stopDrawing);
});

const ctx = canvas.getContext('2d'); 
let drawing = false;
let coords = {x:0,y:0};
function startDrawing(e) {
    drawing = true;
    draw(e);
}

function getPosition(e){ 
    coords.x = e.clientX - canvas.offsetLeft; 
    coords.y = e.clientY - canvas.offsetTop; 
}

function colorSeleccionado(colorEnviado) {
    color = colorEnviado;
    console.log("Color seleccionado:", color);
    return color;
}

function startDrawing(e) { 
    drawing = true; 
    getPosition(e); 
}
function draw(e){ 
    if (!drawing) return; 
    ctx.beginPath(); 
    
    ctx.lineWidth = 5; 
    
    // Sets the end of the lines drawn 
    // to a round shape. 
    ctx.lineCap = 'round'; 
        ctx.strokeStyle = color;
                
        // The cursor to start drawing 
        // moves to this coordinate 
        ctx.moveTo(coords.x, coords.y); 
         
        // The position of the cursor 
        // gets updated as we move the 
        // mouse around. 
        getPosition(e); 
        
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        
    }
function stopDrawing() {
    drawing = false;
    ctx.stroke();
    ctx.beginPath();
}