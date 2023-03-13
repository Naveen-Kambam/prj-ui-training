const URL="https://www.google.com?id=abc";

let queryIndex = URL.indexOf("?");

let queryParam = URL.slice(queryIndex);
let queryParam2 = URL.substring(queryIndex);
let queryParam3 = URL.substr(queryIndex);


console.log(queryParam);
console.log(queryParam2);
console.log(queryParam3);