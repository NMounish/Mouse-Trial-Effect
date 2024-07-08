const canvas = document.querySelector('.scratch-off');
const ctx = canvas.getContext('2d');
const hiddenText = document.querySelector('.hidden-text');
const container = document.querySelector('.container');
canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;

ctx.fillStyle = '#aaa';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.globalCompositeOperation = 'destination-out';
ctx.lineWidth = 30;
ctx.lineCap = 'round';

let scratching = false;

canvas.addEventListener('mousedown', () => {
    scratching = true;
});

canvas.addEventListener('mouseup', () => {
    scratching = false;
});

canvas.addEventListener('mousemove', (e) => {
    if (!scratching) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener('touchstart', () => {
    scratching = true;
});

canvas.addEventListener('touchend', () => {
    scratching = false;
});

canvas.addEventListener('touchmove', (e) => {
    if (!scratching) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
});
