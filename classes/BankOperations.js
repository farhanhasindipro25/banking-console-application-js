import BankAccount from "./bankAccount";

class BankOperations {
  constructor() {
    this.accounts = [];
  }

  createAccount(name, number, type, initialDeposit) {
    const doesAccountAlreadyExist = this.accounts.find(
      (account) => account.number === number
    );
    if (doesAccountAlreadyExist) {
      console.log(`Account Number ${number} already exists!`);
      return;
    }
  }
}
