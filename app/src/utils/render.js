import { getElement, fetchData, CITIES_LIST, findCities} from "./utils.js"

const cities = await fetchData(CITIES_LIST);

export const LOAD_MAIN = () => {
    getElement('#app').innerHTML = `
    <form class="search-form">
        <input id='search' type="text" class="search" placeholder="City or State">
        <ul class="suggestions">
            <li>Filter for a city</li>
            <li>or a state</li>
        </ul>
    </form>
 `
};

export const render = (e) => {
    e.preventDefault();
   const newSuggestion = findCities(e.target.value, cities).map((each) => {
    return`
    <li>
        <span class='name'>${each.city}, ${each.state}</span>
    </li>
    `
   }).join('');
   getElement('.suggestions').innerHTML = newSuggestion;
    
}