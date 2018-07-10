import util from './util';
import {drawBlock} from "./drawBlock";
import gameThree from './game-3';
import moduleThreeElement from "./game-1";
import {getBackToFirstScreen} from "./reset";

const moduleFourElement = util.getElementFromTemplate(document.querySelector(`#game-2`).innerHTML);

const form = moduleFourElement.querySelector(`.game__content`);

form.addEventListener('change', () => {

    let formData = new FormData(form);

    if (formData.has('question1')) {
        drawBlock(gameThree);
    }
});

getBackToFirstScreen(moduleFourElement);

export default moduleFourElement