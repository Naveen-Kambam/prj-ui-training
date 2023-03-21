function BankAccount(user, balance) {
    this.balance = balance;
    this.user = user;
    this.getBalance = function() {
        return this.balance;
    }

    this.withDraw = function(amount) {
        this.balance -= amount;
    }

    this.deposit = function(amount){
        this.balance += amount;
    }
}

let user1 = new BankAccount('priya',150000);
user1.deposit(10000);
console.log(user1.user + ":" + user1.getBalance());
user1.withDraw(5000);
console.log(user1.user + ":" + user1.getBalance());

let user2 = new BankAccount('Pavan',500000);
user2.deposit(100000);
console.log(user2.user + ":" +  user2.getBalance());
user2.withDraw(50000);
console.log( user2.user + ":" + user2.getBalance());
