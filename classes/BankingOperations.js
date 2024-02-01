import BankAccount from "./bankAccount";

class BankingOperations {
  constructor() {
    this.accounts = [];
  }

  createNewAccount(
    accountHolderName,
    accountNumber,
    accountType,
    initialDeposit
  ) {
    const doesAccountAlreadyExist = this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
    if (doesAccountAlreadyExist) {
      console.log(`Account Number ${accountNumber} already exists!`);
      return;
    }

    const newAccount = new BankAccount(
      accountHolderName,
      accountNumber,
      accountType,
      initialDeposit
    );
    console.log("Processing your details...");
    console.log("Please Wait...");
    this.accounts.push(newAccount);
    console.log("Your account has been created successfully!");
  }

  displayAllAccounts() {
    this.accounts.forEach((account) => {
      console.log(`
        Account Holder: ${account.accountHolderName}
        Account Number: ${account.accountNumber}
        Account Type: ${account.accountType}
        Date of Creation: ${account.creationDate.toDateString()}
        Account Balance: ${account.accountBalance}
      `);
    });
  }
}

export default BankingOperations;
