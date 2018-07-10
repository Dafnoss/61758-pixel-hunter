import util from './util';
import {drawBlock} from "./drawBlock";
import stats from './stats';
import moduleFourElement from "./game-2";
import {getBackToFirstScreen} from "./reset";

const moduleFiveElement = util.getElementFromTemplate(document.querySelector(`#game-3`).innerHTML).cloneNode(true);

const variants = moduleFiveElement.querySelectorAll('.game__option');

Array.from(variants).forEach((val) => {
    val.addEventListener('click', () => {
        drawBlock(stats);
    })
});

getBackToFirstScreen(moduleFiveElement);

export default moduleFiveElement