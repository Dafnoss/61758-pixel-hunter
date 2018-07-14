import {drawBlock} from '../utils/makeBlock';
import moduleTwoElement from "../templates/greeting";
import util from '../utils/util';
import screenThree from './screenThree';

const screenTwo = drawBlock(moduleTwoElement);

screenTwo.querySelector(`.greeting__continue`).addEventListener(`click`, () => {
    util.drawNode(screenThree);
});

export default screenTwo;
