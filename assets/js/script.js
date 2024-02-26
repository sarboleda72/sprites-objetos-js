const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Carga la imagen del sprite
const spriteImage = new Image();
spriteImage.src = "assets/img/sprites/megaman.png";

// Dimensiones del sprite
const spriteWidth = 200;
const spriteHeight = 200;

// Posición inicial del sprite
let spriteX = 0;
let spriteY = 0;

// Número de fotogramas en la fila
const numFrames = 5;

// Índice del fotograma actual
let currentFrame = 0;

// Contador de fotogramas
let frameCount = 0;

// Velocidad de animación (cuanto mayor sea el número, más lenta será la animación)
const animationSpeed = 5; // Ajusta este valor según la velocidad deseada

// Función para animar el sprite
function animate() {
  // Borrar el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar el fotograma actual del sprite
  ctx.drawImage(
    spriteImage,
    currentFrame * spriteWidth,
    spriteY,
    spriteWidth,
    spriteHeight,
    spriteX,
    0,
    spriteWidth,
    spriteHeight
  );

  // Incrementar el contador de fotogramas
  frameCount++;

  // Si el contador de fotogramas alcanza la velocidad deseada, avanzar al siguiente fotograma
  if (frameCount >= animationSpeed) {
    currentFrame = (currentFrame + 1) % numFrames;
    frameCount = 0; // Reiniciar el contador
  }

  // Solicitar el siguiente ciclo de animación
  requestAnimationFrame(animate);
}

// Iniciar la animación
animate();
