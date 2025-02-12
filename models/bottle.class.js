class Bottle extends MoveableObject {
    collected = false;
    width = 80;
    height = 80;
    isThrown = false;
    IMAGES = [
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES);
        this.x = 400 + Math.random() * 1500;
        this.loadImage(this.IMAGES);
    }
}