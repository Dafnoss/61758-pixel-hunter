const main = document.querySelector(`.central`);

export const drawBlock = (domNode) => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const node = document.createElement(`div`);
    node.appendChild(domNode);
    main.appendChild(node);
};