const userIds=[1,2,3,4,5,6];
const updatedUserIds = userIds.map((num) => num + 10);
console.log(updatedUserIds);

const filteredUserIds = userIds.filter((num) => num % 2 === 0);
console.log(filteredUserIds);

const isEven = (num) => num % 2 === 0;
console.log(userIds.every(isEven));

console.log(userIds.some(isEven));

console.log(userIds.find(isEven));