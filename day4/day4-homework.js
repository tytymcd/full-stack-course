function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
            return balance;
        },
        withdraw: function (amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return balance;
        },
        getBalance: function () {
            return balance;
        }
    };
}

const transactions = [
    { type: "deposit", amount: 200, note: "Paycheck" },
    { type: "withdraw", amount: 45, note: "Groceries" },
    { type: "withdraw", amount: 120, note: "Rent portion" },
    { type: "deposit", amount: 50, note: "Refund" },
    { type: "withdraw", amount: 15, note: "Coffee" }
];

const p1 = transactions.filter(transaction => transaction.type === "deposit").reduce((total, transaction) => total + transaction.amount, 0);
const p2 = transactions.filter(transaction => transaction.type === "withdraw" && transaction.amount > 50);
const p3 = transactions.map(({ type, amount, note }) => `${type}: $${amount} - ${note}`);

console.log("Homework problem 1:", p1);
console.log("Homework problem 2:", p2);
console.log("Homework problem 3:", p3);