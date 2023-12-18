export const getElement = (el) => document.querySelector(el);

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const findCities = (toMatch, cities) => {
    return cities.filter((each) => {
        const regex = new RegExp(toMatch, 'gi');
        return each.city.match(regex) || each.state.match(regex);
    });
};

export const inputListeners = (el, func) => {
    getElement(el).addEventListener('change', func);
    getElement(el).addEventListener('keyup', func);
}

export const CITIES_LIST= 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

