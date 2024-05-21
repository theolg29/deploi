import '../css/styles.scss';
import Space from '../assets/images/space.png';
import { InvaderController } from './InvaderController';

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = Space;

function game() {

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

}

setInterval(game, 60000);