class Cloud extends MovableObject {

    y = 10;
    width = 450;
    height = 470;
    tempo = 0.5

    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 720;
    }

    updateClouds() {
        this.x = this.x - this.tempo;

        if (this.x < -450) {
            this.x = 680;
        }
    };

}
