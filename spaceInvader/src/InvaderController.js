import Invader1 from '../assets/images/invader1.png';
import Invader2 from '../assets/images/invader2.png';
import Invader3 from '../assets/images/invader3.png';


export class Invader {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 32;

        this.image = new Image();
        this.image.src = getImage(imageNumber);
    }

    getImage(imageNumber) {
        switch (imageNumber) {
            case 1:
                return Invader1;
            case 2:
                return Invader2;
            case 3:
                return Invader3;
            default:
                return Invader1;
        }
    }

    draw(ctx) {
        ctx.drawImage(Invader1, Invader2, Invader3);
    }
}


export class InvaderController {

    invaderMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ]

    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(ctx) {

    }

}

invaderRows = [];

createInvaders() {
    this.invadersMap.forEach((row, rowIndex) => {
        this.invaderRows[rowIndex] = [];
        row.forEach((invaderNumber, invaderIndex) => {
            if (invaderNumber > 0) {
                this.invaderRows[rowIndex].push(
                    new Invader(invaderIndex * 50, rowIndex * 35, invaderNumber)
                );
            }
        });
    });
}
