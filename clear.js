const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});