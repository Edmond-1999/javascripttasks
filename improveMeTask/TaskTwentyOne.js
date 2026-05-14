const account = {accountName: "David", balance: 500};

function checkAccountBalance(account){
    if (account.balance < 1000){
        return "Low Balance";
    }
    else {
        return "Sufficient Balance";
    }
}

console.log(checkAccountBalance(account));

