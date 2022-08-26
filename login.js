document.getElementById('btn-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passfield = document.getElementById('user-pass');
    const password = passfield.value;
    if (email === 'preya@.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('You cannot enter this page')
    }
})