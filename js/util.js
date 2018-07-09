export const getElementFromTemplate = (html) => {
    const t = document.createElement(`template`);
    t.innerHTML = html;
    return t.content.cloneNode(true);
};

