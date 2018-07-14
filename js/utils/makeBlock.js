import allFooter from "../templates/footer";
import util from "./util";
import data from "../data/data";
import {header} from '../templates/header';
import firstScreen from "../screens/screenOne";

export const drawBlock = (domHtml, isHeader) => {

    const footer = util.getElementFromTemplate(allFooter(data));
    const content = util.getElementFromTemplate(domHtml(data));

    let domNode = document.createElement('div');

    domNode.appendChild(content);
    domNode.appendChild(footer);

    const options = domNode.querySelectorAll(`.game__option`);

    if (options) {
        const optionsArr = Array.from(options);

        optionsArr.forEach((value) => {
            //value.style.maxHeight = value.style.height;
            console.dir(value.style);
            const sda = Array.from(value.querySelectorAll(`img`));
            sda.forEach((val) => {

                val.setAttribute(`style`, 'object-fit: cover');

            })
        })
    }

   if(isHeader) {
       const head = util.getElementFromTemplate(header());

       head.querySelector(`.header__back`).addEventListener(`click`, () => {
           util.drawNode(firstScreen);
       });

       domNode.insertAdjacentElement('afterbegin', head);
    }

    return domNode
};