import './style.css';
import { getElement, inputListeners, fetchData, CITIES_LIST} from './utils/utils.js';
import { LOAD_MAIN, render, renderCard } from './utils/render.js';

const cancelSubmit = (e) => {
    e.preventDefault();
}

const main = async () => {
    // Fetch cities data
    const cities = await fetchData(CITIES_LIST);

    LOAD_MAIN();
    inputListeners('#search', (e) => render(e, cities));
    getElement('.search-form').addEventListener('submit', cancelSubmit);
    getElement('ul').addEventListener('click', (e) => renderCard(e, cities));
};

main();
