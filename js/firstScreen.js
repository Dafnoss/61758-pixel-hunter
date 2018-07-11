import util from './util';
import footer from './footer';
import data from './data';

const moduleOneElementHtmlContent =
    `<div id="main" class="central__content">
        <div id="intro" class="intro">
            <h1 class="intro__asterisk">*</h1>
            <p class="intro__motto"><sup>*</sup>${data.intro.photoDescription}</p>
        </div>
    </div>`;


const moduleOneElementHtml = moduleOneElementHtmlContent + footer(data);

const moduleOneElement = util.getElementFromTemplate(moduleOneElementHtml);

export default moduleOneElement