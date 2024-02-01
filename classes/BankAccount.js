class BankAccount {
  constructor(name, number, type, balance) {
    this.name = name;
    this.number = number;
    this.type = type;
    this.balance = balance;
    this.creationDate = new Date();
  }
}

export default BankAccount;
