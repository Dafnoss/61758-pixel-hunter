import { getElementFromTemplate } from './util';
import {drawBlock} from "./drawBlock";
import rules from './rules';

const moduleTwoElement = getElementFromTemplate(document.querySelector(`#greeting`).innerHTML).cloneNode(true);

moduleTwoElement.querySelector(`.greeting__continue`).addEventListener(`click`, () => {
    drawBlock(rules);
});

export default moduleTwoElement