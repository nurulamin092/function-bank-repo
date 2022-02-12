console.log("bismillah");

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newDepositInputText = inputField.value;
    const newDepositInputAmount = parseFloat(newDepositInputText);
    inputField.value = '';
    return newDepositInputAmount;

}
function updateTotalField(totalInputField, amount) {
    const total = document.getElementById(totalInputField);
    const previousTotalAmountText = total.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountText);
    const previousTotal = previousTotalAmount + amount;
    total.innerText = previousTotal;

}

document.getElementById('deposit-btn').
    addEventListener('click', function () {
        console.log("Bismillah Heer Rahmair R-him");

        const newDepositInputAmount = getInputValue('deposit-input');
        updateTotalField('deposit-total', newDepositInputAmount);
        //Balance total 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const totalaBalanceAmount = parseFloat(balanceTotalText);
        const totalBalance = totalaBalanceAmount + newDepositInputAmount;
        balanceTotal.innerText = totalBalance;

        // console.log(depositTotal);
    });

//withdraw 

document.getElementById('withdraw-btn').
    addEventListener('click', function () {
        console.log('Bilsmillah hir Rahmanir R-him');
        const newWithdrawInputAmount = getInputValue('withdraw-input')
        updateTotalField('withdraw-total', newWithdrawInputAmount)
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const totalaBalanceAmount = parseFloat(balanceTotalText)
        const currentBalance = totalaBalanceAmount - newWithdrawInputAmount;
        balanceTotal.innerText = currentBalance;

    });
