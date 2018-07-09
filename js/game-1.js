import { getElementFromTemplate } from './util';
import {drawBlock} from "./drawBlock";
import gameTwo from './game-2';

const moduleThreeElement = getElementFromTemplate(document.querySelector(`#game-1`).innerHTML).cloneNode(true);

const form = moduleThreeElement.querySelector(`.game__content`);

form.addEventListener('change', () => {

    let formData = new FormData(form);

    if (formData.has('question2') && formData.has('question1')) {
        drawBlock(gameTwo);
    }
});

export default moduleThreeElement