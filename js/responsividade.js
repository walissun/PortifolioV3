const flexContainer = document.querySelector('.projetos .flex');
let isDown = false;
let startX;
let scrollLeft;

flexContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - flexContainer.offsetLeft;
    scrollLeft = flexContainer.scrollLeft;
});

flexContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

flexContainer.addEventListener('mouseup', () => {
    isDown = false;
});

flexContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - flexContainer.offsetLeft;
    const walk = (x - startX) * 3; // Ajustar a velocidade de rolagem
    flexContainer.scrollLeft = scrollLeft - walk;
});

// Eventos de toque para dispositivos móveis
flexContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - flexContainer.offsetLeft;
    scrollLeft = flexContainer.scrollLeft;
});

flexContainer.addEventListener('touchend', () => {
    isDown = false;
});

flexContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - flexContainer.offsetLeft;
    const walk = (x - startX) * 3; // Ajustar a velocidade de rolagem
    flexContainer.scrollLeft = scrollLeft - walk;
});