const MOVIES = [
    {
        category: "Storage",
        name: 'Touchwood Chair',
        image: '../images/furniture/storage/2_5b62dbb79e795.jpg',
        discounts: "-60%",
        rating: 4.5,
        price: "$59.00",
        oldPrice: "$79.00"
    },{
        category: "Storage",
        name: 'Living Room Furniture',
        image: '../images/furniture/storage/Best-Ikea-Living-Room-Furniture-Storage.webp',
        discounts: "-60%",
        rating: 4.0,
        price: "$49.00",
        oldPrice: "$79.00"
    },{
        category: "Storage",
        name: 'Cabinet Side Boards',
        image: '../images/furniture/storage/data_cabinet-sideboards_boho-sideboard-with-three-drawers_revised_honey_updated_1-750x650.webp',
        discounts: "-60%",
        rating: 4.5,
        price: "$79.00",
        oldPrice: "$99.00"
    }
]

const $ = document;

let container = $.getElementById('container');
let card = "";

MOVIES.forEach((movie) => {
    card += `<div class="card">
    <div class=card-details>
        <div>
            <h3 class="movie-category">${movie.heading}</h3>
            <p class="movie-subCategory text-grey">${movie.subHeading}</p>
            <p class="mg10 text-grey">${movie.noOFTickets}</p>
        </div>
        <div>
            <div class="cards-icons">
                <img src="../images/9022750_plus_circle_duotone_icon.svg" width="40px" height="40px">
                <p class="movie-tickets">0</p>
                <img src="../images/9022645_minus_circle_duotone_icon.svg" width="40px" height="40px">
            </div>
            <p class="movie-price">${movie.price}</p>
        </div>
    </div>
    <div>
        <h4 class="mg10">${movie.description}</h4>
        <p class="text-grey">${movie.subDescription}</p>
    </div>
</div>`;
})
container.innerHTML = card;