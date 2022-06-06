const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return balance;
    }
}

const MofijBank = bank('Mofij');
console.log(MofijBank(100));
