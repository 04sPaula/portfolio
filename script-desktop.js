// Lógica para o cursor customizado
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let outlineX = 0;
let outlineY = 0;
const easeDot = 0.15;
const easeOutline = 0.12;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    dotX += (mouseX - dotX) * easeDot;
    dotY += (mouseY - dotY) * easeDot;
    outlineX += (mouseX - outlineX) * easeOutline;
    outlineY += (mouseY - outlineY) * easeOutline;

    cursorDot.style.left = `${dotX}px`;
    cursorDot.style.top = `${dotY}px`;
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Lógica para o efeito hover do cursor em elementos interativos
const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursorDot.classList.add('hover');
        cursorOutline.classList.add('hover');
    });
    el.addEventListener('mouseout', () => {
        cursorDot.classList.remove('hover');
        cursorOutline.classList.remove('hover');
    });
});