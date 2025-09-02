let currenttime = new Date();
console.log(currenttime);

let local = currenttime.toString();
console.log(local);

let hours = currenttime.getHours();
console.log(hours);

let minutes = currenttime.getMinutes();
console.log(minutes);

let day = currenttime.getDay();
console.log(day);

class Exam {
    constructor(personname) {
        this.personname = personname;
        console.log(personname);
    }
}

let result = new Exam("Akshaya");

class Bank {
    constructor(initialamount = 0) {
        this._balance = initialamount;
        console.log(this._balance);
    }

    set balance(amountdeposit) {
        if (amountdeposit > 0) {
            this._balance += amountdeposit;
            console.log(this._balance);
        }
    }

    get balance() {
        return this._balance;
    }
}

let add = new Bank(777);
add.balance = 300;
console.log(add.balance);

class Addition{
    static Math(a,b){
        return a+b;
    }
}
console.log(Addition.Math(7,3));

// import & export modules define
//export allows you to make variable,function
