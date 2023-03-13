const MOVIES = [
    {
        name: 'Vanilla Sky',
        price: 200,
        director: 'Will',
        imdb: 3.4
    },
    {
        name: 'Top Gun',
        price: 150,
        director: 'Will',
        imdb: 3.4
    }
]

const $ = document;

let container = $.getElementById('container');
let card = "";

MOVIES.forEach((movie) => {
    console.log("hello");
    card += `<div>
    <h3>${movie.name}</h3>
    <p>${movie.price}</p>
    <p>${movie.director}</p>
    <p>IMDB Rating: ${movie.imdb}
    </div>`;
})
container.innerHTML = card;