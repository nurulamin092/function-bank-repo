console.log("bismillah");

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newDepositInputText = inputField.value;
    const newDepositInputAmount = parseFloat(newDepositInputText);
    inputField.value = '';
    return newDepositInputAmount;

}
function updateTotalField(totalInputField, amount) {
    // debugger;
    const total = document.getElementById(totalInputField);
    const previousTotalAmountText = total.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountText);
    const previousTotal = previousTotalAmount + amount;
    total.innerText = previousTotal;
}
function updatetBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const totalaBalanceAmount = parseFloat(balanceTotalText);
    if (isAdd == true) {
        const totalBalance = totalaBalanceAmount + amount;
        balanceTotal.innerText = totalBalance;
    }
    else {
        const totalBalance = totalaBalanceAmount - amount;
        balanceTotal.innerText = totalBalance;
    }
}

document.getElementById('deposit-btn').
    addEventListener('click', function () {
        console.log("Bismillah Heer Rahmair R-him");
        const newDepositInputAmount = getInputValue('deposit-input');
        updateTotalField('deposit-total', newDepositInputAmount);
        updatetBalance(newDepositInputAmount, true);

    });
document.getElementById('withdraw-btn').
    addEventListener('click', function () {
        console.log('Bilsmillah hir Rahmanir R-him');
        const newWithdrawInputAmount = getInputValue('withdraw-input')
        updateTotalField('withdraw-total', newWithdrawInputAmount)
        updatetBalance(newWithdrawInputAmount, false);
    });
