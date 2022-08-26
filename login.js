document.getElementById('btn-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passfield = document.getElementById('user-pass');
    const password = passfield.value;
    if (email === 'preya@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert("you can't enter this website")
    }
})