const $ = document;
//API request
const moviesList=[
"vanilla sky",
"Mission Impossible",
"Top gun",
"The Mummy"
];
//display movie name in H2 tag
//an array of price of tickets->you need to display in a span tag 
//add button with - book now
const CONTAINER=$.getElementById('container');
let tempHTML="";
for(let i=0; i<moviesList.length; i++){
tempHTML+=`<div class="item">${moviesList[i]}</div>`
}
CONTAINER.innerHTML=tempHTML;