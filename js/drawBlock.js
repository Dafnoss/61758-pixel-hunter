const main = document.querySelector(`.central`);

export const drawBlock = (domNode) => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    main.appendChild(domNode);
};