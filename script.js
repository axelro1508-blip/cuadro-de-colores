const cuadrado = document.getElementById('juego-cuadrado');
let posX = 50;
let posY = 50;
const paso = 10; 

// --- Evento de Teclado (Uso de flechas para mover) ---
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            posY -= paso;
            break;
        case 'ArrowDown':
            posY += paso;
            break;
        case 'ArrowLeft':
            posX -= paso;
            break;
        case 'ArrowRight':
            posX += paso;
            break;
        default:
            return;
    }
    
    // Modificación de estilos CSS a través del DOM
    cuadrado.style.left = posX + 'px';
    cuadrado.style.top = posY + 'px';
});

// --- Evento de Ratón (Cambio de Color) ---
cuadrado.addEventListener('click', () => {
    // Generar un color aleatorio y asignarlo al estilo del elemento
    const colores = ['#ffe100ff', '#07efebff', '#9b0bb4ff', '#ed06cbff'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    cuadrado.style.backgroundColor = colorAleatorio;
});