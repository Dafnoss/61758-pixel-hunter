import util from './util';
import {drawBlock} from "./drawBlock";
import gameTwo from './game-2';
import moduleTwoElement from "./rules";
import {getBackToFirstScreen} from "./reset";

const moduleThreeElement = util.getElementFromTemplate(document.querySelector(`#game-1`).innerHTML).cloneNode(true);

const form = moduleThreeElement.querySelector(`.game__content`);

form.addEventListener('change', () => {

    let formData = new FormData(form);

    if (formData.has('question2') && formData.has('question1')) {
        drawBlock(gameTwo);
    }
});

getBackToFirstScreen(moduleThreeElement);

export default moduleThreeElement