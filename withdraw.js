document.getElementById('btn-withdraw').addEventListener('click', function () {
   
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);
    withdrawField.value = '';

    if (isNaN(newwithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
   

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

    // const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;
    // withdrawTotalElement.innerText = currentwithdrawTotal;
    // we are transfering this line  from here for validation

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousBalanceTotalString);

    // for validation

    if (newwithdrawAmount > previousbalanceTotal) {
        alert("sorry!! you don't have sufficient balance");
        return ;
    }
    const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;
    withdrawTotalElement.innerText = currentwithdrawTotal;

    const newBalanceTotal = previousbalanceTotal - newwithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;






})