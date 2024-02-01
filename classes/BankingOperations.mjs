import BankAccount from "./BankAccount.mjs";

class BankingOperations {
  constructor() {
    this.accounts = [];
  }

  findAnAccount(accountNumber) {
    const doesAccountAlreadyExist = this.accounts.find(
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
    console.log();
    console.log("Processing your details...");
    console.log("...");
    console.log("...");
    console.log("...");
    console.log("Please Wait...");
    console.log("...");
    console.log("...");
    console.log("...");
    this.accounts.push(newAccount);
    console.log();
    console.log("Your account has been created successfully!");
    console.log("...");
    console.log("Review your account details:");
    console.log("...");
    console.log(`
        Account Holder: ${newAccount.accountHolderName}
        Account Number: ${newAccount.accountNumber}
        Account Type: ${newAccount.accountType}
        Date of Creation: ${newAccount.creationDate.toDateString()}
        Account Balance: ${newAccount.accountBalance} BDT
      `);
  }

  displayAllAccounts() {
    if (this.accounts.length > 0) {
      console.log();
      console.log(
        `Showing ${this.accounts.length} ${
          this.accounts.length > 1 ? "accounts" : "account"
        }`
      );
      console.log();
      this.accounts.forEach((account) => {
        console.log(`
          Account Holder: ${account.accountHolderName}
          Account Number: ${account.accountNumber}
          Account Type: ${account.accountType}
          Date of Creation: ${account.creationDate.toDateString()}
          Account Balance: ${account.accountBalance} BDT
        `);
      });
    } else {
      console.log("No accounts to show!");
      console.log();
    }
  }

  updateAnAccount(accountNumber, newAccountHolderName, newAccountType) {
    const selectedAccount = this.findAnAccount(accountNumber);
    if (selectedAccount) {
      selectedAccount.accountHolderName = newAccountHolderName;
      selectedAccount.accountType = newAccountType;
      console.log();
      console.log("Processing your information...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log("Please wait...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log("Your account information has been updated succesfully!");
      console.log("...");
      console.log("Review your account details:");
      console.log("...");
      console.log(`
        Account Holder: ${selectedAccount.accountHolderName}
        Account Number: ${selectedAccount.accountNumber}
        Account Type: ${selectedAccount.accountType}
        Date of Creation: ${selectedAccount.creationDate.toDateString()}
        Account Balance: ${selectedAccount.accountBalance} BDT
      `);
    } else {
      console.log();
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
      console.log();
      console.log("Processing, please wait...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log("Your account has been deleted successfully.");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log(
        `${this.accounts.length} ${
          this.accounts.length > 1 ? "accounts" : "account"
        } left`
      );

      console.log();
    } else {
      console.log(
        `An account of id ${accountNumber} does not exist! Please carefully input the account number.`
      );
    }
  }

  depositAmount(amount, accountNumber) {
    const selectedAccount = this.findAnAccount(accountNumber);
    if (selectedAccount) {
      selectedAccount.accountBalance += amount;
      console.log();
      console.log("Processing, please wait...");
      console.log("...");
      console.log("...");
      console.log("...");
      console.log(
        `${amount} BDT was deposited to your account. Your New Balance: ${selectedAccount.accountBalance} BDT`
      );
      console.log();
    } else {
      console.log(
        `An account of id ${accountNumber} does not exist! Please carefully input the account number.`
      );
      console.log();
    }
  }

  withdrawAmount(amount, accountNumber) {
    const selectedAccount = this.findAnAccount(accountNumber);
    if (selectedAccount) {
      if (
        selectedAccount.accountBalance > amount &&
        selectedAccount.accountBalance > 100
      ) {
        selectedAccount.accountBalance -= amount;
        console.log();
        console.log("Processing, please wait...");
        console.log("...");
        console.log("...");
        console.log("...");
        console.log(
          `${amount} BDT has been withdrawn successfully. Your New Balance: ${selectedAccount.accountBalance} BDT`
        );
        console.log();
      } else {
        console.log();
        console.log("Processing, please wait...");
        console.log("...");
        console.log("...");
        console.log("...");
        console.log("Withdraw failed. You have insufficient funds.");
      }
    } else {
      console.log(
        `An account of id ${accountNumber} does not exist! Please carefully input the account number.`
      );
      console.log();
    }
  }

  searchAnAccount(accountNumber) {
    const selectedAccount = this.findAnAccount(accountNumber);
    if (selectedAccount) {
      console.log();
      console.log("Showing search results");
      console.log();
      console.log(`
        Account Holder: ${selectedAccount.accountHolderName}
        Account Number: ${selectedAccount.accountNumber}
        Account Type: ${selectedAccount.accountType}
        Date of Creation: ${selectedAccount.creationDate.toDateString()}
        Account Balance: ${selectedAccount.accountBalance}
      `);
    } else {
      console.log(
        `An account of id ${accountNumber} does not exist! Please carefully input the account number.`
      );
    }
  }
}

export default BankingOperations;
