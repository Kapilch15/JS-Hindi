function BankAccount (customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

//making a Object
// const rakeshAccount = new  BankAccount("Rakesh Kumar", 1000);
// rakeshAccount.balance = 4000;
// rakeshAccount.deposit(500);
// rakeshAccount.withdraw(100);

// const johnAccount = new BankAccount("John abhrahim");
//  johnAccount.deposit(500);

// const ankitAccount = new BankAccount("Ankit Chaudhary", 12000);

// console.log(rakeshAccount.customerName);
// console.log(johnAccount, rakeshAccount);


// console.log(typeof rakeshAccount);
