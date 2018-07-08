const main = document.querySelector(`.central`);
const ALT = 18;
const LEFTARROW = 37;
const RIGHTARROW = 39;

const screens = [
    document.querySelector(`.central`).cloneNode(true),
    document.querySelector(`#greeting`).content,
    document.querySelector(`#rules`).content,
    document.querySelector(`#game-1`).content,
    document.querySelector(`#game-2`).content,
    document.querySelector(`#game-3`).content,
    document.querySelector(`#stats`).content
];

let number = 0;

const changeScreen = (number) => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    main.appendChild(screens[number].cloneNode(true))
};

window.addEventListener((`keydown`), (e) => {
   if (e.altKey && (e.keyCode === RIGHTARROW || e.keyCode === LEFTARROW)) {
       switch (e.keyCode) {
           case RIGHTARROW: if(number < screens.length - 1) {changeScreen(++number)};
           break;
           case LEFTARROW: if(number > 0) {changeScreen(--number)};
           break;
       }
   }
});

