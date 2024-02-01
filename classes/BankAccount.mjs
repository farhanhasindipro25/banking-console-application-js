class BankAccount {
  constructor(accountHolderName, accountNumber, accountType, accountBalance) {
    this.accountHolderName = accountHolderName;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.accountBalance = accountBalance || 0;
    this.creationDate = new Date();
  }
}

export default BankAccount;
