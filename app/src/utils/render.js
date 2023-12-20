import { getElement, fetchData, CITIES_LIST, findCities} from "./utils.js"

const cities = await fetchData(CITIES_LIST);
console.log(cities);
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
        <span id='${each.rank}'class='name'>${each.city}, ${each.state}</span>
    </li>
    `
   }).join('');
   
   getElement('.suggestions').innerHTML = getElement('#search').value ? newSuggestion : `<li>Filter for a city</li><li>or a state</li>`;
    
}

export const renderCard = (e) => {
   const city = cities.filter((each) => each.rank === e.target.id);
   console.log(city[0])
   const modalBg = document.createElement('div');
            modalBg.className = 'modal-bg';
            modalBg.style.display = 'flex';
            modalBg.innerHTML =  ` 
        <div class="modal-bg" style="display: flex;">
            <div class="pokemonCard" style="display: block; color: blue; background-color: rgb(240, 248, 255); padding: 1em; margin: 1em; max-width: 50vw; border-radius: 1em;">
                Bulbasaur is a pokemon that can be found in the following version(s) of the Pokemon games:
                <div id="bulbasaurGameInfo" class="gameInfo">
                    <p class="gameText">Red</p>
                        <p class="gameText">Blue</p>
                        <p class="gameText">Yellow</p>
                        <p class="gameText">Gold</p>
                        <p class="gameText">Silver</p>
                        <p class="gameText">Crystal</p>
                        <p class="gameText">Ruby</p>
                        <p class="gameText">Sapphire</p>
                    </div>
                <input type="submit" value="Close" >
                
                <h3>Bulbasaur #0001</h3><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="picture of bulbasaur" style="width: 75%; max-width: 300px;">
                </div>
            </div>`
   getElement('#app').appendChild(modalBg);
  

}


