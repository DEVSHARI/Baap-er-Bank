document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(previousWithdrawString);
    

    const previousTotalBalance = document.getElementById('blance-total')
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const previousBalance = parseFloat(previousTotalBalanceString);

    withdrawField.value = '';

    if(newWithdraw > previousBalance){
        alert('Baaaper bank a eto TAKA nai !!!')
        return;
    }

    const currentWithdraw = previousTotalWithdraw + newWithdraw;
    previousWithdraw.innerText = currentWithdraw;

    const newTotalBalance = previousBalance - newWithdraw;
    previousTotalBalance.innerText = newTotalBalance;

})