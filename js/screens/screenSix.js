import util from '../utils/util';
import {drawBlock} from "../utils/makeBlock";
import TemplateSix from '../templates/game-3';
import screenSeven from './screenSeven';

const screenSix = drawBlock(TemplateSix, true);

const variants = screenSix.querySelectorAll('.game__option');

Array.from(variants).forEach((val) => {
    val.addEventListener('click', () => {
        util.drawNode(screenSeven);
    })
});

export default screenSix;