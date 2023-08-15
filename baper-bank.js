document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    
    if(email === 'sharif@obaidullah.com' && pass === 'leSecret'){
        window.location.href = 'bank-inside.html'
    }
    else{
        alert('Tui password vule gechis !! Dur ho samne theke !')
    }
})