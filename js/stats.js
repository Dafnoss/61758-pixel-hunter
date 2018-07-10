import util from './util';
import moduleFourElement from "./game-2";
import {getBackToFirstScreen} from "./reset";

const moduleSixElement = util.getElementFromTemplate(document.querySelector(`#stats`).innerHTML);

getBackToFirstScreen(moduleSixElement);

export default moduleSixElement