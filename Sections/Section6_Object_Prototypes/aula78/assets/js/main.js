// SuperClass
function Account(agency, account, balance){
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function(value){
  if(value > this.balance){
  console.log(`Insufficient balance. Withdraw limit: R$${this.balance}`)
  return;
  }
  this.balance -= value;
  this.viewBalance();
};

Account.prototype.deposit = function(value){
     if(value > 0) {
     this.balance += value;
     this.viewBalance();
     }
};

Account.prototype.viewBalance = function(){
  console.log(
    `Ag/c: ${this.agency}/${this.account} | ` +
    `Balance: R$${this.balance.toFixed(2)}`
  );
};

function Cc(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}

Cc.prototype = Object.create(Account.prototype);
Cc.prototype.constructor = Cc;

Cc.prototype.withdraw = function(value){
  if(value > this.balance + this.limit){
  console.log(`Insufficient balance. Available for withdrawal: R$${this.balance + this.limit}`)
  return;
  }
  this.balance -= value;
  this.viewBalance();
};

function Cp(agency, account, balance) {
  Account.call(this, agency, account, balance);
}

Cp.prototype = Object.create(Account.prototype);
Cp.prototype.constructor = Cp;


const cc = new Cc(11, 22, 0, 100);
cc.deposit(10);
cc.withdraw(110);
cc.withdraw(1);

const cp = new Cp(12, 33, 0);
cp.deposit(10);
cp.withdraw(10);
cp.withdraw(1);