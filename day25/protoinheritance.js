let User = {
    name : 'Tom',
    set firstName(value){
        this.name = value;
    },
    get firstName(){
        console.log(`${this.name}`)
    }
}

let Emp = {
    dept : "hr",
    __proto__ : User
}

console.log(Emp.dept);
console.log(Emp.name);
Emp.firstName = "Mary";
Emp.firstName;