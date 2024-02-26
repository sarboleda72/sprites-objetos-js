class SpriteAnimator {
    constructor(canvasId, spriteSrc, spriteWidth, spriteHeight, numFrames, animationSpeed) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.spriteImage = new Image();
        this.spriteImage.src = spriteSrc;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.numFrames = numFrames;
        this.currentFrame = 1;
        this.frameCount = 0;
        this.animationSpeed = animationSpeed;
        this.spriteX = 0;
        this.spriteY = 0; 
    }

    startAnimation() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(
            this.spriteImage,
            this.currentFrame * this.spriteWidth,
            this.spriteY,
            this.spriteWidth,
            this.spriteHeight,
            this.spriteX,
            0,
            this.spriteWidth,
            this.spriteHeight
        );

        this.frameCount++;

        if (this.frameCount >= this.animationSpeed) {
            this.currentFrame = (this.currentFrame + 1) % this.numFrames;
            this.frameCount = 0;
        }

        requestAnimationFrame(this.animate);
    }

    moveFloor() {
        const piso = document.getElementById('piso');
        let position = 0;
        function frame() {
            if (stopAnimation) return;
            position--;
            piso.style.left = position + 'px';

            if (position <= -(piso.width - 600)) {
                position = 0;
            }

            requestAnimationFrame(frame);
        }

        frame();
    }
}

const correrPersonaje = document.getElementById('correr');
const saltarPersonaje = document.getElementById("saltar");
const pararPersonaje = document.getElementById("parar");

let stopAnimation = false;
document.addEventListener('DOMContentLoaded', function () {
    const spriteAnimator = new SpriteAnimator("personaje", "assets/img/sprites/megaman-parado.png", 140, 160, 3, 10);
    spriteAnimator.startAnimation();
});
correrPersonaje.addEventListener('click', function () {
    const spriteAnimator = new SpriteAnimator("personaje", "assets/img/sprites/megaman-correr.png", 140, 160, 7, 10);
    spriteAnimator.startAnimation();
    stopAnimation = false;
    spriteAnimator.moveFloor();

});

pararPersonaje.addEventListener('click', function () {
    const spriteAnimator = new SpriteAnimator("personaje", "assets/img/sprites/megaman-parado.png", 140, 160, 3, 10, true);
    spriteAnimator.startAnimation();
    stopAnimation = true;
});

saltarPersonaje.addEventListener('click', function () {
    const spriteAnimator = new SpriteAnimator("personaje", "assets/img/sprites/megaman-saltar.png", 140, 205, 3, 10);
    spriteAnimator.startAnimation();
});
