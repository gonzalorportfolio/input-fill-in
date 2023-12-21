// render.js
import { getElement, fetchData, CITIES_LIST, findCities, loadCities} from "./utils.js";

export const LOAD_MAIN = () => {

  getElement('#app').innerHTML = `
    <form class="search-form">
        <input id='search' type="text" class="search" placeholder="City or State">
        <ul class="suggestions">
            <li>Filter for a city</li>
            <li>or a state</li>
        </ul>
    </form>
 `;
};

export const render = (e, cities) => {
  e.preventDefault();
  const newSuggestion = findCities(e.target.value, cities).map((each) => {
    return`
      <li>
          <span id='${each.rank}' class='name'>${each.city}, ${each.state}</span>
      </li>
    `;
  }).join('');
  getElement('.suggestions').innerHTML = getElement('#search').value ? newSuggestion : `<li>Filter for a city</li><li>or a state</li>`;
};

export const renderCard = (e, cities) => {
  const city = cities.filter((each) => each.rank === e.target.id);
  const modalBg = document.createElement('div');
  modalBg.className = 'modal-bg';
  modalBg.style.display = 'flex';
  modalBg.innerHTML =  ` 
    <div class="cityCard" style="display: block; color: blue; background-color: rgb(240, 248, 255); padding: 1em; margin: 1em; max-width: 50vw; border-radius: 1em;">
      ${city[0].city} is a city that can be found in the state of ${city[0].state}:
      <div id="${city[0].city}" class="gameInfo">
        <p class="cityText">Ranked:# ${city[0].rank}</p>
        <p class="cityText">Growth: ${city[0].growth_from_2000_to_2013} </p>
        <p class="cityText">Population ${city[0].population}</p>
      </div>
      <input class='close' type="submit" value="Close" >
      <h3>${city[0].city}, ${city[0].state}</h3>
    </div>`;
  getElement('#app').appendChild(modalBg);
  getElement('.close').addEventListener('click', (e) => modalBg.parentNode.removeChild(modalBg));
};
