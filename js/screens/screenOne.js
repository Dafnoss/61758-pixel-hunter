import moduleOneElement from '../templates/intro'
import {drawBlock} from '../utils/makeBlock';
import screenTwo from "./screenTwo";
import util from '../utils/util';


const firstScreen = drawBlock(moduleOneElement);

firstScreen.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    util.drawNode(screenTwo);
});

export default firstScreen;