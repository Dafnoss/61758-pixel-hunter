
const moduleOneElement = (data) => {
    const moduleOne =
    `<div id="main" class="central__content">
        <div id="intro" class="intro">
            <h1 class="intro__asterisk">*</h1>
            <p class="intro__motto"><sup>*</sup>${data.intro.photoDescription}</p>
        </div>
    </div>`;
    return moduleOne;
};

export default moduleOneElement;





