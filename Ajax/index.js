const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint).then(response => {
    response.json().then(data => {
        cities.push(...data)
    })
});

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //if the city or state matches the search term

        const regex = new RegExp(wordToMatch, 'gi');

        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
        <span class="name" >${place.city}, ${place.state}</span> <br/>
        <span class="population" > Population: ${place.population}</span>
        
        </li>`
    });
    suggestions.innerHTML = html.join("");
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);