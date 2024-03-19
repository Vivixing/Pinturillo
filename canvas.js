const canvas = document.getElementById('gameCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext('2d'); 
color = "#000000";
width = 5;
let drawing = false;
let coords = {x:0,y:0};

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
window.addEventListener("resize", adjustCanvasSize);

function startDrawing(e) { 
    drawing = true; 
    getPosition(e); 
}
function draw(e){ 
    if (!drawing) return; 
    ctx.beginPath(); 
    ctx.lineWidth = width; 
    ctx.lineCap = 'round'; 
    ctx.strokeStyle = color;
    ctx.moveTo(coords.x, coords.y);  
    getPosition(e); 
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
    ctx.stroke();
    ctx.beginPath();
}

function getPosition(e){ 
    const rect = canvas.getBoundingClientRect();
    coords.x = e.clientX - rect.left; 
    coords.y = e.clientY - rect.top; 
}

function changeColor(selectedColor) {
    color = selectedColor;
    console.log("Color seleccionado:", color);
    return color;
}

function changeWidth(num) {
    width = num;
    console.log("Ancho seleccionado:", width);
    return width;
}
