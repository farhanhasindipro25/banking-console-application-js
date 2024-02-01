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

    const newAccount = new BankAccount(name, number, type, initialDeposit);
    console.log("Processing your details...");
    console.log("Please Wait...");
    this.accounts.push(newAccount);
    console.log("Your account has been created successfully!");
  }
}
