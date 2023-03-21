console.log("1");
console.log("2");
getMessage();
setTimeout(() => {
    console.log("3");
}, 0);
Promise.resolve("hey").then(() => console.log("4"));
console.log("5");
function getMessage() {
    console.log("6");
}