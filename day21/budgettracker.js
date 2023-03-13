const $ = document;
let button = $.getElementById('submit');

function displayBalance() {

let income = $.getElementById('income');
let expenses = $.getElementById('expenses');
let balanceElement = $.getElementById('balance');

let balance = income.value - expenses.value;
balanceElement.value = balance;
}

button.addEventListener("click", function(event){
    event.preventDefault()
    displayBalance();
} )