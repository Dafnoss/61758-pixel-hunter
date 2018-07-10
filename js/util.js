export default {
    getElementFromTemplate:(html) => {
        const t = document.createElement(`div`);
        t.innerHTML = html;
        return t
    },
}

