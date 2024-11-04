let enteredPIN = '';
const correctPIN = '1234'; // Example correct PIN
let balance = 1000; // Example balance
let cardInserted = false; // Track if the card is inserted

function insertCard() {
    cardInserted = true; // Set cardInserted to true
    updateScreen("Card inserted. Please enter your PIN.");
}

function inputNumber(num) {
    if (!cardInserted) {
        updateScreen("Please insert your card first.");
        return;
    }
    enteredPIN += num;
    updateScreen(`Entered: ${enteredPIN}`);
}

function clearInput() {
    enteredPIN = '';
    updateScreen("Input cleared. Please enter your PIN.");
}

function submitInput() {
    if (!cardInserted) {
        updateScreen("Please insert your card first.");
        return;
    }
    if (enteredPIN === '') {
        updateScreen("Please enter your PIN.");
        return;
    }

    if (enteredPIN === correctPIN) {
        updateScreen("PIN Correct! Choose an option below.");
        clearInput(); // Clear input after successful PIN entry
    } else {
        updateScreen("Incorrect PIN. Try again.");
        clearInput();
    }
}

function withdrawCash() {
    if (!cardInserted) {
        updateScreen("Please insert your card first.");
        return;
    }
    const amount = prompt("Enter amount to withdraw (max $1000):");
    if (amount && !isNaN(amount)) {
        if (amount <= balance) {
            balance -= amount;
            updateScreen(`Withdrew $${amount}. New balance: $${balance}`);
        } else {
            updateScreen("Insufficient balance.");
        }
    } else {
        updateScreen("Invalid amount entered.");
    }
}

function checkBalance() {
    if (!cardInserted) {
        updateScreen("Please insert your card first.");
        return;
    }
    updateScreen(`Current balance: $${balance}`);
}

function ejectCard() {
    cardInserted = false;
    enteredPIN = '';
    updateScreen("Card ejected. Please take your card.");
}

function updateScreen(message) {
    document.getElementById('screen').innerHTML = `<h1>ATM Machine</h1><p>${message}</p>`;
}
