document.getElementById('btn-deposit').addEventListener('click', function () {
    
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);
    


    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    const currentDepositTotal = previousdepositTotal + newdepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // balance total part

    const balanceTotalElement = document.getElementById('balance-total');
    previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



    depositField.value = '';

   
})