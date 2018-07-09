import {getElementFromTemplate} from './util';
import {drawBlock} from "./drawBlock";
import greeting from './greeting';

const moduleOneElementHtml = document.querySelector(`.central`).innerHTML;

const moduleOneElement = getElementFromTemplate(moduleOneElementHtml).cloneNode(true);
moduleOneElement.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    drawBlock(greeting);
});

export default moduleOneElement;