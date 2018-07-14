import util from '../utils/util';
import {drawBlock} from "../utils/makeBlock";
import moduleFive from '../templates/game-2';
import screenSix from './screenSix';
import {gameOnHeader} from "../templates/header";

const moduleFourElement = drawBlock(moduleFive, true);

const form = moduleFourElement.querySelector(`.game__content`);

form.addEventListener('change', () => {

    let formData = new FormData(form);

    if (formData.has('question1')) {
        util.drawNode(screenSix);
        util.gameStart(gameOnHeader());
    }
});

export default moduleFourElement