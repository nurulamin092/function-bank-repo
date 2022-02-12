console.log("bismillah");

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newDepositInputText = inputField.value;
    const newDepositInputAmount = parseFloat(newDepositInputText);
    inputField.value = '';
    return newDepositInputAmount;

}

document.getElementById('deposit-btn').
    addEventListener('click', function () {
        console.log("Bismillah Heer Rahmair R-him");

        const newDepositInputAmount = getInputValue('deposit-input');
        const depositTotal = document.getElementById('deposit-total');
        const previousTotalAmountText = depositTotal.innerText;
        const previousDepositTotalAmount = parseFloat(previousTotalAmountText);
        const previousDepositTotal = previousDepositTotalAmount + newDepositInputAmount;
        depositTotal.innerText = previousDepositTotal;

        //Balance total 

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const totalaBalanceAmount = parseFloat(balanceTotalText);
        const totalBalance = totalaBalanceAmount + newDepositInputAmount;
        balanceTotal.innerText = totalBalance;
        // depositInputAmount.value = '';

        // console.log(depositTotal);
    });

//withdraw 

document.getElementById('withdraw-btn').
    addEventListener('click', function () {
        console.log('Bilsmillah hir Rahmanir R-him');

        const newWithdrawInputAmount = getInputValue('withdraw-input')

        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotalText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
        const previousWithdrawTotalAmount = previousWithdrawTotal + newWithdrawInputAmount;
        withdrawTotal.innerText = previousWithdrawTotalAmount;

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const totalaBalanceAmount = parseFloat(balanceTotalText)
        const currentBalance = totalaBalanceAmount - newWithdrawInputAmount;
        balanceTotal.innerText = currentBalance;

    });
