async function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

async function logBalance() {
  const balance = await getBalance();
  console.log(balance); // this will now log the actual balance
}

logBalance();