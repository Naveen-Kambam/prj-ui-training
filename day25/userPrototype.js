function User(name, salary) {
    this.age = 0;
    let base = 100;

    function calculateBonus() {
        return this.salary * base + 10;
    }

    this.name = name;
    this.salary = salary;
    this.getName = function() {
        return this.name;
    }
    this.calculateHike = function() {
        return calculateBonus();
    }

    User.prototype.setAge = function(newAge) {
        this.age = newAge;
    } 

    User.prototype.getAge = function() {
        return this.age;
    } 

    User.prototype.year = 2023;
}

let user1 = new User("naveen", 10000);
user1.setAge(24);
console.log(user1.getAge());
console.log(user1.year);