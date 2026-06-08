class MovableObject {
    x = 20;
    y = 285;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveLeft() {
        setInterval(() => {
            this.x = this.x - this.speed;
        }, 1000 / 60);
    }

    moveRight() {

    }

    updateClouds() {
        if (this.x < -450) {
            this.x = 680;
        }
    };

    updateEnemies() {
        if (this.x < -90) {
            this.x = 710;
        }
    }
}