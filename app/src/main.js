import './style.css'
import { getElement, inputListeners} from './utils/utils.js';
import { LOAD_MAIN, render, renderCard} from './utils/render.js';

const cancelSubmit = (e) => {
    e.preventDefault();
}

const main = ( ) => {
    
    LOAD_MAIN();
    inputListeners('#search', render);
    getElement('.search-form').addEventListener('submit', cancelSubmit)
    getElement('ul').addEventListener('click', renderCard);
};

main();