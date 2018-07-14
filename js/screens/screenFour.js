import util from '../utils/util';
import {drawBlock} from "../utils/makeBlock";
import moduleFour from '../templates/game-1';
import screenFive from "./screenFive";
import {gameOnHeader} from "../templates/header";


const moduleFourElement = drawBlock(moduleFour, true);

const form = moduleFourElement.querySelector(`.game__content`);

form.addEventListener('change', () => {

    let formData = new FormData(form);

    if (formData.has('question2') && formData.has('question1')) {
        util.drawNode(screenFive);
        util.gameStart(gameOnHeader());
    }
});

export default moduleFourElement;