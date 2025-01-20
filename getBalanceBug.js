function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

const balance = getBalance();
console.log(balance); // this will log a promise, not the balance