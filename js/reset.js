import {moduleOneElement} from "./intro";
import {drawBlock} from "./drawBlock";

export const getBackToFirstScreen = (object) => {
    object.querySelector(`.header__back`).addEventListener(`click`,() => {
        drawBlock(moduleOneElement);
    })
};