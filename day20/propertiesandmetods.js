let message = "hello world"
let url = "https://www.google.com?id=abc"

console.log(message.length)

console.log(message.at(2))
console.log(message.at(-2))

console.log(url.indexOf('?'))
console.log(url.lastIndexOf('c'))
console.log(url.includes('c'))

console.log(url.startsWith('https'))
console.log(url.endsWith('.com'))

console.log(url.slice(url.indexOf('?')))
console.log(url.substring(url.indexOf('?')))
console.log(url.substr(url.indexOf('?'), -1))

for(let i in message) {
  console.log(message[i]);
}



