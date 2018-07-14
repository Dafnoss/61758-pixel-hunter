
const moduleTwoElement = (data) => {
    const moduleTwo =
        `<div class="greeting central--blur">
        <div class="greeting__logo"><img src="${data.greeting.logo}" width="201" height="89" alt="Pixel Hunter"></div>
        <h1 class="greeting__asterisk">*</h1>
        <div class="greeting__challenge">
            <h3>${data.greeting.title}</h3>
            <p>${data.greeting.text}</p>
        </div>
        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span>
        </div>
    </div>`;
    return moduleTwo;
};

export default moduleTwoElement;