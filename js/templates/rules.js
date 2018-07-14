
const moduleThree =  (data) => {
    const rules =
    `<div class="rules">
        <h1 class="rules__title">${data.rules.title}</h1>
        <p class="rules__description">${data.rules.description}
        </p>
        <form class="rules__form">
            <input class="rules__input" type="text" placeholder="${data.rules.placeholder}">
            <button class="rules__button  continue" type="submit">${data.rules.buttonText}</button>
        </form>
    </div>`;

    return rules
};

export default moduleThree