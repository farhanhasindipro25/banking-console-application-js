import BankAccount from "./bankAccount";

class BankingOperations {
  constructor() {
    this.accounts = [];
  }

  findAnAccount(accountNumber) {
    doesAccountAlreadyExist = this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
    return doesAccountAlreadyExist;
  }

  createNewAccount(
    accountHolderName,
    accountNumber,
    accountType,
    initialDeposit
  ) {
    if (this.findAnAccount()) {
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
    console.log("...");
    console.log("...");
    console.log("...");
    console.log("Please Wait...");
    console.log("...");
    console.log("...");
    console.log("...");
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

  updateAnAccount(accountNumber, newAccountHolderName, newAccountType) {
    const selectedAccount = this.findAnAccount(accountNumber);
    if (selectedAccount) {
      selectedAccount.accountHolderName = newAccountHolderName;
      selectedAccount.accountType = newAccountType;
      console.log("Processing your information...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log("Please wait...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log("Your account information has been updated succesfully!");
    } else {
      console.log("Processing your information...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log(
        `An account of id ${accountNumber} does not exist! Please carefully input the account number.`
      );
    }
  }

  deleteAnAccount(accountNumber) {
    const index = this.accounts.findIndex(
      (account) => account.accountNumber === accountNumber
    );
    if (index !== -1) {
      this.accounts.splice(index, 1);
      console.log("Processing, please wait...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log("Your account has been deleted successfully.");
    } else {
      console.log(
        `An account of id ${accountNumber} does not exist! Please carefully input the account number.`
      );
    }
  }
}

export default BankingOperations;
