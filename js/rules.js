import { getElementFromTemplate } from './util';
import {drawBlock} from "./drawBlock";
import gameOne from './game-1'

const moduleTwoElementHtml = document.querySelector(`#rules`).innerHTML;

const moduleTwoElement = getElementFromTemplate(moduleTwoElementHtml).cloneNode(true);

moduleTwoElement.querySelector(`.rules__button`).addEventListener(`click`, () => {
    drawBlock(gameOne);
});

export default moduleTwoElement