class Cloud extends MovableObject {

    y = 10;
    width = 450;
    height = 470;

    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 720;
        this.animate();
        this.updateClouds();
    }

    animate() {
        this.moveLeft()
    }

    


}

