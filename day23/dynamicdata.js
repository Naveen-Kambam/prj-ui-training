const MOVIES = [
    {
        heading: 'Platinum',
        subHeading: "Standing",
        noOFTickets: '1 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        heading: 'Gold',
        subHeading: "Sitting",
        noOFTickets: '2 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        heading: 'Platinum',
        subHeading: "Standing",
        noOFTickets: '1 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        heading: 'Silver',
        subHeading: "Sitting",
        noOFTickets: '2 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        heading: 'Platinum',
        subHeading: "Standing",
        noOFTickets: '1 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        heading: 'Gold',
        subHeading: "Sitting",
        noOFTickets: '2 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        heading: 'Platinum',
        subHeading: "Standing",
        noOFTickets: '1 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        heading: 'Silver',
        subHeading: "Sitting",
        noOFTickets: '2 Ticket for 1 Person',
        price: 20000,
        description: "Please refer Venue Plan",
        subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
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