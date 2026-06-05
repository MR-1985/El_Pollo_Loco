class Chicken extends MovableObject {
    height = 80;
    width = 90;
    y = 350;
    tempo = 0.3

    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 300 + Math.random() * 500;
    }

    moveLeft() {

    }

    updateEnemies() {
        this.x = this.x - this.tempo;

        if (this.x < -90) {
            this.x = 710;
        }
    }
};