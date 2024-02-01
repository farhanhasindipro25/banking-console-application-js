import BankingOperations from "../classes/BankingOperations.mjs";
import * as readline from "readline";

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    userInput.question(question, (answer) => {
      resolve(answer);
    });
  });
}

const worldBank = new BankingOperations();

(async function () {
  while (true) {
    console.log("Welcome to this bank console application");
    console.log("1. Create a new account");
    console.log("2. Display all accounts");
    console.log("3. Update an account");
    console.log("4. Delete an account");
    console.log("5. Deposit an amount");
    console.log("6. Withdraw an amount");
    console.log("7. Search for an account");
    console.log("8. Exit");

    const choice = parseInt(await prompt("Enter your choice:"));

    switch (choice) {
      case 1:
        console.log();
        const name = await prompt("Name of account holder:");
        const accountNumber = await prompt("Enter account number:");
        const accountType = await prompt("Enter account type:");
        const initialDeposit = parseFloat(
          await prompt("Enter initial deposit amount:")
        );
        worldBank.createNewAccount(
          name,
          accountNumber,
          accountType,
          initialDeposit
        );
        break;

      case 2:
        console.log();
        worldBank.displayAllAccounts();
        break;

      case 3:
        console.log();
        const accountNumberToUpdate = await prompt(
          "Enter account number to update:"
        );
        const newName = await prompt("Enter new name:");
        const newType = await prompt("Enter new account type:");
        worldBank.updateAnAccount(accountNumberToUpdate, newName, newType);
        break;

      case 4:
        console.log();
        const accountNumberToDelete = await prompt(
          "Enter account number to delete:"
        );
        worldBank.deleteAnAccount(accountNumberToDelete);
        break;

      case 5:
        console.log();
        const accountNumberToDeposit = await prompt("Enter account number:");
        const depositAmount = parseFloat(
          await prompt("Enter amount you want to deposit:")
        );
        worldBank.depositAmount(depositAmount, accountNumberToDeposit);
        break;

      case 6:
        console.log();
        const accountNumberToWithdraw = await prompt("Enter account number:");
        const withdrawAmount = parseFloat(
          await prompt("Enter amount you want to withdraw:")
        );
        worldBank.withdrawAmount(withdrawAmount, accountNumberToWithdraw);
        break;

      case 7:
        console.log();
        const accountNumberToSearch = await prompt(
          "Enter account number you are looking for:"
        );
        worldBank.searchAnAccount(accountNumberToSearch);
        break;

      case 8:
        console.log();
        console.log("Exiting the application. Thanks for participating!");
        process.exit();

      default:
        console.log();
        console.log("Invalid choice. Please enter a number between 1 and 8.");
    }
  }
})();
