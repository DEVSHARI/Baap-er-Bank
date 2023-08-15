document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString )

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDeposit = parseFloat(previousDepositTotalString)

    const currentDepositTotal = previousDeposit + newDeposit
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('blance-total')
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalance + newDeposit
    balanceTotalElement.innerText = currentBalanceTotal;
    

    depositField.value = '';
})  