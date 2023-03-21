fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((json) => createUI(json))
.catch((error) => console.log(error)); 

function createUI(users) { 
    users.forEach((element) => { 
        `<div>${element.name}</div><div>${element.id}</div>` 
    }); 
}