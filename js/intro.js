
import {drawBlock} from "./drawBlock";
import greeting from './greeting';

import firstScreen from "./firstScreen";

const moduleOneElement = firstScreen;

moduleOneElement.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    drawBlock(greeting);
});

export default moduleOneElement;
